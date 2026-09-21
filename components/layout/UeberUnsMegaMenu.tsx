'use client'

import Image from 'next/image'
import Link from 'next/link'

interface MenuItem {
  href: string
  title: string
  description: string
}

const menuItems: MenuItem[] = [
  {
    href: '/ueber-uns',
    title: 'Ausbildungsbetrieb',
    description: 'Junge Talente fördern, investieren in Wissen und Praxis.',
  },
  {
    href: '/ueber-uns',
    title: 'Wie wir handeln',
    description: 'Verantwortungsvoll, transparent und nachhaltig.',
  },
  {
    href: '/ueber-uns',
    title: 'Zukunftsversionen',
    description: 'Innovation und nachhaltiges Wachstum.',
  },
]

const quickLinks = [
  {
    href: '/ueber-uns',
    label: 'Über uns',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.75v12.5M1.75 8h12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/qualitaet',
    label: 'Qualität',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5L9.9 5.3L14 5.7L10.9 8.4L11.9 12.5L8 10.2L4.1 12.5L5.1 8.4L2 5.7L6.1 5.3L8 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/verfahren',
    label: 'Verfahren',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 3.5h10v9H3zM6 3.5v9M10 3.5v9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/kontakt',
    label: 'Kontakt',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h1.7l.8 2.2-1 .8A8 8 0 0 0 9.2 11l.8-1 2.2.8v1.7a1.5 1.5 0 0 1-1.5 1.5A10 10 0 0 1 2.5 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

interface Props {
  onClose: () => void
}

export default function UeberUnsMegaMenu({ onClose }: Props) {
  return (
    <div className="absolute top-full left-0 right-0 overflow-hidden rounded-b-[22px] bg-white shadow-[0_16px_48px_rgba(15,17,23,0.12)] z-40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-6">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,560px)_minmax(420px,560px)] items-start">
          <div className="flex flex-col gap-2 pt-1">
            {menuItems.map(item => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-4 rounded-[10px] px-2 py-2.5 transition-colors hover:bg-(--bg-secondary)"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-(--border-primary) bg-(--bg-secondary) text-(--text-secondary) transition-colors group-hover:border-brand-300 group-hover:text-brand-600">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6h8M6 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[18px] font-medium tracking-[-0.03em] text-(--text-primary) leading-tight">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[15px] text-(--text-secondary) leading-relaxed">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-1">
            <div className="overflow-hidden rounded-[18px] bg-(--bg-secondary)">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/home-links/keller-galvanik-team-platzhalter.webp"
                  alt="Team bei Keller Galvanik"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover grayscale"
                />
              </div>
              <div className="px-6 py-5 text-center">
                <p className="text-[17px] font-semibold tracking-[-0.02em] text-(--text-primary) leading-snug">
                  Langjährige Partnerschaften
                </p>
                <p className="mt-3 text-[15px] text-(--text-secondary) leading-relaxed">
                  See how companies like yours increased productivity by 40% and reduced operational costs within their first quarter.
                </p>
                <Link
                  href="/ueber-uns"
                  onClick={onClose}
                  className="mt-4 inline-flex items-center text-[15px] font-medium text-(--text-primary) transition-colors hover:text-brand-600"
                >
                  View Case Studies <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-500">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-8 py-3.5 overflow-x-auto">
            {quickLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span className="opacity-70">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
