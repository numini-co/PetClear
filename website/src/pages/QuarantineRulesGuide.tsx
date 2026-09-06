import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  HelpCircle,
  Globe,
  FileCheck,
  Stethoscope,
  Microscope,
  Syringe,
  Plane,
  Clock,
  PawPrint,
  Ban,
  Home,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { BASE_URL } from '../lib/seo.ts'

/* ─── FAQ accordion helper ─── */
function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#5A5A5A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

/* ─── Page ─── */
export default function QuarantineRulesGuide() {
  const title = 'UAE Pet Quarantine Rules | Does Dubai Quarantine Pets?'
  const description =
    'UAE pet quarantine rules: no automatic quarantine when the file is complete. Detention risk if papers mismatch. Confirm current rules on official sources.'
  const canonical = `${BASE_URL}/guides/pet-quarantine-rules-uae/`
  const ogImage = `${BASE_URL}/assets/og-quarantine-rules.jpg`

  /* FAQ entries: plain is real-sentence text used for FAQPage JSON-LD (no markup). */
  const faqData: { question: string; answer: React.ReactNode; plain: string }[] = [
    {
      question: 'Does the UAE quarantine pets on arrival?',
      answer: (
        <p>
          No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and
          international health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE&apos;s
          main advantages. Compliance replaces quarantine. Incomplete documentation, however, can lead to your pet being
          held, refused entry, confiscated, or re-exported at your expense.
        </p>
      ),
      plain:
        'No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and international health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE\'s main advantages. Compliance replaces quarantine. Incomplete documentation, however, can lead to your pet being held, refused entry, confiscated, or re-exported at your expense.',
    },
    {
      question: 'What makes a pet "compliant" so it avoids quarantine?',
      answer: (
        <p>
          A compliant pet has a valid MOCCAE import permit, an ISO 11784/11785 compliant 15-digit microchip implanted
          before the rabies vaccination, a valid rabies vaccination (pet at least 12 weeks old, vaccinated at least 21 days
          before travel), core vaccinations, a rabies titer test if it is travelling from a high-risk country, an
          international health certificate issued within 10 days of arrival, and an antiparasitic treatment record. Every
          document must show the same microchip number. When all of this lines up, customs clearance typically takes two to
          four hours and the pet does not enter quarantine.
        </p>
      ),
      plain:
        'A compliant pet has a valid MOCCAE import permit, an ISO 11784/11785 compliant 15-digit microchip implanted before the rabies vaccination, a valid rabies vaccination (pet at least 12 weeks old, vaccinated at least 21 days before travel), core vaccinations, a rabies titer test if it is travelling from a high-risk country, an international health certificate issued within 10 days of arrival, and an antiparasitic treatment record. Every document must show the same microchip number. When all of this lines up, customs clearance typically takes two to four hours and the pet does not enter quarantine.',
    },
    {
      question: 'What can cause my pet to be detained or refused at the airport?',
      answer: (
        <p>
          Detention or refusal is driven by non-compliance, not by the country itself. The common triggers are: missing or
          expired MOCCAE import permit, a microchip that does not match the other documents, a rabies vaccine that was given
          before the microchip or is otherwise invalid, a missing rabies titer test for a high-risk country, an
          international health certificate older than 10 days, a banned breed, or any mismatch in the microchip number
          across documents. Incomplete documentation can result in your pet being held, refused entry, confiscated, or
          re-exported at your expense.
        </p>
      ),
      plain:
        'Detention or refusal is driven by non-compliance, not by the country itself. The common triggers are: missing or expired MOCCAE import permit, a microchip that does not match the other documents, a rabies vaccine that was given before the microchip or is otherwise invalid, a missing rabies titer test for a high-risk country, an international health certificate older than 10 days, a banned breed, or any mismatch in the microchip number across documents. Incomplete documentation can result in your pet being held, refused entry, confiscated, or re-exported at your expense.',
    },
    {
      question: 'Do pets from high-risk rabies countries have to be quarantined?',
      answer: (
        <p>
          No. Pets from high-risk countries are not quarantined either — but they must complete the rabies titer test
          (RNATT) pathway before they can travel. The blood sample must be drawn at least 21 days after the rabies
          vaccination, processed at a WOAH/ISO 17025 accredited laboratory, and return a result of at least 0.5 IU/ml. There
          is then a mandatory 90-day waiting period from the date of the blood draw before the pet can enter the UAE. The
          waiting happens before travel, in the home country — not as quarantine on arrival in Dubai.
        </p>
      ),
      plain:
        'No. Pets from high-risk countries are not quarantined either — but they must complete the rabies titer test (RNATT) pathway before they can travel. The blood sample must be drawn at least 21 days after the rabies vaccination, processed at a WOAH/ISO 17025 accredited laboratory, and return a result of at least 0.5 IU/ml. There is then a mandatory 90-day waiting period from the date of the blood draw before the pet can enter the UAE. The waiting happens before travel, in the home country — not as quarantine on arrival in Dubai.',
    },
    {
      question: 'Is there a home or facility quarantine period I need to plan for?',
      answer: (
        <p>
          There is no standard home or facility quarantine period for compliant pets entering the UAE. Compliance — the
          permit, microchip, vaccination, titer test where required, and health certificate — replaces quarantine entirely.
          The main time investment is front-loaded into the pre-travel timeline: roughly 4 to 6 weeks from low-risk
          countries and a minimum of around 4 months from high-risk countries because of the 90-day titer test wait. On
          arrival, if documents are correct, your pet clears customs and goes straight home.
        </p>
      ),
      plain:
        'There is no standard home or facility quarantine period for compliant pets entering the UAE. Compliance — the permit, microchip, vaccination, titer test where required, and health certificate — replaces quarantine entirely. The main time investment is front-loaded into the pre-travel timeline: roughly 4 to 6 weeks from low-risk countries and a minimum of around 4 months from high-risk countries because of the 90-day titer test wait. On arrival, if documents are correct, your pet clears customs and goes straight home.',
    },
    {
      question: 'How does Dubai Pet Relocation guarantee there is no quarantine surprise?',
      answer: (
        <p>
          We treat compliance as the thing that keeps your pet out of detention, so we verify every document before travel.
          We confirm the breed is allowed, check that the microchip was implanted before the rabies vaccination, validate
          the rabies and core vaccinations, manage the titer test and its 90-day wait for high-risk countries, time the
          health certificate within its 10-day window, and make sure the same microchip number appears on every document.
          With our PawPartner and PawVIP tiers we handle the cargo terminal so the clearance is managed end to end and there
          is no surprise at the airport.
        </p>
      ),
      plain:
        'We treat compliance as the thing that keeps your pet out of detention, so we verify every document before travel. We confirm the breed is allowed, check that the microchip was implanted before the rabies vaccination, validate the rabies and core vaccinations, manage the titer test and its 90-day wait for high-risk countries, time the health certificate within its 10-day window, and make sure the same microchip number appears on every document. With our PawPartner and PawVIP tiers we handle the cargo terminal so the clearance is managed end to end and there is no surprise at the airport.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.plain,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'UAE Pet Quarantine Rules', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'UAE Pet Quarantine Rules: Does Dubai Quarantine Pets?',
    description,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords:
      'UAE pet quarantine rules, does Dubai quarantine pets, pet quarantine Dubai, no quarantine UAE pets, pet detention Dubai airport, compliant pet import UAE, MOCCAE quarantine, rabies titer quarantine Dubai, pet refused entry Dubai, Dubai pet customs clearance',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'UAE Pet Quarantine Rules' }]} />

      {/* Hero */}
      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="A relaxed dog at home in Dubai after clearing customs without quarantine"
        eyebrow="Pet Relocation Guide"
        title="UAE Pet Quarantine Rules"
        subtitle="Does the UAE quarantine pets? No — if your pet is fully compliant. Compliance replaces quarantine. Here is exactly what that means, and what triggers detention or refusal at the airport."
        updated="Updated June 2026"
        whatsappMessage="Hi Dubai Pet Relocation, I want to make sure my pet avoids quarantine when arriving in the UAE. Can you check my documents?"
      />

      {/* The short answer: no quarantine if you comply */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                Does the UAE Quarantine Pets? The Short Answer
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                <strong>No — not if your pet is compliant.</strong> The UAE does not require home or facility quarantine for
                pets that meet its import rules. If all documentation is complete and correct — MOCCAE import permit, ISO
                microchip, rabies vaccination, and international health certificate — pets do not require mandatory
                quarantine in Dubai. This is one of the UAE&apos;s main advantages over countries that quarantine every
                arriving animal.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The trade-off is simple: <strong>compliance replaces quarantine</strong>. Instead of waiting out a
                quarantine period after arrival, you do the work up front — permit, microchip, vaccination, titer test where
                required, and health certificate. When everything lines up, your pet clears customs and goes straight home.
                When something is missing, that is when detention happens.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5 text-[#4F5BD5]" />
                  Why Compliant Pets Skip Quarantine
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The MOCCAE import permit pre-clears your pet before it travels</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The ISO microchip ties every document to one animal</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Rabies vaccination (and titer test, if high-risk) proves immunity in advance</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The health certificate confirms the pet is fit to travel on arrival day</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Quarantine at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Compliant Pet</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">No quarantine</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Customs clearance typically 2–4 hours, then straight home.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Non-Compliant Pet</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Held, refused, or re-exported</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Incomplete documentation can mean the pet is held at the airport, at the owner&apos;s expense.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">High-Risk Country</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Titer test + 90-day wait</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">The waiting period happens before travel, in the home country — not as quarantine in Dubai.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Where the Time Goes</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Front-loaded, not on arrival</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">~4–6 weeks from low-risk countries; ~4 months from high-risk countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What compliance means */}
      <section id="what-compliance-means" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              What "Full Compliance" Actually Means
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Quarantine is the fallback for animals the authorities cannot verify. The UAE lets you verify your pet in
              advance instead. These are the pieces that, together, make a pet compliant — and keep it out of quarantine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">MOCCAE Import Permit</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                The gatekeeper. Applied for online via the MOCCAE portal or app, it costs AED 200 per pet and is valid for
                30 days from issuance, with a release fee on arrival of AED 500 per dog or AED 250 per cat. Without it, your
                pet cannot enter the UAE — and an arrival without a valid permit is exactly the kind of non-compliance that
                leads to detention.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">ISO Microchip</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                A 15-digit ISO 11784/11785 compliant microchip, implanted <strong>before</strong> the rabies vaccination.
                The microchip number is the thread that ties every document together. If your pet was vaccinated before being
                microchipped, MOCCAE treats the vaccination as invalid for UAE entry.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Rabies &amp; Core Vaccination</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                The pet must be at least 12 weeks old at vaccination, vaccinated at least 21 days before travel, and within
                12 months of arrival, with an inactivated or recombinant rabies vaccine. Core vaccines are DHPPIL for dogs
                and FVRCP for cats. Valid vaccination is a core part of what replaces quarantine.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Health Certificate &amp; Antiparasitics</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                An international health certificate from a government-accredited veterinarian, valid for just 10 days from
                issuance to arrival, plus internal and external antiparasitic treatment within 14 days of arrival. Because the
                window is so short, this is one of the last documents prepared — and a certificate older than 10 days is a
                detention trigger.
              </p>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Every Document Must Show the Same Microchip Number</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A mismatch between, for example, the microchip certificate and the vaccination certificate is grounds for
                  automatic rejection at customs. Verifying that the same 15-digit number appears on every document is one of
                  the simplest ways to avoid a non-compliance hold.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <WhatsAppBtn
              label="Check My Pet's Compliance"
              message="Hi Dubai Pet Relocation, I want to confirm my pet is fully compliant so it avoids quarantine in the UAE. Can you review my documents?"
            />
          </div>
        </div>
      </section>

      {/* What triggers detention or refusal */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            What Actually Triggers Detention or Refusal
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            There is no quarantine for a compliant pet — but there is a real risk of being held, refused entry, confiscated,
            or re-exported when documentation is incomplete. These are the triggers, and how to avoid each one.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Trigger</th>
                  <th>What Happens</th>
                  <th>How to Stay Compliant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Missing or expired MOCCAE permit</td>
                  <td>Pet cannot legally enter; held or refused at the airport</td>
                  <td>Apply within the 30-day validity and confirm it is valid on arrival day</td>
                </tr>
                <tr>
                  <td className="font-medium">Microchip number mismatch</td>
                  <td>Automatic rejection at customs</td>
                  <td>Confirm the same 15-digit ISO number on every document</td>
                </tr>
                <tr>
                  <td className="font-medium">Vaccine given before microchip</td>
                  <td>Rabies vaccination treated as invalid for UAE entry</td>
                  <td>Microchip first, then vaccinate; re-vaccinate if the order was wrong</td>
                </tr>
                <tr>
                  <td className="font-medium">Missing titer test (high-risk country)</td>
                  <td>Pet is not eligible to travel; entry refused</td>
                  <td>Complete the RNATT (≥0.5 IU/ml) and the 90-day wait before travel</td>
                </tr>
                <tr>
                  <td className="font-medium">Health certificate older than 10 days</td>
                  <td>Document rejected on arrival</td>
                  <td>Time the vet appointment so the certificate is within 10 days of arrival</td>
                </tr>
                <tr>
                  <td className="font-medium">Banned breed</td>
                  <td>Cannot be imported; risk of confiscation and fines</td>
                  <td>Confirm the breed is allowed before starting the process</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-[#4F5BD5]">
              <h3 className="font-bold text-[#4F5BD5] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Compliant = No Quarantine
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                With a valid permit, matching microchip, valid vaccination, titer test where required, and a current health
                certificate, customs clearance typically takes two to four hours and your pet does not enter quarantine. It
                clears the cargo terminal and goes home the same day.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Non-Compliant = Held at the Airport
              </h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Incomplete documentation can lead to your pet being held, refused entry, confiscated, or re-exported at your
                expense. The detention is a consequence of the paperwork gap — not a routine quarantine that every arriving
                pet must serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-risk titer pathway */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                High-Risk Countries: The Titer Pathway Replaces Quarantine
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Pets from high-risk rabies countries are <strong>not quarantined on arrival</strong> in Dubai. Instead, they
                complete the rabies titer test (RNATT) pathway before they fly. This is the UAE&apos;s alternative to
                quarantine: prove immunity in advance, in the home country, rather than confine the animal after it lands.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                High-risk countries include most of Africa, Latin America, Central Asia, the Middle East, and parts of Asia
                such as India, Pakistan, and the Philippines. The list is maintained by MOCCAE and can change, so always
                verify your country&apos;s current status before assuming you can skip the titer test. Pets from Bahrain and
                Qatar must also have a titer test, even though those countries are otherwise low-risk.
              </p>
              <div className="bg-[#F5F6FD] rounded-[20px] p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                  The Wait Happens Before Travel
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  The mandatory 90-day waiting period runs from the date the blood sample is collected — in the home country.
                  By the time your pet boards a flight to Dubai, the wait is already complete. There is no on-arrival
                  quarantine to serve on top of it.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">RNATT Requirements</h3>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Blood sample drawn <strong>≥21 days after</strong> the rabies vaccination</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Minimum result: <strong>≥0.5 IU/ml</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Processed at a <strong>WOAH/ISO 17025 accredited laboratory</strong></span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>90-day waiting period</strong> from the blood draw date before entry</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Result must be included in the MOCCAE permit application</span></li>
              </ul>
              <div className="warning-box mt-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2A2A2A]">
                    The 90-day waiting period cannot be waived, expedited, or bypassed. From a high-risk country, the minimum
                    timeline from scratch is roughly 4 months. Read the full process in our{' '}
                    <Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-semibold hover:underline">
                      rabies titer test guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrival day: what happens at the cargo terminal */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Arrival Day: What Happens Instead of Quarantine
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              For a compliant pet, the airport is a clearance step, not a confinement step. Here is what a no-quarantine
              arrival looks like.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Pet Arrives as Manifest Cargo</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  All pets entering Dubai travel as manifest cargo and arrive at the DXB or DWC cargo terminal. They cannot
                  fly in the cabin or as checked baggage on flights to Dubai. This is the standard route for every arriving
                  pet, compliant or not.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Documents Are Presented</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  You or your agent present the MOCCAE import permit, original health certificate, vaccination records,
                  microchip certificate, titer test result if applicable, antiparasitic treatment record, and the
                  owner&apos;s passport and UAE visa. This is the moment compliance is checked.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Customs Clearance — Not Quarantine</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  If all documents are correct, customs clearance typically takes two to four hours and your pet does not
                  enter quarantine. The only thing standing between the cargo terminal and home is the paperwork check — which
                  is why getting the documents right is everything.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0">
                <PawPrint className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Home, Then Municipality Registration</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet goes home the same day. Within 30 days of arrival you register it with Dubai Municipality via the
                  Aleef app or the Dubai Smart Services portal — a separate residency step, not quarantine. With our
                  PawPartner and PawVIP tiers we handle the cargo terminal so you do not have to.
                </p>
              </div>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Ban className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">The Only Way to End Up "Held"</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A pet is only held, refused, or re-exported when something in this chain is missing or wrong. There is no
                  blanket quarantine that every animal must serve — the risk is entirely about compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Dubai Pet Relocation guarantees no quarantine surprise */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation Guarantees a No-Quarantine Arrival</h3>
            </div>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">
              Because quarantine in the UAE is really about compliance, our entire job is to make your pet compliant before
              it travels. We triple-check every document so the only outcome at the airport is a clean clearance.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-2">1</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Eligibility Check</p>
                <p className="text-xs text-[#5A5A5A] mt-1">Confirm the breed is allowed and whether your country is high-risk for rabies.</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-2">2</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Document Verification</p>
                <p className="text-xs text-[#5A5A5A] mt-1">Check microchip-before-vaccine order and that one microchip number appears on every document.</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-2">3</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Titer &amp; Timing</p>
                <p className="text-xs text-[#5A5A5A] mt-1">Manage the titer test and 90-day wait for high-risk countries, and time the 10-day health certificate.</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-2">4</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Terminal Handling</p>
                <p className="text-xs text-[#5A5A5A] mt-1">On PawPartner and PawVIP tiers we manage the cargo terminal so clearance is handled end to end.</p>
              </div>
            </div>
            <div className="mt-8">
              <WhatsAppBtn
                label="Plan a No-Quarantine Arrival"
                message="Hi Dubai Pet Relocation, I want to make sure my pet is fully compliant and avoids any quarantine or detention when arriving in the UAE. Can you help me plan it?"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about pet quarantine rules for the UAE.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <OfficialSources />

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The complete checklist of everything that makes a pet compliant for UAE entry — and keeps it out of quarantine.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Rabies Titer Test (RNATT)</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The high-risk-country pathway that replaces on-arrival quarantine, including the 90-day wait.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet Import to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our coordination service that handles compliance end to end so there is no quarantine surprise.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Make Sure Your Pet Skips Quarantine
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            In the UAE, compliance replaces quarantine — and a single missing document is the difference between a two-hour
            clearance and a hold at the airport. Dubai Pet Relocation verifies every requirement before travel so your pet
            goes straight home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Check My Compliance on WhatsApp"
              message="Hi Dubai Pet Relocation, I want to confirm my pet is fully compliant and will avoid quarantine when arriving in the UAE. Can you review my situation?"
              className="whatsapp-pulse"
            />
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
