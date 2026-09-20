# Martin Šimůnek

Web **podpory a kouče pro klidné podnikání**.

## Adresy

- Web: https://klidnepodnikani.online/
- GitHub: https://github.com/garath33/Systemovy-kouc
- Dočasně (než se DNS propsaje): https://garath33.github.io/Systemovy-kouc/

Doména je u Forpsi (`ns.forpsi.net` / `ns.forpsi.it`). Web zůstává na GitHub Pages — neměňte nameservery a nespouštějte u Forpsi WordPress ani Hosting BASIC.

## DNS ve Forpsi (po dokončení platby)

Stav objednávky musí být aktivní, ne „čeká na platbu“. Pak v administraci Forpsi u `klidnepodnikani.online` otevřete DNS a nastavte:

| Typ | Název | Hodnota |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `garath33.github.io.` |

Poznámky:

- `@` znamená kořen domény (někdy prázdné pole nebo `klidnepodnikani.online`).
- U CNAME nechte na konci tečku, pokud ji Forpsi vyžaduje.
- Záložku **Redirect** nepoužívejte — ta by jen přesměrovala pryč, web by na vlastní adrese neběžel.
- Po uložení DNS trvá šíření často 15–60 minut, občas až 24 hodin.

Až DNS odpoví, GitHub v Settings → Pages u repozitáře `Systemovy-kouc` uvidí custom domain `klidnepodnikani.online` a zapne HTTPS. Soubor `CNAME` v repozitáři už je připravený.

## Stránky

- `index.html` — představení vlastními slovy, pilíře, ceník
- `o-mne.html` — medailonek
- `reference.html` — ohlasy
- `kontakt.html` — rezervace a formulář
- `ochrana-udaju.html`, `storno.html` — právní texty
