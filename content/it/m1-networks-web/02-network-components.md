---
subject: IT
topic: networks-web
lesson: network-components
title: The Components of a Network
objectives: ["2.2"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 2.2 (explain the functions of the basic components of a network). NOT YET checked against textbook for depth."
---

## Lesson

A network needs three things: **devices** to connect, **something to carry the
signal**, and **rules** both ends agree on. This lesson covers all three.

### Hardware components

**Network interface card (NIC)** — the component inside each computer that
connects it to the network. It converts the computer's data into signals the
network can carry, and back again. Every NIC has a unique **MAC address**, a
number fixed at manufacture that identifies that device.

**Switch** — connects the devices of a LAN. It receives data and sends it
**only to the device it is addressed to**, using the MAC address.

**Hub** — an older, simpler device that connects devices but sends everything
it receives to **every** device attached. It is examined chiefly as a contrast:

> A **hub** broadcasts to all; a **switch** sends only to the intended
> recipient.

That makes a switch faster, because it does not flood the network with traffic
nobody wants, and more secure, because other machines never see data not
addressed to them. Hubs are obsolete for this reason.

**Router** — connects **different networks** and decides the route data takes
between them. A home router connects the household LAN to the internet. Routers
work with **IP addresses** rather than MAC addresses.

The distinction is examined: **a switch connects devices within one network; a
router connects one network to another.**

**Modem** — **mo**dulator–**dem**odulator. Converts a computer's digital
signals into a form the telephone, cable or fibre line can carry, and converts
incoming signals back. It is what joins a home to the internet provider, and
in most homes the modem and router are one box.

**Wireless access point (WAP)** — allows wireless devices to join a wired
network. Usually built into a home router; in a large building, several are
placed to cover the whole site.

**Server** — a computer providing services to others: file server, web server,
mail server, print server, database server.

**Client** — a computer requesting services from a server.

**Bridge** — joins two network segments so they act as one.

**Repeater** — regenerates a weakening signal so it can travel further.

**Gateway** — connects networks that use different protocols, translating
between them.

**Firewall** — hardware or software controlling traffic entering and leaving a
network, blocking what is not permitted.

### Transmission media

What actually carries the signal. It divides into **guided** (cable) and
**unguided** (wireless).

| Medium | Carries | Notes |
|---|---|---|
| **Twisted pair** | Electrical signals | Cheap, easy to install, commonest in LANs; limited distance |
| **Coaxial cable** | Electrical signals | Better shielded than twisted pair; used for cable television and internet |
| **Fibre optic** | Light | Fastest, longest distance, immune to electrical interference, very secure; costly and harder to install |
| **Radio / Wi-Fi** | Radio waves | Mobility, no cabling; slower, affected by walls and interference |
| **Microwave** | High-frequency radio | Long distance point to point; needs line of sight |
| **Satellite** | Microwave via orbit | Reaches remote places; costly, and there is a noticeable delay |
| **Infrared** | Light | Very short range, needs line of sight — remote controls |
| **Bluetooth** | Radio | A few metres, low power — earphones, keyboards |

**Fibre optic** is worth knowing properly. It carries light rather than
electricity, which gives it three advantages at once: enormous speed, immunity
to electrical interference, and security — it cannot be tapped without breaking
the connection, which is noticed. Its costs are the cable itself, the
equipment, and the difficulty of joining it.

**Satellite** carries a trade-off worth naming: it reaches places no cable
does, which matters for island and rural communication, but the signal travels
tens of thousands of kilometres, so there is a delay that makes it poor for
real-time conversation.

### Bandwidth

**Bandwidth** is the amount of data a connection can carry in a given time,
measured in bits per second — Mbps, Gbps.

A useful picture: bandwidth is the **width of the pipe**, not the speed of the
water. Higher bandwidth does not make one small message arrive faster; it lets
more data through at once. This is why a household of five streaming video
needs bandwidth, while a single email does not.

### Protocols

A **protocol** is a set of rules governing how data is transmitted, so that
devices made by different manufacturers can communicate.

| Protocol | For |
|---|---|
| **TCP/IP** | The foundation of the internet: addressing and reliable delivery |
| **HTTP / HTTPS** | Transferring web pages; HTTPS is encrypted |
| **FTP** | Transferring files |
| **SMTP** | Sending email |
| **POP3 / IMAP** | Receiving email |
| **DNS** | Translating domain names into IP addresses |
| **DHCP** | Allocating IP addresses automatically |

Protocols are why the network works at all. A computer in Kingston and a server
in Tokyo, built by different companies and running different software, exchange
data because both follow the same agreed rules.

### Addressing

**MAC address** — a unique identifier built into each NIC at manufacture. It
identifies a **device**, never changes, and is used within a local network.

**IP address** — a number identifying a device **on a network**, used for
routing between networks. It can change, and it depends on where the device is
connected.

The analogy that holds: a MAC address is like a person's fingerprint —
permanent and unique to them. An IP address is like their postal address — it
says where to deliver, and it changes when they move.

### Software components

**Network operating system** — software managing the network's resources,
users and security.

**Client software** — the programs using network services: a browser, an email
client.

**Drivers** — allowing the operating system to use the network hardware.

## Flashcards

### 2.2 | What does a network interface card do?
Connects a computer to the network, converting its data into signals the
network can carry and back again.

### 2.2 | What is a MAC address?
A unique identifier built into a network interface card at manufacture, which
identifies that device and never changes.

### 2.2 | State the difference between a hub and a switch.
A **hub** sends everything it receives to every connected device. A **switch**
sends data only to the device it is addressed to.

### 2.2 | Why is a switch both faster and more secure than a hub?
It does not flood the network with traffic nobody wants, and other machines
never see data not addressed to them.

### 2.2 | What does a router do?
Connects different networks and decides the route data takes between them,
using IP addresses.

### 2.2 | State the difference between a switch and a router.
A **switch** connects devices within one network; a **router** connects one
network to another.

> Hint: which one gets you to the internet?

### 2.2 | What does a modem do, and what does the name stand for?
Converts digital signals into a form a telephone, cable or fibre line can
carry, and back again. **Mo**dulator–**dem**odulator.

### 2.2 | What is a wireless access point?
A device allowing wireless devices to join a wired network. It is usually built
into a home router.

### 2.2 | What is a firewall?
Hardware or software controlling the traffic entering and leaving a network,
blocking what is not permitted.

### 2.2 | Name three guided transmission media.
Twisted pair, coaxial cable and fibre optic.

### 2.2 | Give three advantages of fibre optic cable.
Very high speed over long distances; immune to electrical interference; very
secure, since it cannot be tapped without breaking the connection.

### 2.2 | Give one advantage and one disadvantage of satellite communication.
Advantage: it reaches remote places no cable serves. Disadvantage: the signal
travels tens of thousands of kilometres, so there is a noticeable delay.

### 2.2 | What is bandwidth?
The amount of data a connection can carry in a given time, measured in bits per
second.

### 2.2 | Does higher bandwidth make a single small message arrive faster?
No. Bandwidth is the width of the pipe, not the speed of the water — it lets
more data through at once.

### 2.2 | What is a protocol, and why is one needed?
A set of rules governing how data is transmitted, so that devices from
different manufacturers running different software can communicate.

### 2.2 | Name the protocol used for each: web pages, sending email, transferring files.
**HTTP/HTTPS** for web pages; **SMTP** for sending email; **FTP** for
transferring files.

### 2.2 | Distinguish between a MAC address and an IP address.
A **MAC address** is built into the device, unique and permanent. An **IP
address** identifies where a device is on a network and changes when it
connects elsewhere.

## Questions

### 2.2 | mcq | 1 mark | difficulty 1
Which device connects a computer to a network by converting its data into
signals the network can carry?

- A. A router
- B. A network interface card
- C. A firewall
- D. A repeater

**Answer:** B

**Working:** The NIC is the interface between the computer and the network
medium. A router connects whole networks together.

### 2.2 | mcq | 1 mark | difficulty 2
Which statement correctly distinguishes a hub from a switch?

- A. A hub sends data only to the intended recipient; a switch sends it to all
- B. A switch sends data only to the intended recipient; a hub sends it to all
- C. Both send data only to the intended recipient
- D. A hub connects networks; a switch connects devices

**Answer:** B

**Working:** The switch reads the destination address and forwards
accordingly. Because a hub broadcasts, it wastes bandwidth and exposes traffic
to every machine.

### 2.2 | mcq | 1 mark | difficulty 2
Which device is needed to connect a home network to the internet?

- A. A switch
- B. A router
- C. A repeater
- D. A bridge

**Answer:** B

**Working:** A router connects one network to another and chooses the route
between them. A switch only connects devices within a single network.

### 2.2 | mcq | 1 mark | difficulty 3
Which transmission medium is immune to electrical interference and cannot be
tapped without the interruption being noticed?

- A. Twisted pair
- B. Coaxial cable
- C. Fibre optic
- D. Radio

**Answer:** C

**Working:** Fibre carries light, not electricity, so interference has no
effect — and tapping it requires breaking the light path, which is detected.

### 2.2 | mcq | 1 mark | difficulty 3
A rural school 40 km from the nearest cable connection needs internet access.
The most suitable medium is

- A. twisted pair
- B. fibre optic
- C. satellite
- D. infrared

**Answer:** C

**Working:** Satellite reaches places no cable serves. It costs more and
introduces a noticeable delay, but the alternatives cannot reach the school at
all.

### 2.2 | mcq | 1 mark | difficulty 3
Which statement about a MAC address is correct?

- A. It changes each time the device connects to a different network
- B. It is built into the network interface card and does not change
- C. It is used to route data between networks
- D. It is allocated by the internet service provider

**Answer:** B

**Working:** The MAC address is fixed at manufacture and identifies the device
itself. The IP address is the one that changes with location and is used for
routing.

### 2.2 | structured | 10 marks | difficulty 3
A small business is setting up a network for its 12 computers in one building,
with internet access and wireless for visitors.

(a) Name the device that performs each of the following, and state its
function:

(i) connecting the 12 computers to one another **(2 marks)**

(ii) connecting the office network to the internet **(2 marks)**

(iii) allowing visitors' phones to join the network without cable **(2 marks)**

(b) Explain why a switch is preferred to a hub. **(2 marks)**

(c) The business is deciding between twisted pair and fibre optic cable for the
office. State **one** reason for choosing each. **(2 marks)**

**Answer:** (a)(i) 1 mark — a switch; 1 mark — it connects the devices of the
LAN and forwards data only to the device it is addressed to.
(ii) 1 mark — a router (accept router and modem); 1 mark — it connects the
office network to another network and decides the route data takes between
them.
(iii) 1 mark — a wireless access point; 1 mark — it allows wireless devices to
join the wired network.
(b) 1 mark — a switch sends data only to the intended recipient while a hub
sends it to every device; 1 mark — so a switch is faster, because the network
is not flooded with unwanted traffic, and more secure, because other machines
never see data not meant for them.
(c) 1 mark — twisted pair: it is cheap and easy to install, and adequate for
the distances inside one building; 1 mark — fibre optic: far higher speed over
longer distances, immune to interference and more secure.

**Working:** (c) For twelve machines in one building, twisted pair is the
sensible answer — the question is really testing whether you know what fibre's
advantages are for, which is distance, speed and interference rather than a
short run across an office.
