# Launch Pricing for Project Packages

## Goal

Add "launch pricing" (15% off) to the three one-time project tiers to encourage visitors to contact Chris. The discounted prices serve as an anchor for negotiation — Chris can offer further flexibility in conversation so clients feel they're getting a deal.

## Scope

**In scope:**
- Update project package prices on the pricing page
- Add a launch pricing note below the section subtitle
- Update the comparison table to match
- Update page metadata to match

**Out of scope:**
- Monthly plans (no discount)
- PricingCard component (no new props needed)
- Contact form budget ranges (already broad enough to cover discounted prices)
- PRICING.md and CLAUDE.md — these document base prices, not display prices; no update needed

## Design

### Price Changes

| Tier | Original | Launch Price (15% off) |
|------|----------|----------------------|
| Starter | $700 | $595 |
| Standard | $1,600 | $1,360 |
| Custom | "Let's Talk" | "Let's Talk" (unchanged) |

### Section Subtitle Update

Current subtitle (via SectionHeading):
> "One-time investment to get your site designed, built, and launched."

Keep the SectionHeading subtitle as-is. Add a separate `<p>` element after the SectionHeading in PricingPage.tsx, styled in `text-terracotta` with `font-semibold`:
> "Launch pricing: 15% off all packages as we build our portfolio."

This avoids modifying the shared SectionHeading component. The new `<p>` sits inside the same `reveal-up` div, centered, with a small top margin (`mt-3`).

### Comparison Table Update

Update the "Upfront cost" row for Lane Web Design from `"$700 - $1,600"` to `"$595 - $1,360"`.

### Page Metadata Update

Update the meta description in `app/pricing/page.tsx` from:
> "Project packages from $700 and monthly plans from $29/mo."

To:
> "Project packages from $595 and monthly plans from $29/mo."

### Files Modified

- `app/pricing/PricingPage.tsx` — update `projectTiers` prices, add launch pricing line below SectionHeading
- `app/pricing/page.tsx` — update meta description price reference
- `components/pricing/ComparisonTable.tsx` — update upfront cost range

### Rollback Plan

When launch pricing ends:
1. Revert Starter price to `$700`, Standard to `$1,600`
2. Remove the launch pricing `<p>` element
3. Revert ComparisonTable upfront cost to `"$700 - $1,600"`
4. Revert meta description to `"from $700"`

## Negotiation Strategy (context, not implemented)

The listed launch prices are the starting point, not the floor. When a potential client contacts Chris:
- They see launch pricing and feel they're already getting a deal
- If they push for a lower price, Chris can negotiate down from the launch price
- Chris then counters with a price between the client's ask and the launch price
- The client walks away believing they got a great deal below the advertised rate
