-- 004_progress.sql — what the student has actually done.
--
-- REVISED before first run. The original version keyed progress on foreign
-- keys into the content tables (objectives.id, flashcards.id). That was wrong
-- for the architecture that actually got built: content lives in markdown and
-- prerenders to static HTML, and the database holds only student data. Keying
-- on content ids would force content into the database purely to have ids to
-- point at, and would break every student's progress on a re-import.
--
-- Progress therefore keys on a STABLE TEXT PATH, e.g. 'math/sets/3.1'. See
-- src/lib/keys.ts. Two things make that safe:
--
--   * The path includes the topic. Objective codes restart at 1.1 in every
--     topic, so a bare '3.1' names Sets, Relations Functions and Graphs 1 AND
--     Geometry and Trigonometry 2 — three different topics whose progress
--     would silently merge.
--   * "Never renumber an objective" is already a hard rule in
--     docs/authoring.md, precisely because the code is the join key.
--
-- Nothing validates these paths, by design: the database must not need to know
-- the syllabus. The cost is that a typo in a key writes an orphan row rather
-- than failing, so the keys are built by one module and never by hand.

create table if not exists objective_mastery (
  user_id       uuid not null references auth.users(id) on delete cascade,
  objective_key text not null,                    -- 'math/sets/3.1'
  -- 0-100. Rolling, weighted toward recent attempts so an old bad run fades.
  mastery       numeric not null default 0 check (mastery between 0 and 100),
  attempts      int not null default 0,
  correct       int not null default 0,
  last_seen_at  timestamptz,
  primary key (user_id, objective_key)
);

-- SM-2 spaced repetition. One row per card per student.
create table if not exists flashcard_reviews (
  user_id       uuid not null references auth.users(id) on delete cascade,
  card_key      text not null,                    -- 'math/sets/what-is-a-set/c0'
  ease          numeric not null default 2.5,     -- SM-2 easiness factor
  interval_days int not null default 0,
  reps          int not null default 0,
  lapses        int not null default 0,
  due_at        timestamptz not null default now(),
  last_grade    int check (last_grade between 0 and 5),
  primary key (user_id, card_key)
);

create index if not exists flashcard_due_idx
  on flashcard_reviews(user_id, due_at);

create table if not exists question_attempts (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  question_key text not null,                     -- 'math/sets/what-is-a-set/q0'
  given        text,
  correct      boolean not null,
  seconds      int,
  session_id   bigint,
  attempted_at timestamptz not null default now()
);

create index if not exists attempts_user_idx
  on question_attempts(user_id, attempted_at desc);

create type exam_scope as enum ('topic', 'module', 'full');

create table if not exists exam_sessions (
  id              bigint generated always as identity primary key,
  user_id         uuid not null references auth.users(id) on delete cascade,
  subject_code    text not null,                  -- 'MATH'
  scope           exam_scope not null,
  scope_ref       text,                           -- topic slug, or module number
  -- Questions are drawn to match the syllabus assessment grid, so a 'full'
  -- paper is 60 items split 20/20/20 across modules in topic proportion.
  seconds_allowed int,
  started_at      timestamptz not null default now(),
  submitted_at    timestamptz,
  score           int,
  total           int
);

create table if not exists exam_items (
  session_id   bigint not null references exam_sessions(id) on delete cascade,
  position     int not null,
  question_key text not null,
  given        text,
  correct      boolean,
  primary key (session_id, position)
);

alter table question_attempts
  add constraint question_attempts_session_fk
  foreign key (session_id) references exam_sessions(id) on delete set null;
