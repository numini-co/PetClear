import { LAST_VERIFIED_LABEL } from '../lib/regulatory.ts'

interface LastVerifiedProps {
  className?: string
  note?: string
}

/** Stamp shown next to regulatory figures (permit validity, government fees). */
export default function LastVerified({
  className = 'mt-2 text-xs text-[#8A8A8A]',
  note = 'Confirm current figures on the official MOCCAE portal before you apply.',
}: LastVerifiedProps) {
  return (
    <p className={className}>
      {LAST_VERIFIED_LABEL}. {note}
    </p>
  )
}
