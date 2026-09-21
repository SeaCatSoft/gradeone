---
subject: IT
topic: program-implementation
lesson: low-and-high-level-languages
title: Low-Level and High-Level Languages
objectives: ["8.1"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 8.1 (distinguish between low-level and high-level programming languages). Includes translators, since the distinction is meaningless without them. NOT YET checked against textbook for depth."
---

## Lesson

A computer's processor understands one thing: **machine language** — patterns
of 0s and 1s. Every program ever written must end up in that form before it can
run.

The difference between programming languages is how far from those 0s and 1s
they let you work.

### Low-level languages

A **low-level language** is close to the hardware. It works in terms of the
machine's own instructions, registers and memory addresses, so a program
written in one is tied to the particular processor it was written for.

There are two.

**Machine language** — instructions written directly as binary. It is the only
language a processor executes without translation. Writing it by hand is
possible and nobody does it: a single mistyped bit is invisible and fatal.

**Assembly language** — machine language with the binary replaced by short
words called **mnemonics**:

```
LDA 200      load the value at address 200
ADD 201      add the value at address 201
STA 202      store the answer at address 202
```

Each mnemonic stands for exactly one machine instruction. Assembly is far
easier to read than binary but still requires you to think in the machine's
terms — that fragment does one addition.

### High-level languages

A **high-level language** is close to human language and to the problem, rather
than to the machine. Pascal, C, Java, Python, Visual Basic and COBOL are all
high-level.

The three machine instructions above become:

```
total = first + second;
```

One readable line. It says what is wanted and says nothing about registers or
addresses — the translator works those out.

Because a high-level program describes the problem rather than the machine, the
same source code can usually be translated for a different processor and run
there. This is called being **machine-independent** or **portable**, and it is
the main practical advantage.

### The comparison

| | Low-level | High-level |
|---|---|---|
| Close to | The hardware | Human language |
| Readability | Poor | Good |
| Machine-independent | No — tied to one processor | Yes |
| Speed of writing | Slow | Fast |
| Errors | Easy to make, hard to find | Fewer, easier to find |
| Control over hardware | Complete | Limited |
| Execution speed | Very fast, very compact | Slightly slower, larger |
| Translator needed | Assembler (none for machine code) | Compiler or interpreter |

### When a low-level language is still the right choice

High-level languages win on nearly every count, so why does assembly survive?

Because when you need **exact control of the hardware** or the **last ounce of
speed**, nothing else will do: device drivers, parts of operating systems, and
software for small embedded processors where memory is measured in kilobytes.
These are specialised jobs, and they are the exception.

### Translators

Since a processor runs only machine language, anything else must be
**translated**. Which translator is used is part of what distinguishes the
levels.

**Assembler** — translates assembly language into machine language. One
assembly instruction becomes one machine instruction.

**Compiler** — translates a whole high-level program into machine language in
one go, producing a separate executable file called the **object code**. The
original program is the **source code**. Translation happens once; the program
then runs without the compiler, and runs fast.

**Interpreter** — translates and executes a high-level program one statement at
a time, every time it runs. Nothing separate is produced, so the interpreter
must be present whenever the program is used.

### Compiler against interpreter

| | Compiler | Interpreter |
|---|---|---|
| Translates | The whole program at once | One statement at a time |
| Produces | An executable object code file | Nothing kept |
| Reports errors | All of them, after examining the program | The first one, then stops |
| Needed to run afterwards | No | Yes |
| Speed when running | Faster | Slower — translated again each run |
| Suits | Finished programs being distributed | Writing and testing, learning |

Neither is better in general. A compiler suits a finished program that will be
run many times; an interpreter suits development, because it reports the error
where you are and lets you fix and retry immediately.

### Generations of language

Languages are sometimes grouped into generations, which is a convenient way of
naming the same ladder:

| Generation | Name | Example |
|---|---|---|
| 1GL | Machine language | Binary instructions |
| 2GL | Assembly language | `LDA`, `ADD`, `STA` |
| 3GL | High-level, procedural | Pascal, C, Java |
| 4GL | Very high-level, problem-oriented | SQL, report generators |

1GL and 2GL are the low-level ones. A **4GL** is higher still than an ordinary
high-level language: you state *what* you want rather than *how* to get it —
`SELECT name FROM students WHERE mark > 50` never says how to search.

## Flashcards

### 8.1 | Distinguish between a low-level and a high-level language.
A **low-level** language is close to the hardware and tied to one processor. A
**high-level** language is close to human language and is machine-independent.

### 8.1 | Name the two low-level languages.
**Machine language** (binary) and **assembly language** (mnemonics).

### 8.1 | What is a mnemonic?
A short word standing for one machine instruction in assembly language, such
as `LDA`, `ADD` or `STA`.

### 8.1 | Which language does a processor execute without translation?
**Machine language** — binary. Everything else must be translated into it
first.

### 8.1 | State two advantages of a high-level language.
Any two: it is easier to read, write and correct; it is machine-independent, so
it runs on different processors; programs are written far more quickly; errors
are fewer and easier to find.

### 8.1 | Give one reason to still use a low-level language.
It gives complete control of the hardware and runs very fast in very little
memory — needed for device drivers, parts of operating systems, and small
embedded processors.

### 8.1 | What is source code, and what is object code?
**Source code** is the program as written by the programmer. **Object code** is
the machine-language version produced by the translator.

### 8.1 | What is the difference between a compiler and an interpreter?
A **compiler** translates the whole program at once and produces an executable
file. An **interpreter** translates and runs one statement at a time, every
time the program runs.

### 8.1 | Why is an interpreter useful while a program is being written?
It reports the first error as it reaches it, so a mistake can be corrected and
retried immediately.

### 8.1 | What does an assembler do?
Translates assembly language into machine language — one assembly instruction
becomes one machine instruction.

### 8.1 | What is a 4GL, and give an example.
A fourth-generation language, in which you state **what** you want rather than
how to get it. SQL is the usual example.

## Questions

### 8.1 | mcq | 1 mark | difficulty 1
Which of the following are high-level languages?

- A. Pascal and COBOL only
- B. Pascal and assembly only
- C. Assembly and machine language only
- D. Pascal, COBOL and assembly

**Answer:** A

**Working:** Pascal and COBOL are high-level. Assembly is low-level — it uses
mnemonics that correspond one-for-one with the processor's own instructions.

### 8.1 | mcq | 1 mark | difficulty 2
Which language can be executed by a computer without any translation?

- A. Assembly language
- B. Machine language
- C. Pascal
- D. SQL

**Answer:** B

**Working:** Machine language is the processor's own binary instruction set.
Assembly still needs an assembler, and the others need a compiler or
interpreter.

### 8.1 | mcq | 1 mark | difficulty 2
A program written in a high-level language can usually be translated and run on
different types of computer. This property is called

- A. portability
- B. compilation
- C. debugging
- D. modularity

**Answer:** A

**Working:** Portability, or machine-independence, follows from describing the
problem rather than one machine's registers and addresses.

### 8.1 | mcq | 1 mark | difficulty 3
Which statement about a compiler is correct?

- A. It translates and executes one statement at a time
- B. It must be present every time the program is run
- C. It translates the whole program and produces an object code file
- D. It converts machine language into a high-level language

**Answer:** C

**Working:** Options A and B describe an interpreter. Because the compiler
produces a separate executable, it is not needed once translation is done.

### 8.1 | mcq | 1 mark | difficulty 3
For which task would a low-level language be **most** appropriate?

- A. Writing a payroll system for a large company
- B. Writing a device driver that must control hardware directly
- C. Writing a database query
- D. Writing a school website

**Answer:** B

**Working:** Exact control of the hardware is the one thing a low-level
language does better. The others are all served far more efficiently by
high-level languages or a 4GL.

### 8.1 | structured | 9 marks | difficulty 3
(a) Distinguish between a **low-level** and a **high-level** programming
language. **(2 marks)**

(b) State **two** advantages of writing a program in a high-level language
rather than assembly language. **(2 marks)**

(c) Name the translator used for each of the following:

(i) assembly language **(1 mark)**

(ii) a high-level program translated all at once **(1 mark)**

(d) State **two** differences between a compiler and an interpreter.
**(2 marks)**

(e) Explain why a programmer who is still testing a program might prefer an
interpreter. **(1 mark)**

**Answer:** (a) 1 mark — a low-level language is close to the hardware, using
the machine's own instructions, and is tied to one type of processor; 1 mark —
a high-level language is close to human language and is machine-independent.
(b) Any two, 1 mark each: easier to read, write and correct; machine
independent/portable; faster to write; fewer errors and easier to find them;
does not require knowledge of the processor.
(c)(i) An assembler. (ii) A compiler.
(d) Any two, 1 mark each: a compiler translates the whole program at once, an
interpreter one statement at a time; a compiler produces an object code file,
an interpreter produces nothing kept; a compiler reports all errors after
examining the program, an interpreter stops at the first; a compiled program
runs without the translator present, an interpreted one does not; compiled
programs run faster.
(e) It reports the first error as it reaches that statement, so the mistake can
be corrected and the program retried immediately — 1 mark.

**Working:** (a) The two marks are for the two halves of the contrast. An
answer describing only one side scores one.

(d) Each difference must name what both do, not just one of them. "A compiler
is faster" is not a difference until it says faster than what, and at what.
