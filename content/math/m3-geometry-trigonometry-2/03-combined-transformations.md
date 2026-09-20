---
subject: MATH
topic: geometry-trigonometry-2
lesson: combined-transformations
title: Combining Transformations
objectives: ["3.6"]
est_minutes: 15
status: draft
source: Original prose written against Module 3 syllabus objective 3.6 ("locate the image of an object under a combination of transformations"). NOT YET checked against textbook for depth.
---

## Lesson

Two transformations applied one after another have a combined effect, which is
often a **single** transformation of a different kind.

### Doing them in turn

Apply the first transformation to the object to get the first image, then apply
the second to **that** image.

Label carefully: object $\to A' \to A''$ ("A double dash").

> $T$ is a translation by $\begin{pmatrix} 2 \\ 0 \end{pmatrix}$; $R$ is a
> reflection in the $x$-axis. Apply $T$ then $R$ to the point $(1, 3)$.

- After $T$: $(3, 3)$
- After $R$: $(3, -3)$

### Order matters

Apply them the other way round, $R$ then $T$:

- After $R$: $(1, -3)$
- After $T$: $(3, -3)$

Here the answers happen to match, but that is not usual. Reflecting in the
$y$-axis and then translating right gives a different result from translating
right and then reflecting — try $(1, 3)$ with a translation of
$\begin{pmatrix} 2 \\ 0 \end{pmatrix}$ and a reflection in the $y$-axis: you get
$(-3, 3)$ one way and $(1, 3)$ the other.

In matrix form (Vectors and Matrices 2), "do $P$ then $Q$" is the product $QP$
— second one on the **left**.

### Single equivalent transformations

Some combinations simplify neatly:

| Combination | Single equivalent |
|---|---|
| Two reflections in **parallel** mirrors | a **translation**, of twice the distance between the mirrors |
| Two reflections in **intersecting** mirrors | a **rotation** about the intersection, through twice the angle between them |
| Two rotations about the **same centre** | a single rotation, adding the angles |
| Two translations | a single translation, adding the vectors |
| A rotation of 180° twice | the identity: back to the start |

> Reflect in the $x$-axis, then in the $y$-axis.

The mirrors meet at the origin at 90°, so the result is a rotation of
$2 \times 90° = 180°$ about the origin. Check with $(2, 3)$: after the first
reflection $(2, -3)$, after the second $(-2, -3)$ — which is $(x, y) \to (-x, -y)$,
a 180° rotation. ✓

### Describing the combination

When a question asks for "the single transformation equivalent to…", describe
it **fully** — with its centre, angle and direction, or its mirror line, or its
vector — just as for a single transformation.

## Flashcards

### 3.6 | How do you apply a combination of transformations?
Apply the first to the object, then apply the second to that image.

### 3.6 | Does the order of two transformations matter?
Usually yes: different orders normally give different images.

### 3.6 | Two reflections in parallel mirror lines are equivalent to what?
A **translation**, of twice the distance between the lines.

### 3.6 | Two reflections in perpendicular mirror lines are equivalent to what?
A **rotation of 180°** about the point where the lines cross.

### 3.6 | In matrices, how do you write "apply $P$ then $Q$"?
$QP$ — the second transformation is on the left.

## Questions

### 3.6 | mcq | 1 mark | difficulty 2
The point $(2, 5)$ is reflected in the $x$-axis and then translated by
$\begin{pmatrix} 3 \\ 1 \end{pmatrix}$. What is the final image?

- A. $(5, -4)$
- B. $(5, 6)$
- C. $(-5, 4)$
- D. $(5, 4)$

**Answer:** A

**Working:** After the reflection: $(2, -5)$. After the translation:
$(2 + 3,\ -5 + 1) = (5, -4)$.

### 3.6 | mcq | 1 mark | difficulty 2
A shape is rotated 90° clockwise about the origin, then rotated 90° clockwise
again. What single transformation is this?

- A. A reflection in the $x$-axis
- B. A rotation of 180° about the origin
- C. The identity
- D. A rotation of 90° anticlockwise

**Answer:** B

**Working:** The angles add: $90° + 90° = 180°$ about the same centre.

### 3.6 | numeric | 1 mark | difficulty 3
The point $(4, 1)$ is reflected in the line $y = x$, then reflected in the
$x$-axis. What is the $y$-coordinate of the final image?

**Answer:** -4

**Working:** After the first reflection, the coordinates swap: $(1, 4)$. After
reflecting in the $x$-axis: $(1, -4)$.

### 3.6 | structured | 4 marks | difficulty 3
Triangle $T$ has a vertex at $A(3, 1)$. $T$ is translated by
$\begin{pmatrix} -1 \\ 2 \end{pmatrix}$ to give $T_1$, and $T_1$ is then rotated
180° about the origin to give $T_2$.

(a) Find the coordinates of the image of $A$ in $T_1$. **(1 mark)**

(b) Find the coordinates of the image of $A$ in $T_2$. **(2 marks)**

(c) Are $T$ and $T_2$ congruent? Give a reason. **(1 mark)**

**Answer:** (a) $(2, 3)$ (b) $(-2, -3)$ (c) Yes — translations and rotations
change position and orientation but not size or shape.

**Working:** (b) A 180° rotation about the origin maps $(x, y)$ to $(-x, -y)$.
