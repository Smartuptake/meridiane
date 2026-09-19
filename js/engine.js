/* ===========================================================
   Meridian-Engine
   Zeichnet einen Meridianverlauf auf eine Figur und lässt einen
   Qi-Punkt in Flussrichtung daran entlanglaufen, mit Halt an
   jedem eingetragenen Akupunkturpunkt.

   Die Engine kennt keinen einzelnen Meridian. Sie bekommt:
     data.path    Stützpunkte des äußeren Verlaufs  [[x,y], …]
     data.points  die Punkte, die darauf liegen
   und rechnet den Rest (Spline, Bogenlängen, Zeitplan) selbst.

   Bildkoordinaten sind immer 880 × 1168 – das Raster aller Figuren.
   =========================================================== */
(function (global) {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var W = 880, H = 1168;

  var store = {};
  function register(data) { store[data.id] = data; }
  function get(id) { return store[id]; }
  function all() { return Object.keys(store).map(function (k) { return store[k]; }); }

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
      var c1x = p1[0] + (p2[0] - p0[0]) / 6 * tension,
          c1y = p1[1] + (p2[1] - p0[1]) / 6 * tension,
          c2x = p2[0] - (p3[0] - p1[0]) / 6 * tension,
          c2y = p2[1] - (p3[1] - p1[1]) / 6 * tension;
      d += "C" + c1x.toFixed(2) + "," + c1y.toFixed(2) + " " +
                 c2x.toFixed(2) + "," + c2y.toFixed(2) + " " + p2[0] + "," + p2[1];
    }
    return d;
  }

  var DEFS =
    '<filter id="fGlow" x="-120%" y="-120%" width="340%" height="340%">' +
      '<feGaussianBlur stdDeviation="7" result="b1"/>' +
      '<feMerge><feMergeNode in="b1"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>' +
    '</filter>' +
    '<radialGradient id="gQi">' +
      '<stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>' +
      '<stop offset="28%" stop-color="#fff6dd" stop-opacity=".92"/>' +
      '<stop offset="58%" stop-color="#ffd98f" stop-opacity=".42"/>' +
      '<stop offset="100%" stop-color="#ffb84d" stop-opacity="0"/>' +
    '</radialGradient>';

  /* ---------------------------------------------------------
     mount(opts) → Steuerung
     opts: { svg, data, imgBase, onPoint(point, index) }
     --------------------------------------------------------- */
  function mount(opts) {
    var svg = opts.svg, data = opts.data;
    var imgBase = opts.imgBase || "img/";
    var P = data.points.slice();
    var LBL = data.codeDe || data.code;

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label",
      data.name + "meridian von " + LBL + " 1 bis " + LBL + " " + data.pointCount);
    svg.innerHTML = "";

    var defs = el("defs", {}); defs.innerHTML = DEFS; svg.appendChild(defs);

    svg.appendChild(el("image", {
      href: imgBase + data.view + ".png", x: 0, y: 0, width: W, height: H,
      preserveAspectRatio: "xMidYMid meet"
    }));

    var D = spline(data.path);

    /* Gegenseite – nur bei Ansichten mit Mittelachse sinnvoll */
    var gMirror = el("g", { transform: "translate(" + W + ",0) scale(-1,1)", opacity: ".2" });
    if (data.mirror !== false) {
      gMirror.appendChild(el("path", {
        d: D, fill: "none", stroke: "#dfe8e7", "stroke-width": 3, "stroke-linecap": "round"
      }));
      P.forEach(function (p) {
        gMirror.appendChild(el("circle", { cx: p.x, cy: p.y, r: 3.6, fill: "#dfe8e7" }));
      });
      svg.appendChild(gMirror);
    }

    /* Innerer Verlauf und Äste – schematisch, punktlos */
    var gInner = el("g", { opacity: ".55" });
    if (data.inner) gInner.appendChild(el("path", {
      d: data.inner, fill: "none", stroke: "#6fb3a5", "stroke-width": 2.6,
      "stroke-dasharray": "7 9", "stroke-linecap": "round", opacity: ".8"
    }));
    (data.branches || []).forEach(function (b) {
      gInner.appendChild(el("path", {
        d: b.d, fill: "none", stroke: "#6fb3a5", "stroke-width": 2.4,
        "stroke-dasharray": "6 8", "stroke-linecap": "round", opacity: ".7"
      }));
    });
    svg.appendChild(gInner);

    /* Kanal: Grundlinie, erleuchteter Teil, Kometenschweif */
    var base  = el("path", { d: D, fill: "none", stroke: "#dfe8e7", "stroke-width": 4.2, "stroke-linecap": "round", opacity: ".38" });
    var lit   = el("path", { d: D, fill: "none", stroke: "#ffe9b4", "stroke-width": 4.2, "stroke-linecap": "round", opacity: ".55" });
    var trail = el("path", { d: D, fill: "none", stroke: "#fff8e6", "stroke-width": 5.4, "stroke-linecap": "round", filter: "url(#fGlow)", opacity: ".95" });
    svg.appendChild(base); svg.appendChild(lit); svg.appendChild(trail);

    var gLead = el("g", {}), gPts = el("g", {}), gLab = el("g", {});
    svg.appendChild(gLead); svg.appendChild(gPts); svg.appendChild(gLab);

    /* Legende */
    var legend = el("g", { "font-family": "IBM Plex Mono, monospace", "font-size": 15, "letter-spacing": ".6" });
    legend.innerHTML =
      '<line x1="604" y1="100" x2="634" y2="100" stroke="#dfe8e7" stroke-width="4" stroke-linecap="round" opacity=".55"/>' +
      '<text x="646" y="105" fill="#a3b8bf">äußerer Verlauf</text>' +
      '<circle cx="619" cy="130" r="4.4" fill="#e9f1f0"/>' +
      '<circle cx="619" cy="130" r="10" fill="none" stroke="#cfa856" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>' +
      '<text x="646" y="135" fill="#a3b8bf">Antik-/Hauptpunkt</text>' +
      '<circle cx="619" cy="160" r="9" fill="url(#gQi)"/><circle cx="619" cy="160" r="3.4" fill="#fff"/>' +
      '<text x="646" y="165" fill="#a3b8bf">fließendes Qi</text>' +
      '<line x1="604" y1="190" x2="634" y2="190" stroke="#6fb3a5" stroke-width="2.6" stroke-dasharray="7 9" stroke-linecap="round"/>' +
      '<text x="646" y="195" fill="#7fa9a2">innerer Verlauf</text>';
    svg.appendChild(legend);

    /* Qi-Punkt */
    var qi = el("g", { opacity: 0 });
    var qiHalo = el("circle", { r: 26, fill: "url(#gQi)" });
    var qiRing = el("circle", { r: 11, fill: "none", stroke: "#fff6dd", "stroke-width": 1.6, opacity: ".7" });
    var qiCore = el("circle", { r: 5.2, fill: "#ffffff", filter: "url(#fGlow)" });
    qi.appendChild(qiHalo); qi.appendChild(qiRing); qi.appendChild(qiCore);
    svg.appendChild(qi);
    var pulse = el("circle", { r: 10, fill: "none", stroke: "#ffe9b4", "stroke-width": 2, opacity: 0 });
    svg.appendChild(pulse);

    /* Bogenlänge jedes Punktes auf dem Spline suchen */
    var TOT = base.getTotalLength();
    lit.style.strokeDasharray = TOT + " " + TOT;
    lit.style.strokeDashoffset = TOT;
    var TRAIL = 58;
    trail.style.strokeDasharray = TRAIL + " " + (TOT + TRAIL);
    trail.style.strokeDashoffset = TRAIL;

    var SAMP = 2400, samples = [];
    for (var i = 0; i <= SAMP; i++) {
      var L = TOT * i / SAMP, pt = base.getPointAtLength(L);
      samples.push([pt.x, pt.y, L]);
    }
    P.forEach(function (p) {
      var best = 1e9, bl = 0;
      for (var i = 0; i < samples.length; i++) {
        var dx = samples[i][0] - p.x, dy = samples[i][1] - p.y, d2 = dx * dx + dy * dy;
        if (d2 < best) { best = d2; bl = samples[i][2]; }
      }
      p._L = bl;
    });
    P.sort(function (a, b) { return a._L - b._L; });

    /* Marker, Hilfslinien und Schiene */
    var railX = (data.rail && data.rail.x) || 118;
    var ys = P.map(function (p) { return p.y; });
    var railTop = Math.min.apply(null, ys) - 15;
    var railBot = Math.max.apply(null, ys) + 12;
    if (railBot - railTop < P.length * 30) {
      var mid = (railTop + railBot) / 2, half = P.length * 15;
      railTop = mid - half; railBot = mid + half;
    }

    P.forEach(function (p, i) {
      p._ly = P.length === 1 ? (railTop + railBot) / 2
            : railTop + (railBot - railTop) * i / (P.length - 1);

      p._lead = el("path", {
        d: "M" + railX + "," + p._ly + " L" + (p.x - 9) + "," + p.y,
        fill: "none", stroke: "#4d6b74", "stroke-width": ".9", opacity: ".32"
      });
      gLead.appendChild(p._lead);

      var g = el("g", { role: "button", tabindex: "0" });
      g.style.cursor = "pointer";
      if (p.key) g.appendChild(el("circle", {
        cx: p.x, cy: p.y, r: 12, fill: "none", stroke: "#cfa856",
        "stroke-width": 1, "stroke-dasharray": "3 4", opacity: ".55"
      }));
      p._halo = el("circle", {
        cx: p.x, cy: p.y, r: p.key ? 9 : 7, fill: "none",
        stroke: "#dfe8e7", "stroke-width": 1.2, opacity: p.key ? ".4" : "0"
      });
      p._dot = el("circle", {
        cx: p.x, cy: p.y, r: p.key ? 4.6 : 3.5, fill: "#e9f1f0",
        stroke: "#0b1519", "stroke-width": 1.3
      });
      g.appendChild(p._halo); g.appendChild(p._dot);
      g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 16, fill: "transparent" }));
      g.setAttribute("aria-label", LBL + " " + p.n + " " + p.pinyin);
      g.addEventListener("click", function () { jumpTo(i); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); jumpTo(i); }
      });
      gPts.appendChild(g);

      p._txt = el("text", {
        x: railX - 8, y: p._ly + 6, "text-anchor": "end", fill: "#a3b8bf",
        "font-family": "IBM Plex Mono, monospace", "font-size": 19, "letter-spacing": 1.4
      });
      p._txt.textContent = LBL + " " + p.n;
      p._txt.style.cursor = "pointer";
      p._txt.addEventListener("click", function () { jumpTo(i); });
      gLab.appendChild(p._txt);
    });

    /* ---------------- Ablauf ---------------- */
    var DWELL = 950, PXMS = 0.105, MINTRAVEL = 330, RESET = 1100;
    var speed = 1, playing = true, idx = 0, phase = "dwell",
        t0 = 0, dur = DWELL, fromL = P[0]._L, toL = P[0]._L;
    var reduce = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function easeInOut(u) { return u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2; }

    function place(L) {
      var pt = base.getPointAtLength(L);
      qi.setAttribute("transform", "translate(" + pt.x + "," + pt.y + ")");
      qi.setAttribute("opacity", "1");
      lit.style.strokeDashoffset = (TOT - L);
      trail.style.strokeDashoffset = (TRAIL - L);
    }
    function setPhase(ph, d) { phase = ph; dur = d; t0 = performance.now(); }
    function firePulse(p) {
      pulse.setAttribute("cx", p.x); pulse.setAttribute("cy", p.y);
      pulse.setAttribute("r", 9); pulse.setAttribute("opacity", ".85");
      pulse._t = performance.now();
    }
    function highlight(i) {
      P.forEach(function (q, k) {
        var on = (k === i);
        q._txt.setAttribute("fill", on ? "#ffe9b4" : "#a3b8bf");
        q._txt.setAttribute("font-size", on ? 21 : 19);
        q._lead.setAttribute("opacity", on ? ".85" : ".32");
        q._lead.setAttribute("stroke", on ? "#cfa856" : "#4d6b74");
        q._lead.setAttribute("stroke-width", on ? 1.3 : .9);
        q._halo.setAttribute("stroke", on ? "#ffe9b4" : "#dfe8e7");
        q._halo.setAttribute("opacity", on ? ".95" : (q.key ? ".4" : "0"));
        q._halo.setAttribute("r", on ? (q.key ? 12 : 10) : (q.key ? 9 : 7));
        q._dot.setAttribute("fill", on ? "#fff8e6" : "#e9f1f0");
      });
      if (opts.onPoint) opts.onPoint(P[i], i, P);
    }
    function jumpTo(i) {
      idx = i; place(P[i]._L); fromL = toL = P[i]._L;
      highlight(i); setPhase("dwell", DWELL); firePulse(P[i]);
    }

    function frame(now) {
      requestAnimationFrame(frame);
      if (pulse._t) {
        var pe = (now - pulse._t) / 700;
        if (pe >= 1) { pulse.setAttribute("opacity", "0"); pulse._t = 0; }
        else { pulse.setAttribute("r", 9 + pe * 22); pulse.setAttribute("opacity", (0.85 * (1 - pe)).toFixed(3)); }
      }
      var br = 1 + Math.sin(now / 420) * 0.12;
      qiCore.setAttribute("r", (5.2 * br).toFixed(2));
      qiHalo.setAttribute("r", (26 * br).toFixed(2));
      qiRing.setAttribute("r", (11 * (2 - br)).toFixed(2));
      qiRing.setAttribute("opacity", (0.75 - (br - 1) * 1.6).toFixed(3));

      if (!playing) return;
      var e = (now - t0) * speed;

      if (phase === "dwell") {
        if (e >= dur) {
          if (idx >= P.length - 1) setPhase("hold", RESET);
          else {
            fromL = P[idx]._L; toL = P[idx + 1]._L;
            setPhase("travel", Math.max(MINTRAVEL, (toL - fromL) / PXMS));
          }
        }
      } else if (phase === "travel") {
        var u = Math.min(1, e / dur);
        place(fromL + (toL - fromL) * easeInOut(u));
        if (u >= 1) { idx++; highlight(idx); firePulse(P[idx]); setPhase("dwell", DWELL); }
      } else if (phase === "hold") {
        var f = Math.max(0, 1 - e / dur);
        qi.setAttribute("opacity", f.toFixed(3));
        lit.setAttribute("opacity", (0.55 * f).toFixed(3));
        if (e >= dur) {
          lit.setAttribute("opacity", ".55");
          idx = 0; place(P[0]._L); highlight(0); firePulse(P[0]); setPhase("dwell", DWELL);
        }
      }
    }

    place(P[0]._L); highlight(0); firePulse(P[0]);
    if (reduce) playing = false; else setPhase("dwell", DWELL);
    requestAnimationFrame(frame);

    return {
      points: P,
      jumpTo: jumpTo,
      next: function () { jumpTo(Math.min(P.length - 1, idx + 1)); },
      prev: function () { jumpTo(Math.max(0, idx - 1)); },
      isPlaying: function () { return playing; },
      setPlaying: function (v) { playing = v; if (v) t0 = performance.now(); },
      setSpeed: function (v) { speed = v; t0 = performance.now(); },
      setLayer: function (which, on) {
        if (which === "inner") gInner.setAttribute("opacity", on ? ".55" : "0");
        if (which === "mirror") gMirror.setAttribute("opacity", on ? ".2" : "0");
        if (which === "labels") {
          gLab.setAttribute("opacity", on ? "1" : "0");
          gLead.setAttribute("opacity", on ? "1" : "0");
          legend.setAttribute("opacity", on ? "1" : "0");
        }
      }
    };
  }

  global.Meridian = { register: register, get: get, all: all, mount: mount, spline: spline, W: W, H: H };
})(window);
