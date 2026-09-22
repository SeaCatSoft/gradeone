---
subject: IT
topic: program-implementation
lesson: declaring-variables
title: Declaring Variables and Constants
objectives: ["8.4"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 8.4 (declare variables and constants using elementary data types). Pascal is used for illustration only; the syllabus states that no particular language is assumed and that knowledge of a specific language is not tested. NOT YET checked against textbook for depth."
---

## Lesson

Before a program can use a variable, it usually has to **declare** it: state
its name and what kind of data it will hold.

### A word about the language used here

The syllabus assumes **no particular programming language**, and the
examination does not test knowledge of one. Your school will have chosen a
language — commonly Pascal, but Visual Basic, C or Python are all used.

The examples here are in **Pascal**, because it spells the ideas out plainly
and is the traditional choice. What you must carry away is the *idea* — name,
type, fixed or changeable — not Pascal's punctuation. Where an examination asks
for code, the logic earns the marks.

### The elementary data types

| Type | Holds | Example value |
|---|---|---|
| `integer` | Whole numbers, positive or negative | `30`, `-7` |
| `real` | Numbers with a decimal part | `67.25` |
| `char` | A single character | `'A'` |
| `string` | Text of any length | `'Ayesha'` |
| `boolean` | Only `true` or `false` | `true` |

These five are the elementary (or primitive) types, and every value in an
elementary program is one of them.

### Choosing the type

Ask what values the variable will actually hold.

**A count of things is an integer.** Thirty students, four subjects, twelve
months. There is no such thing as 30.5 students.

**A measurement or an average is real.** An average mark, a price, a distance.
Dividing rarely comes out whole, and storing 67.25 as an integer throws the
fraction away without warning.

**A single letter is a char; text is a string.** A grade of `A` is a char; a
name is a string. A string of one character is not the same type as a char,
though it looks identical on screen.

**A yes/no fact is a boolean.** Whether a student passed, whether a file was
found. Storing that as the string `'yes'` works, but a boolean can be tested
directly and cannot be spelt wrongly.

Two traps worth naming:

**Numbers that are not quantities are strings.** A telephone number, an ID
like `007`, a bank account number. You never do arithmetic on them, and storing
them as numbers loses leading zeros.

**Money needs care.** It has a decimal part, so `real` is the usual choice.

### Declaring variables in Pascal

Declarations go in a `var` section before the program's instructions:

```pascal
var
    name    : string;
    mark1   : integer;
    mark2   : integer;
    average : real;
    passed  : boolean;
```

Variables of the same type can share a line:

```pascal
var
    mark1, mark2, mark3 : integer;
```

The pattern is the same in every language, even where the punctuation differs:
**a name and a type**.

### Declaring constants

A constant is declared with its value, in a `const` section, and cannot be
changed while the program runs:

```pascal
const
    PassMark = 50;
    Pi       = 3.14159;
    TaxRate  = 0.15;
```

Note the difference in shape. A variable declaration gives a name and a
**type**; a constant declaration gives a name and a **value**. The type is
worked out from the value.

Any attempt to assign to a constant while the program runs is an error the
compiler reports — which is the point. A value that must not change is
protected rather than merely trusted.

A full declaration section:

```pascal
program StudentReport;

const
    PassMark = 50;

var
    name    : string;
    mark    : integer;
    average : real;
    passed  : boolean;

begin
    ...
end.
```

### Why declare at all?

**It reserves the storage.** The computer needs to know how much room to set
aside, and that depends on the type.

**It catches mistakes.** A variable declared as `integer` cannot be assigned
`'Ayesha'`; the compiler objects. Without declarations that error would go
unnoticed until the program produced nonsense.

**It catches typing slips.** Write `avrage` instead of `average` and the
compiler reports an undeclared identifier. In languages that do not require
declaration, that typo silently creates a second, empty variable — one of the
nastiest bugs there is.

**It documents the program.** The declaration section is a list of everything
the program works with, and is the first thing a reader looks at.

### Naming

The rules in most languages: start with a letter, use letters, digits and
underscores, no spaces, and not a word the language reserves (`begin`, `end`,
`if`, `while`).

Beyond the rules, choose names that say what the value is. `totalMarks`,
`studentName` and `numberOfStudents` need no explanation; `t`, `s` and `n` need
a comment to rescue them. Writing constants in capitals — `PASSMARK` — is a
common convention that shows at a glance which values cannot change.

### Initialising

Declaring a variable does not give it a value. A variable that is read before
anything has been assigned to it holds whatever happened to be in that memory,
so running totals and counters are set to zero before use:

```pascal
total := 0;
count := 0;
```

Pascal writes assignment as `:=` and reserves plain `=` for comparison — a
distinction some other languages make differently, and a classic source of
syntax errors when moving between them.

## Flashcards

### 8.4 | What does it mean to declare a variable?
To state its name and the type of data it will hold, before the program uses
it.

### 8.4 | Name the five elementary data types.
`integer`, `real`, `char`, `string` and `boolean`.

### 8.4 | What is the difference between a variable declaration and a constant declaration?
A variable declaration gives a name and a **type**. A constant declaration
gives a name and a **value**, and the value cannot change while the program
runs.

### 8.4 | Which type suits a student's average mark, and why?
`real` — an average usually has a decimal part, and an integer would silently
discard it.

### 8.4 | Which type suits the number of students in a class, and why?
`integer` — a count is always a whole number.

### 8.4 | Why is a telephone number stored as a string, not a number?
No arithmetic is done on it, and storing it as a number would drop a leading
zero.

### 8.4 | What can a boolean variable hold?
Only `true` or `false`.

### 8.4 | Give three reasons for declaring variables.
Any three: it reserves the right amount of storage; the compiler can reject
values of the wrong type; a misspelt variable name is reported instead of
silently creating a new one; it documents what the program works with.

### 8.4 | Declare, in Pascal, an integer called `mark` and a real called `average`.
```pascal
var
    mark    : integer;
    average : real;
```

### 8.4 | Declare, in Pascal, a constant `PassMark` with the value 50.
```pascal
const
    PassMark = 50;
```

### 8.4 | Does declaring a variable give it a value?
No. It only reserves storage. A variable read before anything is assigned holds
whatever happened to be in that memory, so totals and counters must be set to
zero first.

### 8.4 | Does the examination test knowledge of a particular programming language?
No. The syllabus assumes no particular language — the logic of the declarations
and statements is what is assessed.

## Questions

### 8.4 | mcq | 1 mark | difficulty 1
Which data type is most suitable for storing the number of students in a class?

- A. Real
- B. Integer
- C. Char
- D. Boolean

**Answer:** B

**Working:** A count of students is always a whole number, which is what an
integer holds.

### 8.4 | mcq | 1 mark | difficulty 2
Which data type is most suitable for storing whether a student has paid their
fees?

- A. String
- B. Integer
- C. Boolean
- D. Char

**Answer:** C

**Working:** The answer is yes or no, which is exactly what a boolean holds. A
string such as `'yes'` would work but can be misspelt and cannot be tested as
directly.

### 8.4 | mcq | 1 mark | difficulty 2
A program must store a customer's telephone number, `0181234567`. The most
suitable data type is

- A. integer
- B. real
- C. string
- D. boolean

**Answer:** C

**Working:** No arithmetic is ever done on a telephone number, and storing it
as a number would drop the leading zero, turning it into `181234567`.

### 8.4 | mcq | 1 mark | difficulty 3
Which statement about a constant declaration is correct?

- A. It states the name and the type, and the value is assigned later
- B. It states the name and the value, which cannot change while the program runs
- C. It must be placed after the program's instructions
- D. It reserves no storage

**Answer:** B

**Working:** A constant is given its value in the declaration, and the compiler
rejects any later attempt to assign to it. Option A describes a variable
declaration.

### 8.4 | mcq | 1 mark | difficulty 3
A programmer declares `average` but later types `avrage` by mistake. In a
language that requires declarations, what happens?

- A. The program runs and prints zero
- B. The compiler reports an undeclared identifier
- C. A second variable is created automatically
- D. The two names are treated as the same variable

**Answer:** B

**Working:** The compiler has never seen `avrage` declared, so it reports the
error and the typo is corrected at once. Option C is what happens in languages
that do not require declaration, and it is a far harder bug to find.

### 8.4 | structured | 9 marks | difficulty 3
A program calculates a worker's weekly pay. It reads the worker's name, the
number of hours worked and the hourly rate, then calculates and prints the pay.
Overtime is paid at 1.5 times the normal rate for hours above 40.

(a) State the most suitable data type for each of the following, with a reason:

(i) the worker's name **(2 marks)**

(ii) the number of hours worked **(2 marks)**

(iii) the hourly rate **(2 marks)**

(b) Name **two** values in this problem that should be declared as constants.
**(2 marks)**

(c) State **one** advantage of declaring variables before using them.
**(1 mark)**

**Answer:** (a)(i) 1 mark — string; 1 mark — it is text of more than one
character.
(ii) 1 mark — integer (accept real with a valid reason, such as half-hours
being recorded); 1 mark — hours worked are counted in whole numbers.
(iii) 1 mark — real; 1 mark — a rate of pay has a decimal part, and an integer
would discard the cents.
(b) 1 mark each: the overtime threshold of 40 hours; the overtime multiplier
of 1.5.
(c) Any one, 1 mark: it reserves the correct amount of storage; the compiler
rejects values of the wrong type; a misspelt name is reported rather than
silently creating a new variable; it documents what the program uses.

**Working:** (a) Each part needs both the type and a reason. Reasons tied to
the value's nature — "a count is a whole number", "money has cents" — score;
"because it is a number" does not distinguish integer from real and so does
not.

(b) Both figures are fixed rules of the payroll, the same for every worker, so
they belong in the `const` section. The hours and rate differ per worker and
must be variables.
