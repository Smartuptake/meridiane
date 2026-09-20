/* Seitenlogik für das Tableau der sechs heilenden Laute. */
(function () {
  "use strict";
  var S = window.SechsLaute, W = window.Wandlungsphasen;
  function $(x) { return document.getElementById(x); }
  function han(t) {
    var s = document.createElement("span"); s.className = "hanzi"; s.textContent = t; return s;
  }

  document.title = S.titel + " – Healthlane Academy";
  $("hLabel").textContent = S.untertitel;
  $("hTitel").textContent = S.titel;
  $("hLead").textContent = S.einleitung;
  [["Laute", String(S.laute.length)],
   ["Ordnung", "Nährender Zyklus ab Metall"],
   ["Haltung", "Fünf im Sitzen, einer in Rückenlage"],
   ["Atem", "Ein Laut je Ausatmung"]
  ].forEach(function (r) {
    var li = document.createElement("li");
    var b = document.createElement("b"); b.textContent = r[0];
    var sp = document.createElement("span"); sp.textContent = r[1];
    li.appendChild(b); li.appendChild(sp); $("hMeta").appendChild(li);
  });

  $("oOrdnung").textContent = S.ordnung;
  $("oHinweis").textContent = S.hinweis;
  $("oQuelle").textContent = S.quelle;

  /* Phasenschaubild ohne Hervorhebung – der Zyklus selbst ist die Aussage */
  if (window.Wuxing) Wuxing.diagramm($("svgWuxing"), null);

  /* Übersichtstafel */
  var t = $("tUebersicht");
  var thead = document.createElement("thead");
  var kopf = document.createElement("tr");
  ["", "Organ", "Laut", "Farbe", "Wandlungsphase", "Wandlung der Emotion"].forEach(function (h) {
    var th = document.createElement("th"); th.textContent = h; kopf.appendChild(th);
  });
  thead.appendChild(kopf); t.appendChild(thead);
  var tbody = document.createElement("tbody");
  S.laute.forEach(function (l) {
    var tr = document.createElement("tr");
    var nr = document.createElement("th"); nr.scope = "row"; nr.textContent = l.nr;
    tr.appendChild(nr);
    [l.organ, l.laut, l.farbe || "–"].forEach(function (v) {
      var td = document.createElement("td"); td.textContent = v; tr.appendChild(td);
    });
    var ph = document.createElement("td");
    if (l.wx && W) {
      ph.appendChild(document.createTextNode(W.phasen[l.wx].name));
      ph.appendChild(han(W.phasen[l.wx].han));
    } else { ph.textContent = "keine eigene Phase"; }
    tr.appendChild(ph);
    var wd = document.createElement("td");
    wd.textContent = l.von ? (l.von + " → " + l.zu) : "gleicht die drei Ebenen aus";
    tr.appendChild(wd);
    tbody.appendChild(tr);
  });
  t.appendChild(tbody);

  /* Die sechs Übungen */
  var host = $("lauteListe");
  S.laute.forEach(function (l) {
    var art = document.createElement("article");
    art.className = "laut";

    if (l.bild) {
      var fig = document.createElement("figure");
      fig.className = "laut-bild";
      var img = document.createElement("img");
      img.src = "../img/uebungen/" + l.bild;
      img.alt = l.bildAlt || (l.organ + ": Übungshaltung");
      img.loading = "lazy";
      img.decoding = "async";
      fig.appendChild(img);
      art.appendChild(fig);
    }
    var text = document.createElement("div");
    text.className = "laut-text";

    var kopfz = document.createElement("div"); kopfz.className = "laut-kopf";
    var nr = document.createElement("span"); nr.className = "nr"; nr.textContent = l.nr;
    var block = document.createElement("div");

    var h3 = document.createElement("h3"); h3.textContent = l.organ;
    var ton = document.createElement("p"); ton.className = "ton"; ton.textContent = l.laut;

    var meta = document.createElement("p"); meta.className = "laut-meta";
    var teile = [];
    if (l.farbe) teile.push(l.farbe);
    if (l.wx && W) teile.push(W.phasen[l.wx].name + " " + W.phasen[l.wx].han);
    if (l.lage) teile.push(l.lage);
    teile.push(l.wdh);
    meta.textContent = teile.join("  ·  ");

    block.appendChild(h3); block.appendChild(ton); block.appendChild(meta);
    if (l.von) {
      var wd = document.createElement("p"); wd.className = "wandlung";
      wd.textContent = l.von + " → " + l.zu;
      block.appendChild(wd);
    }
    kopfz.appendChild(nr); kopfz.appendChild(block);
    text.appendChild(kopfz);

    var dl = document.createElement("dl"); dl.className = "schritte";
    l.schritte.forEach(function (s) {
      var dt = document.createElement("dt"); dt.textContent = s.t;
      var dd = document.createElement("dd"); dd.textContent = s.x;
      dl.appendChild(dt); dl.appendChild(dd);
    });
    text.appendChild(dl);

    var an = document.createElement("p"); an.className = "anlaesse";
    var lb = document.createElement("span"); lb.className = "label";
    lb.textContent = "In der Vorlage genannte Anlässe";
    an.appendChild(lb);
    an.appendChild(document.createTextNode(l.anlaesse));
    text.appendChild(an);

    art.appendChild(text);
    host.appendChild(art);
  });
})();
