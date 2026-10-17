# Poznámky k optimalizacím

## Tokenová optimalizace (Cursor)

**Záměr:** AI má sahat jen na soubory potřebné pro aktuální úkol a neindexovat generované nebo binární šum.

**Soubory:** `.cursorignore`, `.cursorrules`

**Proč tyto cesty v `.cursorignore`:** web je statický HTML na GitHub Pages. Položky `node_modules/`, `.next/`, `dist/`, `build/` a `package-lock.json` zatím v repo nejsou; jsou tam proto, aby je Cursor neindexoval, až se objeví build krok. `*.log` a `.git/` drží mimo kontext logy a historii Gitu.

**Ověření:** žádná změna runtime webu. Po merge stačí v Cursoru ověřit, že ignorované cesty nejsou v indexu projektu.

**Mimo tuto fázi:** Lighthouse a analytiku teď neděláme.

## CI a SEO základy (2026-10-17)

**Živý web:** `https://klidne-podnikani.cz/` (GitHub Pages, HTTPS). `www` přesměruje sem.

**Stará adresa:** [`klidnepodnikani-online`](https://github.com/garath33/klidnepodnikani-online) běží na `https://klidnepodnikani.online/` (HTTPS). Homepage vrací 200 a v prohlížeči přesměruje na `.cz`. Podstránky obsluhuje `404.html` (HTTP 404 + stejné přesměrování v prohlížeči).

**CI:** lokální odkazy, HTTP odkazy (Formspree a živá kanonická doména `klidne-podnikani.cz` jsou vyloučené — nové stránky na produkci ještě nejsou), sestavení `_site` včetně `robots.txt` a `sitemap.xml`.

**Po merge (uděláš ty, není to kód):**
1. Google Search Console → přidat službu `https://klidne-podnikani.cz/` (ověření přes DNS u Hukotu nebo HTML soubor, až řekneš).
2. Odeslat `https://klidne-podnikani.cz/sitemap.xml`.
3. Přesměrování `.online` je hotové.

## SEO a obsah (2026-10-17)

**Záměr:** popsat cílovku v copy a přidat tvorbu webů jako součást nabídky.

**Soubory:** `weby.html`, meta na HTML stránkách, `docs/seo.md`, sitemap včetně `weby.html`.

**Ověření:** lokální statický server, navigace na stránku Weby, CI (Lychee + `_site`). Search Console až po merge.
