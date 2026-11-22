/* W11 l1-b4 animation, ported from W11L01-B4-ANIMASI-MOODLE-ID.html (W11 flipped module). Mount: <div id="kpb4-id"></div> */
(function(){
var ROOT = document.getElementById('kpb4-id');
if (!ROOT || ROOT.getAttribute('data-ready')) return;
ROOT.setAttribute('data-ready', '1');
var PAL_L = {"--bg": "#f7f6f2", "--card": "#ffffff", "--ink": "#1d1d1b", "--muted": "#6b6a64", "--line": "#d9d6cc", "--box": "#fff8e6", "--boxedge": "#c99a2e", "--arrow": "#2457a6", "--arrow2": "#b3261e", "--frame": "#eef3fb", "--hl": "#fff1b8", "--ok": "#1f7a4a", "--ask": "#fdecea", "--code": "#f2f0ea", "--tup": "#eef3fb", "--tupedge": "#5b6b84"}, PAL_D = {"--bg": "#17181a", "--card": "#212225", "--ink": "#ecebe6", "--muted": "#a3a29b", "--line": "#3a3b3f", "--box": "#33291a", "--boxedge": "#e0b04a", "--arrow": "#7fb0ff", "--arrow2": "#ff8a80", "--frame": "#1f2a3a", "--hl": "#4a4020", "--ok": "#6fd39c", "--ask": "#3a2222", "--code": "#2a2b2e", "--tup": "#1f2a3a", "--tupedge": "#9fb0cc"};
function kpDark(){ return document.body.classList.contains('quarto-dark'); }
var PAL = kpDark() ? PAL_D : PAL_L;
if (!document.getElementById('kpb4-id-css')) { var st = document.createElement('style'); st.id = 'kpb4-id-css'; st.textContent = '#kpb4-id{--bg:#f7f6f2; --card:#ffffff; --ink:#1d1d1b; --muted:#6b6a64; --line:#d9d6cc;\n  --box:#fff8e6; --boxedge:#c99a2e; --arrow:#2457a6; --arrow2:#b3261e; --frame:#eef3fb;\n  --hl:#fff1b8; --ok:#1f7a4a; --ask:#fdecea; --code:#f2f0ea;\n  --tup:#eef3fb; --tupedge:#5b6b84;}#kpb4-id,#kpb4-id *{box-sizing:border-box}#kpb4-id{margin:0;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.5;font-family:inherit}#kpb4-id .kp-main{max-width:960px;margin:0 auto;padding:16px}#kpb4-id .kp-title{font-size:1.25rem;margin:0 0 4px}#kpb4-id .sub{color:var(--muted);margin:0 0 12px;font-size:.95rem}#kpb4-id .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}#kpb4-id .tabs{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 12px}#kpb4-id button{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:8px;padding:6px 12px;cursor:pointer}#kpb4-id button:hover{border-color:var(--muted)}#kpb4-id button:disabled{opacity:.4;cursor:default}#kpb4-id .tabs button[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}#kpb4-id .kp-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:12px}#kpb4-id .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px;min-width:0}#kpb4-id pre{margin:0;font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 0;overflow-x:auto}#kpb4-id pre .ln{display:block;padding:0 12px;white-space:pre;border-left:4px solid transparent}#kpb4-id pre .ln.on{background:var(--hl);border-left-color:var(--boxedge)}#kpb4-id .lbl{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin:10px 0 4px}#kpb4-id .out{font:14px ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 12px;min-height:2.4em;white-space:pre}#kpb4-id svg{width:100%;max-width:480px;height:auto;display:block;margin:0 auto}#kpb4-id .note{margin-top:12px;padding:10px 12px;border-radius:8px;background:var(--code);min-height:5em}#kpb4-id .note.ask{background:var(--ask)}#kpb4-id .note b{font-weight:650}#kpb4-id .ctrl{display:flex;gap:8px;align-items:center;margin-top:12px;flex-wrap:wrap}#kpb4-id .ctrl .step{color:var(--muted);font-size:.9rem;margin-left:auto}#kpb4-id .key{margin-top:12px;font-weight:650}@media (max-width:720px){#kpb4-id .kp-grid{grid-template-columns:minmax(0,1fr)}}#kpb4-id{display:block;max-width:100%;border-radius:12px;text-align:left}#kpb4-id .kp-title{color:inherit;font-weight:650}#kpb4-id pre,#kpb4-id .out,#kpb4-id .note,#kpb4-id .lbl{color:inherit;border:0;box-shadow:none}#kpb4-id pre .ln{color:inherit}#kpb4-id svg{max-width:480px;width:100%;fill:none;margin:0 auto}#kpb4-id button{line-height:1.4;box-shadow:none;text-transform:none}'; st.textContent += "body.quarto-dark #kpb4-id{--bg:#17181a;--card:#212225;--ink:#ecebe6;--muted:#a3a29b;--line:#3a3b3f;--box:#33291a;--boxedge:#e0b04a;--arrow:#7fb0ff;--arrow2:#ff8a80;--frame:#1f2a3a;--hl:#4a4020;--ok:#6fd39c;--ask:#3a2222;--code:#2a2b2e;--tup:#1f2a3a;--tupedge:#9fb0cc}"; document.head.appendChild(st); }
ROOT.style.padding = '12px';
ROOT.innerHTML = '<div class="kp-main"><div class="top"><div><div class="kp-title" data-k="title"></div><p class="sub" data-k="sub"></p></div><button data-k="lang" type="button"></button></div><div class="tabs" data-k="tabs" role="tablist"></div><div class="kp-grid"><div class="card"><div class="lbl" data-k="lblCode"></div><pre data-k="code"></pre><div class="lbl" data-k="lblOut"></div><div class="out" data-k="out"></div></div><div class="card"><svg data-k="svg" viewBox="0 0 500 330" role="img" aria-label="diagram"></svg><div class="note" data-k="note" aria-live="polite"></div><div class="ctrl"><button data-k="prev" type="button"></button><button data-k="next" type="button"></button><button data-k="reset" type="button"></button><span class="step" data-k="step"></span></div></div></div></div>';
function $(k){ return ROOT.querySelector('[data-k="' + k + '"]'); }

"use strict";
var LANG = "id";

var UI = {
  id:{title:"Membangun List Baru", sub:"Membangun list baru: saring, ubah setiap, ringkas. Tekan Berikutnya untuk menjalankan kode baris demi baris.",
      code:"Kode", out:"Keluaran", prev:"◀ Sebelumnya", next:"Berikutnya ▶", reset:"Ulang", lang:"English",
      step:"Langkah %a dari %b", glob:"Nama (global)", frame:"Fungsi %f", empty:"kosong", gone:"tanpa panah"},
  en:{title:"Building a New List", sub:"Building a new list: filter, map, reduce. Press Next to run the code line by line.",
      code:"Code", out:"Output", prev:"◀ Back", next:"Next ▶", reset:"Restart", lang:"Bahasa Indonesia",
      step:"Step %a of %b", glob:"Names (global)", frame:"Function %f", empty:"empty", gone:"no arrow"}
};
var W = {
  id:{d:"nilai_kelas", p:"nilai", h:"hasil", f1:"lulus", r1:"lulus_kelas", f2:"tambah_bonus", r2:"bonus_kelas", f3:"total_nilai", r3:"jumlah"},
  en:{d:"all_scores", p:"scores", h:"result", f1:"passing", r1:"passed", f2:"add_bonus", r2:"with_bonus", f3:"total_score", r3:"grand"}
};

/* A step: line (index into code, -1 none), boxes {id:{v:[...], p:row, ch:changedSlot, dead:bool}},
   vars [{n:name, to:boxId, f:inFrame}], frame (function name or null), out, note, ask */
function scenes(L){
  var w = W[L], d = w.d, p = w.p, h = w.h, I = (L === "id");
  function S(t, code, steps, key){ steps.forEach(function(x){ if (x.frame) x.frame = x.frame + "(" + p + ")"; }); return {t:t, code:code, steps:steps, key:key, fy:140, fs:44, h:330}; }
  var A = [72, 45, 88, 60], DATA = d + " = [72, 45, 88, 60]";
  function G(extra){ return [{n:d, to:"A"}].concat(extra || []); }
  function F(extra){ return G([{n:p, to:"A", f:true}].concat(extra || [])); }
  function st(line, boxes, vars, frame, note, out, ask){ return {line:line, boxes:boxes, vars:vars, frame:frame, note:note, out:out || "", ask:!!ask}; }
  function bx(b, at, ch){ var o = {A:{v:A, p:0}}; if (at !== undefined) o.A.at = at; if (b) { o.B = {v:b, p:1}; if (ch !== undefined) o.B.ch = ch; } return o; }

  /* ---- 1 · filter ---- */
  var f1 = w.f1, r1 = w.r1;
  var c1 = ["def "+f1+"("+p+"):", "    "+h+" = []", "    for n in "+p+":", "        if n >= 60:", "            "+h+".append(n)", "    return "+h, "", DATA, r1+" = "+f1+"("+d+")", "print("+r1+")"];
  var s1 = [
    st(7, bx(), G(), null, I ? "Daftar nilai satu kelas. Kita ingin list baru berisi nilai yang <b>lulus</b> (60 ke atas), tanpa mengubah list ini." : "One class's scores. We want a new list of the <b>passing</b> scores (60 and up), without changing this list."),
    st(8, bx(), F(), f1, I ? "Parameter <b>"+p+"</b> menunjuk kotak milik <b>"+d+"</b>." : "The parameter <b>"+p+"</b> points to the box of <b>"+d+"</b>."),
    st(1, bx([]), F([{n:h, to:"B", f:true}]), f1, I ? "<b>① Siapkan list kosong.</b> <b>"+h+" = []</b> membuat kotak baru. Kotak lama tidak akan disentuh." : "<b>① Set up an empty list.</b> <b>"+h+" = []</b> makes a new box. The old box won't be touched."),
    st(4, bx([72], 0, 0), F([{n:h, to:"B", f:true}, {n:"n", val:72, f:true}]), f1, I ? "<b>② Ulangi:</b> n = 72. <b>③ Periksa:</b> 72 >= 60 benar, jadi <b>append</b> ke kotak baru." : "<b>② Repeat:</b> n = 72. <b>③ Check:</b> 72 >= 60 is true, so <b>append</b> to the new box."),
    st(3, bx([72], 1), F([{n:h, to:"B", f:true}, {n:"n", val:45, f:true}]), f1, I ? "n = 45. 45 >= 60 salah: baris append dilewati." : "n = 45. 45 >= 60 is false: the append line is skipped."),
    st(4, bx([72, 88], 2, 1), F([{n:h, to:"B", f:true}, {n:"n", val:88, f:true}]), f1, I ? "n = 88. Benar, append." : "n = 88. True, append."),
    st(3, bx([72, 88], 3), F([{n:h, to:"B", f:true}, {n:"n", val:60, f:true}]), f1, I ? "<b>Tebak dulu:</b> n = 60. Apakah 60 masuk ke <b>"+h+"</b>?" : "<b>Predict first:</b> n = 60. Does 60 go into <b>"+h+"</b>?", "", true),
    st(4, bx([72, 88, 60], 3, 2), F([{n:h, to:"B", f:true}, {n:"n", val:60, f:true}]), f1, I ? "Masuk: <b>>=</b> berarti 60 juga lolos." : "Yes: <b>>=</b> means 60 passes too."),
    st(5, bx([72, 88, 60]), F([{n:h, to:"B", f:true}]), f1, I ? "<b>④ Kembalikan setelah loop.</b> Semua elemen sudah diperiksa, baru <b>return</b>." : "<b>④ Return after the loop.</b> Every element has been checked; only now <b>return</b>."),
    st(8, bx([72, 88, 60]), G([{n:r1, to:"B"}]), null, I ? "<b>"+r1+"</b> menunjuk kotak baru. Kotak milik <b>"+d+"</b> tetap utuh." : "<b>"+r1+"</b> points to the new box. The box of <b>"+d+"</b> is intact."),
    st(9, bx([72, 88, 60]), G([{n:r1, to:"B"}]), null, I ? "Yang dicetak: <b>[72, 88, 60]</b>." : "Printed: <b>[72, 88, 60]</b>.", "[72, 88, 60]")
  ];

  /* ---- 2 · map ---- */
  var f2 = w.f2, r2 = w.r2;
  var c2 = ["def "+f2+"("+p+"):", "    "+h+" = []", "    for n in "+p+":", "        "+h+".append(n + 5)", "    return "+h, "", DATA, r2+" = "+f2+"("+d+")", "print("+r2+")"];
  var H2 = function(n){ return F([{n:h, to:"B", f:true}, {n:"n", val:n, f:true}]); };
  var s2 = [
    st(6, bx(), G(), null, I ? "Setiap mahasiswa dapat bonus 5. Kita ingin list baru dengan nilai yang sudah ditambah." : "Every student gets a bonus of 5. We want a new list with the raised scores."),
    st(7, bx(), F(), f2, I ? "Parameter <b>"+p+"</b> menunjuk kotak milik <b>"+d+"</b>." : "The parameter <b>"+p+"</b> points to the box of <b>"+d+"</b>."),
    st(1, bx([]), F([{n:h, to:"B", f:true}]), f2, I ? "<b>①</b> Kotak baru yang masih kosong." : "<b>①</b> A new, empty box."),
    st(3, bx([77], 0, 0), H2(72), f2, I ? "<b>②③</b> n = 72. Ubah dulu (72 + 5), lalu <b>append</b>. Tidak ada <b>if</b>." : "<b>②③</b> n = 72. Change it first (72 + 5), then <b>append</b>. There is no <b>if</b>."),
    st(3, bx([77, 50], 1, 1), H2(45), f2, I ? "n = 45 → 50. Setiap putaran menambah satu elemen." : "n = 45 → 50. Every round adds one element."),
    st(3, bx([77, 50, 93], 2, 2), H2(88), f2, "n = 88 → 93."),
    st(3, bx([77, 50, 93, 65], 3, 3), H2(60), f2, "n = 60 → 65."),
    st(4, bx([77, 50, 93, 65]), F([{n:h, to:"B", f:true}]), f2, I ? "<b>④</b> return setelah loop. List baru sama panjang dengan list asli." : "<b>④</b> return after the loop. The new list is as long as the original."),
    st(8, bx([77, 50, 93, 65]), G([{n:r2, to:"B"}]), null, I ? "Yang dicetak: <b>[77, 50, 93, 65]</b>. <b>"+d+"</b> tetap [72, 45, 88, 60]." : "Printed: <b>[77, 50, 93, 65]</b>. <b>"+d+"</b> is still [72, 45, 88, 60].", "[77, 50, 93, 65]")
  ];

  /* ---- 3 · reduce ---- */
  var f3 = w.f3, r3 = w.r3;
  var c3 = ["def "+f3+"("+p+"):", "    total = 0", "    for n in "+p+":", "        total = total + n", "    return total", "", DATA, r3+" = "+f3+"("+d+")", "print("+r3+")"];
  var T3 = function(n, t){ return F([{n:"total", val:t, f:true}, {n:"n", val:n, f:true}]); };
  var s3 = [
    st(6, bx(), G(), null, I ? "Sekarang kita ingin <b>satu angka</b>: jumlah semua nilai. Hasilnya bukan list." : "Now we want <b>one number</b>: the sum of all scores. The result is not a list."),
    st(7, bx(), F(), f3, I ? "Parameter <b>"+p+"</b> menunjuk kotak milik <b>"+d+"</b>." : "The parameter <b>"+p+"</b> points to the box of <b>"+d+"</b>."),
    st(1, bx(), F([{n:"total", val:0, f:true}]), f3, I ? "<b>①</b> Penampungnya angka: <b>total = 0</b>, seperti di Minggu 6." : "<b>①</b> The holder is a number: <b>total = 0</b>, as in Week 6."),
    st(3, bx(null, 0), T3(72, 72), f3, "n = 72: total = 0 + 72 = 72."),
    st(3, bx(null, 1), T3(45, 117), f3, "n = 45: total = 72 + 45 = 117."),
    st(3, bx(null, 2), T3(88, 205), f3, "n = 88: total = 117 + 88 = 205."),
    st(3, bx(null, 3), T3(60, 265), f3, "n = 60: total = 205 + 60 = 265."),
    st(4, bx(), F([{n:"total", val:265, f:true}]), f3, I ? "<b>④</b> return setelah loop." : "<b>④</b> return after the loop."),
    st(8, bx(), G([{n:r3, val:265}]), null, I ? "Yang dicetak: <b>265</b>. Tanpa <b>sum()</b>: penampungnya kita tulis sendiri." : "Printed: <b>265</b>. No <b>sum()</b>: we write the holder ourselves.", "265")
  ];

  /* ---- 4 · trap: return inside the loop ---- */
  var c4 = ["def "+f1+"("+p+"):", "    "+h+" = []", "    for n in "+p+":", "        if n >= 60:", "            "+h+".append(n)", "        return "+h, "", DATA, r1+" = "+f1+"("+d+")", "print("+r1+")"];
  var s4 = [
    st(7, bx(), G(), null, I ? "Kode saringan yang sama, tetapi <b>return</b> bergeser satu indentasi: sekarang di dalam <b>for</b>." : "The same filter code, but <b>return</b> moved one indent: it is now inside the <b>for</b>."),
    st(8, bx(), F(), f1, I ? "Panggil fungsinya." : "Call the function."),
    st(1, bx([]), F([{n:h, to:"B", f:true}]), f1, I ? "<b>①</b> Kotak baru yang kosong." : "<b>①</b> A new, empty box."),
    st(4, bx([72], 0, 0), F([{n:h, to:"B", f:true}, {n:"n", val:72, f:true}]), f1, I ? "n = 72, lolos, append." : "n = 72 passes, append."),
    st(5, bx([72], 0), F([{n:h, to:"B", f:true}, {n:"n", val:72, f:true}]), f1, I ? "<b>Tebak dulu:</b> baris <b>return</b> ada di dalam loop. Apa yang dicetak?" : "<b>Predict first:</b> the <b>return</b> line is inside the loop. What is printed?", "", true),
    st(5, bx([72]), F([{n:h, to:"B", f:true}]), f1, I ? "<b>return</b> langsung menghentikan fungsi di putaran pertama. 45, 88 dan 60 tidak pernah diperiksa." : "<b>return</b> ends the function right away in the first round. 45, 88 and 60 are never checked."),
    st(9, bx([72]), G([{n:r1, to:"B"}]), null, I ? "Yang dicetak: <b>[72]</b>, bukan [72, 88, 60]." : "Printed: <b>[72]</b>, not [72, 88, 60].", "[72]")
  ];

  return [
    S(I ? "1 · Saring" : "1 · Filter", c1, s1, I ? "Saring: append di dalam if. Hanya elemen yang lolos masuk ke list baru." : "Filter: append inside the if. Only the elements that pass go into the new list."),
    S(I ? "2 · Ubah setiap" : "2 · Map", c2, s2, I ? "Ubah setiap: append di setiap putaran, tanpa if. List baru sama panjang dengan list asli." : "Map: append in every round, no if. The new list is as long as the original."),
    S(I ? "3 · Ringkas" : "3 · Reduce", c3, s3, I ? "Ringkas: penampung angka diperbarui di setiap putaran. Hasilnya satu angka, bukan list." : "Reduce: a number holder is updated every round. The result is one number, not a list."),
    S(I ? "4 · Jebakan: return" : "4 · Trap: return", c4, s4, I ? "④ return ditulis setelah loop, sejajar dengan for, bukan di dalamnya." : "④ return goes after the loop, lined up with the for, not inside it.")
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
    '<marker id="kpb4-idhd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow") + '"/></marker>' +
    '<marker id="kpb4-idhd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow2") + '"/></marker>';
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
      el("path", {d:pathD({sx:sx, sy:sy, ex:e2.x, ey:e2.y}), fill:"none", stroke:css("--arrow"), "stroke-width":2.2, "marker-end":"url(#kpb4-idhd)"}, svg);
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
    var line = el("path", {fill:"none", stroke: v.f ? css("--arrow2") : css("--arrow"), "stroke-width":2.5, "marker-end": v.f ? "url(#kpb4-idhd2)" : "url(#kpb4-idhd)"}, svg);
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
