<script lang="ts">
  /**
   * Choose questions from the markdown bank.
   *
   * Works off the light index (/bank/<subject>.json), which carries a plain
   * text preview rather than a rendered stem — enough to recognise a question
   * by, and small enough to download on a phone. The full stems are fetched
   * only when the assignment is actually rendered.
   */
  import { bankIndex, type BankIndex, type BankEntry } from '$lib/bank';

  let { subject, selected, onpick }: {
    subject: string;
    /** Question keys already on the assignment. */
    selected: string[];
    onpick: (key: string, marks: number) => void;
  } = $props();

  let index = $state<BankIndex | null>(null);
  let loading = $state(true);
  let topic = $state<string>('');
  let query = $state('');
  let kind = $state<'all' | 'mcq' | 'numeric' | 'structured'>('all');

  $effect(() => {
    const code = subject;
    if (!code) return;
    loading = true;
    void bankIndex(code).then((i) => {
      index = i;
      topic ||= i?.topics[0]?.slug ?? '';
      loading = false;
    });
  });

  const current = $derived(index?.topics.find((t) => t.slug === topic) ?? null);

  const shown = $derived.by(() => {
    if (!current) return [] as BankEntry[];
    const q = query.trim().toLowerCase();
    return current.questions.filter(
      (e) =>
        (kind === 'all' || e.kind === kind) &&
        (!q || e.preview.toLowerCase().includes(q) || e.objective.includes(q))
    );
  });

  const chosen = $derived(new Set(selected));
</script>

<div class="picker">
  {#if loading}
    <p class="muted small">Loading the question bank…</p>
  {:else if !index}
    <p class="muted small">Could not load the question bank for this subject.</p>
  {:else}
    <div class="controls">
      <label class="grow">
        <span class="eyebrow">Topic</span>
        <select bind:value={topic}>
          {#each index.topics as t}
            <option value={t.slug}>M{t.module} · {t.title} ({t.questions.length})</option>
          {/each}
        </select>
      </label>
      <label>
        <span class="eyebrow">Type</span>
        <select bind:value={kind}>
          <option value="all">All</option>
          <option value="mcq">Multiple choice</option>
          <option value="numeric">Numeric</option>
          <option value="structured">Structured</option>
        </select>
      </label>
      <label class="grow">
        <span class="eyebrow">Search</span>
        <input bind:value={query} type="search" placeholder="Words in the question, or 5.3" />
      </label>
    </div>

    <p class="muted small count">
      {shown.length} of {current?.questions.length ?? 0} shown
      {#if kind === 'structured'}
        · structured questions are marked by the student against your mark scheme
      {/if}
    </p>

    <ul class="results">
      {#each shown as e (e.key)}
        {@const on = chosen.has(e.key)}
        <li class:on>
          <button type="button" onclick={() => onpick(e.key, e.marks)} disabled={on}>
            <span class="meta">
              <span class="obj">{e.objective}</span>
              <span class="kind">{e.kind}</span>
              <span class="muted">{e.marks} {e.marks === 1 ? 'mark' : 'marks'}</span>
              <span class="muted dots">diff {e.difficulty}</span>
            </span>
            <span class="preview">{e.preview}…</span>
            <span class="muted small lesson">{e.lesson}</span>
          </button>
          {#if on}<span class="added">Added</span>{/if}
        </li>
      {:else}
        <li class="empty"><span class="muted small">Nothing matches.</span></li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .picker { display: flex; flex-direction: column; gap: .8rem; }
  .controls { display: flex; gap: .8rem; flex-wrap: wrap; align-items: flex-end; }
  .controls label { display: flex; flex-direction: column; gap: .3rem; }
  .controls .grow { flex: 1; min-width: 180px; }
  .count { margin: 0; }

  .results {
    list-style: none; margin: 0; padding: 0;
    max-height: 420px; overflow-y: auto;
    display: flex; flex-direction: column; gap: .4rem;
  }
  .results li { position: relative; }
  .results button {
    width: 100%; text-align: left; cursor: pointer;
    display: flex; flex-direction: column; gap: .25rem;
    padding: .7rem .8rem; border-radius: 12px;
    border: 1px solid var(--hairline, rgba(0,0,0,.1));
    background: var(--surface);
  }
  .results button:hover:not(:disabled) { border-color: var(--brand); }
  .results button:disabled { opacity: .55; cursor: default; }

  .meta { display: flex; gap: .6rem; align-items: baseline; font-size: .78rem; flex-wrap: wrap; }
  .obj { font-weight: 680; color: var(--brand); }
  .kind {
    text-transform: uppercase; letter-spacing: .04em; font-size: .68rem;
    font-weight: 650; color: var(--text-secondary);
  }
  .preview { font-size: .92rem; line-height: 1.4; }
  .lesson { font-size: .78rem; }
  .dots { font-variant-numeric: tabular-nums; }

  .added {
    position: absolute; top: .6rem; right: .7rem;
    font-size: .7rem; font-weight: 650; text-transform: uppercase;
    letter-spacing: .04em; color: var(--brand);
  }
  .empty { padding: .8rem; }
</style>
