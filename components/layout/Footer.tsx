import Link from 'next/link'
import Container from '@/components/layout/Container'
import Logo from '@/components/brand/Logo'

const verfahren = [
  { href: '/verfahren/chemisch-vernickeln', label: 'Chemisch Vernickeln' },
  { href: '/verfahren/galvanisch-verzinken', label: 'Galvanisch Verzinken' },
  { href: '/verfahren/elektropolieren', label: 'Elektropolieren' },
  { href: '/verfahren/hartchrom', label: 'Hartchrom' },
]

const unternehmen = [
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/qualitaet', label: 'Qualität' },
  { href: '/kontakt', label: 'Kontakt' },
]

const service = [
  { href: '/downloads', label: 'Downloads' },
  { href: '/kontakt', label: 'Offerte anfragen' },
]

export default function Footer() {
  return (
    <footer className="bg-steel-800">
      <Container>

        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <Logo variant="white" mode="symbol" className="h-10" />
            <p className="mt-4 max-w-55 text-sm leading-relaxed text-white/55">
              Präzise Oberflächenlösungen für industrielle Bauteile.
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-white/55">
              Keller Galvanik AG<br />
              Musterstrasse 1<br />
              8000 Zürich<br />
              <a href="tel:+41000000000" className="mt-1 inline-block text-white/70 transition-colors hover:text-white">
                +41 00 000 00 00
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Verfahren
            </h3>
            <ul className="space-y-2.5">
              {verfahren.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Unternehmen
            </h3>
            <ul className="space-y-2.5">
              {unternehmen.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Service
            </h3>
            <ul className="space-y-2.5">
              {service.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Keller Galvanik AG. Alle Rechte vorbehalten.</span>
          <div className="flex gap-5">
            <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
          </div>
        </div>

      </Container>
    </footer>
  )
}
