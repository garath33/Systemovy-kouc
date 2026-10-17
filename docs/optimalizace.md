# Poznámky k optimalizacím

## Tokenová optimalizace (Cursor)

**Záměr:** AI má sahat jen na soubory potřebné pro aktuální úkol a neindexovat generované nebo binární šum.

**Soubory:** `.cursorignore`, `.cursorrules`

**Proč tyto cesty v `.cursorignore`:** web je statický HTML na GitHub Pages. Položky `node_modules/`, `.next/`, `dist/`, `build/` a `package-lock.json` zatím v repo nejsou; jsou tam proto, aby je Cursor neindexoval, až se objeví build krok. `*.log` a `.git/` drží mimo kontext logy a historii Gitu.

**Ověření:** žádná změna runtime webu. Po merge stačí v Cursoru ověřit, že ignorované cesty nejsou v indexu projektu.

**Mimo tuto fázi:** Lighthouse a analytiku teď neděláme.

## CI a SEO základy (2026-10-17)

**Živý web:** `https://klidne-podnikani.cz/` (GitHub Pages, HTTPS). `www` přesměruje sem.

**Stará adresa:** repo [`klidnepodnikani-online`](https://github.com/garath33/klidnepodnikani-online) existuje, custom domain i HTTPS certifikát jsou nastavené. Veřejná URL pořád vrací 404, protože v kořeni je `CNAME.txt` / `nojekyll.txt` místo `CNAME` / `.nojekyll` a Pages staví přes Actions bez workflow. Oprava: `redirect-online/README.md`.

**CI:** lokální odkazy, HTTP odkazy (Formspree a `.online` jsou vyloučené), sestavení `_site` včetně `robots.txt` a `sitemap.xml`.

**Po merge (uděláš ty, není to kód):**
1. Google Search Console → přidat službu `https://klidne-podnikani.cz/` (ověření přes DNS u Hukotu nebo HTML soubor, až řekneš).
2. Odeslat `https://klidne-podnikani.cz/sitemap.xml`.
3. V `klidnepodnikani-online` opravit názvy `CNAME` a `.nojekyll` (viz `redirect-online/README.md`).
