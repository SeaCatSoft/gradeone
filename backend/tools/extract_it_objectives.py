"""Pull specific objectives out of the CXC Information Technology syllabus PDF.

The IT syllabus prints two columns, SPECIFIC OBJECTIVES on the left and CONTENT
on the right. Splitting those columns out of `pdftotext -layout` output does not
work here: on most pages the columns are not separated by a blank run on every
line, so the CONTENT text bleeds into the objectives.

`pdftotext -raw` avoids the problem entirely. It emits text in reading order,
so each objective's wrapped lines arrive together, followed by its content
block:

    4. explain how the major hardware
    components of a computer system
    interrelate;
    Input processing output storage (IPOS) cycle.

An objective therefore runs from its "N." line until the accumulated text ends
with a terminator (";", "." or "and,"); everything after that, up to the next
numbered line, is the CONTENT column and is dropped.

Two other traps, both of which silently lose objectives if ignored:

* Objective numbers restart in every SECTION, so codes are built as
  "<section>.<number>" -- 5.3 is the third objective of Section 5.
* Each section also prints GENERAL OBJECTIVES and a numbered list of suggested
  teaching activities, numbered exactly like specific objectives. Capture is
  switched on only between the SPECIFIC OBJECTIVES header and whatever ends
  that block.

`needs_review` flags generously: a false flag costs one glance at the printed
syllabus, a missed one ships a broken objective that every lesson beneath it
inherits.

    pdftotext -raw backend/syllabus/IT.pdf backend/syllabus/it_raw.txt
    python backend/tools/extract_it_objectives.py backend/syllabus/it_raw.txt out.json
"""
import re, sys, json
from collections import Counter

SECTION = re.compile(r"^\s*SECTION\s+(\d)\s*:\s*(.+?)\s*(?:\(cont'd\))?\s*$")
OBJ = re.compile(r"^\s*(\d{1,2})\.\s+(\S.*)$")
HEADING = re.compile(r"^\s*[A-Z][A-Z \-/&(),'\.]{6,}$")
NOISE = re.compile(
    r"CXC \d+/G/SYLL|www\.cxc\.org|^\s*SPECIFIC OBJECTIVES|^\s*CONTENT\s*$"
    r"|Students should be able to|^\s*\d+\s*$"
)

ON = re.compile(r"^\s*SPECIFIC OBJECTIVES")
OFF = re.compile(r"^\s*(GENERAL OBJECTIVES|Suggested Teaching|SUGGESTED|RESOURCES)")
END = re.compile(r"GUIDELINES FOR THE CONDUCT OF THE SCHOOL-BASED")

# An objective is complete once its text ends like this.
DONE = re.compile(r"(;|\.|and,|or,)\s*$")


def needs_review(s):
    """Flag anything that looks truncated, merged or mangled."""
    return bool(
        len(s) < 15
        or not DONE.search(s)
        or re.search(r"\b(and|or|the|of|to|a|for|with|in)\s*$", s, re.I)
        or re.search(r"\([a-c]\)", s)          # picked up a content list
        or s[0].isupper() and not s.startswith(("Manipulate", "Use", "Create"))
    )


def extract(path):
    text = open(path, encoding="utf-8", errors="replace").read()
    # Drop the table of contents, whose entries carry dot leaders.
    text = "\n".join(l for l in text.split("\n") if not re.search(r"\.{5,}", l))
    ends = list(END.finditer(text))
    if ends:
        text = text[: ends[-1].start()]

    rows, cur = [], None
    section, heading, capturing = None, None, False
    names = {}

    def close():
        nonlocal cur
        if cur:
            rows.append(cur)
            cur = None

    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            continue

        m = SECTION.match(line)
        if m:
            num = int(m.group(1))
            name = re.sub(r"\s*\(cont'd\)\s*$", "", m.group(2)).strip()
            if len(name) > len(names.get(num, "")):
                names[num] = name        # titles wrap; keep the longest seen
            section, heading = num, None
            close()
            # Capture is NOT switched off here. A continuation page repeats the
            # section heading but not always the SPECIFIC OBJECTIVES header, and
            # switching off would drop that page's objectives. A new section
            # opens with GENERAL OBJECTIVES, which switches capture off anyway.
            continue

        if ON.match(line):
            capturing = True             # cur stays open across page breaks
            continue
        if OFF.match(line):
            close()
            capturing = False
            continue
        if NOISE.search(line):
            continue
        if section is None or not capturing:
            continue

        m = OBJ.match(line)
        if m:
            close()
            cur = {
                "section": section,
                "heading": heading,
                "code": "%d.%s" % (section, m.group(1)),
                "statement": m.group(2).strip(),
            }
            if DONE.search(cur["statement"]):
                close()
            continue

        if cur:
            # Still inside the objective: keep wrapping until it terminates.
            cur["statement"] += " " + line
            if DONE.search(cur["statement"]):
                close()
            continue

        if HEADING.match(line):
            heading = re.sub(r"\s*\(cont'd\)\s*$", "", line)

    close()

    seen, clean = set(), []
    for r in rows:
        s = re.sub(r"\s+", " ", r["statement"]).strip()
        # -raw sometimes puts an objective and the start of its CONTENT column
        # on one line, so keep only as far as the first terminator.
        cut = re.search(r"[;.](?=\s|$)", s)
        if cut:
            s = s[: cut.end()]
        s = re.sub(r"\s*;?\s*(and|or),?$", "", s).rstrip(";").strip()
        # Words hyphenated across a line break come back as "high- level".
        s = re.sub(r"(\w)-\s+([a-z])", r"\1-\2", s)
        if r["code"] in seen or len(s) < 6:
            continue
        seen.add(r["code"])
        r["statement"] = s
        r["needs_review"] = needs_review(r["statement"] + ";")
        r["sectionName"] = names.get(r["section"], "")
        clean.append(r)
    # Page order is not always numeric order: an objective can be printed on a
    # later page than its successor when the CONTENT column runs long.
    clean.sort(key=lambda r: (r["section"], int(r["code"].split(".")[1])))
    return clean


if __name__ == "__main__":
    rows = extract(sys.argv[1])
    json.dump(rows, open(sys.argv[2], "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    flagged = sum(1 for r in rows if r["needs_review"])
    print("%d objectives, %d flagged for review (%d%%)"
          % (len(rows), flagged, round(100 * flagged / max(len(rows), 1))))
    for (sec, name), n in sorted(Counter((r["section"], r["sectionName"]) for r in rows).items()):
        print("  S%d  %3d  %s" % (sec, n, name))
