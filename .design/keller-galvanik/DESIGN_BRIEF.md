# Design Brief: Keller Galvanik Website

## Problem

An industrial B2B buyer — in procurement or engineering — lands on the Keller Galvanik site with one of three urgent questions: Is this the right partner? Which process fits my part? How do I get a quote fast? The current web presence does not answer these questions quickly enough. Technical competence is not visible at a glance, the right process is hard to find, and the path to a quote is not obvious.

## Solution

A clean, technically precise website that answers the buyer's question within the first scroll — and puts a quote request one click away from any page. The site leads with process expertise (Verfahren), structures content for both procurement speed and engineering depth, and converts via a frictionless single-step inquiry form. All content is managed via Sanity CMS so non-technical editors can update procedures, downloads, and pages without developer involvement.

## Experience Principles

1. **Answer first, elaborate second** — Every page leads with the clearest possible answer to why this page exists. Details follow. No preamble.
2. **Technical credibility over marketing copy** — Structured data (Schichtdicke, Härte, Werkstoffe, Normen) is more persuasive to engineers than adjectives. Show the spec, not the claim.
3. **One path to conversion, always visible** — The quote CTA is present and prominent on every page. No dead ends.

## Aesthetic Direction

- **Philosophy**: Swiss-industrial precision — generous whitespace, strict grid, restrained palette, typography-driven hierarchy. Clean enough to feel modern, structured enough to feel trustworthy.
- **Tone**: Technical, calm, precise. The confidence of a supplier who has done this ten thousand times.
- **Reference points**: Ramp.com (whitespace discipline, metric callouts), Schindler.ch (Swiss-industrial grid, categorical clarity), Volvo Cars (premium restraint, large photography, smooth transitions)
- **Anti-references**: Generic industrial directories (cluttered, icon-heavy), cheap B2B lead-gen sites (aggressive CTAs, dark patterns), anything that feels like a template

## Brand

- **Logo**: Existing — square blue mark + wordmark in steel gray. Do not modify.
- **Primary accent**: `#00A5EC` — electric blue, used for CTAs, links, active states, key highlights
- **Neutral base**: `#4B525C` — steel gray, primary text color
- **Backgrounds**: White `#FFFFFF`, light gray `#F5F6F7` for alternating sections
- **Accent palette** (use sparingly — micro-accents, badges, callouts only):
  - `#3D0814` deep burgundy
  - `#FC814A` coral
  - `#709775` sage
- **Typography**: Mona Sans — variable weight, technical humanist. Loaded via `next/font`. Large display weights for headlines, regular for body, medium for labels.
- **Motion**: Subtle — fade-in on scroll (Intersection Observer), smooth transitions (200–300ms ease), no auto-play, no parallax on content.
- **Media**: Real photography (industrial close-ups, surfaces, facility) mixed with flat vector illustrations. No icon sets.

## Existing Patterns

This is a greenfield project. No components exist yet. The following must be established:

- **Typography**: Mona Sans via `next/font/google` (or self-hosted). Replace the unused Inter/Playfair Display declarations.
- **Colors**: Define as CSS custom properties in `globals.css` using Tailwind v4 `@theme` syntax.
- **Spacing**: Tailwind default scale is sufficient. Prefer `gap-`, `px-`, `py-` utilities over custom values.
- **Components**: Build from scratch using Tailwind utilities. No UI library.
- **Animation**: CSS transitions + Tailwind `animate-` utilities. Add `framer-motion` only if scroll-reveal complexity requires it.

## Component Inventory

| Component | Status | Notes |
|-----------|--------|-------|
| Navigation (desktop + mobile) | New | Sticky, with Kontakt/Offerte as primary CTA button |
| Hero | New | Full-width, headline + subline + 2 CTAs, photo or illustration background |
| Trust bar | New | 3 proposition items — Präzise Oberflächen, Technische Beratung, Zuverlässige Prozesse |
| Verfahren card | New | Name, Nutzen, typische Anwendung, CTA — used in grid and carousel |
| Verfahren filter bar | New | Tabs or pills: Korrosionsschutz, Optik, Verschleissschutz, Werkstoff |
| Branchen list/grid | New | Industry tiles |
| Qualität section | New | Process steps + certificates + testing |
| Quick inquiry form | New | Name, E-Mail, Verfahren (select), Nachricht, Submit — inline on homepage |
| Procedure detail page | New | Hero, Vorteile, Anwendungen, Technische Eigenschaften, Werkstoffe, Prozessablauf, Qualität, Downloads, FAQ, CTA |
| Downloads list | New | Filterable file list with download links |
| Footer | New | Navigation, contact, legal |
| Sanity-connected page templates | New | Homepage, Verfahren overview, Verfahren detail, Branche detail, Qualität, Downloads, Über uns, Kontakt |

## Key Interactions

- **Verfahren filter**: Clicking a filter tag (Korrosionsschutz etc.) filters the card grid — no page reload, instant DOM filter or framer-motion layout animation.
- **Quote form**: Submit shows inline success state. No redirect. Field validation on blur.
- **Procedure CTA**: "Offerte anfragen" on a detail page pre-fills the Verfahren field in the inquiry form.
- **Mobile nav**: Hamburger opens a full-width overlay. Primary CTA always visible.
- **Scroll reveals**: Cards and sections fade up as they enter the viewport. One reveal per section, not per element.

## Responsive Behavior

- **Mobile-first** layout. All breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.
- Verfahren grid: 1 col (mobile) → 2 col (md) → 3 col (lg)
- Navigation collapses to hamburger at `md` and below
- Hero: stacked on mobile (text above, image below), side-by-side on `lg`+
- Quick inquiry form: full-width single column on mobile, 2-column on `md`+
- Typography scale steps down ~1 size on mobile (display headings especially)

## Accessibility Requirements

- Color contrast: minimum AA (4.5:1 for body text, 3:1 for large text/UI)
- `#00A5EC` on white = 2.8:1 — **does not pass AA for body text**. Use it only for large text, icons, or borders. For interactive labels on white, use a darker tint (`#0083BD`) or pair with sufficient surrounding context.
- Keyboard navigation: all interactive elements reachable and visually focused
- Form labels: explicit `<label>` elements, not placeholder-as-label
- Images: descriptive `alt` text, decorative images `alt=""`
- Motion: respect `prefers-reduced-motion` — disable scroll reveals and transitions

## Internationalisation

- **Phase 1**: German (`de`) only
- **Phase 2**: French, English (plan for this — use `next-intl` or similar from the start, even if only DE is active)
- All strings must be externalized. No hardcoded German copy in JSX.

## CMS (Sanity)

- Document types: `verfahren`, `branche`, `page`, `download`, `siteSettings`
- `verfahren` schema includes: title, slug, kurzbeschreibung, vorteile[], anwendungen[], technischeEigenschaften[], werkstoffe[], vorbehandlungen[], prozessablauf[], normen[], downloads[], faq[], filterTags[]
- Sanity Studio embedded at `/studio` route (Next.js App Router integration)
- Live preview via Sanity's presentation tool

## Out of Scope

- E-commerce or order management
- Customer login / portal
- Multi-language content (phase 2)
- Blog / news section
- Job listings (applicants are secondary audience — Über uns page suffices)
- Custom analytics dashboard
- Email automation beyond form submission confirmation
