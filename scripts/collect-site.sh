#!/usr/bin/env bash
# Sestaví stejný výstup jako GitHub Pages deploy (adresář _site).
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"
rm -rf _site
mkdir _site
cp index.html o-mne.html reference.html kontakt.html ochrana-udaju.html storno.html .nojekyll CNAME robots.txt sitemap.xml _site/
cp -r css js images _site/
