---
subject: MATH
topic: relations-functions-graphs-1
lesson: quadratics-vertex-form
title: Quadratics in the Form a(x + h)² + k
objectives: ["3.18", "3.19"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objectives 3.18 (axis of symmetry and maximum or minimum value of a quadratic expressed as a(x + h)^2 + k) and 3.19 (sketch the graph of such a quadratic and determine the number of roots). Both are still flagged for review, having lost symbols in extraction. Completing the square itself is taught in Algebra 2 lesson 4. NOT YET checked against textbook for depth.
---

## Lesson

Completing the square (Algebra 2) rewrites a quadratic as

$$y = a(x + h)^2 + k$$

In this form, the key features can be **read straight off** — no table needed.

### Reading the features

- **Turning point:** $(-h,\ k)$
- **Axis of symmetry:** $x = -h$
- **Minimum or maximum value:** $k$
  - minimum if $a > 0$ (U-shape)
  - maximum if $a < 0$ (∩-shape)

Note the sign change for the $x$-coordinate. In $y = (x - 3)^2 + 2$, $h = -3$, so
the turning point is at $x = 3$, not $-3$.

Why it works: $(x - 3)^2$ is never negative, and is 0 only when $x = 3$. So the
smallest $y$ can be is $0 + 2 = 2$, and that happens at $x = 3$.

| Function | Turning point | Axis | Max/min |
|---|---|---|---|
| $y = (x - 3)^2 + 2$ | $(3, 2)$ | $x = 3$ | minimum 2 |
| $y = 2(x + 1)^2 - 8$ | $(-1, -8)$ | $x = -1$ | minimum $-8$ |
| $y = -(x - 4)^2 + 5$ | $(4, 5)$ | $x = 4$ | maximum 5 |

### How many roots?

Once you know the turning point and which way the curve opens, you can see
whether it crosses the $x$-axis:

| Shape | Turning point | Roots |
|---|---|---|
| U (min) | **below** the $x$-axis ($k < 0$) | **two** |
| U (min) | **on** the $x$-axis ($k = 0$) | **one** (repeated) |
| U (min) | **above** the $x$-axis ($k > 0$) | **none** |
| ∩ (max) | above the axis | two |
| ∩ (max) | below the axis | none |

So $y = (x - 3)^2 + 2$ has **no** real roots — its lowest point is already above
the axis. $y = 2(x + 1)^2 - 8$ has **two**.

### Sketching

A **sketch** shows the shape and key points, not an accurate plot. Mark:

1. the **turning point**
2. the **$y$-intercept** (put $x = 0$)
3. the **roots**, if any (solve $y = 0$)

For $y = 2(x + 1)^2 - 8$: turning point $(-1, -8)$; $y$-intercept
$2(1)^2 - 8 = -6$; roots from $2(x + 1)^2 = 8$, so $(x + 1)^2 = 4$, $x + 1 = \pm 2$,
giving $x = 1$ and $x = -3$.

## Flashcards

### 3.18 | What is the turning point of $y = a(x + h)^2 + k$?
$(-h,\ k)$.

### 3.18 | What is the turning point of $y = (x - 5)^2 + 1$?
$(5, 1)$ — a minimum.

### 3.18 | Is $y = -(x + 2)^2 + 7$ a maximum or a minimum, and of what value?
A **maximum** of 7, at $x = -2$. The negative $a$ makes it ∩-shaped.

### 3.19 | How many roots does $y = (x - 1)^2 + 4$ have?
None. Its minimum, 4, is above the $x$-axis.

### 3.19 | Which three things should a sketch of a quadratic show?
The turning point, the $y$-intercept, and any roots.

## Questions

### 3.18 | mcq | 1 mark | difficulty 1
What are the coordinates of the minimum point of $y = (x + 4)^2 - 9$?

- A. $(4, -9)$
- B. $(-4, -9)$
- C. $(-4, 9)$
- D. $(9, -4)$

**Answer:** B

**Working:** $h = 4$, so the turning point is $(-4, -9)$. A forgets the sign
change.

### 3.18 | numeric | 1 mark | difficulty 2
State the maximum value of $y = 10 - 3(x - 2)^2$.

**Answer:** 10

**Working:** $-3(x - 2)^2$ is never positive, and is 0 when $x = 2$. So the
greatest value of $y$ is 10.

### 3.19 | mcq | 1 mark | difficulty 2
How many real roots does $y = 2(x - 1)^2 + 3$ have?

- A. 0
- B. 1
- C. 2
- D. 3

**Answer:** A

**Working:** The graph is U-shaped with its minimum at $(1, 3)$, above the
$x$-axis, so it never crosses it.

### 3.19 | structured | 5 marks | difficulty 4
$f(x) = x^2 - 6x + 5$.

(a) Express $f(x)$ in the form $(x + h)^2 + k$. **(2 marks)**

(b) State the coordinates of the turning point and the equation of the axis of
symmetry. **(2 marks)**

(c) State the number of roots of $f(x) = 0$, and find them. **(1 mark)**

**Answer:** (a) $(x - 3)^2 - 4$ (b) $(3, -4)$; $x = 3$ (c) Two: $x = 1$ and
$x = 5$

**Working:** (a) $(x - 3)^2 - 9 + 5 = (x - 3)^2 - 4$.

(c) The minimum is below the axis, so there are two roots.
$(x - 3)^2 = 4$, so $x - 3 = \pm 2$: $x = 5$ or $x = 1$.
