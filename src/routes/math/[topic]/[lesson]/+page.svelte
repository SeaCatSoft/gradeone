<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.lesson.title} — {data.topic.title} — CSEC Mathematics</title>
  <meta
    name="description"
    content="CSEC Mathematics lesson on {data.lesson.title}, covering syllabus objectives {data.objectives.map((o) => o.code).join(', ')}."
  />
</svelte:head>

<div class="wrap">
  <p class="crumbs small">
    <a href="/math">Mathematics</a>
    <span class="muted">/</span>
    <a href="/math/{data.topic.slug}">{data.topic.title}</a>
  </p>

  <article>
    <header class="head">
      <h1>{data.lesson.title}</h1>
      <p class="small muted">
        {#if data.lesson.estMinutes}About {data.lesson.estMinutes} min ·{/if}
        Objectives {data.objectives.map((o) => o.code).join(', ')}
      </p>
    </header>

    {#if data.lesson.status !== 'published'}
      <p class="draft small">
        This lesson is still a <strong>{data.lesson.status}</strong> — it has not been
        checked against the textbooks yet.
      </p>
    {/if}

    <aside class="objectives card">
      <h2 class="small">What this covers</h2>
      <ul>
        {#each data.objectives as o}
          <li><span class="code">{o.code}</span> {o.statement}</li>
        {/each}
      </ul>
    </aside>

    <!-- Rendered from markdown at build time; KaTeX and inline SVG come through here. -->
    <div class="prose">
      {@html data.lesson.html}
    </div>
  </article>

  <div class="after card">
    <p><strong>Now practise it.</strong></p>
    <div class="links">
      <a href="/math/{data.topic.slug}/flashcards">Review {data.lesson.cardCount} flashcards</a>
      <a href="/math/{data.topic.slug}/practice">Try {data.lesson.questionCount} questions</a>
    </div>
  </div>

  <nav class="pager">
    {#if data.prev}
      <a class="card step" href="/math/{data.topic.slug}/{data.prev.slug}">
        <span class="small muted">Previous</span>
        <strong>{data.prev.title}</strong>
      </a>
    {:else}
      <span></span>
    {/if}
    {#if data.next}
      <a class="card step next" href="/math/{data.topic.slug}/{data.next.slug}">
        <span class="small muted">Next</span>
        <strong>{data.next.title}</strong>
      </a>
    {/if}
  </nav>
</div>

<style>
  .crumbs { margin: 0 0 .75rem; }
  .crumbs a { text-decoration: none; }

  article { max-width: var(--measure); }
  .head { margin-bottom: 1.25rem; }
  .head h1 { margin-bottom: .2rem; }
  .head p { margin: 0; }

  .draft {
    background: var(--reward-soft);
    color: var(--reward);
    border-radius: var(--radius);
    padding: .55rem .8rem;
    margin: 0 0 1.25rem;
  }

  .objectives { padding: .9rem 1.1rem; margin-bottom: 1.75rem; }
  .objectives h2 {
    margin: 0 0 .45rem;
    text-transform: uppercase;
    letter-spacing: .06em;
    color: var(--text-muted);
    font-size: .72rem;
  }
  .objectives ul { margin: 0; padding: 0; list-style: none; }
  .objectives li { padding: .15rem 0; font-size: .92rem; }
  .code { color: var(--brand); font-weight: 600; font-variant-numeric: tabular-nums; }

  /* Lesson prose. Sized for sustained reading rather than scanning. */
  .prose { font-size: 1.02rem; line-height: 1.72; }
  .prose :global(h3) { margin-top: 2rem; font-size: 1.12rem; }
  .prose :global(p) { margin: 0 0 1.1em; }
  .prose :global(strong) { font-weight: 650; }

  .prose :global(table) { margin: 1.25rem 0; font-size: .94rem; }
  .prose :global(svg) {
    display: block;
    margin: 1.5rem auto;
    max-width: 380px;
    color: var(--text-muted);
  }

  /* KaTeX display blocks scroll rather than widening the page on a phone. */
  .prose :global(.katex-display) {
    overflow-x: auto;
    overflow-y: hidden;
    padding: .35rem 0;
  }
  .prose :global(.math-error) {
    background: var(--wrong-soft);
    color: var(--wrong);
    padding: .1rem .35rem;
    border-radius: 4px;
  }

  .after { padding: 1rem 1.15rem; margin: 2.5rem 0 1.5rem; max-width: var(--measure); }
  .after p { margin: 0 0 .5rem; }
  .links { display: flex; gap: 1.25rem; flex-wrap: wrap; }

  .pager { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: var(--measure); }
  .step {
    padding: .8rem 1rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    transition: border-color .15s ease;
  }
  .step:hover { border-color: var(--brand); }
  .next { text-align: right; }

  @media (max-width: 560px) {
    .pager { grid-template-columns: 1fr; }
    .next { text-align: left; }
  }
</style>
