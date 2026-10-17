# Přesměrování klidnepodnikani.online

Tyto soubory patří do repozitáře [garath33/klidnepodnikani-online](https://github.com/garath33/klidnepodnikani-online). Hlavní web zůstává v [klidne-podnikani.cz](https://github.com/garath33/klidne-podnikani.cz) na `https://klidne-podnikani.cz/`.

Do kořene toho malého repa musí jít **přesně tyto názvy** (ne `.txt`):

| Soubor | Účel |
| --- | --- |
| `index.html` | přesměrování homepage |
| `404.html` | přesměrování podstránek |
| `CNAME` | doména `klidnepodnikani.online` |
| `.nojekyll` | GitHub Pages bez Jekyllu |
| `.github/workflows/pages.yml` | jen pokud je v Settings → Pages zdroj **GitHub Actions** |

Publikováno v [garath33/klidnepodnikani-online](https://github.com/garath33/klidnepodnikani-online). Homepage `.online` vrací 200 a v prohlížeči jde na `.cz`. Podstránky obsluhuje `404.html`.

Kdyby se soubory znovu nahrávaly přes web GitHubu, nenechte je přejmenovat na `CNAME.txt` / `nojekyll.txt`.
