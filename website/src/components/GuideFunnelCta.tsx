import { Link } from 'react-router-dom'
import { Dog, FileText, MessageCircle, Package, Plane, type LucideIcon } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../lib/seo.ts'
import { CTA_CHECK_MOVE, WA_ELIGIBILITY_DEFAULT } from '../lib/conversionCopy.ts'
import PaidIncludes from './PaidIncludes.tsx'
import WhatsAppGate from './WhatsAppGate.tsx'

type Variant = 'mid' | 'end'
type FunnelIcon = 'package' | 'plane' | 'dog' | 'file'

export interface FunnelLink {
  to: string
  label: string
  icon?: FunnelIcon
}

interface GuideFunnelCtaProps {
  /** mid = light card between sections; end = full-bleed brand band */
  variant?: Variant
  /** Optional override for the heading */
  title?: string
  /** Optional override for the supporting line — keep regulatory-safe (no fees/volumes) */
  subtitle?: string
  /** WhatsApp prefill for Check Eligibility */
  eligibilityMessage?: string
  /** WhatsApp button label */
  waLabel?: string
  /** Money / commercial twins. Defaults keep PR #49 import-guide targets. */
  links?: FunnelLink[]
}

const DEFAULT_ELIGIBILITY = WA_ELIGIBILITY_DEFAULT

const DEFAULT_LINKS: FunnelLink[] = [
  { to: '/service/pet-relocation-dubai/', label: 'Pet relocation Dubai', icon: 'package' },
  { to: '/service/pet-import-dubai/', label: 'Pet import to Dubai', icon: 'plane' },
]

const ICONS: Record<FunnelIcon, LucideIcon> = {
  package: Package,
  plane: Plane,
  dog: Dog,
  file: FileText,
}

/**
 * Funnel block for hot import guides → money services + WhatsApp eligibility.
 * Hard locks: no invented fees, no volume claims, no URL renames.
 */
export default function GuideFunnelCta({
  variant = 'mid',
  title,
  subtitle,
  eligibilityMessage = DEFAULT_ELIGIBILITY,
  waLabel = CTA_CHECK_MOVE,
  links = DEFAULT_LINKS,
}: GuideFunnelCtaProps) {
  const isEnd = variant === 'end'
  const heading =
    title ||
    (isEnd
      ? 'Ready to book a managed move?'
      : 'Check if we can move your pet')
  const body =
    subtitle ||
    'Guides stay free to read. WhatsApp and the money pages are for people ready to book a managed relocation: permit timing, airline booking, crate or cabin rules, and the airport handoff. We confirm MOCCAE portal fees on the live site. We do not invent amounts here.'

  const shell = isEnd
    ? 'py-16 lg:py-20 bg-[#4F5BD5]'
    : 'section-padding bg-[#F5F6FD]'
  const card = isEnd
    ? 'max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center'
    : 'max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8'
  const headingClass = isEnd
    ? 'text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4'
    : 'text-[22px] sm:text-[26px] font-bold text-[#2A2A2A] mb-3 text-center'
  const bodyClass = isEnd
    ? 'text-white/80 text-base leading-relaxed max-w-2xl mx-auto mb-8'
    : 'text-[#5A5A5A] text-sm leading-relaxed text-center mb-8 max-w-2xl mx-auto'
  const serviceBtn = isEnd
    ? 'inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-[#4F5BD5] font-semibold text-sm hover:bg-white/90 transition-colors'
    : 'inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-[#4F5BD5] font-semibold text-sm ring-1 ring-[#4F5BD5]/25 hover:bg-[#E9ECFB] transition-colors shadow-sm'
  const waBtn = isEnd
    ? 'inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1DA851] transition-colors whatsapp-pulse'
    : 'inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1DA851] transition-colors shadow-sm'

  const buttons = (
    <div className="flex flex-wrap justify-center gap-3">
      {links.map((link) => {
        const Icon = ICONS[link.icon ?? 'package']
        return (
          <Link key={link.to} to={link.to} className={serviceBtn}>
            <Icon className="w-4 h-4" aria-hidden="true" />
            {link.label}
          </Link>
        )
      })}
      <a
        href={getWhatsAppUrl(eligibilityMessage, 'funnel-eligibility')}
        target="_blank"
        rel="noopener noreferrer"
        className={waBtn}
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        {waLabel}
      </a>
    </div>
  )

  return (
    <section className={shell} aria-label="Commercial next steps">
      <div className={card}>
        {!isEnd ? (
          <div className="rounded-[20px] bg-white p-6 sm:p-8 shadow-sm ring-1 ring-[#4F5BD5]/10">
            <h2 className={headingClass}>{heading}</h2>
            <p className={bodyClass}>{body}</p>
            <PaidIncludes compact className="mb-6 text-left" />
            {buttons}
            <WhatsAppGate className="mt-4 text-center" />
            <p className="mt-2 text-center text-xs text-[#8A8A8A]">
              WhatsApp {PHONE_DISPLAY} · Permit validity 90 days from issuance · Titer sample within 90 days before travel when required
            </p>
          </div>
        ) : (
          <>
            <h2 className={headingClass}>{heading}</h2>
            <p className={bodyClass}>{body}</p>
            <PaidIncludes tone="dark" compact className="mx-auto mb-6 max-w-2xl text-left" />
            {buttons}
            <WhatsAppGate tone="dark" className="mt-4" />
            <p className="mt-2 text-sm text-white/60">
              WhatsApp {PHONE_DISPLAY} · We confirm government fees on the official portal
            </p>
          </>
        )}
      </div>
    </section>
  )
}
