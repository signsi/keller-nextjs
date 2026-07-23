import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery, ueberUnsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings, UeberUnsData } from '@/sanity/lib/types'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Keller Galvanik AG — seit über 40 Jahren Spezialist für galvanische und chemische Beschichtungen in der Deutschschweiz.',
}

const defaultWerte = [
  { title: 'Präzision', body: 'Enge Toleranzen, dokumentierte Prozesse und lückenlose Rückverfolgbarkeit — für Bauteile, bei denen es auf jedes Mikrometer ankommt.' },
  { title: 'Zuverlässigkeit', body: 'Verbindliche Liefertermine und transparente Kommunikation. Wenn wir etwas zusagen, halten wir es.' },
  { title: 'Partnerschaft', body: 'Wir beraten ehrlich — auch wenn das bedeutet, ein anderes Verfahren zu empfehlen. Ihr Bauteil steht im Mittelpunkt.' },
  { title: 'Nachhaltigkeit', body: 'Moderne Aufbereitungsanlagen, geschlossene Kreisläufe und laufende Investitionen in umweltschonende Prozesse.' },
]

const defaultBodyParagraphs = [
  'Die Keller Galvanik AG wurde in den 1980er-Jahren gegründet und hat sich seither zu einem der erfahrensten Galvanikbetriebe der Deutschschweiz entwickelt. Vom Familienbetrieb zur spezialisierten Beschichtungsanlage — mit über 40 Jahren Praxiserfahrung.',
  'Wir bringen eine breite Erfahrung aus verschiedensten Bereichen mit — von der Feinmechanik über die Medizintechnik bis hin zur Elektro- und Maschinenindustrie. Diese Vielseitigkeit erlaubt es uns, flexibel auf unterschiedliche Anforderungen einzugehen.',
  'Dank unserem eingespielten Team und modernster Technik können wir auch anspruchsvolle Oberflächenbearbeitungen effizient und zuverlässig umsetzen.',
]

export default async function UeberUnsPage() {
  const [settings, ueberUns]: [SanitySettings | null, UeberUnsData | null] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(ueberUnsQuery),
  ])

  const person = settings?.ansprechperson
  const telefon = person?.telefon ?? settings?.telefon ?? '+41 00 000 00 00'
  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(240).height(280).fit('crop').url()
    : '/peter-keller-portrait.webp'

  const hero = ueberUns?.hero
  const bodyParagraphs = hero?.body
    ? hero.body.split('\n\n').filter(Boolean)
    : defaultBodyParagraphs
  const werte = (ueberUns?.werte && ueberUns.werte.length > 0) ? ueberUns.werte : defaultWerte
  const cta = ueberUns?.cta

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">Über uns</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 pb-14 items-start">
            <div>
              <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-4">
                {hero?.kicker ?? 'Über uns'}
              </p>
              <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-[var(--text-primary)] leading-tight mb-5">
                {hero?.heading ?? 'Seit über 40 Jahren. Keller Galvanik AG.'}
              </SplitText>
              <div data-reveal className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                {bodyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div data-reveal className="lg:sticky lg:top-24">
              <div className="bg-[var(--bg-secondary)] rounded-[16px] overflow-hidden">
                <Image
                  src="/branchen/maschinen-apparatebau.webp"
                  alt="Keller Galvanik Betrieb"
                  width={380}
                  height={280}
                  className="w-full object-cover h-[220px]"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-1">Standort</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{settings?.firmenname ?? 'Keller Galvanik AG'}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                    {settings?.strasse ? `${settings.strasse}, ${settings.plzOrt}` : 'Deutschschweiz'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Werte */}
      <section className="bg-[var(--bg-secondary)] py-14 lg:py-20">
        <Container>
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Unsere Werte</p>
          <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-10">Was uns antreibt.</SplitText>
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {werte.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-[14px] p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Team</p>
          <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-10">Ihr Ansprechpartner.</SplitText>
          <div data-reveal className="flex flex-col sm:flex-row gap-8 items-start max-w-xl">
            <div className="shrink-0 w-[120px] h-[140px] rounded-[14px] overflow-hidden bg-[var(--bg-secondary)]">
              <Image
                src={portraitUrl}
                alt={person?.name ?? 'Peter Keller'}
                width={120}
                height={140}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-lg font-bold text-[var(--text-primary)] tracking-[-0.01em]">{person?.name ?? 'Peter Keller'}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-0.5 mb-3">{person?.titel ?? 'Geschäftsführer'}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {person?.name ?? 'Peter Keller'} führt den Betrieb mit Leidenschaft für das Handwerk und tiefem technischem Know-how. Er steht für persönliche Beratung und ist direkter Ansprechpartner für alle technischen und kaufmännischen Fragen.
              </p>
              <div className="flex gap-3">
                <a href={`tel:${telefon.replace(/\s/g, '')}`} className="ui-button ui-button-primary gap-2">
                  Jetzt anrufen
                </a>
                <Link href="/kontakt" className="ui-button ui-button-secondary">
                  Schreiben →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaStrip
        heading={cta?.heading ?? 'Lernen Sie uns kennen.'}
        subline={cta?.subline ?? 'Rufen Sie an oder schreiben Sie uns — wir freuen uns auf Ihre Anfrage.'}
        primaryCta={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
        secondaryCta={{ label: 'Alle Verfahren', href: '/verfahren' }}
        variant="dark"
      />
    </>
  )
}
