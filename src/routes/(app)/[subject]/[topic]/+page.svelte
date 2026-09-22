<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Rings from '$lib/components/Rings.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { load as loadProgress, topicMastery, dueCount, type Progress } from '$lib/progress';
  import { themeVars } from '$lib/modules';
  import { session } from '$lib/session.svelte';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  onMount(() => { progress = loadProgress(); });

  const allCardIds = $derived(data.lessons.flatMap((l) => l.cardIds));
  const totalQuestions = $derived(data.lessons.reduce((a, l) => a + l.questionCount, 0));
  const objectiveKeys = $derived(data.objectives.map((o) => o.key));

  const mastery = $derived(progress ? topicMastery(progress, objectiveKeys) : 0);
  const due = $derived(progress ? dueCount(progress, allCardIds) : allCardIds.length);
  const hasContent = $derived(data.lessons.length > 0);
  const read = (slug: string) => Boolean(progress?.lessons[`${data.subject}/${data.topic.slug}/${slug}`]);
  const readCount = $derived(data.lessons.filter((l) => read(l.slug)).length);
</script>

<svelte:head>
  <title>{data.topic.title} — CSEC {data.subjectName} — Grade One</title>
  <meta
    name="description"
    content="CSEC {data.subjectName}: {data.topic.title}. {data.objectives.length} syllabus objectives with lessons, flashcards and practice questions."
  />
</svelte:head>

<div style={themeVars(data.module.number)}>
  <a class="back-link" href="{base}/{data.subject}"><Icon name="chevron-left" size={17} />{data.subjectName}</a>

  <header class="hero">
    <div class="hero-text">
      <p class="hero-eyebrow">Module {data.module.number}</p>
      <h1>{data.topic.title}</h1>
      <p class="facts">
        {[`${data.objectives.length} objectives`, `${data.topic.mcqCount} of ${data.p1Items} Paper 01 questions`,
          data.topic.p2Marks ? `${data.topic.p2Marks} Paper 02 marks` : ''].filter(Boolean).join(' · ')}
      </p>
    </div>
    {#if hasContent}
      <div class="hero-ring">
        <Rings rings={[{ value: mastery / 100, color: '#fff', track: 'rgba(255,255,255,.25)', label: 'Mastery' }]}
               size={96} stroke={11} />
        <span class="pct">{mastery}<small>%</small></span>
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
      <a class="mode" href="{base}/{data.subject}/{data.topic.slug}/flashcards">
        <span class="glyph review"><Icon name="cards" size={22} /></span>
        <span class="mode-text">
          <strong>Flashcards</strong>
          <span>{progress ? `${due} due of ${allCardIds.length}` : `${allCardIds.length} cards`}</span>
        </span>
        <Icon name="chevron" size={16} />
      </a>
      <a class="mode" href="{base}/{data.subject}/{data.topic.slug}/practice">
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

    <!-- This page is public so the syllabus can be found; the lessons are not.
         Saying so here beats letting somebody click a lesson and get bounced to
         the landing page wondering what they did wrong. Rendered only once the
         session is known, so the prerendered HTML a crawler sees is the page
         itself rather than a sign-in prompt. -->
    {#if session.available && session.ready && !session.user}
      <p class="locked">
        <Icon name="lock" size={14} />
        <span>
          Reading a lesson needs a free account.
          <a href="{base}/signup?next={encodeURIComponent(`/${data.subject}/${data.topic.slug}`)}">Create
          one</a> or <a href="{base}/login?next={encodeURIComponent(`/${data.subject}/${data.topic.slug}`)}">sign
          in</a> — the objectives above are free to browse.
        </span>
      </p>
    {/if}
    <ol class="list">
      {#each data.lessons as lesson, i}
        {@const done = read(lesson.slug)}
        <li>
          <a href="{base}/{data.subject}/{data.topic.slug}/{lesson.slug}">
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
  .locked {
    display: flex;
    align-items: flex-start;
    gap: .55rem;
    margin: 0 0 .9rem;
    padding: .75rem .9rem;
    border-radius: 12px;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    font-size: .92rem;
    color: var(--text-secondary);
  }
  .locked :global(svg) { flex: none; margin-top: .15rem; }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: .1rem;
    margin: 0 0 1rem -.3rem;
    font-size: .98rem;
    font-weight: 500;
    color: var(--mod);
  }
  .back-link:hover { color: var(--mod); opacity: .8; }

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: clamp(1.35rem, 3.5vw, 2rem);
    border-radius: 26px;
    color: #fff;
    background: linear-gradient(145deg, var(--mod-from), var(--mod-to));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .25), 0 22px 44px -26px var(--mod-to);
  }
  .hero-eyebrow { margin: 0 0 .25rem; font-size: .76rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; opacity: .85; }
  .hero h1 { margin: 0 0 .45rem; font-size: clamp(2rem, 5vw, 2.9rem); font-weight: 750; line-height: 1.04; letter-spacing: -.03em; }
  .facts { margin: 0; font-size: .92rem; opacity: .9; }
  .hero-ring { position: relative; flex: none; display: grid; place-items: center; }
  .pct { position: absolute; font-size: 1.35rem; font-weight: 750; letter-spacing: -.03em; font-variant-numeric: tabular-nums; }
  .pct small { font-size: .55em; font-weight: 650; opacity: .85; }

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
    padding: .95rem 1.1rem;
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: var(--text-tertiary);
    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  }
  @media (hover: hover) {
    .mode:hover { transform: translateY(-2px); box-shadow: var(--shadow); color: var(--text-tertiary); }
  }
  .mode:active { transform: scale(.985); transition-duration: var(--dur-fast); }
  .glyph { flex: none; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 13px; color: #fff; }
  .glyph.review { background: linear-gradient(145deg, #a6f04a, #4cb61c); }
  .glyph.practice { background: linear-gradient(145deg, #4ff0f4, #0a9fd6); }
  .mode-text { flex: 1; display: flex; flex-direction: column; }
  .mode-text strong { color: var(--text); font-size: 1.04rem; font-weight: 640; letter-spacing: -.012em; }
  .mode-text span { color: var(--text-secondary); font-size: .86rem; }

  /* ------------------------------------------------------- grouped list */
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    background: var(--surface);
    border-radius: 20px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .list li + li a { border-top: .5px solid var(--separator); }
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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: .85rem;
    font-weight: 680;
    color: var(--mod);
    background: var(--mod-soft);
    font-variant-numeric: tabular-nums;
  }
  .num.done { color: #fff; background: var(--mod); }
  .body { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .body strong { font-weight: 600; letter-spacing: -.01em; }
  .body span { font-size: .84rem; color: var(--text-secondary); }
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
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
  }
  .empty-glyph { color: var(--mod); margin-bottom: .2rem; }
  .empty strong { font-size: 1.08rem; letter-spacing: -.012em; }
  .empty p { margin: 0; color: var(--text-secondary); max-width: 56ch; }

  /* ------------------------------------------------------------ syllabus */
  .syllabus {
    margin-top: 2rem;
    background: var(--surface);
    border-radius: 20px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  summary {
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .95rem 1.1rem;
    cursor: pointer;
    list-style: none;
    font-weight: 620;
    letter-spacing: -.01em;
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
  .syllabus li { display: flex; gap: .9rem; padding: .6rem 0; border-top: .5px solid var(--separator); font-size: .94rem; }
  .code { flex: none; width: 2.4rem; color: var(--mod); font-weight: 650; font-variant-numeric: tabular-nums; }
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
    .hero { flex-direction: column; align-items: flex-start; }
    .hero-ring { align-self: flex-end; margin-top: -.5rem; }
  }
</style>
