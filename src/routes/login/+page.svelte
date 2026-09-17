<script lang="ts">
  import { goto } from '$app/navigation';
  import { supabase, isConfigured, friendlyError } from '$lib/supabase';
  import { syncOnSignIn } from '$lib/sync';

  let email = $state('');
  let password = $state('');
  let busy = $state(false);
  let error = $state<string | null>(null);
  let notice = $state<string | null>(null);
  let sentReset = $state(false);

  const canSubmit = $derived(email.includes('@') && password.length > 0 && !busy);

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const db = supabase();
    if (!db) {
      error = 'Accounts are not connected yet. Your progress is still saved in this browser.';
      return;
    }

    busy = true;
    error = null;

    const { data, error: err } = await db.auth.signInWithPassword({
      email: email.trim(),
      password
    });

    if (err) {
      error = friendlyError(err.message);
      busy = false;
      return;
    }

    // Tell the student what happened to their work rather than silently
    // swapping it — this is the moment they are most likely to notice.
    const outcome = await syncOnSignIn(data.user.id);
    if (outcome === 'uploaded') notice = 'Your progress from this browser was saved to your account.';
    await goto('/math');
  }

  async function resetPassword() {
    const db = supabase();
    if (!db || !email.includes('@')) {
      error = 'Type your email address first, then tap this again.';
      return;
    }
    busy = true;
    const { error: err } = await db.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${location.origin}/account`
    });
    busy = false;
    if (err) error = friendlyError(err.message);
    else { sentReset = true; error = null; }
  }
</script>

<svelte:head>
  <title>Sign in — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="wrap auth">
  <div class="panel">
    <h1>Sign in</h1>
    <p class="sub muted">Pick up where you left off, on any device.</p>

    {#if !isConfigured}
      <p class="warn small">
        Accounts are not connected yet. You can still study — progress is saved in this
        browser.
      </p>
    {/if}

    {#if sentReset}
      <p class="ok small">
        If that email has an account, a reset link is on its way.
      </p>
    {/if}

    {#if notice}
      <p class="ok small">{notice}</p>
    {/if}

    <form onsubmit={submit} novalidate>
      <label>
        <span class="eyebrow">Email</span>
        <input bind:value={email} type="email" autocomplete="email" placeholder="you@example.com" required />
      </label>

      <label>
        <span class="eyebrow">Password</span>
        <input bind:value={password} type="password" autocomplete="current-password" required />
      </label>

      {#if error}
        <p class="error small" role="alert">{error}</p>
      {/if}

      <button class="primary submit" type="submit" disabled={!canSubmit}>
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>

    <button class="link small" type="button" onclick={resetPassword} disabled={busy}>
      Forgot your password?
    </button>

    <p class="alt small">
      No account yet? <a href="/signup">Create one</a>
    </p>
  </div>
</div>

<style>
  .auth { max-width: 420px; padding-top: 1rem; }

  .panel {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow);
    padding: 1.9rem 1.75rem;
  }
  h1 { font-size: 1.6rem; letter-spacing: -.024em; line-height: 1.12; margin: 0 0 .4rem; }
  .sub { margin: 0 0 1.5rem; font-size: .95rem; }

  form { display: flex; flex-direction: column; gap: 1rem; }
  label { display: flex; flex-direction: column; gap: .35rem; }

  input {
    font: inherit;
    letter-spacing: var(--track-body);
    padding: .65rem .8rem;
    border: 1px solid var(--separator-firm);
    border-radius: var(--r);
    background: var(--surface);
    color: var(--text);
    transition: border-color var(--dur-fast) var(--ease);
  }
  input:focus { border-color: var(--brand); outline: none; }
  input::placeholder { color: var(--text-tertiary); }

  .submit { margin-top: .3rem; padding: .72rem 1.1rem; }

  .error {
    margin: 0;
    color: var(--wrong);
    background: var(--wrong-soft);
    border-radius: var(--r);
    padding: .55rem .75rem;
  }
  .ok {
    margin: 0 0 1.1rem;
    color: var(--correct);
    background: var(--correct-soft);
    border-radius: var(--r);
    padding: .55rem .75rem;
  }
  .warn {
    margin: 0 0 1.25rem;
    color: var(--reward);
    background: var(--reward-soft);
    border-radius: var(--r);
    padding: .55rem .75rem;
  }

  .link {
    display: block;
    margin: .9rem auto 0;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-secondary);
    font-weight: 450;
  }
  .link:hover:not(:disabled) { background: none; color: var(--brand); }

  .alt { margin: 1.1rem 0 0; text-align: center; color: var(--text-secondary); }
</style>
