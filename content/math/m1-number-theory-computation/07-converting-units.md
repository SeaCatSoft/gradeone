---
subject: MATH
topic: number-theory-computation
lesson: converting-units
title: Converting Units
objectives: ["1.8"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objective 1.8 ("convert from one set of units to another"). Covers metric length, mass and capacity, time, and currency exchange. Exchange rates in examples are invented for practice, not real rates. NOT YET checked against textbook for depth.
---

## Lesson

### The metric prefixes

The metric system is built on powers of ten, so converting is just
multiplying or dividing by 10, 100 or 1000. The prefix tells you which:

| Prefix | Meaning | Examples |
|---|---|---|
| kilo- | $\times 1000$ | 1 km = 1000 m, 1 kg = 1000 g |
| centi- | $\div 100$ | 100 cm = 1 m |
| milli- | $\div 1000$ | 1000 mm = 1 m, 1000 mL = 1 L |

And one to remember separately: **1 tonne = 1000 kg**.

| Length | Mass | Capacity |
|---|---|---|
| 10 mm = 1 cm | 1000 mg = 1 g | 1000 mL = 1 L |
| 100 cm = 1 m | 1000 g = 1 kg | |
| 1000 m = 1 km | 1000 kg = 1 t | |

### Which way: multiply or divide?

Ask whether you're going to a **smaller** unit or a **bigger** one.

- **Big unit → small unit: multiply.** There will be *more* of the small
  units. $3.5 \text{ km} = 3.5 \times 1000 = 3500 \text{ m}$.
- **Small unit → big unit: divide.** There will be *fewer* of the big units.
  $750 \text{ g} = 750 \div 1000 = 0.75 \text{ kg}$.

Always sense-check: 3.5 km is a long way, so it should be a lot of metres. If
your answer is 0.0035 m, you went the wrong way.

For two steps, go one at a time. $2.4 \text{ km}$ in centimetres:
$2.4 \times 1000 = 2400 \text{ m}$, then $2400 \times 100 = 240\,000 \text{ cm}$.

### Time

Time is **not** decimal, which is what makes it tricky.

$$60 \text{ seconds} = 1 \text{ minute} \qquad 60 \text{ minutes} = 1 \text{ hour} \qquad 24 \text{ hours} = 1 \text{ day}$$

So $2.5$ hours is **2 hours 30 minutes** — not 2 hours 50 minutes. The $.5$ is
half an hour.

To change minutes to hours, divide by 60: $135 \text{ minutes} = 135 \div 60 = 2.25$
hours $= 2$ hours $15$ minutes.

The 24-hour clock counts hours from midnight. 3:40 p.m. is 15:40, and 00:20
is twenty past midnight.

### Currency

An exchange rate is a conversion factor, like any other.

> Suppose US\$1 = EC\$2.70.

**US to EC:** each US dollar is worth 2.70 EC dollars, so multiply.
US\$150 $= 150 \times 2.70 = $ EC\$405.

**EC to US:** divide by the rate. EC\$540 $= 540 \div 2.70 = $ US\$200.

The same sense-check works. With this rate, the EC amount is always the
**bigger** number, because an EC dollar is worth less.

Read which way the rate is written. "US\$1 = EC\$2.70" and "EC\$1 = US\$0.37"
describe roughly the same rate from opposite ends, and you multiply or divide
depending on which one you're given.

## Flashcards

### 1.8 | Converting from a big unit to a small unit: multiply or divide?
**Multiply.** There will be more of the smaller units.

$4 \text{ m} = 400 \text{ cm}$.

### 1.8 | How many grams are in 2.3 kg?
$2.3 \times 1000 = 2300 \text{ g}$.

### 1.8 | Change 850 mL to litres.
$850 \div 1000 = 0.85 \text{ L}$.

### 1.8 | Is 3.25 hours the same as 3 hours 25 minutes?
No. $0.25$ of an hour is $0.25 \times 60 = 15$ minutes, so 3.25 hours is
**3 hours 15 minutes**.

### 1.8 | How many kilograms are in a tonne?
1000 kg.

### 1.8 | Given US\$1 = TT\$6.80, how do you change TT dollars to US dollars?
Divide by 6.80. For example, TT\$340 $= 340 \div 6.80 = $ US\$50.

## Questions

### 1.8 | numeric | 1 mark | difficulty 1
Convert 4.75 km to metres.

**Answer:** 4750

**Working:** Kilometres to metres is big to small, so multiply by 1000:
$4.75 \times 1000 = 4750$ m.

### 1.8 | numeric | 1 mark | difficulty 2
A bottle holds 1.5 L. How many 250 mL cups can be filled from it?

**Answer:** 6

**Working:** Same units first: $1.5 \text{ L} = 1500 \text{ mL}$.

$1500 \div 250 = 6$ cups.

### 1.8 | mcq | 1 mark | difficulty 2
A film lasts 145 minutes. How long is this in hours and minutes?

- A. 1 h 45 min
- B. 2 h 25 min
- C. 2 h 45 min
- D. 1 h 4.5 min

**Answer:** B

**Working:** $145 = 120 + 25$, and 120 minutes is 2 hours. So 2 h 25 min.

A reads the "1" and "45" off the number as if time were decimal.

### 1.8 | numeric | 1 mark | difficulty 2
Given that US\$1 = J\$155, convert US\$64 to Jamaican dollars.

**Answer:** 9920

**Working:** US to J multiplies by the rate: $64 \times 155 = 9920$. So
J\$9920.

### 1.8 | structured | 4 marks | difficulty 3
Keisha buys 3 bags of rice, each of mass 2.5 kg, and 4 packs of flour, each of
mass 750 g.

(a) Find the total mass of the rice, in kilograms. **(1 mark)**

(b) Find the total mass of the flour, in kilograms. **(1 mark)**

(c) The shop charges BDS\$4.40 per kilogram for everything. How much does she
pay altogether? **(2 marks)**

**Answer:** (a) 7.5 kg (b) 3 kg (c) BDS\$46.20

**Working:** (a) $3 \times 2.5 = 7.5$ kg.

(b) $4 \times 750 = 3000$ g, and $3000 \div 1000 = 3$ kg.

(c) Total mass: $7.5 + 3 = 10.5$ kg. (1 mark.)
Cost: $10.5 \times 4.40 = 46.20$, so BDS\$46.20. (1 mark.)

Adding 7.5 and 3000 without converting is the error this question is built to
catch.
