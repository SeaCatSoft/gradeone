/**
 * The motion rules behind the flashcard swipe, tested exactly.
 *
 *   npm run test:motion
 *
 * Gesture feel is easy to break without noticing, and a browser test cannot
 * judge it reliably: a background tab throttles animation frames, so springs
 * stall mid-flight and the results are noise. These drive the physics and the
 * decision rules directly, on a fake clock.
 *
 * Node 24 strips the TypeScript types from spring.ts itself, so this tests the
 * shipping code, not a copy of it.
 */
import { Spring, VelocityTracker, swipeOutcome, project, rubberband } from '../../src/lib/spring.ts';

let failed = 0;
const check = (name, ok, detail = '') => {
  console.log(`${ok ? '  ok  ' : '  FAIL'}  ${name}${detail ? '   ' + detail : ''}`);
  if (!ok) failed++;
};

/** Run a spring to rest on a fixed 60fps clock, recording what it did. */
function run(spring, maxSeconds = 3) {
  let t = 0, peak = spring.value, trough = spring.value, t95 = null;
  const start = spring.value, span = spring.target - start;
  while (t < maxSeconds) {
    const settled = spring.advance(1 / 60);
    t += 1 / 60;
    peak = Math.max(peak, spring.value);
    trough = Math.min(trough, spring.value);
    if (t95 === null && span !== 0 && (spring.value - start) / span >= 0.95) t95 = t;
    if (settled) return { t, peak, trough, t95, settled: true };
  }
  return { t, peak, trough, t95, settled: false };
}

const noop = () => {};

// ------------------------------------------------------------------ springs
{
  const s = new Spring(0, noop, { response: 0.4, damping: 1 });
  s.target = 100;
  const r = run(s);
  check('critically damped (1.0) never overshoots', r.peak <= 100.01, `peak ${r.peak.toFixed(2)}`);
  check('response 0.4s reaches 95% in about a third of a second', r.t95 !== null && r.t95 < 0.4, `t95 ${r.t95?.toFixed(3)}s`);
  check('and comes to rest', r.settled, `${r.t.toFixed(2)}s`);
}
{
  const s = new Spring(0, noop, { response: 0.38, damping: 0.78 });
  s.target = 100;
  const r = run(s);
  check('under-damped (0.78) overshoots a little, as a flick should', r.peak > 100.5 && r.peak < 110, `peak ${r.peak.toFixed(2)}`);
  check('and still settles', r.settled);
}
{
  // Velocity handoff: a card released moving right at 1000px/s, springing back
  // to 0, must CONTINUE right for a moment. Snapping straight back would be the
  // visible seam between dragging and animating.
  const s = new Spring(0, noop, { response: 0.38, damping: 0.78 });
  s.target = 0;
  s.velocity = 1000;
  s.advance(1 / 60);
  check('released velocity carries through (no seam)', s.value > 0, `first frame +${s.value.toFixed(1)}px`);
  const r = run(s);
  check('then returns home', r.settled && Math.abs(s.value) < 0.05);
}
{
  // Interruption: re-targeting mid-flight starts from where it IS.
  const s = new Spring(0, noop, { response: 0.4, damping: 1 });
  s.target = 200;
  for (let i = 0; i < 6; i++) s.advance(1 / 60);
  const here = s.value;
  const v = s.velocity;
  s.target = 0;
  s.advance(1 / 240);
  // Continuity means: it moves only a few pixels in that instant (a jump would
  // snap ~100px, to the old target or to the new one), and it is still carried
  // the old way by its momentum before the new target turns it around.
  const step = s.value - here;
  check('redirecting mid-flight continues from where it is, no jump',
        Math.abs(step) < 5 && Math.sign(step) === Math.sign(v),
        `${here.toFixed(1)} -> ${s.value.toFixed(1)} while moving ${v.toFixed(0)}px/s`);
  const r = run(s);
  check('then turns and settles at the new target', r.settled && Math.abs(s.value) < 0.05);
}

// --------------------------------------------------------- velocity tracker
{
  const vt = new VelocityTracker();
  for (let i = 0; i <= 8; i++) vt.add(i * 10, 1000 + i * 10);   // 10px every 10ms
  check('tracks a moving finger', Math.abs(vt.velocityAt(1080) - 1000) < 1, `${vt.velocityAt(1080).toFixed(0)} px/s`);
  check('a finger that has stopped has no velocity', vt.velocityAt(1080 + 150) === 0);
  vt.add(80, 1230);                                               // release after a pause
  check('adding the release point after a pause reads zero', vt.velocityAt(1230) === 0);
}

// ---------------------------------------------------------- swipe decisions
{
  const W = 560;                          // a typical card width; threshold is 185px
  check('short fast flick commits', swipeOutcome(60, 1500, W) === 'right', `lands at ${(60 + project(1500)).toFixed(0)}px`);
  check('long slow drag that stopped short springs back', swipeOutcome(150, 0, W) === 'back');
  check('dragged past the line and let go commits', swipeOutcome(200, 0, W) === 'right');
  check('flick left commits left', swipeOutcome(-40, -1200, W) === 'left');
  // The skill's rule: decide on where the finger is GOING. Dragged right, then
  // flicked back left before letting go -> the student changed their mind.
  check('reversing before release follows the finger', swipeOutcome(150, -900, W) === 'left');
  check('the drag-pause-release bug stays fixed', swipeOutcome(120, 0, W) === 'back',
        'a hesitation must not grade the card');
}

// ------------------------------------------------------------- rubber band
{
  const a = rubberband(100, 560, 0.35), b = rubberband(400, 560, 0.35);
  check('rubber band resists (moves less than the finger)', a < 100 && b < 400, `100 -> ${a.toFixed(0)}, 400 -> ${b.toFixed(0)}`);
  check('but never stops dead (always still moves)', b > a);
}

console.log('\n' + (failed ? `${failed} motion check(s) FAILED` : 'all motion checks passed'));
process.exit(failed ? 1 : 0);
