---
subject: IT
topic: computer-fundamentals
lesson: troubleshooting
title: Troubleshooting Basic Hardware Problems
objectives: ["1.10"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 1.10 (troubleshoot basic computer hardware problems). NOT YET checked against textbook for depth."
---

## Lesson

**Troubleshooting** is finding the cause of a fault and putting it right. It is
a method, not a list of memorised fixes — new faults appear, and the method
handles them.

### The method

1. **Identify the problem.** What exactly happens? What were you doing? What
   changed recently? A new device, a new program, a move, a storm?
2. **Check the simple things first.** Most faults are trivial, and the trivial
   check costs seconds.
3. **Form a theory** about the likely cause.
4. **Test the theory**, changing **one thing at a time**.
5. **Fix it**, or escalate if it needs a specialist.
6. **Verify** that the whole system now works, not just the symptom.
7. **Record** what was wrong and what fixed it, so the next person is spared.

Step 4 is the one people skip. Changing three things and finding the fault gone
tells you nothing about which one mattered — and if it returns, you are back at
the beginning.

### Always check these first

Before anything else:

- **Is it plugged in, and is the socket switched on?**
- **Is the device switched on?** Are its indicator lights lit?
- **Are the cables firm** at both ends? Cables work loose.
- **Has it been restarted?** A restart clears a great many temporary faults.
- **Did anything change recently?** New hardware, new software, a move.
- **Does it happen with another device?** Swapping a cable, mouse or monitor
  tells you which side the fault is on.

That list solves a large share of all faults, and every one of the checks takes
seconds.

### Common faults and their causes

**The computer will not switch on at all**

- Not plugged in, or the wall socket is off.
- The power cable is loose or damaged.
- The power supply unit has failed.
- The power button or its connector is faulty.

Check the lights. No light at all points to power; lights but no display points
elsewhere.

**It powers on but there is no display**

- The monitor is off, or not plugged in.
- The video cable is loose or in the wrong port — a common error where the
  machine has both integrated and dedicated graphics.
- The monitor's brightness is at minimum, or it is on the wrong input.
- The graphics card or RAM is not seated properly.

Test the monitor on another computer. That single test separates a monitor
fault from a computer fault.

**It keeps restarting or switching off by itself**

- **Overheating** — dust-clogged fans or vents, or a fan that has stopped.
- A failing power supply.
- Loose internal components.

Overheating is the usual answer and the usual remedy is cleaning the vents.

**It has become very slow**

- Too little free storage.
- Too many programs running at once, or starting automatically.
- Not enough RAM for what is being run.
- **Malware.**
- A fragmented hard disc (not an SSD).
- Overheating, which makes some processors deliberately slow down.

**The keyboard or mouse does not work**

- Unplugged, or plugged into a faulty port.
- Flat batteries in a wireless device.
- The wireless receiver is missing or out of range.
- The driver is missing or corrupted.
- Dirt under the keys, or a blocked optical sensor.

**The printer will not print**

- It is off, out of paper, out of ink or toner, or has a paper jam.
- The cable is loose, or the wireless connection is lost.
- It is not set as the default printer.
- The print queue is jammed by a stuck job.
- The driver is missing or wrong.

**There is no internet connection**

- The cable is unplugged or the Wi-Fi is switched off.
- The router or modem needs restarting.
- The wrong network, or the wrong password.
- The service provider is at fault — check whether another device works.

**Unusual noise**

- A failing fan — a rattle or grinding.
- A failing hard disc — clicking or grinding. **Back up immediately**; this
  noise often precedes complete failure.

**Beeps at start-up**

Many computers signal a hardware fault with a pattern of beeps before anything
appears on screen — commonly a memory or graphics problem. The pattern's
meaning depends on the manufacturer.

**Messages worth recognising**

- `No boot device found` — the computer cannot find an operating system: the
  drive has failed, or it is trying to start from a USB stick left plugged in.
- `Disk boot failure` — similar.
- A **blue screen** or sudden crash — often a driver or failing RAM.

### Isolating a fault by substitution

The strongest technique available without instruments: **swap one part for a
known-good one.**

A monitor that shows nothing might be broken, or the computer might be sending
nothing. Connect the monitor to a different computer. If it works, the fault is
in the first computer; if not, it is the monitor.

The same reasoning applies to cables, keyboards, power leads and network leads.
One substitution halves the search.

### When not to open the case

Some work belongs to a technician, and knowing where that line falls is part of
the objective.

- **Never open a power supply unit.** It holds a dangerous charge even when
  unplugged.
- **Unplug from the mains** before opening a computer case at all.
- **Guard against static electricity**, which destroys components invisibly.
- **Do not open equipment under warranty** — it may void the warranty.
- Leave soldering, screen replacement and laptop internals to someone trained.

The distinction the syllabus draws is between **basic** troubleshooting —
cables, power, restarting, settings, cleaning, consumables — and repairs
needing a technician.

### Software or hardware?

A useful question, because it directs the search.

Suspect **hardware** when: the fault occurs before the operating system loads;
there are unusual noises, smells or heat; a device is dead in every program;
the fault follows the device to another computer.

Suspect **software** when: the fault appears in one program only; it started
after an update or installation; the device works elsewhere; restarting or
reinstalling helps.

## Flashcards

### 1.10 | List the steps in troubleshooting a fault.
Identify the problem; check the simple things; form a theory; test it changing
one thing at a time; fix or escalate; verify the whole system; record what was
done.

### 1.10 | Why change only one thing at a time when testing?
Changing several leaves you not knowing which one mattered — so the fault
cannot be explained or prevented from returning.

### 1.10 | Name four checks to make before anything else.
Any four: is it plugged in and the socket switched on; is the device switched
on; are the cables firm at both ends; has it been restarted; has anything
changed recently.

### 1.10 | A computer powers on but nothing appears on the monitor. Give three possible causes.
Any three: the monitor is off or unplugged; the video cable is loose or in the
wrong port; the monitor is on the wrong input or its brightness is at minimum;
the graphics card or RAM is not seated properly.

### 1.10 | How can you tell whether a blank screen is the monitor's fault or the computer's?
Connect the monitor to another computer. If it works there, the fault is in the
first computer; if not, the monitor is faulty.

### 1.10 | A computer keeps switching itself off after a few minutes. What is the most likely cause?
**Overheating** — dust-clogged vents or a fan that has stopped. The usual remedy
is cleaning the vents and checking the fans.

### 1.10 | Give four reasons a computer might have become very slow.
Any four: too little free storage; too many programs running or starting
automatically; insufficient RAM; malware; a fragmented hard disc; overheating.

### 1.10 | A printer will not print. Give four things to check.
Any four: it is switched on; paper, ink or toner; a paper jam; the cable or
wireless connection; whether it is the default printer; a stuck print queue;
the driver.

### 1.10 | What should you do if a hard disc starts clicking or grinding?
**Back up immediately.** That noise often precedes complete failure of the
drive.

### 1.10 | What does the message `No boot device found` mean?
The computer cannot find an operating system to start — the drive may have
failed, or it may be trying to start from a USB stick left plugged in.

### 1.10 | What is fault isolation by substitution?
Replacing a suspect part with one known to work. If the fault disappears, the
replaced part was at fault; if not, it was not.

### 1.10 | Why should a power supply unit never be opened?
It holds a dangerous electrical charge even after being unplugged.

### 1.10 | Name three safety precautions before opening a computer case.
Unplug it from the mains; guard against static electricity; check that opening
it will not void the warranty.

### 1.10 | How can you tell a hardware fault from a software fault?
Hardware: it happens before the operating system loads, in every program, or
follows the device to another computer. Software: it affects one program only,
began after an update, or the device works elsewhere.

## Questions

### 1.10 | mcq | 1 mark | difficulty 1
A computer will not switch on at all and no lights show. What should be checked
**first**?

- A. Whether the hard disc has failed
- B. Whether it is plugged in and the socket is switched on
- C. Whether the operating system is corrupt
- D. Whether the monitor cable is loose

**Answer:** B

**Working:** With no lights at all, power is the first suspicion, and checking
it takes seconds. The other three would not prevent the lights coming on.

### 1.10 | mcq | 1 mark | difficulty 2
A computer switches itself off after running for a few minutes. The most likely
cause is

- A. a virus
- B. overheating
- C. insufficient RAM
- D. a faulty keyboard

**Answer:** B

**Working:** Shutting down after a period of running is the classic sign of
overheating, usually from dust-clogged vents or a stopped fan.

### 1.10 | mcq | 1 mark | difficulty 2
A monitor shows nothing although the computer is running. The most useful next
step is to

- A. replace the hard disc
- B. connect the monitor to a different computer
- C. reinstall the operating system
- D. buy a new computer

**Answer:** B

**Working:** This single substitution tells you which side the fault is on —
monitor or computer — and so halves the search.

### 1.10 | mcq | 1 mark | difficulty 3
Which fault is most likely to be a **software** rather than a hardware problem?

- A. The computer beeps and shows nothing on start-up
- B. A grinding noise from inside the case
- C. One program crashes but everything else works normally
- D. The computer will not switch on

**Answer:** C

**Working:** A fault confined to one program points to software. The others
occur before or independently of the operating system, or are physical noises.

### 1.10 | mcq | 1 mark | difficulty 3
A hard disc begins making a repeated clicking noise. The most important
immediate action is to

- A. defragment the disc
- B. back up the data at once
- C. run a virus scan
- D. increase the RAM

**Answer:** B

**Working:** Clicking usually signals mechanical failure, and the drive may
stop entirely without warning. Everything else can wait until the data is safe.

### 1.10 | mcq | 1 mark | difficulty 3
Why should a technician change only one component at a time when testing a
fault?

- A. To save money
- B. So it is clear which change fixed the fault
- C. Because computers allow only one change at a time
- D. To avoid static electricity

**Answer:** B

**Working:** Several changes at once leave the cause unknown, so the fault
cannot be explained, recorded or prevented from recurring.

### 1.10 | structured | 10 marks | difficulty 3
A school laboratory reports several problems.

(a) A computer will not start. State **three** things the technician should
check, in a sensible order. **(3 marks)**

(b) A printer is switched on but nothing prints. State **three** possible
causes. **(3 marks)**

(c) A computer has become very slow over the past month. State **two** possible
causes. **(2 marks)**

(d) State **two** safety precautions the technician should take before opening
a computer case. **(2 marks)**

**Answer:** (a) 1 mark each, in a sensible order: whether it is plugged in and
the socket switched on; whether the power cable is firmly connected at both
ends; whether any lights or fans come on at all; whether the power supply or
power button has failed. (Credit a sensible order from simplest to most
involved.)
(b) 1 mark each, any three: no paper; out of ink or toner; a paper jam; the
cable is loose or the wireless connection is lost; it is not set as the default
printer; the print queue is jammed; the driver is missing or wrong.
(c) 1 mark each, any two: too little free storage; too many programs running or
starting automatically; insufficient RAM; malware; a fragmented hard disc;
overheating.
(d) 1 mark each, any two: unplug it from the mains first; guard against static
electricity; do not open the power supply unit; check that opening it will not
void the warranty.

**Working:** (a) The order carries weight. Checking the power supply before
checking the plug is the wrong way round — start with what is quickest and
likeliest.

(d) The power supply point is worth knowing: it holds a dangerous charge even
after the computer is unplugged, which is why it is the one part never opened.
