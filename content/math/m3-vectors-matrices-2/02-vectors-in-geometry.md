---
subject: MATH
topic: vectors-matrices-2
lesson: vectors-in-geometry
title: Using Vectors in Geometry
objectives: ["4.4"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objective 4.4 ("use vectors to solve problems in geometry"). Covers parallel vectors, collinearity and proofs in figures. NOT YET checked against textbook for depth.
---

## Lesson

Vectors can **prove** geometric facts — that lines are parallel, that points lie
on a straight line, that a shape is a parallelogram.

### Parallel vectors

Two vectors are **parallel** when one is a **scalar multiple** of the other:

$$\mathbf{b} = k\mathbf{a}$$

The number $k$ tells you the ratio of their lengths, and its sign tells you
whether they point the same way ($k > 0$) or opposite ways ($k < 0$).

$$\begin{pmatrix} 6 \\ 9 \end{pmatrix} = 3\begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

So these are parallel, and the first is three times as long.

### Collinear points

Points are **collinear** if they lie on one straight line. To prove that $A$,
$B$ and $C$ are collinear:

1. Show $\overrightarrow{AB}$ and $\overrightarrow{BC}$ (or $\overrightarrow{AC}$)
   are **parallel**.
2. Point out that they share the **common point** $B$.

Parallel alone isn't enough — parallel lines can be far apart. The shared point
is what forces them onto the same line. Always write that sentence; it carries a
mark.

> $A(1, 2)$, $B(3, 6)$, $C(6, 12)$.

$$\overrightarrow{AB} = \begin{pmatrix} 2 \\ 4 \end{pmatrix}, \quad \overrightarrow{BC} = \begin{pmatrix} 3 \\ 6 \end{pmatrix} = 1.5\begin{pmatrix} 2 \\ 4 \end{pmatrix}$$

$\overrightarrow{BC} = 1.5\,\overrightarrow{AB}$, so they are parallel, and both
pass through $B$. Therefore $A$, $B$ and $C$ are collinear.

### Proving a shape is a parallelogram

A quadrilateral $ABCD$ is a parallelogram if one pair of opposite sides is
**equal and parallel**:

$$\overrightarrow{AB} = \overrightarrow{DC}$$

Equal vectors have the same length **and** direction, which is exactly what a
pair of parallelogram sides has.

### Working with letters

In figures where sides are given as $\mathbf{a}$ and $\mathbf{b}$, express
everything as a combination of those two, then compare.

> In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$.
> $M$ is the midpoint of $OA$, and $N$ is the midpoint of $OB$. Show that
> $MN$ is parallel to $AB$ and half its length.

$$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$$

$$\overrightarrow{MN} = \overrightarrow{ON} - \overrightarrow{OM} = \tfrac{1}{2}\mathbf{b} - \tfrac{1}{2}\mathbf{a} = \tfrac{1}{2}(\mathbf{b} - \mathbf{a})$$

So $\overrightarrow{MN} = \frac{1}{2}\overrightarrow{AB}$: parallel (a scalar
multiple) and half the length. ∎

That is the **midpoint theorem**, proved in three lines with vectors.

## Flashcards

### 4.4 | How do you show two vectors are parallel?
Show that one is a scalar multiple of the other: $\mathbf{b} = k\mathbf{a}$.

### 4.4 | What two things must you show to prove three points are collinear?
That two of the vectors between them are **parallel**, and that they share a
**common point**.

### 4.4 | What does $\overrightarrow{AB} = \overrightarrow{DC}$ prove about quadrilateral $ABCD$?
It is a **parallelogram**: one pair of opposite sides is equal and parallel.

### 4.4 | If $\overrightarrow{PQ} = -2\overrightarrow{RS}$, what do you know?
They are parallel, $PQ$ is twice as long as $RS$, and they point in opposite
directions.

## Questions

### 4.4 | mcq | 1 mark | difficulty 2
Which vector is parallel to $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$?

- A. $\begin{pmatrix} 2 \\ -3 \end{pmatrix}$
- B. $\begin{pmatrix} -9 \\ 6 \end{pmatrix}$
- C. $\begin{pmatrix} 6 \\ 4 \end{pmatrix}$
- D. $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$

**Answer:** B

**Working:** $\begin{pmatrix} -9 \\ 6 \end{pmatrix} = -3\begin{pmatrix} 3 \\ -2 \end{pmatrix}$.

### 4.4 | mcq | 1 mark | difficulty 3
$\overrightarrow{AB} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ and
$\overrightarrow{BC} = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$. What can you
conclude?

- A. $ABC$ is a right angle.
- B. $A$, $B$ and $C$ are collinear.
- C. $AB = BC$.
- D. Nothing.

**Answer:** B

**Working:** $\overrightarrow{BC} = 2\overrightarrow{AB}$, so the vectors are
parallel, and they share the point $B$. The three points lie on one line.

### 4.4 | numeric | 1 mark | difficulty 3
$\overrightarrow{PQ} = \begin{pmatrix} 4 \\ k \end{pmatrix}$ is parallel to
$\begin{pmatrix} 6 \\ 9 \end{pmatrix}$. Find $k$.

**Answer:** 6

**Working:** $\begin{pmatrix} 4 \\ k \end{pmatrix} = \frac{2}{3}\begin{pmatrix} 6 \\ 9 \end{pmatrix} = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$, so $k = 6$.

### 4.4 | structured | 5 marks | difficulty 4
$OACB$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and
$\overrightarrow{OB} = \mathbf{b}$. $M$ is the midpoint of $AC$.

(a) Express $\overrightarrow{OC}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.
**(1 mark)**

(b) Express $\overrightarrow{OM}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.
**(2 marks)**

(c) $N$ is the point such that $\overrightarrow{ON} = 2\mathbf{a} + \mathbf{b}$.
Show that $O$, $M$ and $N$ are collinear. **(2 marks)**

**Answer:** (a) $\mathbf{a} + \mathbf{b}$ (b) $\mathbf{a} + \frac{1}{2}\mathbf{b}$
(c) See working

**Working:** (a) In a parallelogram, $\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AC} = \mathbf{a} + \mathbf{b}$.

(b) $\overrightarrow{AC} = \mathbf{b}$, so $\overrightarrow{AM} = \frac{1}{2}\mathbf{b}$
and $\overrightarrow{OM} = \mathbf{a} + \frac{1}{2}\mathbf{b}$ (1 mark each).

(c) $\overrightarrow{ON} = 2\mathbf{a} + \mathbf{b} = 2\left(\mathbf{a} + \tfrac{1}{2}\mathbf{b}\right) = 2\,\overrightarrow{OM}$
(1 mark).

So $\overrightarrow{ON}$ is a scalar multiple of $\overrightarrow{OM}$ — they are
parallel — and both start at the common point $O$. Therefore $O$, $M$ and $N$ are
collinear, with $N$ twice as far from $O$ as $M$ is (1 mark).
