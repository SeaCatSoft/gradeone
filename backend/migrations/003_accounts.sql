-- 003_accounts.sql — who the student is, and what they are sitting.

create table if not exists profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text not null,
  school        text,
  -- 'May-June 2027'. Drives the countdown and the study plan's pacing.
  exam_sitting  text,
  is_admin      boolean not null default false,
  created_at    timestamptz not null default now()
);

comment on column profiles.is_admin is
  'Authoring rights. Checked by RLS on every content table write. Set by hand '
  'in the dashboard -- there is deliberately no in-app way to grant it.';

-- A student takes some subjects, not all of them.
create table if not exists enrollments (
  user_id      uuid not null references auth.users(id) on delete cascade,
  subject_id   bigint not null references subjects(id) on delete cascade,
  -- CSEC grades run I (best) to VI. Most students are aiming at I or II.
  target_grade int check (target_grade between 1 and 6),
  started_at   timestamptz not null default now(),
  primary key (user_id, subject_id)
);

-- New signups get a profile automatically; display_name comes from the
-- signup form via raw_user_meta_data, the same trick Roost uses for farm_name.
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, exam_sitting)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data->>'display_name', ''), 'Student'),
    nullif(new.raw_user_meta_data->>'exam_sitting', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
