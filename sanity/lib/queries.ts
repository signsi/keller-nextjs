import { groq } from 'next-sanity'

export const allVerfahrenQuery = groq`
  *[_type == "verfahren"] | order(reihenfolge asc) {
    _id, name, slug, kurzname, beschreibung, kategorie, bild
  }
`

export const verfahrenBySlugQuery = groq`
  *[_type == "verfahren" && slug.current == $slug][0] {
    _id, name, slug, kurzname, beschreibung, kategorie, intro, merkmale, vorteile, faq, bild
  }
`

export const allBranchenQuery = groq`
  *[_type == "branche"] | order(reihenfolge asc) {
    _id, name, slug, beschreibung, bild
  }
`

export const brancheBySlugQuery = groq`
  *[_type == "branche" && slug.current == $slug][0] {
    _id, name, slug, beschreibung, lead, bild,
    verfahren[]-> { _id, name, slug, beschreibung }
  }
`

export const allDownloadsQuery = groq`
  *[_type == "download"] | order(kategorie asc, reihenfolge asc) {
    _id, name, kategorie, datei { asset-> { url, size, originalFilename } }
  }
`

export const homepageQuery = groq`
  *[_type == "homepage" && _id == "homepage"][0] {
    hero, trustItems, qualitaet, faq, inquiry
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    firmenname, strasse, plzOrt, telefon, email,
    ansprechperson { name, titel, telefon, portrait },
    oeffnungszeiten
  }
`

export const qualitaetQuery = groq`
  *[_type == "qualitaet" && _id == "qualitaet"][0] {
    hero, stats, prozess, normen, cta
  }
`

export const ueberUnsQuery = groq`
  *[_type == "ueberUns" && _id == "ueberUns"][0] {
    hero, werte, cta
  }
`

export const seitenInhalteQuery = groq`
  *[_type == "seitenInhalte" && _id == "seitenInhalte"][0] {
    verfahren, branchen
  }
`
