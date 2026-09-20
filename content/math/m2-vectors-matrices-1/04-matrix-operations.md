---
subject: MATH
topic: vectors-matrices-1
lesson: matrix-operations
title: Matrix Operations
objectives: ["5.4"]
est_minutes: 20
status: draft
source: Original prose written against Module 2 syllabus objective 5.4 ("solve problems involving matrix operations"). Covers addition, subtraction, scalar multiplication, matrix multiplication, and the determinant and inverse of a 2 x 2 matrix; confirm against the printed content notes whether the inverse belongs here or in Module 3. NOT YET checked against textbook for depth.
---

## Lesson

### Adding and subtracting

Only matrices of the **same order** can be added or subtracted. Combine
matching elements:

$$\begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix} + \begin{pmatrix} 2 & -5 \\ 6 & 1 \end{pmatrix} = \begin{pmatrix} 5 & -4 \\ 6 & 5 \end{pmatrix}$$

### Multiplying by a number

Multiply **every** element:

$$3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$$

### Multiplying two matrices

This is the one that needs care. Each element of the answer comes from a
**row** of the first matrix and a **column** of the second: multiply
matching pairs, then add.

$$\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2(5) + 3(1) & 2(0) + 3(2) \\ 1(5) + 4(1) & 1(0) + 4(2) \end{pmatrix} = \begin{pmatrix} 13 & 6 \\ 9 & 8 \end{pmatrix}$$

"Row 1 times column 1" gives the element in row 1, column 1, and so on.

**When can you multiply?** Only when the number of **columns** in the first
equals the number of **rows** in the second. The answer takes the outer
numbers:

$$(2 \times 3) \times (3 \times 1) \;\to\; 2 \times 1$$

The inner numbers must match; the outer ones give the order of the answer.

**Order matters.** In general $AB \neq BA$. Swapping them usually gives a
different answer — or one that can't be worked out at all.

### The determinant of a $2 \times 2$ matrix

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\det A = |A| = ad - bc$$

Leading diagonal product **minus** the other diagonal product.

$$\det \begin{pmatrix} 5 & 2 \\ 3 & 4 \end{pmatrix} = 5(4) - 2(3) = 14$$

A matrix with determinant 0 is **singular**. It has no inverse.

### The inverse of a $2 \times 2$ matrix

The inverse $A^{-1}$ undoes $A$: $AA^{-1} = A^{-1}A = I$.

$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

In words: **swap** $a$ and $d$, **change the signs** of $b$ and $c$, and divide
by the determinant.

$$\begin{pmatrix} 5 & 2 \\ 3 & 4 \end{pmatrix}^{-1} = \frac{1}{14}\begin{pmatrix} 4 & -2 \\ -3 & 5 \end{pmatrix}$$

Check by multiplying: you should get $I$.

## Flashcards

### 5.4 | When can two matrices be added?
Only when they have the **same order**.

### 5.4 | When can matrix $A$ be multiplied by matrix $B$ to give $AB$?
When the number of **columns of $A$** equals the number of **rows of $B$**.

### 5.4 | What is the order of the product of a $2 \times 3$ matrix and a $3 \times 4$ matrix?
$2 \times 4$ — the outer numbers.

### 5.4 | State the determinant of $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$.
$ad - bc$.

### 5.4 | How do you find the inverse of a $2 \times 2$ matrix?
Swap $a$ and $d$, change the signs of $b$ and $c$, and divide by the determinant.

### 5.4 | Does $AB$ always equal $BA$?
No. Matrix multiplication is generally not commutative.

## Questions

### 5.4 | mcq | 1 mark | difficulty 1
$\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \begin{pmatrix} 1 & 5 \\ 0 & 2 \end{pmatrix} =$

- A. $\begin{pmatrix} 3 & -4 \\ 2 & 1 \end{pmatrix}$
- B. $\begin{pmatrix} 5 & 6 \\ 2 & 5 \end{pmatrix}$
- C. $\begin{pmatrix} 3 & 4 \\ 2 & 1 \end{pmatrix}$
- D. $\begin{pmatrix} 4 & 5 \\ 0 & 6 \end{pmatrix}$

**Answer:** A

**Working:** Subtract matching elements: $4 - 1 = 3$, $1 - 5 = -4$, $2 - 0 = 2$,
$3 - 2 = 1$.

### 5.4 | numeric | 1 mark | difficulty 2
Find the determinant of $\begin{pmatrix} 7 & 3 \\ 2 & 5 \end{pmatrix}$.

**Answer:** 29

**Working:** $7(5) - 3(2) = 35 - 6 = 29$.

### 5.4 | mcq | 1 mark | difficulty 2
$\begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}\begin{pmatrix} 4 \\ 5 \end{pmatrix} =$

- A. $\begin{pmatrix} 14 \\ 12 \end{pmatrix}$
- B. $\begin{pmatrix} 4 & 10 \\ 12 & 0 \end{pmatrix}$
- C. $\begin{pmatrix} 19 \\ 8 \end{pmatrix}$
- D. $\begin{pmatrix} 13 \\ 15 \end{pmatrix}$

**Answer:** A

**Working:** Row 1: $1(4) + 2(5) = 14$. Row 2: $3(4) + 0(5) = 12$.

A $2 \times 2$ times a $2 \times 1$ gives a $2 \times 1$, which rules out B.

### 5.4 | numeric | 1 mark | difficulty 3
For what value of $k$ is $\begin{pmatrix} k & 6 \\ 2 & 3 \end{pmatrix}$ singular?

**Answer:** 4

**Working:** Singular means the determinant is 0: $3k - 12 = 0$, so $k = 4$.

### 5.4 | structured | 6 marks | difficulty 3
$A = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 2 & 5 \end{pmatrix}$.

(a) Find $AB$. **(2 marks)**

(b) Find the determinant of $A$. **(1 mark)**

(c) Find $A^{-1}$. **(2 marks)**

(d) Verify that $AA^{-1} = I$. **(1 mark)**

**Answer:** (a) $\begin{pmatrix} 5 & 5 \\ 8 & 10 \end{pmatrix}$ (b) 2
(c) $\frac{1}{2}\begin{pmatrix} 2 & -1 \\ -4 & 3 \end{pmatrix}$, or $\begin{pmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{pmatrix}$

**Working:** (a) Row 1: $3 + 2 = 5$, $0 + 5 = 5$. Row 2: $4 + 4 = 8$,
$0 + 10 = 10$.

(b) $3(2) - 1(4) = 2$.

(c) Swap 3 and 2, change the signs of 1 and 4, divide by 2.

(d) $\begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}\begin{pmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{pmatrix} = \begin{pmatrix} 3 - 2 & -\frac{3}{2} + \frac{3}{2} \\ 4 - 4 & -2 + 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ ✓
