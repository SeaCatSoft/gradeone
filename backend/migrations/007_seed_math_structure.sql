-- 007_seed_math_structure.sql
-- The CSEC Mathematics syllabus tree, straight from CXC 05/G/SYLL 16
-- (amended October 2025, effective for examinations from May-June 2027).
--
-- The 2025 amendment reorganised Mathematics from nine flat sections into
-- THREE MODULES, each separately sittable and each worth one stackable
-- credit. Most study material online still teaches the old nine-section
-- shape. Content written here must follow the module structure below.
--
-- mcq_count and p2_marks are the real assessment-grid weightings, so a mock
-- paper generated from this tree has the same shape as the real one.

insert into subjects (code, name, syllabus_code, effective_from)
values ('MATH', 'Mathematics', 'CXC 05/G/SYLL 16', 'May-June 2027')
on conflict (code) do nothing;

with s as (select id from subjects where code = 'MATH')
insert into modules (subject_id, number, title, credit_weighting, min_hours)
select s.id, m.number, m.title, 1, 65 from s, (values
  (1, 'Fundamentals of Secondary Level Mathematics'),
  (2, 'Intermediate Secondary Level Mathematics'),
  (3, 'Higher Concepts in Secondary Level Mathematics')
) as m(number, title)
on conflict (subject_id, number) do nothing;

-- Module 1 -- 20 MCQs; Paper 02 marks are grouped, plus a 9-mark investigation.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'MATH' and mo.number = 1
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (1, 'Number Theory and Computation', 'number-theory-computation', 4, null::int, 'CA + NTC (9 marks)'),
  (2, 'Consumer Arithmetic',           'consumer-arithmetic',       4, null,      'CA + NTC (9 marks)'),
  (3, 'Sets',                          'sets',                      3, null,      'Graphs, Sets, Measurement, Algebra 1 (12 marks)'),
  (4, 'Measurement',                   'measurement',               4, null,      'Graphs, Sets, Measurement, Algebra 1 (12 marks)'),
  (5, 'Algebra 1',                     'algebra-1',                 3, null,      'Graphs, Sets, Measurement, Algebra 1 (12 marks)'),
  (6, 'Introduction to Graphs',        'introduction-to-graphs',    2, null,      'Graphs, Sets, Measurement, Algebra 1 (12 marks)')
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;

-- Module 2 -- 20 MCQs, 30 Paper 02 marks.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'MATH' and mo.number = 2
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (1, 'Statistics 1',                    'statistics-1',                4, 6::int,   null::text),
  (2, 'Algebra 2',                       'algebra-2',                   4, null,     'Algebra 2 + RFG 1 (12 marks)'),
  (3, 'Relations, Functions and Graphs 1','relations-functions-graphs-1',4, null,     'Algebra 2 + RFG 1 (12 marks)'),
  (4, 'Geometry and Trigonometry 1',     'geometry-trigonometry-1',     4, 9,        null),
  (5, 'Vectors and Matrices 1',          'vectors-matrices-1',          4, 3,        null)
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;

-- Module 3 -- 20 MCQs, 30 Paper 02 marks, all stated per topic.
with m as (
  select mo.id from modules mo
  join subjects s on s.id = mo.subject_id
  where s.code = 'MATH' and mo.number = 3
)
insert into topics (module_id, number, title, slug, mcq_count, p2_marks, p2_group)
select m.id, t.* from m, (values
  (1, 'Statistics 2',                     'statistics-2',                 4, 6::int, null::text),
  (2, 'Relations, Functions and Graphs 2','relations-functions-graphs-2', 6, 6,      null),
  (3, 'Geometry and Trigonometry 2',      'geometry-trigonometry-2',      6, 9,      null),
  (4, 'Vectors and Matrices 2',           'vectors-matrices-2',           4, 9,      null)
) as t(number, title, slug, mcq_count, p2_marks, p2_group)
on conflict (module_id, number) do nothing;

-- Self-test, in the spirit of Roost's seed: the tree must reproduce the
-- published assessment grid exactly. 60 MCQs, 20 per module.
do $$
declare total int; m1 int; m2 int; m3 int;
begin
  select sum(t.mcq_count) into total
    from topics t join modules mo on mo.id = t.module_id
    join subjects s on s.id = mo.subject_id where s.code = 'MATH';
  select sum(t.mcq_count) into m1 from topics t join modules mo on mo.id = t.module_id
    join subjects s on s.id = mo.subject_id where s.code='MATH' and mo.number=1;
  select sum(t.mcq_count) into m2 from topics t join modules mo on mo.id = t.module_id
    join subjects s on s.id = mo.subject_id where s.code='MATH' and mo.number=2;
  select sum(t.mcq_count) into m3 from topics t join modules mo on mo.id = t.module_id
    join subjects s on s.id = mo.subject_id where s.code='MATH' and mo.number=3;
  if total <> 60 or m1 <> 20 or m2 <> 20 or m3 <> 20 then
    raise exception 'Assessment grid mismatch: total=% m1=% m2=% m3=% (expected 60/20/20/20)',
      total, m1, m2, m3;
  end if;
  raise notice 'Assessment grid OK: 60 MCQs, 20 per module.';
end $$;
