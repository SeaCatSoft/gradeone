---
subject: IT
topic: problem-solving-design
lesson: testing-algorithms
title: Testing Algorithms
objectives: ["7.7"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 7.7 (test algorithms for correctness). Trace tables and the three kinds of test data. NOT YET checked against textbook for depth."
---

## Lesson

An algorithm that has not been tested is a guess. Testing means taking chosen
data, following the algorithm **exactly as written**, and checking that what
comes out is what should come out.

All of this happens on paper, before any program exists. The technique is
called a **dry run** or **desk check**, and the record you keep of it is a
**trace table**.

### The trace table

A trace table has one column for each variable, plus a column for anything
printed. Each row is one step of the algorithm, and you write down what the
variables hold **at that moment**.

Take this algorithm:

```
START
    total = 0
    FOR count = 1 TO 3 DO
        READ num
        total = total + num
    ENDFOR
    PRINT total
STOP
```

Trace it with the data 5, 8, 2:

| Step | count | num | total | Output |
|---|---|---|---|---|
| `total = 0` | — | — | 0 | |
| pass 1: `READ num` | 1 | 5 | 0 | |
| pass 1: `total = total + num` | 1 | 5 | 5 | |
| pass 2: `READ num` | 2 | 8 | 5 | |
| pass 2: `total = total + num` | 2 | 8 | 13 | |
| pass 3: `READ num` | 3 | 2 | 13 | |
| pass 3: `total = total + num` | 3 | 2 | 15 | |
| `PRINT total` | 3 | 2 | 15 | 15 |

The expected answer is 5 + 8 + 2 = 15, and the trace gives 15. The algorithm
is correct for this data.

### The rule that makes tracing work

**Follow the algorithm as written, not as intended.**

This is the whole discipline, and it is difficult, because you know what you
meant. If the algorithm says `total = num` where you meant `total = total +
num`, tracing it honestly shows a total that keeps being replaced instead of
growing. Tracing it *charitably* shows nothing at all, and you have wasted the
exercise.

When a trace and your expectation disagree, the trace is right.

### Choosing test data

Working through one set of data proves the algorithm works for that set.
Choosing the sets well is what makes testing worth doing. There are three kinds
and an examination question usually wants all three.

**Normal data** — ordinary values the algorithm should accept and process.
Marks of 45, 67 and 88 for an algorithm expecting marks out of 100.

**Extreme (boundary) data** — values at the very edge of what is acceptable:
0 and 100 for a mark, and the values just either side of a decision point. If a
pass is 50 or more, test 49, 50 and 51.

**Abnormal (invalid) data** — values the algorithm should reject: −5, 150, or
the word `seven` where a number is expected. The test is whether it refuses
them sensibly rather than producing an answer.

| Kind | Example for a mark out of 100 | What it checks |
|---|---|---|
| Normal | 45, 67, 88 | The ordinary case works |
| Extreme | 0, 100, 49, 50, 51 | Boundaries are handled correctly |
| Abnormal | −5, 150, `seven` | Bad data is rejected, not processed |

### Why boundaries matter most

Errors cluster at boundaries, because that is where `>` and `>=` are confused.

An algorithm with `IF mark > 50 THEN PRINT "PASS"` passes anyone above 50 and
fails the student who scored exactly 50. Test it with 45 and 67 and it looks
perfect. Test it with 50 and the fault appears at once.

So for every decision in the algorithm, test the value **on** the boundary, and
one either side.

### An algorithm with a fault

```
START
    highest = 0
    FOR count = 1 TO 3 DO
        READ num
        IF num > highest THEN
            highest = num
        ENDIF
    ENDFOR
    PRINT highest
STOP
```

Trace it with 4, 9, 6 and it prints 9 — correct.

Now trace it with −4, −9, −6. The expected answer is −4, the largest of the
three. But `highest` starts at 0, and no negative number is greater than 0, so
nothing ever replaces it and the algorithm prints **0** — a value that was
never in the data at all.

The fault was invisible under normal data and obvious under data chosen to
stress the assumption. The repair is to set `highest` to the **first value
read** rather than to zero.

### What to check in the results

Testing asks two questions of every trace:

1. **Is the output correct** for the data used? Work out the right answer
   independently first, then compare.
2. **Does the algorithm terminate?** A loop that never ends is a failure even
   when every calculation in it is right.

### The faults tracing finds

| Fault | How it shows in the trace |
|---|---|
| Total not initialised | The total column has nowhere to start |
| Total initialised inside the loop | It resets to 0 on every pass |
| Wrong comparison (`>` for `>=`) | The boundary value takes the wrong branch |
| Loop runs one time too many or too few | The count column ends on the wrong number |
| Missing READ inside a `WHILE` | The same value repeats down the column for ever |
| Calculation inside the loop that belongs after it | The result is worked out and discarded repeatedly |

Every one of these is a common examination error, and every one is visible in a
trace table within a few rows.

### Testing is not proof

Passing every test you thought of shows the algorithm works **for the data you
chose**. It cannot show that no untested value breaks it.

That is not a reason to skip testing — it is a reason to choose data that
attacks the algorithm rather than flattering it. Normal data confirms what you
hope. Extreme and abnormal data is where faults are actually found.

## Flashcards

### 7.7 | What is a dry run?
Working through an algorithm by hand with chosen data, before any program is
written. Also called a desk check.

### 7.7 | What is a trace table?
A table with a column for each variable and one for the output, recording what
each variable holds at every step of a dry run.

### 7.7 | What is the golden rule when tracing an algorithm?
Follow it exactly **as written**, not as you intended it. When the trace and
your expectation disagree, the trace is right.

### 7.7 | Name the three kinds of test data.
**Normal** (ordinary acceptable values), **extreme** or boundary (values at the
edge of what is acceptable), and **abnormal** or invalid (values that should be
rejected).

### 7.7 | Give examples of the three kinds of test data for a mark out of 100.
Normal: 45, 67. Extreme: 0, 100, and 49, 50, 51 around a pass mark of 50.
Abnormal: −5, 150, or the word `seven`.

### 7.7 | Why is boundary data the most important to test?
Errors cluster where `>` and `>=` are confused. An algorithm using `> 50`
instead of `>= 50` looks perfect on 45 and 67, and fails only on exactly 50.

> Hint: which single value would expose that fault?

### 7.7 | What does abnormal test data check?
That the algorithm **rejects** invalid values sensibly rather than processing
them and producing an answer.

### 7.7 | Why does `highest = 0` fail on a list of negative numbers?
No negative number is greater than 0, so nothing replaces the starting value
and the algorithm prints 0 — a value that was never in the data. Set `highest`
to the first value read instead.

### 7.7 | Besides checking the output, what else must a test confirm?
That the algorithm **terminates**. A loop that never ends is a failure even if
every calculation inside it is correct.

### 7.7 | Does passing every test prove an algorithm is correct?
No. It shows the algorithm works for the data chosen. Testing can reveal
faults; it cannot prove there are none left.

## Questions

### 7.7 | mcq | 1 mark | difficulty 1
Working through an algorithm by hand, recording the value of each variable at
every step, is known as

- A. compiling
- B. a dry run
- C. implementation
- D. decomposition

**Answer:** B

**Working:** A dry run, or desk check, is done on paper before any program
exists. The record kept is a trace table.

### 7.7 | mcq | 1 mark | difficulty 2
An algorithm accepts marks from 0 to 100, and a pass is 50 or more. Which set
is **extreme** test data?

- A. 45, 67, 88
- B. 0, 49, 50, 100
- C. −5, 150, `seven`
- D. 20, 30, 40

**Answer:** B

**Working:** These are values at the edges of the valid range and either side
of the decision point. Option A is normal data and option C abnormal.

### 7.7 | mcq | 1 mark | difficulty 3
An algorithm contains `IF mark > 50 THEN PRINT "PASS"`. Which single test value
would expose the fault?

- A. 45
- B. 50
- C. 67
- D. 100

**Answer:** B

**Working:** A mark of exactly 50 should pass but does not, because `>` excludes
it. Every other value here behaves identically under `>` and `>=`, so only 50
reveals the error.

### 7.7 | mcq | 1 mark | difficulty 3
Trace this algorithm with the data 6, 3, 9. What is printed?

```
total = 0
FOR count = 1 TO 3 DO
    READ num
    total = num
ENDFOR
PRINT total
```

- A. 18
- B. 6
- C. 9
- D. 0

**Answer:** C

**Working:** The instruction is `total = num`, not `total = total + num`, so
each value **replaces** the last instead of being added. After the third pass
`total` holds 9. Following the algorithm as written, rather than as intended,
is what catches this.

### 7.7 | mcq | 1 mark | difficulty 3
Which fault would a trace table reveal as the same value repeating down a
column for ever?

- A. A total initialised inside the loop
- B. A missing READ inside a `WHILE` loop
- C. A loop running one time too many
- D. Using `>` instead of `>=`

**Answer:** B

**Working:** With no `READ` in the body the variable never changes, so the
condition never becomes false and the column repeats. Option A would show the
total resetting to 0 on each pass.

### 7.7 | structured | 10 marks | difficulty 4
Consider the following algorithm.

```
START
    total = 0
    count = 0
    READ num
    WHILE num <> 0 DO
        total = total + num
        count = count + 1
        READ num
    ENDWHILE
    average = total / count
    PRINT average
STOP
```

(a) Complete a trace table for the input data 10, 20, 30, 0, showing the values
of `num`, `total` and `count`, and the output. **(5 marks)**

(b) State the purpose of the value 0 in the input data, and give the term for
such a value. **(2 marks)**

(c) The algorithm fails if the first value entered is 0. Explain why.
**(2 marks)**

(d) Name the kind of test data that would have revealed the fault in (c).
**(1 mark)**

**Answer:** (a) 5 marks: 1 for correct initial values (`total` 0, `count` 0),
1 for each of the three loop passes traced correctly, 1 for the output 20.

| Step | num | total | count | Output |
|---|---|---|---|---|
| initialise | — | 0 | 0 | |
| `READ num` | 10 | 0 | 0 | |
| pass 1 | 10 | 10 | 1 | |
| `READ num` | 20 | 10 | 1 | |
| pass 2 | 20 | 30 | 2 | |
| `READ num` | 30 | 30 | 2 | |
| pass 3 | 30 | 60 | 3 | |
| `READ num` | 0 | 60 | 3 | |
| after loop | 0 | 60 | 3 | 20 |

(b) 1 mark — it marks the end of the input so the loop knows when to stop;
1 mark — it is a sentinel (accept rogue, terminator or dummy value).
(c) 1 mark — the loop body never runs, so `count` stays at 0; 1 mark — the
algorithm then calculates `total / count`, a division by zero, which fails.
(d) Extreme or boundary data (accept: testing with no values entered) —
1 mark.

**Working:** (a) 60 ÷ 3 = 20. The sentinel 0 is read but never added, because
the condition is tested before the body runs again.

(c) This is the standard weakness of an average algorithm and the reason a
`WHILE` loop's zero-pass case must always be tested. The repair is to guard the
division: `IF count > 0 THEN … ELSE PRINT "No data entered"`.
