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
  const [attachments, setAttachments] = useState<File[]>([])

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

  const handleAttachments = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []
    if (files.length === 0) return

    setAttachments(prev => {
      const merged = [...prev, ...files]
      const unique = new Map<string, File>()
      merged.forEach(file => {
        const key = `${file.name}-${file.size}-${file.lastModified}`
        unique.set(key, file)
      })
      return Array.from(unique.values())
    })

    // Reset value so selecting the same file again triggers onChange.
    e.target.value = ''
  }

  const inputBase = 'ui-field w-full h-(--field-height) px-4'

  const inputClass = (field: keyof typeof values) =>
    `${inputBase} ${errors[field] ? 'ui-field-error' : ''}`

  const labelClass = 'ui-label'
  const isFull = layout === 'full'

  if (submitted) {
    return (
      <div className="ui-form-card flex flex-col items-center justify-center px-6 py-10 text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent-primary)">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-base font-semibold text-(--text-primary)">Anfrage gesendet</h3>
        <p className="mt-1.5 max-w-xs text-sm text-(--text-secondary)">
          Wir melden uns innert 24 Stunden bei Ihnen. Danke für Ihr Interesse an Keller Galvanik.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="ui-form-card sm:p-7 lg:p-8">
      <div className="mb-5 sm:mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Kontaktformular</p>
        <p className="mt-1.5 text-sm leading-relaxed text-(--text-secondary)">
          Beschreiben Sie Ihr Bauteil. Wir melden uns mit einer klaren technischen Einschaetzung.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-(--form-gap) sm:grid-cols-2">

        <div className="space-y-1">
          <label htmlFor="inq-name" className={labelClass}>Name *</label>
          <input
            id="inq-name" type="text" autoComplete="name"
            placeholder="Max Muster"
            value={values.name} onChange={set('name')}
            className={inputClass('name')}
          />
          {errors.name && <p className="ui-error-text">{errors.name}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="inq-email" className={labelClass}>E-Mail *</label>
          <input
            id="inq-email" type="email" autoComplete="email"
            placeholder="max@firma.ch"
            value={values.email} onChange={set('email')}
            className={inputClass('email')}
          />
          {errors.email && <p className="ui-error-text">{errors.email}</p>}
        </div>

        <div className="space-y-1 sm:col-span-2">
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

        <div className="space-y-1 sm:col-span-2">
          <label htmlFor="inq-nachricht" className={labelClass}>Nachricht *</label>
          <textarea
            id="inq-nachricht"
            rows={isFull ? 5 : 3}
            placeholder="Beschreiben Sie Ihr Bauteil und Ihre Anforderungen…"
            value={values.nachricht} onChange={set('nachricht')}
            className={`${inputBase} h-auto min-h-(--textarea-min) resize-y py-3 ${errors.nachricht ? 'ui-field-error' : ''}`}
          />
          {errors.nachricht && <p className="ui-error-text">{errors.nachricht}</p>}
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label htmlFor="inq-files" className={labelClass}>Dateien anhängen (optional)</label>
          <input
            id="inq-files"
            type="file"
            multiple
            accept="image/*,.pdf,application/pdf"
            onChange={handleAttachments}
            className="ui-field h-auto cursor-pointer px-3 py-2 file:mr-3 file:rounded-full file:border-0 file:bg-(--bg-secondary) file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-(--text-primary) hover:file:bg-(--bg-tertiary)"
          />
          <p className="text-xs text-(--text-tertiary)">Erlaubt: Bilder und PDF-Dateien.</p>
          {attachments.length > 0 && (
            <>
              <p className="text-xs font-medium text-(--text-secondary)">{attachments.length} Datei(en) ausgewählt</p>
              <ul className="space-y-1 text-xs text-(--text-secondary)">
              {attachments.map(file => (
                <li key={`${file.name}-${file.size}`}>• {file.name}</li>
              ))}
              </ul>
            </>
          )}
        </div>

        <div className="sm:col-span-2 mt-1 flex items-center justify-between gap-4 border-t border-(--border-primary) pt-4">
          <button
            type="submit"
            className="ui-button ui-button-primary cursor-pointer"
          >
            Anfrage senden
          </button>
          <p className="text-xs text-(--text-tertiary)">* Pflichtfelder</p>
        </div>

      </div>
    </form>
  )
}
