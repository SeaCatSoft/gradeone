"""Turn the extracted IT objectives into content/it/syllabus.json and one
markdown review file per topic.

The IT syllabus is organised as eight SECTIONS, while the platform's model is
modules containing topics. The three Paper 01 groups are used as the modules,
because they are also the three profile dimensions the certificate reports:

    Module 1  Theory                            Sections 1-3   35 items
    Module 2  Productivity Tools                Sections 4-6   15 items
    Module 3  Problem-Solving and Programming   Sections 7-8   10 items

Paper 01's split is published per group, not per section, so each topic's
mcqCount here is an ESTIMATE, shared out within its group in proportion to the
number of objectives and rounded so the group totals stay exact. Practice
papers sample by these weightings, so correct them if CXC publishes a finer
breakdown.

Like the Mathematics generator, this refuses to overwrite an objective file
that already exists: those become the source of truth the moment they are
written, and a re-run must never discard a review pass.

    python backend/tools/gen_it_structure.py backend/syllabus/it_objectives.json
"""
import json, os, sys, io

# section number -> (module, slug, title)
SECTIONS = {
    1: (1, "computer-fundamentals", "Computer Fundamentals and Information Processing"),
    2: (1, "networks-web", "Computer Networks and Web Technologies"),
    3: (1, "ict-impact", "Social and Economic Impact of ICT"),
    4: (2, "word-processing-web", "Word-Processing and Web Page Design"),
    5: (2, "spreadsheets", "Spreadsheets"),
    6: (2, "database-management", "Database Management"),
    7: (3, "problem-solving-design", "Problem-Solving and Program Design"),
    8: (3, "program-implementation", "Program Implementation"),
}

MODULES = {
    1: ("Theory", 35),
    2: ("Productivity Tools", 15),
    3: ("Problem-Solving and Programming", 10),
}

HEAD = """---
subject: IT
module: {module}
topic: {slug}
---

# {title}

Section {section} - {title}. {n} specific objectives, {flagged} needing review.

<!--
HOW TO REVIEW THIS FILE

Lines marked [?] lost characters or picked up text from the CONTENT column
when the syllabus PDF was read by machine.

Check each [?] line against the printed syllabus, correct the text, then
delete the [?] marker. Objective numbers restart in each section of the IT
syllabus, so the codes here are written as <section>.<number> -- 5.3 is the
third objective of Section 5, Spreadsheets.

Leave unmarked lines alone unless you spot something wrong. Do not renumber
anything -- the codes are how every lesson, flashcard and question in the
platform finds its objective. An objective still carrying [?] will import,
but stays hidden from students until the marker is gone.
-->

"""


def share(counts, total):
    """Split `total` across `counts` proportionally, keeping the sum exact."""
    grand = sum(counts.values())
    raw = {k: total * v / grand for k, v in counts.items()}
    out = {k: int(v) for k, v in raw.items()}
    short = total - sum(out.values())
    # Hand the remainder to the largest fractional parts.
    for k in sorted(raw, key=lambda k: raw[k] - out[k], reverse=True)[:short]:
        out[k] += 1
    return out


def main(src):
    rows = json.load(open(src, encoding="utf-8"))
    by_section = {}
    for r in rows:
        by_section.setdefault(r["section"], []).append(r)

    # mcq estimates, worked out within each module
    mcq = {}
    for mod, (_, items) in MODULES.items():
        counts = {s: len(v) for s, v in by_section.items() if SECTIONS[s][0] == mod}
        mcq.update(share(counts, items))

    spec = {
        "subject": "IT",
        "name": "Information Technology",
        "syllabusCode": "CXC 30/G/SYLL 17",
        "effectiveFrom": "May-June 2020",
        "note": (
            "Modules are the three Paper 01 groups, which are also the profile "
            "dimensions; topics are the syllabus's eight sections. Paper 01 is "
            "published per group, so each topic's mcqCount is an estimate shared "
            "out in proportion to objective count. A migration named "
            "<nnn>_seed_it_structure.sql must agree with this file; "
            "backend/tools/check_syllabus.mjs asserts it."
        ),
        "papers": {
            "p1": {"items": 60, "perModule": {"1": 35, "2": 15, "3": 10}, "minutes": 75},
            "p2": {"marks": 90, "perModule": {"1": 35, "2": 30, "3": 25}, "minutes": 120},
            "sba": {"paper": "031", "marks": 50, "percentOfTotal": 25},
        },
        "modules": [],
    }

    for mod, (name, _) in MODULES.items():
        topics = []
        for s in sorted(SECTIONS):
            if SECTIONS[s][0] != mod:
                continue
            _, slug, title = SECTIONS[s]
            objs = by_section.get(s, [])
            topics.append({
                "number": s,
                "title": title,
                "slug": slug,
                "mcqCount": mcq.get(s, 0),
                "p2Marks": None,
                "p2Group": name,
            })
        spec["modules"].append({"number": mod, "title": name, "minHours": None, "topics": topics})

    os.makedirs("content/it/objectives", exist_ok=True)
    with io.open("content/it/syllabus.json", "w", encoding="utf-8", newline="\n") as f:
        json.dump(spec, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print("wrote content/it/syllabus.json")

    for s in sorted(SECTIONS):
        mod, slug, title = SECTIONS[s]
        objs = by_section.get(s, [])
        path = "content/it/objectives/m%d-%s.md" % (mod, slug)
        if os.path.exists(path):
            print("skip (exists)", path)
            continue
        flagged = sum(1 for o in objs if o["needs_review"])
        body = HEAD.format(module=mod, slug=slug, title=title, section=s,
                           n=len(objs), flagged=flagged)
        for o in objs:
            mark = "[?] " if o["needs_review"] else ""
            body += "%s  %s%s\n\n" % (o["code"], mark, o["statement"])
        with io.open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(body)
        print("wrote %s (%d objectives, %d flagged)" % (path, len(objs), flagged))


if __name__ == "__main__":
    main(sys.argv[1])
