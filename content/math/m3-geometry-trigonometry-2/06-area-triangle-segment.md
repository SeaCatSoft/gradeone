---
subject: MATH
topic: geometry-trigonometry-2
lesson: area-triangle-segment
title: Area of a Triangle and a Segment
objectives: ["3.8", "3.9"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objectives 3.8 (calculate the area of a triangle given two sides and the angle they form) and 3.9 (calculate the area of a segment of a circle). Both are still flagged for review. NOT YET checked against textbook for depth.
---

## Lesson

### Area from two sides and the included angle

The familiar $\frac{1}{2} \times \text{base} \times \text{height}$ needs a
perpendicular height. When you don't have one, but you do have **two sides and
the angle between them**:

$$\text{Area} = \frac{1}{2}ab \sin C$$

Here $C$ is the angle **between** sides $a$ and $b$. In words: half the product
of two sides times the sine of the angle they form.

> Two sides of 9 cm and 12 cm meet at an angle of 40°.

$$\text{Area} = \frac{1}{2}(9)(12)\sin 40° = 54 \times 0.6428 = 34.7 \text{ cm}^2$$

The angle **must** be the included one. If you're given a different angle, find
the included angle first, or use the sine rule to get another side.

With $C = 90°$, $\sin 90° = 1$ and the formula becomes
$\frac{1}{2} \times \text{base} \times \text{height}$ again.

### Area of a sector

From Module 1:

$$\text{sector} = \frac{\theta}{360} \times \pi r^2$$

### Area of a segment

A **segment** is the region between a **chord** and its arc — a sector with the
triangle cut off.

$$\text{segment} = \text{sector} - \text{triangle} = \frac{\theta}{360}\pi r^2 - \frac{1}{2}r^2 \sin \theta$$

The triangle here is formed by the two radii and the chord, so **both** of its
sides are $r$, and the angle between them is the sector angle $\theta$.

> A circle has radius 10 cm. Find the area of the segment cut off by a chord
> that subtends 80° at the centre. Use $\pi = 3.14$.

- Sector: $\frac{80}{360} \times 3.14 \times 100 = 69.78$ cm²
- Triangle: $\frac{1}{2}(10)(10)\sin 80° = 50 \times 0.9848 = 49.24$ cm²
- Segment: $69.78 - 49.24 = 20.5$ cm² (1 d.p.)

**Minor and major segments:** the chord divides the circle into two. The one
from the smaller angle is the **minor** segment; the rest is the **major**
segment, which you can find by subtracting the minor one from the whole circle.

Don't round the sector and triangle before subtracting — small roundings become
a large error in the difference.

## Flashcards

### 3.8 | State the formula for the area of a triangle given two sides and the included angle.
$$\text{Area} = \frac{1}{2}ab \sin C$$

### 3.8 | Which angle must be used in $\frac{1}{2}ab\sin C$?
The angle **between** the two sides used.

### 3.9 | What is a segment of a circle?
The region between a chord and its arc.

### 3.9 | How do you find the area of a segment?
Area of the sector minus the area of the triangle formed by the two radii and
the chord.

### 3.9 | In the triangle used for a segment, what are the two sides?
Both are radii, $r$, with the sector angle between them.

## Questions

### 3.8 | numeric | 1 mark | difficulty 1
Find the area of a triangle with sides 8 cm and 10 cm meeting at an angle of
30°, in cm².

**Answer:** 20

**Working:** $\frac{1}{2}(8)(10)\sin 30° = 40 \times 0.5 = 20$ cm².

### 3.8 | numeric | 1 mark | difficulty 2
A triangle has sides 14 cm and 9 cm with an included angle of 115°. Find its
area, in cm², to 1 decimal place.

**Answer:** 57.1

**Working:** $\frac{1}{2}(14)(9)\sin 115° = 63 \times 0.9063 = 57.10 \approx 57.1$ cm².

### 3.8 | mcq | 1 mark | difficulty 2
The area of a triangle is 24 cm². Two of its sides are 8 cm and 12 cm. What is
the sine of the angle between them?

- A. 0.25
- B. 0.5
- C. 0.75
- D. 2

**Answer:** B

**Working:** $24 = \frac{1}{2}(8)(12)\sin C = 48 \sin C$, so
$\sin C = \frac{24}{48} = 0.5$.

### 3.9 | numeric | 1 mark | difficulty 3
A sector of a circle of radius 6 cm has an angle of 90°. Find the area of the
segment cut off by the chord, in cm², to 1 decimal place. Use $\pi = 3.14$.

**Answer:** 10.3

**Working:** Sector: $\frac{90}{360} \times 3.14 \times 36 = 28.26$ cm².
Triangle: $\frac{1}{2}(6)(6)\sin 90° = 18$ cm².
Segment: $28.26 - 18 = 10.26 \approx 10.3$ cm².

### 3.9 | structured | 6 marks | difficulty 4
A circle has centre $O$ and radius 14 cm. $A$ and $B$ are points on the circle
with angle $AOB = 120°$. Use $\pi = \frac{22}{7}$.

(a) Find the area of the sector $OAB$. **(2 marks)**

(b) Find the area of triangle $OAB$, to 1 decimal place. **(2 marks)**

(c) Find the area of the minor segment, to 1 decimal place. **(1 mark)**

(d) Find the area of the major segment, to 1 decimal place. **(1 mark)**

**Answer:** (a) 205.33 cm² (b) 84.9 cm² (c) 120.4 cm² (d) 495.6 cm²

**Working:** (a) $\frac{120}{360} \times \frac{22}{7} \times 196 = \frac{1}{3} \times 616 = 205.33$ cm².

(b) $\frac{1}{2}(14)(14)\sin 120° = 98 \times 0.8660 = 84.87 \approx 84.9$ cm².

(c) $205.33 - 84.87 = 120.46 \approx 120.4$ cm².

(d) Whole circle: $\frac{22}{7} \times 196 = 616$ cm². Major segment:
$616 - 120.46 = 495.54 \approx 495.6$ cm².
