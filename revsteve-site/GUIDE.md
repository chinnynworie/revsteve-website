# Rev. Steve Obayojie Website — Setup, GitHub & Netlify Guide

You have 3 files + 1 image, already built:
```
revsteve-site/
├── index.html
├── styles.css
├── script.js
└── images/
    └── rev-steve.jpeg
```

---

## Part 1 — Open the project in VS Code

1. Download the files from this chat (button below the file list) and unzip them into a folder, e.g. `revsteve-site` on your Desktop.
2. Open VS Code.
3. `File → Open Folder` → select the `revsteve-site` folder.
4. You should see `index.html`, `styles.css`, `script.js`, and the `images` folder in the sidebar.
5. Install the **Live Server** extension (search "Live Server" by Ritwick Dey in the Extensions panel — the puzzle-piece icon on the left sidebar).
6. Right-click `index.html` → **Open with Live Server**. Your site opens in the browser and auto-refreshes as you edit. Use this to preview and tweak content before deploying.

---

## Part 2 — Before you deploy: 2 things to finish

**A. Spotify embed check**
Open the site and scroll to "Sermons & Seminars." Confirm the embedded player loads his show. If it doesn't, double-check the show ID in `index.html` matches the one in his Spotify link.

**B. Contact form (Netlify Forms)**
The form in `index.html` already has `data-netlify="true"` — this is Netlify's built-in form handling, completely free, no third-party service needed. It **only works once deployed on Netlify** (it won't submit anything while testing locally, that's expected).

---

## Part 3 — Push the project to GitHub

Open the integrated terminal in VS Code: `Terminal → New Terminal`.

1. **Initialize git** (run inside the `revsteve-site` folder):
   ```bash
   git init
   ```

2. **Create a `.gitignore`** (optional but good practice) — skip if you don't have build tools. Not required for this plain HTML project.

3. **Stage and commit your files:**
   ```bash
   git add .
   git commit -m "Initial build: Rev. Steve Obayojie website"
   ```

4. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) → click the **+** icon top-right → **New repository**
   - Name it e.g. `revsteve-website`
   - Leave it **Public** or **Private** (your choice — Netlify works with either)
   - **Do NOT** check "Add a README" (you already have local files — this avoids a merge conflict)
   - Click **Create repository**

5. **Connect your local project to GitHub** (GitHub will show you these exact commands after creating the repo — copy them from there to be safe, but they'll look like this):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/revsteve-website.git
   git branch -M main
   git push -u origin main
   ```
   You'll be prompted to sign in to GitHub (VS Code will pop up a browser login, or you'll use a Personal Access Token if prompted).

6. Refresh your GitHub repo page — you should now see all your files there.

---

## Part 4 — Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign up / log in (you can sign up directly with your GitHub account — this is the easiest path).
2. Click **Add new site → Import an existing project**.
3. Choose **Deploy with GitHub**, authorize Netlify to access your GitHub account.
4. Select the `revsteve-website` repository.
5. Build settings — since this is plain HTML/CSS/JS with no build step, leave:
   - **Build command:** (leave empty)
   - **Publish directory:** `/` (root — since `index.html` sits at the top level)
6. Click **Deploy site**.
7. Netlify will give you a random URL like `https://cheerful-narwhal-123abc.netlify.app` — the site is now live.

### Custom domain (optional, later)
If your dad wants a proper domain like `www.revsteveobayojie.com`:
- Buy the domain (Namecheap, GoDaddy, or directly through Netlify)
- In Netlify: **Site settings → Domain management → Add a custom domain**
- Follow Netlify's DNS instructions (usually just updating nameservers or adding a CNAME record)

### Confirm the contact form works
Once live, submit a test message through the contact form. Check **Netlify dashboard → your site → Forms** — the submission should appear there, and you can set up email notifications under **Forms → Settings → Form notifications** so messages land straight in his inbox.

---

## Part 5 — Making future edits

Any time you want to change text, images, or add a section:
1. Edit the files in VS Code.
2. In the terminal:
   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push
   ```
3. Netlify automatically redeploys within a minute or two — no manual redeploy needed. This is the big benefit of connecting GitHub before deploying.

---

## Quick troubleshooting

| Problem | Fix |
|---|---|
| Images don't show after deploy | Check the file path is exactly `images/rev-steve.jpeg` (case-sensitive on Netlify, unlike Windows) |
| Fonts look wrong | Check your internet connection — fonts load from Google Fonts CDN |
| Form doesn't submit | Forms only work on the live Netlify site, not Live Server preview |
| Mobile menu doesn't open | Make sure `script.js` is linked at the bottom of `index.html` (it already is) |
