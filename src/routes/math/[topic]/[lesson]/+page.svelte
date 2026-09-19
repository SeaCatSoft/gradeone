<script lang="ts">
  import { base } from '$app/paths';
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
  <nav class="crumbs small">
    <a href="{base}/math">Mathematics</a>
    <span aria-hidden="true">›</span>
    <a href="{base}/math/{data.topic.slug}">{data.topic.title}</a>
  </nav>

  <article>
    <header class="head">
      <h1>{data.lesson.title}</h1>
      <p class="small muted">
        {#if data.lesson.estMinutes}{data.lesson.estMinutes} min read <span aria-hidden="true">·</span>{/if}
        Objectives {data.objectives.map((o) => o.code).join(', ')}
      </p>
    </header>

    {#if data.lesson.status !== 'published'}
      <p class="draft small">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
             stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.2v.1" />
        </svg>
        <span>This lesson is still a <strong>{data.lesson.status}</strong> — it has not been checked against the textbooks yet.</span>
      </p>
    {/if}

    <aside class="objectives">
      <h2 class="eyebrow">What this covers</h2>
      <ul>
        {#each data.objectives as o}
          <li><span class="code">{o.code}</span> <span>{o.statement}</span></li>
        {/each}
      </ul>
    </aside>

    <!-- Rendered from markdown at build time; KaTeX and inline SVG come through here. -->
    <div class="prose">
      {@html data.lesson.html}
    </div>
  </article>

  <aside class="after">
    <p class="lead">Now practise it.</p>
    <div class="links">
      <a class="pill" href="{base}/math/{data.topic.slug}/flashcards">
        Review {data.lesson.cardCount} flashcards
      </a>
      <a class="pill" href="{base}/math/{data.topic.slug}/practice">
        Try {data.lesson.questionCount} questions
      </a>
    </div>
  </aside>

  <nav class="pager">
    {#if data.prev}
      <a class="step" href="{base}/math/{data.topic.slug}/{data.prev.slug}">
        <span class="small muted">‹ Previous</span>
        <strong>{data.prev.title}</strong>
      </a>
    {:else}
      <span></span>
    {/if}
    {#if data.next}
      <a class="step next" href="{base}/math/{data.topic.slug}/{data.next.slug}">
        <span class="small muted">Next ›</span>
        <strong>{data.next.title}</strong>
      </a>
    {/if}
  </nav>
</div>

<style>
  .crumbs { display: flex; align-items: center; gap: .45rem; margin-bottom: 1.2rem; }
  .crumbs span[aria-hidden] { color: var(--text-tertiary); }

  article { max-width: var(--measure); }

  .head { margin-bottom: 1.6rem; }
  .head h1 {
    font-size: clamp(2rem, 4.8vw, 3rem);
    line-height: 1.06;
    letter-spacing: -.028em;
    font-weight: 620;
    margin: 0 0 .45rem;
  }
  .head p { margin: 0; }

  .draft {
    display: flex;
    align-items: flex-start;
    gap: .55rem;
    background: var(--reward-soft);
    color: var(--reward);
    border-radius: var(--r);
    padding: .65rem .85rem;
    margin: 0 0 1.5rem;
  }
  .draft svg { width: 16px; height: 16px; flex: none; margin-top: .12rem; }

  .objectives {
    background: var(--surface);
    border-radius: var(--r-lg);
    box-shadow: var(--shadow-sm);
    padding: 1rem 1.15rem 1.1rem;
    margin-bottom: 2.25rem;
  }
  .objectives h2 { margin: 0 0 .5rem; }
  .objectives ul { margin: 0; padding: 0; list-style: none; }
  .objectives li { display: flex; gap: .7rem; padding: .18rem 0; font-size: .94rem; }
  .code {
    flex: none;
    color: var(--brand);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  /* ---------------------------------------------------------------- prose
     Sized for sustained reading: 17px body, generous leading, near-zero
     tracking. Headings tighten as they grow, per the type scale. */
  .prose {
    font-size: 1.06rem;
    line-height: 1.68;
    letter-spacing: -.004em;
  }
  .prose :global(p) { margin: 0 0 1.15em; text-wrap: pretty; }
  .prose :global(h3) {
    margin: 2.4rem 0 .7rem;
    font-size: 1.28rem;
    line-height: 1.22;
    letter-spacing: -.019em;
    font-weight: 620;
  }
  .prose :global(strong) { font-weight: 620; }
  .prose :global(em) { font-style: italic; }

  .prose :global(ul), .prose :global(ol) { margin: 0 0 1.15em; padding-left: 1.3em; }
  .prose :global(li) { margin-bottom: .35em; }

  .prose :global(table) {
    margin: 1.6rem 0;
    font-size: .95rem;
    background: var(--surface);
    border-radius: var(--r);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .prose :global(th), .prose :global(td) { padding: .6rem .9rem; }
  .prose :global(tr:last-child td) { border-bottom: 0; }

  /* Diagrams sit on their own surface so the strokes read as a figure rather
     than as stray lines in the text column. */
  .prose :global(svg) {
    display: block;
    margin: 1.9rem auto;
    max-width: 400px;
    padding: 1rem;
    border-radius: var(--r-lg);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: var(--text-secondary);
  }

  /* Display maths scrolls inside its own box rather than widening the page. */
  .prose :global(.katex-display) {
    overflow-x: auto;
    overflow-y: hidden;
    padding: .45rem 0;
    margin: 1.3rem 0;
  }
  .prose :global(.math-error) {
    background: var(--wrong-soft);
    color: var(--wrong);
    padding: .1rem .4rem;
    border-radius: var(--r-sm);
    font-family: var(--font-mono);
    font-size: .9em;
  }

  /* ---------------------------------------------------------------- after */
  .after {
    max-width: var(--measure);
    margin: 3rem 0 2rem;
    padding-top: 1.75rem;
    border-top: .5px solid var(--separator);
  }
  .lead { margin: 0 0 .85rem; font-weight: 590; letter-spacing: var(--track-heading); }
  .links { display: flex; gap: .6rem; flex-wrap: wrap; }
  .pill {
    display: inline-block;
    padding: .5rem 1.05rem;
    border-radius: var(--r-pill);
    background: var(--brand-soft);
    color: var(--brand);
    font-size: .92rem;
    font-weight: 550;
    transition: transform var(--dur-fast) var(--ease), background-color var(--dur-fast) var(--ease);
  }
  @media (hover: hover) {
    .pill:hover { background: color-mix(in srgb, var(--brand) 16%, transparent); }
  }
  .pill:active { transform: scale(.97); }

  .pager {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .85rem;
    max-width: var(--measure);
  }
  .step {
    display: flex;
    flex-direction: column;
    gap: .1rem;
    padding: .9rem 1.1rem;
    border-radius: var(--r-lg);
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: inherit;
    transition: transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
  }
  .step strong { font-weight: 550; letter-spacing: var(--track-heading); }
  @media (hover: hover) {
    .step:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
  }
  .step:active { transform: scale(.985); transition-duration: var(--dur-fast); }
  .next { text-align: right; }

  @media (max-width: 560px) {
    .pager { grid-template-columns: 1fr; }
    .next { text-align: left; }
  }
</style>
