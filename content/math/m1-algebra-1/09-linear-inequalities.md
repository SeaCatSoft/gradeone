---
subject: MATH
topic: algebra-1
lesson: linear-inequalities
title: Linear Inequalities
objectives: ["5.11"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objective 5.11 ("solve a simple linear inequality in one unknown"). Includes number-line representation and integer solutions. NOT YET checked against textbook for depth.
---

## Lesson

An **inequality** compares two expressions using $<$, $>$, $\leq$ or $\geq$. Its
solution is usually not one number but a whole **range** of them.

$x > 3$ means every number bigger than 3: 3.1, 4, 50, and so on — but not 3
itself. $x \geq 3$ includes 3.

### Showing a solution on a number line

- An **open circle** means the end number is **not** included ($<$ or $>$).
- A **filled circle** means it **is** included ($\leq$ or $\geq$).
- The arrow shows which way the solution goes.

<svg viewBox="0 0 320 110" role="img" aria-label="Two number lines. The first shows x greater than 1 with an open circle at 1 and an arrow to the right. The second shows x less than or equal to minus 1 with a filled circle at minus 1 and an arrow to the left.">
  <g stroke="currentColor" stroke-width="1.3" fill="none">
    <line x1="20" y1="35" x2="300" y2="35"/>
    <line x1="20" y1="85" x2="300" y2="85"/>
  </g>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="60" y="52">-2</text><text x="110" y="52">-1</text><text x="160" y="52">0</text><text x="210" y="52">1</text><text x="260" y="52">2</text>
    <text x="60" y="102">-2</text><text x="110" y="102">-1</text><text x="160" y="102">0</text><text x="210" y="102">1</text><text x="260" y="102">2</text>
  </g>
  <circle cx="210" cy="35" r="5" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="215" y1="35" x2="295" y2="35" stroke="currentColor" stroke-width="3.5"/>
  <text x="300" y="20" font-size="12" fill="currentColor" text-anchor="end">x &gt; 1</text>
  <circle cx="110" cy="85" r="5" fill="currentColor"/>
  <line x1="25" y1="85" x2="110" y2="85" stroke="currentColor" stroke-width="3.5"/>
  <text x="20" y="70" font-size="12" fill="currentColor">x ≤ −1</text>
</svg>

### Solving

Solve an inequality the same way as an equation — do the same thing to both
sides — with **one** extra rule:

> **Multiplying or dividing both sides by a negative number reverses the
> inequality sign.**

Why? $2 < 5$ is true. Multiply both sides by $-1$: $-2$ and $-5$. But
$-2 > -5$. The order has flipped, so the sign must too.

$$
\begin{aligned}
3x - 4 &< 11 \\
3x &< 15 \\
x &< 5
\end{aligned}
$$

Now with a negative:

$$
\begin{aligned}
7 - 2x &\geq 1 \\
-2x &\geq -6 &&\text{subtract 7} \\
x &\leq 3 &&\text{divide by } -2 \text{: the sign flips}
\end{aligned}
$$

Check with a value in your answer, say $x = 0$: $7 - 0 = 7 \geq 1$. ✓ And one
outside it, $x = 4$: $7 - 8 = -1$, which is not $\geq 1$. ✓

You can avoid dividing by a negative by moving the $x$ term to the other side
instead: $7 - 1 \geq 2x$, so $3 \geq x$ — the same answer.

### Integer solutions

Sometimes you're asked for the **integers** (whole numbers, positive or
negative) that satisfy an inequality.

$-2 < x \leq 3$ has integer solutions $\{-1, 0, 1, 2, 3\}$. Not $-2$ (the $<$
excludes it), but $3$ is included.

## Flashcards

### 5.11 | When does an inequality sign reverse?
When you **multiply or divide both sides by a negative number**.

### 5.11 | On a number line, what does an open circle mean?
The end value is **not** included: the sign is $<$ or $>$.

### 5.11 | Solve $2x + 3 > 11$.
$x > 4$.

### 5.11 | Solve $-3x \leq 12$.
$x \geq -4$. Dividing by $-3$ reverses the sign.

### 5.11 | List the integers that satisfy $-1 \leq x < 3$.
$\{-1, 0, 1, 2\}$.

## Questions

### 5.11 | mcq | 1 mark | difficulty 1
Solve $5x - 2 \geq 13$.

- A. $x \geq 3$
- B. $x \leq 3$
- C. $x \geq 2.2$
- D. $x > 3$

**Answer:** A

**Working:** $5x \geq 15$, so $x \geq 3$. The sign stays as it is, because we
divided by a positive number.

### 5.11 | mcq | 1 mark | difficulty 2
Solve $10 - 4x > 2$.

- A. $x > 2$
- B. $x < 2$
- C. $x > -2$
- D. $x < -2$

**Answer:** B

**Working:** $-4x > -8$. Dividing by $-4$ reverses the sign: $x < 2$.

A forgets to reverse the sign.

### 5.11 | numeric | 1 mark | difficulty 2
What is the largest integer that satisfies $3x + 1 < 20$?

**Answer:** 6

**Working:** $3x < 19$, so $x < 6.33\ldots$ The largest integer below 6.33 is 6.

### 5.11 | numeric | 1 mark | difficulty 3
How many integers satisfy $-3 < 2x + 1 \leq 9$?

**Answer:** 6

**Working:** Subtract 1 throughout: $-4 < 2x \leq 8$. Divide by 2:
$-2 < x \leq 4$.

The integers are $-1, 0, 1, 2, 3, 4$: six of them.

### 5.11 | structured | 4 marks | difficulty 3
(a) Solve the inequality $4(x - 2) \leq 2x + 3$. **(2 marks)**

(b) Show your solution on a number line. **(1 mark)**

(c) List the positive integers that satisfy the inequality. **(1 mark)**

**Answer:** (a) $x \leq 5.5$ (b) a filled circle at 5.5 with the line going
left (c) $\{1, 2, 3, 4, 5\}$

**Working:** (a) $4x - 8 \leq 2x + 3$, so $2x \leq 11$ (1 mark) and $x \leq 5.5$
(1 mark).

(b) The circle is filled because 5.5 is included ($\leq$).

(c) Positive integers up to 5.5: 1, 2, 3, 4 and 5.
