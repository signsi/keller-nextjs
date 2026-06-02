export type BrancheData = {
  slug: string
  name: string
  imgSrc: string
  beschreibung: string
  lead: string
  verfahren: string[]
}

export const branchen: BrancheData[] = [
  {
    slug: 'maschinenbau',
    name: 'Maschinenbau',
    imgSrc: '/branchen/maschinen-apparatebau.webp',
    beschreibung: 'Präzisionsbeschichtungen für Antriebs- und Führungselemente.',
    lead: 'Im Maschinenbau stehen Verschleissbeständigkeit, Massgenauigkeit und Korrosionsschutz im Vordergrund. Wir beschichten Führungsschienen, Wellen, Zylinder und Präzisionsbauteile nach engsten Toleranzen.',
    verfahren: ['chemisch-vernickeln', 'hartchrom', 'galvanisch-verzinken', 'pulverbeschichten'],
  },
  {
    slug: 'medizinalindustrie',
    name: 'Medizinalindustrie',
    imgSrc: '/branchen/medizinalindustrie.webp',
    beschreibung: 'Hygienegerechte Oberflächen nach den strengsten Normen.',
    lead: 'Medizintechnische Bauteile erfordern höchste Präzision, absolute Reinheit und normkonforme Oberflächen. Wir liefern dokumentierte Beschichtungen für Instrumente, Implantate und Gerätegehäuse.',
    verfahren: ['elektropolieren', 'chemisch-vernickeln', 'anodisieren'],
  },
  {
    slug: 'pharma',
    name: 'Pharma',
    imgSrc: '/branchen/pharma.webp',
    beschreibung: 'Korrosionsbeständige, reinraumgeeignete Oberflächen.',
    lead: 'Pharmabetriebe stellen besondere Anforderungen an chemische Beständigkeit, Reinigbarkeit und Biokompatibilität. Elektropolierte Edelstahloberflächen und chemisch vernickelte Bauteile sind bewährte Lösungen.',
    verfahren: ['elektropolieren', 'chemisch-vernickeln', 'anodisieren'],
  },
  {
    slug: 'elektronik',
    name: 'Elektronik',
    imgSrc: '/branchen/elektrotechnik.webp',
    beschreibung: 'Leitfähige und korrosionsbeständige Beschichtungen für Elektronikkomponenten.',
    lead: 'In der Elektronik sind elektrische Leitfähigkeit, Lötbarkeit und Korrosionsschutz entscheidend. Chemisches Kupfern und Vernickeln schaffen die Basis für zuverlässige elektrische Verbindungen.',
    verfahren: ['chemisch-kupfern', 'chemisch-vernickeln', 'galvanisch-verzinken'],
  },
  {
    slug: 'fahrzeugbau',
    name: 'Fahrzeugbau',
    imgSrc: '/branchen/fahrzeugbau.webp',
    beschreibung: 'Funktionelle Beschichtungen für Antrieb, Fahrwerk und Karosserie.',
    lead: 'Fahrzeugkomponenten sind dauerhaft Korrosion, Abrieb und mechanischer Belastung ausgesetzt. Wir bieten galvanischen Korrosionsschutz und Hartchrom für hochbelastete Bauteile.',
    verfahren: ['galvanisch-verzinken', 'hartchrom', 'pulverbeschichten', 'verzinken-gelbchromatieren'],
  },
  {
    slug: 'metallbau',
    name: 'Metallbau',
    imgSrc: '/branchen/metallbau.webp',
    beschreibung: 'Witterungsbeständige Beschichtungen für Stahlkonstruktionen und Fassadenelemente.',
    lead: 'Metallbaukonstruktionen sind dauerhaft Witterungseinflüssen ausgesetzt. Pulverbeschichten und galvanisches Verzinken schützen zuverlässig vor Korrosion und geben der Oberfläche eine ansprechende Optik.',
    verfahren: ['pulverbeschichten', 'galvanisch-verzinken', 'verzinken-gelbchromatieren', 'anodisieren'],
  },
  {
    slug: 'mechanik',
    name: 'Mechanik & Feinmechanik',
    imgSrc: '/branchen/mechanik.webp',
    beschreibung: 'Gleichmässige Schichten für präzise Passungen und komplexe Geometrien.',
    lead: 'Feinmechanische Bauteile erfordern gleichmässige Schichten auch in Bohrungen und Hinterschneidungen. Chemisch Vernickeln ist die erste Wahl für Präzisionsteile mit engen Toleranzen.',
    verfahren: ['chemisch-vernickeln', 'hartchrom', 'galvanisch-verzinken'],
  },
  {
    slug: 'verbindungstechnik',
    name: 'Verbindungstechnik',
    imgSrc: '/branchen/verbindungstechnik.webp',
    beschreibung: 'Korrosionsschutz für Schrauben, Muttern und Verbindungselemente.',
    lead: 'Verbindungselemente werden in grossen Stückzahlen wirtschaftlich im Trommelverfahren beschichtet. Galvanisches Verzinken mit Chromatierung bietet zuverlässigen Korrosionsschutz bei kurzen Durchlaufzeiten.',
    verfahren: ['galvanisch-verzinken', 'verzinken-gelbchromatieren', 'chemisch-vernickeln'],
  },
  {
    slug: 'haushaltsgeraete',
    name: 'Haushaltsgeräte',
    imgSrc: '/branchen/haushaltsgeraete.webp',
    beschreibung: 'Dekorative und schützende Oberflächen für Konsumgüter.',
    lead: 'Haushaltsgeräte verbinden Funktionalität mit Ästhetik. Pulverbeschichtungen in allen RAL-Farben und glänzende Nickeloberflächen erfüllen die hohen optischen und mechanischen Anforderungen.',
    verfahren: ['pulverbeschichten', 'glaenzend-vernickeln', 'anodisieren'],
  },
  {
    slug: 'baubranche',
    name: 'Baubranche',
    imgSrc: '/branchen/baubranche.webp',
    beschreibung: 'Langlebige Oberflächen für Bauteile und Fassadenelemente.',
    lead: 'Bauteile im Aussenbereich müssen extremen Witterungsbedingungen standhalten. Pulverbeschichtungen und Anodisieren schützen Aluminium- und Stahlteile dauerhaft und zuverlässig.',
    verfahren: ['pulverbeschichten', 'anodisieren', 'galvanisch-verzinken'],
  },
  {
    slug: 'ladenbau',
    name: 'Ladenbau & POS',
    imgSrc: '/branchen/ladenpau-pos.webp',
    beschreibung: 'Hochwertige Oberflächen für Einrichtungen und Displays.',
    lead: 'Im Ladenbau zählen Optik, Haptik und Langlebigkeit. Wir veredeln Regalsysteme, Displays und Einrichtungselemente mit Pulverbeschichtungen in Wunschfarben oder glänzenden Metalloberflächen.',
    verfahren: ['pulverbeschichten', 'glaenzend-vernickeln', 'anodisieren'],
  },
  {
    slug: 'beleuchtungstechnik',
    name: 'Beleuchtungstechnik',
    imgSrc: '/branchen/beleuchtungstechnik.webp',
    beschreibung: 'Reflektierende und dekorative Oberflächen für Leuchten.',
    lead: 'Leuchtengehäuse und Reflektoren brauchen präzise Oberflächen — für optimale Lichtausbeute und dauerhaften Glanz. Anodisieren und Vernickeln sind bewährte Verfahren in dieser Branche.',
    verfahren: ['anodisieren', 'glaenzend-vernickeln', 'pulverbeschichten'],
  },
  {
    slug: 'restaurationen',
    name: 'Restaurationen',
    imgSrc: '/branchen/restaurationen.webp',
    beschreibung: 'Originalgetreue Oberflächen für historische Objekte und Oldtimer.',
    lead: 'Bei Restaurierungen zählen Authentizität und handwerkliche Qualität. Wir verchromieren, vernickeln und pulverbeschichten historische Teile nach Originalvorgaben — für Oldtimer, Antiquitäten und Objekte.',
    verfahren: ['glaenzend-vernickeln', 'pulverbeschichten', 'hartchrom'],
  },
  {
    slug: 'aviatik',
    name: 'Aviatik',
    imgSrc: '/branchen/aviatik.webp',
    beschreibung: 'Leichtbau-konforme Oberflächen für höchste Belastungen.',
    lead: 'Luftfahrtteile erfordern maximale Zuverlässigkeit bei minimalem Gewicht. Chemisch Vernickeln und Anodisieren bieten hervorragenden Schutz bei gleichzeitig geringem Gewichtszuwachs.',
    verfahren: ['chemisch-vernickeln', 'anodisieren', 'hartchrom'],
  },
]

export function getBranche(slug: string) {
  return branchen.find(b => b.slug === slug)
}
