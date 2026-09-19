<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { stats } from '$lib/stats.svelte';
  import { session } from '$lib/session.svelte';
  import { GOALS, getRecent, type Recent } from '$lib/activity';
  import { load as loadProgress, dueCount, topicMastery, type Progress } from '$lib/progress';
  import { RING_COLORS, themeVars } from '$lib/modules';

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

  // Three quests, one per kind of study. Completion is always stated in words
  // as well as by the bar, so it never rests on colour alone.
  const quests = $derived([
    { key: 'learn', icon: 'book', title: 'Read a lesson', have: stats.today.learn, goal: GOALS.learn, unit: 'lesson', ...RING_COLORS.learn },
    { key: 'review', icon: 'cards', title: `Review ${GOALS.review} flashcards`, have: stats.today.review, goal: GOALS.review, unit: 'cards', ...RING_COLORS.review },
    { key: 'practice', icon: 'check', title: `Answer ${GOALS.practice} questions`, have: stats.today.practice, goal: GOALS.practice, unit: 'questions', ...RING_COLORS.practice }
  ] as const);
  const doneCount = $derived(quests.filter((q) => q.have >= q.goal).length);

  const due = $derived(
    data.topics.map((t) => ({ ...t, due: progress ? dueCount(progress, t.cardIds) : t.cardIds.length }))
  );
  const totalDue = $derived(due.reduce((a, t) => a + t.due, 0));
  const mostDue = $derived([...due].sort((a, b) => b.due - a.due)[0]);

  // Continue where you left off; with no history, the first lesson there is.
  const cont = $derived(
    recent ?? (data.topics[0]
      ? { topic: data.topics[0].slug, topicTitle: data.topics[0].title,
          lesson: data.topics[0].firstLesson.slug, lessonTitle: data.topics[0].firstLesson.title }
      : null)
  );
  const contModule = $derived(data.topics.find((t) => t.slug === cont?.topic)?.module ?? 1);
</script>

<svelte:head>
  <title>Today — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<header class="head">
  <p class="eyebrow">{dateLine}</p>
  <h1 class="large-title">{greeting}!</h1>
</header>

<!-- Streak and level: the two numbers a student checks first. -->
<div class="stats">
  <div class="stat streak" class:lit={stats.streak > 0}>
    <span class="flame"><Icon name="flame" size={30} /></span>
    <span class="stat-text">
      <strong>{stats.streak}</strong>
      <span>day streak</span>
    </span>
  </div>
  <div class="stat level">
    <span class="badge" aria-hidden="true">{stats.level}</span>
    <span class="stat-text">
      <strong>{stats.xpToday}<small> XP</small></strong>
      <span>today · Level {stats.level}</span>
    </span>
  </div>
</div>

<section class="quests" aria-labelledby="quests-title">
  <div class="section-head">
    <h2 id="quests-title">Daily quests</h2>
    <span class="tally">{doneCount} of 3 done</span>
  </div>

  <ul>
    {#each quests as q}
      {@const done = q.have >= q.goal}
      {@const pct = Math.min(1, q.have / q.goal)}
      <li class="quest" class:done style="--q:{q.color};--q-edge:{q.edge};--q-track:{q.track}">
        <span class="q-icon"><Icon name={done ? 'check' : q.icon} size={24} /></span>
        <div class="q-body">
          <div class="q-top">
            <strong>{q.title}</strong>
            {#if done}<span class="q-done">Done</span>{/if}
          </div>
          <div class="bar" role="progressbar" aria-label={q.title}
               aria-valuemin={0} aria-valuemax={q.goal} aria-valuenow={Math.min(q.have, q.goal)}>
            <span style="transform:scaleX({pct})"></span>
          </div>
          <span class="q-count">{Math.min(q.have, q.goal)} / {q.goal} {q.unit}</span>
        </div>
      </li>
    {/each}
  </ul>

  {#if doneCount === 3}
    <p class="cleared"><Icon name="sparkle" size={18} /> All quests cleared. That is a proper day's work.</p>
  {/if}
</section>

<div class="grid">
  {#if cont}
    <a class="tile continue" href="{base}/math/{cont.topic}/{cont.lesson}" style={themeVars(contModule)}>
      <span class="tile-eyebrow">{recent ? 'Continue reading' : 'Start here'}</span>
      <strong>{cont.lessonTitle}</strong>
      <span class="tile-sub">{cont.topicTitle}</span>
      <span class="go"><Icon name="play" size={14} /> {recent ? 'Resume' : 'Begin'}</span>
    </a>
  {/if}

  {#if mostDue}
    <a class="tile review" href="{base}/math/{mostDue.slug}/flashcards">
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
    <a class="topic" href="{base}/math/{t.slug}" style={themeVars(t.module)}>
      <span class="t-num" aria-label="Module {t.module}">M{t.module}</span>
      <span class="topic-text">
        <strong>{t.title}</strong>
        <span class="mini-bar" aria-hidden="true"><span style="transform:scaleX({m / 100})"></span></span>
        <span class="t-meta">{[`${m}% mastery`, t.due > 0 ? `${t.due} due` : ''].filter(Boolean).join(' · ')}</span>
      </span>
      <span class="chev"><Icon name="chevron" size={16} /></span>
    </a>
  {/each}
</div>

<style>
  .head { margin-bottom: 1.4rem; }
  .head .eyebrow { margin: 0 0 .2rem; }

  /* ---------------------------------------------------------------- stats */
  .stats { display: grid; grid-template-columns: 1fr 1fr; gap: .9rem; }
  .stat {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding: 1rem 1.1rem;
    border-radius: 22px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .stat-text { display: flex; flex-direction: column; min-width: 0; }
  .stat-text strong {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .stat-text strong small { font-size: .5em; font-weight: 600; }
  .stat-text > span { font-size: .88rem; font-weight: 700; color: var(--text-secondary); }

  .flame, .badge {
    flex: none;
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }
  .flame { color: var(--text-tertiary); background: var(--surface-2); box-shadow: inset 0 0 0 2px var(--line); }
  .streak.lit .flame {
    color: #fff;
    background: #c2410c;
    box-shadow: 0 4px 0 #7c2d12;
    animation: flicker 2.4s ease-in-out infinite;
  }
  @keyframes flicker { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg) scale(1.04); } }
  .badge {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background: var(--brand);
    box-shadow: 0 4px 0 var(--brand-edge);
  }

  /* --------------------------------------------------------------- quests */
  .quests { margin-top: .4rem; }
  .tally {
    font-weight: 800;
    font-size: .85rem;
    padding: .25rem .7rem;
    border-radius: var(--r-pill);
    color: var(--text-secondary);
    background: var(--surface);
    box-shadow: inset 0 0 0 2px var(--line);
  }
  .quests ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .75rem; }
  .quest {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .95rem 1.1rem;
    border-radius: 22px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .q-icon {
    flex: none;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    color: #fff;
    background: var(--q);
    box-shadow: 0 4px 0 var(--q-edge);
  }
  .q-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: .4rem; }
  .q-top { display: flex; align-items: baseline; justify-content: space-between; gap: .75rem; }
  .q-top strong { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; }
  .q-done {
    flex: none;
    font-size: .78rem;
    font-weight: 800;
    padding: .1rem .6rem;
    border-radius: var(--r-pill);
    color: var(--correct);
    background: var(--correct-soft);
  }
  .q-count { font-size: .82rem; font-weight: 700; color: var(--text-secondary); font-variant-numeric: tabular-nums; }

  /* Chunky bar: scaleX so the fill animates on the compositor. */
  .bar {
    height: 14px;
    border-radius: var(--r-pill);
    background: var(--q-track);
    overflow: hidden;
  }
  .bar span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--q);
    box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .18), inset 0 3px 0 rgba(255, 255, 255, .25);
    transform-origin: left;
    transition: transform var(--dur-slow) var(--ease-spring);
  }

  .cleared {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin: .9rem 0 0;
    padding: .8rem 1rem;
    border-radius: 18px;
    font-weight: 800;
    color: var(--correct);
    background: var(--correct-soft);
    animation: rise var(--dur-slow) var(--ease-spring) both;
  }
  @keyframes rise { from { transform: translateY(6px); opacity: 0; } to { transform: none; opacity: 1; } }

  /* ---------------------------------------------------------------- tiles */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
    margin-top: 1.8rem;
  }
  .tile {
    display: flex;
    flex-direction: column;
    gap: .15rem;
    min-height: 168px;
    padding: 1.2rem 1.3rem;
    border-radius: 24px;
    color: inherit;
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .continue {
    color: #fff;
    background: linear-gradient(145deg, var(--mod-from), var(--mod-to));
    box-shadow: 0 6px 0 var(--mod-edge);
  }
  .continue:hover { color: #fff; }
  .continue:active { transform: translateY(6px); box-shadow: 0 0 0 var(--mod-edge); }
  .review { background: var(--surface); box-shadow: var(--shadow-lg); }
  .review:hover { color: inherit; }
  .review:active { transform: translateY(6px); box-shadow: inset 0 0 0 2px var(--line), 0 0 0 var(--line); }

  .tile-eyebrow { font-size: .76rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  .tile strong { font-family: var(--font-display); font-size: 1.4rem; font-weight: 600; line-height: 1.18; margin-top: .25rem; }
  .tile .big { font-size: 2.4rem; line-height: 1; font-variant-numeric: tabular-nums; }
  .tile .big .unit-word { margin-left: .22em; font-size: .45em; color: var(--text-secondary); }
  .tile-sub { font-size: .92rem; font-weight: 600; }
  .review .tile-sub, .review .tile-eyebrow { color: var(--text-secondary); }
  .go {
    margin-top: auto;
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    padding: .5rem 1rem;
    border-radius: var(--r-pill);
    font-size: .88rem;
    font-weight: 800;
  }
  .continue .go { color: var(--mod-edge); background: #fff; }
  .review .go { color: #fff; background: #c2410c; box-shadow: 0 3px 0 #7c2d12; }

  /* --------------------------------------------------------------- topics */
  .topics { display: flex; flex-direction: column; gap: .65rem; }
  .topic {
    display: flex;
    align-items: center;
    gap: .95rem;
    padding: .8rem 1.1rem;
    border-radius: 20px;
    color: inherit;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .topic:hover { color: inherit; }
  .topic:active { transform: translateY(3px); box-shadow: inset 0 0 0 2px var(--line), 0 0 0 var(--line); }
  .t-num {
    flex: none;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-family: var(--font-display);
    font-weight: 700;
    color: #fff;
    background: var(--mod);
    box-shadow: 0 3px 0 var(--mod-edge);
  }
  .topic-text { flex: 1; display: flex; flex-direction: column; gap: .3rem; min-width: 0; }
  .topic-text strong { font-weight: 800; }
  .mini-bar { height: 8px; border-radius: var(--r-pill); background: var(--mod-soft); overflow: hidden; }
  .mini-bar span { display: block; height: 100%; background: var(--mod); transform-origin: left; }
  .t-meta { font-size: .84rem; font-weight: 600; color: var(--text-secondary); }
  .chev { color: var(--text-tertiary); display: flex; }

  @media (max-width: 520px) {
    .stats { grid-template-columns: 1fr 1fr; gap: .6rem; }
    .stat { flex-direction: column; align-items: flex-start; gap: .6rem; }
  }
  @media (prefers-reduced-motion: reduce) {
    .streak.lit .flame { animation: none; }
  }
</style>
