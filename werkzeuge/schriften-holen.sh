#!/bin/bash
# Holt die drei Schriften des Designhandbuchs als lokale Dateien nach fonts/.
# Designhandbuch 4.2 MUSS: Schriften selbst hosten, nicht über Google-Server einbinden.
# Noto Serif SC wird auf genau die Schriftzeichen verkleinert, die im Projekt vorkommen.
# Aufruf aus dem Projektwurzelverzeichnis:  bash werkzeuge/schriften-holen.sh
set -e
cd "$(dirname "$0")/.."
mkdir -p fonts
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"

HANZI=$(python3 - <<'PY'
import glob, re, os
chars = set()
dateien = glob.glob("data/*.js") + glob.glob("js/*.js") + ["index.html", "meridian.html"]
for f in dateien:
    for ch in open(f, encoding="utf-8").read():
        if "一" <= ch <= "鿿":
            chars.add(ch)
print("".join(sorted(chars)))
PY
)
echo "Schriftzeichen im Projekt: ${#HANZI} verschiedene"

curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,400;1,500&display=swap" -o fonts/_cormorant.css
curl -s -A "$UA" "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap" -o fonts/_lato.css
curl -s -A "$UA" -G "https://fonts.googleapis.com/css2" \
  --data-urlencode "family=Noto Serif SC:wght@400" --data-urlencode "text=$HANZI" -o fonts/_notosc.css

python3 - <<'PY'
import re, os, subprocess
out = ["/* Healthlane Academy - selbst gehostete Schriften.",
       "   Designhandbuch 4.2 MUSS: nicht ueber Google-Server einbinden.",
       "   Erzeugt von werkzeuge/schriften-holen.sh - nicht von Hand aendern.",
       "   Cormorant Garamond, Lato, Noto Serif SC: SIL Open Font License. */", ""]
def hole(url, ziel):
    # curl statt urllib: auf diesem Rechner fehlen Python die CA-Zertifikate
    subprocess.run(["curl", "-sSL", "-o", ziel, url], check=True)

for fam, css in (("cormorant", "fonts/_cormorant.css"), ("lato", "fonts/_lato.css")):
    src = open(css, encoding="utf-8").read()
    for block in re.findall(r"@font-face\s*\{.*?\}", src, re.S):
        m = re.search(r"url\((https://fonts\.gstatic\.com/[^)]*\.woff2)\)", block)
        if not m: continue
        local = fam + "-" + os.path.basename(m.group(1))
        if not os.path.exists("fonts/" + local): hole(m.group(1), "fonts/" + local)
        out.append(block.replace(m.group(1), local).strip()); out.append("")

src = open("fonts/_notosc.css", encoding="utf-8").read()
block = re.search(r"@font-face\s*\{.*?\}", src, re.S).group(0)
m = re.search(r"url\((https://fonts\.gstatic\.com/[^)]*)\)", block)
hole(m.group(1), "fonts/notosc-subset.woff2")
block = block.replace(m.group(1), "notosc-subset.woff2")
if "font-display" not in block:
    block = block.replace("font-weight: 400;", "font-weight: 400;\n  font-display: swap;")
out.append(block.strip()); out.append("")
open("fonts/fonts.css", "w", encoding="utf-8").write("\n".join(out))
print("fonts/fonts.css:", len(re.findall(r"@font-face", "\n".join(out))), "Regeln")
PY
rm -f fonts/_*.css
du -sh fonts
