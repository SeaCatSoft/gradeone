<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { load as loadProgress, gradeCard, isDue, type Progress } from '$lib/progress';
  import { saveAndSync } from '$lib/sync';
  import { session } from '$lib/session.svelte';
  import { Spring, VelocityTracker, rubberband, swipeOutcome } from '$lib/spring';
  import { themeVars } from '$lib/modules';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  let queue = $state<typeof data.cards>([]);
  let position = $state(0);
  let revealed = $state(false);
  let showHint = $state(false);
  let done = $state(0);

  const card = $derived(queue[position] ?? null);
  const finished = $derived(progress !== null && card === null);
  const remaining = $derived(queue.length - position);
  const pct = $derived(queue.length ? (position / queue.length) * 100 : 0);

  onMount(() => {
    const p = loadProgress();
    progress = p;
    startSession(p);
  });

  function startSession(p: Progress) {
    // Due cards first. If nothing is due, offer the whole deck rather than an
    // empty screen — a student who wants to revise early should be able to.
    const due = data.cards.filter((c) => isDue(p, c.id));
    queue = shuffle(due.length ? due : data.cards);
    position = 0;
    revealed = false;
    showHint = false;
    done = 0;
    spring.jump(0);
  }

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // SM-2 takes 0-5; four buttons is as much judgement as anyone makes reliably.
  const GRADES = [
    { label: 'Again', grade: 1, key: '1', tone: 'again' },
    { label: 'Hard', grade: 3, key: '2', tone: 'hard' },
    { label: 'Good', grade: 4, key: '3', tone: 'good' },
    { label: 'Easy', grade: 5, key: '4', tone: 'easy' }
  ];

  function record(grade: number) {
    if (!progress || !card) return;
    gradeCard(progress, card.id, grade);
    // Local write is immediate; the push to Supabase is debounced.
    saveAndSync(progress, session.user?.id ?? null);
    done += 1;
    // "Again" brings the card back later in this same session: getting it
    // wrong and never seeing it again teaches nothing today.
    if (grade < 3) queue = [...queue, card];
    position += 1;
    revealed = false;
    showHint = false;
  }

  /* ------------------------------------------------------------ gesture
     The card follows the finger 1:1, from where it was grabbed. On release,
     the decision is made against where the flick is GOING (momentum
     projection), and the exit continues at the finger's own speed. A card
     springing back can be grabbed again mid-flight: the spring always starts
     from the card's current position. */

  let x = $state(0);
  let width = $state(360);
  let flying = false;
  const spring = new Spring(0, (v) => (x = v), { response: 0.4, damping: 1 });
  const vt = new VelocityTracker();

  let topEl: HTMLElement | undefined = $state();
  let pointer: number | null = null;
  let startX = 0;
  let originX = 0;
  let moved = false;

  function down(e: PointerEvent) {
    if (flying || !card) return;
    width = topEl?.offsetWidth ?? width;
    spring.stop();                       // interrupt: take over from wherever it is
    originX = x;
    startX = e.clientX;
    moved = false;
    pointer = e.pointerId;
    vt.reset();
    vt.add(e.clientX);
    // Capture keeps the drag tracking even when the finger leaves the card.
    // It can throw for some synthetic or stylus pointers; tracking still works
    // without it, so a failure here must not break the gesture.
    try { topEl?.setPointerCapture(e.pointerId); } catch { /* keep going */ }
  }

  function move(e: PointerEvent) {
    if (e.pointerId !== pointer) return;
    const dx = e.clientX - startX;
    // ~8px of hysteresis before a touch becomes a drag, so a tap stays a tap.
    if (!moved && Math.abs(dx) < 8) return;
    moved = true;
    vt.add(e.clientX);
    const target = originX + dx;
    // Before the answer is showing there is nothing to grade, so the card
    // resists — soft, progressive, never a dead stop.
    x = revealed ? target : rubberband(target, width, 0.35);
  }

  function up(e: PointerEvent) {
    if (e.pointerId !== pointer) return;
    pointer = null;
    if (!moved) {
      if (!revealed && x === 0) revealed = true;       // a tap turns the card over
      else spring.to(0, { damping: 0.8 });
      return;
    }
    vt.add(e.clientX);                    // a pause before release reads as zero speed
    const v = vt.velocity;
    if (!revealed) {
      spring.to(0, { velocity: v, response: 0.35, damping: 0.8 });
      return;
    }
    const outcome = swipeOutcome(x, v, width);
    if (outcome === 'right') fling(4, v);
    else if (outcome === 'left') fling(1, v);
    // Not far enough: back to centre, carrying the finger's velocity. A little
    // bounce is earned here because the gesture itself had momentum.
    else spring.to(0, { velocity: v, response: 0.38, damping: 0.78 });
  }

  function cancel(e: PointerEvent) {
    if (e.pointerId !== pointer) return;
    pointer = null;
    spring.to(0, { damping: 0.85 });
  }

  /** Send the card off-screen in the direction of its grade, then record it. */
  function fling(grade: number, velocity = 0) {
    if (flying || !card) return;
    flying = true;
    width = topEl?.offsetWidth ?? width;
    const dir = grade >= 3 ? 1 : -1;
    // Keep at least a brisk pace so a button press still reads as a throw.
    const v = dir * Math.max(Math.abs(velocity), 1400);
    spring.to(dir * width * 1.35, {
      velocity: v,
      response: 0.32,
      damping: 1,
      onRest: () => {
        record(grade);
        spring.jump(0);
        flying = false;
      }
    });
  }

  function onKey(e: KeyboardEvent) {
    if (e.target instanceof HTMLElement && ['BUTTON', 'INPUT'].includes(e.target.tagName)) return;
    if (!card) return;
    if (!revealed && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      revealed = true;
      return;
    }
    if (revealed) {
      const g = GRADES.find((x) => x.key === e.key);
      if (g) { e.preventDefault(); fling(g.grade); }
    }
  }

  /* ------------------------------------------------------ derived visuals */
  // How far the top card has travelled toward leaving, 0..1. The cards behind
  // rise by the same amount, so the next card is already in place by the time
  // the top one is gone — and the hand-off has no jump.
  const lift = $derived(Math.min(Math.abs(x) / (width * 0.55), 1));
  const tilt = $derived(Math.max(-14, Math.min(14, x / 24)));
  const goodness = $derived(revealed ? Math.min(Math.max(x / (width * 0.3), 0), 1) : 0);
  const againness = $derived(revealed ? Math.min(Math.max(-x / (width * 0.3), 0), 1) : 0);

  function behindStyle(i: number) {
    const d = i - lift;                                   // depth, in cards
    const scale = 1 - 0.055 * d;
    const y = 14 * d;
    const op = d <= 1 ? 1 : d <= 2 ? 1 - 0.45 * (d - 1) : Math.max(0, 0.55 * (3 - d));
    return `transform:translateY(${y}px) scale(${scale});opacity:${op};z-index:${10 - i}`;
  }

  const visible = $derived(
    queue.slice(position, position + 4).map((c, i) => ({ c, i, key: position + i }))
  );
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
  <title>{data.topic.title} flashcards — Grade One</title>
</svelte:head>

<div class="page" style={themeVars(data.topic.module)}>
  <a class="back-link" href="{base}/{data.subject}/{data.topic.slug}"><Icon name="chevron-left" size={17} />{data.topic.title}</a>

  {#if !progress}
    <div class="panel"><p class="muted">Loading your cards…</p></div>

  {:else if finished}
    <div class="panel done">
      <span class="tick" aria-hidden="true"><Icon name="check" size={26} /></span>
      <h1>Session complete</h1>
      <p class="muted">
        You reviewed <strong>{done}</strong> {done === 1 ? 'card' : 'cards'}. The ones you found hard
        come back sooner than the ones you found easy.
      </p>
      <div class="row">
        <button class="primary" onclick={() => progress && startSession(progress)}>Go again</button>
        <a class="quiet" href="{base}/{data.subject}/{data.topic.slug}/practice">Practice questions <Icon name="chevron" size={13} /></a>
      </div>
    </div>

  {:else if card}
    <div class="status">
      <span>{done} done · {remaining} to go</span>
      <span class="obj">{card.objective}</span>
    </div>
    <div class="track" aria-hidden="true"><span style="transform:scaleX({pct / 100})"></span></div>

    <div class="stack">
      {#each visible as v (v.key)}
        {#if v.i === 0}
          <div
            class="card top"
            class:open={revealed}
            bind:this={topEl}
            style="transform:translateX({x}px) rotate({tilt}deg);z-index:10"
            onpointerdown={down}
            onpointermove={move}
            onpointerup={up}
            onpointercancel={cancel}
            role="button"
            tabindex="0"
            aria-label={revealed ? 'Flashcard, answer showing. Swipe right if you knew it, left if not.' : 'Flashcard. Tap to show the answer.'}
          >
            {#if revealed}
              <span class="stamp good" style="opacity:{goodness}">Good</span>
              <span class="stamp again" style="opacity:{againness}">Again</span>
            {/if}

            <div class="face front">{@html v.c.front}</div>

            {#if revealed}
              <div class="rule" aria-hidden="true"></div>
              <div class="face back">{@html v.c.back}</div>
            {:else if showHint && v.c.hint}
              <p class="hint">{@html v.c.hint}</p>
            {:else}
              <p class="tap">Tap to turn over</p>
            {/if}
          </div>
        {:else}
          <!-- Cards behind are blank: their content would only distract. -->
          <div class="card behind" style={behindStyle(v.i)} aria-hidden="true"></div>
        {/if}
      {/each}
    </div>

    {#if revealed}
      <p class="swipe-help">Swipe right if you knew it, left if you didn't — or choose:</p>
      <div class="grades">
        {#each GRADES as g}
          <button class={g.tone} onclick={() => fling(g.grade)}>
            <span>{g.label}</span>
            <kbd>{g.key}</kbd>
          </button>
        {/each}
      </div>
    {:else}
      <div class="row">
        <button class="primary wide" onclick={() => (revealed = true)}>
          Show answer <kbd class="on-brand">space</kbd>
        </button>
        {#if card.hint}
          <button onclick={() => (showHint = true)} disabled={showHint}>Hint</button>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .page { max-width: 560px; margin: 0 auto; }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: .1rem;
    margin: 0 0 1.2rem -.3rem;
    font-weight: 500;
    color: var(--mod);
  }
  .back-link:hover { color: var(--mod); opacity: .8; }

  .panel {
    padding: 2rem 1.75rem;
    border-radius: 26px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .done { text-align: center; }
  .done h1 { margin: .3rem 0 .5rem; font-size: 1.6rem; font-weight: 720; letter-spacing: -.026em; }
  .done p { margin: 0 auto 1.5rem; max-width: 40ch; }
  .tick {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    margin: 0 auto .9rem;
    border-radius: 50%;
    color: #fff;
    background: linear-gradient(145deg, #a6f04a, #4cb61c);
    animation: pop var(--dur-slow) var(--ease-spring) both;
  }
  @keyframes pop { from { transform: scale(.55); opacity: 0; } to { transform: scale(1); opacity: 1; } }

  .status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
    font-size: .86rem;
    color: var(--text-secondary);
  }
  .obj {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: var(--mod);
    background: var(--mod-soft);
    padding: .1rem .55rem;
    border-radius: var(--r-pill);
  }
  .track { height: 4px; border-radius: var(--r-pill); background: var(--surface-2); overflow: hidden; margin-bottom: 1.4rem; }
  .track span {
    display: block;
    height: 100%;
    background: var(--mod);
    transform-origin: left;
    transition: transform var(--dur) var(--ease);
  }

  /* --------------------------------------------------------------- stack */
  .stack { position: relative; margin-bottom: 1.8rem; }
  .card {
    border-radius: 28px;
    background: var(--surface);
  }
  .top {
    position: relative;
    min-height: 260px;
    padding: 2.4rem 1.8rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: grab;
    touch-action: pan-y;                /* vertical scroll still works */
    user-select: none;
    transform-origin: 50% 120%;         /* tilts like a card held at the bottom */
    will-change: transform;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .06), 0 24px 48px -26px rgba(0, 0, 0, .35);
    outline: none;
  }
  .top:active { cursor: grabbing; }
  .top:focus-visible { box-shadow: 0 0 0 3px color-mix(in srgb, var(--mod) 55%, transparent), 0 24px 48px -26px rgba(0, 0, 0, .35); }
  .behind {
    position: absolute;
    inset: 0;
    /* Scale from the BOTTOM edge. From the top, the shrink (5.5% of ~260px)
       cancelled the 14px drop and the deck hid exactly behind the top card. */
    transform-origin: 50% 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .05), 0 10px 24px -16px rgba(0, 0, 0, .3);
    pointer-events: none;
  }

  .face :global(p) { margin: 0 0 .75em; }
  .face :global(p:last-child) { margin-bottom: 0; }
  .front { font-size: 1.32rem; font-weight: 620; line-height: 1.35; letter-spacing: -.018em; text-wrap: balance; }
  .back {
    font-size: 1.02rem;
    line-height: 1.6;
    text-align: left;
    animation: reveal var(--dur-slow) var(--ease-spring) both;
  }
  .back :global(.katex-display) { overflow-x: auto; }
  @keyframes reveal { from { transform: translateY(-8px); opacity: 0; } to { transform: none; opacity: 1; } }
  .rule { height: .5px; background: var(--separator); margin: 1.4rem 0; }
  .tap { margin: 1.4rem 0 0; font-size: .82rem; color: var(--text-tertiary); }
  .hint {
    margin: 1.2rem 0 0;
    padding: .6rem .85rem;
    border-radius: 14px;
    font-size: .92rem;
    color: var(--reward);
    background: var(--reward-soft);
    animation: reveal var(--dur) var(--ease) both;
  }

  /* The verdict stamps appear in the direction of travel, telegraphing the
     outcome before the finger lets go. */
  .stamp {
    position: absolute;
    top: 1.1rem;
    padding: .2rem .7rem;
    border-radius: 10px;
    border: 2.5px solid currentColor;
    font-size: .95rem;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
    pointer-events: none;
  }
  .stamp.good { left: 1.2rem; color: #34c759; transform: rotate(-10deg); }
  .stamp.again { right: 1.2rem; color: #ff3b30; transform: rotate(10deg); }

  /* ------------------------------------------------------------ controls */
  .swipe-help { margin: 0 0 .6rem; text-align: center; font-size: .84rem; color: var(--text-secondary); }
  .grades { display: grid; grid-template-columns: repeat(4, 1fr); gap: .5rem; }
  .grades button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    padding: .7rem .3rem .55rem;
    border-radius: 16px;
    border: 0;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    font-weight: 620;
  }
  .grades .again { color: var(--wrong); }
  .grades .easy { color: var(--correct); }

  .row { display: flex; gap: .6rem; align-items: stretch; }
  .wide { flex: 1; }
  .primary { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; padding: .8rem 1.1rem; border-radius: 16px; }
  .row > button:not(.primary) { border-radius: 16px; }
  .quiet { display: inline-flex; align-items: center; gap: .2rem; align-self: center; font-size: .92rem; color: var(--text-secondary); }
  .quiet:hover { color: var(--mod); }

  kbd {
    font-family: inherit;
    font-size: .66rem;
    font-weight: 600;
    padding: .05rem .35rem;
    border-radius: 5px;
    color: var(--text-tertiary);
    background: var(--surface-2);
  }
  kbd.on-brand { color: var(--on-brand); background: color-mix(in srgb, var(--on-brand) 22%, transparent); }

  @media (max-width: 460px) {
    .grades { grid-template-columns: repeat(2, 1fr); }
    .top { padding: 2rem 1.3rem 1.7rem; }
  }
  @media (hover: none) {
    kbd { display: none; }
  }
</style>
