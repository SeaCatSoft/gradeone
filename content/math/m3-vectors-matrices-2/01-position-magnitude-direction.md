---
subject: MATH
topic: vectors-matrices-2
lesson: position-magnitude-direction
title: Position, Magnitude and Direction
objectives: ["4.1", "4.2", "4.3"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objectives 4.1 (write the position vector of a point), 4.2 (determine the magnitude of a vector) and 4.3 (determine the direction of a vector). All three lost symbols in extraction and are still flagged for review. Builds on Module 2 Vectors and Matrices 1. NOT YET checked against textbook for depth.
---

## Lesson

### Position vectors

The **position vector** of a point $P(x, y)$ is the vector from the origin
$O(0, 0)$ to $P$:

$$\overrightarrow{OP} = \begin{pmatrix} x \\ y \end{pmatrix}$$

So the point $(3, -4)$ has position vector $\begin{pmatrix} 3 \\ -4 \end{pmatrix}$.
The coordinates and the components are the same numbers, written differently.

For any two points, **end minus start**:

$$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$$

### Magnitude

The **magnitude** $|\mathbf{a}|$ is the vector's length, from Pythagoras:

$$\left|\begin{pmatrix} x \\ y \end{pmatrix}\right| = \sqrt{x^2 + y^2}$$

$$\left|\begin{pmatrix} 5 \\ -12 \end{pmatrix}\right| = \sqrt{25 + 144} = 13$$

Magnitude is never negative: the components are squared.

### Direction

The **direction** of a vector is the angle it makes, found with trigonometry.
For $\begin{pmatrix} x \\ y \end{pmatrix}$, the angle $\theta$ measured
anticlockwise from the positive $x$-axis satisfies

$$\tan \theta = \frac{y}{x}$$

> Find the magnitude and direction of $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$.

$$|\mathbf{v}| = \sqrt{16 + 9} = 5 \qquad \tan \theta = \frac{3}{4} \;\Rightarrow\; \theta = 36.9°$$

**Always sketch the vector first.** A calculator's $\tan^{-1}$ only returns
angles between $-90°$ and $90°$, so for vectors pointing left or down you must
adjust:

| Components | Quadrant | Angle from positive $x$-axis |
|---|---|---|
| $x > 0$, $y > 0$ | first | $\tan^{-1}\left|\frac{y}{x}\right|$ |
| $x < 0$, $y > 0$ | second | $180° - \tan^{-1}\left|\frac{y}{x}\right|$ |
| $x < 0$, $y < 0$ | third | $180° + \tan^{-1}\left|\frac{y}{x}\right|$ |
| $x > 0$, $y < 0$ | fourth | $360° - \tan^{-1}\left|\frac{y}{x}\right|$ |

Direction may also be asked for as a **bearing**, measured clockwise from north.
For $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$ (4 east, 3 north), the bearing
satisfies $\tan \theta = \frac{4}{3}$, giving $053°$.

Read the question carefully: "the angle with the $x$-axis" and "the bearing" are
different answers for the same vector.

## Flashcards

### 4.1 | What is the position vector of the point $(-2, 7)$?
$\begin{pmatrix} -2 \\ 7 \end{pmatrix}$.

### 4.2 | State the formula for the magnitude of a vector.
$$\left|\begin{pmatrix} x \\ y \end{pmatrix}\right| = \sqrt{x^2 + y^2}$$

### 4.2 | Can a magnitude be negative?
No. The components are squared, so it is always positive or zero.

### 4.3 | How do you find the direction of a vector from the positive $x$-axis?
$\tan \theta = \frac{y}{x}$, then adjust for the quadrant after sketching it.

### 4.3 | Why can't you trust $\tan^{-1}$ alone for direction?
It only returns angles between $-90°$ and $90°$, so vectors pointing left or
down need adjusting.

## Questions

### 4.2 | numeric | 1 mark | difficulty 1
Find the magnitude of $\begin{pmatrix} 9 \\ 12 \end{pmatrix}$.

**Answer:** 15

**Working:** $\sqrt{81 + 144} = \sqrt{225} = 15$.

### 4.1 | mcq | 1 mark | difficulty 2
$A$ is $(2, -1)$ and $B$ is $(6, 2)$. What is $|\overrightarrow{AB}|$?

- A. 3
- B. 4
- C. 5
- D. 7

**Answer:** C

**Working:** $\overrightarrow{AB} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$, so
$|\overrightarrow{AB}| = \sqrt{16 + 9} = 5$.

### 4.3 | numeric | 1 mark | difficulty 2
Find the angle, in degrees to 1 decimal place, that
$\begin{pmatrix} 6 \\ 6 \end{pmatrix}$ makes with the positive $x$-axis.

**Answer:** 45

**Working:** $\tan \theta = \frac{6}{6} = 1$, so $\theta = 45°$.

### 4.3 | mcq | 1 mark | difficulty 3
A vector is $\begin{pmatrix} -3 \\ 4 \end{pmatrix}$. What angle does it make with
the positive $x$-axis?

- A. 53.1°
- B. 126.9°
- C. 233.1°
- D. 306.9°

**Answer:** B

**Working:** The vector points left and up: the second quadrant.
$\tan^{-1}\left(\frac{4}{3}\right) = 53.1°$, so the angle is
$180° - 53.1° = 126.9°$.

### 4.2 | structured | 4 marks | difficulty 3
$\overrightarrow{OP} = \begin{pmatrix} 8 \\ 6 \end{pmatrix}$ and
$\overrightarrow{OQ} = \begin{pmatrix} -4 \\ 6 \end{pmatrix}$.

(a) Find $|\overrightarrow{OP}|$. **(1 mark)**

(b) Find $\overrightarrow{PQ}$. **(1 mark)**

(c) Find $|\overrightarrow{PQ}|$. **(1 mark)**

(d) What does your answer to (c) tell you about the triangle $OPQ$?
**(1 mark)**

**Answer:** (a) 10 (b) $\begin{pmatrix} -12 \\ 0 \end{pmatrix}$ (c) 12
(d) $PQ$ is horizontal, so the triangle has a horizontal side of length 12.

**Working:** (b) $\overrightarrow{OQ} - \overrightarrow{OP}$.

(c) $\sqrt{144 + 0} = 12$.
