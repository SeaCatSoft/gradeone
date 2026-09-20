---
subject: MATH
topic: algebra-2
lesson: completing-the-square
title: Completing the Square
objectives: ["2.4"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objective 2.4 ("rewrite a quadratic expression in the form a(x + h)^2 + k"). NOT YET checked against textbook for depth.
---

## Lesson

Any quadratic $ax^2 + bx + c$ can be rewritten as

$$a(x + h)^2 + k$$

This is called **completing the square**. It is the key to solving quadratics
that don't factorise, and it shows straight away the lowest (or highest) point
of the graph — which the functions topic relies on.

### When $a = 1$

Start from a perfect square and see what it expands to:

$$(x + 3)^2 = x^2 + 6x + 9$$

The number in the bracket, 3, is **half** the coefficient of $x$, 6. So to
rewrite $x^2 + 6x + 11$:

1. Halve the coefficient of $x$: $6 \div 2 = 3$. Write $(x + 3)^2$.
2. That bracket brings an extra $3^2 = 9$ with it, so subtract 9.
3. Add the original constant.

$$x^2 + 6x + 11 = (x + 3)^2 - 9 + 11 = (x + 3)^2 + 2$$

Here $h = 3$ and $k = 2$.

With a negative coefficient: $x^2 - 10x + 4$. Half of $-10$ is $-5$:

$$x^2 - 10x + 4 = (x - 5)^2 - 25 + 4 = (x - 5)^2 - 21$$

An odd coefficient gives a fraction: $x^2 + 3x = \left(x + \frac{3}{2}\right)^2 - \frac{9}{4}$.

### When $a \neq 1$

Take $a$ out as a factor of the $x^2$ and $x$ terms first.

> Write $2x^2 - 8x + 3$ in the form $a(x + h)^2 + k$.

$$
\begin{aligned}
2x^2 - 8x + 3 &= 2(x^2 - 4x) + 3 \\
&= 2\left[(x - 2)^2 - 4\right] + 3 \\
&= 2(x - 2)^2 - 8 + 3 \\
&= 2(x - 2)^2 - 5
\end{aligned}
$$

So $a = 2$, $h = -2$, $k = -5$.

Watch the step where the square bracket is multiplied out: the $-4$ inside
becomes $-8$, because it's multiplied by the 2 outside.

### Checking

Expand your answer and compare:

$$2(x - 2)^2 - 5 = 2(x^2 - 4x + 4) - 5 = 2x^2 - 8x + 3 \; ✓$$

### Why it's useful

In $2(x - 2)^2 - 5$, the squared bracket can never be negative. Its smallest
value is 0, when $x = 2$. So the whole expression is **smallest** when $x = 2$,
and that smallest value is $-5$. You'll use this for graphs of quadratics.

## Flashcards

### 2.4 | To complete the square on $x^2 + bx + c$, what goes in the bracket?
Half the coefficient of $x$: $\left(x + \frac{b}{2}\right)^2$.

### 2.4 | Complete the square: $x^2 + 8x + 5$.
$(x + 4)^2 - 11$. Half of 8 is 4, and $5 - 16 = -11$.

### 2.4 | Complete the square: $x^2 - 6x$.
$(x - 3)^2 - 9$.

### 2.4 | What is the first step when the coefficient of $x^2$ is not 1?
Take it out as a factor of the $x^2$ and $x$ terms.

### 2.4 | What is the minimum value of $(x - 1)^2 + 7$?
7, when $x = 1$. A square is never negative, so its smallest value is 0.

## Questions

### 2.4 | mcq | 1 mark | difficulty 2
Write $x^2 + 4x + 9$ in the form $(x + h)^2 + k$.

- A. $(x + 2)^2 + 5$
- B. $(x + 2)^2 + 9$
- C. $(x + 4)^2 - 7$
- D. $(x + 2)^2 + 13$

**Answer:** A

**Working:** Half of 4 is 2. $(x + 2)^2 = x^2 + 4x + 4$, so subtract 4:
$(x + 2)^2 - 4 + 9 = (x + 2)^2 + 5$.

D adds the 4 instead of subtracting it.

### 2.4 | mcq | 1 mark | difficulty 2
Write $x^2 - 12x + 30$ in the form $(x + h)^2 + k$.

- A. $(x - 6)^2 + 30$
- B. $(x - 6)^2 - 6$
- C. $(x - 12)^2 - 114$
- D. $(x + 6)^2 - 6$

**Answer:** B

**Working:** Half of $-12$ is $-6$. $(x - 6)^2 = x^2 - 12x + 36$, so
$x^2 - 12x + 30 = (x - 6)^2 - 36 + 30 = (x - 6)^2 - 6$.

### 2.4 | numeric | 1 mark | difficulty 3
$3x^2 + 12x + 7$ is written as $3(x + h)^2 + k$. Find the value of $k$.

**Answer:** -5

**Working:** $3(x^2 + 4x) + 7 = 3[(x + 2)^2 - 4] + 7 = 3(x + 2)^2 - 12 + 7$.
So $k = -5$.

### 2.4 | structured | 4 marks | difficulty 3
(a) Express $2x^2 + 4x - 1$ in the form $a(x + h)^2 + k$. **(3 marks)**

(b) Hence state the minimum value of $2x^2 + 4x - 1$, and the value of $x$ at
which it occurs. **(1 mark)**

**Answer:** (a) $2(x + 1)^2 - 3$ (b) minimum $-3$ when $x = -1$

**Working:** (a) $2(x^2 + 2x) - 1$ (1 mark) $= 2[(x + 1)^2 - 1] - 1$ (1 mark)
$= 2(x + 1)^2 - 3$ (1 mark).

(b) $(x + 1)^2 \geq 0$, with its smallest value 0 when $x = -1$. The minimum
is then $2(0) - 3 = -3$.
