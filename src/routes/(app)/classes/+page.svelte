<script lang="ts">
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { session } from '$lib/session.svelte';
  import { friendlyError } from '$lib/supabase';
  import Icon from '$lib/components/Icon.svelte';
  import ClassDetail from '$lib/components/ClassDetail.svelte';
  import {
    classesITeach, classesIAmIn, createClass, joinClass, leaveClass,
    listSubjects, type ClassRow
  } from '$lib/classes';

  // ?c=<id> opens one class. A query parameter rather than /classes/<id>
  // because the (app) layout has a server load, so a non-prerendered child
  // route would need a __data.json that no static host can generate.
  //
  // Read in the browser only: prerendering refuses to touch searchParams, and
  // rightly so — one prerendered file cannot vary by query string. The
  // prerendered HTML is the list, and the client swaps in the detail on
  // hydration.
  const openId = $derived(browser ? Number(page.url.searchParams.get('c')) || null : null);

  let teaching = $state<ClassRow[]>([]);
  let attending = $state<ClassRow[]>([]);
  let subjects = $state<{ id: number; code: string; name: string }[]>([]);
  let loaded = $state(false);
  let loadedFor = $state<string | null>(null);

  let code = $state('');
  let newName = $state('');
  let newSubject = $state<number | null>(null);
  let busy = $state(false);
  let error = $state<string | null>(null);
  let notice = $state<string | null>(null);
  let copied = $state<number | null>(null);

  // Reload whenever the account changes, including on first sign-in. Keyed on
  // the user id rather than a boolean so switching accounts cannot leave the
  // previous teacher's classes on screen.
  $effect(() => {
    const id = session.user?.id ?? null;
    if (!session.ready) return;
    if (id === loadedFor) return;
    loadedFor = id;
    if (!id) { teaching = []; attending = []; loaded = true; return; }
    void refresh();
  });

  async function refresh() {
    loaded = false;
    const [t, a, s] = await Promise.all([
      session.isTeacher ? classesITeach() : Promise.resolve([]),
      classesIAmIn(),
      session.isTeacher ? listSubjects() : Promise.resolve([])
    ]);
    teaching = t;
    attending = a;
    subjects = s;
    newSubject ??= s[0]?.id ?? null;
    loaded = true;
  }

  async function submitJoin(e: SubmitEvent) {
    e.preventDefault();
    error = null; notice = null; busy = true;
    try {
      await joinClass(code.trim());
      notice = 'Joined.';
      code = '';
      await refresh();
    } catch (err) {
      error = friendlyError((err as Error).message);
    } finally {
      busy = false;
    }
  }

  async function submitCreate(e: SubmitEvent) {
    e.preventDefault();
    if (!newName.trim() || !newSubject) return;
    error = null; notice = null; busy = true;
    try {
      await createClass(newSubject, newName.trim());
      newName = '';
      await refresh();
    } catch (err) {
      error = friendlyError((err as Error).message);
    } finally {
      busy = false;
    }
  }

  async function leave(c: ClassRow) {
    if (!confirm(`Leave ${c.name}? Your progress is kept — you simply stop appearing on the teacher's roster.`)) return;
    await leaveClass(c.id);
    await refresh();
  }

  /** The class named by ?c=, if the account can actually see it. */
  const open = $derived.by(() => {
    if (!openId) return null;
    const owned = teaching.find((c) => c.id === openId);
    if (owned) return { info: owned, mine: true };
    const joined = attending.find((c) => c.id === openId);
    return joined ? { info: joined, mine: false } : null;
  });

  async function copyCode(c: ClassRow) {
    try {
      await navigator.clipboard.writeText(c.join_code);
      copied = c.id;
      setTimeout(() => { if (copied === c.id) copied = null; }, 1800);
    } catch {
      // Clipboard access can be refused; the code is on screen to read anyway.
    }
  }
</script>

<svelte:head>
  <title>Classes — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="classes">
  <!-- The detail view supplies its own heading, so the page title would be a
       second h1 on the same screen. -->
  {#if !openId}
    <h1 class="large-title">Classes</h1>
  {/if}

  {#if !session.ready}
    <p class="muted">Loading…</p>

  {:else if !session.available}
    <div class="panel">
      <p class="muted small">
        Classes need an account, and no Supabase project is connected to this build.
        Everything else still works signed-out in this browser.
      </p>
    </div>

  {:else if !session.user}
    <div class="panel center">
      <h2>Sign in to join a class</h2>
      <p class="muted small">
        Your teacher will give you a six-character code. Joining a class lets them see
        your progress for that subject, and lets you see the work they set.
      </p>
      <div class="row">
        <a class="btn" href="{base}/signup">Create account</a>
        <a class="quiet" href="{base}/login">Sign in ›</a>
      </div>
    </div>

  {:else if openId}
    <a class="back-link" href="{base}/classes"><Icon name="chevron-left" size={17} />All classes</a>
    {#if !loaded}
      <p class="muted">Loading…</p>
    {:else if open}
      <ClassDetail info={open.info} mine={open.mine}
                   onchanged={() => { void goto(`${base}/classes`); void refresh(); }} />
    {:else}
      <div class="panel">
        <h2>Not found</h2>
        <p class="muted small">
          This class does not exist, or you are not in it. If a teacher has given you
          a code, enter it on the <a href="{base}/classes">Classes</a> page.
        </p>
      </div>
    {/if}

  {:else}
    {#if error}<p class="error small" role="alert">{error}</p>{/if}
    {#if notice}<p class="ok small">{notice}</p>{/if}

    {#if session.isTeacher}
      <div class="section-head">
        <h2>Classes you teach</h2>
        <span class="role-chip">{session.role}</span>
      </div>

      {#if !loaded}
        <p class="muted small">Loading…</p>
      {:else if teaching.length === 0}
        <div class="panel">
          <p class="muted small">
            No classes yet. Create one below, then give your students its join code.
          </p>
        </div>
      {:else}
        <ul class="list">
          {#each teaching as c (c.id)}
            <li class="card-row">
              <a class="grow" href="{base}/classes?c={c.id}">
                <strong>{c.name}</strong>
                <span class="muted small">
                  {c.subject_name} · {c.member_count} {c.member_count === 1 ? 'student' : 'students'}
                </span>
              </a>
              <button class="code" type="button" onclick={() => copyCode(c)}
                      title="Copy join code">
                <span class="mono">{c.join_code}</span>
                <Icon name={copied === c.id ? 'check' : 'cards'} size={14} />
              </button>
            </li>
          {/each}
        </ul>
      {/if}

      <h2 class="section">Create a class</h2>
      <form class="panel" onsubmit={submitCreate}>
        <label>
          <span class="eyebrow">Name</span>
          <input bind:value={newName} type="text" placeholder="4A Information Technology" />
        </label>
        <label>
          <span class="eyebrow">Subject</span>
          <select bind:value={newSubject}>
            {#each subjects as s}<option value={s.id}>{s.name}</option>{/each}
          </select>
        </label>
        <button class="primary" type="submit" disabled={busy || !newName.trim() || !newSubject}>
          {busy ? 'Creating…' : 'Create class'}
        </button>
      </form>
    {/if}

    <div class="section-head">
      <h2>{session.isTeacher ? 'Classes you are in' : 'Your classes'}</h2>
    </div>

    {#if !loaded}
      <p class="muted small">Loading…</p>
    {:else if attending.length === 0}
      <div class="panel">
        <p class="muted small">
          You have not joined a class. You can study everything without one — a class
          simply connects you to a teacher, who can then set you work and see how you
          are getting on.
        </p>
      </div>
    {:else}
      <ul class="list">
        {#each attending as c (c.id)}
          <li class="card-row">
            <a class="grow" href="{base}/classes?c={c.id}">
              <strong>{c.name}</strong>
              <span class="muted small">{c.subject_name}</span>
            </a>
            <button class="quiet-btn" type="button" onclick={() => leave(c)}>Leave</button>
          </li>
        {/each}
      </ul>
    {/if}

    <h2 class="section">Join a class</h2>
    <form class="panel" onsubmit={submitJoin}>
      <label>
        <span class="eyebrow">Join code</span>
        <input bind:value={code} type="text" class="mono code-input" maxlength="6"
               placeholder="ABC234" autocapitalize="characters" autocomplete="off"
               spellcheck="false" />
      </label>
      <p class="muted small">
        Six characters from your teacher. Joining lets them see your progress in that
        subject — nothing else, and no other teacher sees anything.
      </p>
      <button class="primary" type="submit" disabled={busy || code.trim().length < 4}>
        {busy ? 'Joining…' : 'Join'}
      </button>
    </form>

    {#if session.isAdmin}
      <h2 class="section">Administration</h2>
      <a class="card-row link-row" href="{base}/admin">
        <span class="grow">
          <strong>People and roles</strong>
          <span class="muted small">Make someone a teacher or an admin</span>
        </span>
        <Icon name="chevron" size={15} />
      </a>
    {/if}
  {/if}
</div>

<style>
  .classes { max-width: 820px; }
  .classes > :global(.large-title) { margin-bottom: 1.5rem; }

  .back-link {
    display: inline-flex; align-items: center; gap: .2rem;
    font-size: .95rem; text-decoration: none; margin-bottom: 1rem;
  }

  .panel {
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    padding: 1.35rem 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .panel.center { text-align: center; align-items: center; }
  .panel h2 { margin: 0; font-size: 1.15rem; }

  .section { margin: 2rem 0 .9rem; font-size: 1.28rem; font-weight: 680; letter-spacing: -.02em; }
  .section-head { display: flex; align-items: baseline; gap: .7rem; margin: 2rem 0 .9rem; }
  .section-head h2 { margin: 0; font-size: 1.28rem; font-weight: 680; letter-spacing: -.02em; }

  .role-chip {
    font-size: .72rem;
    font-weight: 650;
    letter-spacing: .04em;
    text-transform: uppercase;
    padding: .18rem .5rem;
    border-radius: 999px;
    background: var(--brand-soft, rgba(48,184,98,.14));
    color: var(--brand);
  }

  .list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .6rem; }

  .card-row {
    display: flex;
    align-items: center;
    gap: .8rem;
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    padding: .9rem 1rem;
  }
  .card-row .grow { flex: 1; display: flex; flex-direction: column; gap: .15rem; text-decoration: none; color: inherit; }
  .card-row strong { font-weight: 620; }
  .link-row { text-decoration: none; color: inherit; }

  .mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; }

  .code {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-size: .9rem;
    padding: .4rem .6rem;
    border-radius: 10px;
    border: 1px solid var(--hairline, rgba(0,0,0,.12));
    background: transparent;
    cursor: pointer;
  }
  .code-input { text-transform: uppercase; }
  .quiet-btn { background: transparent; font-size: .9rem; cursor: pointer; }

  .row { display: flex; gap: .8rem; align-items: center; justify-content: center; }
  .error { color: var(--wrong); }
  .ok { color: var(--brand); }
</style>
