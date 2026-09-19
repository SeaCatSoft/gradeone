---
subject: MATH
topic: measurement
lesson: perimeter-arc-length
title: Perimeter, Circumference and Arc Length
objectives: ["4.3", "4.4"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 4.3 (perimeter of a plane shape) and 4.4 (length of an arc of a circle). Uses pi = 22/7 where the numbers suit it, as CSEC papers commonly instruct. NOT YET checked against textbook for depth.
---

## Lesson

### Perimeter

The **perimeter** of a shape is the total distance around its edge. For any
shape with straight sides, add the lengths of all the sides.

For a rectangle of length $l$ and width $w$:

$$P = 2l + 2w$$

For compound shapes (L-shapes and the like), some sides won't be labelled.
Work them out from the ones that are. Opposite sides of a rectangle are
equal, so a missing length is usually a difference or a sum of given ones.

### Circumference

The perimeter of a circle is its **circumference**:

$$C = 2\pi r \qquad \text{or} \qquad C = \pi d$$

where $r$ is the radius and $d = 2r$ is the diameter.

CSEC questions usually tell you which value of $\pi$ to use — often
$\frac{22}{7}$ or $3.14$. Use the one given. With $\frac{22}{7}$, radii that
are multiples of 7 cancel neatly:

$$r = 7 \text{ cm}: \quad C = 2 \times \frac{22}{7} \times 7 = 44 \text{ cm}$$

### Arc length

An **arc** is part of the circumference. A **sector** is the slice between two
radii, like a slice of pizza; the angle at the centre is $\theta$.

<svg viewBox="0 0 220 180" role="img" aria-label="A sector of a circle with radius r and centre angle theta, with the curved arc marked">
  <path d="M 60 150 L 190 150 A 130 130 0 0 0 125 37.4 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 90 150 A 30 30 0 0 0 75 124" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="95" y="137" font-size="14" fill="currentColor">θ</text>
  <text x="120" y="168" font-size="14" fill="currentColor">r</text>
  <text x="70" y="98" font-size="14" fill="currentColor">r</text>
  <text x="180" y="76" font-size="14" fill="currentColor">arc</text>
</svg>

The arc is a fraction of the whole circumference, and that fraction is the
angle out of 360°:

$$\text{arc length} = \frac{\theta}{360} \times 2\pi r$$

> Find the length of the arc of a sector with radius 14 cm and angle 90°.

$$\text{arc} = \frac{90}{360} \times 2 \times \frac{22}{7} \times 14 = \frac{1}{4} \times 88 = 22 \text{ cm}$$

A 90° sector is a quarter circle, so its arc is a quarter of the
circumference. That's all the formula says.

### Perimeter of a sector

The perimeter of a sector is **not** just the arc. Go all the way round: the
arc **plus two radii**.

$$\text{perimeter of sector} = \text{arc} + 2r$$

For the quarter circle above: $22 + 14 + 14 = 50$ cm.

A semicircle is the same idea: half the circumference plus the diameter.

## Flashcards

### 4.3 | What is the formula for the circumference of a circle?
$$C = 2\pi r = \pi d$$

### 4.4 | What is the formula for the length of an arc?
$$\text{arc} = \frac{\theta}{360} \times 2\pi r$$

$\theta$ is the angle at the centre.

### 4.4 | What is the perimeter of a sector?
The arc length **plus two radii**.

> Hint: go all the way round the edge.

### 4.3 | Find the circumference of a circle of radius 21 cm. Use $\pi = \frac{22}{7}$.
$$2 \times \frac{22}{7} \times 21 = 132 \text{ cm}$$

### 4.4 | What fraction of the circumference is the arc of a 60° sector?
$\frac{60}{360} = \frac{1}{6}$.

## Questions

### 4.3 | numeric | 1 mark | difficulty 1
Find the circumference of a circle of diameter 35 cm. Use $\pi = \frac{22}{7}$.

**Answer:** 110

**Working:** $C = \pi d = \frac{22}{7} \times 35 = 22 \times 5 = 110$ cm.

### 4.4 | numeric | 1 mark | difficulty 2
A sector has radius 21 cm and angle 120°. Find its arc length. Use
$\pi = \frac{22}{7}$.

**Answer:** 44

**Working:** $\dfrac{120}{360} \times 2 \times \dfrac{22}{7} \times 21 = \dfrac{1}{3} \times 132 = 44$ cm.

### 4.4 | mcq | 1 mark | difficulty 3
A semicircle has diameter 28 cm. What is its perimeter? Use $\pi = \frac{22}{7}$.

- A. 44 cm
- B. 72 cm
- C. 88 cm
- D. 116 cm

**Answer:** B

**Working:** Half the circumference: $\frac{1}{2} \times \frac{22}{7} \times 28 = 44$ cm.
Add the straight edge, the diameter: $44 + 28 = 72$ cm.

A leaves out the diameter. C is the whole circumference.

### 4.3 | numeric | 1 mark | difficulty 2
A rectangular garden is 12.5 m long and 8 m wide. How many metres of fencing
are needed to go all the way round it?

**Answer:** 41

**Working:** $P = 2(12.5) + 2(8) = 25 + 16 = 41$ m.

### 4.4 | structured | 5 marks | difficulty 3
A running track is made of a rectangle 100 m long with a semicircle at each
end. The straight sections are 100 m long, and the width across the track is
56 m (the diameter of each semicircle). Use $\pi = \frac{22}{7}$.

(a) Find the total length of the two curved ends. **(2 marks)**

(b) Find the distance once around the track. **(2 marks)**

(c) How many complete laps does a runner need to cover at least 3 km?
**(1 mark)**

**Answer:** (a) 176 m (b) 376 m (c) 8 laps

**Working:** (a) Two semicircles make one full circle of diameter 56 m:
$C = \frac{22}{7} \times 56 = 176$ m. (1 mark for seeing it's one full circle,
1 mark for 176.)

(b) Add the two straights: $176 + 100 + 100 = 376$ m.

(c) $3000 \div 376 = 7.98\ldots$. Seven laps is only 2632 m, so 8 laps are
needed.
