---
subject: MATH
topic: relations-functions-graphs-1
lesson: simultaneous-graphically
title: Solving Simultaneous Equations Graphically
objectives: ["3.10"]
est_minutes: 14
status: draft
source: Original prose written against Module 2 syllabus objective 3.10 ("solve a pair of simultaneous linear equations in two unknowns graphically"). The algebraic methods are in Algebra 2. NOT YET checked against textbook for depth.
---

## Lesson

Each linear equation in $x$ and $y$ is a straight line: every point on the line
satisfies that equation. A point that satisfies **both** equations must lie on
**both** lines — so it's where they **cross**.

> The solution of a pair of simultaneous equations is the **point of
> intersection** of their graphs.

### The method

1. Make a table of values for each equation (three points each).
2. Draw both lines on the **same** axes.
3. Read off the coordinates where they cross.
4. Check by substituting into both equations.

> Solve $y = x + 1$ and $y = 5 - x$ graphically.

| $x$ | 0 | 2 | 4 |
|---|---|---|---|
| $y = x + 1$ | 1 | 3 | 5 |
| $y = 5 - x$ | 5 | 3 | 1 |

<svg viewBox="0 0 260 280" role="img" aria-label="Two straight lines, y = x + 1 and y = 5 - x, crossing at the point (2, 3)">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="25" y1="260" x2="25" y2="20"/>
    <line x1="55" y1="260" x2="55" y2="20"/>
    <line x1="85" y1="260" x2="85" y2="20"/>
    <line x1="115" y1="260" x2="115" y2="20"/>
    <line x1="145" y1="260" x2="145" y2="20"/>
    <line x1="175" y1="260" x2="175" y2="20"/>
    <line x1="205" y1="260" x2="205" y2="20"/>
    <line x1="235" y1="260" x2="235" y2="20"/>
    <line x1="25" y1="260" x2="235" y2="260"/>
    <line x1="25" y1="230" x2="235" y2="230"/>
    <line x1="25" y1="200" x2="235" y2="200"/>
    <line x1="25" y1="170" x2="235" y2="170"/>
    <line x1="25" y1="140" x2="235" y2="140"/>
    <line x1="25" y1="110" x2="235" y2="110"/>
    <line x1="25" y1="80" x2="235" y2="80"/>
    <line x1="25" y1="50" x2="235" y2="50"/>
    <line x1="25" y1="20" x2="235" y2="20"/>
  </g>
  <line x1="25" y1="230" x2="235" y2="230" stroke="currentColor" stroke-width="1.5"/>
  <line x1="55" y1="260" x2="55" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="25" y="243">-1</text>
    <text x="85" y="243">1</text>
    <text x="115" y="243">2</text>
    <text x="145" y="243">3</text>
    <text x="175" y="243">4</text>
    <text x="205" y="243">5</text>
    <text x="235" y="243">6</text>
    <text x="47" y="263.5">-1</text>
    <text x="47" y="203.5">1</text>
    <text x="47" y="173.5">2</text>
    <text x="47" y="143.5">3</text>
    <text x="47" y="113.5">4</text>
    <text x="47" y="83.5">5</text>
    <text x="47" y="53.5">6</text>
    <text x="47" y="23.5">7</text>
    <text x="247" y="234">x</text>
    <text x="55" y="14">y</text>
  </g>
  <path d="M 25.0 230.0 L 235.0 20.0" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <text x="239" y="14" font-size="11" fill="currentColor" text-anchor="end">y = x + 1</text>
  <path d="M 25.0 50.0 L 235.0 260.0" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <text x="239" y="254" font-size="11" fill="currentColor" text-anchor="end">y = 5 − x</text>
  <circle cx="115.0" cy="140.0" r="4" fill="currentColor"/>
</svg>

The lines cross at $(2, 3)$, so $x = 2$, $y = 3$.

Check: $2 + 1 = 3$ ✓ and $5 - 2 = 3$ ✓.

(Here the table itself showed $x = 2$ giving $y = 3$ in both rows — a lucky
shortcut you won't always get.)

### Equations not in $y = \ldots$ form

For $2x + y = 8$, the quickest two points are the intercepts: $x = 0$ gives
$y = 8$; $y = 0$ gives $x = 4$. Plot $(0, 8)$ and $(4, 0)$, add a third point to
check, and rule the line.

### Limits of the graphical method

A graph can only be read as accurately as its scale allows. If the lines cross
between grid lines — at $x = 1.4$, say — your reading is an **estimate**. That's
why the algebraic methods exist; graphical answers are accepted within a small
margin.

Two special cases:

- **Parallel lines** (equal gradients) never cross: **no solution**.
- If both equations give the **same line**, every point on it is a solution.

## Flashcards

### 3.10 | How do you solve simultaneous equations graphically?
Draw both lines on the same axes and read off their **point of intersection**.

### 3.10 | What does it mean if the two lines are parallel?
There is **no solution**: the lines never meet.

### 3.10 | Why might a graphical solution be only approximate?
The crossing point may lie between grid lines, so it has to be estimated.

### 3.10 | What are the quickest two points to plot for $3x + 2y = 12$?
The intercepts: $(0, 6)$ and $(4, 0)$.

## Questions

### 3.10 | mcq | 1 mark | difficulty 1
The graphs of two linear equations cross at $(3, -1)$. What is the solution of
the pair of equations?

- A. $x = -1$, $y = 3$
- B. $x = 3$, $y = -1$
- C. $x = 3$, $y = 3$
- D. There is no solution

**Answer:** B

**Working:** The point of intersection $(x, y) = (3, -1)$ gives $x = 3$, $y = -1$.

### 3.10 | mcq | 1 mark | difficulty 2
How many solutions do $y = 2x + 3$ and $y = 2x - 1$ have?

- A. None
- B. One
- C. Two
- D. Infinitely many

**Answer:** A

**Working:** Both lines have gradient 2, so they're parallel and never cross.

### 3.10 | mcq | 1 mark | difficulty 2
At which point do the lines $y = 3x$ and $y = x + 4$ intersect?

- A. $(1, 3)$
- B. $(2, 6)$
- C. $(4, 8)$
- D. $(2, 4)$

**Answer:** B

**Working:** $3x = x + 4$ gives $x = 2$, and $y = 3(2) = 6$. Check in the other
equation: $2 + 4 = 6$. ✓

### 3.10 | structured | 5 marks | difficulty 3
(a) Complete the tables of values. **(2 marks)**

| $x$ | 0 | 1 | 3 |
|---|---|---|---|
| $y = 2x - 1$ | | | |
| $y = 7 - 2x$ | | | |

(b) Draw both lines on the same axes for $0 \leq x \leq 3$. **(2 marks)**

(c) Use your graph to solve $2x - 1 = 7 - 2x$. **(1 mark)**

**Answer:** (a) $-1, 1, 5$ and $7, 5, 1$ (b) Two straight lines crossing at
$(2, 3)$ (c) $x = 2$

**Working:** (c) The solution of $2x - 1 = 7 - 2x$ is the $x$-coordinate where
the two lines cross. Algebraically: $4x = 8$, so $x = 2$. ✓
