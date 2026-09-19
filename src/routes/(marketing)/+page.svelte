<script lang="ts">
  import { base } from '$app/paths';
  import Rings from '$lib/components/Rings.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { RING_COLORS, MODULE_THEMES } from '$lib/modules';

  // Illustrative values for the product shot, not anyone's data.
  const demo = [
    { value: 1, ...RING_COLORS.learn, label: 'Learn' },
    { value: 0.7, ...RING_COLORS.review, label: 'Review' },
    { value: 0.8, ...RING_COLORS.practice, label: 'Practice' }
  ];
  const modules = [
    { n: 1, name: 'Fundamentals', topics: 6 },
    { n: 2, name: 'Intermediate', topics: 5 },
    { n: 3, name: 'Higher Concepts', topics: 4 }
  ];
</script>

<svelte:head>
  <title>Grade One — CSEC study, built on the syllabus</title>
  <meta
    name="description"
    content="Lessons, flashcards and practice exams for CSEC Mathematics, IT and EDPM, written against the CXC syllabus and tracked objective by objective."
  />
</svelte:head>

<section class="hero">
  <p class="kicker">CSEC Mathematics · 2027 syllabus</p>
  <h1>Study for the exam<br />you're actually sitting.</h1>
  <p class="lede">
    Every lesson, flashcard and question is tied to a specific objective in the CXC syllabus.
    You always know what you've covered, what's left, and what can come up.
  </p>
  <div class="ctas">
    <a class="btn" href="{base}/today">Start studying</a>
    <a class="link" href="{base}/math">Browse Mathematics <Icon name="chevron" size={14} /></a>
  </div>

  <!-- The product shot: the actual Today summary, not a mock-up of one. -->
  <div class="shot" aria-hidden="true">
    <div class="shot-inner">
      <Rings rings={demo} size={190} stroke={22} gap={3} />
      <div class="shot-rows">
        <div><span style="color:{RING_COLORS.learn.color}">Learn</span><strong style="color:{RING_COLORS.learn.color}">1<small>/1 lesson</small></strong></div>
        <div><span style="color:{RING_COLORS.review.color}">Review</span><strong style="color:{RING_COLORS.review.color}">7<small>/10 cards</small></strong></div>
        <div><span style="color:{RING_COLORS.practice.color}">Practice</span><strong style="color:{RING_COLORS.practice.color}">4<small>/5 questions</small></strong></div>
      </div>
    </div>
  </div>
</section>

<section class="bento wrap">
  <article class="b tall dark">
    <p class="b-kicker">Daily goals</p>
    <h3>Close your rings.</h3>
    <p>Read a lesson, review ten cards, answer five questions. About twenty minutes, every day, and a streak that shows it.</p>
    <div class="b-rings"><Rings rings={demo} size={120} stroke={14} gap={2} /></div>
  </article>

  <article class="b">
    <span class="b-glyph" style="background:linear-gradient(145deg,#34c759,#0b7a5e)"><Icon name="grid" size={20} /></span>
    <h3>Objective by objective.</h3>
    <p>Progress is measured against the syllabus itself. A topic is done when its objectives are.</p>
  </article>

  <article class="b">
    <span class="b-glyph" style="background:linear-gradient(145deg,#a6f04a,#4cb61c)"><Icon name="cards" size={20} /></span>
    <h3>Flashcards that remember.</h3>
    <p>Swipe right if you knew it. Hard cards come back tomorrow; easy ones wait a week.</p>
  </article>

  <article class="b wide">
    <p class="b-kicker">Papers with the real shape</p>
    <h3>60 questions. 20 from each module.</h3>
    <div class="bars">
      {#each modules as m}
        <div class="bar-row">
          <span>Module {m.n}</span>
          <span class="bar" style="background:linear-gradient(90deg,{MODULE_THEMES[m.n].from},{MODULE_THEMES[m.n].to})">20</span>
        </div>
      {/each}
    </div>
    <p>Practice draws questions in the same proportions as the published assessment grid.</p>
  </article>

  <article class="b">
    <span class="b-glyph" style="background:linear-gradient(145deg,#4ff0f4,#0a9fd6)"><Icon name="check" size={20} /></span>
    <h3>Worked, not just marked.</h3>
    <p>Every question shows its working, so a wrong answer teaches something.</p>
  </article>
</section>

<section class="band">
  <div class="wrap band-inner">
    <p class="b-kicker">Built on the October 2025 amendment</p>
    <h2>Three modules.<br />Each one a credit.</h2>
    <p class="band-lede">
      From May–June 2027, CSEC Mathematics is three separately sittable modules.
      Most study material still teaches the old nine-section shape. This doesn't.
    </p>
    <div class="chips">
      {#each modules as m}
        <div class="chip" style="background:linear-gradient(150deg,{MODULE_THEMES[m.n].from},{MODULE_THEMES[m.n].to})">
          <span class="chip-n">{m.n}</span>
          <strong>{m.name}</strong>
          <span>{m.topics} topics</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="closer wrap">
  <h2>Start today. It's free.</h2>
  <p>No account needed to begin. Sign up when you want your progress on every device.</p>
  <div class="ctas">
    <a class="btn" href="{base}/today">Start studying</a>
    <a class="link" href="{base}/signup">Create an account <Icon name="chevron" size={14} /></a>
  </div>
</section>

<style>
  .wrap { max-width: 1000px; margin: 0 auto; padding: 0 1.25rem; }

  /* ---------------------------------------------------------------- hero */
  .hero { text-align: center; padding: clamp(3rem, 9vw, 6.5rem) 1.25rem 0; }
  .kicker { margin: 0 0 .7rem; font-size: 1.05rem; font-weight: 600; color: var(--brand); letter-spacing: -.01em; }
  h1 {
    margin: 0 auto 1.1rem;
    max-width: 16ch;
    font-size: clamp(2.6rem, 7.6vw, 5rem);
    font-weight: 750;
    line-height: 1.02;
    letter-spacing: -.038em;
  }
  .lede {
    margin: 0 auto 1.9rem;
    max-width: 44ch;
    font-size: clamp(1.1rem, 1.9vw, 1.35rem);
    line-height: 1.45;
    letter-spacing: -.012em;
    color: var(--text-secondary);
    text-wrap: pretty;
  }
  .ctas { display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }
  .btn {
    padding: .8rem 1.5rem;
    border-radius: var(--r-pill);
    background: var(--brand);
    color: var(--on-brand);
    font-size: 1.05rem;
    font-weight: 600;
    transition: transform var(--dur-fast) var(--ease), background-color var(--dur-fast) var(--ease);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .btn:active { transform: scale(.97); }
  .link { display: inline-flex; align-items: center; gap: .15rem; font-size: 1.05rem; font-weight: 500; }

  .shot {
    max-width: 640px;
    margin: clamp(2.5rem, 6vw, 4rem) auto 0;
    padding: 10px;
    border-radius: 38px;
    background: linear-gradient(180deg, #2a2a2e, #0f0f11);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2), 0 40px 80px -40px rgba(0, 0, 0, .6);
  }
  .shot-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1.5rem, 5vw, 3rem);
    padding: clamp(1.5rem, 4vw, 2.5rem);
    border-radius: 30px;
    background: #000;
    color: #f5f5f7;
    text-align: left;
  }
  .shot-rows { display: flex; flex-direction: column; gap: .9rem; }
  .shot-rows span { display: block; font-size: .78rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .shot-rows strong { font-size: 2rem; font-weight: 700; letter-spacing: -.02em; line-height: 1.05; }
  .shot-rows small { font-size: .45em; font-weight: 700; text-transform: uppercase; letter-spacing: .03em; margin-left: .1em; }
  @media (max-width: 520px) {
    .shot-inner { flex-direction: column; text-align: center; }
  }

  /* --------------------------------------------------------------- bento */
  .bento {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: clamp(4rem, 9vw, 6.5rem);
  }
  .b {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 1.6rem 1.7rem;
    border-radius: 28px;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
  }
  .b h3 { margin: 0 0 .45rem; font-size: 1.35rem; font-weight: 720; line-height: 1.15; letter-spacing: -.024em; }
  .b p { margin: 0; color: var(--text-secondary); font-size: .98rem; line-height: 1.5; }
  .b-kicker { margin: 0 0 .4rem !important; font-size: .82rem !important; font-weight: 650; color: var(--brand) !important; }
  .b-glyph {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    margin-bottom: 1.2rem;
    border-radius: 14px;
    color: #fff;
  }
  .tall { grid-row: span 2; }
  .wide { grid-column: span 2; }
  /* The hairline keeps a black tile's edge visible on a black page in dark mode. */
  .dark { background: #0b0b0d; color: #f5f5f7; box-shadow: inset 0 0 0 .5px rgba(255, 255, 255, .1), var(--shadow-sm); }
  .dark p { color: #a1a1a6; }
  .dark .b-kicker { color: #fa114f !important; }
  .b-rings { margin-top: auto; padding-top: 1.5rem; display: flex; justify-content: center; }

  .bars { display: flex; flex-direction: column; gap: .5rem; margin: .6rem 0 1rem; }
  .bar-row { display: grid; grid-template-columns: 5.5rem 1fr; align-items: center; gap: .8rem; font-size: .88rem; color: var(--text-secondary); }
  .bar {
    padding: .3rem .7rem;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 860px) {
    .bento { grid-template-columns: 1fr 1fr; }
    .tall { grid-row: auto; }
  }
  @media (max-width: 560px) {
    .bento { grid-template-columns: 1fr; }
    .wide { grid-column: auto; }
  }

  /* ---------------------------------------------------------------- band */
  .band {
    margin-top: clamp(4rem, 9vw, 6.5rem);
    padding: clamp(3.5rem, 8vw, 6rem) 0;
    background: #000;
    color: #f5f5f7;
  }
  .band-inner { text-align: center; }
  .band .b-kicker { color: #34c759 !important; }
  .band h2 { margin: 0 0 1rem; font-size: clamp(2.2rem, 6vw, 3.8rem); font-weight: 750; line-height: 1.04; letter-spacing: -.036em; }
  .band-lede { margin: 0 auto 2.5rem; max-width: 50ch; color: #a1a1a6; font-size: 1.12rem; line-height: 1.5; }
  .chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 760px; margin: 0 auto; }
  .chip {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 150px;
    padding: 1.2rem;
    border-radius: 24px;
    overflow: hidden;
    text-align: left;
  }
  .chip-n { font-size: 3.4rem; font-weight: 800; line-height: .9; letter-spacing: -.05em; opacity: .9; margin-bottom: auto; }
  .chip strong { font-size: 1.1rem; font-weight: 700; letter-spacing: -.015em; }
  .chip span:last-child { font-size: .85rem; opacity: .85; }
  @media (max-width: 600px) {
    .chips { grid-template-columns: 1fr; }
    .chip { min-height: 110px; }
  }

  /* -------------------------------------------------------------- closer */
  .closer { text-align: center; padding-top: clamp(4rem, 9vw, 6rem); }
  .closer h2 { margin: 0 0 .6rem; font-size: clamp(2rem, 5vw, 3rem); font-weight: 750; letter-spacing: -.032em; }
  .closer p { margin: 0 auto 1.6rem; color: var(--text-secondary); font-size: 1.1rem; max-width: 42ch; }
</style>
