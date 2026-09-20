---
subject: MATH
topic: statistics-2
lesson: cumulative-frequency
title: Cumulative Frequency Curves
objectives: ["1.7", "1.9"]
est_minutes: 18
status: draft
source: Original prose written against Module 3 syllabus objectives 1.7 (draw a cumulative frequency curve, or ogive) and 1.9 (determine the proportion or percentage above or below a given value from grouped data, a frequency table or a cumulative frequency curve). NOT YET checked against textbook for depth.
---

## Lesson

A **cumulative frequency curve** (an **ogive**) shows how many values fall
**below** each point. It turns a grouped table into a graph you can read
estimates from.

### Building the table

Add a running total column. Crucially, each cumulative total belongs to the
**upper class boundary**, because it counts everything **up to** there.

| Mark | $f$ | Mark less than | Cumulative frequency |
|---|---|---|---|
| $0 \leq m < 20$ | 4 | 20 | 4 |
| $20 \leq m < 40$ | 11 | 40 | 15 |
| $40 \leq m < 60$ | 18 | 60 | 33 |
| $60 \leq m < 80$ | 12 | 80 | 45 |
| $80 \leq m < 100$ | 5 | 100 | 50 |

### Drawing the curve

1. Plot cumulative frequency (vertical) against the **upper class boundary**
   (horizontal).
2. Start at the lower boundary of the first class with a cumulative frequency
   of **0** — here, $(0, 0)$.
3. Join the points with a **smooth curve** (an S-shape).

Plotting against midpoints, or against the lower boundaries, is the usual
error. Everything is counted at the **top** of its class.

### Reading estimates

| Statistic | Read across from |
|---|---|
| Median | $\frac{1}{2}n$ |
| Lower quartile | $\frac{1}{4}n$ |
| Upper quartile | $\frac{3}{4}n$ |

For the table above, $n = 50$: read across at 25 for the median, 12.5 for
$Q_1$ and 37.5 for $Q_3$, then down to the mark axis.

(For a cumulative frequency curve these fractions are used directly — there's
no "+1", because the curve is treated as continuous.)

### Proportion above or below a value

- **Below a value:** read **up** from the value to the curve, then across to the
  cumulative frequency.
- **Above a value:** subtract that reading from the total.

> How many of the 50 students scored more than 70 marks?

Read up from 70: about 39 students scored below 70. So $50 - 39 = 11$ scored
more, which is $\frac{11}{50} \times 100\% = 22\%$.

Always check the direction: a cumulative curve answers "how many **below**", so
"how many above" always needs the subtraction.

### Percentiles

The same reading works at any position. The **60th percentile** is the value
below which 60% of the data falls: read across at $0.6 \times n$.

## Flashcards

### 1.7 | What do you plot on a cumulative frequency curve?
Cumulative frequency against the **upper class boundary**.

### 1.7 | Where does a cumulative frequency curve start?
At the lower boundary of the first class, with a cumulative frequency of 0.

### 1.7 | How do you estimate the median from an ogive of $n$ values?
Read across at $\frac{1}{2}n$ and down to the value axis.

### 1.9 | How do you find how many values are **above** a given value?
Read the cumulative frequency below it, then subtract from the total.

### 1.9 | What is the 25th percentile also called?
The **lower quartile**.

## Questions

### 1.7 | mcq | 1 mark | difficulty 1
On a cumulative frequency curve for 60 values, at which cumulative frequency do
you read the upper quartile?

- A. 15
- B. 30
- C. 45
- D. 60

**Answer:** C

**Working:** $\frac{3}{4} \times 60 = 45$.

### 1.9 | numeric | 1 mark | difficulty 2
A cumulative frequency curve for 200 people shows that 130 weigh less than
70 kg. How many weigh 70 kg or more?

**Answer:** 70

**Working:** $200 - 130 = 70$.

### 1.9 | numeric | 1 mark | difficulty 2
From the same curve, what percentage of the 200 people weigh less than 70 kg?

**Answer:** 65

**Working:** $\frac{130}{200} \times 100\% = 65\%$.

### 1.7 | mcq | 1 mark | difficulty 2
Which point is plotted for the class $20 \leq x < 30$ with a cumulative
frequency of 18?

- A. $(20, 18)$
- B. $(25, 18)$
- C. $(30, 18)$
- D. $(18, 30)$

**Answer:** C

**Working:** Cumulative frequency is plotted at the **upper** boundary, 30.

### 1.7 | structured | 6 marks | difficulty 3
The table shows the times, in minutes, taken by 80 students to travel to
school.

| Time, $t$ | $0 \leq t < 10$ | $10 \leq t < 20$ | $20 \leq t < 30$ | $30 \leq t < 40$ | $40 \leq t < 50$ |
|---|---|---|---|---|---|
| Frequency | 8 | 22 | 28 | 15 | 7 |

(a) Complete a cumulative frequency table. **(2 marks)**

(b) State the points you would plot for the curve. **(2 marks)**

(c) Explain how you would use the curve to estimate the number of students
taking more than 35 minutes. **(2 marks)**

**Answer:** (a) 8, 30, 58, 73, 80 (b) $(0,0)$, $(10,8)$, $(20,30)$, $(30,58)$,
$(40,73)$, $(50,80)$ (c) Read up from 35 to the curve and across to the
cumulative frequency (about 66), then subtract from 80, giving about 14
students.

**Working:** (b) 1 mark for using upper boundaries, 1 for including $(0, 0)$.

(c) 1 mark for reading below 35, 1 for subtracting from the total.
