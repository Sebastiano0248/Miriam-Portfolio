# Miriam Belmonte — Portfolio

Single-page portfolio for graphic designer **Miriam Belmonte**, built with **React + Vite**.

## Tech stack

| Tool | Role |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [Bootstrap 5](https://getbootstrap.com) | CSS grid & utilities (npm, no vendor folder) |
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations |
| [Typed.js](https://mattboldt.com/demos/typed-js/) | Hero typewriter effect |
| [GLightbox](https://biati-digital.github.io/glightbox/) | Portfolio image lightbox |

All interactive behaviours (scroll-spy, skill-bar animations, counter animations, portfolio filtering) are implemented with native React hooks and the browser's `IntersectionObserver` API — no jQuery, no Waypoints, no Isotope, no PureCounter.

## Project structure

```
Miriam-Portfolio/
├── public/
│   └── assets/
│       ├── fonts/          # Steneo-Regular.otf (custom brand font)
│       └── img/            # All portfolio images
│           └── masonry-portfolio/
├── src/
│   ├── App.jsx             # Root component — initialises AOS
│   ├── App.css             # Global styles (adapted from original design)
│   ├── main.jsx            # React entry point
│   └── components/
│       ├── Sidebar.jsx     # Fixed left nav with IntersectionObserver scroll-spy
│       ├── Footer.jsx
│       ├── ScrollTop.jsx
│       └── sections/
│           ├── Hero.jsx    # Background image + Typed.js
│           ├── About.jsx   # Profile photo + language level squares
│           ├── Stats.jsx   # Animated counters (custom hook)
│           ├── Skills.jsx  # Progress bars animated on scroll
│           ├── Resume.jsx  # Education & experience timeline
│           ├── Portfolio.jsx # Filterable grid + GLightbox
│           ├── Services.jsx
│           └── Contact.jsx # Async form → getform.io
├── additional data/
│   └── CURRÍCULUM DISSENY GRÀFIC.pdf
├── index.html
├── package.json
└── vite.config.js
```

## Getting started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment

The output of `npm run build` is a static site in `dist/` — deploy it to any static host:

- **GitHub Pages**: push `dist/` to the `gh-pages` branch, or use the [Vite GitHub Pages guide](https://vitejs.dev/guide/static-deploy.html#github-pages).
- **Netlify / Vercel**: connect the repo, set build command to `npm run build` and publish directory to `dist`.

## Customising content

All content is defined as plain JavaScript arrays/objects at the top of each component — no CMS or config file needed:

- **Skills** → [src/components/sections/Skills.jsx](src/components/sections/Skills.jsx)
- **Resume** → [src/components/sections/Resume.jsx](src/components/sections/Resume.jsx)
- **Portfolio items** → [src/components/sections/Portfolio.jsx](src/components/sections/Portfolio.jsx)
- **Services** → [src/components/sections/Services.jsx](src/components/sections/Services.jsx)
- **Contact info** → [src/components/sections/Contact.jsx](src/components/sections/Contact.jsx)
- **Social links** → [src/components/sections/Hero.jsx](src/components/sections/Hero.jsx) and [src/components/Footer.jsx](src/components/Footer.jsx)

To change colours or fonts, edit the CSS custom properties at the top of [src/App.css](src/App.css).
