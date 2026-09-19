---
subject: MATH
topic: number-theory-computation
lesson: factors-multiples-hcf-lcm
title: Factors, Multiples, HCF and LCM
objectives: ["1.5", "1.6"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 1.5 and 1.6. NOT YET checked against textbook for depth.
---

## Lesson

### Factors

A **factor** of a number divides into it exactly, with no remainder. The
factors of 12 are 1, 2, 3, 4, 6 and 12.

To list factors without missing any, find them in **pairs** that multiply to
the number. Start at 1 and work up:

| Pair | |
|---|---|
| $1 \times 36$ | |
| $2 \times 18$ | |
| $3 \times 12$ | |
| $4 \times 9$ | |
| $6 \times 6$ | stop — the pairs have met |

(5 is skipped because it doesn't divide 36.) So the factors of 36 are
$\{1, 2, 3, 4, 6, 9, 12, 18, 36\}$.

Once the two numbers in a pair meet or cross, you have them all. Two
factors that are always there: **1** and **the number itself**.

### Multiples

A **multiple** of a number is in its times table. The multiples of 6 are
$6, 12, 18, 24, 30, \ldots$ — they go on forever.

Factors and multiples are opposite ways of looking at the same fact:
$3 \times 4 = 12$ means 3 is a factor of 12, and 12 is a multiple of 3.

### Primes and prime factors

A **prime number** has exactly two factors: 1 and itself. The first few are

$$2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29, \ldots$$

1 is **not** prime — it has only one factor. 2 is the only even prime.

Every whole number greater than 1 can be written as a product of primes.
Use a factor tree, or divide repeatedly by the smallest prime that works:

$$
\begin{array}{r|l}
2 & 360 \\
2 & 180 \\
2 & 90 \\
3 & 45 \\
3 & 15 \\
5 & 5 \\
 & 1
\end{array}
$$

So $360 = 2 \times 2 \times 2 \times 3 \times 3 \times 5 = 2^3 \times 3^2 \times 5$.

### The HCF

The **highest common factor** is the largest number that is a factor of every
number in the group.

For small numbers, list the factors and pick the biggest in both lists.
For bigger ones, use prime factors and take each **shared** prime to the
**lowest** power it appears:

$$
\begin{aligned}
72 &= 2^3 \times 3^2 \\
120 &= 2^3 \times 3 \times 5 \\
\text{HCF} &= 2^3 \times 3 = 24
\end{aligned}
$$

5 is left out because 72 doesn't have it.

### The LCM

The **lowest common multiple** is the smallest number that every number in the
group divides into.

With prime factors, take **every** prime that appears, to the **highest**
power it appears:

$$
\begin{aligned}
72 &= 2^3 \times 3^2 \\
120 &= 2^3 \times 3 \times 5 \\
\text{LCM} &= 2^3 \times 3^2 \times 5 = 360
\end{aligned}
$$

A useful check for two numbers: $\text{HCF} \times \text{LCM} = $ the two numbers
multiplied together. Here $24 \times 360 = 8640 = 72 \times 120$. ✓

### Which one does the question want?

Word problems rarely say "HCF" or "LCM". Read what is being asked for:

- **HCF** — splitting things into the **largest equal groups**, cutting into the
  **longest equal pieces**. The answer is *smaller* than the numbers given.
- **LCM** — when things that repeat will **next happen together**. The answer is
  *bigger* than the numbers given.

> Two buses leave a terminal together. One returns every 12 minutes, the other
> every 18 minutes. When are they next at the terminal together?

They meet again at a common multiple of 12 and 18, and the first time is the
LCM: $12 = 2^2 \times 3$, $18 = 2 \times 3^2$, so $\text{LCM} = 2^2 \times 3^2 = 36$
minutes.

## Flashcards

### 1.5 | What is a factor?
A number that divides into another exactly, with no remainder.

The factors of 10 are 1, 2, 5 and 10.

### 1.5 | How do you list all the factors of a number without missing any?
Find them in **pairs** that multiply to the number, starting from 1. Stop when
the pairs meet or cross.

### 1.5 | Is 1 a prime number?
No. A prime has **exactly two** factors, 1 and itself. 1 has only one factor.

### 1.6 | How do you find the HCF from prime factors?
Take the primes that appear in **all** the numbers, each to its **lowest**
power, and multiply.

### 1.6 | How do you find the LCM from prime factors?
Take **every** prime that appears, each to its **highest** power, and multiply.

### 1.6 | A word problem asks when two repeating events next happen together. HCF or LCM?
**LCM.** "Next together" means the smallest common multiple.

> Hint: will the answer be bigger or smaller than the numbers given?

### 1.6 | A word problem asks for the largest equal groups. HCF or LCM?
**HCF.** The largest number that divides into all of them.

## Questions

### 1.5 | mcq | 1 mark | difficulty 1
Which of the following is **not** a factor of 48?

- A. 6
- B. 8
- C. 12
- D. 18

**Answer:** D

**Working:** $48 \div 18 = 2$ remainder 12, so 18 doesn't divide 48.

The others do: $6 \times 8 = 48$ and $12 \times 4 = 48$.

### 1.5 | numeric | 1 mark | difficulty 2
How many factors does 30 have?

**Answer:** 8

**Working:** In pairs: $1 \times 30$, $2 \times 15$, $3 \times 10$, $5 \times 6$.

That gives 1, 2, 3, 5, 6, 10, 15 and 30 — eight factors.

### 1.6 | numeric | 1 mark | difficulty 2
Find the HCF of 36 and 60.

**Answer:** 12

**Working:** $36 = 2^2 \times 3^2$ and $60 = 2^2 \times 3 \times 5$.

Shared primes at their lowest powers: $2^2 \times 3 = 12$.

### 1.6 | numeric | 1 mark | difficulty 2
Find the LCM of 8, 12 and 20.

**Answer:** 120

**Working:** $8 = 2^3$, $12 = 2^2 \times 3$, $20 = 2^2 \times 5$.

Every prime at its highest power: $2^3 \times 3 \times 5 = 120$.

### 1.6 | mcq | 1 mark | difficulty 3
Written as a product of primes, $n = 2^2 \times 3 \times 7$ and $m = 2 \times 3^2 \times 5$.
What is the HCF of $n$ and $m$?

- A. 6
- B. 12
- C. 18
- D. 1260

**Answer:** A

**Working:** The primes in both are 2 and 3. Lowest powers: $2^1$ and $3^1$, so
the HCF is $2 \times 3 = 6$.

D is the LCM, $2^2 \times 3^2 \times 5 \times 7 = 1260$.

### 1.6 | structured | 5 marks | difficulty 3
A florist has 84 roses and 126 lilies. She wants to make identical bouquets,
using **all** the flowers, with the same number of roses in each bouquet and
the same number of lilies in each bouquet.

(a) Write 84 and 126 as products of prime factors. **(2 marks)**

(b) What is the **largest** number of bouquets she can make? **(2 marks)**

(c) How many roses and how many lilies will be in each bouquet? **(1 mark)**

**Answer:** (a) $84 = 2^2 \times 3 \times 7$; $126 = 2 \times 3^2 \times 7$
(b) 42 (c) 2 roses and 3 lilies

**Working:** (a) 1 mark for each correct product.

(b) Equal groups using everything means a common factor, and "largest" means
the HCF: shared primes at lowest powers are $2 \times 3 \times 7 = 42$.
(1 mark for choosing the HCF, 1 mark for 42.)

(c) $84 \div 42 = 2$ roses and $126 \div 42 = 3$ lilies per bouquet.
