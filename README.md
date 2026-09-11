# Harmony Group Security Services

Public-facing website for Harmony Group Security Services in Pune. The site presents security and housekeeping services, training programs, company information, careers, gallery content, and direct contact options.

## Technology

- React 18
- React Router 7
- Vite 8
- Plain CSS with Bootstrap and Font Awesome
- AOS scroll animations

## Local development

Use Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

The development server runs at `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

Use `npm run preview` to inspect the generated production build locally.

## Routes

- `/` — Home
- `/about-us` — About
- `/services` — Services
- `/training` — Training
- `/careers` — Careers
- `/gallery` — Gallery
- `/contact-us` — Contact

## Contact forms

The contact and careers forms prepare a pre-filled email in the visitor's configured email application. They do not require a backend or store personal data on the website.

## Deployment

Build output is written to `dist/`. Because the site uses browser-based routing, the production host must rewrite unknown paths to `/index.html`. Configure that fallback in the selected hosting platform before publishing.
