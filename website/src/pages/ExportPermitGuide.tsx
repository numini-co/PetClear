import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileCheck,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  CheckCircle,
  HelpCircle,
  Globe,
  Plane,
  FileText,
  Stethoscope,
  Microscope,
  Search,
  Calendar,
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
export default function ExportPermitGuide() {
  const title = 'UAE Pet Export Permit — Leaving Dubai With Your Pet (2026 Guide)'
  const description = 'How to get a UAE pet export permit (MOCCAE export health certificate) to leave Dubai with your dog or cat. Application, airport inspection, the export health certificate, destination rules, timeline, costs, and common mistakes.'
  const canonical = `${BASE_URL}/guides/uae-pet-export-permit/`
  const ogImage = `${BASE_URL}/images/service-pet-export-dubai.jpg`

  const faqData = [
    {
      question: 'What is a UAE pet export permit?',
      answer: 'The UAE pet export permit is the MOCCAE export health certificate — the document that authorises your dog or cat to leave the UAE. It is applied for online through the MOCCAE portal (UAE Pass access required), but it is not final until a MOCCAE government veterinarian inspects your pet in person at the airport, scanning the microchip and checking that every certificate matches before the export is approved. It is the UAE-side approval; the destination country sets the rest of the rules.',
    },
    {
      question: 'How do I apply for a pet export permit in Dubai?',
      answer: 'You apply online via the MOCCAE portal, which requires UAE Pass access. Your pet needs an ISO-compliant 15-digit microchip, a current rabies vaccination (administered between 30 days and 12 months before export), and an updated pet passport or vaccination book showing the same microchip number. A licensed vet issues a Fit to Fly certificate close to your flight, and then a MOCCAE government veterinarian inspects your pet at the airport before the export is approved. Dubai Pet Relocation guides the application, times each document, and coordinates the inspection with your flight.',
    },
    {
      question: 'Is a health certificate needed to export a pet from the UAE?',
      answer: 'Yes. Leaving the UAE requires both the MOCCAE export health certificate and a Fit to Fly veterinary certificate timed to your flight (typically valid 5 to 10 days depending on destination). For EU and UK destinations, the destination travel certificate is issued by your vet first and then endorsed by MOCCAE. The microchip number must match across the passport, vaccination records, Fit to Fly certificate, and export certificate.',
    },
    {
      question: 'How do destination country rules affect my export?',
      answer: 'Exporting a pet from Dubai means meeting two sets of rules at once: MOCCAE controls how your pet leaves the UAE, and the destination country decides what your pet needs to enter. Requirements vary by country and change from time to time — vaccinations, a rabies titer test, certificate format, and entry points all depend on where you are going. That is why export planning is destination-first: we confirm the exact entry rules for your country before booking anything. For specific routes, see our Dubai to UK and Dubai to USA guides.',
    },
    {
      question: 'How long does a pet export from Dubai take?',
      answer: 'It depends almost entirely on your destination. If your pet is already fully vaccinated and the destination needs no rabies titer test, export can take just a few days to two weeks. If a titer test is required, plan for 7 or more weeks because of lab turnaround (two to three weeks) and any waiting period. The Fit to Fly certificate is issued within 5 to 10 days of travel, and the MOCCAE export health certificate involves an online application plus the in-person airport inspection.',
    },
    {
      question: 'Does my pet need to be quarantined to leave the UAE?',
      answer: 'No. The UAE does not impose quarantine on pets leaving the country. There is no export quarantine. Any quarantine requirement comes from the destination country, not the UAE, so it depends entirely on where you are travelling to. Australia, for example, has among the strictest entry regimes worldwide.',
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
        text: typeof faq.answer === 'string' ? faq.answer : faq.question,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'UAE Pet Export Permit', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get a UAE Pet Export Permit to Leave Dubai',
    description: 'Step-by-step guide to obtaining a MOCCAE export health certificate (UAE pet export permit) to take your dog or cat out of the UAE.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Confirm Destination Rules',
        text: 'Confirm the exact entry requirements of your destination country before booking anything, because they vary by country and drive the timeline.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Prepare Vet Documents',
        text: 'Confirm an ISO-compliant 15-digit microchip and a current rabies vaccination, and update the passport or vaccination book to the same microchip number.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Fit to Fly Certificate',
        text: 'A licensed vet issues a Fit to Fly certificate close to your flight date, typically valid 5 to 10 days depending on destination.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'MOCCAE Export Health Certificate',
        text: 'Apply for the MOCCAE export health certificate on the MOCCAE portal. For the EU or UK, the destination travel certificate is issued by your vet and then endorsed by MOCCAE.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Airport Inspection',
        text: 'A MOCCAE government veterinarian inspects your pet in person at the airport, scanning the microchip and reviewing every document before the export is approved.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Travel Day',
        text: 'Your pet travels per IATA Live Animals Regulations in an approved crate on a coordinated cargo booking.',
      },
    ],
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

  const meta = {
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'UAE pet export permit, pet export permit Dubai, MOCCAE export health certificate, export pet from Dubai, leaving Dubai with pet, take pet out of Dubai, pet export requirements UAE, Fit to Fly certificate Dubai, pet export Dubai timeline, MOCCAE export inspection',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'UAE Pet Export Permit' }]} />

      {/* Hero */}
      <Hero
        image="/images/service-pet-export-dubai.jpg"
        imageAlt="A calm dog and cat beside a travel crate at a bright Dubai airport departure terminal — pet export from Dubai"
        eyebrow="Pet Relocation Guide"
        title="UAE Pet Export Permit — Leaving Dubai With Your Pet"
        subtitle="Two sets of rules at once: MOCCAE controls how your pet leaves the UAE, and the destination country decides what it needs to enter. Here is how the export permit, the health certificate, and the airport inspection fit together."
        updated="Updated June 2026"
      />

      {/* What is the export permit */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is the UAE Pet Export Permit?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The <strong>UAE pet export permit</strong> is the <strong>MOCCAE export health certificate</strong> — the document that authorises your dog or cat to leave the United Arab Emirates. <strong>MOCCAE</strong> is the Ministry of Climate Change and Environment, the federal body that controls how animals leave the country.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The certificate is applied for online through the MOCCAE portal, but it is not final until a MOCCAE government veterinarian inspects your pet in person at the airport — scanning the microchip and checking that every certificate matches before the export is approved. It is the UAE-side approval. Everything else — vaccinations, titer testing, certificate format, entry points — is set by your destination country.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                  Two Sets of Rules at Once
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>MOCCAE</strong> controls how your pet leaves the UAE (export health certificate + airport inspection)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The <strong>destination country</strong> decides what your pet needs to enter (titer test, certificate format, timelines)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Both must line up — and the destination rules usually drive the timeline</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Export Permit at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">What It Is</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">MOCCAE export health certificate</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Applied for online via the MOCCAE portal (UAE Pass access required).</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Validity</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">~30 days from issuance</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">It cannot be obtained too far ahead of travel.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Final Step</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">In-person airport inspection</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">A MOCCAE government vet scans the microchip and reviews documents before approval.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Export Quarantine</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">None to leave the UAE</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Any quarantine comes from the destination country, not the UAE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="step-by-step" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Step-by-Step: How to Get Your Export Permit
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Every export from Dubai runs through the same stages. The order and timing matter — each document must still be valid when your pet boards.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Confirm Destination Rules First</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Before booking anything, confirm the exact entry requirements of your destination country. Requirements vary by country and change from time to time — vaccinations, a rabies titer test, certificate format, and approved entry points all depend on where you are going. This is the single most important step, because the destination drives the whole timeline.
                </p>
                <div className="p-3 bg-[#E9ECFB] rounded-xl text-sm text-[#5A5A5A]">
                  <strong className="text-[#4F5BD5]">Route guides:</strong> See our <Link to="/routes/dubai-to-uk/" className="text-[#4F5BD5] underline">Dubai to UK</Link> and <Link to="/routes/dubai-to-usa/" className="text-[#4F5BD5] underline">Dubai to USA</Link> pages for destination specifics.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Prepare Vet Documents</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Confirm your pet has an ISO-compliant 15-digit microchip and a current rabies vaccination — administered between 30 days and 12 months before export. Make sure the pet passport or vaccination book reflects the same microchip number and full history.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Microscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>ISO 11784/11785 compliant 15-digit microchip</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Current rabies vaccination (30 days–12 months before export)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Pet passport or vaccination book with the same microchip number</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Any titer test the destination requires (start early)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Fit to Fly Certificate</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A licensed vet issues a Fit to Fly (fit to travel) certificate close to your flight date — usually valid 5 to 10 days depending on the destination. Time this so it stays valid through departure day.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">MOCCAE Export Health Certificate</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Apply for the MOCCAE export health certificate on the MOCCAE portal (UAE Pass access required). For the EU or UK, the destination travel certificate is issued by your vet first and then endorsed by MOCCAE. The certificate is valid for roughly 30 days from issuance, so it cannot be obtained too far ahead of travel.
                </p>
                <div className="warning-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Microchip Must Match Everywhere</p>
                      <p className="text-[#5A5A5A] text-sm">The microchip number must match across the passport, vaccination records, Fit to Fly certificate, and export certificate. A mismatch can stop the export at the inspection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Airport Inspection</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A MOCCAE government veterinarian carries out an in-person inspection at the Cargo Village (DXB) or the relevant terminal, scanning the microchip and reviewing every document before the export is approved. The online application is not final until this inspection is passed.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">6</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Travel Day</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet travels per IATA Live Animals Regulations in an approved crate, out of DXB or DWC with pet-experienced airlines. Once the export certificate is issued and the inspection passed, your pet is cleared to leave the UAE.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <WhatsAppBtn
              label="Get help with your export permit"
              message="Hi Dubai Pet Relocation, I am leaving Dubai and need help with the MOCCAE export permit and health certificate for my pet. Can you guide me through the process?"
            />
          </div>
        </div>
      </section>

      {/* How destination rules interact */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How Destination-Country Rules Interact With the Export Permit
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The MOCCAE export certificate gets your pet out of the UAE. What it needs to get <em>in</em> at the other end is set by the destination country — and those rules vary by country and change from time to time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Destination-First Planning</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Every export plan starts with the rules of where you are going. We confirm the exact entry requirements for your country before booking anything, then build the whole plan backwards from your travel date. Each country sets its own conditions for vaccinations, titer testing, certificate format, and entry points.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>United Kingdom</strong> — strict entry protocol; EU/UK-format travel certificate endorsed by MOCCAE. See our <Link to="/routes/dubai-to-uk/" className="text-[#4F5BD5] underline">Dubai to UK guide</Link>.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>United States</strong> — destination rules vary by state and airline. See our <Link to="/routes/dubai-to-usa/" className="text-[#4F5BD5] underline">Dubai to USA guide</Link>.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>Australia</strong> — among the strictest entry regimes worldwide, often requiring a titer test and advance planning.</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span><strong>European Union</strong> — EU-format travel certificate issued by your vet and endorsed by MOCCAE.</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">The Titer Test Drives the Schedule</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Whether a rabies titer test is required depends on your destination, not on the UAE. Many countries do not require one; some do. Because the test involves a blood draw, a lab turnaround of two to three weeks, and sometimes a waiting period, it is the single most common cause of delay when it is left until late.
              </p>
              <div className="warning-box">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Start the Titer Test Early</p>
                    <p className="text-[#5A5A5A] text-sm">If your destination requires a titer test, that waiting period cannot be skipped or shortened. Checking the destination rules first means the test is started early enough to make your travel date.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            Typical Pet Export Timeline
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            How long export takes depends almost entirely on your destination. If your pet is fully vaccinated and the destination needs no rabies titer test, it can be quick. If a titer test is required, the lab and waiting times dominate the schedule.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Typical Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Fully vaccinated, no titer test required at destination</td>
                  <td>A few days to 2 weeks</td>
                </tr>
                <tr>
                  <td className="font-medium">Destination requires a rabies titer test</td>
                  <td>7+ weeks (allow 2–3 weeks for results plus any waiting period)</td>
                </tr>
                <tr>
                  <td className="font-medium">Fit to Fly certificate</td>
                  <td>Issued within 5–10 days of travel</td>
                </tr>
                <tr>
                  <td className="font-medium">MOCCAE export health certificate</td>
                  <td>Online application plus the in-person airport inspection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">The Destination Drives the Timeline</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Some destinations — the UK, EU, and Australia in particular — have strict entry protocols that can stretch the timeline well beyond the UAE-side paperwork. The blood draw, lab turnaround, and any post-test waiting period for a titer test cannot be shortened, so plan backwards from your travel date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            What Does a Pet Export Cost?
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Pet export from Dubai typically ranges from around AED 2,000 for a simple, fully vaccinated move to a nearby region up to AED 22,000 for long-haul destinations, larger dogs, multi-pet families, or full door-to-door service. The biggest variables are the destination, your pet&apos;s size, and whether a titer test is needed.
          </p>

          <div className="overflow-x-auto mb-8 max-w-3xl mx-auto">
            <table className="data-table min-w-[480px]">
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>Typical Range (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-medium">Veterinary documentation</td><td>200 – 1,000+</td></tr>
                <tr><td className="font-medium">Fit to Fly certificate</td><td>100 – 300</td></tr>
                <tr><td className="font-medium">MOCCAE export certificate</td><td>Government fee applies</td></tr>
                <tr><td className="font-medium">Rabies titer test (if destination requires)</td><td>500 – 1,200</td></tr>
                <tr><td className="font-medium">Flight / cargo</td><td>2,000 – 8,000+</td></tr>
                <tr><td className="font-medium">Coordination &amp; handling</td><td>1,000 – 5,000</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 max-w-3xl mx-auto">
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              <DollarSign className="inline w-4 h-4 text-[#4F5BD5] mr-1" />
              These are typical ranges, not a fixed quote. Send us your destination and your pet&apos;s breed and weight on WhatsApp and we will give you a clear, itemised cost estimate before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common Export Mistakes &amp; How to Avoid Them
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#C89F5A]" />
                <h3 className="font-bold text-[#2A2A2A]">Leaving the titer test until late</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The blood draw, lab turnaround, and any waiting period cannot be shortened. If your destination requires a titer test and it is left to the end, it can add weeks. Confirm the destination rules first and start the test immediately if needed.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#C89F5A]" />
                <h3 className="font-bold text-[#2A2A2A]">Microchip number mismatch</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The microchip number must match across the passport, vaccination records, Fit to Fly certificate, and export certificate. A mismatch is checked at the airport inspection and can stop the export.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[#C89F5A]" />
                <h3 className="font-bold text-[#2A2A2A]">Mistiming the certificates</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The MOCCAE export certificate is valid for roughly 30 days and the Fit to Fly certificate for 5 to 10 days. Get them too early and they expire before departure; too late and you miss the inspection or flight window.
              </p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-[#C89F5A]" />
                <h3 className="font-bold text-[#2A2A2A]">Planning UAE-side first</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                A common error is sorting the MOCCAE paperwork before checking what the destination needs. Because destination rules vary by country and change, planning must be destination-first, then built backwards to the UAE-side documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How the service coordinates export */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A]">How Dubai Pet Relocation Coordinates Your Export</h2>
            </div>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-6">
              We are a coordination and concierge service — we do not physically fly the animals ourselves. We connect you with vetted veterinary and transport partners and make sure your paperwork, timeline, and inspection are correct so your pet leaves Dubai without a hitch. For our full export service, see <Link to="/service/pet-export-dubai/" className="text-[#4F5BD5] underline">Pet Export from Dubai</Link>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] text-sm">Destination-first planning</p>
                  <p className="text-xs text-[#5A5A5A]">We confirm the exact entry rules for your country before booking anything.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] text-sm">Document review</p>
                  <p className="text-xs text-[#5A5A5A]">Microchip, rabies history, passport or vaccination book, and any titer test the destination requires.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] text-sm">Certificate timing</p>
                  <p className="text-xs text-[#5A5A5A]">Fit to Fly and the MOCCAE export certificate timed so both are valid on departure day.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] text-sm">Inspection &amp; cargo</p>
                  <p className="text-xs text-[#5A5A5A]">We coordinate the MOCCAE airport inspection and the cargo booking out of DXB or DWC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about the UAE pet export permit and leaving Dubai with your pet.
            </p>
            <div className="bg-[#F5F6FD] rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides &amp; Routes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/service/pet-export-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet Export from Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our full export service: MOCCAE export certificates, Fit to Fly, airport inspection, and flight booking.</p>
            </Link>
            <Link to="/routes/dubai-to-uk/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Globe className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Dubai to UK</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">DEFRA/APHA rules, MOCCAE endorsement, tapeworm treatment, airlines, and timeline.</p>
            </Link>
            <Link to="/routes/dubai-to-usa/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Globe className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Dubai to USA</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">CDC dog import rules, USDA APHIS health certificates, state rules, and airlines.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <HelpCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Tell us your destination and travel date and we will map the fastest compliant export.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Leaving Dubai? Let Us Coordinate Your Pet Export
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We line up the destination rules, the MOCCAE export health certificate, the Fit to Fly check, and the airport inspection — so your pet leaves Dubai without a hitch. Message us with your destination and travel date for a realistic timeline and cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Plan my pet export"
              message="Hi Dubai Pet Relocation, I am leaving Dubai and need help exporting my pet. Can you guide me on the export permit, health certificate, timeline, and cost?"
              className="whatsapp-pulse"
            />
            <Link
              to="/service/pet-export-dubai/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <Plane className="w-4 h-4" />
              Pet Export Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
