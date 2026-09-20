/* ===========================================================
   Meridian-Engine
   Zeichnet einen Meridianverlauf auf eine Figur.

   Gestaltung nach Designhandbuch Healthlane Academy 0.6, 11.4:
   Verlauf in Tusche, Punkte in Siegelrot, Punktname als Pinyin
   mit Kurzbezeichnung. Keine Verläufe, keine Schatten, keine
   Leuchteffekte (Negativliste 14.3).

   Die Engine kennt keinen einzelnen Meridian. Sie bekommt
     data.path    Stützpunkte des äußeren Verlaufs  [[x,y], …]
     data.points  die Punkte, die darauf liegen
   und rechnet Spline und Bogenlängen selbst aus.
   Bildraster aller Figuren: 880 × 1168.
   =========================================================== */
(function (global) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var W = 880, H = 1168;

  var TUSCHE = "#1F1D1B", SIEGELROT = "#D32727", STEIN = "#736C63",
      KIESEL = "#A39B90", HAARLINIE = "#DCD5C9", PAPIER = "#F7F4EE", WEISS = "#FFFFFF";

  var store = {};
  function register(d) { store[d.id] = d; }
  function get(id) { return store[id]; }

  function el(tag, attr) {
    var e = document.createElementNS(NS, tag);
    for (var k in attr) e.setAttribute(k, attr[k]);
    return e;
  }

  /* Catmull-Rom durch alle Stützpunkte → kubische Bezier */
  function spline(pts, tension) {
    tension = (tension === undefined) ? 0.85 : tension;
    var d = "M" + pts[0][0] + "," + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i],
          p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
      d += "C" + (p1[0] + (p2[0] - p0[0]) / 6 * tension).toFixed(2) + "," +
                 (p1[1] + (p2[1] - p0[1]) / 6 * tension).toFixed(2) + " " +
                 (p2[0] - (p3[0] - p1[0]) / 6 * tension).toFixed(2) + "," +
                 (p2[1] - (p3[1] - p1[1]) / 6 * tension).toFixed(2) + " " +
                 p2[0] + "," + p2[1];
    }
    return d;
  }

  function mount(opts) {
    var svg = opts.svg, data = opts.data, imgBase = opts.imgBase || "img/";
    var LBL = data.codeDe || data.code;
    var P = data.points.slice();

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label",
      (data.titel || data.name) + ", " + P.length + " eingezeichnete Punkte von " +
      LBL + " 1 bis " + LBL + " " + data.pointCount);
    svg.innerHTML = "";

    /* Figur. Sättigung leicht zurückgenommen nach 11.3. */
    var bild = el("image", {
      href: imgBase + data.view + ".png", x: 0, y: 0, width: W, height: H,
      preserveAspectRatio: "xMidYMid meet"
    });
    bild.style.filter = "saturate(.85)";
    svg.appendChild(bild);

    var D = spline(data.path);

    /* Gegenseite – nur andeutend, Kiesel */
    var gMirror = el("g", { transform: "translate(" + W + ",0) scale(-1,1)", opacity: ".45" });
    if (data.mirror !== false) {
      gMirror.appendChild(el("path", { d: D, fill: "none", stroke: KIESEL,
        "stroke-width": 2.4, "stroke-linecap": "round" }));
      P.forEach(function (p) {
        gMirror.appendChild(el("circle", { cx: p.x, cy: p.y, r: 3, fill: KIESEL }));
      });
      svg.appendChild(gMirror);
    }

    /* Innerer Verlauf und Äste – schematisch, punktlos, Stein gestrichelt */
    var gInner = el("g", { opacity: ".9" });
    if (data.inner) gInner.appendChild(el("path", { d: data.inner, fill: "none",
      stroke: STEIN, "stroke-width": 2, "stroke-dasharray": "6 7", "stroke-linecap": "round" }));
    (data.branches || []).forEach(function (b) {
      gInner.appendChild(el("path", { d: b.d, fill: "none", stroke: STEIN,
        "stroke-width": 1.8, "stroke-dasharray": "5 6", "stroke-linecap": "round" }));
    });
    svg.appendChild(gInner);

    /* Äußerer Verlauf: Tusche, mit heller Unterlage für Lesbarkeit auf Haut */
    svg.appendChild(el("path", { d: D, fill: "none", stroke: PAPIER,
      "stroke-width": 6.4, "stroke-linecap": "round", opacity: ".55" }));
    var bahn = el("path", { d: D, fill: "none", stroke: TUSCHE,
      "stroke-width": 3.2, "stroke-linecap": "round" });
    svg.appendChild(bahn);

    var gLead = el("g", {}), gPts = el("g", {}), gLab = el("g", {});
    svg.appendChild(gLead); svg.appendChild(gPts); svg.appendChild(gLab);

    /* Qi-Anzeiger: schlichter Ring in Tusche, kein Leuchten */
    var qi = el("g", { opacity: "0" });
    qi.appendChild(el("circle", { r: 9, fill: "none", stroke: TUSCHE, "stroke-width": 2 }));
    qi.appendChild(el("circle", { r: 3, fill: TUSCHE }));
    svg.appendChild(qi);

    /* Legende */
    var legende = el("g", { "font-family": '"Lato", Arial, sans-serif', "font-size": 15 });
    legende.innerHTML =
      '<line x1="604" y1="100" x2="634" y2="100" stroke="' + TUSCHE + '" stroke-width="3.2" stroke-linecap="round"/>' +
      '<text x="646" y="105" fill="' + TUSCHE + '">äußerer Verlauf</text>' +
      '<circle cx="619" cy="130" r="5" fill="' + SIEGELROT + '" stroke="' + WEISS + '" stroke-width="1.4"/>' +
      '<text x="646" y="135" fill="' + TUSCHE + '">Akupunkturpunkt</text>' +
      '<line x1="604" y1="160" x2="634" y2="160" stroke="' + STEIN + '" stroke-width="2" stroke-dasharray="6 7" stroke-linecap="round"/>' +
      '<text x="646" y="165" fill="' + STEIN + '">innerer Verlauf</text>' +
      '<line x1="604" y1="190" x2="634" y2="190" stroke="' + KIESEL + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<text x="646" y="195" fill="' + STEIN + '">Gegenseite</text>';
    svg.appendChild(legende);

    /* Bogenlängen für Reihenfolge und Qi-Weg */
    var messpfad = el("path", { d: D, fill: "none", stroke: "none" });
    svg.appendChild(messpfad);
    var TOT = messpfad.getTotalLength();
    var SAMP = 2000, samples = [];
    for (var i = 0; i <= SAMP; i++) {
      var pt = messpfad.getPointAtLength(TOT * i / SAMP);
      samples.push([pt.x, pt.y]);
    }
    P.forEach(function (p) {
      var best = 1e9, bi = 0;
      for (var i = 0; i < samples.length; i++) {
        var dx = samples[i][0] - p.x, dy = samples[i][1] - p.y, d2 = dx * dx + dy * dy;
        if (d2 < best) { best = d2; bi = i; }
      }
      p._L = TOT * bi / SAMP;
    });
    P.sort(function (a, b) { return a._L - b._L; });

    /* Schiene links: Kurzbezeichnung, im Großbild zusätzlich Pinyin (11.4) */
    var railX = (data.rail && data.rail.x) || 150;
    var ys = P.map(function (p) { return p.y; });
    var top = Math.min.apply(null, ys) - 15, bot = Math.max.apply(null, ys) + 12;
    if (bot - top < P.length * 30) {
      var mid = (top + bot) / 2; top = mid - P.length * 15; bot = mid + P.length * 15;
    }

    var detail = false;
    /* Die Schiene folgt der Höhe am Körper, nicht der Flussrichtung – sonst
       kreuzen sich die Hilfslinien bei aufsteigenden Meridianen. */
    var nachHoehe = P.slice().sort(function (a, b) { return a.y - b.y; });
    nachHoehe.forEach(function (p, rang) {
      p._rang = rang;
    });

    P.forEach(function (p) {
      var i = p._rang;
      p._ly = P.length === 1 ? (top + bot) / 2 : top + (bot - top) * i / (P.length - 1);

      p._lead = el("path", { d: "M" + railX + "," + p._ly + " L" + (p.x - 9) + "," + p.y,
        fill: "none", stroke: HAARLINIE, "stroke-width": "1" });
      gLead.appendChild(p._lead);

      var g = el("g", { role: "button", tabindex: "0" });
      g.style.cursor = "pointer";
      p._ring = el("circle", { cx: p.x, cy: p.y, r: 11, fill: "none",
        stroke: SIEGELROT, "stroke-width": 1.4, opacity: "0" });
      p._dot = el("circle", { cx: p.x, cy: p.y, r: p.key ? 5.4 : 4.4, fill: SIEGELROT,
        stroke: WEISS, "stroke-width": 1.5 });
      g.appendChild(p._ring); g.appendChild(p._dot);
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 17, fill: "transparent" }));
      g.setAttribute("aria-label", LBL + " " + p.n + ", " + p.pinyin);
      g.addEventListener("click", function (e) { e.stopPropagation(); select(i); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); select(i); }
      });
      gPts.appendChild(g);

      p._txt = el("text", { x: railX - 9, y: p._ly + 5, "text-anchor": "end", fill: STEIN,
        "font-family": '"Lato", Arial, sans-serif', "font-size": 18, "font-weight": 700,
        "letter-spacing": 0.8 });
      p._txt.textContent = LBL + " " + p.n;
      p._txt.style.cursor = "pointer";
      p._txt.addEventListener("click", function (e) { e.stopPropagation(); select(i); });
      gLab.appendChild(p._txt);
    });

    function beschriften() {
      P.forEach(function (p) {
        p._txt.textContent = detail ? (LBL + " " + p.n + "  " + p.pinyin) : (LBL + " " + p.n);
        p._txt.setAttribute("font-size", detail ? 17 : 18);
      });
    }

    /* Auswahl – ausschließlich durch Klick, nichts läuft von allein */
    var aktiv = -1;
    function select(i) {
      aktiv = i;
      P.forEach(function (q, k) {
        var on = (k === i);
        q._dot.setAttribute("r", on ? (q.key ? 7 : 6.2) : (q.key ? 5.4 : 4.4));
        q._ring.setAttribute("opacity", on ? "1" : "0");
        q._txt.setAttribute("fill", on ? TUSCHE : STEIN);
        q._lead.setAttribute("stroke", on ? STEIN : HAARLINIE);
      });
      if (opts.onPoint) opts.onPoint(P[i], i, P);
    }

    /* Qi-Fluss: abschaltbar, standardmäßig aus (10.4: nichts läuft automatisch) */
    var fliesst = false, t0 = 0, raf = 0;
    var DAUER = 14000;
    function frame(now) {
      if (!fliesst) return;
      raf = requestAnimationFrame(frame);
      var u = ((now - t0) % DAUER) / DAUER;
      var pt = messpfad.getPointAtLength(TOT * u);
      qi.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
    }
    function setFlow(on) {
      fliesst = !!on;
      qi.setAttribute("opacity", fliesst ? "1" : "0");
      if (fliesst) { t0 = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    }

    select(0);

    return {
      svg: svg, points: P, data: data,
      select: select,
      next: function () { select(Math.min(P.length - 1, aktiv + 1)); },
      prev: function () { select(Math.max(0, aktiv - 1)); },
      aktiv: function () { return aktiv; },
      setFlow: setFlow,
      isFlowing: function () { return fliesst; },
      setDetail: function (v) { detail = !!v; beschriften(); },
      setLayer: function (which, on) {
        if (which === "inner") gInner.setAttribute("opacity", on ? ".9" : "0");
        if (which === "mirror") gMirror.setAttribute("opacity", on ? ".45" : "0");
        if (which === "labels") {
          gLab.setAttribute("opacity", on ? "1" : "0");
          gLead.setAttribute("opacity", on ? "1" : "0");
          legende.setAttribute("opacity", on ? "1" : "0");
        }
      },
      /* Ausschnitt um Verlauf und Punkte, für das Großbild */
      ausschnitt: function (eng) {
        if (!eng) return svg.setAttribute("viewBox", "0 0 " + W + " " + H);
        var xs = [], ys2 = [];
        data.path.forEach(function (a) { xs.push(a[0]); ys2.push(a[1]); });
        P.forEach(function (p) { xs.push(p.x); ys2.push(p.y); });
        var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs),
            y0 = Math.min.apply(null, ys2), y1 = Math.max.apply(null, ys2);
        x0 -= 40; x1 += 60; y0 -= 60; y1 += 60;
        /* Beschriftung mit einrechnen, sonst wird der längste Name abgeschnitten */
        if (gLab.getAttribute("opacity") !== "0") {
          try {
            var b = gLab.getBBox();
            x0 = Math.min(x0, b.x - 14); y0 = Math.min(y0, b.y - 14);
            y1 = Math.max(y1, b.y + b.height + 14);
          } catch (e) { /* getBBox scheitert, wenn nichts gezeichnet ist */ }
        }
        x0 = Math.max(0, x0); y0 = Math.max(0, y0);
        x1 = Math.min(W, x1); y1 = Math.min(H, y1);
        svg.setAttribute("viewBox", x0 + " " + y0 + " " + (x1 - x0) + " " + (y1 - y0));
      }
    };
  }

  global.Meridian = { register: register, get: get, mount: mount, spline: spline, W: W, H: H };
})(window);
