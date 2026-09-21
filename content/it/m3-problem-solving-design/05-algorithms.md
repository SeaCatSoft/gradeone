---
subject: IT
topic: problem-solving-design
lesson: algorithms
title: What an Algorithm Is
objectives: ["7.5"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 7.5 (explain the concept of algorithms). Properties of an algorithm and the three control structures. NOT YET checked against textbook for depth."
---

## Lesson

An **algorithm** is a finite sequence of precise, unambiguous steps that solves
a problem or performs a task.

Every word in that definition is doing work, and the properties below are just
those words spelled out.

### The properties of an algorithm

**Finite.** It must have a limited number of steps and must **terminate** —
come to a stop. A set of instructions that could run for ever is not an
algorithm, however sensible each instruction is.

**Precise.** Each step must say exactly what to do. "Add a little salt" is not
precise; "add 5 grams of salt" is.

**Unambiguous.** Each step can be understood in only one way. "Take the marks
and divide by four" could mean divide the total by four or divide each mark by
four — it has two readings, so it is ambiguous and must be rewritten.

**Ordered.** The steps are carried out in a definite sequence. Putting the
dough in the oven before mixing it produces something, but not bread.

**Effective.** Every step must be one that can actually be carried out.
"Guess the customer's password" is not effective.

**General.** A good algorithm solves the whole class of problem, not one case.
An algorithm that averages four marks should work for any four marks, not just
the ones you tested it on.

**It has input and output.** It takes in zero or more values and produces at
least one result. An algorithm that produces nothing has done nothing.

Two of these carry the most marks in examinations: **finite/terminates** and
**unambiguous**. If you can only remember a few, remember those.

### An everyday algorithm

Making a cup of tea:

```
1. Fill the kettle with water
2. Switch the kettle on
3. Wait until the water boils
4. Put a tea bag in the cup
5. Pour the boiled water into the cup
6. Wait 3 minutes
7. Remove the tea bag
8. Add milk and sugar to taste
9. Stir
```

It is finite (nine steps), ordered (step 5 before step 6), precise (3 minutes,
not "a while") and it terminates. Step 8 is the weakest — "to taste" is not
unambiguous, and a precise algorithm would say how much.

This is worth noticing: people give each other vague instructions all the time
and it works, because a human fills in the gaps. A computer cannot. Everything
left unsaid must be decided by the person writing the algorithm.

### Algorithm, program and process

Three related words that examiners like to separate:

| Term | Meaning |
|---|---|
| **Algorithm** | The method — a sequence of steps, in no particular language |
| **Program** | That method written in a programming language a computer can run |
| **Process** | A program while it is actually running |

The algorithm comes first and is independent of any language. The same
algorithm can be written in Pascal, Python or C, and it is the same algorithm
each time. This is why algorithms are written in pseudocode or flowcharts —
forms that no computer runs, but any programmer can read.

### The three control structures

Every algorithm, however long, is built from just three ways of arranging
steps. This is a genuinely surprising result and it is examinable.

**Sequence** — steps carried out one after another, in order.

```
READ length
READ width
area = length * width
PRINT area
```

**Selection** — a choice between paths, according to a condition.

```
IF average >= 50 THEN
    PRINT "PASS"
ELSE
    PRINT "FAIL"
ENDIF
```

**Repetition (iteration)** — a group of steps carried out more than once.

```
FOR count = 1 TO 30 DO
    READ mark
    total = total + mark
ENDFOR
```

Sequence, selection and repetition. Nothing else is needed, and the next two
lessons are about writing these three down properly — as pseudocode, and as a
flowchart.

### Why write the algorithm before the program

**It can be checked by hand.** An algorithm is traced on paper; an error found
there costs minutes.

**It is language-independent.** Decide the method first, and the choice of
programming language becomes a separate, later decision.

**Anyone can read it.** Pseudocode can be discussed with someone who does not
know your programming language — including the person who asked for the
program.

**It separates two hard things.** Working out *what to do* and working out *how
to say it in Pascal* are both difficult. Doing them at the same time is how
beginners get stuck.

## Flashcards

### 7.5 | Define an algorithm.
A finite sequence of precise, unambiguous steps that solves a problem or
performs a task.

### 7.5 | What does it mean for an algorithm to be finite?
It has a limited number of steps and must terminate — come to a stop. Something
that could run for ever is not an algorithm.

### 7.5 | Why must each step of an algorithm be unambiguous?
It must have only one possible meaning. "Take the marks and divide by four"
could mean two different things, so it cannot be followed reliably.

### 7.5 | List five properties of a good algorithm.
Any five: finite and terminating; precise; unambiguous; ordered; effective
(each step can actually be carried out); general; has input and output.

### 7.5 | What is the difference between an algorithm and a program?
An **algorithm** is the method, written in no particular language. A
**program** is that method expressed in a programming language a computer can
run.

### 7.5 | Name the three control structures.
**Sequence**, **selection** and **repetition** (iteration). Every algorithm is
built from these three.

### 7.5 | What is selection?
A control structure that chooses between paths according to a condition — for
example `IF average >= 50 THEN … ELSE …`.

### 7.5 | What is repetition?
A control structure that carries out a group of steps more than once, such as a
`FOR` or `WHILE` loop. Also called iteration.

### 7.5 | Give two reasons for writing an algorithm before writing the program.
Any two: it can be checked by hand cheaply; it does not depend on any
programming language; anyone can read it, including non-programmers; it
separates deciding *what to do* from deciding how to write it.

### 7.5 | Why is "add a little salt" unsuitable as an algorithm step?
It is not precise — it does not state how much. A computer cannot fill in what
a human would guess.

## Questions

### 7.5 | mcq | 1 mark | difficulty 1
An algorithm is best defined as

- A. a program written in a high-level language
- B. a finite sequence of precise steps that solves a problem
- C. a diagram showing the parts of a system
- D. a set of data used to test a program

**Answer:** B

**Working:** The algorithm is the method itself and is independent of any
language — which is what makes option A a program rather than an algorithm.

### 7.5 | mcq | 1 mark | difficulty 2
Which property is **missing** from this set of instructions?

`1. Read a number. 2. Add 1 to it. 3. Go back to step 1.`

- A. It is not ordered
- B. It does not terminate
- C. It has no input
- D. It is ambiguous

**Answer:** B

**Working:** Step 3 sends it back for ever, so it never stops. An algorithm
must be finite and terminate, which this does not.

### 7.5 | mcq | 1 mark | difficulty 2
Which of the following instructions is **ambiguous**?

- A. `total = total + mark`
- B. Divide the total by 4
- C. Take the marks and divide by four
- D. `PRINT average`

**Answer:** C

**Working:** It can be read as dividing the total by four or dividing each mark
by four — two different results from one instruction. Option B says precisely
which value is divided.

### 7.5 | mcq | 1 mark | difficulty 2
`IF mark >= 50 THEN PRINT "PASS" ELSE PRINT "FAIL" ENDIF` is an example of

- A. sequence
- B. selection
- C. repetition
- D. decomposition

**Answer:** B

**Working:** A condition decides which of two paths is taken, which is
selection.

### 7.5 | mcq | 1 mark | difficulty 3
Which statement about the three control structures is correct?

- A. Every algorithm needs all three
- B. Any algorithm can be built using only sequence, selection and repetition
- C. Repetition can always be replaced by selection
- D. Sequence is only used in flowcharts

**Answer:** B

**Working:** The three are sufficient for any algorithm, but not all three are
necessary in every one — an algorithm that simply reads two numbers and prints
their sum uses sequence alone.

### 7.5 | structured | 8 marks | difficulty 3
(a) Define the term **algorithm**. **(2 marks)**

(b) State **three** properties a good algorithm should have. **(3 marks)**

(c) Name the **three** control structures used to build algorithms.
**(3 marks)**

**Answer:** (a) 1 mark — a sequence of steps that solves a problem or performs
a task; 1 mark — the steps are finite, precise and unambiguous (any one of
these qualifiers).
(b) 1 mark each, any three: finite and terminates; precise; unambiguous;
ordered; effective; general; has input and produces output.
(c) 1 mark each: sequence; selection; repetition (accept iteration).

**Working:** (a) A bare "a set of steps" earns one mark at most. The second
mark comes from the qualifiers — finite, precise, unambiguous — which are what
separate an algorithm from an ordinary set of instructions.

(b) Do not repeat one property in two forms: "it must be finite" and "it must
terminate" count once.
