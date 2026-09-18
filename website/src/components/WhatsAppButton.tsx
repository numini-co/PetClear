import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'
import { CTA_CHECK_MOVE, WA_ELIGIBILITY_DEFAULT } from '../lib/conversionCopy.ts'
import WhatsAppGate from './WhatsAppGate.tsx'

interface WhatsAppButtonProps {
  message?: string
  variant?: 'floating' | 'sticky' | 'inline'
  className?: string
}

export default function WhatsAppButton({
  message = WA_ELIGIBILITY_DEFAULT,
  variant = 'floating',
  className = '',
}: WhatsAppButtonProps) {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    if (variant !== 'sticky') return
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  const href = getWhatsAppUrl(message)

  if (variant === 'inline') {
    return (
      <span className={`inline-flex flex-col items-start gap-1.5 ${className}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1DA851]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {CTA_CHECK_MOVE}
        </a>
        <WhatsAppGate />
      </span>
    )
  }

  if (variant === 'sticky') {
    return (
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="border-t border-[#E2E5F6] bg-white p-3 shadow-lg sm:hidden">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-5 h-5" aria-hidden="true" />
            {CTA_CHECK_MOVE}
          </a>
          <WhatsAppGate tone="sticky" className="mt-1.5 text-center" />
        </div>
      </div>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-pulse fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 ${className}`}
      aria-label={CTA_CHECK_MOVE}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
