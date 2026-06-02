import { defineField, defineType } from 'sanity'

export const download = defineType({
  name: 'download',
  title: 'Downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Bezeichnung',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Technische Datenblätter', value: 'datenblaetter' },
          { title: 'Zertifikate & Normen', value: 'zertifikate' },
          { title: 'Formulare', value: 'formulare' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'datei',
      title: 'Datei',
      type: 'file',
    }),
    defineField({
      name: 'reihenfolge',
      title: 'Reihenfolge',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Kategorie', name: 'kategorie', by: [{ field: 'kategorie', direction: 'asc' }, { field: 'reihenfolge', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'kategorie' },
  },
})
