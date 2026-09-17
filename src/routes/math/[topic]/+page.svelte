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
</script>

<svelte:head>
  <title>{data.topic.title} — CSEC Mathematics — Grade One</title>
  <meta
    name="description"
    content="CSEC Mathematics: {data.topic.title}. {data.objectives.length} syllabus objectives with lessons, flashcards and practice questions."
  />
</svelte:head>

<div class="wrap">
  <p class="crumbs small">
    <a href="/math">Mathematics</a>
    <span class="muted">/ Module {data.module.number}</span>
  </p>

  <header class="head">
    <div>
      <h1>{data.topic.title}</h1>
      <p class="muted small">
        {data.objectives.length} objectives ·
        {data.topic.mcqCount} of the 60 Paper 01 questions
        {#if data.topic.p2Marks}
          · {data.topic.p2Marks} Paper 02 marks
        {:else if data.topic.p2Group}
          · Paper 02 marks shared: {data.topic.p2Group}
        {/if}
      </p>
    </div>

    {#if hasContent}
      <div class="meter-wrap">
        <div class="meter" aria-label="Mastery {mastery} percent">
          <span style="width:{mastery}%"></span>
        </div>
        <span class="small muted">{mastery}% mastery</span>
      </div>
    {/if}
  </header>

  {#if hasContent}
    <div class="actions">
      <a class="action card" href="/math/{data.topic.slug}/flashcards">
        <strong>Flashcards</strong>
        <span class="small muted">
          {allCardIds.length} cards{#if progress} · {due} due now{/if}
        </span>
      </a>
      <a class="action card" href="/math/{data.topic.slug}/practice">
        <strong>Practice questions</strong>
        <span class="small muted">{totalQuestions} questions</span>
      </a>
    </div>

    <h2 class="section">Lessons</h2>
    <ol class="lessons">
      {#each data.lessons as lesson, i}
        <li>
          <a class="lesson card" href="/math/{data.topic.slug}/{lesson.slug}">
            <span class="num">{i + 1}</span>
            <span class="body">
              <strong>{lesson.title}</strong>
              <span class="small muted">
                Objectives {lesson.objectives.join(', ')}
                {#if lesson.estMinutes} · about {lesson.estMinutes} min{/if}
              </span>
            </span>
            {#if lesson.status !== 'published'}
              <span class="tag small">{lesson.status}</span>
            {/if}
          </a>
        </li>
      {/each}
    </ol>
  {:else}
    <div class="card empty">
      <p><strong>No lessons here yet.</strong></p>
      <p class="muted small">
        The {data.objectives.length} syllabus objectives below are already in place — the
        teaching content for them is still to be written.
      </p>
    </div>
  {/if}

  <h2 class="section">Syllabus objectives</h2>
  <ul class="objectives">
    {#each data.objectives as o}
      <li class:unreviewed={o.needsReview}>
        <span class="code">{o.code}</span>
        <span>
          {o.statement}
          {#if o.needsReview}
            <span class="flag small" title="Extracted text still to be checked against the printed syllabus">unreviewed</span>
          {/if}
        </span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .crumbs { margin: 0 0 .75rem; }
  .crumbs a { text-decoration: none; }

  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  .head h1 { margin-bottom: .2rem; }
  .head p { margin: 0; }

  .meter-wrap { display: flex; flex-direction: column; gap: .3rem; min-width: 180px; }
  .meter { height: 8px; border-radius: 999px; background: var(--surface-2); overflow: hidden; }
  .meter > span { display: block; height: 100%; background: var(--reward); transition: width .4s ease; }

  .actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
  .action {
    padding: 1rem 1.15rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: .2rem;
    transition: border-color .15s ease, transform .1s ease;
  }
  .action:hover { border-color: var(--brand); transform: translateY(-2px); }

  .section { margin: 2.25rem 0 .85rem; font-size: 1.05rem; }

  .lessons { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .6rem; }
  .lesson {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: .85rem 1rem;
    text-decoration: none;
    color: inherit;
    transition: border-color .15s ease;
  }
  .lesson:hover { border-color: var(--brand); }
  .num {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    flex: none;
    border-radius: 8px;
    background: var(--brand-soft);
    color: var(--brand);
    font-weight: 700;
    font-size: .85rem;
  }
  .body { display: flex; flex-direction: column; flex: 1; }
  .tag {
    background: var(--surface-2);
    color: var(--text-muted);
    border-radius: 999px;
    padding: .1rem .5rem;
  }

  .empty { padding: 1.25rem; }
  .empty p { margin: 0 0 .3rem; }

  .objectives { list-style: none; padding: 0; margin: 0; }
  .objectives li {
    display: flex;
    gap: .8rem;
    padding: .5rem 0;
    border-bottom: 1px solid var(--border);
  }
  .code { color: var(--text-muted); font-variant-numeric: tabular-nums; flex: none; width: 3rem; font-size: .9rem; }
  .flag {
    color: var(--reward);
    background: var(--reward-soft);
    border-radius: 999px;
    padding: .05rem .45rem;
    margin-left: .35rem;
    white-space: nowrap;
  }
</style>
