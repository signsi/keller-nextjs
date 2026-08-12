/**
 * Seed script — imports all static content into Sanity.
 * Requires SANITY_API_TOKEN in .env.local (Editor or higher).
 * Run: node --env-file=.env.local scripts/seed.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ── Helpers ──────────────────────────────────────────────────────────────────

const slug = (s) => ({ _type: 'slug', current: s })
const ref = (id, key) => ({ _type: 'reference', _ref: id, _key: key ?? id })
const key = (i) => `key${i}`

// ── Homepage ──────────────────────────────────────────────────────────────────

const homepage = {
  _id: 'homepage',
  _type: 'homepage',
  hero: {
    kicker: 'Keller Galvanik · Oberflächentechnik',
    primaryHeading: 'Präzise Oberflächen',
    secondaryHeading: 'für Industrie und Technik.',
    subtext: 'Von galvanischen Beschichtungen bis zur Edelstahlveredelung — von der technischen Abklärung bis zur zuverlässigen Ausführung.',
    ctaPrimary: { label: 'Offerte anfragen', href: '/kontakt' },
    ctaSecondary: { label: 'Verfahren finden', href: '/verfahren' },
  },
  trustItems: [
    { _key: 'trust0', heading: 'Präzise Oberflächen.', body: 'Gleichmässige Schichtdicken und engste Toleranzen — auch für komplexe Geometrien.' },
    { _key: 'trust1', heading: 'Technische Beratung.', body: 'Von der Verfahrenswahl bis zur Spezifikation — wir begleiten Sie ohne Umwege.' },
    { _key: 'trust2', heading: 'Zuverlässige Prozesse.', body: 'Dokumentierte Qualitätssysteme und lückenlose Rückverfolgbarkeit für jede Charge.' },
  ],
  qualitaet: {
    kicker: 'Qualität & Zertifizierung',
    heading: 'Jeder Auftrag dokumentiert.',
    body: 'Unsere Prozesse sind nach ISO 9001 zertifiziert. Jede Charge wird dokumentiert, geprüft und rückverfolgbar archiviert.',
    stats: [
      { _key: 's0', value: '99%', label: 'Kundenzufriedenheit' },
      { _key: 's1', value: '40+', label: 'Jahre Erfahrung' },
      { _key: 's2', value: '< 24h', label: 'Angebotsfrist' },
    ],
    cta: { label: 'Qualitätssystem ansehen', href: '/qualitaet' },
  },
  faq: [
    { _key: 'faq0', question: 'Wie schnell erhalte ich ein Angebot?', answer: 'Standardanfragen beantworten wir innert 24 Stunden. Bei komplexen Anfragen mit Zeichnungen oder Sonderverfahren melden wir uns am nächsten Werktag mit einer ersten Einschätzung.' },
    { _key: 'faq1', question: 'Welche Mengen sind möglich?', answer: 'Von Einzelteilen bis zu Grossserien — ohne Mindestbestellmenge bei Erstaufträgen.' },
    { _key: 'faq2', question: 'Können mehrere Verfahren kombiniert werden?', answer: 'Ja. Typische Kombinationen sind Verzinken + Pulverbeschichten oder Chemisch Vernickeln + Elektropolieren — alles aus einer Hand.' },
    { _key: 'faq3', question: 'Muss ich eine Zeichnung einreichen?', answer: 'Nicht zwingend. Eine kurze Beschreibung des Bauteils, Werkstoffs und der Anforderung genügt für eine erste Einschätzung.' },
    { _key: 'faq4', question: 'Welche Zertifizierungen haben Sie?', answer: 'ISO 9001. Beschichtungen nach DIN EN ISO- und ASTM-Normen. Spezifische Zertifikate auf Anfrage.' },
  ],
  inquiry: {
    kicker: 'Offerte anfragen',
    heading: 'Schnell zum Angebot.',
    body: 'Beschreiben Sie Ihr Bauteil und Ihre Anforderungen — wir melden uns innert 24 Stunden.',
    bullets: ['Antwort innert 24 Stunden', 'Kostenlose technische Erstberatung', 'Kein Minimum bei Erstaufträgen'],
  },
}

// ── Verfahren ─────────────────────────────────────────────────────────────────

const verfahren = [
  {
    _id: 'verfahren-chemisch-vernickeln',
    _type: 'verfahren',
    name: 'Chemisch Vernickeln',
    slug: slug('chemisch-vernickeln'),
    kategorie: 'Korrosionsschutz',
    reihenfolge: 1,
    beschreibung: 'Gleichmässige Ni-P-Schicht unabhängig von der Bauteilgeometrie — ideal für Innenbohrungen und komplexe Konturen.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '5–50 µm' },
      { _key: 'm1', label: 'Phosphorgehalt', wert: '5–12 %' },
      { _key: 'm2', label: 'Härte (getempert)', wert: 'bis 1000 HV' },
      { _key: 'm3', label: 'Grundwerkstoffe', wert: 'Stahl, Aluminium, Kupfer, Kunststoff' },
      { _key: 'm4', label: 'Norm', wert: 'DIN EN ISO 4527' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Gleichmässige Schichtdicke', text: 'Ni-P wird auf jeder Geometrie gleichmässig abgeschieden — auch in Bohrungen und Hinterschneidungen.' },
      { _key: 'v1', titel: 'Hohe Korrosionsbeständigkeit', text: 'Exzellenter Schutz gegen viele Chemikalien, Säuren und Laugen.' },
      { _key: 'v2', titel: 'Einstellbare Härte', text: 'Durch Temperaturbehandlung ist die Härte von 500 bis 1000 HV einstellbar.' },
      { _key: 'v3', titel: 'Masshaltige Beschichtung', text: 'Kein Verziehen oder Massänderung der Bauteile durch das Verfahren.' },
      { _key: 'v4', titel: 'Verschleissbeständigkeit', text: 'Hohe Abriebfestigkeit für tribologisch beanspruchte Bauteile.' },
      { _key: 'v5', titel: 'Vielseitige Werkstoffe', text: 'Beschichtung auf Stahl, Aluminium, Kupfer und diversen Kunststoffen möglich.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Für welche Werkstoffe eignet sich Chemisch Vernickeln?', antwort: 'Chemisch Vernickeln ist auf Stahl, Aluminium, Kupfer, Messing und verschiedenen Kunststoffen möglich. Es eignet sich für praktisch alle leitfähigen und nicht leitfähigen Werkstoffe.' },
      { _key: 'f1', frage: 'Welche Schichtdicken sind möglich?', antwort: 'Standardmässig 10–25 µm. Auf Anfrage sind Schichten bis 50 µm möglich. Die Gleichmässigkeit beträgt ±1–2 µm.' },
      { _key: 'f2', frage: 'Wie wirkt sich Chemisch Vernickeln auf die Massgenauigkeit aus?', antwort: 'Da kein Strom fliesst, wird die Schicht absolut gleichmässig abgeschieden. Das Mass nimmt um die halbe Schichtdicke pro Seite zu — was bei der Konstruktion berücksichtigt werden sollte.' },
      { _key: 'f3', frage: 'Kann Chemisch Vernickeln gehärtet werden?', antwort: 'Ja. Durch Anlassen bei 250–350 °C steigt die Härte auf bis zu 1000 HV an — vergleichbar mit Hartchrom.' },
    ],
  },
  {
    _id: 'verfahren-galvanisch-verzinken',
    _type: 'verfahren',
    name: 'Galvanisch Verzinken',
    slug: slug('galvanisch-verzinken'),
    kategorie: 'Korrosionsschutz',
    reihenfolge: 2,
    beschreibung: 'Kathodischer Korrosionsschutz für Stahlbauteile mit präzise definierbarer Schichtdicke.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '5–25 µm (Standard 8–12 µm)' },
      { _key: 'm1', label: 'Passivierung', wert: 'Blau-, Gelb- oder Dickschichtchromatierung' },
      { _key: 'm2', label: 'Grundwerkstoffe', wert: 'Stahl, Gusseisen' },
      { _key: 'm3', label: 'Norm', wert: 'DIN EN ISO 4042' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Kathodischer Schutz', text: 'Zink schützt Stahl auch nach Verletzung der Schicht durch galvanischen Opferschutz.' },
      { _key: 'v1', titel: 'Wirtschaftlich', text: 'Kostengünstiges Verfahren besonders für Serien und Massenteile im Trommelverfahren.' },
      { _key: 'v2', titel: 'Farboptionen', text: 'Blau-, Gelb- oder Dickschichtpassivierung für unterschiedliche Korrosionsschutzklassen.' },
      { _key: 'v3', titel: 'Normkonform', text: 'Beschichtungen nach DIN EN ISO 4042 und Kundenvorgaben.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Was ist der Unterschied zwischen Blau- und Gelbchromatierung?', antwort: 'Blaue Chromatierung (transparent) bietet Korrosionsschutz bis ca. 72 Stunden im Salzsprühtest. Gelbchromatierung erhöht den Schutz auf ca. 200 Stunden und ist erkennbar an der gelblichen Färbung.' },
      { _key: 'f1', frage: 'Eignet sich galvanisches Verzinken für Aussenanwendungen?', antwort: 'Für dauerhaft dem Wetter ausgesetzte Teile empfehlen wir Feuerverzinken oder Pulverbeschichten. Galvanisches Verzinken eignet sich für geschützte Aussenanwendungen oder in Kombination mit einer weiteren Schutzschicht.' },
    ],
  },
  {
    _id: 'verfahren-pulverbeschichten',
    _type: 'verfahren',
    name: 'Pulverbeschichten',
    slug: slug('pulverbeschichten'),
    kategorie: 'Korrosionsschutz',
    reihenfolge: 3,
    beschreibung: 'Lösemittelfreie Beschichtung mit hoher Schichtdicke in einem Arbeitsgang — in nahezu allen RAL-Farben.',
    merkmale: [
      { _key: 'm0', label: 'Max. Grösse (L×B×T)', wert: '3500 × 1500 × 1800 mm' },
      { _key: 'm1', label: 'Grundwerkstoffe', wert: 'Aluminium, Stahl, Chromstahl' },
      { _key: 'm2', label: 'Schichtdicke', wert: '60–120 µm (Standard)' },
      { _key: 'm3', label: 'Farben', wert: 'Alle RAL-Farben, NCS, Glimmer' },
      { _key: 'm4', label: 'Oberflächen', wert: 'Glatt, strukturiert; hochglänzend bis matt' },
      { _key: 'm5', label: 'Norm', wert: 'DIN EN 13438' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Hervorragende Vorbehandlung', text: 'Gleichmässige und gründliche Vorbehandlung im Tauchverfahren für optimale Haftung und langlebigen Korrosionsschutz.' },
      { _key: 'v1', titel: 'Verschiedene Metalle', text: 'Geeignet für Aluminium, Stahl und Edelstahl — flexibel einsetzbar für unterschiedliche Anforderungen.' },
      { _key: 'v2', titel: 'Einzelteile bis Grossserien', text: 'Effiziente Beschichtung von Einzelstücken ebenso wie von Grossserien in gleichbleibend hoher Qualität.' },
      { _key: 'v3', titel: 'Grosses Farblager', text: 'Breite Auswahl an RAL-, NCS- und Spezialfarben für kurze Lieferzeiten und individuelle Gestaltung.' },
      { _key: 'v4', titel: 'Schnelle Durchlaufzeiten', text: 'Optimierte Prozesse ermöglichen kurze Bearbeitungs- und Lieferzeiten.' },
      { _key: 'v5', titel: 'Verzinken & Pulverbeschichten aus einer Hand', text: 'Verzinken und anschliessendes Pulverbeschichten erfolgen im selben Betrieb — für höchste Qualität und reibungslose Abläufe.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Für welche Metalle eignet sich Pulverbeschichten?', antwort: 'Pulverbeschichten eignet sich für Aluminium, Stahl und Chromstahl. Das Werkstück muss elektrisch leitfähig sein, da der Lack elektrostatisch aufgetragen wird.' },
      { _key: 'f1', frage: 'Welche Schichtdicken sind möglich?', antwort: 'Im Standardverfahren werden Schichtdicken von 60–120 µm erreicht. Auf Anfrage sind auch dickere Schichten für spezielle Anforderungen möglich.' },
      { _key: 'f2', frage: 'Kann ich eigene Farben oder Sonderfarben bestellen?', antwort: 'Ja. Neben unserem Farblager (alle RAL-Farben, NCS, Glimmerfarben) sind Sonderfarben nach Muster oder Farbcode auf Anfrage möglich.' },
      { _key: 'f3', frage: 'Wie lange dauert die Bearbeitung?', antwort: 'Standardaufträge werden innerhalb von 3–5 Werktagen bearbeitet. Expressaufträge sind nach Absprache möglich.' },
    ],
  },
  {
    _id: 'verfahren-elektropolieren',
    _type: 'verfahren',
    name: 'Elektropolieren',
    slug: slug('elektropolieren'),
    kategorie: 'Optik',
    reihenfolge: 4,
    beschreibung: 'Elektrochemisches Glätten von Edelstahloberflächen für höchste Hygieneanforderungen.',
    merkmale: [
      { _key: 'm0', label: 'Rauheit', wert: 'Ra < 0.2 µm (je nach Ausgangszustand)' },
      { _key: 'm1', label: 'Grundwerkstoffe', wert: 'Edelstahl, Chromstahl (1.4301, 1.4404 u.a.)' },
      { _key: 'm2', label: 'Materialabtrag', wert: '5–30 µm' },
      { _key: 'm3', label: 'Norm', wert: 'DIN EN ISO 15730' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Hygienegerechte Oberflächen', text: 'Beseitigung von Rauheitsspitzen reduziert Anhaftungen von Bakterien und Keimen — ideal für Lebensmittel- und Medizintechnik.' },
      { _key: 'v1', titel: 'Verbesserte Korrosionsbeständigkeit', text: 'Die Passivschicht auf Edelstahl wird gestärkt, die Oberfläche wird beständiger gegen aggressive Medien.' },
      { _key: 'v2', titel: 'Spiegelglanz', text: 'Optisch hochwertige, reflexionsfähige Oberflächen für dekorative Anwendungen.' },
      { _key: 'v3', titel: 'Entgratung', text: 'Mikrograte an Schnitt- und Bohrkanten werden gleichzeitig mit dem Poliervorgang entfernt.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Für welche Edelstahlsorten eignet sich Elektropolieren?', antwort: 'Elektropolieren eignet sich für alle gängigen austenitischen Edelstahlsorten (1.4301, 1.4307, 1.4404, 1.4571 u.a.). Martensitische oder ferritische Stähle sind bedingt geeignet.' },
      { _key: 'f1', frage: 'Welche Rauheit ist nach dem Elektropolieren erreichbar?', antwort: 'Ausgehend von mechanisch vorbehandelten Oberflächen (Ra ≤ 0.8 µm) ist eine Endrauheit von Ra < 0.2 µm erreichbar.' },
      { _key: 'f2', frage: 'Verändert Elektropolieren die Masse des Bauteils?', antwort: 'Ja, es wird Material abgetragen (5–30 µm). Dieser Abtrag muss bei masshaltig gefertigten Bauteilen konstruktiv berücksichtigt werden.' },
    ],
  },
  {
    _id: 'verfahren-glaenzend-vernickeln',
    _type: 'verfahren',
    name: 'Glänzend Vernickeln',
    slug: slug('glaenzend-vernickeln'),
    kategorie: 'Optik',
    reihenfolge: 5,
    beschreibung: 'Hochglänzende, dekorative Nickelschicht mit guter Korrosionsbeständigkeit.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '5–30 µm' },
      { _key: 'm1', label: 'Glanzgrad', wert: 'Hochglanz' },
      { _key: 'm2', label: 'Grundwerkstoffe', wert: 'Stahl, Kupfer, Messing, Zinkdruckguss' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Dekorativer Hochglanz', text: 'Spiegelartige Nickelschicht für hochwertige Optik auf Zier- und Designteilen.' },
      { _key: 'v1', titel: 'Korrosionsschutz', text: 'Gute Beständigkeit gegen Korrosion und Anlaufen in normalen Umgebungen.' },
      { _key: 'v2', titel: 'Basis für Verchromung', text: 'Glanznickel als Haftgrund und Vorschicht für Dekorchrom bietet optimale Grundlage.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Wie ist das Verhältnis von Glanznickel zu Dekorchrom?', antwort: 'Glanznickel wird häufig als Vorschicht unter einer dünnen Chromschicht (Dekorchrom 0.1–0.5 µm) eingesetzt. Das Nickel gibt den Glanz, das Chrom bietet die Anlaufbeständigkeit.' },
      { _key: 'f1', frage: 'Auf welchen Werkstoffen ist Glanzvernickeln möglich?', antwort: 'Auf Stahl, Kupfer, Messing und Zinkdruckguss. Aluminium muss vorbehandelt werden.' },
    ],
  },
  {
    _id: 'verfahren-hartchrom',
    _type: 'verfahren',
    name: 'Hartchrom',
    slug: slug('hartchrom'),
    kategorie: 'Verschleiss',
    reihenfolge: 6,
    beschreibung: 'Extrem harte Chromschicht mit hervorragender Verschleiss- und Korrosionsbeständigkeit.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '5–500 µm' },
      { _key: 'm1', label: 'Härte', wert: '850–1100 HV' },
      { _key: 'm2', label: 'Reibungskoeffizient', wert: 'Niedrig (0.12–0.16 trocken)' },
      { _key: 'm3', label: 'Grundwerkstoffe', wert: 'Stahl, Gusseisen, Kupferlegierungen' },
      { _key: 'm4', label: 'Norm', wert: 'DIN EN ISO 6158' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Höchste Härte', text: 'Mit 850–1100 HV gehört Hartchrom zu den härtesten galvanischen Schichten.' },
      { _key: 'v1', titel: 'Verschleissbeständigkeit', text: 'Idealer Schutz für Gleitflächen, Führungen und Zylinder unter hoher mechanischer Last.' },
      { _key: 'v2', titel: 'Niedrige Reibung', text: 'Chrombeschichtungen reduzieren Reibung und ermöglichen wartungsarme Betriebsbedingungen.' },
      { _key: 'v3', titel: 'Grosse Schichtdicken', text: 'Bis 500 µm möglich — für Verschleissreparaturen und Massaufbau.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Eignet sich Hartchrom für die Reparatur verschlissener Bauteile?', antwort: 'Ja. Durch das Aufchromieren können abgenutzte Oberflächen auf Mass gebracht werden. Nach dem Aufbau wird auf Endmass geschliffen.' },
      { _key: 'f1', frage: 'Wie unterscheidet sich Hartchrom von Dekorchrom?', antwort: 'Hartchrom hat Schichtdicken von 5–500 µm und dient dem Verschleissschutz. Dekorchrom ist nur 0.1–0.5 µm dünn und wird für Optik verwendet.' },
      { _key: 'f2', frage: 'Welche Temperaturen verträgt Hartchrom?', antwort: 'Hartchrom ist bis ca. 400 °C temperaturbeständig ohne wesentliche Härteverluste.' },
    ],
  },
  {
    _id: 'verfahren-chemisch-kupfern',
    _type: 'verfahren',
    name: 'Chemisch Kupfern',
    slug: slug('chemisch-kupfern'),
    kategorie: 'Werkstoff',
    reihenfolge: 7,
    beschreibung: 'Stromloses Aufbringen einer leitfähigen Kupferschicht auf Metall und Kunststoff.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '0.5–10 µm' },
      { _key: 'm1', label: 'Leitfähigkeit', wert: 'Sehr hoch' },
      { _key: 'm2', label: 'Grundwerkstoffe', wert: 'Stahl, Aluminium, Kunststoff (mit Aktivierung)' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Elektrische Leitfähigkeit', text: 'Kupfer ist ein ausgezeichneter elektrischer Leiter — ideal für Kontaktflächen und Leiterbahnen.' },
      { _key: 'v1', titel: 'Haftgrund', text: 'Als Grundschicht vor Vernickeln oder Vergolden verbessert Kupfer die Haftung und Duktilität.' },
      { _key: 'v2', titel: 'Auf Kunststoff', text: 'Mit Aktivierung auch auf nicht leitfähigen Werkstoffen möglich — Basis für Metallisierung.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Kann Chemisch Kupfern auf Kunststoff aufgebracht werden?', antwort: 'Ja, nach entsprechender chemischer Aktivierung der Oberfläche. Dies ist die Basis für die weitere galvanische Beschichtung von Kunststoffteilen.' },
      { _key: 'f1', frage: 'Wofür wird Chemisch Kupfern eingesetzt?', antwort: 'Hauptsächlich als Haftgrundschicht, für EMV-Abschirmung, Leiterbahnen und zur Verbesserung der Wärmeleitfähigkeit.' },
    ],
  },
  {
    _id: 'verfahren-anodisieren',
    _type: 'verfahren',
    name: 'Anodisieren',
    slug: slug('anodisieren'),
    kategorie: 'Werkstoff',
    reihenfolge: 8,
    beschreibung: 'Elektrolytische Oxidation von Aluminium für Korrosionsschutz, Härte und dekorative Optik.',
    merkmale: [
      { _key: 'm0', label: 'Schichtdicke', wert: '5–25 µm (Typ II), bis 50 µm (Hartanodisieren)' },
      { _key: 'm1', label: 'Härte (Hartanodisieren)', wert: 'bis 400 HV' },
      { _key: 'm2', label: 'Grundwerkstoffe', wert: 'Aluminium und Aluminiumlegierungen' },
      { _key: 'm3', label: 'Norm', wert: 'DIN EN ISO 7599' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Integraler Bestandteil', text: 'Die Oxidschicht wächst aus dem Aluminium heraus und ist damit integraler Bestandteil des Bauteils.' },
      { _key: 'v1', titel: 'Korrosionsschutz', text: 'Hervorragender Schutz gegen atmosphärische Korrosion und Chemikalien.' },
      { _key: 'v2', titel: 'Einfärbbar', text: 'Anodisierte Oberflächen können in verschiedenen Farben eingefärbt werden.' },
      { _key: 'v3', titel: 'Elektrisch isolierend', text: 'Die Aluminiumoxidschicht ist ein guter elektrischer Isolator.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Was ist der Unterschied zwischen Anodisieren und Hartanodisieren?', antwort: 'Standard-Anodisieren (Typ II) erzeugt Schichten bis 25 µm für Korrosionsschutz und Optik. Hartanodisieren (Typ III) erzeugt dichtere, härtere Schichten bis 50 µm für tribologische Anwendungen.' },
      { _key: 'f1', frage: 'Auf welchen Aluminiumlegierungen funktioniert Anodisieren?', antwort: 'Die meisten Aluminiumlegierungen sind anodisierbar. Legierungen mit hohem Kupfer- oder Siliziumgehalt (z.B. Gusslegierungen) können eingeschränkt sein.' },
      { _key: 'f2', frage: 'Kann anodisiertes Aluminium eingefärbt werden?', antwort: 'Ja. Die poröse Struktur der frischen Oxidschicht nimmt Farbstoffe auf, bevor sie versiegelt wird. Standardfarben: schwarz, gold, bronze, rot.' },
    ],
  },
  {
    _id: 'verfahren-verzinken-gelbchromatieren',
    _type: 'verfahren',
    name: 'Verzinken + Gelbchromatieren',
    slug: slug('verzinken-gelbchromatieren'),
    kategorie: 'Korrosionsschutz',
    reihenfolge: 9,
    beschreibung: 'Kombination aus kathodischem Zinkschutz und Chromatierpassivierung für maximalen Korrosionsschutz.',
    merkmale: [
      { _key: 'm0', label: 'Zinkschicht', wert: '8–15 µm' },
      { _key: 'm1', label: 'Passivierung', wert: 'Gelbchromatierung' },
      { _key: 'm2', label: 'Korrosionsschutz', wert: '> 200 h Salzsprühtest (nach DIN EN ISO 9227)' },
      { _key: 'm3', label: 'Grundwerkstoffe', wert: 'Stahl, Gusseisen' },
    ],
    vorteile: [
      { _key: 'v0', titel: 'Maximaler Korrosionsschutz', text: 'Kombination aus Opferschutz (Zink) und passivierender Chromschicht schützt über 200 h im Salzsprühtest.' },
      { _key: 'v1', titel: 'Für Verbindungselemente', text: 'Besonders wirtschaftlich für Schrauben, Muttern und Stanzteile im Trommelverfahren.' },
      { _key: 'v2', titel: 'Erkennbare Oberfläche', text: 'Die charakteristisch gelblich-irisierende Oberfläche ermöglicht einfache Sichtkontrolle.' },
    ],
    faq: [
      { _key: 'f0', frage: 'Was ist der Unterschied zur blauen Verzinkung?', antwort: 'Blaue Chromatierung bietet ca. 72 h Schutz im Salzsprühtest. Gelbchromatierung erreicht über 200 h dank dickerer Chromatschicht.' },
      { _key: 'f1', frage: 'Ist Gelbchromatierung RoHS-konform?', antwort: 'Klassische Gelbchromatierung enthält Chrom(VI) und ist nicht RoHS-konform. Als Alternative bieten wir Dickschicht-Trivalent-Passivierung an, die RoHS-konform ist.' },
    ],
  },
]

// ── Branchen ──────────────────────────────────────────────────────────────────

const branchenData = [
  { slug: 'maschinenbau', name: 'Maschinenbau', beschreibung: 'Präzisionsbeschichtungen für Antriebs- und Führungselemente.', lead: 'Im Maschinenbau stehen Verschleissbeständigkeit, Massgenauigkeit und Korrosionsschutz im Vordergrund. Wir beschichten Führungsschienen, Wellen, Zylinder und Präzisionsbauteile nach engsten Toleranzen.', verfahren: ['chemisch-vernickeln', 'hartchrom', 'galvanisch-verzinken', 'pulverbeschichten'], reihenfolge: 1 },
  { slug: 'medizinalindustrie', name: 'Medizinalindustrie', beschreibung: 'Hygienegerechte Oberflächen nach den strengsten Normen.', lead: 'Medizintechnische Bauteile erfordern höchste Präzision, absolute Reinheit und normkonforme Oberflächen. Wir liefern dokumentierte Beschichtungen für Instrumente, Implantate und Gerätegehäuse.', verfahren: ['elektropolieren', 'chemisch-vernickeln', 'anodisieren'], reihenfolge: 2 },
  { slug: 'pharma', name: 'Pharma', beschreibung: 'Korrosionsbeständige, reinraumgeeignete Oberflächen.', lead: 'Pharmabetriebe stellen besondere Anforderungen an chemische Beständigkeit, Reinigbarkeit und Biokompatibilität. Elektropolierte Edelstahloberflächen und chemisch vernickelte Bauteile sind bewährte Lösungen.', verfahren: ['elektropolieren', 'chemisch-vernickeln', 'anodisieren'], reihenfolge: 3 },
  { slug: 'elektronik', name: 'Elektronik', beschreibung: 'Leitfähige und korrosionsbeständige Beschichtungen für Elektronikkomponenten.', lead: 'In der Elektronik sind elektrische Leitfähigkeit, Lötbarkeit und Korrosionsschutz entscheidend. Chemisches Kupfern und Vernickeln schaffen die Basis für zuverlässige elektrische Verbindungen.', verfahren: ['chemisch-kupfern', 'chemisch-vernickeln', 'galvanisch-verzinken'], reihenfolge: 4 },
  { slug: 'fahrzeugbau', name: 'Fahrzeugbau', beschreibung: 'Funktionelle Beschichtungen für Antrieb, Fahrwerk und Karosserie.', lead: 'Fahrzeugkomponenten sind dauerhaft Korrosion, Abrieb und mechanischer Belastung ausgesetzt. Wir bieten galvanischen Korrosionsschutz und Hartchrom für hochbelastete Bauteile.', verfahren: ['galvanisch-verzinken', 'hartchrom', 'pulverbeschichten', 'verzinken-gelbchromatieren'], reihenfolge: 5 },
  { slug: 'metallbau', name: 'Metallbau', beschreibung: 'Witterungsbeständige Beschichtungen für Stahlkonstruktionen und Fassadenelemente.', lead: 'Metallbaukonstruktionen sind dauerhaft Witterungseinflüssen ausgesetzt. Pulverbeschichten und galvanisches Verzinken schützen zuverlässig vor Korrosion und geben der Oberfläche eine ansprechende Optik.', verfahren: ['pulverbeschichten', 'galvanisch-verzinken', 'verzinken-gelbchromatieren', 'anodisieren'], reihenfolge: 6 },
  { slug: 'mechanik', name: 'Mechanik & Feinmechanik', beschreibung: 'Gleichmässige Schichten für präzise Passungen und komplexe Geometrien.', lead: 'Feinmechanische Bauteile erfordern gleichmässige Schichten auch in Bohrungen und Hinterschneidungen. Chemisch Vernickeln ist die erste Wahl für Präzisionsteile mit engen Toleranzen.', verfahren: ['chemisch-vernickeln', 'hartchrom', 'galvanisch-verzinken'], reihenfolge: 7 },
  { slug: 'verbindungstechnik', name: 'Verbindungstechnik', beschreibung: 'Korrosionsschutz für Schrauben, Muttern und Verbindungselemente.', lead: 'Verbindungselemente werden in grossen Stückzahlen wirtschaftlich im Trommelverfahren beschichtet. Galvanisches Verzinken mit Chromatierung bietet zuverlässigen Korrosionsschutz bei kurzen Durchlaufzeiten.', verfahren: ['galvanisch-verzinken', 'verzinken-gelbchromatieren', 'chemisch-vernickeln'], reihenfolge: 8 },
  { slug: 'haushaltsgeraete', name: 'Haushaltsgeräte', beschreibung: 'Dekorative und schützende Oberflächen für Konsumgüter.', lead: 'Haushaltsgeräte verbinden Funktionalität mit Ästhetik. Pulverbeschichtungen in allen RAL-Farben und glänzende Nickeloberflächen erfüllen die hohen optischen und mechanischen Anforderungen.', verfahren: ['pulverbeschichten', 'glaenzend-vernickeln', 'anodisieren'], reihenfolge: 9 },
  { slug: 'baubranche', name: 'Baubranche', beschreibung: 'Langlebige Oberflächen für Bauteile und Fassadenelemente.', lead: 'Bauteile im Aussenbereich müssen extremen Witterungsbedingungen standhalten. Pulverbeschichtungen und Anodisieren schützen Aluminium- und Stahlteile dauerhaft und zuverlässig.', verfahren: ['pulverbeschichten', 'anodisieren', 'galvanisch-verzinken'], reihenfolge: 10 },
  { slug: 'ladenbau', name: 'Ladenbau & POS', beschreibung: 'Hochwertige Oberflächen für Einrichtungen und Displays.', lead: 'Im Ladenbau zählen Optik, Haptik und Langlebigkeit. Wir veredeln Regalsysteme, Displays und Einrichtungselemente mit Pulverbeschichtungen in Wunschfarben oder glänzenden Metalloberflächen.', verfahren: ['pulverbeschichten', 'glaenzend-vernickeln', 'anodisieren'], reihenfolge: 11 },
  { slug: 'beleuchtungstechnik', name: 'Beleuchtungstechnik', beschreibung: 'Reflektierende und dekorative Oberflächen für Leuchten.', lead: 'Leuchtengehäuse und Reflektoren brauchen präzise Oberflächen — für optimale Lichtausbeute und dauerhaften Glanz. Anodisieren und Vernickeln sind bewährte Verfahren in dieser Branche.', verfahren: ['anodisieren', 'glaenzend-vernickeln', 'pulverbeschichten'], reihenfolge: 12 },
  { slug: 'restaurationen', name: 'Restaurationen', beschreibung: 'Originalgetreue Oberflächen für historische Objekte und Oldtimer.', lead: 'Bei Restaurierungen zählen Authentizität und handwerkliche Qualität. Wir verchromieren, vernickeln und pulverbeschichten historische Teile nach Originalvorgaben — für Oldtimer, Antiquitäten und Objekte.', verfahren: ['glaenzend-vernickeln', 'pulverbeschichten', 'hartchrom'], reihenfolge: 13 },
  { slug: 'aviatik', name: 'Aviatik', beschreibung: 'Leichtbau-konforme Oberflächen für höchste Belastungen.', lead: 'Luftfahrtteile erfordern maximale Zuverlässigkeit bei minimalem Gewicht. Chemisch Vernickeln und Anodisieren bieten hervorragenden Schutz bei gleichzeitig geringem Gewichtszuwachs.', verfahren: ['chemisch-vernickeln', 'anodisieren', 'hartchrom'], reihenfolge: 14 },
]

const branchen = branchenData.map(b => ({
  _id: `branche-${b.slug}`,
  _type: 'branche',
  name: b.name,
  slug: slug(b.slug),
  beschreibung: b.beschreibung,
  lead: b.lead,
  reihenfolge: b.reihenfolge,
  verfahren: b.verfahren.map((v, i) => ref(`verfahren-${v}`, `vref${i}`)),
}))

// ── Site Settings ─────────────────────────────────────────────────────────────

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  firmenname: 'Keller Galvanik AG',
  strasse: 'Musterstrasse 1',
  plzOrt: '0000 Musterort',
  telefon: '+41 00 000 00 00',
  email: 'info@keller-galvanik.ch',
  ansprechperson: {
    name: 'Peter Keller',
    titel: 'Geschäftsführer',
    telefon: '+41 00 000 00 00',
  },
  oeffnungszeiten: [
    { _key: 'oz0', tag: 'Mo – Do', zeit: '07:30 – 12:00 / 13:00 – 17:00' },
    { _key: 'oz1', tag: 'Fr', zeit: '07:30 – 12:00 / 13:00 – 16:00' },
    { _key: 'oz2', tag: 'Sa – So', zeit: 'Geschlossen' },
  ],
}

// ── Qualität ──────────────────────────────────────────────────────────────────

const qualitaet = {
  _id: 'qualitaet',
  _type: 'qualitaet',
  hero: {
    kicker: 'Qualität & Zertifizierung',
    heading: 'Qualität, die man sieht. Und messen kann.',
    intro: 'Jeder Auftrag durchläuft ein dokumentiertes Qualitätssystem nach ISO 9001. Prüfberichte, Schichtdickenprotokolle und Materialzertifikate werden auf Wunsch mitgeliefert — lückenlose Rückverfolgbarkeit inklusive.',
  },
  stats: [
    { _key: 'st0', value: '99%', label: 'Kundenzufriedenheit' },
    { _key: 'st1', value: '40+', label: 'Jahre Erfahrung' },
    { _key: 'st2', value: '< 24h', label: 'Angebotsfrist' },
    { _key: 'st3', value: '100%', label: 'Rückverfolgbar' },
  ],
  prozess: {
    kicker: 'Unser Prozess',
    heading: 'Von Eingang bis Ausgang kontrolliert.',
    schritte: [
      { _key: 'p0', nr: '01', title: 'Wareneingangsprüfung', body: 'Jedes Bauteil wird bei Eingang auf Vollständigkeit, Masskonformität und Oberflächenzustand geprüft. Abweichungen werden vor der Produktion mit dem Kunden geklärt.' },
      { _key: 'p1', nr: '02', title: 'Prozessüberwachung', body: 'Badkonzentrationen, Temperaturen und Prozesszeiten werden laufend überwacht und dokumentiert. Abweichungen vom Sollwert lösen sofortige Korrekturen aus.' },
      { _key: 'p2', nr: '03', title: 'Schichtdickenmessung', body: 'Nach der Beschichtung wird die Schichtdicke an repräsentativen Messpunkten geprüft. Die Ergebnisse werden im Prüfbericht festgehalten.' },
      { _key: 'p3', nr: '04', title: 'Warenausgangskontrolle', body: 'Sichtprüfung und Massprüfung jeder Lieferung vor dem Versand. Auf Wunsch erhalten Sie Prüfprotokolle und Materialzertifikate.' },
    ],
  },
  normen: {
    kicker: 'Normen',
    heading: 'Anerkannte Standards.',
    body: 'Unsere Beschichtungen werden nach international anerkannten Normen ausgeführt. Zertifikate auf Anfrage.',
    items: [
      { _key: 'n0', code: 'ISO 9001:2015', beschreibung: 'Qualitätsmanagementsystem' },
      { _key: 'n1', code: 'DIN EN ISO 4527', beschreibung: 'Chemisch Vernickeln' },
      { _key: 'n2', code: 'DIN EN ISO 4042', beschreibung: 'Galvanisches Verzinken' },
      { _key: 'n3', code: 'DIN EN ISO 6158', beschreibung: 'Hartchrom' },
      { _key: 'n4', code: 'DIN EN ISO 7599', beschreibung: 'Anodisieren' },
      { _key: 'n5', code: 'DIN EN ISO 15730', beschreibung: 'Elektropolieren' },
    ],
  },
  cta: {
    heading: 'Zertifikate oder Prüfberichte benötigt?',
    subline: 'Wir stellen Ihnen alle erforderlichen Unterlagen für Ihre Freigabeprozesse zur Verfügung.',
  },
}

// ── Über uns ──────────────────────────────────────────────────────────────────

const ueberUns = {
  _id: 'ueberUns',
  _type: 'ueberUns',
  hero: {
    kicker: 'Über uns',
    heading: 'Seit über 40 Jahren. Keller Galvanik AG.',
    body: 'Die Keller Galvanik AG wurde in den 1980er-Jahren gegründet und hat sich seither zu einem der erfahrensten Galvanikbetriebe der Deutschschweiz entwickelt. Vom Familienbetrieb zur spezialisierten Beschichtungsanlage — mit über 40 Jahren Praxiserfahrung.\n\nWir bringen eine breite Erfahrung aus verschiedensten Bereichen mit — von der Feinmechanik über die Medizintechnik bis hin zur Elektro- und Maschinenindustrie. Diese Vielseitigkeit erlaubt es uns, flexibel auf unterschiedliche Anforderungen einzugehen.\n\nDank unserem eingespielten Team und modernster Technik können wir auch anspruchsvolle Oberflächenbearbeitungen effizient und zuverlässig umsetzen.',
  },
  werte: [
    { _key: 'w0', title: 'Präzision', body: 'Enge Toleranzen, dokumentierte Prozesse und lückenlose Rückverfolgbarkeit — für Bauteile, bei denen es auf jedes Mikrometer ankommt.' },
    { _key: 'w1', title: 'Zuverlässigkeit', body: 'Verbindliche Liefertermine und transparente Kommunikation. Wenn wir etwas zusagen, halten wir es.' },
    { _key: 'w2', title: 'Partnerschaft', body: 'Wir beraten ehrlich — auch wenn das bedeutet, ein anderes Verfahren zu empfehlen. Ihr Bauteil steht im Mittelpunkt.' },
    { _key: 'w3', title: 'Nachhaltigkeit', body: 'Moderne Aufbereitungsanlagen, geschlossene Kreisläufe und laufende Investitionen in umweltschonende Prozesse.' },
  ],
  cta: {
    heading: 'Lernen Sie uns kennen.',
    subline: 'Rufen Sie an oder schreiben Sie uns — wir freuen uns auf Ihre Anfrage.',
  },
}

// ── Seiteninhalte ─────────────────────────────────────────────────────────────

const seitenInhalte = {
  _id: 'seitenInhalte',
  _type: 'seitenInhalte',
  verfahren: {
    kicker: 'Oberflächentechnik',
    heading: 'Das richtige Verfahren für Ihr Bauteil.',
    intro: 'Galvanische und chemische Beschichtungsverfahren für Korrosionsschutz, Verschleissbeständigkeit, Optik und Werkstoffeigenschaften.',
    cta: 'Unsicher welches Verfahren?',
    ctaSubline: 'Unsere Techniker beraten Sie kostenlos — von der Verfahrenswahl bis zur Spezifikation.',
  },
  branchen: {
    kicker: 'Branchen',
    heading: 'Breite Erfahrung aus verschiedensten Bereichen.',
    intro: 'Wir bringen eine breite Erfahrung aus verschiedensten Bereichen mit — von der Feinmechanik über die Medizintechnik bis hin zur Elektro- und Maschinenindustrie.',
    cta: 'Ihre Branche dabei?',
    ctaSubline: 'Senden Sie uns Ihre Anforderungen — wir finden das passende Verfahren für Ihr Bauteil.',
  },
}

// ── Import ────────────────────────────────────────────────────────────────────

const allDocuments = [homepage, siteSettings, qualitaet, ueberUns, seitenInhalte, ...verfahren, ...branchen]

console.log(`Importing ${allDocuments.length} documents into Sanity…`)

let ok = 0
let fail = 0

for (const doc of allDocuments) {
  try {
    await client.createOrReplace(doc)
    console.log(`  ✓ ${doc._type}: ${doc._id}`)
    ok++
  } catch (err) {
    console.error(`  ✗ ${doc._id}: ${err.message}`)
    fail++
  }
}

console.log(`\nDone. ${ok} imported, ${fail} failed.`)
