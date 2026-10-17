# Architektura a způsob práce

Zapsáno 2026-10-17 po odpovědích na otázky 4–6. Platí, dokud to v dalším PR nezměníme.

## Hosting

Zůstává **statický web na GitHub Pages**. Žádný WordPress, žádný Forpsi hosting, žádný vlastní server.

Živá adresa: `https://klidne-podnikani.cz/`. Stará `klidnepodnikani.online` jen přesměrovává z druhého repa.

## Co je „build krok“ (dřív nesrozumitelné)

Teď GitHub Pages dostane soubory skoro tak, jak jsou v gitu: HTML, CSS, JS, fotky. Skript `scripts/collect-site.sh` je jen zkopíruje do složky `_site`. To **není** bundler.

**Build krok** by znamenal, že před zveřejněním nějaký program soubory přepíše: zmenší CSS, převede fotky do WebP, spojí skripty. Nástroje jako 11ty nebo Vite to umí. Výhoda je rychlejší web. Nevýhoda je, že se přestane dát stránka opravit jen otevřením `index.html` v editoru — objeví se `package.json`, `node_modules` a příkaz, bez kterého se web nesestaví.

**Rozhodnutí:** teď zůstat u čistého HTML. Build smíme přidat později, až to bude dávat smysl (hlavně fotky a font). Nemusíme se bát, že by se dveře zavřely. GitHub Actions už `_site` skládá, sem by se jen vsunul další příkaz.

Pro tento web to teď nestojí za to: pět stránek, CSS bez frameworku, fotky už mají desítky KB.

## Formulář

Na `kontakt.html` odchází POST na Formspree:

`https://formspree.io/f/mwvvkrgd`

Pole: `name`, `email`, `message`. Záloha je telefon a `mailto:cesta-zmeny@email.cz`.

### Proč Formspree nechat

GitHub Pages nemá backend. Bez služby třetí strany by formulář neměl kam napsat. Formspree už běží, je zmíněné v ochraně údajů a na malý koučovací web stačí.

Getform je totéž jinou značkou — přepisovat nemá smysl. Vlastní endpoint (Netlify Functions, Cloudflare Worker) by přidal účet, tajemství v GitHubu a údržbu. Na desítky poptávek měsíčně to není potřeba.

### Limity, které nesmíme rozbít

- Neměnit `action` (ID formuláře `mwvvkrgd`). Nová URL = nové napojení v Formspree účtu.
- Nechat `method="POST"`.
- Nepřejmenovat pole `email` (Formspree podle něj pozná odesílatele). `name` a `message` jdou přejmenovat jen když se to ověří v inboxu.
- V Lychee je `formspree.io` vyloučené: GET na endpoint vrací 405, to není chyba formuláře.

### Co Formspree umí (stav 2026)

Bezplatný plán: **50 odeslání za měsíc**, 30 dní historie, základní spam filtr, AJAX. Nad limitem se zpráva uloží, ale e-mail nepřijde, dokud se v dashboardu nezpracuje znovu. Vlastní „děkujeme“ stránka a export CSV jsou v placeném plánu. Po odeslání teď návštěvník skončí na děkovací stránce Formspree.

Pro poptávky kouče je 50/měsíc velká rezerva. Až by to nestačilo, stačí v Formspree přejít na Personal (~200/měsíc), kód webu se nemění.

Formulář má labely, souhlas s odkazem na ochranu údajů a AJAX odeslání (návštěvník zůstane na webu). Endpoint a pole `name` / `email` / `message` se nemění.

## Právní stránky

`ochrana-udaju.html` a `storno.html` bereme **jako konečné**, dokud je nebude měnit právník. Copy v nich v optimalizačních PR nešahat.

Reservio v ochraně údajů už není. Formulář zpracovává jen Formspree.

## Design

Současný vzhled **zůstává**. Žádná vizuální modernizace. Další vlna je zrychlení (font, fotky) a drobné SEO, ne nový layout ani paleta.

## Prohlížeče (střední cesta)

Držíme poslední dvě velké verze **Chrome, Firefox, Safari** a **iPhone Safari**. Edge se chová jako Chrome. Internet Explorer ne. Nesázíme na úplně nové CSS, které umí jen jeden prohlížeč. Současný kód (Grid, `clamp`, `aspect-ratio`, `backdrop-filter`) v tomto rozsahu stačí. Testovat každou kombinaci zařízení nebudeme — po úpravě CSS stačí desktop a úzké okno (~375 px).

## Preview

Živé GitHub Pages je **jen z `main`**. Feature větev samu o sobě náhledovou URL nedostane (jeden web, jedna vlastní doména). To stačí: PR uvidíš v gitu, CI zkontroluje odkazy, po merge jde změna na `klidne-podnikani.cz`. Cloudflare ani Netlify nezavádíme.

## Co dělat s pull requestem

Platí trvale (2026-10-17), bez dalšího ptaní.

Agent práci dokončí a otevře PR. Draft je jen když je práce rozbitá nebo čeká na tebe uprostřed. Hotová vlna = **Ready for review** (už ne šedý draft).

Tvoje jediné tlačítko, až jsou fajfky zelené: **Squash and merge**. Tím to jde na živý web. **Ready for review** už mačkat nemusíš, pokud PR není draft. **Close pull request** jen když změnu nechceš.

Automatický merge na GitHubu nezapínáme — na `main` se rovnou nasazuje Pages.

## CI (stav znovu ověřený 2026-10-17)

Dřív workflow vypadalo jen na deploy. **Už to neplatí.** Po PR #4 je:

- `.github/workflows/ci.yml` — Lychee lokální odkazy, Lychee HTTP, sestavení `_site`
- `.github/workflows/pages.yml` — deploy z `main`
- `lychee.toml` — mimo jiné vynechává Formspree, `mailto:`, `tel:`

**htmlproofer nepřidávat** — dělal by totéž co Lychee. Další CI (Lighthouse v Actions) až když budeme měřit výkon, ne teď.

## Dokumentace

Složka `docs/` se zakládá a doplňuje hned, ne až po první obsahové změně. Každá schválená fáze má řádek v `CHANGELOG.md` a checkbox v `ROADMAP.md`.
