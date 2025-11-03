## Miriam-Portfolio

A clean, single-page portfolio website built from the "MyResume" HTML template by BootstrapMade. This repository contains the static site files (HTML, CSS, JS, images and vendor libraries) that power the portfolio.

## About

This project is a customizable portfolio/resume template that you can use to showcase skills, projects and contact information. It was generated from the free "MyResume" template (https://bootstrapmade.com/free-html-bootstrap-template-my-resume/).

## Repository contents

- `index.html` — main landing page for the portfolio
- `portfolio-details.html`, `service-details.html`, `starter-page.html` — example detail pages
- `assets/` — stylesheets, fonts, images, JavaScript and third-party vendor files
  - `assets/css/main.css` — main stylesheet
  - `assets/js/main.js` — primary JavaScript for interactive behaviors
  - `assets/img/` — images used across the site
  - `assets/vendor/` — third-party libraries (Bootstrap, AOS, Swiper, GLightbox, etc.)
- `forms/` — simple contact form handler (`contact.php`) and related files
- `Readme.txt` — original template attribution and license info

## Quick preview (how to run locally)

1. Clone or download this repository to your machine.
2. Open `index.html` in your browser (double-click or right-click -> Open with -> your browser).

Notes:
- This is a static HTML site — no build step required. For a local web server experience (recommended for testing relative URLs), use a simple static server. For example, with Python 3 installed, run:

  python -m http.server 8000

then open `http://localhost:8000` in your browser.

On Windows PowerShell you can run the command above as-is (in the repository root).

## How to customize

- Edit the HTML pages (`index.html`, etc.) to change sections, text, and links.
- Modify styles in `assets/css/main.css` or add new CSS under `assets/css/`.
- Update JavaScript behavior in `assets/js/main.js` and vendor files under `assets/vendor/`.
- Replace images in `assets/img/` with your own, keeping names or updating references in the HTML/CSS.

If you plan a larger rewrite, consider extracting reusable components or moving assets into a build toolchain (Webpack, Vite, parcel, etc.).

## Deployment tips

- For a static site, GitHub Pages, Netlify, Vercel, or any static host work well.
- Ensure your hosting serves the repository root as the site root so relative paths to `assets/` stay correct.

## License & attribution

This project uses the free "MyResume" template by BootstrapMade. Original attribution and license information are included in `Readme.txt`. Please review the template license before republishing or reselling the template.

## Credits

- Template: BootstrapMade — MyResume (https://bootstrapmade.com)
- Vendor libraries included in `assets/vendor/`: Bootstrap, AOS, GLightbox, Swiper, Isotope, Typed.js, and others (see `assets/vendor/` for exact files).

## Troubleshooting

- If styling appears broken, confirm `assets/css/main.css` and vendor CSS files are loaded and paths are correct.
- If scripts fail, open the browser console for errors and ensure vendor JS files exist in `assets/vendor/`.

## Contact / next steps

If you'd like, I can:
- convert this to a multi-page React/Vue site
- set up an automated deploy to GitHub Pages or Netlify
- add a simple build step or Sass compilation

Open an issue or reply here with what you'd like done next.

---
Template source and license details are preserved in the included `Readme.txt` provided with the original template.
