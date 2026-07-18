# Obinna Air Conditioning — Website

A 9-page, GitHub Pages–ready site (no build tools needed — plain HTML/CSS/JS).

## Files
- `index.html`, `about.html`, `services.html`, `products.html`, `projects.html`,
  `gallery.html`, `testimonials.html`, `faq.html`, `contact.html`
- `style.css` — all design tokens (colors, fonts) live at the top in `:root`
- `script.js` — nav, FAQ accordion, filters, lightbox, WhatsApp links, animations

## What's real vs. placeholder
- **Real:** business name, slogan, phone/WhatsApp number, address, hours, services list, brand names, colors, fonts.
- **Placeholder (swap before launch):**
  - **Logo** — currently a generated snowflake mark. Replace `.brand-mark` in `style.css`/each page's header, or drop in a logo image.
  - **Photos** — every image currently pulls from `source.unsplash.com` (free stock placeholders). Replace each `<img src="...">` with your own photos of real jobs, products, and the team.
  - **Products, prices, projects, testimonials** — realistic sample content. Edit directly in the HTML (each is a repeated card, easy to find/duplicate).
  - **Google Map** — `contact.html` has a placeholder box. Swap it for an `<iframe>` embed once you have your Google Maps share link.

## Deploying to GitHub Pages
1. Put all these files in the root of your GitHub Pages repo (same level as before — no subfolders).
2. Commit and push all files together in one commit (`index.html`, `style.css`, `script.js`, and the other `.html` files).
3. In repo Settings → Pages, confirm the source branch is set correctly.
4. Hard-refresh (Ctrl/Cmd+Shift+R) after a few minutes — GitHub Pages caches aggressively.

If your last deploy didn't reflect on the live site, it's almost always one of:
- Files committed to the wrong branch, or a folder GitHub Pages isn't serving from.
- Browser cache showing you the old version.

## WhatsApp button
The number `0802 983 1281` is wired into every WhatsApp button/link (`data-wa` attribute) with the enquiry message you provided. Change the number once in `script.js` (`WHATSAPP_NUMBER`) if it ever changes — it updates everywhere.
