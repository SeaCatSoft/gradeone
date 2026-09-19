---
subject: MATH
topic: statistics-1
lesson: frequency-tables
title: Frequency Tables
objectives: ["1.2"]
est_minutes: 14
status: draft
source: Original prose written against Module 2 syllabus objective 1.2 ("construct a frequency table for a given set of data"). Covers ungrouped and grouped tables with tallies. NOT YET checked against textbook for depth.
---

## Lesson

A list of raw numbers is hard to read. A **frequency table** organises it,
showing how often (how **frequently**) each value occurs.

### Ungrouped data

Twenty students were asked how many books they read last month:

$$2,\ 0,\ 3,\ 1,\ 2,\ 4,\ 2,\ 1,\ 0,\ 3,\ 2,\ 5,\ 1,\ 2,\ 3,\ 2,\ 1,\ 0,\ 2,\ 4$$

Go through the list **once**, making a tally mark in a Tally column beside the
value each time it appears. Draw every fifth mark as a line through the
previous four, so the tallies fall into easy-to-count gates of five. Then count
each row's tallies to get its frequency:

| Books | Frequency |
|---|---|
| 0 | 3 |
| 1 | 4 |
| 2 | 7 |
| 3 | 3 |
| 4 | 2 |
| 5 | 1 |
| **Total** | **20** |

(For 2 books, the tally is one gate of five plus two more marks: 7.)

**Check:** the frequencies must add up to the number of data values — here, 20.
If they don't, a value was missed or counted twice.

### Grouped data

When the data has many different values — especially continuous data —
put it into **classes** (groups).

Masses of 30 parcels, in kg, might be grouped like this:

| Mass, $m$ (kg) | Frequency |
|---|---|
| $0 \leq m < 2$ | 6 |
| $2 \leq m < 4$ | 11 |
| $4 \leq m < 6$ | 9 |
| $6 \leq m < 8$ | 4 |

Rules for classes:

- They must **not overlap**. Writing "0–2, 2–4" leaves 2 kg with two homes.
  Inequalities like $2 \leq m < 4$ settle it: 2 kg goes in the second class.
- They should **cover** every value.
- Equal widths make the table easier to compare. 5–8 classes is usually about
  right.

Grouping loses detail — you no longer know the exact values — but it makes the
**shape** of the data much clearer.

### Cumulative frequency

A **cumulative frequency** column is a running total. It shows how many values
are **up to** each point:

| Books | Frequency | Cumulative frequency |
|---|---|---|
| 0 | 3 | 3 |
| 1 | 4 | 7 |
| 2 | 7 | 14 |
| 3 | 3 | 17 |
| 4 | 2 | 19 |
| 5 | 1 | 20 |

The last entry always equals the total. It's useful for finding the median and
for questions like "how many read 2 books or fewer?" (14).

## Flashcards

### 1.2 | What does a frequency table show?
How many times each value (or class of values) occurs.

### 1.2 | How do you check a frequency table is complete?
The frequencies must add up to the total number of data values.

### 1.2 | Why are classes like "10–20, 20–30" a problem?
They overlap: a value of 20 fits in both. Use inequalities such as
$10 \leq x < 20$.

### 1.2 | What is cumulative frequency?
A running total of the frequencies.

### 1.2 | What is lost when data is grouped?
The exact individual values.

## Questions

### 1.2 | numeric | 1 mark | difficulty 1
The scores 3, 5, 3, 4, 3, 5, 2, 3, 4 are recorded in a frequency table. What is
the frequency of the score 3?

**Answer:** 4

**Working:** 3 appears four times.

### 1.2 | numeric | 1 mark | difficulty 2
A frequency table has frequencies 5, 8, $x$, 6 and 3. There are 30 values
altogether. Find $x$.

**Answer:** 8

**Working:** $5 + 8 + x + 6 + 3 = 30$, so $22 + x = 30$ and $x = 8$.

### 1.2 | mcq | 1 mark | difficulty 2
A student records heights in the classes $140 \leq h < 150$,
$150 \leq h < 160$ and $160 \leq h < 170$. In which class does a height of
exactly 150 cm belong?

- A. $140 \leq h < 150$
- B. $150 \leq h < 160$
- C. Both
- D. Neither

**Answer:** B

**Working:** $150 \leq h$ includes 150; $h < 150$ excludes it.

### 1.2 | structured | 4 marks | difficulty 2
The number of people in each of 16 cars passing a school was:

$$1,\ 2,\ 1,\ 4,\ 3,\ 1,\ 2,\ 2,\ 5,\ 1,\ 3,\ 2,\ 1,\ 4,\ 2,\ 1$$

(a) Construct a frequency table for the data. **(2 marks)**

(b) Add a cumulative frequency column. **(1 mark)**

(c) How many cars had 2 or fewer people? **(1 mark)**

**Answer:** (a) 1: 6, 2: 5, 3: 2, 4: 2, 5: 1 (b) 6, 11, 13, 15, 16 (c) 11

**Working:** (a) The frequencies total $6 + 5 + 2 + 2 + 1 = 16$. ✓

(c) Read the cumulative frequency at 2: 11.
