---
subject: MATH
topic: geometry-trigonometry-2
lesson: bearings-problems
title: Problems Involving Bearings
objectives: ["3.10"]
est_minutes: 17
status: draft
source: Original prose written against Module 3 syllabus objective 3.10 ("solve problems involving bearings"). Extends the introduction in Module 2 Geometry and Trigonometry 1 to problems needing the sine and cosine rules. NOT YET checked against textbook for depth.
---

## Lesson

### The rules of bearings

- Measured from **north**
- **Clockwise**
- Written with **three figures**: 007°, 085°, 250°

### Drawing the diagram

Bearings questions are won or lost on the diagram.

1. Mark each point.
2. Draw a **north line** (a dashed vertical arrow) at **every** point you
   measure a bearing from.
3. Mark the given bearings as angles **clockwise from the north line**.
4. Fill in the angles **inside** the triangle — this is the step that turns a
   bearings question into an ordinary triangle question.

### Finding the angles inside the triangle

Two facts do most of the work:

- The north lines at different points are **parallel**, so alternate and
  co-interior angles apply.
- A **back bearing** differs by 180°.

> $B$ is on a bearing of 070° from $A$. What is the bearing of $A$ from $B$?

$070° + 180° = 250°$.

With co-interior angles: the angle at $B$ between the north line and $BA$ is
$180° - 70° = 110°$ measured one way, and the bearing continues round to 250°.

### Worked example

> A ship sails from $P$ for 20 km on a bearing of 050° to $Q$, then 30 km on a
> bearing of 140° to $R$.

The angle $PQR$ inside the triangle:

- At $Q$, the bearing back to $P$ is $050° + 180° = 230°$.
- The bearing from $Q$ to $R$ is 140°.
- Angle $PQR = 230° - 140° = 90°$.

So the triangle is right-angled, and $PR = \sqrt{20^2 + 30^2} = 36.1$ km.

For the bearing of $R$ from $P$: $\tan \theta = \frac{30}{20}$ gives
$\theta = 56.3°$, the angle at $P$ inside the triangle. The bearing of $R$ from
$P$ is $050° + 56.3° = 106.3°$, so **106°**.

### When the triangle isn't right-angled

Use the cosine rule for the distance (two sides and the included angle), then
the sine rule for an angle, then add or subtract from a bearing to answer the
question.

Two habits that prevent lost marks:

- Give bearings with **three figures**: 072°, not 72°.
- Answer the question actually asked — "the bearing of $R$ **from** $P$" is
  measured at $P$, not at $R$.

## Flashcards

### 3.10 | How are bearings written?
As three figures, measured clockwise from north: 045°, 130°, 315°.

### 3.10 | What is the back bearing of 115°?
295°. Add 180°.

### 3.10 | What is the back bearing of 240°?
060°. Subtract 180°, since adding would exceed 360°.

### 3.10 | Why are north lines useful in bearings problems?
They are parallel, so alternate and co-interior angles give the angles inside
the triangle.

### 3.10 | "The bearing of $B$ from $A$" is measured at which point?
At $A$ — the point you are measuring **from**.

## Questions

### 3.10 | numeric | 1 mark | difficulty 1
A town $Y$ is on a bearing of 128° from town $X$. What is the bearing of $X$
from $Y$, in degrees?

**Answer:** 308

**Working:** $128 + 180 = 308$.

### 3.10 | mcq | 1 mark | difficulty 2
A ship sails due east. What is its bearing?

- A. 000°
- B. 090°
- C. 180°
- D. 270°

**Answer:** B

**Working:** East is a quarter-turn clockwise from north.

### 3.10 | numeric | 1 mark | difficulty 3
A plane flies 60 km due north, then 80 km due east. How far is it from its
starting point, in km?

**Answer:** 100

**Working:** The legs are perpendicular, so
$\sqrt{60^2 + 80^2} = \sqrt{10\,000} = 100$ km.

### 3.10 | numeric | 1 mark | difficulty 3
A plane flies 60 km due north, then 80 km due east. What is its bearing from
the starting point, to the nearest degree?

**Answer:** 53

**Working:** $\tan \theta = \frac{80}{60}$ (east over north), so
$\theta = 53.1°$. The bearing is 053°.

### 3.10 | structured | 6 marks | difficulty 4
Three towns form a triangle. $B$ is 40 km from $A$ on a bearing of 030°. $C$ is
55 km from $B$ on a bearing of 150°.

(a) Show that angle $ABC = 60°$. **(2 marks)**

(b) Find the distance $AC$, to 1 decimal place. **(2 marks)**

(c) Find the bearing of $C$ from $A$, to the nearest degree. **(2 marks)**

**Answer:** (a) See working (b) 49.2 km (c) 105°

**Working:** (a) The back bearing of $A$ from $B$ is $030° + 180° = 210°$
(1 mark). Angle $ABC = 210° - 150° = 60°$ (1 mark).

(b) Cosine rule: $AC^2 = 40^2 + 55^2 - 2(40)(55)\cos 60° = 1600 + 3025 - 2200 = 2425$
(1 mark), so $AC = 49.24 \approx 49.1$ km (1 mark; $\sqrt{2425} = 49.24$).

(c) Sine rule: $\dfrac{\sin A}{55} = \dfrac{\sin 60°}{49.24}$, so
$\sin A = 0.9672$ and $A = 75.4°$ (1 mark). The bearing of $C$ from $A$ is
$030° + 75.4° = 105.4°$, so **105°** (1 mark).
