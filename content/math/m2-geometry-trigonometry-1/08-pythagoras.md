---
subject: MATH
topic: geometry-trigonometry-1
lesson: pythagoras
title: Pythagoras' Theorem
objectives: ["4.7"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objective 4.7 ("use Pythagoras' theorem to solve problems"). NOT YET checked against textbook for depth.
---

## Lesson

In a **right-angled** triangle, the longest side — the one **opposite** the
right angle — is the **hypotenuse**.

> **Pythagoras' theorem:** the square on the hypotenuse equals the sum of the
> squares on the other two sides.

$$a^2 + b^2 = c^2 \qquad (c \text{ is the hypotenuse})$$

<svg viewBox="0 0 260 170" role="img" aria-label="A right-angled triangle with the right angle at the bottom left, side a going up, side b along the bottom, and the hypotenuse c opposite the right angle">
  <polygon points="40,140 220,140 40,30" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="40,122 58,122 58,140" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="26" y="90" font-size="14" fill="currentColor">a</text>
  <text x="126" y="158" font-size="14" fill="currentColor">b</text>
  <text x="140" y="78" font-size="14" fill="currentColor">c</text>
</svg>

### Finding the hypotenuse

**Add** the squares of the two shorter sides, then square root.

> The shorter sides are 5 cm and 12 cm.

$$c^2 = 5^2 + 12^2 = 25 + 144 = 169 \quad\Rightarrow\quad c = 13 \text{ cm}$$

### Finding a shorter side

**Subtract**: the square of the hypotenuse minus the square of the known side.

> The hypotenuse is 10 cm and one side is 6 cm.

$$a^2 = 10^2 - 6^2 = 100 - 36 = 64 \quad\Rightarrow\quad a = 8 \text{ cm}$$

Decide first **which side is the hypotenuse**. If you're finding the longest
side, add; otherwise, subtract. A quick check: the hypotenuse must come out
**longer** than either other side, and a shorter side must come out **shorter**
than the hypotenuse.

### Not-so-neat answers

Most answers aren't whole numbers. Leave a surd, or round as asked:

$$c^2 = 7^2 + 9^2 = 130 \quad\Rightarrow\quad c = \sqrt{130} = 11.4 \text{ cm (1 d.p.)}$$

### Is a triangle right-angled?

Test the theorem with the longest side as $c$. If $a^2 + b^2 = c^2$, the angle
opposite $c$ is 90°.

$9, 12, 15$: $81 + 144 = 225 = 15^2$ ✓, so it is right-angled.

### Using it in problems

Pythagoras applies whenever a right angle appears — ladders against walls,
diagonals of rectangles, the height of an isosceles triangle (split it down the
middle to make two right-angled triangles), and the distance between two points
on a graph.

## Flashcards

### 4.7 | State Pythagoras' theorem.
$$a^2 + b^2 = c^2$$

where $c$ is the hypotenuse.

### 4.7 | Which side is the hypotenuse?
The longest side — the one opposite the right angle.

### 4.7 | How do you find a shorter side with Pythagoras?
Subtract: shorter side$^2 = $ hypotenuse$^2 -$ other side$^2$.

### 4.7 | The shorter sides are 8 and 15. Find the hypotenuse.
17. $64 + 225 = 289 = 17^2$.

### 4.7 | How can you check whether a triangle with sides 7, 24, 25 is right-angled?
Test $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓, so it is.

## Questions

### 4.7 | numeric | 1 mark | difficulty 1
A right-angled triangle has shorter sides of 9 cm and 12 cm. Find the length of
the hypotenuse, in cm.

**Answer:** 15

**Working:** $9^2 + 12^2 = 81 + 144 = 225$, and $\sqrt{225} = 15$.

### 4.7 | numeric | 1 mark | difficulty 2
The hypotenuse of a right-angled triangle is 26 m and one of the other sides is
24 m. Find the third side, in metres.

**Answer:** 10

**Working:** $26^2 - 24^2 = 676 - 576 = 100$, and $\sqrt{100} = 10$.

### 4.7 | mcq | 1 mark | difficulty 2
Which set of lengths forms a right-angled triangle?

- A. 4, 5, 6
- B. 6, 8, 11
- C. 5, 12, 13
- D. 2, 3, 4

**Answer:** C

**Working:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ ✓. None of the others satisfy
the theorem.

### 4.7 | numeric | 1 mark | difficulty 3
A rectangular field is 40 m long and 30 m wide. How much shorter, in metres, is
it to walk along the diagonal than along two sides?

**Answer:** 20

**Working:** Diagonal: $\sqrt{40^2 + 30^2} = \sqrt{2500} = 50$ m. Two sides:
$40 + 30 = 70$ m. Difference: $70 - 50 = 20$ m.

### 4.7 | structured | 5 marks | difficulty 3
A ladder 5 m long leans against a vertical wall, with its foot 1.4 m from the
base of the wall.

(a) How far up the wall does the ladder reach? Give your answer to 2 decimal
places. **(3 marks)**

(b) The foot of the ladder slips to 2 m from the wall. How far down does the
top of the ladder slide? Give your answer to 2 decimal places. **(2 marks)**

**Answer:** (a) 4.80 m (b) 0.22 m

**Working:** (a) $h^2 = 5^2 - 1.4^2 = 25 - 1.96 = 23.04$ (2 marks).
$h = \sqrt{23.04} = 4.80$ m (1 mark).

(b) New height: $\sqrt{25 - 4} = \sqrt{21} = 4.58$ m (1 mark).
Slide: $4.80 - 4.58 = 0.22$ m (1 mark).
