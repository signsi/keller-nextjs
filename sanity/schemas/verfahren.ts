import { defineField, defineType } from 'sanity'

export const verfahren = defineType({
  name: 'verfahren',
  title: 'Verfahren',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: r => r.required(),
    }),
    defineField({
      name: 'kurzname',
      title: 'Kurzname (für Karten)',
      type: 'string',
    }),
    defineField({
      name: 'beschreibung',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'intro',
      title: 'Einleitung (Detailseite)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'merkmale',
      title: 'Merkmale',
      type: 'array',
      of: [
        defineField({
          name: 'merkmal',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Bezeichnung', type: 'string' }),
            defineField({ name: 'wert', title: 'Wert', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'wert' } },
        }),
      ],
    }),
    defineField({
      name: 'vorteile',
      title: 'Vorteile',
      type: 'array',
      of: [
        defineField({
          name: 'vorteil',
          type: 'object',
          fields: [
            defineField({ name: 'titel', title: 'Titel', type: 'string' }),
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'titel' } },
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineField({
          name: 'faqItem',
          type: 'object',
          fields: [
            defineField({ name: 'frage', title: 'Frage', type: 'string' }),
            defineField({ name: 'antwort', title: 'Antwort', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'frage' } },
        }),
      ],
    }),
    defineField({
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie (für Filter)',
      type: 'string',
      options: {
        list: [
          { title: 'Korrosionsschutz', value: 'Korrosionsschutz' },
          { title: 'Optik', value: 'Optik' },
          { title: 'Verschleiss', value: 'Verschleiss' },
          { title: 'Werkstoff', value: 'Werkstoff' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Reihenfolge', name: 'reihenfolge', by: [{ field: 'reihenfolge', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'beschreibung' },
  },
})
