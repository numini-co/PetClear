import { useEffect, useId, useRef, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'

const SKIP_KEY = 'dpr-wa-skip-gate'
const PET_OPTIONS = ['Dog', 'Cat'] as const
const INTENT_OPTIONS = [
  { value: 'ready', label: 'Yes — ready to book a managed move' },
  { value: 'diy', label: 'Still researching DIY' },
  { value: 'unsure', label: 'Not sure' },
] as const

type PetType = (typeof PET_OPTIONS)[number]
type Intent = (typeof INTENT_OPTIONS)[number]['value']

function extractText(href: string): string {
  try {
    const url = new URL(href)
    return url.searchParams.get('text') || ''
  } catch {
    return ''
  }
}

function extractCampaign(href: string): string {
  try {
    const url = new URL(href)
    return url.searchParams.get('utm_campaign') || 'pet-relocation'
  } catch {
    return 'pet-relocation'
  }
}

function shouldSkip(): boolean {
  try {
    return sessionStorage.getItem(SKIP_KEY) === '1'
  } catch {
    return false
  }
}

function setSkip() {
  try {
    sessionStorage.setItem(SKIP_KEY, '1')
  } catch {
    /* ignore quota / private mode */
  }
}

function openWhatsApp(message: string, campaign: string) {
  window.open(getWhatsAppUrl(message, campaign), '_blank', 'noopener,noreferrer')
}

export default function WhatsAppLeadGate() {
  const titleId = useId()
  const nameId = useId()
  const petId = useId()
  const intentId = useId()
  const descId = useId()
  const skipId = useId()
  const nameRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [sourceHref, setSourceHref] = useState('')
  const [name, setName] = useState('')
  const [pet, setPet] = useState<PetType | ''>('')
  const [intent, setIntent] = useState<Intent | ''>('')
  const [description, setDescription] = useState('')
  const [skipNext, setSkipNext] = useState(false)
  const [errors, setErrors] = useState<string>('')

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.dataset.waBypass === 'true') return
      const href = anchor.getAttribute('href') || ''
      if (!href.includes('wa.me/971504782999') && !href.includes('wa.me/+971504782999')) return
      if (shouldSkip()) return
      event.preventDefault()
      event.stopPropagation()
      setSourceHref(href)
      setErrors('')
      setOpen(true)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    nameRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open])

  if (!open) return null

  const campaign = extractCampaign(sourceHref)
  const original = extractText(sourceHref)

  const resetAndClose = () => {
    setOpen(false)
    setSkipNext(false)
  }

  const continueToWhatsApp = () => {
    if (!name.trim() || !pet || !intent || !description.trim()) {
      setErrors('Fill name, pet type, intent and a short description.')
      return
    }
    const intentLabel = INTENT_OPTIONS.find((o) => o.value === intent)?.label || intent
    const composed = [
      `Name: ${name.trim()}`,
      `Pet: ${pet}`,
      `Intent: ${intentLabel}`,
      `Description: ${description.trim()}`,
      original ? `Page note: ${original}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    openWhatsApp(composed, campaign)
    resetAndClose()
  }

  const goDirect = () => {
    if (skipNext) setSkip()
    const composed = [
      'Direct WhatsApp — please share name, pet type, route.',
      original ? `Page note: ${original}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    openWhatsApp(composed, campaign)
    resetAndClose()
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close WhatsApp form"
        onClick={resetAndClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[81] flex max-h-[min(92dvh,720px)] w-full max-w-[440px] flex-col rounded-t-3xl bg-white shadow-xl sm:rounded-[20px]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-4 sm:px-6 sm:pt-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3A45B0]">Managed-move check</p>
            <h2 id={titleId} className="mt-1 text-lg font-bold text-[#2A2A2A]">
              Check if we can move your pet
            </h2>
            <p className="mt-1 text-sm leading-snug text-[#5A5A5A]">
              Guides stay free to read. WhatsApp is for people ready to book a managed relocation.
            </p>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#5A5A5A] hover:bg-[#F5F6FD]"
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <form
          className="flex min-h-0 flex-1 flex-col"
          onSubmit={(event) => {
            event.preventDefault()
            continueToWhatsApp()
          }}
        >
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-3 sm:space-y-4 sm:px-6">
            <div>
              <label htmlFor={nameId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                ref={nameRef}
                id={nameId}
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-12 w-full rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-4 text-base text-[#2A2A2A] outline-none ring-[#3A45B0] focus:bg-white focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor={petId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                Dog or Cat <span aria-hidden="true">*</span>
              </label>
              <select
                id={petId}
                name="pet"
                required
                value={pet}
                onChange={(e) => setPet(e.target.value as PetType | '')}
                className="min-h-12 w-full rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-4 text-base text-[#2A2A2A] outline-none ring-[#3A45B0] focus:bg-white focus:ring-2"
              >
                <option value="" disabled>
                  Select pet type
                </option>
                {PET_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <fieldset>
              <legend className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                Looking to transfer or relocate this pet with a managed move?{' '}
                <span aria-hidden="true">*</span>
              </legend>
              <div className="space-y-2" id={intentId}>
                {INTENT_OPTIONS.map((option) => (
                  <label
                    key={option.value}
                    className="flex min-h-12 items-center gap-3 rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-3 text-sm text-[#2A2A2A]"
                  >
                    <input
                      type="radio"
                      name="intent"
                      value={option.value}
                      checked={intent === option.value}
                      onChange={() => setIntent(option.value)}
                      required
                      className="h-5 w-5 accent-[#3A45B0]"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor={descId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                Short description <span aria-hidden="true">*</span>
              </label>
              <textarea
                id={descId}
                name="description"
                required
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Breed, origin or destination, and target month"
                className="w-full rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-4 py-3 text-base text-[#2A2A2A] outline-none ring-[#3A45B0] focus:bg-white focus:ring-2"
              />
            </div>

            {errors ? (
              <p className="text-sm font-medium text-[#C9453A]" role="alert">
                {errors}
              </p>
            ) : null}
          </div>

          <div className="shrink-0 border-t border-[#E2E5F6] bg-white px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Continue to WhatsApp
            </button>
            <button
              type="button"
              onClick={goDirect}
              className="mt-2 min-h-11 w-full text-center text-sm font-medium text-[#3A45B0] underline-offset-2 hover:underline"
            >
              Go directly to WhatsApp
            </button>
            <label htmlFor={skipId} className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-[#5A5A5A]">
              <input
                id={skipId}
                type="checkbox"
                checked={skipNext}
                onChange={(e) => setSkipNext(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#3A45B0]"
              />
              Don&apos;t ask again this session (Direct path only)
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
