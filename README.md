# Trade Avata — Final Frontend Package

## What is included
- Modern Trade Avata homepage matching the approved dark-outer / light-inner direction.
- Theme toggle persisted in localStorage.
- Connected homepage buttons and routes.
- AI Analytics workspace with fixed wide-grid layout and in-page navigation.
- AI Journal with local browser demo storage.
- Indicator marketplace, filters, product detail pages.
- Course catalog, course detail pages and course player.
- Login/register/member workspace UI.
- Admin Control Centre UI with clearly marked demo data.
- Market, About, Learn, Trade, Tools, Store, Contact and Risk Disclosure pages.
- Shared support/chat launcher.
- GitHub Pages workflow.
- Optional Firebase configuration hooks.

## Important production distinction
The visual frontend is complete and route-connected. Real authentication, live visitor counts, real payments, production support email, broker connections and copy-trading execution still require their backend services and credentials. Demo data is explicitly labeled and is never presented as live backend data.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages
The included workflow builds `dist` and deploys it with GitHub Pages. `astro.config.mjs` automatically uses the repository name as the Pages base path during GitHub Actions builds.

## Optional Firebase environment variables
Copy `.env.example` to `.env` and provide:
- PUBLIC_FIREBASE_API_KEY
- PUBLIC_FIREBASE_AUTH_DOMAIN
- PUBLIC_FIREBASE_PROJECT_ID
- PUBLIC_FIREBASE_STORAGE_BUCKET
- PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- PUBLIC_FIREBASE_APP_ID

These values are optional for the current frontend preview.
