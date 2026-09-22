---
subject: IT
topic: problem-solving-design
lesson: flowcharts
title: Drawing Flowcharts
objectives: ["7.6"]
est_minutes: 24
status: draft
source: "Original prose written against syllabus objective 7.6 (represent algorithms in the form of flowchart and pseudocode), covering flowcharts. Pseudocode is the previous lesson. NOT YET checked against textbook for depth."
---

## Lesson

A **flowchart** is an algorithm drawn as a diagram. The steps go in boxes, the
shape of the box says what kind of step it is, and arrows show the order.

It carries exactly the same information as pseudocode. What it adds is that the
*shape* of the logic becomes visible — you can see a loop as a loop, and a
choice as a fork.

### The symbols

Each shape has one meaning, and using the wrong one loses marks even when the
logic is right.

<svg viewBox="0 0 300 250" role="img" aria-label="The five flowchart symbols: a rounded oval for terminal, a parallelogram for input and output, a rectangle for a process, a diamond for a decision, and an arrow for a flow line.">
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="20" y="12" width="90" height="28" rx="14"/>
    <polygon points="28,60 118,60 110,88 20,88"/>
    <rect x="20" y="106" width="90" height="28"/>
    <polygon points="65,150 115,172 65,194 15,172"/>
    <line x1="20" y1="220" x2="100" y2="220"/>
  </g>
  <polygon points="100,216 100,224 110,220" fill="currentColor"/>
  <g font-size="10" fill="currentColor">
    <text x="130" y="30">Terminal — START, STOP</text>
    <text x="130" y="78">Input / Output</text>
    <text x="130" y="124">Process</text>
    <text x="130" y="176">Decision</text>
    <text x="130" y="224">Flow line</text>
  </g>
</svg>

**Terminal** (oval) — where the algorithm starts and stops. Every flowchart has
exactly one START and at least one STOP.

**Input/Output** (parallelogram) — reading a value in or printing one out. The
same shape does both, so `READ mark` and `PRINT average` look alike.

**Process** (rectangle) — a calculation or an assignment: `total = total +
mark`, `area = length * width`.

**Decision** (diamond) — a question with exactly two answers. The diamond has
one arrow going in and **two** coming out, labelled `Yes` and `No` (or `True`
and `False`).

**Flow line** (arrow) — the order. Arrows always carry a head, because a line
without one does not say which way the algorithm goes.

Two more you may meet: a small circle used as a **connector**, joining parts of
a chart that will not fit on one page, and a rectangle with doubled sides for a
**subprogram** — a task defined elsewhere.

### The rule that decides the shape

Ask what the step *does*:

| The step | Shape |
|---|---|
| Starts or ends the algorithm | Oval |
| Brings a value in, or sends one out | Parallelogram |
| Works something out | Rectangle |
| Asks a question with a yes/no answer | Diamond |

The mistake to avoid is putting a calculation in a parallelogram because it
involves numbers, or a decision in a rectangle because it is written as a
sentence. `total = total + mark` calculates, so it is a rectangle;
`mark >= 50?` asks, so it is a diamond.

### A complete flowchart

Reading a mark and printing whether it is a pass:

<svg viewBox="0 0 320 300" role="img" aria-label="A flowchart beginning at START, reading a mark, then a decision asking whether mark is greater than or equal to 50. The Yes branch prints PASS and the No branch prints FAIL; both then join and lead to STOP.">
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="60" y="8" width="80" height="26" rx="13"/>
    <polygon points="68,54 152,54 144,80 60,80"/>
    <polygon points="100,100 158,130 100,160 42,130"/>
    <polygon points="68,182 152,182 144,208 60,208"/>
    <polygon points="218,182 302,182 294,208 210,208"/>
    <rect x="138" y="254" width="80" height="26" rx="13"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <line x1="100" y1="34" x2="100" y2="51"/>
    <line x1="100" y1="80" x2="100" y2="97"/>
    <line x1="100" y1="160" x2="100" y2="179"/>
    <path d="M158 130 H250 V179"/>
    <path d="M100 208 V235 H256 V208"/>
    <line x1="178" y1="235" x2="178" y2="251"/>
  </g>
  <g fill="currentColor">
    <polygon points="96,45 104,45 100,52"/>
    <polygon points="96,91 104,91 100,98"/>
    <polygon points="96,173 104,173 100,180"/>
    <polygon points="246,173 254,173 250,180"/>
    <polygon points="174,245 182,245 178,252"/>
  </g>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="100" y="26">START</text>
    <text x="100" y="72">READ mark</text>
    <text x="100" y="134">mark &gt;= 50?</text>
    <text x="100" y="200">PRINT "PASS"</text>
    <text x="256" y="200">PRINT "FAIL"</text>
    <text x="178" y="272">STOP</text>
  </g>
  <g font-size="9" fill="currentColor">
    <text x="106" y="174">Yes</text>
    <text x="196" y="125">No</text>
  </g>
</svg>

Follow it from the top. One arrow enters the diamond and two leave it, each
labelled. The two branches do different things and then **join** again before
the single STOP.

### Drawing a loop

A loop is drawn as an arrow going **backwards** — up the page — to a step
already visited. This is where a flowchart earns its keep, because the
repetition is visible as a closed circuit.

<svg viewBox="0 0 320 320" role="img" aria-label="A flowchart with a loop: START, set total to 0 and count to 0, then a decision asking whether count is less than 30. The Yes branch reads a mark, then adds it to the total and adds one to count, and loops back to the decision. The No branch prints the average, then stops.">
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="96" y="6" width="76" height="24" rx="12"/>
    <rect x="80" y="48" width="108" height="26"/>
    <polygon points="134,92 196,120 134,148 72,120"/>
    <polygon points="98,170 190,170 182,194 90,194"/>
    <rect x="80" y="212" width="108" height="40"/>
    <rect x="216" y="170" width="94" height="26"/>
    <rect x="228" y="262" width="76" height="24" rx="12"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <line x1="134" y1="30" x2="134" y2="45"/>
    <line x1="134" y1="74" x2="134" y2="89"/>
    <line x1="134" y1="148" x2="134" y2="167"/>
    <line x1="134" y1="194" x2="134" y2="209"/>
    <path d="M80 232 H30 V120 H69"/>
    <path d="M196 120 H263 V167"/>
    <line x1="263" y1="196" x2="263" y2="259"/>
  </g>
  <g fill="currentColor">
    <polygon points="130,39 138,39 134,46"/>
    <polygon points="130,83 138,83 134,90"/>
    <polygon points="130,161 138,161 134,168"/>
    <polygon points="130,203 138,203 134,210"/>
    <polygon points="63,116 63,124 70,120"/>
    <polygon points="259,161 267,161 263,168"/>
    <polygon points="259,253 267,253 263,260"/>
  </g>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="134" y="23">START</text>
    <text x="134" y="65">total = 0, count = 0</text>
    <text x="134" y="124">count &lt; 30?</text>
    <text x="144" y="186">READ mark</text>
    <text x="134" y="228">total = total + mark</text>
    <text x="134" y="243">count = count + 1</text>
    <text x="263" y="187">PRINT total / 30</text>
    <text x="266" y="279">STOP</text>
  </g>
  <g font-size="9" fill="currentColor">
    <text x="140" y="162">Yes</text>
    <text x="222" y="115">No</text>
  </g>
</svg>

The backward arrow on the left returns to the decision, which is tested again.
When `count` reaches 30 the `No` branch is taken and the loop ends.

For this to terminate, something inside the loop must change the value the
decision tests. That is what `count = count + 1` is for. Leave it out and the
answer to the question never changes: the loop runs for ever, and every
calculation inside it can be perfectly correct while the algorithm is useless.

### Flowchart or pseudocode?

| | Flowchart | Pseudocode |
|---|---|---|
| Form | Diagram | Structured English |
| Strength | Logic is visible at a glance | Quick to write and edit |
| Long algorithms | Sprawls across pages | Stays compact |
| Closeness to code | Must be translated | Already reads like code |

Flowcharts suit short algorithms and explaining logic to someone else.
Pseudocode suits long ones and is faster to correct — changing one line beats
redrawing a page. Both are accepted representations of an algorithm, and an
examination may ask for either.

### Common errors

- A decision box with only one arrow leaving it, or with unlabelled branches.
- Flow lines drawn without arrowheads, so the order is guesswork.
- A calculation drawn in a parallelogram, or input drawn in a rectangle.
- More than one START.
- A loop with no way out — nothing inside it changes what the decision tests.

## Flashcards

### 7.6 | Which flowchart symbol marks the start and end of an algorithm?
The **terminal** symbol — an oval — containing START or STOP.

### 7.6 | Which flowchart symbol is used for input and output?
The **parallelogram**. The same shape is used for both reading in and printing
out.

### 7.6 | Which flowchart symbol is used for a calculation?
The **rectangle** — the process symbol. For example `total = total + mark`.

### 7.6 | Which flowchart symbol asks a question, and how many arrows leave it?
The **diamond** (decision). One arrow enters and **two** leave, labelled Yes
and No.

### 7.6 | How is repetition shown on a flowchart?
By an arrow leading **backwards** to a step already carried out, forming a
closed loop.

### 7.6 | What must be true inside a flowchart loop for it to terminate?
Something in the loop must change the value the decision tests — such as
increasing a counter. Otherwise the answer never changes and the loop runs for
ever.

### 7.6 | Why must every flow line carry an arrowhead?
A line without one does not say which way the algorithm goes, so the order of
the steps is guesswork.

### 7.6 | State one advantage of a flowchart over pseudocode.
The logic is visible at a glance — loops and branches can be seen as shapes.
(Pseudocode's advantage is being quicker to write and edit.)

### 7.6 | Which shape holds `mark >= 50?` and which holds `total = total + mark`?
`mark >= 50?` asks a question, so a **diamond**. `total = total + mark`
calculates, so a **rectangle**.

### 7.6 | What is a connector symbol used for?
A small circle joining parts of a flowchart that will not fit on one page.

## Questions

### 7.6 | mcq | 1 mark | difficulty 1
Which flowchart symbol represents a decision?

- A. Oval
- B. Rectangle
- C. Diamond
- D. Parallelogram

**Answer:** C

**Working:** The diamond holds a question with two possible answers. The oval
is a terminal, the rectangle a process, the parallelogram input or output.

### 7.6 | mcq | 1 mark | difficulty 2
In a flowchart, `PRINT average` would be drawn in

- A. a rectangle
- B. a parallelogram
- C. a diamond
- D. an oval

**Answer:** B

**Working:** Printing is output, and input and output share the parallelogram.
A rectangle would be right for working the average out, but not for printing
it.

### 7.6 | mcq | 1 mark | difficulty 2
How many flow lines leave a decision symbol?

- A. One
- B. Two
- C. Three
- D. As many as needed

**Answer:** B

**Working:** A decision has exactly two outcomes, Yes and No, so two arrows
leave it — and both should be labelled.

### 7.6 | mcq | 1 mark | difficulty 3
A flowchart contains a loop that never ends. The most likely cause is that

- A. the decision symbol has two exits
- B. nothing inside the loop changes the value the decision tests
- C. the flow lines have arrowheads
- D. there is only one STOP symbol

**Answer:** B

**Working:** If the tested value never changes, the answer to the question
never changes, so the same branch is taken for ever. A counter that is never
increased is the usual culprit.

### 7.6 | mcq | 1 mark | difficulty 3
Which is an advantage of pseudocode over a flowchart?

- A. It shows the shape of the logic more clearly
- B. It is easier to correct and stays compact for long algorithms
- C. It can be run directly by a computer
- D. It does not need the algorithm to be tested

**Answer:** B

**Working:** Editing a line of pseudocode beats redrawing a page of diagram,
and a long flowchart sprawls. Option A is the flowchart's advantage, and no
pseudocode is run by a computer — that is what makes it pseudocode.

### 7.6 | structured | 9 marks | difficulty 3
A shop's algorithm reads the amount of a purchase. If the amount is over
\$5000, a discount of 10% is given; otherwise no discount is given. The
algorithm prints the amount payable.

(a) Name the flowchart symbol used for each of the following, and give a reason
in each case:

(i) `READ amount` **(2 marks)**

(ii) `discount = amount * 0.1` **(2 marks)**

(iii) `amount > 5000?` **(2 marks)**

(b) State how many flow lines leave the symbol in (iii), and how they should be
labelled. **(2 marks)**

(c) State **one** reason why every flow line must have an arrowhead.
**(1 mark)**

**Answer:** (a)(i) 1 mark — parallelogram; 1 mark — it is an input operation,
bringing a value in from outside.
(ii) 1 mark — rectangle; 1 mark — it is a process: a calculation is carried out
and stored.
(iii) 1 mark — diamond; 1 mark — it is a decision, a question with two possible
answers.
(b) 1 mark — two; 1 mark — labelled Yes and No (accept True and False).
(c) The arrowhead shows the direction of flow, so the order in which the steps
are carried out is clear — 1 mark.

**Working:** (a) The reason is what carries the second mark in each part, so
naming the shape alone scores half. Tie the reason to what the step *does*:
brings a value in, works something out, asks a question.

(b) Both branches must be labelled. An unlabelled pair of arrows leaves the
reader to guess which outcome is which.
