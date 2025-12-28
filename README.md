<div align="center">

# Santosh Patidar — Modern React Portfolio

Production‑ready React 18 + Vite portfolio with Bootstrap 5, glassmorphism, dark mode, smooth animations, and a working contact form (EmailJS). Built for fast development and one‑click deployment (Netlify or GitHub Pages).

</div>

## ✨ Features

- React 18 + Vite (blazing dev/build)
- Bootstrap 5.3 via CDN + minimal custom CSS
- Dark/Light themes via `data-bs-theme` (toggle in navbar)
- Glassmorphism backgrounds with animated partitions (dark) and refined light palettes
- Framer Motion animations (reveals, stagger, micro-interactions)
- Sections: Hero, About, Skills, Projects, Contact, CV page, Project Detail
- EmailJS contact form (env‑driven, no server needed)
- SPA ready: `public/404.html`, `robots.txt`

## 🧱 Tech Stack

- React, React Router
- Vite 5
- Bootstrap 5.3 (CDN)
- Framer Motion, react-simple-typewriter, react-icons
- EmailJS (browser SDK)

## 📁 Project Structure

```
portfolio/
├─ public/
│  ├─ 404.html            # SPA fallback for static hosts
│  ├─ robots.txt          # Crawl policy
│  └─ cv.pdf              # Your resume (add this file)
├─ src/
│  ├─ assets/             # Images, icons (SP logo variants included)
│  ├─ components/         # Navbar, Hero, About, Skills, Projects, Contact, etc.
│  ├─ data/               # skills.js, projects.js, socials.js
│  ├─ hooks/              # useTheme.jsx (sets data-bs-theme)
│  ├─ pages/              # CV.jsx, ProjectDetail.jsx
│  ├─ styles/             # index.css (glass styles), variables.css
│  ├─ utils/              # motion.js (animation variants)
│  ├─ App.jsx             # Routes and layout
│  └─ main.jsx            # App bootstrap
├─ index.html             # Head meta + Bootstrap CDN
├─ vite.config.js         # Vite config
├─ package.json           # Scripts and deps
└─ README.md
```

## 🚀 Quickstart (Windows PowerShell)

Install dependencies
```powershell
npm install
```

Start the dev server
```powershell
npm run dev
```

Build for production
```powershell
npm run build
```

Preview the production build locally
```powershell
npm run preview
```

## 🧩 Configuration & Customization

- Name/Role (Navbar + Hero):
	- `src/components/Navbar.jsx`
	- `src/components/Hero.jsx`
- Profile image: `src/assets/Profile.png` (Hero imports it)
- Skills/Projects/Socials data: `src/data/*.js`
- Glass & theme styles: `src/styles/index.css`
- Animations (centralized variants): `src/utils/motion.js`
- CV viewer: `src/pages/CV.jsx` (expects `/public/cv.pdf`)

### Logo (SP monogram)

Two SVG options are available already:
- `src/assets/sp-icon-circle.svg` (clean, circular)
- `src/assets/sp-icon-rounded.svg` (bold, rounded square)

Use either in the navbar by editing `src/components/LogoMark.jsx` or replacing the `<LogoMark />` usage in `Navbar.jsx` with an `<img src={...} />`.

## 📬 Contact Form (EmailJS)

1) Create an EmailJS account and connect a service (Gmail/Outlook/SMTP).

2) Create a template with these variables:
	 - `{{user_name}}`, `{{user_email}}`, `{{message}}`
	 - Set “Reply‑To” to `{{user_email}}` (recommended).

3) Create `.env` at project root (do not commit) and fill values:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_xxxxx
```

4) Restart the dev server and submit the form. Check EmailJS “Email Logs” if anything fails.

Tip: You can use EmailJS with your own SMTP (safe) by adding an SMTP service in the EmailJS dashboard.

## 🎨 Theming & Glassmorphism

- Theme toggle sets `data-bs-theme` on `<html>` via `useTheme.jsx`.
- Light theme uses bright frosted bases with subtle color accents per section.
- Dark theme unifies the base to `rgb(27, 36, 45)` with animated lighter/darker partitions; content sits above on lifted `.glass-card` containers.
- Navbar is a translucent glass bar that slightly elevates on scroll.

## 🧪 Quality Gates

- Build: PASS (Vite) — `npm run build`
- Lint/Typecheck: Not configured by default (optional to add ESLint/TypeScript)
- Tests: None (you can add Jest/Vitest if needed)

## ☁️ Deployment

### Option A — Netlify (recommended)

1) Push this repo to GitHub.
2) In Netlify → “Add new site” → “Import from Git”.
3) Build command: `npm run build`
4) Publish directory: `dist`
5) SPA routing: add a `_redirects` file with `/* /index.html 200` (create `public/_redirects`).
6) If you use EmailJS, set the same env vars in Netlify → Site settings → Environment variables.

### Option B — GitHub Pages

#### Recommended (free) — GitHub Actions (no manual `dist` commits)

This repo includes an auto-deploy workflow: `.github/workflows/deploy.yml`.

Steps:
1) Push the code to GitHub (branch: `main`).
2) In GitHub repo → **Settings** → **Pages**.
3) Under **Build and deployment**, set **Source** = **GitHub Actions**.
4) Push again (or go to **Actions** tab and run the workflow manually).
5) Your site URL will be:
   - `https://<username>.github.io/<repo-name>/`

Important: If you see `src/main.jsx` 404 on the live site, it means GitHub Pages is serving the *source* `index.html` instead of the built `dist` output. Using the Actions workflow fixes that.

#### Alternative — `gh-pages` (manual)

You can still use:
```powershell
npm run deploy
```

If deploying under a subpath, the workflow auto-sets the correct Vite base. For manual deploys, you may need to set `BASE_PATH` while building.

## 🛠️ Troubleshooting

- Contact form button disabled: one or more EmailJS env vars missing at runtime. Add to `.env` and restart dev server.
- Email not received: check EmailJS “Email Logs”, Spam folder, service connection (OAuth/SMTP), and daily quotas.
- SPA 404 on refresh: ensure Netlify `_redirects` exists or GitHub Pages `public/404.html` is present (already included).
- Theme not toggling: ensure `ThemeProvider` wraps `<App />` in `src/main.jsx` and no errors in console.

## 📜 License

MIT — free to use, modify, and distribute.
