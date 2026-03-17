# Launch Pricing Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add "launch pricing" (15% off) to project package tiers with a section-level note, and update all references to match.

**Architecture:** Update prices in the PricingPage data array, add a styled launch pricing line below the SectionHeading, update the ComparisonTable data, and update page metadata. No component API changes needed.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS v4

**Spec:** `docs/superpowers/specs/2026-03-16-launch-pricing-design.md`

---

## File Map

- Modify: `app/pricing/PricingPage.tsx` — project tier prices + launch pricing line
- Modify: `app/pricing/page.tsx` — meta description
- Modify: `components/pricing/ComparisonTable.tsx` — upfront cost row

---

## Chunk 1: Implementation

### Task 1: Update project tier prices in PricingPage

**Files:**
- Modify: `app/pricing/PricingPage.tsx:14,30`

- [ ] **Step 1: Update Starter price**

In `app/pricing/PricingPage.tsx`, in the `projectTiers` array, change the Starter tier:

```typescript
price: "$595",
```

(was `"$700"`)

- [ ] **Step 2: Update Standard price**

In the same file, change the Standard tier:

```typescript
price: "$1,360",
```

(was `"$1,600"`)

- [ ] **Step 3: Verify dev server shows updated prices**

Open `http://localhost:3001/pricing` and confirm the Starter card shows $595 and Standard shows $1,360.

---

### Task 2: Add launch pricing line below SectionHeading

**Files:**
- Modify: `app/pricing/PricingPage.tsx:152-158`

- [ ] **Step 1: Add the launch pricing note**

In `app/pricing/PricingPage.tsx`, find the Project Tiers section's `reveal-up` div that wraps the SectionHeading (around line 153). Add a `<p>` after the `<SectionHeading />` component, inside the same `reveal-up` div:

```tsx
<div className="reveal-up">
  <SectionHeading
    title="Project Packages"
    subtitle="One-time investment to get your site designed, built, and launched."
  />
  <p className="text-terracotta font-semibold text-center -mt-10 md:-mt-12 mb-0">
    Launch pricing: 15% off all packages as we build our portfolio.
  </p>
</div>
```

The negative top margin (`-mt-10 md:-mt-12`) pulls the line up into the SectionHeading's bottom margin so it reads as part of the subtitle block. Adjust if spacing looks off.

- [ ] **Step 2: Verify in browser**

Open `http://localhost:3001/pricing`. Confirm:
- The terracotta launch pricing line appears below the subtitle
- Spacing looks natural (not too far from the subtitle, not overlapping)
- Text is centered and legible on both mobile and desktop widths

---

### Task 3: Update ComparisonTable

**Files:**
- Modify: `components/pricing/ComparisonTable.tsx:17`

- [ ] **Step 1: Update upfront cost range**

In `components/pricing/ComparisonTable.tsx`, in the `rows` array, change the "Upfront cost" row's `lane` value:

```typescript
lane: "$595 - $1,360",
```

(was `"$700 - $1,600"`)

- [ ] **Step 2: Verify in browser**

Scroll to the "How We Compare" section on `/pricing`. Confirm the Lane Web Design column shows `$595 - $1,360` for upfront cost.

---

### Task 4: Update page metadata

**Files:**
- Modify: `app/pricing/page.tsx:7`

- [ ] **Step 1: Update meta description**

In `app/pricing/page.tsx`, update the description:

```typescript
description:
  "Transparent pricing for custom web design. Launch pricing: project packages from $595 and monthly plans from $29/mo. No hidden fees.",
```

(was `"...Project packages from $700..."`)

---

### Task 5: Build and commit

- [ ] **Step 1: Run build**

```bash
cd /Users/chrislane/Desktop/Lane_Web_Design_Studio/business-site && npm run build
```

Expected: Clean build, no errors.

- [ ] **Step 2: Final visual check**

Open `http://localhost:3001/pricing` and verify:
- Starter card: $595
- Standard card: $1,360
- Custom card: "Let's Talk" (unchanged)
- Launch pricing line in terracotta below "Project Packages" heading
- Comparison table: $595 - $1,360
- Monthly plans section: unchanged ($29, $79, $149)

- [ ] **Step 3: Commit**

```bash
git add app/pricing/PricingPage.tsx app/pricing/page.tsx components/pricing/ComparisonTable.tsx
git commit -m "feat: add launch pricing (15% off project packages)"
```
