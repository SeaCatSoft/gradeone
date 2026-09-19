<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Rings from '$lib/components/Rings.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { load as loadProgress, topicMastery, type Progress } from '$lib/progress';
  import { theme, themeVars } from '$lib/modules';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  const mastery = (keys: string[]) => (progress ? topicMastery(progress, keys) : 0);
  const moduleKeys = (m: (typeof data.modules)[number]) => m.topics.flatMap((t) => t.objectiveKeys);

  // Short names for the tiles. Trimming the long titles by string surgery left
  // "Fundamentals of" and "Higher Concepts in"; naming them outright cannot.
  const SHORT: Record<number, string> = { 1: 'Fundamentals', 2: 'Intermediate', 3: 'Higher Concepts' };
</script>

<svelte:head>
  <title>CSEC Mathematics — Grade One</title>
  <meta
    name="description"
    content="CSEC Mathematics study guide covering all three modules of the CXC syllabus effective from May–June 2027: lessons, flashcards and practice questions for every specific objective."
  />
</svelte:head>

<header class="head">
  <p class="eyebrow">CSEC · {data.syllabusCode}</p>
  <h1 class="large-title">Mathematics</h1>
  <p class="subtitle">Three modules, each sat on its own and worth one credit. Effective from {data.effectiveFrom}.</p>
</header>

<!-- Module overview: three surfaces in their own colours, like category tiles. -->
<div class="modules">
  {#each data.modules as mod}
    {@const pct = mastery(moduleKeys(mod))}
    <a class="module" href="#module-{mod.number}" style={themeVars(mod.number)}>
      <span class="numeral">{mod.number}</span>
      <span class="mod-tag">Module {mod.number}</span>
      <strong>{SHORT[mod.number] ?? mod.title}</strong>
      <span class="meta">{mod.topics.length} topics · {mod.mcqCount} of 60 Paper 01 questions</span>
      <span class="mod-bar" role="progressbar" aria-label="Module {mod.number} mastery" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        <span style="transform:scaleX({pct / 100})"></span>
      </span>
      <span class="mod-pct">{pct}% mastery</span>
    </a>
  {/each}
</div>

{#each data.modules as mod}
  {@const th = theme(mod.number)}
  <section class="module-section" id="module-{mod.number}" style={themeVars(mod.number)}>
    <div class="section-title">
      <p class="mod-eyebrow">Module {mod.number}</p>
      <h2>{mod.title}</h2>
      <p class="small muted">Minimum {mod.minHours} hours of study</p>
    </div>

    <div class="topics">
      {#each mod.topics as topic}
        {@const pct = mastery(topic.objectiveKeys)}
        {@const ready = topic.lessonCount > 0}
        <a class="topic" class:empty={!ready} href="{base}/math/{topic.slug}">
          <div class="topic-top">
            {#if ready}
              <Rings rings={[{ value: pct / 100, color: th.solid, track: th.soft, label: 'Mastery' }]}
                     size={40} stroke={5.5} />
            {:else}
              <span class="locked"><Icon name="lock" size={17} /></span>
            {/if}
            <span class="weight" title="{topic.mcqCount} questions on Paper 01">
              {topic.mcqCount}<small>Qs</small>
            </span>
          </div>

          <h3>{topic.title}</h3>
          <p class="line">
            {topic.objectiveCount} objectives{#if topic.needsReview > 0}<span class="flag">{`· ${topic.needsReview} unreviewed`}</span>{/if}
          </p>
          <p class="state">
            {#if ready}
              {pct}% mastery · {topic.lessonCount} lessons
            {:else}
              Coming soon
            {/if}
          </p>
        </a>
      {/each}
    </div>
  </section>
{/each}

<style>
  .head { margin-bottom: 1.6rem; }
  .head .eyebrow { margin: 0 0 .2rem; }

  /* --------------------------------------------------------- module tiles */
  .modules {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .9rem;
  }
  .module {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 176px;
    padding: 1.1rem 1.2rem 1.15rem;
    border-radius: 18px;
    overflow: hidden;
    color: #fff;
    background: linear-gradient(150deg, var(--mod-from), var(--mod-to));
    box-shadow: 0 1px 2px var(--shade), 0 18px 40px -20px var(--mod-edge);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .module:hover { color: #fff; }
  .module:active { transform: scale(.98); }
  /* An oversized numeral, cropped by the tile — the module's name, set large. */
  .numeral {
    position: absolute;
    right: -.08em;
    bottom: -.28em;
    font-family: var(--font-display);
    font-size: 8.5rem;
    font-weight: 700;
    line-height: 1;
    color: rgba(255, 255, 255, .14);
    pointer-events: none;
  }
  .mod-tag {
    position: relative;
    align-self: flex-start;
    margin-bottom: auto;
    padding: .2rem .65rem;
    border-radius: var(--r-pill);
    font-size: .74rem;
    font-weight: 650;
    letter-spacing: .06em;
    text-transform: uppercase;
    background: rgba(0, 0, 0, .22);
  }
  .module strong { position: relative; margin-top: 1rem; font-family: var(--font-display); font-size: 1.35rem; font-weight: 680; line-height: 1.2; }
  .module .meta { position: relative; font-size: .82rem; font-weight: 600; margin-top: .15rem; }
  .mod-bar { position: relative; display: block; height: 10px; margin-top: .8rem; border-radius: var(--r-pill); background: rgba(0, 0, 0, .25); overflow: hidden; }
  .mod-bar span { display: block; height: 100%; background: #fff; transform-origin: left; }
  .mod-pct { position: relative; margin-top: .3rem; font-size: .78rem; font-weight: 650; }

  @media (max-width: 760px) {
    .modules { grid-template-columns: 1fr; }
    .module { min-height: 128px; }
  }

  /* ------------------------------------------------------ module sections */
  .module-section { scroll-margin-top: 1.5rem; margin-top: clamp(2.5rem, 5vw, 3.4rem); }
  .section-title { margin-bottom: 1rem; }
  .mod-eyebrow {
    margin: 0 0 .15rem;
    font-weight: 650;
    font-size: .76rem;
    font-weight: 700;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--mod-text);
  }
  .section-title h2 { margin: 0 0 .1rem; font-size: 1.55rem; }
  .section-title p { margin: 0; }

  .topics {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    gap: .85rem;
  }
  .topic {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.05rem 1.05rem;
    border-radius: 16px;
    background: var(--surface);
    box-shadow: var(--shadow);
    color: inherit;
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .topic:hover { color: inherit; }
  .topic:active { transform: scale(.98); }
  .topic.empty { background: var(--surface-2); box-shadow: inset 0 0 0 1px var(--line); }
  .topic.empty:active { transform: none; }

  .topic-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: .8rem; }
  .locked {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--surface);
    box-shadow: inset 0 0 0 1px var(--line);
    color: var(--text-tertiary);
  }
  .weight {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--mod-text);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.02em;
  }
  .weight small { font-size: .62em; font-weight: 650; margin-left: 2px; opacity: .8; letter-spacing: .02em; }
  .empty .weight { color: var(--text-tertiary); }

  h3 { margin: 0 0 .2rem; font-size: 1.1rem; font-weight: 600; line-height: 1.25; }
  .line { margin: 0; font-size: .82rem; font-weight: 600; color: var(--text-secondary); }
  .flag { margin-left: .3em; color: var(--reward); font-weight: 560; }
  .state { margin: auto 0 0; padding-top: .7rem; font-size: .82rem; font-weight: 650; color: var(--mod-text); }
  .empty .state { color: var(--text-tertiary); font-weight: 500; }
</style>
