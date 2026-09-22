<script lang="ts">
  /**
   * Compose one assignment: its details, its questions, and whether students
   * can see it.
   *
   * Questions come from two places — the markdown bank, chosen with the picker,
   * and questions the teacher writes here. An item row stores one or the other,
   * never both; the database enforces that with a check constraint.
   */
  import QuestionPicker from '$lib/components/QuestionPicker.svelte';
  import { resolveKeys, type BankQuestion } from '$lib/bank';
  import {
    getItems, replaceItems, updateAssignment, deleteAssignment,
    listTeacherQuestions, createTeacherQuestion,
    type Assignment, type TeacherQuestion, type ClassRow
  } from '$lib/classes';

  let { assignment, klass, onclose }: {
    assignment: Assignment;
    klass: ClassRow;
    onclose: (changed: boolean) => void;
  } = $props();

  type Draft = {
    question_key: string | null;
    teacher_question_id: number | null;
    marks: number;
    /** For display only; not stored. */
    label: string;
    sub: string;
  };

  // Seeded from the prop in the load effect below rather than here, so that
  // they follow if a different assignment is ever passed in. Reading a prop
  // directly into $state captures only its first value.
  let title = $state('');
  let kind = $state<Assignment['kind']>('practice');
  let instructions = $state('');
  /** <input type="datetime-local"> wants 'YYYY-MM-DDTHH:mm' with no zone. */
  let due = $state('');
  let items = $state<Draft[]>([]);
  let mine = $state<TeacherQuestion[]>([]);

  let tab = $state<'bank' | 'own'>('bank');
  let loading = $state(true);
  let busy = $state(false);
  let error = $state<string | null>(null);
  let saved = $state(false);

  // --- writing your own question
  let qKind = $state<'mcq' | 'numeric' | 'structured'>('mcq');
  let qStem = $state('');
  let qOptions = $state(['', '', '', '']);
  let qAnswer = $state('');
  let qWorking = $state('');
  let qMarks = $state(1);
  let qObjective = $state('');

  $effect(() => {
    const id = assignment.id;
    title = assignment.title;
    kind = assignment.kind;
    instructions = assignment.instructions ?? '';
    due = assignment.due_at ? assignment.due_at.slice(0, 16) : '';
    void (async () => {
      loading = true;
      const [rows, own] = await Promise.all([getItems(id), listTeacherQuestions()]);
      mine = own;
      const byId = new Map(own.map((q) => [q.id, q]));
      const bank = await resolveKeys(
        rows.map((r) => r.question_key).filter((k): k is string => Boolean(k))
      );
      items = rows.map((r) => {
        if (r.question_key) {
          const q = bank.get(r.question_key);
          return {
            question_key: r.question_key,
            teacher_question_id: null,
            marks: r.marks,
            label: q ? plain(q.stem) : r.question_key,
            sub: q ? `Bank · objective ${q.objective}` : 'Bank question (not found)'
          };
        }
        const q = byId.get(r.teacher_question_id!);
        return {
          question_key: null,
          teacher_question_id: r.teacher_question_id,
          marks: r.marks,
          label: q ? q.stem_md.slice(0, 140) : `Question ${r.teacher_question_id}`,
          sub: 'Written by you'
        };
      });
      loading = false;
    })();
  });

  /** Rendered HTML down to a one-line label for the item list. */
  function plain(html: string): string {
    const el = document.createElement('div');
    el.innerHTML = html;
    return (el.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 140);
  }

  const totalMarks = $derived(items.reduce((n, i) => n + i.marks, 0));

  function addBank(key: string, marks: number) {
    if (items.some((i) => i.question_key === key)) return;
    void resolveKeys([key]).then((m) => {
      const q = m.get(key);
      items = [...items, {
        question_key: key,
        teacher_question_id: null,
        marks,
        label: q ? plain(q.stem) : key,
        sub: q ? `Bank · objective ${q.objective}` : 'Bank question'
      }];
    });
  }

  function addOwn(q: TeacherQuestion) {
    if (items.some((i) => i.teacher_question_id === q.id)) return;
    items = [...items, {
      question_key: null,
      teacher_question_id: q.id,
      marks: q.marks,
      label: q.stem_md.slice(0, 140),
      sub: 'Written by you'
    }];
  }

  function move(i: number, by: number) {
    const j = i + by;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    items = next;
  }

  function drop(i: number) {
    items = items.filter((_, n) => n !== i);
  }

  async function saveOwnQuestion() {
    if (!qStem.trim() || !qAnswer.trim()) return;
    error = null; busy = true;
    try {
      const created = await createTeacherQuestion({
        subject_id: klass.subject_id,
        objective_key: qObjective.trim() || null,
        kind: qKind,
        stem_md: qStem.trim(),
        options: qKind === 'mcq'
          ? qOptions
              .map((t, n) => ({ key: 'ABCD'[n], text: t.trim() }))
              .filter((o) => o.text)
          : null,
        answer: qAnswer.trim(),
        working_md: qWorking.trim() || null,
        marks: qMarks
      });
      if (created) {
        mine = [created, ...mine];
        addOwn(created);
        qStem = ''; qAnswer = ''; qWorking = ''; qOptions = ['', '', '', '']; qObjective = '';
      }
    } catch (e) { error = (e as Error).message; }
    finally { busy = false; }
  }

  async function save(publish?: boolean) {
    if (!title.trim()) { error = 'Give the assignment a title.'; return; }
    error = null; busy = true; saved = false;
    try {
      await updateAssignment(assignment.id, {
        title: title.trim(),
        kind,
        instructions: instructions.trim() || null,
        due_at: due ? new Date(due).toISOString() : null,
        ...(publish === undefined ? {} : { published: publish })
      });
      await replaceItems(assignment.id, items.map((i) => ({
        question_key: i.question_key,
        teacher_question_id: i.teacher_question_id,
        marks: i.marks
      })));
      saved = true;
      if (publish !== undefined) onclose(true);
    } catch (e) { error = (e as Error).message; }
    finally { busy = false; }
  }

  async function remove() {
    if (!confirm(`Delete "${assignment.title}"? Any results students have already submitted go with it.`)) return;
    try {
      await deleteAssignment(assignment.id);
      onclose(true);
    } catch (e) { error = (e as Error).message; }
  }
</script>

<div class="editor">
  <div class="head">
    <button class="quiet-btn" type="button" onclick={() => onclose(true)}>‹ Back to class</button>
    {#if assignment.published}
      <span class="chip live">Published</span>
    {:else}
      <span class="chip">Draft</span>
    {/if}
  </div>

  {#if error}<p class="error small" role="alert">{error}</p>{/if}

  <div class="panel">
    <label>
      <span class="eyebrow">Title</span>
      <input bind:value={title} type="text" placeholder="Spreadsheets — formulae and functions" />
    </label>

    <div class="two">
      <label>
        <span class="eyebrow">Kind</span>
        <select bind:value={kind}>
          <option value="practice">Practice</option>
          <option value="test">Test</option>
        </select>
      </label>
      <label>
        <span class="eyebrow">Due <span class="opt">optional</span></span>
        <input bind:value={due} type="datetime-local" />
      </label>
    </div>

    <label>
      <span class="eyebrow">Instructions <span class="opt">optional</span></span>
      <textarea bind:value={instructions} rows="2"
                placeholder="Answer all questions. Show your working."></textarea>
    </label>
  </div>

  <div class="section-head">
    <h3>Questions</h3>
    <span class="muted small">{items.length} · {totalMarks} marks</span>
  </div>

  {#if loading}
    <p class="muted small">Loading…</p>
  {:else}
    {#if items.length === 0}
      <div class="panel"><p class="muted small">
        No questions yet. Add them from the bank below, or write your own.
      </p></div>
    {:else}
      <ol class="items">
        {#each items as it, i (it.question_key ?? `t${it.teacher_question_id}`)}
          <li>
            <span class="num">{i + 1}</span>
            <span class="body">
              <span class="label">{it.label}…</span>
              <span class="muted small">{it.sub}</span>
            </span>
            <input class="marks" type="number" min="1" bind:value={it.marks} aria-label="Marks" />
            <span class="tools">
              <button type="button" onclick={() => move(i, -1)} disabled={i === 0} aria-label="Move up">↑</button>
              <button type="button" onclick={() => move(i, 1)} disabled={i === items.length - 1} aria-label="Move down">↓</button>
              <button type="button" onclick={() => drop(i)} aria-label="Remove">×</button>
            </span>
          </li>
        {/each}
      </ol>
    {/if}

    <div class="tabs">
      <button class:on={tab === 'bank'} type="button" onclick={() => (tab = 'bank')}>
        From the bank
      </button>
      <button class:on={tab === 'own'} type="button" onclick={() => (tab = 'own')}>
        Write your own
      </button>
    </div>

    <div class="panel">
      {#if tab === 'bank'}
        <QuestionPicker
          subject={klass.subject_code}
          selected={items.map((i) => i.question_key).filter((k): k is string => Boolean(k))}
          onpick={addBank}
        />
      {:else}
        {#if mine.length}
          <div class="own-list">
            <span class="eyebrow">Your questions</span>
            <ul>
              {#each mine as q (q.id)}
                <li>
                  <button type="button" onclick={() => addOwn(q)}
                          disabled={items.some((i) => i.teacher_question_id === q.id)}>
                    <span class="kind">{q.kind}</span>
                    {q.stem_md.slice(0, 90)}…
                  </button>
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        <span class="eyebrow">New question</span>
        <div class="two">
          <label>
            <span class="eyebrow">Type</span>
            <select bind:value={qKind}>
              <option value="mcq">Multiple choice</option>
              <option value="numeric">Numeric</option>
              <option value="structured">Structured</option>
            </select>
          </label>
          <label>
            <span class="eyebrow">Marks</span>
            <input type="number" min="1" bind:value={qMarks} />
          </label>
        </div>

        <label>
          <span class="eyebrow">Question</span>
          <textarea bind:value={qStem} rows="3"
                    placeholder="Markdown works here, and $x^2$ for maths."></textarea>
        </label>

        {#if qKind === 'mcq'}
          <span class="eyebrow">Options</span>
          {#each qOptions as _, n}
            <label class="opt-row">
              <span class="opt-key">{'ABCD'[n]}</span>
              <input bind:value={qOptions[n]} type="text" placeholder={n < 2 ? 'Required' : 'Optional'} />
            </label>
          {/each}
        {/if}

        <label>
          <span class="eyebrow">
            {qKind === 'mcq' ? 'Correct option (A, B, C or D)'
             : qKind === 'numeric' ? 'Correct answer'
             : 'Mark scheme'}
          </span>
          {#if qKind === 'structured'}
            <textarea bind:value={qAnswer} rows="3"
                      placeholder="What earns each mark. The student marks themselves against this."></textarea>
          {:else}
            <input bind:value={qAnswer} type="text" />
          {/if}
        </label>

        <label>
          <span class="eyebrow">Working shown afterwards <span class="opt">optional</span></span>
          <textarea bind:value={qWorking} rows="2"></textarea>
        </label>

        <label>
          <span class="eyebrow">Objective it covers <span class="opt">optional</span></span>
          <input bind:value={qObjective} type="text"
                 placeholder="it/spreadsheets/5.3 — so it counts toward that objective" />
        </label>

        <button type="button" onclick={saveOwnQuestion}
                disabled={busy || !qStem.trim() || !qAnswer.trim()}>
          Save and add
        </button>
      {/if}
    </div>
  {/if}

  <div class="actions">
    <button type="button" onclick={() => save()} disabled={busy}>
      {busy ? 'Saving…' : 'Save draft'}
    </button>
    {#if assignment.published}
      <button type="button" onclick={() => save(false)} disabled={busy}>Unpublish</button>
    {:else}
      <button class="primary" type="button" onclick={() => save(true)}
              disabled={busy || items.length === 0}>
        Publish to class
      </button>
    {/if}
    <button class="danger-btn" type="button" onclick={remove}>Delete</button>
    {#if saved}<span class="ok small">Saved.</span>{/if}
  </div>

  {#if !assignment.published}
    <p class="muted small foot">
      Students see nothing until you publish. Publishing a test with no questions is
      not possible, which is why that button is disabled while the list is empty.
    </p>
  {/if}
</div>

<style>
  .editor { display: flex; flex-direction: column; gap: 1rem; }
  .head { display: flex; align-items: center; justify-content: space-between; }

  .chip {
    font-size: .7rem; font-weight: 650; text-transform: uppercase; letter-spacing: .04em;
    padding: .18rem .5rem; border-radius: 999px;
    background: var(--hairline, rgba(0,0,0,.08)); color: var(--text-secondary);
  }
  .chip.live { background: var(--brand-soft, rgba(48,184,98,.14)); color: var(--brand); }

  .panel {
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .9rem;
  }
  .panel label { display: flex; flex-direction: column; gap: .3rem; }
  .two { display: flex; gap: .9rem; flex-wrap: wrap; }
  .two > label { flex: 1; min-width: 150px; }
  .opt { font-weight: 400; text-transform: none; letter-spacing: 0; opacity: .7; }

  .section-head { display: flex; align-items: baseline; gap: .7rem; margin-top: .6rem; }
  .section-head h3 { margin: 0; font-size: 1.1rem; font-weight: 680; }

  .items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .4rem; }
  .items li {
    display: flex; align-items: center; gap: .7rem;
    background: var(--surface); border-radius: 12px; box-shadow: var(--shadow-sm);
    padding: .6rem .8rem;
  }
  .num {
    flex: none; width: 1.6rem; height: 1.6rem; border-radius: 50%;
    display: grid; place-items: center; font-size: .8rem; font-weight: 650;
    background: var(--hairline, rgba(0,0,0,.07));
  }
  .body { flex: 1; display: flex; flex-direction: column; gap: .1rem; min-width: 0; }
  .label { font-size: .92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .marks { width: 3.6rem; text-align: center; }
  .tools { display: flex; gap: .2rem; }
  .tools button {
    width: 1.8rem; height: 1.8rem; border-radius: 8px; cursor: pointer;
    background: transparent; border: 1px solid var(--hairline, rgba(0,0,0,.12));
  }
  .tools button:disabled { opacity: .35; cursor: default; }

  .tabs { display: flex; gap: .4rem; }
  .tabs button {
    padding: .45rem .8rem; border-radius: 999px; cursor: pointer;
    background: transparent; border: 1px solid var(--hairline, rgba(0,0,0,.12));
    font-size: .9rem;
  }
  .tabs button.on { background: var(--brand); color: #fff; border-color: var(--brand); }

  .own-list ul { list-style: none; margin: .4rem 0 0; padding: 0; display: flex; flex-direction: column; gap: .3rem; }
  .own-list button {
    width: 100%; text-align: left; cursor: pointer; font-size: .9rem;
    padding: .5rem .7rem; border-radius: 10px; background: transparent;
    border: 1px solid var(--hairline, rgba(0,0,0,.1));
  }
  .own-list button:disabled { opacity: .5; cursor: default; }
  .kind {
    font-size: .66rem; text-transform: uppercase; letter-spacing: .04em;
    font-weight: 650; color: var(--brand); margin-right: .4rem;
  }

  .opt-row { flex-direction: row !important; align-items: center; gap: .6rem; }
  .opt-key { font-weight: 680; width: 1rem; }
  .opt-row input { flex: 1; }

  .actions { display: flex; gap: .7rem; align-items: center; flex-wrap: wrap; }
  .quiet-btn { background: transparent; cursor: pointer; font-size: .95rem; }
  .danger-btn { background: transparent; color: var(--wrong); cursor: pointer; }
  .error { color: var(--wrong); }
  .ok { color: var(--brand); }
  .foot { margin: 0; }
</style>
