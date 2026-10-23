# DorahDash

DorahDash is a food delivery demo built with Next.js. Browse restaurants and menus, add items to a cart, choose a delivery address, and follow a simulated order through delivery.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables or external service credentials are required for the demo.

## Features

- Browse, search, filter, and sort restaurants and menus.
- Save favorite restaurants and add menu items to a single-restaurant cart.
- Select a delivery address and continue to checkout.
- Apply the `DORAH25` promo code for a demo discount.
- View orders and their simulated status and driver location.
- Browse information pages, FAQs, privacy and terms pages, and partner application forms.

Sign-in accepts any email and password. The app is a frontend demo: account, payment, partner applications, and city requests are not connected to backend services. Cart, account, saved address, and order data are persisted in the browser using Zustand. Order status changes and driver movement are simulated.

## Available scripts

```bash
npm run dev    # Start the development server
npm run lint   # Run ESLint
npm run build  # Create a production build
npm run start  # Serve a production build
```

Run `npm run build` before `npm run start`.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Zustand with browser persistence
- React Leaflet and OpenStreetMap tiles for the tracking map
- Lucide icons

## Project structure

```text
src/
  app/           Routes and page layouts
  components/    Shared UI components and dialogs
  lib/           Restaurant data and the Zustand store
```

Dynamic routes include `/restaurant/[id]` and `/track/[id]`.
