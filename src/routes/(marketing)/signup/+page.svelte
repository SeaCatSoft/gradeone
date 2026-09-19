<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { supabase, isConfigured, friendlyError } from '$lib/supabase';
  import { syncOnSignIn } from '$lib/sync';

  let name = $state('');
  let email = $state('');
  let password = $state('');
  let sitting = $state('May–June 2027');

  let busy = $state(false);
  let error = $state<string | null>(null);
  let checkEmail = $state(false);

  // CXC sits Mathematics in May–June and January. Offering the real sittings
  // beats a free-text box nobody fills in consistently.
  const SITTINGS = ['May–June 2027', 'January 2027', 'May–June 2028', 'Not sure yet'];

  const canSubmit = $derived(
    name.trim().length > 1 && email.includes('@') && password.length >= 8 && !busy
  );

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

    const { data, error: err } = await db.auth.signUp({
      email: email.trim(),
      password,
      options: {
        // Read by the handle_new_user trigger in migration 003.
        data: { display_name: name.trim(), exam_sitting: sitting },
        emailRedirectTo: `${location.origin}${base}/login`
      }
    });

    if (err) {
      error = friendlyError(err.message);
      busy = false;
      return;
    }

    // No session means the project requires email confirmation first.
    if (!data.session) {
      checkEmail = true;
      busy = false;
      return;
    }

    await syncOnSignIn(data.session.user.id);
    await goto(`${base}/math`);
  }
</script>

<svelte:head>
  <title>Create an account — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="wrap auth">
  {#if checkEmail}
    <div class="panel">
      <span class="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
             stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M3.5 7l8.5 6 8.5-6" />
        </svg>
      </span>
      <h1>Check your email</h1>
      <p class="muted">
        We sent a confirmation link to <strong>{email}</strong>. Click it and you will be
        signed in. Nothing you have already studied is lost — it is saved in this browser
        and will move across once you confirm.
      </p>
      <a class="quiet" href="{base}/login">Back to sign in ›</a>
    </div>

  {:else}
    <div class="panel">
      <h1>Create your account</h1>
      <p class="muted sub">
        Keeps your progress, streak and review schedule across every device you study on.
      </p>

      {#if !isConfigured}
        <p class="warn small">
          Accounts are not connected yet. You can still study — progress is saved in this
          browser.
        </p>
      {/if}

      <form onsubmit={submit} novalidate>
        <label>
          <span class="eyebrow">Your name</span>
          <input bind:value={name} type="text" autocomplete="name" placeholder="Raymond Morris" required />
        </label>

        <label>
          <span class="eyebrow">Email</span>
          <input bind:value={email} type="email" autocomplete="email" placeholder="you@example.com" required />
        </label>

        <label>
          <span class="eyebrow">Password</span>
          <input
            bind:value={password}
            type="password"
            autocomplete="new-password"
            placeholder="At least 8 characters"
            required
          />
          <span class="hint small" class:met={password.length >= 8}>
            {password.length >= 8 ? 'Long enough' : 'At least 8 characters'}
          </span>
        </label>

        <label>
          <span class="eyebrow">When are you sitting Maths?</span>
          <select bind:value={sitting}>
            {#each SITTINGS as s}<option value={s}>{s}</option>{/each}
          </select>
        </label>

        {#if error}
          <p class="error small" role="alert">{error}</p>
        {/if}

        <button class="primary submit" type="submit" disabled={!canSubmit}>
          {busy ? 'Creating your account…' : 'Create account'}
        </button>
      </form>

      <p class="alt small">
        Already have an account? <a href="{base}/login">Sign in</a>
      </p>
    </div>
  {/if}
</div>

<style>
  .auth { max-width: 420px; padding-top: 1rem; }

  .panel {
    background: var(--surface);
    border-radius: var(--r-xl);
    box-shadow: var(--shadow);
    padding: 1.9rem 1.75rem;
  }
  h1 {
    font-size: 1.6rem;
    line-height: 1.12;
    margin: 0 0 .4rem;
  }
  .sub { margin: 0 0 1.5rem; font-size: .95rem; }

  form { display: flex; flex-direction: column; gap: 1rem; }
  label { display: flex; flex-direction: column; gap: .35rem; }

  input, select {
    font: inherit;
    letter-spacing: var(--track-body);
    padding: .65rem .8rem;
    border: 1px solid var(--line);
    min-height: 48px;
    border-radius: var(--r);
    background: var(--surface);
    color: var(--text);
    transition: border-color var(--dur-fast) var(--ease);
  }
  input:focus, select:focus { border-color: var(--brand-text); outline: none; box-shadow: 0 0 0 4px var(--brand-soft); }
  input::placeholder { color: var(--text-tertiary); }

  .hint { color: var(--text-tertiary); }
  .hint.met { color: var(--correct); }

  .submit { margin-top: .3rem; padding: .72rem 1.1rem; }

  .error {
    margin: 0;
    color: var(--wrong);
    background: var(--wrong-soft);
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

  .alt { margin: 1.25rem 0 0; text-align: center; color: var(--text-secondary); }

  .glyph {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--brand-soft);
    color: var(--brand);
  }
  .glyph svg { width: 21px; height: 21px; }
  .quiet { font-size: .92rem; color: var(--text-secondary); }
  .quiet:hover { color: var(--brand-text); }
</style>
