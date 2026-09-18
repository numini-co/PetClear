import { GUIDE_BRIDGE } from '../lib/conversionCopy.ts'

export default function GuideBridge({
  className = '',
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  const color = tone === 'dark' ? 'text-white/85' : 'text-[#5A5A5A]'
  return (
    <p className={`text-sm leading-relaxed ${color} ${className}`.trim()}>{GUIDE_BRIDGE}</p>
  )
}
