/* Stack diagram interaktif.
 *
 * Pemakaian di .qmd:
 *   <div class="stackviz" data-trace="id-json" data-title="Judul"></div>
 *   <script type="application/json" id="id-json">{ "code": [...], "steps": [...] }</script>
 *
 * Setiap langkah: { line, frames: [{ name, vars: [[nama, nilai]], ret? }], out, note }.
 * line = baris yang baru dijalankan (null sebelum program mulai).
 * ret  = nilai kembali; frame dengan ret ditampilkan sebagai "selesai".
 * note boleh memuat `kode` dan **tebal**.
 */
(function () {
  "use strict";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function tutorUrl(code) {
    return "https://pythontutor.com/visualize.html#code=" +
      encodeURIComponent(code.join("\n")) + "&mode=edit&py=3";
  }

  function build(root) {
    var src = document.getElementById(root.dataset.trace);
    if (!src) return;
    var data = JSON.parse(src.textContent);
    var steps = data.steps, n = steps.length - 1, i = 0;

    root.setAttribute("tabindex", "0");
    root.setAttribute("role", "group");
    root.setAttribute("aria-label", "Visualisasi stack diagram: " + (root.dataset.title || ""));

    var head = el("div", "sv-head");
    head.appendChild(el("span", "sv-title", esc(root.dataset.title || "Telusuri langkah demi langkah")));
    var counter = el("span", "sv-counter");
    head.appendChild(counter);
    root.appendChild(head);

    var grid = el("div", "sv-grid");
    var left = el("div", "sv-left");
    var right = el("div", "sv-right");
    grid.appendChild(left);
    grid.appendChild(right);
    root.appendChild(grid);

    left.appendChild(el("div", "sv-label", "Kode"));
    var codeBox = el("pre", "sv-code");
    var lineEls = data.code.map(function (text, k) {
      var row = el("span", "sv-line");
      row.appendChild(el("span", "sv-ln", String(k + 1)));
      row.appendChild(el("span", "sv-src", esc(text) || " "));
      codeBox.appendChild(row);
      return row;
    });
    left.appendChild(codeBox);

    left.appendChild(el("div", "sv-label", "Keluaran"));
    var outBox = el("pre", "sv-out");
    left.appendChild(outBox);

    right.appendChild(el("div", "sv-label", "Stack (frame terbaru di bawah)"));
    var stackBox = el("div", "sv-stack");
    right.appendChild(stackBox);

    var note = el("div", "sv-note");
    note.setAttribute("aria-live", "polite");
    root.appendChild(note);

    var ctrl = el("div", "sv-ctrl");
    function btn(label, title, fn) {
      var b = el("button", "btn btn-sm btn-outline-primary", label);
      b.type = "button";
      b.title = title;
      b.setAttribute("aria-label", title);
      b.addEventListener("click", fn);
      ctrl.appendChild(b);
      return b;
    }
    var bFirst = btn("&#x23EE;", "Ke awal", function () { go(0); });
    var bPrev = btn("&#x25C0; Kembali", "Langkah sebelumnya", function () { go(i - 1); });
    var bNext = btn("Lanjut &#x25B6;", "Langkah berikutnya", function () { go(i + 1); });
    var bLast = btn("&#x23ED;", "Ke akhir", function () { go(n); });
    bNext.classList.replace("btn-outline-primary", "btn-primary");
    var slider = el("input", "form-range sv-slider");
    slider.type = "range";
    slider.min = 0;
    slider.max = n;
    slider.setAttribute("aria-label", "Pilih langkah");
    slider.addEventListener("input", function () { go(+slider.value); });
    ctrl.appendChild(slider);
    root.appendChild(ctrl);

    var foot = el("div", "sv-foot");
    foot.innerHTML = 'Ingin mencoba kode sendiri? <a href="' + tutorUrl(data.code) +
      '" target="_blank" rel="noopener">Buka di Python Tutor &#x2197;</a>';
    root.appendChild(foot);

    root.addEventListener("keydown", function (e) {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "ArrowRight") { go(i + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { go(i - 1); e.preventDefault(); }
      else if (e.key === "Home") { go(0); e.preventDefault(); }
      else if (e.key === "End") { go(n); e.preventDefault(); }
    });

    function valueOf(step, frameIdx, name) {
      var f = step && step.frames[frameIdx];
      if (!f) return undefined;
      for (var k = 0; k < f.vars.length; k++) if (f.vars[k][0] === name) return f.vars[k][1];
      return undefined;
    }

    function render(prevIdx) {
      var s = steps[i], prev = prevIdx != null ? steps[prevIdx] : null;
      var forward = prevIdx != null && prevIdx === i - 1;

      counter.textContent = "Langkah " + i + " / " + n;
      lineEls.forEach(function (row, k) {
        row.classList.toggle("sv-current", s.line === k + 1);
      });
      outBox.textContent = s.out || "";
      outBox.classList.toggle("sv-empty", !s.out);
      note.innerHTML = inline(s.note || "");

      stackBox.innerHTML = "";
      var top = s.frames.length - 1;
      s.frames.forEach(function (f, fi) {
        var isNewFrame = forward && (!prev.frames[fi] || prev.frames[fi].name !== f.name);
        var box = el("div", "sv-frame" + (fi === top ? " sv-active" : "") +
          (f.ret != null ? " sv-done" : "") + (isNewFrame ? " sv-enter" : ""));
        var title = fi === 0 ? "__main__ (global)" : f.name;
        if (f.ret != null) title += " · selesai";
        box.appendChild(el("div", "sv-fname", esc(title)));
        if (!f.vars.length && f.ret == null) {
          box.appendChild(el("div", "sv-novar", "(belum ada variabel)"));
        }
        f.vars.forEach(function (v) {
          var changed = forward && valueOf(prev, fi, v[0]) !== v[1];
          var isFn = v[1] === "<fungsi>";
          var row = el("div", "sv-var" + (changed ? " sv-changed" : ""));
          row.appendChild(el("span", "sv-vname", esc(v[0])));
          row.appendChild(el("span", "sv-arrow", "&rarr;"));
          row.appendChild(el("span", "sv-val" + (isFn ? " sv-fn" : ""), isFn ? "fungsi" : esc(v[1])));
          box.appendChild(row);
        });
        if (f.ret != null) {
          var r = el("div", "sv-var sv-ret");
          r.appendChild(el("span", "sv-vname", "nilai kembali"));
          r.appendChild(el("span", "sv-arrow", "&rarr;"));
          r.appendChild(el("span", "sv-val", esc(f.ret)));
          box.appendChild(r);
        }
        stackBox.appendChild(box);
      });

      bFirst.disabled = bPrev.disabled = i === 0;
      bNext.disabled = bLast.disabled = i === n;
      slider.value = i;
    }

    function go(k) {
      k = Math.max(0, Math.min(n, k));
      if (k === i) return;
      var prev = i;
      i = k;
      render(prev);
    }

    render(null);
  }

  function init() {
    document.querySelectorAll(".stackviz").forEach(build);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
