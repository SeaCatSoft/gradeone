<svelte:head>
  <title>Grade One — CSEC study, built on the syllabus</title>
  <meta
    name="description"
    content="Lessons, flashcards and practice exams for CSEC Mathematics, IT and EDPM, written against the CXC syllabus and tracked objective by objective."
  />
</svelte:head>

<section class="hero">
  <div class="wrap">
    <p class="eyebrow">Caribbean Secondary Education Certificate</p>
    <h1>Study for the exam<br />you are actually sitting.</h1>
    <p class="lede">
      Every lesson, flashcard and practice question is tied to a specific objective in
      the CXC syllabus — so you always know what you have covered, what you have not,
      and what the examiner can ask.
    </p>
    <div class="cta">
      <a class="btn" href="/math">Start with Mathematics</a>
      <span class="note small">Free · no account needed to start</span>
    </div>
  </div>
</section>

<section class="wrap">
  <div class="points">
    <article class="point">
      <span class="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h10M4 18h13" />
          <circle cx="19.5" cy="12" r="2.2" />
        </svg>
      </span>
      <h3>Objective by objective</h3>
      <p class="muted">
        Progress is tracked against the syllabus itself, not against chapters someone
        invented. A topic is done when its objectives are.
      </p>
    </article>

    <article class="point">
      <span class="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
             stroke-linecap="round" stroke-linejoin="round">
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
          <path d="M8 9.5h8M8 14h5" />
        </svg>
      </span>
      <h3>Papers with the real shape</h3>
      <p class="muted">
        Practice papers draw questions in the same proportions as the published
        assessment grid, so a mock feels like the real thing.
      </p>
    </article>

    <article class="point">
      <span class="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 7v5l3.2 2" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      </span>
      <h3>Spaced repetition</h3>
      <p class="muted">
        Flashcards come back just before you would forget them, and stop coming back
        once you know them.
      </p>
    </article>
  </div>

  <p class="syllabus-note small muted">
    Built on the October 2025 amendment, effective for examinations from May–June 2027 —
    the revision that reorganised Mathematics into three separately sittable modules.
  </p>
</section>

<style>
  .hero { padding: clamp(2rem, 8vw, 6rem) 0 clamp(2.5rem, 6vw, 4.5rem); }

  h1 {
    /* Large text tightens: leading first, then tracking. */
    font-size: clamp(2.3rem, 6.4vw, 4.25rem);
    line-height: 1.04;
    letter-spacing: -.028em;
    font-weight: 620;
    margin: .5rem 0 1.1rem;
    max-width: 16ch;
  }

  .lede {
    font-size: clamp(1.05rem, 1.6vw, 1.3rem);
    line-height: 1.48;
    letter-spacing: -.01em;
    color: var(--text-secondary);
    max-width: 54ch;
    margin: 0 0 2rem;
    text-wrap: pretty;
  }

  .cta { display: flex; align-items: center; gap: 1.1rem; flex-wrap: wrap; }
  .btn {
    display: inline-block;
    background: var(--brand);
    color: var(--on-brand);
    font-weight: 560;
    font-size: 1.02rem;
    letter-spacing: var(--track-body);
    padding: .78rem 1.6rem;
    border-radius: var(--r-pill);
    transition:
      transform var(--dur-fast) var(--ease),
      background-color var(--dur-fast) var(--ease);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .btn:active { transform: scale(.97); }
  .note { color: var(--text-tertiary); }

  .points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1.5rem, 4vw, 3rem);
    padding: clamp(2rem, 5vw, 3.5rem) 0;
    border-top: .5px solid var(--separator);
  }
  .point h3 { margin: 0 0 .35rem; font-size: 1.04rem; font-weight: 590; }
  .point p { margin: 0; font-size: .95rem; line-height: 1.55; text-wrap: pretty; }

  .glyph {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin-bottom: .85rem;
    border-radius: var(--r-sm);
    background: var(--brand-soft);
    color: var(--brand);
  }
  .glyph svg { width: 19px; height: 19px; }

  .syllabus-note {
    max-width: 62ch;
    margin: 0 0 2rem;
    padding-top: 1.75rem;
    border-top: .5px solid var(--separator);
  }
</style>
