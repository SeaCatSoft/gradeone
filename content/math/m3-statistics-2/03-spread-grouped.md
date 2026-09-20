---
subject: MATH
topic: statistics-2
lesson: spread-grouped
title: Measures of Spread for Grouped Data
objectives: ["1.5", "1.6"]
est_minutes: 15
status: draft
source: Original prose written against Module 3 syllabus objectives 1.5 (determine the measures of dispersion for grouped data) and 1.6 (use standard deviation to compare sets of data). The content notes state that no calculation of the standard deviation is required, so it is interpreted rather than computed. NOT YET checked against textbook for depth.
---

## Lesson

### Estimating the range

With grouped data the largest and smallest values are unknown, so the range is
**estimated** from the outer class boundaries:

$$\text{estimated range} = \text{upper boundary of the last class} - \text{lower boundary of the first class}$$

For classes running from $0 \leq x < 10$ up to $40 \leq x < 50$, the estimated
range is $50 - 0 = 50$.

### Quartiles from grouped data

Exact quartiles need the individual values, so grouped quartiles are
**estimated**, normally by reading a cumulative frequency curve (next lesson):

| Statistic | Read at |
|---|---|
| Lower quartile $Q_1$ | $\frac{1}{4}n$ |
| Median $Q_2$ | $\frac{1}{2}n$ |
| Upper quartile $Q_3$ | $\frac{3}{4}n$ |

Then, as with ungrouped data:

$$\text{IQR} = Q_3 - Q_1 \qquad \text{semi-IQR} = \frac{Q_3 - Q_1}{2}$$

> A curve for 80 students gives $Q_1 = 46$, $Q_2 = 58$ and $Q_3 = 71$ marks.

IQR $= 71 - 46 = 25$ marks; semi-interquartile range $= 12.5$ marks.

The IQR describes the **middle half** of the data and ignores extreme values,
which makes it the more reliable measure when the data has a long tail.

### Standard deviation

The **standard deviation** measures how far values typically lie from the mean.
You won't calculate it, but you must **interpret** it:

- **Small** standard deviation: values cluster close to the mean — **consistent**.
- **Large** standard deviation: values are widely spread.

It uses **every** value, unlike the range (two values) or the IQR (the middle
half), so it's the most complete measure of spread — but it is also the most
affected by extreme values.

### Comparing two sets of data

Compare an **average** and a **spread**, and say what each means in context:

> Machine A: mean 500 ml, standard deviation 2 ml.
> Machine B: mean 500 ml, standard deviation 9 ml.

"Both machines fill to the same average, 500 ml. Machine A is far more
consistent, because its standard deviation is much smaller, so its bottles vary
less from 500 ml."

A comparison that quotes only the averages, or only the spread, earns at most
half the marks.

## Flashcards

### 1.5 | How is the range estimated from grouped data?
Upper boundary of the last class minus lower boundary of the first class.

### 1.5 | At what positions are $Q_1$, $Q_2$ and $Q_3$ read from a cumulative frequency curve of $n$ values?
$\frac{1}{4}n$, $\frac{1}{2}n$ and $\frac{3}{4}n$.

### 1.5 | State the formulas for the IQR and the semi-interquartile range.
$\text{IQR} = Q_3 - Q_1$ and $\text{semi-IQR} = \frac{Q_3 - Q_1}{2}$.

### 1.6 | What does a large standard deviation tell you?
The values are widely spread out from the mean.

### 1.6 | Why is the standard deviation a more complete measure of spread than the range?
It uses **every** value, not just the two extremes.

### 1.6 | What two things must a comparison of two data sets include?
An **average** and a **measure of spread**, both explained in context.

## Questions

### 1.5 | numeric | 1 mark | difficulty 1
A cumulative frequency curve gives $Q_1 = 32$ and $Q_3 = 54$. Find the
interquartile range.

**Answer:** 22

**Working:** $54 - 32 = 22$.

### 1.5 | numeric | 1 mark | difficulty 2
For the same data, find the semi-interquartile range.

**Answer:** 11

**Working:** $\frac{54 - 32}{2} = 11$.

### 1.5 | numeric | 1 mark | difficulty 2
Grouped data has classes from $10 \leq x < 20$ to $50 \leq x < 60$. Estimate
the range.

**Answer:** 50

**Working:** $60 - 10 = 50$.

### 1.6 | mcq | 1 mark | difficulty 3
Two classes sat the same test. Class P: mean 62, standard deviation 4. Class Q:
mean 62, standard deviation 15. Which statement is correct?

- A. Class P did better on average.
- B. Class Q's marks were more consistent.
- C. Class P's marks were more consistent.
- D. Class Q had the higher mark overall.

**Answer:** C

**Working:** The means are equal, so neither did better on average. P's smaller
standard deviation means its marks were bunched closer to 62.

### 1.5 | structured | 4 marks | difficulty 3
A cumulative frequency curve for the masses of 120 parcels gives
$Q_1 = 4.2$ kg, median $= 6.0$ kg and $Q_3 = 8.4$ kg.

(a) Find the interquartile range. **(1 mark)**

(b) Find the semi-interquartile range. **(1 mark)**

(c) A second set of parcels has the same median but an interquartile range of
1.5 kg. Compare the two sets. **(2 marks)**

**Answer:** (a) 4.2 kg (b) 2.1 kg (c) The masses are the same on average
(median 6.0 kg), but the second set is much more consistent, with an IQR of
1.5 kg against 4.2 kg.

**Working:** (c) 1 mark for comparing the averages, 1 for comparing the spreads
with figures.
