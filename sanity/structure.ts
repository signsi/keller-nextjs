import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      S.documentTypeListItem('verfahren').title('Verfahren'),
      S.documentTypeListItem('branche').title('Branchen'),
      S.documentTypeListItem('download').title('Downloads'),
      S.divider(),
      S.listItem()
        .title('Startseite')
        .id('homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Qualität')
        .id('qualitaet')
        .child(S.document().schemaType('qualitaet').documentId('qualitaet')),
      S.listItem()
        .title('Über uns')
        .id('ueberUns')
        .child(S.document().schemaType('ueberUns').documentId('ueberUns')),
      S.listItem()
        .title('Seiteninhalte')
        .id('seitenInhalte')
        .child(S.document().schemaType('seitenInhalte').documentId('seitenInhalte')),
      S.divider(),
      S.listItem()
        .title('Website-Einstellungen')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ])
