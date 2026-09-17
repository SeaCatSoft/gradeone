<script lang="ts">
  import { onMount } from 'svelte';
  import { load as loadProgress, topicMastery, type Progress } from '$lib/progress';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  function mastery(keys: string[]): number {
    return progress ? topicMastery(progress, keys) : 0;
  }

  const topicCount = $derived(data.modules.reduce((a, m) => a + m.topics.length, 0));
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
    <p class="eyebrow">Mathematics</p>
    <h1>Three modules,<br />{topicCount} topics.</h1>
    <p class="lede">
      Each module is sat separately and carries one stackable credit, so the syllabus
      is already broken into three things you can finish.
    </p>
    <p class="small ref">
      {data.syllabusCode} · effective for examinations from {data.effectiveFrom}
    </p>
  </header>

  {#each data.modules as mod}
    <section class="module">
      <div class="module-head">
        <h2>Module {mod.number}</h2>
        <p class="title">{mod.title}</p>
        <p class="small muted">
          {mod.mcqCount} of 60 Paper 01 questions · minimum {mod.minHours} hours
        </p>
      </div>

      <div class="grid">
        {#each mod.topics as topic}
          {@const pct = mastery(topic.objectiveKeys)}
          {@const ready = topic.lessonCount > 0}
          <a class="topic" class:empty={!ready} href="/math/{topic.slug}">
            <div class="top">
              <h3>{topic.title}</h3>
              <span class="weight" title="{topic.mcqCount} questions on Paper 01">
                {topic.mcqCount}
              </span>
            </div>

            <p class="small muted line">
              {topic.objectiveCount} objectives{#if topic.needsReview > 0}<span class="flag"
                  >· {topic.needsReview} unreviewed</span
                >{/if}
            </p>

            {#if ready}
              <div class="meter" role="img" aria-label="{pct}% mastery">
                <span style="width:{pct}%"></span>
              </div>
              <p class="small counts">
                {topic.lessonCount} lessons · {topic.cardCount} cards · {topic.questionCount} questions
              </p>
            {:else}
              <p class="small counts pending">Content not written yet</p>
            {/if}
          </a>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .page-head { max-width: 40ch; margin-bottom: clamp(2.5rem, 6vw, 4rem); }
  .page-head h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    line-height: 1.06;
    letter-spacing: -.026em;
    font-weight: 620;
    margin: .45rem 0 .9rem;
  }
  .lede {
    color: var(--text-secondary);
    font-size: 1.06rem;
    line-height: 1.5;
    letter-spacing: -.008em;
    margin: 0 0 1rem;
    max-width: 48ch;
    text-wrap: pretty;
  }
  .ref { color: var(--text-tertiary); margin: 0; }

  .module { margin-bottom: clamp(2.5rem, 5vw, 3.75rem); }
  .module-head { margin-bottom: 1.1rem; }
  .module-head h2 {
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--brand);
    margin: 0 0 .2rem;
  }
  .module-head .title {
    margin: 0 0 .15rem;
    font-size: 1.22rem;
    font-weight: 590;
    letter-spacing: var(--track-title);
    line-height: 1.25;
  }
  .module-head .small { margin: 0; }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(238px, 1fr));
    gap: .85rem;
  }

  .topic {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    padding: 1.05rem 1.15rem 1.15rem;
    border-radius: var(--r-lg);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: inherit;
    /* Lift rather than recolour on hover: the card comes toward you. */
    transition:
      transform var(--dur) var(--ease),
      box-shadow var(--dur) var(--ease);
  }
  @media (hover: hover) {
    .topic:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
  }
  .topic:active { transform: scale(.985); transition-duration: var(--dur-fast); }
  .topic.empty { box-shadow: none; background: transparent; outline: .5px solid var(--separator); }
  .topic.empty:hover { transform: none; box-shadow: none; }

  .top { display: flex; align-items: flex-start; gap: .75rem; }
  .top h3 {
    flex: 1;
    margin: 0;
    font-size: 1rem;
    font-weight: 590;
    line-height: 1.28;
    letter-spacing: var(--track-heading);
  }

  /* The Paper 01 weighting. A quiet number, but it tells a student where the
     marks actually are, which is the most useful fact on the card. */
  .weight {
    flex: none;
    min-width: 22px;
    height: 22px;
    padding: 0 .35rem;
    display: grid;
    place-items: center;
    border-radius: var(--r-sm);
    background: var(--surface-2);
    color: var(--text-secondary);
    font-size: .76rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
  .empty .weight { background: var(--separator); }

  .line { margin: 0; }
  .flag { color: var(--reward); font-weight: 550; margin-left: .3rem; }

  .meter {
    height: 5px;
    border-radius: var(--r-pill);
    background: var(--surface-2);
    overflow: hidden;
    margin: .45rem 0 .1rem;
  }
  .meter > span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--reward);
    transition: width var(--dur-slow) var(--ease);
  }

  .counts { margin: 0; color: var(--text-tertiary); }
  .pending { margin-top: .45rem; }
</style>
