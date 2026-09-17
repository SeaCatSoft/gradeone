-- 006_rls.sql — row level security.
--
-- Three rules, and everything follows from them:
--   1. The syllabus tree is public. Anyone, logged in or not, can browse it.
--   2. Content is public once published; drafts are admin-only.
--   3. A student's progress is theirs alone. No teacher role exists yet -- do
--      not add one by loosening a policy here; it needs its own join table.

-- is_admin() is SECURITY DEFINER because a policy on `profiles` that reads
-- `profiles` recurses. Same reason Roost needs a function to read farm_people.
create or replace function is_admin()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select coalesce((select p.is_admin from profiles p where p.id = auth.uid()), false);
$$;

-- ---------------------------------------------------------------- syllabus
alter table subjects   enable row level security;
alter table modules    enable row level security;
alter table topics     enable row level security;
alter table objectives enable row level security;

create policy syllabus_read_subjects   on subjects   for select to anon, authenticated using (true);
create policy syllabus_read_modules    on modules    for select to anon, authenticated using (true);
create policy syllabus_read_topics     on topics     for select to anon, authenticated using (true);
create policy syllabus_read_objectives on objectives for select to anon, authenticated using (true);

create policy syllabus_write_subjects   on subjects   for all to authenticated using (is_admin()) with check (is_admin());
create policy syllabus_write_modules    on modules    for all to authenticated using (is_admin()) with check (is_admin());
create policy syllabus_write_topics     on topics     for all to authenticated using (is_admin()) with check (is_admin());
create policy syllabus_write_objectives on objectives for all to authenticated using (is_admin()) with check (is_admin());

-- ----------------------------------------------------------------- content
alter table lessons           enable row level security;
alter table lesson_objectives enable row level security;
alter table flashcards        enable row level security;
alter table questions         enable row level security;

create policy lessons_read    on lessons    for select to anon, authenticated using (status = 'published' or is_admin());
create policy flashcards_read on flashcards for select to anon, authenticated using (status = 'published' or is_admin());
create policy lesson_obj_read on lesson_objectives for select to anon, authenticated using (true);

-- Questions hide their answer column from the client by never being selected
-- directly in the quiz path -- marking happens in an RPC. This policy governs
-- authoring and review screens only.
create policy questions_read  on questions  for select to anon, authenticated using (status = 'published' or is_admin());

create policy lessons_write    on lessons           for all to authenticated using (is_admin()) with check (is_admin());
create policy lesson_obj_write on lesson_objectives for all to authenticated using (is_admin()) with check (is_admin());
create policy flashcards_write on flashcards        for all to authenticated using (is_admin()) with check (is_admin());
create policy questions_write  on questions         for all to authenticated using (is_admin()) with check (is_admin());

-- ------------------------------------------------------- accounts/progress
alter table profiles          enable row level security;
alter table enrollments       enable row level security;
alter table objective_mastery enable row level security;
alter table flashcard_reviews enable row level security;
alter table question_attempts enable row level security;
alter table exam_sessions     enable row level security;
alter table exam_items        enable row level security;
alter table xp_events         enable row level security;
alter table streaks           enable row level security;
alter table user_badges       enable row level security;
alter table badges            enable row level security;

create policy profiles_own on profiles for select to authenticated using (id = auth.uid() or is_admin());
-- A student may edit their name/school/sitting but must not grant themselves
-- authoring rights, so is_admin is pinned to its current value on update.
create policy profiles_update_own on profiles for update to authenticated
  using (id = auth.uid())
  with check (id = auth.uid() and is_admin = (select p.is_admin from profiles p where p.id = auth.uid()));

create policy enrollments_own on enrollments       for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy mastery_own     on objective_mastery for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy reviews_own     on flashcard_reviews for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy attempts_own    on question_attempts for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy sessions_own    on exam_sessions     for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy streaks_own     on streaks           for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy userbadges_own  on user_badges       for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- exam_items has no user_id of its own; it inherits ownership via its session.
create policy exam_items_own on exam_items for all to authenticated
  using (exists (select 1 from exam_sessions s where s.id = session_id and s.user_id = auth.uid()))
  with check (exists (select 1 from exam_sessions s where s.id = session_id and s.user_id = auth.uid()));

-- XP is insert-and-read only. Nothing in the app may edit or delete an event:
-- the log is the audit trail for every number shown on the dashboard.
create policy xp_read   on xp_events for select to authenticated using (user_id = auth.uid());
create policy xp_insert on xp_events for insert to authenticated with check (user_id = auth.uid());

create policy badges_read  on badges for select to anon, authenticated using (true);
create policy badges_write on badges for all to authenticated using (is_admin()) with check (is_admin());
