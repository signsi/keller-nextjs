import { defineField, defineType } from 'sanity'

const cta = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'label', title: 'Beschriftung', type: 'string' }),
      defineField({ name: 'href', title: 'Link', type: 'string' }),
    ],
  })

export const homepage = defineType({
  name: 'homepage',
  title: 'Startseite',
  type: 'document',
  fields: [

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({
          name: 'primaryHeading',
          title: 'Überschrift (fett)',
          type: 'string',
          description: 'Grosse, fette Zeile — z.B. "Präzise Oberflächen"',
        }),
        defineField({
          name: 'secondaryHeading',
          title: 'Überschrift (regulär)',
          type: 'string',
          description: 'Dünnere Zeile darunter — z.B. "für Industrie und Technik."',
        }),
        defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 2 }),
        defineField({
          name: 'heroImageDesktop',
          title: 'Hero Bild (Desktop)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'heroImageMobile',
          title: 'Hero Bild (Mobile)',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'discoverLinkLabel',
          title: 'Discover-Link Text',
          type: 'string',
          description: 'Text rechts unten im Hero, z.B. "unimec entdecken".',
        }),
        defineField({
          name: 'discoverLinkHref',
          title: 'Discover-Link URL',
          type: 'string',
          description: 'Ziel-Link fuer den Discover-Link im Hero.',
        }),
        cta('ctaPrimary', 'CTA Primär'),
        cta('ctaSecondary', 'CTA Sekundär'),
      ],
    }),

    // ── Trust-Karten ──────────────────────────────────────────────────────
    defineField({
      name: 'trustItems',
      title: 'Trust-Karten (3 Stück)',
      type: 'array',
      validation: r => r.max(3),
      of: [
        defineField({
          name: 'trustItem',
          type: 'object',
          fields: [
            defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
            defineField({ name: 'body', title: 'Text', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'heading' } },
        }),
      ],
    }),

    // ── Qualität Teaser ───────────────────────────────────────────────────
    defineField({
      name: 'qualitaet',
      title: 'Qualitäts-Teaser',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'body', title: 'Text', type: 'text', rows: 3 }),
        defineField({
          name: 'stats',
          title: 'Statistiken',
          type: 'array',
          validation: r => r.max(3),
          of: [
            defineField({
              name: 'stat',
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Wert', type: 'string' }),
                defineField({ name: 'label', title: 'Bezeichnung', type: 'string' }),
              ],
              preview: { select: { title: 'value', subtitle: 'label' } },
            }),
          ],
        }),
        cta('cta', 'CTA'),
      ],
    }),

    // ── FAQ ───────────────────────────────────────────────────────────────
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineField({
          name: 'faqItem',
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Frage', type: 'string' }),
            defineField({ name: 'answer', title: 'Antwort', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'question' } },
        }),
      ],
    }),

    // ── Schnell zum Angebot ───────────────────────────────────────────────
    defineField({
      name: 'inquiry',
      title: 'Schnell zum Angebot',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'body', title: 'Text', type: 'text', rows: 2 }),
        defineField({
          name: 'bullets',
          title: 'Bullet-Punkte',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

  ],

  preview: {
    prepare: () => ({ title: 'Startseite' }),
  },
})
