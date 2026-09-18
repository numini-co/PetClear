import { WA_GATE, WA_GATE_DIY } from '../lib/conversionCopy.ts'

type Tone = 'light' | 'dark' | 'hero' | 'sticky'

const TONE: Record<Tone, string> = {
  light: 'text-[#5A5A5A]',
  dark: 'text-white/70',
  hero: 'text-white/70',
  sticky: 'text-[#5A5A5A]',
}

export default function WhatsAppGate({
  tone = 'light',
  className = '',
  showDiyNote = false,
}: {
  tone?: Tone
  className?: string
  /** Guide pages: point DIY readers at the on-page checklist, not a free consult. */
  showDiyNote?: boolean
}) {
  return (
    <div className={`space-y-1 ${className}`.trim()}>
      <p className={`text-xs leading-relaxed ${TONE[tone]}`}>{WA_GATE}</p>
      {showDiyNote ? <p className={`text-xs leading-relaxed ${TONE[tone]}`}>{WA_GATE_DIY}</p> : null}
    </div>
  )
}
