-- 009_roles_and_classes.sql — roles, classes, and teacher-set work.
--
-- 006_rls.sql said: "No teacher role exists yet -- do not add one by loosening
-- a policy here; it needs its own join table." This is that join table.
--
-- The model:
--
--   profiles.role      student | teacher | admin
--   classes            one teacher, one subject, a join code
--   class_members      which students are in it  <- THE join table
--   assignments        work a teacher sets to a class
--   teacher_questions  questions a teacher wrote themselves
--
-- A teacher may read a student's progress ONLY through class_members. There is
-- no policy anywhere granting a teacher blanket access to student data, and
-- none should be added: a teacher who is not teaching you can see nothing about
-- you, which is the point of doing it this way.
--
-- Existing per-user policies are left untouched. Postgres OR-combines multiple
-- permissive policies, so the teacher-read policies below WIDEN access without
-- weakening "a student can always see their own data".
--
-- Safe to run twice. Every policy is dropped before it is created and every
-- table guarded, because the realistic failure is a paste into the SQL editor
-- that dies half way and has to be run again.

-- ------------------------------------------------------------------- roles

do $$ begin
  create type user_role as enum ('student', 'teacher', 'admin');
exception when duplicate_object then null;
end $$;

alter table profiles add column if not exists role user_role not null default 'student';

comment on column profiles.role is
  'student: their own work only. teacher: may set work for their classes and '
  'read those students'' progress. admin: everything, including authoring. '
  'Changed only by an admin through set_user_role(); a user cannot change '
  'their own -- see the with-check on profiles_update_own.';

-- Carry over whoever was already an admin, then retire the boolean so there is
-- one source of truth rather than two that can disagree.
do $$ begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'profiles' and column_name = 'is_admin'
  ) then
    update profiles set role = 'admin' where is_admin and role <> 'admin';
    drop policy if exists profiles_update_own on profiles;
    alter table profiles drop column is_admin;
  end if;
end $$;

-- ----------------------------------------------------------------- classes

create table if not exists classes (
  id         bigint generated always as identity primary key,
  subject_id bigint not null references subjects(id) on delete cascade,
  owner_id   uuid   not null references auth.users(id) on delete cascade,
  name       text   not null,                    -- '4A Information Technology'
  -- Typed in by students to join. Unique, and deliberately short: it gets read
  -- off a whiteboard. Ambiguous characters (O/0, I/1) are excluded by
  -- new_join_code() so it survives being read aloud.
  join_code  text   not null unique,
  archived   boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists classes_owner_idx on classes(owner_id) where not archived;

create table if not exists class_members (
  class_id  bigint not null references classes(id) on delete cascade,
  user_id   uuid   not null references auth.users(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, user_id)
);

create index if not exists class_members_user_idx on class_members(user_id);

create or replace function new_join_code()
returns text language plpgsql volatile as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';  -- no O/0, I/1
  code text;
begin
  loop
    code := '';
    for _ in 1..6 loop
      code := code || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    end loop;
    exit when not exists (select 1 from classes c where c.join_code = code);
  end loop;
  return code;
end;
$$;

-- --------------------------------------------------- teacher-set coursework

do $$ begin
  create type assignment_kind as enum ('practice', 'test');
exception when duplicate_object then null;
end $$;

/**
 * A question a teacher wrote themselves.
 *
 * Lessons, flashcards and the question bank live in markdown and prerender to
 * static HTML -- see 004_progress.sql. Teachers do not edit those. What they
 * CAN do is add their own questions, and those have to live somewhere the app
 * can read at runtime, which means here.
 */
create table if not exists teacher_questions (
  id            bigint generated always as identity primary key,
  author_id     uuid not null references auth.users(id) on delete cascade,
  subject_id    bigint references subjects(id) on delete set null,
  -- 'it/spreadsheets/5.3', so a teacher's question counts toward the same
  -- objective as the markdown ones. Not validated here, for the reason given
  -- in 004: the database must not need to know the syllabus.
  objective_key text,
  kind          text not null check (kind in ('mcq', 'numeric', 'structured')),
  stem_md       text not null,
  options       jsonb,                           -- [{key:'A', text:'...'}, ...]
  answer        text not null,
  working_md    text,
  marks         int not null default 1 check (marks > 0),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists teacher_questions_author_idx on teacher_questions(author_id);

create table if not exists assignments (
  id           bigint generated always as identity primary key,
  class_id     bigint not null references classes(id) on delete cascade,
  created_by   uuid   not null references auth.users(id) on delete cascade,
  title        text   not null,
  instructions text,
  kind         assignment_kind not null default 'practice',
  due_at       timestamptz,
  -- A draft is invisible to students. Setting a test is a two-stage act on
  -- purpose: a half-built test appearing on thirty dashboards is not
  -- recoverable by editing it afterwards.
  published    boolean not null default false,
  created_at   timestamptz not null default now()
);

create index if not exists assignments_class_idx on assignments(class_id, published);

create table if not exists assignment_items (
  assignment_id       bigint not null references assignments(id) on delete cascade,
  position            int    not null,
  -- Exactly one of these two. A question from the markdown bank is referenced
  -- by its stable text key; a teacher's own question by its row id.
  question_key        text,
  teacher_question_id bigint references teacher_questions(id) on delete cascade,
  marks               int not null default 1 check (marks > 0),
  primary key (assignment_id, position),
  constraint assignment_item_source check (num_nonnulls(question_key, teacher_question_id) = 1)
);

create table if not exists assignment_submissions (
  assignment_id bigint not null references assignments(id) on delete cascade,
  user_id       uuid   not null references auth.users(id) on delete cascade,
  started_at    timestamptz not null default now(),
  submitted_at  timestamptz,
  score         int,
  total         int,
  primary key (assignment_id, user_id)
);

create table if not exists assignment_answers (
  assignment_id bigint not null references assignments(id) on delete cascade,
  user_id       uuid   not null references auth.users(id) on delete cascade,
  position      int    not null,
  given         text,
  correct       boolean,
  marks_awarded int,
  answered_at   timestamptz not null default now(),
  primary key (assignment_id, user_id, position)
);
-- --------------------------------------------------------------- functions
--
-- All SECURITY DEFINER, and all of them read tables that carry RLS policies
-- which call them. Without SECURITY DEFINER the policy on class_members would
-- call a function that selects from class_members, and Postgres would recurse.

create or replace function current_role_of()
returns user_role language sql security definer set search_path = public stable as $$
  select coalesce((select p.role from profiles p where p.id = auth.uid()), 'student'::user_role);
$$;

create or replace function is_admin()
returns boolean language sql security definer set search_path = public stable as $$
  select current_role_of() = 'admin';
$$;

-- An admin is a teacher for every purpose below, so policies say is_teacher()
-- and never have to spell out "or admin".
create or replace function is_teacher()
returns boolean language sql security definer set search_path = public stable as $$
  select current_role_of() in ('teacher', 'admin');
$$;

/** True if the caller owns this class, or is an admin. */
create or replace function teaches_class(cid bigint)
returns boolean language sql security definer set search_path = public stable as $$
  select is_admin()
      or exists (select 1 from classes c where c.id = cid and c.owner_id = auth.uid());
$$;

/** True if the caller is a student in this class. */
create or replace function in_class(cid bigint)
returns boolean language sql security definer set search_path = public stable as $$
  select exists (
    select 1 from class_members m where m.class_id = cid and m.user_id = auth.uid()
  );
$$;

/**
 * True if the caller teaches a class this student belongs to.
 *
 * This single function is what every teacher-read policy hangs off, so the rule
 * "a teacher sees only their own students" is stated once and cannot drift
 * between tables.
 */
create or replace function teaches_student(student uuid)
returns boolean language sql security definer set search_path = public stable as $$
  select is_admin()
      or exists (
           select 1
           from class_members m
           join classes c on c.id = m.class_id
           where m.user_id = student and c.owner_id = auth.uid()
         );
$$;


-- --------------------------------------------------------------------- RLS

/**
 * True if one of the caller's published assignments uses this question.
 *
 * SECURITY DEFINER, like every other helper here, so the policy on
 * teacher_questions does not have to walk assignment_items and assignments
 * through *their* policies to answer a question about itself.
 */
create or replace function question_is_assigned_to_me(qid bigint)
returns boolean language sql security definer set search_path = public stable as $$
  select exists (
    select 1
    from assignment_items ai
    join assignments a on a.id = ai.assignment_id
    join class_members m on m.class_id = a.class_id
    where ai.teacher_question_id = qid
      and a.published
      and m.user_id = auth.uid()
  );
$$;

alter table classes                enable row level security;
alter table class_members          enable row level security;
alter table teacher_questions      enable row level security;
alter table assignments            enable row level security;
alter table assignment_items       enable row level security;
alter table assignment_submissions enable row level security;
alter table assignment_answers     enable row level security;

-- Classes: the teacher who owns it, and the students in it. Nobody else --
-- which is why joining goes through join_class() rather than a select on
-- join_code, so the codes cannot be enumerated.
--
-- The insert check demands is_teacher() as well as ownership. Without it any
-- signed-in student could insert a row naming themselves as owner and become
-- the teacher of a class they invented.
drop policy if exists classes_teacher on classes;
create policy classes_teacher on classes for all to authenticated
  using (teaches_class(id))
  with check ((owner_id = auth.uid() and is_teacher()) or is_admin());
drop policy if exists classes_member_read on classes;
create policy classes_member_read on classes for select to authenticated
  using (in_class(id));

-- MEMBERSHIP IS OPT-IN, AND ONLY THE STUDENT MAY OPT IN.
--
-- A teacher can read the roster and remove somebody from it, and that is all.
-- There is deliberately no teacher INSERT: being in a class is what grants a
-- teacher sight of your progress, so a teacher who could add arbitrary user ids
-- to their own class could read any student's data without that student ever
-- agreeing. The only way in is join_class(), called by the student, holding a
-- code somebody gave them.
drop policy if exists class_members_teacher_read on class_members;
create policy class_members_teacher_read on class_members for select to authenticated
  using (teaches_class(class_id));
drop policy if exists class_members_teacher_remove on class_members;
create policy class_members_teacher_remove on class_members for delete to authenticated
  using (teaches_class(class_id));
drop policy if exists class_members_own on class_members;
create policy class_members_own on class_members for select to authenticated
  using (user_id = auth.uid());
drop policy if exists class_members_leave on class_members;
create policy class_members_leave on class_members for delete to authenticated
  using (user_id = auth.uid());

drop policy if exists teacher_questions_own on teacher_questions;
create policy teacher_questions_own on teacher_questions for all to authenticated
  using (author_id = auth.uid() or is_admin())
  with check ((author_id = auth.uid() and is_teacher()) or is_admin());
-- A student sees a teacher's question only through an assignment they have
-- been set, and never its answer column -- see the note on questions in 006.
drop policy if exists teacher_questions_assigned_read on teacher_questions;
create policy teacher_questions_assigned_read on teacher_questions for select to authenticated
  using (question_is_assigned_to_me(id));

drop policy if exists assignments_teacher on assignments;
create policy assignments_teacher on assignments for all to authenticated
  using (teaches_class(class_id)) with check (teaches_class(class_id));
drop policy if exists assignments_student_read on assignments;
create policy assignments_student_read on assignments for select to authenticated
  using (published and in_class(class_id));

drop policy if exists assignment_items_teacher on assignment_items;
create policy assignment_items_teacher on assignment_items for all to authenticated
  using (exists (select 1 from assignments a where a.id = assignment_id and teaches_class(a.class_id)))
  with check (exists (select 1 from assignments a where a.id = assignment_id and teaches_class(a.class_id)));
drop policy if exists assignment_items_student_read on assignment_items;
create policy assignment_items_student_read on assignment_items for select to authenticated
  using (exists (
    select 1 from assignments a
    where a.id = assignment_id and a.published and in_class(a.class_id)
  ));

drop policy if exists submissions_own on assignment_submissions;
create policy submissions_own on assignment_submissions for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists submissions_teacher_read on assignment_submissions;
create policy submissions_teacher_read on assignment_submissions for select to authenticated
  using (teaches_student(user_id));

drop policy if exists answers_own on assignment_answers;
create policy answers_own on assignment_answers for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists answers_teacher_read on assignment_answers;
create policy answers_teacher_read on assignment_answers for select to authenticated
  using (teaches_student(user_id));

-- ------------------------------------------- teacher read on student progress
--
-- SELECT only, and every one of them goes through teaches_student(). A teacher
-- can see what their students have done; they cannot alter it.

drop policy if exists profiles_teacher_read on profiles;
create policy profiles_teacher_read on profiles           for select to authenticated using (teaches_student(id));
create policy mastery_teacher_read  on objective_mastery  for select to authenticated using (teaches_student(user_id));
create policy reviews_teacher_read  on flashcard_reviews  for select to authenticated using (teaches_student(user_id));
drop policy if exists attempts_teacher_read on question_attempts;
create policy attempts_teacher_read on question_attempts  for select to authenticated using (teaches_student(user_id));
drop policy if exists sessions_teacher_read on exam_sessions;
create policy sessions_teacher_read on exam_sessions      for select to authenticated using (teaches_student(user_id));
create policy streaks_teacher_read  on streaks            for select to authenticated using (teaches_student(user_id));
create policy xp_teacher_read       on xp_events          for select to authenticated using (teaches_student(user_id));
create policy enroll_teacher_read   on enrollments        for select to authenticated using (teaches_student(user_id));

-- Re-create the policy dropped above, now pinning `role` instead of is_admin.
-- A student may edit their name, school and sitting; they may not promote
-- themselves.
--
-- The comparison goes through current_role_of() rather than a subquery on
-- profiles, for the reason 006 gave about is_admin(): a policy on profiles that
-- selects from profiles recurses.
drop policy if exists profiles_update_own on profiles;
create policy profiles_update_own on profiles for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid() and role = current_role_of());

-- ---------------------------------------------------------------------- RPCs

/**
 * Join a class by its code. SECURITY DEFINER so the student never needs read
 * access to `classes` -- they supply a code and get a membership or an error,
 * which means join codes cannot be discovered by querying.
 */
create or replace function join_class(code text)
returns bigint language plpgsql security definer set search_path = public as $$
declare
  target classes%rowtype;
begin
  if auth.uid() is null then
    raise exception 'Not signed in';
  end if;

  select * into target from classes c
   where upper(c.join_code) = upper(trim(code)) and not c.archived;

  if not found then
    raise exception 'No class has that code';
  end if;

  if target.owner_id = auth.uid() then
    raise exception 'You teach this class';
  end if;

  insert into class_members (class_id, user_id)
  values (target.id, auth.uid())
  on conflict do nothing;

  -- Joining a class enrols the student in its subject, so the app's subject
  -- list and the class list cannot disagree.
  insert into enrollments (user_id, subject_id)
  values (auth.uid(), target.subject_id)
  on conflict do nothing;

  return target.id;
end;
$$;

/**
 * Change a user's role. Admins only.
 *
 * This is the only supported route, and it refuses to let an admin strip their
 * own admin rights -- locking yourself out of the one account that can grant
 * the role back means editing the database by hand to recover.
 */
create or replace function set_user_role(target uuid, new_role user_role)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not is_admin() then
    raise exception 'Only an admin may change roles';
  end if;
  if target = auth.uid() and new_role <> 'admin' then
    raise exception 'You cannot remove your own admin rights';
  end if;
  update profiles set role = new_role where id = target;
  if not found then
    raise exception 'No such user';
  end if;
end;
$$;

/** Create a class and return it, allocating a join code. Teachers and admins. */
create or replace function create_class(subject bigint, class_name text)
returns classes language plpgsql security definer set search_path = public as $$
declare
  created classes%rowtype;
begin
  if not is_teacher() then
    raise exception 'Only a teacher may create a class';
  end if;
  insert into classes (subject_id, owner_id, name, join_code)
  values (subject, auth.uid(), trim(class_name), new_join_code())
  returning * into created;
  return created;
end;
$$;

grant execute on function join_class(text)               to authenticated;
grant execute on function set_user_role(uuid, user_role) to authenticated;
grant execute on function create_class(bigint, text)     to authenticated;
