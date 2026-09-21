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
backend/migrations/008_seed_it_structure.sql
backend/migrations/009_roles_and_classes.sql
```

Then run `backend/migrations/check_all.sql` and read what it says. **Trust the
audit over your memory of what you ran** — on Roost, migration 005 was skipped
once because it was mentioned in the same breath as 006, and it quietly broke
start-cycle for days.

007 ends in a self-test. If the assessment grid does not total 60 questions
split 20/20/20, it raises rather than seeding something wrong.

## 3a. Make yourself an admin

Migration 009 adds three roles — **student**, **teacher**, **admin** — and every
new account starts as a student. Roles are changed from inside the app, at
Classes → People, but that page is for admins only, so the first admin cannot be
made there. That is deliberate: `set_user_role()` refuses to run unless an admin
is already calling it, which means nobody can promote themselves.

So the first one is made by hand. **Sign up in the app first** — there is no
profile to promote until the account exists — then run
`backend/migrations/grant_admin.sql` in the SQL editor, with your own email in
place of the placeholder.

It prints every teacher and admin afterwards. If your account is not in that
list, the email did not match; check the address you actually signed up with.

Everybody else is promoted from the app from then on.

### What each role may do

| | Student | Teacher | Admin |
|---|---|---|---|
| Study, track own progress | Yes | Yes | Yes |
| Join a class with a code | Yes | Yes | Yes |
| Create classes, set work | — | Yes | Yes |
| See a student's progress | — | Own classes only | Everyone |
| Change roles | — | — | Yes |
| Author content | — | — | Yes |

A teacher sees a student's progress **only** through `class_members`. There is
no policy granting a teacher blanket access to student data, and none should be
added — a teacher who does not teach you can see nothing about you.

### What this does not do

Lesson pages are prerendered static HTML on a static host, so they stay readable
by anyone with the URL whether or not they are registered for that subject.
Registration decides what the app *offers* — which subjects appear in the
sidebar, which classes and work a student sees. What it genuinely protects is
every piece of **student data**, and that is enforced by RLS in Postgres, which
the browser cannot talk its way past.

If lesson content itself ever has to be restricted, that needs a server or the
lesson bodies moved into the database behind RLS. It is not a policy change.

## 4. Tell Supabase where the site lives

Authentication → URL Configuration. Confirmation emails and password-reset
links will only ever send people to an address on this list — leave one off
and those links break silently on the day it matters.

**Site URL:** `http://localhost:5175` while testing locally. Switch it to
`https://seacatsoft.github.io/gradeone/` once the site is deployed and people
are signing up there.

**Redirect URLs** — add all three now, so nothing needs revisiting later:

```
http://localhost:5175/**
http://localhost:5176/gradeone/**
https://seacatsoft.github.io/gradeone/**
```

(5176 is `npm run preview:pages`, the local copy of how Pages serves the site.)
When the custom domain arrives, add it here too.

### Email confirmation (optional while testing)

Authentication → Providers → Email. With "Confirm email" on, signing up sends a
link and the app shows a "check your email" screen — the right setting for real
students. While you are testing it is faster to turn it off so signup logs you
straight in.

## 5. Try it

```bash
npm run dev
```

Study a few flashcards while signed out, then create an account. The progress
you just made should follow you in — that path is `syncOnSignIn` in
`src/lib/sync.ts`, and it is the bit most worth checking.

## 6. Give the deploy the keys

The site is built by GitHub Actions, which has no `.env`. In the repository:
Settings → Secrets and variables → Actions → **Variables** tab (not Secrets):

```
PUBLIC_SUPABASE_URL       https://xxxxxxxxxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY  eyJhbGci...
```

Variables rather than secrets because the anon key is designed to be public —
it ends up in every visitor's browser regardless, and RLS is what protects the
data. **Never put the service role key here.** Until these are set, the
deployed site still builds and works, just signed-out.

Variables are read at build time, so after adding them, re-run the deploy:
Actions → Deploy to GitHub Pages → Run workflow.

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
