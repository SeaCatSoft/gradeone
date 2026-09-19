/**
 * A spring in Apple's terms: response and damping ratio, not mass/stiffness.
 *
 *   response  — roughly how many seconds it takes to reach the target. Lower
 *               is snappier. Not a duration: a spring has no fixed end time.
 *   damping   — 1.0 settles without overshoot (the default for UI); below 1
 *               overshoots. Use ~0.8 only when the user's gesture carried
 *               momentum — a flick earns a bounce, a fade-in does not.
 *
 * Two properties make it feel physical rather than scripted:
 *
 *   1. It always starts from where the value IS, so it can be interrupted
 *      mid-flight and redirected without a jump. Grab a card that is springing
 *      back and it simply follows your finger from its current position.
 *   2. It accepts an initial velocity, so when a drag ends the animation
 *      continues at exactly the speed the finger was moving. No seam between
 *      "being dragged" and "animating".
 *
 * Mapping (unit mass): stiffness = (2π / response)², damping = 4π·ζ / response.
 */
export type SpringOptions = { response?: number; damping?: number };

const reducedMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export class Spring {
  value: number;
  velocity = 0;
  target: number;

  #k = 0;
  #c = 0;
  #raf = 0;
  #last = 0;
  #onUpdate: (v: number) => void;
  #onRest: (() => void) | null = null;

  constructor(initial: number, onUpdate: (v: number) => void, opts: SpringOptions = {}) {
    this.value = initial;
    this.target = initial;
    this.#onUpdate = onUpdate;
    this.configure(opts);
  }

  configure({ response = 0.4, damping = 1 }: SpringOptions) {
    this.#k = (2 * Math.PI / response) ** 2;
    this.#c = (4 * Math.PI * damping) / response;
  }

  /** Move to `target` from the current value, optionally inheriting a velocity (units/s). */
  to(target: number, opts: SpringOptions & { velocity?: number; onRest?: () => void } = {}) {
    if (opts.response !== undefined || opts.damping !== undefined) this.configure(opts);
    this.target = target;
    if (opts.velocity !== undefined) this.velocity = opts.velocity;
    this.#onRest = opts.onRest ?? null;

    // Reduced motion is not "no feedback": the value still arrives, it just
    // does not travel there.
    if (reducedMotion()) return this.jump(target);

    if (!this.#raf) {
      this.#last = performance.now();
      this.#raf = requestAnimationFrame(this.#tick);
    }
  }

  /** Set immediately and stop — used while a finger is dragging (1:1 tracking). */
  jump(v: number) {
    this.stop();
    this.value = v;
    this.target = v;
    this.velocity = 0;
    this.#onUpdate(v);
    const done = this.#onRest;
    this.#onRest = null;
    done?.();
  }

  stop() {
    if (this.#raf) cancelAnimationFrame(this.#raf);
    this.#raf = 0;
  }

  /**
   * Integrate the physics by `seconds` and report whether it has settled.
   * Public so the behaviour can be tested exactly, without a browser or a
   * frame clock (see backend/tools/test_spring.mjs).
   */
  advance(seconds: number): boolean {
    // Fixed small substeps keep a stiff spring stable at any frame rate.
    const step = 1 / 240;
    let dt = seconds;
    while (dt > 0) {
      const h = Math.min(step, dt);
      const force = -this.#k * (this.value - this.target) - this.#c * this.velocity;
      this.velocity += force * h;
      this.value += this.velocity * h;
      dt -= h;
    }
    return Math.abs(this.value - this.target) < 0.05 && Math.abs(this.velocity) < 0.5;
  }

  #tick = (now: number) => {
    // Clamp the frame gap so a backgrounded tab does not explode the physics.
    const dt = Math.min((now - this.#last) / 1000, 1 / 30);
    this.#last = now;

    if (this.advance(dt)) {
      this.#raf = 0;
      this.jump(this.target);
      return;
    }
    this.#onUpdate(this.value);
    this.#raf = requestAnimationFrame(this.#tick);
  };
}

/**
 * Where a flick is GOING, not where it was released — Apple's own projection
 * from the Designing Fluid Interfaces sample code. 0.998 is scroll-like decay.
 * Deciding against the projected point is what makes a quick short flick
 * commit while a slow long drag that stops short does not.
 */
export function project(velocity: number, decelerationRate = 0.998): number {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/**
 * Soft resistance past a boundary: the further you pull, the less it follows.
 * A hard stop reads as frozen; this reads as "responsive, but nothing more here".
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55): number {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/**
 * Pointer velocity from a short history of samples, in px/s. Using only the
 * last two points is noisy; using the whole drag lags. ~80ms is the window.
 */
export class VelocityTracker {
  #samples: { x: number; t: number }[] = [];

  add(x: number, t = performance.now()) {
    this.#samples.push({ x, t });
    while (this.#samples.length > 2 && t - this.#samples[0].t > 80) this.#samples.shift();
  }

  reset() { this.#samples = []; }

  /**
   * A finger that stopped has no velocity, however fast it was moving before.
   * Without the age check, drag-pause-release read the samples from BEFORE the
   * pause and flung the card as if it had been thrown — grading a card the
   * student had only hesitated over. Callers should also add() the release
   * point, so a pause shows up as a flat final sample.
   */
  get velocity(): number {
    return this.velocityAt(performance.now());
  }

  velocityAt(now: number): number {
    const s = this.#samples;
    if (s.length < 2) return 0;
    const a = s[0], b = s[s.length - 1];
    if (now - b.t > 60) return 0;
    const dt = (b.t - a.t) / 1000;
    return dt > 0 ? (b.x - a.x) / dt : 0;
  }
}

/**
 * What a released swipe means, decided against where the flick is heading.
 * Pure, so the rules are testable: a short fast flick commits, a long slow
 * drag that stops short does not, and a drag that paused before release
 * (velocity 0) is judged on position alone.
 */
export function swipeOutcome(x: number, velocity: number, width: number): 'right' | 'left' | 'back' {
  const landing = x + project(velocity);
  const threshold = width * 0.33;
  if (landing > threshold) return 'right';
  if (landing < -threshold) return 'left';
  return 'back';
}
