---
subject: MATH
topic: geometry-trigonometry-2
lesson: cosine-rule
title: The Cosine Rule
objectives: ["3.7"]
est_minutes: 16
status: draft
source: Original prose written against Module 3 syllabus objective 3.7 ("use the sine and cosine rules to solve problems involving triangles"), continuing from the sine rule lesson. NOT YET checked against textbook for depth.
---

## Lesson

The **cosine rule** handles the cases the sine rule can't: when there is no
matching pair of a side and its opposite angle.

$$a^2 = b^2 + c^2 - 2bc \cos A$$

The side on the left is the one **opposite** the angle used.

Notice that if $A = 90°$, then $\cos 90° = 0$ and the rule becomes
$a^2 = b^2 + c^2$ — Pythagoras' theorem. The cosine rule is Pythagoras with a
correction for the angle not being a right angle.

### Finding a side

Use it when you know **two sides and the angle between them** (SAS).

> $b = 8$ cm, $c = 5$ cm, $A = 60°$. Find $a$.

$$a^2 = 8^2 + 5^2 - 2(8)(5)\cos 60° = 64 + 25 - 80(0.5) = 49$$

$$a = 7 \text{ cm}$$

Work out the whole right-hand side **before** square rooting, and follow the
order of operations: the multiplication $2bc\cos A$ comes before the
subtraction.

### Finding an angle

Use it when you know **all three sides** (SSS). Rearranged:

$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

> $a = 9$, $b = 7$, $c = 5$. Find $A$.

$$\cos A = \frac{49 + 25 - 81}{2(7)(5)} = \frac{-7}{70} = -0.1$$

$$A = \cos^{-1}(-0.1) = 95.7°$$

A **negative** cosine means an **obtuse** angle — no ambiguity, unlike the sine
rule. That's why the cosine rule is the safer choice for the largest angle of a
triangle.

### Which rule?

| What you know | Rule |
|---|---|
| Two angles and a side | **Sine** |
| Two sides and an angle **opposite** one of them | **Sine** |
| Two sides and the angle **between** them (SAS) | **Cosine** |
| Three sides (SSS) | **Cosine** |

A quick test: look for a side and its opposite angle both known. If you have
one, use the sine rule; if not, use the cosine rule.

Longer problems use both: the cosine rule first to find one part, then the
sine rule for the rest.

## Flashcards

### 3.7 | State the cosine rule for finding a side.
$$a^2 = b^2 + c^2 - 2bc \cos A$$

### 3.7 | State the cosine rule rearranged for finding an angle.
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$

### 3.7 | When do you use the cosine rule?
With two sides and the angle between them (SAS), or with all three sides (SSS).

### 3.7 | What does a negative value of $\cos A$ tell you?
The angle is **obtuse**.

### 3.7 | How is the cosine rule related to Pythagoras' theorem?
With $A = 90°$, $\cos A = 0$ and it becomes $a^2 = b^2 + c^2$.

## Questions

### 3.7 | mcq | 1 mark | difficulty 1
Which rule should be used to find the third side of a triangle given two sides
and the angle between them?

- A. The sine rule
- B. The cosine rule
- C. Pythagoras' theorem
- D. SOH CAH TOA

**Answer:** B

**Working:** Two sides and the included angle (SAS) is exactly the cosine rule
case.

### 3.7 | numeric | 1 mark | difficulty 2
In triangle $ABC$, $b = 6$ cm, $c = 10$ cm and $A = 60°$. Find $a$, in cm, to 2
decimal places.

**Answer:** 8.72

**Working:** $a^2 = 36 + 100 - 2(6)(10)\cos 60° = 136 - 60 = 76$, so
$a = \sqrt{76} = 8.72$ cm.

### 3.7 | numeric | 1 mark | difficulty 3
A triangle has sides 5 cm, 6 cm and 9 cm. Find the largest angle, in degrees to
1 decimal place.

**Answer:** 109.5

**Working:** The largest angle is opposite the 9 cm side:
$\cos A = \dfrac{25 + 36 - 81}{2(5)(6)} = \dfrac{-20}{60} = -0.3333$,
so $A = 109.47° \approx 109.5°$.

### 3.7 | structured | 6 marks | difficulty 4
Two boats leave a harbour $H$ at the same time. Boat $A$ sails 12 km on a
bearing of 040°; boat $B$ sails 18 km on a bearing of 100°.

(a) Find the angle $AHB$. **(1 mark)**

(b) Find the distance between the boats, to 1 decimal place. **(3 marks)**

(c) Find angle $HAB$, to the nearest degree. **(2 marks)**

**Answer:** (a) 60° (b) 15.9 km (c) 79°

**Working:** (a) $100° - 40° = 60°$.

(b) Cosine rule: $AB^2 = 12^2 + 18^2 - 2(12)(18)\cos 60°$ (1 mark)
$= 144 + 324 - 216 = 252$ (1 mark), so $AB = 15.87 \approx 15.9$ km (1 mark).

(c) Sine rule: $\dfrac{\sin A}{18} = \dfrac{\sin 60°}{15.87}$, so
$\sin A = 0.9822$ (1 mark) and $A = 79°$ (1 mark).
