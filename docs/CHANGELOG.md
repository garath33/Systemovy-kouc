# Changelog

Zaznamenává změny webu klidne-podnikani.cz. Novější záznamy jsou nahoře.

## 2026-10-18 — Přehlednější ceník: dvě cesty

- Úvodní stránka: nejdřív volba Podnikání / Web, teprve potom detaily.
- Podnikání: koučink 900 Kč / hod, operativa 650 Kč / hod. Měsíční balíčky 7 500 Kč a 15 000 Kč.
- Web: jen balíček Klidný web 7 000 Kč a jediná sazba 650 Kč / hod za práci nad rámec.

## 2026-10-17 — Sloučení s CI/SEO z main

- Konflikt s `main` (PR #4) vyřešen: changelog a roadmapa drží obě sady změn.
- `weby.html` je v `sitemap.xml`, `scripts/collect-site.sh` a v Lychee CI.

## 2026-10-17 — Ceník tvorby webů

- Na `weby.html` přibyl ceník: strategie 900 Kč / hod, kódování 650 Kč / hod, balíček Klidný web 7 000 Kč, pokročilá řešení na míru.
- Doplněno pravidlo účtování hovorů nad 10 minut a čtyřkrokový proces Úvod → Návrh a revize → Kódování → Předání.
- Úvodní stránka odkazuje na ceník webů a uvádí pevnou cenu balíčku.

## 2026-10-17 — Podstránka Klidné weby

- Nová stránka `weby.html`: služba tvorby klidných a rychlých statických webů (hero, srovnání, portfolio pěti realizací, proces, CTA).
- Položka **Weby** v navigaci na všech stránkách.
- Na úvodní stránce nabídka služby, v medailonku zmínka o webech, ve formuláři volba tématu.
- Náhledy portfolia ve `images/portfolio/`.

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
