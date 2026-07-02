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
  XCircle,
  HelpCircle,
  Dog,
  Cat,
  Plane,
  Package,
  Truck,
  Stethoscope,
  FileText,
  Building2,
  PawPrint,
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
export default function CustomsClearanceGuide() {
  const title = 'Pet Customs Clearance at Dubai Airport — Cargo Terminal Guide (2026)'
  const description = 'How pet customs clearance works at Dubai airport. The DXB/DWC cargo terminal process, documents checked on arrival, the MOCCAE release fee, clearance timeline on the day, and how Dubai Pet Relocation handles clearance and handover.'
  const canonical = `${BASE_URL}/guides/pet-customs-clearance-dubai/`
  const ogImage = `${BASE_URL}/images/service-pet-transport-dubai.jpg`

  const faqData = [
    {
      question: 'Where does my pet arrive when it flies to Dubai?',
      answer: 'Your pet arrives as manifest cargo at the cargo terminal of either Dubai International Airport (DXB) or Al Maktoum International Airport (DWC), not at the passenger arrivals hall. Pets cannot fly in the cabin or as checked baggage on flights to Dubai, so they are processed through the airport animal reception facility at the cargo terminal. You do not meet your pet at baggage claim — clearance and collection happen at the cargo side.',
    },
    {
      question: 'How long does pet customs clearance take in Dubai?',
      answer: 'When every document is correct and the MOCCAE import permit is valid, customs clearance at the DXB or DWC cargo terminal typically takes around 2–4 hours from the time the flight is offloaded. Your pet does not enter quarantine if the paperwork is complete. Delays happen when documents are missing or incorrect, when the flight is late, or when the terminal is busy.',
    },
    {
      question: 'What is the MOCCAE release fee on arrival?',
      answer: 'In addition to the MOCCAE import permit (AED 200 per pet, paid before travel), a government release fee is collected when your pet clears at the cargo terminal: AED 500 per dog or AED 250 per cat. This brings the core MOCCAE government total to roughly AED 700 per dog and AED 450 per cat. The release fee is paid on arrival, not at the permit stage.',
    },
    {
      question: 'What documents are checked when my pet clears customs in Dubai?',
      answer: 'At the airport animal facility, officials check the MOCCAE import permit, the original international health certificate, vaccination records, the microchip certificate, the rabies titer test result (if your pet is from a high-risk country), the antiparasitic treatment record, and the owner\'s passport and UAE visa. Every document must show the same microchip number. A mismatch or an expired certificate can stop the clearance.',
    },
    {
      question: 'Does my pet go into quarantine after landing in Dubai?',
      answer: 'No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE\'s main advantages. However, incomplete or incorrect documentation can result in conditional quarantine at the owner\'s expense while the issue is resolved.',
    },
    {
      question: 'Do I have to go to the cargo terminal to collect my pet myself?',
      answer: 'You can, but most owners use a clearance agent or handler. With Dubai Pet Relocation, our handler presents the documents at the airport animal facility, pays the release fee on your behalf, completes customs clearance, collects your pet from the cargo terminal, and arranges handover or door-to-door delivery — so you do not have to navigate the cargo side of DXB or DWC yourself.',
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
      { '@type': 'ListItem', position: 2, name: 'Pet Customs Clearance at Dubai Airport', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Customs Clearance at Dubai Airport — Cargo Terminal Guide (2026)',
    description,
    image: ogImage,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/logo.png` } },
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title: 'Pet Customs Clearance at Dubai Airport — Cargo Terminal Guide (2026)',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'pet customs clearance Dubai, Dubai airport pet clearance, DXB cargo terminal pet, DWC pet arrival, MOCCAE release fee, pet arrival Dubai airport, clear pet customs Dubai, pet cargo clearance UAE, collect pet Dubai airport, Dubai pet import clearance',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Customs Clearance at Dubai Airport' }]} />

      {/* Hero */}
      <Hero
        image="/images/service-pet-transport-dubai.jpg"
        imageAlt="Pet travel crate being handled at the Dubai airport cargo terminal during customs clearance"
        eyebrow="Pet Relocation Guide"
        title="Pet Customs Clearance at Dubai Airport"
        subtitle="Your pet lands as cargo, not in the cabin. Here's exactly how clearance works at the DXB and DWC cargo terminals — the documents checked, the release fee, the timeline, and the handover."
        updated="Updated June 2026"
      />

      {/* What clearance involves */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Customs Clearance Means for a Pet Arriving in Dubai
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                All pets entering Dubai travel as <strong>manifest cargo</strong>. They cannot fly in the cabin or as checked baggage on flights to Dubai, so when your pet lands it is processed through the <strong>cargo terminal</strong> at Dubai International Airport (DXB) or Al Maktoum International Airport (DWC) — not the passenger arrivals hall.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Customs clearance is the on-the-ground process of getting your pet released from that cargo terminal: officials at the airport animal facility check the import paperwork against the pet, the government release fee is paid, and the pet is then handed to you or your clearance agent. Get the documents right and your pet clears in a few hours with no quarantine.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  What Clearance Confirms
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The pet matches a valid MOCCAE import permit</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The microchip number is identical across every document</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Vaccination and health certificates are valid and in date</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The government release fee has been paid</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Clearance at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Where</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">DXB or DWC cargo terminal</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Airport animal facility — not passenger arrivals.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Release Fee (on arrival)</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">AED 500/dog · AED 250/cat</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">On top of the AED 200 import permit. Government total ~AED 700/dog, ~AED 450/cat.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Typical Clearance Time</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">~2–4 hours (docs correct)</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">If Documents Are Wrong</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Delays, conditional quarantine at your cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step on the day */}
      <section id="step-by-step" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The Cargo Terminal Process — Step by Step on Arrival Day
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              This is what happens from the moment your pet's flight touches down at DXB or DWC to the moment they leave the cargo terminal with you.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Flight lands and the pet is offloaded</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet arrives in the climate-controlled cargo hold and is offloaded by ground handlers at the cargo terminal. The crate is moved to the airport animal reception facility, where pets are held and processed. This is the cargo side of the airport, separate from where passengers collect their luggage.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Documents are presented and checked</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  You — or your clearance agent — present the full document set at the animal facility. Officials verify each document against the pet, paying particular attention to the microchip number, which must be identical on every page.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>MOCCAE import permit (valid on arrival day)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Original international health certificate</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Stethoscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Vaccination records + microchip certificate</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileText className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Titer test result (if from a high-risk country)</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Antiparasitic treatment record</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Owner's passport and UAE visa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">The release fee is paid</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Once the paperwork checks out, the government release fee is collected at the terminal: <strong>AED 500 per dog or AED 250 per cat</strong>. This is separate from, and on top of, the AED 200 import permit you already paid before travel. Together these make up the core MOCCAE government total of roughly AED 700 per dog and AED 450 per cat.
                </p>
                <div className="p-3 bg-[#E9ECFB] rounded-xl text-sm text-[#5A5A5A]">
                  <strong className="text-[#4F5BD5]">Note:</strong> A customs clearing / bill-of-entry charge for the cargo agent handling at DXB or DWC is also typical — your personalized quote sets this out so there are no surprises at the terminal.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Customs clears the pet for entry</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  With documents verified and the fee paid, customs releases your pet. If everything is correct, this typically takes around <strong>2–4 hours</strong> from offload, and your pet does not enter quarantine. The clearance step is where a missing or incorrect document does the most damage — it can hold the pet at the facility until the issue is resolved.
                </p>
                <div className="p-3 bg-[#E9ECFB] rounded-xl text-sm text-[#5A5A5A]">
                  <strong className="text-[#4F5BD5]">Pro tip:</strong> Bring originals, not just copies. The animal facility checks the original health certificate and permit, and a printed permit is expected — do not rely on a digital copy alone.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Collection and handover</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet is collected from the cargo terminal — by you, or by the handler / clearance agent acting for you — and handed over. With Dubai Pet Relocation, our handler manages the whole cargo-side process and then arranges handover or door-to-door delivery to your new home, so you never have to find your way around the DXB or DWC cargo area. After arrival, remember you must also register your pet with Dubai Municipality within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What can go wrong */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            What Can Go Wrong at Clearance — and How to Avoid It
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Problem at the Terminal</th>
                  <th>Why It Happens</th>
                  <th>How to Avoid It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Microchip number mismatch</td>
                  <td>The chip number on the vaccination or health certificate doesn't match the microchip certificate</td>
                  <td>Confirm the same 15-digit ISO number appears on every document before travel</td>
                </tr>
                <tr>
                  <td className="font-medium">Expired health certificate</td>
                  <td>The international health certificate is only valid for a short window before arrival</td>
                  <td>Issue it within the required timeframe of travel and fly within that window</td>
                </tr>
                <tr>
                  <td className="font-medium">Permit not valid on arrival day</td>
                  <td>The MOCCAE import permit has lapsed or wasn't approved in time</td>
                  <td>Coordinate the permit validity to cover your actual arrival date</td>
                </tr>
                <tr>
                  <td className="font-medium">Missing titer test (high-risk origin)</td>
                  <td>Pets from high-risk countries need a rabies titer result; it's frequently overlooked</td>
                  <td>Confirm your origin country's status and carry the titer result if required</td>
                </tr>
                <tr>
                  <td className="font-medium">Documents not original / not in order</td>
                  <td>Only copies presented, or paperwork incomplete at the animal facility</td>
                  <td>Carry originals, printed and organized, with the owner's passport and UAE visa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">A Documentation Error Is the Costly One</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  The clearance itself is quick when the paperwork is right. The risk is on the document side: incomplete or incorrect documentation can mean your pet is held, placed in conditional quarantine at your expense, or — in the worst case — refused entry or re-exported. This is why Dubai Pet Relocation checks every document before your pet ever boards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DXB vs DWC + How we handle it */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Where Pets Clear: DXB and DWC</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Pets arriving in Dubai are cleared at the cargo terminal of whichever airport their flight lands at. Both have an animal reception facility where the documents are checked and the pet is released.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>DXB — Dubai International Airport:</strong> the most common arrival point, including Emirates SkyCargo flights</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Building2 className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>DWC — Al Maktoum International Airport:</strong> the alternative cargo gateway used for some routes</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Package className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Cargo, not cabin:</strong> pets are processed as manifest cargo at the terminal, never at passenger arrivals</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong>Release fee:</strong> AED 500/dog or AED 250/cat, paid on arrival at the terminal</span>
                </div>
              </div>
            </div>

            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation Handles Clearance</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                You don't go to the cargo terminal — we do. Our clearance agent manages the whole arrival process so your pet moves from the aircraft to your arms with as little delay and stress as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Document Pre-Check</p>
                    <p className="text-xs text-[#5A5A5A]">We verify the permit, health certificate, microchip, and vaccination records before your pet flies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Terminal Clearance</p>
                    <p className="text-xs text-[#5A5A5A]">Our handler presents the documents at the animal facility and pays the release fee on your behalf.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Collection</p>
                    <p className="text-xs text-[#5A5A5A]">We collect your pet from the DXB or DWC cargo terminal once customs releases them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Handover &amp; Delivery</p>
                    <p className="text-xs text-[#5A5A5A]">We hand your pet over to you, or deliver door-to-door, and guide you through municipality registration.</p>
                  </div>
                </div>
              </div>
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
              Common questions about pet customs clearance at the Dubai airport cargo terminal.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides/moccae-import-permit/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">MOCCAE Import Permit Guide</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">How to obtain the mandatory MOCCAE import permit your pet needs before arrival in Dubai.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileText className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The full step-by-step checklist of documents and rules for importing pets into the UAE.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Plane className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Pet Import to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our end-to-end pet import service, including permits, cargo booking, and airport clearance.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <HelpCircle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Have a pet arriving soon? Get in touch and we'll handle the clearance and handover.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Let Dubai Pet Relocation Clear Your Pet at the Airport
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We check every document before your pet flies, meet the cargo flight at DXB or DWC, pay the release fee, complete customs clearance, and hand your pet over — so the only thing you have to do is say hello.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Get Help With Airport Clearance"
              message="Hi Dubai Pet Relocation, I have a pet arriving in Dubai and need help with customs clearance and collection at the airport. Can you handle it?"
              className="whatsapp-pulse"
            />
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
