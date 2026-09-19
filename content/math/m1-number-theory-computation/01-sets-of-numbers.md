---
subject: MATH
topic: number-theory-computation
lesson: sets-of-numbers
title: Sets of Numbers
objectives: ["1.1", "1.15"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objectives 1.1 and 1.15 and the 1.1 content note (natural, whole, integers, rational, irrational, real; inclusion relations). Both objectives are still flagged for review in the objectives file. NOT YET checked against textbook for depth.
---

## Lesson

Numbers come in families, and each family sits inside a bigger one. CSEC
expects you to name the family a number belongs to, and to know how the
families fit together.

### The families

| Name | Symbol | Members |
|---|---|---|
| Natural numbers | $\mathbb{N}$ | $\{1, 2, 3, 4, \ldots\}$ |
| Whole numbers | $\mathbb{W}$ | $\{0, 1, 2, 3, \ldots\}$ |
| Integers | $\mathbb{Z}$ | $\{\ldots, -2, -1, 0, 1, 2, \ldots\}$ |
| Rational numbers | $\mathbb{Q}$ | any number that can be written as $\frac{a}{b}$, with $a$ and $b$ integers and $b \neq 0$ |
| Irrational numbers | | numbers that **cannot** be written as a fraction of integers |
| Real numbers | $\mathbb{R}$ | all the rational and irrational numbers together |

The only difference between the natural numbers and the whole numbers is
**zero**. The whole numbers include it; the natural numbers start at 1.

### Rational means "ratio"

A number is rational if it can be written as one integer over another. That
covers far more than it first seems:

- every integer: $5 = \frac{5}{1}$, $-3 = \frac{-3}{1}$
- every terminating decimal: $0.75 = \frac{3}{4}$
- every recurring decimal: $0.333\ldots = \frac{1}{3}$

So the test for a decimal is simple: if it **stops**, or it **repeats a
pattern forever**, it is rational.

### Irrational numbers

An irrational number has a decimal that goes on forever **without**
repeating. The ones you will meet most:

- $\pi = 3.14159265\ldots$
- square roots of numbers that are not perfect squares: $\sqrt{2}$, $\sqrt{3}$,
  $\sqrt{5}$, $\sqrt{10}$, …

Be careful with square roots. $\sqrt{16} = 4$ is rational, because 16 is a
perfect square. $\sqrt{15}$ is irrational.

And $\frac{22}{7}$ is **rational** — it is a fraction of integers. It is only
an *approximation* to $\pi$, not $\pi$ itself.

### How the families fit together

Each family is a subset of the next:

$$\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

The irrationals sit inside $\mathbb{R}$ too, but *beside* $\mathbb{Q}$, not
inside it. No number is both rational and irrational. Together they make up
every real number:

$$\mathbb{R} = \mathbb{Q} \cup \{\text{irrationals}\}$$

So a number can belong to several families at once. The number 7 is natural,
whole, an integer, rational and real — five families. When a question asks
which sets a number belongs to, list them all.

### Ordering real numbers

To put real numbers in order, change them all into the same form first —
usually decimals — and then compare.

Order $\frac{2}{3}$, $0.6$, $\sqrt{0.5}$, $65\%$ from smallest to largest:

| Number | As a decimal |
|---|---|
| $\frac{2}{3}$ | $0.6667\ldots$ |
| $0.6$ | $0.6$ |
| $\sqrt{0.5}$ | $0.7071\ldots$ |
| $65\%$ | $0.65$ |

Smallest to largest: $0.6,\ 65\%,\ \frac{2}{3},\ \sqrt{0.5}$.

Always give the answer in the **original** forms, not the decimals you used
to compare them.

With negatives, remember that the number further left on the number line is
smaller: $-5 < -2$, even though 5 is bigger than 2.

## Flashcards

### 1.1 | What is the difference between the natural numbers and the whole numbers?
Zero. The whole numbers are $\{0, 1, 2, \ldots\}$; the natural numbers start
at 1.

### 1.1 | What makes a number rational?
It can be written as $\frac{a}{b}$, where $a$ and $b$ are integers and
$b \neq 0$.

> Hint: "rational" comes from "ratio".

### 1.1 | How can you tell from its decimal whether a number is rational?
If the decimal **terminates** or **recurs**, the number is rational. If it goes
on forever without a repeating pattern, it is irrational.

### 1.1 | Is $\sqrt{49}$ rational or irrational?
Rational. $\sqrt{49} = 7$, which is $\frac{7}{1}$.

Only square roots of numbers that are **not** perfect squares are irrational.

### 1.1 | Is $\frac{22}{7}$ irrational, since it is used for $\pi$?
No. $\frac{22}{7}$ is a fraction of integers, so it is **rational**. It is
only an approximation to $\pi$, which is irrational.

### 1.1 | Put these in order, smallest first: $\mathbb{Z}$, $\mathbb{N}$, $\mathbb{Q}$, $\mathbb{W}$, $\mathbb{R}$
$$\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

Each set is a subset of the next.

### 1.15 | How do you order numbers written in different forms?
Convert them all to one form (usually decimals), compare, then write the
answer using the **original** forms.

## Questions

### 1.1 | mcq | 1 mark | difficulty 1
Which of the following is an irrational number?

- A. $\frac{1}{3}$
- B. $\sqrt{25}$
- C. $\sqrt{7}$
- D. $0.25$

**Answer:** C

**Working:** 7 is not a perfect square, so $\sqrt{7}$ has a decimal that never
ends or repeats.

$\frac{1}{3}$ is a fraction of integers, $\sqrt{25} = 5$, and $0.25 = \frac{1}{4}$,
so all three of the others are rational.

### 1.1 | mcq | 1 mark | difficulty 2
The number $-4$ belongs to which of these sets?

- A. Natural numbers only
- B. Integers and rational numbers
- C. Whole numbers and integers
- D. Irrational numbers

**Answer:** B

**Working:** $-4$ is an integer, and every integer is rational ($-4 = \frac{-4}{1}$).
It is not natural or whole, because neither of those sets contains negative
numbers.

### 1.1 | mcq | 1 mark | difficulty 3
Which statement is **true**?

- A. Every rational number is an integer.
- B. Every whole number is a natural number.
- C. Every integer is a rational number.
- D. Some numbers are both rational and irrational.

**Answer:** C

**Working:** Any integer $n$ can be written as $\frac{n}{1}$, so it is rational.

A is false: $\frac{1}{2}$ is rational but not an integer. B is false: 0 is whole
but not natural. D is false: a number is one or the other, never both.

### 1.15 | mcq | 1 mark | difficulty 2
Which list is in order from **smallest to largest**?

- A. $\frac{1}{3},\ 30\%,\ 0.35,\ \frac{3}{8}$
- B. $30\%,\ \frac{1}{3},\ 0.35,\ \frac{3}{8}$
- C. $30\%,\ 0.35,\ \frac{1}{3},\ \frac{3}{8}$
- D. $\frac{3}{8},\ 0.35,\ \frac{1}{3},\ 30\%$

**Answer:** B

**Working:** Convert each to a decimal:
$30\% = 0.3$, $\frac{1}{3} = 0.333\ldots$, $0.35$, and $\frac{3}{8} = 0.375$.

In order: $0.3 < 0.333\ldots < 0.35 < 0.375$, which is
$30\%,\ \frac{1}{3},\ 0.35,\ \frac{3}{8}$.

D is the same list in the wrong direction: largest to smallest.

### 1.1 | structured | 4 marks | difficulty 3
Consider the set $S = \{-3,\ 0,\ \frac{3}{4},\ \sqrt{9},\ \sqrt{11},\ \pi\}$.

List the members of $S$ that are:

(a) natural numbers **(1 mark)**

(b) integers **(1 mark)**

(c) rational numbers **(1 mark)**

(d) irrational numbers **(1 mark)**

**Answer:** (a) $\sqrt{9}$ (b) $-3,\ 0,\ \sqrt{9}$ (c) $-3,\ 0,\ \frac{3}{4},\ \sqrt{9}$
(d) $\sqrt{11},\ \pi$ — 1 mark each, all members needed for the mark.

**Working:** Simplify first: $\sqrt{9} = 3$, which is natural, whole, an
integer and rational.

$0$ is whole and an integer but not natural. $-3$ is an integer but neither
natural nor whole. $\frac{3}{4}$ is rational but not an integer.

$\sqrt{11}$ is irrational because 11 is not a perfect square, and $\pi$ is
irrational.
