---
subject: MATH
topic: relations-functions-graphs-2
lesson: inequalities-on-graphs
title: Inequalities on Graphs
objectives: ["2.1", "2.2"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objectives 2.1 (draw a graph to represent a linear inequality in two variables) and 2.2 (represent the solution of linear inequalities in one variable). Solving inequalities algebraically is in Module 1 Algebra 1 lesson 9. NOT YET checked against textbook for depth.
---

## Lesson

### One variable: the number line

The solution of an inequality in one variable is a range, shown on a number
line with an **open circle** for $<$ or $>$ and a **filled circle** for $\leq$
or $\geq$ (Module 1, Algebra 1).

Two inequalities can be combined: $-2 \leq x < 5$ is shown as a line between a
filled circle at $-2$ and an open circle at 5.

### Two variables: regions

An inequality like $y \geq 2x + 1$ is satisfied not by a set of points on a
line, but by a whole **region** of the plane.

To draw it:

1. **Draw the boundary line** from the matching equation ($y = 2x + 1$).
   - Use a **solid** line for $\leq$ or $\geq$ — points on the line count.
   - Use a **broken (dashed)** line for $<$ or $>$ — they don't.
2. **Decide which side** satisfies the inequality.
3. **Shade** it — but read the question: CSEC often asks you to shade the region
   **not** required, so the answer region stays clear. Always add a label or a
   key saying which is which.

### Choosing the side: the test point

Pick any point **not on the line** — $(0, 0)$ is easiest when the line doesn't
pass through it — and substitute.

> Which side satisfies $y \geq 2x + 1$?

At $(0, 0)$: is $0 \geq 2(0) + 1$? Is $0 \geq 1$? **No.** So $(0, 0)$ is on the
wrong side, and the region is the other one — above the line.

For simple forms you can read it off: $y >$ means **above** the line, $y <$
means **below**, $x > a$ means **right** of the vertical line $x = a$.

### Several inequalities at once

A set of inequalities defines the region satisfying **all** of them at the same
time. Draw each boundary, decide each side, and the answer is the overlap —
often a triangle or quadrilateral.

> $x \geq 0$, $y \geq 0$, $x + y \leq 6$

The first two restrict you to the top-right quarter of the plane; the third
cuts it with the line through $(6, 0)$ and $(0, 6)$. The region is the triangle
with vertices $(0, 0)$, $(6, 0)$ and $(0, 6)$.

Points **on** a solid boundary are included; a **vertex** of the region belongs to
it when both boundaries there are solid.

## Flashcards

### 2.1 | When is the boundary line of a region drawn broken rather than solid?
For strict inequalities, $<$ and $>$, where points on the line are **not**
included.

### 2.1 | How do you decide which side of the line to shade?
Test a point not on the line, such as $(0, 0)$, in the inequality.

### 2.1 | Which region does $y < 3x$ describe?
The region **below** the line $y = 3x$.

### 2.1 | What does a set of several inequalities define?
The **overlap** — the region satisfying all of them at once.

### 2.2 | What do the inequalities $x \geq 0$ and $y \geq 0$ restrict you to?
The first quadrant: the top-right quarter of the plane, including the axes.

## Questions

### 2.1 | mcq | 1 mark | difficulty 1
The region $y > x + 2$ is drawn. Which describes its boundary?

- A. A solid line, shaded above
- B. A broken line, shaded above
- C. A solid line, shaded below
- D. A broken line, shaded below

**Answer:** B

**Working:** $>$ is strict, so the line is broken, and $y >$ means the region
above the line.

### 2.1 | mcq | 1 mark | difficulty 2
Does the point $(1, 4)$ satisfy $2x + y \leq 6$?

- A. Yes, because $6 \leq 6$
- B. No, because $6 > 6$
- C. Yes, because $5 \leq 6$
- D. No, because the point is on the line

**Answer:** A

**Working:** $2(1) + 4 = 6$, and $6 \leq 6$ is true, so the point satisfies the
inequality. It lies **on** the boundary, which a $\leq$ includes.

### 2.2 | numeric | 1 mark | difficulty 2
How many integers satisfy both $x > -3$ and $x \leq 2$?

**Answer:** 5

**Working:** $-2, -1, 0, 1, 2$.

### 2.1 | structured | 5 marks | difficulty 3
A region $R$ is defined by $x \geq 1$, $y \geq 0$ and $x + y \leq 5$.

(a) Draw the three boundary lines on axes from 0 to 6. **(2 marks)**

(b) State the coordinates of the three vertices of $R$. **(2 marks)**

(c) State whether the point $(3, 3)$ lies in $R$. **(1 mark)**

**Answer:** (a) The lines $x = 1$, $y = 0$ and $x + y = 5$ (b) $(1, 0)$, $(5, 0)$
and $(1, 4)$ (c) No

**Working:** (b) $x = 1$ meets $y = 0$ at $(1, 0)$; $x + y = 5$ meets $y = 0$ at
$(5, 0)$; $x = 1$ meets $x + y = 5$ at $(1, 4)$.

(c) $3 + 3 = 6$, which is more than 5, so $(3, 3)$ is outside $R$.
