# Changelog

Zaznamenává změny webu klidne-podnikani.cz. Novější záznamy jsou nahoře.

## 2026-10-17 — SEO, obsah a tvorba webů

- Cílovka v copy: malí a střední podnikatelé zahlcení provozem.
- Web zůstává jen česky (`lang="cs"`), bez locale souborů.
- Canonical, Open Graph a `og:locale=cs_CZ` na všech stránkách, ostře `https://klidne-podnikani.cz/`.
- Nová stránka `weby.html` a sekce na úvodu: profesionální tvorba webů + portfolio (Raclette Point, Flow Změny, Ecomo).
- Kontakt beze změny: telefon a formulář, bez Calendly.
- Poznámky: `docs/seo.md`.
- Lychee (externí) nekontroluje kanonické URL na živém `klidne-podnikani.cz` — nová stránka tam před mergem dává 404.

## 2026-10-17 — Přesměrování .online

- Hlavní web zůstává `https://klidne-podnikani.cz/` (tento repo).
- Přesměrování `.online` běží v https://github.com/garath33/klidnepodnikani-online (šablona `redirect-online/`).

## 2026-10-17 — SEO základy a CI

- Kanonická adresa webu je `https://klidne-podnikani.cz/` (ne `.online`).
- Přidány `robots.txt` a `sitemap.xml`, nasazují se spolu s Pages.
- Na všech stránkách: description, canonical, Open Graph, sdílený náhledový obrázek.
- Na homepage JSON-LD (Person a služba).
- Workflow CI: Lychee (lokální i HTTP) a ověření `_site`.
- Deploy `pages.yml` používá `scripts/collect-site.sh`.

## 2026-10-17 — Tokenová optimalizace kontextu v Cursoru

- Přidán kořenový soubor `.cursorignore` a `.cursorrules`.
- Založena složka `docs/`.
