<script lang="ts">
  /**
   * A student working through an assignment.
   *
   * MARKING HAPPENS IN THE BROWSER, and the app says so on screen. The markdown
   * question bank prerenders to static pages that already contain the answers,
   * so there is nothing to protect by hiding them here — a determined student
   * can read them either way. That makes this honest homework rather than exam
   * conditions, and pretending otherwise would be worse than admitting it.
   *
   * Structured questions are not machine-marked at all. Their "answer" is a
   * mark scheme, so the student is shown it and awards themselves the marks.
   */
  import { renderMarkdown, renderInline } from '$lib/content/render';
  import { resolveKeys, judge, type BankQuestion } from '$lib/bank';
  import {
    getItems, getTeacherQuestions, mySubmission, saveSubmission,
    type Assignment, type Submission
  } from '$lib/classes';

  let { assignment, onclose }: {
    assignment: Assignment;
    onclose: () => void;
  } = $props();

  type Q = {
    position: number;
    marks: number;
    kind: 'mcq' | 'numeric' | 'structured';
    stem: string;                                   // HTML
    options: { key: string; text: string }[] | null;
    answer: string;
    answerHtml: string | null;
    working: string | null;
  };

  let questions = $state<Q[]>([]);
  let given = $state<Record<number, string>>({});
  let selfMarks = $state<Record<number, number>>({});
  let loading = $state(true);
  let submitted = $state(false);
  let previous = $state<Submission | null>(null);
  let busy = $state(false);
  let error = $state<string | null>(null);

  $effect(() => {
    const id = assignment.id;
    void (async () => {
      loading = true;
      const [items, prior] = await Promise.all([getItems(id), mySubmission(id)]);
      previous = prior;

      const bank = await resolveKeys(
        items.map((i) => i.question_key).filter((k): k is string => Boolean(k))
      );
      const own = await getTeacherQuestions(
        items.map((i) => i.teacher_question_id).filter((n): n is number => Boolean(n))
      );

      questions = items.flatMap((it) => {
        if (it.question_key) {
          const q = bank.get(it.question_key);
          if (!q) return [];
          return [{
            position: it.position, marks: it.marks, kind: q.kind, stem: q.stem,
            options: q.options, answer: q.answer, answerHtml: q.answerHtml, working: q.working
          }];
        }
        const q = own.get(it.teacher_question_id!);
        if (!q) return [];
        return [{
          position: it.position, marks: it.marks, kind: q.kind,
          stem: renderMarkdown(q.stem_md),
          options: q.options?.map((o) => ({ key: o.key, text: renderInline(o.text) })) ?? null,
          answer: q.answer,
          answerHtml: q.kind === 'structured' ? renderMarkdown(q.answer) : null,
          working: q.working_md ? renderMarkdown(q.working_md) : null
        }];
      });
      loading = false;
    })();
  });

  const totalMarks = $derived(questions.reduce((n, q) => n + q.marks, 0));

  /** Marks earned so far, once submitted. Structured questions use self-marks. */
  const earned = $derived.by(() =>
    questions.reduce((n, q) => {
      if (q.kind === 'structured') return n + (selfMarks[q.position] ?? 0);
      return n + (judge(q.kind, given[q.position] ?? '', q.answer) ? q.marks : 0);
    }, 0)
  );

  const answeredCount = $derived(questions.filter((q) => (given[q.position] ?? '').trim()).length);

  async function submit() {
    if (!confirm('Submit this assignment? Your teacher will see the result.')) return;
    error = null; busy = true;
    try {
      // Structured answers cannot be judged, so they are recorded as null
      // rather than as wrong — a teacher reading the results needs to see the
      // difference between "got it wrong" and "nothing marked it".
      const rows = questions.map((q) => {
        const g = given[q.position] ?? '';
        const verdict = q.kind === 'structured' ? null : judge(q.kind, g, q.answer);
        return {
          position: q.position,
          given: g,
          correct: verdict,
          marks_awarded: q.kind === 'structured'
            ? (selfMarks[q.position] ?? 0)
            : (verdict ? q.marks : 0)
        };
      });
      const score = rows.reduce((n, r) => n + r.marks_awarded, 0);
      await saveSubmission(assignment.id, rows, score, totalMarks);
      submitted = true;
    } catch (e) { error = (e as Error).message; }
    finally { busy = false; }
  }
</script>

<div class="player">
  <button class="quiet-btn" type="button" onclick={onclose}>‹ Back to class</button>

  <header>
    <h2>{assignment.title}</h2>
    <p class="muted small">
      {assignment.kind === 'test' ? 'Test' : 'Practice'} · {questions.length} questions ·
      {totalMarks} marks
      {#if assignment.due_at}
        · due {new Date(assignment.due_at).toLocaleString('en-GB',
          { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
      {/if}
    </p>
    {#if assignment.instructions}
      <p class="instructions">{assignment.instructions}</p>
    {/if}
  </header>

  {#if error}<p class="error small" role="alert">{error}</p>{/if}

  {#if loading}
    <p class="muted small">Loading…</p>

  {:else if previous && !submitted}
    <div class="panel">
      <h3>Already submitted</h3>
      <p class="muted small">
        You scored <strong>{previous.score} of {previous.total}</strong>, submitted
        {new Date(previous.submitted_at ?? previous.started_at).toLocaleString('en-GB')}.
      </p>
      <button type="button" onclick={() => (previous = null)}>Do it again</button>
      <p class="muted small">
        Doing it again replaces the result your teacher sees.
      </p>
    </div>

  {:else if questions.length === 0}
    <div class="panel"><p class="muted small">This assignment has no questions in it.</p></div>

  {:else}
    {#if submitted}
      <div class="panel result">
        <h3>{earned} out of {totalMarks}</h3>
        <p class="muted small">
          {Math.round((earned / Math.max(totalMarks, 1)) * 100)}% · saved, and visible to your
          teacher. The answers are below.
        </p>
      </div>
    {/if}

    <ol class="questions">
      {#each questions as q (q.position)}
        {@const g = given[q.position] ?? ''}
        {@const verdict = submitted && q.kind !== 'structured' ? judge(q.kind, g, q.answer) : null}
        <li class:right={verdict === true} class:wrong={verdict === false}>
          <div class="qhead">
            <span class="num">{q.position}</span>
            <span class="muted small">{q.marks} {q.marks === 1 ? 'mark' : 'marks'}</span>
            {#if submitted && q.kind !== 'structured'}
              <span class="verdict">{verdict ? 'Correct' : 'Not correct'}</span>
            {/if}
          </div>

          <div class="stem">{@html q.stem}</div>

          {#if q.kind === 'mcq' && q.options}
            <div class="options">
              {#each q.options as o}
                <label class:chosen={g === o.key}>
                  <input type="radio" value={o.key} bind:group={given[q.position]}
                         disabled={submitted} />
                  <span class="key">{o.key}</span>
                  <span>{@html o.text}</span>
                </label>
              {/each}
            </div>
          {:else if q.kind === 'numeric'}
            <input class="answer" type="text" bind:value={given[q.position]}
                   disabled={submitted} placeholder="Your answer" />
          {:else}
            <textarea class="answer" rows="4" bind:value={given[q.position]}
                      disabled={submitted} placeholder="Your answer"></textarea>
          {/if}

          {#if submitted}
            <div class="feedback">
              {#if q.kind === 'structured'}
                <p class="eyebrow">Mark scheme</p>
                <div class="scheme">{@html q.answerHtml ?? q.answer}</div>
                <label class="selfmark">
                  <span class="eyebrow">Marks you earned, out of {q.marks}</span>
                  <input type="number" min="0" max={q.marks}
                         bind:value={selfMarks[q.position]} />
                </label>
              {:else if verdict === false}
                <p><strong>Answer:</strong> {q.answer}</p>
              {/if}
              {#if q.working}
                <details>
                  <summary>Working</summary>
                  <div class="working">{@html q.working}</div>
                </details>
              {/if}
            </div>
          {/if}
        </li>
      {/each}
    </ol>

    {#if !submitted}
      <div class="actions">
        <span class="muted small">{answeredCount} of {questions.length} answered</span>
        <button class="primary" type="button" onclick={submit} disabled={busy}>
          {busy ? 'Submitting…' : 'Submit'}
        </button>
      </div>
      <p class="muted small foot">
        Marked in your browser as soon as you submit. That makes this homework, not exam
        conditions — the answers to bank questions are in the lesson pages.
      </p>
    {:else}
      <div class="actions">
        <button type="button" onclick={onclose}>Done</button>
        {#if questions.some((q) => q.kind === 'structured')}
          <button type="button" onclick={submit} disabled={busy}>
            Save self-marks
          </button>
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .player { display: flex; flex-direction: column; gap: 1rem; max-width: 680px; }
  header h2 { margin: .6rem 0 .2rem; font-size: 1.5rem; letter-spacing: -.02em; }
  .instructions { margin: .6rem 0 0; }

  .panel {
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: 1.2rem 1.3rem; display: flex; flex-direction: column; gap: .7rem;
  }
  .panel h3 { margin: 0; font-size: 1.1rem; }
  .result h3 { font-size: 1.6rem; color: var(--brand); }

  .questions { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
  .questions li {
    background: var(--surface); border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
    padding: 1.1rem 1.2rem; display: flex; flex-direction: column; gap: .7rem;
    border-left: 3px solid transparent;
  }
  .questions li.right { border-left-color: var(--brand); }
  .questions li.wrong { border-left-color: var(--wrong); }

  .qhead { display: flex; align-items: center; gap: .7rem; }
  .num {
    flex: none; width: 1.7rem; height: 1.7rem; border-radius: 50%;
    display: grid; place-items: center; font-size: .82rem; font-weight: 650;
    background: var(--hairline, rgba(0,0,0,.07));
  }
  .verdict { margin-left: auto; font-size: .78rem; font-weight: 650; }
  .right .verdict { color: var(--brand); }
  .wrong .verdict { color: var(--wrong); }

  .stem :global(p:first-child) { margin-top: 0; }
  .stem :global(p:last-child) { margin-bottom: 0; }

  .options { display: flex; flex-direction: column; gap: .4rem; }
  .options label {
    display: flex; align-items: flex-start; gap: .6rem; cursor: pointer;
    padding: .55rem .7rem; border-radius: 10px;
    border: 1px solid var(--hairline, rgba(0,0,0,.1));
  }
  .options label.chosen { border-color: var(--brand); }
  .options .key { font-weight: 680; }

  .answer { width: 100%; }
  .feedback { border-top: 1px solid var(--hairline, rgba(0,0,0,.08)); padding-top: .7rem; }
  .feedback p { margin: .3rem 0; font-size: .92rem; }
  .scheme { font-size: .92rem; }
  .selfmark { display: flex; flex-direction: column; gap: .3rem; margin-top: .6rem; max-width: 12rem; }
  .working { font-size: .92rem; }
  details summary { cursor: pointer; font-size: .9rem; }

  .actions { display: flex; gap: .8rem; align-items: center; }
  .quiet-btn { background: transparent; cursor: pointer; font-size: .95rem; align-self: flex-start; }
  .error { color: var(--wrong); }
  .foot { margin: 0; }
</style>
