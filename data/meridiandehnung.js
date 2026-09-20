/* Meridian-Dehnung – Makko-Ho.
   Inhalt unverändert aus Meridiandehnung-komplett-mit-Erklärungen.pdf übernommen;
   ergänzt um Wandlungsphase und Umlauf. Kurzformen nach dem Katalog der Anwendung
   (MP, Pe); die Schreibweise der Vorlage steht als Zweitnennung dabei. */
window.Meridiandehnung = {
  titel: "Meridian-Dehnung",
  untertitel: "Makko-Ho Übungen · Ausgangshaltung und Dehnung",

  einleitung: "Sechs Übungspaare. Links steht jeweils die Ausgangshaltung, rechts die " +
              "Dehnung, daneben die Erklärung. Links und rechts beziehen sich auf den " +
              "eigenen Körper.",

  ordnung: "Die sechs Übungen decken alle zwölf Hauptmeridiane ab – je ein Zang-Fu-Paar " +
           "pro Übung. Ihre Reihenfolge ist die der drei Meridianumläufe: Lunge und " +
           "Dickdarm sowie Milz und Magen bilden den ersten Umlauf, Herz und Dünndarm " +
           "sowie Niere und Blase den zweiten, Perikard und Drei-Erwärmer sowie Leber " +
           "und Gallenblase den dritten.",

  quelle: "Grundlage: „Makko-Ho Übungen“, Ko-Schule für Shiatsu, Zürich · " +
          "Zusammenstellung: Veronika Rüfenacht; Originalillustrationen: Gerda Tobler. " +
          "Figuren für dieses Tableau neu gestaltet.",

  uebungen: [
    {
      nr: "01", wx: "metall", umlauf: 1,
      paar: "Lunge (Lu) · Dickdarm (Di)", meridiane: ["lu", "li"],
      bilder: [
        { d: "dehn-01a.jpg", bu: "Aufrechter Stand",
          alt: "Im Profil aufrecht stehend, die Arme hinter dem Rücken, die Zeigefinger nach unten ausgestreckt." },
        { d: "dehn-01b.jpg", bu: "Vorbeuge",
          alt: "Mit geradem Rücken kopfüber vorgebeugt, die verschränkten Arme steigen hinter dem Rücken nach oben." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Füße hüftbreit stellen. Die Vorlage nennt zusätzlich: „Fersen etwas ausstellen“." },
        { t: "Arme und Hände", x: "Daumen hinter dem Rücken verschränken bzw. einhaken. Zeigefinger ausstrecken." },
        { t: "Dehnung", x: "Mit geradem Rücken in eine kopfüber gebeugte Position gehen. Den Nacken entspannen." },
        { t: "Seitenwechsel", x: "Die Übung wiederholen und die Daumen in der Gegenrichtung einhaken." }
      ]
    },
    {
      nr: "02", wx: "erde", umlauf: 1,
      paar: "Milz (MP, in der Vorlage Mi) · Magen (Ma)", meridiane: ["sp", "st"],
      bilder: [
        { d: "dehn-02a.jpg", bu: "Abstützen und anheben",
          alt: "Im Fersensitz, die Hände nach hinten gedreht aufgestützt, das Gesäß nach vorn und oben gedrückt, der Kopf zurückgeneigt." },
        { d: "dehn-02b.jpg", bu: "Zurückgelegte Haltung",
          alt: "Zurückgelegt auf dem Rücken liegend, die Beine gefaltet, die Arme über den Kopf ausgestreckt." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Im Seiza (Fersensitz) sitzen; zwischen den Knien etwa zwei Fäuste Abstand lassen." },
        { t: "Abstützen", x: "Die Hände nach hinten gedreht auf dem Boden aufstützen." },
        { t: "Bewegung", x: "Das Gesäß mit angespannten Muskeln nach vorne und oben drücken." },
        { t: "Zweite Abbildung", x: "Die Vorlage zeigt anschließend die zurückgelegte Haltung mit gefalteten Beinen und über den Kopf ausgestreckten Armen. Dieser Bildinhalt ergänzt die drei Textpunkte der Vorlage." }
      ]
    },
    {
      nr: "03", wx: "feuer", umlauf: 2,
      paar: "Herz (He) · Dünndarm (Dü)", meridiane: ["ht", "si"],
      bilder: [
        { d: "dehn-03a.jpg", bu: "Sitz mit verbundenen Fußsohlen",
          alt: "Aufrecht sitzend, die Fußsohlen aneinandergelegt, die Knie nach außen geöffnet, die Hände um die Füße gelegt." },
        { d: "dehn-03b.jpg", bu: "Vorbeuge",
          alt: "Dieselbe Sitzhaltung, der Oberkörper mit geradem Rücken nach vorn gesenkt, die Ellenbogen ziehen nach vorn." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Im Sitzen die Fußsohlen aneinanderlegen und die Knie nach außen öffnen." },
        { t: "Hände", x: "Die Hände über die Fußinnenseiten oder die Sprunggelenke legen." },
        { t: "Dehnung", x: "Den Oberkörper mit geradem Rücken nach vorne senken." },
        { t: "Ellenbogen", x: "Die Ellenbogen ziehen nach vorne." }
      ]
    },
    {
      nr: "04", wx: "wasser", umlauf: 2,
      paar: "Niere (Ni) · Blase (Bl)", meridiane: ["ki", "bl"],
      bilder: [
        { d: "dehn-04a.jpg", bu: "Langsitz mit erhobenen Armen",
          alt: "Im Langsitz mit nach vorn ausgestreckten Beinen, die Arme über den Kopf gestreckt, die Handflächen zueinander." },
        { d: "dehn-04b.jpg", bu: "Vorbeuge",
          alt: "Aus dem Langsitz mit geradem Rücken nach vorn gesenkt, die Arme bleiben auf Ohrhöhe nach vorn gestreckt." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Mit nach vorne ausgestreckten Beinen auf dem Boden sitzen, wie in der Vorlage abgebildet." },
        { t: "Arme und Hände", x: "Die Arme über den Kopf strecken. Die Handflächen zeigen zueinander." },
        { t: "Dehnung", x: "Den Oberkörper mit geradem Rücken nach vorne senken – nur so weit, wie die Arme auf Ohrhöhe bleiben." }
      ]
    },
    {
      nr: "05", wx: "feuer", umlauf: 3,
      paar: "Perikard (Pe, in der Vorlage Hk) · Drei-Erwärmer (3E)", meridiane: ["pc", "te"],
      bilder: [
        { d: "dehn-05a.jpg", bu: "Schneidersitz, Arme überkreuzt",
          alt: "Im Schneidersitz aufrecht, die Arme vor dem Körper überkreuzt, die Hände mit den Handflächen nach oben auf den Knien." },
        { d: "dehn-05b.jpg", bu: "Vorbeuge",
          alt: "Dieselbe Haltung, der Oberkörper mit geradem Rücken nach vorn gesenkt, die Arme bleiben gekreuzt." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Im Schneidersitz sitzen. Das linke Bein liegt vorne." },
        { t: "Arme und Hände", x: "Die Arme überkreuzen und die Hände mit den Handflächen nach oben auf die Knie legen. Der rechte Arm liegt vorne." },
        { t: "Dehnung", x: "Den Oberkörper mit geradem Rücken nach vorne senken." },
        { t: "Seitenwechsel", x: "Die Gegenseite in der gleichen Form dehnen; dafür die Bein- und Armkreuzung wechseln." }
      ]
    },
    {
      nr: "06", wx: "holz", umlauf: 3,
      paar: "Leber (Le) · Gallenblase (Gb)", meridiane: ["lr", "gb"],
      bilder: [
        { d: "dehn-06a.jpg", bu: "Grätschsitz, Arme angehoben",
          alt: "Im Grätschsitz mit weit geöffneten Beinen, beide Arme über den Kopf gestreckt, die Handflächen nach außen." },
        { d: "dehn-06b.jpg", bu: "Seitneigung",
          alt: "Aus dem Grätschsitz zur Seite geneigt, der obere Arm zieht über den Kopf hinweg in die Gegenrichtung." }
      ],
      schritte: [
        { t: "Ausgangshaltung", x: "Mit weit geöffneten Beinen sitzen, wie in der Vorlage abgebildet. Das Becken nach vorne kippen und die Beine anwinkeln." },
        { t: "Arme und Hände", x: "Die Arme mit den Handflächen nach außen über den Kopf strecken." },
        { t: "Dehnung", x: "Den Rumpf in Richtung des rechten Fußes drehen. Zur Gegenseite lehnen." },
        { t: "Seitenwechsel", x: "Die Gegenseite in der gleichen Form dehnen." }
      ]
    }
  ]
};
