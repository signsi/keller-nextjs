import { defineField, defineType } from 'sanity'

export const ueberUns = defineType({
  name: 'ueberUns',
  title: 'Über uns',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'kicker', title: 'Kicker', type: 'string' }),
        defineField({ name: 'heading', title: 'Überschrift', type: 'string' }),
        defineField({ name: 'body', title: 'Text (Absätze durch Leerzeile trennen)', type: 'text', rows: 8 }),
      ],
    }),
    defineField({
      name: 'werte',
      title: 'Unsere Werte',
      type: 'array',
      of: [
        defineField({
          name: 'wert',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Titel', type: 'string' }),
            defineField({ name: 'body', title: 'Text', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
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
    prepare: () => ({ title: 'Über uns' }),
  },
})
