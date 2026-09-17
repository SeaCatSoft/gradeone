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
