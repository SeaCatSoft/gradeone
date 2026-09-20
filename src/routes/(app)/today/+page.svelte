<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Rings from '$lib/components/Rings.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { stats } from '$lib/stats.svelte';
  import { session } from '$lib/session.svelte';
  import { GOALS, getRecent, type Recent } from '$lib/activity';
  import { load as loadProgress, dueCount, topicMastery, type Progress } from '$lib/progress';
  import { RING_COLORS, theme as modTheme, themeVars } from '$lib/modules';

  let { data } = $props();

  let progress = $state<Progress | null>(null);
  let recent = $state<Recent | null>(null);
  let now = $state(new Date());

  onMount(() => {
    progress = loadProgress();
    recent = getRecent();
    now = new Date();
  });

  const dateLine = $derived(
    now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  );
  const greeting = $derived.by(() => {
    const h = now.getHours();
    const part = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
    const name = session.user ? session.displayName.split(' ')[0] : '';
    return name ? `${part}, ${name}` : part;
  });

  const rings = $derived([
    { value: stats.rings.learn, ...RING_COLORS.learn, label: 'Learn' },
    { value: stats.rings.review, ...RING_COLORS.review, label: 'Review' },
    { value: stats.rings.practice, ...RING_COLORS.practice, label: 'Practice' }
  ]);
  const closed = $derived(Object.values(stats.rings).filter((v) => v >= 1).length);

  const rows = $derived([
    { key: 'learn', name: 'Learn', have: stats.today.learn, goal: GOALS.learn, unit: 'lesson', color: RING_COLORS.learn.color },
    { key: 'review', name: 'Review', have: stats.today.review, goal: GOALS.review, unit: 'cards', color: RING_COLORS.review.color },
    { key: 'practice', name: 'Practice', have: stats.today.practice, goal: GOALS.practice, unit: 'questions', color: RING_COLORS.practice.color }
  ]);

  const due = $derived(
    data.topics.map((t) => ({ ...t, due: progress ? dueCount(progress, t.cardIds) : t.cardIds.length }))
  );
  const totalDue = $derived(due.reduce((a, t) => a + t.due, 0));
  const mostDue = $derived([...due].sort((a, b) => b.due - a.due)[0]);

  // Continue where you left off; with no history, the first lesson there is.
  const cont = $derived(
    recent ?? (data.topics[0]
      ? { subject: data.topics[0].subject,
          topic: data.topics[0].slug, topicTitle: data.topics[0].title,
          lesson: data.topics[0].firstLesson.slug, lessonTitle: data.topics[0].firstLesson.title }
      : null)
  );
  const contModule = $derived(data.topics.find((t) => t.slug === cont?.topic)?.module ?? 1);
  // Recent entries saved before the platform had a second subject have no code.
  const contSubject = $derived(cont?.subject ?? 'math');
</script>

<svelte:head>
  <title>Today — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<header class="head">
  <p class="eyebrow">{dateLine}</p>
  <h1 class="large-title">Today</h1>
  <p class="subtitle">{greeting}.</p>
</header>

<!-- The Activity-style summary. Always on a dark surface, like the Fitness
     widget: the ring colours are tuned for black and lose contrast on white. -->
<section class="summary" aria-label="Today's goals">
  <div class="rings">
    <Rings {rings} size={172} stroke={20} gap={3} />
  </div>
  <div class="rows">
    {#each rows as r}
      <div class="row">
        <span class="name" style="color:{r.color}">{r.name}</span>
        <span class="count" style="color:{r.color}">
          {r.have}<span class="of">/{r.goal}</span>
          <span class="unit">{r.unit}</span>
        </span>
      </div>
    {/each}
    <div class="summary-foot">
      <span><Icon name="flame" size={13} /> {stats.streak > 0 ? `${stats.streak}-day streak` : 'No streak yet'}</span>
      <span>{stats.xpToday} XP today · Level {stats.level}</span>
    </div>
  </div>
  {#if closed === 3}
    <p class="closed">All three rings closed. That is a proper day's work.</p>
  {/if}
</section>

<div class="grid">
  {#if cont}
    <a class="tile continue" href="{base}/{contSubject}/{cont.topic}/{cont.lesson}" style={themeVars(contModule)}>
      <span class="tile-eyebrow">{recent ? 'Continue reading' : 'Start here'}</span>
      <strong>{cont.lessonTitle}</strong>
      <span class="tile-sub">{cont.topicTitle}</span>
      <span class="go"><Icon name="play" size={14} /> {recent ? 'Resume' : 'Begin'}</span>
    </a>
  {/if}

  {#if mostDue}
    <a class="tile review" href="{base}/{mostDue.subject}/{mostDue.slug}/flashcards">
      <span class="tile-eyebrow">Due for review</span>
      <strong class="big">{totalDue}<span class="unit-word">{totalDue === 1 ? 'card' : 'cards'}</span></strong>
      <span class="tile-sub">
        {totalDue === 0 ? 'Nothing due. Everything is scheduled.' : `Most in ${mostDue.title}`}
      </span>
      <span class="go"><Icon name="cards" size={15} /> Review now</span>
    </a>
  {/if}
</div>

<div class="section-head">
  <h2>Your topics</h2>
  <a href="{base}/math">All of Mathematics <Icon name="chevron" size={13} /></a>
</div>

<div class="topics">
  {#each due as t}
    {@const m = progress ? topicMastery(progress, t.objectiveKeys) : 0}
    {@const th = modTheme(t.module)}
    <a class="topic" href="{base}/{t.subject}/{t.slug}">
      <Rings rings={[{ value: m / 100, color: th.solid, track: th.soft, label: 'Mastery' }]} size={46} stroke={6} />
      <span class="topic-text">
        <strong>{t.title}</strong>
        <span>{[`Module ${t.module}`, `${m}% mastery`, t.due > 0 ? `${t.due} due` : ''].filter(Boolean).join(' · ')}</span>
      </span>
      <span class="chev"><Icon name="chevron" size={16} /></span>
    </a>
  {/each}
</div>

<style>
  .head { margin-bottom: 1.6rem; }
  .head .eyebrow { margin: 0 0 .2rem; }

  .summary {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: clamp(1.25rem, 4vw, 2.75rem);
    padding: clamp(1.25rem, 3vw, 1.9rem);
    border-radius: 26px;
    background: #0b0b0d;
    color: #f5f5f7;
    /* Hairline edge: without it the card dissolves into a black page in dark mode. */
    box-shadow: inset 0 0 0 .5px rgba(255, 255, 255, .1), 0 1px 2px rgba(0, 0, 0, .2), 0 22px 50px -24px rgba(0, 0, 0, .55);
    overflow: hidden;
  }
  .rows { display: flex; flex-direction: column; gap: .7rem; min-width: 0; }
  .row { display: flex; flex-direction: column; }
  .name { font-size: .78rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .count {
    font-size: clamp(1.55rem, 3vw, 1.95rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -.02em;
    font-variant-numeric: tabular-nums;
  }
  .of { opacity: .95; }
  .unit { font-size: .52em; font-weight: 700; letter-spacing: .03em; text-transform: uppercase; margin-left: .15em; }
  .summary-foot {
    display: flex;
    flex-wrap: wrap;
    gap: .35rem 1.25rem;
    margin-top: .35rem;
    padding-top: .8rem;
    border-top: .5px solid rgba(255, 255, 255, .14);
    font-size: .82rem;
    color: #a1a1a6;
  }
  .summary-foot :global(svg) { color: #ff8a00; vertical-align: -2px; }
  .closed {
    grid-column: 1 / -1;
    margin: 0;
    font-weight: 600;
    color: #f5f5f7;
    animation: rise var(--dur-slow) var(--ease-spring) both;
  }
  @keyframes rise { from { transform: translateY(6px); opacity: 0; } to { transform: none; opacity: 1; } }

  @media (max-width: 520px) {
    .summary { grid-template-columns: 1fr; justify-items: center; text-align: center; }
    .rows { width: 100%; }
    .row { align-items: center; }
    .summary-foot { justify-content: center; }
  }

  /* ---------------------------------------------------------------- tiles */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  .tile {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .15rem;
    min-height: 168px;
    padding: 1.2rem 1.3rem;
    border-radius: 22px;
    color: inherit;
    overflow: hidden;
    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  }
  @media (hover: hover) {
    .tile:hover { transform: translateY(-3px); }
  }
  .tile:active { transform: scale(.985); transition-duration: var(--dur-fast); }

  .continue {
    color: #fff;
    background: linear-gradient(145deg, var(--mod-from), var(--mod-to));
    box-shadow: 0 16px 36px -18px var(--mod-to);
  }
  .continue:hover { color: #fff; }
  .review { background: var(--surface); box-shadow: var(--shadow); }
  .review:hover { color: inherit; }

  .tile-eyebrow { font-size: .74rem; font-weight: 650; letter-spacing: .05em; text-transform: uppercase; opacity: .82; }
  .tile strong { font-size: 1.35rem; font-weight: 680; line-height: 1.18; letter-spacing: -.02em; margin-top: .25rem; }
  .tile .big { font-size: 2.3rem; line-height: 1; font-variant-numeric: tabular-nums; }
  .tile .big .unit-word { margin-left: .22em; font-size: .45em; font-weight: 600; color: var(--text-secondary); letter-spacing: 0; }
  .tile-sub { font-size: .9rem; opacity: .85; }
  .review .tile-sub { color: var(--text-secondary); opacity: 1; }
  .go {
    margin-top: auto;
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .42rem .9rem;
    border-radius: var(--r-pill);
    font-size: .85rem;
    font-weight: 620;
  }
  .continue .go { background: rgba(255, 255, 255, .22); backdrop-filter: blur(10px); }
  .review .go { background: var(--correct-soft); color: var(--correct); }

  /* --------------------------------------------------------------- topics */
  .topics {
    display: flex;
    flex-direction: column;
    background: var(--surface);
    border-radius: 20px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .topic {
    display: flex;
    align-items: center;
    gap: .95rem;
    padding: .8rem 1.1rem;
    color: inherit;
    transition: background-color var(--dur-fast) var(--ease);
  }
  .topic + .topic { border-top: .5px solid var(--separator); }
  .topic:hover { color: inherit; background: var(--surface-2); }
  .topic-text { flex: 1; display: flex; flex-direction: column; min-width: 0; }
  .topic-text strong { font-weight: 600; letter-spacing: -.01em; }
  .topic-text span { font-size: .84rem; color: var(--text-secondary); }
  .chev { color: var(--text-tertiary); display: flex; }
</style>
