"""Menambahkan trace table ke satu frame pada data stackviz (assets/stackviz.js).

Pemakaian:
    python3 tools/loop_table.py trace.json spec.json > trace-dengan-tabel.json

trace.json adalah keluaran tools/stack_trace.py. spec.json menjelaskan loop-nya:

    {
      "frame": "total_hujan",          # nama frame yang memuat loop
      "header": 4,                     # nomor baris for/while
      "kind": "while",                 # "for" atau "while"
      "cols": [
        {"var": "hujan", "at": "header"},          # diisi saat kondisi diperiksa
        {"expr": "hujan != -1", "at": "header"},   # kondisi while
        {"expr": "hujan != -9", "at": 5},          # diisi saat baris 5 dijalankan
        {"var": "total"}                           # diisi saat nilainya berubah
      ]
    }

Untuk "for", kolom pertama harus variabel perulangan.

Aturan tabel: satu baris per putaran, ditambah baris (awal) berisi nilai sebelum
loop. Sel diisi dari kiri ke kanan saat barisnya dijalankan. Saat putaran selesai,
variabel yang tidak berubah disalin dari baris atasnya (ditandai "tetap").
Pada while, pemeriksaan kondisi yang False menjadi baris "berhenti".
"""
import ast
import copy
import json
import sys


def _value(text):
    try:
        return ast.literal_eval(text)
    except (ValueError, SyntaxError):
        return text


def _eval(expr, vals):
    return repr(eval(expr, {}, {k: _value(v) for k, v in vals.items()}))


def _assigns(src, name):
    """True jika baris kode memberi nilai ke variabel name (name = ...)."""
    try:
        node = ast.parse(src.strip()).body[0]
    except (SyntaxError, IndexError):
        return False
    targets = node.targets if isinstance(node, ast.Assign) else \
        [node.target] if isinstance(node, ast.AugAssign) else []
    return any(isinstance(x, ast.Name) and x.id == name for x in targets)


def _title(col):
    return col.get("var") or col["expr"]


def add_table(trace, spec):
    trace = copy.deepcopy(trace)
    cols = spec["cols"]
    header, kind = spec["header"], spec["kind"]
    var_cols = [c["var"] for c in cols if "var" in c]
    rows = []            # baris 0 = (awal)
    started = stopped = False
    foot = None
    prev_vals = None

    def close_row():
        if len(rows) < 2 or rows[-1]["cls"] == "stop":
            return
        for ci, c in enumerate(cols):
            if rows[-1]["cells"][ci] is None and "var" in c and "at" not in c:
                rows[-1]["cells"][ci] = {"v": vals.get(c["var"], "–"), "carry": True}

    for step in trace["steps"]:
        fi = next((k for k, f in enumerate(step["frames"]) if f["name"] == spec["frame"]), None)
        if fi is None:
            prev_vals = None
            continue
        frame = step["frames"][fi]
        vals = dict(frame["vars"])
        line = step["line"]
        cur = None

        if not started and line != header:
            rows[:1] = [{"label": "(awal)", "cls": "init",
                         "cells": [vals.get(c["var"], "–") if "var" in c else "–" for c in cols]}]
            changed = [ci for ci, c in enumerate(cols)
                       if "var" in c and prev_vals is not None
                       and vals.get(c["var"]) != prev_vals.get(c["var"]) and c["var"] in vals]
            cur = [0, changed[0]] if changed else None
        elif line == header and not stopped:
            if not rows:
                rows.append({"label": "(awal)", "cls": "init",
                             "cells": [vals.get(c["var"], "–") if "var" in c else "–" for c in cols]})
            started = True
            if kind == "for":
                loop_var = cols[0]["var"]
                fresh = prev_vals is None or vals.get(loop_var) != prev_vals.get(loop_var) \
                    or len(rows) == 1
                if fresh:
                    close_row()
                    rows.append({"label": str(len(rows)), "cls": "",
                                 "cells": [vals[loop_var]] + [None] * (len(cols) - 1)})  # type: ignore
                    cur = [len(rows) - 1, 0]
                else:
                    close_row()
                    stopped = True
                    foot = f"Barisan habis: loop selesai setelah {len(rows) - 1} putaran."
            else:
                close_row()
                cells: list = [None] * len(cols)
                ok = True
                for ci, c in enumerate(cols):
                    if c.get("at") == "header":
                        if "var" in c:
                            cells[ci] = vals.get(c["var"], "–")
                        else:
                            cells[ci] = _eval(c["expr"], vals)
                            ok = cells[ci] == "True"
                            cur = None
                if ok:
                    rows.append({"label": str(len(rows)), "cls": "", "cells": cells})
                else:
                    rows.append({"label": "berhenti", "cls": "stop",
                                 "cells": [x if x is not None else "" for x in cells]})
                    stopped = True
                    foot = f"Kondisi False: loop selesai setelah {len(rows) - 2} putaran."
                cond = next(ci for ci, c in enumerate(cols) if "expr" in c and c.get("at") == "header")
                cur = [len(rows) - 1, cond]
        elif started and not stopped and line is not None:
            row = rows[-1]
            for ci, c in enumerate(cols):
                if c.get("at") == line and "expr" in c:
                    row["cells"][ci] = _eval(c["expr"], vals)
                    cur = [len(rows) - 1, ci]
                elif "var" in c and "at" not in c and _assigns(trace["code"][line - 1], c["var"]):
                    row["cells"][ci] = vals[c["var"]]
                    cur = [len(rows) - 1, ci]

        # nilai yang sudah berubah di memori tetapi belum tercatat di tabel
        last = rows[-1]["cells"] if rows else []
        shown = {c["var"]: last[ci] for ci, c in enumerate(cols) if "var" in c and ci < len(last)}
        pending = [v for v in var_cols if v in vals and started and not stopped
                   and isinstance(shown.get(v), str) and shown[v] != vals[v]
                   and any(c.get("var") == v and c.get("at") == "header" for c in cols)]

        frame["table"] = {
            "cols": [_title(c) for c in cols],
            "rows": copy.deepcopy(rows),
            "cur": cur,
            "foot": foot,
        }
        frame["vars"] = [v for v in frame["vars"] if v[0] not in var_cols or v[0] in pending]
        if pending:
            frame["pending"] = pending
        prev_vals = vals
    return trace


if __name__ == "__main__":
    with open(sys.argv[1], encoding="utf-8") as f:
        trace = json.load(f)
    with open(sys.argv[2], encoding="utf-8") as f:
        spec = json.load(f)
    print(json.dumps(add_table(trace, spec), ensure_ascii=False, separators=(",", ":")))
