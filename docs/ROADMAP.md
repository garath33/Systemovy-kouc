# Roadmap optimalizací

Web: statický HTML na GitHub Pages, kanonická adresa `https://klidne-podnikani.cz/`.
Práce: feature větev → PR (Ready for review, ne draft) → zelené CI → ty dáš Squash and merge do `main`.

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

## Fáze 2 — Výkon a dočištění UI

Bez změny vzhledu.

- [x] Google Fonts přes `preconnect` + `<link>` místo `@import`
- [x] Poměr fotky na O mně sjednocený s CSS, `loading="lazy"` mimo hero
- [x] Stabilní výška karuselu ohlasů
- [x] Mobilní menu se zavře po kliknutí na odkaz
- [x] Formulář: labely, souhlas, AJAX (zůstat na webu)
- [x] Pryč zmínka o Reservio v ochraně údajů
- [ ] Až potom WebP — bez Vite/11ty, ideálně jen nové soubory vedle JPG

## Fáze 3 — Údržba kódu

- [ ] Sdílená hlavička/patička jen když začne bolet kopírování; to by už chtělo malý build
- [ ] Copy jen se schválením. Právní texty neměnit, ledaže řekneš (jako u Reservio).

## Fáze 4 — Dokumentace

Changelog u každé fáze. Search Console až po odeslání sitemap.
