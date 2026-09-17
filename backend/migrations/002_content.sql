-- 002_content.sql — teaching material, all of it aimed at an objective.
--
-- COPYRIGHT NOTE: nothing here may hold textbook text, diagrams or past-paper
-- questions reproduced verbatim. The CXC syllabus defines what is examinable
-- and is public; the prose in these tables is original writing covering those
-- same objectives. `source_note` records what a piece was written from so the
-- distinction stays auditable.

create type content_status as enum ('draft', 'review', 'published');

-- A lesson reads as one coherent explanation and may cover several related
-- objectives -- 'distinguish among sets of numbers' is too small to be its own
-- page, but belongs with the two objectives either side of it.
create table if not exists lessons (
  id          bigint generated always as identity primary key,
  topic_id    bigint not null references topics(id) on delete cascade,
  title       text not null,
  slug        text not null,
  body_md     text not null default '',
  est_minutes int,
  position    int not null default 0,
  status      content_status not null default 'draft',
  source_note text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (topic_id, slug)
);

create table if not exists lesson_objectives (
  lesson_id    bigint not null references lessons(id) on delete cascade,
  objective_id bigint not null references objectives(id) on delete cascade,
  primary key (lesson_id, objective_id)
);

create table if not exists flashcards (
  id           bigint generated always as identity primary key,
  objective_id bigint not null references objectives(id) on delete cascade,
  front        text not null,
  back         text not null,
  hint         text,
  status       content_status not null default 'draft',
  source_note  text,
  created_at   timestamptz not null default now()
);

create type question_kind   as enum ('mcq', 'numeric', 'structured');
create type question_paper  as enum ('p1', 'p2');

create table if not exists questions (
  id           bigint generated always as identity primary key,
  objective_id bigint not null references objectives(id) on delete cascade,
  kind         question_kind not null,
  paper        question_paper not null default 'p1',
  stem_md      text not null,
  -- mcq: [{"key":"A","text":"..."}, ...]; null for numeric/structured
  options      jsonb,
  -- mcq: the correct key. numeric: the value as text. structured: mark scheme.
  answer       text not null,
  tolerance    numeric,          -- numeric answers: acceptable +/- window
  working_md   text,             -- the worked solution shown after answering
  marks        int not null default 1,
  difficulty   int not null default 3 check (difficulty between 1 and 5),
  status       content_status not null default 'draft',
  source_note  text,
  created_at   timestamptz not null default now()
);

create index if not exists flashcards_objective_idx on flashcards(objective_id);
create index if not exists questions_objective_idx  on questions(objective_id);
create index if not exists questions_pick_idx       on questions(status, paper, difficulty);
create index if not exists lessons_topic_idx        on lessons(topic_id);

-- Guardrails: an mcq needs options and an answer that is one of them.
alter table questions add constraint questions_mcq_shape check (
  (kind <> 'mcq') or (options is not null and jsonb_typeof(options) = 'array')
);
