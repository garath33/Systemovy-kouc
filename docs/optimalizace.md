# Poznámky k optimalizacím

## Tokenová optimalizace (Cursor)

**Záměr:** AI má sahat jen na soubory potřebné pro aktuální úkol a neindexovat generované nebo binární šum.

**Soubory:** `.cursorignore`, `.cursorrules`

**Proč tyto cesty v `.cursorignore`:** web je statický HTML na GitHub Pages. Položky `node_modules/`, `.next/`, `dist/`, `build/` a `package-lock.json` zatím v repo nejsou; jsou tam proto, aby je Cursor neindexoval, až se objeví build krok. `*.log` a `.git/` drží mimo kontext logy a historii Gitu.

**Ověření:** žádná změna runtime webu. Po merge stačí v Cursoru ověřit, že ignorované cesty nejsou v indexu projektu.

**Mimo tuto fázi:** Lighthouse, Search Console — až v dalších schválených krocích.

## SEO a obsah (2026-10-17)

**Záměr:** sjednotit kanonickou adresu `.cz`, dát vyhledávačům sitemap a popsat cílovku i tvorbu webů.

**Soubory:** `robots.txt`, `sitemap.xml`, `weby.html`, meta na HTML stránkách, `docs/seo.md`.

**Ověření:** lokální statický server, kontrola canonical/sitemap a navigace na stránku Weby. Search Console až po merge.
