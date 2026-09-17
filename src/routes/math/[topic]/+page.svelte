<script lang="ts">
  import { onMount } from 'svelte';
  import { load as loadProgress, topicMastery, dueCount, type Progress } from '$lib/progress';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  const allCardIds = $derived(data.lessons.flatMap((l) => l.cardIds));
  const totalQuestions = $derived(data.lessons.reduce((a, l) => a + l.questionCount, 0));
  const objectiveCodes = $derived(data.objectives.map((o) => o.code));

  const mastery = $derived(progress ? topicMastery(progress, objectiveCodes) : 0);
  const due = $derived(progress ? dueCount(progress, allCardIds) : allCardIds.length);

  const hasContent = $derived(data.lessons.length > 0);

  const cardLine = $derived(
    progress
      ? `${allCardIds.length} cards · ${due} due now`
      : `${allCardIds.length} cards`
  );
</script>

<svelte:head>
  <title>{data.topic.title} — CSEC Mathematics — Grade One</title>
  <meta
    name="description"
    content="CSEC Mathematics: {data.topic.title}. {data.objectives.length} syllabus objectives with lessons, flashcards and practice questions."
  />
</svelte:head>

<div class="wrap">
  <nav class="crumbs small">
    <a href="/math">Mathematics</a>
    <span aria-hidden="true">›</span>
    <span class="muted">Module {data.module.number}</span>
  </nav>

  <header class="head">
    <div class="titles">
      <h1>{data.topic.title}</h1>
      <p class="small muted facts">
        {data.objectives.length} objectives
        <span aria-hidden="true">·</span>
        {data.topic.mcqCount} of 60 Paper 01 questions
        {#if data.topic.p2Marks}
          <span aria-hidden="true">·</span> {data.topic.p2Marks} Paper 02 marks
        {/if}
      </p>
      {#if !data.topic.p2Marks && data.topic.p2Group}
        <p class="small shared">
          Paper 02 marks are published for a group, not this topic alone:
          {data.topic.p2Group}
        </p>
      {/if}
    </div>

    {#if hasContent}
      <div class="mastery">
        <div class="ring" style="--pct:{mastery}">
          <span>{mastery}<em>%</em></span>
        </div>
        <span class="small muted">mastery</span>
      </div>
    {/if}
  </header>

  {#if hasContent}
    <div class="actions">
      <a class="action" href="/math/{data.topic.slug}/flashcards">
        <span class="glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
               stroke-linejoin="round">
            <rect x="3" y="6.5" width="14" height="11" rx="2" />
            <path d="M7.5 4h11a2 2 0 0 1 2 2v9" />
          </svg>
        </span>
        <span class="label">
          <strong>Flashcards</strong>
          <!-- Built as one string: Svelte eats the space before an inline
               {#if}, which rendered "33 cards· 32 due now". -->
          <span class="small muted">{cardLine}</span>
        </span>
      </a>

      <a class="action" href="/math/{data.topic.slug}/practice">
        <span class="glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 11.5l2.2 2.2L15.5 9" />
            <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
          </svg>
        </span>
        <span class="label">
          <strong>Practice questions</strong>
          <span class="small muted">{totalQuestions} questions</span>
        </span>
      </a>
    </div>

    <h2 class="section">Lessons</h2>
    <ol class="lessons">
      {#each data.lessons as lesson, i}
        <li>
          <a class="lesson" href="/math/{data.topic.slug}/{lesson.slug}">
            <span class="num">{i + 1}</span>
            <span class="body">
              <strong>{lesson.title}</strong>
              <span class="small muted">
                Objectives {lesson.objectives.join(', ')}
                {#if lesson.estMinutes}<span aria-hidden="true">·</span> {lesson.estMinutes} min{/if}
              </span>
            </span>
            {#if lesson.status !== 'published'}
              <span class="tag">{lesson.status}</span>
            {/if}
            <span class="chev" aria-hidden="true">›</span>
          </a>
        </li>
      {/each}
    </ol>
  {:else}
    <div class="empty">
      <p><strong>No lessons here yet.</strong></p>
      <p class="muted">
        The {data.objectives.length} syllabus objectives below are already in place. The
        teaching content for them is still to be written.
      </p>
    </div>
  {/if}

  <h2 class="section">Syllabus objectives</h2>
  <ul class="objectives">
    {#each data.objectives as o}
      <li>
        <span class="code">{o.code}</span>
        <span class="statement">
          {o.statement}
          {#if o.needsReview}
            <span class="review" title="Extracted text still to be checked against the printed syllabus">
              unreviewed
            </span>
          {/if}
        </span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .crumbs { display: flex; align-items: center; gap: .45rem; margin-bottom: 1.1rem; }
  .crumbs span[aria-hidden] { color: var(--text-tertiary); }

  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .titles { flex: 1; min-width: 260px; }
  .head h1 {
    font-size: clamp(1.9rem, 4.4vw, 2.9rem);
    line-height: 1.07;
    letter-spacing: -.026em;
    font-weight: 620;
    margin: 0 0 .5rem;
  }
  .facts { margin: 0; }
  .shared { margin: .35rem 0 0; color: var(--text-tertiary); max-width: 52ch; }

  /* A ring rather than a bar: it reads as a single figure of merit for the
     topic, where a bar would compete with the per-topic bars on the index. */
  .mastery { display: flex; flex-direction: column; align-items: center; gap: .3rem; }
  .ring {
    width: 68px;
    height: 68px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: conic-gradient(
      var(--reward) calc(var(--pct) * 1%),
      var(--surface-2) 0
    );
    transition: background var(--dur-slow) var(--ease);
  }
  .ring::before {
    content: '';
    grid-area: 1 / 1;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--bg);
  }
  .ring > span {
    grid-area: 1 / 1;
    font-size: 1.02rem;
    font-weight: 620;
    font-variant-numeric: tabular-nums;
    letter-spacing: -.02em;
  }
  .ring em { font-style: normal; font-size: .68em; font-weight: 500; color: var(--text-secondary); }

  .actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: .85rem;
  }
  .action {
    display: flex;
    align-items: center;
    gap: .85rem;
    padding: 1rem 1.15rem;
    border-radius: var(--r-lg);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: inherit;
    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  }
  @media (hover: hover) {
    .action:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
  }
  .action:active { transform: scale(.985); transition-duration: var(--dur-fast); }
  .label { display: flex; flex-direction: column; }
  .label strong { font-weight: 590; letter-spacing: var(--track-heading); }

  .glyph {
    flex: none;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: var(--r);
    background: var(--brand-soft);
    color: var(--brand);
  }
  .glyph svg { width: 19px; height: 19px; }

  .section {
    margin: clamp(2rem, 4vw, 3rem) 0 .9rem;
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--text-tertiary);
  }

  /* Grouped list: one surface, hairlines between rows, not separate cards. */
  .lessons {
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .lessons li + li { border-top: .5px solid var(--separator); }
  .lesson {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: .85rem 1.1rem;
    color: inherit;
    transition: background-color var(--dur-fast) var(--ease);
  }
  @media (hover: hover) {
    .lesson:hover { background: var(--surface-2); }
  }
  .lesson:active { background: var(--surface-2); }

  .num {
    flex: none;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: var(--r-sm);
    background: var(--brand-soft);
    color: var(--brand);
    font-size: .8rem;
    font-weight: 620;
    font-variant-numeric: tabular-nums;
  }
  .body { display: flex; flex-direction: column; flex: 1; min-width: 0; }
  .body strong { font-weight: 550; letter-spacing: var(--track-heading); }

  .tag {
    flex: none;
    font-size: .72rem;
    font-weight: 560;
    letter-spacing: var(--track-caption);
    background: var(--surface-2);
    color: var(--text-tertiary);
    border-radius: var(--r-pill);
    padding: .1rem .5rem;
  }
  .chev { flex: none; color: var(--text-tertiary); font-size: 1.1rem; line-height: 1; }

  .empty {
    padding: 1.4rem 1.5rem;
    border-radius: var(--r-lg);
    outline: .5px solid var(--separator);
  }
  .empty p { margin: 0 0 .35rem; max-width: 56ch; }
  .empty p:last-child { margin-bottom: 0; }

  .objectives {
    list-style: none;
    padding: 0;
    margin: 0;
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .objectives li {
    display: flex;
    gap: .9rem;
    padding: .7rem 1.1rem;
    font-size: .95rem;
  }
  .objectives li + li { border-top: .5px solid var(--separator); }
  .code {
    flex: none;
    width: 2.6rem;
    color: var(--brand);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    font-size: .88rem;
    padding-top: .06rem;
  }
  .statement { text-wrap: pretty; }
  .review {
    display: inline-block;
    font-size: .72rem;
    font-weight: 560;
    letter-spacing: var(--track-caption);
    color: var(--reward);
    background: var(--reward-soft);
    border-radius: var(--r-pill);
    padding: .05rem .5rem;
    margin-left: .35rem;
    vertical-align: 1px;
  }

  @media (max-width: 600px) {
    .head { gap: 1.25rem; }
    .mastery { flex-direction: row; align-items: center; gap: .6rem; }
  }
</style>
