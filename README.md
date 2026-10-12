# Martin Šimůnek

Web **podpory a kouče pro klidné podnikání**.

## Adresy

- Web: https://klidne-podnikani.cz/
- GitHub: https://github.com/garath33/Systemovy-kouc
- Stará adresa do expirace: https://klidnepodnikani.online/ (přesměrovat na novou, viz níže)

Web zůstává na GitHub Pages. Nová doména `klidne-podnikani.cz` je v administraci Hukot (`admin.hukot.net`). Nameservery neměňte a na Hukotu nespouštějte hosting ani „Přepsat data ze šablony pro cluster“ — to by vrátilo adresy Hukotu a web by se neukázal.

## Pořadí

1. U Hukotu přepište DNS podle tabulky níže.
2. Až `klidne-podnikani.cz` ukazuje na adresy GitHubu, sloučte tuto změnu do `main`. Soubor `CNAME` pak GitHubu řekne, že web má běžet na nové doméně, a zapne se HTTPS.
3. U Forpsi nastavte přesměrování `klidnepodnikani.online` na `https://klidne-podnikani.cz`.

Když se `CNAME` nasadí dřív, než DNS ukazuje na GitHub, stará adresa přestane zobrazovat web a nová ještě nebude připravená.

## DNS u Hukotu (`klidne-podnikani.cz`)

V DNS zóně smažte křížkem všechny řádky A a AAAA s prázdným názvem a řádek CNAME se jménem `*`. Jsou to adresy hostingu Hukot a web na nich neběží:

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

Záznamy MX (`mail.hukot.net`, `mx2.securitynet.cz`), CAA (`letsencrypt.org`) a TXT (SPF) nechte. Na web nemají vliv. E-mail na webu zůstává `cesta-zmeny@email.cz`.

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

## Stará doména do expirace

`klidnepodnikani.online` je u Forpsi. GitHub Pages umí jen jednu vlastní doménu, takže starou adresu nenechávejte namířenou na GitHub. V administraci Forpsi u ní zapněte přesměrování na `https://klidne-podnikani.cz` (včetně `www`). Až doména za rok vyprší, nic dalšího není potřeba.

## Stránky

- `index.html` — představení vlastními slovy, pilíře, ceník
- `o-mne.html` — medailonek
- `reference.html` — ohlasy
- `kontakt.html` — rezervace a formulář
- `ochrana-udaju.html`, `storno.html` — právní texty
