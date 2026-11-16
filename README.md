# Bookinn — frontend demo

A premium-yet-accessible accommodation marketplace built with React, TypeScript, Vite and React Router. The visual direction is affordable luxury: espresso browns, caramel accents, warm ivory, editorial typography and generous photography.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The demo environment variables are intentionally fake and safe for local UI development:

- `VITE_DEMO_MODE=true`
- `VITE_DEMO_EMAIL=guest@bookinn.test`
- `VITE_DEMO_PASSWORD=bookinn123`
- `VITE_DEMO_USER_NAME=Bookinn Guest`

The sign-in screen is prefilled with the demo credentials. Demo registration and sign-in store a mock user in the browser session only. No real account, email, payment, booking, or external authentication is created. Google sign-in is a visual placeholder.

## Frontend routes

- `/` — responsive marketplace homepage, demo destination search and save-favourite interactions
- `/login` — demo sign-in
- `/register` — mock registration
- `/forgot-password` — simulated password reset confirmation

## Modular structure

```text
src/
├── app/                 # Route composition
├── components/
│   ├── layout/          # Header, footer, site layout
│   └── ui/              # Reusable brand and button primitives
├── features/
│   ├── auth/            # Auth screens and mock demo auth service
│   └── home/            # Homepage and stay discovery UI
├── styles/              # Brand tokens and responsive styles
└── main.tsx
```

## Responsive design

Layouts are designed for mobile, tablet and desktop, with a collapsible mobile navigation, adaptive search panel, fluid typography, flexible property grids and reduced-motion support.

All property names, prices, ratings, destination counts and account credentials are sample/demo content. Replace them with real content when ready; no backend is required to run this frontend prototype.
