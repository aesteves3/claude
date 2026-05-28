# NAUTK Website (Cursor2)

React + Vite marketing site for NAUTK. **No Base44 runtime required** — deploy on Render, cPanel, or any static/Node host.

## Your changes preserved

- **Courses** — static data in `CoursesSection.jsx` and `CourseDetail.jsx` (no API needed for course pages)
- **Images** — local paths `/images/arrais1.png`, `mestre1.png`, `cap1.png` (add files under `public/images/`)
- **Forms** — contact + enrollment via `/api/contact` and `/api/enrollments`

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Forms in dev need the API (second terminal):

```bash
cp server/.env.example server/.env
npm run server:dev
```

## Render deploy

| Setting | Value |
|---------|--------|
| **Root Directory** | *(empty)* |
| **Build Command** | `npm install --include=dev && npm run build` |
| **Start Command** | `npm start` |

Push to GitHub → connect Render → deploy. See `DEPLOY-QUICK.md`.

## Before upload: course images

Place these in `public/images/`:

- `arrais1.png`
- `mestre1.png`
- `cap1.png`

## Production build

```bash
npm run build
```

Upload `dist/` to your host, or use Render with `npm start` (serves site + API).

See `DEPLOY-QUICK.md` for cPanel, Netlify, and Cloudflare options.
