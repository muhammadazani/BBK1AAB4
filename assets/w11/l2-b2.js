/* W11 l2-b2 animation, ported from W11L02-B2-ANIMASI-MOODLE-ID.html (W11 flipped module). Mount: <div id="kpl2b2-id"></div> */
(function(){
var ROOT = document.getElementById('kpl2b2-id');
if (!ROOT || ROOT.getAttribute('data-ready')) return;
ROOT.setAttribute('data-ready', '1');
var PAL_L = {"--bg": "#f7f6f2", "--card": "#ffffff", "--ink": "#1d1d1b", "--muted": "#6b6a64", "--line": "#d9d6cc", "--box": "#fff8e6", "--boxedge": "#c99a2e", "--arrow": "#2457a6", "--arrow2": "#b3261e", "--frame": "#eef3fb", "--hl": "#fff1b8", "--ok": "#1f7a4a", "--ask": "#fdecea", "--code": "#f2f0ea", "--tup": "#eef3fb", "--tupedge": "#5b6b84"}, PAL_D = {"--bg": "#17181a", "--card": "#212225", "--ink": "#ecebe6", "--muted": "#a3a29b", "--line": "#3a3b3f", "--box": "#33291a", "--boxedge": "#e0b04a", "--arrow": "#7fb0ff", "--arrow2": "#ff8a80", "--frame": "#1f2a3a", "--hl": "#4a4020", "--ok": "#6fd39c", "--ask": "#3a2222", "--code": "#2a2b2e", "--tup": "#1f2a3a", "--tupedge": "#9fb0cc"};
function kpDark(){ return document.body.classList.contains('quarto-dark'); }
var PAL = kpDark() ? PAL_D : PAL_L;
if (!document.getElementById('kpl2b2-id-css')) { var st = document.createElement('style'); st.id = 'kpl2b2-id-css'; st.textContent = '#kpl2b2-id{--bg:#f7f6f2; --card:#ffffff; --ink:#1d1d1b; --muted:#6b6a64; --line:#d9d6cc;\n  --box:#fff8e6; --boxedge:#c99a2e; --arrow:#2457a6; --arrow2:#b3261e; --frame:#eef3fb;\n  --hl:#fff1b8; --ok:#1f7a4a; --ask:#fdecea; --code:#f2f0ea;\n  --tup:#eef3fb; --tupedge:#5b6b84;}#kpl2b2-id,#kpl2b2-id *{box-sizing:border-box}#kpl2b2-id{margin:0;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.5;font-family:inherit}#kpl2b2-id .kp-main{max-width:960px;margin:0 auto;padding:16px}#kpl2b2-id .kp-title{font-size:1.25rem;margin:0 0 4px}#kpl2b2-id .sub{color:var(--muted);margin:0 0 12px;font-size:.95rem}#kpl2b2-id .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}#kpl2b2-id .tabs{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 12px}#kpl2b2-id button{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:8px;padding:6px 12px;cursor:pointer}#kpl2b2-id button:hover{border-color:var(--muted)}#kpl2b2-id button:disabled{opacity:.4;cursor:default}#kpl2b2-id .tabs button[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}#kpl2b2-id .kp-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:12px}#kpl2b2-id .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px;min-width:0}#kpl2b2-id pre{margin:0;font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 0;overflow-x:auto}#kpl2b2-id pre .ln{display:block;padding:0 12px;white-space:pre;border-left:4px solid transparent}#kpl2b2-id pre .ln.on{background:var(--hl);border-left-color:var(--boxedge)}#kpl2b2-id .lbl{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin:10px 0 4px}#kpl2b2-id .out{font:14px ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 12px;min-height:2.4em;white-space:pre}#kpl2b2-id svg{width:100%;max-width:480px;height:auto;display:block;margin:0 auto}#kpl2b2-id .note{margin-top:12px;padding:10px 12px;border-radius:8px;background:var(--code);min-height:5em}#kpl2b2-id .note.ask{background:var(--ask)}#kpl2b2-id .note b{font-weight:650}#kpl2b2-id .ctrl{display:flex;gap:8px;align-items:center;margin-top:12px;flex-wrap:wrap}#kpl2b2-id .ctrl .step{color:var(--muted);font-size:.9rem;margin-left:auto}#kpl2b2-id .key{margin-top:12px;font-weight:650}@media (max-width:720px){#kpl2b2-id .kp-grid{grid-template-columns:minmax(0,1fr)}}#kpl2b2-id{display:block;max-width:100%;border-radius:12px;text-align:left}#kpl2b2-id .kp-title{color:inherit;font-weight:650}#kpl2b2-id pre,#kpl2b2-id .out,#kpl2b2-id .note,#kpl2b2-id .lbl{color:inherit;border:0;box-shadow:none}#kpl2b2-id pre .ln{color:inherit}#kpl2b2-id svg{max-width:480px;width:100%;fill:none;margin:0 auto}#kpl2b2-id button{line-height:1.4;box-shadow:none;text-transform:none}'; st.textContent += "body.quarto-dark #kpl2b2-id{--bg:#17181a;--card:#212225;--ink:#ecebe6;--muted:#a3a29b;--line:#3a3b3f;--box:#33291a;--boxedge:#e0b04a;--arrow:#7fb0ff;--arrow2:#ff8a80;--frame:#1f2a3a;--hl:#4a4020;--ok:#6fd39c;--ask:#3a2222;--code:#2a2b2e;--tup:#1f2a3a;--tupedge:#9fb0cc}"; document.head.appendChild(st); }
ROOT.style.padding = '12px';
ROOT.innerHTML = '<div class="kp-main"><div class="top"><div><div class="kp-title" data-k="title"></div><p class="sub" data-k="sub"></p></div><button data-k="lang" type="button"></button></div><div class="tabs" data-k="tabs" role="tablist"></div><div class="kp-grid"><div class="card"><div class="lbl" data-k="lblCode"></div><pre data-k="code"></pre><div class="lbl" data-k="lblOut"></div><div class="out" data-k="out"></div></div><div class="card"><svg data-k="svg" viewBox="0 0 500 330" role="img" aria-label="diagram"></svg><div class="note" data-k="note" aria-live="polite"></div><div class="ctrl"><button data-k="prev" type="button"></button><button data-k="next" type="button"></button><button data-k="reset" type="button"></button><span class="step" data-k="step"></span></div></div></div></div>';
function $(k){ return ROOT.querySelector('[data-k="' + k + '"]'); }

"use strict";
var LANG = "id";

var UI = {
  id:{title:"Tabel: List Berisi Baris", sub:"Tabel adalah list berisi baris. Tekan Berikutnya untuk menjalankan kode baris demi baris.",
      code:"Kode", out:"Keluaran", prev:"◀ Sebelumnya", next:"Berikutnya ▶", reset:"Ulang", lang:"English",
      step:"Langkah %a dari %b", glob:"Nama (global)", frame:"Fungsi %f", empty:"kosong", gone:"tanpa panah"},
  en:{title:"Tables: Lists of Rows", sub:"A table is a list of rows. Press Next to run the code line by line.",
      code:"Code", out:"Output", prev:"◀ Back", next:"Next ▶", reset:"Restart", lang:"Bahasa Indonesia",
      step:"Step %a of %b", glob:"Names (global)", frame:"Function %f", empty:"empty", gone:"no arrow"}
};
var W = {
  id:{tg:"tugas", h:"hasil", br:"baris", ni:"nilai", k:"kursi"},
  en:{tg:"tasks", h:"result", br:"row", ni:"mark", k:"seats"}
};

/* A step: line (index into code, -1 none), boxes {id:{v:[...], p:row, ch:changedSlot, dead:bool}},
   vars [{n:name, to:boxId, f:inFrame}], frame (function name or null), out, note, ask */
function scenes(L){
  var w = W[L], tg = w.tg, h = w.h, br = w.br, ni = w.ni, k = w.k, I = (L === "id");

  function st(line, boxes, vars, frame, note, out, ask){ return {line:line, boxes:boxes, vars:vars, frame:frame, note:note, out:out || "", ask:!!ask}; }
  function S(t, code, steps, key, h, frameLayout){ var o = {t:t, code:code, steps:steps, key:key, h:h}; if (frameLayout){ o.fy = 140; o.fs = 44; } return o; }

  var ROWS = [[70, 80], [90, 60], [85, 95]];
  function tab(at, rowAt, hasil, ch){
    var o = {O:{v:["", "", ""], vert:true, x:190, y:28, sw:40, refs:["R0", "R1", "R2"]}};
    ROWS.forEach(function(r, i){ o["R" + i] = {v:r, x:300, y:16 + i * 62}; });
    if (at !== undefined) o.O.at = at;
    if (rowAt) o["R" + rowAt[0]].at = rowAt[1];
    if (hasil) { o.H = {v:hasil, x:190, y:226}; if (ch !== undefined) o.H.ch = ch; }
    return o;
  }
  var TG = tg + " = [[70, 80], [90, 60], [85, 95]]";
  var V = function(extra){ return [{n:tg, to:"O"}].concat(extra || []); };
  var outside = [TG, h + " = []", "total = 0", "for " + br + " in " + tg + ":", "    for " + ni + " in " + br + ":", "        total = total + " + ni, "    " + h + ".append(total)", "print(" + h + ")"];
  var inside = [TG, h + " = []", "for " + br + " in " + tg + ":", "    total = 0", "    for " + ni + " in " + br + ":", "        total = total + " + ni, "    " + h + ".append(total)", "print(" + h + ")"];
  var HV = function(tot, row){ var v = V([{n:h, to:"H"}, {n:"total", val:tot}]); if (row !== undefined) v.push({n:br, to:"R" + row}); return v; };
  function rows2(shared, n){
    var o = {O:{v:[], vert:true, x:190, y:30, sw:40, refs:[]}};
    for (var i = 0; i < n; i++){ o.O.v.push(""); o.O.refs.push(shared ? "R" : "R" + i); if (!shared) o["R" + i] = {v:[0, 0, 0], x:300, y:20 + i * 62}; }
    if (shared) o.R = {v:[0, 0, 0], x:300, y:52};
    return o;
  }
  var s4a = rows2(true, 2), s4b = rows2(true, 2); s4b.R.v = [0, 1, 0]; s4b.R.ch = 1;
  var s5a = {O:{v:[], vert:true, x:190, y:30, sw:40, refs:[]}}, s5b = rows2(false, 1), s5c = rows2(false, 2), s5d = rows2(false, 2);
  s5d.R0.v = [0, 1, 0]; s5d.R0.ch = 1;
  return [
  S(I ? "1 · Baris dan sel" : "1 · Rows and cells",
    [TG, "print(" + tg + "[1])", "print(" + tg + "[1][0])", "print(len(" + tg + "), len(" + tg + "[0]))"], [
    st(0, tab(), V(), null, I ? "Tabel adalah <b>kotak luar</b> (lemari) yang slotnya berisi panah ke <b>kotak-kotak baris</b>." : "A table is an <b>outer box</b> (a cupboard) whose slots hold arrows to <b>row boxes</b>."),
    st(1, tab(1, [1, "all"]), V(), null, I ? "<b>" + tg + "[1]</b>: ikuti panah di slot 1. Itu baris kedua." : "<b>" + tg + "[1]</b>: follow the arrow in slot 1. That is the second row.", "[90, 60]"),
    st(2, tab(1, [1, 0]), V(), null, I ? "<b>" + tg + "[1][0]</b>: <b>baris dulu</b> (1), <b>lalu kolom</b> (0)." : "<b>" + tg + "[1][0]</b>: <b>row first</b> (1), <b>then column</b> (0).", "[90, 60]\n90"),
    st(3, tab(), V(), null, I ? "<b>len(" + tg + ")</b> = banyak baris. <b>len(" + tg + "[0])</b> = banyak kolom." : "<b>len(" + tg + ")</b> = the number of rows. <b>len(" + tg + "[0])</b> = the number of columns.", "[90, 60]\n90\n3 2")
  ], I ? "tabel[i] adalah baris, tabel[i][j] satu sel: baris dulu, lalu kolom." : "table[i] is a row, table[i][j] one cell: row first, then column.", 210),

  S(I ? "2 · Penampung di luar" : "2 · Holder outside", outside, [
    st(2, tab(undefined, null, []), HV(0), null, I ? "Kita ingin total setiap mahasiswa. <b>total = 0</b> ditulis <b>sekali</b>, sebelum loop luar." : "We want each student's total. <b>total = 0</b> is written <b>once</b>, before the outer loop."),
    st(6, tab(0, [0, "all"], [150], 0), HV(150, 0), null, I ? "Baris 1: 70 + 80, total = 150, lalu append." : "Row 1: 70 + 80, total = 150, then append."),
    st(4, tab(1, [1, "all"], [150]), HV(150, 1), null, I ? "<b>Tebak dulu:</b> baris 2 mulai dengan total berapa? Apa isi <b>" + h + "</b> di akhir?" : "<b>Predict first:</b> what total does row 2 start with? What is in <b>" + h + "</b> at the end?", "", true),
    st(6, tab(1, [1, "all"], [150, 300], 1), HV(300, 1), null, I ? "total tidak kembali ke 0: 150 + 90 + 60 = <b>300</b>." : "total never goes back to 0: 150 + 90 + 60 = <b>300</b>."),
    st(6, tab(2, [2, "all"], [150, 300, 480], 2), HV(480, 2), null, "300 + 85 + 95 = <b>480</b>."),
    st(7, tab(undefined, null, [150, 300, 480]), HV(480), null, I ? "Hasilnya total berjalan, bukan total per baris." : "The result is a running total, not a total per row.", "[150, 300, 480]")
  ], I ? "Penampung yang ditulis sebelum loop luar tidak pernah di-reset." : "A holder written before the outer loop is never reset.", 300),

  S(I ? "3 · Penampung di dalam" : "3 · Holder inside", inside, [
    st(1, tab(undefined, null, []), V([{n:h, to:"H"}]), null, I ? "Sekarang <b>total = 0</b> pindah ke dalam loop baris." : "Now <b>total = 0</b> moves inside the row loop."),
    st(3, tab(0, [0, "all"], []), HV(0, 0), null, I ? "Baris 1: total di-reset ke 0." : "Row 1: total is reset to 0."),
    st(6, tab(0, [0, "all"], [150], 0), HV(150, 0), null, "70 + 80 = 150, append."),
    st(3, tab(1, [1, "all"], [150]), HV(0, 1), null, I ? "Baris baru, <b>total kembali 0</b>." : "A new row: <b>total goes back to 0</b>."),
    st(6, tab(1, [1, "all"], [150, 150], 1), HV(150, 1), null, "90 + 60 = 150, append."),
    st(6, tab(2, [2, "all"], [150, 150, 180], 2), HV(180, 2), null, "0 + 85 + 95 = 180, append."),
    st(7, tab(undefined, null, [150, 150, 180]), HV(180), null, I ? "Satu total untuk setiap baris." : "One total for every row.", "[150, 150, 180]")
  ], I ? "Untuk satu hasil per baris, penampung di-reset di setiap baris." : "For one result per row, reset the holder for every row.", 300),

  S(I ? "4 · [[0] * 3] * 2" : "4 · [[0] * 3] * 2",
    [k + " = [[0] * 3] * 2", k + "[0][1] = 1", "print(" + k + ")"], [
    st(0, s4a, [{n:k, to:"O"}], null, I ? "<b>[0] * 3</b> membuat <b>satu</b> baris. <b>* 2</b> menyalin <b>panahnya</b>, bukan barisnya: dua slot, satu kotak baris." : "<b>[0] * 3</b> makes <b>one</b> row. <b>* 2</b> copies the <b>arrow</b>, not the row: two slots, one row box."),
    st(1, s4a, [{n:k, to:"O"}], null, I ? "<b>Tebak dulu:</b> setelah <b>" + k + "[0][1] = 1</b>, apa yang dicetak?" : "<b>Predict first:</b> after <b>" + k + "[0][1] = 1</b>, what is printed?", "", true),
    st(1, s4b, [{n:k, to:"O"}], null, I ? "Hanya ada satu kotak baris, jadi perubahannya terlihat lewat kedua slot." : "There is only one row box, so the change shows through both slots."),
    st(2, s4b, [{n:k, to:"O"}], null, I ? "Kedua baris ikut terisi." : "Both rows show the change.", "[[0, 1, 0], [0, 1, 0]]")
  ], I ? "[[0] * n] * m membuat satu baris dengan banyak panah." : "[[0] * n] * m makes one row with many arrows.", 150),

  S(I ? "5 · Cara yang benar" : "5 · The right way",
    [k + " = []", "for i in range(2):", "    " + k + ".append([0] * 3)", k + "[0][1] = 1", "print(" + k + ")"], [
    st(0, s5a, [{n:k, to:"O"}], null, I ? "Mulai dari list luar yang kosong." : "Start from an empty outer list."),
    st(2, s5b, [{n:k, to:"O"}, {n:"i", val:0}], null, I ? "Setiap putaran, <b>[0] * 3</b> membuat <b>kotak baris baru</b>, lalu di-append." : "Each round, <b>[0] * 3</b> makes a <b>new row box</b>, then appends it."),
    st(2, s5c, [{n:k, to:"O"}, {n:"i", val:1}], null, I ? "Dua baris, dua kotak yang berbeda." : "Two rows, two different boxes."),
    st(3, s5d, [{n:k, to:"O"}], null, I ? "Sekarang hanya baris pertama yang berubah." : "Now only the first row changes."),
    st(4, s5d, [{n:k, to:"O"}], null, I ? "Yang dicetak: <b>[[0, 1, 0], [0, 0, 0]]</b>." : "Printed: <b>[[0, 1, 0], [0, 0, 0]]</b>.", "[[0, 1, 0], [0, 0, 0]]")
  ], I ? "Untuk tabel baru, buat setiap baris di dalam loop: setiap append membuat kotak baris sendiri." : "For a new table, build every row inside a loop: each append makes its own row box.", 150)
  ];
}

/* ---------- drawing ---------- */
var NS = "http://www.w3.org/2000/svg";
var svg = $("svg");
var SLOT = 52, BH = 44, BX = 270, ROWY = [40, 150];
var GX = 20, GY0 = 62, GSTEP = 52, FY0 = 236;
var cur = {sc:0, st:0}, SC = [], live = {}, tw = null;

function el(tag, attrs, parent){
  var e = document.createElementNS(NS, tag);
  for (var a in attrs) e.setAttribute(a, attrs[a]);
  if (parent) parent.appendChild(e);
  return e;
}
function css(v){ return PAL[v]; }

function layout(step){
  var g = 0, f = 0, vars = [], sc = SC[cur.sc], fy = sc.fy || FY0, fs = sc.fs || GSTEP;
  step.vars.forEach(function(v){
    var y = v.f ? fy + 30 + (f++) * fs : GY0 + (g++) * GSTEP;
    vars.push({key:(v.f ? "f:" : "g:") + v.n, n:v.n, f:!!v.f, x:GX + 96, y:y, to:v.to, val:v.val});
  });
  return vars;
}
function boxGeo(b){
  var sw = b.sw || SLOT, x = (b.x !== undefined) ? b.x : BX, y = (b.y !== undefined) ? b.y : ROWY[b.p], n = b.v.length;
  return {x:x, y:y, sw:sw, w: b.vert ? sw : (n ? n * sw : SLOT * 1.4), h: b.vert ? Math.max(1, n) * BH : BH};
}
function boxAnchor(step, id){
  var b = step.boxes[id], G = boxGeo(b);
  return {x:G.x - 4 - (b.tup ? 12 : 0), y:G.y + G.h / 2};
}

function draw(animate){
  var sc = SC[cur.sc], step = sc.steps[cur.st], ui = UI[LANG];
  // code + output
  var code = $("code"); code.innerHTML = "";
  sc.code.forEach(function(t, i){
    var s = document.createElement("span"); s.className = "ln" + (i === step.line ? " on" : "");
    s.textContent = t === "" ? " " : t; code.appendChild(s);
  });
  $("out").textContent = step.out;
  var note = $("note");
  note.innerHTML = step.note + (cur.st === sc.steps.length - 1 ? '<div class="key">' + sc.key + '</div>' : "");
  note.className = "note" + (step.ask ? " ask" : "");
  $("step").textContent = ui.step.replace("%a", cur.st + 1).replace("%b", sc.steps.length);
  $("prev").disabled = cur.st === 0;
  $("next").disabled = cur.st === sc.steps.length - 1;

  // static panels
  var prevArrows = {};
  for (var key in live) prevArrows[key] = live[key];
  svg.innerHTML = "";
  el("defs", {}, svg).innerHTML =
    '<marker id="kpl2b2-idhd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow") + '"/></marker>' +
    '<marker id="kpl2b2-idhd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow2") + '"/></marker>';
  var t = el("text", {x:GX, y:30, "font-size":14, fill:css("--muted")}, svg); t.textContent = ui.glob.toUpperCase();
  var fy = sc.fy || FY0, fs = sc.fs || GSTEP, nf = step.vars.filter(function(v){ return v.f; }).length;
  if (step.frame){
    el("rect", {x:GX - 8, y:fy, width:200, height:Math.max(84, 30 + (nf - 1) * fs + 54), rx:10, fill:css("--frame"), stroke:css("--arrow2"), "stroke-dasharray":"5 4"}, svg);
    var ft = el("text", {x:GX, y:fy + 18, "font-size":14, fill:css("--arrow2")}, svg); ft.textContent = ui.frame.replace("%f", step.frame.indexOf("(") >= 0 ? step.frame : step.frame + "(x)");
  }

  // boxes
  Object.keys(step.boxes).forEach(function(id){
    var b = step.boxes[id], G = boxGeo(b), y = G.y, X = G.x, sw = G.sw;
    var fillN = b.tup ? css("--tup") : css("--box"), edge = b.tup ? css("--tupedge") : css("--boxedge");
    var g = el("g", {opacity: b.dead ? 0.35 : 1, "class":"bx"}, svg);
    if (animate && !(SC[cur.sc]._prev && SC[cur.sc]._prev.boxes[id])) { g.style.opacity = 0; g.style.transition = "opacity .5s"; requestAnimationFrame(function(){ g.style.opacity = b.dead ? 0.35 : 1; }); }
    if (b.v.length === 0){
      el("rect", {x:X, y:y, width:SLOT * 1.4, height:BH, rx:6, fill:fillN, stroke:edge, "stroke-width":2, "stroke-dasharray":"6 4"}, g);
      var et = el("text", {x:X + SLOT * 0.7, y:y + BH / 2 + 5, "text-anchor":"middle", "font-size":14, fill:css("--muted")}, g); et.textContent = ui.empty;
    }
    b.v.forEach(function(val, i){
      var rx = b.vert ? X : X + i * sw, ry = b.vert ? y + i * BH : y;
      var r = el("rect", {x:rx, y:ry, width:sw, height:BH, fill: (b.ch === i ? css("--hl") : fillN), stroke:edge, "stroke-width":2}, g);
      if (animate && b.ch === i){ r.style.transition = "fill 1.2s"; setTimeout(function(){ r.setAttribute("fill", fillN); }, 900); }
      if (!(b.refs && b.refs[i])){
        var tv = el("text", {x:rx + sw / 2, y:ry + BH / 2 + 6, "text-anchor":"middle", "font-size": String(val).length > 9 ? 13 : (String(val).length > 5 ? 15 : 18), "font-family":"ui-monospace,Menlo,monospace", fill:css("--ink")}, g); tv.textContent = val;
      }
      var ti = b.vert ? el("text", {x:rx - 8, y:ry + BH / 2 + 5, "text-anchor":"end", "font-size":13, fill:css("--muted")}, g)
                      : el("text", {x:rx + sw / 2, y:ry + BH + 15, "text-anchor":"middle", "font-size":13, fill:css("--muted")}, g);
      ti.textContent = i;
    });
    if (b.at === "all"){
      el("rect", {x:X - 3, y:y - 3, width:G.w + 6, height:G.h + 6, fill:"none", stroke:css("--arrow"), "stroke-width":3.5, rx:4}, g);
    } else if (b.at !== undefined && b.at < b.v.length){
      el("rect", {x:(b.vert ? X : X + b.at * sw) - 1, y:(b.vert ? y + b.at * BH : y) - 1, width:sw + 2, height:BH + 2, fill:"none", stroke:css("--arrow"), "stroke-width":3.5, rx:3}, g);
    }
    if (b.tup){
      var lp = el("text", {x:X - 6, y:y + BH / 2 + 9, "text-anchor":"end", "font-size":28, fill:edge}, g); lp.textContent = "(";
      var rp = el("text", {x:X + G.w + 6, y:y + BH / 2 + 9, "font-size":28, fill:edge}, g); rp.textContent = ")";
      if (!b.dead){ var tl = el("text", {x:X, y:y - 7, "font-size":12, fill:edge}, g); tl.textContent = "tuple"; }
    }
    if (b.dead){
      var dt = el("text", {x:X, y:y - 8, "font-size":14, fill:css("--muted")}, g); dt.textContent = ui.gone;
    }
  });
  // arrows held inside slots (a table's outer box)
  Object.keys(step.boxes).forEach(function(id){
    var b = step.boxes[id]; if (!b.refs) return;
    var G = boxGeo(b);
    b.refs.forEach(function(tid, i){
      if (!tid || !step.boxes[tid]) return;
      var sx = b.vert ? G.x + G.sw / 2 : G.x + i * G.sw + G.sw / 2, sy = b.vert ? G.y + i * BH + BH / 2 : G.y + BH / 2, e2 = boxAnchor(step, tid);
      el("circle", {cx:sx, cy:sy, r:4, fill:css("--arrow")}, svg);
      el("path", {d:pathD({sx:sx, sy:sy, ex:e2.x, ey:e2.y}), fill:"none", stroke:css("--arrow"), "stroke-width":2.2, "marker-end":"url(#kpl2b2-idhd)"}, svg);
    });
  });

  // names + arrows (tweened from their previous position)
  var vars = layout(step), next = {};
  vars.forEach(function(v){
    var nt = el("text", {x:v.x - 8, y:v.y + 6, "text-anchor":"end", "font-size":16, "font-family":"ui-monospace,Menlo,monospace", "font-weight":600, fill: v.f ? css("--arrow2") : css("--ink")}, svg);
    nt.textContent = v.n;
    if (v.val !== undefined){
      var cw = Math.max(40, String(v.val).length * 10 + 18);
      el("rect", {x:v.x + 2, y:v.y - 15, width:cw, height:30, rx:6, fill:css("--box"), stroke:css("--boxedge"), "stroke-width":2}, svg);
      var cv = el("text", {x:v.x + 2 + cw / 2, y:v.y + 6, "text-anchor":"middle", "font-size":16, "font-family":"ui-monospace,Menlo,monospace", fill:css("--ink")}, svg);
      cv.textContent = v.val;
      return;
    }
    el("circle", {cx:v.x, cy:v.y, r:4, fill: v.f ? css("--arrow2") : css("--arrow")}, svg);
    var end = boxAnchor(step, v.to);
    var line = el("path", {fill:"none", stroke: v.f ? css("--arrow2") : css("--arrow"), "stroke-width":2.5, "marker-end": v.f ? "url(#kpl2b2-idhd2)" : "url(#kpl2b2-idhd)"}, svg);
    var from = (animate && prevArrows[v.key]) ? prevArrows[v.key] : null;
    next[v.key] = {sx:v.x, sy:v.y, ex:end.x, ey:end.y};
    line._a = {from: from || next[v.key], to: next[v.key]};
    if (!from && animate){ line.style.opacity = 0; line.style.transition = "opacity .4s"; requestAnimationFrame(function(){ line.style.opacity = 1; }); }
  });
  live = next;
  tween(animate);
}

function pathD(p){
  var mx = (p.sx + p.ex) / 2;
  return "M" + p.sx + "," + p.sy + " C" + mx + "," + p.sy + " " + mx + "," + p.ey + " " + p.ex + "," + p.ey;
}
function tween(animate){
  if (tw) cancelAnimationFrame(tw);
  var paths = [].slice.call(svg.querySelectorAll("path")).filter(function(p){ return p._a; });
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var t0 = null, D = (animate && !reduce) ? 650 : 0;
  function frame(ts){
    if (t0 === null) t0 = ts;
    var k = D ? Math.min(1, (ts - t0) / D) : 1, e = 1 - Math.pow(1 - k, 3);
    paths.forEach(function(p){
      var a = p._a.from, b = p._a.to, c = {};
      ["sx","sy","ex","ey"].forEach(function(q){ c[q] = a[q] + (b[q] - a[q]) * e; });
      p.setAttribute("d", pathD(c));
    });
    if (k < 1) tw = requestAnimationFrame(frame);
  }
  tw = requestAnimationFrame(frame);
}

function go(st, animate){
  var sc = SC[cur.sc];
  sc._prev = (animate && st === cur.st + 1) ? sc.steps[cur.st] : null;
  cur.st = st; draw(animate);
}
function setScene(i){
  cur.sc = i; cur.st = 0; live = {}; SC[i]._prev = null;
  var hasFrame = SC[i].steps.some(function(s){ return s.frame; });
  var twoRows = SC[i].steps.some(function(s){ return Object.keys(s.boxes).some(function(k){ return s.boxes[k].p > 0; }); });
  svg.setAttribute("viewBox", "0 0 500 " + (SC[i].h || (hasFrame ? 330 : (twoRows ? 222 : 130))));
  [].forEach.call(ROOT.querySelectorAll('[data-k="tabs"] button'), function(b, j){ b.setAttribute("aria-selected", j === i ? "true" : "false"); });
  draw(false);
}
function render(){
  var ui = UI[LANG];
  SC = scenes(LANG);
  $("title").textContent = ui.title;
  $("sub").textContent = ui.sub;
  $("lblCode").textContent = ui.code;
  $("lblOut").textContent = ui.out;
  $("prev").textContent = ui.prev;
  $("next").textContent = ui.next;
  $("reset").textContent = ui.reset;
  $("lang").textContent = ui.lang;
  var tabs = $("tabs"); tabs.innerHTML = "";
  SC.forEach(function(s, i){
    var b = document.createElement("button"); b.type = "button"; b.setAttribute("role", "tab"); b.textContent = s.t;
    b.onclick = function(){ setScene(i); }; tabs.appendChild(b);
  });
  setScene(Math.min(cur.sc, SC.length - 1));
}

$("next").onclick = function(){ if (cur.st < SC[cur.sc].steps.length - 1) go(cur.st + 1, true); };
$("prev").onclick = function(){ if (cur.st > 0) go(cur.st - 1, false); };
$("reset").onclick = function(){ setScene(cur.sc); };
$("lang").onclick = function(){ LANG = LANG === "id" ? "en" : "id"; render(); };
ROOT.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight") $("next").click();
  if (e.key === "ArrowLeft") $("prev").click();
});
render();
new MutationObserver(function(){ var p = kpDark() ? PAL_D : PAL_L; if (p !== PAL) { PAL = p; draw(false); } }).observe(document.body, {attributes: true, attributeFilter: ['class']});
})();
