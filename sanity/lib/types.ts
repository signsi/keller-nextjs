export type SanityImage = {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number; width: number; height: number }
}

export type SanityVerfahren = {
  _id: string
  name: string
  slug: { current: string }
  kurzname?: string
  beschreibung?: string
  kategorie?: string
  intro?: any[]
  merkmale?: { label: string; wert: string }[]
  vorteile?: { titel: string; text: string }[]
  faq?: { frage: string; antwort: string }[]
  bild?: SanityImage
}

export type SanityBranche = {
  _id: string
  name: string
  slug: { current: string }
  beschreibung?: string
  lead?: string
  bild?: SanityImage
  verfahren?: { _id: string; name: string; slug: { current: string }; beschreibung?: string }[]
}

export type SanityDownload = {
  _id: string
  name: string
  kategorie: 'datenblaetter' | 'zertifikate' | 'formulare'
  datei?: { asset: { url: string; size: number; originalFilename: string } }
}

export type HomepageData = {
  hero?: {
    kicker?: string
    primaryHeading?: string
    secondaryHeading?: string
    subtext?: string
    ctaPrimary?: { label?: string; href?: string }
    ctaSecondary?: { label?: string; href?: string }
  }
  trustItems?: { heading?: string; body?: string }[]
  qualitaet?: {
    kicker?: string
    heading?: string
    body?: string
    stats?: { value?: string; label?: string }[]
    cta?: { label?: string; href?: string }
  }
  faq?: { question?: string; answer?: string }[]
  inquiry?: {
    kicker?: string
    heading?: string
    body?: string
    bullets?: string[]
  }
}

export type SanitySettings = {
  firmenname?: string
  strasse?: string
  plzOrt?: string
  telefon?: string
  email?: string
  ansprechperson?: {
    name?: string
    titel?: string
    telefon?: string
    portrait?: SanityImage
  }
  oeffnungszeiten?: { tag: string; zeit: string }[]
}

export type QualitaetData = {
  hero?: { kicker?: string; heading?: string; intro?: string }
  stats?: { value?: string; label?: string }[]
  prozess?: {
    kicker?: string
    heading?: string
    schritte?: { nr?: string; title?: string; body?: string }[]
  }
  normen?: {
    kicker?: string
    heading?: string
    body?: string
    items?: { code?: string; beschreibung?: string }[]
  }
  cta?: { heading?: string; subline?: string }
}

export type UeberUnsData = {
  hero?: { kicker?: string; heading?: string; body?: string }
  werte?: { title?: string; body?: string }[]
  cta?: { heading?: string; subline?: string }
}

export type SeitenInhalteData = {
  verfahren?: { kicker?: string; heading?: string; intro?: string; cta?: string; ctaSubline?: string }
  branchen?: { kicker?: string; heading?: string; intro?: string; cta?: string; ctaSubline?: string }
}
