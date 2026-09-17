<script lang="ts">
  import { goto } from '$app/navigation';
  import { session } from '$lib/session.svelte';
  import { supabase, friendlyError } from '$lib/supabase';
  import { clearLocal, flush } from '$lib/sync';
  import { load as loadProgress, totalXp, level } from '$lib/progress';

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
    await goto('/');
  }
</script>

<svelte:head>
  <title>Your account — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="wrap account">
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
        <a class="btn" href="/signup">Create account</a>
        <a class="quiet" href="/login">Sign in ›</a>
      </div>
    </div>

  {:else}
    <header class="head">
      <h1>{session.displayName}</h1>
      <p class="muted small">{session.user.email}</p>
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
</div>

<style>
  .account { max-width: 560px; }

  .panel {
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    padding: 1.35rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .center { text-align: center; align-items: center; }
  .center h1 { font-size: 1.4rem; letter-spacing: -.022em; margin: 0; }
  .center p { margin: 0; max-width: 40ch; }

  .head { margin-bottom: 1.75rem; }
  .head h1 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    letter-spacing: -.026em;
    line-height: 1.08;
    margin: 0 0 .2rem;
  }
  .head p { margin: 0; }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: .7rem;
  }
  .stat {
    background: var(--surface);
    border-radius: var(--r);
    box-shadow: var(--shadow-sm);
    padding: .85rem 1rem;
    display: flex;
    flex-direction: column;
    gap: .1rem;
  }
  .stat strong {
    font-size: 1.5rem;
    font-weight: 620;
    letter-spacing: -.024em;
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
  }

  .section {
    margin: 2rem 0 .8rem;
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--text-tertiary);
  }

  label { display: flex; flex-direction: column; gap: .35rem; }
  .opt { text-transform: none; letter-spacing: 0; font-weight: 400; color: var(--text-tertiary); }

  input, select {
    font: inherit;
    letter-spacing: var(--track-body);
    padding: .6rem .8rem;
    border: 1px solid var(--separator-firm);
    border-radius: var(--r);
    background: var(--surface);
    color: var(--text);
    transition: border-color var(--dur-fast) var(--ease);
  }
  input:focus, select:focus { border-color: var(--brand); outline: none; }

  .error { margin: 0; color: var(--wrong); background: var(--wrong-soft); border-radius: var(--r); padding: .5rem .7rem; }
  .ok { margin: 0; color: var(--correct); background: var(--correct-soft); border-radius: var(--r); padding: .5rem .7rem; }

  .note p { margin: 0; }

  .row { display: flex; gap: 1rem; align-items: center; justify-content: center; }
  .btn {
    display: inline-block;
    background: var(--brand);
    color: var(--on-brand);
    font-weight: 560;
    padding: .65rem 1.3rem;
    border-radius: var(--r-pill);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .quiet { color: var(--text-secondary); font-size: .92rem; }
  .quiet:hover { color: var(--brand); }

  .danger { margin-top: 2.25rem; padding-top: 1.5rem; border-top: .5px solid var(--separator); }
  .danger button { color: var(--wrong); border-color: transparent; background: var(--wrong-soft); }
  .danger button:hover:not(:disabled) { background: color-mix(in srgb, var(--wrong) 18%, transparent); }
</style>
