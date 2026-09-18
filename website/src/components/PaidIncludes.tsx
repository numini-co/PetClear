import { CheckCircle } from 'lucide-react'
import { PAID_INCLUDES_FOOT, PAID_INCLUDES_ITEMS, PAID_INCLUDES_TITLE } from '../lib/conversionCopy.ts'

type Tone = 'light' | 'dark' | 'hero'

export default function PaidIncludes({
  tone = 'light',
  compact = false,
  className = '',
}: {
  tone?: Tone
  compact?: boolean
  className?: string
}) {
  const isDark = tone === 'dark' || tone === 'hero'
  const titleClass = isDark ? 'text-white' : 'text-[#2A2A2A]'
  const itemClass = isDark ? 'text-white/80' : 'text-[#5A5A5A]'
  const iconClass = isDark ? 'text-white' : 'text-[#3A45B0]'
  const footClass = isDark ? 'text-white/60' : 'text-[#8A8A8A]'
  const shell =
    tone === 'hero'
      ? 'rounded-2xl bg-black/35 p-4 ring-1 ring-white/20 backdrop-blur-sm'
      : tone === 'dark'
        ? 'rounded-2xl bg-white/10 p-5 ring-1 ring-white/20'
        : 'rounded-2xl bg-[#F5F6FD] p-5 ring-1 ring-[#3A45B0]/15'

  return (
    <aside className={`${shell} ${className}`.trim()} aria-label={PAID_INCLUDES_TITLE}>
      <p className={`text-sm font-semibold ${titleClass}`}>{PAID_INCLUDES_TITLE}</p>
      <ul className={`mt-3 grid gap-2 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {PAID_INCLUDES_ITEMS.map((item) => (
          <li key={item} className={`flex items-start gap-2 text-xs leading-relaxed ${itemClass}`}>
            <CheckCircle className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${iconClass}`} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-3 text-[11px] leading-relaxed ${footClass}`}>{PAID_INCLUDES_FOOT}</p>
    </aside>
  )
}
