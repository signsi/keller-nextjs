'use client'

import { useState } from 'react'

const verfahrenOptions = [
  'Chemisch Vernickeln',
  'Galvanisch Verzinken',
  'Elektropolieren',
  'Hartchrom',
  'Chemisch Kupfern',
  'Anodisieren',
  'Anderes / Unbekannt',
]

interface InquiryFormProps {
  layout?: 'inline' | 'full'
  preselectedVerfahren?: string
}

export default function InquiryForm({ layout = 'inline', preselectedVerfahren = '' }: InquiryFormProps) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    verfahren: preselectedVerfahren,
    nachricht: '',
  })
  const [errors, setErrors] = useState<Partial<typeof values>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues(v => ({ ...v, [field]: e.target.value }))

  const validate = () => {
    const e: Partial<typeof values> = {}
    if (!values.name.trim()) e.name = 'Name erforderlich'
    if (!values.email.trim()) e.email = 'E-Mail erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Ungültige E-Mail-Adresse'
    if (!values.nachricht.trim()) e.nachricht = 'Nachricht erforderlich'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const inputBase = `w-full px-4 text-sm text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-[6px]
    border border-[var(--border-secondary)] placeholder:text-[var(--text-tertiary)] outline-none
    focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[#00a5ec]/20 transition-all duration-150`

  const inputClass = (field: keyof typeof values) =>
    `${inputBase} h-11 ${errors[field] ? 'ring-2 ring-red-400/50' : ''}`

  const labelClass = 'block text-xs font-medium text-[var(--text-secondary)] mb-1.5'
  const isFull = layout === 'full'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-[#e6f7fd] rounded-[8px]">
        <div className="w-10 h-10 rounded-full bg-[#00a5ec] flex items-center justify-center mb-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">Anfrage gesendet</h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1.5 max-w-xs">
          Wir melden uns innert 24 Stunden bei Ihnen. Danke für Ihr Interesse an Keller Galvanik.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">

        <div>
          <label htmlFor="inq-name" className={labelClass}>Name *</label>
          <input
            id="inq-name" type="text" autoComplete="name"
            placeholder="Max Muster"
            value={values.name} onChange={set('name')}
            className={inputClass('name')}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="inq-email" className={labelClass}>E-Mail *</label>
          <input
            id="inq-email" type="email" autoComplete="email"
            placeholder="max@firma.ch"
            value={values.email} onChange={set('email')}
            className={inputClass('email')}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="inq-verfahren" className={labelClass}>Verfahren</label>
          <select
            id="inq-verfahren"
            value={values.verfahren} onChange={set('verfahren')}
            className={`${inputClass('verfahren')} cursor-pointer`}
          >
            <option value="">Verfahren wählen (optional)</option>
            {verfahrenOptions.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="inq-nachricht" className={labelClass}>Nachricht *</label>
          <textarea
            id="inq-nachricht"
            rows={isFull ? 5 : 3}
            placeholder="Beschreiben Sie Ihr Bauteil und Ihre Anforderungen…"
            value={values.nachricht} onChange={set('nachricht')}
            className={`${inputBase} py-3 h-auto resize-none ${errors.nachricht ? 'ring-2 ring-red-400/50' : ''}`}
          />
          {errors.nachricht && <p className="text-xs text-red-500 mt-1">{errors.nachricht}</p>}
        </div>

        <div className="sm:col-span-2 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center h-10 px-6 text-sm font-semibold text-white
              bg-[#00a5ec] hover:bg-[#0091d4] active:bg-[#007ab8]
              rounded-[4px] transition-colors duration-150 cursor-pointer"
          >
            Anfrage senden
          </button>
          <p className="text-xs text-[var(--text-tertiary)]">* Pflichtfelder</p>
        </div>

      </div>
    </form>
  )
}
