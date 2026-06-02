import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const downloads = [
  // Technische Datenblätter
  { _id: 'dl-vernickeln-tb', _type: 'download', name: 'Chemisch Vernickeln — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 1 },
  { _id: 'dl-pulver-tb', _type: 'download', name: 'Pulverbeschichten — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 2 },
  { _id: 'dl-elektro-tb', _type: 'download', name: 'Elektropolieren — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 3 },
  { _id: 'dl-hartchrom-tb', _type: 'download', name: 'Hartchrom — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 4 },
  { _id: 'dl-verzinken-tb', _type: 'download', name: 'Galvanisch Verzinken — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 5 },
  { _id: 'dl-anodisieren-tb', _type: 'download', name: 'Anodisieren — Technisches Merkblatt', kategorie: 'datenblaetter', reihenfolge: 6 },

  // Zertifikate & Normen
  { _id: 'dl-iso-cert', _type: 'download', name: 'ISO 9001:2015 Zertifikat', kategorie: 'zertifikate', reihenfolge: 1 },
  { _id: 'dl-normen', _type: 'download', name: 'Normübersicht Beschichtungsverfahren', kategorie: 'zertifikate', reihenfolge: 2 },

  // Formulare
  { _id: 'dl-auftrag', _type: 'download', name: 'Auftragsformular Beschichtung', kategorie: 'formulare', reihenfolge: 1 },
  { _id: 'dl-auftrag-fill', _type: 'download', name: 'Auftragsformular Beschichtung (ausfüllbar)', kategorie: 'formulare', reihenfolge: 2 },
  { _id: 'dl-checkliste', _type: 'download', name: 'Checkliste Bauteilspezifikation', kategorie: 'formulare', reihenfolge: 3 },
]

console.log(`Importing ${downloads.length} downloads…`)
for (const doc of downloads) {
  await client.createOrReplace(doc)
  console.log(`  ✓ ${doc.name}`)
}
console.log('Done.')
