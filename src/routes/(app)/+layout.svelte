<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import Icon, { type IconName } from '$lib/components/Icon.svelte';
  import Rings from '$lib/components/Rings.svelte';
  import { session } from '$lib/session.svelte';
  import { stats } from '$lib/stats.svelte';
  import { theme } from '$lib/theme.svelte';
  import { RING_COLORS } from '$lib/modules';
  import { myEnrolledSubjectCodes } from '$lib/classes';

  let { children, data } = $props();

  /**
   * Everything under (app) is for people with an account. A visitor without one
   * is sent to the landing page.
   *
   * WHAT THIS IS AND IS NOT
   *
   * It is a gate in the interface. It is NOT access control, and it must not be
   * mistaken for it. Every lesson is prerendered to a static HTML file served by
   * GitHub Pages, so the words are in the file before any JavaScript runs:
   * `curl` the URL, or view source, or turn JavaScript off, and the lesson is
   * right there. No amount of client-side code changes that, because there is no
   * server in this architecture to ask "who are you?" before sending bytes.
   *
   * Genuinely restricting content needs one of two things: a host that can run
   * code on request (an edge function), or the lesson bodies moved into the
   * database behind RLS so they are fetched rather than baked in. Both are real
   * pieces of work, and neither is a setting.
   *
   * What this DOES do is make the product's intent unambiguous to every ordinary
   * visitor, which is what was asked for.
   */
  const gated = $derived(session.available && session.ready && !session.user);

  $effect(() => {
    if (!gated) return;
    // Remember where they were headed, so signing in finishes the journey
    // rather than dumping them on the dashboard.
    const dest = page.url.pathname.slice(base.length) || '/today';
    void goto(`${base}/?next=${encodeURIComponent(dest)}`, { replaceState: true });
  });

  /**
   * Hold the chrome back until we know who this is.
   *
   * Without this the sidebar and the page render for a moment before the
   * redirect fires, which both looks broken and shows a flash of the thing we
   * were asked not to show.
   */
  const checking = $derived(session.available && !session.ready);

  // Subjects the signed-in student is registered for. Empty means "not
  // registered for anything", which shows all of them: someone studying alone
  // must still be able to reach the content, and the registration list only
  // narrows the shell once it has something in it.
  let enrolled = $state<string[]>([]);
  let enrolledFor = $state<string | null>(null);

  $effect(() => {
    const id = session.user?.id ?? null;
    if (!session.ready || id === enrolledFor) return;
    enrolledFor = id;
    if (!id) { enrolled = []; return; }
    void myEnrolledSubjectCodes().then((codes) => { enrolled = codes; });
  });

  // Colours for the subject dots, keyed by subject code. A subject with no
  // entry here still shows, in the neutral brand colour.
  const DOT: Record<string, string> = { math: '#30b862', it: '#0a84ff', edpm: '#ff8a00' };

  // Subjects that exist but have no lessons yet are listed, not linked: a
  // student should see the platform growing into their other subjects.
  const SOON = ['Information Technology', 'EDPM'];

  // The tab bar has room for a word, not a subject's full name.
  const SHORT: Record<string, string> = { math: 'Maths', it: 'IT', edpm: 'EDPM' };

  type Item = { href: string; label: string; icon: IconName; match: (p: string) => boolean };

  const path = $derived(page.url.pathname.slice(base.length) || '/');

  // Named for what is inside, not "Home": Today is today's work, and each
  // subject stands for its syllabus. Specific labels are predictable ones.
  const allReady = $derived(data.subjects.filter((s) => s.ready));

  // What this account is registered for, or everything if it is registered for
  // nothing. This is presentation only: lesson pages are prerendered static
  // HTML and stay reachable by URL. What a class actually protects is the
  // student's DATA, and that is enforced by RLS, not here.
  const ready = $derived(
    enrolled.length ? allReady.filter((s) => enrolled.includes(s.code)) : allReady
  );

  // Every ready subject gets a tab. The phone has no sidebar, so a subject
  // left out here is reachable only through Today.
  const items: Item[] = $derived([
    { href: '/today', label: 'Today', icon: 'today', match: (p) => p.startsWith('/today') },
    ...ready.map((s) => ({
      href: `/${s.code}`,
      label: s.name,
      icon: 'book' as IconName,
      match: (p: string) => p.startsWith(`/${s.code}`)
    })),
    { href: '/classes', label: 'Classes', icon: 'grid', match: (p) => p.startsWith('/classes') },
    { href: '/account', label: 'Account', icon: 'person', match: (p) => p.startsWith('/account') }
  ]);

  // The desktop sidebar lists subjects in their own section below, so its top
  // nav carries only the destinations that are not a subject. Account lives in
  // the sidebar foot, next to the avatar.
  const sideItems: Item[] = $derived(
    items.filter((i) => i.href === '/today' || i.href === '/classes')
  );

  const miniRings = $derived([
    { value: stats.rings.learn, ...RING_COLORS.learn, label: 'Learn' },
    { value: stats.rings.review, ...RING_COLORS.review, label: 'Review' },
    { value: stats.rings.practice, ...RING_COLORS.practice, label: 'Practice' }
  ]);
</script>

{#if checking || gated}
  <!-- Deliberately bare. Rendering the shell here would show the navigation,
       the streak and the subject list to somebody on their way out. -->
  <div class="holding">
    <p class="muted">{gated ? 'Taking you to the sign-in page…' : 'One moment…'}</p>
  </div>
{:else}
<div class="shell">
  <!-- Desktop: a floating glass sidebar, inset from the window edges. -->
  <aside class="sidebar glass" aria-label="Main">
    <a class="brand" href="{base}/">
      <span class="mark"><Icon name="sparkle" size={16} /></span>
      Grade One
    </a>

    <nav class="side-nav">
      {#each sideItems as it}
        <a href="{base}{it.href}" class:active={it.match(path)} aria-current={it.match(path) ? 'page' : undefined}>
          <Icon name={it.icon} size={19} />
          <span>{it.label}</span>
        </a>
      {/each}
    </nav>

    <p class="side-label">Subjects</p>
    <nav class="side-nav subjects">
      {#each ready as s}
        <a href="{base}/{s.code}" class:active={path.startsWith(`/${s.code}`)}>
          <span class="dot" style="background:{DOT[s.code] ?? 'var(--brand)'}"></span><span>{s.name}</span>
        </a>
      {/each}
      {#each SOON as name}
        {#if !ready.some((s) => s.name === name)}
          <span class="soon"><span class="dot" style="background:{name === 'EDPM' ? DOT.edpm : DOT.it}"></span>{name}<em>Soon</em></span>
        {/if}
      {/each}
    </nav>

    <div class="side-foot">
      <a class="today-mini" href="{base}/today" aria-label="Today's rings">
        <Rings rings={miniRings} size={38} stroke={5} gap={1.5} />
        <span class="mini-text">
          <strong>Level {stats.level}</strong>
          <span>
            {#if stats.streak > 0}<span class="flame"><Icon name="flame" size={12} /></span>{stats.streak}-day streak{:else}Start a streak today{/if}
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
        <span>{SHORT[it.href.slice(1)] ?? it.label}</span>
      </a>
    {/each}
  </nav>
</div>
{/if}

<style>
  .holding {
    min-height: 60vh;
    display: grid;
    place-items: center;
    padding: 2rem;
  }

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
      border-radius: 22px;
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
    font-weight: 680;
    font-size: 1.02rem;
    letter-spacing: -.02em;
  }
  .brand:hover { color: var(--text); }
  .mark {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 8px;
    color: #fff;
    background: linear-gradient(135deg, #34c759, #0b7a5e);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35);
  }

  .side-nav { display: flex; flex-direction: column; gap: 2px; }
  .side-nav a, .soon {
    display: flex;
    align-items: center;
    gap: .7rem;
    padding: .5rem .65rem;
    border-radius: 10px;
    color: var(--text);
    font-size: .95rem;
    font-weight: 500;
    letter-spacing: -.008em;
    transition: background-color var(--dur-fast) var(--ease), transform var(--dur-fast) var(--ease);
  }
  .side-nav a :global(svg) { color: var(--text-secondary); }
  @media (hover: hover) {
    .side-nav a:hover { background: color-mix(in srgb, var(--text) 6%, transparent); color: var(--text); }
  }
  .side-nav a:active { transform: scale(.98); }
  .side-nav a.active {
    background: color-mix(in srgb, var(--brand) 14%, transparent);
    color: var(--brand);
    font-weight: 600;
  }
  .side-nav a.active :global(svg) { color: var(--brand); }

  .side-label {
    margin: 1.4rem .65rem .35rem;
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
    color: var(--text-tertiary);
  }
  .dot { width: 9px; height: 9px; border-radius: 50%; flex: none; margin: 0 .25rem 0 .35rem; }
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
    padding: .6rem .65rem;
    border-radius: 14px;
    color: var(--text);
    background: color-mix(in srgb, var(--text) 4%, transparent);
    transition: background-color var(--dur-fast) var(--ease);
  }
  .today-mini:hover { color: var(--text); background: color-mix(in srgb, var(--text) 7%, transparent); }
  .mini-text { display: flex; flex-direction: column; line-height: 1.25; font-size: .8rem; color: var(--text-secondary); }
  .mini-text strong { color: var(--text); font-size: .9rem; font-weight: 620; }
  .flame { color: #ff8a00; display: inline-flex; vertical-align: -1px; margin-right: 2px; }

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
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    font-weight: 650;
    font-size: .85rem;
    background: linear-gradient(135deg, #40a9ff, #3a3ad6);
  }
  .who-text { display: flex; flex-direction: column; min-width: 0; line-height: 1.2; }
  .who-text strong { font-size: .88rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .who-text span { font-size: .76rem; color: var(--text-secondary); }
  .signin {
    flex: 1;
    text-align: center;
    padding: .5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: .9rem;
    background: var(--brand);
    color: var(--on-brand);
  }
  .signin:hover { color: var(--on-brand); background: var(--brand-hover); }

  .icon-btn {
    flex: none;
    width: 34px;
    height: 34px;
    padding: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
  }
  @media (hover: hover) {
    .icon-btn:hover { background: color-mix(in srgb, var(--text) 7%, transparent); color: var(--text); }
  }

  /* ------------------------------------------------------------ tab bar */
  .tabbar {
    position: fixed;
    left: 50%;
    bottom: calc(14px + env(safe-area-inset-bottom));
    transform: translateX(-50%);
    z-index: 30;
    display: flex;
    gap: 2px;
    padding: 5px;
    border-radius: 30px;
  }
  .tabbar a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 76px;
    padding: .42rem .9rem .38rem;
    border-radius: 24px;
    color: var(--text-secondary);
    font-size: .68rem;
    font-weight: 600;
    letter-spacing: .01em;
    transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease), transform var(--dur-fast) var(--ease);
  }
  .tabbar a:active { transform: scale(.94); }
  .tabbar a.active {
    color: var(--brand);
    background: color-mix(in srgb, var(--brand) 13%, transparent);
  }
</style>
