---
subject: IT
topic: computer-fundamentals
lesson: hardware-components
title: The Major Hardware Components
objectives: ["1.3"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 1.3 (explain the functions of the major hardware components of a computer system). NOT YET checked against textbook for depth."
---

## Lesson

**Hardware** is the physical parts of a computer — anything you could drop.
Every piece belongs to one of four groups, matching the IPOS cycle: **input**,
**processing**, **output** and **storage**.

### The processor

The **central processing unit (CPU)**, or processor, carries out the
instructions of a program. It is often called the brain of the computer,
though a better description is that it is the part that actually *does* things;
everything else supplies it or receives from it.

It has three parts:

**The control unit (CU)** directs everything. It fetches each instruction from
memory, decodes it to work out what is required, and sends signals telling the
other parts what to do. It controls; it does not calculate.

**The arithmetic and logic unit (ALU)** does the work: arithmetic (add,
subtract, multiply, divide) and logical comparisons (is this greater than that?
are they equal?). Every calculation a computer performs happens here.

**Registers** are very small, very fast storage locations inside the processor,
holding the instruction being executed and the values being worked on. They are
the fastest storage in the machine, and the smallest.

The division is examined: **the control unit directs, the ALU calculates, the
registers hold what is in use right now.**

**Processor speed** is measured in **hertz** — cycles per second — normally
gigahertz (GHz), thousands of millions of cycles per second. A processor may
also have several **cores**, each able to execute instructions, so a
quad-core processor can work on four things at once.

### Memory

**Memory** is where data and instructions are held while the computer is
working. It is also called **primary** or **main storage**, and it is not the
same thing as the hard disc.

**RAM — random access memory.** The working memory. Programs and data are
loaded into RAM while in use, because the processor can reach it far faster
than a disc. RAM is **volatile**: its contents vanish when the power goes off.
This is why unsaved work is lost in a power cut, and it is the single most
examined fact about RAM.

More RAM lets more programs run at once without the computer slowing down.

**ROM — read-only memory.** Holds instructions fixed when the computer was
made, chiefly the start-up instructions that run when it is switched on and
load the operating system. ROM is **non-volatile** — its contents survive
losing power — and it cannot normally be written to.

| | RAM | ROM |
|---|---|---|
| Stands for | Random access memory | Read-only memory |
| Holds | Programs and data in use | Fixed start-up instructions |
| Volatile | Yes — lost on power off | No — retained |
| Can be written to | Yes | Not normally |
| Size | Large (gigabytes) | Small |

**Cache** is a small amount of very fast memory between the processor and RAM,
holding recently used data so it does not have to be fetched again. The
hierarchy runs: registers (fastest, smallest), cache, RAM, then secondary
storage (slowest, largest).

### Storage

**Secondary storage** holds data **permanently** — when the power is off and
after the program has finished.

| Device | Notes |
|---|---|
| **Hard disc drive (HDD)** | Magnetic; large capacity, cheap, moving parts |
| **Solid state drive (SSD)** | Flash memory; much faster, no moving parts, costs more per gigabyte |
| **Optical disc** (CD, DVD, Blu-ray) | Read by laser; used for distribution, now declining |
| **Flash drive / memory card** | Small, portable, flash memory |
| **Magnetic tape** | Very large capacity, very cheap, slow; used for backups |
| **Cloud storage** | Held on remote servers, reached over the internet |

The distinction from memory matters: **memory is temporary and fast; storage is
permanent and slower.** RAM is measured in gigabytes and storage in hundreds of
gigabytes or terabytes.

### Input devices

An **input device** sends data *into* the computer: keyboard, mouse,
touchscreen, scanner, microphone, camera, barcode reader, sensor, joystick,
graphics tablet. They are the subject of a later lesson.

### Output devices

An **output device** presents results *from* the computer: monitor, printer,
speakers, projector, plotter. A **touchscreen** is both input and output at
once, as is a multifunction printer that also scans.

### The motherboard and what connects everything

The **motherboard** is the main circuit board. The processor, memory and
expansion cards plug into it, and it carries the connections between them.

**Buses** are the pathways carrying signals between components. There are three:

- the **data bus**, carrying the data itself;
- the **address bus**, carrying the location in memory being read or written;
- the **control bus**, carrying the control signals saying what to do.

**Ports** are the sockets on the outside where external devices connect: USB,
HDMI, Ethernet, audio.

**Expansion cards** add capability — a graphics card, a sound card, a network
card.

The **power supply unit (PSU)** converts mains electricity to the low voltages
the components use, and the **cooling system** — fans and heat sinks — removes
the heat the processor produces.

### The system unit

The **system unit** is the case holding the processor, memory, motherboard,
storage and power supply — in other words, everything except the peripherals.

A **peripheral** is any device attached to the system unit: keyboard, mouse,
monitor, printer. The word simply means "around the edge".

### The components in summary

| Component | Function |
|---|---|
| CPU | Executes the instructions of a program |
| Control unit | Fetches, decodes and directs |
| ALU | Performs arithmetic and logical operations |
| Registers | Hold the instruction and data in use |
| RAM | Temporary working memory; volatile |
| ROM | Permanent start-up instructions; non-volatile |
| Cache | Fast memory holding recently used data |
| Secondary storage | Holds data permanently |
| Input devices | Bring data in |
| Output devices | Present results |
| Motherboard | Connects everything |
| Buses | Carry data, addresses and control signals |
| Power supply | Provides the correct voltages |

## Flashcards

### 1.3 | What does the CPU do?
Carries out the instructions of a program — it is the part of the computer that
actually performs the work.

### 1.3 | Name the three parts of the CPU and what each does.
The **control unit** fetches, decodes and directs; the **ALU** performs
arithmetic and logical operations; the **registers** hold the instruction and
data currently in use.

### 1.3 | What is the function of the control unit?
It fetches each instruction from memory, decodes it, and sends signals telling
the other components what to do. It directs; it does not calculate.

### 1.3 | What is the function of the ALU?
Performs all arithmetic (add, subtract, multiply, divide) and all logical
comparisons.

### 1.3 | What are registers?
Very small, very fast storage locations inside the processor, holding the
instruction being executed and the values being worked on.

### 1.3 | What is RAM, and why is unsaved work lost in a power cut?
**Random access memory** — the working memory holding programs and data in use.
It is **volatile**, so its contents disappear when the power goes off.

> Hint: which word means "lost without power"?

### 1.3 | What does ROM hold, and is it volatile?
The fixed start-up instructions that run when the computer is switched on. It
is **non-volatile** — its contents survive losing power.

### 1.3 | State three differences between RAM and ROM.
RAM holds programs and data in use, ROM holds fixed start-up instructions; RAM
is volatile, ROM is not; RAM can be written to, ROM normally cannot; RAM is
much larger.

### 1.3 | What is cache memory?
A small amount of very fast memory between the processor and RAM, holding
recently used data so it need not be fetched again.

### 1.3 | State the storage hierarchy from fastest to slowest.
Registers, cache, RAM, then secondary storage.

### 1.3 | What is the difference between memory and storage?
**Memory** (RAM) is temporary and fast, holding what is in use. **Storage** is
permanent and slower, keeping data when the power is off.

### 1.3 | Name the three buses and what each carries.
The **data bus** carries the data; the **address bus** carries the memory
location; the **control bus** carries the control signals.

### 1.3 | What is the motherboard?
The main circuit board. The processor, memory and expansion cards plug into it
and it carries the connections between them.

### 1.3 | What is a peripheral?
Any device attached to the system unit — keyboard, mouse, monitor, printer.

### 1.3 | Name a device that is both an input and an output device.
A touchscreen. (A multifunction printer that also scans is another.)

### 1.3 | In what unit is processor speed measured, and what does a core do?
In **hertz**, normally gigahertz — cycles per second. Each **core** can execute
instructions, so a quad-core processor can work on four things at once.

## Questions

### 1.3 | mcq | 1 mark | difficulty 1
Which part of the CPU performs calculations and comparisons?

- A. The control unit
- B. The arithmetic and logic unit
- C. The registers
- D. Cache memory

**Answer:** B

**Working:** The ALU does all arithmetic and logic. The control unit directs
the other parts but performs no calculation itself.

### 1.3 | mcq | 1 mark | difficulty 2
A student loses an unsaved document when the power fails. This happens because
RAM is

- A. read-only
- B. volatile
- C. too small
- D. non-volatile

**Answer:** B

**Working:** Volatile memory loses its contents when power is removed. The work
existed only in RAM because it had not been written to secondary storage.

### 1.3 | mcq | 1 mark | difficulty 2
Which statement about ROM is correct?

- A. It holds the programs currently being used
- B. It loses its contents when the computer is switched off
- C. It holds the instructions that run when the computer starts up
- D. It is larger than RAM

**Answer:** C

**Working:** ROM holds fixed start-up instructions, is non-volatile, and is
much smaller than RAM. Option A describes RAM.

### 1.3 | mcq | 1 mark | difficulty 3
Which list places storage in order from **fastest** to **slowest**?

- A. RAM, registers, cache, hard disc
- B. Registers, cache, RAM, hard disc
- C. Hard disc, RAM, cache, registers
- D. Cache, registers, hard disc, RAM

**Answer:** B

**Working:** Speed falls and capacity rises as you move away from the
processor: registers inside it, then cache, then RAM, then secondary storage.

### 1.3 | mcq | 1 mark | difficulty 2
Which bus carries the location in memory that is to be read from or written to?

- A. Data bus
- B. Address bus
- C. Control bus
- D. Expansion bus

**Answer:** B

**Working:** The address bus carries the location, the data bus the contents
and the control bus the instructions about what to do.

### 1.3 | mcq | 1 mark | difficulty 3
Which device is **both** an input and an output device?

- A. A keyboard
- B. A monitor
- C. A touchscreen
- D. A scanner

**Answer:** C

**Working:** A touchscreen displays output and accepts input by touch. The
keyboard and scanner are input only; a monitor without touch is output only.

### 1.3 | structured | 10 marks | difficulty 3
(a) Name the **three** parts of the central processing unit and state the
function of each. **(6 marks)**

(b) State **two** differences between RAM and ROM. **(2 marks)**

(c) Explain why a computer needs both RAM and secondary storage. **(2 marks)**

**Answer:** (a) 2 marks each: the **control unit** — fetches instructions from
memory, decodes them and sends signals directing the other components; the
**arithmetic and logic unit** — performs arithmetic operations and logical
comparisons; the **registers** — small, very fast storage inside the processor
holding the instruction and data currently in use.
(b) 1 mark each, any two: RAM is volatile and ROM is not; RAM holds programs
and data in use while ROM holds fixed start-up instructions; RAM can be written
to and ROM normally cannot; RAM is much larger.
(c) 1 mark — RAM is fast, so the processor can reach the data it is working on
quickly, but it is volatile and loses everything when the power goes off;
1 mark — secondary storage keeps data permanently, but is too slow to work
directly from.

**Working:** (a) The name alone earns one mark; the second comes from the
function. Take care with the control unit — it directs, and saying it
"processes data" confuses it with the ALU.

(c) The answer is the trade-off between speed and permanence. Neither kind of
storage can do both jobs, which is why every computer has both.
