# Poznámky k optimalizacím

## Tokenová optimalizace (Cursor)

**Záměr:** AI má sahat jen na soubory potřebné pro aktuální úkol a neindexovat generované nebo binární šum.

**Soubory:** `.cursorignore`, `.cursorrules`

**Proč tyto cesty v `.cursorignore`:** web je statický HTML na GitHub Pages. Položky `node_modules/`, `.next/`, `dist/`, `build/` a `package-lock.json` zatím v repo nejsou; jsou tam proto, aby je Cursor neindexoval, až se objeví build krok. `*.log` a `.git/` drží mimo kontext logy a historii Gitu.

**Ověření:** žádná změna runtime webu. Po merge stačí v Cursoru ověřit, že ignorované cesty nejsou v indexu projektu.

**Mimo tuto fázi:** Lighthouse, sitemap, Search Console — až v dalších schválených krocích.
