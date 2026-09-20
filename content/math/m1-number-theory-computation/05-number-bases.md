---
subject: MATH
topic: number-theory-computation
lesson: number-bases
title: Number Bases
objectives: ["1.7"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objective 1.7 ("state the value of a digit of a numeral in a given base"). Conversion to and from base 10 is included as the natural extension of place value; confirm against the printed content notes whether base arithmetic is also expected. NOT YET checked against textbook for depth.
---

## Lesson

### Place value in base 10

In our everyday numbers, each place is worth **ten times** the place to its
right. In 4 725:

| Thousands ($10^3$) | Hundreds ($10^2$) | Tens ($10^1$) | Units ($10^0$) |
|---|---|---|---|
| 4 | 7 | 2 | 5 |

The digit 7 has a **value** of $7 \times 100 = 700$. The digit alone is 7;
its value depends on where it sits. That idea — digit times place value — is
all there is to number bases.

### Other bases

Base 10 uses ten digits, 0 to 9, because each place is worth ten of the one
before. Any whole number greater than 1 can be a base. In **base $b$**:

- the places are worth $b^0, b^1, b^2, b^3, \ldots$ from right to left
- the only digits allowed are $0$ up to $b - 1$

So base 2 (**binary**) uses only 0 and 1, and its places are 1, 2, 4, 8, 16, …
Base 5 uses 0 to 4, with places 1, 5, 25, 125, …

The base is written as a small subscript: $1011_2$ is "one zero one one,
base two". Say the digits separately — it is **not** "one thousand and
eleven".

A digit can never equal or exceed its base. $352_5$ is impossible, because 5
isn't a digit in base 5.

### The value of a digit

Multiply the digit by the value of its place.

In $2413_5$, the places from the right are worth $1, 5, 25, 125$:

| $5^3 = 125$ | $5^2 = 25$ | $5^1 = 5$ | $5^0 = 1$ |
|---|---|---|---|
| 2 | 4 | 1 | 3 |

The digit 4 has a value of $4 \times 25 = 100$ (in base 10).

### Converting to base 10

Add up the values of all the digits:

$$2413_5 = 2 \times 125 + 4 \times 25 + 1 \times 5 + 3 \times 1 = 250 + 100 + 5 + 3 = 358$$

For binary it is especially quick, because every digit is 0 or 1 — just add
the place values under the 1s:

$$10110_2 = 16 + 4 + 2 = 22$$

### Converting from base 10

Divide repeatedly by the new base, writing down each **remainder**. Then read
the remainders from the **bottom up**.

Convert 45 to base 2:

$$
\begin{array}{r|rl}
2 & 45 & \\
2 & 22 & \text{r } 1 \\
2 & 11 & \text{r } 0 \\
2 & 5 & \text{r } 1 \\
2 & 2 & \text{r } 1 \\
2 & 1 & \text{r } 0 \\
 & 0 & \text{r } 1
\end{array}
$$

Reading upwards: $45 = 101101_2$.

Check it by converting back: $32 + 8 + 4 + 1 = 45$. ✓

Reading the remainders **top down** is the classic mistake. It gives the digits
backwards.

## Flashcards

### 1.7 | In base $b$, what are the place values?
From the right: $b^0 = 1$, then $b^1$, $b^2$, $b^3$, …

In base 2: 1, 2, 4, 8, 16, …

### 1.7 | Which digits can be used in base $b$?
$0$ up to $b - 1$. Base 5 uses 0, 1, 2, 3, 4 — never 5.

### 1.7 | What is the value of the digit 3 in $1302_4$?
$3 \times 4^2 = 3 \times 16 = 48$.

The places from the right are worth 1, 4, 16, 64.

### 1.7 | Convert $1101_2$ to base 10.
$8 + 4 + 1 = 13$.

### 1.7 | How do you convert a base-10 number into another base?
Divide by the base repeatedly, noting each remainder, then read the remainders
from the **bottom up**.

## Questions

### 1.7 | mcq | 1 mark | difficulty 1
Which of these is **not** a valid base-3 numeral?

- A. $1021_3$
- B. $2220_3$
- C. $1302_3$
- D. $1000_3$

**Answer:** C

**Working:** Base 3 uses only the digits 0, 1 and 2. $1302_3$ contains a 3, so
it can't be a base-3 numeral.

### 1.7 | numeric | 1 mark | difficulty 2
State the value, in base 10, of the digit 6 in $2605_7$.

**Answer:** 294

**Working:** The places in base 7, from the right, are 1, 7, 49, 343. The 6
is in the $7^2 = 49$ place, so its value is $6 \times 49 = 294$.

### 1.7 | numeric | 1 mark | difficulty 2
Convert $11011_2$ to base 10.

**Answer:** 27

**Working:** Place values under the 1s: $16 + 8 + 2 + 1 = 27$.

### 1.7 | numeric | 1 mark | difficulty 3
Convert $324_5$ to base 10.

**Answer:** 89

**Working:** $3 \times 25 + 2 \times 5 + 4 \times 1 = 75 + 10 + 4 = 89$.

### 1.7 | structured | 4 marks | difficulty 3
(a) Convert 38 to base 2. **(2 marks)**

(b) Convert $213_4$ to base 10. **(1 mark)**

(c) Hence, or otherwise, state which is larger: $100110_2$ or $213_4$.
**(1 mark)**

**Answer:** (a) $100110_2$ (b) 39 (c) $213_4$

**Working:** (a) $38 \div 2 = 19$ r 0; $19 \div 2 = 9$ r 1; $9 \div 2 = 4$ r 1;
$4 \div 2 = 2$ r 0; $2 \div 2 = 1$ r 0; $1 \div 2 = 0$ r 1. Reading the
remainders upwards gives $100110_2$. (1 mark for the method, 1 for the answer.)

(b) $2 \times 16 + 1 \times 4 + 3 \times 1 = 32 + 4 + 3 = 39$.

(c) From (a), $100110_2 = 38$, and $213_4 = 39$. Since $39 > 38$, $213_4$ is
larger.
