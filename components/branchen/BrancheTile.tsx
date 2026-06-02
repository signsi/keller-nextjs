import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { SanityBranche } from '@/sanity/lib/types'

export default function BrancheTile({ branche }: { branche: SanityBranche }) {
  const imgUrl = branche.bild
    ? urlFor(branche.bild).width(600).height(600).fit('crop').url()
    : `/branchen/${branche.slug.current}.webp`

  return (
    <Link href={`/branchen/${branche.slug.current}`} className="group block">
      <div className="rounded-[14px] overflow-hidden bg-[var(--bg-secondary)] aspect-square relative shadow-[0_1px_4px_rgba(15,17,23,0.07)] group-hover:shadow-[0_6px_20px_rgba(15,17,23,0.12)] transition-shadow duration-200">
        <Image
          src={imgUrl}
          alt={branche.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-3 px-0.5">
        <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#0091d4] transition-colors leading-snug">
          {branche.name}
        </h3>
        {branche.beschreibung && (
          <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed line-clamp-2">
            {branche.beschreibung}
          </p>
        )}
      </div>
    </Link>
  )
}
