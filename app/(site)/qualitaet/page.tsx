import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { qualitaetQuery } from '@/sanity/lib/queries'
import type { QualitaetData } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Qualität',
  description: 'ISO 9001 zertifiziert. Jede Charge dokumentiert, geprüft und rückverfolgbar archiviert.',
}

const defaultStats = [
  { value: '99%', label: 'Kundenzufriedenheit' },
  { value: '40+', label: 'Jahre Erfahrung' },
  { value: '< 24h', label: 'Angebotsfrist' },
  { value: '100%', label: 'Rückverfolgbar' },
]

const defaultSchritte = [
  { nr: '01', title: 'Wareneingangsprüfung', body: 'Jedes Bauteil wird bei Eingang auf Vollständigkeit, Masskonformität und Oberflächenzustand geprüft. Abweichungen werden vor der Produktion mit dem Kunden geklärt.' },
  { nr: '02', title: 'Prozessüberwachung', body: 'Badkonzentrationen, Temperaturen und Prozesszeiten werden laufend überwacht und dokumentiert. Abweichungen vom Sollwert lösen sofortige Korrekturen aus.' },
  { nr: '03', title: 'Schichtdickenmessung', body: 'Nach der Beschichtung wird die Schichtdicke an repräsentativen Messpunkten geprüft. Die Ergebnisse werden im Prüfbericht festgehalten.' },
  { nr: '04', title: 'Warenausgangskontrolle', body: 'Sichtprüfung und Massprüfung jeder Lieferung vor dem Versand. Auf Wunsch erhalten Sie Prüfprotokolle und Materialzertifikate.' },
]

const defaultNormen = [
  { code: 'ISO 9001:2015', beschreibung: 'Qualitätsmanagementsystem' },
  { code: 'DIN EN ISO 4527', beschreibung: 'Chemisch Vernickeln' },
  { code: 'DIN EN ISO 4042', beschreibung: 'Galvanisches Verzinken' },
  { code: 'DIN EN ISO 6158', beschreibung: 'Hartchrom' },
  { code: 'DIN EN ISO 7599', beschreibung: 'Anodisieren' },
  { code: 'DIN EN ISO 15730', beschreibung: 'Elektropolieren' },
]

export default async function QualitaetPage() {
  const data: QualitaetData | null = await client.fetch(qualitaetQuery)

  const hero = data?.hero
  const stats = (data?.stats && data.stats.length > 0) ? data.stats : defaultStats
  const prozess = data?.prozess
  const schritte = (prozess?.schritte && prozess.schritte.length > 0) ? prozess.schritte : defaultSchritte
  const normen = data?.normen
  const normenItems = (normen?.items && normen.items.length > 0) ? normen.items : defaultNormen
  const cta = data?.cta

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-(--text-tertiary) mb-8">
            <Link href="/" className="hover:text-(--text-primary) transition-colors">Home</Link>
            <span>/</span>
            <span className="text-(--text-secondary)">Qualität</span>
          </nav>
          <div className="max-w-2xl pb-14">
            <Eyebrow className="mb-4">
              {hero?.kicker ?? 'Qualität & Zertifizierung'}
            </Eyebrow>
            <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-(--text-primary) leading-tight mb-5">
              {hero?.heading ?? 'Qualität, die man sieht. Und messen kann.'}
            </SplitText>
            <p data-reveal className="text-base sm:text-lg text-(--text-secondary) leading-relaxed">
              {hero?.intro ?? 'Jeder Auftrag durchläuft ein dokumentiertes Qualitätssystem nach ISO 9001. Prüfberichte, Schichtdickenprotokolle und Materialzertifikate werden auf Wunsch mitgeliefert — lückenlose Rückverfolgbarkeit inklusive.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-steel-800 py-14 lg:py-20">
        <Container>
          <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/[0.06] rounded-lg px-6 py-8 flex flex-col items-center text-center">
                <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight tabular-nums">{value}</span>
                <span className="text-xs text-white/40 mt-2 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prozess */}
      <section className="bg-(--bg-secondary) py-14 lg:py-20">
        <Container>
          <Eyebrow className="mb-3">
            {prozess?.kicker ?? 'Unser Prozess'}
          </Eyebrow>
          <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-(--text-primary) mb-10">
            {prozess?.heading ?? 'Von Eingang bis Ausgang kontrolliert.'}
          </SplitText>
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schritte.map(({ nr, title, body }) => (
              <div key={nr} className="bg-white rounded-[14px] p-6">
                <span className="text-2xl font-black text-(--bg-tertiary) tabular-nums leading-none">{nr}</span>
                <h3 className="text-base font-semibold text-(--text-primary) mt-3 mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Normen */}
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <Eyebrow className="mb-3">
                {normen?.kicker ?? 'Normen'}
              </Eyebrow>
              <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-(--text-primary)">
                {normen?.heading ?? 'Anerkannte Standards.'}
              </SplitText>
              <p data-reveal className="mt-4 text-sm text-(--text-secondary) leading-relaxed max-w-xs">
                {normen?.body ?? 'Unsere Beschichtungen werden nach international anerkannten Normen ausgeführt. Zertifikate auf Anfrage.'}
              </p>
            </div>
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {normenItems.map(({ code, beschreibung }) => (
                <div key={code} className="bg-(--bg-secondary) rounded-lg px-5 py-4">
                  <p className="text-sm font-bold text-(--text-primary)">{code}</p>
                  <p className="text-xs text-(--text-tertiary) mt-0.5">{beschreibung}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaStrip
        heading={cta?.heading ?? 'Zertifikate oder Prüfberichte benötigt?'}
        subline={cta?.subline ?? 'Wir stellen Ihnen alle erforderlichen Unterlagen für Ihre Freigabeprozesse zur Verfügung.'}
        primaryCta={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
        secondaryCta={{ label: 'Downloads', href: '/downloads' }}
        variant="dark"
      />
    </>
  )
}
