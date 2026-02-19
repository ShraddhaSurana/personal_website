# Shraddha Surana Personal Website (Static)

This repository contains a static, GitHub Pages-ready personal website for Shraddha Surana.

## What is included

- Full content coverage from the current website sections:
  - Home
  - About Me
  - My Blogs
  - Publications
  - My Art
  - Contact
- Full blog detail pages for both published posts
- Mirrored local media assets from the current site under `assets/images/legacy/`
- Custom original logo (`assets/images/logo.svg`) and favicon (`assets/images/favicon.svg`)
- Fully static HTML/CSS/JS implementation (no build step)

## Local preview

Open `index.html` directly in your browser, or run a simple static server:

```bash
cd /Users/shraddha/projects/personal_website
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo, go to **Settings -> Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save and wait for deployment.

Your site will be available at the GitHub Pages URL shown in settings.

## Notes

- `.nojekyll` is included so the site is served exactly as static files.
- Contact form uses `mailto:` behavior (suitable for static hosting without backend).
