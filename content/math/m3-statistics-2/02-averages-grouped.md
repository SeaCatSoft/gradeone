---
subject: MATH
topic: statistics-2
lesson: averages-grouped
title: Averages for Grouped Data
objectives: ["1.4"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objective 1.4 (determine measures of central tendency for grouped data). The extracted text is interleaved with content notes about class boundaries and estimating the mean. NOT YET checked against textbook for depth.
---

## Lesson

### Estimating the mean

Grouping loses the individual values, so the mean can only be **estimated**. The
best stand-in for every value in a class is its **midpoint**.

$$\text{estimated mean} = \frac{\sum fx}{\sum f}$$

where $x$ is the **class midpoint** and $f$ the frequency.

> Times taken by 20 students:

| Time, $t$ (min) | $f$ | Midpoint $x$ | $fx$ |
|---|---|---|---|
| $0 \leq t < 10$ | 3 | 5 | 15 |
| $10 \leq t < 20$ | 7 | 15 | 105 |
| $20 \leq t < 30$ | 6 | 25 | 150 |
| $30 \leq t < 40$ | 4 | 35 | 140 |
| **Total** | **20** | | **410** |

$$\text{estimated mean} = \frac{410}{20} = 20.5 \text{ minutes}$$

Always call it an **estimate**, and divide by the **total frequency**, not the
number of classes.

Add an extra column for $fx$ — it keeps the work tidy and shows the method for
the marks.

### The modal class

The class with the highest frequency: here $10 \leq t < 20$.

### The median class

The class containing the middle value. With $n$ values, find the
$\frac{n}{2}$th position for grouped data and read down the cumulative
frequencies.

Here $\frac{20}{2} = 10$: cumulative frequencies are 3, 10, 16, 20, so the
10th value is in $10 \leq t < 20$.

### Estimating the median more precisely

A cumulative frequency curve (lesson 4) gives a numerical estimate of the
median rather than just its class — read the value at half the total frequency.

### A sanity check

The estimated mean must lie **inside the range** of the data, and usually near
the middle classes. If your answer is 205 minutes when the data stops at 40,
you divided by the wrong number.

## Flashcards

### 1.4 | Why is the mean of grouped data only an estimate?
The individual values are lost, so class **midpoints** are used to stand in for
them.

### 1.4 | What is the formula for the estimated mean of grouped data?
$$\frac{\sum fx}{\sum f}$$

with $x$ the class midpoints.

### 1.4 | What do you divide by when estimating the mean?
The **total frequency**, not the number of classes.

### 1.4 | What is the modal class?
The class with the highest frequency.

### 1.4 | How do you find the median class of $n$ grouped values?
Find the $\frac{n}{2}$th position and read down the cumulative frequencies.

## Questions

### 1.4 | numeric | 1 mark | difficulty 2
Estimate the mean of the data below.

| Class | $0 \leq x < 4$ | $4 \leq x < 8$ | $8 \leq x < 12$ |
|---|---|---|---|
| Frequency | 5 | 10 | 5 |

**Answer:** 6

**Working:** Midpoints 2, 6, 10. $\sum fx = 10 + 60 + 50 = 120$, and
$\sum f = 20$. Mean $= \frac{120}{20} = 6$.

### 1.4 | mcq | 1 mark | difficulty 2
Why is the class midpoint used when estimating the mean of grouped data?

- A. It is the largest value in the class.
- B. It is the best single representative of the values in the class.
- C. It makes the arithmetic easier.
- D. It is the same as the median.

**Answer:** B

**Working:** With the actual values unknown, the midpoint is the best available
estimate of their average.

### 1.4 | numeric | 1 mark | difficulty 3
Estimate the mean mass, in kg to 2 decimal places.

| Mass (kg) | $0 \leq m < 5$ | $5 \leq m < 10$ | $10 \leq m < 15$ | $15 \leq m < 20$ |
|---|---|---|---|---|
| Frequency | 8 | 12 | 7 | 3 |

**Answer:** 8.33

**Working:** Midpoints 2.5, 7.5, 12.5, 17.5.
$\sum fx = 20 + 90 + 87.5 + 52.5 = 250$. $\sum f = 30$.
Mean $= \frac{250}{30} = 8.333\ldots \approx 8.33$ kg.

### 1.4 | structured | 5 marks | difficulty 3
The table shows the marks of 50 students.

| Mark | $0 \leq m < 20$ | $20 \leq m < 40$ | $40 \leq m < 60$ | $60 \leq m < 80$ | $80 \leq m < 100$ |
|---|---|---|---|---|---|
| Frequency | 4 | 11 | 18 | 12 | 5 |

(a) State the modal class. **(1 mark)**

(b) State the class containing the median. **(1 mark)**

(c) Estimate the mean mark. **(3 marks)**

**Answer:** (a) $40 \leq m < 60$ (b) $40 \leq m < 60$ (c) 51.2

**Working:** (b) The 25th value: cumulative frequencies 4, 15, 33, 45, 50.

(c) Midpoints 10, 30, 50, 70, 90.
$\sum fx = 40 + 330 + 900 + 840 + 450 = 2560$ (2 marks).
Mean $= \frac{2560}{50} = 51.2$ (1 mark).
