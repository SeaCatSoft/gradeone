---
subject: MATH
topic: statistics-1
lesson: measures-of-spread
title: Measures of Spread
objectives: ["1.6", "1.8"]
est_minutes: 18
status: draft
source: "Original prose written against Module 2 syllabus objectives 1.6 (measures of dispersion for raw ungrouped data: range, quartiles, interquartile and semi-interquartile range, per the content notes) and 1.8 (use standard deviation to compare sets of ungrouped data). The content notes state that no calculation of the standard deviation is required, so it is interpreted, not computed. Quartile conventions vary between textbooks; the median-of-halves method is used here. NOT YET checked against textbook for depth."
---

## Lesson

An average tells you where the data is centred. A **measure of spread**
(dispersion) tells you how **spread out** it is. Two classes could have the same
mean mark, but in one everyone scored about the same, while in the other the
marks ranged from 10 to 100.

### The range

$$\text{range} = \text{highest value} - \text{lowest value}$$

Quick to find, but it uses only two values, so a single extreme value distorts
it badly.

### Quartiles

The median splits ordered data into two halves. The **quartiles** split it into
four quarters:

- **Lower quartile** ($Q_1$): the median of the **lower half**
- **Median** ($Q_2$): the middle value
- **Upper quartile** ($Q_3$): the median of the **upper half**

For the ordered data

$$2,\ 4,\ 5,\ 7,\ 8,\ 10,\ 11,\ 13,\ 15,\ 16,\ 20$$

- 11 values; the median is the 6th: $Q_2 = 10$
- lower half (values before the median): 2, 4, 5, 7, 8 → $Q_1 = 5$
- upper half: 11, 13, 15, 16, 20 → $Q_3 = 15$

### Interquartile and semi-interquartile range

$$\text{interquartile range (IQR)} = Q_3 - Q_1$$

$$\text{semi-interquartile range} = \frac{Q_3 - Q_1}{2}$$

For the data above: $\text{IQR} = 15 - 5 = 10$, and the semi-interquartile
range is 5.

The IQR measures the spread of the **middle half** of the data. Because it
ignores the top and bottom quarters, extreme values don't affect it — which
makes it more reliable than the range.

### Standard deviation (interpreting only)

The **standard deviation** measures, roughly, how far values typically are
from the **mean**. You won't be asked to calculate it at this level, but you
must be able to **use** it to compare data sets:

- A **small** standard deviation: values are **close** to the mean — the data is
  **consistent**.
- A **large** standard deviation: values are **spread out**.

> Two batsmen both average 40 runs. Batsman A's standard deviation is 5;
> Batsman B's is 22.

Their average is the same, but A is far more **consistent**: his scores are
mostly close to 40. B's scores vary wildly — some big innings and some very low
ones.

### Comparing two data sets

A full comparison mentions **both** an average and a spread, **in context**:

> "On average, class X scored higher (median 68 compared with 61). Class Y's
> marks were more consistent (IQR 8 compared with 15)."

## Flashcards

### 1.6 | How do you find the range?
Highest value minus lowest value.

### 1.6 | What is the interquartile range?
$Q_3 - Q_1$: the spread of the middle half of the data.

### 1.6 | What is the semi-interquartile range?
Half the interquartile range: $\frac{Q_3 - Q_1}{2}$.

### 1.6 | Why is the IQR often better than the range?
It isn't affected by extreme values.

### 1.8 | What does a small standard deviation tell you?
The values are close to the mean: the data is **consistent**.

### 1.8 | What two things should a comparison of two data sets mention?
An **average** and a **measure of spread**, each in context.

## Questions

### 1.6 | numeric | 1 mark | difficulty 1
Find the range of 14, 3, 22, 9, 17, 6.

**Answer:** 19

**Working:** $22 - 3 = 19$.

### 1.6 | numeric | 1 mark | difficulty 2
For the data 3, 5, 6, 8, 9, 12, 14, the lower quartile is 5 and the upper
quartile is 12. Find the semi-interquartile range.

**Answer:** 3.5

**Working:** IQR $= 12 - 5 = 7$. Semi-IQR $= 7 \div 2 = 3.5$.

### 1.6 | numeric | 1 mark | difficulty 3
Find the interquartile range of 11, 4, 7, 15, 9, 20, 13, 6, 18, 2, 16.

**Answer:** 10

**Working:** In order: 2, 4, 6, 7, 9, 11, 13, 15, 16, 18, 20 (11 values).
Median $= 11$ (6th). Lower half 2, 4, 6, 7, 9 gives $Q_1 = 6$; upper half 13,
15, 16, 18, 20 gives $Q_3 = 16$. IQR $= 16 - 6 = 10$.

### 1.8 | mcq | 1 mark | difficulty 2
Two machines fill bags of rice. Both have a mean fill of 2 kg. Machine P has a
standard deviation of 0.02 kg; machine Q has 0.15 kg. Which statement is
correct?

- A. Machine Q fills bags more consistently.
- B. Machine P fills bags more consistently.
- C. Machine P puts more rice in each bag.
- D. The machines perform identically.

**Answer:** B

**Working:** The means are equal, so neither puts in more rice on average. P's
much smaller standard deviation means its bags are consistently close to 2 kg.

### 1.8 | structured | 4 marks | difficulty 3
The marks of two groups in a test are summarised below.

| | Median | Interquartile range |
|---|---|---|
| Group A | 64 | 22 |
| Group B | 58 | 9 |

(a) Which group did better on average? Give a reason. **(2 marks)**

(b) Which group's marks were more consistent? Give a reason. **(2 marks)**

**Answer:** (a) Group A: its median is higher (64 compared with 58).
(b) Group B: its IQR is smaller (9 compared with 22), so its marks were less
spread out.

**Working:** 1 mark for each choice, and 1 for each reason quoting the figures.
