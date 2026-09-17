-- 001_syllabus.sql — the syllabus spine.
-- Everything in Grade One hangs off an objective id: lessons, flashcards,
-- questions and a student's mastery all point here. Public read, admin write.

create table if not exists subjects (
  id            bigint generated always as identity primary key,
  code          text not null unique,           -- 'MATH', 'IT', 'EDPM'
  name          text not null,
  syllabus_code text not null,                  -- 'CXC 05/G/SYLL 16'
  effective_from text not null,                 -- 'May-June 2027'
  active        boolean not null default true,
  created_at    timestamptz not null default now()
);

comment on column subjects.syllabus_code is
  'Which CXC syllabus revision this tree encodes. Maths was amended Oct 2025; '
  'content written against an older revision must not be mixed in.';

create table if not exists modules (
  id               bigint generated always as identity primary key,
  subject_id       bigint not null references subjects(id) on delete cascade,
  number           int not null,                -- 1, 2, 3
  title            text not null,
  credit_weighting numeric not null default 1,
  min_hours        int,
  unique (subject_id, number)
);

comment on table modules is
  'CSEC Maths (2027) is three modules, each independently sittable and each '
  'worth one credit as a stackable CTEC micro-credential.';

create table if not exists topics (
  id           bigint generated always as identity primary key,
  module_id    bigint not null references modules(id) on delete cascade,
  number       int not null,
  title        text not null,
  slug         text not null,
  mcq_count    int,        -- Paper 01 questions drawn from this topic
  p2_marks     int,        -- Paper 02 marks, where the syllabus states them per topic
  -- Module 1's Paper 02 marks are published for GROUPS of topics, not singly
  -- ('Graphs, Sets, Measurement and Algebra 1 -- 12 marks'). Topics sharing a
  -- group carry the same label here and p2_marks stays null. Do not split a
  -- group's marks evenly and pretend they are per-topic figures.
  p2_group     text,
  unique (module_id, number),
  unique (module_id, slug)
);

comment on column topics.mcq_count is
  'Straight from the syllabus assessment grid. Practice exams sample in these '
  'proportions so a mock paper has the real shape, not an even spread.';

create table if not exists objectives (
  id            bigint generated always as identity primary key,
  topic_id      bigint not null references topics(id) on delete cascade,
  code          text not null,        -- '1.1', '1.2' as printed in the syllabus
  statement     text not null,        -- 'distinguish among sets of numbers'
  -- Set where the syllabus text was machine-extracted and still needs a human
  -- to check it against the printed page. Nothing flagged is shown publicly.
  needs_review  boolean not null default false,
  content_notes text,                 -- the syllabus CONTENT/EXPLANATORY NOTES column
  position      int not null,
  unique (topic_id, code)
);

create index if not exists objectives_topic_idx on objectives(topic_id);
create index if not exists topics_module_idx    on topics(module_id);
create index if not exists modules_subject_idx  on modules(subject_id);
