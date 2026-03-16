# Lane Web Design - Project Context

## What This Is
Portfolio/business site for Lane Web Design, a one-person web design studio in Concord, CA (Bay Area). Owner is Chris Lane. The site markets custom web design, development, SEO, and maintenance services to small businesses.

## Tech Stack
- **Framework:** Next.js 16.1.6 with App Router, React 19, TypeScript
- **Styling:** Tailwind CSS v4 (PostCSS plugin, NOT the old `tailwind.config.js` approach)
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via `next/font/google`
- **Icons:** lucide-react
- **Utilities:** clsx for class merging
- **Forms:** Web3Forms API (free, no backend) — key in `.env.local`
- **Hosting:** Vercel (production at clanewebdesign.com)

## Project Structure
```
app/
  layout.tsx          Root layout (fonts, metadata, Header/Footer)
  page.tsx            Home page
  globals.css         All CSS: variables, animations, scroll reveals
  about/              page.tsx (metadata) + AboutPage.tsx
  services/           page.tsx (metadata) + ServicesPage.tsx
  pricing/            page.tsx (metadata) + PricingPage.tsx
  work/               page.tsx (metadata) + WorkPage.tsx
  contact/            page.tsx (metadata) + ContactPage.tsx

components/
  ui/                 Button, Card, Container, SectionHeading
  layout/             Header, Footer, PageTransition
  icons/              CLLogoSVG (animated CL monogram)
  home/               HeroContent, HeroAnimation, ServicesTease, FeaturedWork, Testimonials, HomeCTA
  about/              Story, Values, LocalArea
  services/           TypewriterServiceCard, ServiceCard, ProcessSteps
  pricing/            PricingCard, ComparisonTable
  work/               ProjectCard, DeviceMockup
  contact/            ContactForm, ContactInfo

hooks/
  useScrollAnimation  Scroll-triggered CSS class reveals with stagger
  useInView           IntersectionObserver for viewport detection
  useTypewriter       Character-by-character text animation
  useLogoAnimation    Logo animation lifecycle timing
```

## Design System

### Colors (CSS variables in globals.css)
- `--terracotta: #C75B3A` — primary accent, CTAs
- `--sage: #7C9A6E` — secondary accent
- `--charcoal: #2D2A26` — text, headings
- `--cream: #FDF6EC` — main background
- `--sand: #F5E6D0` — muted background
- `--warm-white: #FFFDF9` — card backgrounds
- Each has `-dark` and `-light` variants
- Tailwind theme colors defined via `@theme inline` in globals.css

### Typography
- Headings: `fontFamily: "var(--font-display)"` (DM Serif Display)
- Body: DM Sans (set as `--font-body` and `--font-sans`)

### Animation System
All animations defined in `globals.css`:
- **Scroll reveals:** `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale` — triggered by `useScrollAnimation` adding `.revealed` class
- **Logo animation:** 4.5s sequence — cursor traces C arc (2s linear), draws L vertical (0.8s), draws L foot (0.5s), color transition to terracotta. SVG viewBox is `-5 5 110 90`. strokeDasharray/offset is 133 (actual arc length).
- **Typewriter cursor:** 2px inline-block bar with `background: var(--terracotta)`, blinks at 0.7s step-end
- **Easing:** `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`
- All animations respect `prefers-reduced-motion: reduce`

## Key Implementation Details

### Page Pattern
Each route has a `page.tsx` (server component, exports metadata) that renders a `*Page.tsx` client component. This keeps metadata separate from interactive logic.

### Contact Form (Web3Forms)
- POSTs to `https://api.web3forms.com/submit`
- Access key from `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`
- Fields: name, email, phone, projectType, budget, message
- Client-side validation, submitting/success states
- Key is also set in Vercel env vars for production

### Services Typewriter
- Each `TypewriterServiceCard` has its own `useInView` observer
- Cards require BOTH a scroll event AND viewport intersection before typing starts (prevents animation on page load)
- Title types first, then description, then features sequentially

### Logo SVG (CLLogoSVG.tsx)
- C arc: `M 52 20 A 33 33 0 1 0 52 80`, center (38,50), r=33
- L vertical: rect at (46,20) 12x60
- L foot: rect at (46,68) 30x12
- Cursor: polygon positioned via CSS keyframes
- C arc draw + cursor trace both use `linear` easing for sync

### Header
- Sticky, backdrop-blur, z-50
- Mobile: hamburger menu with slide-down panel
- Height: h-16 (64px), md:h-18 (72px)
- Main content has matching negative top margin

## Deployment
- **Vercel project:** chris-lanes-projects-984993e7/lane-web-design
- **Domain:** clanewebdesign.com
- **Deploy command:** `npx vercel --prod`
- **Env vars on Vercel:** `NEXT_PUBLIC_WEB3FORMS_KEY`

## Pricing
- See `PRICING.md` for full pricing strategy, competitor research, cost basis, and margin analysis
- Project tiers: $700 (Starter, 1-3 pages) / $1,600 (Standard, 5-7 pages) / Custom (8+, quoted)
- Monthly plans: $29 (hosting) / $79 (growth) / $149 (full support) — hosting bundled
- No e-commerce offered yet
- Contact form budget ranges aligned to pricing: Under $1K / $1-2K / $2-5K / $5K+ / Not sure

## Content & Copy Guidelines
- No em-dashes anywhere in user-visible text
- Don't overuse the word "warm" — use "distinctive" instead
- The brand voice is efficient and direct, not flowery
- About page emphasizes: efficiency, affordability, non-profit background, free mockup offer
- Testimonials section (Kind Words) is currently hidden on the home page — commented out until real testimonials are available. Component still exists at `components/home/Testimonials.tsx` with fictional placeholder content (Sarah Mitchell, Marcus Chen, Jennifer Park)

## Common Tasks
- **Run dev:** `npm run dev` (port 3000)
- **Build:** `npm run build` (clear `.next` first if stale lock errors)
- **Deploy:** `npx vercel --prod`
- **Add env var to Vercel:** `npx vercel env add VAR_NAME production`
