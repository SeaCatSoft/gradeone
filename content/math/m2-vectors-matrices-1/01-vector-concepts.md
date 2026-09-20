---
subject: MATH
topic: vectors-matrices-1
lesson: vector-concepts
title: What Is a Vector?
objectives: ["5.1"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objective 5.1 ("explain concepts associated with vectors"). Covers notation, column vectors, magnitude, position vectors, and equal, negative and parallel vectors. Confirm the full concept list against the printed content notes. NOT YET checked against textbook for depth.
---

## Lesson

A **vector** has both **size** and **direction**. "10 km" is just a distance
(a **scalar**); "10 km north-east" is a vector. Velocity, force and
displacement are vectors; mass, time and temperature are scalars.

### Writing vectors

A vector can be written as:

- a **directed line segment** $\overrightarrow{AB}$, from $A$ to $B$
- a bold lower-case letter, $\mathbf{a}$ (handwritten as $\underset{\sim}{a}$)
- a **column vector**:

$$\overrightarrow{AB} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$$

The top number is the movement **across** ($+$ right, $-$ left), the bottom is
the movement **up** ($+$ up, $-$ down). So this vector means 3 right, 2 down.

To find the column vector between two points, subtract: **end minus start**.
From $A(1, 4)$ to $B(4, 2)$:

$$\overrightarrow{AB} = \begin{pmatrix} 4 - 1 \\ 2 - 4 \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$$

### Magnitude

The **magnitude** (length) of a vector is written $|\mathbf{a}|$ or
$|\overrightarrow{AB}|$. By Pythagoras' theorem:

$$\left|\begin{pmatrix} x \\ y \end{pmatrix}\right| = \sqrt{x^2 + y^2}$$

$$\left|\begin{pmatrix} 3 \\ -4 \end{pmatrix}\right| = \sqrt{9 + 16} = 5$$

The sign doesn't matter for the magnitude, because it's squared.

### Position vectors

The **position vector** of a point $P$ is the vector from the origin $O$ to
$P$. If $P$ is $(5, -1)$, then

$$\overrightarrow{OP} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}$$

And a useful rule: $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$.

### Equal, negative and parallel vectors

- **Equal** vectors have the same size **and** direction — they don't need to
  start in the same place.
- The **negative** $-\mathbf{a}$ has the same size but the **opposite** direction.
  $\overrightarrow{BA} = -\overrightarrow{AB}$.
- **Parallel** vectors are multiples of each other. $\begin{pmatrix} 6 \\ 4 \end{pmatrix} = 2\begin{pmatrix} 3 \\ 2 \end{pmatrix}$,
  so they're parallel, and the first is twice as long.

## Flashcards

### 5.1 | What is the difference between a vector and a scalar?
A vector has size **and** direction. A scalar has size only.

### 5.1 | How do you find $\overrightarrow{AB}$ from the coordinates of $A$ and $B$?
End minus start: subtract the coordinates of $A$ from those of $B$.

### 5.1 | Find the magnitude of $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$.
$\sqrt{36 + 64} = 10$.

### 5.1 | What is a position vector?
The vector from the origin $O$ to a point.

### 5.1 | How can you tell that two vectors are parallel?
One is a **scalar multiple** of the other.

### 5.1 | How does $\overrightarrow{BA}$ relate to $\overrightarrow{AB}$?
$\overrightarrow{BA} = -\overrightarrow{AB}$: the same length, in the opposite direction.

## Questions

### 5.1 | mcq | 1 mark | difficulty 1
$P$ is the point $(2, 5)$ and $Q$ is the point $(7, 3)$. Which is $\overrightarrow{PQ}$?

- A. $\begin{pmatrix} 5 \\ -2 \end{pmatrix}$
- B. $\begin{pmatrix} -5 \\ 2 \end{pmatrix}$
- C. $\begin{pmatrix} 9 \\ 8 \end{pmatrix}$
- D. $\begin{pmatrix} 5 \\ 2 \end{pmatrix}$

**Answer:** A

**Working:** End minus start: $\begin{pmatrix} 7 - 2 \\ 3 - 5 \end{pmatrix} = \begin{pmatrix} 5 \\ -2 \end{pmatrix}$.

B is $\overrightarrow{QP}$. C adds the coordinates.

### 5.1 | numeric | 1 mark | difficulty 2
Find the magnitude of the vector $\begin{pmatrix} -5 \\ 12 \end{pmatrix}$.

**Answer:** 13

**Working:** $\sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$.

### 5.1 | mcq | 1 mark | difficulty 2
Which vector is parallel to $\begin{pmatrix} 2 \\ -3 \end{pmatrix}$?

- A. $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$
- B. $\begin{pmatrix} -4 \\ 6 \end{pmatrix}$
- C. $\begin{pmatrix} 4 \\ 6 \end{pmatrix}$
- D. $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$

**Answer:** B

**Working:** $\begin{pmatrix} -4 \\ 6 \end{pmatrix} = -2\begin{pmatrix} 2 \\ -3 \end{pmatrix}$,
a scalar multiple. It points the opposite way, but it's still parallel.

### 5.1 | structured | 4 marks | difficulty 3
The position vectors of $A$ and $B$ relative to the origin $O$ are
$\overrightarrow{OA} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and
$\overrightarrow{OB} = \begin{pmatrix} 7 \\ 10 \end{pmatrix}$.

(a) Find $\overrightarrow{AB}$. **(2 marks)**

(b) Find $|\overrightarrow{AB}|$. **(2 marks)**

**Answer:** (a) $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$ (b) 10

**Working:** (a) $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \begin{pmatrix} 7 - 1 \\ 10 - 2 \end{pmatrix} = \begin{pmatrix} 6 \\ 8 \end{pmatrix}$.

(b) $\sqrt{6^2 + 8^2} = \sqrt{100} = 10$.
