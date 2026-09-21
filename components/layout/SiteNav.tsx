'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/brand/Logo'
import VerfahrenMegaMenu from '@/components/layout/VerfahrenMegaMenu'
import UeberUnsMegaMenu from '@/components/layout/UeberUnsMegaMenu'

const navLinks = [
  { href: '/verfahren', label: 'Verfahren', hasMega: true, megaKey: 'verfahren' },
  { href: '/branchen', label: 'Branchen', hasMega: false },
  { href: '/qualitaet', label: 'Qualität', hasMega: false },
  { href: '/downloads', label: 'Downloads', hasMega: false },
  { href: '/ueber-uns', label: 'Über uns', hasMega: true, megaKey: 'ueber-uns' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [activeMegaKey, setActiveMegaKey] = useState<'verfahren' | 'ueber-uns' | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Geometry (position/padding) must stay stable across mega-menu hover — only
  // background/text color should react to megaOpen, otherwise the header jumps.
  const geometryOverlay = isHome && !scrolled && !open
  const homeOverlayMode = geometryOverlay && !megaOpen

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

  const openMega = (key: 'verfahren' | 'ueber-uns') => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMegaKey(key)
    setMegaOpen(true)
  }

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => {
      setMegaOpen(false)
      setActiveMegaKey(null)
    }, 120)
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 mx-2 md:mx-4 lg:mx-5
          ${geometryOverlay ? 'top-7 md:top-8 lg:top-10' : 'top-2 md:top-3 lg:top-4'}
          ${homeOverlayMode ? 'bg-transparent' : 'bg-white'}
          ${megaOpen ? 'rounded-t-[22px]' : 'rounded-[22px]'}
          ${scrolled || megaOpen ? 'shadow-[0_2px_16px_rgba(15,17,23,0.08)]' : ''}`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-14">
          <div className="flex h-16 items-center justify-between gap-8">

            <Logo
              variant={homeOverlayMode ? 'white' : 'default'}
              mode={homeOverlayMode ? 'symbol' : 'full'}
            />

            <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
              {navLinks.map(({ href, label, hasMega, megaKey }) =>
                hasMega ? (
                  <div
                    key={href}
                    className="relative"
                    onMouseEnter={() => openMega(megaKey as 'verfahren' | 'ueber-uns')}
                    onMouseLeave={scheduleMegaClose}
                  >
                    <Link
                      href={href}
                      onClick={() => {
                        setActiveMegaKey(megaKey as 'verfahren' | 'ueber-uns')
                        setMegaOpen(false)
                      }}
                      className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-150 rounded-full flex items-center gap-1
                        ${homeOverlayMode
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : isActive(href) || (megaOpen && activeMegaKey === megaKey)
                            ? 'text-(--text-primary)'
                            : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-secondary)'
                        }
                        ${homeOverlayMode
                          ? ''
                          : `after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px
                            after:bg-brand-500 after:transition-transform after:duration-200 after:origin-left
                            ${isActive(href) || (megaOpen && activeMegaKey === megaKey) ? 'after:scale-x-100' : 'after:scale-x-0'}`
                        }`}
                    >
                      {label}
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        className={`transition-transform duration-200 ${(megaOpen && activeMegaKey === megaKey) ? 'rotate-180' : ''} ${homeOverlayMode ? 'text-white' : 'text-black'}`}
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-150 rounded-full
                      ${homeOverlayMode
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : isActive(href)
                          ? 'text-(--text-primary)'
                          : 'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-secondary)'
                      }
                      ${homeOverlayMode
                        ? ''
                        : `after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px
                          after:bg-brand-500 after:transition-transform after:duration-200 after:origin-left
                          ${isActive(href) ? 'after:scale-x-100' : 'after:scale-x-0'}`
                      }`}
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/kontakt"
                className="ui-button ui-button-primary"
              >
                Kontakt
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className={`md:hidden flex flex-col gap-1.25 w-10 h-10 items-center justify-center rounded-full transition-colors
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--border-focus)
                ${homeOverlayMode ? 'hover:bg-white/10' : 'hover:bg-(--bg-secondary)'}`}
              aria-label="Navigation öffnen"
              aria-expanded={open}
            >
              <span className={`block w-5 h-px ${homeOverlayMode ? 'bg-white' : 'bg-(--text-primary)'}`} />
              <span className={`block w-5 h-px ${homeOverlayMode ? 'bg-white' : 'bg-(--text-primary)'}`} />
              <span className={`block w-3.5 h-px ${homeOverlayMode ? 'bg-white' : 'bg-(--text-primary)'}`} />
            </button>

          </div>
        </div>

        {/* Mega menu — rendered inside header to inherit fixed positioning */}
        {megaOpen && activeMegaKey === 'verfahren' && (
          <div onMouseEnter={() => openMega('verfahren')} onMouseLeave={scheduleMegaClose}>
            <VerfahrenMegaMenu onClose={() => {
              setMegaOpen(false)
              setActiveMegaKey(null)
            }} />
          </div>
        )}

        {megaOpen && activeMegaKey === 'ueber-uns' && (
          <div onMouseEnter={() => openMega('ueber-uns')} onMouseLeave={scheduleMegaClose}>
            <UeberUnsMegaMenu onClose={() => {
              setMegaOpen(false)
              setActiveMegaKey(null)
            }} />
          </div>
        )}
      </header>

      {!isHome && <div className="h-18 md:h-19 lg:h-20" aria-hidden="true" />}

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
          className="fixed inset-0 z-60 bg-steel-800 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Logo variant="white" />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--border-focus)"
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
                  ${isActive(href) ? 'text-brand-500' : 'text-white/80 hover:text-white'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="ui-button ui-button-primary flex w-full"
            >
              Offerte anfragen
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
