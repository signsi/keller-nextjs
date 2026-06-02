'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import type { HomepageData } from '@/sanity/lib/types'

type Props = { data?: HomepageData['hero'] }

const defaults = {
  kicker: 'Keller Galvanik · Oberflächentechnik',
  primaryHeading: 'Präzise Oberflächen',
  secondaryHeading: 'für Industrie und Technik.',
  subtext: 'Von galvanischen Beschichtungen bis zur Edelstahlveredelung — von der technischen Abklärung bis zur zuverlässigen Ausführung.',
  ctaPrimary: { label: 'Offerte anfragen', href: '/kontakt' },
  ctaSecondary: { label: 'Verfahren finden', href: '/verfahren' },
}

export default function HomeHero({ data }: Props) {
  const d = { ...defaults, ...data }
  const linesRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !linesRef.current) return
    const lines = linesRef.current.querySelectorAll<HTMLElement>('[data-line]')
    gsap.set(lines, { y: 28, opacity: 0 })
    gsap.to(lines, { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, delay: 0.1, ease: 'power3.out' })
  }, [])

  return (
    <section className="min-h-[calc(100svh-4rem)] grid grid-cols-1 lg:grid-cols-[1fr_44%] bg-white overflow-hidden">

      <div className="flex items-center justify-end py-20 lg:py-0">
        <div className="w-full max-w-[600px] px-6 md:px-10 lg:pl-16 lg:pr-16 xl:pl-20 xl:pr-20">

          <p data-reveal data-reveal-delay="0" className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-6">
            {d.kicker}
          </p>

          <div ref={linesRef}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-[-0.025em] text-[var(--text-primary)]">
              <span data-line className="block">{d.primaryHeading}</span>
              <span data-line className="block text-[var(--text-secondary)] font-normal">{d.secondaryHeading}</span>
            </h1>
          </div>

          <p data-reveal data-reveal-delay="0.45" className="mt-6 text-base sm:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed max-w-[420px]">
            {d.subtext}
          </p>

          <div data-reveal data-reveal-delay="0.55" className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={d.ctaPrimary?.href ?? '/kontakt'}
              className="inline-flex items-center h-11 px-6 text-sm font-semibold text-white bg-[#00a5ec] hover:bg-[#0091d4] active:bg-[#007ab8] rounded-[4px] transition-colors duration-150"
            >
              {d.ctaPrimary?.label ?? 'Offerte anfragen'}
            </Link>
            <Link
              href={d.ctaSecondary?.href ?? '/verfahren'}
              className="inline-flex items-center h-11 px-6 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-[4px] transition-colors duration-150"
            >
              {d.ctaSecondary?.label ?? 'Verfahren finden'}
            </Link>
          </div>

        </div>
      </div>

      {/* Right — illustration panel */}
      <div className="hidden lg:flex items-center justify-center bg-[var(--bg-secondary)] relative min-h-[400px]">
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'radial-gradient(circle, #b8bec6 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 flex flex-col items-center w-72">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)] mb-6">
            Querschnitt · Chemisch Vernickeln
          </p>
          <div className="w-full rounded-[4px] overflow-hidden shadow-[0_4px_24px_rgba(15,17,23,0.10)]">
            <div className="h-3 bg-[#00a5ec] flex items-center px-3">
              <span className="text-[9px] text-white font-medium tracking-wide">Ni-Schicht · 15 µm</span>
            </div>
            <div className="h-2 bg-[#b8bec6]" />
            <div className="h-28 bg-[#d8dade] flex flex-col justify-center px-3">
              <span className="text-[10px] text-[var(--text-secondary)] font-medium">Grundwerkstoff</span>
              <span className="text-[9px] text-[var(--text-tertiary)] mt-0.5">Stahl / Aluminium</span>
            </div>
          </div>
          <div className="w-full mt-4 flex items-center gap-2">
            <div className="flex-1 h-px bg-[var(--border-primary)]" />
            <span className="text-[9px] font-mono text-[var(--text-tertiary)] whitespace-nowrap">Schichtdicke 5–50 µm</span>
            <div className="flex-1 h-px bg-[var(--border-primary)]" />
          </div>
        </div>
      </div>

    </section>
  )
}
