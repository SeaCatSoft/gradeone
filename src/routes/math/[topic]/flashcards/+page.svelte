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
    { label: 'Again', grade: 1, key: '1' },
    { label: 'Hard', grade: 3, key: '2' },
    { label: 'Good', grade: 4, key: '3' },
    { label: 'Easy', grade: 5, key: '4' }
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
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
  <title>{data.topic.title} flashcards — Grade One</title>
</svelte:head>

<div class="wrap narrow">
  <p class="crumbs small">
    <a href="/math/{data.topic.slug}">{data.topic.title}</a>
    <span class="muted">/ Flashcards</span>
  </p>

  {#if !progress}
    <div class="card pad"><p class="muted">Loading your cards…</p></div>

  {:else if finished}
    <div class="card pad done">
      <h1>Session complete</h1>
      <p class="muted">
        You reviewed <strong>{done}</strong>
        {done === 1 ? 'card' : 'cards'}. Cards you found hard will come back sooner
        than the ones you found easy.
      </p>
      <div class="row">
        <button class="primary" onclick={() => progress && startSession(progress)}>
          Go again
        </button>
        <a class="link" href="/math/{data.topic.slug}/practice">Try practice questions</a>
      </div>
    </div>

  {:else if card}
    <div class="meta small muted">
      <span>{done} done · {queue.length - position} to go</span>
      <span>Objective {card.objective}</span>
    </div>

    <div class="card flashcard">
      <div class="face front">{@html card.front}</div>

      {#if revealed}
        <hr />
        <div class="face back">{@html card.back}</div>
      {:else if showHint && card.hint}
        <p class="hint small">{@html card.hint}</p>
      {/if}
    </div>

    {#if revealed}
      <div class="grades">
        {#each GRADES as g}
          <button onclick={() => answer(g.grade)}>
            {g.label}<span class="kbd">{g.key}</span>
          </button>
        {/each}
      </div>
      <p class="tip small muted">How well did you know it? This sets when you see it again.</p>
    {:else}
      <div class="row">
        <button class="primary wide" onclick={() => (revealed = true)}>
          Show answer<span class="kbd">space</span>
        </button>
        {#if card.hint}
          <button onclick={() => (showHint = true)} disabled={showHint}>Hint</button>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .narrow { max-width: 620px; }
  .crumbs { margin: 0 0 1rem; }
  .crumbs a { text-decoration: none; }

  .pad { padding: 1.5rem; }
  .done h1 { font-size: 1.4rem; }

  .meta { display: flex; justify-content: space-between; margin-bottom: .5rem; }

  .flashcard {
    padding: 2rem 1.5rem;
    min-height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .face :global(p) { margin: 0 0 .7em; }
  .face :global(p:last-child) { margin-bottom: 0; }
  .front { font-size: 1.18rem; font-weight: 550; }
  .back { font-size: 1rem; text-align: left; }
  .back :global(.katex-display) { overflow-x: auto; }

  hr { border: 0; border-top: 1px solid var(--border); width: 100%; margin: 1.25rem 0; }

  .hint {
    margin: 1rem 0 0;
    color: var(--reward);
    background: var(--reward-soft);
    border-radius: var(--radius);
    padding: .5rem .75rem;
  }

  .row { display: flex; gap: .6rem; margin-top: 1rem; align-items: center; }
  .wide { flex: 1; }
  .link { align-self: center; font-size: .9rem; }

  .grades { display: grid; grid-template-columns: repeat(4, 1fr); gap: .5rem; margin-top: 1rem; }
  .grades button { display: flex; flex-direction: column; align-items: center; gap: .2rem; padding: .6rem .3rem; }

  .kbd {
    font-size: .68rem;
    color: var(--text-muted);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0 .3rem;
    margin-left: .4rem;
  }
  .grades .kbd { margin-left: 0; }

  .tip { text-align: center; margin-top: .6rem; }

  @media (max-width: 480px) {
    .grades { grid-template-columns: repeat(2, 1fr); }
  }
</style>
