---
subject: MATH
topic: introduction-to-graphs
lesson: drawing-straight-line-graphs
title: Drawing Straight-Line Graphs
objectives: ["6.1"]
est_minutes: 17
status: draft
source: Original prose written against syllabus objective 6.1 ("draw graphs of linear functions"); the extracted text lost its symbols, and the content note is read as functions of the form y = mx + c, where m and c are real numbers. Gradient is introduced informally here; confirm against the printed syllabus how far it is taken in Module 1. NOT YET checked against textbook for depth.
---

## Lesson

### The coordinate plane

A graph is drawn on two number lines that cross at right angles:

- the **$x$-axis** runs across
- the **$y$-axis** runs up
- they cross at the **origin**, $(0, 0)$

Every point has **coordinates** $(x, y)$: first how far **across**, then how
far **up** (or down, if $y$ is negative). The point $(3, -2)$ is 3 right and 2
down. "Along the corridor, then up the stairs" keeps the order straight.

### Linear functions

A **linear function** is one whose graph is a straight line. Its equation can
be written as

$$y = mx + c$$

where $m$ and $c$ are numbers. For example: $y = 2x - 1$, $y = -3x + 4$,
$y = \frac{1}{2}x$, $y = 5$.

There is no $x^2$, no $\frac{1}{x}$ — just $x$ multiplied by a number, plus a
number.

### Drawing the graph: a table of values

1. **Choose some $x$ values**, usually given in the question — say from 0 to 3.
2. **Work out $y$** for each one, using the equation.
3. **Plot** each $(x, y)$ point.
4. **Join** them with a single straight line, using a ruler, and extend it
   across the whole range asked for.

For $y = 2x - 1$:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $y = 2x - 1$ | $-1$ | $1$ | $3$ | $5$ |

<svg viewBox="0 0 220 340" role="img" aria-label="Coordinate grid showing the straight line y = 2x - 1 passing through the plotted points (0, -1), (1, 1), (2, 3) and (3, 5)">
  <g stroke="currentColor" stroke-width="0.5" opacity="0.35">
    <line x1="20" y1="320" x2="20" y2="20"/>
    <line x1="50" y1="320" x2="50" y2="20"/>
    <line x1="80" y1="320" x2="80" y2="20"/>
    <line x1="110" y1="320" x2="110" y2="20"/>
    <line x1="140" y1="320" x2="140" y2="20"/>
    <line x1="170" y1="320" x2="170" y2="20"/>
    <line x1="200" y1="320" x2="200" y2="20"/>
    <line x1="20" y1="320" x2="200" y2="320"/>
    <line x1="20" y1="290" x2="200" y2="290"/>
    <line x1="20" y1="260" x2="200" y2="260"/>
    <line x1="20" y1="230" x2="200" y2="230"/>
    <line x1="20" y1="200" x2="200" y2="200"/>
    <line x1="20" y1="170" x2="200" y2="170"/>
    <line x1="20" y1="140" x2="200" y2="140"/>
    <line x1="20" y1="110" x2="200" y2="110"/>
    <line x1="20" y1="80" x2="200" y2="80"/>
    <line x1="20" y1="50" x2="200" y2="50"/>
    <line x1="20" y1="20" x2="200" y2="20"/>
  </g>
  <line x1="20" y1="260" x2="200" y2="260" stroke="currentColor" stroke-width="1.5"/>
  <line x1="50" y1="320" x2="50" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <text x="20" y="274">-1</text>
    <text x="80" y="274">1</text>
    <text x="110" y="274">2</text>
    <text x="140" y="274">3</text>
    <text x="170" y="274">4</text>
    <text x="200" y="274">5</text>
    <text x="41" y="324">-2</text>
    <text x="41" y="294">-1</text>
    <text x="41" y="234">1</text>
    <text x="41" y="204">2</text>
    <text x="41" y="174">3</text>
    <text x="41" y="144">4</text>
    <text x="41" y="114">5</text>
    <text x="41" y="84">6</text>
    <text x="41" y="54">7</text>
    <text x="41" y="24">8</text>
    <text x="210" y="264">x</text>
    <text x="50" y="14">y</text>
  </g>
  <line x1="35.0" y1="320.0" x2="185.0" y2="20.0" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="50" cy="290" r="3.5" fill="currentColor"/>
  <circle cx="80" cy="230" r="3.5" fill="currentColor"/>
  <circle cx="110" cy="170" r="3.5" fill="currentColor"/>
  <circle cx="140" cy="110" r="3.5" fill="currentColor"/>
</svg>

**If your points don't line up, a calculation is wrong.** A linear function
always gives a perfectly straight line, which is a built-in check. Three points
are the minimum: two decide the line, and the third checks it.

### What $m$ and $c$ tell you

In the table above, each time $x$ goes up by 1, $y$ goes up by **2**. That 2
is the $m$ in $y = 2x - 1$. It measures how **steep** the line is, and is called
the **gradient**.

- Positive $m$: the line slopes **up** from left to right.
- Negative $m$: it slopes **down**.
- A bigger number (ignoring the sign) means a steeper line.

The $c$ is where the line crosses the $y$-axis. For $y = 2x - 1$ that's at
$(0, -1)$. The next lesson is about these crossing points.

### Horizontal and vertical lines

- $y = 4$ is a **horizontal** line: every point on it has $y = 4$, whatever $x$
  is. Here $m = 0$.
- $x = 3$ is a **vertical** line: every point on it has $x = 3$.

It's easy to mix them up. $y = \text{number}$ is flat, like the horizon.

## Flashcards

### 6.1 | In the coordinates $(4, -1)$, which number is $x$?
4. The $x$ coordinate comes first: across, then up.

### 6.1 | What is the general form of a linear function?
$$y = mx + c$$

$m$ and $c$ are numbers.

### 6.1 | How many points should you plot to draw a straight line?
At least **three**. Two fix the line; the third checks for mistakes.

### 6.1 | What does $m$ tell you about the graph of $y = mx + c$?
How steep it is: the **gradient**. Positive slopes up, negative slopes down.

### 6.1 | Is the line $y = -2$ horizontal or vertical?
**Horizontal.** Every point on it has $y = -2$.

## Questions

### 6.1 | mcq | 1 mark | difficulty 1
Which point lies on the line $y = 3x + 2$?

- A. $(1, 4)$
- B. $(2, 8)$
- C. $(0, 3)$
- D. $(3, 9)$

**Answer:** B

**Working:** Test each point by substituting $x$:
$x = 2$ gives $y = 3(2) + 2 = 8$. ✓

A would need $y = 5$; C would need $y = 2$; D would need $y = 11$.

### 6.1 | numeric | 1 mark | difficulty 1
For the function $y = 4 - 2x$, find $y$ when $x = -3$.

**Answer:** 10

**Working:** $y = 4 - 2(-3) = 4 + 6 = 10$.

### 6.1 | mcq | 1 mark | difficulty 2
Which of these equations gives a straight-line graph?

- A. $y = x^2 + 1$
- B. $y = \frac{3}{x}$
- C. $y = 5 - 4x$
- D. $y = 2^x$

**Answer:** C

**Working:** $y = 5 - 4x$ has the form $y = mx + c$, with $m = -4$ and $c = 5$.
The others have $x$ squared, $x$ in a denominator, or $x$ as a power, so their
graphs are curves.

### 6.1 | mcq | 1 mark | difficulty 2
Which line slopes **downwards** from left to right?

- A. $y = 3x - 5$
- B. $y = \frac{1}{2}x + 4$
- C. $y = 7$
- D. $y = 6 - x$

**Answer:** D

**Working:** $y = 6 - x$ is $y = -1x + 6$, so its gradient is $-1$: negative,
so it slopes down.

A and B have positive gradients. C is horizontal, with gradient 0.

### 6.1 | structured | 5 marks | difficulty 2
(a) Copy and complete the table of values for $y = 3x - 2$. **(2 marks)**

| $x$ | $-1$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| $y$ | | | | | |

(b) Using a scale of 1 cm to 1 unit on the $x$-axis and 1 cm to 1 unit on the
$y$-axis, draw the graph of $y = 3x - 2$ for $-1 \leq x \leq 3$. **(2 marks)**

(c) Use your graph to find the value of $x$ when $y = 5.5$. **(1 mark)**

**Answer:** (a) $-5, -2, 1, 4, 7$ (b) a straight line through the five points
(c) $x = 2.5$

**Working:** (a) For example, $x = -1$: $3(-1) - 2 = -5$. (2 marks for all five,
1 mark for three or four.)

(b) 1 mark for plotting the points correctly, 1 mark for a single ruled line
through them.

(c) Read across from $y = 5.5$ to the line, then down to the $x$-axis.
Algebraically: $3x - 2 = 5.5$ gives $x = 2.5$.
