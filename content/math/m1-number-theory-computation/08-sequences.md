---
subject: MATH
topic: number-theory-computation
lesson: sequences
title: Sequences
objectives: ["1.16", "1.17"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 1.16 (compute terms given a rule) and 1.17 (derive a rule given terms). Covers term-to-term rules and nth-term rules for linear sequences, with a look at square-number patterns. NOT YET checked against textbook for depth.
---

## Lesson

A **sequence** is a list of numbers that follows a rule. Each number is a
**term**. In $5, 8, 11, 14, \ldots$ the first term is 5, the second is 8, and
so on.

There are two kinds of rule, and CSEC uses both.

### Term-to-term rules

A **term-to-term** rule says how to get from one term to the next.

> First term 5, then add 3 each time.

That gives $5, 8, 11, 14, 17, \ldots$

It's easy to use for the next few terms, but slow for a far-off one. Finding
the 100th term this way means 99 steps.

### The $n$th term rule

A **position-to-term** rule, or **$n$th term**, gives any term straight from its
position $n$.

> $n$th term $= 3n + 2$

| Position $n$ | 1 | 2 | 3 | 4 | 100 |
|---|---|---|---|---|---|
| Term $3n + 2$ | 5 | 8 | 11 | 14 | 302 |

To find the 100th term, just put $n = 100$: $3(100) + 2 = 302$. One step.

### Finding the $n$th term of a linear sequence

When the terms go up (or down) by the **same amount** each time, the sequence
is **linear**, and its $n$th term has the form

$$an + b$$

The steps:

1. Find the **common difference** between terms. That is $a$.
2. Work out what you must add or subtract to get the **first** term. That is
   $b$.

For $7, 11, 15, 19, \ldots$:

1. The difference is $+4$, so the rule starts $4n$.
2. $4n$ gives $4, 8, 12, 16, \ldots$ — each is 3 less than the sequence. So add
   3.

$$n\text{th term} = 4n + 3$$

**Check it on a term you haven't used.** $n = 3$: $4(3) + 3 = 15$. ✓

A handy shortcut: $b$ is the "zeroth term" — the term that would come before
the first. Step back one difference from 7: $7 - 4 = 3$. So $b = 3$.

For decreasing sequences the difference is negative. $20, 17, 14, 11, \ldots$
goes down by 3, and the zeroth term is $20 + 3 = 23$, so the $n$th term is
$23 - 3n$.

### Is a number in the sequence?

Set the $n$th term equal to the number and solve for $n$. If $n$ comes out as a
**positive whole number**, it's in the sequence.

Is 150 a term of $4n + 3$?

$$4n + 3 = 150 \quad\Rightarrow\quad 4n = 147 \quad\Rightarrow\quad n = 36.75$$

Not a whole number, so 150 isn't in the sequence.

### Patterns that aren't linear

If the differences aren't constant, look for a familiar pattern.

- **Square numbers:** $1, 4, 9, 16, 25, \ldots$ — the $n$th term is $n^2$.
  (The differences are $3, 5, 7, 9$: going up by 2 each time.)
- **Doubling:** $3, 6, 12, 24, \ldots$ — multiply by 2 each time.

Sequences are often shown as patterns of shapes — squares made of matchsticks,
say. Count the items in the first few diagrams, write the numbers as a
sequence, and the rule follows.

## Flashcards

### 1.16 | What is the 10th term of the sequence with $n$th term $5n - 2$?
$5(10) - 2 = 48$.

### 1.16 | Write the first three terms of the sequence with $n$th term $n^2 + 1$.
$2, 5, 10$

$1^2 + 1 = 2$, $2^2 + 1 = 5$, $3^2 + 1 = 10$.

### 1.17 | In the $n$th term $an + b$ of a linear sequence, what is $a$?
The **common difference** between consecutive terms.

### 1.17 | Find the $n$th term of $2, 8, 14, 20, \ldots$
$6n - 4$

The difference is 6. The zeroth term is $2 - 6 = -4$.

> Hint: step back one difference from the first term.

### 1.17 | Find the $n$th term of $30, 26, 22, 18, \ldots$
$34 - 4n$

The difference is $-4$. The zeroth term is $30 + 4 = 34$.

### 1.17 | How do you check whether a number is a term of a sequence?
Set the $n$th term equal to the number and solve. It is a term only if $n$ is
a **positive whole number**.

## Questions

### 1.16 | numeric | 1 mark | difficulty 1
The $n$th term of a sequence is $7n - 3$. Find the 20th term.

**Answer:** 137

**Working:** $7(20) - 3 = 140 - 3 = 137$.

### 1.16 | mcq | 1 mark | difficulty 2
A sequence starts at 4, and each term is found by doubling the previous term
and then subtracting 1. What is the fourth term?

- A. 13
- B. 25
- C. 26
- D. 49

**Answer:** B

**Working:** $4 \to 2(4) - 1 = 7 \to 2(7) - 1 = 13 \to 2(13) - 1 = 25$.

A is the third term. D takes one step too many.

### 1.17 | mcq | 1 mark | difficulty 2
Which expression gives the $n$th term of $9, 14, 19, 24, \ldots$?

- A. $n + 5$
- B. $5n + 4$
- C. $5n + 9$
- D. $9n + 5$

**Answer:** B

**Working:** The common difference is 5, so the rule starts $5n$. The zeroth
term is $9 - 5 = 4$, giving $5n + 4$.

Check: $n = 2$ gives $5(2) + 4 = 14$. ✓ C uses the first term instead of the
zeroth term, and D swaps the two numbers.

### 1.17 | numeric | 1 mark | difficulty 3
The $n$th term of a sequence is $6n + 5$. Which term of the sequence is equal
to 131?

**Answer:** 21

**Working:** $6n + 5 = 131$, so $6n = 126$ and $n = 21$. It is the 21st term.

### 1.17 | structured | 5 marks | difficulty 3
Matchsticks are arranged to make a row of squares.

| Number of squares, $n$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Number of matchsticks, $M$ | 4 | 7 | 10 | 13 |

(a) How many matchsticks are needed for 6 squares? **(1 mark)**

(b) Find an expression for $M$ in terms of $n$. **(2 marks)**

(c) Is it possible to use exactly 100 matchsticks to make a row of squares?
Show your working. **(2 marks)**

**Answer:** (a) 19 (b) $M = 3n + 1$ (c) Yes — 33 squares

**Working:** (a) Each new square adds 3 matchsticks: $13 + 3 = 16$ for 5
squares, and $16 + 3 = 19$ for 6.

(b) The common difference is 3, so $M = 3n + b$. The zeroth term is
$4 - 3 = 1$, so $M = 3n + 1$. (1 mark for $3n$, 1 mark for $+1$.)

It makes sense: the first square needs 1 extra stick to close its left side,
then every square adds 3.

(c) $3n + 1 = 100$, so $3n = 99$ and $n = 33$. This is a whole number, so yes:
100 matchsticks make exactly 33 squares. (1 mark for the equation, 1 mark for
the conclusion.)
