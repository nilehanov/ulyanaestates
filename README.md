# ulyanaestates.com

Marketing site for **Ulyana Hanov, REALTOR®** (DRE# 02442380) — a licensed real
estate salesperson affiliated with **Estate Properties**, serving the Palos
Verdes Peninsula and the South Bay, California.

> **This is a personal-agent brand site, not a brokerage.** "Ulyana Estates" is
> Ulyana's personal brand. The legal brokerage is Estate Properties (a RE/MAX
> affiliate). See the compliance notes below before launch.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**,
configured for **static export** and deployed to **GitHub Pages**. No backend, no
server runtime, no committed secrets.

---

## Local development

```bash
npm install
cp .env.local.example .env.local   # optional — only needed to test live form posts
npm run dev                        # http://localhost:3000
npm run build                      # static export to ./out
```

`npm run build` produces a fully static `out/` directory (this is what GitHub
Pages serves). There is no `npm start` server in production.

---

## (a) Where to drop logos, photography & portrait

All assets live under `public/`. Replace the labeled placeholders in place — file
paths are already wired into the components and `data/*.ts`.

| What | Path | Notes |
|---|---|---|
| **Logo — wordmark** | `public/brand/logo1.png` | Clean flat gold wordmark (the production asset). `logo1-transparent.png` is the white-keyed version used in the nav/footer. |
| **Logo — mockup** | `public/brand/logo2.png` | 3D embossed render; reference only, not used in the UI. |
| **Favicon / mark** | `public/brand/mark*.png`, `public/favicon*`, `public/apple-touch-icon.png`, `public/icon-*.png` | Generated from the "U-in-house" mark in `logo1.png`. Regenerate if the logo changes. |
| **Hero photo** | `public/hero.jpg` | Replace with Ulyana's golden-hour Palos Verdes cliffside estate photo (≥2400px wide, landscape). |
| **Listing photos** | `public/listings/4175-w-172nd/01.jpg` (02, 03 …) | **Her own MLS photos** — she holds the rights as listing agent. **Do not hotlink Zillow's CDN.** |
| **Neighborhood photos** | `public/neighborhoods/{pve,rolling-hills,rpv,beach-cities}.jpg` | Representative local photography. |
| **Lifestyle photos** | `public/lifestyle/{oceanfront,equestrian,golden-hour,village}.jpg` | Editorial coastal/equestrian/village imagery. |
| **Portrait** | `public/about/ulyana-portrait.png` | Ulyana's professional headshot (already supplied). |
| **OG image** | `public/og-image.jpg` | Social-share card. Regenerate if branding changes. |

> **CONFIRM LOGO ROLES** (left as a comment in `components/Nav.tsx`): `logo1.png`
> is used as the nav/footer wordmark and as the source for the favicon/mark.
> `logo2.png` is a mockup render kept for reference. Swap if Ulyana prefers the
> reverse.

Every placeholder image is clearly labeled "PLACEHOLDER" so nothing fake ships by
accident. Bracketed copy placeholders (`[BIO]`, `[CREDENTIALS]`, testimonials)
live in the components/data files.

---

## (b) IDX integration point (live MLS listings — future)

Today the site shows **one real active listing** seeded in `data/listings.ts`
(MLS# SB26121572), rendered by `components/ListingsGrid.tsx`. There is no live MLS
search — by design (we never imply listings she doesn't have).

Live MLS listings flow through Estate Properties' **CRMLS IDX agreement** via a
vendor (iHomefinder, RealScout, Showcase IDX, or kvCORE) — they **cannot be
scraped**. When that feed is ready:

1. Look for `// IDX INTEGRATION POINT` at the top of `data/listings.ts`.
2. Replace the local `listings` array with the vendor's feed (or fetch + map into
   the same `Listing` type).
3. Keep the result **CRMLS/IDX-compliant** (attribution, required disclosures).
4. Update `viewMyListingsHref` in `data/listings.ts` with Ulyana's real Estate
   Properties agent-roster URL (currently a placeholder).

---

## (c) Form endpoint / CRM wiring

The contact/valuation form (`components/ContactForm.tsx`) posts **client-side** to
**Web3Forms** — no backend of ours.

1. Get a free public access key at <https://web3forms.com> (delivers to
   `ulyanaestates@gmail.com`).
2. Local: put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY=...`.
3. Production: store it as the GitHub Actions repo secret **`WEB3FORMS_KEY`**
   (the deploy workflow injects it as `NEXT_PUBLIC_WEB3FORMS_KEY` at build).

If the key is unset or the request fails, the form **gracefully falls back to a
`mailto:` link** — no lead is lost. To switch providers later, see
`// FORM ENDPOINT` in `ContactForm.tsx` (swap for Formspree/Getform or a CRM
webhook like Follow Up Boss / kvCORE). The form already includes a hidden
**honeypot**, a required **TCPA consent** checkbox, and a commented
**hCaptcha/reCAPTCHA** placeholder.

---

## (d) Compliance fields to confirm with the broker before launch

The footer renders a DRE advertising-compliance block on **every page**. Verify
these in `data/site.ts` with the Estate Properties office before going live:

- [ ] **Agent license:** DRE# 02442380 (confirmed from her active MLS listing).
- [ ] **Responsible broker legal name & lockup:** "Estate Properties" — confirm
      the exact required brand lockup (RE/MAX affiliation wording).
- [ ] **Broker DRE#:** 01879720 — confirm with the office.
- [ ] **Office / HQ addresses** as displayed.
- [ ] **Equal Housing Opportunity**, **REALTOR®**, and **CRMLS** attribution
      lines.
- [ ] Affiliation line: "Ulyana Hanov is a licensed real estate salesperson
      affiliated with Estate Properties."
- [ ] Social handles (Instagram/LinkedIn) — currently placeholders (`#`).

Do **not** add sold-history stats, fabricated testimonials, awards, or transaction
volume — she is newly licensed with one active listing and zero closed sales.

---

## (e) Deploy & custom domain

**Stack:** GitHub repo → GitHub Actions → GitHub Pages, custom domain
`ulyanaestates.com`, DNS on Cloudflare.

Static config is already in place: `next.config.js` (`output: 'export'`,
`images.unoptimized`, `trailingSlash`), `public/.nojekyll`, and `public/CNAME`
(`ulyanaestates.com`). Apex domain → no `basePath` needed.

### First-deploy ordering

1. **Push to `main`.** The workflow in `.github/workflows/deploy.yml` builds the
   static export and deploys it.
2. **Settings → Pages → Source = GitHub Actions.**
3. Add the repo secret **`WEB3FORMS_KEY`** (Settings → Secrets and variables →
   Actions).
4. **Add the custom domain:** Settings → Pages → Custom domain →
   `ulyanaestates.com`.
5. **DNS at Cloudflare** (recommend **DNS-only / grey-cloud** first so GitHub can
   provision its TLS cert; you can proxy later with CF SSL = Full):
   ```
   A      @    185.199.108.153
   A      @    185.199.109.153
   A      @    185.199.110.153
   A      @    185.199.111.153
   CNAME  www  <github-username>.github.io
   ```
6. **Wait for the cert to provision,** then enable **Enforce HTTPS** in
   Settings → Pages.

### Cloudflare API token (optional)

DNS can be set by hand in the dashboard. If you script it, the token is provided
**only** as a secret named `CF_API_TOKEN` — **never commit it.** Read it from the
environment. Verify scope/validity before use:

```bash
curl "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  -H "Authorization: Bearer $CF_API_TOKEN"
```

**Rotate the token after setup** — it was shared in plaintext and should be
regenerated.

---

## Project structure

```
app/            layout (fonts, SEO, JSON-LD), home page, /about, sitemap, robots
components/     Nav, Hero, ListingsGrid, CoastalLifestyle, Neighborhoods,
                About, Concierge, Testimonials, ContactForm, Footer, Reveal
data/           site.ts (identity + compliance), listings.ts, neighborhoods.ts,
                testimonials.ts
lib/            jsonld.ts (RealEstateAgent schema.org)
public/         brand, hero, listings, neighborhoods, lifestyle, about, favicons,
                CNAME, .nojekyll
```
