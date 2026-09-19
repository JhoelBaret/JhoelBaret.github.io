# Jhoel Portfolio — Netlify Ready

A lightweight static portfolio built with HTML, CSS and JavaScript.

## Folder structure

- `index.html` — main website
- `style.css` — visual system and responsive layout
- `script.js` — animations, filters, navigation and optional showreel
- `assets/images/` — place project images here
- `assets/video/` — place `showreel.mp4` here to activate the video section

## Quick customization

Search in `index.html` for:
- `YOUR PHOTO`
- `WHATSAPP_NUMBER`
- `YOUR_INSTAGRAM`
- `YOUR_EMAIL`

Replace those placeholders with your real information.

To replace project placeholders, change the `.placeholder-media` blocks into `<img>` or `<video>` elements and keep the project cards/categories.

## Deploy to Netlify

1. Go to https://app.netlify.com/drop
2. Drag the entire `jhoel-portfolio` folder into the upload area.
3. Netlify will publish the site and give you a `.netlify.app` URL.
4. You can change the generated site name from Netlify's site settings.

## Contact form

The form uses Netlify Forms (`data-netlify="true"`). After deployment, Netlify can receive submissions through its Forms section.

Note: the current JavaScript also shows a small browser alert on submit. If you want Netlify's native success page instead, remove the submit listener at the bottom of `script.js`.

## Important

This is a first production-ready visual foundation. Replace the placeholder project blocks with your real work, portrait, showreel, contact details and social links before publishing publicly.
