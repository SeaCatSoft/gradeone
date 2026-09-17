<script lang="ts">
  import '../app.css';
  import 'katex/dist/katex.min.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { load as loadProgress, totalXp, level } from '$lib/progress';

  let { children } = $props();

  let xp = $state(0);
  let streak = $state(0);
  let theme = $state<'light' | 'dark' | null>(null);

  // Progress lives in localStorage, so it can only be read once mounted.
  // Server-rendered markup shows the empty state and fills in after hydration.
  onMount(() => {
    const p = loadProgress();
    xp = totalXp(p);
    streak = p.streak.current;

    try {
      const saved = localStorage.getItem('gradeone.theme') as 'light' | 'dark' | null;
      if (saved) setTheme(saved);
    } catch { /* storage blocked; the system preference still applies */ }
  });

  function setTheme(t: 'light' | 'dark') {
    theme = t;
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('gradeone.theme', t); } catch { /* ignore */ }
  }

  function toggleTheme() {
    const isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'light' : 'dark');
  }

  const lvl = $derived(level(xp));
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header>
  <div class="wrap bar">
    <a class="brand" href="/">
      <span class="mark" aria-hidden="true">G1</span>
      <span>Grade One</span>
    </a>

    <nav>
      <a href="/math">Mathematics</a>
    </nav>

    <div class="stats">
      {#if xp > 0}
        <span class="chip" title="Experience points">
          <strong>Lv {lvl.level}</strong>
          <span class="bar-mini" aria-hidden="true">
            <span style="width:{Math.round((lvl.into / lvl.needed) * 100)}%"></span>
          </span>
        </span>
      {/if}
      {#if streak > 0}
        <span class="chip" title="Day streak">{streak}-day streak</span>
      {/if}
      <button class="theme" onclick={toggleTheme} aria-label="Switch between light and dark">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer>
  <div class="wrap small muted">
    Built against CXC 05/G/SYLL 16, effective for examinations from May–June 2027.
    Grade One is an independent study aid and is not affiliated with CXC.
  </div>
</footer>

<style>
  header {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .bar {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-height: 60px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: .55rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    letter-spacing: -.02em;
  }
  .mark {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: var(--brand);
    color: var(--on-brand);
    font-size: .8rem;
    font-weight: 700;
  }
  nav { display: flex; gap: 1rem; }
  nav a { color: var(--text-muted); text-decoration: none; font-weight: 500; }
  nav a:hover { color: var(--brand); }

  .stats { margin-left: auto; display: flex; align-items: center; gap: .6rem; }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    font-size: .8rem;
    padding: .3rem .6rem;
    border-radius: 999px;
    background: var(--reward-soft);
    color: var(--reward);
    font-weight: 600;
    white-space: nowrap;
  }
  .bar-mini {
    display: block;
    width: 42px;
    height: 5px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--reward) 25%, transparent);
    overflow: hidden;
  }
  .bar-mini > span { display: block; height: 100%; background: var(--reward); }

  .theme { padding: .3rem .7rem; font-size: .8rem; }

  main { min-height: 70vh; padding: 2rem 0 3rem; }

  footer {
    border-top: 1px solid var(--border);
    padding: 1.5rem 0 2.5rem;
    background: var(--surface);
  }

  @media (max-width: 640px) {
    .bar { gap: .9rem; flex-wrap: wrap; min-height: 54px; padding: .5rem 1.25rem; }
    .stats { gap: .4rem; }
    .chip { font-size: .72rem; }
  }
</style>
