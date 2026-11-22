/* W11 l1-b3 animation, ported from W11L01-B3-ANIMASI-MOODLE-ID.html (W11 flipped module). Mount: <div id="kpb3-id"></div> */
(function(){
var ROOT = document.getElementById('kpb3-id');
if (!ROOT || ROOT.getAttribute('data-ready')) return;
ROOT.setAttribute('data-ready', '1');
var PAL_L = {"--bg": "#f7f6f2", "--card": "#ffffff", "--ink": "#1d1d1b", "--muted": "#6b6a64", "--line": "#d9d6cc", "--box": "#fff8e6", "--boxedge": "#c99a2e", "--arrow": "#2457a6", "--arrow2": "#b3261e", "--frame": "#eef3fb", "--hl": "#fff1b8", "--ok": "#1f7a4a", "--ask": "#fdecea", "--code": "#f2f0ea", "--tup": "#eef3fb", "--tupedge": "#5b6b84"}, PAL_D = {"--bg": "#17181a", "--card": "#212225", "--ink": "#ecebe6", "--muted": "#a3a29b", "--line": "#3a3b3f", "--box": "#33291a", "--boxedge": "#e0b04a", "--arrow": "#7fb0ff", "--arrow2": "#ff8a80", "--frame": "#1f2a3a", "--hl": "#4a4020", "--ok": "#6fd39c", "--ask": "#3a2222", "--code": "#2a2b2e", "--tup": "#1f2a3a", "--tupedge": "#9fb0cc"};
function kpDark(){ return document.body.classList.contains('quarto-dark'); }
var PAL = kpDark() ? PAL_D : PAL_L;
if (!document.getElementById('kpb3-id-css')) { var st = document.createElement('style'); st.id = 'kpb3-id-css'; st.textContent = '#kpb3-id{--bg:#f7f6f2; --card:#ffffff; --ink:#1d1d1b; --muted:#6b6a64; --line:#d9d6cc;\n  --box:#fff8e6; --boxedge:#c99a2e; --arrow:#2457a6; --arrow2:#b3261e; --frame:#eef3fb;\n  --hl:#fff1b8; --ok:#1f7a4a; --ask:#fdecea; --code:#f2f0ea;\n  --tup:#eef3fb; --tupedge:#5b6b84;}#kpb3-id,#kpb3-id *{box-sizing:border-box}#kpb3-id{margin:0;background:var(--bg);color:var(--ink);font-size:16px;line-height:1.5;font-family:inherit}#kpb3-id .kp-main{max-width:960px;margin:0 auto;padding:16px}#kpb3-id .kp-title{font-size:1.25rem;margin:0 0 4px}#kpb3-id .sub{color:var(--muted);margin:0 0 12px;font-size:.95rem}#kpb3-id .top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap}#kpb3-id .tabs{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 12px}#kpb3-id button{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:8px;padding:6px 12px;cursor:pointer}#kpb3-id button:hover{border-color:var(--muted)}#kpb3-id button:disabled{opacity:.4;cursor:default}#kpb3-id .tabs button[aria-selected="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}#kpb3-id .kp-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:12px}#kpb3-id .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px;min-width:0}#kpb3-id pre{margin:0;font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 0;overflow-x:auto}#kpb3-id pre .ln{display:block;padding:0 12px;white-space:pre;border-left:4px solid transparent}#kpb3-id pre .ln.on{background:var(--hl);border-left-color:var(--boxedge)}#kpb3-id .lbl{font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin:10px 0 4px}#kpb3-id .out{font:14px ui-monospace,Menlo,Consolas,monospace;background:var(--code);border-radius:8px;padding:8px 12px;min-height:2.4em;white-space:pre}#kpb3-id svg{width:100%;max-width:480px;height:auto;display:block;margin:0 auto}#kpb3-id .note{margin-top:12px;padding:10px 12px;border-radius:8px;background:var(--code);min-height:5em}#kpb3-id .note.ask{background:var(--ask)}#kpb3-id .note b{font-weight:650}#kpb3-id .ctrl{display:flex;gap:8px;align-items:center;margin-top:12px;flex-wrap:wrap}#kpb3-id .ctrl .step{color:var(--muted);font-size:.9rem;margin-left:auto}#kpb3-id .key{margin-top:12px;font-weight:650}@media (max-width:720px){#kpb3-id .kp-grid{grid-template-columns:minmax(0,1fr)}}#kpb3-id{display:block;max-width:100%;border-radius:12px;text-align:left}#kpb3-id .kp-title{color:inherit;font-weight:650}#kpb3-id pre,#kpb3-id .out,#kpb3-id .note,#kpb3-id .lbl{color:inherit;border:0;box-shadow:none}#kpb3-id pre .ln{color:inherit}#kpb3-id svg{max-width:480px;width:100%;fill:none;margin:0 auto}#kpb3-id button{line-height:1.4;box-shadow:none;text-transform:none}'; st.textContent += "body.quarto-dark #kpb3-id{--bg:#17181a;--card:#212225;--ink:#ecebe6;--muted:#a3a29b;--line:#3a3b3f;--box:#33291a;--boxedge:#e0b04a;--arrow:#7fb0ff;--arrow2:#ff8a80;--frame:#1f2a3a;--hl:#4a4020;--ok:#6fd39c;--ask:#3a2222;--code:#2a2b2e;--tup:#1f2a3a;--tupedge:#9fb0cc}"; document.head.appendChild(st); }
ROOT.style.padding = '12px';
ROOT.innerHTML = '<div class="kp-main"><div class="top"><div><div class="kp-title" data-k="title"></div><p class="sub" data-k="sub"></p></div><button data-k="lang" type="button"></button></div><div class="tabs" data-k="tabs" role="tablist"></div><div class="kp-grid"><div class="card"><div class="lbl" data-k="lblCode"></div><pre data-k="code"></pre><div class="lbl" data-k="lblOut"></div><div class="out" data-k="out"></div></div><div class="card"><svg data-k="svg" viewBox="0 0 500 330" role="img" aria-label="diagram"></svg><div class="note" data-k="note" aria-live="polite"></div><div class="ctrl"><button data-k="prev" type="button"></button><button data-k="next" type="button"></button><button data-k="reset" type="button"></button><span class="step" data-k="step"></span></div></div></div></div>';
function $(k){ return ROOT.querySelector('[data-k="' + k + '"]'); }

"use strict";
var LANG = "id";

var UI = {
  id:{title:"Kotak dan Panah", sub:"Ubah kotaknya atau pindahkan panahnya. Tekan Berikutnya untuk menjalankan kode baris demi baris.",
      code:"Kode", out:"Keluaran", prev:"◀ Sebelumnya", next:"Berikutnya ▶", reset:"Ulang", lang:"English",
      step:"Langkah %a dari %b", glob:"Nama (global)", frame:"Fungsi %f", empty:"kosong", gone:"tanpa panah"},
  en:{title:"Boxes and Arrows", sub:"Change the box or move the arrow. Press Next to run the code line by line.",
      code:"Code", out:"Output", prev:"◀ Back", next:"Next ▶", reset:"Restart", lang:"Bahasa Indonesia",
      step:"Step %a of %b", glob:"Names (global)", frame:"Function %f", empty:"empty", gone:"no arrow"}
};
var W = {
  id:{kursi:"kursi", baru:"baru", tambah:"tambah", kosongkan:"kosongkan", nolkan:"nolkan"},
  en:{kursi:"seats", baru:"fresh", tambah:"add", kosongkan:"clear", nolkan:"zero_first"}
};

/* A step: line (index into code, -1 none), boxes {id:{v:[...], p:row, ch:changedSlot, dead:bool}},
   vars [{n:name, to:boxId, f:inFrame}], frame (function name or null), out, note, ask */
function scenes(L){
  var w = W[L], k = w.kursi, b = w.baru, I = (L === "id");
  function S(t, code, steps, key){ return {t:t, code:code, steps:steps, key:key}; }
  return [
  S(I ? "1 · Memindahkan panah" : "1 · Moving an arrow",
    [k+" = [3, 5]", b+" = "+k, b+" = [0]", "print("+k+")"],
    [
      {line:-1, boxes:{}, vars:[], out:"", note: I ? "Gambar di kertasmu sambil mengikuti: satu kotak per list, satu panah per nama." : "Draw along on paper: one box per list, one arrow per name."},
      {line:0, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Satu kotak berisi 3 dan 5. Panah <b>"+k+"</b> menunjuk ke kotak itu." : "One box holding 3 and 5. The arrow <b>"+k+"</b> points to it."},
      {line:1, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"},{n:b,to:"A"}], out:"", note: I ? "<b>"+b+" = "+k+"</b> tidak membuat kotak baru. Sekarang ada <b>dua panah</b> ke kotak yang sama." : "<b>"+b+" = "+k+"</b> makes no new box. There are now <b>two arrows</b> to the same box."},
      {line:2, ask:true, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"},{n:b,to:"A"}], out:"", note: I ? "<b>Tebak dulu:</b> setelah <b>"+b+" = [0]</b>, apa isi <b>"+k+"</b>?" : "<b>Predict first:</b> after <b>"+b+" = [0]</b>, what does <b>"+k+"</b> hold?"},
      {line:2, boxes:{A:{v:[3,5],p:0}, B:{v:[0],p:1}}, vars:[{n:k,to:"A"},{n:b,to:"B"}], out:"", note: I ? "<b>[0]</b> membuat <b>kotak baru</b>, dan panah <b>"+b+"</b> pindah ke sana. Kotak lama tidak disentuh." : "<b>[0]</b> makes a <b>new box</b>, and the arrow <b>"+b+"</b> moves there. The old box is not touched."},
      {line:3, boxes:{A:{v:[3,5],p:0}, B:{v:[0],p:1}}, vars:[{n:k,to:"A"},{n:b,to:"B"}], out:"[3, 5]", note: I ? "<b>"+k+"</b> tetap <b>[3, 5]</b>." : "<b>"+k+"</b> is still <b>[3, 5]</b>."}
    ],
    I ? "Mengubah kotak terlihat oleh semua panahnya. Memindahkan panah tidak mengubah kotak apa pun." : "Changing a box shows through all its arrows. Moving an arrow changes no box at all."),

  S(I ? "2 · Parameter yang mengubah kotak" : "2 · A parameter that changes the box",
    ["def "+w.tambah+"(x):", "    x.append(0)", "", k+" = [3, 5]", w.tambah+"("+k+")", "print("+k+")"],
    [
      {line:3, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Kotak milik <b>"+k+"</b>: [3, 5]." : "The box of <b>"+k+"</b>: [3, 5]."},
      {line:4, frame:w.tambah, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"},{n:"x",to:"A",f:true}], out:"", note: I ? "Saat dipanggil, parameter <b>x</b> adalah <b>satu panah lagi</b> ke kotak milik <b>"+k+"</b>." : "On the call, the parameter <b>x</b> is <b>one more arrow</b> to the box of <b>"+k+"</b>."},
      {line:1, frame:w.tambah, boxes:{A:{v:[3,5,0],p:0,ch:2}}, vars:[{n:k,to:"A"},{n:"x",to:"A",f:true}], out:"", note: I ? "<b>x.append(0)</b> <b>mengubah kotak</b>: slot baru di ujung." : "<b>x.append(0)</b> <b>changes the box</b>: a new slot at the end."},
      {line:4, boxes:{A:{v:[3,5,0],p:0}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Fungsi selesai, panah <b>x</b> hilang. Perubahan pada kotak tetap ada." : "The function ends and the arrow <b>x</b> is gone. The change to the box stays."},
      {line:5, boxes:{A:{v:[3,5,0],p:0}}, vars:[{n:k,to:"A"}], out:"[3, 5, 0]", note: I ? "Yang dicetak: <b>[3, 5, 0]</b>." : "Printed: <b>[3, 5, 0]</b>."}
    ],
    I ? "Parameter adalah panah ke kotak milik pemanggil. Mengubah kotaknya terlihat di luar fungsi." : "A parameter is an arrow to the caller's box. Changing the box shows outside the function."),

  S(I ? "3 · Parameter yang dipindahkan" : "3 · A parameter that moves",
    ["def "+w.kosongkan+"(x):", "    x = []", "", k+" = [3, 5]", w.kosongkan+"("+k+")", "print("+k+")"],
    [
      {line:3, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Kita ingin <b>"+w.kosongkan+"</b> mengosongkan kotak ini." : "We want <b>"+w.kosongkan+"</b> to empty this box."},
      {line:4, frame:w.kosongkan, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"},{n:"x",to:"A",f:true}], out:"", note: I ? "Parameter <b>x</b> menunjuk kotak milik <b>"+k+"</b>." : "The parameter <b>x</b> points to the box of <b>"+k+"</b>."},
      {line:1, frame:w.kosongkan, boxes:{A:{v:[3,5],p:0}, B:{v:[],p:1}}, vars:[{n:k,to:"A"},{n:"x",to:"B",f:true}], out:"", note: I ? "<b>x = []</b> membuat kotak kosong yang baru dan <b>memindahkan panah x</b>. Kotak milik <b>"+k+"</b> tidak disentuh." : "<b>x = []</b> makes a new empty box and <b>moves the arrow x</b>. The box of <b>"+k+"</b> is not touched."},
      {line:4, boxes:{A:{v:[3,5],p:0}, B:{v:[],p:1,dead:true}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Fungsi selesai. Panah <b>x</b> hilang, dan kotak kosong itu tidak punya panah lagi." : "The function ends. The arrow <b>x</b> is gone, and the empty box has no arrow left."},
      {line:5, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"}], out:"[3, 5]", note: I ? "Yang dicetak: <b>[3, 5]</b>. Tidak ada yang kosong." : "Printed: <b>[3, 5]</b>. Nothing was cleared."}
    ],
    I ? "Memindahkan panah parameter tidak terlihat di luar fungsi." : "Moving the parameter's arrow does not show outside the function."),

  S(I ? "4 · Tebak: dua baris" : "4 · Predict: two lines",
    ["def "+w.nolkan+"(x):", "    x[0] = 0", "    x = [9, 9]", "", k+" = [3, 5]", w.nolkan+"("+k+")", "print("+k+")"],
    [
      {line:4, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Kotak milik <b>"+k+"</b>: [3, 5]." : "The box of <b>"+k+"</b>: [3, 5]."},
      {line:5, ask:true, frame:w.nolkan, boxes:{A:{v:[3,5],p:0}}, vars:[{n:k,to:"A"},{n:"x",to:"A",f:true}], out:"", note: I ? "<b>Tebak dulu:</b> apa yang dicetak di akhir? Gambar di kertasmu, lalu tekan Berikutnya." : "<b>Predict first:</b> what is printed at the end? Draw it, then press Next."},
      {line:1, frame:w.nolkan, boxes:{A:{v:[0,5],p:0,ch:0}}, vars:[{n:k,to:"A"},{n:"x",to:"A",f:true}], out:"", note: I ? "<b>x[0] = 0</b> mengganti slot 0. Ini <b>mengubah kotak</b> milik <b>"+k+"</b>." : "<b>x[0] = 0</b> replaces slot 0. That <b>changes the box</b> of <b>"+k+"</b>."},
      {line:2, frame:w.nolkan, boxes:{A:{v:[0,5],p:0}, B:{v:[9,9],p:1}}, vars:[{n:k,to:"A"},{n:"x",to:"B",f:true}], out:"", note: I ? "<b>x = [9, 9]</b> hanya <b>memindahkan panah x</b> ke kotak baru." : "<b>x = [9, 9]</b> only <b>moves the arrow x</b> to a new box."},
      {line:5, boxes:{A:{v:[0,5],p:0}, B:{v:[9,9],p:1,dead:true}}, vars:[{n:k,to:"A"}], out:"", note: I ? "Fungsi selesai, panah <b>x</b> hilang." : "The function ends and the arrow <b>x</b> is gone."},
      {line:6, boxes:{A:{v:[0,5],p:0}}, vars:[{n:k,to:"A"}], out:"[0, 5]", note: I ? "Yang dicetak: <b>[0, 5]</b>, bukan [9, 9]. Urutannya penting." : "Printed: <b>[0, 5]</b>, not [9, 9]. The order matters."}
    ],
    I ? "Parameter adalah panah ke kotak milik pemanggil. Mengubah kotaknya terlihat di luar, memindahkan panahnya tidak." : "A parameter is an arrow to the caller's box. Changing the box shows outside; moving the arrow doesn't.")
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
    '<marker id="kpb3-idhd" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow") + '"/></marker>' +
    '<marker id="kpb3-idhd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="' + css("--arrow2") + '"/></marker>';
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
      el("path", {d:pathD({sx:sx, sy:sy, ex:e2.x, ey:e2.y}), fill:"none", stroke:css("--arrow"), "stroke-width":2.2, "marker-end":"url(#kpb3-idhd)"}, svg);
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
    var line = el("path", {fill:"none", stroke: v.f ? css("--arrow2") : css("--arrow"), "stroke-width":2.5, "marker-end": v.f ? "url(#kpb3-idhd2)" : "url(#kpb3-idhd)"}, svg);
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
