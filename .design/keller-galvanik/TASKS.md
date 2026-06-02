# Build Tasks: Keller Galvanik Website

Generated from: `.design/keller-galvanik/DESIGN_BRIEF.md`  
Date: 2026-04-20

---

## Foundation

- [ ] **Mona Sans font**: Download `MonaSans-VariableFont.woff2` from github.com/github/mona-sans, place in `/public/fonts/`. Verify font renders in browser. Done when body text displays in Mona Sans, not system-ui fallback. _Updates: `app/layout.tsx` (already wired)._

- [ ] **Button component**: Build `components/ui/Button.tsx` — variants: `primary` (filled brand blue), `secondary` (outlined), `ghost` (text only). Sizes: `sm`, `md`, `lg`. States: default, hover, active, disabled, loading (spinner). Done when all variants render correctly and pass keyboard focus. _New component._

- [ ] **Root layout shell**: Build `app/layout.tsx` with `components/layout/SiteNav.tsx` and `components/layout/Footer.tsx` as static skeletons. Nav: logo left, links center, "Offerte anfragen" CTA button right. Footer: 3 columns + legal row. Done when layout wraps every page with correct spacing and the nav is visible at `/`. _New components. Aesthetic direction: Swiss-industrial — see brief._

- [ ] **Mobile navigation overlay**: Add hamburger toggle to SiteNav that opens a full-viewport overlay at `md` and below. Stacked links + "Offerte anfragen" button at bottom. Focus trap, closes on link click or `Escape`. Done when overlay works on 375px viewport and keyboard navigation is fully trapped. _Modifies: `SiteNav`._

---

## Homepage

- [ ] **Homepage Hero**: Build the hero section in `app/page.tsx` — full-viewport height, headline (`text-5xl`/`text-6xl` at `lg`), subline, two CTAs (primary + ghost). Background: large industrial photo or illustrated surface texture. Text left-aligned on `lg`+, centered on mobile. Done when the hero looks like the Ramp/Volvo references: generous whitespace, confident type, single focal point. _New section. Uses: `Button`._

- [ ] **Trust bar**: Three proposition columns (Präzise Oberflächen / Technische Beratung / Zuverlässige Prozesse) below the hero. Icon area replaced with illustrated spot graphic (no icon font). Done when it reads as a clean credibility strip, not a feature list. _New section._

- [ ] **VerfahrenCard component**: Build `components/verfahren/VerfahrenCard.tsx` — name, Nutzen (one line), typische Anwendung, CTA link. Compact variant (4-up on homepage) and full variant (3-up on overview page). Hover: subtle lift shadow + border highlight. Done when both variants render correctly with placeholder data. _New component._

- [ ] **Homepage Verfahren preview**: 4-card grid below trust bar using `VerfahrenCard` (compact variant) + "Alle Verfahren" link. Done when grid is 1-col mobile → 2-col md → 4-col lg. _Uses: `VerfahrenCard`._

- [ ] **BrancheTile component + homepage preview**: Build `components/branchen/BrancheTile.tsx` — industry name, short description, link. Grid of 4 tiles on homepage preview. Done when tiles are visually distinct from VerfahrenCards and 2-col on mobile → 4-col on `lg`. _New component._

- [ ] **Qualität teaser**: 2–3 key facts (stat + label) + certification badge placeholder + CTA. Done when it reads as a trust-building interlude, not a section page preview. _New section._

- [ ] **Homepage quick inquiry form**: Build `components/forms/InquiryForm.tsx` — fields: Name, E-Mail, Verfahren (select), Nachricht, Absenden. Inline on homepage (2-col layout on `md`+). Client component with controlled state. Done when form renders with all fields, labels (not placeholder-as-label), and submit button. Interaction and validation handled in the next task. _New component._

---

## Verfahren

- [ ] **PageHero component**: Build `components/layout/PageHero.tsx` — shorter than homepage hero (40vh), title, optional subtitle, optional 2 CTAs. Used across Verfahren detail, Branche detail, Qualität, Über uns, Kontakt. Done when it renders cleanly as the top section of any interior page. _New component. Reused across 6+ pages._

- [ ] **Verfahren overview page**: Build `app/verfahren/page.tsx` — filter bar (Korrosionsschutz / Optik / Verschleissschutz / Werkstoff as pill tabs) + full card grid using `VerfahrenCard` full variant. Filter hides/shows cards without page reload. Done when filtering works client-side with 6+ placeholder cards and URL can optionally reflect filter state (`?filter=korrosionsschutz`). _New page. Uses: `VerfahrenCard`, `PageHero`._

- [ ] **Verfahren detail page**: Build `app/verfahren/[slug]/page.tsx` — full template: PageHero, Vorteile (bullet list), Typische Anwendungen, Technische Eigenschaften (structured table), Geeignete Werkstoffe, Vorbehandlungen, Prozessablauf (numbered steps), Qualität & Normen, Downloads (file list), FAQ (accordion), CTA strip. Build with one complete placeholder procedure (Chemisch Vernickeln). Done when all sections render with correct hierarchy and the page feels complete at a single scroll. _New page. Uses: `PageHero`, `Button`, `DownloadItem`, `CtaStrip`._

- [ ] **DownloadItem component**: Build `components/downloads/DownloadItem.tsx` — file name, type badge (PDF / XLSX), optional Verfahren tag, download button. Used on Verfahren detail and Downloads page. Done when it renders in a list with hover state. _New component._

- [ ] **FAQ accordion**: Build `components/ui/Accordion.tsx` — expand/collapse with smooth height animation. Keyboard accessible (Enter/Space to toggle). Used on Verfahren detail pages. Done when at least 2 items toggle correctly and animation respects `prefers-reduced-motion`. _New component._

- [ ] **CtaStrip component**: Build `components/layout/CtaStrip.tsx` — full-width section, headline, optional subline, 1–2 buttons. Background: brand-blue fill or steel-dark fill. Used at bottom of Verfahren detail, Qualität, Über uns. Done when both background variants render with correct text contrast. _New component._

---

## Branchen

- [ ] **Branchen overview page**: Build `app/branchen/page.tsx` — intro paragraph + tile grid using `BrancheTile`. Done when 6+ placeholder industry tiles render in a 2-col → 3-col → 4-col grid. _New page. Uses: `BrancheTile`, `PageHero`._

- [ ] **Branche detail page**: Build `app/branchen/[slug]/page.tsx` — PageHero, industry description, related Verfahren section (filtered `VerfahrenCard` grid), CTA strip. Done when the page shows 2–3 relevant Verfahren cards and reads as a complete industry landing page. _New page. Uses: `PageHero`, `VerfahrenCard`, `CtaStrip`._

---

## Remaining Pages

- [ ] **Qualität page**: Build `app/qualitaet/page.tsx` — process steps (numbered), certificates (badge grid with PDF links), Prüfverfahren list, CTA strip. Done when the page clearly communicates quality credibility and certificates are downloadable. _New page. Uses: `PageHero`, `DownloadItem`, `CtaStrip`._

- [ ] **Downloads page**: Build `app/downloads/page.tsx` — filter tabs (Datenblätter / Spezifikationen / Zertifikate / Alle) + file list using `DownloadItem`. Client-side filter. Done when all tabs filter the list and 6+ placeholder files are displayed. _New page. Uses: `DownloadItem`._

- [ ] **Über uns page**: Build `app/ueber-uns/page.tsx` — company intro, optional team section (placeholder), address + map placeholder, jobs teaser (minimal). Done when the page gives a complete company portrait and address is visible. _New page. Uses: `PageHero`, `CtaStrip`._

- [ ] **Kontakt page**: Build `app/kontakt/page.tsx` — full-width `InquiryForm` (same component, full layout variant), contact details (phone, email, address), optional map embed. Done when form and contact info are both clearly readable and the page works as the primary conversion destination. _New page. Uses: `InquiryForm`._

---

## Interactions & States

- [ ] **Form validation + success state**: Add client-side validation to `InquiryForm` — required fields, email format. Show inline error messages below each field (not alert boxes). On submit: show inline success message, reset form. Done when the form rejects empty submission, shows field-level errors, and shows success without redirect. _Modifies: `InquiryForm`._

- [ ] **Scroll reveal animations**: Add `IntersectionObserver`-based fade-up reveal to section entry points (not individual cards). Target: `<section>` wrappers on homepage and interior pages. Transition: `opacity 0 → 1`, `translateY 16px → 0`, `duration-slow`, `ease-out`. Done when sections animate in on scroll and the effect is absent when `prefers-reduced-motion` is set. _New utility. No new component needed._

- [ ] **Nav scroll behavior**: Make `SiteNav` transparent over hero images (homepage), switching to white/blurred background on scroll past 80px. Done when the transition is smooth and the nav is always readable regardless of hero content. _Modifies: `SiteNav`._

---

## Sanity CMS

- [ ] **Sanity install + Studio route**: Install `sanity`, `next-sanity`. Configure `sanity.config.ts`. Add `app/studio/[[...tool]]/page.tsx` catch-all route. Done when `/studio` loads the Sanity Studio and `robots.txt` disallows `/studio`. _New dependency + route._

- [ ] **Sanity schemas**: Define document types in `sanity/schemas/`: `verfahren` (all fields from IA), `branche`, `download`, `siteSettings`. Done when schemas appear in Sanity Studio and all fields from the IA content hierarchy are represented. _New schema files._

- [ ] **Wire Verfahren pages to Sanity**: Replace placeholder data in `app/verfahren/page.tsx` and `app/verfahren/[slug]/page.tsx` with GROQ queries via `next-sanity`. Add `generateStaticParams` for static generation. Done when a Verfahren created in Studio appears on the overview and has a working detail page. _Modifies: Verfahren pages._

- [ ] **Wire Branchen pages to Sanity**: Same pattern as Verfahren — replace placeholders with GROQ, add `generateStaticParams`. Done when a Branche created in Studio renders on overview and detail pages with its linked Verfahren cards. _Modifies: Branchen pages._

- [ ] **Wire Downloads + siteSettings to Sanity**: Connect Downloads page to `download` documents. Wire footer and nav links to `siteSettings` document (so editors can update contact info without a deploy). Done when a download added in Studio appears on the Downloads page. _Modifies: Downloads page, Footer._

---

## Responsive & Polish

- [ ] **Responsive pass — all pages**: Walk every page at 375px, 768px, 1024px, 1280px. Fix: text overflow, grid collapses, image aspect ratios, nav behavior, form layout, card grid. Done when no layout breaks at any breakpoint. _Modifies multiple components._

- [ ] **Accessibility pass**: Check all interactive elements for keyboard focus styles, verify form labels, add `aria-*` attributes to accordion and nav overlay, check color contrast on all text/background combinations, verify `alt` text on all images. Done when no critical WCAG AA failures remain. _Modifies multiple components._

- [ ] **Metadata + i18n foundation**: Update `app/layout.tsx` metadata (title template, description, Open Graph). Install `next-intl`, create `messages/de.json`, externalize all hardcoded German strings from JSX into the message file. Done when no raw German strings remain in component JSX and the site renders identically via `next-intl` t() calls. _Modifies: layout, all page components._

---

## Review

- [ ] **Design review**: Run `/design-review` against `.design/keller-galvanik/DESIGN_BRIEF.md`. Captures screenshots at 375px, 768px, 1280px. Produces `DESIGN_REVIEW.md`.
