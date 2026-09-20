---
subject: MATH
topic: vectors-matrices-1
lesson: vector-expressions
title: Adding and Scaling Vectors
objectives: ["5.2"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objective 5.2 ("simplify expressions involving vectors"). Covers addition, subtraction, scalar multiplication, and finding routes in geometric figures. NOT YET checked against textbook for depth.
---

## Lesson

### Adding and subtracting column vectors

Add or subtract the matching parts:

$$\begin{pmatrix} 3 \\ 1 \end{pmatrix} + \begin{pmatrix} -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 \\ 5 \end{pmatrix} \qquad \begin{pmatrix} 3 \\ 1 \end{pmatrix} - \begin{pmatrix} -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$$

Adding vectors means doing one journey **then** the other. The sum is the
single journey from the very start to the very end — called the **resultant**.

### Multiplying by a scalar

Multiply **both** parts:

$$3\begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}$$

$3\mathbf{a}$ is parallel to $\mathbf{a}$ and three times as long. $-\mathbf{a}$
points the opposite way.

Combining these:

$$2\mathbf{a} - \mathbf{b} \text{ with } \mathbf{a} = \begin{pmatrix} 4 \\ 1 \end{pmatrix},\ \mathbf{b} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}: \quad \begin{pmatrix} 8 \\ 2 \end{pmatrix} - \begin{pmatrix} 3 \\ -2 \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$$

### Routes through a shape

Many questions use letters instead of numbers. The idea is to find a **route**
from the start to the end along vectors you know.

$$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$$

Going **against** the direction of a vector subtracts it: if
$\overrightarrow{OA} = \mathbf{a}$, then travelling from $A$ to $O$ is $-\mathbf{a}$.

> In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$.
> Find $\overrightarrow{AB}$.

Route from $A$ to $B$: go $A \to O$ then $O \to B$.

$$\overrightarrow{AB} = -\mathbf{a} + \mathbf{b} = \mathbf{b} - \mathbf{a}$$

This is the most useful result in the topic, and it matches the position-vector
rule from the last lesson.

### Midpoints and fractions of a line

If $M$ is the **midpoint** of $AB$, then $\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}$.

Continuing the triangle example:

$$\overrightarrow{OM} = \overrightarrow{OA} + \overrightarrow{AM} = \mathbf{a} + \tfrac{1}{2}(\mathbf{b} - \mathbf{a}) = \tfrac{1}{2}\mathbf{a} + \tfrac{1}{2}\mathbf{b}$$

Simplify by collecting the $\mathbf{a}$ terms and the $\mathbf{b}$ terms, exactly
as with algebra.

## Flashcards

### 5.2 | Add $\begin{pmatrix} 2 \\ 5 \end{pmatrix} + \begin{pmatrix} 3 \\ -1 \end{pmatrix}$.
$\begin{pmatrix} 5 \\ 4 \end{pmatrix}$.

### 5.2 | Find $4\begin{pmatrix} -1 \\ 3 \end{pmatrix}$.
$\begin{pmatrix} -4 \\ 12 \end{pmatrix}$. Multiply both parts.

### 5.2 | $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. What is $\overrightarrow{AB}$?
$\mathbf{b} - \mathbf{a}$. Route: $A \to O \to B$.

### 5.2 | Going against the direction of a vector does what?
Subtracts it — the vector becomes negative.

### 5.2 | $M$ is the midpoint of $AB$. How is $\overrightarrow{AM}$ related to $\overrightarrow{AB}$?
$\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}$.

## Questions

### 5.2 | mcq | 1 mark | difficulty 1
Given $\mathbf{p} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$ and $\mathbf{q} = \begin{pmatrix} 1 \\ 5 \end{pmatrix}$, find $\mathbf{p} + \mathbf{q}$.

- A. $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$
- B. $\begin{pmatrix} 2 \\ -7 \end{pmatrix}$
- C. $\begin{pmatrix} 4 \\ -7 \end{pmatrix}$
- D. $\begin{pmatrix} 3 \\ -10 \end{pmatrix}$

**Answer:** A

**Working:** $\begin{pmatrix} 3 + 1 \\ -2 + 5 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$.

### 5.2 | mcq | 1 mark | difficulty 2
Given $\mathbf{a} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$, find $3\mathbf{a} - 2\mathbf{b}$.

- A. $\begin{pmatrix} 0 \\ 11 \end{pmatrix}$
- B. $\begin{pmatrix} 12 \\ -5 \end{pmatrix}$
- C. $\begin{pmatrix} 0 \\ -5 \end{pmatrix}$
- D. $\begin{pmatrix} 12 \\ 11 \end{pmatrix}$

**Answer:** B

**Working:** $3\mathbf{a} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$ and
$2\mathbf{b} = \begin{pmatrix} -6 \\ 8 \end{pmatrix}$.

$\begin{pmatrix} 6 - (-6) \\ 3 - 8 \end{pmatrix} = \begin{pmatrix} 12 \\ -5 \end{pmatrix}$.

C gets $6 - (-6)$ wrong as 0.

### 5.2 | mcq | 1 mark | difficulty 3
$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and
$\overrightarrow{OC} = \mathbf{c}$. What is $\overrightarrow{AC}$?

- A. $\mathbf{a} + \mathbf{c}$
- B. $\mathbf{a} - \mathbf{c}$
- C. $\mathbf{c} - \mathbf{a}$
- D. $-\mathbf{a} - \mathbf{c}$

**Answer:** C

**Working:** Route $A \to O \to C$: $-\mathbf{a} + \mathbf{c} = \mathbf{c} - \mathbf{a}$.

A is the other diagonal, $\overrightarrow{OB}$.

### 5.2 | structured | 5 marks | difficulty 3
In triangle $OPQ$, $\overrightarrow{OP} = \mathbf{p}$ and $\overrightarrow{OQ} = \mathbf{q}$.
$M$ is the midpoint of $PQ$.

(a) Express $\overrightarrow{PQ}$ in terms of $\mathbf{p}$ and $\mathbf{q}$. **(1 mark)**

(b) Express $\overrightarrow{PM}$ in terms of $\mathbf{p}$ and $\mathbf{q}$. **(1 mark)**

(c) Show that $\overrightarrow{OM} = \frac{1}{2}(\mathbf{p} + \mathbf{q})$. **(3 marks)**

**Answer:** (a) $\mathbf{q} - \mathbf{p}$ (b) $\frac{1}{2}(\mathbf{q} - \mathbf{p})$ (c) See working

**Working:** (a) $P \to O \to Q$: $-\mathbf{p} + \mathbf{q}$.

(b) Half of $\overrightarrow{PQ}$.

(c) $\overrightarrow{OM} = \overrightarrow{OP} + \overrightarrow{PM}$ (1 mark)
$= \mathbf{p} + \frac{1}{2}\mathbf{q} - \frac{1}{2}\mathbf{p}$ (1 mark)
$= \frac{1}{2}\mathbf{p} + \frac{1}{2}\mathbf{q} = \frac{1}{2}(\mathbf{p} + \mathbf{q})$ (1 mark).
