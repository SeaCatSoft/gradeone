<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { session } from '$lib/session.svelte';
  import { supabase, friendlyError } from '$lib/supabase';
  import { clearLocal, flush } from '$lib/sync';
  import { load as loadProgress, totalXp, level } from '$lib/progress';
  import { theme } from '$lib/theme.svelte';
  import Icon from '$lib/components/Icon.svelte';

  let name = $state('');
  let school = $state('');
  let sitting = $state('');
  let newPassword = $state('');

  let busy = $state(false);
  let saved = $state(false);
  let error = $state<string | null>(null);
  let loadedFor = $state<string | null>(null);

  const SITTINGS = ['May–June 2027', 'January 2027', 'May–June 2028', 'Not sure yet'];

  // Fill the form once the profile arrives, and again if the account changes.
  $effect(() => {
    const id = session.user?.id ?? null;
    if (id && loadedFor !== id && session.profile) {
      name = session.profile.display_name ?? '';
      school = session.profile.school ?? '';
      sitting = session.profile.exam_sitting ?? SITTINGS[0];
      loadedFor = id;
    }
  });

  const stats = $derived.by(() => {
    const p = loadProgress();
    const xp = totalXp(p);
    return {
      xp,
      level: level(xp).level,
      streak: p.streak.current,
      longest: p.streak.longest,
      objectives: Object.keys(p.mastery).length,
      cards: Object.keys(p.reviews).length
    };
  });

  async function saveProfile(e: SubmitEvent) {
    e.preventDefault();
    const db = supabase();
    if (!db || !session.user) return;

    busy = true;
    error = null;
    saved = false;

    const { error: err } = await db
      .from('profiles')
      .update({
        display_name: name.trim() || 'Student',
        school: school.trim() || null,
        exam_sitting: sitting
      })
      .eq('id', session.user.id);

    busy = false;
    if (err) { error = friendlyError(err.message); return; }
    await session.refreshProfile();
    saved = true;
  }

  async function changePassword() {
    const db = supabase();
    if (!db || newPassword.length < 8) {
      error = 'Use at least 8 characters.';
      return;
    }
    busy = true;
    const { error: err } = await db.auth.updateUser({ password: newPassword });
    busy = false;
    if (err) { error = friendlyError(err.message); return; }
    newPassword = '';
    saved = true;
  }

  async function signOut() {
    // Push anything still pending before the account goes away, then clear
    // this browser so the next person does not inherit someone else's streak.
    await flush(loadProgress(), session.user?.id ?? null);
    await session.signOut();
    clearLocal();
    await goto(`${base}/`);
  }
</script>

<svelte:head>
  <title>Your account — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="account">
  <h1 class="large-title">Account</h1>

  {#if !session.ready}
    <p class="muted">Loading…</p>

  {:else if !session.user}
    <div class="panel center">
      <h1>You are not signed in</h1>
      <p class="muted">
        Your progress is being saved in this browser. Create an account to keep it across
        devices.
      </p>
      <div class="row">
        <a class="btn" href="{base}/signup">Create account</a>
        <a class="quiet" href="{base}/login">Sign in ›</a>
      </div>
    </div>

  {:else}
    <header class="head">
      <span class="big-avatar">{session.displayName.slice(0, 1).toUpperCase()}</span>
      <div>
        <p class="name">{session.displayName}</p>
        <p class="muted small">{session.user.email}</p>
      </div>
    </header>

    <section class="stats">
      <div class="stat"><strong>{stats.level}</strong><span class="small muted">Level</span></div>
      <div class="stat"><strong>{stats.xp}</strong><span class="small muted">XP</span></div>
      <div class="stat"><strong>{stats.streak}</strong><span class="small muted">Day streak</span></div>
      <div class="stat"><strong>{stats.objectives}</strong><span class="small muted">Objectives started</span></div>
    </section>

    <h2 class="section">Details</h2>
    <form class="panel" onsubmit={saveProfile}>
      <label>
        <span class="eyebrow">Name</span>
        <input bind:value={name} type="text" autocomplete="name" />
      </label>
      <label>
        <span class="eyebrow">School <span class="opt">optional</span></span>
        <input bind:value={school} type="text" autocomplete="organization" />
      </label>
      <label>
        <span class="eyebrow">Exam sitting</span>
        <select bind:value={sitting}>
          {#each SITTINGS as s}<option value={s}>{s}</option>{/each}
        </select>
      </label>

      {#if error}<p class="error small" role="alert">{error}</p>{/if}
      {#if saved}<p class="ok small">Saved.</p>{/if}

      <button class="primary" type="submit" disabled={busy}>
        {busy ? 'Saving…' : 'Save changes'}
      </button>
    </form>

    <h2 class="section">Password</h2>
    <div class="panel">
      <label>
        <span class="eyebrow">New password</span>
        <input bind:value={newPassword} type="password" autocomplete="new-password"
               placeholder="At least 8 characters" />
      </label>
      <button type="button" onclick={changePassword} disabled={busy || newPassword.length < 8}>
        Change password
      </button>
    </div>

    <h2 class="section">Studying on more than one device</h2>
    <div class="panel note">
      <p class="small muted">
        Your progress syncs when you sign in, and saves as you work. If you study on two
        devices at once, the one you signed in on most recently wins — review schedules
        are not merged, because there is no honest way to combine two of them.
      </p>
    </div>

    <div class="danger">
      <button type="button" onclick={signOut}>Sign out</button>
    </div>
  {/if}

  <!-- Here as well as in the sidebar: on a phone the tab bar has no room for
       it, and this is where iOS puts appearance settings. -->
  <h2 class="section">Appearance</h2>
  <button class="appearance" onclick={() => theme.toggle()}>
    <Icon name={theme.isDark ? 'moon' : 'sun'} size={19} />
    <span>{theme.isDark ? 'Dark' : 'Light'}</span>
    <span class="muted small switch-to">Switch to {theme.isDark ? 'light' : 'dark'}</span>
  </button>
</div>

<style>
  .account { max-width: 600px; }
  .account > :global(.large-title) { margin-bottom: 1.5rem; }
  .big-avatar {
    flex: none;
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border-radius: 18px;
    color: #fff;
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 600;
    background: var(--brand);
    box-shadow: 0 4px 0 var(--brand-edge);
  }
  .name { margin: 0; font-family: var(--font-display); font-size: 1.45rem; font-weight: 600; }
  /* Its own class rather than reusing .panel: .panel is a column, and on a
     button its layout lost to .panel's by source order. */
  button.appearance {
    display: flex;
    align-items: center;
    gap: .75rem;
    width: 100%;
    padding: .95rem 1.2rem;
    border: 0;
    border-radius: var(--r-lg);
    background: var(--surface);
    color: var(--text);
    box-shadow: var(--shadow);
    text-align: left;
    font-weight: 800;
  }
  @media (hover: hover) {
    button.appearance:hover { background: var(--surface-2); }
  }
  .switch-to { margin-left: auto; }

  .panel {
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow);
    padding: 1.35rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .center { text-align: center; align-items: center; }
  .center h1 { font-size: 1.4rem; margin: 0; }
  .center p { margin: 0; max-width: 40ch; }

  .head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .head p { margin: 0; }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: .7rem;
  }
  .stat {
    background: var(--surface);
    border-radius: var(--r);
    box-shadow: var(--shadow);
    padding: .85rem 1rem;
    display: flex;
    flex-direction: column;
    gap: .1rem;
  }
  .stat strong {
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
  }

  .section {
    margin: 2rem 0 .8rem;
    font-size: .78rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--text-tertiary);
  }

  label { display: flex; flex-direction: column; gap: .35rem; }
  .opt { text-transform: none; letter-spacing: 0; font-weight: 400; color: var(--text-tertiary); }

  input, select {
    font: inherit;
    letter-spacing: var(--track-body);
    padding: .6rem .8rem;
    border: 2px solid var(--line);
    min-height: 48px;
    border-radius: var(--r);
    background: var(--surface);
    color: var(--text);
    transition: border-color var(--dur-fast) var(--ease);
  }
  input:focus, select:focus { border-color: var(--brand-text); outline: none; box-shadow: 0 0 0 4px var(--brand-soft); }

  .error { margin: 0; color: var(--wrong); background: var(--wrong-soft); border-radius: var(--r); padding: .5rem .7rem; }
  .ok { margin: 0; color: var(--correct); background: var(--correct-soft); border-radius: var(--r); padding: .5rem .7rem; }

  .note p { margin: 0; }

  .row { display: flex; gap: 1rem; align-items: center; justify-content: center; }
  .btn {
    display: inline-grid;
    place-items: center;
    min-height: 48px;
    background: var(--brand);
    color: var(--on-brand);
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 600;
    padding: .6rem 1.4rem;
    border-radius: var(--r);
    box-shadow: 0 4px 0 var(--brand-edge);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .btn:active { transform: translateY(4px); box-shadow: 0 0 0 var(--brand-edge); }
  .quiet { color: var(--text-secondary); font-size: .92rem; }
  .quiet:hover { color: var(--brand-text); }

  .danger { margin-top: 2.25rem; padding-top: 1.5rem; border-top: 2px solid var(--separator); }
  .danger button { color: var(--wrong); background: var(--wrong-soft); box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--wrong) 40%, transparent), 0 4px 0 color-mix(in srgb, var(--wrong) 40%, transparent); }
  .danger button:hover:not(:disabled) { background: color-mix(in srgb, var(--wrong) 18%, transparent); }
  .danger button:active:not(:disabled) { box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--wrong) 40%, transparent), 0 0 0 transparent; }
</style>
