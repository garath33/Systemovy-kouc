# Martin Šimůnek

Web **podpory a kouče pro klidné podnikání**.

## Adresy

- Web: https://klidne-podnikani.cz/
- GitHub (tento web): https://github.com/garath33/Systemovy-kouc
- Stará adresa do expirace: https://klidnepodnikani.online/

## Dva repozitáře, ať je to čitelné

Název GitHub repozitáře **není** adresa webu. Adresu určuje soubor `CNAME` a Settings → Pages. Přesouvat tento web do nového repozitáře pojmenovaného `klidnepodnikani.online` nedává smysl: to je stará doména, kterou chcete nechat vypršet, a zbytečně by se ztratila historie, otevřené PR a nastavení Pages.

| Repozitář | Co v něm je | Kam má mířit |
| --- | --- | --- |
| `Systemovy-kouc` (tento) | Celý web | `https://klidne-podnikani.cz/` |
| [`klidnepodnikani-online`](https://github.com/garath33/klidnepodnikani-online) | jen přesměrování ze složky `redirect-online/` | `https://klidnepodnikani.online/` → `.cz` |

Až budete chtít v názvech pořádek, **přejmenujte tento repozitář na místě** (Settings → General → Repository name) na `klidne-podnikani`. GitHub starou URL `garath33/Systemovy-kouc` přesměruje. Nedělejte to kopírováním do nového prázdného repozitáře.

U nového přesměrovacího repozitáře do Description napište třeba: `Přesměrování klidnepodnikani.online na klidne-podnikani.cz`. U tohoto webu klidně: `Web klidne-podnikani.cz`. Až `.online` vyprší, malý repozitář smažte.

Web zůstává na GitHub Pages. Nová doména `klidne-podnikani.cz` je v administraci Hukot (`admin.hukot.net`). Nameservery neměňte a na Hukotu nespouštějte hosting ani „Přepsat data ze šablony pro cluster“ — to by vrátilo adresy Hukotu a web by se neukázal.

## Pořadí

1. U Hukotu přepište DNS podle tabulky níže.
2. Až `klidne-podnikani.cz` ukazuje na adresy GitHubu, sloučte tuto změnu do `main`. Soubor `CNAME` pak GitHubu řekne, že web má běžet na nové doméně, a zapne se HTTPS.
3. Stará `klidnepodnikani.online` se přesměruje zdarma druhým GitHub Pages (viz níže). Placené přesměrování u Forpsi nekupujte.

Když se `CNAME` nasadí dřív, než DNS ukazuje na GitHub, stará adresa přestane zobrazovat web a nová ještě nebude připravená.

## DNS u Hukotu (`klidne-podnikani.cz`)

Nejjednodušší je nahrát celou zónu: v Hukotu u DNS klikněte na **Importovat zónu** a nahrajte soubor [`dns/klidne-podnikani.cz.zone.txt`](dns/klidne-podnikani.cz.zone.txt). Po importu zkontrolujte tabulku: kořen má mířit na čtyři A a čtyři AAAA adresy GitHubu, `www` na `garath33.github.io`, MX a SPF zůstanou. Záznam CNAME se jménem `*` v nové zóně už není. CAA Hukot po importu označí jako neplatný a zóna kvůli tomu přestane odpovídat — ten řádek smažte (nebo klikněte na **Odstranit neplatné záznamy**). GitHub Pages HTTPS bez něj funguje.

Kdybyste to raději zadávali ručně, smažte křížkem všechny řádky A a AAAA s prázdným názvem a řádek CNAME se jménem `*`. Jsou to adresy hostingu Hukot a web na nich neběží:

| Typ | Název | Hodnota |
| --- | --- | --- |
| A | prázdné | `176.102.65.65` |
| A | prázdné | `46.36.36.152` |
| A | prázdné | `176.102.64.64` |
| A | prázdné | `46.36.36.153` |
| AAAA | prázdné | `2a02:25b0:aaaa:1::7` |
| AAAA | prázdné | `2a02:25b0:aaaa:1::3` |
| AAAA | prázdné | `2a02:25b0:aaaa:1::4` |
| AAAA | prázdné | `2a02:25b0:aaaa:1::8` |
| CNAME | `*` | `klidne-podnikani.cz` |

Záznamy MX (`mail.hukot.net`, `mx2.securitynet.cz`) a TXT (SPF) nechte. Na web nemají vliv. E-mail na webu zůstává `cesta-zmeny@email.cz`. Řádek CAA smažte, pokud ho Hukot označí červeně.

Pak dole přidejte (název u kořene nechte prázdný, prioritu prázdnou, TTL `3600`):

| Typ | Název | Hodnota |
| --- | --- | --- |
| A | prázdné | `185.199.108.153` |
| A | prázdné | `185.199.109.153` |
| A | prázdné | `185.199.110.153` |
| A | prázdné | `185.199.111.153` |
| AAAA | prázdné | `2606:50c0:8000::153` |
| AAAA | prázdné | `2606:50c0:8001::153` |
| AAAA | prázdné | `2606:50c0:8002::153` |
| AAAA | prázdné | `2606:50c0:8003::153` |
| CNAME | `www` | `garath33.github.io` |

Když Hukot u CNAME sám doplní tečku na konci (`garath33.github.io.`), nechte ji. Šíření DNS trvá často 15–60 minut, občas až 24 hodin. DNSSEC teď nezapínejte.

Až záznamy sedí, v repozitáři `Systemovy-kouc` otevřete Settings → Pages, do Custom domain napište `klidne-podnikani.cz` a po vydání certifikátu zapněte Enforce HTTPS. Když GitHub ukáže ověřovací TXT záznam, přidejte ho v Hukotu beze změny a ostatní záznamy nechte.

## Stará doména do expirace (zdarma)

`klidnepodnikani.online` je u Forpsi. **Nepoužívejte placené „přesměrování“ / URL forward u Forpsi.** DNS této domény už míří na GitHub Pages a to stačí.

GitHub Pages umí u jednoho webu jen jednu vlastní doménu. Hlavní web je `klidne-podnikani.cz` v tomto repu. Stará adresa má vlastní repo [`klidnepodnikani-online`](https://github.com/garath33/klidnepodnikani-online). Šablona souborů je ve složce [`redirect-online/`](redirect-online/).

Repo [`klidnepodnikani-online`](https://github.com/garath33/klidnepodnikani-online) běží. `https://klidnepodnikani.online/` přesměruje na `.cz`. Šablona zůstává ve [`redirect-online/`](redirect-online/).

U Forpsi **DNS neměňte**. Kořen už má A/AAAA GitHubu a `www` už má CNAME na `garath33.github.io`.

Pořadí je důležité: nejdřív přepněte hlavní web na `.cz`, teprve potom přiřaďte starou doménu druhému repozitáři. GitHub nedovolí stejnou vlastní doménu u dvou webů najednou.

Návštěvník staré adresy včetně podstránek skončí na stejné cestě na `https://klidne-podnikani.cz/`. Až `.online` za rok vyprší, druhý repozitář smažte. E-mail na webu zůstává `cesta-zmeny@email.cz`, MX u Forpsi kvůli webu nepotřebujete.

## Stránky

- `index.html` — představení vlastními slovy, pilíře, ceník
- `o-mne.html` — medailonek
- `reference.html` — ohlasy
- `kontakt.html` — rezervace a formulář
- `ochrana-udaju.html`, `storno.html` — právní texty
