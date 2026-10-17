# Changelog

Zaznamenává změny webu klidne-podnikani.cz. Novější záznamy jsou nahoře.

## 2026-10-17 — Jak mergovat PR

- Hotová práce se otevírá jako Ready for review, ne jako draft.
- Merge do `main` zůstává na tobě (Squash and merge). Automatický merge ne.

## 2026-10-17 — Dočištění výkonu a formuláře

- Z ochrany údajů pryč Reservio; zůstává jen Formspree.
- Font se načítá přes `preconnect` a `<link>`, ne přes CSS `@import`.
- Kontaktní formulář má labely, souhlas s údaji a odeslání bez odchodu na Formspree.
- Mobilní menu se zavře po volbě odkazu. Karusel drží výšku. Fotka na O mně má poměr 3:4.

## 2026-10-17 — Rozhodnutí architektury (fáze 0)

- Zapsáno v `docs/ARCHITEKTURA.md`: GitHub Pages, bez bundleru, Formspree, vzhled beze změny, preview jen z `main`.
- CI se nemění (Lychee už běží od PR #4); htmlproofer se nepřidává.
- HTML, CSS a obrázky webu se v této iteraci nemění.

## 2026-10-17 — Přesměrování .online

- Hlavní web zůstává `https://klidne-podnikani.cz/` (tento repo).
- Přesměrování `.online` běží v https://github.com/garath33/klidnepodnikani-online (šablona `redirect-online/`).

## 2026-10-17 — SEO základy a CI

- Kanonická adresa webu je `https://klidne-podnikani.cz/` (ne `.online`).
- Přidány `robots.txt` a `sitemap.xml`, nasazují se spolu s Pages.
- Na všech stránkách: description, canonical, Open Graph, sdílený náhledový obrázek.
- Na homepage JSON-LD (Person).
- Workflow CI: Lychee (lokální i HTTP) a ověření `_site`.
- Deploy `pages.yml` používá `scripts/collect-site.sh`.

## 2026-10-17 — Tokenová optimalizace kontextu v Cursoru

- Přidán kořenový soubor `.cursorignore` a `.cursorrules`.
- Založena složka `docs/`.
