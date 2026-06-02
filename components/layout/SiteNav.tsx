'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/brand/Logo'
import Container from '@/components/layout/Container'
import VerfahrenMegaMenu from '@/components/layout/VerfahrenMegaMenu'

const navLinks = [
  { href: '/verfahren', label: 'Verfahren', hasMega: true },
  { href: '/branchen', label: 'Branchen', hasMega: false },
  { href: '/qualitaet', label: 'Qualität', hasMega: false },
  { href: '/downloads', label: 'Downloads', hasMega: false },
  { href: '/ueber-uns', label: 'Über uns', hasMega: false },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close mega menu on route change
  useEffect(() => { setMegaOpen(false) }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/')

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300
          ${scrolled || megaOpen ? 'shadow-[0_2px_16px_rgba(15,17,23,0.08)]' : ''}`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-8">

            <Logo />

            <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
              {navLinks.map(({ href, label, hasMega }) =>
                hasMega ? (
                  <div
                    key={href}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleMegaClose}
                  >
                    <Link
                      href={href}
                      className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-150 rounded-[4px] flex items-center gap-1
                        ${isActive(href) || megaOpen
                          ? 'text-[var(--text-primary)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                        }
                        after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px
                        after:bg-[#00a5ec] after:transition-transform after:duration-200 after:origin-left
                        ${isActive(href) || megaOpen ? 'after:scale-x-100' : 'after:scale-x-0'}`}
                    >
                      {label}
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-150 rounded-[4px]
                      ${isActive(href)
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      }
                      after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px
                      after:bg-[#00a5ec] after:transition-transform after:duration-200 after:origin-left
                      ${isActive(href) ? 'after:scale-x-100' : 'after:scale-x-0'}`}
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/kontakt"
                className="inline-flex items-center h-8 px-4 text-sm font-medium text-white bg-[#00a5ec] hover:bg-[#0091d4] rounded-[4px] transition-colors"
              >
                Offerte anfragen
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-[5px] w-10 h-10 items-center justify-center rounded-[4px] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Navigation öffnen"
              aria-expanded={open}
            >
              <span className="block w-5 h-px bg-[var(--text-primary)]" />
              <span className="block w-5 h-px bg-[var(--text-primary)]" />
              <span className="block w-3.5 h-px bg-[var(--text-primary)]" />
            </button>

          </div>
        </Container>

        {/* Mega menu — rendered inside header to inherit fixed positioning */}
        {megaOpen && (
          <div onMouseEnter={openMega} onMouseLeave={scheduleMegaClose}>
            <VerfahrenMegaMenu onClose={() => setMegaOpen(false)} />
          </div>
        )}
      </header>

      <div className="h-16" aria-hidden="true" />

      {/* Backdrop */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          style={{ top: '4rem' }}
          onClick={() => setMegaOpen(false)}
        />
      )}

      {/* Mobile nav */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-steel-800 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Logo variant="white" />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-[4px] text-white/60 hover:text-white transition-colors"
              aria-label="Navigation schliessen"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6" aria-label="Mobile Navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-4 text-3xl font-semibold transition-colors
                  ${isActive(href) ? 'text-[#00a5ec]' : 'text-white/80 hover:text-white'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full h-12 bg-[#00a5ec] text-white font-semibold rounded-[4px] hover:bg-[#0091d4] transition-colors"
            >
              Offerte anfragen
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
