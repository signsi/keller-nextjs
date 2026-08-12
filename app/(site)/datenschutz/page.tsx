import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung der Keller Galvanik AG.',
}

export default function DatenschutzPage() {
  return (
    <section className="bg-white pt-10 pb-20">
      <Container>
        <nav className="flex items-center gap-1.5 text-xs text-(--text-tertiary) mb-8">
          <Link href="/" className="hover:text-(--text-primary) transition-colors">Home</Link>
          <span>/</span>
          <span className="text-(--text-secondary)">Datenschutz</span>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-(--text-primary) mb-10">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm text-(--text-secondary) leading-relaxed">

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Verantwortliche Stelle
              </h2>
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
              </p>
              <p className="mt-2 font-semibold text-(--text-primary)">Keller Galvanik AG</p>
              <p>Musterstrasse 1, 0000 Musterort</p>
              <p>
                <a href="mailto:info@keller-galvanik.ch" className="text-(--text-primary) hover:text-brand-600 transition-colors">
                  info@keller-galvanik.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Erhebung und Verwendung von Daten
              </h2>
              <p>
                Wir erheben personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Leistungen und die Kommunikation mit Ihnen erforderlich ist. Dazu gehören insbesondere Name, E-Mail-Adresse und Telefonnummer, die Sie uns über das Kontaktformular mitteilen.
              </p>
              <p className="mt-3">
                Die erhobenen Daten werden ausschliesslich für die Bearbeitung Ihrer Anfrage sowie für die Auftragsabwicklung verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Server-Log-Dateien
              </h2>
              <p>
                Beim Besuch dieser Website werden automatisch technische Informationen erhoben, die Ihr Browser übermittelt. Dies sind unter anderem Browsertyp, Betriebssystem, IP-Adresse (anonymisiert), Datum und Uhrzeit des Abrufs sowie die aufgerufene URL. Diese Daten dienen ausschliesslich der technischen Bereitstellung der Website und werden nicht mit anderen Daten zusammengeführt.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Cookies
              </h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies oder Cookies von Drittanbietern. Technisch notwendige Cookies können zur Sicherstellung der Funktionsfähigkeit der Website eingesetzt werden.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Datensicherheit
              </h2>
              <p>
                Wir treffen technische und organisatorische Massnahmen, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Die Übertragung der Daten auf unserer Website erfolgt verschlüsselt mittels SSL/TLS.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Bearbeitung. Für entsprechende Anfragen wenden Sie sich bitte an:{' '}
                <a href="mailto:info@keller-galvanik.ch" className="text-(--text-primary) hover:text-brand-600 transition-colors">
                  info@keller-galvanik.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-3">
                Anwendbares Recht
              </h2>
              <p>
                Diese Datenschutzerklärung richtet sich nach den Bestimmungen des Schweizer Datenschutzgesetzes (DSG) sowie der Datenschutz-Grundverordnung (DSGVO), soweit diese anwendbar ist.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-(--text-tertiary)">Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long' })}</p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}
