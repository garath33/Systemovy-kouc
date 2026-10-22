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

**CI:** lokální odkazy, HTTP odkazy (Formspree a `.online` jsou vyloučené), sestavení `_site` včetně `robots.txt` a `sitemap.xml`.

**Po merge (uděláš ty, není to kód):**
1. Google Search Console → přidat službu `https://klidne-podnikani.cz/` (ověření přes DNS u Hukotu nebo HTML soubor, až řekneš).
2. Odeslat `https://klidne-podnikani.cz/sitemap.xml`.
3. Přesměrování `.online` je hotové.

## Indexace (2026-10-22)

Search Console hlásí dvě vyloučené skupiny. Obě mají zůstat mimo index; do indexu patří kanonické adresy ze sitemapy.

**Stránka s přesměrováním.** `http://` a `www` vrací 301 na `https://klidne-podnikani.cz/`. Složky bez lomítka (`/css`, `/images`) taky. To je správně a indexovat se nemá.

**Duplicitní stránka, Google zvolil jinou kanonickou stránku.** GitHub Pages vrací stejné HTML na `/` i na `/index.html` (a na `/weby` i na `/weby.html`). Kanonická značka úvodu říká `/`, menu ale odkazovalo na `index.html`, takže Google mohl za hlavní vybrat druhou adresu a tu první neindexovat. Odkazy teď míří na `/`. U podstránek kanonická adresa, menu i sitemap zůstávají na `*.html`. Druhá kopie se indexovat nemá.
