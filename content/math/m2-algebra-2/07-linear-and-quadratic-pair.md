---
subject: MATH
topic: algebra-2
lesson: linear-and-quadratic-pair
title: One Linear and One Quadratic Equation
objectives: ["2.7"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objective 2.7 ("solve a pair of equations in two variables when one equation is quadratic or non-linear and the other linear"). NOT YET checked against textbook for depth.
---

## Lesson

When one equation is linear and the other is quadratic (or has $xy$, or
$\frac{1}{x}$), elimination by adding or subtracting doesn't work. Use
**substitution**.

### The method

1. From the **linear** equation, make one letter the subject.
2. **Substitute** that into the non-linear equation.
3. Rearrange to a quadratic $= 0$ and solve it. You'll usually get **two**
   values.
4. Substitute **each** value back into the **linear** equation to find its
   partner.
5. Write the answers as **pairs**.

### Worked example

$$y = x^2 - 3 \qquad y = 2x$$

The second equation already gives $y$. Substitute into the first:

$$
\begin{aligned}
2x &= x^2 - 3 \\
0 &= x^2 - 2x - 3 \\
0 &= (x - 3)(x + 1)
\end{aligned}
$$

$x = 3$ or $x = -1$. Using $y = 2x$:

- $x = 3$ gives $y = 6$
- $x = -1$ gives $y = -2$

The solutions are $(3, 6)$ and $(-1, -2)$.

### Why two answers?

Graphically, $y = x^2 - 3$ is a curve and $y = 2x$ is a straight line. A line
can cross a curve **twice**, touch it **once**, or **miss** it. The solutions
are the crossing points.

That also explains why each $x$ must be paired with its own $y$. Mixing them
up — $(3, -2)$, say — gives a point that isn't on either graph.

### A harder example

$$x + y = 5 \qquad x^2 + y^2 = 13$$

From the linear equation, $y = 5 - x$. Substitute:

$$
\begin{aligned}
x^2 + (5 - x)^2 &= 13 \\
x^2 + 25 - 10x + x^2 &= 13 \\
2x^2 - 10x + 12 &= 0 \\
x^2 - 5x + 6 &= 0 \\
(x - 2)(x - 3) &= 0
\end{aligned}
$$

$x = 2$ gives $y = 3$; $x = 3$ gives $y = 2$. Solutions: $(2, 3)$ and $(3, 2)$.

Expanding $(5 - x)^2$ correctly is where marks are lost: it is
$25 - 10x + x^2$, not $25 - x^2$.

## Flashcards

### 2.7 | Which method solves one linear and one quadratic equation?
**Substitution**, using the linear equation to replace one letter.

### 2.7 | How many solutions can a linear–quadratic pair have?
Two, one, or none — a line can cross a curve twice, touch it, or miss it.

### 2.7 | After finding the $x$ values, which equation gives the matching $y$ values?
The **linear** one. It is simpler and gives exactly one $y$ for each $x$.

### 2.7 | Expand $(4 - x)^2$.
$16 - 8x + x^2$.

## Questions

### 2.7 | mcq | 1 mark | difficulty 2
Solve $y = x^2$ and $y = x + 2$.

- A. $(2, 4)$ and $(-1, 1)$
- B. $(2, 4)$ and $(1, 1)$
- C. $(-2, 4)$ and $(1, 1)$
- D. $(2, 4)$ only

**Answer:** A

**Working:** $x^2 = x + 2$, so $x^2 - x - 2 = 0$ and $(x - 2)(x + 1) = 0$.

$x = 2$ gives $y = 4$; $x = -1$ gives $y = 1$.

### 2.7 | numeric | 1 mark | difficulty 3
Solve the equations $y = 2x + 1$ and $xy = 3$. Give the **positive** value of $x$.

**Answer:** 1

**Working:** $x(2x + 1) = 3$, so $2x^2 + x - 3 = 0$ and $(2x + 3)(x - 1) = 0$.

$x = 1$ or $x = -\frac{3}{2}$. The positive value is 1 (with $y = 3$).

### 2.7 | mcq | 1 mark | difficulty 3
How many points do the line $y = 2x - 1$ and the curve $y = x^2$ have in common?

- A. 0
- B. 1
- C. 2
- D. 3

**Answer:** B

**Working:** $x^2 = 2x - 1$, so $x^2 - 2x + 1 = 0$, which is $(x - 1)^2 = 0$.
There is only one root, $x = 1$, so the line **touches** the curve at $(1, 1)$.

### 2.7 | structured | 5 marks | difficulty 4
Solve the simultaneous equations

$$x - y = 1 \qquad x^2 + y^2 = 25$$

**Answer:** $(4, 3)$ and $(-3, -4)$

**Working:** From the linear equation, $x = y + 1$ (1 mark).

$(y + 1)^2 + y^2 = 25$, so $2y^2 + 2y + 1 = 25$ and $y^2 + y - 12 = 0$
(2 marks).

$(y + 4)(y - 3) = 0$, so $y = 3$ or $y = -4$ (1 mark).

$y = 3$ gives $x = 4$; $y = -4$ gives $x = -3$ (1 mark).
