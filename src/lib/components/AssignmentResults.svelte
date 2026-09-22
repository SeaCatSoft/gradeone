<script lang="ts">
  /**
   * What a class scored on one assignment.
   *
   * Students who have not submitted are shown too, and deliberately: the useful
   * question after setting work is usually "who has not done it", and a table
   * of only the submissions cannot answer that.
   */
  import { submissionsFor, roster, type Submission, type RosterEntry, type Assignment } from '$lib/classes';

  let { assignment, classId, onclose }: {
    assignment: Assignment;
    classId: number;
    onclose: () => void;
  } = $props();

  type Row = { name: string; score: number | null; total: number | null; when: string | null };

  let rows = $state<Row[]>([]);
  let loading = $state(true);

  $effect(() => {
    const aid = assignment.id;
    const cid = classId;
    void (async () => {
      loading = true;
      const [subs, people]: [Submission[], RosterEntry[]] =
        await Promise.all([submissionsFor(aid), roster(cid)]);
      const byUser = new Map(subs.map((s) => [s.user_id, s]));
      rows = people
        .map((p) => {
          const s = byUser.get(p.user_id);
          return {
            name: p.display_name,
            score: s?.score ?? null,
            total: s?.total ?? null,
            when: s?.submitted_at ?? null
          };
        })
        .sort((a, b) => {
          // Unsubmitted last, then by score descending — the two things a
          // teacher looks for first.
          if ((a.score === null) !== (b.score === null)) return a.score === null ? 1 : -1;
          if (a.score !== null && b.score !== null && a.score !== b.score) return b.score - a.score;
          return a.name.localeCompare(b.name);
        });
      loading = false;
    })();
  });

  const done = $derived(rows.filter((r) => r.score !== null));
  const mean = $derived(
    done.length
      ? Math.round(done.reduce((n, r) => n + (r.score ?? 0) / Math.max(r.total ?? 1, 1), 0) / done.length * 100)
      : null
  );
</script>

<div class="results">
  <button class="quiet-btn" type="button" onclick={onclose}>‹ Back to class</button>

  <header>
    <h2>{assignment.title}</h2>
    <p class="muted small">
      {#if loading}Loading…
      {:else}
        {done.length} of {rows.length} submitted{#if mean !== null} · class average {mean}%{/if}
      {/if}
    </p>
  </header>

  {#if !loading}
    {#if rows.length === 0}
      <div class="panel"><p class="muted small">Nobody is in this class yet.</p></div>
    {:else}
      <div class="table-wrap">
        <table>
          <thead><tr><th>Student</th><th>Score</th><th>Submitted</th></tr></thead>
          <tbody>
            {#each rows as r (r.name)}
              <tr class:missing={r.score === null}>
                <td><strong>{r.name}</strong></td>
                <td>
                  {#if r.score === null}
                    <span class="muted">—</span>
                  {:else}
                    {r.score}/{r.total}
                    <span class="muted small">
                      ({Math.round((r.score / Math.max(r.total ?? 1, 1)) * 100)}%)
                    </span>
                  {/if}
                </td>
                <td class="small muted">
                  {r.when ? new Date(r.when).toLocaleString('en-GB',
                    { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
                    : 'Not yet'}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <p class="muted small foot">
        Scores are marked in the student's browser, and structured questions are marked
        by the student against your mark scheme. Read them as evidence of effort and
        understanding, not as a controlled assessment.
      </p>
    {/if}
  {/if}
</div>

<style>
  .results { display: flex; flex-direction: column; gap: .9rem; }
  header h2 { margin: .5rem 0 .2rem; font-size: 1.4rem; letter-spacing: -.02em; }

  .panel {
    background: var(--surface); border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm); padding: 1.2rem 1.3rem;
  }
  .table-wrap {
    background: var(--surface); border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm); overflow-x: auto;
  }
  table { width: 100%; border-collapse: collapse; font-size: .95rem; }
  th, td { padding: .7rem .9rem; text-align: left; }
  th {
    font-size: .74rem; font-weight: 650; text-transform: uppercase;
    letter-spacing: .05em; color: var(--text-secondary);
  }
  tbody tr + tr { border-top: 1px solid var(--hairline, rgba(0,0,0,.08)); }
  tr.missing td strong { font-weight: 500; opacity: .75; }
  .quiet-btn { background: transparent; cursor: pointer; font-size: .95rem; align-self: flex-start; }
  .foot { margin: 0; }
</style>
