---
subject: IT
topic: computer-fundamentals
lesson: how-components-interrelate
title: How the Components Work Together
objectives: ["1.4"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 1.4 (explain how the major hardware components of a computer system interrelate). Covers the IPOS cycle and the fetch-execute cycle. NOT YET checked against textbook for depth."
---

## Lesson

Knowing what each component does is one objective. Knowing how they work
together is another, and it is the one that explains why a computer is built
the way it is.

### The IPOS cycle

Every computer system does four things, in this order:

**Input** → **Processing** → **Output**, with **Storage** available throughout.

<svg viewBox="0 0 320 215" role="img" aria-label="A block diagram of a computer system. An input box feeds into the CPU, which contains the control unit and the ALU, and the CPU feeds an output box. Memory sits above the CPU and secondary storage below it, each connected to the CPU by arrows pointing both ways.">
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="8" y="95" width="64" height="30" rx="4"/>
    <rect x="248" y="95" width="64" height="30" rx="4"/>
    <rect x="116" y="80" width="88" height="62" rx="4"/>
    <rect x="122" y="99" width="76" height="17" rx="3"/>
    <rect x="122" y="120" width="76" height="17" rx="3"/>
    <rect x="118" y="18" width="84" height="28" rx="4"/>
    <rect x="118" y="175" width="84" height="28" rx="4"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <line x1="72" y1="110" x2="109" y2="110"/>
    <line x1="204" y1="110" x2="241" y2="110"/>
    <line x1="160" y1="53" x2="160" y2="73"/>
    <line x1="160" y1="149" x2="160" y2="168"/>
  </g>
  <g fill="currentColor">
    <polygon points="109,106 109,114 116,110"/>
    <polygon points="241,106 241,114 248,110"/>
    <polygon points="156,53 164,53 160,46"/>
    <polygon points="156,73 164,73 160,80"/>
    <polygon points="156,149 164,149 160,142"/>
    <polygon points="156,168 164,168 160,175"/>
  </g>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="40" y="114">Input</text>
    <text x="280" y="114">Output</text>
    <text x="160" y="36">Memory (RAM)</text>
    <text x="160" y="193">Storage</text>
    <text x="160" y="94" font-weight="bold">CPU</text>
    <text x="160" y="112">Control Unit</text>
    <text x="160" y="133">ALU</text>
  </g>
</svg>

Read the diagram as a sentence: data comes in through an **input** device, is
held in **memory**, is worked on by the **CPU**, and the result leaves through
an **output** device or is kept in **storage**.

Notice which arrows point both ways. Input and output are one-directional —
data comes in, results go out. Memory and storage arrows point **both** ways,
because the processor both reads from them and writes to them.

### A worked example

A student uses a calculator program to add 25 and 17.

1. **Input.** The keyboard sends the keystrokes to the computer.
2. **Storage to memory.** The program itself was on the hard disc; it was
   loaded into RAM when it was started, because the processor cannot work
   directly from the disc.
3. **Memory.** The numbers 25 and 17 are held in RAM.
4. **Processing.** The control unit fetches the add instruction and decodes it;
   the ALU adds the two numbers; the answer 42 is held in a register and
   written back to memory.
5. **Output.** The answer is sent to the monitor.
6. **Storage.** If the student saves the work, it is written from RAM to the
   hard disc, where it survives the power being switched off.

Every component appears, each doing its own job, and the order is forced by
what each one can do.

### Why memory sits between storage and the processor

This is the part of the objective worth understanding rather than memorising.

The processor is extremely fast and secondary storage is extremely slow by
comparison — a processor could perform millions of operations in the time a
hard disc takes to find one piece of data. If the CPU worked directly from the
disc it would spend almost all its time waiting.

So a program is **loaded from storage into RAM** before it runs, and the
processor works from RAM. Cache sits closer still, holding what has been used
most recently, and registers are inside the processor itself.

The whole hierarchy exists for one reason: to keep fast components supplied by
slow ones without the fast components idling.

| Level | Speed | Size | Volatile |
|---|---|---|---|
| Registers | Fastest | Bytes | Yes |
| Cache | Very fast | Megabytes | Yes |
| RAM | Fast | Gigabytes | Yes |
| Secondary storage | Slow | Terabytes | No |

Speed falls and capacity rises as you move down. That is not a coincidence:
fast storage is expensive, so a computer has a little of the fast kind and a
lot of the slow kind.

### The fetch-execute cycle

Within processing, the CPU repeats one cycle for every instruction, millions of
times a second:

1. **Fetch.** The control unit fetches the next instruction from memory, using
   the address bus to say which location and the data bus to carry it back.
2. **Decode.** The control unit works out what the instruction requires.
3. **Execute.** The required operation is carried out — usually by the ALU —
   and the result is stored in a register or written back to memory.

Then the cycle begins again with the next instruction. This is sometimes
written as the **fetch-decode-execute** cycle, and it is how a stored program
actually runs.

### How the buses tie it together

The components are joined by three buses, and each carries a different thing:

- The **address bus** carries the memory location the processor wants.
- The **data bus** carries the contents to or from that location.
- The **control bus** carries the signals saying what to do — read or write,
  and when.

To read a value from memory, the processor puts the location on the address
bus, sends a "read" signal on the control bus, and receives the value back on
the data bus. All three are needed for one operation, which is why all three
exist.

### The interrelationships in one place

| Relationship | Why |
|---|---|
| Input → memory | Data must be in memory before the CPU can work on it |
| Storage → memory | Programs are loaded into RAM to run, because the disc is too slow |
| Memory ↔ CPU | The CPU fetches instructions and data, and writes results back |
| Control unit → all parts | It directs, using the control bus |
| ALU ↔ registers | Values are held in registers while the ALU works on them |
| CPU → output | Results are sent to the monitor or printer |
| Memory → storage | Data is written to disc so it survives power off |

### A useful way to answer this objective

Questions usually ask you to trace what happens to some data. Answer in the
order of the cycle, and name a component at every step:

*What happens when a document is opened, edited and saved?*

Opening: the file is read from **secondary storage** into **RAM**. Editing: the
**keyboard** (input) sends changes; the **CPU** processes them; the **monitor**
(output) shows the result; the current version lives in **RAM**. Saving: the
contents of **RAM** are written back to **secondary storage**, where they
survive the power being switched off.

That structure — storage to memory, input, processing, output, memory back to
storage — answers almost any question on this objective.

## Flashcards

### 1.4 | What does the IPOS cycle stand for?
**Input, Processing, Output, Storage** — the four things every computer system
does.

### 1.4 | In a system diagram, which connections point both ways and why?
Those between the CPU and **memory**, and between the CPU and **storage** — the
processor both reads from them and writes to them. Input and output are
one-directional.

### 1.4 | Why is a program loaded from the hard disc into RAM before it runs?
The processor is far faster than secondary storage. Working directly from the
disc would leave the CPU waiting almost all the time.

### 1.4 | Name the three steps of the fetch-execute cycle.
**Fetch** the next instruction from memory; **decode** it to work out what is
required; **execute** it, usually in the ALU, storing the result.

### 1.4 | Which component performs the fetch and decode steps?
The **control unit**.

### 1.4 | Describe how the three buses cooperate to read a value from memory.
The processor puts the location on the **address bus**, sends a read signal on
the **control bus**, and the value comes back on the **data bus**.

### 1.4 | State the storage hierarchy and what happens to speed and size down it.
Registers, cache, RAM, secondary storage. Speed falls and capacity rises as you
go down.

### 1.4 | Why does a computer have a little fast storage and a lot of slow storage?
Fast storage is expensive. The hierarchy keeps the fast components supplied
without the cost of making everything fast.

### 1.4 | Trace what happens when a saved document is opened and edited.
It is read from secondary storage into RAM; the keyboard sends changes as
input; the CPU processes them; the monitor displays the result; the current
version is held in RAM until it is saved back to storage.

### 1.4 | Why does saving a file involve both RAM and secondary storage?
The work exists in volatile RAM while being edited. Saving writes it to
secondary storage, where it survives the power being switched off.

## Questions

### 1.4 | mcq | 1 mark | difficulty 1
What do the letters IPOS stand for?

- A. Input, Program, Output, Save
- B. Input, Processing, Output, Storage
- C. Internal, Processing, Output, System
- D. Input, Print, Output, Storage

**Answer:** B

**Working:** Input, Processing, Output, Storage — the four functions of a
computer system.

### 1.4 | mcq | 1 mark | difficulty 2
Why is a program copied from the hard disc into RAM before it is run?

- A. The hard disc cannot hold programs
- B. RAM is much faster, so the processor is not kept waiting
- C. RAM is non-volatile
- D. The program is too large for the hard disc

**Answer:** B

**Working:** The processor can reach RAM far faster than a disc. RAM is in fact
volatile, which is why the program stays on the disc as well.

### 1.4 | mcq | 1 mark | difficulty 2
Which component fetches an instruction from memory and decodes it?

- A. The ALU
- B. The control unit
- C. Cache memory
- D. The data bus

**Answer:** B

**Working:** Fetching and decoding are the control unit's work. The ALU
executes the arithmetic and logic once it has been told what to do.

### 1.4 | mcq | 1 mark | difficulty 3
In a system diagram, the arrows between the CPU and memory point in both
directions because

- A. memory is volatile
- B. the CPU both reads from memory and writes results back to it
- C. memory is faster than the CPU
- D. the data bus is bidirectional only in memory

**Answer:** B

**Working:** Data flows both ways: instructions and values are fetched, and
results are written back. Input and output arrows point one way only.

### 1.4 | mcq | 1 mark | difficulty 3
To read a value from memory, the processor places the memory location on the

- A. data bus
- B. address bus
- C. control bus
- D. expansion bus

**Answer:** B

**Working:** The address bus carries the location, the control bus the read
signal, and the data bus brings the value back.

### 1.4 | structured | 10 marks | difficulty 3
A student opens a saved essay, adds a paragraph, prints it, and saves it again.

(a) Name the component involved at each of the following stages, and state what
it does:

(i) the essay is read from the disc so that it can be edited **(2 marks)**

(ii) the student types the new paragraph **(2 marks)**

(iii) the essay is printed **(2 marks)**

(b) Explain why the essay must be saved before the computer is switched off.
**(2 marks)**

(c) State the **three** steps of the fetch-execute cycle. **(2 marks)**

**Answer:** (a)(i) 1 mark — it is copied from secondary storage into RAM;
1 mark — because the processor works far faster than the disc and must have the
data in memory to work on it.
(ii) 1 mark — the keyboard, an input device; 1 mark — it sends the characters
into the computer, where they are held in RAM and processed by the CPU.
(iii) 1 mark — the printer, an output device; 1 mark — it presents the
processed information in a permanent, readable form.
(b) 1 mark — the edited version is held in RAM, which is volatile; 1 mark —
switching off loses it unless it has been written to secondary storage, which
is non-volatile.
(c) 2 marks: fetch the instruction from memory; decode it; execute it. (1 mark
if only two are correct or the order is wrong.)

**Working:** (a) Each part wants a component *and* a reason. Naming the
keyboard is half the answer; saying what happens to the keystrokes is the rest.

(b) The words to use are **volatile** and **non-volatile**. This single
distinction is what makes both RAM and secondary storage necessary.
