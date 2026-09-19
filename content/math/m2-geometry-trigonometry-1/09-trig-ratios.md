---
subject: MATH
topic: geometry-trigonometry-1
lesson: trig-ratios
title: The Trigonometric Ratios
objectives: ["4.8"]
est_minutes: 18
status: draft
source: Original prose written against Module 2 syllabus objective 4.8 ("define the trigonometric ratios of acute angles in a right triangle"). Applications are in the next lesson. NOT YET checked against textbook for depth.
---

## Lesson

Pythagoras links the **sides** of a right-angled triangle. Trigonometry links
the **sides and the angles**.

### Naming the sides

The names depend on which acute angle you're working with, usually called
$\theta$:

- **Hypotenuse (H):** opposite the right angle — always the longest side.
- **Opposite (O):** the side across from $\theta$.
- **Adjacent (A):** the remaining side, next to $\theta$.

<svg viewBox="0 0 280 175" role="img" aria-label="A right-angled triangle with angle theta at the bottom left. The side opposite theta is vertical on the right, the adjacent side is along the bottom, and the hypotenuse is the slanted side.">
  <polygon points="35,140 225,140 225,35" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <polyline points="207,140 207,122 225,122" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <path d="M 70 140 A 35 35 0 0 0 63 121" fill="none" stroke="currentColor" stroke-width="1.3"/>
  <text x="74" y="133" font-size="14" fill="currentColor">θ</text>
  <text x="240" y="95" font-size="13" fill="currentColor">O</text>
  <text x="126" y="158" font-size="13" fill="currentColor">A</text>
  <text x="110" y="80" font-size="13" fill="currentColor">H</text>
</svg>

The hypotenuse never changes, but swapping to the other acute angle swaps
**opposite** and **adjacent**.

### The three ratios

$$\sin \theta = \frac{O}{H} \qquad \cos \theta = \frac{A}{H} \qquad \tan \theta = \frac{O}{A}$$

Remember them as **SOH CAH TOA**.

These ratios depend only on the **angle**, not on the size of the triangle —
which is why they can be tabulated and put on a calculator. All triangles with
a 30° angle have $\sin 30° = 0.5$.

### Finding a side

1. Label H, O and A for the angle you're given.
2. Pick the ratio that uses the side you **know** and the side you **want**.
3. Substitute and solve.

> A right-angled triangle has a 35° angle and a hypotenuse of 12 cm. Find the
> side opposite the 35°.

O and H means **sine**:

$$\sin 35° = \frac{x}{12} \quad\Rightarrow\quad x = 12 \sin 35° = 6.88 \text{ cm (2 d.p.)}$$

When the unknown is on the **bottom**:

$$\cos 40° = \frac{9}{x} \quad\Rightarrow\quad x = \frac{9}{\cos 40°} = 11.75$$

### Finding an angle

Use the **inverse** functions, written $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ (on
a calculator, usually SHIFT then sin).

> The opposite side is 7 and the adjacent side is 10.

$$\tan \theta = \frac{7}{10} = 0.7 \quad\Rightarrow\quad \theta = \tan^{-1}(0.7) = 34.99° \approx 35.0°$$

**Set your calculator to degrees.** If answers look wrong (like $\sin 30° = -0.988$),
it's in radian mode.

## Flashcards

### 4.8 | What does SOH CAH TOA stand for?
$\sin = \frac{O}{H}$, $\cos = \frac{A}{H}$, $\tan = \frac{O}{A}$.

### 4.8 | Which side is the "opposite"?
The side across from the angle you are using.

### 4.8 | Which ratio uses the opposite and adjacent sides?
**Tangent**: $\tan \theta = \frac{O}{A}$.

### 4.8 | How do you find an angle from a ratio?
Use the inverse function, such as $\theta = \tan^{-1}\left(\frac{O}{A}\right)$.

### 4.8 | Why do the ratios depend only on the angle?
Triangles with the same angles are **similar**, so their corresponding sides
are always in the same ratio.

### 4.8 | What should you check on your calculator before using trigonometry?
That it is in **degree** mode.

## Questions

### 4.8 | mcq | 1 mark | difficulty 1
In a right-angled triangle, which ratio equals $\frac{\text{adjacent}}{\text{hypotenuse}}$?

- A. $\sin \theta$
- B. $\cos \theta$
- C. $\tan \theta$
- D. $\tan^{-1} \theta$

**Answer:** B

**Working:** CAH: cosine is adjacent over hypotenuse.

### 4.8 | numeric | 1 mark | difficulty 2
A right-angled triangle has a hypotenuse of 20 cm and an angle of 30°. Find the
length of the side opposite the 30° angle, in cm.

**Answer:** 10

**Working:** $\sin 30° = \frac{x}{20}$, so $x = 20 \times 0.5 = 10$ cm.

### 4.8 | numeric | 1 mark | difficulty 2
In a right-angled triangle, the side opposite an angle is 9 cm and the adjacent
side is 12 cm. Find the angle, in degrees, correct to 1 decimal place.

**Answer:** 36.9

**Working:** $\tan \theta = \frac{9}{12} = 0.75$, so
$\theta = \tan^{-1}(0.75) = 36.87° \approx 36.9°$.

### 4.8 | numeric | 1 mark | difficulty 3
In a right-angled triangle, the angle is 52° and the adjacent side is 8 cm.
Find the hypotenuse, in cm, correct to 2 decimal places.

**Answer:** 12.99

**Working:** $\cos 52° = \frac{8}{H}$, so $H = \frac{8}{\cos 52°} = \frac{8}{0.61566} = 12.99$ cm.

### 4.8 | structured | 5 marks | difficulty 3
In triangle $PQR$, angle $Q = 90°$, $PQ = 5$ cm and $QR = 12$ cm.

(a) Find $PR$. **(2 marks)**

(b) Find angle $PRQ$, correct to 1 decimal place. **(2 marks)**

(c) Write down $\sin(\angle PRQ)$ as a fraction. **(1 mark)**

**Answer:** (a) 13 cm (b) 22.6° (c) $\frac{5}{13}$

**Working:** (a) $PR^2 = 5^2 + 12^2 = 169$, so $PR = 13$ cm.

(b) At $R$: opposite $= PQ = 5$, adjacent $= QR = 12$.
$\tan R = \frac{5}{12}$, so $R = 22.62° \approx 22.6°$.

(c) $\sin R = \frac{O}{H} = \frac{5}{13}$.
