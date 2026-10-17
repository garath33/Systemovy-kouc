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

## UI audit (2026-10-17, bez úprav kódu)

Známé havárie (rozbité menu, nečitelný kontrast, rozbitý formulář) **nejsou**. Web na telefonu skládá mřížky do jednoho sloupce a hamburger přes checkbox funguje. Tipy podle závažnosti, až budeš chtít dočistit:

1. **Google Fonts přes `@import`** v `css/style.css` — prohlížeč čeká na fonts.googleapis.com, než nakreslí text. Největší brzda ze všech. Řešení ve fázi 2: `preconnect` + `<link>` v HTML, nebo systémový font a import smazat.
2. **Formulář jen s placeholdery** — bez `<label>` špatně pro čtečky a když placeholder zmizí. Po odeslání odchod na stránku Formspree (vlastní děkovačka je v placeném tarifu; AJAX to obejde).
3. **Mobilní menu** — checkbox hack bez `aria-expanded`. Po kliknutí na odkaz na stejné stránce zůstane otevřené. Není to rozbité, jen drsné.
4. **Layout shift** — hero má oříznutý box a `width`/`height` na obrázku, to je v pořádku. Na O mně má `<img>` `width="936" height="624"` (na šířku), CSS ale `aspect-ratio: 3 / 4` (na výšku). Prohlížeč nejdřív rezervuje špatný obdélník. Sjednotit atributy s CSS.
5. **Karusel na úvodu** — bez JS jsou vidět všechny ohlasy pod sebou (dobrý fallback). S JS se slidy schovají přes `display: none`, výška karty poskakuje podle délky citátu. Na `reference.html` je mřížka, tam problém není.
6. **Fotky** — JPG 23–72 KB, rozumné. Hero má `object-position`, takže se neškáluje „nataženě“. `loading="lazy"` u fotky mimo úvod chybí, u jedné fotky na stránce to skoro nebolí.
7. **Kontrast** — tmavý text na papíru a bílé na navy prochází. `btn-ghost` na hero (pokud se znovu použije) má tenký bílý rámeček, čitelnost je v pořádku. Focus u polí formuláře je vidět.
8. **SEO drobnosti po fázi 1** — OG obrázek je `martin_headshot.jpg`; na úvodu je jiná fotka. Není chyba. Chybí `og:image:alt` a twitter karty — nízká priorita.

Prohlížeče: viz `docs/ARCHITEKTURA.md`. Neoptimalizovat pro starý Explorer.

## Formulář a limity

Viz `docs/ARCHITEKTURA.md`. Shrnutí: nechat Formspree `mwvvkrgd`, 50 odeslání/měsíc na free plánu stačí, v CI Formspree nepingovat GET-em.
