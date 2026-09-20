---
subject: MATH
topic: measurement
lesson: margin-of-error
title: Accuracy and Margin of Error
objectives: ["4.11"]
est_minutes: 14
status: draft
source: Original prose written against syllabus objective 4.11 ("estimate the margin of error for a given measurement"). Covers limits of accuracy, greatest possible error and percentage error. NOT YET checked against textbook for depth.
---

## Lesson

No measurement is perfectly exact. A ruler marked in millimetres can't tell
you a length to the thousandth of a millimetre. So every measurement comes
with an unspoken **margin of error**, set by how precisely it was measured.

### Limits of accuracy

If a pencil is measured as **14 cm to the nearest centimetre**, its true length
could be anything that **rounds** to 14:

$$13.5 \text{ cm} \leq \text{length} < 14.5 \text{ cm}$$

- 13.5 is the **lower bound**
- 14.5 is the **upper bound** (the length is less than this, since 14.5 would
  round up to 15)

The bounds are always **half a unit** either side of the measurement, where
the unit is what it was rounded to.

| Measurement | Rounded to nearest | Half unit | Bounds |
|---|---|---|---|
| 14 cm | 1 cm | 0.5 cm | 13.5 to 14.5 cm |
| 3.7 kg | 0.1 kg | 0.05 kg | 3.65 to 3.75 kg |
| 340 m | 10 m | 5 m | 335 to 345 m |
| 2.46 L | 0.01 L | 0.005 L | 2.455 to 2.465 L |

### Greatest possible error

The **greatest possible error** (or maximum error) is that half unit — the
most the true value can differ from the measured value.

For 14 cm to the nearest cm, the greatest possible error is **0.5 cm**. You
might write the measurement as $14 \pm 0.5$ cm.

### Percentage error

To judge how serious an error is, compare it with the size of the
measurement:

$$\text{percentage error} = \frac{\text{greatest possible error}}{\text{measured value}} \times 100\%$$

For 14 cm: $\frac{0.5}{14} \times 100\% \approx 3.6\%$.

For 340 m to the nearest 10 m: $\frac{5}{340} \times 100\% \approx 1.5\%$.

The same half-unit error matters much more on a small measurement than a large
one.

### Errors in calculations

When measurements are used in a calculation, their errors carry through.

A rectangle measures 8 cm by 5 cm, each to the nearest cm. The largest it could
really be is $8.5 \times 5.5 = 46.75$ cm², and the smallest is
$7.5 \times 4.5 = 33.75$ cm². The calculated area of 40 cm² could be out by
several square centimetres.

For the **largest** possible product, use both upper bounds; for the
**smallest**, both lower bounds.

## Flashcards

### 4.11 | A length is 20 cm to the nearest cm. What are its bounds?
$19.5 \text{ cm} \leq l < 20.5 \text{ cm}$

Half a unit either side.

### 4.11 | What is the greatest possible error of a measurement?
Half of the unit it was rounded to. For "nearest 0.1 kg", it is 0.05 kg.

### 4.11 | State the formula for percentage error.
$$\frac{\text{greatest possible error}}{\text{measured value}} \times 100\%$$

### 4.11 | A mass is 600 g to the nearest 100 g. What is the lower bound?
550 g. Half of 100 g is 50 g.

### 4.11 | To find the largest possible area of a rectangle from rounded measurements, which bounds do you use?
The **upper** bounds of both the length and the width.

## Questions

### 4.11 | numeric | 1 mark | difficulty 1
A length is measured as 45 cm, correct to the nearest centimetre. What is the
lower bound of the length, in cm?

**Answer:** 44.5

**Working:** Half of 1 cm is 0.5 cm. Lower bound: $45 - 0.5 = 44.5$ cm.

### 4.11 | mcq | 1 mark | difficulty 2
A bag of flour has a mass of 2.4 kg, correct to 1 decimal place. What is the
greatest possible error?

- A. 0.01 kg
- B. 0.05 kg
- C. 0.1 kg
- D. 0.5 kg

**Answer:** B

**Working:** It was measured to the nearest 0.1 kg. The greatest possible error
is half of that: 0.05 kg.

C is the unit itself, not half of it.

### 4.11 | numeric | 1 mark | difficulty 2
A road is 1 200 m long, correct to the nearest 100 m. What is the upper bound
of its length, in metres?

**Answer:** 1250

**Working:** Half of 100 m is 50 m. Upper bound: $1200 + 50 = 1250$ m.

### 4.11 | numeric | 1 mark | difficulty 3
A time is recorded as 25 seconds, to the nearest second. Calculate the
percentage error.

**Answer:** 2

**Working:** Greatest possible error $= 0.5$ s.
$\frac{0.5}{25} \times 100\% = 2\%$.

### 4.11 | structured | 4 marks | difficulty 3
A rectangular floor is measured as 6 m by 4 m, each correct to the nearest
metre.

(a) State the lower and upper bounds of the length. **(1 mark)**

(b) Calculate the smallest possible area of the floor. **(1 mark)**

(c) Calculate the largest possible area of the floor. **(1 mark)**

(d) Tiles are bought to cover 24 m². Explain why this might not be enough.
**(1 mark)**

**Answer:** (a) 5.5 m and 6.5 m (b) 19.25 m² (c) 29.25 m² (d) The true area
could be up to 29.25 m², more than 24 m².

**Working:** (a) Half of 1 m is 0.5 m: $5.5 \leq l < 6.5$.

(b) Lower bounds: $5.5 \times 3.5 = 19.25$ m².

(c) Upper bounds: $6.5 \times 4.5 = 29.25$ m².

(d) 24 m² uses the rounded measurements. The floor may really be larger, up
to 29.25 m², so there might not be enough tiles.
