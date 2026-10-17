# SEO a obsah

Web je jen česky (`lang="cs"`). Locale soubory ani hreflang se nepřidávají.

## Kanonická adresa

Ostrá kanonická URL je **https://klidne-podnikani.cz/** (apex, HTTPS). `www` má v DNS CNAME na GitHub Pages a má končit na stejné kanonické adrese. Stará **https://klidnepodnikani.online/** jen přesměrovává (viz README a `redirect-online/`). Do sitemap, canonical a Open Graph dáváme výhradně `.cz`.

## Cílovka

Malí až střední podnikatelé, kteří jsou zahlcení provozem a potřebují někoho, kdo jim uleví: pojmenovat chaos, nastavit věci tak, aby v nich bylo dobře, převzít část operativy a být pravou rukou. Stejná skupina často nemá srozumitelný web — proto je tvorba webů součástí nabídky, ne oddělenou agenturou.

## Záměry a klíčová slova (přirozeně v obsahu)

Hledají spíš úlevu a parťáka než „koučovací balíček“.

- pravá ruka / asistent podnikatele, pomoc s administrativou
- kouč pro podnikatele, klidné podnikání, nastavení procesů
- Google Workspace, digitální kancelář, delegování operativy
- tvorba webu pro malou firmu / živnostníka, web na míru

Značková: Martin Šimůnek, klidné podnikání, klidne-podnikani.cz.

## Search Console

Ověření vlastnictví je DNS TXT u Hukotu u kořene `klidne-podnikani.cz` (název prázdný). SPF neměňte, přidejte druhý TXT:

`google-site-verification=AY7MZECLJq72JBrcv8lFhWrzC2H2MPE`

Až Google ověří, v Search Console přidejte sitemap `https://klidne-podnikani.cz/sitemap.xml`.

## Co na webu je

- `robots.txt` a `sitemap.xml` v tomto repozitáři (jinde neexistují)
- canonical + Open Graph na každé stránce, `og:locale` = `cs_CZ`
- žádné Google Business ani sociální profily k sladění URL
- kontakt zůstává telefon, e-mail a formulář Formspree; Calendly se nepřidává
