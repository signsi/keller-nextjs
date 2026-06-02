# Information Architecture: Keller Galvanik

## Site Map

- Home `/`
- Verfahren `/verfahren`
  - Verfahren detail `/verfahren/[slug]` (e.g. `/verfahren/chemisch-vernickeln`)
- Branchen `/branchen`
  - Branche detail `/branchen/[slug]` (e.g. `/branchen/medizintechnik`)
- Qualität `/qualitaet`
- Downloads `/downloads`
- Über uns `/ueber-uns`
- Kontakt `/kontakt` (primary quote + inquiry page)
- Admin `/studio` (Sanity Studio — no nav link, admin only)

---

## Navigation Model

**Primary navigation** (max 6 items):
`Verfahren` · `Branchen` · `Qualität` · `Downloads` · `Über uns`

**Utility / CTA** (right-aligned, always visible):
`Offerte anfragen` — primary button linking to `/kontakt`

**Secondary navigation** — contextual only:
- Verfahren detail page: breadcrumb (`Verfahren > Chemisch Vernickeln`) + anchor links to page sections (Vorteile, Anwendungen, Technische Eigenschaften, Downloads, FAQ)
- Downloads page: filter tabs by category (Datenblätter, Spezifikationen, Zertifikate)

**Footer navigation**:
- Column 1: Verfahren (links to top 4–5 procedures)
- Column 2: Unternehmen (Über uns, Qualität, Kontakt)
- Column 3: Service (Downloads, Offerte anfragen)
- Legal: Impressum, Datenschutz

**Mobile navigation**:
Hamburger at `md` and below. Opens full-viewport overlay with stacked nav links + prominent `Offerte anfragen` button at bottom. Closes on link click or outside tap.

---

## Content Hierarchy

### Home `/`

1. **Hero** — headline, subline, 2 CTAs (Verfahren finden / Offerte anfragen) — first question answered above the fold
2. **Trust bar** — 3 propositions (Präzise Oberflächen, Technische Beratung, Zuverlässige Prozesse) — establishes credibility immediately
3. **Verfahren preview** — 4–6 top procedures as cards with filter entry — answers "what do they do?"
4. **Branchen** — industry tiles — confirms relevance for the visitor's sector
5. **Qualität teaser** — 2–3 key facts + certification badge — builds trust before asking for action
6. **Quick inquiry form** — inline, single step — converts before the visitor leaves

### Verfahren overview `/verfahren`

1. **Filter bar** — Korrosionsschutz / Optik / Verschleissschutz / Werkstoff — lets procurement find fast
2. **Card grid** — all procedures, filterable — each card: name, Nutzen, typical application, CTA
3. **Contact CTA strip** — "Unsicher welches Verfahren?" → link to Kontakt

### Verfahren detail `/verfahren/[slug]`

1. **Hero** — title, Kurzbeschreibung, 2 CTAs (Offerte anfragen / Technische Beratung)
2. **Vorteile** — bullet list — why this process
3. **Typische Anwendungen** — real use cases — is this the right fit?
4. **Technische Eigenschaften** — Schichtdicke, Härte, Temperaturbeständigkeit — engineer-level specs
5. **Geeignete Werkstoffe** — Stahl, Edelstahl, Aluminium etc.
6. **Vorbehandlungen** — Entfetten, Beizen, Aktivieren
7. **Prozessablauf** — numbered steps
8. **Qualität & Normen** — ISO standards, testing
9. **Downloads** — Datenblatt, Spezifikationen
10. **FAQ** — 2–3 key questions
11. **CTA section** — "Ihr Bauteil passt?" → Offerte anfragen

### Branchen overview `/branchen`

1. **Section intro** — 1–2 sentences
2. **Industry grid** — tiles: Maschinenbau, Medizintechnik, Lebensmittel, Automotive, Elektronik etc.

### Branche detail `/branchen/[slug]`

1. **Industry name + description**
2. **Relevant Verfahren** — filtered procedure cards for this industry
3. **CTA** — Offerte anfragen

### Qualität `/qualitaet`

1. **Intro** — 1 sentence positioning
2. **Prozesse** — quality process steps
3. **Zertifikate** — certification badges + PDF downloads
4. **Prüfverfahren** — testing methods
5. **CTA**

### Downloads `/downloads`

1. **Filter tabs** — Datenblätter / Spezifikationen / Zertifikate / Alle
2. **File list** — name, type badge, Verfahren tag, download button
3. No pagination for MVP — all files visible, filter reduces list

### Über uns `/ueber-uns`

1. **Company intro** — who Keller Galvanik is
2. **Team** — optional, if photos exist
3. **Standort / Kontakt** — address, map embed
4. **Jobs teaser** — minimal (secondary audience)

### Kontakt `/kontakt`

1. **Inquiry form** — Name, E-Mail, Verfahren (select, optional), Nachricht, Absenden
2. **Contact details** — phone, email, address
3. **Map** — optional embed

---

## User Flows

### Flow 1: Procurement buyer — "Is this the right partner for my part?"

1. Lands on `/` via Google search ("galvanisch verzinken Schweiz")
2. Hero confirms: industrial surface treatments, Swiss precision
3. Scrolls to Verfahren cards — recognizes the process they need
4. Clicks card CTA → `/verfahren/[slug]`
5. Scans Vorteile + Typische Anwendungen — confirms fit
6. Clicks "Offerte anfragen" → scrolls/navigates to Kontakt form
7. Submits form → sees inline success message

### Flow 2: Engineer — "What are the exact specs for this process?"

1. Lands on `/verfahren/[slug]` via direct link or search
2. Scans hero + Vorteile
3. Jumps via anchor to "Technische Eigenschaften"
4. Reads Schichtdicke, Härte, Werkstoffe, Normen
5. Downloads Datenblatt
6. Either returns to overview or requests quote

### Flow 3: Existing customer — "I need the datasheet again"

1. Lands on `/` or `/downloads` directly
2. Goes to Downloads → filters by Datenblätter
3. Finds file by Verfahren name → downloads

### Flow 4: New visitor — "Do they work in my industry?"

1. Lands on `/`
2. Scrolls to Branchen section — recognizes their industry tile
3. Clicks tile → `/branchen/[slug]`
4. Sees relevant Verfahren for their industry
5. Clicks procedure → detail page → quote

---

## Naming Conventions

| Concept | Label in UI | Notes |
|---------|-------------|-------|
| Surface treatment process | Verfahren | Never "Leistung", "Service", or "Prozess" |
| Quote request | Offerte anfragen | The primary CTA everywhere |
| Technical consultation | Technische Beratung | Secondary CTA on detail pages |
| Industry sector | Branche | Never "Industrie" in nav labels |
| Technical data table | Technische Eigenschaften | On detail pages |
| File download | Download | With file type badge (PDF, XLSX) |
| Company | Keller Galvanik | Full name on first use per page, "Keller" in running text |

---

## Component Reuse Map

| Component | Used on | Behavior differences |
|-----------|---------|---------------------|
| `<SiteNav>` | All pages | Transparent over hero images, white on scroll |
| `<Footer>` | All pages | None |
| `<VerfahrenCard>` | Home, `/verfahren`, `/branchen/[slug]` | Compact variant on Home (4 cards), full grid on `/verfahren` |
| `<PageHero>` | All section pages | Home hero is full-height; section heroes are shorter (40vh) |
| `<CtaStrip>` | Verfahren detail, Qualität, Über uns | Same layout, different headline copy |
| `<InquiryForm>` | Home (inline), `/kontakt` | Home: compact with minimal fields; Kontakt: full width, same fields |
| `<DownloadItem>` | Downloads, Verfahren detail | Same component, different context |
| `<BranchenTile>` | Home (preview 4), `/branchen` (full grid) | Size varies |

---

## Content Growth Plan

| Section | Growth pattern | IA accommodation |
|---------|---------------|-----------------|
| Verfahren | Add new procedures over time (Sanity) | Filter tags handle categorisation; no nav change needed up to ~30 items |
| Branchen | New industry tiles as business expands | Grid auto-wraps; no IA change needed |
| Downloads | Files accumulate | Filter tabs + search input (phase 2) |
| FAQ (per Verfahren) | Editor adds questions over time | Accordion expands, no layout impact |
| Qualität / Zertifikate | New certs added | List pattern handles growth |

---

## URL Strategy

- **Pattern**: `/section/item-slug`
- **Slugs**: lowercase, hyphenated, German words preserved (`/verfahren/chemisch-vernickeln`, `/branchen/medizintechnik`)
- **Dynamic segments**: `[slug]` for `verfahren` and `branchen` detail pages — resolved via Sanity slug field
- **No trailing slashes**: canonical URLs without trailing slash
- **Query parameters**: `/verfahren?filter=korrosionsschutz` for filter state (shareable URL, optional phase 2)
- **i18n (phase 2)**: prefix pattern `/fr/verfahren/[slug]`, `/en/verfahren/[slug]` via `next-intl`
- **Admin**: `/studio` — excluded from sitemap, robots.txt disallowed

---

## Next.js App Router File Structure

```
app/
├── layout.tsx                    # Root layout: SiteNav + Footer
├── page.tsx                      # Home
├── verfahren/
│   ├── page.tsx                  # Verfahren overview
│   └── [slug]/
│       └── page.tsx              # Verfahren detail
├── branchen/
│   ├── page.tsx                  # Branchen overview
│   └── [slug]/
│       └── page.tsx              # Branche detail
├── qualitaet/
│   └── page.tsx
├── downloads/
│   └── page.tsx
├── ueber-uns/
│   └── page.tsx
├── kontakt/
│   └── page.tsx
└── studio/
    └── [[...tool]]/
        └── page.tsx              # Sanity Studio (catch-all)
```
