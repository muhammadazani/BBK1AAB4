/* W11 l2-b4 animation, ported from W11L02-B4-ANIMASI-MOODLE-ID.html (W11 flipped module). Mount: <div id="kpl2b4-id"></div> */
(function(){
var ROOT = document.getElementById('kpl2b4-id');
if (!ROOT || ROOT.getAttribute('data-ready')) return;
ROOT.setAttribute('data-ready', '1');
var PAL_L = {"--bg": "#f7f6f2", "--card": "#ffffff", "--ink": "#1d1d1b", "--muted": "#6b6a64", "--line": "#d9d6cc", "--box": "#fff8e6", "--boxedge": "#c99a2e", "--arrow": "#2457a6", "--arrow2": "#b3261e", "--frame": "#eef3fb", "--hl": "#fff1b8", "--ok": "#1f7a4a", "--ask": "#fdecea", "--code": "#f2f0ea", "--tup": "#eef3fb", "--tupedge": "#5b6b84"}, PAL_D = {"--bg": "#17181a", "--card": "#212225", "--ink": "#ecebe6", "--muted": "#a3a29b", "--line": "#3a3b3f", "--box": "#33291a", "--boxedge": "#e0b04a", "--arrow": "#7fb0ff", "--arrow2": "#ff8a80", "--frame": "#1f2a3a", "--hl": "#4a4020", "--ok": "#6fd39c", "--ask": "#3a2222", "--code": "#2a2b2e", "--tup": "#1f2a3a", "--tupedge": "#9fb0cc"};
function kpDark(){ return document.body.classList.contains('quarto-dark'); }
var PAL = kpDark() ? PAL_D : PAL_L;
if (!document.getElementById('kpl2b4-id-css')) { var st = document.createElement('style'); st.id = 'kpl2b4-id-css'; st.textContent = '#kpl2b4-id{--bg:#f7f6f2; --card:#ffffff; --ink:#1d1d1b; --muted:#6b6a64; --line:#d9d6cc;\n  --box:#fff8e6; --boxedge:#c99a2e; --arrow:#2457a6; --arrow2:#b3261e; --frame:#eef3fb;\n  --hl:#fff1b8; --ok:#1f7a4a; --ask:#fdecea; --code:#f2f0ea;\n  --tup:#eef3fb; --tupedge:#5b6b84;}#kpl2b4-id,#kpl2b4-id *{box-sizing:border-box}#kpl2b4-id{margin:0;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.5;font-family:inherit}#kpl2b4-id .kp-main{max-width:960px;margin:0 auto;padding:16px}#kpl2b4-id .kp-title{font-size:1.25rem;margin:0 0 4px}#kpl2b4-id .sub{color:var(--muted);margin:0 0 12px;font-size:.95rem}#kpl2b4-id .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}#kpl2b4-id .tabs{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 12px}#kpl2b4-id button{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:8px;padding:6px 12px;cursor:pointer}#kpl2b4-id button:hover{border-color:var(--muted)}#kpl2b4-id button:disabled{opacity:.4;cursor:default}#kpl2b4-id .tabs button[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}#kpl2b4-id .kp-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:12px}#kpl2b4-id .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px;min-width:0}#kpl2b4-id pre{margin:0;font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 0;overflow-x:auto}#kpl2b4-id pre .ln{display:block;padding:0 12px;white-space:pre;border-left:4px solid transparent}#kpl2b4-id pre .ln.on{background:var(--hl);border-left-color:var(--boxedge)}#kpl2b4-id .lbl{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin:10px 0 4px}#kpl2b4-id .out{font:14px ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 12px;min-height:2.4em;white-space:pre}#kpl2b4-id svg{width:100%;max-width:480px;height:auto;display:block;margin:0 auto}#kpl2b4-id .note{margin-top:12px;padding:10px 12px;border-radius:8px;background:var(--code);min-height:5em}#kpl2b4-id .note.ask{background:var(--ask)}#kpl2b4-id .note b{font-weight:650}#kpl2b4-id .ctrl{display:flex;gap:8px;align-items:center;margin-top:12px;flex-wrap:wrap}#kpl2b4-id .ctrl .step{color:var(--muted);font-size:.9rem;margin-left:auto}#kpl2b4-id .key{margin-top:12px;font-weight:650}@media (max-width:720px){#kpl2b4-id .kp-grid{grid-template-columns:minmax(0,1fr)}}#kpl2b4-id{display:block;max-width:100%;border-radius:12px;text-align:left}#kpl2b4-id .kp-title{color:inherit;font-weight:650}#kpl2b4-id pre,#kpl2b4-id .out,#kpl2b4-id .note,#kpl2b4-id .lbl{color:inherit;border:0;box-shadow:none}#kpl2b4-id pre .ln{color:inherit}#kpl2b4-id svg{max-width:480px;width:100%;fill:none;margin:0 auto}#kpl2b4-id button{line-height:1.4;box-shadow:none;text-transform:none}'; st.textContent += "body.quarto-dark #kpl2b4-id{--bg:#17181a;--card:#212225;--ink:#ecebe6;--muted:#a3a29b;--line:#3a3b3f;--box:#33291a;--boxedge:#e0b04a;--arrow:#7fb0ff;--arrow2:#ff8a80;--frame:#1f2a3a;--hl:#4a4020;--ok:#6fd39c;--ask:#3a2222;--code:#2a2b2e;--tup:#1f2a3a;--tupedge:#9fb0cc}"; document.head.appendChild(st); }
ROOT.style.padding = '12px';
ROOT.innerHTML = '<div class="kp-main"><div class="top"><div><div class="kp-title" data-k="title"></div><p class="sub" data-k="sub"></p></div><button data-k="lang" type="button"></button></div><div class="tabs" data-k="tabs" role="tablist"></div><div class="kp-grid"><div class="card"><div class="lbl" data-k="lblCode"></div><pre data-k="code"></pre><div class="lbl" data-k="lblOut"></div><div class="out" data-k="out"></div></div><div class="card"><svg data-k="svg" viewBox="0 0 500 330" role="img" aria-label="diagram"></svg><div class="note" data-k="note" aria-live="polite"></div><div class="ctrl"><button data-k="prev" type="button"></button><button data-k="next" type="button"></button><button data-k="reset" type="button"></button><span class="step" data-k="step"></span></div></div></div></div>';
function $(k){ return ROOT.querySelector('[data-k="' + k + '"]'); }

"use strict";
var LANG = "id";

var UI = {
  id:{title:"List atau Tuple?", sub:"Kapan memakai list, kapan tuple. Tekan Berikutnya untuk menjalankan kode baris demi baris.",
      code:"Kode", out:"Keluaran", prev:"◀ Sebelumnya", next:"Berikutnya ▶", reset:"Ulang", lang:"English",
      step:"Langkah %a dari %b", glob:"Nama (global)", frame:"Fungsi %f", empty:"kosong", gone:"tanpa panah"},
  en:{title:"List or Tuple?", sub:"When to use a list, when a tuple. Press Next to run the code line by line.",
      code:"Code", out:"Output", prev:"◀ Back", next:"Next ▶", reset:"Restart", lang:"Bahasa Indonesia",
      step:"Step %a of %b", glob:"Names (global)", frame:"Function %f", empty:"empty", gone:"no arrow"}
};
var W = {
  id:{q:"antrian", d:"tanggal", hr:"hari", bl:"bulan", th:"tahun", r:"rekap"},
  en:{q:"queue", d:"date", hr:"day", bl:"month", th:"year", r:"summary"}
};

/* A step: line (index into code, -1 none), boxes {id:{v:[...], p:row, ch:changedSlot, dead:bool}},
   vars [{n:name, to:boxId, f:inFrame}], frame (function name or null), out, note, ask */
function scenes(L){
  var w = W[L], q = w.q, d = w.d, hr = w.hr, bl = w.bl, th = w.th, r = w.r, I = (L === "id");

  function st(line, boxes, vars, frame, note, out, ask){ return {line:line, boxes:boxes, vars:vars, frame:frame, note:note, out:out || "", ask:!!ask}; }
  function S(t, code, steps, key, h, frameLayout){ var o = {t:t, code:code, steps:steps, key:key, h:h}; if (frameLayout){ o.fy = 140; o.fs = 44; } return o; }

  var Q2 = ['"Ani"', '"Budi"'], Q3 = ['"Ani"', '"Budi"', '"Citra"'];
  var TD = {T:{v:[17, 8, 1945], p:0, tup:true, sw:64}};
  var UN = [{n:d, to:"T"}, {n:hr, val:17}, {n:bl, val:8}, {n:th, val:1945}];
  var T0 = {v:['"soto"', 8], x:340, y:100, tup:true, sw:72}, T1 = {v:['"bakso"', 4], x:340, y:184, tup:true, sw:72};
  return [
  S(I ? "1 · List: data yang bertambah" : "1 · List: data that grows",
    [q + ' = ["Ani", "Budi"]', q + '.append("Citra")', "print(" + q + ")"], [
    st(0, {A:{v:Q2, x:200, y:40, sw:84}}, [{n:q, to:"A"}], null, I ? "Antrian orang yang menunggu. Isinya akan berubah, jadi kita pakai <b>list</b>." : "A queue of people waiting. It will change, so we use a <b>list</b>."),
    st(1, {A:{v:Q3, x:200, y:40, sw:84, ch:2}}, [{n:q, to:"A"}], null, I ? "<b>append</b> menambah orang di ujung. Kotaknya sama, isinya bertambah." : "<b>append</b> adds a person at the end. Same box, more contents."),
    st(2, {A:{v:Q3, x:200, y:40, sw:84}}, [{n:q, to:"A"}], null, I ? "Yang dicetak: <b>['Ani', 'Budi', 'Citra']</b>." : "Printed: <b>['Ani', 'Budi', 'Citra']</b>.", "['Ani', 'Budi', 'Citra']")
  ], I ? "Pakai list jika datanya akan bertambah atau berubah." : "Use a list when the data will grow or change.", 130),

  S(I ? "2 · Tuple: rekaman tetap" : "2 · Tuple: a fixed record",
    [d + " = (17, 8, 1945)", hr + ", " + bl + ", " + th + " = " + d, "print(" + hr + ", " + bl + ", " + th + ")", d + "[1] = 9"], [
    st(0, TD, [{n:d, to:"T"}], null, I ? "Tanggal adalah satu kesatuan: hari, bulan, tahun. Kita pakai <b>tuple</b>." : "A date is one unit: day, month, year. We use a <b>tuple</b>."),
    st(1, TD, UN, null, I ? "Tuple biasanya <b>dibongkar</b>: satu nama untuk setiap nilai, menurut posisi." : "A tuple is usually <b>unpacked</b>: one name for each value, by position."),
    st(2, TD, UN, null, I ? "Yang dicetak: <b>17 8 1945</b>." : "Printed: <b>17 8 1945</b>.", "17 8 1945"),
    st(3, {T:{v:[17, 8, 1945], p:0, tup:true, sw:64, at:1}}, UN, null, I ? "<b>Tebak dulu:</b> bolehkah <b>" + d + "[1] = 9</b>?" : "<b>Predict first:</b> is <b>" + d + "[1] = 9</b> allowed?", "17 8 1945", true),
    st(3, {T:{v:[17, 8, 1945], p:0, tup:true, sw:64, at:1}}, UN, null, I ? "Tidak boleh: tuple tidak bisa diubah. Untuk rekaman tetap, itu justru yang kita mau." : "No: a tuple can't change. For a fixed record, that is exactly what we want.", "17 8 1945\nTypeError")
  ], I ? "Pakai tuple untuk satu kesatuan yang tetap, atau saat fungsi mengembalikan beberapa hasil." : "Use a tuple for one fixed unit, or when a function returns several results.", 250),

  S(I ? "3 · List berisi tuple" : "3 · A list of tuples",
    [r + " = []", r + '.append(("soto", 8))', r + '.append(("bakso", 4))', "print(" + r + ")"], [
    st(0, {L:{v:[], x:200, y:40}}, [{n:r, to:"L"}], null, I ? "Rekap porsi kantin. Menunya bisa bertambah, jadi wadahnya <b>list</b>." : "A canteen serving summary. More dishes can be added, so the container is a <b>list</b>."),
    st(1, {L:{v:[""], x:200, y:40, sw:44, refs:["T0"]}, T0:T0}, [{n:r, to:"L"}], null, I ? "Setiap pasangan (menu, porsi) adalah satu rekaman tetap: <b>tuple</b>. Slot list berisi panah ke tuple itu." : "Each (dish, servings) pair is one fixed record: a <b>tuple</b>. The list slot holds an arrow to it."),
    st(2, {L:{v:["", ""], x:200, y:40, sw:44, refs:["T0", "T1"]}, T0:T0, T1:T1}, [{n:r, to:"L"}], null, I ? "Satu append lagi, satu tuple lagi." : "One more append, one more tuple."),
    st(3, {L:{v:["", ""], x:200, y:40, sw:44, refs:["T0", "T1"]}, T0:T0, T1:T1}, [{n:r, to:"L"}], null, I ? "Yang dicetak: <b>[('soto', 8), ('bakso', 4)]</b>." : "Printed: <b>[('soto', 8), ('bakso', 4)]</b>.", "[('soto', 8), ('bakso', 4)]")
  ], I ? "List berisi tuple: list karena datanya bisa bertambah, tuple karena setiap pasangan adalah satu rekaman tetap." : "A list of tuples: a list because the data can grow, tuples because each pair is one fixed record.", 260)
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
    '<marker id="kpl2b4-idhd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow") + '"/></marker>' +
    '<marker id="kpl2b4-idhd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow2") + '"/></marker>';
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
      el("path", {d:pathD({sx:sx, sy:sy, ex:e2.x, ey:e2.y}), fill:"none", stroke:css("--arrow"), "stroke-width":2.2, "marker-end":"url(#kpl2b4-idhd)"}, svg);
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
    var line = el("path", {fill:"none", stroke: v.f ? css("--arrow2") : css("--arrow"), "stroke-width":2.5, "marker-end": v.f ? "url(#kpl2b4-idhd2)" : "url(#kpl2b4-idhd)"}, svg);
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
