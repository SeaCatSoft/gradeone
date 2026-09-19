---
subject: MATH
topic: relations-functions-graphs-1
lesson: length-and-midpoint
title: Length and Midpoint of a Line Segment
objectives: ["3.9"]
est_minutes: 13
status: draft
source: Original prose written against Module 2 syllabus objective 3.9 (determine from coordinates on a line segment the length and the coordinates of the midpoint). NOT YET checked against textbook for depth.
---

## Lesson

### The midpoint

The **midpoint** of a line segment is halfway along it. Its coordinates are the
**averages** of the endpoints' coordinates:

$$M = \left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2}\right)$$

> Find the midpoint of $A(2, 7)$ and $B(8, -1)$.

$$M = \left(\frac{2 + 8}{2},\ \frac{7 + (-1)}{2}\right) = (5, 3)$$

It's an **average**, so add then halve. Subtracting is a common slip — that
gives half the distance, not the middle.

**Working backwards:** if $M(5, 3)$ is the midpoint and $A$ is $(2, 7)$, then
$B$ is as far beyond $M$ as $A$ is before it. $x$: $2 \to 5$ is $+3$, so $B$ has
$x = 8$. $y$: $7 \to 3$ is $-4$, so $B$ has $y = -1$.

### The length

The distance between two points comes from Pythagoras' theorem. The horizontal
and vertical gaps form the two shorter sides of a right-angled triangle:

$$AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

> Find the length of $AB$, where $A(1, 2)$ and $B(7, 10)$.

$$AB = \sqrt{(7 - 1)^2 + (10 - 2)^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$

The order of subtraction doesn't matter here, because the differences are
squared.

Many answers won't be whole numbers. Leave them as a surd ($\sqrt{45}$) or round
as the question asks ($6.71$).

## Flashcards

### 3.9 | State the midpoint formula.
$$\left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2}\right)$$

### 3.9 | State the formula for the length of a line segment.
$$\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### 3.9 | Find the midpoint of $(0, 4)$ and $(6, 10)$.
$(3, 7)$.

### 3.9 | Find the distance between $(0, 0)$ and $(3, 4)$.
5. $\sqrt{9 + 16} = \sqrt{25}$.

### 3.9 | Which theorem is the length formula based on?
**Pythagoras' theorem.**

## Questions

### 3.9 | mcq | 1 mark | difficulty 1
Find the midpoint of $P(3, -2)$ and $Q(9, 6)$.

- A. $(6, 2)$
- B. $(3, 4)$
- C. $(12, 4)$
- D. $(6, 4)$

**Answer:** A

**Working:** $\left(\frac{3 + 9}{2}, \frac{-2 + 6}{2}\right) = (6, 2)$.

B subtracts instead of adding. C forgets to halve.

### 3.9 | numeric | 1 mark | difficulty 2
Find the length of the line segment joining $(-2, 1)$ and $(4, 9)$.

**Answer:** 10

**Working:** $\sqrt{(4 - (-2))^2 + (9 - 1)^2} = \sqrt{36 + 64} = 10$.

### 3.9 | numeric | 1 mark | difficulty 3
$M(4, -1)$ is the midpoint of $AB$, where $A$ is $(1, 3)$. The coordinates of
$B$ are $(p, q)$. Find $p + q$.

**Answer:** 2

**Working:** $\frac{1 + p}{2} = 4$, so $p = 7$. $\frac{3 + q}{2} = -1$, so $q = -5$.
$p + q = 2$.

### 3.9 | structured | 4 marks | difficulty 3
$A(2, 1)$ and $B(8, 9)$ are the ends of a diameter of a circle.

(a) Find the coordinates of the centre of the circle. **(1 mark)**

(b) Find the radius of the circle. **(2 marks)**

(c) Find the circumference of the circle, in terms of $\pi$. **(1 mark)**

**Answer:** (a) $(5, 5)$ (b) 5 (c) $10\pi$

**Working:** (a) The centre is the midpoint of the diameter:
$\left(\frac{2 + 8}{2}, \frac{1 + 9}{2}\right) = (5, 5)$.

(b) $AB = \sqrt{6^2 + 8^2} = 10$ (1 mark). The radius is half of that: 5 (1 mark).

(c) $2\pi r = 10\pi$.
