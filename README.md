# Grade One

A CSEC study platform — lessons, flashcards and practice exams built strictly
against the CXC syllabus, with per-student progress tracking.

Subjects: **Mathematics** (in progress), then Information Technology and
Electronic Document Preparation and Management (EDPM).

## The one idea this is built on

Everything points at a **specific objective**. A lesson teaches objective 1.1,
a flashcard drills it, a practice question tests it, and a student's mastery
score is stored against it. "Give me a practice exam on Statistics" and "what
should this student revise next?" then become queries rather than features.

Build order follows from that: **syllabus spine → content → game layer.**

## Syllabus currency — read this before writing content

CXC amended the Mathematics syllabus in **October 2025**, effective for
examinations from **May–June 2027**. It reorganised Maths from nine flat
sections into **three modules**, each separately sittable and each worth one
stackable credit (CTEC micro-credential).

Most CSEC material online still teaches the old nine-section shape. Content
here follows the module structure in `backend/migrations/007_seed_math_structure.sql`.
`subjects.syllabus_code` records which revision a tree encodes so the two can
never be silently mixed.

## Content and copyright

Textbooks are an **authoring reference only**. Owning a copy does not permit a
public platform to serve its text, diagrams or worked examples. The CXC
syllabus is the public document defining what is examinable; all prose here is
original writing covering those objectives. Every content row has a
`source_note` so that distinction stays auditable.

## Stack

- **SvelteKit** — server-rendered, so lesson pages can rank in search.
- **Supabase** — Postgres, auth, and row-level security.
- **KaTeX** — maths rendering.
- Hosts free on Cloudflare Pages or Vercel.

## Setup

```bash
npm install
cp .env.example .env   # fill from Supabase → Project Settings → API
npm run dev
```

Then run `backend/migrations/001` … `007` **in order** in the Supabase SQL
editor, and `backend/migrations/check_all.sql` afterwards to confirm what
actually landed. Trust the audit over your memory of what you ran.
