'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { urlFor } from '@/sanity/lib/image'
import type { HomepageData } from '@/sanity/lib/types'

type Props = { data?: HomepageData['hero'] }

const defaults = {
  primaryHeading: 'Präzision',
  secondaryHeading: 'trifft auf',
  tertiaryHeading: 'Innovation',
  subtext: 'Ihr Partner für anspruchsvolle Metallverarbeitung aus einer Hand.',
  discoverLinkLabel: 'Keller Galvanik entdecken',
  discoverLinkHref: '/ueber-uns',
}

export default function HomeHero({ data }: Props) {
  const d = { ...defaults, ...data }
  const fixedHeadline = ['Präzision', 'trifft auf', 'Innovation']
  const fixedSubline = 'Ihr Partner für anspruchsvolle Metallverarbeitung aus einer Hand.'
  const linesRef = useRef<HTMLDivElement>(null)
  const desktopImage = d.heroImageDesktop
    ? urlFor(d.heroImageDesktop).width(2200).quality(85).url()
    : '/hero/unimec_image_hero_home.jpg.webp'
  const mobileImage = d.heroImageMobile
    ? urlFor(d.heroImageMobile).width(1200).quality(85).url()
    : '/hero/unimec_image_hero_home-mobile.jpg.webp'

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !linesRef.current) return
    const lines = linesRef.current.querySelectorAll<HTMLElement>('[data-line]')
    gsap.set(lines, { y: 28, opacity: 0 })
    gsap.to(lines, { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, delay: 0.1, ease: 'power3.out' })
  }, [])

  return (
    <section className="h-screen px-2 pb-4 md:px-4 md:pb-6 lg:px-5 lg:pb-8 bg-white">
      <div className="relative h-full overflow-hidden rounded-[26px] shadow-[0_14px_38px_rgba(15,17,23,0.12)]">
        <div className="absolute inset-0">
          <Image
            src={desktopImage}
            alt="Mitarbeiter bei praeziser Metallbearbeitung"
            fill
            priority
            sizes="(max-width: 1023px) 0px, 100vw"
            className="hidden lg:block object-cover"
          />
          <Image
            src={mobileImage}
            alt="Mitarbeiter bei praeziser Metallbearbeitung"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 0px"
            className="block lg:hidden object-cover object-[70%_42%]"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/42 via-black/34 to-black/72 lg:bg-linear-to-r lg:from-black/44 lg:via-black/26 lg:to-black/30" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-14 lg:pb-12 lg:pt-36">
          <div className="">
            <div ref={linesRef}>
              <h1 className="text-[4rem] sm:text-[5.2rem] lg:text-[7.2rem] font-bold leading-[0.94] tracking-[-0.035em] text-white">
                {fixedHeadline.map((line) => (
                  <span key={line} data-line className="block">{line}</span>
                ))}
              </h1>
            </div>

            <p data-reveal data-reveal-delay="0.35" className="mt-4 text-[1.05rem] sm:text-[1.9rem] lg:text-[2rem] leading-[1.18] tracking-[-0.015em] text-white/92">
              Ihr Partner für anspruchsvolle<br />
              Oberflächen aus einer Hand.
            </p>
          </div>

          <div className="mt-12 flex justify-start lg:justify-end">
            <Link
              href={d.discoverLinkHref ?? '/ueber-uns'}
              className="group inline-flex items-center gap-3 text-[2rem] sm:text-[2.1rem] font-semibold text-white/95 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-sm"
            >
              <span>{d.discoverLinkLabel ?? 'unimec entdecken'}</span>
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="translate-y-px transition-transform duration-200 group-hover:translate-x-1">
                <path d="M5 19h14V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
