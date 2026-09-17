"""Turn extracted objectives into markdown review files -- once.

These files become the source of truth for the syllabus spine the moment they
are written, so this refuses to overwrite an existing one. Re-running after a
review pass must never silently discard corrections.
"""
import json, os, sys, io

SLUG = {
 (1,"Number Theory and Computation"): "number-theory-computation",
 (1,"Consumer Arithmetic"): "consumer-arithmetic",
 (1,"Sets"): "sets",
 (1,"Measurement"): "measurement",
 (1,"Algebra 1"): "algebra-1",
 (1,"Introduction to Graphs"): "introduction-to-graphs",
 (2,"Statistics 1"): "statistics-1",
 (2,"Algebra 2"): "algebra-2",
 (2,"Relations, Functions and Graphs 1"): "relations-functions-graphs-1",
 (2,"Geometry and Trigonometry 1"): "geometry-trigonometry-1",
 (2,"Vectors and Matrices 1"): "vectors-matrices-1",
 (3,"Statistics 2"): "statistics-2",
 (3,"Relations, Functions and Graphs 2"): "relations-functions-graphs-2",
 (3,"Geometry and Trigonometry 2"): "geometry-trigonometry-2",
 (3,"Vectors and Matrices 2"): "vectors-matrices-2",
}

HEAD = r"""---
subject: MATH
module: {module}
topic: {slug}
---

# {title}

Module {module} - {title}. {n} specific objectives, {flagged} needing review.

<!--
HOW TO REVIEW THIS FILE

Lines marked [?] lost characters when the syllabus PDF was read by machine --
usually mathematical notation, which is set in symbol fonts that do not
survive text extraction. A few are over-captured instead and have picked up
stray text from the next column.

Check each [?] line against the printed syllabus, correct the text, then
delete the [?] marker. Write maths as LaTeX between dollar signs, for
example $a^n$ or $n \in \mathbb{{Z}}$.

Leave unmarked lines alone unless you spot something wrong. Do not renumber
anything -- the codes are how every lesson, flashcard and question in the
platform finds its objective. An objective still carrying [?] will import,
but stays hidden from students until the marker is gone.
-->

"""

def main(src, outdir):
    rows = json.load(open(src, encoding="utf-8"))
    groups = {}
    for r in rows:
        groups.setdefault((r["module"], r["topic"]), []).append(r)

    written, skipped = 0, 0
    for (mod, topic), objs in sorted(groups.items()):
        slug = SLUG.get((mod, topic))
        if not slug:
            print("  ! no slug for M%s %s" % (mod, topic)); continue
        path = os.path.join(outdir, "m%d-%s.md" % (mod, slug))
        if os.path.exists(path):
            skipped += 1; continue
        objs.sort(key=lambda o: [int(x) for x in o["code"].split(".")])
        flagged = sum(1 for o in objs if o["needs_review"])
        body = HEAD.format(module=mod, slug=slug, title=topic,
                           n=len(objs), flagged=flagged)
        for o in objs:
            mark = "[?] " if o["needs_review"] else ""
            body += "%s  %s%s\n\n" % (o["code"], mark, o["statement"])
        os.makedirs(outdir, exist_ok=True)
        io.open(path, "w", encoding="utf-8", newline="\n").write(body)
        written += 1
    print("%d files written, %d already existed (left untouched)" % (written, skipped))

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
