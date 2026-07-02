# Agaba Kelly — Portfolio (React + Vite)

## Run it in VS Code

1. Unzip this folder and open it in VS Code.
2. Open a terminal in the folder and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```
npm run build
```
Output goes to the `dist/` folder — deploy that to Cloudflare Pages, Netlify, Vercel, etc.

## What changed from the original HTML site

- Converted to a Vite + React app (`src/App.jsx`, split into small components: Nav, Hero, LiveWork, CaseStudies, Testimonials, Skills, Contact, Footer).
- Projects are now driven by a single `projects` array in `App.jsx`, so the Live Projects, Case Studies, and Testimonials sections stay in sync.
- Removed the **Garment** project (garment-ck2.pages.dev) and replaced it with **Concrete Estimator** (https://concrete-estimator-d7v.pages.dev/).
- Replaced the profile photo with the uploaded picture, now bundled locally at `src/assets/profile.png` instead of loading from an external URL.
- All original styling was preserved in `src/index.css`.

## Notes / things you may want to update

- Update the `person` / `role` / `quote` for the Concrete Estimator testimonial in `src/App.jsx` — I filled in a placeholder client name since none was provided.
- Update the GitHub/LinkedIn links in the Contact section (`href="#"` placeholders) to your real profile URLs.
