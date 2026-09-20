---
subject: MATH
topic: statistics-2
lesson: grouped-frequency-tables
title: Grouped Frequency Tables
objectives: ["1.1", "1.2"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objectives 1.1 (construct a frequency table for a given set of data; still flagged for review) and 1.2 (determine class features for a given set of data). The extracted text is interleaved with content notes from the next column mentioning grouped data, modal class, median class and estimating the mean; those are covered here and in later lessons. NOT YET checked against textbook for depth.
---

## Lesson

Module 2 covered ungrouped data. With many different values — especially
continuous data like heights or times — the data is put into **classes**.

### Class features

For the class $20 \leq x < 30$:

| Feature | Meaning | Value |
|---|---|---|
| **Class limits** | the values as written | 20 and 30 |
| **Class boundaries** | where one class really ends and the next begins | 20 and 30 |
| **Class width** | upper boundary minus lower boundary | 10 |
| **Class midpoint** | halfway across the class | $\frac{20 + 30}{2} = 25$ |

With **discrete** data written as $20\text{–}29$, $30\text{–}39$, there's a gap
between the limits. The **boundaries** close it at the halfway point: 19.5 and
29.5. So that class has width $29.5 - 19.5 = 10$ and midpoint
$\frac{19.5 + 29.5}{2} = 24.5$.

Boundaries matter because measurements are rounded: a mass recorded as 29 kg,
to the nearest kg, is really anywhere from 28.5 to 29.5 kg.

### Building a grouped table

> Times, in seconds, for 20 students: 32, 41, 38, 45, 51, 36, 44, 47, 39, 55,
> 42, 48, 37, 53, 46, 40, 49, 35, 43, 50.

Choose classes that cover the range (32 to 55) without overlapping — five
classes of width 5 work well:

| Time, $t$ (s) | Frequency | Midpoint |
|---|---|---|
| $30 \leq t < 35$ | 1 | 32.5 |
| $35 \leq t < 40$ | 4 | 37.5 |
| $40 \leq t < 45$ | 5 | 42.5 |
| $45 \leq t < 50$ | 5 | 47.5 |
| $50 \leq t < 55$ | 3 | 52.5 |
| $55 \leq t < 60$ | 2 | 57.5 |
| **Total** | **20** | |

Check the frequencies total 20. ✓

### The modal class and the median class

- The **modal class** is the class with the **highest frequency**. Here two
  classes tie on 5, so there are two modal classes.
- The **median class** is the class containing the middle value. With 20
  values, the median is between the 10th and 11th, both of which fall in
  $40 \leq t < 45$.

You can't give an exact mode or median from grouped data — the individual
values are gone. That's why the answers are **classes**, and why the mean can
only be **estimated** (next lesson).

### Contingency tables

A **contingency table** (two-way table) classifies data by two features at
once:

| | Passed | Failed | Total |
|---|---|---|---|
| **Boys** | 18 | 6 | 24 |
| **Girls** | 21 | 5 | 26 |
| **Total** | 39 | 11 | 50 |

Every row and column adds to its total, and the grand total appears twice over.
Filling gaps is a matter of subtraction — and such tables are the basis for
probability questions later.

## Flashcards

### 1.2 | What is the class midpoint of $10 \leq x < 20$?
15 — halfway between the boundaries.

### 1.2 | What are the class boundaries of the discrete class 20–29?
19.5 and 29.5.

### 1.2 | How do you find class width?
Upper boundary minus lower boundary.

### 1.1 | What is the modal class?
The class with the highest frequency.

### 1.1 | Why can't you state the exact median of grouped data?
The individual values are lost in grouping, so you can only give the class
containing it.

### 1.1 | What is a contingency table?
A two-way table classifying data by two features at once, with row and column
totals.

## Questions

### 1.2 | numeric | 1 mark | difficulty 1
What is the midpoint of the class $45 \leq x < 55$?

**Answer:** 50

**Working:** $\frac{45 + 55}{2} = 50$.

### 1.2 | mcq | 1 mark | difficulty 2
Masses are recorded to the nearest kg in classes 10–14, 15–19, 20–24. What are
the class boundaries of the class 15–19?

- A. 15 and 19
- B. 14.5 and 19.5
- C. 15.5 and 19.5
- D. 14 and 20

**Answer:** B

**Working:** Each boundary sits halfway between the limits of neighbouring
classes: $\frac{14 + 15}{2} = 14.5$ and $\frac{19 + 20}{2} = 19.5$.

### 1.1 | mcq | 1 mark | difficulty 2
In a grouped table, the frequencies are 3, 7, 12, 9 and 4 for classes in order.
Which class contains the median?

- A. The second
- B. The third
- C. The fourth
- D. The fifth

**Answer:** B

**Working:** There are 35 values, so the median is the 18th. The cumulative
frequencies are 3, 10, 22, …, so the 18th value is in the third class.

### 1.1 | structured | 5 marks | difficulty 3
The table shows the heights of 40 plants.

| Height, $h$ (cm) | $0 \leq h < 10$ | $10 \leq h < 20$ | $20 \leq h < 30$ | $30 \leq h < 40$ |
|---|---|---|---|---|
| Frequency | 6 | 14 | 13 | 7 |

(a) State the class width. **(1 mark)**

(b) State the modal class. **(1 mark)**

(c) State the class containing the median. **(2 marks)**

(d) State the midpoint of the third class. **(1 mark)**

**Answer:** (a) 10 cm (b) $10 \leq h < 20$ (c) $10 \leq h < 20$ (d) 25 cm

**Working:** (c) With 40 values, the median lies between the 20th and 21st.
Cumulative frequencies are 6, 20, 33, 40, so the 20th is the last value of the
second class and the 21st is in the third; by convention the median class is
taken as the one containing the middle position, $\frac{40}{2} = 20$th value:
$10 \leq h < 20$ (2 marks; accept a clearly reasoned $20 \leq h < 30$).
