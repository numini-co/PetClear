import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'
import { CTA_CHECK_MOVE, WA_ELIGIBILITY_DEFAULT } from '../lib/conversionCopy.ts'
import GuideBridge from './GuideBridge.tsx'
import WhatsAppGate from './WhatsAppGate.tsx'

interface GuideDualPathProps {
  diyNote?: string
  moneyTo: string
  moneyLabel: string
  waMessage?: string
  waLabel?: string
}

/**
 * Early educational split: keep reading (DIY) vs managed-move money page + WhatsApp.
 * Does not invent fees. Does not rename URLs.
 */
export default function GuideDualPath({
  diyNote = 'Keep reading this guide if you are doing the file yourself.',
  moneyTo,
  moneyLabel,
  waMessage = WA_ELIGIBILITY_DEFAULT,
  waLabel = CTA_CHECK_MOVE,
}: GuideDualPathProps) {
  return (
    <aside
      className="rounded-[20px] bg-white p-5 shadow-sm ring-1 ring-[#3A45B0]/15 sm:p-6"
      aria-label="DIY or managed move"
    >
      <p className="text-sm font-semibold text-[#3A45B0]">Two paths from here</p>
      <GuideBridge className="mt-2" />
      <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">
        {diyNote} Open the paid service when you want one coordinator to hold permits, airline booking, crate
        rules and the airport handoff.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          to={moneyTo}
          className="inline-flex items-center justify-center rounded-xl bg-[#3A45B0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2f3894]"
        >
          {moneyLabel}
        </Link>
        <a
          href={getWhatsAppUrl(waMessage, 'guide-dual-path')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1DA851]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {waLabel}
        </a>
      </div>
      <WhatsAppGate showDiyNote className="mt-3" />
    </aside>
  )
}
