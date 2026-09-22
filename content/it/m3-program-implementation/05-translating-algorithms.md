---
subject: IT
topic: program-implementation
lesson: translating-algorithms
title: Translating Algorithms into Code
objectives: ["8.5"]
est_minutes: 24
status: draft
source: "Original prose written against syllabus objective 8.5 (translate algorithmic statements into high-level language syntax). Pascal is used for illustration only; the syllabus assumes no particular language. NOT YET checked against textbook for depth."
---

## Lesson

An algorithm and a program say the same thing. The algorithm says it to a
person; the program says it to a compiler, which is far less forgiving.

Translating between them is mechanical, because pseudocode was designed to map
onto code. Every pseudocode structure has a direct equivalent.

As in the last lesson, the examples are **Pascal**, and the syllabus assumes no
particular language. Learn the correspondence, not the punctuation.

### The shape of a program

| Pseudocode | Pascal |
|---|---|
| `START` | `begin` |
| `STOP` | `end.` |

```pascal
program Average;

var
    mark1, mark2 : integer;
    average      : real;

begin
    ...
end.
```

Three things Pascal adds that pseudocode does not have: a program name, a
declaration section, and a **semicolon** separating statements. The final `end`
takes a full stop.

### Input and output

| Pseudocode | Pascal |
|---|---|
| `READ mark` | `readln(mark);` |
| `PRINT average` | `writeln(average);` |
| `PRINT "Enter a mark"` | `writeln('Enter a mark');` |

Pascal uses **single** quotation marks for text. Printing a mixture of text and
values separates them with commas:

```pascal
writeln('The average is ', average);
```

### Assignment

| Pseudocode | Pascal |
|---|---|
| `total = 0` | `total := 0;` |
| `total = total + mark` | `total := total + mark;` |
| `area = length * width` | `area := length * width;` |

Pascal writes assignment as `:=` and keeps plain `=` for **comparison**. Mixing
the two is one of the commonest syntax errors, and the compiler catches it
every time.

### Sequence

Statements run in order, each ending with a semicolon:

```pascal
readln(length);
readln(width);
area := length * width;
writeln('Area is ', area);
```

The semicolon **separates** statements. The one before `end` is optional, which
is why you will see it both ways.

### Selection

| Pseudocode | Pascal |
|---|---|
| `IF … THEN … ENDIF` | `if … then …` |
| `IF … THEN … ELSE … ENDIF` | `if … then … else …` |

```pascal
if mark >= 50 then
    writeln('PASS')
else
    writeln('FAIL');
```

Two Pascal traps here.

**No semicolon before `else`.** The `if … then … else` is one statement, and a
semicolon would end it early. This catches nearly everybody once.

**More than one statement needs `begin` and `end`:**

```pascal
if mark >= 50 then
begin
    passes := passes + 1;
    writeln('PASS')
end
else
    writeln('FAIL');
```

`begin … end` does the job pseudocode does with `ENDIF` — it marks where the
block finishes. Without it, only the *first* statement belongs to the `then`,
and the rest runs regardless of the condition. That is a **logic** error, not a
syntax error: the program compiles and quietly does the wrong thing.

Nested selection:

```pascal
if mark >= 80 then
    grade := 'A'
else if mark >= 65 then
    grade := 'B'
else
    grade := 'C';
```

### The comparison operators

| Pseudocode | Pascal |
|---|---|
| `=` | `=` |
| `<>` | `<>` |
| `>` `<` `>=` `<=` | the same |
| `AND` `OR` `NOT` | `and` `or` `not` |

In Pascal, conditions joined with `and` or `or` need brackets around each part:

```pascal
if (age >= 13) and (age <= 19) then
```

### Repetition — FOR

| Pseudocode | Pascal |
|---|---|
| `FOR count = 1 TO 30 DO … ENDFOR` | `for count := 1 to 30 do …` |

```pascal
total := 0;
for count := 1 to 30 do
begin
    readln(mark);
    total := total + mark
end;
average := total / 30;
```

Again, `begin … end` wraps the body whenever it is more than one statement.
Leave it out and only `readln(mark)` repeats — the marks are read thirty times
and only the last is added.

### Repetition — WHILE

| Pseudocode | Pascal |
|---|---|
| `WHILE … DO … ENDWHILE` | `while … do …` |

```pascal
total := 0;
readln(mark);
while mark <> -1 do
begin
    total := total + mark;
    readln(mark)
end;
```

The `readln` before the loop and the `readln` at the end of the body are both
essential, exactly as in the pseudocode.

### Repetition — REPEAT … UNTIL

| Pseudocode | Pascal |
|---|---|
| `REPEAT … UNTIL condition` | `repeat … until condition;` |

```pascal
repeat
    writeln('Enter a mark between 0 and 100');
    readln(mark)
until (mark >= 0) and (mark <= 100);
```

`repeat` and `until` bracket the body themselves, so no `begin … end` is
needed. It is the one loop that does not require it.

### The whole table

| Pseudocode | Pascal |
|---|---|
| `START` / `STOP` | `begin` / `end.` |
| `READ x` | `readln(x);` |
| `PRINT x` | `writeln(x);` |
| `x = y` | `x := y;` |
| `IF c THEN … ELSE … ENDIF` | `if c then … else …;` |
| `FOR i = 1 TO n DO … ENDFOR` | `for i := 1 to n do …;` |
| `WHILE c DO … ENDWHILE` | `while c do …;` |
| `REPEAT … UNTIL c` | `repeat … until c;` |
| (block) | `begin … end` |

### A complete translation

The algorithm from the pseudocode lesson:

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

becomes:

```pascal
program ClassResults;

const
    ClassSize = 25;
    PassMark  = 50;

var
    count, mark, total, passes : integer;
    average                    : real;

begin
    total := 0;
    passes := 0;
    for count := 1 to ClassSize do
    begin
        readln(mark);
        total := total + mark;
        if mark >= PassMark then
            passes := passes + 1
    end;
    average := total / ClassSize;
    writeln('Number who passed: ', passes);
    writeln('Class average: ', average)
end.
```

The structure is unchanged — same order, same loop, same condition. What has
been added is what a compiler needs and a human does not: declarations, types,
and punctuation. Note also that the two fixed figures became named constants,
so the 25 and the 50 each appear in one place.

### Where translations go wrong

| Mistake | Consequence |
|---|---|
| `=` used for assignment | Syntax error — caught at once |
| Missing `begin … end` round a block | **Logic** error — compiles and misbehaves |
| Semicolon before `else` | Syntax error |
| Declaring `average` as `integer` | Decimals silently discarded |
| Loop bounds off by one | Runs one time too many or too few |
| Calculating the average inside the loop | Works it out 25 times, keeps the last |

The worst of these is the missing `begin … end`, because it is the only one
that compiles cleanly. Everything else is reported.

## Flashcards

### 8.5 | How are `START` and `STOP` written in Pascal?
`begin` and `end.` — the final `end` takes a full stop.

### 8.5 | How are `READ mark` and `PRINT average` written in Pascal?
`readln(mark);` and `writeln(average);`

### 8.5 | How is assignment written in Pascal, and what is plain `=` used for?
Assignment is `:=`. Plain `=` is used for **comparison** only.

### 8.5 | Translate `IF mark >= 50 THEN PRINT "PASS" ELSE PRINT "FAIL" ENDIF`.
```pascal
if mark >= 50 then
    writeln('PASS')
else
    writeln('FAIL');
```

### 8.5 | Why must there be no semicolon before `else` in Pascal?
`if … then … else` is a single statement, and a semicolon would end it early —
a syntax error.

### 8.5 | What does `begin … end` do, and which pseudocode word does it replace?
It groups several statements into one block, doing the job of `ENDIF`,
`ENDFOR` or `ENDWHILE`.

### 8.5 | What happens if `begin … end` is left out around a two-statement loop body?
Only the first statement repeats; the second runs once, after the loop. The
program still compiles, so it is a **logic** error — the hardest kind to find.

> Hint: does the compiler complain?

### 8.5 | Translate `FOR count = 1 TO 30 DO … ENDFOR` into Pascal.
`for count := 1 to 30 do` followed by the body, wrapped in `begin … end` if it
is more than one statement.

### 8.5 | Which Pascal loop needs no `begin … end` around its body, and why?
`repeat … until` — the two words bracket the body themselves.

### 8.5 | How are two conditions joined in Pascal?
With `and` or `or`, each part in brackets:
`if (age >= 13) and (age <= 19) then`

### 8.5 | Which translation mistake produces a logic error rather than a syntax error?
Leaving out `begin … end` around a block. The program compiles and runs, but
only the first statement belongs to the `if` or the loop.

## Questions

### 8.5 | mcq | 1 mark | difficulty 1
Which Pascal statement assigns the value 0 to the variable `total`?

- A. `total = 0;`
- B. `total := 0;`
- C. `total == 0;`
- D. `0 := total;`

**Answer:** B

**Working:** Pascal assigns with `:=` and reserves `=` for comparison. The
variable being assigned to always goes on the left.

### 8.5 | mcq | 1 mark | difficulty 2
Which is the correct Pascal translation of `PRINT "Total is ", total`?

- A. `writeln("Total is ", total);`
- B. `writeln('Total is ', total);`
- C. `readln('Total is ', total);`
- D. `writeln('Total is , total');`

**Answer:** B

**Working:** Pascal uses single quotation marks for text, and the variable name
sits outside them so its value is printed. In option D the variable name is
inside the quotes and would be printed as words.

### 8.5 | mcq | 1 mark | difficulty 3
Consider this code:

```pascal
if mark >= 50 then
    passes := passes + 1;
    writeln('PASS');
```

What happens when `mark` is 30?

- A. Nothing is printed and `passes` is unchanged
- B. `PASS` is printed and `passes` is unchanged
- C. A syntax error is reported
- D. `PASS` is printed and `passes` increases

**Answer:** B

**Working:** Without `begin … end`, only the first statement belongs to the
`if`. The `writeln` is a separate statement that runs whatever the mark is. The
program compiles perfectly, which is what makes this a logic error.

### 8.5 | mcq | 1 mark | difficulty 2
How many times does `for count := 1 to 20 do` execute its body?

- A. 19
- B. 20
- C. 21
- D. Once

**Answer:** B

**Working:** Both bounds are included, so the body runs for `count` = 1 to 20 —
**20** times.

### 8.5 | mcq | 1 mark | difficulty 3
Which Pascal loop is most appropriate for asking the user to enter a value
until a valid one is given?

- A. `for`
- B. `while`
- C. `repeat … until`
- D. No loop is needed

**Answer:** C

**Working:** You must ask once before there is anything to check, and
`repeat … until` always executes its body at least once.

### 8.5 | structured | 10 marks | difficulty 4
An algorithm reads the marks of 10 students, adds up the total, counts how many
scored 50 or more, and prints the total and the count.

```
START
    total = 0
    passes = 0
    FOR count = 1 TO 10 DO
        READ mark
        total = total + mark
        IF mark >= 50 THEN
            passes = passes + 1
        ENDIF
    ENDFOR
    PRINT total
    PRINT passes
STOP
```

(a) Write the declarations this program needs, in a high-level language of your
choice. **(3 marks)**

(b) Translate the algorithm into that language. **(6 marks)**

(c) A student omits `begin` and `end` around the loop body. State the type of
error this produces and explain its effect. **(1 mark)**

**Answer:** (a) 3 marks: all four integer variables declared (`count`, `mark`,
`total`, `passes`) — 2 marks; correct declaration syntax for the language used
— 1 mark. Accept `ClassSize` and `PassMark` declared as constants in place of
the literal values.
(b) 6 marks: `begin`/`end.` (1); both variables initialised to 0 (1); correctly
written `for` loop over 10 iterations (1); `readln(mark)` inside the loop (1);
correct `if` with the `>= 50` comparison (1); both values printed after the
loop (1). Marks are for the logic; small punctuation slips are not penalised
twice.

```pascal
program ClassTotals;

var
    count, mark, total, passes : integer;

begin
    total := 0;
    passes := 0;
    for count := 1 to 10 do
    begin
        readln(mark);
        total := total + mark;
        if mark >= 50 then
            passes := passes + 1
    end;
    writeln(total);
    writeln(passes)
end.
```

(c) A logic error — the program compiles and runs, but only the first statement
of the body repeats, so the remaining statements execute once after the loop
and the totals are wrong — 1 mark.

**Working:** (b) The syllabus states that no particular programming language is
assumed, so an answer in Visual Basic, C or Python scores equally. What is
assessed is that the structure of the algorithm survives translation: same
order, same loop bounds, same condition.

(c) Note that this is the one translation error the compiler will not save you
from.
