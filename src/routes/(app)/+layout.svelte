<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import Icon, { type IconName } from '$lib/components/Icon.svelte';
  import { session } from '$lib/session.svelte';
  import { stats } from '$lib/stats.svelte';
  import { theme } from '$lib/theme.svelte';
  import { GOALS } from '$lib/activity';
  import { RING_COLORS } from '$lib/modules';

  let { children } = $props();

  type Item = { href: string; label: string; icon: IconName; match: (p: string) => boolean };

  const path = $derived(page.url.pathname.slice(base.length) || '/');

  // Named for what is inside, not "Home": Today is today's work, Mathematics is
  // the syllabus. Specific labels are predictable ones.
  const items: Item[] = [
    { href: '/today', label: 'Today', icon: 'today', match: (p) => p.startsWith('/today') },
    { href: '/math', label: 'Mathematics', icon: 'book', match: (p) => p.startsWith('/math') },
    { href: '/account', label: 'Account', icon: 'person', match: (p) => p.startsWith('/account') }
  ];

  // Three pips, one per daily quest: filled when the quest is done.
  const pips = $derived([
    { done: stats.today.learn >= GOALS.learn, ...RING_COLORS.learn },
    { done: stats.today.review >= GOALS.review, ...RING_COLORS.review },
    { done: stats.today.practice >= GOALS.practice, ...RING_COLORS.practice }
  ]);
  const questsDone = $derived(pips.filter((p) => p.done).length);
</script>

<div class="shell">
  <!-- Desktop: a floating glass sidebar, inset from the window edges. -->
  <aside class="sidebar glass" aria-label="Main">
    <a class="brand" href="{base}/">
      <span class="mark"><Icon name="sparkle" size={16} /></span>
      Grade One
    </a>

    <nav class="side-nav">
      {#each items.slice(0, 2) as it}
        <a href="{base}{it.href}" class:active={it.match(path)} aria-current={it.match(path) ? 'page' : undefined}>
          <Icon name={it.icon} size={19} />
          <span>{it.label}</span>
        </a>
      {/each}
    </nav>

    <p class="side-label">Subjects</p>
    <nav class="side-nav subjects">
      <a href="{base}/math" class:active={path.startsWith('/math')}>
        <span class="dot" style="background:#15803d"></span><span>Mathematics</span>
      </a>
      <!-- Shown, not hidden: a student should see the platform is growing into
           their other subjects. Disabled rather than linking to an empty page. -->
      <span class="soon"><span class="dot" style="background:#0369a1"></span>Information Technology<em>Soon</em></span>
      <span class="soon"><span class="dot" style="background:#c2410c"></span>EDPM<em>Soon</em></span>
    </nav>

    <div class="side-foot">
      <a class="today-mini" href="{base}/today">
        <span class="mini-flame" class:lit={stats.streak > 0}><Icon name="flame" size={20} /></span>
        <span class="mini-text">
          <strong>{stats.streak > 0 ? `${stats.streak}-day streak` : 'Start a streak'}</strong>
          <span>Level {stats.level} · {questsDone} of 3 quests</span>
          <span class="pips" aria-hidden="true">
            {#each pips as p}<span class:done={p.done} style="--q:{p.color};--q-track:{p.track}"></span>{/each}
          </span>
        </span>
      </a>

      <div class="account-row">
        {#if session.ready && session.user}
          <a class="who" href="{base}/account">
            <span class="avatar">{session.displayName.slice(0, 1).toUpperCase()}</span>
            <span class="who-text">
              <strong>{session.displayName}</strong>
              <span>Account</span>
            </span>
          </a>
        {:else if session.ready}
          <a class="signin" href="{base}/login">Sign in</a>
        {:else}
          <span></span>
        {/if}
        <button class="icon-btn" onclick={() => theme.toggle()}
                aria-label="Switch to {theme.isDark ? 'light' : 'dark'} appearance">
          <Icon name={theme.isDark ? 'sun' : 'moon'} size={17} />
        </button>
      </div>
    </div>
  </aside>

  <main class="content">
    {@render children()}
  </main>

  <!-- Phones: a floating glass tab bar, clear of the home indicator. -->
  <nav class="tabbar glass" aria-label="Main">
    {#each items as it}
      <a href="{base}{it.href}" class:active={it.match(path)} aria-current={it.match(path) ? 'page' : undefined}>
        <Icon name={it.icon} size={22} />
        <span>{it.label === 'Mathematics' ? 'Maths' : it.label}</span>
      </a>
    {/each}
  </nav>
</div>

<style>
  .content {
    max-width: 1040px;
    margin: 0 auto;
    padding: 2.25rem clamp(1.1rem, 4vw, 2.75rem) calc(7rem + env(safe-area-inset-bottom));
  }

  /* ------------------------------------------------------------ sidebar */
  .sidebar { display: none; }

  @media (min-width: 1000px) {
    .sidebar {
      position: fixed;
      top: 12px;
      bottom: 12px;
      left: 12px;
      width: var(--sidebar-w);
      z-index: 20;
      display: flex;
      flex-direction: column;
      padding: 1.1rem .75rem .8rem;
      border-radius: 16px;
    }
    .content {
      margin-left: calc(var(--sidebar-w) + 24px);
      margin-right: auto;
      padding-bottom: 4rem;
      max-width: 1000px;
    }
    .tabbar { display: none !important; }
  }
  /* Centre the content in the space right of the sidebar on wide screens. */
  @media (min-width: 1400px) {
    .content { margin-left: max(calc(var(--sidebar-w) + 24px), calc((100vw - 1000px + var(--sidebar-w)) / 2)); }
  }

  .brand {
    display: flex;
    align-items: center;
    gap: .55rem;
    padding: .2rem .6rem .9rem;
    color: var(--text);
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.2rem;
  }
  .brand:hover { color: var(--text); }
  .mark {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    color: #fff;
    background: var(--brand);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }

  .side-nav { display: flex; flex-direction: column; gap: 2px; }
  .side-nav a, .soon {
    display: flex;
    align-items: center;
    gap: .7rem;
    min-height: 44px;
    padding: .5rem .7rem;
    border-radius: 14px;
    color: var(--text);
    font-size: .98rem;
    font-weight: 700;
    transition: background-color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
  }
  .side-nav a :global(svg) { color: var(--text-secondary); }
  @media (hover: hover) {
    .side-nav a:hover { background: color-mix(in srgb, var(--text) 6%, transparent); color: var(--text); }
  }
  .side-nav a:active { transform: scale(.98); }
  .side-nav a.active {
    background: var(--brand-soft);
    color: var(--brand-text);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--brand) 35%, transparent);
  }
  .side-nav a.active :global(svg) { color: var(--brand-text); }

  .side-label {
    margin: 1.4rem .65rem .35rem;
    font-size: .72rem;
    font-weight: 650;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--text-tertiary);
  }
  .dot { width: 12px; height: 12px; border-radius: 4px; flex: none; margin: 0 .25rem 0 .35rem; }
  .soon { color: var(--text-tertiary); cursor: default; }
  .soon em {
    margin-left: auto;
    font-style: normal;
    font-size: .68rem;
    font-weight: 600;
    padding: .08rem .45rem;
    border-radius: var(--r-pill);
    background: color-mix(in srgb, var(--text) 7%, transparent);
  }

  .side-foot { margin-top: auto; display: flex; flex-direction: column; gap: .5rem; }
  .today-mini {
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: .7rem .75rem;
    border-radius: 12px;
    color: var(--text);
    background: var(--surface-2);
    box-shadow: var(--shadow);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .today-mini:hover { color: var(--text); }
  .today-mini:active { transform: scale(.98); }
  .mini-flame {
    flex: none;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    color: var(--text-tertiary);
    background: var(--surface);
    box-shadow: inset 0 0 0 1px var(--line);
  }
  .mini-flame.lit { color: #fff; background: #c2410c; box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14); }
  .mini-text { display: flex; flex-direction: column; min-width: 0; line-height: 1.25; font-size: .78rem; font-weight: 700; color: var(--text-secondary); }
  .mini-text strong { color: var(--text); font-size: .92rem; font-weight: 650; }
  .pips { display: flex; gap: 4px; margin-top: .3rem; }
  .pips span { width: 22px; height: 7px; border-radius: 4px; background: var(--q-track); }
  .pips span.done { background: var(--q); }

  .account-row { display: flex; align-items: center; gap: .4rem; }
  .who {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: .35rem .4rem;
    border-radius: 12px;
    color: var(--text);
  }
  .who:hover { color: var(--text); background: color-mix(in srgb, var(--text) 5%, transparent); }
  .avatar {
    flex: none;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: #fff;
    font-family: var(--font-display);
    font-weight: 680;
    font-size: .95rem;
    background: var(--brand);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }
  .who-text { display: flex; flex-direction: column; min-width: 0; line-height: 1.2; }
  .who-text strong { font-size: .88rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .who-text span { font-size: .76rem; color: var(--text-secondary); }
  .signin {
    flex: 1;
    display: grid;
    place-items: center;
    min-height: 44px;
    border-radius: 14px;
    font-family: var(--font-display);
    font-weight: 680;
    font-size: 1rem;
    background: var(--brand);
    color: var(--on-brand);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .signin:hover { color: var(--on-brand); background: var(--brand-hover); }
  .signin:active { transform: scale(.98); }

  .icon-btn {
    flex: none;
    width: 44px;
    height: 44px;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 14px;
    color: var(--text-secondary);
  }

  /* ------------------------------------------------------------ tab bar */
  .tabbar {
    position: fixed;
    left: 50%;
    bottom: calc(14px + env(safe-area-inset-bottom));
    transform: translateX(-50%);
    z-index: 30;
    display: flex;
    gap: 4px;
    padding: 6px;
    border-radius: 18px;
    box-shadow: var(--shadow);
  }
  .tabbar a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 76px;
    min-height: 48px;
    padding: .42rem .9rem .38rem;
    border-radius: 14px;
    color: var(--text-secondary);
    font-size: .72rem;
    font-weight: 650;
    transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease), transform var(--dur-fast) var(--ease);
  }
  .tabbar a:active { transform: scale(.94); }
  .tabbar a.active {
    color: var(--brand-text);
    background: var(--brand-soft);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--brand) 35%, transparent);
  }
</style>
