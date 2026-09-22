<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '$lib/components/Icon.svelte';
  import { session } from '$lib/session.svelte';
  import { theme } from '$lib/theme.svelte';

  let { children } = $props();
</script>

<!-- The apple.com global nav: slim, glass, centred, and out of the way. -->
<header class="gnav">
  <div class="inner">
    <a class="brand" href="{base}/">
      <span class="mark"><Icon name="sparkle" size={13} /></span>
      Grade One
    </a>
    <!-- Mathematics is a link only for somebody who can actually open it.
         Signed out it would bounce straight back here, and a nav item that
         returns you to the page you are on reads as a broken site rather than
         as a locked door. -->
    <nav>
      {#if session.ready && session.user}
        <a href="{base}/math">Mathematics</a>
        <a href="{base}/it">IT</a>
      {:else}
        <span class="off">Mathematics</span>
        <span class="off">IT</span>
      {/if}
      <span class="off">EDPM</span>
    </nav>
    <div class="right">
      {#if session.ready && session.user}
        <a class="pill" href="{base}/today">Open Grade One</a>
      {:else if session.ready}
        <a class="text" href="{base}/login">Sign in</a>
      {/if}
      <button class="icon-btn" onclick={() => theme.toggle()}
              aria-label="Switch to {theme.isDark ? 'light' : 'dark'} appearance">
        <Icon name={theme.isDark ? 'sun' : 'moon'} size={15} />
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
    height: 48px;
    background: var(--glass);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: inset 0 -.5px 0 var(--glass-line);
  }
  .inner {
    max-width: 1000px;
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
    gap: .45rem;
    font-weight: 650;
    font-size: .92rem;
    letter-spacing: -.015em;
    color: var(--text);
  }
  .brand:hover { color: var(--text); }
  .mark {
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border-radius: 7px;
    color: #fff;
    background: linear-gradient(135deg, #34c759, #0b7a5e);
  }
  nav { display: flex; gap: 1.6rem; font-size: .82rem; }
  nav a { color: var(--text); opacity: .82; }
  nav a:hover { color: var(--text); opacity: 1; }
  .off { color: var(--text-tertiary); cursor: default; }
  .right { margin-left: auto; display: flex; align-items: center; gap: .6rem; }
  .text { font-size: .82rem; color: var(--text); opacity: .82; }
  .text:hover { color: var(--text); opacity: 1; }
  .pill {
    font-size: .8rem;
    font-weight: 600;
    padding: .3rem .8rem;
    border-radius: var(--r-pill);
    background: var(--brand);
    color: var(--on-brand);
  }
  .pill:hover { background: var(--brand-hover); color: var(--on-brand); }
  .icon-btn {
    width: 28px;
    height: 28px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--text-secondary);
  }

  main { min-height: 70vh; }

  footer {
    margin-top: 4rem;
    padding: 1.75rem 0 3rem;
    border-top: .5px solid var(--separator);
    color: var(--text-tertiary);
    font-size: .8rem;
  }
  footer .inner { display: block; height: auto; }
  footer p { margin: 0 0 .25rem; }
  .fine { font-size: .74rem; }

  @media (max-width: 640px) {
    nav .off { display: none; }
    .inner { gap: 1.1rem; }
  }
</style>
