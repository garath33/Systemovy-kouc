# Přesměrování klidnepodnikani.online

Tyto soubory patří do repozitáře [garath33/klidnepodnikani-online](https://github.com/garath33/klidnepodnikani-online). Hlavní web zůstává v `Systemovy-kouc` na `https://klidne-podnikani.cz/`.

Do kořene toho malého repa musí jít **přesně tyto názvy** (ne `.txt`):

| Soubor | Účel |
| --- | --- |
| `index.html` | přesměrování homepage |
| `404.html` | přesměrování podstránek |
| `CNAME` | doména `klidnepodnikani.online` |
| `.nojekyll` | GitHub Pages bez Jekyllu |
| `.github/workflows/pages.yml` | jen pokud je v Settings → Pages zdroj **GitHub Actions** |

Nahrání přes web GitHubu soubory přejmenovalo na `CNAME.txt` a `nojekyll.txt`. GitHub je pak nepozná a adresa vrací 404.

## Co teď v `klidnepodnikani-online` udělat

1. Smazat `CNAME.txt` a `nojekyll.txt`.
2. Přidat soubory `CNAME` a `.nojekyll` z této složky (názvy bez přípony).
3. Buď **Settings → Pages → Source: Deploy from a branch** (`main`, složka `/`), nebo nahrát i `.github/workflows/pages.yml`, když zdroj zůstane GitHub Actions.
4. Custom domain nechat `klidnepodnikani.online`, Enforce HTTPS zapnuté.
5. Ověřit: `https://klidnepodnikani.online/` skončí na `https://klidne-podnikani.cz/`.
