# Not Your Average Mel — notyouravgmel.com

Personal site for Melissa "Mel" Bennett-Holt, hosted on GitHub Pages.

- `/` — Home screen: the café table. The laptop opens the desk; the notebook is the table of contents; the AirPods open "My Tunes".
- `/desk/` — Portfolio Desk: an illustrated desk where each object opens part of the site (resume, Starbucks Journey cup, Mondays with Mel journal, coding projects laptop, reviews iPad, The Craft of Leadership articles, business card + contact form).

## Stack

Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies. Fonts load from Google Fonts. Everything else is in this repo.

```
index.html              home screen
desk/index.html         portfolio desk (popups are CSS :target modals)
css/home.css, css/desk.css
js/home.js, js/desk.js  scale the illustrated scene to the window, journal page-turn, contact form
assets/                 images (desk/ and home/), og-image.jpg
CNAME                   notyouravgmel.com
.nojekyll               tells GitHub Pages to serve files as-is
404.html, robots.txt, sitemap.xml, favicon.svg
```

## Common edits

- **Contact email:** `CONTACT_EMAIL` near the top of the contact form code in `js/desk.js`.
- **New Craft of Leadership article:** in `desk/index.html`, copy the `rd-card` block inside `#craft` and the `#craft-balancing` modal, give them a new id (for example `craft-next`), then update the card's link.
- **Mondays with Mel posts:** the `.jr-leaf` pages inside `#journal` in `desk/index.html`.
- **Coding projects:** the `.lt-g` cards on the laptop screen and the `.pjgrid` cards in the `#projects` popup.
- **Overlays on the desk photo** (text on the paper, cup label, laptop and iPad screens, photos on the Polaroids) are positioned in the 1536×1024 coordinate space of `assets/desk/scene-*.jpg`. If the background image changes, they must be re-fitted.

## Deploy

1. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
2. Custom domain: `notyouravgmel.com`. Tick "Enforce HTTPS" once the certificate is ready.
3. DNS at your registrar (apex domain):
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` `@` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - optional `CNAME` `www` → `thecodingbarista.github.io`
