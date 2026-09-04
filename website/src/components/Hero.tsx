import { Link } from 'react-router-dom'
import { MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_E164 } from '../lib/seo.ts'

interface HeroProps {
  image: string
  imageAlt: string
  /** Used if the primary hero asset fails to load. */
  fallbackSrc?: string
  eyebrow?: string
  title: string
  subtitle?: string
  whatsappMessage?: string
  primaryLabel?: string
  secondary?: { label: string; to: string }
  updated?: string
}

// Shared professional hero: a sharp full-bleed photo, a black gradient scrim for
// legibility, short white headline + subtitle, and two conversion CTAs. Used on
// every page so the site reads as a serious business, not a lead-gen template.
export default function Hero({
  image,
  imageAlt,
  fallbackSrc,
  eyebrow,
  title,
  subtitle,
  whatsappMessage,
  primaryLabel = 'Get a Free WhatsApp Quote',
  secondary,
  updated,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0E1330]">
      <img
        src={image}
        alt={imageAlt}
        onError={(e) => {
          if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
            e.currentTarget.src = fallbackSrc
          }
        }}
        width={1536}
        height={1024}
        loading="eager"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl text-white">
          {updated ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">{updated}</p>
          ) : null}
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 text-[30px] font-bold leading-[1.08] tracking-tight sm:text-[42px] lg:text-[52px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{subtitle}</p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl(whatsappMessage || 'Hi Dubai Pet Relocation! I need help relocating my pet and would like a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" />
              {primaryLabel}
            </a>
            {secondary ? (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                {secondary.label}
              </Link>
            ) : (
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
