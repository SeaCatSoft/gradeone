<script lang="ts">
  import { base } from '$app/paths';
  import { session, type Role } from '$lib/session.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { listPeople, setUserRole, type Person } from '$lib/classes';

  let people = $state<Person[]>([]);
  let loaded = $state(false);
  let loadedFor = $state<string | null>(null);
  let filter = $state('');
  let error = $state<string | null>(null);
  let notice = $state<string | null>(null);
  let savingId = $state<string | null>(null);

  const ROLES: Role[] = ['student', 'teacher', 'admin'];

  $effect(() => {
    const id = session.user?.id ?? null;
    if (!session.ready || id === loadedFor) return;
    loadedFor = id;
    if (!id) { people = []; loaded = true; return; }
    void refresh();
  });

  async function refresh() {
    loaded = false;
    people = await listPeople();
    loaded = true;
  }

  const shown = $derived.by(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return people;
    return people.filter(
      (p) => p.display_name.toLowerCase().includes(q) || (p.school ?? '').toLowerCase().includes(q)
    );
  });

  const counts = $derived.by(() => ({
    student: people.filter((p) => p.role === 'student').length,
    teacher: people.filter((p) => p.role === 'teacher').length,
    admin: people.filter((p) => p.role === 'admin').length
  }));

  async function change(person: Person, role: Role) {
    if (role === person.role) return;
    error = null; notice = null; savingId = person.id;
    try {
      await setUserRole(person.id, role);
      person.role = role;
      notice = `${person.display_name} is now ${role === 'admin' ? 'an' : 'a'} ${role}.`;
      // Promoting or demoting yourself changes what this very page may read.
      if (person.id === session.user?.id) await session.refreshProfile();
    } catch (e) {
      error = (e as Error).message;
      await refresh();
    } finally {
      savingId = null;
    }
  }
</script>

<svelte:head>
  <title>People — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="admin">
  <a class="back-link" href="{base}/classes"><Icon name="chevron-left" size={17} />Classes</a>
  <h1 class="large-title">People</h1>

  {#if !session.ready}
    <p class="muted">Loading…</p>

  {:else if !session.isAdmin}
    <div class="panel">
      <h2>Admins only</h2>
      <p class="muted small">
        This page manages who may teach. You are signed in as
        <strong>{session.role}</strong>.
      </p>
      <p class="muted small">
        Nothing is hidden by this message alone — the database returns no rows to
        anyone but an admin, so an unauthorised visitor sees an empty list whatever
        the page decides to render.
      </p>
    </div>

  {:else}
    <p class="muted lede">
      A <strong>teacher</strong> may create classes, set work and see the progress of
      students in their own classes — no others. An <strong>admin</strong> can do that
      and author content. A <strong>student</strong> sees only their own work.
    </p>

    {#if error}<p class="error small" role="alert">{error}</p>{/if}
    {#if notice}<p class="ok small">{notice}</p>{/if}

    <div class="toolbar">
      <input bind:value={filter} type="search" placeholder="Search by name or school" />
      <span class="muted small">
        {counts.student} students · {counts.teacher} teachers · {counts.admin} admins
      </span>
    </div>

    {#if !loaded}
      <p class="muted small">Loading…</p>
    {:else if shown.length === 0}
      <div class="panel"><p class="muted small">Nobody matches that search.</p></div>
    {:else}
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>School</th><th>Role</th></tr>
          </thead>
          <tbody>
            {#each shown as p (p.id)}
              <tr>
                <td>
                  <strong>{p.display_name}</strong>
                  {#if p.id === session.user?.id}<span class="you">you</span>{/if}
                </td>
                <td class="muted small">{p.school || '—'}</td>
                <td>
                  <select
                    value={p.role}
                    disabled={savingId === p.id || p.id === session.user?.id}
                    onchange={(e) => change(p, (e.currentTarget as HTMLSelectElement).value as Role)}
                  >
                    {#each ROLES as r}<option value={r}>{r}</option>{/each}
                  </select>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <p class="muted small foot">
        Your own role is fixed here on purpose. An admin who demotes themselves needs
        another admin — or the database — to undo it, and if they were the only one
        there is nobody left who can.
      </p>
    {/if}
  {/if}
</div>

<style>
  .admin { max-width: 760px; }
  .back-link {
    display: inline-flex; align-items: center; gap: .2rem;
    font-size: .95rem; text-decoration: none; margin-bottom: 1rem;
  }
  .admin > :global(.large-title) { margin-bottom: .8rem; }
  .lede { max-width: 58ch; margin-bottom: 1.4rem; }

  .panel {
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: 1.35rem 1.4rem; display: flex; flex-direction: column; gap: .8rem;
  }
  .panel h2 { margin: 0; font-size: 1.15rem; }

  .toolbar { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem; }
  .toolbar input { flex: 1; min-width: 220px; }

  .table-wrap {
    background: var(--surface); border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm); overflow-x: auto;
  }
  table { width: 100%; border-collapse: collapse; font-size: .95rem; }
  th, td { padding: .75rem .9rem; text-align: left; }
  th {
    font-size: .74rem; font-weight: 650; text-transform: uppercase;
    letter-spacing: .05em; color: var(--text-secondary);
  }
  tbody tr + tr { border-top: 1px solid var(--hairline, rgba(0,0,0,.08)); }

  .you {
    margin-left: .45rem; font-size: .7rem; font-weight: 650; text-transform: uppercase;
    letter-spacing: .04em; padding: .12rem .4rem; border-radius: 999px;
    background: var(--brand-soft, rgba(48,184,98,.14)); color: var(--brand);
  }
  .foot { margin-top: .9rem; }
  .error { color: var(--wrong); }
  .ok { color: var(--brand); }
</style>
