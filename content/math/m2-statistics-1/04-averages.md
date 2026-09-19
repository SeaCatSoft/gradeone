---
subject: MATH
topic: statistics-1
lesson: averages
title: Mean, Median and Mode
objectives: ["1.4", "1.5"]
est_minutes: 18
status: draft
source: Original prose written against Module 2 syllabus objectives 1.4 (measures of central tendency for raw ungrouped data) and 1.5 (when to use the mean, median or mode). The content notes mention sets with extreme or recurring values. NOT YET checked against textbook for depth.
---

## Lesson

An **average** is a single value that represents a typical member of a set of
data. There are three, and each has its uses.

### The mode

The **mode** is the value that occurs **most often**.

$$3,\ 7,\ 7,\ 2,\ 9,\ 7,\ 4 \quad\Rightarrow\quad \text{mode} = 7$$

A set can have two modes (**bimodal**) or no mode at all if every value
appears equally often. The mode is the only average that works for
**qualitative** data: the modal colour, the modal brand.

### The median

The **median** is the **middle** value once the data is **in order**.

$$2,\ 3,\ 4,\ \mathbf{7},\ 7,\ 7,\ 9 \quad\Rightarrow\quad \text{median} = 7$$

With an **even** number of values there are two middle values; the median is
halfway between them:

$$3,\ 5,\ \mathbf{6},\ \mathbf{10},\ 12,\ 15 \quad\Rightarrow\quad \text{median} = \frac{6 + 10}{2} = 8$$

For $n$ values in order, the median is the $\frac{n + 1}{2}$th value. With 7
values, that's the 4th; with 6, it's the 3.5th — halfway between the 3rd and 4th.

**Forgetting to put the data in order** is the classic mistake.

### The mean

The **mean** is the total divided by how many values there are:

$$\text{mean} = \frac{\text{sum of the values}}{\text{number of values}}$$

$$3,\ 7,\ 7,\ 2,\ 9,\ 7,\ 4: \quad \frac{39}{7} = 5.57 \text{ (2 d.p.)}$$

The mean doesn't have to be one of the data values — or even a whole number.

### The mean from a frequency table

Multiply each value by its frequency, add those products, and divide by the
**total frequency**:

| Goals, $x$ | Frequency, $f$ | $fx$ |
|---|---|---|
| 0 | 4 | 0 |
| 1 | 6 | 6 |
| 2 | 7 | 14 |
| 3 | 3 | 9 |
| **Total** | **20** | **29** |

$$\text{mean} = \frac{\sum fx}{\sum f} = \frac{29}{20} = 1.45 \text{ goals}$$

Divide by 20 (the number of matches), **not** by 4 (the number of rows).

### Working backwards from a mean

If you know the mean, you know the total: $\text{total} = \text{mean} \times n$.

> The mean of 5 numbers is 12. Four of them are 10, 15, 8 and 14. Find the
> fifth.

Total $= 5 \times 12 = 60$. The four add to 47, so the fifth is $60 - 47 = 13$.

### Which average to use?

| Average | Best when | Weakness |
|---|---|---|
| **Mean** | data is fairly even, with no extreme values; uses every value | pulled strongly by extreme values (outliers) |
| **Median** | there are **extreme values**, like incomes or house prices | ignores the actual size of most values |
| **Mode** | data is qualitative, or you want the most **common** value (shoe sizes to stock) | may not exist, or there may be several |

> Salaries at a small firm: \$2 000, \$2 200, \$2 400, \$2 500, \$15 000.

The mean is \$4 820 — more than four of the five people earn. The median,
\$2 400, is far more typical. An extreme value drags the mean towards it.

## Flashcards

### 1.4 | What is the first step in finding the median?
Put the data **in order**.

### 1.4 | Find the median of 4, 9, 2, 7.
5.5. In order: 2, 4, 7, 9. The middle two are 4 and 7: $\frac{4 + 7}{2} = 5.5$.

### 1.4 | How do you find the mean from a frequency table?
$$\frac{\sum fx}{\sum f}$$

Divide by the total frequency, not the number of rows.

### 1.5 | Which average is best when the data has an extreme value?
The **median**. The mean is pulled towards extreme values.

### 1.5 | Which is the only average that works for qualitative data?
The **mode**.

### 1.4 | The mean of 6 numbers is 9. What is their total?
54. $\text{total} = \text{mean} \times n$.

## Questions

### 1.4 | numeric | 1 mark | difficulty 1
Find the mean of 8, 12, 5, 9 and 16.

**Answer:** 10

**Working:** $\frac{8 + 12 + 5 + 9 + 16}{5} = \frac{50}{5} = 10$.

### 1.4 | numeric | 1 mark | difficulty 2
Find the median of 13, 7, 21, 9, 15, 4, 18, 10.

**Answer:** 11.5

**Working:** In order: 4, 7, 9, 10, 13, 15, 18, 21. Eight values, so the median
is halfway between the 4th and 5th: $\frac{10 + 13}{2} = 11.5$.

### 1.4 | numeric | 1 mark | difficulty 3
The table shows the number of children in 25 families. Find the mean number
of children per family.

| Children | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Families | 3 | 7 | 9 | 4 | 2 |

**Answer:** 1.8

**Working:** $\sum fx = 0 + 7 + 18 + 12 + 8 = 45$. $\sum f = 25$.
Mean $= \frac{45}{25} = 1.8$.

### 1.5 | mcq | 1 mark | difficulty 2
The ages of people in a room are 21, 23, 22, 24, 22 and 88. Which average best
represents a typical age?

- A. The mean, because it uses every value
- B. The median, because 88 is an extreme value
- C. The mode, because it is the largest
- D. The range

**Answer:** B

**Working:** The 88 drags the mean up to 33.3, older than five of the six
people. The median, 22.5, is typical. The range isn't an average.

### 1.4 | structured | 5 marks | difficulty 3
The mean mass of 8 boxes is 15 kg.

(a) Find the total mass of the 8 boxes. **(1 mark)**

(b) Two more boxes, of masses 12 kg and 23 kg, are added. Find the new mean
mass. **(2 marks)**

(c) The masses of the original 8 boxes include one of 43 kg. Explain why the
median might represent the 8 boxes better than the mean. **(2 marks)**

**Answer:** (a) 120 kg (b) 15.5 kg (c) The 43 kg box is an extreme value that
pulls the mean up; the median is not affected by it.

**Working:** (a) $8 \times 15 = 120$.

(b) New total: $120 + 12 + 23 = 155$, over 10 boxes (1 mark).
$155 \div 10 = 15.5$ kg (1 mark).
