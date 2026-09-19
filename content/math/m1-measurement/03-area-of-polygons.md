---
subject: MATH
topic: measurement
lesson: area-of-polygons
title: Area of Polygons
objectives: ["4.5", "4.6"]
est_minutes: 17
status: draft
source: Original prose written against syllabus objectives 4.5 (estimate the area of plane shapes) and 4.6 (area of polygons and circles). Circles are covered in the next lesson. NOT YET checked against textbook for depth.
---

## Lesson

**Area** is the amount of flat surface a shape covers, measured in square
units: cm², m², and so on.

### The four formulas

| Shape | Area |
|---|---|
| Rectangle | $A = l \times w$ |
| Triangle | $A = \frac{1}{2} \times b \times h$ |
| Parallelogram | $A = b \times h$ |
| Trapezium | $A = \frac{1}{2}(a + b) \times h$ |

In every one, $h$ is the **perpendicular height** — measured at right angles to
the base, not along a slanted side.

<svg viewBox="0 0 300 130" role="img" aria-label="A triangle with its base b along the bottom and a dashed perpendicular height h from the top vertex down to the base">
  <polygon points="20,110 200,110 140,20" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="140" y1="20" x2="140" y2="110" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polyline points="140,100 150,100 150,110" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="147" y="68" font-size="14" fill="currentColor">h</text>
  <text x="105" y="127" font-size="14" fill="currentColor">b</text>
  <text x="215" y="60" font-size="12" fill="currentColor">h is at right</text>
  <text x="215" y="76" font-size="12" fill="currentColor">angles to b</text>
</svg>

**Why a triangle is half:** any triangle is exactly half of a parallelogram
with the same base and height. Two copies fit together to make one.

**Why the trapezium formula works:** $\frac{1}{2}(a + b)$ is the average of the
two parallel sides. The trapezium has the same area as a rectangle whose
width is that average.

### Compound shapes

For an L-shape or any irregular polygon, **split** it into rectangles and
triangles, find each area, and add. Or find a bigger rectangle and
**subtract** the missing piece. Both give the same answer; choose whichever
needs fewer calculations.

> An L-shape is a 10 m × 8 m rectangle with a 4 m × 3 m corner removed.

$$A = 10 \times 8 - 4 \times 3 = 80 - 12 = 68 \text{ m}^2$$

### Estimating area

Curved or irregular shapes drawn on a square grid can be estimated by
counting squares:

1. Count the squares that are **completely** (or almost completely) inside.
2. Count the squares that are **about half** or more inside, and count each as
   a half.
3. Ignore squares with only a small sliver inside.

If a shape covers 18 whole squares and 10 part squares, estimate
$18 + \frac{10}{2} = 23$ square units. Then multiply by the area of one square
if the grid squares aren't 1 unit.

An estimate won't be exact, and the mark scheme allows a range. Show your
counts so the examiner can see the method.

## Flashcards

### 4.6 | What is the formula for the area of a triangle?
$$A = \frac{1}{2} \times b \times h$$

$h$ is the **perpendicular** height.

### 4.6 | What is the formula for the area of a trapezium?
$$A = \frac{1}{2}(a + b)h$$

$a$ and $b$ are the parallel sides.

### 4.6 | Area of a parallelogram?
$$A = b \times h$$

Not base times slanted side.

### 4.6 | Two ways to find the area of an L-shaped figure?
**Split** it into rectangles and add, or take a **bigger rectangle** and
subtract the missing piece.

### 4.5 | How do you estimate an area by counting squares?
Count the full squares, count the part squares that are about half or more
as halves, and ignore tiny slivers.

## Questions

### 4.6 | numeric | 1 mark | difficulty 1
Find the area of a triangle with base 12 cm and perpendicular height 7 cm, in
cm².

**Answer:** 42

**Working:** $\frac{1}{2} \times 12 \times 7 = 42$ cm².

### 4.6 | numeric | 1 mark | difficulty 2
A trapezium has parallel sides of 9 cm and 15 cm, and the distance between
them is 6 cm. Find its area, in cm².

**Answer:** 72

**Working:** $\frac{1}{2}(9 + 15) \times 6 = \frac{1}{2} \times 24 \times 6 = 72$ cm².

### 4.6 | mcq | 1 mark | difficulty 2
A parallelogram has a base of 10 cm, slanted sides of 6 cm, and a
perpendicular height of 5 cm. What is its area?

- A. 30 cm²
- B. 50 cm²
- C. 60 cm²
- D. 32 cm²

**Answer:** B

**Working:** $A = b \times h = 10 \times 5 = 50$ cm².

C uses the slanted side instead of the height. D is the perimeter,
$2(10 + 6)$.

### 4.5 | numeric | 1 mark | difficulty 2
A leaf is traced on 1 cm squared paper. It covers 26 whole squares and 14
squares that are partly covered. Estimate its area, in cm².

**Answer:** 33

**Working:** Count each partly covered square as half:
$26 + \frac{14}{2} = 26 + 7 = 33$ cm².

### 4.6 | structured | 5 marks | difficulty 3
A garden plot is in the shape of a rectangle 15 m by 9 m, with a right-angled
triangle attached along its 9 m side. The triangle has a base of 9 m and a
perpendicular height of 8 m.

(a) Find the area of the rectangle. **(1 mark)**

(b) Find the area of the triangle. **(1 mark)**

(c) Find the total area of the plot. **(1 mark)**

(d) Grass seed is sold in bags that cover 20 m² each. How many bags are needed
to cover the whole plot? **(2 marks)**

**Answer:** (a) 135 m² (b) 36 m² (c) 171 m² (d) 9 bags

**Working:** (a) $15 \times 9 = 135$ m².

(b) $\frac{1}{2} \times 9 \times 8 = 36$ m².

(c) $135 + 36 = 171$ m².

(d) $171 \div 20 = 8.55$ (1 mark). You can't buy part of a bag, and 8 bags
would leave some ground uncovered, so **9** bags (1 mark).
