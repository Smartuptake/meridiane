# -*- coding: utf-8 -*-
"""Liest Text und Tabellen aus .docx – ohne Fremdbibliothek."""
import sys, zipfile, re, io
from xml.etree import ElementTree as ET
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

def absatz(p):
    return "".join(t.text or "" for t in p.iter(W+"t")).strip()

def lesen(pfad):
    z = zipfile.ZipFile(pfad)
    x = ET.fromstring(z.read("word/document.xml"))
    raus = []
    koerper = x.find(W+"body")
    for kind in koerper:
        if kind.tag == W+"p":
            t = absatz(kind)
            if t: raus.append(t)
        elif kind.tag == W+"tbl":
            for tr in kind.findall(W+"tr"):
                zellen = [" ".join(absatz(p) for p in tc.findall(W+"p")).strip()
                          for tc in tr.findall(W+"tc")]
                zellen = [c for c in zellen]
                if any(zellen): raus.append(" | ".join(zellen))
    return raus

if __name__ == "__main__":
    for p in sys.argv[1:]:
        z = lesen(p)
        print("=== %s  (%d Zeilen)" % (p, len(z)))
        for x in z[:20]: print("   ", x[:150])
        print()
