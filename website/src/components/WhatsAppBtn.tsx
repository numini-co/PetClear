import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo'
import { STRONG_WA_CLASS } from '../lib/conversionCopy.ts'

interface WhatsAppBtnProps {
  label: string
  message: string
  className?: string
  /** Preselects Export / Import service in the multi-step WhatsApp gate. */
  service?: string
  /** Dark green label that clears 4.5:1, full width below 640px. */
  strong?: boolean
}

export default function WhatsAppBtn({ label, message, className = '', service, strong = false }: WhatsAppBtnProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-service={service}
      className={
        strong
          ? `${STRONG_WA_CLASS} rounded-2xl ${className}`.trim()
          : `inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1ebe57] transition-colors shadow-sm ${className}`
      }
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  )
}
