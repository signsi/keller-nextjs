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
  contactName?: string
}

export default function InquiryForm({
  layout = 'inline',
  preselectedVerfahren = '',
  contactName = 'Peter Keller',
}: InquiryFormProps) {
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

  const inputBase = 'w-full h-(--field-height) rounded-(--radius-lg) border border-white/15 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35 transition-colors duration-150 hover:border-white/25 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/25'

  const inputClass = (field: keyof typeof values) =>
    `${inputBase} ${errors[field] ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/25' : ''}`

  const labelClass = 'mb-1.5 block text-xs font-semibold text-white/60'
  const isFull = layout === 'full'

  if (submitted) {
    return (
      <div className="rounded-[22px] bg-brand-800 px-7 py-10 sm:px-10 sm:py-12">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold tracking-[-0.01em] text-white">Anfrage gesendet.</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
          Danke für Ihr Interesse an Keller Galvanik. {contactName} meldet sich persönlich innert 24 Stunden bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[22px] bg-brand-800 px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
    >

      <div className="space-y-7 sm:space-y-8">

        <div>
          <p className="mb-4 flex items-baseline gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
            <span className="text-base font-black tabular-nums text-white/70">01</span>
            Ihre Angaben
          </p>
          <div className="grid grid-cols-1 gap-(--form-gap) sm:grid-cols-2">
            <div>
              <label htmlFor="inq-name" className={labelClass}>Name *</label>
              <input
                id="inq-name" type="text" autoComplete="name"
                placeholder="Max Muster"
                value={values.name} onChange={set('name')}
                className={inputClass('name')}
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="inq-email" className={labelClass}>E-Mail *</label>
              <input
                id="inq-email" type="email" autoComplete="email"
                placeholder="max@firma.ch"
                value={values.email} onChange={set('email')}
                className={inputClass('email')}
              />
              {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 flex items-baseline gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">
            <span className="text-base font-black tabular-nums text-white/70">02</span>
            Ihr Anliegen
          </p>
          <div className="space-y-(--form-gap)">
            <div>
              <label htmlFor="inq-verfahren" className={labelClass}>Verfahren</label>
              <select
                id="inq-verfahren"
                value={values.verfahren} onChange={set('verfahren')}
                className={`${inputClass('verfahren')} cursor-pointer`}
              >
                <option className="text-steel-800" value="">Verfahren wählen (optional)</option>
                {verfahrenOptions.map(v => <option className="text-steel-800" key={v} value={v}>{v}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="inq-nachricht" className={labelClass}>Nachricht *</label>
              <textarea
                id="inq-nachricht"
                rows={isFull ? 5 : 3}
                placeholder="Beschreiben Sie Ihr Bauteil und Ihre Anforderungen…"
                value={values.nachricht} onChange={set('nachricht')}
                className={`${inputBase} h-auto min-h-(--textarea-min) resize-y py-3 ${errors.nachricht ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/25' : ''}`}
              />
              {errors.nachricht && <p className="mt-1 text-xs text-red-300">{errors.nachricht}</p>}
            </div>

            <div>
              <label htmlFor="inq-files" className={labelClass}>Dateien anhängen (optional)</label>
              <input
                id="inq-files"
                type="file"
                multiple
                accept="image/*,.pdf,application/pdf"
                onChange={handleAttachments}
                className="w-full cursor-pointer rounded-(--radius-lg) border border-white/15 bg-white/[0.06] px-3 py-2 text-sm text-white/60 file:mr-3 file:rounded-full file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-white/20"
              />
              <p className="mt-1.5 text-xs text-white/40">Erlaubt: Bilder und PDF-Dateien.</p>
              {attachments.length > 0 && (
                <>
                  <p className="mt-2 text-xs font-medium text-white/60">{attachments.length} Datei(en) ausgewählt</p>
                  <ul className="space-y-1 text-xs text-white/50">
                  {attachments.map(file => (
                    <li key={`${file.name}-${file.size}`}>• {file.name}</li>
                  ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-6">
          <button
            type="submit"
            className="ui-button bg-white text-brand-800 hover:bg-white/90 cursor-pointer"
          >
            Anfrage senden
          </button>
          <p className="text-xs text-white/35">* Pflichtfelder</p>
        </div>

      </div>
    </form>
  )
}
