---
subject: MATH
topic: geometry-trigonometry-2
lesson: sine-rule
title: The Sine Rule
objectives: ["3.7"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objective 3.7 ("use the sine and cosine rules to solve problems involving triangles"); the cosine rule is in the next lesson. NOT YET checked against textbook for depth.
---

## Lesson

SOH CAH TOA only works in **right-angled** triangles. The sine and cosine rules
work in **any** triangle.

### Labelling

Label each angle with a capital letter and the side **opposite** it with the
matching small letter: side $a$ is opposite angle $A$, and so on. Getting this
right is most of the battle.

### The sine rule

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Turned upside down for finding angles:

$$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

Use only **two** of the three fractions at a time — the pair containing the
three things you know and the one you want.

### When to use it

Use the sine rule when you have a **matching pair**: a side and the angle
opposite it. Specifically:

- two angles and any side (AAS or ASA)
- two sides and an angle opposite one of them

If you have no matching pair, use the **cosine** rule instead.

### Finding a side

> In triangle $ABC$, $A = 40°$, $B = 75°$ and $a = 12$ cm. Find $b$.

$$\frac{b}{\sin 75°} = \frac{12}{\sin 40°}$$

$$b = \frac{12 \sin 75°}{\sin 40°} = \frac{11.591}{0.6428} = 18.0 \text{ cm (1 d.p.)}$$

### Finding an angle

> $a = 9$, $A = 35°$, $b = 14$. Find $B$.

$$\frac{\sin B}{14} = \frac{\sin 35°}{9} \quad\Rightarrow\quad \sin B = \frac{14 \sin 35°}{9} = 0.8922$$

$$B = \sin^{-1}(0.8922) = 63.1°$$

### The ambiguous case

$\sin B = 0.8922$ has **two** solutions between 0° and 180°: $63.1°$ and
$180° - 63.1° = 116.9°$. Both can give a valid triangle when you're given two
sides and a non-included angle.

Check which fits: the angles must total less than 180°, and the **larger angle
is always opposite the larger side**. If the question says the angle is obtuse,
take the second value.

### Finding the third angle

Don't use the sine rule for the last angle — just subtract from 180°. It's
quicker and avoids the ambiguity.

## Flashcards

### 3.7 | State the sine rule.
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

### 3.7 | When can you use the sine rule?
When you have a **matching pair**: a side and the angle opposite it.

### 3.7 | How are sides and angles labelled in a triangle?
Side $a$ is opposite angle $A$, side $b$ opposite $B$, side $c$ opposite $C$.

### 3.7 | Which form of the sine rule is easier when finding an angle?
$$\frac{\sin A}{a} = \frac{\sin B}{b}$$

with the sines on top.

### 3.7 | What is the ambiguous case?
$\sin^{-1}$ gives one answer, but $180°$ minus it also has the same sine, so two
triangles may be possible.

### 3.7 | In any triangle, which angle is opposite the longest side?
The **largest** angle.

## Questions

### 3.7 | mcq | 1 mark | difficulty 1
Which information allows the sine rule to be used directly?

- A. Three sides
- B. Two sides and the angle between them
- C. Two angles and one side
- D. One side and one angle only

**Answer:** C

**Working:** Two angles give the third, so there is a side with its opposite
angle known: a matching pair. A and B need the cosine rule.

### 3.7 | numeric | 1 mark | difficulty 2
In triangle $ABC$, $A = 50°$, $B = 60°$ and $a = 8$ cm. Find $b$, in cm, to 1
decimal place.

**Answer:** 9.0

**Working:** $b = \dfrac{8 \sin 60°}{\sin 50°} = \dfrac{6.928}{0.766} = 9.04 \approx 9.0$ cm.

### 3.7 | numeric | 1 mark | difficulty 3
In triangle $PQR$, $p = 10$ cm, $q = 7$ cm and $P = 80°$. Find angle $Q$, in
degrees to 1 decimal place, given that it is acute.

**Answer:** 43.6

**Working:** $\sin Q = \dfrac{7 \sin 80°}{10} = 0.6894$, so
$Q = \sin^{-1}(0.6894) = 43.58° \approx 43.6°$.

### 3.7 | structured | 5 marks | difficulty 3
In triangle $XYZ$, angle $X = 42°$, angle $Y = 63°$ and $XY = 15$ cm.

(a) Find angle $Z$. **(1 mark)**

(b) Find $XZ$, to 1 decimal place. **(2 marks)**

(c) Find $YZ$, to 1 decimal place. **(2 marks)**

**Answer:** (a) 75° (b) 13.8 cm (c) 10.4 cm

**Working:** (a) $180° - 42° - 63° = 75°$.

(b) $XY = 15$ is opposite angle $Z = 75°$, and $XZ$ is opposite angle
$Y = 63°$:
$XZ = \dfrac{15 \sin 63°}{\sin 75°} = \dfrac{13.365}{0.966} = 13.8$ cm.

(c) $YZ$ is opposite angle $X = 42°$:
$YZ = \dfrac{15 \sin 42°}{\sin 75°} = \dfrac{10.037}{0.966} = 10.4$ cm.
