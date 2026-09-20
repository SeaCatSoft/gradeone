---
subject: MATH
topic: relations-functions-graphs-1
lesson: gradient
title: The Gradient of a Straight Line
objectives: ["3.6"]
est_minutes: 14
status: draft
source: Original prose written against Module 2 syllabus objective 3.6 ("determine the gradient of a straight line"). Builds on the informal introduction in Module 1 Introduction to Graphs. NOT YET checked against textbook for depth.
---

## Lesson

The **gradient** of a line measures its steepness: how far it goes **up** for
every 1 it goes **across**.

### From two points

For a line through $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{change in } y}{\text{change in } x} = \frac{\text{rise}}{\text{run}}$$

> Find the gradient of the line through $(1, 3)$ and $(4, 12)$.

$$m = \frac{12 - 3}{4 - 1} = \frac{9}{3} = 3$$

Keep the points in the **same order** on the top and the bottom. Using
$\frac{12 - 3}{1 - 4}$ would give $-3$, which is wrong.

Negative coordinates need brackets:

$$(-2, 5) \text{ and } (3, -5): \quad m = \frac{-5 - 5}{3 - (-2)} = \frac{-10}{5} = -2$$

### What the sign tells you

| Gradient | Line |
|---|---|
| positive | slopes **up** from left to right |
| negative | slopes **down** from left to right |
| zero | **horizontal** |
| undefined | **vertical** (the run is 0, and you can't divide by 0) |

A gradient of 3 is steeper than a gradient of 1; $-4$ is steeper than $-1$.

### From an equation

When the equation is in the form $y = mx + c$, the gradient is the coefficient
of $x$. For $y = 5 - 2x$, the gradient is $-2$.

If it isn't in that form, rearrange it first. For $3x + 2y = 8$:

$$2y = -3x + 8 \quad\Rightarrow\quad y = -\tfrac{3}{2}x + 4$$

The gradient is $-\frac{3}{2}$, **not** 3.

### From a graph

Pick two points exactly on grid crossings, far apart for accuracy. Draw the
right-angled triangle under the line, measure the rise and the run **using the
axis scales**, and divide.

## Flashcards

### 3.6 | State the formula for the gradient between two points.
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

### 3.6 | What is the gradient of a horizontal line?
Zero.

### 3.6 | Find the gradient through $(2, 1)$ and $(6, 9)$.
2. $\frac{9 - 1}{6 - 2} = \frac{8}{4}$.

### 3.6 | What is the gradient of $4x + 2y = 7$?
$-2$. Rearrange: $y = -2x + 3.5$.

> Hint: get $y$ on its own first.

### 3.6 | What does a negative gradient look like?
The line slopes **down** from left to right.

## Questions

### 3.6 | numeric | 1 mark | difficulty 1
Find the gradient of the line joining $(2, 5)$ and $(6, 17)$.

**Answer:** 3

**Working:** $\dfrac{17 - 5}{6 - 2} = \dfrac{12}{4} = 3$.

### 3.6 | numeric | 1 mark | difficulty 2
Find the gradient of the line joining $(-1, 4)$ and $(3, -8)$.

**Answer:** -3

**Working:** $\dfrac{-8 - 4}{3 - (-1)} = \dfrac{-12}{4} = -3$.

### 3.6 | mcq | 1 mark | difficulty 2
What is the gradient of the line $2x - 5y = 10$?

- A. 2
- B. $-2$
- C. $\frac{2}{5}$
- D. $-\frac{2}{5}$

**Answer:** C

**Working:** $-5y = -2x + 10$, so $y = \frac{2}{5}x - 2$. The gradient is
$\frac{2}{5}$.

### 3.6 | structured | 3 marks | difficulty 3
The points $A(1, 2)$, $B(3, 8)$ and $C(6, k)$ lie on the same straight line.

(a) Find the gradient of $AB$. **(1 mark)**

(b) Find the value of $k$. **(2 marks)**

**Answer:** (a) 3 (b) 17

**Working:** (a) $\frac{8 - 2}{3 - 1} = 3$.

(b) $BC$ must have the same gradient: $\frac{k - 8}{6 - 3} = 3$ (1 mark), so
$k - 8 = 9$ and $k = 17$ (1 mark).
