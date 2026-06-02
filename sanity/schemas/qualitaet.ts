import { defineField, defineType } from 'sanity'

export const qualitaet = defineType({
  name: 'qualitaet',
  title: 'Qualität',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Statistiken',
      type: 'array',
      validation: r => r.max(4),
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
    defineField({
      name: 'prozess',
      title: 'Qualitätsprozess',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({
          name: 'schritte',
          title: 'Prozessschritte',
          type: 'array',
          of: [
            defineField({
              name: 'schritt',
              type: 'object',
              fields: [
                defineField({ name: 'nr', title: 'Nummer', type: 'string' }),
                defineField({ name: 'title', title: 'Titel', type: 'string' }),
                defineField({ name: 'body', title: 'Text', type: 'text', rows: 3 }),
              ],
              preview: { select: { title: 'title', subtitle: 'nr' } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'normen',
      title: 'Normen',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'body', title: 'Text', type: 'text', rows: 2 }),
        defineField({
          name: 'items',
          title: 'Normen-Liste',
          type: 'array',
          of: [
            defineField({
              name: 'norm',
              type: 'object',
              fields: [
                defineField({ name: 'code', title: 'Norm-Code', type: 'string' }),
                defineField({ name: 'beschreibung', title: 'Beschreibung', type: 'string' }),
              ],
              preview: { select: { title: 'code', subtitle: 'beschreibung' } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA-Leiste',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'subline', title: 'Subline', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Qualität' }),
  },
})
