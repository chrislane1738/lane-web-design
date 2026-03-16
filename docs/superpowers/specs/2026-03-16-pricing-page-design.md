# Pricing Page Design Spec

## Overview

Add a dedicated `/pricing` page to Lane Web Design that transparently displays project pricing and monthly plans. The goal is to aggressively undercut Bay Area competitors while positioning Lane Web Design between DIY builders and agencies.

## Key Decisions

- **Two fixed tiers + one custom tier** (no e-commerce)
- **Bundled monthly plans** — hosting included in monthly price, client pays one number
- **Transparent pricing** — published on site (competitors hide behind consultations)
- **No e-commerce** — not offered until that capability is built out

## Page Structure

### 1. Hero Section
- Pattern: matches existing pages (Services, About, etc.)
- Headline: "Honest Pricing, No Surprises"
- Subtitle: emphasizes transparency vs. competitors who hide pricing
- Terracotta accent bar below heading

### 2. Project Tiers — 3 cards

| | Starter | Standard | Custom |
|---|---|---|---|
| **Price** | $700 | $1,600 | Get a Quote |
| **Pages** | 1-3 | 5-7 | 8+ |
| **Target** | Landing pages, personal sites | Small business sites | Complex or larger projects |
| **Includes** | Custom design, mobile responsive, basic SEO, 1 round of revisions | Everything in Starter + contact form, Google Business setup, analytics, 2 rounds revisions | Scoped to your needs, quoted after consultation |
| **Timeline** | ~1 week | ~2-3 weeks | Varies |

### 3. Monthly Plans — 3 tiers

| | Starter | Growth | Full Support |
|---|---|---|---|
| **Price** | $29/mo | $79/mo | $149/mo |
| **Includes** | Hosting, SSL, uptime monitoring | Everything in Starter + monthly content updates, performance reports | Everything in Growth + priority support, design tweaks, quarterly strategy call |

### 4. Comparison Section
Three-column comparison: **DIY Builders** vs **Agencies** vs **Lane Web Design**

Rows:
- Upfront cost
- Monthly cost
- Custom design (yes/no)
- Who does the work
- Ongoing support

### 5. CTA Section
- Dark charcoal background (matches other pages)
- "Ready to get started?" heading
- Button to `/contact`

## Navigation Update

Add "Pricing" link to Header nav between "Services" and "About" in the `navLinks` array.

## Technical Implementation

### Files to create:
- `app/pricing/page.tsx` — server component with metadata
- `app/pricing/PricingPage.tsx` — client component with page content

### Files to modify:
- `components/layout/Header.tsx` — add Pricing to navLinks
- `app/sitemap.ts` — add /pricing route

### Components:
- Reuse existing: `Container`, `SectionHeading`, `Button`, `PageTransition`
- New: `PricingCard` component for the tier cards (used for both project and monthly tiers)
- New: `ComparisonTable` component for the vs. section

### Patterns to follow:
- Page pattern: `page.tsx` (server, metadata) renders `*Page.tsx` (client)
- Scroll animations via `useScrollAnimation` hook
- Reveal classes: `.reveal-up`, `.reveal-scale`
- Design system colors: terracotta (accents/CTAs), charcoal (text), cream (backgrounds), sand (muted bg)
- Font: DM Serif Display for headings via `fontFamily: "var(--font-display)"`

## Pricing Rationale

- $700 Starter undercuts national freelancer average ($1,000-$5,000) and Bay Area rates ($3,000-$10,000)
- $1,600 Standard undercuts Bay Area agencies ($5,000-$20,000) by 70-90%
- $29-$149/mo plans undercut agency maintenance ($200-$500/mo) while being competitive with DIY platforms ($17-$159/mo) but with custom design included
- Margin is strong because Vercel hosting costs ~$0-$20/mo per site
