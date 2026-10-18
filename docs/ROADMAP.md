# Roadmap optimalizací

Web: statický HTML na GitHub Pages, kanonická adresa `https://klidne-podnikani.cz/`.
Práce: schválená fáze → feature větev → PR → CI → tvoje schválení → merge do `main`.

## Cíle

- Problémy: Core Web Vitals, SEO/indexace, konverze, údržba kódu.
- Pořadí: výkon → SEO → refaktoring → dokumentace/CI.
- Měření Lighthouse / analytiku teď neděláme.
- První iterace: struktura, dokumentace, ověření způsobu práce.

## Fáze 0 — Proces

- [x] `.cursorignore`, `.cursorrules`, `docs/`
- [x] CI (Lychee + sestavení `_site`) v PR #4

## Fáze 1 — SEO základy (v tomtéž PR)

Živý web je `.cz`. Stará `.online` přesměrovává z repa `klidnepodnikani-online`.

- [x] `robots.txt` + `sitemap.xml`
- [x] Canonical, description a Open Graph na všech stránkách
- [x] JSON-LD (Person) na homepage
- [ ] Po merge: v Google Search Console přidat `https://klidne-podnikani.cz/` a odeslat sitemap
- [x] Přesměrování `klidnepodnikani.online` → `klidne-podnikani.cz`

## Fáze 1b — Klidné weby

- [x] Podstránka služby (`weby.html`) s portfoliem realizací
- [x] Ceník tvorby webů (balíček 7 000 Kč, nad rámec 650 Kč / hod)
- [x] Operativa v podnikání 650 Kč / hod, přehled ceníku na úvodu ve dvou cestách

## Fáze 2 — Výkon (bez čísel Lighthouse)

Fotky, font (`@import` Google Fonts), až po schválení.

## Fáze 3 — Konverze a údržba kódu

Sdílená hlavička/patička, CSS proměnné. Copy jen se schválením.

## Fáze 4 — Dokumentace

Changelog u každé fáze. Search Console až po spuštění sitemap.
