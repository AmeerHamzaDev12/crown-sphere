# Crowns Sphere

Marketing site for Crowns Sphere Private Limited. Next.js 16 (App Router,
Turbopack), React 19, Tailwind CSS v4, TypeScript.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

---

## Where the words live

**All page copy is in `content/` — plain TypeScript files, no JSX.** To change
what the site says, edit these and nothing else. The page components read from
them, so a text change never means touching layout code.

| File | Page |
| --- | --- |
| `content/site.ts` | Company details, navigation, footer. **Start here.** |
| `content/ventures.ts` | The venture registry — feeds the homepage grid, `/ventures` and the footer |
| `content/home.ts` | `/` |
| `content/about.ts` | `/about` |
| `content/aurat-card.ts` | `/aurat-card` |
| `content/crowns-financial.ts` | `/crowns-financial` |
| `content/crowns-education.ts` | `/crowns-education` |
| `content/crowns-health.ts` | `/crowns-health` |
| `content/crowns-marketing.ts` | `/crowns-marketing` |
| `content/digital-marketplace.ts` | `/digital-marketplace` |
| `content/travel-visa.ts` | `/travel-visa` |
| `content/crowns-tv.ts` | `/crowns-tv` |
| `content/opportunities.ts` | `/opportunities` (also used by home, partnerships, news) |
| `content/partnerships.ts` | `/partnerships` |
| `content/news.ts` | `/news` |
| `content/contact.ts` | `/contact`, including the form's topic dropdown |

Each file names the source document it came from at the top.

### Changing the navigation

`content/site.ts` — `mainNav` is the header, `ventureNav` is the Ventures
dropdown, `footerNav` is the footer. Add an entry and it appears in the header,
the mobile menu and the footer without any other change.

### Adding a venture

Add an object to `ventures` in `content/ventures.ts`, then create
`app/<slug>/page.tsx`. The homepage grid, `/ventures` and the footer pick it up
automatically. Copy the closest existing venture page as a starting point.

---

## Structure

```
app/
  layout.tsx              root layout — fonts, metadata, header, footer
  globals.css             design tokens + base styles (see below)
  page.tsx                homepage
  <route>/page.tsx        one folder per page
  actions/contact.ts      contact form server action
  not-found.tsx           404
components/
  ui.tsx                  Section, Card, CtaButton, Steps, PageHero, CtaBand…
  site-header.tsx         floating pill nav, dropdown, mobile menu
  site-footer.tsx
  contact-form.tsx
  reveal.tsx              scroll reveal (IntersectionObserver, no library)
  marquee.tsx             scrolling partner strip
  accordion.tsx
  logo.tsx
content/                  all page copy
```

## Design tokens

Everything visual is defined once in the `@theme` block at the top of
`app/globals.css`. Change a value there and it propagates through every
utility class.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-ink` | `#08080a` | Page background |
| `--color-surface` | `#131317` | Cards |
| `--color-line` | `#26262d` | Borders, dividers |
| `--color-royal` | `#a233c4` | **Primary accent** — CTAs, links, focus, hovers |
| `--color-royal-2` | `#b954d6` | Hover state for the above |
| `--color-plum` | `#5c1d6b` | Ambient glows and gradients |
| `--color-logo` | `#7b2d8e` | The logo mark's own purple |
| `--color-ember` | `#fe4a23` | **Secondary accent** — see below |
| `--color-gold` | `#e8b23c` | "In development" status badges |
| `--color-cream` | `#f5f2f6` | The one light section per page |
| `--color-mist` | `#a2a2ad` | Body text on dark |
| `--font-display` | Manrope | Headings |
| `--font-sans` | Inter | Body |

### The two-accent rule

The purple comes from the logo; it is lifted in lightness so it holds its own
against the near-black background. The orange was kept, but given a narrower
job, so the two read as a deliberate pair rather than a clash:

- **Purple = brand and action.** Buttons, links, focus rings, hover states,
  eyebrow dots, checkmarks, the ambient glows.
- **Orange = enumeration and labels.** The `01 02 03` step numerals, the small
  uppercase category labels (venture kind, news category, care tier), and form
  validation.

If you ever want to go single-accent, change `--color-ember` to
`var(--color-gold)` and the whole site follows — gold and purple is the
traditional royal pairing.

Sections alternate `tone="ink"` → `tone="surface"` → `tone="cream"` to give each
page a rhythm. Pass the tone to `<Section>` and the child components follow it.

Sections alternate `tone="ink"` → `tone="surface"` → `tone="cream"` to give each
page a rhythm. Pass the tone to `<Section>` and the child components follow it.

---

## Before launch

- [ ] **Swap in the official logo file.** `components/logo.tsx` draws the crown
      from generated geometry — a reconstruction from the supplied artwork, not
      the real asset. Put the vector at `public/logo.svg` and replace the
      `<svg>` in `LogoMark` with `<Image src="/logo.svg" width={52} height={28}
      alt="" />`. Nothing else needs to change.
- [ ] **Contact form delivery.** `app/actions/contact.ts` validates and logs but
      does not send. Wire up Resend (or a webhook) at the marked `TODO`.
- [ ] **App store links.** `content/aurat-card.ts` → `platforms` has `href: "#"`
      placeholders for the App Store and Google Play.
- [ ] **YouTube URL.** `content/site.ts` → `company.youtube` and
      `content/crowns-tv.ts` point at youtube.com generally.
- [ ] **Partner logos.** The marquees on the homepage and `/partnerships` show
      sector names as placeholders. Drop logo files into `public/partners/` and
      render `<Image>` inside `<Marquee>`.
- [ ] **Privacy Policy and Terms.** Footer links point at `/privacy` and
      `/terms`, which do not exist yet (they 404).
- [ ] **Open Graph image.** Add `app/opengraph-image.png` (1200×630).
- [ ] **Real domain.** `metadataBase` in `app/layout.tsx` assumes
      `https://www.crownssphere.com`.

## Adding motion

See [ANIMATIONS.md](./ANIMATIONS.md) — a phased plan for Lenis smooth scroll,
GSAP ScrollTrigger and Lottie, with what the reference site actually uses.
