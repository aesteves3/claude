# Quick online test (no local setup)

Pick **one** option below. You only need a free account and your project on GitHub (or GitLab).

---

## Option 1 — Render (recommended: site + contact forms)

**Best match** for this project: one URL serves the website and handles forms.

1. Push this folder to **GitHub** (create a repo, upload the code).
2. Go to [render.com](https://render.com) → sign up (free).
3. **New** → **Blueprint** → connect GitHub → select your repo  
   (Render reads `render.yaml` automatically).
4. Click **Deploy**. Wait ~5–10 minutes.
5. Open the URL Render gives you (e.g. `https://nautk-web.onrender.com`).

**Test on the live URL**
- Browse home and course pages.
- Submit the contact form → check **Logs** in Render; submissions are saved even without email.
- Optional: in Render → your service → **Environment**, add SMTP variables from `server/.env.example` for real emails.

**Note:** Free tier sleeps after ~15 min idle; first visit may take 30–60 seconds to wake up.

---

## Option 2 — Netlify or Cloudflare Pages (website only, fastest UI test)

**Forms will not work** until you add a separate API (e.g. Render later). Good to check layout and navigation only.

### Netlify
1. [netlify.com](https://netlify.com) → sign up.
2. **Add new site** → **Deploy manually**.
3. On your PC, run **once** (if you have Node installed):
   ```bash
   npm install
   npm run build
   ```
4. Drag the **`dist`** folder into Netlify’s upload area.
5. Open the `*.netlify.app` URL.

### Cloudflare Pages
1. [pages.cloudflare.com](https://pages.cloudflare.com) → sign up.
2. **Create project** → **Direct Upload**.
3. Same: `npm run build`, then upload the **`dist`** folder.
4. Open the `*.pages.dev` URL.

---

## Option 3 — InfinityFree (PHP, classic hosting)

Closer to cPanel-style hosting with working forms via PHP.

1. [infinityfree.com](https://infinityfree.com) → create account + site.
2. On your PC: `npm install` → `npm run build`.
3. Upload **everything inside `dist/`** to `htdocs` (File Manager or FTP).
4. Copy `api/config.sample.php` → `api/config.php` on the server.
5. Create folder `api/data` with write permission (chmod 755).
6. Open your free subdomain URL.

---

## If you don’t have Node on your PC

Use **Render Option 1 only** (Git push → Render builds in the cloud). You never need to run `npm` locally.

---

## After testing

Point your real domain (`nautk.org`) in the host’s DNS settings when you’re ready to go live.
