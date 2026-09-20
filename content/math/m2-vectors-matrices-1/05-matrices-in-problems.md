---
subject: MATH
topic: vectors-matrices-1
lesson: matrices-in-problems
title: Using Matrices to Solve Problems
objectives: ["5.5"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objective 5.5 ("use matrices to solve simple problems in Arithmetic and Algebra"). Covers tables of prices and quantities, and solving simultaneous equations with the inverse matrix. NOT YET checked against textbook for depth.
---

## Lesson

### Matrices as tables

Matrix multiplication is exactly the calculation behind "quantity times price,
added up".

> A café sells coffee at \$6 and cake at \$9. On Monday it sells 20 coffees and
> 15 cakes; on Tuesday, 25 coffees and 10 cakes.

$$\underbrace{\begin{pmatrix} 20 & 15 \\ 25 & 10 \end{pmatrix}}_{\text{quantities}} \underbrace{\begin{pmatrix} 6 \\ 9 \end{pmatrix}}_{\text{prices}} = \begin{pmatrix} 20(6) + 15(9) \\ 25(6) + 10(9) \end{pmatrix} = \begin{pmatrix} 255 \\ 240 \end{pmatrix}$$

Monday's takings were \$255 and Tuesday's \$240.

The **columns** of the first matrix must line up with the **rows** of the
second — here, coffee and cake in the same order in both.

### Solving simultaneous equations

A pair of simultaneous equations can be written as one matrix equation:

$$
\begin{aligned}
2x + 3y &= 13 \\
x + 2y &= 8
\end{aligned}
\qquad\Longleftrightarrow\qquad
\begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 13 \\ 8 \end{pmatrix}
$$

Call the square matrix $A$. Multiply both sides **on the left** by $A^{-1}$:

$$\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1}\begin{pmatrix} 13 \\ 8 \end{pmatrix}$$

Here $\det A = 4 - 3 = 1$, so

$$A^{-1} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$$

$$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 13 \\ 8 \end{pmatrix} = \begin{pmatrix} 26 - 24 \\ -13 + 16 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

So $x = 2$ and $y = 3$. Check in the first equation: $4 + 9 = 13$. ✓

The inverse must go on the **left**. Matrix multiplication isn't commutative,
so $\begin{pmatrix} 13 \\ 8 \end{pmatrix}A^{-1}$ can't even be calculated.

If $\det A = 0$, there's no inverse — the equations have no single solution
(the lines are parallel, or the same line).

## Flashcards

### 5.5 | Write $3x + y = 7$, $x - 2y = 0$ as a matrix equation.
$$\begin{pmatrix} 3 & 1 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$$

### 5.5 | How do you solve $A\begin{pmatrix} x \\ y \end{pmatrix} = B$?
Multiply both sides **on the left** by $A^{-1}$: $\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1}B$.

### 5.5 | What does a determinant of zero tell you about a pair of simultaneous equations?
There is no single solution: the lines are parallel or identical.

### 5.5 | In a quantity × price calculation, what must match up?
The columns of the first matrix and the rows of the second must list the
items in the same order.

## Questions

### 5.5 | numeric | 1 mark | difficulty 2
A shop sells pens at \$3 and books at \$12. Using matrix multiplication,
$\begin{pmatrix} 5 & 2 \end{pmatrix}\begin{pmatrix} 3 \\ 12 \end{pmatrix}$ gives the cost of 5 pens and
2 books. Find the cost, in dollars.

**Answer:** 39

**Working:** $5(3) + 2(12) = 15 + 24 = 39$.

### 5.5 | mcq | 1 mark | difficulty 2
Which matrix equation represents $4x - y = 9$ and $x + 3y = 12$?

- A. $\begin{pmatrix} 4 & -1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 9 \\ 12 \end{pmatrix}$
- B. $\begin{pmatrix} 4 & 1 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 9 \\ 12 \end{pmatrix}$
- C. $\begin{pmatrix} 4 & -1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} 9 \\ 12 \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$
- D. $\begin{pmatrix} 9 & 12 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$

**Answer:** A

**Working:** Each row holds the coefficients of one equation: $(4, -1)$ and
$(1, 3)$. B has them arranged by column instead.

### 5.5 | structured | 5 marks | difficulty 4
(a) Write the equations $3x + 2y = 12$ and $x + y = 5$ in the form
$A\begin{pmatrix} x \\ y \end{pmatrix} = B$. **(1 mark)**

(b) Find $A^{-1}$. **(2 marks)**

(c) Hence solve the equations. **(2 marks)**

**Answer:** (a) $\begin{pmatrix} 3 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$
(b) $\begin{pmatrix} 1 & -2 \\ -1 & 3 \end{pmatrix}$ (c) $x = 2$, $y = 3$

**Working:** (b) $\det A = 3 - 2 = 1$ (1 mark). Swap 3 and 1, change the signs
of 2 and 1 (1 mark).

(c) $\begin{pmatrix} 1 & -2 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 12 \\ 5 \end{pmatrix} = \begin{pmatrix} 12 - 10 \\ -12 + 15 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.

Check: $3(2) + 2(3) = 12$ and $2 + 3 = 5$. ✓
