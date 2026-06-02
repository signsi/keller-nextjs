import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { allDownloadsQuery } from '@/sanity/lib/queries'
import type { SanityDownload } from '@/sanity/lib/types'

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Technische Datenblätter, Zertifikate und Formulare zum Download.',
}

const kategorienLabels: Record<string, string> = {
  datenblaetter: 'Technische Datenblätter',
  zertifikate: 'Zertifikate & Normen',
  formulare: 'Formulare',
}

function formatBytes(bytes: number) {
  if (!bytes) return ''
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-[var(--text-tertiary)]">
      <path d="M4 2h7l4 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 2v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

export default async function DownloadsPage() {
  const downloads: SanityDownload[] = await client.fetch(allDownloadsQuery)

  const grouped = downloads.reduce<Record<string, SanityDownload[]>>((acc, d) => {
    const key = d.kategorie ?? 'formulare'
    if (!acc[key]) acc[key] = []
    acc[key].push(d)
    return acc
  }, {})

  const kategorienOrder = ['datenblaetter', 'zertifikate', 'formulare']
  const kategorien = kategorienOrder.filter(k => grouped[k]?.length)

  return (
    <>
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">Downloads</span>
          </nav>
          <div className="max-w-xl pb-14">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-4">Downloads</p>
            <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--text-primary)] leading-tight mb-5">
              Datenblätter und Unterlagen.
            </SplitText>
            <p data-reveal className="text-base text-[var(--text-secondary)] leading-relaxed">
              Technische Merkblätter, Zertifikate und Formulare zum Download. Weitere Unterlagen erhalten Sie auf Anfrage.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-secondary)] py-14 lg:py-20">
        <Container>
          {kategorien.length === 0 ? (
            <p className="text-sm text-[var(--text-tertiary)]">Noch keine Downloads vorhanden.</p>
          ) : (
            <div className="space-y-12">
              {kategorien.map(k => (
                <div key={k}>
                  <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-4">
                    {kategorienLabels[k]}
                  </p>
                  <div data-reveal-stagger className="space-y-2">
                    {grouped[k].map(d => {
                      const url = d.datei?.asset?.url
                      const size = d.datei?.asset?.size
                      const filename = d.datei?.asset?.originalFilename
                      const ext = filename?.split('.').pop()?.toUpperCase() ?? 'PDF'
                      return (
                        <a
                          key={d._id}
                          href={url ?? '#'}
                          download={url ? filename : undefined}
                          target={url ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-4 bg-white rounded-[10px] px-5 py-4 hover:shadow-[0_4px_16px_rgba(15,17,23,0.08)] transition-shadow duration-200"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <FileIcon />
                            <span className="text-sm font-medium text-[var(--text-primary)] truncate group-hover:text-[#0091d4] transition-colors">
                              {d.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 shrink-0">
                            <span className="hidden sm:flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                              <span className="font-semibold uppercase">{ext}</span>
                              {size ? <><span>·</span><span>{formatBytes(size)}</span></> : null}
                            </span>
                            {url && (
                              <span className="text-[#0091d4] opacity-0 group-hover:opacity-100 transition-opacity">
                                <DownloadIcon />
                              </span>
                            )}
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaStrip
        heading="Unterlagen nicht gefunden?"
        subline="Spezifische Zertifikate, Prüfberichte oder Datenblätter stellen wir Ihnen auf Anfrage zur Verfügung."
        primaryCta={{ label: 'Kontakt aufnehmen', href: '/kontakt' }}
        secondaryCta={{ label: 'Qualität ansehen', href: '/qualitaet' }}
        variant="dark"
      />
    </>
  )
}
