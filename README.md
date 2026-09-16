# Argomind website

Marketing site for argomind.ai, built with **React 18 + Vite + React Router**.
No UI framework — styling is one plain CSS file, so it's easy to tweak.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
npm run build      # production build → dist/
npm run preview    # serve dist/ locally to check the build
```

Requires Node.js 18 or newer. Don't open `dist/index.html` by double-clicking —
browsers block the app's JavaScript on `file://`. Use `npm run preview` instead.

## Project structure

```
src/
  main.jsx               Router setup (hash or browser URLs)
  App.jsx                Route list — add new pages here
  styles/style.css       All styling: colors, fonts, spacing at the top (:root)
  assets/                Images (imported by pages)
  data/
    tracks.js            The 14 programs: sub-modules and hours
    blog.js              Blog titles and categories
  components/
    Layout.jsx           Top bar, header/nav, footer, back-to-top, cursor,
                         scroll-reveal effects, usePageMeta (page titles)
    ui.jsx               Building blocks: Button, Section, Head, Cards, Checks,
                         DataTable, Flow, Steps, Callout, PageHero, Band, Icon…
    interactive.jsx      Accordion, Faq, Tabs, Marquee, Phases, SubNav,
                         DemoForm/Field, ArgoLab (demo code editor)
  pages/                 One file per page (Home, Programs, Projects, …)
```

## Common edits

| I want to… | Edit |
|---|---|
| Change page text | `src/pages/<Page>.jsx` — content sits in the JSX or in arrays at the top |
| Add/rename a program or change hours | `src/data/tracks.js` (totals update automatically) |
| Add blog titles or summaries | `src/data/blog.js` |
| Change brand colors or fonts | `:root` variables at the top of `src/styles/style.css` |
| Change nav or footer links | `PLATFORM_LINKS` / `MAIN_LINKS` in `src/components/Layout.jsx` |
| Change the contact email | `CONTACT_EMAIL` in `Layout.jsx`, plus `Contact.jsx` and `DemoForm` |
| Add a new page | Create `src/pages/NewPage.jsx`, add a `<Route>` in `App.jsx`, link it in `Layout.jsx` |
| Add an icon | Add an entry to `ICONS` in `src/components/ui.jsx`, use `<Icon name="…" />` |

Scroll animations are class-based: add `className="reveal"` to fade an element in,
or use `<Split>` for headings that reveal word by word.

## Deploying to the GCS bucket

```bash
npm run build
gcloud storage rsync dist gs://YOUR_BUCKET --recursive --delete-unmatched-destination-objects
```

Upload the **contents of `dist/`**, not the project folder. `--delete-unmatched-destination-objects`
removes old files in the bucket (including the previous static HTML version).

Open it at `https://storage.googleapis.com/YOUR_BUCKET/index.html`. Pages use hash URLs
such as `.../index.html#/programs`, which work on the bucket URL with no extra setup.

**Automatic deploys:** `.github/workflows/deploy.yml` builds and uploads on every push to `main`.
Follow the setup notes at the top of that file to add the required secrets.

## Clean URLs (later, on argomind.ai)

Once the site is served from its own domain, you can switch from `/#/programs` to `/programs`:

1. Build with `VITE_ROUTER=browser npm run build` (or set it in `.env`).
2. Make the host return `index.html` for unknown paths, so refreshing `/programs` works:
   - GCS website bucket: `gcloud storage buckets update gs://YOUR_BUCKET --web-main-page-suffix=index.html --web-error-page=index.html`
     (pages load correctly, though the server reports a 404 status for deep links — fine for a demo, not ideal for SEO)
   - Firebase Hosting, Netlify, Vercel or Cloudflare Pages: add an SPA rewrite to `/index.html` (serves a proper 200)

## Demo-only pieces (TODOs in code)

- Contact, feedback and newsletter forms don't send anywhere yet — replace the submit
  handlers in `DemoForm` (`interactive.jsx`) and `Newsletter` (`Layout.jsx`).
- "Log in", "Live chat", Privacy and Terms are placeholders.
- Argo Labs demo runs JavaScript for real in a sandboxed iframe; SQL output is a fixed sample.
- Blog lists titles only ("Coming soon"); client case studies are pending on the Projects page.
