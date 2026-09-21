---
subject: IT
topic: networks-web
lesson: web-technologies
title: Web Technology Concepts
objectives: ["2.4"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 2.4 (explain the interrelationship among key Web technology concepts). NOT YET checked against textbook for depth."
---

## Lesson

The objective asks for the **interrelationship** among web concepts, not a
glossary. The concepts below are taught in the order they connect, and the
final section traces one request from typing an address to seeing a page.

### The internet and the web are not the same

**The internet** is the global network of networks — the physical
infrastructure of cables, satellites, routers and computers, and the protocols
that let them exchange data.

**The World Wide Web** is one **service** running on the internet: a system of
linked documents reached with a browser.

Email, file transfer, video calls and online games also run on the internet and
are not the web. The internet is the road; the web is one kind of traffic on
it.

### Addresses

**IP address** — a number identifying a device on the internet, such as
`192.168.1.1`. Every device has one, and routers use it to deliver data.

**Domain name** — a readable name standing in for an IP address, such as
`cxc.org`. People remember names; machines use numbers.

**DNS — the domain name system** — the service translating domain names into IP
addresses. It is often called the internet's phone book: you know the name, DNS
supplies the number.

Without DNS the web would still work, and every link would have to contain a
number that changes whenever a site moves servers. It is the layer that makes
addresses human.

**URL — uniform resource locator** — the full address of a particular
resource:

```
https://www.cxc.org/subjects/it/index.html
```

| Part | Meaning |
|---|---|
| `https://` | The **protocol** — how to fetch it |
| `www.cxc.org` | The **domain name** — which server |
| `/subjects/it/` | The **path** — which folder on that server |
| `index.html` | The **file** — which page |

### The pieces of the web

**Web page** — a single document, written in HTML.

**Website** — a collection of related pages under one domain.

**Home page** — the page a visitor arrives at first.

**Web server** — a computer that stores websites and sends pages to browsers
that ask for them. It runs continuously, waiting for requests.

**Web browser** — the program on the user's device that requests pages and
displays them: Chrome, Firefox, Safari, Edge.

**Hyperlink** — a link from one page to another, which is what makes the
collection a *web* rather than a list.

**Web hosting** — the service of keeping a website on a web server so the
public can reach it.

**ISP — internet service provider** — the company providing a user's
connection to the internet.

### Protocols

**HTTP** — hypertext transfer protocol — the rules by which a browser requests
a page and a server sends it.

**HTTPS** — the same, **encrypted**. Anyone intercepting the traffic sees
unreadable data. It is essential wherever passwords, card numbers or personal
details are sent, and browsers now mark plain HTTP pages as not secure.

The `s` stands for secure, and recognising the difference is examined: **HTTP
sends in the open; HTTPS encrypts.**

### Putting it together: what happens when you visit a page

This is the interrelationship the objective is asking for.

1. You type `www.cxc.org` into a **browser**.
2. The browser asks **DNS** for the **IP address** matching that **domain
   name**.
3. DNS replies with the address.
4. The browser sends an **HTTP** (or HTTPS) request to the **web server** at
   that address, routed there across the **internet** by routers using the IP
   address.
5. The server finds the requested page and sends the **HTML** back.
6. The browser reads the HTML, requests the images and stylesheets it refers
   to, and **renders** the page on screen.
7. Clicking a **hyperlink** starts the whole process again for another page.

Every concept in this lesson appears in those seven steps, and each depends on
the one before. Being able to narrate this sequence answers most questions on
this objective.

### Finding things

**Search engine** — a service that indexes web pages and returns those matching
a query: Google, Bing, DuckDuckGo. It works by sending out **crawlers** (or
spiders) that follow links from page to page, recording what they find in an
**index**. A search queries that index, not the live web — which is why a page
can be found even when the site is temporarily down, and why a very new page
may not yet appear.

**Keywords** are the words searched for. Results are ranked by relevance,
popularity and many other factors — and results marked as advertisements are
paid for, not earned.

### Other web concepts

**Blog** — a site of dated entries, newest first, usually by one author.

**Wiki** — a site any permitted user may edit, such as Wikipedia.

**Podcast** — audio episodes published for download or streaming.

**Social networking site** — a site built around users connecting and sharing.

**Web 2.0** — the shift from pages that were only read to sites where users
**create** the content: social media, wikis, comments, video sharing.

**E-commerce** — buying and selling online.

**Cloud computing** — using software and storage that run on remote servers
rather than on your own device.

**Cookie** — a small file a site stores on your device to remember you between
visits: a login, a shopping basket, a preference. Useful, and also how browsing
is tracked across sites, which is why consent is now asked for.

**Uploading and downloading** — sending a file **to** a server, and fetching
one **from** it.

**Streaming** — playing audio or video as it arrives, without storing the whole
file first.

**Bandwidth** — how much data a connection can carry in a given time, which
decides whether streaming works smoothly.

**Static and dynamic pages.** A **static** page is the same for everyone. A
**dynamic** page is built when it is requested, from a database — which is how
a site can greet you by name or show your own order history. The same URL gives
different people different content.

## Flashcards

### 2.4 | Distinguish between the internet and the World Wide Web.
The **internet** is the global network of networks — the infrastructure. The
**web** is one service running on it: linked documents reached with a browser.

> Hint: the road, and one kind of traffic on it.

### 2.4 | Name three internet services that are not the web.
Email, file transfer (FTP), video calls and online gaming.

### 2.4 | What is an IP address?
A number identifying a device on a network, used by routers to deliver data.

### 2.4 | What is DNS and what does it do?
The **domain name system** — it translates readable domain names into the IP
addresses machines use. It is the internet's phone book.

### 2.4 | Name the four parts of the URL `https://www.cxc.org/subjects/index.html`.
`https://` the protocol; `www.cxc.org` the domain name; `/subjects/` the path;
`index.html` the file.

### 2.4 | What is a web server?
A computer that stores websites and sends pages to browsers that request them,
running continuously to answer requests.

### 2.4 | What is a web browser?
The program on the user's device that requests web pages and displays them —
Chrome, Firefox, Safari, Edge.

### 2.4 | What is the difference between HTTP and HTTPS?
Both transfer web pages; **HTTPS is encrypted**, so anyone intercepting the
traffic sees unreadable data. It is essential for passwords and payment
details.

### 2.4 | Describe what happens when a user types a web address into a browser.
The browser asks DNS for the IP address of the domain; DNS replies; the browser
sends an HTTP request to the web server at that address; the server returns the
HTML; the browser renders the page.

### 2.4 | How does a search engine work?
Crawlers follow links from page to page, recording what they find in an
**index**. A search queries that index rather than the live web.

### 2.4 | Why might a brand-new web page not appear in search results?
The search engine's crawler has not yet visited it, so it is not in the index a
search actually queries.

### 2.4 | What is a cookie, and why is consent asked for?
A small file a site stores on your device to remember you — a login, a basket,
a preference. It can also track browsing across sites, which is why permission
is requested.

### 2.4 | What is an ISP?
An **internet service provider** — the company providing a user's connection to
the internet.

### 2.4 | Distinguish between a static and a dynamic web page.
A **static** page is the same for everyone. A **dynamic** page is built when
requested, usually from a database, so the same address can show different
people different content.

### 2.4 | What is Web 2.0?
The shift from pages that were only read to sites where users create the
content — social media, wikis, comments and video sharing.

### 2.4 | Distinguish between uploading, downloading and streaming.
**Uploading** sends a file to a server; **downloading** fetches one from it;
**streaming** plays audio or video as it arrives without storing the whole file.

## Questions

### 2.4 | mcq | 1 mark | difficulty 2
Which statement correctly describes the relationship between the internet and
the World Wide Web?

- A. They are two names for the same thing
- B. The web is a service that runs on the internet
- C. The internet is a service that runs on the web
- D. The web replaced the internet

**Answer:** B

**Working:** The internet is the infrastructure; the web is one service using
it. Email and file transfer are others.

### 2.4 | mcq | 1 mark | difficulty 2
What is the function of DNS?

- A. To encrypt web traffic
- B. To translate domain names into IP addresses
- C. To store websites
- D. To index web pages for searching

**Answer:** B

**Working:** DNS is the internet's phone book. Option C describes a web server
and D a search engine.

### 2.4 | mcq | 1 mark | difficulty 2
In the URL `https://www.school.edu.jm/admissions/apply.html`, what is
`www.school.edu.jm`?

- A. The protocol
- B. The domain name
- C. The path
- D. The file name

**Answer:** B

**Working:** `https://` is the protocol, `/admissions/` the path and
`apply.html` the file. The domain name identifies the server.

### 2.4 | mcq | 1 mark | difficulty 3
A student is about to enter card details on a payment page. Which address
should they insist on seeing?

- A. One beginning `http://`
- B. One beginning `https://`
- C. One ending `.com`
- D. One containing the word `secure`

**Answer:** B

**Working:** HTTPS encrypts the traffic, so intercepted data is unreadable.
Neither the domain ending nor a word in the address provides any protection.

### 2.4 | mcq | 1 mark | difficulty 3
A search engine finds pages by

- A. searching every website live at the moment of the query
- B. querying an index built by crawlers that follow links between pages
- C. asking DNS for matching domain names
- D. contacting each web server in turn

**Answer:** B

**Working:** Crawling and indexing happen in advance; the search queries the
index. This is why a very new page may not appear yet.

### 2.4 | mcq | 1 mark | difficulty 3
A shopping site greets each user by name and shows their own order history. The
pages are

- A. static
- B. dynamic
- C. cached
- D. encrypted only

**Answer:** B

**Working:** A dynamic page is built when requested, usually from a database,
so the same address shows different content to different users.

### 2.4 | structured | 10 marks | difficulty 3
A student types `www.cxc.org` into a browser and a web page appears.

(a) Describe, in order, what happens between the student pressing Enter and the
page appearing. Name the components involved. **(5 marks)**

(b) State the function of each of the following:

(i) a web server **(1 mark)**

(ii) an ISP **(1 mark)**

(c) Explain the difference between HTTP and HTTPS, and state when HTTPS is
essential. **(2 marks)**

(d) Distinguish between the internet and the World Wide Web. **(1 mark)**

**Answer:** (a) 1 mark each, in order: the browser asks DNS for the IP address
matching the domain name; DNS returns the IP address; the browser sends an HTTP
or HTTPS request across the internet to the web server at that address; the web
server locates the page and sends the HTML back; the browser renders the HTML,
requesting any images and stylesheets it refers to.
(b)(i) It stores websites and sends pages to browsers that request them.
(ii) It provides the user's connection to the internet.
(c) 1 mark — both transfer web pages, but HTTPS is encrypted so intercepted
traffic is unreadable; 1 mark — it is essential wherever passwords, card
numbers or personal details are sent.
(d) The internet is the global network of networks — the infrastructure — while
the web is one service running on it — 1 mark.

**Working:** (a) The order carries the marks, and the DNS step is the one most
often left out. Nothing can be requested until the domain name has been turned
into an IP address.
