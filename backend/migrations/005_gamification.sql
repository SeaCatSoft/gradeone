-- 005_gamification.sql — the game layer.
--
-- Deliberately thin: XP and badges are *derived from* real work recorded in
-- 004. Nothing here can be earned without answering something. The syllabus
-- already gamifies itself -- three modules, each a stackable credential --
-- so the app's job is to make that visible, not to invent a parallel economy.

create table if not exists xp_events (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references auth.users(id) on delete cascade,
  amount     int not null,
  reason     text not null,     -- 'question_correct', 'lesson_done', 'streak_day'
  ref_table  text,
  ref_id     bigint,
  created_at timestamptz not null default now()
);

create index if not exists xp_user_idx on xp_events(user_id, created_at desc);

create table if not exists streaks (
  user_id          uuid primary key references auth.users(id) on delete cascade,
  current_days     int not null default 0,
  longest_days     int not null default 0,
  last_active_date date
);

create table if not exists badges (
  id          bigint generated always as identity primary key,
  code        text not null unique,
  name        text not null,
  description text not null,
  icon        text,
  -- Human-readable rule; evaluation lives in app code, not here, so the
  -- criteria can change without a migration.
  criteria    text not null
);

create table if not exists user_badges (
  user_id    uuid not null references auth.users(id) on delete cascade,
  badge_id   bigint not null references badges(id) on delete cascade,
  awarded_at timestamptz not null default now(),
  primary key (user_id, badge_id)
);

-- Total XP without scanning the whole event log on every dashboard load.
--
-- security_invoker is load-bearing. By default a Postgres view runs with its
-- CREATOR's privileges -- here, the admin role -- so it would skip the RLS on
-- xp_events and hand every student's user_id and XP total to anyone holding
-- the public key. With security_invoker the view runs as whoever queries it,
-- so the xp_read policy applies and a student sees only their own row.
create or replace view v_user_xp
  with (security_invoker = true) as
  select user_id, coalesce(sum(amount), 0)::bigint as total_xp
  from xp_events group by user_id;
