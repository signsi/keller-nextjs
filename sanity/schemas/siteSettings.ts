import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'firmenname',
      title: 'Firmenname',
      type: 'string',
    }),
    defineField({
      name: 'strasse',
      title: 'Strasse',
      type: 'string',
    }),
    defineField({
      name: 'plzOrt',
      title: 'PLZ und Ort',
      type: 'string',
    }),
    defineField({
      name: 'telefon',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'ansprechperson',
      title: 'Ansprechperson',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'titel', title: 'Titel/Funktion', type: 'string' }),
        defineField({ name: 'telefon', title: 'Direktnummer', type: 'string' }),
        defineField({ name: 'portrait', title: 'Portrait', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'oeffnungszeiten',
      title: 'Öffnungszeiten',
      type: 'array',
      of: [
        defineField({
          name: 'eintrag',
          type: 'object',
          fields: [
            defineField({ name: 'tag', title: 'Tag(e)', type: 'string' }),
            defineField({ name: 'zeit', title: 'Zeiten', type: 'string' }),
          ],
          preview: { select: { title: 'tag', subtitle: 'zeit' } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'firmenname' },
  },
})
