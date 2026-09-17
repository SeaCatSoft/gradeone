<svelte:head>
  <title>Grade One — CSEC study, built on the syllabus</title>
  <meta
    name="description"
    content="Lessons, flashcards and practice exams for CSEC Mathematics, IT and EDPM, written against the CXC syllabus and tracked objective by objective."
  />
</svelte:head>

<div class="wrap">
  <section class="hero">
    <p class="eyebrow">CSEC · Caribbean Secondary Education Certificate</p>
    <h1>Study for the exam you are actually sitting.</h1>
    <p class="lede">
      Every lesson, flashcard and practice question on Grade One is tied to a specific
      objective in the CXC syllabus — so you always know what you have covered, what you
      have not, and what the examiner can ask.
    </p>
    <div class="cta">
      <a class="btn" href="/math">Start with Mathematics</a>
    </div>
    <p class="small muted note">
      Built on the October 2025 amendment, effective for examinations from May–June 2027 —
      the one that reorganised Mathematics into three separately sittable modules.
    </p>
  </section>

  <section class="points">
    <div class="card point">
      <h3>Objective by objective</h3>
      <p class="muted small">
        Progress is tracked against the syllabus itself, not against chapters someone
        invented. A topic is done when its objectives are.
      </p>
    </div>
    <div class="card point">
      <h3>Papers with the real shape</h3>
      <p class="muted small">
        Practice papers draw questions in the same proportions as the published
        assessment grid, so a mock feels like the real thing.
      </p>
    </div>
    <div class="card point">
      <h3>Spaced repetition</h3>
      <p class="muted small">
        Flashcards come back just before you would forget them, and stop coming back
        once you know them.
      </p>
    </div>
  </section>
</div>

<style>
  .hero { max-width: 62ch; padding: 2rem 0 3rem; }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: .08em;
    font-size: .72rem;
    font-weight: 700;
    color: var(--brand);
    margin: 0 0 .75rem;
  }
  h1 { font-size: clamp(1.9rem, 5vw, 2.8rem); margin-bottom: .6rem; }
  .lede { font-size: 1.08rem; color: var(--text-muted); margin: 0 0 1.5rem; }
  .cta { display: flex; gap: .75rem; }
  .btn {
    display: inline-block;
    background: var(--brand);
    color: var(--on-brand);
    text-decoration: none;
    font-weight: 600;
    padding: .7rem 1.4rem;
    border-radius: var(--radius);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .note { margin-top: 1.25rem; }

  .points {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    padding-bottom: 2rem;
  }
  .point { padding: 1.1rem 1.2rem; }
  .point h3 { font-size: .98rem; margin-bottom: .35rem; }
  .point p { margin: 0; }
</style>
