import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'

export const ROUTE_PACKAGE_COST_FAQ =
  'We do not publish total package AED bands on this corridor. Official MOCCAE fees — confirm on the portal; fees may change — are import permit AED 200, dog port release AED 500 and cat port release AED 250. See [what drives pet relocation cost](/guides/pet-relocation-cost-dubai/) for the driver list, then WhatsApp +971504782999 for a quote on your pet, crate and dates.'

export default function RouteCostTeaser({
  corridor,
  whatsappMessage,
}: {
  corridor: string
  whatsappMessage: string
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">
            {corridor} costs — official fees and a quote
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            We do not publish total package bands on this page. Cargo, crate and coordination depend on the live file.
            Official MOCCAE amounts below are labelled government fees — confirm on the portal; fees may change.
          </p>
        </div>

        <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left">
              <thead className="bg-[#F5F5F5]">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Official MOCCAE fee</th>
                  <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBEBEB]">
                <tr>
                  <td className="px-6 py-4 text-sm text-[#5A5A5A]">Import permit</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-[#5A5A5A]">Dog port release</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-[#5A5A5A]">Cat port release</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-5 bg-[#F5F6FD] border-t border-[#EBEBEB] space-y-4">
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Confirm on the official MOCCAE portal; fees may change. For cargo, crate and coordination drivers — not a
              package total — read the{' '}
              <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet relocation cost guide
              </Link>
              , then ask for a WhatsApp quote.
            </p>
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp quote +971 50 478 2999
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
