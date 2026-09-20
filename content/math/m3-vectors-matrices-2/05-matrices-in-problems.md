---
subject: MATH
topic: vectors-matrices-2
lesson: matrices-in-problems
title: Matrices in Arithmetic, Algebra and Geometry
objectives: ["4.9"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objective 4.9 ("use matrices to solve simple problems in Arithmetic, Algebra and Geometry"). Extends Module 2 Vectors and Matrices 1 lesson 5 with combined transformations and matrix equations. NOT YET checked against textbook for depth.
---

## Lesson

### Algebra: simultaneous equations

Write the pair as $A\mathbf{x} = \mathbf{b}$, then multiply on the left by
$A^{-1}$:

$$\mathbf{x} = A^{-1}\mathbf{b}$$

> $5x + 2y = 16$ and $3x + y = 9$

$$A = \begin{pmatrix} 5 & 2 \\ 3 & 1 \end{pmatrix}, \quad \det A = 5 - 6 = -1$$

$$A^{-1} = \frac{1}{-1}\begin{pmatrix} 1 & -2 \\ -3 & 5 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 3 & -5 \end{pmatrix}$$

$$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 3 & -5 \end{pmatrix}\begin{pmatrix} 16 \\ 9 \end{pmatrix} = \begin{pmatrix} -16 + 18 \\ 48 - 45 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

So $x = 2$, $y = 3$. Check: $5(2) + 2(3) = 16$ ✓.

### Solving a matrix equation

If $AX = B$ with $A$ and $B$ known, then $X = A^{-1}B$ — with $A^{-1}$ on the
**left**, because matrix multiplication isn't commutative. For $XA = B$, the
inverse goes on the right: $X = BA^{-1}$.

### Geometry: combining transformations

Applying transformation $P$ and then transformation $Q$ is the single matrix
$QP$ — the **second** transformation goes on the **left**, just as with
composite functions.

> A shape is reflected in the $x$-axis, then rotated 90° anticlockwise about
> the origin.

$$Q = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad P = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

$$QP = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

That single matrix is a **reflection in $y = x$**. Doing the two in the other
order would give $PQ$, a reflection in $y = -x$ — a different result.

### Arithmetic: tables of data

A quantities matrix times a prices matrix gives totals in one step (Module 2).
Extending it, a $2 \times 2$ quantity matrix times a $2 \times 2$ price matrix
can compare, say, two shops' prices for two products across two days.

The rule to check first is always **conformability**: the number of columns in
the first matrix must equal the number of rows in the second.

## Flashcards

### 4.9 | How do you solve $A\mathbf{x} = \mathbf{b}$ with matrices?
$\mathbf{x} = A^{-1}\mathbf{b}$, with the inverse on the **left**.

### 4.9 | Transformation $P$ is followed by transformation $Q$. What single matrix represents this?
$QP$ — the second transformation is written first (on the left).

### 4.9 | Why must the inverse be multiplied on the correct side?
Matrix multiplication is not commutative: $AB \neq BA$ in general.

### 4.9 | What condition must hold before two matrices can be multiplied?
The number of columns of the first must equal the number of rows of the second.

### 4.9 | What does a determinant of 0 mean when solving simultaneous equations with matrices?
There is no unique solution: the lines are parallel or identical.

## Questions

### 4.9 | mcq | 1 mark | difficulty 2
The equations $2x + 3y = 8$ and $x + 2y = 5$ are written as $A\mathbf{x} = \mathbf{b}$.
What is $\det A$?

- A. 1
- B. 4
- C. 7
- D. $-1$

**Answer:** A

**Working:** $A = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix}$, so
$\det A = 4 - 3 = 1$.

### 4.9 | numeric | 1 mark | difficulty 3
Using matrices, solve $3x + 4y = 18$ and $x + 2y = 8$. What is the value of $x$?

**Answer:** 2

**Working:** $\det = 6 - 4 = 2$;
$A^{-1} = \frac{1}{2}\begin{pmatrix} 2 & -4 \\ -1 & 3 \end{pmatrix}$.

$\frac{1}{2}\begin{pmatrix} 2 & -4 \\ -1 & 3 \end{pmatrix}\begin{pmatrix} 18 \\ 8 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 36 - 32 \\ -18 + 24 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.

### 4.9 | mcq | 1 mark | difficulty 3
A shape is rotated 180° about the origin and then reflected in the $y$-axis.
Which single matrix has the same effect?

- A. $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- B. $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$
- C. $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- D. $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$

**Answer:** A

**Working:** $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ — a reflection in the $x$-axis.

### 4.9 | structured | 6 marks | difficulty 4
$A = \begin{pmatrix} 4 & 1 \\ 3 & 1 \end{pmatrix}$.

(a) Find $A^{-1}$. **(2 marks)**

(b) Hence solve $4x + y = 11$ and $3x + y = 9$. **(3 marks)**

(c) State what the value of $\det A$ tells you about the pair of equations.
**(1 mark)**

**Answer:** (a) $\begin{pmatrix} 1 & -1 \\ -3 & 4 \end{pmatrix}$ (b) $x = 2$,
$y = 3$ (c) It is non-zero, so the equations have exactly one solution.

**Working:** (a) $\det A = 4 - 3 = 1$ (1 mark); swap and change signs (1 mark).

(b) $\begin{pmatrix} 1 & -1 \\ -3 & 4 \end{pmatrix}\begin{pmatrix} 11 \\ 9 \end{pmatrix} = \begin{pmatrix} 11 - 9 \\ -33 + 36 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ (2 marks), so $x = 2$ and $y = 3$ (1 mark).

Check: $4(2) + 3 = 11$ ✓
