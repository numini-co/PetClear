import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import { BASE_URL, LOGO_URL } from '../lib/seo.ts'
import { GUIDE_SOFT_GATE, STRONG_WA_CLASS } from '../lib/conversionCopy.ts'
import PaidIncludes from '../components/PaidIncludes.tsx'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Stethoscope, Home, AlertTriangle, Info, PawPrint, Dog } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import { RoutePlanLinks } from '../components/LinkPlanSlot.tsx'

const CHECKED = '22 September 2026'

const PAGE_TITLE = 'Pet Relocation Dubai to UK | Dog & Cat Move, Quoted'
const PAGE_DESCRIPTION =
  'Moving a dog or cat from Dubai to UK? We time the GB health certificate, tapeworm, IATA crate and hold booking from DXB. Check if we can move your pet.'

const WA_MESSAGE =
  'Hi Dubai Pet Relocation. I want Get Route Checked for dubai to uk (outbound). Pet details and preferred dates follow.'

/** UK-specific paid scope for this route only. Shared OUTBOUND_PAID_INCLUDES stays unchanged. */
const UK_PAID_INCLUDES = [
  'MOCCAE export health certificate timing (confirm the validity window on the MOCCAE portal)',
  'Great Britain pet health certificate timed inside the 10-day window',
  'Dog tapeworm appointment timed 24 to 120 hours before entry',
  'IATA crate check before the booking is held',
  'Hold booking on an approved route',
  'Airport handover at DXB',
] as const

const AUTHORITY_SOURCES = [
  { label: 'UAE MOCCAE: import permits and rules', href: 'https://www.moccae.gov.ae' },
  { label: 'IATA Live Animals Regulations: travel crates', href: 'https://www.iata.org/en/programs/cargo/live-animals/' },
  { label: 'Etihad: travelling with pets', href: 'https://www.etihad.com/en-ae/plan/travel-companion/travelling-with-pets' },
  { label: 'Emirates: pets and unusual baggage allowances', href: 'https://www.emirates.com/english/before-you-fly/baggage/unusual-baggage-and-special-allowances/' },
  { label: 'USDA APHIS: Pet Travel (US health certificates)', href: 'https://www.aphis.usda.gov/pet-travel' },
]

export default function DubaiToUK() {
  const pageUrl = `${BASE_URL}/routes/dubai-to-uk/`
  const faqs = [
    {
      question: 'What document does a pet from Dubai need to enter Great Britain?',
      answer:
        'A Great Britain pet health certificate signed by an official veterinarian. On 22 September 2026 the UAE was a listed country, so the pet must enter within 10 days of issue. A rabies blood test applies to countries that are not listed, not to the UAE. These rules cover England, Wales and Scotland. Northern Ireland is separate. This is not Model A or Model B, and not the UK export certificate used for a pet travelling into Dubai.',
    },
    {
      question: 'Does the microchip have to be fitted before the rabies vaccine?',
      answer:
        'Yes. Microchip the pet before, or at the same time as, the rabies vaccination. If that order is missed, the pet must be vaccinated again. On approved routes, staff check a chip that meets ISO 11784 and ISO 11785. You may need your own reader if it does not. If the chip cannot be read, the pet can be refused entry or quarantined. That ISO rule is for Great Britain entry, not a current MOCCAE import rejection rule.',
    },
    {
      question: 'How long after the rabies vaccine can the pet travel?',
      answer:
        'At least 21 full days. GOV.UK says the wait depends on the vaccine type: at least 21 full days after the first vaccination, or after the last dose of the first course. We do not shorten that wait, and we do not publish a clinic fee.',
    },
    {
      question: 'What tapeworm rule applies to a dog travelling from Dubai?',
      answer:
        'A vet must treat the dog for tapeworm before each entry to Great Britain. Dubai is not exempt. The exempt origins are Finland, Ireland, Northern Ireland, Malta and Norway. The product must be approved where it is given and contain praziquantel, or an equivalent proven against Echinococcus multilocularis. Give it no less than 24 hours and no more than 5 days (120 hours) before entry. The vet records the product, manufacturer, date and time. We do not publish a dose.',
    },
    {
      question: 'Can a pet be quarantined when arriving in the UK from Dubai?',
      answer:
        'Yes, if the rules are missed. GOV.UK says a pet may be quarantined for up to 4 months, or refused entry if you travelled by sea. You pay any fees. Correct documents reduce the risk of quarantine; nobody can guarantee clearance times.',
    },
    {
      question: 'How much does it cost to move a pet from Dubai to the UK?',
      answer:
        'A Dubai to UK move is quoted for your animal after an eligibility check. The quote covers cargo, the crate, the veterinary visit, the Great Britain pet health certificate and border charges. The crate size, the airline that accepts the pet and the travel dates change that quote. We do not publish a package total. Check if we can move your pet.',
    },
    {
      question: 'Does a banned dog breed have a Great Britain exception?',
      answer:
        'Only when the dog already has a valid Certificate of Exemption. GOV.UK says you cannot bring a banned breed of dog into Great Britain without that certificate. We do not reprint the breed list. The UAE import ban is a different rule, set out in the banned-breeds guide.',
    },
    {
      question: 'What else should the owner check before booking?',
      answer:
        'Use an approved route, and complete the declaration if you are not selling or transferring the pet. Extra Balai rules apply if you will sell or rehome the pet, if it arrives more than 5 days before or after you, or if you are bringing more than 5 pets outside a competition, show or sporting event. We coordinate the vet appointments and the carrier booking. We do not issue the Great Britain pet health certificate.',
    },
    {
      question: 'How do I take my dog from Dubai to the UK?',
      answer:
        'Pet relocation Dubai to UK for a dog is four steps. Microchip the dog. Give the rabies vaccine and wait at least 21 full days. Book dog tapeworm treatment for 24 hours to 5 days before entry. An official veterinarian issues the Great Britain pet health certificate, and the dog must enter within 10 days. We can time and book these steps for you.',
    },
  ]

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE_URL}/routes/` },
        { '@type': 'ListItem', position: 3, name: 'Dubai to UK', item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
      publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: LOGO_URL } },
      datePublished: '2025-01-15',
      dateModified: '2026-11-13',
    },
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        meta={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          canonical: pageUrl,
          ogType: 'article',
        }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Dubai to UK' }]} />

      <Hero
        image="/assets/route-heroes/route-dubai-to-uk-dog-flag-hero.jpg"
        imageAlt="Pet relocation from Dubai to Great Britain"
        fallbackSrc="/images/hero-dubai-to-uk.jpg"
        eyebrow="Dubai to Great Britain"
        title="Pet relocation from Dubai to UK"
        subtitle="On 22 September 2026 the UAE was a listed country. The document is a Great Britain pet health certificate. The pet must enter within 10 days of issue. Your quote is built on your pet, route and dates."
        updated={`Checked ${CHECKED}`}
        primaryLabel="Get Route Checked"
        whatsappMessage={WA_MESSAGE}
        primaryClassName={STRONG_WA_CLASS}
        showBuyerQualify
        paidIncludes={[...UK_PAID_INCLUDES]}
        gateLine={GUIDE_SOFT_GATE}
        waService="Export service"
      />
      <div className="mx-auto max-w-[900px] px-5 pt-8">
        <RoutePlanLinks />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Great Britain rules</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">What GOV.UK asks for from Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              These steps are for England, Wales and Scotland. Northern Ireland follows different rules. Checked on {CHECKED}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Microchip</p>
              <p className="text-[#5A5A5A] text-sm">Before or with the vaccine</p>
              <p className="text-[#5A5A5A] text-xs mt-2">ISO 11784 and ISO 11785 are the Great Britain scan standard on approved routes. MOCCAE import rules do not restate that standard.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Rabies vaccine</p>
              <p className="text-[#5A5A5A] text-sm">At least 21 full days</p>
              <p className="text-[#5A5A5A] text-xs mt-2">After the first vaccination, or the last dose of the first course. The wait depends on the vaccine type.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Health certificate</p>
              <p className="text-[#5A5A5A] text-sm">Enter within 10 days</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Great Britain pet health certificate from an official veterinarian. Not Model A or Model B.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Dog className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Tapeworm</p>
              <p className="text-[#5A5A5A] text-sm">Dogs</p>
              <p className="text-[#5A5A5A] text-xs mt-2">No less than 24 hours and no more than 5 days before entry. Praziquantel or an equivalent. We do not publish a dose.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="scroll-mt-24 py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Documentation</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents for Great Britain, in order</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                GOV.UK sets the Great Britain rules. An official veterinarian in the UAE signs the certificate. We do not issue the certificate or the vaccine; an official veterinarian does.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. Microchip, then vaccine</p>
                    <p className="text-[#5A5A5A] text-sm">Microchip before, or at the same time as, the rabies vaccination. The number goes on the Great Britain pet health certificate, dated before the vaccinations. If the chip cannot be read on entry, the pet can be refused or quarantined.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies vaccination</p>
                    <p className="text-[#5A5A5A] text-sm">Wait at least 21 full days after the first vaccination, or after the last dose of the first course. The exact wait depends on the vaccine. A listed country does not add the rabies blood test used for unlisted countries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Great Britain pet health certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Signed, stamped and dated by an official veterinarian with authority from their government. If your vet is not an official veterinarian, they need the local authority to complete that step. Enter Great Britain within 10 days of issue. If the journey slips past that window, the certificate has to be done again.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. Dog tapeworm treatment</p>
                    <p className="text-[#5A5A5A] text-sm">Required for a dog from Dubai. The product must be approved where it is given and must contain praziquantel or an equivalent. Timing is no less than 24 hours and no more than 5 days (120 hours) before entry. The vet records the name, manufacturer, date and time. We do not publish a dose.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Notes before you book</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Check the route is approved for pet travel. We do not publish a complete airport list.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>A pet that misses the rules may be quarantined for up to 4 months, or refused if you travelled by sea. You pay the charges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>You cannot bring a banned breed of dog into Great Britain unless it already has a valid Certificate of Exemption. We do not reprint that list.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Snub-nosed breeds: ask the airline about seasonal limits before booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Northern Ireland follows different rules. This route covers England, Wales and Scotland.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Airlines</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Carriers from Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Ask the airline which product it will accept. We do not publish frequency, aircraft type, hold temperature or a cargo tariff.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-6 h-6 text-[#D71A21]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Confirm the live-animal product in writing before you book. A rule for itineraries that end in Dubai does not set the product or the price for a flight to Great Britain.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-6 h-6 text-[#C8102E]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">British Airways</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">British Airways carries pets in the hold, not the cabin. Assistance dogs are a separate arrangement. We do not publish a flight time, a hold temperature or a cargo rate.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-6 h-6 text-[#E31937]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Other carriers</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Virgin Atlantic and any other airline need their own written acceptance. We do not state a weekly frequency, a climate hold or a rate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">What your Dubai to UK quote covers</h2>
          </div>
          <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Your quote is built for the animal. It covers cargo, the crate, the veterinary visit, the Great Britain pet health certificate and border charges. The crate is checked against{' '}
              <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                IATA pet crate requirements
              </Link>{' '}
              before the hold booking.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              UAE government fees, where they apply, are confirmed on the official MOCCAE portal. They are not the price of a Dubai to UK move.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">{GUIDE_SOFT_GATE}</p>
            <div className="flex justify-center">
              <WhatsAppBtn
                strong
                service="Export service"
                label="Get Route Checked"
                message={WA_MESSAGE}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Sequence</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">How a Dubai to UK move is timed</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              There is no single week count. The rabies wait is at least 21 full days after a first course. The certificate window is 10 days.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Chip and vaccine', desc: 'Fit the microchip before or with the rabies vaccine. Wait at least 21 full days after a first course. We do not issue the vaccine.', icon: Stethoscope },
              { title: 'Certificate', desc: 'An official veterinarian signs the Great Britain pet health certificate. Enter within 10 days of issue. We do not promise a one or two day endorsement.', icon: FileText },
              { title: 'Dog tapeworm', desc: 'A vet treats the dog inside the 24 hour to 5 day window and writes the product, date and time on the certificate.', icon: Shield },
              { title: 'Travel day', desc: 'The animal travels on an approved route with a carrier that has accepted it. We do not publish a flight duration or a clearance time.', icon: Home },
            ].map((step) => (
              <div key={step.title} className="bg-white rounded-[20px] p-6">
                <step.icon className="w-6 h-6 text-[#4F5BD5] mb-3" />
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{step.title}</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">The certificate used for Great Britain</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">
            A pet travelling from Dubai does not use an EU pet passport for Great Britain entry. The listed-country document checked on {CHECKED} is a Great Britain pet health certificate. Model A and Model B are not that document.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed">
            The reverse journey, United Kingdom to Dubai, uses the UK export certificate 3926EHC and the MOCCAE import permit. That permit is valid 90 days from issuance. The 10-day Great Britain certificate window is not the life of the MOCCAE permit.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Questions before you book</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-[20px] p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2A2A2A] text-base mb-2">{faq.question}</h3>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        checkedLabel={`Great Britain entry rules checked ${CHECKED} on GOV.UK. Veterinary review was not supplied.`}
        sources={AUTHORITY_SOURCES}
        extra={[
          { label: 'GOV.UK: bring your pet to Great Britain', href: 'https://www.gov.uk/bring-pet-to-great-britain' },
          { label: 'GOV.UK: which pet travel document', href: 'https://www.gov.uk/bring-pet-to-great-britain/which-pet-travel-document' },
          { label: 'GOV.UK: Great Britain pet health certificate', href: 'https://www.gov.uk/bring-pet-to-great-britain/great-britain-pet-health-certificate' },
          { label: 'GOV.UK: microchip', href: 'https://www.gov.uk/bring-pet-to-great-britain/microchip' },
          { label: 'GOV.UK: tapeworm treatment for dogs', href: 'https://www.gov.uk/bring-pet-to-great-britain/tapeworm-treatment-dogs' },
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to plan a Dubai to Great Britain move?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              For a booked move we coordinate the vet appointments, the certificate window, the carrier booking and the DXB handover, with WhatsApp updates during business hours. We do not issue the Great Britain pet health certificate. {GUIDE_SOFT_GATE} WhatsApp +971504782999.
            </p>
            <PaidIncludes tone="dark" compact items={UK_PAID_INCLUDES} className="mx-auto mb-6 max-w-2xl text-left" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn
                strong
                service="Export service"
                label="Get Route Checked"
                message={WA_MESSAGE}
              />
              <a href={`${BASE_URL}/how-it-works/`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How it works
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Still choosing the service? See{' '}
              <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-white underline">
                pet relocation from Dubai
              </Link>
              {' '}or{' '}
              <Link to="/service/pet-export-dubai/" className="font-semibold text-white underline">
                pet export from Dubai
              </Link>
              .
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog relocation</p>
                <p className="text-sm text-white/70">Breed check and crate preparation</p>
              </a>
              <a href={`${BASE_URL}/cat-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat relocation</p>
                <p className="text-sm text-white/70">Carrier preparation for cats</p>
              </a>
              <a href={`${BASE_URL}/routes/uk-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">UK to Dubai</p>
                <p className="text-sm text-white/70">The reverse route into Dubai</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Related routes</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Related routes and next steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/service/pet-export-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet export from Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Export coordination. Destination rules stay with that country.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route, bringing a pet from the UK to Dubai.</p>
            </Link>
            <Link to="/routes/dubai-to-usa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to USA</p>
              <p className="text-[#5A5A5A] text-sm">A different destination, with its own entry rules.</p>
            </Link>
            <Link to="/routes/usa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">USA to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Inbound from the United States, with the antibody test.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-[#EBEBEB]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5A5A5A]">
            <span>Related:</span>
            <Link to="/dog-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Dog relocation</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/cat-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Cat relocation</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/how-it-works/" className="text-[#4F5BD5] hover:underline">How it works</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/routes/uk-to-dubai/" className="text-[#4F5BD5] hover:underline">UK to Dubai</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] hover:underline">Import requirements</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] hover:underline">Cost guide</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/pet-export-from-dubai/" className="text-[#4F5BD5] hover:underline">How to export your pet from Dubai</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
