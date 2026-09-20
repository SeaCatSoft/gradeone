---
subject: MATH
topic: relations-functions-graphs-2
lesson: graph-problems
title: Problems with Linear and Non-Linear Graphs
objectives: ["2.6"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objective 2.6 ("solve problems involving graphs of linear and non-linear functions"). Covers solving equations from graphs, intersections, and reading rates of change. NOT YET checked against textbook for depth.
---

## Lesson

### Solving equations with a graph

A drawn curve can solve many equations, not just the one it was drawn from.
The trick is to rearrange the equation you want so that one side is the
**function already plotted**.

> You have drawn $y = x^2 - 3x$. Solve $x^2 - 3x = 2$.

Draw the line $y = 2$ and read the $x$-coordinates where it meets the curve.

> Using the same curve, solve $x^2 - 4x + 1 = 0$.

Rearrange so the left side matches the curve:

$$x^2 - 4x + 1 = 0 \;\Rightarrow\; x^2 - 3x = x - 1$$

So draw the **line** $y = x - 1$; the solutions are the $x$-coordinates where it
crosses the curve.

The method: get the plotted expression alone on one side; whatever is left is
the line to draw.

### Intersections of two graphs

Where two graphs cross, both equations are satisfied. This is how a graph
solves a linear–quadratic pair (Algebra 2), and it shows at a glance whether
there are two solutions, one, or none.

### Rates of change from a curve

On a **straight** graph, the gradient is constant — a steady rate.

On a **curve**, the steepness changes, so the rate changes. The gradient at a
point is found by drawing a **tangent** — a straight line just touching the
curve there — and finding the tangent's gradient.

> On a distance–time curve, the gradient of the tangent gives the speed at
> **that instant**.

Estimating with a tangent is approximate: a small error in the line makes a
noticeable difference. Draw it as long as the grid allows, and use two points
far apart to calculate its gradient.

### Real-world curves

The same reading skills apply to any context:

- A **maximum** or **minimum** answers "greatest" or "least" questions — maximum
  height, minimum cost.
- The **intercepts** often mark a start or an end: the height at $t = 0$, or the
  moment a quantity reaches zero.
- A **flattening** curve means the rate is slowing.

Always check the **units** on the axes before quoting a value.

## Flashcards

### 2.6 | To solve $f(x) = k$ from a graph of $y = f(x)$, what do you draw?
The horizontal line $y = k$, and read the $x$-values where it meets the curve.

### 2.6 | How do you find the gradient of a curve at a point?
Draw a **tangent** at that point and find the gradient of the tangent.

### 2.6 | What does the gradient of a tangent to a distance–time curve represent?
The speed at that instant.

### 2.6 | What do the points of intersection of two graphs represent?
The solutions that satisfy both equations at once.

### 2.6 | You have the graph of $y = x^2 + x$. Which line solves $x^2 + x = 2x + 3$?
$y = 2x + 3$.

## Questions

### 2.6 | mcq | 1 mark | difficulty 2
The graph of $y = x^2 - 2x$ is drawn. Which line should be drawn to solve
$x^2 - 2x - 5 = 0$?

- A. $y = 5$
- B. $y = -5$
- C. $y = 2x + 5$
- D. $y = x - 5$

**Answer:** A

**Working:** $x^2 - 2x - 5 = 0$ rearranges to $x^2 - 2x = 5$. The left side is
the plotted curve, so draw $y = 5$.

### 2.6 | mcq | 1 mark | difficulty 3
The graph of $y = x^2$ is drawn. Which line solves $x^2 - 3x + 2 = 0$?

- A. $y = 3x - 2$
- B. $y = 3x + 2$
- C. $y = 2 - 3x$
- D. $y = x^2 - 2$

**Answer:** A

**Working:** $x^2 - 3x + 2 = 0$ rearranges to $x^2 = 3x - 2$. Draw the line
$y = 3x - 2$; it meets the curve at $x = 1$ and $x = 2$.

### 2.6 | numeric | 1 mark | difficulty 2
A tangent drawn to a distance–time curve passes through $(2, 10)$ and $(6, 50)$,
with distance in metres and time in seconds. What is the speed at that instant,
in m/s?

**Answer:** 10

**Working:** Gradient $= \dfrac{50 - 10}{6 - 2} = \dfrac{40}{4} = 10$ m/s.

### 2.6 | structured | 5 marks | difficulty 3
The height of a ball, $h$ metres after $t$ seconds, is $h = 20t - 5t^2$.

(a) Complete the table. **(2 marks)**

| $t$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $h$ | | | | | |

(b) State the maximum height and when it occurs. **(2 marks)**

(c) For how long is the ball at least 15 m above the ground? **(1 mark)**

**Answer:** (a) 0, 15, 20, 15, 0 (b) 20 m at $t = 2$ s (c) 2 seconds

**Working:** (b) The values are symmetrical about $t = 2$, where $h = 20$.

(c) $h = 15$ at $t = 1$ and $t = 3$, so the ball is 15 m or higher between
those times: $3 - 1 = 2$ seconds.
