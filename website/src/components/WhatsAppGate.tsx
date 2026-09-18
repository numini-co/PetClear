import { WA_GATE } from '../lib/conversionCopy.ts'

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
}: {
  tone?: Tone
  className?: string
}) {
  return (
    <p className={`text-xs leading-relaxed ${TONE[tone]} ${className}`.trim()}>
      {WA_GATE}
    </p>
  )
}
