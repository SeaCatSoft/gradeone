# Connecting Supabase

Accounts are built and work, but they need a Supabase project to talk to.
Until one exists the app runs fully signed-out: everything studies and saves,
just in one browser, and the sign-in pages say so honestly.

This is the only step in the project that has to be done by hand.

## 1. Create the project

At [supabase.com](https://supabase.com), create a new project. The free tier is
enough. Choose a region near the Caribbean — **East US (North Virginia)** is the
closest — because every millisecond here is a millisecond a student on a phone
waits.

## 2. Put the keys in `.env`

Project Settings → API gives you two values.

```
PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
```

Copy the same two into `SUPABASE_URL` and — separately — the **service role**
key into `SUPABASE_SERVICE_ROLE_KEY`. That one bypasses RLS entirely. It is used
only by the local import scripts, never by the app, and `.env` is gitignored.

Restart `npm run dev` after editing `.env`: these are build-time variables, so a
running dev server will not pick them up.

## 3. Run the migrations, in order

SQL Editor → New query. Paste and run each file in turn:

```
backend/migrations/001_syllabus.sql
backend/migrations/002_content.sql
backend/migrations/003_accounts.sql
backend/migrations/004_progress.sql
backend/migrations/005_gamification.sql
backend/migrations/006_rls.sql
backend/migrations/007_seed_math_structure.sql
```

Then run `backend/migrations/check_all.sql` and read what it says. **Trust the
audit over your memory of what you ran** — on Roost, migration 005 was skipped
once because it was mentioned in the same breath as 006, and it quietly broke
start-cycle for days.

007 ends in a self-test. If the assessment grid does not total 60 questions
split 20/20/20, it raises rather than seeding something wrong.

## 4. Turn off email confirmation while testing (optional)

Authentication → Providers → Email. With "Confirm email" on, signing up sends a
link and the app shows a "check your email" screen. That is the right setting
for real students. While you are testing it is faster to turn it off so signup
logs you straight in.

If you leave it on, set Authentication → URL Configuration → Site URL to
`http://localhost:5175` for now, or the confirmation link will point at the
wrong host.

## 5. Try it

```bash
npm run dev
```

Study a few flashcards while signed out, then create an account. The progress
you just made should follow you in — that path is `syncOnSignIn` in
`src/lib/sync.ts`, and it is the bit most worth checking.

## What is NOT needed yet

You do **not** have to import the content. Lessons, flashcards and questions
live in markdown and prerender to static HTML; the database holds only student
data. `npm run content:import` exists for later, when server-side exam
generation needs content queryable — it is not on the critical path now.

## How progress is keyed

Progress points at content by a text path — `math/sets/3.1`, not a database id.
Two reasons:

1. Content is not in the database, and forcing it there just to have ids to
   point at would be the tail wagging the dog.
2. Objective codes restart at 1.1 in every topic, so a bare `3.1` names Sets,
   Relations Functions and Graphs 1 **and** Geometry and Trigonometry 2. The
   path includes the topic, so those stay separate.

This is why "never renumber an objective" is a hard rule in
[authoring.md](authoring.md). The code is the join key for every student's
mastery.
