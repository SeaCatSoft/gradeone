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
  import AssignmentEditor from '$lib/components/AssignmentEditor.svelte';
  import AssignmentPlayer from '$lib/components/AssignmentPlayer.svelte';
  import AssignmentResults from '$lib/components/AssignmentResults.svelte';
  import {
    roster, removeStudent, renameClass, archiveClass,
    listAssignments, createAssignment, mySubmission,
    type ClassRow, type RosterEntry, type Assignment, type Submission
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

  // Which of the four screens this class shows. Kept in component state rather
  // than the URL: it is a step inside one class, and a teacher who reloads
  // mid-edit is better off back at the class than at a stale editor.
  let view = $state<'class' | 'edit' | 'take' | 'results'>('class');
  let active = $state<Assignment | null>(null);

  let work = $state<Assignment[]>([]);
  /** A student's own result per assignment, so the list can say "done". */
  let done = $state<Record<number, Submission | null>>({});
  let busy = $state(false);

  $effect(() => {
    const cid = info.id;
    if (cid === loadedFor) return;
    loadedFor = cid;
    void load(cid);
  });

  async function load(cid: number) {
    loaded = false;
    // Only a teacher gets a roster. For a student the policy returns their own
    // row at most, which would be a misleading thing to present as "the class".
    const [r, a] = await Promise.all([
      mine ? roster(cid) : Promise.resolve([]),
      listAssignments(cid)
    ]);
    people = r;
    work = a;
    // A student's own results, one lookup per assignment. Small lists, and the
    // alternative is a view the policies would have to be widened for.
    if (!mine) {
      const pairs = await Promise.all(a.map(async (x) => [x.id, await mySubmission(x.id)] as const));
      done = Object.fromEntries(pairs);
    }
    loaded = true;
  }

  async function addAssignment() {
    error = null; busy = true;
    try {
      const created = await createAssignment(info.id, { title: 'Untitled assignment', kind: 'practice' });
      if (created) { active = created; view = 'edit'; }
    } catch (e) { error = (e as Error).message; }
    finally { busy = false; }
  }

  function backToClass(reload = true) {
    view = 'class';
    active = null;
    if (reload) void load(info.id);
  }

  function dueLabel(a: Assignment): string {
    if (!a.due_at) return '';
    const d = new Date(a.due_at);
    const late = d.getTime() < Date.now();
    return `${late ? 'was due' : 'due'} ${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`;
  }

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

{#if view === 'edit' && active}
  <AssignmentEditor assignment={active} klass={info} onclose={() => backToClass()} />

{:else if view === 'take' && active}
  <AssignmentPlayer assignment={active} onclose={() => backToClass()} />

{:else if view === 'results' && active}
  <AssignmentResults assignment={active} classId={info.id} onclose={() => backToClass(false)} />

{:else}
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

  <div class="section-head">
    <h2>Coursework</h2>
    <button class="primary small-btn" type="button" onclick={addAssignment} disabled={busy}>
      New assignment
    </button>
  </div>

  {#if work.length === 0}
    <div class="panel">
      <p class="muted small">
        Nothing set yet. An assignment is a list of questions — chosen from the bank,
        or written by you — that your students answer. They see it once you publish it.
      </p>
    </div>
  {:else}
    <ul class="work">
      {#each work as a (a.id)}
        <li>
          <button class="grow" type="button" onclick={() => { active = a; view = 'edit'; }}>
            <span class="title-row">
              <strong>{a.title}</strong>
              {#if a.published}
                <span class="chip live">Published</span>
              {:else}
                <span class="chip">Draft</span>
              {/if}
            </span>
            <span class="muted small">
              {a.kind === 'test' ? 'Test' : 'Practice'} ·
              {a.item_count} {a.item_count === 1 ? 'question' : 'questions'}
              {#if a.due_at} · {dueLabel(a)}{/if}
            </span>
          </button>
          <button class="quiet-btn" type="button" onclick={() => { active = a; view = 'results'; }}>
            Results
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  <h2 class="section">Class settings</h2>
  <div class="panel row-panel">
    <button type="button" onclick={() => { renaming = true; draftName = info.name; }}>
      Rename
    </button>
    <button class="danger-btn" type="button" onclick={archive}>Archive class</button>
  </div>

{:else}
  <div class="section-head">
    <h2>Work set for you</h2>
  </div>

  {#if !loaded}
    <p class="muted small">Loading…</p>
  {:else if work.length === 0}
    <div class="panel">
      <p class="muted small">
        Your teacher has not set anything yet. Anything they publish will appear here.
      </p>
    </div>
  {:else}
    <ul class="work">
      {#each work as a (a.id)}
        {@const sub = done[a.id]}
        <li>
          <button class="grow" type="button" onclick={() => { active = a; view = 'take'; }}>
            <span class="title-row">
              <strong>{a.title}</strong>
              {#if sub?.submitted_at}
                <span class="chip live">{sub.score}/{sub.total}</span>
              {:else if a.due_at && new Date(a.due_at).getTime() < Date.now()}
                <span class="chip late">Overdue</span>
              {/if}
            </span>
            <span class="muted small">
              {a.kind === 'test' ? 'Test' : 'Practice'} ·
              {a.item_count} {a.item_count === 1 ? 'question' : 'questions'}
              {#if a.due_at} · {dueLabel(a)}{/if}
            </span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  <h2 class="section">About this class</h2>
  <div class="panel">
    <p class="muted small">
      Your teacher can see your progress and streak in
      <strong>{info.subject_name}</strong> — and nothing outside it.
    </p>
    <a class="btn" href="{base}/{info.subject_code.toLowerCase()}">
      Go to {info.subject_name}
    </a>
  </div>
{/if}
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

  .section-head button.small-btn {
    margin-left: auto; font-size: .88rem; padding: .4rem .85rem;
  }

  .work { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .5rem; }
  .work li {
    display: flex; align-items: center; gap: .6rem;
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: .3rem .8rem .3rem .3rem;
  }
  .work .grow {
    flex: 1; text-align: left; cursor: pointer; background: transparent;
    display: flex; flex-direction: column; gap: .15rem; padding: .7rem;
    border-radius: 12px; min-width: 0;
  }
  .work .grow:hover { background: var(--hairline, rgba(0,0,0,.04)); }
  .title-row { display: flex; align-items: center; gap: .5rem; flex-wrap: wrap; }

  .chip {
    font-size: .68rem; font-weight: 650; text-transform: uppercase; letter-spacing: .04em;
    padding: .15rem .45rem; border-radius: 999px;
    background: var(--hairline, rgba(0,0,0,.08)); color: var(--text-secondary);
  }
  .chip.live { background: var(--brand-soft, rgba(48,184,98,.14)); color: var(--brand); }
  .chip.late { background: rgba(255,59,48,.14); color: var(--wrong); }

  .mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; }
  .quiet-btn { background: transparent; font-size: .9rem; cursor: pointer; }
  .danger-btn { background: transparent; color: var(--wrong); cursor: pointer; }
  .foot { margin-top: .8rem; }
  .error { color: var(--wrong); }
</style>
