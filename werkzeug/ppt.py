# -*- coding: utf-8 -*-
import sys, re, io, os

SCHRIFT = re.compile(r"^(Arial|Times|Wingdings|Calibri|Verdana|Tahoma|Symbol|Chiller|"
    r"Book Antiqua|Baskerville|Bickley|French Script|Arabic|Curlz|Gautami|Abadi|Matura|"
    r"Fine Hand|Comic|Courier|Georgia|Impact|Lucida|Marlett|MS |Palatino|Papyrus|"
    r"Segoe|Trebuchet|Webdings|Bitmap|Paint\.|PictureIt|Condensed|Capitals|ansparent|pitals)", re.I)
MUELL = re.compile(r"(Root Entry|Current User|SummaryInformation|PowerPoint Document|"
    r"DocumentSummary|Masterformat|Klicken bearbeiten|^Zweite Ebene|^Dritte Ebene|"
    r"^Vierte Ebene|^F.nfte Ebene|mailto:|http|\.ppt|\.jpg|\.png|\.gif|IDAT|NETSCAPE|PLTE|tRNS)", re.I)

def brauchbar(z):
    if len(z) < 14 or SCHRIFT.match(z) or MUELL.search(z): return False
    worte = [w for w in re.split(r"[\s,;:()/]+", z) if len(w) >= 3]
    if len(worte) < 2: return False
    gut = sum(1 for w in worte if re.fullmatch(r"[A-Za-zÄÖÜäöüß\-]{3,}", w))
    if gut / len(worte) < 0.7: return False
    vok = sum(c in "aeiouäöüAEIOUÄÖÜ" for c in z)
    if vok / len(z) < 0.2: return False
    return True

def hole(pfad):
    d = open(pfad, "rb").read()
    roh = (re.findall(r"[ -~ -ɏ‐-›]{10,}", d.decode("utf-16-le","ignore")) +
           re.findall(r"[ -~ -ÿ]{14,}", d.decode("latin-1","ignore")))
    raus, gesehen = [], set()
    for z in roh:
        z = re.sub(r"\s+", " ", z).strip(" \t\r\n\x0b*")
        if not brauchbar(z) or z in gesehen: continue
        gesehen.add(z); raus.append(z)
    return raus

ziel = sys.argv[1]
alles = []
for p in sys.argv[2:]:
    z = hole(p)
    alles.append("\n\n########  %s  (%d Stücke)\n" % (os.path.basename(p), len(z)))
    alles.extend(z)
    print("%-62s %5d" % (os.path.basename(p)[:60], len(z)))
io.open(ziel,"w",encoding="utf-8").write("\n".join(alles))
