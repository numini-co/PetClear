import { useState } from 'react'
import {
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Plane,
  Clock,
  Stethoscope,
  MessageCircle,
  Microscope,
  Ban,
  PawPrint,
  Syringe,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import LastVerified from '../components/LastVerified.tsx'

/* ─── FAQ accordion helper ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="faq-question w-full text-left"
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 ml-3" /> : <ChevronDown className="w-5 h-5 shrink-0 ml-3" />}
      </button>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

/* ─── WhatsApp link builder ─── */

function WhatsAppLink({ text, label, className }: { text: string; label: string; className?: string }) {
  return (
    <a
      href={getWhatsAppUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  )
}

/* ─── Page ─── */
export default function ImportRequirementsPage() {
  const checklistItems = [
    'Confirm your pet\'s breed is not banned in the UAE',
    'Check if your origin country requires a rabies titer test',
    'Get an ISO 11784/11785 microchip implanted (must happen before rabies vaccination)',
    'Administer rabies vaccination (pet must be ≥12 weeks old; ≥21 days before travel)',
    'Administer core vaccines (DHPPIL for dogs, FVRCP for cats)',
    'If high-risk country: rabies titer test (≥0.5 IU/ml), then wait 90 days',
    'Apply for MOCCAE import permit (valid 30 days from issuance — confirm the current portal fee)',
    'Book manifest cargo flight (pets cannot fly in cabin or as checked baggage to Dubai)',
    'Administer antiparasitic treatment within 14 days of arrival',
    'Obtain International Health Certificate within 10 days of arrival',
    'Register with Dubai Municipality within 30 days of arrival',
  ]

  const steps = [
    {
      num: 1,
      title: 'Check Your Breed and Country',
      days: 'Day 0',
      body: 'Before you do anything, confirm two things: (1) Is your dog\'s breed banned in the UAE? (2) Is your origin country high-risk or low-risk for rabies? This determines whether you need a titer test and how long you\'ll wait.',
      icon: <Ban className="w-5 h-5" />,
      warn: 'The exact high-risk/low-risk country list changes. Always verify your country\'s status on the MOCCAE portal before starting.',
    },
    {
      num: 2,
      title: 'Implant the Microchip',
      days: 'Day 0',
      body: 'Your pet must have an ISO 11784/11785 compliant 15-digit microchip. This must be implanted before the rabies vaccination. If your pet was vaccinated before being microchipped, the vaccination is invalid for UAE entry. The microchip number must appear on every subsequent document.',
      icon: <Microscope className="w-5 h-5" />,
      warn: 'If your pet was already vaccinated before getting microchipped, the vaccination is invalid for UAE entry. You\'ll need to re-vaccinate after microchipping and wait another 21 days.',
    },
    {
      num: 3,
      title: 'Rabies Vaccination',
      days: 'Day 0',
      body: 'Your pet must be at least 12 weeks old at the time of vaccination. The vaccine must be inactivated or recombinant (not attenuated live virus), administered ≥21 days before travel, and within 12 months of arrival.',
      icon: <Syringe className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 4,
      title: 'Core Vaccinations',
      days: 'Day 0–14',
      body: 'Dogs: DHPPIL (Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospirosis). Cats: FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia). These are typically administered alongside the rabies vaccine or shortly after.',
      icon: <Shield className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 5,
      title: 'Rabies Titer Test — If Required',
      days: 'Day 21–31',
      body: 'If your pet is from a high-risk country, a blood sample must be drawn ≥21 days after the rabies vaccination. The sample is sent to a WOAH/ISO 17025 accredited laboratory. Minimum result: ≥0.5 IU/ml. You must then wait 90 days from the date of blood sample collection before your pet can enter the UAE.',
      icon: <Stethoscope className="w-5 h-5" />,
      warn: 'Pets from Bahrain and Qatar must have a titer test even though they are classified as low-risk. This is frequently missed and causes delays.',
    },
    {
      num: 6,
      title: 'Apply for MOCCAE Import Permit',
      days: 'Day 21–90',
      body: 'Apply online via the MOCCAE portal or the MOCCAE mobile app. Validity: 30 days from issuance. Processing time: typically a few working days. Confirm the current permit and arrival-release fees on the official portal — published amounts have differed. Required: Copy of owner\'s passport, UAE visa, pet\'s microchip number, vaccination records, and titer test result (if applicable).',
      icon: <FileText className="w-5 h-5" />,
      warn: 'Apply as close to your travel date as safely possible (within the 30-day validity) while leaving time for flight booking.',
    },
    {
      num: 7,
      title: 'Book Manifest Cargo Flight',
      days: '2–4 weeks before travel',
      body: 'All pets entering Dubai must travel as manifest cargo. They cannot fly in the cabin or as checked baggage on flights to Dubai. Emirates SkyCargo is most common for DXB arrivals (72 hours advance notice). Etihad Cargo is an alternative for Abu Dhabi arrivals. Cargo costs typically range from AED 3,000–12,000 depending on route, airline, and pet size.',
      icon: <Plane className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 8,
      title: 'Health Certificate and Antiparasitics',
      days: 'Within 10–14 days of travel',
      body: 'Antiparasitic treatment: internal (deworming/Praziquantel) and external (Fipronil or Permethrin) within 14 days before arrival. International Health Certificate: issued by a government-accredited veterinarian within 10 days of arrival.',
      icon: <Stethoscope className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 9,
      title: 'Arrival and Customs Clearance',
      days: 'Day of arrival',
      body: 'Your pet arrives at DXB or DWC cargo terminal. You (or your agent) present the MOCCAE import permit, original health certificate, vaccination records, microchip certificate, titer test result (if applicable), antiparasitic treatment record, and owner\'s passport and UAE visa. If all documents are correct, customs clearance takes 2–4 hours. Your pet does not enter quarantine.',
      icon: <CheckCircle className="w-5 h-5" />,
      warn: null,
    },
    {
      num: 10,
      title: 'Dubai Municipality Registration',
      days: 'Within 30 days',
      body: 'Register your pet via the Aleef app or Dubai Smart Services portal. You need your Emirates ID, pet\'s microchip number, current vaccination records, pet photo, and your residence address (Makani number). Fee: ~AED 10. Annual renewal required. A physical municipality ID tag must be worn on your pet\'s collar at all times.',
      icon: <FileText className="w-5 h-5" />,
      warn: null,
    },
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title="UAE Pet Import Requirements 2026 | Permits & Documents"
        description="Complete guide to UAE pet import requirements for Dubai. MOCCAE permit, vaccination rules, banned breeds, health certificates, microchip, rabies titer test, and more."
        keywords="UAE pet import requirements, MOCCAE import permit, Dubai pet import rules, pet vaccination requirements UAE, dog import Dubai, cat import Dubai, banned dog breeds Dubai"
        canonical={`${BASE_URL}/guides/uae-pet-import-requirements/`}
        ogType="article"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do dogs need to be quarantined in Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. If all documentation is complete and correct — including the MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. However, incomplete documentation can result in conditional quarantine at the owner\'s expense.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the MOCCAE import permit for pets?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The MOCCAE import permit is a mandatory approval from the UAE Ministry of Climate Change and Environment required for all pets entering the UAE. It is valid for 30 days from issuance. Confirm the current permit and arrival-release fees on the official portal before you apply — published amounts have differed. You must apply online via the MOCCAE portal or app before your pet travels.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is a rabies titer test required for Dubai?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A rabies titer test is only required for pets coming from high-risk rabies countries. It is not required for pets from low-risk countries including the UK, EU, USA, Canada, Australia, and New Zealand. However, pets from Bahrain and Qatar are a special exception — they do require a titer test despite being classified as low-risk.',
                },
              },
              {
                '@type': 'Question',
                name: 'What documents are needed to bring a cat to the UAE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To bring a cat to the UAE, you need: (1) MOCCAE import permit, (2) ISO 11784/11785 microchip certificate, (3) rabies vaccination certificate (≥21 days old), (4) FVRCP vaccination records, (5) international health certificate (within 10 days of travel), (6) antiparasitic treatment record, and (7) copy of owner\'s passport and UAE visa.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does pet relocation to Dubai take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting the process at least 8 weeks before your planned move.',
                },
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'UAE Pet Import Requirements 2026: Complete Guide to Bringing Dogs & Cats to Dubai',
            description: 'Complete guide to UAE pet import requirements for Dubai. MOCCAE permit, vaccination rules, banned breeds, health certificates, microchip, rabies titer test, and more.',
            author: {
              '@type': 'Organization',
              name: 'Dubai Pet Relocation',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Dubai Pet Relocation',
            },
            datePublished: '2026-06-01',
            dateModified: '2026-06-01',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${BASE_URL}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'UAE Pet Import Requirements',
                item: `${BASE_URL}/guides/uae-pet-import-requirements/`,
              },
            ],
          },
        ]}
      />
      <Breadcrumb
        items={[
          
          { label: 'Guides', path: '/guides/' },
          { label: 'UAE Pet Import Requirements' },
        ]}
      />
      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/import-hero.jpg"
        imageAlt="Golden retriever in IATA-compliant travel crate at Dubai Airport cargo terminal"
        eyebrow="Pet Relocation Guide"
        title="UAE Pet Import Requirements 2026: Complete Guide to Bringing Dogs & Cats to Dubai"
        subtitle="Everything you need to bring your pet to Dubai. No quarantine. No hidden steps. Just a clear, MOCCAE-aligned checklist."
        updated="Updated June 2026"
      />

      {/* ═══════════ QUICK CHECKLIST ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-10 lg:p-12 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A]">Your Quick Checklist</h2>
            </div>
            <p className="text-[#5A5A5A] mb-8">
              Here&apos;s the full document list in one place. Every item below is mandatory. Skip one, and your pet could be refused entry, confiscated, or re-exported at your expense.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#4F5BD5]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#4F5BD5]">{i + 1}</span>
                  </div>
                  <span className="text-[#2A2A2A] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-bold text-[#2A2A2A] mb-3">Key MOCCAE Rules at a Glance</h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li><strong>Import permit:</strong> valid 30 days from issuance — confirm the current fee on the official portal</li>
                <li><strong>Pets per person:</strong> Maximum 2 pets per person per year</li>
                <li><strong>Minimum import age:</strong> 12 weeks (low-risk countries) / 15 weeks (high-risk countries)</li>
                <li><strong>Rabies antibody titer:</strong> Required only from high-risk countries — result ≥0.5 IU/ml, drawn ≥21 days after vaccination, valid 365 days</li>
                <li><strong>Transport:</strong> Pets are shipped per IATA Live Animals Regulations (LAR)</li>
              </ul>
              <p className="text-xs text-[#8A8A8A]">Source: MOCCAE (moccae.gov.ae) — verified June 2026.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
              <WhatsAppLink
                text="Hi, I need help understanding the import requirements for my pet from [country] to Dubai."
                label="Get help with your documents"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REQUIRED DOCUMENTS TABLE ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What You Need to Bring Your Pet to Dubai (Quick Checklist)
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            Every item below is mandatory. Skip one, and your pet could be refused entry, confiscated, or re-exported at your expense.
          </p>

          <div className="overflow-x-auto rounded-[20px] shadow-sm border border-gray-100 mb-8">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Is</th>
                  <th>Validity</th>
                  <th>Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">MOCCAE Import Permit</td>
                  <td>Official approval from UAE Ministry of Climate Change and Environment</td>
                  <td>30 days from issuance</td>
                  <td>Verify on portal</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">ISO Microchip Certificate</td>
                  <td>15-digit ISO 11784/11785 compliant microchip</td>
                  <td>Permanent</td>
                  <td>300–600 (at vet)</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Vaccination Certificate</td>
                  <td>Proof of rabies vaccine administered by a licensed vet</td>
                  <td>1 year (annual booster)</td>
                  <td>Included in vet fee</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Core Vaccination Records</td>
                  <td>DHPPIL (dogs) or FVRCP (cats)</td>
                  <td>Per vaccine schedule</td>
                  <td>100–200</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Rabies Titer Test (RNATT)</td>
                  <td>Blood test proving rabies immunity</td>
                  <td>90-day wait from sample</td>
                  <td>500–1,200</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">International Health Certificate</td>
                  <td>Government-accredited vet certificate with parasite treatments</td>
                  <td><strong>10 days</strong> from issuance</td>
                  <td>400–1,500</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Antiparasitic Treatment Record</td>
                  <td>Internal deworming + external flea/tick treatment</td>
                  <td>Within 14 days of arrival</td>
                  <td>50–150</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Owner&apos;s Passport &amp; UAE Visa</td>
                  <td>Required for permit application and customs</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <LastVerified className="mb-8 text-xs text-[#8A8A8A]" />

          <div className="warning-box mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A]">
                <strong>Critical:</strong> Every document must show the <strong>same microchip number</strong>. A mismatch between the microchip certificate and the vaccination certificate = automatic rejection at customs.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF0FC] rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-[#2A2A2A] mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#4F5BD5]" />
              How Long Does It Take?
            </h3>
            <ul className="space-y-2 text-[#5A5A5A]">
              <li><strong className="text-[#2A2A2A]">From low-risk countries</strong> (UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore): <strong className="text-[#2A2A2A]">4–6 weeks</strong></li>
              <li><strong className="text-[#2A2A2A]">From high-risk countries</strong> (most of Africa, Latin America, Central Asia, parts of Asia): <strong className="text-[#2A2A2A]">Minimum 4 months</strong> (due to 90-day titer test waiting period)</li>
            </ul>
          </div>

          <WhatsAppLink
            text="Hi, I need help with my pet's documents for import to Dubai. Can you check my timeline?"
            label="Get help with your documents — WhatsApp us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ STEP-BY-STEP TIMELINE ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Step-by-Step: How to Import Your Pet to Dubai
          </h2>
          <p className="text-[#5A5A5A] mb-10">
            Follow these 10 steps in order. Each builds on the previous one.
          </p>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4F5BD5]/20 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="relative sm:pl-14">
                  {/* timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-[#4F5BD5] text-white items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                  <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="sm:hidden w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-xs">
                        {step.num}
                      </div>
                      <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5]">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2A2A2A] text-lg">{step.title}</h3>
                        <span className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wide">{step.days}</span>
                      </div>
                    </div>
                    <p className="text-[#5A5A5A] leading-relaxed mb-3">{step.body}</p>
                    {step.warn && (
                      <div className="warning-box">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#2A2A2A]">{step.warn}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppLink
              text="Hi, I have questions about my pet's import timeline to Dubai."
              label="Questions about your timeline? Ask an expert on WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ REQUIRED DOCUMENTS (DETAILED) ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Required Documents Checklist</h2>
          <p className="text-[#5A5A5A] mb-10">Every pet entering the UAE needs these documents. No exceptions.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MOCCAE Import Permit */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">MOCCAE Import Permit</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm mb-4">
                The import permit is the gatekeeper. Without it, your pet cannot enter the UAE.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li><strong>Apply:</strong> Online at moccae.gov.ae or via the MOCCAE app</li>
                <li><strong>Cost:</strong> confirm the current permit and arrival-release fees on the official MOCCAE portal</li>
                <li><strong>Processing:</strong> 3–7 working days</li>
                <li><strong>Validity:</strong> 30 days from issuance</li>
              </ul>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  <strong>Warning:</strong> The permit is valid for a limited window. Apply too early, and it may expire before you travel. Apply too late, and you may miss your flight booking window.
                </p>
              </div>
            </div>

            {/* ISO Microchip Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">ISO Microchip Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Must be <strong>ISO 11784/11785 compliant</strong> (15-digit number)</li>
                <li>Must be implanted <strong>before</strong> the rabies vaccination</li>
                <li>The microchip number must appear on every document</li>
              </ul>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  <strong>Warning:</strong> If your pet was already vaccinated before getting microchipped, the vaccination is invalid for UAE entry. You&apos;ll need to re-vaccinate after microchipping and wait another 21 days.
                </p>
              </div>
            </div>

            {/* Rabies Vaccination Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Rabies Vaccination Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Pet must be <strong>≥12 weeks old</strong> at vaccination</li>
                <li>Must be <strong>≥21 days old</strong> at time of travel</li>
                <li>Must be <strong>within 12 months</strong> of arrival</li>
                <li>Must be inactivated or recombinant vaccine</li>
                <li>Certificate must include: microchip number, vaccine batch number, manufacturer, date of administration, vet&apos;s signature and stamp</li>
              </ul>
            </div>

            {/* Rabies Titer Test */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Rabies Titer Test (RNATT)</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Required for pets from <strong>high-risk rabies countries</strong></li>
                <li><strong>Not required</strong> for: UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore</li>
                <li><strong>Required for:</strong> Bahrain and Qatar (special exception)</li>
                <li>Blood sample drawn <strong>≥21 days after</strong> rabies vaccination</li>
                <li>Minimum result: <strong>≥0.5 IU/ml</strong></li>
                <li>90-day waiting period from sample collection date</li>
                <li>Must be processed at a <strong>WOAH/ISO 17025 accredited laboratory</strong></li>
              </ul>
            </div>

            {/* International Health Certificate */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">International Health Certificate</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Issued by a <strong>government-accredited or official veterinarian</strong></li>
                <li>Valid for <strong>10 days</strong> from issuance to arrival</li>
                <li>Must include: pet owner&apos;s details, microchip number, vaccination records, antiparasitic treatment dates and products used, vet&apos;s official stamp and signature</li>
              </ul>
            </div>

            {/* Antiparasitic Treatment Record */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Antiparasitic Treatment Record</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>Internal deworming</strong> (Praziquantel or equivalent) within 14 days of arrival</li>
                <li><strong>External parasite treatment</strong> (Fipronil or Permethrin) within 14 days of arrival</li>
                <li>Record must include product name, date of administration, and vet&apos;s signature</li>
              </ul>
            </div>

            {/* Owner's Passport */}
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 md:col-span-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Owner&apos;s Passport and UAE Visa</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Required for permit application and customs clearance</li>
                <li>The permit applicant must match the person collecting the pet</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <WhatsAppLink
              text="Hi, I need help with my pet's documents for import to Dubai. Can you check what I have?"
              label="Get help with your documents — Send us a photo of what you have, and we'll check it"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ BANNED AND RESTRICTED BREEDS ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            Banned and Restricted Dog Breeds
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            The UAE enforces a strict federal breed ban. If your dog is on this list, it <strong>cannot be imported</strong> — unless it is a certified service or emotional support animal.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-red-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                Completely Banned (Cannot Enter the UAE)
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Pit Bull Types</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>American Pit Bull Terrier</li>
                  <li>Staffordshire Bull Terrier</li>
                  <li>American Staffordshire Terrier</li>
                  <li>American Bully</li>
                  <li>Any Bull Terrier or Pit Bull cross</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Mastiff Types</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>Brazilian Mastiff (Fila Brasileiro)</li>
                  <li>Argentinian Mastiff (Dogo Argentino)</li>
                  <li>Tibetan Mastiff</li>
                  <li>Neapolitan Mastiff</li>
                  <li>French Mastiff (Dogue de Bordeaux)</li>
                  <li>Boerboel</li>
                  <li>Bullmastiff</li>
                  <li>Cane Corso (Italian Mastiff)</li>
                  <li>Bully Kutta (Alangu / Indian Mastiff)</li>
                  <li>Perro de Presa Canario (Canary Mastiff)</li>
                  <li>Any Mastiff cross or hybrid</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Other Banned Breeds</h4>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>Japanese Tosa (Tosa Inu)</li>
                  <li>Wolf-dog hybrids (any dog mixed with a wolf)</li>
                  <li>Savannah cats and Bengal cats (unless 5th generation removed from pedigree)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-l-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Restricted Breeds (Dubai-Specific Rules)
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-4">
                These breeds are permitted in the UAE but have <strong>additional restrictions in Dubai</strong>:
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Cannot live in apartments</li>
                <li>Must be leashed and muzzled in public</li>
                <li>Must be registered with the Veterinary Services Division</li>
              </ul>
              <h4 className="font-semibold text-[#2A2A2A] text-sm mb-2">Restricted breeds:</h4>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Bull Terrier (including Miniature)</li>
                <li>Husky</li>
                <li>English Bulldog / Old English Bulldog</li>
                <li>Perro de Presa Mallorquin</li>
                <li>Shar Pei</li>
                <li>Rottweiler (in some community contexts)</li>
                <li>Doberman Pinscher (in some community contexts)</li>
                <li>Boxer</li>
              </ul>
              <div className="warning-box mt-4">
                <p className="text-sm text-[#2A2A2A]">
                  Some sources list Rottweiler, Doberman Pinscher, and Boxer as fully banned. Other authoritative sources classify them as restricted. <strong>Always verify with MOCCAE before importing these breeds.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              Service and Emotional Support Animal Exceptions
            </h3>
            <p className="text-[#5A5A5A] mb-4">
              Banned breeds may receive an exception <strong>only</strong> if they are:
            </p>
            <ul className="text-[#5A5A5A] space-y-2 mb-4">
              <li>Certified <strong>service animals</strong> (trained by an ADI or IGDF accredited organization)</li>
              <li>Certified <strong>emotional support animals</strong> (for medical purposes)</li>
            </ul>
            <p className="text-[#5A5A5A] mb-4">Required documentation:</p>
            <ul className="text-[#5A5A5A] space-y-1 mb-4">
              <li>Training record from an accredited training centre</li>
              <li>Medical records justifying the need for the animal</li>
            </ul>
            <div className="warning-box">
              <p className="text-sm text-[#2A2A2A]">
                <strong>Penalty warning:</strong> Non-compliance with breed restrictions can result in fines from <strong>AED 10,000 to AED 700,000</strong>, possible jail sentences, and <strong>confiscation of the animal</strong>.
              </p>
            </div>
          </div>

          <WhatsAppLink
            text="Hi, I want to check if my pet's breed is eligible for import to Dubai."
            label="Check my pet's eligibility — WhatsApp us your breed and we'll confirm the rules"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ VACCINATION REQUIREMENTS ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Vaccination Requirements</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Rabies Vaccination (Mandatory for All)
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-2">
                <li><strong>Minimum age:</strong> 12 weeks at first vaccination</li>
                <li><strong>Pre-travel window:</strong> Administered between 21 days and 12 months prior to entering the UAE</li>
                <li><strong>Accepted types:</strong> Inactivated or recombinant vaccines only</li>
                <li><strong>Not accepted:</strong> Attenuated live virus vaccines</li>
                <li><strong>Boosters:</strong> Annual booster required, or follow manufacturer&apos;s guidance for 2-3 year vaccines</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Core Vaccinations — Dogs
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Canine Distemper Virus (CDV)</li>
                <li>Canine Parvovirus (CPV)</li>
                <li>Infectious Canine Hepatitis (Adenovirus)</li>
                <li>Leptospirosis (Canicola and Icterohaemorrhagiae)</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Core Vaccinations — Cats
              </h3>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Feline Panleukopenia (FPV / Feline Distemper)</li>
                <li>Feline Rhinotracheitis (FHV-1 / Herpes Virus)</li>
                <li>Feline Calicivirus (FCV)</li>
                <li>Feline Leukemia (FeLV) — recommended by some authorities</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Vaccination Timing — Why Order Matters</h3>
              <ol className="text-sm text-[#5A5A5A] space-y-2 list-decimal list-inside">
                <li><strong>Microchip first.</strong> Always. The microchip must precede the rabies vaccination.</li>
                <li><strong>Rabies vaccination second.</strong> Wait ≥21 days before travel.</li>
                <li><strong>Core vaccines third.</strong> Can be given alongside rabies or shortly after.</li>
                <li><strong>Titer test fourth (if required).</strong> Blood drawn ≥21 days after rabies vaccination.</li>
                <li><strong>Health certificate last.</strong> Within 10 days of arrival.</li>
              </ol>
            </div>
          </div>

          <div className="warning-box">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> If your vaccination records show the rabies vaccine was given before the microchip, MOCCAE will reject your import permit. You&apos;ll need to re-vaccinate after microchipping and restart the timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ RABIES TITER TEST ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Rabies Titer Test Rules</h2>
          <p className="text-[#5A5A5A] mb-8">
            The rabies titer test (also called RNATT — Rabies Neutralising Antibody Titre Test) proves that your pet&apos;s rabies vaccine worked.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Do You Need a Titer Test?</h3>
              <p className="text-[#5A5A5A] mb-3">
                <strong>Yes, if your pet is from a high-risk country.</strong> Most of Africa, Latin America, Central Asia, the Middle East, and parts of Asia are classified as high-risk.
              </p>
              <p className="text-[#5A5A5A] mb-3">
                <strong>No, if your pet is from a low-risk country:</strong> UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore, and most other developed nations.
              </p>
              <p className="text-[#5A5A5A] mb-4">
                <strong>Yes, even if low-risk:</strong> Pets from <strong>Bahrain and Qatar</strong> must have a titer test. This is a specific exception.
              </p>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  The high-risk/low-risk country list is maintained by MOCCAE and changes. Verify your country&apos;s current status in the MOCCAE portal before skipping the titer test.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Titer Test Requirements</h3>
              <ul className="text-[#5A5A5A] space-y-2">
                <li>Blood sample drawn <strong>≥21 days after</strong> primary rabies vaccination</li>
                <li>Minimum result: <strong>≥0.5 IU/ml</strong></li>
                <li>Must be processed at a <strong>WOAH/ISO 17025 accredited laboratory</strong></li>
                <li><strong>90-day waiting period</strong> from the date of blood sample collection before the pet can enter the UAE</li>
                <li>The test result must be included in your MOCCAE permit application</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">Titer Test Timeline Example</h3>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="font-semibold">Day 0</td><td>Microchip + rabies vaccination</td></tr>
                  <tr><td className="font-semibold">Day 21</td><td>Blood sample for titer test</td></tr>
                  <tr><td className="font-semibold">Day 31</td><td>Receive result (≥0.5 IU/ml)</td></tr>
                  <tr><td className="font-semibold">Day 111</td><td>Apply for MOCCAE import permit (90-day wait complete)</td></tr>
                  <tr><td className="font-semibold">Day 118</td><td>Book cargo flight</td></tr>
                  <tr><td className="font-semibold">Day 121</td><td>Antiparasitic treatment + health certificate</td></tr>
                  <tr><td className="font-semibold">Day 121+</td><td>Pet arrives in Dubai</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-semibold text-[#2A2A2A]">
              Total minimum time from scratch for high-risk countries: ~4 months.
            </p>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> The 90-day waiting period is <strong>not negotiable</strong>. You cannot apply for the import permit or book travel until this period has passed. There are no exceptions.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I have questions about the rabies titer test timeline for my pet coming to Dubai."
            label="Ask an expert about your titer test timeline"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ IMPORT PERMIT APPLICATION ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Import Permit Application</h2>
          <p className="text-[#5A5A5A] mb-8">
            The MOCCAE import permit is the single most important document for bringing your pet to Dubai. Without it, your pet cannot enter the country.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">How to Apply</h3>
              <ol className="text-[#5A5A5A] space-y-2 list-decimal list-inside">
                <li><strong>Online:</strong> Visit <a href="https://www.moccae.gov.ae/en/services/export-import-services/import-permit-pets.aspx" target="_blank" rel="noopener noreferrer" className="text-[#4F5BD5] underline">moccae.gov.ae</a> and navigate to the pet import permit section</li>
                <li><strong>Mobile app:</strong> Download the MOCCAE app (available on iOS and Android)</li>
                <li><strong>Through a licensed agent:</strong> Dubai Pet Relocation can submit the application on your behalf</li>
              </ol>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">What You&apos;ll Need</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li>Copy of your passport</li>
                <li>UAE visa or proof of residency</li>
                <li>Pet&apos;s ISO microchip number</li>
                <li>Rabies vaccination certificate (with microchip number, batch number, manufacturer, date, vet stamp)</li>
                <li>Core vaccination records</li>
                <li>Titer test result (if applicable)</li>
                <li>Recent photo of your pet</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Fees and Timeline</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li><strong>Fee:</strong> confirm the current permit and arrival-release amounts on the official MOCCAE portal</li>
                <li><strong>Processing:</strong> 3–7 working days</li>
                <li><strong>Validity:</strong> 30 days from issuance</li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-4">Common Application Mistakes</h3>
              <ul className="text-[#5A5A5A] space-y-1">
                <li><strong>Microchip mismatch:</strong> The microchip number on the permit application doesn&apos;t match the vaccination certificate</li>
                <li><strong>Expired vaccine:</strong> Rabies vaccine is older than 12 months or less than 21 days old</li>
                <li><strong>Missing titer test:</strong> Applying for a permit from a high-risk country without the titer test result</li>
                <li><strong>Wrong validity window:</strong> Applying too early and having the permit expire before travel</li>
              </ul>
            </div>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Warning:</strong> If your permit application is rejected, you must correct the issue and reapply. This can add 1–2 weeks to your timeline. We check every application three times before submission.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I need help with my MOCCAE import permit application for my pet."
            label="Get help with your permit application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ AIRLINE-SPECIFIC REQUIREMENTS ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Airline-Specific Requirements</h2>
          <p className="text-[#5A5A5A] mb-8">
            All pets entering Dubai <strong>must travel as manifest cargo</strong>. They cannot fly in the cabin or as checked baggage on flights to Dubai — with one exception.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Emirates SkyCargo
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                Emirates is the most common airline for pet transport to Dubai.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>In-cabin:</strong> No regular pets allowed. Only trained service dogs and falcons on specific routes.</li>
                <li><strong>Checked baggage:</strong> Not accepted for flights to Dubai.</li>
                <li><strong>Cargo (SkyCargo):</strong> Mandatory for most pets. Cost: typically $1,500–$5,000 USD.</li>
                <li><strong>Advance notice:</strong> Minimum 72 hours</li>
                <li><strong>Crate:</strong> IATA-approved, rigid, leak-proof. For restricted breeds, crate must be at least 10% larger than standard.</li>
                <li><strong>Banned breeds:</strong> Even stricter than UAE law. Includes snub-nosed breeds with seasonal restrictions (November–April only).</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                Etihad Airways
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                Etihad is the most pet-friendly UAE airline — but only for Abu Dhabi.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>In-cabin (to Abu Dhabi only):</strong> Small dogs and cats allowed. Pet + carrier must weigh ≤8 kg. Carrier max: 40 x 40 x 22 cm. Fee: USD 399 per segment.</li>
                <li><strong>Checked baggage:</strong> Accepted on some routes.</li>
                <li><strong>Cargo:</strong> Available for larger pets.</li>
                <li><strong>Advance notice:</strong> Book via Contact Centre; submit form 7 days before, documents 72 hours before.</li>
                <li><strong>Banned breeds:</strong> Same as UAE federal list, plus Boxer.</li>
                <li><strong>Abu Dhabi entry:</strong> Requires a Bill of Entry from MICCO Logistics (cost: AED 365) at least 24 hours before departure.</li>
                <li><strong>Pet age:</strong> Must be ≥16 weeks old for in-cabin.</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                flydubai
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-3">
                flydubai does not have a published pet-in-cabin policy.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Pets are generally handled as cargo via flydubai&apos;s cargo services or partners.</li>
                <li><strong>Recommendation:</strong> Contact flydubai Cargo directly for arrangements.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">Airline Comparison Summary</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[680px]">
                <thead>
                  <tr>
                    <th>Airline</th>
                    <th>Cabin to UAE?</th>
                    <th>Checked Baggage to UAE?</th>
                    <th>Cargo to UAE?</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold">Emirates</td>
                    <td>❌ No (except service dogs)</td>
                    <td>❌ No</td>
                    <td>✅ Yes (SkyCargo)</td>
                    <td>Most DXB arrivals; direct routes</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Etihad</td>
                    <td>✅ Yes (to Abu Dhabi, ≤8kg)</td>
                    <td>✅ Some routes</td>
                    <td>✅ Yes</td>
                    <td>Small pets to Abu Dhabi; pet-friendly policies</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">flydubai</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>✅ Yes (Cargo)</td>
                    <td>Budget cargo options; regional routes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="warning-box mb-8">
            <p className="text-sm text-[#2A2A2A]">
              <strong>Important:</strong> The choice of airline affects your total cost by AED 3,000–12,000. We work with the cargo departments directly — not the passenger reservation desks — to confirm pet-specific rules in writing before booking.
            </p>
          </div>

          <WhatsAppLink
            text="Hi, I'm not sure which airline fits my route for pet relocation to Dubai. Can you help?"
            label="Not sure which airline fits your route? Ask an expert"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ HEALTH CERTIFICATE TIMING ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">Health Certificate Timing</h2>
          <p className="text-[#5A5A5A] mb-8">
            The International Health Certificate is the last document you obtain before travel. Get the timing wrong, and it expires before your pet arrives.
          </p>

          <div className="bg-[#F5F6FD] rounded-[20px] p-6 mb-8 border border-[#4F5BD5]/10">
            <ul className="text-[#5A5A5A] space-y-2">
              <li><strong>Valid for 10 days</strong> from the date of issuance to the date of arrival in the UAE</li>
              <li>Must be issued by a <strong>government-accredited or official veterinarian</strong></li>
              <li>Must include antiparasitic treatment records</li>
              <li>Must show the same microchip number as all other documents</li>
            </ul>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">When to Schedule the Health Certificate</h3>
            <ul className="text-[#5A5A5A] space-y-2">
              <li><strong>Book the vet appointment 2–3 days before your pet&apos;s flight</strong></li>
              <li>The certificate must be issued within 10 days of arrival, so work backwards from your arrival date</li>
              <li>If your flight is delayed and the certificate expires, you must obtain a new one</li>
            </ul>
            <div className="warning-box mt-4">
              <p className="text-sm text-[#2A2A2A]">
                Some countries require additional government endorsement (e.g., DEFRA in the UK, USDA in the USA, CFIA in Canada). This can add 2–5 days. Confirm your origin country&apos;s endorsement requirements with your vet.
              </p>
            </div>
          </div>

          <WhatsAppLink
            text="Hi, I need help scheduling my vet appointments for my pet's relocation to Dubai."
            label="Need help scheduling your vet appointments? We coordinate with our partner clinics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
          />
        </div>
      </section>

      {/* ═══════════ WHAT HAPPENS IF DOCUMENTS ARE WRONG ═══════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What Happens If Your Documents Are Wrong
          </h2>
          <p className="text-[#5A5A5A] mb-8">
            This is the section most pet owners skip — and the one that causes the most pain.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No Quarantine (If Documents Are Correct)
              </h3>
              <p className="text-[#5A5A5A]">
                If all your paperwork is complete, correct, and consistent, your pet <strong>does not need to enter quarantine</strong>. This is one of the UAE&apos;s biggest advantages as a pet relocation destination.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-[#4F5BD5] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-[#4F5BD5] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Conditional Quarantine (If Documents Are Wrong)
              </h3>
              <p className="text-[#5A5A5A] mb-3">
                Quarantine is imposed if your pet arrives from a high-risk country without a titer test, documentation is incomplete, or the pet shows clinical signs of illness.
              </p>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li><strong>Location:</strong> Dubai Cargo Village or Abu Dhabi Cargo Terminal</li>
                <li><strong>Cost:</strong> Entirely borne by the owner</li>
                <li><strong>Duration:</strong> Until the issue is resolved (typically 30 days)</li>
                <li>Missing one document can mean your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands)</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 border-t-4 border-red-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <Ban className="w-5 h-5" />
                Return or Euthanasia (Worst Cases)
              </h3>
              <p className="text-[#5A5A5A] mb-3">
                In extreme cases, the animal may be <strong>returned to the origin country</strong> on the next available flight at the owner&apos;s expense. In the worst cases, <strong>euthanasia</strong> may be ordered if the animal poses a rabies risk and cannot be returned.
              </p>
              <div className="warning-box">
                <p className="text-sm text-[#2A2A2A]">
                  These are not theoretical risks. They happen when pet owners assume &quot;it will be fine&quot; or rely on outdated information. We check every document three times because we&apos;ve seen what happens when one date is wrong.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-bold text-[#2A2A2A] mb-4">The Most Common Document Errors</h3>
            <ol className="text-[#5A5A5A] space-y-2 list-decimal list-inside">
              <li><strong>Microchip before vaccination</strong> — Vaccination given before microchip = invalid</li>
              <li><strong>Titer test timing</strong> — Blood drawn before 21 days post-vaccination = invalid</li>
              <li><strong>Permit validity</strong> — Permit expired before travel = entry denied</li>
              <li><strong>Health certificate expiry</strong> — Certificate older than 10 days on arrival = quarantine risk</li>
              <li><strong>Mismatched microchip numbers</strong> — Different numbers on different documents = automatic rejection</li>
            </ol>
          </div>

          <div className="mt-8">
            <WhatsAppLink
              text="Hi, I want to make sure my pet's documents are correct before traveling to Dubai. Can you help?"
              label="Get help with your documents — Send us what you have. We'll catch the errors before they catch you."
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
            <FAQItem
              question="Do dogs need to be quarantined in Dubai?"
              answer="No. If all documentation is complete and correct — including the MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. However, incomplete documentation can result in conditional quarantine at the owner\'s expense."
            />
            <FAQItem
              question="What is the MOCCAE import permit for pets?"
              answer="The MOCCAE import permit is a mandatory approval from the UAE Ministry of Climate Change and Environment required for all pets entering the UAE. It is valid for 30 days from issuance. Confirm the current permit and arrival-release fees on the official portal before you apply. You must apply online via the MOCCAE portal or app before your pet travels."
            />
            <FAQItem
              question="Is a rabies titer test required for Dubai?"
              answer="A rabies titer test is only required for pets coming from high-risk rabies countries. It is not required for pets from low-risk countries including the UK, EU, USA, Canada, Australia, and New Zealand. However, pets from Bahrain and Qatar are a special exception — they do require a titer test despite being classified as low-risk."
            />
            <FAQItem
              question="What documents are needed to bring a cat to the UAE?"
              answer="To bring a cat to the UAE, you need: (1) MOCCAE import permit, (2) ISO 11784/11785 microchip certificate, (3) rabies vaccination certificate (≥21 days old), (4) FVRCP vaccination records, (5) international health certificate (within 10 days of travel), (6) antiparasitic treatment record, and (7) copy of owner\'s passport and UAE visa."
            />
            <FAQItem
              question="How long does pet relocation to Dubai take?"
              answer="From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting the process at least 8 weeks before your planned move."
            />
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 lg:py-28 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Ready to bring your pet home to Dubai?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Every day, we help pet owners check their documents, time their vet appointments, and submit their MOCCAE permits. One WhatsApp message is all it takes to get clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hi, I need help understanding the import requirements for my [dog/cat] from [country] to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              📱 Get help with your documents
            </a>
            <a
              href={getWhatsAppUrl('Hi, I want to check if my pet is eligible for import to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors"
            >
              ✅ Check my pet&apos;s eligibility
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Pre-filled WhatsApp message: &quot;Hi, I need help understanding the import requirements for my [dog/cat] from [country] to Dubai.&quot;
          </p>
        </div>
      </section>

      {/* ═══════════ FOOTER NOTE ═══════════ */}
      <section className="py-8 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#8A8A8A]">
            Dubai Pet Relocation makes your pet&apos;s journey clear, calm, and certain. We guide you through MOCCAE import requirements. Vetted relocation partners. Human communication on WhatsApp at every step.
          </p>
        </div>
      </section>
    </div>
  )
}
