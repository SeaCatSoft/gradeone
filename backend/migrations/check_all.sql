-- check_all.sql — run this in the Supabase SQL editor to see which migrations
-- are ACTUALLY applied, rather than which ones you remember running.
--
-- This file exists because on Roost a migration was silently skipped (mentioned
-- in the same breath as the next one, never run) and quietly broke a feature
-- for days. Add one row here every time a migration ships. No exceptions.

with expected(n, name, probe_kind, probe) as (values
  (1, '001_syllabus',            'table', 'objectives'),
  (2, '002_content',             'table', 'questions'),
  (3, '003_accounts',            'table', 'profiles'),
  (4, '004_progress',            'table', 'objective_mastery'),
  (5, '005_gamification',        'table', 'xp_events'),
  (6, '006_rls',                 'func',  'is_admin'),
  (7, '007_seed_math_structure', 'rows',  'topics'),
  -- 008 adds no table of its own, so it is probed by the subject it seeds.
  (8, '008_seed_it_structure',   'subj',  'IT'),
  (9, '009_roles_and_classes',   'table', 'class_members')
)
select
  e.n,
  e.name,
  case
    when e.probe_kind = 'table' then
      (select count(*) > 0 from information_schema.tables
        where table_schema = 'public' and table_name = e.probe)
    when e.probe_kind = 'func' then
      (select count(*) > 0 from pg_proc p
        join pg_namespace ns on ns.oid = p.pronamespace
        where ns.nspname = 'public' and p.proname = e.probe)
    when e.probe_kind = 'rows' then
      (select count(*) > 0 from topics)
    when e.probe_kind = 'subj' then
      (select count(*) > 0 from subjects s
        join modules mo on mo.subject_id = s.id
        join topics t on t.module_id = mo.id
        where s.code = e.probe)
  end as applied
from expected e
order by e.n;

-- Second check: does the seeded tree still match the published grid?
select
  mo.number                     as module,
  count(*)                      as topics,
  sum(t.mcq_count)              as mcqs,
  coalesce(sum(t.p2_marks), 0)  as p2_marks_stated_per_topic
from topics t
join modules mo  on mo.id = t.module_id
join subjects s  on s.id  = mo.subject_id
where s.code = 'MATH'
group by mo.number
order by mo.number;
-- Expect: 3 rows, mcqs = 20 each. p2 per-topic sums are 0 / 18 / 30 because
-- Module 1 states none per topic and Module 2 groups two of its five.
