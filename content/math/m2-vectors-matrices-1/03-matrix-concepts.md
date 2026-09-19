---
subject: MATH
topic: vectors-matrices-1
lesson: matrix-concepts
title: What Is a Matrix?
objectives: ["5.3"]
est_minutes: 14
status: draft
source: Original prose written against Module 2 syllabus objective 5.3 ("explain basic concepts associated with matrices"). Covers order, elements, types of matrix and equality. NOT YET checked against textbook for depth.
---

## Lesson

A **matrix** is a rectangular arrangement of numbers in rows and columns,
enclosed in brackets. Each number is an **element**.

$$A = \begin{pmatrix} 2 & 0 & -1 \\ 5 & 3 & 4 \end{pmatrix}$$

Matrices are a compact way to store and work with tables of numbers — prices
and quantities, results, or the coefficients of equations.

### Order

The **order** of a matrix is **rows × columns**, always in that order. $A$ has
2 rows and 3 columns, so its order is $2 \times 3$.

A helpful memory aid: "**R**oman **C**atholic" — Rows, then Columns.

An element is named by its row, then its column. In $A$, the element in row 2,
column 1 is 5.

### Types of matrix

| Type | Description | Example |
|---|---|---|
| Row matrix | one row | $\begin{pmatrix} 3 & 7 & 1 \end{pmatrix}$ |
| Column matrix | one column | $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$ |
| Square matrix | as many rows as columns | $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ |
| Zero (null) matrix | every element is 0 | $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ |
| Identity matrix $I$ | 1s on the leading diagonal, 0s elsewhere | $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |

The **leading diagonal** runs from the top left to the bottom right. The
identity matrix works like the number 1 in multiplication: $AI = IA = A$.

A column vector is simply a column matrix.

### Equal matrices

Two matrices are **equal** when they have the **same order** and every pair of
matching elements is equal. This lets you find unknowns:

$$\begin{pmatrix} x + 1 & 4 \\ 3 & 2y \end{pmatrix} = \begin{pmatrix} 7 & 4 \\ 3 & -10 \end{pmatrix}$$

Matching elements: $x + 1 = 7$, so $x = 6$; $2y = -10$, so $y = -5$.

## Flashcards

### 5.3 | How is the order of a matrix written?
**Rows × columns.** A matrix with 3 rows and 2 columns is $3 \times 2$.

### 5.3 | What is a square matrix?
One with the same number of rows as columns.

### 5.3 | Write the $2 \times 2$ identity matrix.
$$I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

### 5.3 | When are two matrices equal?
When they have the same order and all matching elements are equal.

### 5.3 | What is the leading diagonal?
The elements from the top left to the bottom right.

## Questions

### 5.3 | mcq | 1 mark | difficulty 1
What is the order of $\begin{pmatrix} 1 & 4 \\ 0 & 2 \\ 7 & 5 \end{pmatrix}$?

- A. $2 \times 3$
- B. $3 \times 2$
- C. $6 \times 1$
- D. $3 \times 3$

**Answer:** B

**Working:** 3 rows and 2 columns: rows first, so $3 \times 2$.

### 5.3 | mcq | 1 mark | difficulty 1
Which of these is the $2 \times 2$ identity matrix?

- A. $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$
- B. $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- C. $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- D. $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$

**Answer:** C

**Working:** 1s on the leading diagonal, 0s elsewhere. D is the zero matrix.

### 5.3 | numeric | 1 mark | difficulty 2
Given that $\begin{pmatrix} 2x & 5 \\ 1 & y - 3 \end{pmatrix} = \begin{pmatrix} 8 & 5 \\ 1 & 4 \end{pmatrix}$, find the value of $x + y$.

**Answer:** 11

**Working:** $2x = 8$, so $x = 4$. $y - 3 = 4$, so $y = 7$. $x + y = 11$.

### 5.3 | structured | 3 marks | difficulty 2
$M = \begin{pmatrix} 3 & -1 & 0 & 6 \\ 2 & 5 & 8 & -4 \end{pmatrix}$

(a) State the order of $M$. **(1 mark)**

(b) State the element in row 1, column 4. **(1 mark)**

(c) Is $M$ a square matrix? Give a reason. **(1 mark)**

**Answer:** (a) $2 \times 4$ (b) 6 (c) No — it has 2 rows but 4 columns.
