import Container from '@/components/layout/Container'

function ColorPlaceholder({ title, gradient }: { title: string; gradient: string }) {
  return (
    <div className={`absolute inset-0 ${gradient}`}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/35 bg-black/20 px-3 py-2 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/85">{title}</p>
      </div>
    </div>
  )
}

export default function HomeTopicsBento() {
  return (
    <section className="bg-(--bg-secondary) py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Keller Galvanik AG</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.02] text-(--text-primary)">
            Alles Wichtige auf einen Blick.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <article className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-(--text-primary) max-lg:text-center">Oberflaechenverfahren</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary) max-lg:text-center">
                  Platzhaltertext: Praezise galvanische und chemische Prozesse fuer reproduzierbare Qualitaet,
                  enge Toleranzen und belastbare Serienergebnisse.
                </p>
              </div>
              <div className="relative min-h-72 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <ColorPlaceholder title="Verfahren" gradient="bg-linear-to-br from-[#005d9a] via-[#157fc1] to-[#66d4ff]" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </article>

          <article className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-(--text-primary) max-lg:text-center">Qualitaet</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary) max-lg:text-center">
                  Platzhaltertext: Gepruefte Ablaufe, dokumentierte Standards und saubere Prozessfuehrung fuer
                  gleichbleibende Ergebnisse.
                </p>
              </div>
              <div className="relative mt-4 min-h-44 flex-1">
                <ColorPlaceholder title="Qualitaet" gradient="bg-linear-to-br from-[#1e5fb8] via-[#4f8ee0] to-[#9ac7ff]" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </article>

          <article className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-(--text-primary) max-lg:text-center">Branchen</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary) max-lg:text-center">
                  Platzhaltertext: Kompakte Einblicke in Industriefelder, Anforderungen und Loesungswege aus der
                  Praxis.
                </p>
              </div>
              <div className="relative mt-4 min-h-44 flex-1">
                <ColorPlaceholder title="Branchen" gradient="bg-linear-to-br from-[#0f5d7c] via-[#2f90b3] to-[#82e0f2]" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </article>

          <article className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-(--text-primary) max-lg:text-center">Ueber uns</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary) max-lg:text-center">
                  Platzhaltertext: Team, Haltung und Zusammenarbeit. So entsteht die Verbindung aus technischer
                  Praezision und verlaesslicher Partnerschaft.
                </p>
              </div>
              <div className="relative min-h-72 w-full grow">
                <ColorPlaceholder title="Keller Galvanik AG" gradient="bg-linear-to-br from-[#125f93] via-[#3f89bf] to-[#8ad8f5]" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </article>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-6">
          <article className="flex p-px lg:col-span-4">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
              <div className="relative h-72">
                <ColorPlaceholder title="Verfahren Plus" gradient="bg-linear-to-r from-[#045f95] via-[#1d8bc4] to-[#5fd9ff]" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-(--text-secondary)">Schwerpunkte</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-(--text-primary)">Komplexe Teile sicher bearbeiten</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
                  Platzhaltertext: Fokus auf anspruchsvolle Geometrien, stabile Serienfaehigkeit und klare
                  Qualitaetskontrolle.
                </p>
              </div>
            </div>
          </article>

          <article className="flex p-px lg:col-span-2">
            <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl">
              <div className="relative h-72">
                <ColorPlaceholder title="Zusammenarbeit" gradient="bg-linear-to-br from-[#0e6172] via-[#2a99ae] to-[#78e4ef]" />
              </div>
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-(--text-secondary)">Partnerschaft</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-(--text-primary)">Direkte Abstimmung im Projekt</p>
                <p className="mt-2 max-w-lg text-sm/6 text-(--text-secondary)">
                  Platzhaltertext: Kurze Wege, schnelle Rueckmeldung und verbindliche Kommunikation von Anfrage bis
                  Auslieferung.
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
