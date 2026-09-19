---
subject: MATH
topic: geometry-trigonometry-1
lesson: congruence-similarity
title: Congruent and Similar Figures
objectives: ["4.6"]
est_minutes: 18
status: draft
source: Original prose written against Module 2 syllabus objective 4.6(b) congruent triangles and 4.6(c) similar figures. NOT YET checked against textbook for depth.
---

## Lesson

### Congruent shapes

Two shapes are **congruent** if they are **identical** in shape **and** size —
one could be placed exactly on top of the other (possibly after flipping it
over).

For triangles, you don't need to check all six measurements. Any **one** of
these conditions proves two triangles congruent:

| Condition | Meaning |
|---|---|
| **SSS** | all three sides equal |
| **SAS** | two sides and the angle **between** them equal |
| **ASA** (or AAS) | two angles and a corresponding side equal |
| **RHS** | right angle, hypotenuse and one other side equal |

Two conditions that do **not** prove congruence:

- **AAA** — equal angles give the same shape but possibly different sizes.
- **SSA** — two sides and an angle that isn't between them can make two
  different triangles.

When you state that triangles are congruent, name the vertices in
**matching order**: $\triangle ABC \equiv \triangle PQR$ means $A$ matches $P$, $B$
matches $Q$ and $C$ matches $R$.

### Similar shapes

Two shapes are **similar** if they're the same **shape** but possibly different
sizes — one is an enlargement of the other.

- Corresponding **angles** are **equal**.
- Corresponding **sides** are in the **same ratio**, the **scale factor** $k$.

For triangles, equal angles are enough: if two angles match, the third must
too, and the triangles are similar.

### Finding missing lengths

Match corresponding sides, find the scale factor, then use it.

> Triangles $ABC$ and $PQR$ are similar. $AB = 4$ cm, $BC = 6$ cm, $PQ = 10$ cm.
> Find $QR$.

$$k = \frac{PQ}{AB} = \frac{10}{4} = 2.5 \qquad QR = 2.5 \times 6 = 15 \text{ cm}$$

Going from the big shape to the small one, **divide** by $k$ instead.

The hard part is matching sides correctly. Match them by the **angles** they sit
opposite, not by where they are on the page.

### Areas and volumes of similar shapes

If lengths are multiplied by $k$:

- areas are multiplied by $k^2$
- volumes are multiplied by $k^3$

Double the lengths of a shape, and its area becomes **four** times bigger.

## Flashcards

### 4.6 | What does "congruent" mean?
Identical in shape **and** size.

### 4.6 | Name the four conditions that prove triangles congruent.
SSS, SAS, ASA (or AAS), and RHS.

### 4.6 | Why doesn't AAA prove two triangles congruent?
Equal angles give the same shape, but the triangles could be different sizes.
AAA proves **similarity**.

### 4.6 | What is true about corresponding sides of similar figures?
They are in the same ratio: the scale factor.

### 4.6 | Lengths are scaled by 3. What happens to the area?
It is multiplied by $3^2 = 9$.

## Questions

### 4.6 | mcq | 1 mark | difficulty 1
Two triangles have all three pairs of corresponding angles equal. What can you
conclude?

- A. They are congruent.
- B. They are similar.
- C. They are both right-angled.
- D. Nothing.

**Answer:** B

**Working:** Equal angles guarantee the same shape (similar) but not the same
size.

### 4.6 | numeric | 1 mark | difficulty 2
Triangles $XYZ$ and $LMN$ are similar, with $XY$ corresponding to $LM$.
$XY = 6$ cm, $LM = 9$ cm and $YZ = 8$ cm. Find $MN$, in cm.

**Answer:** 12

**Working:** Scale factor $= \frac{9}{6} = 1.5$. $MN = 1.5 \times 8 = 12$ cm.

### 4.6 | mcq | 1 mark | difficulty 2
Which information is **not** enough to prove two triangles congruent?

- A. Three pairs of equal sides
- B. Two sides and the included angle equal
- C. Two sides and a non-included angle equal
- D. Two angles and a corresponding side equal

**Answer:** C

**Working:** SSA (a non-included angle) can produce two different triangles.
A is SSS, B is SAS and D is ASA/AAS.

### 4.6 | numeric | 1 mark | difficulty 3
Two similar photo frames have widths of 10 cm and 25 cm. The smaller frame has
an area of 120 cm². Find the area of the larger frame, in cm².

**Answer:** 750

**Working:** Length scale factor $= 2.5$, so area scale factor $= 2.5^2 = 6.25$.
$120 \times 6.25 = 750$ cm².

### 4.6 | structured | 4 marks | difficulty 3
A 1.8 m tall man casts a shadow 2.4 m long. At the same time, a tree casts a
shadow 16 m long.

(a) Explain why the triangles formed by each object and its shadow are
similar. **(2 marks)**

(b) Find the height of the tree. **(2 marks)**

**Answer:** (a) Both contain a right angle, and the sun's rays hit the ground at
the same angle, so all three angles match. (b) 12 m

**Working:** (b) Scale factor $= \frac{16}{2.4} = \frac{20}{3}$ (1 mark).
Height $= 1.8 \times \frac{20}{3} = 12$ m (1 mark).
