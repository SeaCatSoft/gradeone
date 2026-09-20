---
subject: MATH
topic: vectors-matrices-2
lesson: transformation-matrices
title: Matrices for Transformations
objectives: ["4.8"]
est_minutes: 18
status: draft
source: Original prose written against Module 3 syllabus objective 4.8 ("determine a 2 x 2 matrix associated with a specified transformation"), still flagged for review. The transformations themselves are covered in Geometry and Trigonometry 2. NOT YET checked against textbook for depth.
---

## Lesson

A $2 \times 2$ matrix can **transform** points. Multiply the matrix by a point's
position vector, and you get the image:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x' \\ y' \end{pmatrix}$$

### The standard matrices

| Transformation | Matrix |
|---|---|
| Identity (no change) | $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| Reflection in the $x$-axis | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Reflection in the $y$-axis | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| Reflection in $y = x$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| Reflection in $y = -x$ | $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$ |
| Rotation 90° anticlockwise about $O$ | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ |
| Rotation 180° about $O$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Rotation 90° clockwise about $O$ | $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ |
| Enlargement, scale factor $k$, centre $O$ | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$ |

A **translation** cannot be done by a $2 \times 2$ matrix — it's an **addition**
of a column vector, not a multiplication.

### Deriving a matrix instead of memorising

The columns of the matrix are the images of the two unit points:

- **Column 1** is the image of $(1, 0)$.
- **Column 2** is the image of $(0, 1)$.

> Find the matrix for a 90° anticlockwise rotation about the origin.

Under that rotation, $(1, 0) \to (0, 1)$ and $(0, 1) \to (-1, 0)$. Writing those
as columns:

$$\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

This is worth practising: it rebuilds any matrix in the table in a few seconds,
and it works for transformations you haven't memorised.

### Finding the image of a shape

Write the vertices as **columns** of one matrix and multiply once.

> Triangle with vertices $(1, 1)$, $(4, 1)$, $(1, 3)$, reflected in the $x$-axis.

$$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & 4 & 1 \\ 1 & 1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 4 & 1 \\ -1 & -1 & -3 \end{pmatrix}$$

The images are $(1, -1)$, $(4, -1)$ and $(1, -3)$.

### The determinant and the inverse

- The **determinant** of a transformation matrix is the **area scale factor**.
  A reflection or rotation has determinant $\pm 1$: areas don't change.
- The **inverse matrix** undoes the transformation. The inverse of a 90°
  anticlockwise rotation is a 90° clockwise rotation.

That's how you find the **object** from its image: multiply the image by the
inverse matrix.

## Flashcards

### 4.8 | What does column 1 of a transformation matrix represent?
The image of the point $(1, 0)$.

### 4.8 | Give the matrix for a reflection in the $y$-axis.
$$\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$$

### 4.8 | Give the matrix for a 180° rotation about the origin.
$$\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$$

### 4.8 | Why can't a translation be represented by a $2 \times 2$ matrix?
A translation adds a vector; matrix transformation multiplies. The origin would
have to move, and multiplication always leaves it fixed.

### 4.8 | What does the determinant of a transformation matrix tell you?
The **area scale factor** of the transformation.

### 4.8 | How do you get back from an image to the object?
Multiply by the **inverse** of the transformation matrix.

## Questions

### 4.8 | mcq | 1 mark | difficulty 1
Which matrix represents a reflection in the $x$-axis?

- A. $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$
- B. $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- C. $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- D. $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$

**Answer:** B

**Working:** Reflecting in the $x$-axis keeps $x$ and negates $y$:
$(x, y) \to (x, -y)$.

### 4.8 | mcq | 1 mark | difficulty 2
The matrix $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ represents

- A. a rotation of 90°
- B. a reflection in $y = x$
- C. an enlargement of scale factor 3, centre the origin
- D. a translation of 3 units

**Answer:** C

**Working:** It multiplies both coordinates by 3.

### 4.8 | numeric | 1 mark | difficulty 2
The point $(2, 5)$ is transformed by $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
What is the $x$-coordinate of the image?

**Answer:** 5

**Working:** $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 \\ 5 \end{pmatrix} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$ — a reflection in $y = x$, which swaps the coordinates.

### 4.8 | mcq | 1 mark | difficulty 3
A transformation maps $(1, 0)$ to $(0, -1)$ and $(0, 1)$ to $(1, 0)$. Which
matrix represents it?

- A. $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$
- B. $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- C. $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$
- D. $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$

**Answer:** A

**Working:** The images become the columns: $\begin{pmatrix} 0 \\ -1 \end{pmatrix}$
then $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$. This is a 90° clockwise rotation.

### 4.8 | structured | 5 marks | difficulty 3
Triangle $T$ has vertices $A(2, 1)$, $B(5, 1)$ and $C(2, 4)$. It is transformed
by $M = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

(a) Describe fully the transformation represented by $M$. **(2 marks)**

(b) Find the coordinates of the images of $A$, $B$ and $C$. **(2 marks)**

(c) State the area scale factor of the transformation. **(1 mark)**

**Answer:** (a) A rotation of 90° anticlockwise about the origin
(b) $A'(-1, 2)$, $B'(-1, 5)$, $C'(-4, 2)$ (c) 1

**Working:** (b) $M\begin{pmatrix} 2 & 5 & 2 \\ 1 & 1 & 4 \end{pmatrix} = \begin{pmatrix} -1 & -1 & -4 \\ 2 & 5 & 2 \end{pmatrix}$.

(c) $\det M = (0)(0) - (-1)(1) = 1$, so areas are unchanged.
