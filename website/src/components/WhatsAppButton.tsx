import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'

interface WhatsAppButtonProps {
  message?: string
  variant?: 'floating' | 'sticky' | 'inline'
  className?: string
}

export default function WhatsAppButton({
  message = "Hi Dubai Pet Relocation team, I'm planning to relocate my pet and need some guidance. Could you help me understand the process?",
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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-colors shadow-sm ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
        Get Help on WhatsApp
      </a>
    )
  }

  if (variant === 'sticky') {
    return (
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white border-t border-[#E2E5F6] shadow-lg p-3 sm:hidden">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm w-full"
          >
            <MessageCircle className="w-5 h-5" />
            Get Your Free Quote on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  // Floating desktop
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform whatsapp-pulse ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
