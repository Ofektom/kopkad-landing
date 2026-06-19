# Kopkad Landing Page

Public marketing site for Kopkad. Deployed at the base domain `kopkad.ng`; the main web app runs at `app.kopkad.ng`.

## Tech Stack

- React 19 + Vite 6
- React Router DOM v7
- Tailwind CSS v3
- react-icons

## Routes

| Path | Description |
|------|-------------|
| `/` | Main landing page |
| `/c/:token` | QR savings card scan page |
| `/terms` | Terms of Use |
| `/coop-member-terms` | Cooperative Member Terms |
| `/coop-platform-terms` | Cooperative Platform Operator Agreement |
| `/bylaws` | Cooperative Bye-Laws |

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Dev server runs on `http://localhost:5173`.

## Environment Variables

```env
VITE_APP_URL=https://app.kopkad.ng        # CTA links target (Log In / Get Started)
VITE_API_BASE_URL=https://kopkad.onrender.com   # Backend API for /c/:token card scan
```

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Deployment (Vercel)

Deployed on Vercel at the base domain **`kopkad.ng`**.

`vercel.json` rewrites all paths to `index.html` for client-side routing:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Required Vercel environment variables:**

| Variable | Value |
|----------|-------|
| `VITE_APP_URL` | `https://app.kopkad.ng` |
| `VITE_API_BASE_URL` | `https://kopkad.onrender.com` |

The main web app (`kopkad-frontend`) is deployed separately at `app.kopkad.ng`.
