---
subject: MATH
topic: vectors-matrices-2
lesson: determinant-and-inverse
title: Determinants and Inverse Matrices
objectives: ["4.5", "4.6", "4.7"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objectives 4.5 (evaluate the determinant of a 2 x 2 matrix), 4.6 (define the multiplicative inverse of a non-singular square matrix) and 4.7 (obtain the inverse of a non-singular 2 x 2 matrix). All three are still flagged for review. This revisits and extends Module 2 Vectors and Matrices 1 lesson 4. NOT YET checked against textbook for depth.
---

## Lesson

### The determinant

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\det A = |A| = ad - bc$$

Multiply along the **leading diagonal**, then subtract the product of the other
diagonal.

$$\det\begin{pmatrix} 7 & 2 \\ 3 & 4 \end{pmatrix} = 28 - 6 = 22$$

Mind the signs: $\det\begin{pmatrix} 5 & -3 \\ 2 & 4 \end{pmatrix} = 20 - (-6) = 26$.

### Singular and non-singular

- If $\det A \neq 0$, $A$ is **non-singular** and **has** an inverse.
- If $\det A = 0$, $A$ is **singular** and has **no** inverse — you'd be
  dividing by zero.

### What the inverse is

The **multiplicative inverse** of $A$, written $A^{-1}$, is the matrix that
satisfies

$$AA^{-1} = A^{-1}A = I$$

where $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ is the identity.

It's the matrix equivalent of a reciprocal: $5 \times \frac{1}{5} = 1$. And just
as 0 has no reciprocal, a matrix with determinant 0 has no inverse.

Note that $A^{-1}$ does **not** mean "one over each element".

### Finding the inverse

$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

Three steps:

1. **Swap** the leading-diagonal elements, $a$ and $d$.
2. **Change the signs** of $b$ and $c$.
3. **Divide** by the determinant.

> Find the inverse of $A = \begin{pmatrix} 4 & 7 \\ 1 & 2 \end{pmatrix}$.

$\det A = 8 - 7 = 1$, so

$$A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix} = \begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix}$$

**Check:** $AA^{-1} = \begin{pmatrix} 8 - 7 & -28 + 28 \\ 2 - 2 & -7 + 8 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ ✓

When the determinant isn't 1, leave the fraction outside the matrix — it's
tidier and avoids rounding:

$$\begin{pmatrix} 3 & 5 \\ 1 & 4 \end{pmatrix}^{-1} = \frac{1}{7}\begin{pmatrix} 4 & -5 \\ -1 & 3 \end{pmatrix}$$

## Flashcards

### 4.5 | How do you evaluate the determinant of $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$?
$ad - bc$.

### 4.6 | What does it mean for a matrix to be singular?
Its determinant is 0, so it has **no inverse**.

### 4.6 | Define the multiplicative inverse of a matrix $A$.
The matrix $A^{-1}$ with $AA^{-1} = A^{-1}A = I$.

### 4.7 | State the formula for the inverse of a $2 \times 2$ matrix.
$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

### 4.7 | In words, how do you form the inverse?
Swap $a$ and $d$, change the signs of $b$ and $c$, and divide by the
determinant.

### 4.6 | Does $A^{-1}$ mean the reciprocal of each element?
No. It is the matrix that multiplies with $A$ to give the identity.

## Questions

### 4.5 | numeric | 1 mark | difficulty 1
Find the determinant of $\begin{pmatrix} 6 & 4 \\ 2 & 3 \end{pmatrix}$.

**Answer:** 10

**Working:** $6(3) - 4(2) = 18 - 8 = 10$.

### 4.5 | numeric | 1 mark | difficulty 2
Find the determinant of $\begin{pmatrix} -2 & 5 \\ 3 & -4 \end{pmatrix}$.

**Answer:** -7

**Working:** $(-2)(-4) - (5)(3) = 8 - 15 = -7$.

### 4.6 | numeric | 1 mark | difficulty 2
For what value of $x$ is $\begin{pmatrix} x & 8 \\ 2 & x \end{pmatrix}$ singular,
given that $x > 0$?

**Answer:** 4

**Working:** $x^2 - 16 = 0$, so $x = \pm 4$. Since $x > 0$, $x = 4$.

### 4.7 | mcq | 1 mark | difficulty 2
What is the inverse of $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$?

- A. $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
- B. $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$
- C. $\frac{1}{11}\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
- D. $\begin{pmatrix} \frac{1}{2} & 1 \\ \frac{1}{5} & \frac{1}{3} \end{pmatrix}$

**Answer:** A

**Working:** $\det = 6 - 5 = 1$, so no fraction is needed. Swap 2 and 3, change
the signs of 1 and 5.

D wrongly takes reciprocals of the elements.

### 4.7 | structured | 5 marks | difficulty 3
$M = \begin{pmatrix} 5 & 2 \\ 4 & 3 \end{pmatrix}$.

(a) Find $\det M$. **(1 mark)**

(b) Find $M^{-1}$. **(2 marks)**

(c) Verify that $M^{-1}M = I$. **(2 marks)**

**Answer:** (a) 7 (b) $\frac{1}{7}\begin{pmatrix} 3 & -2 \\ -4 & 5 \end{pmatrix}$
(c) See working

**Working:** (a) $15 - 8 = 7$.

(c) $\frac{1}{7}\begin{pmatrix} 3 & -2 \\ -4 & 5 \end{pmatrix}\begin{pmatrix} 5 & 2 \\ 4 & 3 \end{pmatrix} = \frac{1}{7}\begin{pmatrix} 15 - 8 & 6 - 6 \\ -20 + 20 & -8 + 15 \end{pmatrix} = \frac{1}{7}\begin{pmatrix} 7 & 0 \\ 0 & 7 \end{pmatrix} = I$ ✓
