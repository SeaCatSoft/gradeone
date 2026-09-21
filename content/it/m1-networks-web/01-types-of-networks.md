---
subject: IT
topic: networks-web
lesson: types-of-networks
title: Types of Network
objectives: ["2.1"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 2.1 (distinguish among types of networks). NOT YET checked against textbook for depth."
---

## Lesson

A **computer network** is two or more computers connected so that they can
share data and resources.

Networks are classified in two different ways, and questions use both:
by **geographical area** covered, and by **who may use them**.

### By area

| Network | Covers | Example |
|---|---|---|
| **PAN** — personal area network | A few metres, around one person | A phone connected to earphones by Bluetooth |
| **LAN** — local area network | One building or site | A school's computer laboratory, an office |
| **MAN** — metropolitan area network | A town or city | A university's campuses across a city; a city's CCTV network |
| **WAN** — wide area network | A country, or the world | A bank's branches across the Caribbean; the internet |

**LAN and WAN** are the pair that matter most, and the differences go beyond
size:

| | LAN | WAN |
|---|---|---|
| Area | One building or site | Large — countries or worldwide |
| Owned by | One organisation | Usually leased from telecommunications providers |
| Speed | High | Generally lower |
| Error rate | Low | Higher — signals travel further |
| Cost to run | Lower | Higher |
| Connected by | Cable or Wi-Fi the owner installed | Telephone lines, fibre, satellite, leased lines |

The key point is **ownership**. An organisation owns its LAN outright and can
lay whatever cable it likes. A WAN crosses land the organisation does not own,
so it must rent capacity from telecommunications companies — which is why WANs
are slower, costlier and less reliable.

The **internet** is the largest WAN in existence: a global network of networks.

### Wired and wireless

A **WLAN** is a wireless LAN — a LAN using Wi-Fi rather than cable.

| | Wired | Wireless |
|---|---|---|
| Speed | Faster | Generally slower |
| Reliability | More stable | Affected by walls, distance, interference |
| Security | Harder to intercept — physical access needed | Signal travels beyond the walls; must be encrypted |
| Mobility | None | Free movement |
| Installation | Costly, disruptive cabling | Quick, no cabling |
| Cost | Higher to install | Lower |

The trade-off: **wired for speed, reliability and security; wireless for
mobility and cheap installation.** A school might wire its laboratory and
provide Wi-Fi everywhere else, which is the answer to a great many examination
questions.

### By who may use them

**The internet** — the global public network. Anyone with a connection may use
it.

**An intranet** — a private network using the same technologies as the
internet (web pages, browsers, email) but restricted to **one organisation**.
A school intranet might hold timetables, policies and internal notices. It is
inside the organisation's firewall and invisible from outside.

**An extranet** — an intranet extended to **selected outsiders**: suppliers,
customers, partners. A company might let its suppliers see stock levels and
place deliveries, without giving them access to everything else.

The three in one line: **internet — everyone; intranet — us; extranet — us and
chosen others.**

### Network architecture

A different classification again, describing how the computers relate.

**Client-server.** One or more powerful computers (**servers**) provide
services, and the other computers (**clients**) request them.

- Central control of files, users and security.
- Backups are done once, centrally.
- Easier to manage as the network grows.
- **But** a server is expensive, needs expertise, and if it fails everyone
  stops.

**Peer-to-peer.** Every computer is equal; each can share its own files and
printers with the others.

- Cheap and simple — no server to buy.
- No single point of failure.
- **But** security is weak, backups depend on each user, and it becomes
  unmanageable beyond about ten machines.

The rule of thumb: **peer-to-peer for a handful of machines; client-server
beyond that.**

### Network topologies

The **topology** is the physical or logical arrangement of the connections.

**Bus** — all devices attached to one shared cable. Cheap and simple, but the
cable is a single point of failure and performance falls as traffic rises.

**Star** — every device connected to a central switch or hub. The commonest
arrangement today: one failed cable affects only its own device, and it is easy
to add machines. If the central device fails, however, the whole network stops.

**Ring** — each device connected to the next, forming a loop. Data passes round
in one direction. A break can stop the whole ring.

**Mesh** — devices connected to several others, so data has more than one
possible route. Very reliable and expensive — it is how the internet's backbone
is built.

| Topology | Strength | Weakness |
|---|---|---|
| Bus | Cheap, simple | One cable fails, all fail |
| Star | Robust, easy to extend | Central device is critical |
| Ring | Predictable performance | A break can stop everything |
| Mesh | Very reliable, multiple routes | Expensive, complex |

### Why network at all?

The advantages, which questions ask for directly:

- **Share hardware** — one printer serves twenty machines.
- **Share data and files** without copying them about.
- **Communicate** — email, messaging, video calls.
- **Central backup** of everything in one place.
- **Central security** — one set of user accounts and permissions.
- **Share an internet connection.**
- **Install and update software centrally**, instead of machine by machine.

And the disadvantages:

- **Cost** of equipment, cabling and setup.
- **Expertise** — someone must manage it.
- **Malware spreads** across a network quickly.
- **Security risk**: one breach can reach everything.
- **Dependence** — if the network fails, work stops for everyone at once.

## Flashcards

### 2.1 | What is a computer network?
Two or more computers connected so that they can share data and resources.

### 2.1 | Name the four types of network by area covered.
**PAN** (a few metres), **LAN** (one building or site), **MAN** (a town or
city), **WAN** (a country or the world).

### 2.1 | State three differences between a LAN and a WAN.
Any three: a LAN covers one site and a WAN a large area; a LAN is owned by one
organisation while a WAN uses leased telecommunications links; a LAN is faster;
a LAN has a lower error rate and costs less to run.

### 2.1 | Why is a WAN slower and less reliable than a LAN?
It crosses land the organisation does not own, so capacity is rented from
telecommunications providers and signals travel much further.

### 2.1 | What is the largest WAN in existence?
The **internet** — a global network of networks.

### 2.1 | Give two advantages of a wired network over a wireless one.
Any two: faster; more stable and reliable; more secure, since physical access
is needed to intercept it.

### 2.1 | Give two advantages of a wireless network over a wired one.
Users can move about freely; installation is quick and cheap with no cabling.

### 2.1 | Why does a wireless network need encryption more than a wired one?
Its signal travels beyond the walls of the building, so anyone nearby can
receive it.

### 2.1 | Distinguish between the internet, an intranet and an extranet.
The **internet** is public and open to everyone. An **intranet** is private to
one organisation. An **extranet** extends an intranet to selected outsiders
such as suppliers.

> Hint: everyone; us; us and chosen others.

### 2.1 | Give two advantages of a client-server network.
Any two: central control of files, users and security; backups done once,
centrally; easier to manage as the network grows; software installed centrally.

### 2.1 | Give two disadvantages of a client-server network.
The server is expensive and needs expertise to manage; if the server fails,
everyone stops working.

### 2.1 | When is a peer-to-peer network appropriate?
For a small number of machines — up to about ten — where cost matters and there
is nobody to manage a server.

### 2.1 | Name four network topologies.
**Bus**, **star**, **ring** and **mesh**.

### 2.1 | Why is star the commonest topology?
One failed cable affects only its own device, and machines are easy to add. Its
weakness is that the central switch is critical.

### 2.1 | Give three advantages of networking computers.
Any three: sharing hardware such as printers; sharing files and data;
communication; central backup; central security; sharing an internet
connection; central software installation.

### 2.1 | Give three disadvantages of networking computers.
Any three: the cost of equipment and cabling; the expertise needed to manage
it; malware spreads quickly; one security breach can reach everything; if the
network fails, everyone stops.

## Questions

### 2.1 | mcq | 1 mark | difficulty 1
A network covering a single school building is a

- A. PAN
- B. LAN
- C. MAN
- D. WAN

**Answer:** B

**Working:** A local area network covers one building or site. A MAN covers a
town and a WAN a country or more.

### 2.1 | mcq | 1 mark | difficulty 2
Which is the most important difference between a LAN and a WAN?

- A. A LAN uses computers and a WAN uses phones
- B. A LAN is owned by one organisation, while a WAN uses leased
  telecommunications links
- C. A WAN is always faster
- D. A LAN cannot be wireless

**Answer:** B

**Working:** Ownership is what drives the rest: a WAN crosses land the
organisation does not own, which is why it is slower, costlier and less
reliable.

### 2.1 | mcq | 1 mark | difficulty 2
A company allows its suppliers restricted access to part of its private network
to check stock levels. This is

- A. an intranet
- B. an extranet
- C. the internet
- D. a LAN

**Answer:** B

**Working:** An extranet extends an intranet to selected outsiders. An intranet
alone would be restricted to the company's own staff.

### 2.1 | mcq | 1 mark | difficulty 3
A small office of six computers wants to share files and one printer, has a
limited budget and nobody to administer a server. The most suitable
arrangement is

- A. client-server
- B. peer-to-peer
- C. a mesh WAN
- D. an extranet

**Answer:** B

**Working:** With so few machines and no administrator, peer-to-peer is cheaper
and simpler. Beyond roughly ten machines the lack of central security and
backup would become the greater problem.

### 2.1 | mcq | 1 mark | difficulty 3
In which topology does the failure of one cable affect only the device attached
to it?

- A. Bus
- B. Ring
- C. Star
- D. All of them

**Answer:** C

**Working:** In a star, each device has its own cable to the central switch. A
bus shares one cable and a ring forms a loop, so in both a single break can
affect everything.

### 2.1 | mcq | 1 mark | difficulty 3
Why does a wireless network require encryption more urgently than a wired one?

- A. Wireless networks are slower
- B. The signal travels beyond the building, so anyone nearby can receive it
- C. Wireless networks cannot use passwords
- D. Wired networks cannot be attacked

**Answer:** B

**Working:** Intercepting a wired network needs physical access to the cable.
A wireless signal leaves the building on its own, so its contents must be
encrypted.

### 2.1 | structured | 10 marks | difficulty 3
A secondary school has a computer laboratory of 30 machines, staff computers in
offices across the site, and a sister school in another town with which it
wants to share resources.

(a) Name the type of network connecting the machines on the school's own site,
and give a reason. **(2 marks)**

(b) Name the type of network needed to connect the two schools, and state
**two** ways it differs from your answer to (a). **(3 marks)**

(c) The laboratory will be wired and the staff offices wireless. Give **one**
reason for each choice. **(2 marks)**

(d) The school wants a private network holding timetables and policies for
staff only. Name it, and state how it differs from the school's public website.
**(2 marks)**

(e) State **one** disadvantage of networking the school's computers.
**(1 mark)**

**Answer:** (a) 1 mark — a LAN; 1 mark — it covers a single site or building.
(b) 1 mark — a WAN; 2 marks for any two differences: it covers a much larger
geographical area; it uses leased telecommunications links rather than cable
the school owns; it is slower; it has a higher error rate; it costs more to
run.
(c) 1 mark — the laboratory is wired because it is faster, more reliable and
more secure for 30 fixed machines; 1 mark — the offices are wireless because
staff can move about and no cabling has to be installed across the site.
(d) 1 mark — an intranet; 1 mark — it is private to the school and accessible
only to staff inside the organisation, whereas the public website is open to
anyone on the internet.
(e) Any one, 1 mark: the cost of equipment and cabling; the expertise needed to
manage it; malware can spread quickly between machines; a security breach can
reach everything; if the network fails, everyone stops working.

**Working:** (c) The pairing is the point: fixed machines in one room gain most
from cable, and staff moving between offices gain most from Wi-Fi. A school
normally uses both, for exactly these reasons.
