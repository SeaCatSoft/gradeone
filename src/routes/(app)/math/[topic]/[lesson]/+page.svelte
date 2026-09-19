<script lang="ts">
  import { base } from '$app/paths';
  import Icon from '$lib/components/Icon.svelte';
  import { load as loadProgress, markLessonRead } from '$lib/progress';
  import { saveAndSync } from '$lib/sync';
  import { session } from '$lib/session.svelte';
  import { setRecent } from '$lib/activity';
  import { themeVars } from '$lib/modules';

  let { data } = $props();

  let progress = $state(0);        // 0..1 through the article
  let finished = $state(false);
  let earned = $state(false);
  let article: HTMLElement | undefined = $state();
  let endMark: HTMLElement | undefined = $state();


  // $effect keyed on the lesson, not onMount. Next/Previous navigates between
  // lessons in the same component, so onMount would run once and then keep
  // tracking the FIRST lesson — wrong "continue reading", a stale progress bar,
  // and the Learn ring credited to a lesson the student already left.
  $effect(() => {
    const topic = data.topic;
    const lesson = data.lesson;
    finished = false;
    earned = false;
    progress = 0;

    setRecent({
      topic: topic.slug, topicTitle: topic.title,
      lesson: lesson.slug, lessonTitle: lesson.title
    });

    // Reading progress, tracked on scroll through the article only — not the
    // whole page, whose footer would make the bar lie near the end.
    let ticking = false;
    const measure = () => {
      ticking = false;
      if (!article) return;
      const r = article.getBoundingClientRect();
      const span = r.height - innerHeight * 0.6;
      progress = Math.min(1, Math.max(0, -r.top / Math.max(span, 1)));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(measure); } };
    addEventListener('scroll', onScroll, { passive: true });
    measure();

    // Reaching the end of the lesson is what counts as reading it. Scrolling
    // past the last paragraph is a better signal than time on page, and it
    // cannot be earned by leaving a tab open.
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting) || finished) return;
      finished = true;
      const p = loadProgress();
      earned = markLessonRead(p, `math/${topic.slug}/${lesson.slug}`);
      saveAndSync(p, session.user?.id ?? null);
    }, { threshold: 1 });
    if (endMark) io.observe(endMark);

    return () => { removeEventListener('scroll', onScroll); io.disconnect(); };
  });
</script>

<svelte:head>
  <title>{data.lesson.title} — {data.topic.title} — CSEC Mathematics</title>
  <meta
    name="description"
    content="CSEC Mathematics lesson on {data.lesson.title}, covering syllabus objectives {data.objectives.map((o) => o.code).join(', ')}."
  />
</svelte:head>

<div class="reader" style={themeVars(data.module)}>
  <div class="progress" aria-hidden="true"><span style="transform:scaleX({progress})"></span></div>

  <a class="back-link" href="{base}/math/{data.topic.slug}"><Icon name="chevron-left" size={17} />{data.topic.title}</a>

  <article bind:this={article}>
    <header class="head">
      <p class="eyebrow-mod">Lesson · {data.topic.title}</p>
      <h1>{data.lesson.title}</h1>
      <p class="meta">
        {[data.lesson.estMinutes ? `${data.lesson.estMinutes} min read` : '',
          `Objectives ${data.objectives.map((o) => o.code).join(', ')}`].filter(Boolean).join(' · ')}
      </p>
    </header>

    {#if data.lesson.status !== 'published'}
      <p class="draft">
        <Icon name="doc" size={15} />
        <span>Draft — not yet checked against the textbooks.</span>
      </p>
    {/if}

    <aside class="covers">
      <p class="covers-title">In this lesson</p>
      <ul>
        {#each data.objectives as o}
          <li><span class="code">{o.code}</span><span>{o.statement}</span></li>
        {/each}
      </ul>
    </aside>

    <!-- Rendered from markdown at build time; KaTeX and inline SVG come through here. -->
    <div class="prose">
      {@html data.lesson.html}
    </div>

    <div class="end" bind:this={endMark}>
      <span class="end-mark" class:done={finished}><Icon name="check" size={22} /></span>
      <div>
        <strong>{finished ? 'Lesson complete' : 'End of lesson'}</strong>
        <span>{earned ? '+15 XP · Lesson quest done' : finished ? 'Already counted today' : 'Reach here to count it as read'}</span>
      </div>
    </div>
  </article>

  <section class="practise">
    <a class="p-tile" href="{base}/math/{data.topic.slug}/flashcards">
      <span class="glyph review"><Icon name="cards" size={20} /></span>
      <span><strong>Flashcards</strong><span>{data.lesson.cardCount} from this lesson</span></span>
    </a>
    <a class="p-tile" href="{base}/math/{data.topic.slug}/practice">
      <span class="glyph practice"><Icon name="check" size={20} /></span>
      <span><strong>Practice</strong><span>{data.lesson.questionCount} questions</span></span>
    </a>
  </section>

  <nav class="pager">
    {#if data.prev}
      <a href="{base}/math/{data.topic.slug}/{data.prev.slug}">
        <span class="dir"><Icon name="chevron-left" size={14} /> Previous</span>
        <strong>{data.prev.title}</strong>
      </a>
    {:else}<span></span>{/if}
    {#if data.next}
      <a class="next" href="{base}/math/{data.topic.slug}/{data.next.slug}">
        <span class="dir">Next <Icon name="chevron" size={14} /></span>
        <strong>{data.next.title}</strong>
      </a>
    {/if}
  </nav>
</div>

<style>
  .reader { max-width: 700px; margin: 0 auto; }

  /* Reading progress: a hairline in the module colour, pinned to the top.
     scaleX, not width, so it animates on the compositor. */
  .progress { position: fixed; top: 0; left: 0; right: 0; height: 6px; z-index: 40; background: var(--mod-soft); }
  .progress span {
    display: block;
    height: 100%;
    background: var(--mod);
    transform-origin: left;
    transition: transform .12s linear;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: .1rem;
    margin: 0 0 1.3rem -.3rem;
    font-weight: 500;
    color: var(--mod-text);
  }
  .back-link:hover { color: var(--mod-text); opacity: .8; }

  .head { margin-bottom: 1.6rem; }
  .eyebrow-mod { margin: 0 0 .35rem; font-size: .76rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--mod-text); }
  h1 { margin: 0 0 .55rem; font-size: clamp(2.1rem, 5.4vw, 3.1rem); font-weight: 700; line-height: 1.06; }
  .meta { margin: 0; color: var(--text-secondary); font-size: .95rem; }

  .draft {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin: 0 0 1.4rem;
    padding: .55rem .85rem;
    border-radius: 12px;
    font-size: .88rem;
    color: var(--reward);
    background: var(--reward-soft);
  }

  .covers {
    margin-bottom: 2.4rem;
    padding: 1rem 1.15rem;
    border-radius: 20px;
    background: var(--mod-soft);
    box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--mod-bright) 35%, transparent);
  }
  .covers-title { margin: 0 0 .5rem; font-size: .76rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--mod-text); }
  .covers ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: .3rem; }
  .covers li { display: flex; gap: .7rem; font-size: .95rem; }
  .code { flex: none; font-weight: 700; color: var(--mod-text); font-variant-numeric: tabular-nums; }

  /* ---------------------------------------------------------------- prose
     A reading column, Books-style: 18px, generous leading, headings that
     tighten as they grow. */
  .prose { font-size: 1.12rem; line-height: 1.7; letter-spacing: -.006em; }
  .prose :global(p) { margin: 0 0 1.15em; text-wrap: pretty; }
  .prose :global(h3) {
    margin: 2.6rem 0 .75rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
  }
  .prose :global(strong) { font-weight: 800; }
  .prose :global(ul), .prose :global(ol) { margin: 0 0 1.15em; padding-left: 1.3em; }
  .prose :global(li) { margin-bottom: .35em; }
  .prose :global(table) {
    margin: 1.7rem 0;
    font-size: .98rem;
    background: var(--surface);
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  .prose :global(th), .prose :global(td) { padding: .65rem .95rem; }
  .prose :global(tr:last-child td) { border-bottom: 0; }
  .prose :global(svg) {
    display: block;
    margin: 2rem auto;
    max-width: 420px;
    padding: 1.1rem;
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    color: var(--text-secondary);
  }
  .prose :global(.katex-display) { overflow-x: auto; overflow-y: hidden; padding: .45rem 0; margin: 1.35rem 0; }
  .prose :global(.math-error) { background: var(--wrong-soft); color: var(--wrong); padding: .1rem .4rem; border-radius: 6px; }

  /* ----------------------------------------------------------------- end */
  .end {
    display: flex;
    align-items: center;
    gap: .9rem;
    margin: 3rem 0 0;
    padding: 1.1rem 1.2rem;
    border-radius: 22px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .end div { display: flex; flex-direction: column; }
  .end strong { font-family: var(--font-display); font-size: 1.1rem; font-weight: 600; }
  .end span { font-size: .86rem; font-weight: 700; color: var(--text-secondary); }
  .end-mark {
    flex: none;
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 15px;
    color: var(--text-tertiary);
    background: var(--surface-2);
    transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
  }
  /* Arrives with a small overshoot: this is the reward for finishing. */
  .end-mark.done { color: #fff; background: var(--correct-fill, #15803d); box-shadow: 0 4px 0 #14532d; animation: pop var(--dur-slow) var(--ease-spring) both; }
  @keyframes pop { from { transform: scale(.6); } to { transform: scale(1); } }

  .practise { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin-top: 1rem; }
  .p-tile {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: .9rem 1rem;
    border-radius: 20px;
    background: var(--surface);
    box-shadow: var(--shadow);
    color: inherit;
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .p-tile:hover { color: inherit; }
  .p-tile:active { transform: translateY(5px); box-shadow: inset 0 0 0 2px var(--line), 0 0 0 var(--line); }
  .p-tile > span:last-child { display: flex; flex-direction: column; }
  .p-tile strong { font-family: var(--font-display); font-size: 1.08rem; font-weight: 600; }
  .p-tile span span { font-size: .82rem; font-weight: 700; color: var(--text-secondary); }
  .glyph { flex: none; display: grid; place-items: center; width: 40px; height: 40px; border-radius: 12px; color: #fff; }
  .glyph.review { background: #c2410c; box-shadow: 0 3px 0 #7c2d12; }
  .glyph.practice { background: #0369a1; box-shadow: 0 3px 0 #0c4a6e; }

  .pager { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin-top: 2rem; }
  .pager a {
    display: flex;
    flex-direction: column;
    gap: .1rem;
    padding: .9rem 1.05rem;
    border-radius: 20px;
    color: inherit;
    background: var(--surface);
    box-shadow: var(--shadow-sm);
    transition: transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast) var(--ease);
  }
  .pager a:hover { color: inherit; }
  .pager a:active { transform: translateY(3px); box-shadow: inset 0 0 0 2px var(--line), 0 0 0 var(--line); }
  .dir { display: inline-flex; align-items: center; gap: .2rem; font-size: .8rem; color: var(--mod-text); font-weight: 800; }
  .pager strong { font-weight: 800; }
  .next { text-align: right; align-items: flex-end; }

  @media (max-width: 560px) {
    .practise, .pager { grid-template-columns: 1fr; }
    .next { text-align: left; align-items: flex-start; }
  }
</style>
