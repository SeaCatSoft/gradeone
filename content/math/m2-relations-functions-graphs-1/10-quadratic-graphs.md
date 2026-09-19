---
subject: MATH
topic: relations-functions-graphs-1
lesson: quadratic-graphs
title: Graphs of Quadratic Functions
objectives: ["3.15", "3.16", "3.17"]
est_minutes: 20
status: draft
source: Original prose written against Module 2 syllabus objectives 3.15 (draw the graph of a quadratic function; still flagged for review), 3.16 (use the graph to identify its features) and 3.17 (interpret the graph; still flagged for review). NOT YET checked against textbook for depth.
---

## Lesson

The graph of a quadratic function $y = ax^2 + bx + c$ is a smooth, symmetrical
curve called a **parabola**.

- If $a > 0$, it's **U-shaped**, with a **minimum** point.
- If $a < 0$, it's **∩-shaped**, with a **maximum** point.

### Drawing the graph

Make a table of values, working out each term separately:

| $x$ | $-2$ | $-1$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|
| $x^2$ | 4 | 1 | 0 | 1 | 4 | 9 | 16 |
| $-2x$ | 4 | 2 | 0 | $-2$ | $-4$ | $-6$ | $-8$ |
| $-3$ | $-3$ | $-3$ | $-3$ | $-3$ | $-3$ | $-3$ | $-3$ |
| $y = x^2 - 2x - 3$ | 5 | 0 | $-3$ | $-4$ | $-3$ | 0 | 5 |

<svg viewBox="0 0 232 326" role="img" aria-label="The parabola y = x squared minus 2x minus 3, crossing the x-axis at -1 and 3, with its lowest point at (1, -4)">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.3">
    <line x1="25" y1="306" x2="25" y2="20"/>
    <line x1="51" y1="306" x2="51" y2="20"/>
    <line x1="77" y1="306" x2="77" y2="20"/>
    <line x1="103" y1="306" x2="103" y2="20"/>
    <line x1="129" y1="306" x2="129" y2="20"/>
    <line x1="155" y1="306" x2="155" y2="20"/>
    <line x1="181" y1="306" x2="181" y2="20"/>
    <line x1="207" y1="306" x2="207" y2="20"/>
    <line x1="25" y1="306" x2="207" y2="306"/>
    <line x1="25" y1="280" x2="207" y2="280"/>
    <line x1="25" y1="254" x2="207" y2="254"/>
    <line x1="25" y1="228" x2="207" y2="228"/>
    <line x1="25" y1="202" x2="207" y2="202"/>
    <line x1="25" y1="176" x2="207" y2="176"/>
    <line x1="25" y1="150" x2="207" y2="150"/>
    <line x1="25" y1="124" x2="207" y2="124"/>
    <line x1="25" y1="98" x2="207" y2="98"/>
    <line x1="25" y1="72" x2="207" y2="72"/>
    <line x1="25" y1="46" x2="207" y2="46"/>
    <line x1="25" y1="20" x2="207" y2="20"/>
  </g>
  <line x1="25" y1="176" x2="207" y2="176" stroke="currentColor" stroke-width="1.5"/>
  <line x1="77" y1="306" x2="77" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="25" y="189">-2</text>
    <text x="51" y="189">-1</text>
    <text x="103" y="189">1</text>
    <text x="129" y="189">2</text>
    <text x="155" y="189">3</text>
    <text x="181" y="189">4</text>
    <text x="207" y="189">5</text>
    <text x="69" y="309.5">-5</text>
    <text x="69" y="283.5">-4</text>
    <text x="69" y="257.5">-3</text>
    <text x="69" y="231.5">-2</text>
    <text x="69" y="205.5">-1</text>
    <text x="69" y="153.5">1</text>
    <text x="69" y="127.5">2</text>
    <text x="69" y="101.5">3</text>
    <text x="69" y="75.5">4</text>
    <text x="69" y="49.5">5</text>
    <text x="69" y="23.5">6</text>
    <text x="219" y="180">x</text>
    <text x="77" y="14">y</text>
  </g>
  <path d="M 25.0 46.0 L 35.0 102.2 L 45.0 150.7 L 55.0 191.5 L 65.0 224.6 L 70.0 238.2 L 75.0 250.0 L 80.1 259.8 L 85.1 267.6 L 90.1 273.6 L 95.1 277.6 L 100.1 279.7 L 105.1 279.8 L 110.1 278.1 L 115.1 274.4 L 120.1 268.8 L 125.1 261.2 L 130.1 251.7 L 135.1 240.3 L 140.1 227.0 L 145.1 211.8 L 155.1 175.5 L 165.1 131.5 L 175.2 79.8 L 185.2 20.4" fill="none" stroke="currentColor" stroke-width="2.2"/>
  <circle cx="51.0" cy="176.0" r="4" fill="currentColor"/>
  <circle cx="155.0" cy="176.0" r="4" fill="currentColor"/>
  <circle cx="103.0" cy="280.0" r="4" fill="currentColor"/>
</svg>

Join the points with a **smooth curve**, not straight segments, and don't flatten
the bottom into a point. The curve is rounded at its turning point.

Watch negatives: $x^2$ is always positive, so with $x = -2$, $x^2 = 4$, not $-4$.

### Features to read from the graph

| Feature | What it is | For $y = x^2 - 2x - 3$ |
|---|---|---|
| **Roots** ($x$-intercepts) | where $y = 0$ | $x = -1$ and $x = 3$ |
| **$y$-intercept** | where $x = 0$ (it's $c$) | $-3$ |
| **Turning point** (vertex) | the minimum or maximum point | $(1, -4)$ |
| **Axis of symmetry** | the vertical line through the turning point | $x = 1$ |
| **Minimum value** | the $y$-coordinate of the minimum point | $-4$ |

The axis of symmetry lies exactly **halfway between the roots**:
$\frac{-1 + 3}{2} = 1$. The table shows the symmetry too: the $y$ values repeat
either side of $x = 1$.

### Solving equations from the graph

The roots of $x^2 - 2x - 3 = 0$ are where the graph crosses the $x$-axis: $-1$
and $3$.

To solve $x^2 - 2x - 3 = 5$, find where the curve meets the horizontal line
$y = 5$: at $x = -2$ and $x = 4$.

### Interpreting a graph in context

If a ball's height is $h = 20t - 5t^2$ metres after $t$ seconds, the graph is
∩-shaped. The **maximum point** gives the greatest height and when it happens;
the **roots** give when the ball is at ground level (leaving and landing).

## Flashcards

### 3.16 | What shape is the graph of $y = ax^2 + bx + c$ when $a$ is negative?
∩-shaped, with a **maximum** point.

### 3.16 | Where are the roots on the graph of a quadratic?
Where the curve crosses the $x$-axis ($y = 0$).

### 3.16 | How is the axis of symmetry related to the roots?
It lies halfway between them: $x = \frac{x_1 + x_2}{2}$.

### 3.15 | How should the points of a quadratic graph be joined?
With a **smooth curve**, rounded at the turning point — not with straight lines.

### 3.17 | How would you solve $x^2 - 2x - 3 = 5$ using the graph of $y = x^2 - 2x - 3$?
Draw the line $y = 5$ and read the $x$-coordinates where it meets the curve.

## Questions

### 3.15 | numeric | 1 mark | difficulty 1
For $y = x^2 - 4x + 1$, find the value of $y$ when $x = -1$.

**Answer:** 6

**Working:** $(-1)^2 - 4(-1) + 1 = 1 + 4 + 1 = 6$.

### 3.16 | mcq | 1 mark | difficulty 2
A quadratic graph crosses the $x$-axis at $x = -3$ and $x = 5$. What is the
equation of its axis of symmetry?

- A. $x = 1$
- B. $x = 2$
- C. $x = 4$
- D. $x = 8$

**Answer:** A

**Working:** Halfway between the roots: $\frac{-3 + 5}{2} = 1$.

### 3.16 | mcq | 1 mark | difficulty 2
Which statement about the graph of $y = 6 + x - x^2$ is true?

- A. It has a minimum point.
- B. It crosses the $y$-axis at $-6$.
- C. It has a maximum point.
- D. It does not cross the $x$-axis.

**Answer:** C

**Working:** The coefficient of $x^2$ is $-1$, which is negative, so the
parabola is ∩-shaped with a maximum. It crosses the $y$-axis at 6, and it does
cross the $x$-axis (at $-2$ and $3$).

### 3.17 | structured | 6 marks | difficulty 3
(a) Copy and complete the table for $y = x^2 - 4x + 3$. **(2 marks)**

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $y$ | | | | | |

(b) Draw the graph for $0 \leq x \leq 4$. **(2 marks)**

(c) From your graph, state the roots of $x^2 - 4x + 3 = 0$ and the coordinates of
the minimum point. **(2 marks)**

**Answer:** (a) $3, 0, -1, 0, 3$ (b) A U-shaped parabola through those points
(c) Roots $x = 1$ and $x = 3$; minimum point $(2, -1)$

**Working:** (c) The roots are where $y = 0$. The minimum is halfway between
them, at $x = 2$, where $y = -1$.
