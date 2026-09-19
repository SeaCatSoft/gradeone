---
subject: MATH
topic: relations-functions-graphs-1
lesson: functions
title: Functions and Function Notation
objectives: ["3.3", "3.4", "3.5", "3.14"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objectives 3.3 (characteristics that define a function), 3.4 (functional notation), 3.5 (distinguish between a relation and a function) and 3.14 (evaluate a function at a given value). All four are still flagged for review in the objectives file, having lost symbols in extraction. NOT YET checked against textbook for depth.
---

## Lesson

### What makes a function

A **function** is a special kind of relation:

> Every input has **exactly one** output.

So one-to-one and many-to-one relations are functions. One-to-many and
many-to-many relations are **not** — some input would have two outputs, and a
function mustn't be ambiguous about its answer.

| Relation | Function? | Why |
|---|---|---|
| $\{(1, 4), (2, 5), (3, 6)\}$ | Yes | each input appears once |
| $\{(1, 4), (2, 4), (3, 4)\}$ | Yes | many-to-one is allowed |
| $\{(1, 4), (1, 5), (2, 6)\}$ | **No** | input 1 has two outputs |

### The vertical line test

On a graph, draw (or imagine) **vertical** lines. If any vertical line crosses
the graph **more than once**, some $x$ has two $y$ values, so it's **not** a
function.

Straight lines (except vertical ones) and parabolas like $y = x^2$ pass the
test. A circle fails it.

### Function notation

A function is often given a letter, such as $f$, and written

$$f(x) = 3x - 2 \qquad \text{or} \qquad f: x \mapsto 3x - 2$$

Both say: "$f$ takes $x$ and gives $3x - 2$". $f(x)$ is read "$f$ of $x$" — it
does **not** mean $f$ times $x$.

### Evaluating a function

$f(4)$ means "put 4 in wherever $x$ is":

$$f(4) = 3(4) - 2 = 10$$

With $g(x) = x^2 + 1$:

$$g(-3) = (-3)^2 + 1 = 10 \qquad g(a) = a^2 + 1 \qquad g(2a) = 4a^2 + 1$$

Use brackets when substituting — especially negatives and expressions.

### Working backwards

"Find $x$ such that $f(x) = 13$" means solve the equation:

$$3x - 2 = 13 \quad\Rightarrow\quad x = 5$$

## Flashcards

### 3.3 | What is the defining property of a function?
Every input has **exactly one** output.

### 3.5 | Is a one-to-many relation a function?
No. An input with several outputs breaks the rule.

### 3.5 | Is a many-to-one relation a function?
Yes. Different inputs may share an output.

### 3.3 | What is the vertical line test?
If any vertical line crosses a graph more than once, the graph is **not** a
function.

### 3.14 | $f(x) = 5 - 2x$. Find $f(-3)$.
11. $5 - 2(-3) = 5 + 6$.

### 3.4 | What does $f(x)$ mean?
The output of function $f$ for input $x$. It does not mean $f$ multiplied by $x$.

## Questions

### 3.5 | mcq | 1 mark | difficulty 1
Which set of ordered pairs is **not** a function?

- A. $\{(1, 2), (2, 3), (3, 4)\}$
- B. $\{(1, 5), (2, 5), (3, 5)\}$
- C. $\{(1, 2), (1, 3), (2, 4)\}$
- D. $\{(0, 0), (1, 1), (2, 4)\}$

**Answer:** C

**Working:** In C, the input 1 has two outputs, 2 and 3.

B is many-to-one, which is allowed.

### 3.14 | numeric | 1 mark | difficulty 1
Given $f(x) = 4x + 7$, find $f(3)$.

**Answer:** 19

**Working:** $4(3) + 7 = 19$.

### 3.14 | numeric | 1 mark | difficulty 2
Given $g(x) = x^2 - 3x$, find $g(-2)$.

**Answer:** 10

**Working:** $(-2)^2 - 3(-2) = 4 + 6 = 10$.

### 3.4 | numeric | 1 mark | difficulty 2
$h: x \mapsto \dfrac{x + 5}{2}$. Find the value of $x$ for which $h(x) = 9$.

**Answer:** 13

**Working:** $\dfrac{x + 5}{2} = 9$, so $x + 5 = 18$ and $x = 13$.

### 3.4 | structured | 4 marks | difficulty 3
$f(x) = 2x^2 - 1$.

(a) Find $f(3)$. **(1 mark)**

(b) Find $f(-3)$. **(1 mark)**

(c) Explain why $f$ is a many-to-one function. **(1 mark)**

(d) Find an expression for $f(x + 1)$, simplified. **(1 mark)**

**Answer:** (a) 17 (b) 17 (c) Different inputs, 3 and $-3$, give the same output.
(d) $2x^2 + 4x + 1$

**Working:** (d) $2(x + 1)^2 - 1 = 2(x^2 + 2x + 1) - 1 = 2x^2 + 4x + 1$.
