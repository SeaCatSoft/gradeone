<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '$lib/components/Icon.svelte';
  import { session } from '$lib/session.svelte';
  import { theme } from '$lib/theme.svelte';

  let { children } = $props();
</script>

<header class="gnav">
  <div class="inner">
    <a class="brand" href="{base}/">
      <span class="mark"><Icon name="sparkle" size={16} /></span>
      Grade One
    </a>
    <nav>
      <a href="{base}/math">Mathematics</a>
      <span class="off">IT <em>soon</em></span>
      <span class="off">EDPM <em>soon</em></span>
    </nav>
    <div class="right">
      {#if session.ready && session.user}
        <a class="btn3d small" href="{base}/today">Open Grade One</a>
      {:else if session.ready}
        <a class="text" href="{base}/login">Sign in</a>
        <a class="btn3d small" href="{base}/signup">Sign up</a>
      {/if}
      <button class="icon-btn" onclick={() => theme.toggle()}
              aria-label="Switch to {theme.isDark ? 'light' : 'dark'} appearance">
        <Icon name={theme.isDark ? 'sun' : 'moon'} size={17} />
      </button>
    </div>
  </div>
</header>

<main>
  {@render children()}
</main>

<footer>
  <div class="inner">
    <p>Built against CXC 05/G/SYLL 16, effective for examinations from May–June 2027.</p>
    <p class="fine">Grade One is an independent study aid and is not affiliated with CXC.</p>
  </div>
</footer>

<style>
  .gnav {
    position: sticky;
    top: 0;
    z-index: 20;
    height: 68px;
    background: var(--surface);
    box-shadow: inset 0 -2px 0 var(--line);
  }
  .inner {
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: .55rem;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--text);
  }
  .brand:hover { color: var(--text); }
  .mark {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 11px;
    color: #fff;
    background: var(--brand);
    box-shadow: 0 3px 0 var(--brand-edge);
  }
  nav { display: flex; gap: 1.5rem; font-size: .95rem; font-weight: 800; }
  nav a { color: var(--text); }
  nav a:hover { color: var(--brand-text); }
  .off { color: var(--text-tertiary); cursor: default; }
  .off em {
    font-style: normal;
    font-size: .68rem;
    padding: .05rem .4rem;
    border-radius: var(--r-pill);
    background: var(--surface-2);
    box-shadow: inset 0 0 0 1.5px var(--line);
  }
  .right { margin-left: auto; display: flex; align-items: center; gap: .75rem; }
  .text { font-size: .95rem; font-weight: 800; color: var(--text); }
  .text:hover { color: var(--brand-text); }
  .btn3d.small { min-height: 44px; padding: .45rem 1rem; font-size: .98rem; }
  .icon-btn {
    width: 44px;
    height: 44px;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: var(--text-secondary);
  }

  main { min-height: 70vh; }

  footer {
    margin-top: 4rem;
    padding: 1.75rem 0 3rem;
    background: var(--surface);
    box-shadow: inset 0 2px 0 var(--line);
    color: var(--text-secondary);
    font-size: .85rem;
    font-weight: 600;
  }
  footer .inner { display: block; height: auto; }
  footer p { margin: 0 0 .25rem; }
  .fine { font-size: .78rem; }

  @media (max-width: 720px) {
    nav .off { display: none; }
    .inner { gap: 1rem; }
    .text { display: none; }
  }
  @media (max-width: 460px) {
    nav { display: none; }
  }
</style>
