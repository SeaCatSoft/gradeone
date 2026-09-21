---
subject: IT
topic: problem-solving-design
lesson: pseudocode
title: Writing Pseudocode
objectives: ["7.6"]
est_minutes: 26
status: draft
source: "Original prose written against syllabus objective 7.6 (represent algorithms in the form of flowchart and pseudocode), covering pseudocode. Flowcharts are the next lesson. NOT YET checked against textbook for depth."
---

## Lesson

**Pseudocode** is an algorithm written in structured English. It uses the
keywords of programming without the fussy rules of any one language, so it can
be read by anyone and run by no one.

That is the point. You are writing for a human reader — including yourself,
tomorrow — and the only requirement is that the method is unmistakable.

Exact wording varies between textbooks. What never varies is that the
**logic** must be clear, the structures **properly closed**, and the body of
each structure **indented**.

### The shape of an algorithm

```
START
    instructions
STOP
```

Some books write `BEGIN` and `END`. Either is accepted as long as you are
consistent.

### Input and output

```
READ name
READ mark1, mark2
PRINT "Enter your age"
PRINT average
```

`READ` (or `INPUT`) takes a value from outside and puts it in a variable.
`PRINT` (or `DISPLAY`, `WRITE`, `OUTPUT`) sends a value out.

Text to be printed exactly as written goes in quotation marks; a variable name
does not. `PRINT "average"` prints the word *average*, while `PRINT average`
prints the value the variable holds. It is a small distinction that examiners
notice.

### Assignment

```
total = 0
total = total + mark
area = length * width
```

Some books write `←` instead of `=`. Read every assignment right to left: work
out the right-hand side, then store it in the variable on the left.

### Sequence

Instructions written one under another are carried out in order:

```
START
    READ length
    READ width
    area = length * width
    PRINT area
STOP
```

### Selection — IF

For one path:

```
IF mark >= 50 THEN
    PRINT "PASS"
ENDIF
```

For a choice of two:

```
IF mark >= 50 THEN
    PRINT "PASS"
ELSE
    PRINT "FAIL"
ENDIF
```

Every `IF` needs an `ENDIF`. Leaving it off is the commonest pseudocode error
in an examination, and it is the easiest mark to keep.

### Selection — more than two paths

Nest one `IF` inside another's `ELSE`:

```
IF mark >= 80 THEN
    grade = "A"
ELSE
    IF mark >= 65 THEN
        grade = "B"
    ELSE
        grade = "C"
    ENDIF
ENDIF
```

Two `IF`s, so two `ENDIF`s. Indentation is what makes this readable — the
inner `IF` is clearly inside the outer `ELSE`.

As with spreadsheet formulas, **the order of the tests matters**. Ask about 80
before 65: a mark of 90 satisfies both, and whichever is asked first wins.

Where a value is tested against a list of fixed possibilities, `CASE` is
tidier:

```
CASE grade OF
    "A": PRINT "Excellent"
    "B": PRINT "Good"
    "C": PRINT "Satisfactory"
    OTHERWISE: PRINT "Invalid grade"
ENDCASE
```

`CASE` suits exact matches. Ranges such as `mark >= 65` need nested `IF`s.

### Repetition — FOR

Use `FOR` when you know **how many times** in advance:

```
total = 0
FOR count = 1 TO 30 DO
    READ mark
    total = total + mark
ENDFOR
average = total / 30
PRINT average
```

The loop variable `count` starts at 1, increases by 1 each time, and the loop
ends after 30. You do not write the counting yourself — the `FOR` does it.

Note `total = 0` **before** the loop. Initialise every running total and
counter before the loop that uses it.

### Repetition — WHILE

Use `WHILE` when you do not know how many times, and the condition is tested
**before** each pass:

```
total = 0
count = 0
READ mark
WHILE mark <> -1 DO
    total = total + mark
    count = count + 1
    READ mark
ENDWHILE
PRINT total
```

Two things make this work. The first `READ` before the loop gives the condition
something to test — without it, `mark` has no value on the first test. And the
`READ` at the *end* of the loop body fetches the next value; forget it and the
same mark is added for ever.

The `-1` here is a **sentinel** (or rogue) value: a value that cannot occur in
the real data, used to mark the end of input. A mark of −1 is impossible, which
is what makes it safe. Using `0` as the sentinel for marks would end the loop
at the first student who scored nothing.

Because the test comes first, a `WHILE` loop may run **zero** times. If the
very first mark read is −1, the body never executes at all — which is usually
exactly what you want.

### Repetition — REPEAT … UNTIL

The condition is tested **after** each pass, so the body always runs **at least
once**:

```
REPEAT
    PRINT "Enter a mark between 0 and 100"
    READ mark
UNTIL mark >= 0 AND mark <= 100
```

This is the natural shape for validating input: you must ask once before you
can check the answer.

Note the reversal. `WHILE` continues while its condition is **true**; `REPEAT`
continues until its condition **becomes** true. The conditions are opposites of
one another, which is a favourite examination trap.

### Choosing the loop

| Situation | Loop |
|---|---|
| The number of repetitions is known | `FOR` |
| Unknown, and it may need to run zero times | `WHILE` |
| Unknown, but it must run at least once | `REPEAT … UNTIL` |

### Conditions

Comparisons use `=`, `<>`, `>`, `<`, `>=`, `<=`, and can be joined:

```
IF age >= 13 AND age <= 19 THEN
IF grade = "A" OR grade = "B" THEN
IF NOT (mark >= 50) THEN
```

`AND` needs both sides true; `OR` needs at least one; `NOT` reverses.

### Style that earns marks

- **Indent** the body of every `IF`, `FOR`, `WHILE` and `REPEAT`.
- **Close** every structure: `ENDIF`, `ENDFOR`, `ENDWHILE`, `UNTIL`, `ENDCASE`.
- **Name variables meaningfully** — `total`, not `t`.
- **Initialise** counters and totals before the loop.
- **One instruction per line.**

### A complete example

*Read 20 students' marks. Print each student's mark and whether they passed
(50 or more). At the end, print the class average and the highest mark.*

```
START
    total = 0
    highest = 0
    FOR count = 1 TO 20 DO
        READ mark
        PRINT mark
        IF mark >= 50 THEN
            PRINT "PASS"
        ELSE
            PRINT "FAIL"
        ENDIF
        total = total + mark
        IF mark > highest THEN
            highest = mark
        ENDIF
    ENDFOR
    average = total / 20
    PRINT "Class average is ", average
    PRINT "Highest mark is ", highest
STOP
```

Everything in this section is in there: sequence, selection, repetition, an
initialised total, and a running highest. The `highest = 0` works because no
mark can be below zero — with data that could be negative, you would set
`highest` to the first value read instead.

## Flashcards

### 7.6 | What is pseudocode?
An algorithm written in structured English, using programming keywords but not
the rules of any particular language.

### 7.6 | What is the difference between `PRINT "average"` and `PRINT average`?
The first prints the word *average*; the second prints the value stored in the
variable `average`.

### 7.6 | Write pseudocode that prints PASS if `mark` is 50 or more and FAIL otherwise.
```
IF mark >= 50 THEN
    PRINT "PASS"
ELSE
    PRINT "FAIL"
ENDIF
```

### 7.6 | Which loop is used when the number of repetitions is known in advance?
`FOR` — it does the counting for you.

### 7.6 | What is the key difference between WHILE and REPEAT … UNTIL?
`WHILE` tests **before** each pass, so it may run zero times. `REPEAT` tests
**after**, so the body always runs at least once.

> Hint: which one asks before it acts?

### 7.6 | `WHILE` continues while its condition is true. What about `REPEAT … UNTIL`?
It continues **until** its condition becomes true — so the two conditions are
opposites of one another.

### 7.6 | What is a sentinel value?
A value that cannot occur in the real data, used to mark the end of input —
such as −1 in a list of marks.

### 7.6 | Why must a `WHILE` loop reading data contain a READ inside its body?
Without it the same value is tested every time and the loop never ends. The
first READ goes before the loop; the next one goes at the end of the body.

### 7.6 | Why is `total = 0` written before a loop and not inside it?
Inside the loop it would reset the total on every pass, leaving only the last
value added. It must be initialised once, before the loop starts.

### 7.6 | Which loop is most suitable for validating input, and why?
`REPEAT … UNTIL` — you must ask for the value once before there is anything to
check, and the body always runs at least once.

### 7.6 | How many ENDIFs does an algorithm with two nested IFs need?
Two. Every `IF` must be closed by its own `ENDIF`.

## Questions

### 7.6 | mcq | 1 mark | difficulty 1
Which pseudocode instruction takes a value from the user and stores it in a
variable?

- A. `PRINT mark`
- B. `READ mark`
- C. `mark = 0`
- D. `IF mark THEN`

**Answer:** B

**Working:** `READ` (or `INPUT`) brings a value in from outside. `PRINT` sends
a value out, and `mark = 0` assigns a value already known.

### 7.6 | mcq | 1 mark | difficulty 2
A programmer does not know how many values will be entered, and the loop may
need to run no times at all. Which structure is most suitable?

- A. `FOR`
- B. `WHILE`
- C. `REPEAT … UNTIL`
- D. `CASE`

**Answer:** B

**Working:** `WHILE` tests its condition before the first pass, so it can run
zero times. `REPEAT` always runs at least once, and `FOR` needs the count known
in advance.

### 7.6 | mcq | 1 mark | difficulty 2
How many times does the body of this loop execute?

```
FOR count = 1 TO 12 DO
    total = total + count
ENDFOR
```

- A. 11
- B. 12
- C. 13
- D. Once

**Answer:** B

**Working:** The loop runs for `count` = 1, 2, … 12 — both ends included, so
**12** times.

### 7.6 | mcq | 1 mark | difficulty 3
In the loop below, the programmer has forgotten one instruction. What is the
result?

```
READ mark
WHILE mark <> -1 DO
    total = total + mark
ENDWHILE
```

- A. The loop runs exactly once
- B. The loop never runs
- C. The loop never ends
- D. The total is always zero

**Answer:** C

**Working:** There is no `READ` inside the loop, so `mark` never changes. If
the first mark is not −1 the condition stays true for ever. The missing
instruction is a `READ mark` at the end of the body.

### 7.6 | mcq | 1 mark | difficulty 3
Which statement about `REPEAT … UNTIL` is correct?

- A. Its condition is tested before the body runs
- B. Its body always runs at least once
- C. It can only be used when the number of repetitions is known
- D. It is another name for a `FOR` loop

**Answer:** B

**Working:** The condition is tested after the body, so the body has already
run once by the time the first test happens. This is why it suits validating
input.

### 7.6 | structured | 10 marks | difficulty 4
A teacher wants an algorithm that reads the marks of 25 students, counts how
many passed (a pass is 50 or more), and prints the number who passed and the
class average.

(a) Write pseudocode for the algorithm. **(7 marks)**

(b) State **two** values that must be initialised before the loop, and explain
why. **(2 marks)**

(c) State which control structure you used for the loop, and why it is
appropriate. **(1 mark)**

**Answer:** (a) 7 marks, awarded as: `START`/`STOP` (1); both `total` and
`passes` initialised to 0 (1); a `FOR` loop running 25 times with `ENDFOR` (1);
`READ mark` inside the loop (1); `IF mark >= 50 THEN passes = passes + 1`
with `ENDIF` (1); `total = total + mark` inside the loop (1); average
calculated after the loop and both values printed (1). A correct `WHILE`
version with its own counter scores equally.

```
START
    total = 0
    passes = 0
    FOR count = 1 TO 25 DO
        READ mark
        total = total + mark
        IF mark >= 50 THEN
            passes = passes + 1
        ENDIF
    ENDFOR
    average = total / 25
    PRINT "Number who passed: ", passes
    PRINT "Class average: ", average
STOP
```

(b) 1 mark — `total` and `passes`; 1 mark — a variable used before it is given
a value holds an unknown value, so the total and the count would start from
something unpredictable. (Accept: they must be set once before the loop, not
inside it, or they would reset on every pass.)
(c) `FOR`, because the number of students is known in advance — 1 mark.

**Working:** (a) The two common losses are putting `total = 0` inside the loop
— which resets it on every pass, leaving only the last mark — and omitting
`ENDIF` or `ENDFOR`.

Note that `average = total / 25` must come **after** `ENDFOR`. Inside the loop
it would be calculated 25 times, and every value but the last discarded.
