<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '$lib/components/Icon.svelte';
  import { RING_COLORS, MODULE_THEMES } from '$lib/modules';

  // Illustrative values for the product shot, not anyone's data.
  const demo = [
    { icon: 'book', title: 'Read a lesson', have: 1, goal: 1, unit: 'lesson', ...RING_COLORS.learn },
    { icon: 'cards', title: 'Review 10 flashcards', have: 7, goal: 10, unit: 'cards', ...RING_COLORS.review },
    { icon: 'check', title: 'Answer 5 questions', have: 4, goal: 5, unit: 'questions', ...RING_COLORS.practice }
  ] as const;
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

<section class="hero wrap">
  <div class="hero-copy">
    <p class="kicker">CSEC Mathematics · 2027 syllabus</p>
    <h1>Study for the exam you're <span class="hl">actually sitting.</span></h1>
    <p class="lede">
      Every lesson, flashcard and question is tied to a specific objective in the CXC syllabus.
      You always know what you've covered, what's left, and what can come up.
    </p>
    <div class="ctas">
      <a class="btn3d big" href="{base}/today">Start studying <Icon name="chevron" size={18} /></a>
      <a class="btn3d ghost big" href="{base}/math">Browse Mathematics</a>
    </div>
    <p class="free">Free. No account needed to begin.</p>
  </div>

  <!-- The product shot: the Today page's quest cards, with example numbers. -->
  <div class="shot" aria-hidden="true">
    <div class="shot-head">
      <span class="shot-flame"><Icon name="flame" size={22} /></span>
      <span><strong>12</strong> day streak</span>
      <span class="shot-lvl">Lv 4</span>
    </div>
    {#each demo as q}
      {@const done = q.have >= q.goal}
      <div class="shot-q" style="--q:{q.color};--q-edge:{q.edge};--q-track:{q.track}">
        <span class="shot-icon"><Icon name={done ? 'check' : q.icon} size={20} /></span>
        <span class="shot-body">
          <strong>{q.title}</strong>
          <span class="shot-bar"><span style="transform:scaleX({Math.min(1, q.have / q.goal)})"></span></span>
          <span class="shot-count">{q.have} / {q.goal} {q.unit}</span>
        </span>
      </div>
    {/each}
  </div>
</section>

<section class="features wrap">
  <article class="f f-brand">
    <span class="f-glyph"><Icon name="flame" size={24} /></span>
    <h3>Three quests a day.</h3>
    <p>Read a lesson, review ten cards, answer five questions. About twenty minutes, and a streak that shows it.</p>
  </article>

  <article class="f">
    <span class="f-glyph" style="--g:#15803d;--g-edge:#14532d"><Icon name="grid" size={22} /></span>
    <h3>Objective by objective.</h3>
    <p>Progress is measured against the syllabus itself. A topic is done when its objectives are.</p>
  </article>

  <article class="f">
    <span class="f-glyph" style="--g:#c2410c;--g-edge:#7c2d12"><Icon name="cards" size={22} /></span>
    <h3>Flashcards that remember.</h3>
    <p>Swipe right if you knew it. Hard cards come back tomorrow; easy ones wait a week.</p>
  </article>

  <article class="f">
    <span class="f-glyph" style="--g:#0369a1;--g-edge:#0c4a6e"><Icon name="check" size={22} /></span>
    <h3>Worked, not just marked.</h3>
    <p>Every question shows its working, so a wrong answer teaches something.</p>
  </article>

  <article class="f wide">
    <p class="f-kicker">Papers with the real shape</p>
    <h3>60 questions. 20 from each module.</h3>
    <div class="bars">
      {#each modules as m}
        <div class="bar-row">
          <span>Module {m.n}</span>
          <span class="bar" style="--m:{MODULE_THEMES[m.n].solid};--m-edge:{MODULE_THEMES[m.n].edge}">20</span>
        </div>
      {/each}
    </div>
    <p>Practice draws questions in the same proportions as the published assessment grid.</p>
  </article>
</section>

<section class="band">
  <div class="wrap band-inner">
    <p class="band-kicker">Built on the October 2025 amendment</p>
    <h2>Three modules. Each one a credit.</h2>
    <p class="band-lede">
      From May–June 2027, CSEC Mathematics is three separately sittable modules.
      Most study material still teaches the old nine-section shape. This doesn't.
    </p>
    <div class="chips">
      {#each modules as m}
        <a class="chip" href="{base}/math#module-{m.n}"
           style="--m-from:{MODULE_THEMES[m.n].from};--m-to:{MODULE_THEMES[m.n].to};--m-edge:{MODULE_THEMES[m.n].edge}">
          <span class="chip-n">{m.n}</span>
          <strong>{m.name}</strong>
          <span>{m.topics} topics</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="closer wrap">
  <h2>Start today. It's free.</h2>
  <p>No account needed to begin. Sign up when you want your progress on every device.</p>
  <div class="ctas center">
    <a class="btn3d big" href="{base}/today">Start studying <Icon name="chevron" size={18} /></a>
    <a class="btn3d ghost big" href="{base}/signup">Create an account</a>
  </div>
</section>

<style>
  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 1.25rem; }

  /* ---------------------------------------------------------------- hero */
  .hero {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    align-items: center;
    gap: clamp(2rem, 5vw, 4rem);
    padding-top: clamp(2.5rem, 7vw, 5rem);
  }
  .kicker {
    display: inline-block;
    margin: 0 0 1rem;
    padding: .3rem .8rem;
    border-radius: var(--r-pill);
    font-size: .88rem;
    font-weight: 650;
    color: var(--brand-text);
    background: var(--brand-soft);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--brand) 30%, transparent);
  }
  h1 {
    margin: 0 0 1.1rem;
    font-size: clamp(2.5rem, 6.4vw, 4.4rem);
    font-weight: 700;
    line-height: 1.04;
  }
  .hl { color: var(--brand-text); }
  .lede {
    margin: 0 0 1.8rem;
    max-width: 46ch;
    font-size: clamp(1.08rem, 1.8vw, 1.25rem);
    font-weight: 600;
    line-height: 1.5;
    color: var(--text-secondary);
    text-wrap: pretty;
  }
  .ctas { display: flex; align-items: center; gap: .9rem; flex-wrap: wrap; }
  .ctas.center { justify-content: center; }
  .btn3d.big { min-height: 56px; padding: .8rem 1.6rem; font-size: 1.2rem; border-radius: 14px; }
  .free { margin: 1rem 0 0; font-size: .9rem; font-weight: 700; color: var(--text-tertiary); }

  .shot {
    display: flex;
    flex-direction: column;
    gap: .7rem;
    padding: 1.1rem;
    border-radius: 30px;
    background: var(--surface);
    box-shadow: var(--shadow);
    transform: rotate(1.5deg);
  }
  .shot-head {
    display: flex;
    align-items: center;
    gap: .7rem;
    padding: .2rem .3rem .4rem;
    font-weight: 650;
    color: var(--text-secondary);
  }
  .shot-head strong { font-family: var(--font-display); font-size: 1.5rem; color: var(--text); }
  .shot-flame {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    color: #fff;
    background: #c2410c;
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }
  .shot-lvl {
    margin-left: auto;
    padding: .3rem .7rem;
    border-radius: 12px;
    font-family: var(--font-display);
    font-weight: 680;
    color: #fff;
    background: var(--brand);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }
  .shot-q {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .75rem .85rem;
    border-radius: 14px;
    background: var(--surface-2);
    box-shadow: inset 0 0 0 1px var(--line);
  }
  .shot-icon {
    flex: none;
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    color: #fff;
    background: var(--q);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }
  .shot-body { flex: 1; display: flex; flex-direction: column; gap: .3rem; min-width: 0; }
  .shot-body strong { font-family: var(--font-display); font-weight: 680; }
  .shot-bar { height: 8px; border-radius: var(--r-pill); background: var(--q-track); overflow: hidden; }
  .shot-bar span { display: block; height: 100%; border-radius: inherit; background: var(--q); transform-origin: left; }
  .shot-count { font-size: .78rem; font-weight: 650; color: var(--text-secondary); }

  @media (max-width: 860px) {
    .hero { grid-template-columns: 1fr; }
    .shot { transform: none; max-width: 480px; }
  }

  /* ------------------------------------------------------------ features */
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
    margin-top: clamp(4rem, 9vw, 6rem);
  }
  .f {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem 1.6rem;
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow-lg);
  }
  .f h3 { margin: 0 0 .45rem; font-size: 1.4rem; font-weight: 600; line-height: 1.15; }
  .f p { margin: 0; color: var(--text-secondary); font-size: 1rem; font-weight: 600; line-height: 1.5; }
  .f-kicker { margin: 0 0 .4rem !important; font-size: .8rem !important; font-weight: 650 !important; letter-spacing: .06em; text-transform: uppercase; color: var(--brand-text) !important; }
  .f-glyph {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    margin-bottom: 1.1rem;
    border-radius: 12px;
    color: #fff;
    background: var(--g, var(--brand));
    box-shadow: 0 4px 0 var(--g-edge, var(--brand-edge));
  }
  .f-brand { grid-column: span 2; color: #fff; background: var(--brand); box-shadow: 0 1px 2px var(--shade), 0 18px 40px -20px var(--brand-edge); }
  .f-brand h3 { font-size: 2rem; }
  .f-brand p { color: #fff; font-size: 1.08rem; }
  .f-brand .f-glyph { color: var(--brand); background: #fff; box-shadow: 0 4px 0 rgba(0, 0, 0, .25); }


  .bars { display: flex; flex-direction: column; gap: .55rem; margin: .7rem 0 1.1rem; }
  .bar-row { display: grid; grid-template-columns: 5.5rem 1fr; align-items: center; gap: .8rem; font-size: .9rem; font-weight: 650; color: var(--text-secondary); }
  .bar {
    padding: .35rem .8rem;
    border-radius: 12px;
    color: #fff;
    font-family: var(--font-display);
    font-weight: 680;
    text-align: right;
    font-variant-numeric: tabular-nums;
    background: var(--m);
    box-shadow: 0 1px 2px var(--shade), inset 0 1px 0 rgba(255, 255, 255, .14);
  }

  @media (max-width: 860px) {
    .features { grid-template-columns: 1fr 1fr; }
    .wide { grid-column: span 2; }
  }
  @media (max-width: 560px) {
    .features { grid-template-columns: 1fr; }
    .wide, .f-brand { grid-column: auto; }
  }

  /* ---------------------------------------------------------------- band */
  .band {
    margin-top: clamp(4rem, 9vw, 6rem);
    padding: clamp(3.5rem, 8vw, 5.5rem) 0;
    background: #1e1b4b;
    color: #fff;
    box-shadow: inset 0 6px 0 #312e81, inset 0 -6px 0 #312e81;
  }
  .band-inner { text-align: center; }
  .band-kicker { margin: 0 0 .7rem; font-size: .85rem; font-weight: 650; letter-spacing: .06em; text-transform: uppercase; color: #a5b4fc; }
  .band h2 { margin: 0 0 1rem; font-size: clamp(2.2rem, 5.6vw, 3.6rem); font-weight: 700; line-height: 1.06; }
  .band-lede { margin: 0 auto 2.5rem; max-width: 50ch; color: #c7d2fe; font-size: 1.12rem; font-weight: 600; line-height: 1.5; }
  .chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.1rem; max-width: 780px; margin: 0 auto; }
  .chip {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 160px;
    padding: 1.2rem 1.3rem;
    border-radius: 18px;
    text-align: left;
    color: #fff;
    background: linear-gradient(150deg, var(--m-from), var(--m-to));
    box-shadow: 0 1px 2px var(--shade), 0 18px 40px -20px var(--m-edge);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .chip:hover { color: #fff; }
  .chip:active { transform: scale(.98); }
  .chip-n { font-family: var(--font-display); font-size: 3.6rem; font-weight: 700; line-height: .9; margin-bottom: auto; }
  .chip strong { font-family: var(--font-display); font-size: 1.25rem; font-weight: 680; }
  .chip span:last-child { font-size: .88rem; font-weight: 700; }
  @media (max-width: 600px) {
    .chips { grid-template-columns: 1fr; }
    .chip { min-height: 116px; }
  }

  /* -------------------------------------------------------------- closer */
  .closer { text-align: center; padding-top: clamp(4rem, 9vw, 5.5rem); }
  .closer h2 { margin: 0 0 .6rem; font-size: clamp(2.1rem, 5vw, 3.1rem); font-weight: 700; }
  .closer p { margin: 0 auto 1.6rem; color: var(--text-secondary); font-size: 1.1rem; font-weight: 600; max-width: 42ch; }

  @media (prefers-reduced-motion: reduce) {
    .shot { transform: none; }
  }
</style>
