'use client'

import Image from 'next/image'
import Link from 'next/link'

interface VerfahrenItem {
  slug: string
  name: string
  imgBg: string
  imageUrl?: string
}

interface Group {
  title: string
  items: VerfahrenItem[]
}

const fallbackGroups: Group[] = [
  {
    title: 'Lackierverfahren',
    items: [
      {
        slug: 'pulverbeschichten',
        name: 'Pulverbeschichten',
        imgBg: '#dbeafe',
        imageUrl: "/verfahren/pulverbeschichten-768x432.webp",
      },
    ],
  },
  {
    title: 'Metallische Beschichtungen',
    items: [
      { slug: 'galvanisch-verzinken', name: 'Galvanisch Verzinken', imgBg: '#d1d5db', imageUrl: "/verfahren/keller-galvanik-news-platzhalter-768x432.webp" },
      { slug: 'chemisch-vernickeln', name: 'Chemisch Vernickeln', imgBg: '#e0e7ef', imageUrl: "/verfahren/keller-galvanik-chemisch-vernickelt-768x565.webp" },
      { slug: 'galvanisch-vernickeln', name: 'Galvanisch Vernickeln', imgBg: '#d1d5db', imageUrl: "/verfahren/keller-galvanik-schwarz-passiviert-768x1009.webp" },
      { slug: 'galvanisch-verchromen', name: 'Galvanisch Verchromen', imgBg: '#fef3c7', imageUrl: "/verfahren/keller-galvanik-verbindungstechnik.webp" },
    ],
  },
  {
    title: 'Edelstahlveredlung',
    items: [
            { slug: 'chromstahl-beizen', name: 'Chromstahlbeizen', imgBg: '#ede9fe', imageUrl: "/verfahren/keller-galvanik-beizen-768x513.webp" },

      { slug: 'elektropolieren', name: 'Elektropolieren', imgBg: '#d1fae5', imageUrl: "/verfahren/keller-galvanik-elektropoliert-768x467.webp" },
    ],
  },
]

const quickLinks = [
  {
    href: '/verfahren',
    label: 'Übersicht Verfahren',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="9" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    href: '/kontakt',
    label: 'Technische Beratung',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M2 3.5C2 3 2.5 2.5 3 2.5h2l.75 2.25L4.5 6a8 8 0 0 0 4.5 4.5l1.25-1.25L12.5 10v2c0 .5-.5 1-1 1C5 13 2 8 2 3.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: '/qualitaet',
    label: 'Qualität & Normen',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M7.5 1.5L9.5 5.5H13.5L10.5 8L11.5 12L7.5 9.5L3.5 12L4.5 8L1.5 5.5H5.5L7.5 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: '/kontakt?offerte=1',
    label: 'Offerte anfragen',
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="2" y="2.5" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 6h5M5 8.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
]

interface Props {
  onClose: () => void
}

export default function VerfahrenMegaMenu({ onClose }: Props) {
  const groups = fallbackGroups

  return (
    <div className="absolute top-full left-0 right-0 overflow-hidden rounded-b-[22px] bg-white shadow-[0_16px_48px_rgba(15,17,23,0.12)] z-40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 pt-8 pb-6">
        <div className="flex flex-wrap gap-x-12 gap-y-8">
          {groups.map(group => (
            <div key={group.title} className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-4">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-4">
                {group.items.map(item => (
                  <Link
                    key={item.slug}
                    href={`/verfahren/${item.slug}`}
                    onClick={onClose}
                    className="group flex flex-col w-[148px]"
                  >
                    {item.imageUrl ? (
                      <div className="relative w-full h-[96px] rounded-md mb-2.5 overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          sizes="148px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full h-[96px] rounded-md mb-2.5 overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]"
                        style={{ backgroundColor: item.imgBg }}
                      />
                    )}
                    <span className="flex items-center gap-1 text-sm text-(--text-secondary) group-hover:text-brand-600 transition-colors leading-snug">
                      {item.name}
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-150">
                        <path d="M2 5.5h7M6 3l3 2.5L6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
