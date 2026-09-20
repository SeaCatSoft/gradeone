-- 008_seed_it_structure.sql
-- The CSEC Information Technology syllabus tree, from CXC 30/G/SYLL 17
-- (effective for examinations from May-June 2020).
--
-- IT is printed as EIGHT SECTIONS, not modules. The three modules here are the
-- Paper 01 groups, which are also the three profile dimensions the certificate
-- reports, and the sections become the topics:
--
--   Module 1  Theory                           Sections 1-3   35 MCQs, 35 P2 marks
--   Module 2  Productivity Tools               Sections 4-6   15 MCQs, 30 P2 marks
--   Module 3  Problem-Solving and Programming  Sections 7-8   10 MCQs, 25 P2 marks
--
-- topic.number is the SECTION number, so "Section 5" in the syllabus is the
-- topic numbered 5 here.
--
-- mcq_count is an ESTIMATE. CXC publishes Paper 01's split per group, not per
-- section, so the group total is shared out in proportion to the number of
-- objectives (see backend/tools/gen_it_structure.py). The group totals are
-- exact; the per-topic split is not. Practice papers sample by these
-- weightings, so correct them if a finer breakdown is published.
--
-- p2_marks are likewise per profile, not per section, so they are recorded on
-- the group rather than the topic.

insert into subjects (code, name, syllabus_code, effective_from)
values ('IT', 'Information Technology', 'CXC 30/G/SYLL 17', 'May-June 2020')
on conflict (code) do nothing;

with s as (select id from subjects where code = 'IT')
insert into modules (subject_id, number, title, credit_weighting, min_hours)
select s.id, m.number, m.title, 1, null from s, (values
  (1, 'Theory'),
  (2, 'Productivity Tools'),
  (3, 'Problem-Solving and Programming')
) as m(number, title)
on conflict (subject_id, number) do nothing;

-- Module 1 (Theory) -- 35 MCQs, 35 Paper 02 marks across the profile.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'IT' and mo.number = 1
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (1, 'Computer Fundamentals and Information Processing', 'computer-fundamentals', 21, null::int, 'Theory (35 marks)'),
  (2, 'Computer Networks and Web Technologies',           'networks-web',           6, null,      'Theory (35 marks)'),
  (3, 'Social and Economic Impact of ICT',                'ict-impact',             8, null,      'Theory (35 marks)')
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;

-- Module 2 (Productivity Tools) -- 15 MCQs, 30 Paper 02 marks, 35 SBA marks.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'IT' and mo.number = 2
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (4, 'Word-Processing and Web Page Design', 'word-processing-web', 7, null::int, 'Productivity Tools (30 marks)'),
  (5, 'Spreadsheets',                        'spreadsheets',        6, null,      'Productivity Tools (30 marks)'),
  (6, 'Database Management',                 'database-management', 2, null,      'Productivity Tools (30 marks)')
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;

-- Module 3 (Problem-Solving and Programming) -- 10 MCQs, 25 Paper 02 marks.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'IT' and mo.number = 3
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (7, 'Problem-Solving and Program Design', 'problem-solving-design',  5, null::int, 'Problem-Solving and Programming (25 marks)'),
  (8, 'Program Implementation',             'program-implementation',  5, null,      'Problem-Solving and Programming (25 marks)')
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;
