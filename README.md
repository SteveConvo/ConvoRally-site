# ConvoRally Marketing Site

## Pages

- `/` — Main brand site
- `/remodeling` — Construction & Custom Trades
- `/hoa` — HOA Management
- `/property-management` — Property Management
- `/building-forensics` — Building Forensics
- `/disaster-recovery` — Disaster Recovery
- `/startups` — For Startups & VCs (placeholder)

## Deploy to Vercel

### Option A: One-click (recommended)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import the repo
5. Vercel auto-detects Next.js — just click "Deploy"
6. Your site will be live at `your-project.vercel.app`
7. Add your custom domain in Vercel dashboard > Settings > Domains

### Option B: Vercel CLI

```bash
npm install
npx vercel
```

Follow the prompts. It will deploy instantly.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## To swap the logo from base64 to file

The logo is currently embedded as base64 in each page for portability.
To use the file version instead:

1. The logo is already at `public/cr-logo.png`
2. In each page file, replace the `LOGO_SRC` constant with:
   ```js
   const LOGO_SRC = "/cr-logo.png";
   ```

## Notes

- All pages use Google Fonts (DM Sans + Instrument Serif) loaded at runtime
- No external dependencies beyond Next.js and React
- Each vertical page has its own SEO metadata in its layout.jsx
- The startups page is a placeholder — build it when ready
