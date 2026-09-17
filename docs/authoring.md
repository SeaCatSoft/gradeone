# Authoring content

Everything students see is written as markdown in `content/`, reviewed by hand
against the textbooks, and imported in bulk. No admin screen, no database
editing. If it isn't in a markdown file, it isn't real.

## The loop

1. **I draft** a lesson file against the syllabus objectives.
2. **You review** it offline with the textbook open — fix the maths, adjust the
   depth, rewrite anything that reads wrong.
3. **Validate** — `npm run content:check` — which reports every problem with a
   file and line number.
4. **Import** — `npm run content:import` — which writes to Supabase and stamps
   ids back into the markdown so the next import updates rather than duplicates.

Steps 3 and 4 are the only commands you need.

```bash
npm run content:check
```

## Two kinds of file

### Objective files — the syllabus spine

`content/math/objectives/m1-sets.md` and its fourteen siblings. These hold the
159 specific objectives, extracted from the syllabus PDF.

**40 of them are marked `[?]`** because the PDF extraction lost characters —
mathematical notation is set in symbol fonts that don't survive text
extraction, so `1.2 compute powers of real numbers of the form , where` is
missing its `a^n` and `n ∈ ℤ`. A few over-captured instead and picked up stray
text from the next column.

To review one: check it against the printed syllabus, correct the text, delete
the `[?]`. Write maths as LaTeX between dollar signs — `$a^n$`,
`$n \in \mathbb{Z}$`.

**Never renumber an objective.** The codes are how every lesson, flashcard,
question and mastery record finds its objective. Changing `3.4` to `3.5`
silently reassigns student progress.

A flagged objective still imports — it just stays hidden from students until
the marker is gone.

```bash
npm run objectives:import -- --dry
```

### Lesson files — the content

One file per lesson, covering a few related objectives. See
`content/math/m1-sets/01-what-is-a-set.md` for a complete worked example.

````markdown
---
subject: MATH
topic: sets
lesson: what-is-a-set
title: What Is a Set?
objectives: ["3.1", "3.2"]
est_minutes: 12
status: draft
source: Original prose. Depth checked against textbook pp. 14-19.
---

## Lesson

Ordinary markdown. Maths in `$...$` inline or `$$...$$` on its own line.

## Flashcards

### 3.1 | What makes a collection a set?

It must be well defined — you can always tell whether something is a member.

> Hint: why is "the set of tall students" not a set?

## Questions

### 3.1 | mcq | 1 mark | difficulty 2

Which of the following is **not** a well-defined set?

- A. The set of prime numbers less than 20
- B. The set of interesting books in the library

**Answer:** B

**Working:** A set must be well defined...
````

**The rules, in full:**

- `objectives` must be **quoted**. Unquoted, YAML reads `3.10` as the number
  `3.1` and two different objectives silently collide. The validator catches
  this, but it's the one trap worth knowing.
- Every objective in one file shares a topic. A lesson belongs to one topic.
- A flashcard heading is `### <code> | <front text>`. The body is the back. A
  `>` blockquote line becomes the hint.
- A question heading is `### <code> | <kind> | <n> marks | difficulty <1-5>`.
  Kinds are `mcq`, `numeric`, `structured`.
- MCQ options are written `- A. text`. The `**Answer:**` must be one of the
  option letters.
- `**Working:**` is what the student sees after answering. Skipping it is a
  warning, not an error, but a question without it teaches nothing when wrong.
- `status: draft` keeps a file invisible to students. Change to `published`
  when you're happy with it.

## What the validator checks

Errors block the import. Warnings don't.

| Errors | Warnings |
|---|---|
| Missing or malformed frontmatter | Lesson body still a stub |
| Unquoted objective codes | No `**Working:**` on a question |
| Objectives spanning two topics | An objective taught but never drilled |
| A heading without an objective code | A flashcard over 600 characters |
| A flashcard with no back | Lettered options on a non-MCQ question |
| Unknown question kind, or difficulty outside 1–5 | `[?]` markers still present |
| An MCQ answer that isn't one of its options | |
| A non-numeric answer on a `numeric` question | |
| A duplicate lesson slug within a topic | |

`npm run content:test` runs the parser against a fixture holding one of every
mistake, so the checks can't quietly stop working.

## How the import protects your work

- **Nothing imports if anything fails validation.** A half-imported topic is
  worse than an unimported one, because you can't see what landed.
- **Ids are written back into the markdown.** First import assigns a row an id
  and adds `id: 42` to frontmatter or `<!-- id:42 -->` to a heading. Later
  imports update that row, so rewording a card doesn't reset the spaced-
  repetition schedules of students already reviewing it.
- **Deletion is opt-in.** A card removed from a file leaves its database row
  alone and is only reported. Pass `--prune` to actually delete. A typo that
  empties a section must not destroy content mid-use.
- `--dry` shows what would change and touches nothing.

## Copyright

Textbooks are a **reference for depth and standard**, not a source of text.
Don't paste textbook prose, diagrams, or past-paper questions into these files.
Write original material covering the same objectives, and record what you
checked it against in `source:` so the distinction stays auditable.
