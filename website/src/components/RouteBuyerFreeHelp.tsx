import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'
import { GUIDE_SOFT_GATE, OUTBOUND_PAID_INCLUDES, STRONG_WA_CLASS } from '../lib/conversionCopy.ts'
import PaidIncludes from './PaidIncludes.tsx'
import WhatsAppGate from './WhatsAppGate.tsx'

type Props = {
  buyerMessage: string
  /** Dark band used at the end of legacy route pages. Light card on Route50. */
  tone?: 'band' | 'card'
  /** Outbound corridors use export guides and the leaving-Dubai paid scope. */
  direction?: 'inbound' | 'outbound'
}

/**
 * Buyer path and free-help path, labelled apart.
 * Buyer: paid coordination on WhatsApp. Free help: guide links only.
 */
export default function RouteBuyerFreeHelp({ buyerMessage, tone = 'card', direction = 'inbound' }: Props) {
  const buyerHref = getWhatsAppUrl(buyerMessage, 'route-checked')
  const outbound = direction === 'outbound'
  const dark = tone === 'band'

  const shell = dark ? 'bg-[#3A45B0] text-white' : 'bg-white text-[#2A2A2A]'
  const buyerCard = dark ? 'bg-white/10' : 'bg-[#F5F6FD]'
  const freeCard = dark ? 'bg-white/10' : 'bg-[#F7F7F4]'
  const body = dark ? 'text-white/85' : 'text-[#5A5A5A]'
  const link = dark ? 'font-semibold text-white underline' : 'font-semibold text-[#4F5BD5] hover:underline'
  const waClass = outbound
    ? `${STRONG_WA_CLASS} rounded-2xl`
    : 'inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#1DA851]'

  return (
    <section className={`section-padding ${shell}`} aria-label="Paid coordination and free help">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
        <h2 className={`mb-3 text-[24px] font-bold sm:text-[30px] ${dark ? 'text-white' : 'text-[#2A2A2A]'}`}>
          Choose paid coordination or free help
        </h2>
        <p className={`mb-8 max-w-3xl leading-relaxed ${body}`}>
          {outbound
            ? 'These are different requests. Get Route Checked is a quote for paid coordination, after eligibility is clear. Guides are free to read. WhatsApp is for people ready to book a managed relocation.'
            : 'These are different requests. Get Route Checked is a quote for paid coordination, after eligibility is clear. The guides below are free reading. They do not book a crate and do not start paid work.'}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`rounded-[20px] p-6 ${buyerCard}`}>
            <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-[#C9D0FF]' : 'text-[#4F5BD5]'}`}>
              Paid coordination
            </p>
            <h3 className={`mt-2 text-xl font-bold ${dark ? 'text-white' : 'text-[#2A2A2A]'}`}>Get Route Checked</h3>
            <p className={`mt-3 text-sm leading-relaxed ${body}`}>
              Send the pet, the route and the month. We reply with whether the file can move, then a quote for coordination.
              WhatsApp +971504782999, or use the quote form. Opening WhatsApp is not a paid check.
            </p>
            {outbound ? (
              <PaidIncludes tone={dark ? 'dark' : 'light'} compact items={OUTBOUND_PAID_INCLUDES} className="mt-4" />
            ) : null}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={buyerHref}
                target="_blank"
                rel="noopener noreferrer"
                data-wa-service={outbound ? 'Export service' : undefined}
                className={waClass}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Get Route Checked
              </a>
              <Link
                to="/contact/"
                className={`inline-flex items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold ${
                  dark ? 'bg-white text-[#2A2A2A]' : 'bg-[#4F5BD5] text-white'
                }`}
              >
                Quote form
              </Link>
            </div>
            {outbound ? <WhatsAppGate tone={dark ? 'dark' : 'light'} line={GUIDE_SOFT_GATE} className="mt-4" /> : null}
          </div>
          <div className={`rounded-[20px] p-6 ${freeCard}`}>
            <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? 'text-white/70' : 'text-[#6B6B6B]'}`}>
              Free help
            </p>
            <h3 className={`mt-2 text-xl font-bold ${dark ? 'text-white' : 'text-[#2A2A2A]'}`}>Guides</h3>
            <p className={`mt-3 text-sm leading-relaxed ${body}`}>
              {outbound
                ? 'Read the export guide. That page does not book a crate and does not start paid work.'
                : 'Read the import guide and the MOCCAE permit explainer. Those pages do not book a crate and do not start paid work.'}
            </p>
            <ul className={`mt-4 space-y-2 text-sm ${body}`}>
              {outbound ? (
                <>
                  <li>
                    <Link className={link} to="/guides/pet-export-from-dubai/">
                      How to export a pet from Dubai
                    </Link>
                  </li>
                  <li>
                    <Link className={link} to="/guides/pet-relocation-cost-dubai/">
                      What drives pet relocation cost
                    </Link>
                  </li>
                  <li>
                    <Link className={link} to="/guides/pet-flight-options-dubai/">
                      Pet flight options from Dubai
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className={link} to="/guides/uae-pet-import-requirements/">
                      UAE pet import requirements
                    </Link>
                  </li>
                  <li>
                    <Link className={link} to="/guides/moccae-import-permit/">
                      MOCCAE import permit explainer
                    </Link>
                  </li>
                  <li>
                    <Link className={link} to="/service/moccae-pet-permit/">
                      MOCCAE permit page
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
