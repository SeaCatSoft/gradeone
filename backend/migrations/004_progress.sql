-- 004_progress.sql — what the student has actually done.
--
-- Mastery is per objective, because the objective is the spine. Topic and
-- module progress bars are averages over this table, never stored separately:
-- one number, one place to be wrong.

create table if not exists objective_mastery (
  user_id      uuid not null references auth.users(id) on delete cascade,
  objective_id bigint not null references objectives(id) on delete cascade,
  -- 0-100. Rolling, weighted toward recent attempts so an old bad run fades.
  mastery      numeric not null default 0 check (mastery between 0 and 100),
  attempts     int not null default 0,
  correct      int not null default 0,
  last_seen_at timestamptz,
  primary key (user_id, objective_id)
);

-- SM-2 spaced repetition. One row per card per student.
create table if not exists flashcard_reviews (
  user_id       uuid not null references auth.users(id) on delete cascade,
  flashcard_id  bigint not null references flashcards(id) on delete cascade,
  ease          numeric not null default 2.5,   -- SM-2 easiness factor
  interval_days int not null default 0,
  reps          int not null default 0,
  lapses        int not null default 0,
  due_at        timestamptz not null default now(),
  last_grade    int check (last_grade between 0 and 5),
  primary key (user_id, flashcard_id)
);

create index if not exists flashcard_due_idx
  on flashcard_reviews(user_id, due_at);

create table if not exists question_attempts (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  question_id  bigint not null references questions(id) on delete cascade,
  given        text,
  correct      boolean not null,
  seconds      int,
  -- null for loose practice; set when the attempt was inside a mock exam.
  session_id   bigint,
  attempted_at timestamptz not null default now()
);

create index if not exists attempts_user_idx
  on question_attempts(user_id, attempted_at desc);

create type exam_scope as enum ('topic', 'module', 'full');

create table if not exists exam_sessions (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  subject_id   bigint not null references subjects(id) on delete cascade,
  scope        exam_scope not null,
  scope_ref    bigint,          -- topic_id or module_id; null for a full paper
  -- Questions are drawn to match the syllabus assessment grid, so a 'full'
  -- paper is 60 items split 20/20/20 across modules in topic proportion.
  seconds_allowed int,
  started_at   timestamptz not null default now(),
  submitted_at timestamptz,
  score        int,
  total        int
);

create table if not exists exam_items (
  session_id  bigint not null references exam_sessions(id) on delete cascade,
  position    int not null,
  question_id bigint not null references questions(id) on delete cascade,
  given       text,
  correct     boolean,
  primary key (session_id, position)
);

alter table question_attempts
  add constraint question_attempts_session_fk
  foreign key (session_id) references exam_sessions(id) on delete set null;
