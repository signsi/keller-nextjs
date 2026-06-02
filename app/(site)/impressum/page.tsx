import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Keller Galvanik AG.',
}

export default function ImpressumPage() {
  return (
    <section className="bg-white pt-10 pb-20">
      <Container>
        <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--text-secondary)]">Impressum</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--text-primary)] mb-10">
            Impressum
          </h1>

          <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Unternehmen
              </h2>
              <p className="font-semibold text-[var(--text-primary)]">Keller Galvanik AG</p>
              <p>Musterstrasse 1</p>
              <p>0000 Musterort</p>
              <p>Schweiz</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Kontakt
              </h2>
              <p>
                Telefon:{' '}
                <a href="tel:+41000000000" className="text-[var(--text-primary)] hover:text-[#0091d4] transition-colors">
                  +41 00 000 00 00
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@keller-galvanik.ch" className="text-[var(--text-primary)] hover:text-[#0091d4] transition-colors">
                  info@keller-galvanik.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Handelsregister
              </h2>
              <p>Eingetragen im Handelsregister des Kantons Zürich</p>
              <p>UID: CHE-000.000.000</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Verantwortlich für den Inhalt
              </h2>
              <p className="font-semibold text-[var(--text-primary)]">Peter Keller</p>
              <p>Geschäftsführer, Keller Galvanik AG</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Haftungsausschluss
              </h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-3">
                Urheberrecht
              </h2>
              <p>
                Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem Schweizer Urheberrecht. Jede Vervielfältigung, Verbreitung oder sonstige Nutzung bedarf der schriftlichen Zustimmung von Keller Galvanik AG.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
