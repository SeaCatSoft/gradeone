<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { load as loadProgress, topicMastery, dueCount, type Progress } from '$lib/progress';
  import { themeVars } from '$lib/modules';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  const allCardIds = $derived(data.lessons.flatMap((l) => l.cardIds));
  const totalQuestions = $derived(data.lessons.reduce((a, l) => a + l.questionCount, 0));
  const objectiveKeys = $derived(data.objectives.map((o) => o.key));

  const mastery = $derived(progress ? topicMastery(progress, objectiveKeys) : 0);
  const due = $derived(progress ? dueCount(progress, allCardIds) : allCardIds.length);
  const hasContent = $derived(data.lessons.length > 0);
  const read = (slug: string) => Boolean(progress?.lessons[`math/${data.topic.slug}/${slug}`]);
  const readCount = $derived(data.lessons.filter((l) => read(l.slug)).length);
</script>

<svelte:head>
  <title>{data.topic.title} — CSEC Mathematics — Grade One</title>
  <meta
    name="description"
    content="CSEC Mathematics: {data.topic.title}. {data.objectives.length} syllabus objectives with lessons, flashcards and practice questions."
  />
</svelte:head>

<div style={themeVars(data.module.number)}>
  <a class="back-link" href="{base}/math"><Icon name="chevron-left" size={17} />Mathematics</a>

  <header class="hero">
    <div class="hero-text">
      <p class="hero-eyebrow">Module {data.module.number}</p>
      <h1>{data.topic.title}</h1>
      <p class="facts">
        {[`${data.objectives.length} objectives`, `${data.topic.mcqCount} of 60 Paper 01 questions`,
          data.topic.p2Marks ? `${data.topic.p2Marks} Paper 02 marks` : ''].filter(Boolean).join(' · ')}
      </p>
    </div>
    {#if hasContent}
      <div class="hero-score">
        <span class="pct">{mastery}<small>%</small></span>
        <span class="pct-label">mastery</span>
      </div>
    {/if}
    {#if hasContent}
      <div class="hero-bar" role="progressbar" aria-label="Topic mastery" aria-valuemin={0} aria-valuemax={100} aria-valuenow={mastery}>
        <span style="transform:scaleX({mastery / 100})"></span>
      </div>
    {/if}
  </header>

  {#if !data.topic.p2Marks && data.topic.p2Group}
    <p class="shared small muted">
      Paper 02 marks are published for a group of topics, not this one alone: {data.topic.p2Group}.
    </p>
  {/if}

  {#if hasContent}
    <div class="modes">
      <a class="mode" href="{base}/math/{data.topic.slug}/flashcards">
        <span class="glyph review"><Icon name="cards" size={22} /></span>
        <span class="mode-text">
          <strong>Flashcards</strong>
          <span>{progress ? `${due} due of ${allCardIds.length}` : `${allCardIds.length} cards`}</span>
        </span>
        <Icon name="chevron" size={16} />
      </a>
      <a class="mode" href="{base}/math/{data.topic.slug}/practice">
        <span class="glyph practice"><Icon name="check" size={22} /></span>
        <span class="mode-text">
          <strong>Practice</strong>
          <span>{totalQuestions} questions</span>
        </span>
        <Icon name="chevron" size={16} />
      </a>
    </div>

    <div class="section-head">
      <h2>Lessons</h2>
      <span class="small muted">{readCount} of {data.lessons.length} read</span>
    </div>
    <ol class="list">
      {#each data.lessons as lesson, i}
        {@const done = read(lesson.slug)}
        <li>
          <a href="{base}/math/{data.topic.slug}/{lesson.slug}">
            <span class="num" class:done>
              {#if done}<Icon name="check" size={16} />{:else}{i + 1}{/if}
            </span>
            <span class="body">
              <strong>{lesson.title}</strong>
              <span>{[`Objectives ${lesson.objectives.join(', ')}`, lesson.estMinutes ? `${lesson.estMinutes} min` : ''].filter(Boolean).join(' · ')}</span>
            </span>
            {#if lesson.status !== 'published'}<span class="tag">{lesson.status}</span>{/if}
            <span class="chev"><Icon name="chevron" size={15} /></span>
          </a>
        </li>
      {/each}
    </ol>
  {:else}
    <div class="empty">
      <span class="empty-glyph"><Icon name="doc" size={24} /></span>
      <strong>Lessons are on the way</strong>
      <p>The {data.objectives.length} syllabus objectives for {data.topic.title} are already mapped below. The teaching content for them is still being written.</p>
    </div>
  {/if}

  <!-- The full objective list is reference material, not the first thing a
       student needs, so it sits one level deeper — shown on request. -->
  <details class="syllabus" open={!hasContent}>
    <summary>
      <span>Syllabus objectives</span>
      <span class="count">{data.objectives.length}</span>
      <span class="disclose"><Icon name="chevron" size={15} /></span>
    </summary>
    <ul>
      {#each data.objectives as o}
        <li>
          <span class="code">{o.code}</span>
          <span>
            {o.statement}
            {#if o.needsReview}<span class="review-flag" title="Still to be checked against the printed syllabus">unreviewed</span>{/if}
          </span>
        </li>
      {/each}
    </ul>
  </details>
</div>

<style>
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: .1rem;
    margin: 0 0 1rem -.3rem;
    font-size: .98rem;
    font-weight: 500;
    color: var(--mod-text);
  }
  .back-link:hover { color: var(--mod-text); opacity: .8; }

  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.1rem 1.5rem;
    padding: clamp(1.35rem, 3.5vw, 2rem);
    border-radius: 28px;
    color: #fff;
    background: linear-gradient(145deg, var(--mod-from), var(--mod-to));
    box-shadow: 0 6px 0 var(--mod-edge);
  }
  .hero-text { flex: 1 1 320px; min-width: 0; }
  .hero-eyebrow {
    display: inline-block;
    margin: 0 0 .5rem;
    padding: .2rem .65rem;
    border-radius: var(--r-pill);
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
    background: rgba(0, 0, 0, .22);
  }
  .hero h1 { margin: 0 0 .45rem; font-size: clamp(2rem, 5vw, 2.9rem); font-weight: 700; line-height: 1.04; }
  .facts { margin: 0; font-size: .95rem; font-weight: 600; }
  .hero-score { flex: none; display: flex; flex-direction: column; align-items: flex-end; }
  .pct { font-family: var(--font-display); font-size: 3rem; font-weight: 700; line-height: 1; font-variant-numeric: tabular-nums; }
  .pct small { font-size: .5em; font-weight: 600; }
  .pct-label { font-size: .8rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  .hero-bar { flex: 1 0 100%; height: 16px; border-radius: var(--r-pill); background: rgba(0, 0, 0, .25); overflow: hidden; }
  .hero-bar span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: #fff;
    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .12);
    transform-origin: left;
    transition: transform var(--dur-slow) var(--ease-spring);
  }

  .shared { margin: .8rem .3rem 0; }

  .modes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: .85rem;
    margin-top: 1.1rem;
  }
  .mode {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: 1rem 1.1rem;
    border-radius: 22px;
    background: var(--surface);
    box-shadow: var(--shadow);
    color: var(--text-tertiary);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .mode:hover { color: var(--text-tertiary); }
  .mode:active { transform: translateY(5px); box-shadow: inset 0 0 0 2px var(--line), 0 0 0 var(--line); }
  .glyph { flex: none; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 15px; color: #fff; }
  .glyph.review { background: #c2410c; box-shadow: 0 4px 0 #7c2d12; }
  .glyph.practice { background: #0369a1; box-shadow: 0 4px 0 #0c4a6e; }
  .mode-text { flex: 1; display: flex; flex-direction: column; }
  .mode-text strong { color: var(--text); font-family: var(--font-display); font-size: 1.15rem; font-weight: 600; }
  .mode-text span { color: var(--text-secondary); font-size: .88rem; font-weight: 700; }

  /* ------------------------------------------------------- grouped list */
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--surface);
    border-radius: 22px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .list li + li a { border-top: 2px solid var(--separator); }
  .list a {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: .85rem 1.1rem;
    color: inherit;
    transition: background-color var(--dur-fast) var(--ease);
  }
  .list a:hover { color: inherit; background: var(--surface-2); }
  .num {
    flex: none;
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--mod-text);
    background: var(--mod-soft);
    font-variant-numeric: tabular-nums;
  }
  .num.done { color: #fff; background: var(--mod); box-shadow: 0 3px 0 var(--mod-edge); }
  .body { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .body strong { font-weight: 800; }
  .body span { font-size: .84rem; font-weight: 600; color: var(--text-secondary); }
  .tag {
    flex: none;
    font-size: .7rem;
    font-weight: 600;
    padding: .1rem .5rem;
    border-radius: var(--r-pill);
    color: var(--text-tertiary);
    background: var(--surface-2);
  }
  .chev { display: flex; color: var(--text-tertiary); }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .35rem;
    margin-top: 1.1rem;
    padding: 1.4rem 1.5rem;
    border-radius: 22px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .empty-glyph { color: var(--mod-text); margin-bottom: .2rem; }
  .empty strong { font-size: 1.08rem; letter-spacing: -.012em; }
  .empty p { margin: 0; color: var(--text-secondary); max-width: 56ch; }

  /* ------------------------------------------------------------ syllabus */
  .syllabus {
    margin-top: 2rem;
    background: var(--surface);
    border-radius: 22px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  summary {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .95rem 1.1rem;
    cursor: pointer;
    list-style: none;
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
  }
  summary::-webkit-details-marker { display: none; }
  .count {
    font-size: .76rem;
    font-weight: 650;
    padding: .05rem .5rem;
    border-radius: var(--r-pill);
    color: var(--text-secondary);
    background: var(--surface-2);
  }
  .disclose { margin-left: auto; display: flex; color: var(--text-tertiary); transition: transform var(--dur) var(--ease); }
  details[open] .disclose { transform: rotate(90deg); }
  .syllabus ul { list-style: none; margin: 0; padding: 0 1.1rem .5rem; }
  .syllabus li { display: flex; gap: .9rem; padding: .6rem 0; border-top: 2px solid var(--separator); font-size: .94rem; }
  .code { flex: none; width: 2.4rem; color: var(--mod-text); font-weight: 650; font-variant-numeric: tabular-nums; }
  .review-flag {
    display: inline-block;
    margin-left: .35rem;
    font-size: .7rem;
    font-weight: 600;
    padding: .03rem .45rem;
    border-radius: var(--r-pill);
    color: var(--reward);
    background: var(--reward-soft);
  }

  @media (max-width: 560px) {
    .hero-score { align-items: flex-start; flex-direction: row; align-items: baseline; gap: .5rem; }
  }
</style>
