<script lang="ts">
  /**
   * One class: its roster and progress for the teacher who owns it, or a short
   * summary for a student who is in it.
   *
   * WHY THIS IS A COMPONENT AND NOT A /classes/[id] ROUTE
   *
   * The (app) layout has a SERVER load, so any page under it that is not
   * prerendered needs its __data.json fetched at request time — and there is no
   * server to produce one. A class id cannot be enumerated at build time, so
   * the id travels as a query parameter on the prerendered /classes page
   * instead, and this component renders the detail view.
   */
  import { base } from '$app/paths';
  import { session } from '$lib/session.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    roster, removeStudent, renameClass, archiveClass,
    type ClassRow, type RosterEntry
  } from '$lib/classes';

  let { info, mine, onchanged }: {
    info: ClassRow;
    mine: boolean;
    onchanged: () => void;
  } = $props();

  let people = $state<RosterEntry[]>([]);
  let loaded = $state(false);
  let error = $state<string | null>(null);
  let renaming = $state(false);
  let draftName = $state('');
  let loadedFor = $state<number | null>(null);

  $effect(() => {
    const cid = info.id;
    if (cid === loadedFor) return;
    loadedFor = cid;
    // Only a teacher gets a roster. For a student the policy returns their own
    // row at most, which would be a misleading thing to present as "the class".
    if (!mine) { people = []; loaded = true; return; }
    void roster(cid).then((r) => { people = r; loaded = true; });
  });

  async function remove(entry: RosterEntry) {
    if (!confirm(`Remove ${entry.display_name} from ${info.name}? Their own progress is untouched; you simply stop seeing it.`)) return;
    try {
      await removeStudent(info.id, entry.user_id);
      people = await roster(info.id);
      onchanged();
    } catch (e) { error = (e as Error).message; }
  }

  async function saveName() {
    if (!draftName.trim()) return;
    try {
      await renameClass(info.id, draftName.trim());
      renaming = false;
      onchanged();
    } catch (e) { error = (e as Error).message; }
  }

  async function archive() {
    if (!confirm(`Archive ${info.name}? Students stop seeing it and nobody can join with its code. Nothing is deleted.`)) return;
    try {
      await archiveClass(info.id);
      onchanged();
    } catch (e) { error = (e as Error).message; }
  }

  function ago(date: string | null): string {
    if (!date) return 'never';
    const days = Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000);
    if (days <= 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  }

  /** Percentage correct across every question attempted, or null if none. */
  function accuracy(e: RosterEntry): number | null {
    return e.attempts ? Math.round((e.correct / e.attempts) * 100) : null;
  }
</script>

<header class="head">
  {#if renaming}
    <div class="rename-row">
      <input bind:value={draftName} class="rename" />
      <button class="primary" type="button" onclick={saveName}>Save</button>
      <button class="quiet-btn" type="button" onclick={() => (renaming = false)}>Cancel</button>
    </div>
  {:else}
    <h1 class="large-title">{info.name}</h1>
  {/if}
  <p class="muted">
    {info.subject_name}{#if mine} · join code <span class="mono">{info.join_code}</span>{/if}
  </p>
</header>

{#if error}<p class="error small" role="alert">{error}</p>{/if}

{#if mine}
  <div class="section-head">
    <h2>Students</h2>
    <span class="muted small">{people.length} in this class</span>
  </div>

  {#if !loaded}
    <p class="muted small">Loading…</p>
  {:else if people.length === 0}
    <div class="panel">
      <p class="muted small">
        Nobody has joined yet. Give your students the code
        <strong class="mono">{info.join_code}</strong> and ask them to enter it on their
        Classes page.
      </p>
    </div>
  {:else}
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th><th>Streak</th><th>Mastery</th>
            <th>Accuracy</th><th>Last active</th><th><span class="sr">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          {#each people as p (p.user_id)}
            <tr>
              <td>
                <strong>{p.display_name}</strong>
                <span class="muted small block">{p.objectives_started} objectives started</span>
              </td>
              <td>
                {#if p.streak_days > 0}
                  <span class="flame"><Icon name="flame" size={13} /></span>{p.streak_days}
                {:else}<span class="muted">—</span>{/if}
              </td>
              <td class="nowrap">
                <span class="bar" style="--v:{p.mastery}%"><span></span></span>
                <span class="small">{p.mastery}%</span>
              </td>
              <td>
                {#if accuracy(p) === null}
                  <span class="muted">—</span>
                {:else}
                  <span class="small">{accuracy(p)}%</span>
                  <span class="muted small block">{p.correct}/{p.attempts}</span>
                {/if}
              </td>
              <td class="small muted nowrap">{ago(p.last_active)}</td>
              <td class="right">
                <button class="quiet-btn" type="button" onclick={() => remove(p)}>Remove</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="muted small foot">
      Mastery is the mean across every objective the student has attempted, so someone
      who has started a few topics well can show a higher figure than someone who has
      covered far more ground. Read it beside the objectives count.
    </p>
  {/if}

  <h2 class="section">Coursework</h2>
  <div class="panel">
    <p class="muted small">
      Setting tests and assignments is not built yet. The database is ready for it —
      assignments, items, teacher-written questions and submissions all exist with
      their policies — but there is no screen for it, so this space says so rather
      than offering something half-working.
    </p>
  </div>

  <h2 class="section">Class settings</h2>
  <div class="panel row-panel">
    <button type="button" onclick={() => { renaming = true; draftName = info.name; }}>
      Rename
    </button>
    <button class="danger-btn" type="button" onclick={archive}>Archive class</button>
  </div>

{:else}
  <div class="panel">
    <p class="muted small">
      You are a student in this class. Your teacher can see your progress and streak in
      <strong>{info.subject_name}</strong> — and nothing outside it.
    </p>
    <a class="btn" href="{base}/{info.subject_code.toLowerCase()}">
      Go to {info.subject_name}
    </a>
  </div>
{/if}

<style>
  .head { margin-bottom: 1.6rem; }
  .head :global(.large-title) { margin: 0 0 .25rem; }
  .rename-row { display: flex; gap: .6rem; align-items: center; flex-wrap: wrap; }
  .rename { font-size: 1.3rem; font-weight: 680; padding: .3rem .5rem; }

  .panel {
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: 1.35rem 1.4rem; display: flex; flex-direction: column; gap: 1rem;
  }
  .row-panel { flex-direction: row; gap: .8rem; flex-wrap: wrap; }

  .section { margin: 2rem 0 .9rem; font-size: 1.28rem; font-weight: 680; letter-spacing: -.02em; }
  .section-head { display: flex; align-items: baseline; gap: .7rem; margin: 2rem 0 .9rem; }
  .section-head h2 { margin: 0; font-size: 1.28rem; font-weight: 680; letter-spacing: -.02em; }

  .table-wrap {
    background: var(--surface); border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm); overflow-x: auto;
  }
  table { width: 100%; border-collapse: collapse; font-size: .95rem; }
  th, td { padding: .75rem .9rem; text-align: left; vertical-align: top; }
  th {
    font-size: .74rem; font-weight: 650; text-transform: uppercase;
    letter-spacing: .05em; color: var(--text-secondary);
  }
  tbody tr + tr { border-top: 1px solid var(--hairline, rgba(0,0,0,.08)); }
  td.right { text-align: right; }
  .nowrap { white-space: nowrap; }
  .block { display: block; }
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }

  .bar {
    display: inline-block; width: 54px; height: 6px; border-radius: 3px;
    background: var(--hairline, rgba(0,0,0,.12)); overflow: hidden;
    margin-right: .45rem; vertical-align: middle;
  }
  .bar > span { display: block; width: var(--v); height: 100%; background: var(--brand); }
  .flame { color: var(--wrong); margin-right: .2rem; }

  .mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; }
  .quiet-btn { background: transparent; font-size: .9rem; cursor: pointer; }
  .danger-btn { background: transparent; color: var(--wrong); cursor: pointer; }
  .foot { margin-top: .8rem; }
  .error { color: var(--wrong); }
</style>
