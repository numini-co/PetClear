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
  line = WA_GATE,
  diyLine,
}: {
  tone?: Tone
  className?: string
  /** Guide pages: point DIY readers at the on-page checklist, not a free consult. */
  showDiyNote?: boolean
  /** Override the soft-gate sentence. Defaults to the shared paid-work line. */
  line?: string
  /** Page-local DIY sentence. Defaults to the shared line. */
  diyLine?: string
}) {
  return (
    <div className={`space-y-1 ${className}`.trim()}>
      <p className={`text-xs leading-relaxed ${TONE[tone]}`}>{line}</p>
      {showDiyNote ? <p className={`text-xs leading-relaxed ${TONE[tone]}`}>{diyLine || WA_GATE_DIY}</p> : null}
    </div>
  )
}
