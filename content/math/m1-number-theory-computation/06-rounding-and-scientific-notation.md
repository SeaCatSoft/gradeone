---
subject: MATH
topic: number-theory-computation
lesson: rounding-and-scientific-notation
title: Rounding and Scientific Notation
objectives: ["1.9", "1.12"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 1.9 (significant figures and decimal places) and 1.12 (scientific notation). NOT YET checked against textbook for depth.
---

## Lesson

### Rounding: the one rule

Whatever you are rounding to, the method is the same:

1. Find the last digit you are keeping.
2. Look at the digit **immediately after** it.
3. If that digit is **5 or more**, round up. If it is **4 or less**, leave the
   kept digit alone.

Everything after the kept digit is dropped — or, if it is before the decimal
point, replaced by zeros so the number keeps its size.

### Decimal places

Decimal places are counted from the **decimal point**.

Round $7.3862$ to 2 decimal places: keep $7.38$, the next digit is 6, so round
up to $7.39$.

Keep trailing zeros the question asks for. $4.996$ to 2 decimal places is
$5.00$ — the two zeros show the accuracy, so write them.

### Significant figures

Significant figures are counted from the **first non-zero digit**.

| Number | First significant figure | To 2 s.f. |
|---|---|---|
| $48\,372$ | 4 | $48\,000$ |
| $0.004517$ | 4 (the zeros in front don't count) | $0.0045$ |
| $3.0962$ | 3 | $3.1$ |
| $0.0698$ | 6 | $0.070$ |

Two things catch people out:

- **Leading zeros never count.** In $0.004517$ the first significant figure is
  4.
- **Zeros between or after non-zero digits do count** once you've started.
  In $3.0962$, the 0 is the second significant figure.

And a large number keeps its size. $48\,372$ to 2 s.f. is $48\,000$, not 48 —
that would be a different number entirely.

### Scientific notation

Very large and very small numbers are written in **scientific notation**
(also called standard form):

$$A \times 10^n$$

where $1 \leq A < 10$ and $n$ is an integer.

So $A$ has exactly **one non-zero digit before the decimal point**.

| Number | Scientific notation |
|---|---|
| $52\,000$ | $5.2 \times 10^4$ |
| $3\,800\,000$ | $3.8 \times 10^6$ |
| $0.00071$ | $7.1 \times 10^{-4}$ |
| $0.5$ | $5 \times 10^{-1}$ |

To find $n$, count how many places the decimal point moves to get $A$:

- moving **left** (a big number) gives a **positive** power
- moving **right** (a number less than 1) gives a **negative** power

In $52\,000$, the point moves 4 places left to give $5.2$, so $n = 4$.

A quick check: numbers of 10 or more have $n > 0$, numbers between 0 and 1
have $n < 0$, and numbers from 1 up to 10 have $n = 0$.

$45 \times 10^3$ is **not** scientific notation, because 45 isn't between 1
and 10. It is $4.5 \times 10^4$.

## Flashcards

### 1.9 | What is the rounding rule?
Look at the digit **after** the last one you keep. **5 or more**: round up.
**4 or less**: leave it.

### 1.9 | Where do you start counting significant figures?
At the **first non-zero digit**. Leading zeros never count.

### 1.9 | Round $0.030749$ to 3 significant figures.
$0.0307$

The first significant figure is 3. The next two are 0 and 7. The following
digit, 4, is less than 5, so there is no rounding up.

### 1.9 | Round $62\,850$ to 2 significant figures.
$63\,000$

Keep 6 and 2; the next digit, 8, rounds the 2 up. The number keeps its size.

### 1.12 | What form does scientific notation take?
$$A \times 10^n, \quad 1 \leq A < 10$$

with $n$ an integer.

### 1.12 | Write $0.000604$ in scientific notation.
$$6.04 \times 10^{-4}$$

The point moves 4 places right, so the power is negative.

## Questions

### 1.9 | numeric | 1 mark | difficulty 1
Round $15.6472$ to 2 decimal places.

**Answer:** 15.65

**Working:** Keep $15.64$. The next digit is 7, which is 5 or more, so round
up to $15.65$.

### 1.9 | mcq | 1 mark | difficulty 2
$0.008367$ written correct to 2 significant figures is

- A. $0.01$
- B. $0.0083$
- C. $0.0084$
- D. $0.00837$

**Answer:** C

**Working:** The first significant figure is 8. Keep 8 and 3; the next digit
is 6, so the 3 rounds up to 4: $0.0084$.

A is 2 decimal places, not 2 significant figures. B forgets to round. D has
three significant figures.

### 1.9 | numeric | 1 mark | difficulty 2
Round $247\,815$ to 3 significant figures.

**Answer:** 248000

**Working:** Keep 2, 4, 7. The next digit is 8, so the 7 rounds up to 8. Fill
the remaining places with zeros: $248\,000$.

### 1.12 | mcq | 1 mark | difficulty 2
Which number is written in scientific notation?

- A. $0.7 \times 10^5$
- B. $7.0 \times 10^{-3}$
- C. $70 \times 10^2$
- D. $7 \times 100^2$

**Answer:** B

**Working:** Scientific notation needs $A \times 10^n$ with $1 \leq A < 10$.
In B, $A = 7.0$ and the power is of 10.

A has $A < 1$, C has $A = 70$, and D uses a power of 100.

### 1.12 | numeric | 1 mark | difficulty 3
$3.52 \times 10^{-3}$ is written as an ordinary number. What is it?

**Answer:** 0.00352

**Working:** A power of $-3$ means move the decimal point 3 places to the
left: $3.52 \to 0.00352$.

### 1.12 | structured | 4 marks | difficulty 3
The distance from the Earth to the Sun is about 149 600 000 km.

(a) Write this distance in scientific notation. **(1 mark)**

(b) Write your answer to (a) correct to 2 significant figures. **(1 mark)**

(c) Light travels about $3 \times 10^5$ km each second. Using your answer to
(b), calculate how many seconds light takes to reach the Earth from the Sun.
Give your answer in scientific notation. **(2 marks)**

**Answer:** (a) $1.496 \times 10^8$ km (b) $1.5 \times 10^8$ km
(c) $5 \times 10^2$ seconds

**Working:** (a) The point moves 8 places left to give $1.496$, so
$1.496 \times 10^8$.

(b) Keep 1 and 4; the next digit, 9, rounds up: $1.5 \times 10^8$.

(c) Time $= \dfrac{\text{distance}}{\text{speed}} = \dfrac{1.5 \times 10^8}{3 \times 10^5}
= 0.5 \times 10^3$. (1 mark.)

$0.5$ isn't between 1 and 10, so adjust: $0.5 \times 10^3 = 5 \times 10^2$
seconds. (1 mark.) That's 500 seconds, a little over 8 minutes.
