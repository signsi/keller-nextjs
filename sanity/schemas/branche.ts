import { defineField, defineType } from 'sanity'

export const branche = defineType({
  name: 'branche',
  title: 'Branchen',
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
      name: 'beschreibung',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'lead',
      title: 'Lead-Text (Detailseite)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'verfahren',
      title: 'Typische Verfahren',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'verfahren' }] }],
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
    select: { title: 'name', media: 'bild' },
  },
})
