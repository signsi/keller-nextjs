import Eyebrow from '@/components/ui/Eyebrow'
import SplitText from '@/components/animations/SplitText'
import Container from '@/components/layout/Container'
import InquiryForm from '@/components/forms/InquiryForm'
import type { HomepageData } from '@/sanity/lib/types'

type Props = {
  data?: HomepageData['inquiry']
}

export default function HomeInquiryCta({ data }: Props) {
  return (
    <section className="py-16 lg:py-24 bg-(--bg-secondary)">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Eyebrow className="mb-3">
              {data?.kicker ?? 'Offerte anfragen'}
            </Eyebrow>
            <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-(--text-primary) mb-4">
              {data?.heading ?? 'Schnell zum Angebot.'}
            </SplitText>
            <p data-reveal className="text-sm text-(--text-secondary) leading-relaxed max-w-sm mb-6">
              {data?.body ?? 'Beschreiben Sie Ihr Bauteil und Ihre Anforderungen — wir melden uns innert 24 Stunden.'}
            </p>
            <ul data-reveal-stagger className="space-y-3">
              {(data?.bullets && data.bullets.length > 0
                ? data.bullets
                : ['Antwort innert 24 Stunden', 'Kostenlose technische Erstberatung', 'Kein Minimum bei Erstaufträgen']
              ).map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-(--text-secondary)">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <InquiryForm layout="inline" />
          </div>
        </div>
      </Container>
    </section>
  )
}
