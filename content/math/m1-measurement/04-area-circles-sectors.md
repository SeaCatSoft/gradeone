---
subject: MATH
topic: measurement
lesson: area-circles-sectors
title: Area of Circles and Sectors
objectives: ["4.6", "4.7"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objectives 4.6 (area of circles) and 4.7 (area of a sector of a circle). Uses pi = 22/7 where the numbers suit it. NOT YET checked against textbook for depth.
---

## Lesson

### Area of a circle

$$A = \pi r^2$$

Only the **radius** is squared — not $\pi$, and not the diameter. If you're
given the diameter, halve it first.

> Find the area of a circle of radius 7 cm. Use $\pi = \frac{22}{7}$.

$$A = \frac{22}{7} \times 7^2 = \frac{22}{7} \times 49 = 22 \times 7 = 154 \text{ cm}^2$$

Mixing up the two circle formulas is the commonest error. A memory hook:
**area** is measured in **square** units, and the area formula is the one with
$r$ **squared**.

| Want | Formula | Units |
|---|---|---|
| Circumference | $2\pi r$ | cm |
| Area | $\pi r^2$ | cm² |

### Area of a sector

A sector is a fraction of a circle, and — just as with arc length — the
fraction is the angle out of 360°:

$$\text{area of sector} = \frac{\theta}{360} \times \pi r^2$$

> Find the area of a sector of radius 14 cm and angle 90°.

$$\frac{90}{360} \times \frac{22}{7} \times 14^2 = \frac{1}{4} \times \frac{22}{7} \times 196 = \frac{1}{4} \times 616 = 154 \text{ cm}^2$$

Arc length and sector area both use $\frac{\theta}{360}$. The difference is
which circle formula follows it: $2\pi r$ for the arc, $\pi r^2$ for the area.

### Rings and other shaded regions

Many questions shade part of a figure and ask for the shaded area. The
method is nearly always **big area minus small area**.

A ring (an **annulus**) between circles of radius 14 cm and 7 cm:

$$\pi(14)^2 - \pi(7)^2 = 616 - 154 = 462 \text{ cm}^2$$

Note that you can't subtract the radii first: $\pi(14 - 7)^2 = 154$ is wrong.
Find each area, then subtract.

The same idea covers a square with a circle cut out, a rectangle with
semicircular ends, and so on. Name the shapes, find each area, then add or
subtract.

## Flashcards

### 4.6 | What is the formula for the area of a circle?
$$A = \pi r^2$$

> Hint: area is in square units, so $r$ is squared.

### 4.7 | What is the formula for the area of a sector?
$$\frac{\theta}{360} \times \pi r^2$$

### 4.6 | Find the area of a circle of diameter 14 cm. Use $\pi = \frac{22}{7}$.
154 cm². The radius is 7 cm, and $\frac{22}{7} \times 49 = 154$.

### 4.6 | How do you find the area of a ring between two circles?
Area of the big circle minus area of the small circle. Don't subtract the
radii first.

### 4.7 | What fraction of a circle is a 45° sector?
$\frac{45}{360} = \frac{1}{8}$.

## Questions

### 4.6 | numeric | 1 mark | difficulty 1
Find the area of a circle of radius 14 cm. Use $\pi = \frac{22}{7}$. Give the
answer in cm².

**Answer:** 616

**Working:** $\frac{22}{7} \times 14^2 = \frac{22}{7} \times 196 = 22 \times 28 = 616$ cm².

### 4.7 | numeric | 1 mark | difficulty 2
Find the area of a sector of radius 21 cm and angle 120°. Use
$\pi = \frac{22}{7}$. Give the answer in cm².

**Answer:** 462

**Working:** $\frac{120}{360} \times \frac{22}{7} \times 21^2 = \frac{1}{3} \times \frac{22}{7} \times 441 = \frac{1}{3} \times 1386 = 462$ cm².

### 4.6 | mcq | 1 mark | difficulty 2
A circle has a diameter of 10 cm. Using $\pi = 3.14$, its area is

- A. 31.4 cm²
- B. 78.5 cm²
- C. 157 cm²
- D. 314 cm²

**Answer:** B

**Working:** The radius is 5 cm. $A = 3.14 \times 5^2 = 3.14 \times 25 = 78.5$ cm².

D uses the diameter as the radius. A is the circumference.

### 4.7 | mcq | 1 mark | difficulty 3
A sector has radius 6 cm and area $12\pi$ cm². What is the angle of the sector?

- A. 60°
- B. 90°
- C. 120°
- D. 180°

**Answer:** C

**Working:** The whole circle has area $\pi \times 6^2 = 36\pi$. The sector is
$\frac{12\pi}{36\pi} = \frac{1}{3}$ of it, and $\frac{1}{3} \times 360° = 120°$.

### 4.6 | structured | 5 marks | difficulty 3
A square tile has sides of 28 cm. A circular design of radius 14 cm, touching
all four sides, is painted in the middle. Use $\pi = \frac{22}{7}$.

(a) Find the area of the square. **(1 mark)**

(b) Find the area of the circle. **(2 marks)**

(c) Find the area of the tile that is **not** painted. **(1 mark)**

(d) Express the painted area as a percentage of the tile, to the nearest whole
number. **(1 mark)**

**Answer:** (a) 784 cm² (b) 616 cm² (c) 168 cm² (d) 79%

**Working:** (a) $28 \times 28 = 784$ cm².

(b) $\frac{22}{7} \times 14^2 = 616$ cm² (1 mark for the formula with $r = 14$,
1 for the answer).

(c) $784 - 616 = 168$ cm².

(d) $\frac{616}{784} \times 100\% = 78.57\ldots\% \approx 79\%$.
