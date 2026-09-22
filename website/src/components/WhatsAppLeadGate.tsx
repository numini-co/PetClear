import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'
import {
  CTA_CHECK_MOVE,
  composeEligibilityLead,
  SERVICE_OPTIONS,
  usefulClickedNote,
  WA_DIRECT_PROMPT,
} from '../lib/conversionCopy.ts'

const SKIP_KEY = 'dpr-wa-skip-gate'
const TOTAL_STEPS = 3
const PET_OPTIONS = ['Dog', 'Cat'] as const
const INTENT_OPTIONS = [
  { value: 'ready', label: 'Yes — ready to book a managed move' },
  { value: 'diy', label: 'Still researching DIY' },
  { value: 'unsure', label: 'Not sure' },
] as const

type Step = 1 | 2 | 3
type PetType = (typeof PET_OPTIONS)[number]
type Intent = (typeof INTENT_OPTIONS)[number]['value']
type ServiceNeeded = (typeof SERVICE_OPTIONS)[number]

const STEP_TITLES: Record<Step, string> = {
  1: 'About you',
  2: 'Route',
  3: 'Service',
}

const fieldClass =
  'min-h-12 w-full rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-4 text-base text-[#2A2A2A] outline-none ring-[#3A45B0] focus:bg-white focus:ring-2'

const radioLabelClass =
  'flex min-h-11 items-center gap-3 rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-3 text-sm text-[#2A2A2A]'

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

function currentPagePath(): string {
  try {
    return window.location.pathname || ''
  } catch {
    return ''
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
  const stepStatusId = useId()
  const nameId = useId()
  const petId = useId()
  const originId = useId()
  const destId = useId()
  const dateId = useId()
  const serviceId = useId()
  const intentId = useId()
  const notesId = useId()
  const notesHelpId = useId()
  const skipId = useId()
  const nameRef = useRef<HTMLInputElement>(null)
  const originRef = useRef<HTMLInputElement>(null)
  const serviceFirstRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>(1)
  const [sourceHref, setSourceHref] = useState('')
  const [name, setName] = useState('')
  const [pet, setPet] = useState<PetType | ''>('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const [service, setService] = useState<ServiceNeeded | ''>('')
  const [intent, setIntent] = useState<Intent | ''>('')
  const [notes, setNotes] = useState('')
  const [skipNext, setSkipNext] = useState(false)
  const [errors, setErrors] = useState('')

  const resetAndClose = useCallback(() => {
    setOpen(false)
    setStep(1)
    setSkipNext(false)
    setName('')
    setPet('')
    setOrigin('')
    setDestination('')
    setTargetDate('')
    setService('')
    setIntent('')
    setNotes('')
    setErrors('')
  }, [])

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
      setStep(1)
      setOpen(true)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        resetAndClose()
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
  }, [open, resetAndClose])

  useEffect(() => {
    if (!open) return
    if (step === 1) nameRef.current?.focus()
    else if (step === 2) originRef.current?.focus()
    else serviceFirstRef.current?.focus()
  }, [open, step])

  if (!open) return null

  const campaign = extractCampaign(sourceHref)

  const validateStep = (current: Step): string => {
    if (current === 1) {
      if (!name.trim() || !pet) return 'Fill name and pet.'
      return ''
    }
    if (current === 2) {
      if (!origin.trim() || !destination.trim() || !targetDate.trim()) {
        return 'Fill origin, destination and target date.'
      }
      return ''
    }
    if (!service || !intent) return 'Choose a service and intent.'
    return ''
  }

  const goNext = () => {
    const message = validateStep(step)
    if (message) {
      setErrors(message)
      return
    }
    setErrors('')
    setStep((step + 1) as Step)
  }

  const goBack = () => {
    setErrors('')
    setStep((step - 1) as Step)
  }

  const continueToWhatsApp = () => {
    const message = validateStep(3)
    if (message) {
      setErrors(message)
      return
    }
    const intentLabel = INTENT_OPTIONS.find((o) => o.value === intent)?.label || intent
    const composed = composeEligibilityLead({
      name,
      pet,
      service,
      origin,
      destination,
      date: targetDate,
      intent: intentLabel,
      notes,
      page: currentPagePath() || usefulClickedNote(extractText(sourceHref)),
    })
    openWhatsApp(composed, campaign)
    resetAndClose()
  }

  const goDirect = () => {
    if (skipNext) setSkip()
    const composed = composeEligibilityLead({
      notes: WA_DIRECT_PROMPT,
      page: currentPagePath(),
    })
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
        aria-describedby={stepStatusId}
        className="relative z-[81] flex max-h-[min(94dvh,820px)] w-full max-w-[440px] flex-col rounded-t-3xl bg-white shadow-xl sm:rounded-[20px]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-4 sm:px-6 sm:pt-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3A45B0]">Managed-move check</p>
            <h2 id={titleId} className="mt-1 text-lg font-bold text-[#2A2A2A]">
              {CTA_CHECK_MOVE}
            </h2>
            {step === 1 ? (
              <p className="mt-1 text-sm leading-snug text-[#5A5A5A]">
                Guides stay free to read. WhatsApp is for people ready to book a managed relocation.
              </p>
            ) : null}
            <div className="mt-3">
              <p id={stepStatusId} className="text-sm font-semibold text-[#2A2A2A]" aria-live="polite" aria-atomic="true">
                Step {step} of {TOTAL_STEPS} — {STEP_TITLES[step]}
              </p>
              <ol className="mt-2 flex gap-1.5" aria-hidden="true">
                {([1, 2, 3] as Step[]).map((n) => (
                  <li
                    key={n}
                    className={`h-1.5 flex-1 rounded-full ${n <= step ? 'bg-[#3A45B0]' : 'bg-[#E2E5F6]'}`}
                  />
                ))}
              </ol>
            </div>
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
            if (step < 3) goNext()
            else continueToWhatsApp()
          }}
        >
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-3 sm:space-y-4 sm:px-6">
            {step === 1 ? (
              <>
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
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor={petId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Pet <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id={petId}
                    name="pet"
                    required
                    value={pet}
                    onChange={(e) => setPet(e.target.value as PetType | '')}
                    className={fieldClass}
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
              </>
            ) : null}

            {step === 2 ? (
              <>
                <div>
                  <label htmlFor={originId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Origin city / country <span aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={originRef}
                    id={originId}
                    name="origin"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Lahore, Pakistan"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor={destId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Destination city / country <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={destId}
                    name="destination"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Dubai, UAE"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor={dateId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Target month / date <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={dateId}
                    name="targetDate"
                    type="text"
                    required
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    placeholder="December 2026"
                    className={fieldClass}
                  />
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <fieldset>
                  <legend className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Service needed? <span aria-hidden="true">*</span>
                  </legend>
                  <div className="space-y-2" id={serviceId}>
                    {SERVICE_OPTIONS.map((option, index) => (
                      <label key={option} className={radioLabelClass}>
                        <input
                          ref={index === 0 ? serviceFirstRef : undefined}
                          type="radio"
                          name="service"
                          value={option}
                          checked={service === option}
                          onChange={() => setService(option)}
                          required
                          className="h-5 w-5 accent-[#3A45B0]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Looking to transfer or relocate this pet with a managed move?{' '}
                    <span aria-hidden="true">*</span>
                  </legend>
                  <div className="space-y-2" id={intentId}>
                    {INTENT_OPTIONS.map((option) => (
                      <label key={option.value} className={radioLabelClass}>
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
                  <label htmlFor={notesId} className="mb-1.5 block text-sm font-semibold text-[#2A2A2A]">
                    Notes
                  </label>
                  <p id={notesHelpId} className="mb-1.5 text-xs text-[#5A5A5A]">
                    Please write in English
                  </p>
                  <textarea
                    id={notesId}
                    name="notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Breed, crate size, or anything else we should know"
                    aria-describedby={notesHelpId}
                    className="w-full rounded-xl border border-[#E2E5F6] bg-[#F5F6FD] px-4 py-3 text-base text-[#2A2A2A] outline-none ring-[#3A45B0] focus:bg-white focus:ring-2"
                  />
                </div>
              </>
            ) : null}

            {errors ? (
              <p className="text-sm font-medium text-[#C9453A]" role="alert">
                {errors}
              </p>
            ) : null}
          </div>

          <div className="shrink-0 border-t border-[#E2E5F6] bg-white px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
            <div className="flex gap-2">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex min-h-12 min-w-[5.5rem] flex-1 items-center justify-center rounded-2xl border border-[#E2E5F6] px-4 text-sm font-semibold text-[#2A2A2A] hover:bg-[#F5F6FD]"
                >
                  Back
                </button>
              ) : null}
              {step < 3 ? (
                <button
                  type="submit"
                  className="flex min-h-12 flex-[2] items-center justify-center rounded-2xl bg-[#3A45B0] px-4 text-sm font-semibold text-white hover:bg-[#2E3899]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex min-h-12 flex-[2] items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Continue to WhatsApp
                </button>
              )}
            </div>
            {step === 3 ? (
              <>
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
              </>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}
