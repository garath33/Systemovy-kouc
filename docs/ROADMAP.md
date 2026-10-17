# Roadmap optimalizací

Web: statický HTML na GitHub Pages, kanonická adresa `https://klidne-podnikani.cz/`.
Práce: schválená fáze → feature větev → PR → CI → tvoje schválení → merge do `main`.

Rozhodnutí z otázek 4–6 jsou v [`docs/ARCHITEKTURA.md`](ARCHITEKTURA.md).

## Cíle

- Problémy: Core Web Vitals, SEO/indexace, konverze, údržba kódu.
- Pořadí: výkon → SEO → refaktoring → dokumentace/CI.
- Měření Lighthouse / analytiku teď neděláme.
- Vzhled neměníme, jen zrychlení a dočištění.

## Fáze 0 — Proces

- [x] `.cursorignore`, `.cursorrules`, `docs/`
- [x] CI (Lychee + sestavení `_site`) v PR #4
- [x] Zápis architektury (hosting, formulář, preview, prohlížeče)

## Fáze 1 — SEO základy

Živý web je `.cz`. Stará `.online` přesměrovává z repa `klidnepodnikani-online`.

- [x] `robots.txt` + `sitemap.xml`
- [x] Canonical, description a Open Graph na všech stránkách
- [x] JSON-LD (Person) na homepage
- [ ] Po merge: v Google Search Console přidat `https://klidne-podnikani.cz/` a odeslat sitemap
- [x] Přesměrování `klidnepodnikani.online` → `klidne-podnikani.cz`

## Fáze 2 — Výkon (navrženo, čeká na schválení)

Bez změny vzhledu. Priorita podle [`docs/optimalizace.md`](optimalizace.md):

- [ ] Google Fonts bez blokujícího `@import` (nebo systémový stack)
- [ ] `width`/`height` nebo `aspect-ratio` u všech fotek, `loading="lazy"` mimo hero
- [ ] Až potom WebP — bez Vite/11ty, ideálně jen nové soubory vedle JPG

## Fáze 3 — Konverze a údržba (až po výkonu)

- [ ] Formulář: labely, souhlas s údaji, zůstat na webu po odeslání (AJAX Formspree)
- [ ] Sdílená hlavička/patička jen když začne bolet kopírování; to by už chtělo malý build
- [ ] Copy jen se schválením. Právní texty neměnit.

## Fáze 4 — Dokumentace

Changelog u každé fáze. Search Console až po odeslání sitemap.
