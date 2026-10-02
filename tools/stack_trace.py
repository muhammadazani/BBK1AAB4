"""Membuat data JSON untuk widget stack diagram (assets/stackviz.js).

Pemakaian:
    python3 tools/stack_trace.py contoh.py > trace.json

Program dijalankan sungguhan dengan sys.settrace, sehingga frame, variabel,
dan keluaran di setiap langkah persis seperti yang dilakukan Python.
Kolom "note" berisi draf penjelasan otomatis; sunting sebelum dipakai.
Program tidak boleh memakai input().
"""
import io
import json
import sys
import types

FILENAME = "<stackviz>"


def _frames(frame):
    chain = []
    while frame is not None and frame.f_code.co_filename == FILENAME:
        chain.append(frame)
        frame = frame.f_back
    result = []
    for f in reversed(chain):
        name = "__main__" if f.f_code.co_name == "<module>" else f.f_code.co_name
        variables = [
            [k, "<fungsi>" if isinstance(v, types.FunctionType) else repr(v)]
            for k, v in f.f_locals.items()
            if not k.startswith("__")
        ]
        result.append({"name": name, "vars": variables})
    return result


def trace(source):
    out = io.StringIO()
    steps = [{"line": None, "frames": [{"name": "__main__", "vars": []}],
              "out": "", "note": "Program belum berjalan. Tekan **Lanjut**."}]
    pending = [None]      # baris terakhir yang dijalankan, per frame
    depth = [0]

    def emit(frame, line, note, ret=None):
        frames = _frames(frame)
        if ret is not None:
            frames[-1]["ret"] = ret
        steps.append({"line": line, "frames": frames,
                      "out": out.getvalue(), "note": note})

    def tracer(frame, event, arg):
        if frame.f_code.co_filename != FILENAME:
            return None
        name = frame.f_code.co_name
        if event == "call":
            depth[0] += 1
            if depth[0] > 1:
                caller_line = pending[-1]
                params = ", ".join(f"`{k} ← {v}`" for k, v in _frames(frame)[-1]["vars"])
                emit(frame, caller_line,
                     f"Baris {caller_line} memanggil `{name}`. Frame baru dibuat"
                     + (f"; argumen diikat ke parameter: {params}." if params else "."))
            pending.append(None)
        elif event == "line":
            if pending[-1] is not None:
                emit(frame, pending[-1], f"Baris {pending[-1]} dijalankan.")
            pending[-1] = frame.f_lineno
        elif event == "return":
            depth[0] -= 1
            line = pending.pop()
            if depth[0] > 0:
                emit(frame, line, f"Baris {line} dijalankan. `{name}` selesai dan "
                     f"mengembalikan `{arg!r}`; frame-nya akan dibuang.", ret=repr(arg))
            else:
                emit(frame, line, f"Baris {line} dijalankan. Program selesai.")
        return tracer

    globals_ = {"__name__": "__main__"}
    stdout = sys.stdout
    sys.stdout = out
    sys.settrace(tracer)
    try:
        exec(compile(source, FILENAME, "exec"), globals_)
    finally:
        sys.settrace(None)
        sys.stdout = stdout
    return {"code": source.rstrip("\n").split("\n"), "steps": steps}


if __name__ == "__main__":
    with open(sys.argv[1], encoding="utf-8") as f:
        print(json.dumps(trace(f.read()), ensure_ascii=False, indent=1))
