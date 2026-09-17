<script lang="ts">
  import { onMount } from 'svelte';
  import { load as loadProgress, save, recordAnswer, type Progress } from '$lib/progress';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  let queue = $state<typeof data.questions>([]);
  let position = $state(0);
  let picked = $state<string | null>(null);
  let typed = $state('');
  let checked = $state(false);
  let wasCorrect = $state(false);
  let score = $state(0);
  let answered = $state(0);

  const q = $derived(queue[position] ?? null);
  const finished = $derived(progress !== null && q === null && queue.length > 0);

  onMount(() => {
    progress = loadProgress();
    start();
  });

  function start() {
    queue = shuffle(data.questions);
    position = 0;
    score = 0;
    answered = 0;
    reset();
  }

  function reset() {
    picked = null;
    typed = '';
    checked = false;
    wasCorrect = false;
  }

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Numeric answers are compared as numbers so "17" and "17.0" both pass. */
  function numericMatches(given: string, expected: string): boolean {
    const g = Number(given.replace(/[,\s]/g, ''));
    const e = Number(expected.replace(/[,\s]/g, ''));
    if (!Number.isFinite(g) || !Number.isFinite(e)) {
      return given.trim().toLowerCase() === expected.trim().toLowerCase();
    }
    return Math.abs(g - e) < 1e-9;
  }

  function check() {
    if (!q || !progress) return;
    if (q.kind === 'mcq') wasCorrect = picked === q.answer;
    else if (q.kind === 'numeric') wasCorrect = numericMatches(typed, q.answer);
    else wasCorrect = false;          // structured is self-marked below

    checked = true;
    if (q.kind !== 'structured') {
      answered += 1;
      if (wasCorrect) score += 1;
      recordAnswer(progress, q.objective, wasCorrect);
      save(progress);
    }
  }

  /** Structured questions carry a mark scheme, not an auto-markable answer. */
  function selfMark(got: boolean) {
    if (!q || !progress) return;
    wasCorrect = got;
    answered += 1;
    if (got) score += 1;
    recordAnswer(progress, q.objective, got);
    save(progress);
    next();
  }

  function next() {
    position += 1;
    reset();
  }

  const canCheck = $derived(
    q?.kind === 'mcq' ? picked !== null : q?.kind === 'numeric' ? typed.trim() !== '' : true
  );
</script>

<svelte:head>
  <title>{data.topic.title} practice — Grade One</title>
</svelte:head>

<div class="wrap narrow">
  <p class="crumbs small">
    <a href="/math/{data.topic.slug}">{data.topic.title}</a>
    <span class="muted">/ Practice</span>
  </p>

  {#if !progress}
    <div class="card pad"><p class="muted">Loading questions…</p></div>

  {:else if finished}
    <div class="card pad">
      <h1>{score} out of {answered}</h1>
      <p class="muted">
        {#if answered && score / answered >= 0.8}
          Strong. This topic is holding up.
        {:else if answered && score / answered >= 0.5}
          Getting there — worth another pass over the ones you missed.
        {:else}
          Go back over the lessons before trying again; the working on each
          question shows where it went wrong.
        {/if}
      </p>
      <div class="row">
        <button class="primary" onclick={start}>Try again</button>
        <a class="link" href="/math/{data.topic.slug}">Back to {data.topic.title}</a>
      </div>
    </div>

  {:else if q}
    <div class="meta small muted">
      <span>Question {position + 1} of {queue.length}</span>
      <span>{score}/{answered} correct</span>
    </div>
    <div class="track" aria-hidden="true">
      <span style="width:{(position / queue.length) * 100}%"></span>
    </div>

    <div class="card question">
      <div class="qmeta small muted">
        <span>Objective {q.objective}</span>
        <span>{q.marks} {q.marks === 1 ? 'mark' : 'marks'} · difficulty {q.difficulty}/5</span>
      </div>

      <div class="stem">{@html q.stem}</div>

      {#if q.kind === 'mcq' && q.options}
        <ul class="options">
          {#each q.options as opt}
            <li>
              <button
                class="option"
                class:selected={picked === opt.key}
                class:right={checked && opt.key === q.answer}
                class:wrong={checked && picked === opt.key && opt.key !== q.answer}
                disabled={checked}
                onclick={() => (picked = opt.key)}
              >
                <span class="key">{opt.key}</span>
                <span>{@html opt.text}</span>
              </button>
            </li>
          {/each}
        </ul>

      {:else if q.kind === 'numeric'}
        <label class="numeric">
          <span class="small muted">Your answer</span>
          <input
            type="text"
            inputmode="decimal"
            bind:value={typed}
            disabled={checked}
            onkeydown={(e) => e.key === 'Enter' && canCheck && !checked && check()}
            placeholder="Type a number"
          />
        </label>

      {:else}
        <p class="small muted structured-note">
          This is a Paper 02 style question. Work it out on paper, then reveal the mark
          scheme and mark yourself honestly.
        </p>
      {/if}

      {#if checked}
        {#if q.kind !== 'structured'}
          <p class="verdict" class:ok={wasCorrect} class:no={!wasCorrect}>
            {wasCorrect ? 'Correct' : 'Not quite — the answer is ' + q.answer}
          </p>
        {:else}
          <div class="scheme">
            <h3 class="small">Mark scheme</h3>
            {@html q.answerHtml ?? ''}
          </div>
        {/if}

        {#if q.working}
          <div class="working">
            <h3 class="small">Working</h3>
            {@html q.working}
          </div>
        {/if}
      {/if}
    </div>

    <div class="row">
      {#if !checked}
        <button class="primary wide" onclick={check} disabled={!canCheck}>
          {q.kind === 'structured' ? 'Reveal mark scheme' : 'Check answer'}
        </button>
      {:else if q.kind === 'structured'}
        <button class="wide" onclick={() => selfMark(false)}>I got it wrong</button>
        <button class="primary wide" onclick={() => selfMark(true)}>I got it right</button>
      {:else}
        <button class="primary wide" onclick={next}>
          {position + 1 === queue.length ? 'See results' : 'Next question'}
        </button>
      {/if}
    </div>
  {/if}
</div>

<style>
  .narrow { max-width: 660px; }
  .crumbs { margin: 0 0 1rem; }
  .crumbs a { text-decoration: none; }
  .pad { padding: 1.5rem; }
  .pad h1 { font-size: 1.6rem; }

  .meta { display: flex; justify-content: space-between; margin-bottom: .4rem; }
  .track { height: 4px; border-radius: 999px; background: var(--surface-2); overflow: hidden; margin-bottom: 1rem; }
  .track > span { display: block; height: 100%; background: var(--brand); transition: width .3s ease; }

  .question { padding: 1.25rem 1.35rem; }
  .qmeta { display: flex; justify-content: space-between; gap: 1rem; margin-bottom: .75rem; }
  .stem :global(p) { margin: 0 0 .8em; }
  .stem :global(.katex-display) { overflow-x: auto; }

  .options { list-style: none; padding: 0; margin: 1rem 0 0; display: flex; flex-direction: column; gap: .5rem; }
  .option {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: .7rem;
    text-align: left;
    padding: .65rem .8rem;
  }
  .option:disabled { opacity: 1; }
  .key {
    font-weight: 700;
    color: var(--text-muted);
    flex: none;
    width: 1.2rem;
  }
  .selected { border-color: var(--brand); background: var(--brand-soft); }
  .right { border-color: var(--correct); background: var(--correct-soft); }
  .right .key { color: var(--correct); }
  .wrong { border-color: var(--wrong); background: var(--wrong-soft); }
  .wrong .key { color: var(--wrong); }

  .numeric { display: flex; flex-direction: column; gap: .3rem; margin-top: 1rem; }
  .numeric input {
    font: inherit;
    padding: .55rem .7rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    color: var(--text);
    max-width: 240px;
  }

  .structured-note { margin: 1rem 0 0; }

  .verdict { margin: 1.1rem 0 0; font-weight: 600; }
  .verdict.ok { color: var(--correct); }
  .verdict.no { color: var(--wrong); }

  .scheme, .working {
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .scheme h3, .working h3 {
    text-transform: uppercase;
    letter-spacing: .06em;
    color: var(--text-muted);
    font-size: .7rem;
    margin: 0 0 .4rem;
  }
  .working :global(p), .scheme :global(p) { margin: 0 0 .8em; }
  .working :global(p:last-child), .scheme :global(p:last-child) { margin-bottom: 0; }
  .working :global(.katex-display), .scheme :global(.katex-display) { overflow-x: auto; }

  .row { display: flex; gap: .6rem; margin-top: 1rem; align-items: center; }
  .wide { flex: 1; }
  .link { align-self: center; font-size: .9rem; }
</style>
