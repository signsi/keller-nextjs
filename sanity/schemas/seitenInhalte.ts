import { defineField, defineType } from 'sanity'

export const seitenInhalte = defineType({
  name: 'seitenInhalte',
  title: 'Seiteninhalte',
  type: 'document',
  fields: [
    defineField({
      name: 'verfahren',
      title: 'Verfahren-Übersicht',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 3 }),
        defineField({ name: 'cta', title: 'CTA-Text', type: 'string' }),
        defineField({ name: 'ctaSubline', title: 'CTA-Subline', type: 'string' }),
      ],
    }),
    defineField({
      name: 'branchen',
      title: 'Branchen-Übersicht',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 3 }),
        defineField({ name: 'cta', title: 'CTA-Text', type: 'string' }),
        defineField({ name: 'ctaSubline', title: 'CTA-Subline', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Seiteninhalte' }),
  },
})
