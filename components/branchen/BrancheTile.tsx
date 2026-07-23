import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { SanityBranche } from '@/sanity/lib/types'

export default function BrancheTile({ branche }: { branche: SanityBranche }) {
  const imgUrl = branche.bild
    ? urlFor(branche.bild).width(600).height(600).fit('crop').url()
    : `/branchen/${branche.slug.current}.webp`

  return (
    <Link href={`/branchen/${branche.slug.current}`} className="group block h-full">
      <article className="ui-card ui-card-interactive ui-card-flush h-full overflow-hidden">
        <div className="relative aspect-video overflow-hidden bg-(--bg-secondary)">
          <Image
            src={imgUrl}
            alt={branche.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="px-4 pb-4 pt-4">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-(--text-primary) transition-colors group-hover:text-brand-600">
            {branche.name}
          </h3>
          {branche.beschreibung && (
            <p className="mt-2 text-base leading-relaxed text-(--text-secondary) line-clamp-3">
              {branche.beschreibung}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}
