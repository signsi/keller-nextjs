# Design Tokens: Keller Galvanik

**Philosophy**: Swiss-industrial precision  
**Stack**: Tailwind v4 `@theme` + CSS custom properties in `app/globals.css`  
**Font**: Mona Sans (open source, self-hosted via `next/font/local`)

## Source file

All tokens live in `app/globals.css`. The file has three sections:
1. `@theme {}` — Tailwind utility-generating tokens (colors, type scale, radii, motion, breakpoints)
2. `:root {}` — Semantic tokens for direct `var()` usage in components
3. `[data-theme="dark"]` + `@media (prefers-color-scheme: dark)` — dark mode overrides

## Color palette

### Brand blue
| Token | Value | Use |
|-------|-------|-----|
| `--color-brand-500` | `#00a5ec` | Primary accent, CTAs |
| `--color-brand-600` | `#0091d4` | Hover states, body links (AA on white) |
| `--color-brand-700` | `#007ab8` | Active/pressed states |
| `--color-brand-300` | `#29b8ff` | Dark mode accent |

### Steel gray
| Token | Value | Use |
|-------|-------|-----|
| `--color-steel-900` | `#0f1117` | Dark mode background |
| `--color-steel-800` | `#1a1e26` | Primary text (light mode) |
| `--color-steel-500` | `#4b525c` | Secondary text, logo gray |
| `--color-steel-100` | `#ecedef` | Tertiary background |
| `--color-steel-50`  | `#f5f6f7` | Secondary background |

### Semantic (use these in components, not raw scale values)
| Token | Light | Dark |
|-------|-------|------|
| `--bg-primary` | `#ffffff` | `#0f1117` |
| `--bg-secondary` | `#f5f6f7` | `#1a1e26` |
| `--text-primary` | `#1a1e26` | `#f0f2f5` |
| `--text-secondary` | `#4b525c` | `#9ba3af` |
| `--text-link` | `#0091d4` | `#29b8ff` |
| `--accent-primary` | `#00a5ec` | `#29b8ff` |
| `--border-primary` | `#d8dade` | `#2c3140` |

## Typography

**Font family**: Mona Sans (variable font, single file)  
**Fallback**: system-ui, sans-serif

| Token | Size |
|-------|------|
| `--font-size-xs` | 12px |
| `--font-size-sm` | 14px |
| `--font-size-base` | 16px |
| `--font-size-lg` | 20px |
| `--font-size-xl` | 24px |
| `--font-size-2xl` | 30px |
| `--font-size-3xl` | 36px |
| `--font-size-4xl` | 48px |
| `--font-size-5xl` | 60px |
| `--font-size-6xl` | 72px — hero display |

Letter spacing: `--letter-spacing-tight: -0.03em` for display/hero headings.

## Accessibility note

`#00a5ec` on `#ffffff` = 2.8:1 — **does not pass WCAG AA** for body text.  
Use `--text-link: #0091d4` (brand-600) for interactive text labels on white — passes AA at 3.7:1 for large text.  
Reserve `#00a5ec` for decorative use, icons, borders, and non-text UI only.

## Font setup

1. Download `MonaSans-VariableFont.woff2` from [github.com/github/mona-sans](https://github.com/github/mona-sans)
2. Place in `/public/fonts/MonaSans-VariableFont.woff2`
3. Font is loaded in `app/layout.tsx` via `next/font/local`
