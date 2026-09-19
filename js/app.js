/* Seitenlogik für meridian.html */
(function () {
  "use strict";

  var params = new URLSearchParams(location.search);
  var id = (params.get("m") || "lu").toLowerCase();

  var WX = { holz:"Holz", feuer:"Feuer", erde:"Erde", metall:"Metall", wasser:"Wasser" };

  function loadData(id, cb, err) {
    var s = document.createElement("script");
    s.src = "data/" + id + ".js";
    s.onload = function () { cb(Meridian.get(id)); };
    s.onerror = err;
    document.head.appendChild(s);
  }

  function chip(label, value) {
    var li = document.createElement("li");
    var b = document.createElement("b"); b.textContent = label;
    var s = document.createElement("span"); s.textContent = value;
    li.appendChild(b); li.appendChild(s); return li;
  }

  function notYet() {
    var k = (window.MeridianKatalog || []).filter(function (m) { return m.id === id; })[0];
    var name = k ? k.name : id.toUpperCase();
    document.getElementById("hTitle").textContent = (k && k.titel) || (name + "meridian");
    document.getElementById("hIntro").textContent =
      "Dieser Meridian ist noch nicht kalibriert. Die Punktlagen werden mit dem Kalibrator " +
      "auf die " + (k ? ({front:"Vorder", back:"Rück", side:"Seiten"}[k.view] || "Vorder") : "Vorder") +
      "ansicht gesetzt und dann hier eingetragen.";
    document.querySelector(".stage-grid").style.display = "none";
  }

  loadData(id, function (data) {
    if (!data) return notYet();

    /* Kopf */
    var titel = data.titel || (data.name + "meridian");
    document.title = titel + " – Healthlane Academy";
    document.getElementById("hChannel").textContent =
      data.channel + " " + (data.channelHan || "") + " · " + (data.yin ? "Yin" : "Yang");
    document.getElementById("hTitle").firstChild.nodeValue = titel;
    document.getElementById("hHan").textContent = data.nameHan || "";
    document.getElementById("hIntro").textContent = data.intro || "";

    var meta = document.getElementById("hMeta");
    meta.appendChild(chip("Element", data.element + " " + (data.elementHan || "")));
    meta.appendChild(chip("Kopplung", data.coupledName || "–"));
    meta.appendChild(chip("Organuhr", data.clock));
    meta.appendChild(chip("Punkte", String(data.pointCount)));
    meta.appendChild(chip("Richtung", data.direction));
    meta.appendChild(chip("Kennung", (data.codeDe || data.code) + " / " + data.code));

    var lbl = data.codeDe || data.code;
    document.getElementById("lRange").textContent = lbl + " 1 → " + lbl + " " + data.pointCount;

    /* Detailtafel */
    var dCode = document.getElementById("dCode"), dName = document.getElementById("dName"),
        dDe = document.getElementById("dDe"), dTags = document.getElementById("dTags"),
        dLoc = document.getElementById("dLoc"), dInd = document.getElementById("dInd"),
        dNeedle = document.getElementById("dNeedle"), listEl = document.getElementById("ptList");

    var rows = [];

    function showPoint(p, i) {
      dCode.textContent = lbl + " " + p.n;
      dName.innerHTML = "";
      dName.appendChild(document.createTextNode(p.pinyin));
      var h = document.createElement("span"); h.className = "han"; h.textContent = p.han || "";
      dName.appendChild(h);
      dDe.textContent = p.de || "";
      dTags.innerHTML = "";
      (p.tags || []).forEach(function (t, k) {
        var s = document.createElement("span");
        s.className = "tag" + (k > 2 ? " plain" : "");
        s.textContent = t; dTags.appendChild(s);
      });
      if (p.wx) {
        var w = document.createElement("span");
        w.className = "tag wx wx-" + p.wx;
        w.textContent = WX[p.wx] + "punkt";
        dTags.insertBefore(w, dTags.firstChild);
      }
      dLoc.textContent = p.loc || "–";
      dInd.textContent = p.ind || "–";
      dNeedle.textContent = p.nd || "–";
      rows.forEach(function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
      if (rows[i] && rows[i].scrollIntoView) rows[i].scrollIntoView({ block: "nearest" });
    }

    var ctl = Meridian.mount({
      svg: document.getElementById("plate"),
      data: data,
      onPoint: showPoint
    });

    /* Punktliste in Flussrichtung */
    ctl.points.forEach(function (p, i) {
      var li = document.createElement("li"), b = document.createElement("button");
      b.type = "button";
      b.innerHTML =
        '<span class="p-code">' + lbl + " " + p.n + '</span>' +
        '<span class="p-name">' + p.pinyin + '<i>' + (p.han || "") + '</i></span>' +
        '<span class="p-role">' + (p.role || "") + '</span>';
      b.addEventListener("click", function () { ctl.jumpTo(i); });
      li.appendChild(b); listEl.appendChild(li); rows.push(b);
    });
    showPoint(ctl.points[0], 0);

    /* Bedienung */
    var btnPlay = document.getElementById("btnPlay");
    function setPlaying(v) {
      ctl.setPlaying(v);
      btnPlay.textContent = v ? "⏸ Pause" : "▶ Abspielen";
    }
    setPlaying(ctl.isPlaying());
    btnPlay.addEventListener("click", function () { setPlaying(!ctl.isPlaying()); });
    document.getElementById("btnRestart").addEventListener("click", function () {
      ctl.jumpTo(0); setPlaying(true);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".speed button"), function (b) {
      b.addEventListener("click", function () {
        ctl.setSpeed(parseFloat(b.dataset.speed));
        Array.prototype.forEach.call(document.querySelectorAll(".speed button"), function (o) {
          o.setAttribute("aria-pressed", o === b ? "true" : "false");
        });
      });
    });
    [["btnLabels", "labels"], ["btnInner", "inner"], ["btnMirror", "mirror"]].forEach(function (pair) {
      var btn = document.getElementById(pair[0]), on = true;
      if (pair[1] === "mirror" && data.mirror === false) { btn.disabled = true; btn.setAttribute("aria-pressed", "false"); return; }
      btn.addEventListener("click", function () {
        on = !on; btn.setAttribute("aria-pressed", on ? "true" : "false");
        ctl.setLayer(pair[1], on);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === " ") { e.preventDefault(); setPlaying(!ctl.isPlaying()); }
      else if (e.key === "ArrowRight") { e.preventDefault(); ctl.next(); setPlaying(false); }
      else if (e.key === "ArrowLeft")  { e.preventDefault(); ctl.prev(); setPlaying(false); }
    });
  }, notYet);
})();
