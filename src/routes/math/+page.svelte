<script lang="ts">
  import { onMount } from 'svelte';
  import { load as loadProgress, topicMastery, type Progress } from '$lib/progress';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  function mastery(codes: string[]): number {
    return progress ? topicMastery(progress, codes) : 0;
  }
</script>

<svelte:head>
  <title>CSEC Mathematics — Grade One</title>
  <meta
    name="description"
    content="CSEC Mathematics study guide covering all three modules of the CXC syllabus effective from May–June 2027: lessons, flashcards and practice questions for every specific objective."
  />
</svelte:head>

<div class="wrap">
  <header class="page-head">
    <h1>CSEC Mathematics</h1>
    <p class="muted">
      Three modules, {data.modules.reduce((a, m) => a + m.topics.length, 0)} topics.
      Each module is sat separately and is worth one stackable credit.
    </p>
    <p class="small muted">
      Syllabus {data.syllabusCode} · effective for examinations from {data.effectiveFrom}
    </p>
  </header>

  {#each data.modules as mod}
    <section class="module">
      <div class="module-head">
        <div>
          <h2>Module {mod.number} — {mod.title}</h2>
          <p class="small muted">
            {mod.mcqCount} of the 60 Paper 01 questions · minimum {mod.minHours} hours
          </p>
        </div>
      </div>

      <div class="grid">
        {#each mod.topics as topic}
          {@const pct = mastery(topic.objectiveCodes)}
          {@const ready = topic.lessonCount > 0}
          <a class="card topic" class:empty={!ready} href="/math/{topic.slug}">
            <div class="topic-head">
              <h3>{topic.title}</h3>
              <span class="weight small" title="Questions on Paper 01">{topic.mcqCount}q</span>
            </div>

            <p class="small muted objectives">
              {topic.objectiveCount} objectives
              {#if topic.needsReview > 0}
                · <span class="flag">{topic.needsReview} unreviewed</span>
              {/if}
            </p>

            {#if ready}
              <div class="meter" aria-label="Mastery {pct} percent">
                <span style="width:{pct}%"></span>
              </div>
              <p class="small muted counts">
                {topic.lessonCount} lessons · {topic.cardCount} cards · {topic.questionCount} questions
              </p>
            {:else}
              <p class="small muted counts">No content yet</p>
            {/if}
          </a>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .page-head { margin-bottom: 2rem; }
  .page-head p { margin: .25rem 0; }

  .module { margin-bottom: 2.5rem; }
  .module-head { margin-bottom: .9rem; }
  .module-head h2 { margin-bottom: .15rem; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  .topic {
    padding: 1rem 1.1rem 1.1rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: .35rem;
    transition: border-color .15s ease, transform .1s ease;
  }
  .topic:hover { border-color: var(--brand); transform: translateY(-2px); }
  .topic.empty { opacity: .62; }
  .topic.empty:hover { transform: none; }

  .topic-head { display: flex; align-items: baseline; gap: .6rem; }
  .topic-head h3 { margin: 0; flex: 1; font-size: 1rem; }

  .weight {
    color: var(--text-muted);
    background: var(--surface-2);
    border-radius: 999px;
    padding: .1rem .45rem;
    white-space: nowrap;
  }

  .objectives { margin: 0; }
  .flag { color: var(--reward); font-weight: 600; }

  .meter {
    height: 6px;
    border-radius: 999px;
    background: var(--surface-2);
    overflow: hidden;
    margin-top: .3rem;
  }
  .meter > span {
    display: block;
    height: 100%;
    background: var(--reward);
    transition: width .4s ease;
  }

  .counts { margin: .1rem 0 0; }
</style>
