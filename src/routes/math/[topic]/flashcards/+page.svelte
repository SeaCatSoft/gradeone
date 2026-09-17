<script lang="ts">
  import { onMount } from 'svelte';
  import { load as loadProgress, save, gradeCard, isDue, type Progress } from '$lib/progress';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  let queue = $state<typeof data.cards>([]);
  let position = $state(0);
  let revealed = $state(false);
  let showHint = $state(false);
  let done = $state(0);

  const card = $derived(queue[position] ?? null);
  const finished = $derived(progress !== null && card === null);

  onMount(() => {
    const p = loadProgress();
    progress = p;
    startSession(p);
  });

  function startSession(p: Progress) {
    // Due cards first. If nothing is due, offer the whole deck rather than an
    // empty screen -- a student who wants to revise early should be able to.
    const due = data.cards.filter((c) => isDue(p, c.id));
    queue = shuffle(due.length ? due : data.cards);
    position = 0;
    revealed = false;
    showHint = false;
    done = 0;
  }

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // SM-2 takes 0-5. Four buttons is as much judgement as anyone makes
  // reliably, so the scale is collapsed to the four that matter.
  const GRADES = [
    { label: 'Again', grade: 1, key: '1', tone: 'again' },
    { label: 'Hard', grade: 3, key: '2', tone: 'hard' },
    { label: 'Good', grade: 4, key: '3', tone: 'good' },
    { label: 'Easy', grade: 5, key: '4', tone: 'easy' }
  ];

  function answer(grade: number) {
    if (!progress || !card) return;
    gradeCard(progress, card.id, grade);
    save(progress);
    done += 1;

    // A card marked "Again" comes back later in this same session, because
    // getting it wrong and never seeing it again teaches nothing today.
    if (grade < 3) queue = [...queue, card];

    position += 1;
    revealed = false;
    showHint = false;
  }

  function onKey(e: KeyboardEvent) {
    if (e.target instanceof HTMLElement && e.target.tagName === 'BUTTON') return;
    if (!revealed && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      revealed = true;
      return;
    }
    if (revealed) {
      const g = GRADES.find((x) => x.key === e.key);
      if (g) { e.preventDefault(); answer(g.grade); }
    }
  }

  const remaining = $derived(queue.length - position);
  const pct = $derived(queue.length ? (position / queue.length) * 100 : 0);
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
  <title>{data.topic.title} flashcards — Grade One</title>
</svelte:head>

<div class="wrap narrow">
  <nav class="crumbs small">
    <a href="/math/{data.topic.slug}">{data.topic.title}</a>
    <span aria-hidden="true">›</span>
    <span class="muted">Flashcards</span>
  </nav>

  {#if !progress}
    <div class="panel"><p class="muted">Loading your cards…</p></div>

  {:else if finished}
    <div class="panel done">
      <span class="tick" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <h1>Session complete</h1>
      <p class="muted">
        You reviewed <strong>{done}</strong> {done === 1 ? 'card' : 'cards'}. The ones you
        found hard will come back sooner than the ones you found easy.
      </p>
      <div class="row">
        <button class="primary" onclick={() => progress && startSession(progress)}>Go again</button>
        <a class="quiet" href="/math/{data.topic.slug}/practice">Try practice questions ›</a>
      </div>
    </div>

  {:else if card}
    <div class="status small">
      <span class="muted">{done} done <span aria-hidden="true">·</span> {remaining} to go</span>
      <span class="obj">{card.objective}</span>
    </div>
    <div class="track" aria-hidden="true"><span style="width:{pct}%"></span></div>

    <!-- Keyed on the card alone. Keying on `revealed` too would remount the
         whole card on reveal, re-animating the front the student is reading. -->
    {#key card.id}
      <div class="flashcard" class:open={revealed}>
        <div class="face front">{@html card.front}</div>

        {#if revealed}
          <div class="rule" aria-hidden="true"></div>
          <div class="face back">{@html card.back}</div>
        {:else if showHint && card.hint}
          <p class="hint small">{@html card.hint}</p>
        {/if}
      </div>
    {/key}

    {#if revealed}
      <div class="grades">
        {#each GRADES as g}
          <button class={g.tone} onclick={() => answer(g.grade)}>
            <span>{g.label}</span>
            <kbd>{g.key}</kbd>
          </button>
        {/each}
      </div>
      <p class="tip small muted">How well did you know it? This sets when you see it again.</p>
    {:else}
      <div class="row">
        <button class="primary wide" onclick={() => (revealed = true)}>
          <span>Show answer</span>
          <kbd class="on-brand">space</kbd>
        </button>
        {#if card.hint}
          <button onclick={() => (showHint = true)} disabled={showHint}>Hint</button>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .narrow { max-width: 600px; }
  .crumbs { display: flex; align-items: center; gap: .45rem; margin-bottom: 1.4rem; }
  .crumbs span[aria-hidden] { color: var(--text-tertiary); }

  .panel {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow-sm);
    padding: 2rem 1.75rem;
  }
  .done { text-align: center; }
  .done h1 { font-size: 1.5rem; letter-spacing: -.022em; margin: .2rem 0 .5rem; }
  .done p { margin: 0 auto 1.5rem; max-width: 42ch; }
  .tick {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    background: var(--correct-soft);
    color: var(--correct);
    /* Materialises with a slight overshoot: this follows a completed effort. */
    animation: pop var(--dur-slow) var(--ease-spring) both;
  }
  .tick svg { width: 22px; height: 22px; }
  @keyframes pop {
    from { transform: scale(.6); opacity: 0; }
    to   { transform: scale(1);  opacity: 1; }
  }

  .status { display: flex; justify-content: space-between; align-items: center; margin-bottom: .5rem; }
  .obj {
    color: var(--brand);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    background: var(--brand-soft);
    border-radius: var(--r-pill);
    padding: .1rem .5rem;
  }

  .track {
    height: 3px;
    border-radius: var(--r-pill);
    background: var(--surface-2);
    overflow: hidden;
    margin-bottom: 1.1rem;
  }
  .track > span {
    display: block;
    height: 100%;
    background: var(--brand);
    border-radius: inherit;
    transition: width var(--dur) var(--ease);
  }

  .flashcard {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow);
    padding: 2.25rem 1.75rem;
    min-height: 208px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* Arrives as a material rather than a fade: scale and opacity together. */
    animation: card-in var(--dur) var(--ease) both;
  }
  @keyframes card-in {
    from { transform: scale(.985) translateY(4px); opacity: 0; }
    to   { transform: none; opacity: 1; }
  }

  .face :global(p) { margin: 0 0 .75em; }
  .face :global(p:last-child) { margin-bottom: 0; }
  .front {
    font-size: 1.24rem;
    font-weight: 560;
    line-height: 1.38;
    letter-spacing: -.016em;
    text-wrap: balance;
  }
  .back {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    animation: reveal var(--dur-slow) var(--ease-spring) both;
  }
  .back :global(.katex-display) { overflow-x: auto; }
  @keyframes reveal {
    from { transform: translateY(-6px); opacity: 0; }
    to   { transform: none; opacity: 1; }
  }

  .rule { height: .5px; background: var(--separator); margin: 1.3rem 0; }

  .hint {
    margin: 1.1rem 0 0;
    color: var(--reward);
    background: var(--reward-soft);
    border-radius: var(--r);
    padding: .55rem .8rem;
    animation: reveal var(--dur) var(--ease) both;
  }

  .row { display: flex; gap: .6rem; margin-top: 1.1rem; align-items: stretch; }
  .wide { flex: 1; }
  .quiet { align-self: center; font-size: .92rem; color: var(--text-secondary); }
  .quiet:hover { color: var(--brand); }

  .grades { display: grid; grid-template-columns: repeat(4, 1fr); gap: .5rem; margin-top: 1.1rem; }
  .grades button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    padding: .6rem .3rem .5rem;
    font-size: .92rem;
    font-weight: 550;
  }
  /* Tone only on the extremes. Colouring all four would make none of them
     mean anything. */
  .grades .again { color: var(--wrong); }
  .grades .easy  { color: var(--correct); }

  kbd {
    font-family: inherit;
    font-size: .68rem;
    font-weight: 500;
    color: var(--text-tertiary);
    background: var(--surface-2);
    border-radius: 5px;
    padding: .05rem .34rem;
    line-height: 1.5;
  }
  .primary { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; }
  kbd.on-brand {
    color: var(--on-brand);
    background: color-mix(in srgb, var(--on-brand) 20%, transparent);
  }

  .tip { text-align: center; margin-top: .7rem; }

  @media (max-width: 460px) {
    .grades { grid-template-columns: repeat(2, 1fr); }
    .flashcard { padding: 1.75rem 1.25rem; }
  }
</style>
