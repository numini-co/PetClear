import { LAST_VERIFIED_LABEL } from '../lib/regulatory.ts'

interface LastVerifiedProps {
  className?: string
  note?: string
  /** Override the shared stamp when a page has its own verification date. */
  date?: string
}

/** Stamp shown next to regulatory figures (permit validity, government fees). */
export default function LastVerified({
  className = 'mt-2 text-xs text-[#8A8A8A]',
  note = 'Confirm current figures on the official MOCCAE portal before you apply.',
  date,
}: LastVerifiedProps) {
  const stamp = date ? `Last verified: ${date}` : LAST_VERIFIED_LABEL
  return (
    <p className={className}>
      {stamp}. {note}
    </p>
  )
}
