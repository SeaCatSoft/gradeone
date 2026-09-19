<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { load as loadProgress, recordAnswer, type Progress } from '$lib/progress';
  import { saveAndSync } from '$lib/sync';
  import { session } from '$lib/session.svelte';

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
      recordAnswer(progress, q.objectiveKey, wasCorrect);
      saveAndSync(progress, session.user?.id ?? null);
    }
  }

  /** Structured questions carry a mark scheme, not an auto-markable answer. */
  function selfMark(got: boolean) {
    if (!q || !progress) return;
    wasCorrect = got;
    answered += 1;
    if (got) score += 1;
    recordAnswer(progress, q.objectiveKey, got);
    saveAndSync(progress, session.user?.id ?? null);
    next();
  }

  function next() {
    position += 1;
    reset();
  }

  const canCheck = $derived(
    q?.kind === 'mcq' ? picked !== null : q?.kind === 'numeric' ? typed.trim() !== '' : true
  );
  const ratio = $derived(answered ? score / answered : 0);
</script>

<svelte:head>
  <title>{data.topic.title} practice — Grade One</title>
</svelte:head>

<div class="wrap narrow">
  <nav class="crumbs small">
    <a href="{base}/math/{data.topic.slug}">{data.topic.title}</a>
    <span aria-hidden="true">›</span>
    <span class="muted">Practice</span>
  </nav>

  {#if !progress}
    <div class="panel"><p class="muted">Loading questions…</p></div>

  {:else if finished}
    <div class="panel done">
      <p class="eyebrow">Result</p>
      <h1><span class="score">{score}</span><span class="of">/{answered}</span></h1>
      <p class="muted verdict-line">
        {#if ratio >= 0.8}
          Strong. This topic is holding up.
        {:else if ratio >= 0.5}
          Getting there — worth another pass over the ones you missed.
        {:else}
          Go back over the lessons first. The working on each question shows exactly
          where it went wrong.
        {/if}
      </p>
      <div class="row">
        <button class="primary" onclick={start}>Try again</button>
        <a class="quiet" href="{base}/math/{data.topic.slug}">Back to {data.topic.title} ›</a>
      </div>
    </div>

  {:else if q}
    <div class="status small">
      <span class="muted">Question {position + 1} of {queue.length}</span>
      <span class="muted">{score}/{answered} correct</span>
    </div>
    <div class="track" aria-hidden="true">
      <span style="width:{(position / queue.length) * 100}%"></span>
    </div>

    {#key q.id}
      <div class="question">
        <div class="qmeta small">
          <span class="obj">{q.objective}</span>
          <span class="muted">
            {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
            <span aria-hidden="true">·</span> difficulty {q.difficulty}/5
          </span>
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
                  <span class="text">{@html opt.text}</span>
                </button>
              </li>
            {/each}
          </ul>

        {:else if q.kind === 'numeric'}
          <label class="numeric">
            <span class="eyebrow">Your answer</span>
            <input
              type="text"
              inputmode="decimal"
              bind:value={typed}
              disabled={checked}
              class:right={checked && wasCorrect}
              class:wrong={checked && !wasCorrect}
              onkeydown={(e) => e.key === 'Enter' && canCheck && !checked && check()}
              placeholder="Type a number"
            />
          </label>

        {:else}
          <p class="small muted note">
            A Paper 02 style question. Work it out on paper, then reveal the mark scheme
            and mark yourself honestly.
          </p>
        {/if}

        {#if checked}
          {#if q.kind !== 'structured'}
            <p class="verdict" class:ok={wasCorrect} class:no={!wasCorrect}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                {#if wasCorrect}<path d="M5 12.5l4.5 4.5L19 7.5" />
                {:else}<path d="M7 7l10 10M17 7L7 17" />{/if}
              </svg>
              <span>{wasCorrect ? 'Correct' : `Not quite — the answer is ${q.answer}`}</span>
            </p>
          {:else}
            <section class="reveal">
              <h3 class="eyebrow">Mark scheme</h3>
              <div class="rich">{@html q.answerHtml ?? ''}</div>
            </section>
          {/if}

          {#if q.working}
            <section class="reveal">
              <h3 class="eyebrow">Working</h3>
              <div class="rich">{@html q.working}</div>
            </section>
          {/if}
        {/if}
      </div>
    {/key}

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
  .narrow { max-width: 640px; }
  .crumbs { display: flex; align-items: center; gap: .45rem; margin-bottom: 1.4rem; }
  .crumbs span[aria-hidden] { color: var(--text-tertiary); }

  .panel {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow-sm);
    padding: 2rem 1.75rem;
  }
  .done { text-align: center; }
  .done h1 {
    margin: .3rem 0 .6rem;
    font-size: 3.2rem;
    line-height: 1;
    letter-spacing: -.035em;
    font-weight: 620;
    font-variant-numeric: tabular-nums;
    animation: pop var(--dur-slow) var(--ease-spring) both;
  }
  .score { color: var(--brand); }
  .of { color: var(--text-tertiary); font-size: .5em; font-weight: 500; }
  .verdict-line { margin: 0 auto 1.5rem; max-width: 40ch; }
  @keyframes pop {
    from { transform: scale(.85); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }

  .status { display: flex; justify-content: space-between; margin-bottom: .5rem; }
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

  .question {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow);
    padding: 1.4rem 1.5rem 1.5rem;
    animation: card-in var(--dur) var(--ease) both;
  }
  @keyframes card-in {
    from { transform: scale(.985) translateY(4px); opacity: 0; }
    to   { transform: none; opacity: 1; }
  }

  .qmeta { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: .9rem; }
  .obj {
    color: var(--brand);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    background: var(--brand-soft);
    border-radius: var(--r-pill);
    padding: .1rem .5rem;
  }

  .stem { font-size: 1.04rem; line-height: 1.6; }
  .stem :global(p) { margin: 0 0 .85em; text-wrap: pretty; }
  .stem :global(p:last-child) { margin-bottom: 0; }
  .stem :global(.katex-display) { overflow-x: auto; }

  .options { list-style: none; padding: 0; margin: 1.15rem 0 0; display: flex; flex-direction: column; gap: .5rem; }
  .option {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: .75rem;
    text-align: left;
    padding: .7rem .9rem;
    border-radius: var(--r);
    font-weight: 450;
    background: var(--surface-2);
    border-color: transparent;
  }
  .option:disabled { opacity: 1; }
  .text :global(p) { margin: 0; }

  .key {
    flex: none;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    background: var(--surface);
    color: var(--text-secondary);
    font-size: .78rem;
    font-weight: 620;
  }

  .selected { background: var(--brand-soft); box-shadow: inset 0 0 0 1.5px var(--brand); }
  .selected .key { background: var(--brand); color: var(--on-brand); }
  .right { background: var(--correct-soft); box-shadow: inset 0 0 0 1.5px var(--correct); }
  .right .key { background: var(--correct); color: var(--surface); }
  .wrong { background: var(--wrong-soft); box-shadow: inset 0 0 0 1.5px var(--wrong); }
  .wrong .key { background: var(--wrong); color: var(--surface); }

  .numeric { display: flex; flex-direction: column; gap: .4rem; margin-top: 1.15rem; }
  .numeric input {
    font: inherit;
    font-size: 1.1rem;
    font-variant-numeric: tabular-nums;
    padding: .6rem .85rem;
    border: 1px solid var(--separator-firm);
    border-radius: var(--r);
    background: var(--surface);
    color: var(--text);
    max-width: 240px;
    transition: border-color var(--dur-fast) var(--ease), background-color var(--dur-fast) var(--ease);
  }
  .numeric input:focus { border-color: var(--brand); outline: none; }
  .numeric input.right { border-color: var(--correct); background: var(--correct-soft); }
  .numeric input.wrong { border-color: var(--wrong); background: var(--wrong-soft); }

  .note { margin: 1.15rem 0 0; }

  .verdict {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin: 1.2rem 0 0;
    font-weight: 590;
    letter-spacing: var(--track-heading);
    animation: rise var(--dur) var(--ease-spring) both;
  }
  .verdict svg { width: 17px; height: 17px; flex: none; }
  .verdict.ok { color: var(--correct); }
  .verdict.no { color: var(--wrong); }
  @keyframes rise {
    from { transform: translateY(-5px); opacity: 0; }
    to   { transform: none; opacity: 1; }
  }

  .reveal {
    margin-top: 1.35rem;
    padding-top: 1.1rem;
    border-top: .5px solid var(--separator);
    animation: rise var(--dur-slow) var(--ease) both;
  }
  .reveal h3 { margin: 0 0 .5rem; }
  .rich { font-size: .98rem; line-height: 1.62; }
  .rich :global(p) { margin: 0 0 .85em; }
  .rich :global(p:last-child) { margin-bottom: 0; }
  .rich :global(.katex-display) { overflow-x: auto; }

  .row { display: flex; gap: .6rem; margin-top: 1.1rem; align-items: stretch; }
  .wide { flex: 1; }
  .quiet { align-self: center; font-size: .92rem; color: var(--text-secondary); }
  .quiet:hover { color: var(--brand); }
</style>
