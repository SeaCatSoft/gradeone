---
subject: MATH
topic: geometry-trigonometry-2
lesson: transformations
title: Transformations in the Plane
objectives: ["3.2", "3.3", "3.4", "3.5"]
est_minutes: 20
status: draft
source: Original prose written against Module 3 syllabus objectives 3.2 (represent translations using vectors), 3.3 (locate an image or an object under a transformation), 3.4 (relationship between object and image) and 3.5 (describe a transformation given object and image). NOT YET checked against textbook for depth.
---

## Lesson

A **transformation** moves or changes a shape. The original is the **object**;
the result is the **image**. Points are labelled $A$ and $A'$ ("A dash").

### Translation

A **translation** slides a shape without turning or resizing it. It is
described by a **column vector**:

$$\begin{pmatrix} 4 \\ -3 \end{pmatrix} \quad \text{means 4 right and 3 down}$$

Add the vector to each point's coordinates. To go **back** from image to object,
subtract it — or use the negative vector.

### Reflection

A **reflection** flips a shape in a **mirror line**. Each point of the image is
the same distance from the line as the object point, on the opposite side, and
the line joining them is perpendicular to the mirror.

| Mirror line | Effect on $(x, y)$ |
|---|---|
| $x$-axis | $(x, -y)$ |
| $y$-axis | $(-x, y)$ |
| $y = x$ | $(y, x)$ |
| $y = -x$ | $(-y, -x)$ |

To describe a reflection fully, give the **equation of the mirror line**.

### Rotation

A **rotation** turns a shape about a fixed **centre**, through an **angle**, in a
**direction** (clockwise or anticlockwise). All three must be stated.

About the **origin**:

| Rotation | Effect on $(x, y)$ |
|---|---|
| 90° anticlockwise | $(-y, x)$ |
| 180° (either way) | $(-x, -y)$ |
| 90° clockwise | $(y, -x)$ |

To find the **centre** of an unknown rotation, join two pairs of matching points
and construct the perpendicular bisector of each; they meet at the centre.

### Enlargement

An **enlargement** changes size. It needs a **centre** and a **scale factor**
$k$. Each image point lies on the line from the centre through the object
point, $k$ times as far away.

- $k > 1$: bigger. $0 < k < 1$: smaller (still called an enlargement).
- $k$ **negative**: the image is on the **opposite** side of the centre, and
  upside down.
- Lengths are multiplied by $k$; **areas** by $k^2$.

### What stays the same

| Transformation | Shape | Size | Orientation |
|---|---|---|---|
| Translation | same | same | same |
| Reflection | same | same | **flipped** |
| Rotation | same | same | turned |
| Enlargement | same | **changes** | same (unless $k < 0$) |

Translations, reflections and rotations produce a **congruent** image. An
enlargement produces a **similar** image.

### Describing a transformation

Say **which type** it is and give **all** its details:

| Type | Details needed |
|---|---|
| Translation | the column vector |
| Reflection | the equation of the mirror line |
| Rotation | centre, angle, direction |
| Enlargement | centre, scale factor |

"It's a rotation" earns nothing on its own. "A rotation of 90° clockwise about
$(0, 0)$" earns the marks.

## Flashcards

### 3.2 | How is a translation described?
By a **column vector**, giving the movement across and up.

### 3.5 | What must you state to describe a rotation fully?
The **centre**, the **angle**, and the **direction**.

### 3.5 | What must you state to describe a reflection fully?
The **equation of the mirror line**.

### 3.4 | Which transformations produce a congruent image?
Translation, reflection and rotation. Enlargement gives a **similar** image
(unless $k = 1$).

### 3.3 | What does a reflection in the line $y = x$ do to the point $(a, b)$?
It maps it to $(b, a)$ — the coordinates swap.

### 3.4 | An enlargement has scale factor 4. What happens to the area?
It is multiplied by $4^2 = 16$.

## Questions

### 3.2 | mcq | 1 mark | difficulty 1
The point $(3, 5)$ is translated by $\begin{pmatrix} -2 \\ 4 \end{pmatrix}$. What
is the image?

- A. $(1, 9)$
- B. $(5, 1)$
- C. $(1, 1)$
- D. $(-6, 20)$

**Answer:** A

**Working:** $(3 - 2,\ 5 + 4) = (1, 9)$.

### 3.3 | mcq | 1 mark | difficulty 2
The point $(4, -2)$ is rotated 90° anticlockwise about the origin. What is the
image?

- A. $(2, 4)$
- B. $(-2, -4)$
- C. $(2, -4)$
- D. $(-4, 2)$

**Answer:** A

**Working:** $(x, y) \to (-y, x)$, so $(4, -2) \to (2, 4)$.

### 3.3 | numeric | 1 mark | difficulty 2
A shape is enlarged by scale factor 3 about the origin. The object point is
$(2, -5)$. What is the $y$-coordinate of the image?

**Answer:** -15

**Working:** Multiply both coordinates by 3: $(6, -15)$.

### 3.5 | mcq | 1 mark | difficulty 3
Triangle $ABC$ has vertices $(1, 1)$, $(3, 1)$, $(1, 4)$. Its image has vertices
$(-1, 1)$, $(-3, 1)$, $(-1, 4)$. What is the transformation?

- A. A reflection in the $x$-axis
- B. A reflection in the $y$-axis
- C. A rotation of 180° about the origin
- D. A translation by $\begin{pmatrix} -2 \\ 0 \end{pmatrix}$

**Answer:** B

**Working:** Each $x$-coordinate has changed sign while $y$ stayed the same:
$(x, y) \to (-x, y)$, a reflection in the $y$-axis.

C would change the signs of both coordinates.

### 3.3 | structured | 5 marks | difficulty 3
Triangle $P$ has vertices $A(2, 2)$, $B(6, 2)$ and $C(2, 5)$.

(a) $P$ is translated by $\begin{pmatrix} -3 \\ 2 \end{pmatrix}$ to give $P_1$.
State the coordinates of $P_1$. **(2 marks)**

(b) $P$ is enlarged about the origin with scale factor 2 to give $P_2$. State
the coordinates of $P_2$. **(2 marks)**

(c) State the ratio of the area of $P_2$ to the area of $P$. **(1 mark)**

**Answer:** (a) $(-1, 4)$, $(3, 4)$, $(-1, 7)$ (b) $(4, 4)$, $(12, 4)$, $(4, 10)$
(c) $4 : 1$

**Working:** (c) Area scale factor $= 2^2 = 4$.
