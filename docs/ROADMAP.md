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

## Fáze 1 — SEO základy

Živý web je `.cz`. Stará `.online` přesměrovává z repa `klidnepodnikani-online`.

- [x] `robots.txt` + `sitemap.xml`
- [x] Canonical, description a Open Graph na všech stránkách
- [x] JSON-LD (Person) na homepage
- [ ] Po merge: v Google Search Console přidat `https://klidne-podnikani.cz/` a odeslat sitemap
- [x] Přesměrování `klidnepodnikani.online` → `klidne-podnikani.cz`

## Fáze 1b — SEO obsah a tvorba webů

- [x] Cílovka v copy (malí a střední podnikatelé zahlcení provozem)
- [x] Web jen česky, bez locale souborů
- [x] Stránka `weby.html`, sekce na úvodu a portfolio
- [x] Kontakt zůstává formulář + telefon (bez Calendly)

## Fáze 2 — Výkon (bez čísel Lighthouse)

Fotky, font (`@import` Google Fonts), až po schválení.

## Fáze 3 — Konverze a údržba kódu

Sdílená hlavička/patička, CSS proměnné. Copy jen se schválením.

## Fáze 4 — Dokumentace

Changelog u každé fáze. Search Console až po spuštění sitemap.
