# Poznámky k optimalizacím

## Tokenová optimalizace (Cursor)

**Záměr:** AI má sahat jen na soubory potřebné pro aktuální úkol a neindexovat generované nebo binární šum.

**Soubory:** `.cursorignore`, `.cursorrules`

**Proč tyto cesty v `.cursorignore`:** web je statický HTML na GitHub Pages. Položky `node_modules/`, `.next/`, `dist/`, `build/` a `package-lock.json` zatím v repo nejsou; jsou tam proto, aby je Cursor neindexoval, až se objeví build krok. `*.log` a `.git/` drží mimo kontext logy a historii Gitu.

**Ověření:** žádná změna runtime webu. Po merge stačí v Cursoru ověřit, že ignorované cesty nejsou v indexu projektu.

**Mimo tuto fázi:** Lighthouse a analytiku teď neděláme.

## CI a SEO základy (2026-10-17)

**Živý web:** `https://klidne-podnikani.cz/` (GitHub Pages, HTTPS). `www` přesměruje sem.

**Stará adresa:** `https://klidnepodnikani.online/` teď vrací 404 GitHubu. Přesměrování je připravené ve `redirect-online/`, ale potřebuje **druhý GitHub repozitář** (návod v README). Do té doby starou URL v Search Console nepřidávej.

**CI:** lokální odkazy, HTTP odkazy (Formspree a `.online` jsou vyloučené), sestavení `_site` včetně `robots.txt` a `sitemap.xml`.

**Po merge (uděláš ty, není to kód):**
1. Google Search Console → přidat službu `https://klidne-podnikani.cz/` (ověření přes DNS u Hukotu nebo HTML soubor, až řekneš).
2. Odeslat `https://klidne-podnikani.cz/sitemap.xml`.
3. Založit přesměrovací repo pro `.online`.
