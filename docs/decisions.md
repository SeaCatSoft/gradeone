# Decisions

## Why not the Roost stack (static HTML/JS + Supabase)

Roost is forms and tables; vanilla JS suits that. Grade One is not. A timed
mock exam holds a timer, question navigation, saved answers and a submit flow
in play at once; flashcards run a scheduling algorithm live; Maths needs
equation rendering. Hand-writing DOM plumbing for that across ~20 screens is
the exact work a framework removes. Static hosting also gives no server
rendering, and lesson pages are the platform's best organic growth channel.

## Why SvelteKit over Next.js

Next.js has the larger ecosystem — a real point in its favour. It loses on the
thing that actually bites a solo project: readability months later. A Svelte
file is a `<script>` block, markup and a `<style>` block, which is
structurally the HTML already written for Roost. React adds JSX, hooks and a
re-render model to learn. SvelteKit server-renders just as well and Supabase
supports it first-class.

## Why mastery is stored per objective and nowhere else

Topic and module progress bars are averages computed over `objective_mastery`.
They are never stored separately. One number, one place to be wrong.

## Why XP is an append-only event log

`xp_events` has insert and select policies but no update or delete. Every
figure on the dashboard is reconstructible from the log, and XP cannot be
granted without a row saying what earned it — the same discipline as Roost's
rule that only inputs get stored and everything derived is a view.

## Why practice exams sample by the assessment grid

`topics.mcq_count` and `topics.p2_marks` hold the real published weightings.
A mock paper drawn in those proportions has the shape of the real one; an
even spread across topics would quietly mistrain students.

## Open question: per-topic Paper 02 marks

CXC publishes Module 1's Paper 02 marks for *groups* of topics
("Graphs, Sets, Measurement and Algebra 1 — 12 marks"), not per topic, and
groups two of Module 2's five. Those rows carry `p2_group` and leave
`p2_marks` null rather than splitting a group evenly and presenting the
result as fact. Module 1 also carries a 9-mark investigation question that
may be set on any combination of its objectives — not yet modelled.

## Not yet decided

- **SBA (Paper 031) support.** It is 30% of total assessment and is a group
  project, which is a different product from solo study. Paper 032 (private
  candidates, three optional questions, answer one) is much closer to what
  this platform already does.
- **Teacher/class accounts.** No teacher role exists. Adding one means a new
  join table, not loosening an RLS policy.

## Why the app reads markdown, not the database (for now)

`src/lib/content/loader.server.ts` is the only module that knows where content
comes from. Today it reads the markdown at build time, which means the whole
platform runs before Supabase exists — and it turns out to be the better
arrangement for public pages anyway: lessons prerender to complete static HTML,
maths and diagrams included, so they can rank in search with no database round
trip. Progress and auth are a different matter and belong in Supabase; they
live behind `$lib/progress`, which localStorage backs for now.

## Why `###` means two different things

Inside `## Flashcards` and `## Questions` a `###` heading starts a new item.
Inside `## Lesson` it is an ordinary subheading. The parser originally treated
every `###` as an item, which silently truncated every lesson at its first
subheading — the prose went into entries nothing read, and no error was raised
because the remaining opening paragraph passed the length check. There is now a
fixture (`backend/tools/fixtures/subheadings.md`) asserting prose, SVG and
tables survive after a subheading.

## Still to decide: the deploy adapter

The build runs on `adapter-auto`, which reports "could not detect a supported
production environment" locally. A real target — `adapter-cloudflare` or
`adapter-vercel` — has to be chosen before anything deploys.

## The visual system

Built on Apple's interface conventions, which suit this app for a reason
beyond taste: a study platform is read for hours at a time, so the design
has to recede. The rules being followed:

- **Type changes shape with size.** Tracking is size-specific — large display
  text goes to `-0.028em` because letters read too loose as they grow, body
  sits near zero, small captions get a touch of positive tracking. Leading
  tightens as size grows. One `letter-spacing` for everything is wrong
  somewhere.
- **Body is 17px**, Apple's reading size, not the web default 16.
- **Inter, with `-apple-system` first.** SF Pro is not licensable for the web,
  and most of these students are not on an Apple device. An iPhone gets the
  real thing; everyone else gets the closest free equivalent; the system font
  renders while it loads.
- **The header is a translucent material**, not an opaque bar — content scrolls
  underneath it. Its hairline appears only once something is actually behind
  it, because a permanent divider under floating chrome reads as a seam.
- **Colour means something.** Teal is the brand, amber is reward (XP, streaks,
  mastery) and is never used for chrome, green and red are verdicts. Nothing
  else is coloured, so when something does go amber the student notices.
- **Feedback is on the press, not the release.** Every button scales to 0.97 on
  `:active` in 140ms. This is the single cheapest thing that makes an interface
  feel direct rather than dead.
- **Motion is critically damped by default** (`cubic-bezier(.32,.72,0,1)`, no
  overshoot). The one spring with overshoot is reserved for moments that follow
  a completed effort — the session-complete tick, the score reveal. Bounce on a
  panel that merely appeared would feel wrong.
- **Three accessibility preferences are honoured**, not just one:
  `prefers-reduced-motion` drops travel and overshoot but keeps opacity;
  `prefers-reduced-transparency` frosts the materials solid;
  `prefers-contrast: more` firms the separators and drops translucency.

## Why auth is client-side, and the whole site is static

Every page of content is public and prerenders to static HTML, so no page ever
needs a session to render. Auth only decides *whose progress* to load, which is
client-side data regardless. Keeping auth in the browser means no server, no
cookie plumbing, and the site deploys as plain static files — which answers the
open adapter question: `adapter-static`, on GitHub Pages, exactly like Roost.

## Why progress keys on text paths, not database ids

`objective_mastery.objective_key` holds `math/sets/3.1`, not a foreign key into
`objectives`. Migration 004 was rewritten before it ever ran, for two reasons.

First, content lives in markdown and prerenders; the database holds only
student data. Keying on content ids would force content into the database
purely to have ids to point at, and would break every student's progress on a
re-import.

Second — and this was a live bug — objective codes restart at 1.1 inside every
topic, and every module has a topic 1, 2, 3. So a bare `3.1` names Sets,
Relations Functions and Graphs 1 **and** Geometry and Trigonometry 2. Progress
keyed on the code alone silently merged three unrelated topics into one mastery
score. It was invisible while only Sets had content and would have corrupted
data the moment a second topic shipped. `src/lib/keys.ts` is now the only place
these keys are built.

Nothing validates the paths, by design: the database must not need to know the
syllabus. The cost is that a typo writes an orphan row rather than failing,
which is why the keys are built by one module and never by hand.

## Why signing in does not merge progress

If an account is empty, whatever this browser has is pushed up — a student who
studied anonymously for a week must not lose it at the exact moment they commit
to an account. If the account has progress, it is pulled down and replaces
local.

The second case is deliberately "remote wins" rather than a merge. Merging two
spaced-repetition schedules has no correct answer, and quietly picking one
produces review dates neither device asked for. Last-signed-in-device-wins is
the honest behaviour, and the account page says so in plain words rather than
leaving a student to discover it.

## Hosting: GitHub Pages now, custom domain later

The site is static, so it deploys to GitHub Pages at
`seacatsoft.github.io/gradeone/`. A project site lives under a subfolder, so
every internal link goes through `base` from `$app/paths`, set by `BASE_PATH`
at build time. Moving to a custom domain later means deleting one line from
`.github/workflows/pages.yml` — no link in the app changes.

The trap with base paths is that a hardcoded `/math` works perfectly on
localhost, where the base is empty, and only 404s once deployed. So
`npm run links:check` fails on any link that skips the base, and it runs in the
deploy workflow before the build. `npm run preview:pages` serves the build the
way Pages does — under `/gradeone/`, extensionless URLs mapped to `.html`,
404.html for the rest — because `vite preview` serves from the root and cannot
catch the mistake.

Locally, build with `MSYS_NO_PATHCONV=1 BASE_PATH=/gradeone`. Git Bash rewrites
a bare `/gradeone` into `C:/Program Files/Git/gradeone` before Node sees it; the
validation in `vite.config.ts` is what caught that. CI runs on Linux and is
unaffected.

## The app is laid out like an Apple app, not a website

The first visual pass applied Apple's surface rules (type, colour, depth) to an
ordinary web layout — top bar, card grids — and still read as a website. The
redesign changed the structure:

- **An app shell.** A floating glass sidebar on desktop; a floating glass tab
  bar on phones. Routes are split into `(app)` and `(marketing)` groups, which
  are folders only — no URL changed.
- **Today, after Apple Fitness.** Three rings — Learn one lesson, Review ten
  cards, Practice five questions — derived from the XP event log, which
  already syncs, so every device agrees without a new table. Goals are small
  on purpose: a ring you can close on a school night is a habit.
- **A colour per module**, carried through rings, heroes and tiles (see
  `$lib/modules`). Ring colours are Activity's, which are tuned for black —
  so the rings card is always dark, like the Fitness widget.
- **Flashcards are a gesture-driven stack.** `$lib/spring` implements Apple's
  spring parameterisation (response + damping ratio), velocity handoff,
  momentum projection and rubber-banding. `npm run test:motion` tests the
  physics and the swipe rules on a fake clock, because a browser test is
  unreliable here: a background tab throttles animation frames and springs
  stall mid-flight.

## Bugs the redesign surfaced

- **Evening streaks broke.** Days were UTC; the Caribbean is 4-5 hours behind,
  so studying after 8pm counted as tomorrow. Days are now the student's local
  days (`localDay` in `$lib/progress`).
- **A broken streak still displayed.** The stored count is only reset on the
  next activity; `liveStreak` checks it is actually alive.
- **Drag, pause, release graded the card.** The velocity tracker used samples
  from before the pause. A finger that has stopped now has zero velocity.
