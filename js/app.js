/* Seitenlogik der Meridianseite.
   Nichts läuft von allein: Punkte werden angeklickt, nicht abgespielt. */
(function () {
  "use strict";

  var id = (new URLSearchParams(location.search).get("m") || "lu").toLowerCase();

  function $(x) { return document.getElementById(x); }
  function han(t) {
    var s = document.createElement("span"); s.className = "hanzi"; s.textContent = t; return s;
  }
  function katalogEintrag(id) {
    return (window.MeridianKatalog || []).filter(function (m) { return m.id === id; })[0];
  }

  function nochNicht() {
    var k = katalogEintrag(id);
    var ansicht = { front: "Vorder", back: "Rück", side: "Seiten" }[k && k.view] || "Vorder";
    document.title = (k ? k.titel : "Meridian") + " – Healthlane Academy";
    $("hKanal").textContent = "In Arbeit";
    $("hTitel").textContent = k ? k.titel : "Meridian";
    $("hIntro").textContent = "Dieser Meridian ist noch nicht kalibriert. Die Punktlagen werden " +
      "mit dem Kalibrator auf die " + ansicht + "ansicht gesetzt und dann hier eingetragen.";
    ["organ", "folge"].forEach(function (s) { $(s).style.display = "none"; });
    document.querySelector(".tafel-grid").style.display = "none";
  }

  var s = document.createElement("script");
  s.src = "data/" + id + ".js";
  s.onerror = nochNicht;
  s.onload = function () {
    var data = Meridian.get(id);
    if (!data) return nochNicht();
    aufbauen(data);
  };
  document.head.appendChild(s);

  function aufbauen(data) {
    var lbl = data.codeDe || data.code;
    var titel = data.titel || (data.name + "meridian");
    document.title = titel + " – Healthlane Academy";

    /* --- Kopf --- */
    $("hKanal").textContent = data.channel + " " + (data.channelHan || "") +
                              " · " + (data.yin ? "Yin" : "Yang") + " · Umlauf " + (data.ord <= 4 ? 1 : data.ord <= 8 ? 2 : 3);
    var h1 = $("hTitel"); h1.textContent = titel;
    if (data.nameHan) h1.appendChild(han(data.nameHan));
    $("hIntro").textContent = data.intro || "";
    [["Element", data.element + " " + (data.elementHan || "")],
     ["Kopplung", data.coupledName || "–"],
     ["Organuhr", data.clock],
     ["Punkte", String(data.pointCount)],
     ["Flussrichtung", data.direction],
     ["Kennung", lbl + " · " + data.code]
    ].forEach(function (r) {
      var li = document.createElement("li");
      var b = document.createElement("b"); b.textContent = r[0];
      var sp = document.createElement("span"); sp.textContent = r[1];
      li.appendChild(b); li.appendChild(sp); $("hMeta").appendChild(li);
    });
    $("fTitel").textContent = lbl + " 1 bis " + lbl + " " + data.pointCount;
    $("gTitel").textContent = titel;

    /* --- Organabschnitt --- */
    var o = data.organ;
    if (o) {
      $("oTitel").textContent = o.titel;
      if (o.han) $("oTitel").appendChild(han(o.han));
      o.text.forEach(function (t) {
        var p = document.createElement("p"); p.textContent = t; $("oText").appendChild(p);
      });
      o.eigenschaften.forEach(function (e) {
        var d = document.createElement("div");
        var dt = document.createElement("dt"); dt.textContent = e.k;
        var dd = document.createElement("dd"); dd.textContent = e.v;
        d.appendChild(dt); d.appendChild(dd); $("oEigenschaften").appendChild(d);
      });
      $("oMusterTitel").textContent = o.musterTitel;
      o.muster.forEach(function (m) {
        var li = document.createElement("li");
        var h = document.createElement("h3");
        h.textContent = m.name;
        if (m.han) h.appendChild(han(m.han));
        var pin = document.createElement("p");
        pin.className = "punkte"; pin.style.margin = "0 0 8px";
        pin.textContent = m.pinyin;
        var z = document.createElement("p"); z.textContent = m.zeichen;
        var pk = document.createElement("p"); pk.className = "punkte";
        pk.textContent = "Häufig verwendete Punkte: " + m.punkte;
        li.appendChild(h); li.appendChild(pin); li.appendChild(z); li.appendChild(pk);
        $("oMuster").appendChild(li);
      });
      $("oHinweis").textContent = o.hinweis;
    } else {
      $("organ").style.display = "none";
    }

    /* --- Tafel --- */
    var zeilen = [];
    var ctl = Meridian.mount({
      svg: $("plate"), data: data,
      onPoint: function (p, i) { punktZeigen(p, i); }
    });

    function punktZeigen(p, i) {
      $("dKennung").textContent = lbl + " " + p.n + "  ·  " + data.code + " " + p.n;
      var n = $("dName"); n.textContent = p.pinyin;
      if (p.han) n.appendChild(han(p.han));
      $("dDe").textContent = p.de || "";
      $("dEn").textContent = p.en ? "englisch: " + p.en : "";
      var m = $("dMerkmale"); m.innerHTML = "";
      if (p.antik) {
        var a = document.createElement("span"); a.className = "merkmal";
        a.textContent = "Antikpunkt"; m.appendChild(a);
      }
      (p.tags || []).forEach(function (t, k) {
        var sp = document.createElement("span");
        sp.className = "merkmal" + (k > 1 ? " offen" : "");
        sp.textContent = t; m.appendChild(sp);
      });
      $("dLage").textContent = p.loc || "–";
      $("dWirkung").textContent = p.ind || "–";
      $("dStich").textContent = p.nd || "–";
      $("gPunkt").textContent = lbl + " " + p.n + " " + p.pinyin;
      zeilen.forEach(function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
    }

    /* --- Punktfolge --- */
    ctl.points.forEach(function (p, i) {
      var li = document.createElement("li"), b = document.createElement("button");
      b.type = "button";
      var k = document.createElement("span"); k.className = "k"; k.textContent = lbl + " " + p.n;
      var nm = document.createElement("span"); nm.className = "p";
      nm.textContent = p.pinyin; if (p.han) nm.appendChild(han(p.han));
      var en = document.createElement("span"); en.className = "e";
      en.textContent = (p.de || "") + (p.en ? " · " + p.en : "");
      var r = document.createElement("span"); r.className = "r"; r.textContent = p.role || "";
      b.appendChild(k); b.appendChild(nm); b.appendChild(en); b.appendChild(r);
      b.addEventListener("click", function () {
        ctl.select(i);
        $("tafel").scrollIntoView({ block: "center", behavior: "smooth" });
      });
      li.appendChild(b); $("ptListe").appendChild(li); zeilen.push(b);
    });
    punktZeigen(ctl.points[0], 0);

    /* --- Schalter --- */
    function umschalter(btnId, fn, start) {
      var b = $(btnId), an = start;
      b.setAttribute("aria-pressed", an ? "true" : "false");
      b.addEventListener("click", function () {
        an = !an; b.setAttribute("aria-pressed", an ? "true" : "false"); fn(an);
      });
      return { setze: function (v) { an = v; b.setAttribute("aria-pressed", v ? "true" : "false"); } };
    }
    umschalter("btnInner", function (v) { ctl.setLayer("inner", v); }, true);
    umschalter("btnLabels", function (v) { ctl.setLayer("labels", v); }, true);
    if (data.mirror === false) $("btnMirror").disabled = true;
    else umschalter("btnMirror", function (v) { ctl.setLayer("mirror", v); }, true);

    var flussSchalter = umschalter("btnFluss", function (v) { fluss(v); }, false);
    var gFlussSchalter = umschalter("gFluss", function (v) { fluss(v); }, false);
    function fluss(v) { ctl.setFlow(v); flussSchalter.setze(v); gFlussSchalter.setze(v); }

    /* --- Großbild --- */
    var gross = $("grossbild"), buehne = $("gBuehne"), tafel = $("tafel"), offen = false;
    function oeffnen() {
      if (offen) return;
      offen = true;
      buehne.appendChild(ctl.svg);
      ctl.setDetail(true);
      gross.setAttribute("data-offen", "");
      document.body.style.overflow = "hidden";
      $("gSchliessen").focus();
    }
    function schliessen() {
      if (!offen) return;
      offen = false;
      tafel.insertBefore(ctl.svg, tafel.firstChild);
      ctl.setDetail(false);
      ctl.ausschnitt(false);
      $("gAusschnitt").setAttribute("aria-pressed", "false");
      gross.removeAttribute("data-offen");
      document.body.style.overflow = "";
      $("btnGross").focus();
    }
    tafel.addEventListener("click", oeffnen);
    tafel.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); oeffnen(); }
    });
    $("btnGross").addEventListener("click", function (e) { e.stopPropagation(); oeffnen(); });
    $("gSchliessen").addEventListener("click", schliessen);
    umschalter("gAusschnitt", function (v) { ctl.ausschnitt(v); }, false);

    document.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === "Escape" && offen) { e.preventDefault(); schliessen(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); ctl.next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); ctl.prev(); }
      else if (e.key === "g" || e.key === "G") { e.preventDefault(); offen ? schliessen() : oeffnen(); }
    });
  }
})();
