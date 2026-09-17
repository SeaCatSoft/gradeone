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
  let scrolled = $state(false);

  onMount(() => {
    const p = loadProgress();
    xp = totalXp(p);
    streak = p.streak.current;

    try {
      const saved = localStorage.getItem('gradeone.theme') as 'light' | 'dark' | null;
      if (saved) setTheme(saved);
    } catch { /* storage blocked; the system preference still applies */ }

    // The header's hairline appears only once content is actually behind it.
    // A permanent divider under floating chrome reads as a seam; Apple only
    // separates where the layers genuinely overlap.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        scrolled = window.scrollY > 4;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
  const isDark = $derived(theme === 'dark');
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<header class:scrolled>
  <div class="wrap bar">
    <a class="brand" href="/">
      <span class="mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 7.5 12 4l8 3.5-8 3.5z" />
          <path d="M7 12.2v4.1c0 1.5 2.2 2.7 5 2.7s5-1.2 5-2.7v-4.1" />
        </svg>
      </span>
      <span class="wordmark">Grade One</span>
    </a>

    <nav>
      <a href="/math">Mathematics</a>
    </nav>

    <div class="stats">
      {#if xp > 0}
        <span class="chip" title="{xp} XP">
          <span class="lvl">{lvl.level}</span>
          <span class="track" aria-hidden="true">
            <span style="width:{Math.round((lvl.into / lvl.needed) * 100)}%"></span>
          </span>
        </span>
      {/if}
      {#if streak > 0}
        <span class="chip streak" title="{streak}-day streak">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M12 2c.6 3.4-1.2 4.8-2.6 6.2C8 9.6 7 10.9 7 13a5 5 0 0 0 10 0c0-2.6-1.3-4-2.4-5.3-.4 1-1 1.7-1.8 2.2.4-2.6-.3-5.6-.8-7.9z"/>
          </svg>
          {streak}
        </span>
      {/if}
      <button class="icon" onclick={toggleTheme} aria-label="Switch to {isDark ? 'light' : 'dark'} appearance">
        {#if isDark}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer>
  <div class="wrap small">
    <p>
      Built against CXC 05/G/SYLL 16, effective for examinations from May–June 2027.
    </p>
    <p class="fine">Grade One is an independent study aid and is not affiliated with CXC.</p>
  </div>
</footer>

<style>
  /* Translucent chrome. Content passes underneath rather than stopping at a bar. */
  header {
    position: sticky;
    top: 0;
    z-index: 20;
    background: var(--material);
    backdrop-filter: var(--material-blur);
    -webkit-backdrop-filter: var(--material-blur);
    transition: box-shadow var(--dur) var(--ease);
  }
  header::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: .5px;
    background: var(--separator);
    opacity: 0;
    transition: opacity var(--dur) var(--ease);
  }
  header.scrolled::after { opacity: 1; }

  .bar {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    min-height: 52px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: var(--text);
    font-weight: 600;
    letter-spacing: var(--track-heading);
    font-size: .98rem;
  }
  .brand:hover { color: var(--text); }
  .mark { display: grid; place-items: center; width: 22px; height: 22px; color: var(--brand); }
  .mark svg { width: 22px; height: 22px; }

  nav { display: flex; gap: 1.1rem; }
  nav a {
    color: var(--text-secondary);
    font-size: .9rem;
    font-weight: 450;
    letter-spacing: var(--track-body);
  }
  nav a:hover { color: var(--text); }

  .stats { margin-left: auto; display: flex; align-items: center; gap: .45rem; }

  /* Vibrancy: on a translucent surface, quiet grey text goes muddy. These sit
     slightly heavier and higher-contrast than body text for that reason. */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    font-size: .78rem;
    font-weight: 590;
    letter-spacing: var(--track-caption);
    padding: .22rem .5rem;
    border-radius: var(--r-pill);
    background: var(--reward-soft);
    color: var(--reward);
    white-space: nowrap;
  }
  .lvl {
    font-variant-numeric: tabular-nums;
    /* A bare number needs the context the title attribute alone cannot give. */
  }
  .lvl::before { content: 'Lv '; font-weight: 500; opacity: .75; }
  .track {
    display: block;
    width: 34px;
    height: 4px;
    border-radius: var(--r-pill);
    background: color-mix(in srgb, var(--reward) 22%, transparent);
    overflow: hidden;
  }
  .track > span {
    display: block;
    height: 100%;
    background: var(--reward);
    border-radius: inherit;
    transition: width var(--dur-slow) var(--ease);
  }
  .streak svg { width: 13px; height: 13px; }

  .icon {
    padding: 0;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: var(--r-pill);
    border-color: transparent;
    background: transparent;
    color: var(--text-secondary);
  }
  .icon svg { width: 16px; height: 16px; }
  @media (hover: hover) {
    .icon:hover { background: var(--surface-2); color: var(--text); }
  }

  main { min-height: 72vh; padding: 2.5rem 0 4rem; }

  footer {
    border-top: .5px solid var(--separator);
    padding: 2rem 0 3rem;
    color: var(--text-tertiary);
  }
  footer p { margin: 0 0 .25rem; max-width: 60ch; }
  .fine { font-size: .8rem; }

  @media (max-width: 680px) {
    .bar { gap: 1rem; }
    .wordmark { display: none; }
    .stats { gap: .3rem; }
  }
</style>
