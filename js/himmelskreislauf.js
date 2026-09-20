/* Der kleine Himmelskreislauf: Schaubild und Stationen.
   Formensprache der Vorlage: Kreis = Akupunkturpunkt, Quadrat = Energiezentrum.
   Farben nach Designhandbuch – Verlauf in Tusche, Punkte in Siegelrot (3.3, 11.4). */
(function () {
  "use strict";
  var H = window.Himmelskreislauf;
  var NS = "http://www.w3.org/2000/svg";
  var W = 746, HH = 1335;
  var TUSCHE = "#1F1D1B", SIEGELROT = "#D32727", STEIN = "#736C63",
      KIESEL = "#A39B90", WEISS = "#FFFFFF", PAPIER = "#F7F4EE";

  function $(x) { return document.getElementById(x); }
  function el(t, a) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); return e; }
  function han(t) { var s = document.createElement("span"); s.className = "hanzi"; s.textContent = t; return s; }
  function glatt(pts) {
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
      d += "C" + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + "," + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) +
           " " + (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + "," + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) +
           " " + p2[0] + "," + p2[1];
    }
    return d;
  }

  /* --- Kopf --- */
  document.title = H.titel + " – Healthlane Academy";
  $("hLabel").textContent = H.untertitel;
  $("hTitel").textContent = H.titel;
  $("hNamen").textContent = H.namenszeile;
  $("hLead").textContent = H.einleitung;
  [["Stationen", String(H.punkte.length)],
   ["Gefäße", "Ren Mai und Du Mai"],
   ["Richtung", "Rücken hinauf, Vorderseite hinab"],
   ["Haltung", "Sitzend, Zunge am Gaumen"]
  ].forEach(function (r) {
    var li = document.createElement("li");
    var b = document.createElement("b"); b.textContent = r[0];
    var s = document.createElement("span"); s.textContent = r[1];
    li.appendChild(b); li.appendChild(s); $("hMeta").appendChild(li);
  });
  $("oKlammern").textContent = H.klammern;
  $("oAbk").textContent = H.abkuerzungen;
  $("oQuelle").textContent = H.quelle;
  $("oEinleitungLang").textContent = H.einleitungLang;
  $("oEinleitungHinweis").textContent = H.einleitungHinweis;

  /* --- Schaubild --- */
  var svg = $("plate");
  svg.setAttribute("viewBox", "0 0 " + W + " " + HH);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label",
    "Sitzende Figur im Profil. Der kleine Himmelskreislauf läuft am Lenkergefäß den " +
    "Rücken hinauf und am Konzeptionsgefäß an der Vorderseite hinab; neunzehn Stationen " +
    "sind nummeriert eingezeichnet.");

  var defs = el("defs", {});
  defs.innerHTML =
    '<marker id="pfeil" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.6" markerHeight="4.6" ' +
    'orient="auto"><path d="M0,1 L9,5 L0,9 z" fill="' + TUSCHE + '"/></marker>';
  svg.appendChild(defs);

  var bild = el("image", { href: "../img/uebungen/himmelskreislauf-figur.jpg",
                           x: 0, y: 0, width: W, height: HH });
  bild.style.filter = "saturate(.85)";
  svg.appendChild(bild);

  /* Beinast zuerst, gestrichelt und zurückhaltend */
  svg.appendChild(el("path", { d: glatt(H.beinAst), fill: "none", stroke: STEIN,
    "stroke-width": 2.6, "stroke-dasharray": "7 8", "stroke-linecap": "round" }));
  svg.appendChild(el("path", { d: "M" + H.kneeAst[0][0] + "," + H.kneeAst[0][1] +
    " L" + H.kneeAst[1][0] + "," + H.kneeAst[1][1], fill: "none", stroke: STEIN,
    "stroke-width": 2.2, "stroke-dasharray": "5 6", "stroke-linecap": "round" }));

  /* Kreislauf: helle Unterlage, dann Tusche mit Richtungspfeilen */
  [H.duMai, H.renMai].forEach(function (pfad) {
    svg.appendChild(el("path", { d: glatt(pfad), fill: "none", stroke: PAPIER,
      "stroke-width": 8, "stroke-linecap": "round", opacity: ".6" }));
  });
  [H.duMai, H.renMai].forEach(function (pfad) {
    svg.appendChild(el("path", { d: glatt(pfad), fill: "none", stroke: TUSCHE,
      "stroke-width": 3.4, "stroke-linecap": "round", "marker-mid": "url(#pfeil)" }));
  });
  /* Richtungspfeile an je zwei Stellen */
  [[H.duMai, 0.30], [H.duMai, 0.72], [H.renMai, 0.35], [H.renMai, 0.75]].forEach(function (a) {
    var mess = el("path", { d: glatt(a[0]), fill: "none", stroke: "none" });
    svg.appendChild(mess);
    var L = mess.getTotalLength();
    var p = mess.getPointAtLength(L * a[1]), q = mess.getPointAtLength(L * a[1] + 1);
    var w = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
    svg.appendChild(el("path", { d: "M-7,-5 L5,0 L-7,5 z", fill: TUSCHE,
      transform: "translate(" + p.x.toFixed(1) + "," + p.y.toFixed(1) + ") rotate(" + w.toFixed(1) + ")" }));
  });

  var gPunkte = el("g", {});
  svg.appendChild(gPunkte);

  var karten = {};
  H.punkte.forEach(function (p) {
    var g = el("g", { role: "button", tabindex: "0" });
    g.style.cursor = "pointer";
    g.setAttribute("aria-label", p.nr + " " + p.name);

    if (p.art === "punkt") {
      p._marke = el("circle", { cx: p.x, cy: p.y, r: 9, fill: SIEGELROT,
        stroke: WEISS, "stroke-width": 2 });
    } else {
      p._marke = el("rect", { x: p.x - 8.5, y: p.y - 8.5, width: 17, height: 17,
        fill: TUSCHE, stroke: WEISS, "stroke-width": 2 });
    }
    g.appendChild(p._marke);

    var links = p.x < 450;
    var t = el("text", {
      x: p.x + (links ? -17 : 17), y: p.y + 8,
      "text-anchor": links ? "end" : "start",
      fill: TUSCHE, stroke: WEISS, "stroke-width": 4, "paint-order": "stroke",
      "font-family": '"Lato", Arial, sans-serif', "font-size": 24, "font-weight": 700
    });
    t.textContent = p.nr;
    g.appendChild(t);
    g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 20, fill: "transparent" }));

    function waehle() {
      H.punkte.forEach(function (q) {
        var an = (q === p);
        if (q.art === "punkt") q._marke.setAttribute("r", an ? 12 : 9);
        else {
          var s = an ? 22 : 17;
          q._marke.setAttribute("x", q.x - s / 2); q._marke.setAttribute("y", q.y - s / 2);
          q._marke.setAttribute("width", s); q._marke.setAttribute("height", s);
        }
        if (karten[q.nr]) karten[q.nr].setAttribute("aria-current", an ? "true" : "false");
      });
      if (karten[p.nr]) karten[p.nr].scrollIntoView({ block: "center", behavior: "smooth" });
    }
    g.addEventListener("click", waehle);
    g.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); waehle(); }
    });
    gPunkte.appendChild(g);
  });

  /* --- Gefäße --- */
  H.gefaesse.forEach(function (v) {
    var d = document.createElement("div");
    var dt = document.createElement("dt"); dt.textContent = v.name;
    var dd = document.createElement("dd");
    dd.appendChild(han(v.hanT + (v.hanV !== v.hanT ? " / " + v.hanV : "")));
    dd.appendChild(document.createTextNode(" · " + v.pinyinT + " | " + v.pinyin));
    var e2 = document.createElement("span"); e2.className = "en";
    e2.textContent = v.en + " · " + v.lage;
    dd.appendChild(e2);
    d.appendChild(dt); d.appendChild(dd); $("oGefaesse").appendChild(d);
  });

  H.leseanleitung.forEach(function (l) {
    var li = document.createElement("li");
    if (l.zeichen) {
      var s = document.createElementNS(NS, "svg");
      s.setAttribute("viewBox", "0 0 22 22"); s.setAttribute("class", "lesezeichen");
      if (l.zeichen === "kreis") s.appendChild(el("circle", { cx: 11, cy: 11, r: 7, fill: SIEGELROT }));
      else if (l.zeichen === "quadrat") s.appendChild(el("rect", { x: 4, y: 4, width: 14, height: 14, fill: TUSCHE }));
      else s.appendChild(el("line", { x1: 2, y1: 11, x2: 20, y2: 11, stroke: STEIN,
        "stroke-width": 2.4, "stroke-dasharray": "5 5", "stroke-linecap": "round" }));
      li.appendChild(s);
    } else {
      li.classList.add("ohne");
    }
    li.appendChild(document.createTextNode(l.text));
    $("oLesen").appendChild(li);
  });

  /* --- Die neunzehn Stationen --- */
  var host = $("punkteListe");
  H.punkte.forEach(function (p) {
    var a = document.createElement("article");
    a.className = "hk-karte" + (p.art === "zentrum" ? " zentrum" : "");
    karten[p.nr] = a;

    var kopf = document.createElement("div"); kopf.className = "hk-kopf";
    var nr = document.createElement("span"); nr.className = "hk-nr";
    nr.textContent = (p.nr < 10 ? "0" : "") + p.nr;
    var art = document.createElementNS(NS, "svg");
    art.setAttribute("viewBox", "0 0 22 22"); art.setAttribute("class", "lesezeichen");
    if (p.art === "punkt") art.appendChild(el("circle", { cx: 11, cy: 11, r: 7, fill: SIEGELROT }));
    else art.appendChild(el("rect", { x: 4, y: 4, width: 14, height: 14, fill: TUSCHE }));
    kopf.appendChild(nr); kopf.appendChild(art);

    var h3 = document.createElement("h3"); h3.textContent = p.name;
    var nom = document.createElement("p"); nom.className = "hk-nomen";
    nom.appendChild(han(p.hanT + (p.hanV !== p.hanT ? " / " + p.hanV : "")));
    nom.appendChild(document.createTextNode(" · " + p.pinyinT + " | " + p.pinyin));
    var en = document.createElement("p"); en.className = "hk-en";
    en.textContent = p.en + " · " + p.code;
    var tx = document.createElement("p"); tx.className = "hk-text"; tx.textContent = p.text;

    a.appendChild(kopf); a.appendChild(h3); a.appendChild(nom); a.appendChild(en); a.appendChild(tx);
    host.appendChild(a);
  });

  /* --- Erläuterungen als Falttafel --- */
  H.erlaeuterungen.forEach(function (e, i) {
    var wrap = document.createElement("div");
    var btn = document.createElement("button");
    btn.type = "button";
    var kennung = "erl-" + i;
    btn.setAttribute("aria-expanded", i === 0 ? "true" : "false");
    btn.setAttribute("aria-controls", kennung);
    var t = document.createElement("span"); t.className = "titel"; t.textContent = e.titel;
    btn.appendChild(t);
    var sv = document.createElementNS(NS, "svg");
    sv.setAttribute("class", "zeichen"); sv.setAttribute("viewBox", "0 0 22 22");
    sv.setAttribute("aria-hidden", "true");
    sv.appendChild(el("polyline", { points: "5,9 11,15 17,9" }));
    btn.appendChild(sv);
    var inhalt = document.createElement("div");
    inhalt.className = "inhalt"; inhalt.id = kennung; inhalt.hidden = (i !== 0);
    var p = document.createElement("p"); p.textContent = e.text; inhalt.appendChild(p);
    btn.addEventListener("click", function () {
      var auf = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", auf ? "false" : "true");
      inhalt.hidden = auf;
    });
    wrap.appendChild(btn); wrap.appendChild(inhalt);
    $("oErlaeuterungen").appendChild(wrap);
  });

  H.quellen.forEach(function (q) {
    var li = document.createElement("li");
    var n = document.createElement("span"); n.className = "qnr"; n.textContent = "[" + q.nr + "]";
    li.appendChild(n); li.appendChild(document.createTextNode(q.text));
    $("oQuellen").appendChild(li);
  });
})();
