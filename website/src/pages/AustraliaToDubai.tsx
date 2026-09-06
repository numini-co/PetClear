import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'

export default function AustraliaToDubai() {
  const pageUrl = `${BASE_URL}/routes/australia-to-dubai/`
  const pageTitle = 'Pet Relocation Australia to Dubai | Guide 2026'
  const pageDescription = 'Relocate your pet from Australia to Dubai. Low-risk but strict AQIS export rules. Emirates and Qantas. Costs, timeline and AQIS requirements explained.'
  const keywords = 'Australia to Dubai pet relocation, pet transport Australia to Dubai, Australian pet relocation Dubai, AQIS pet export Dubai, Emirates pet cargo Australia, Qantas pet transport, dog relocation Australia to Dubai, cat relocation Australia to Dubai, pet shipping Australia to UAE'

  const faqs = [
    {
      question: 'Is Australia a low-risk or high-risk country for pet import to Dubai?',
      answer: 'Australia is classified as a low-risk country for rabies by the UAE. However, Australia has some of the strictest export regulations in the world, governed by the Australian Department of Agriculture, Fisheries and Forestry (DAFF) through the Australian Quarantine and Inspection Service (AQIS). While no rabies titer test is required for Australian pets travelling to Dubai, the AQIS export process is extensive and must be followed precisely.'
    },
    {
      question: 'What is AQIS and how does it affect my pet\'s export from Australia?',
      answer: 'AQIS (Australian Quarantine and Inspection Service) is the Australian government agency that oversees the export of all live animals. To export a pet from Australia, you must: (1) Book an export permit from DAFF; (2) Have your pet examined by an AQIS-accredited veterinarian; (3) Obtain an AQIS export health certificate; (4) Present your pet for a final inspection at an approved quarantine facility before departure. This process adds 1–2 weeks to the timeline and requires careful coordination.'
    },
    {
      question: 'Which airlines fly pets from Australia to Dubai?',
      answer: 'Emirates (EK) and Qantas (QF) are the primary carriers for pet cargo from Australia to Dubai. Emirates operates from Sydney (SYD), Melbourne (MEL), Brisbane (BNE), and Perth (PER) with one-stop connections via their hub. Qantas offers cargo services from major Australian cities, often connecting through Singapore or directly on codeshare routes. The total travel time is 14–18 hours including the connection. Dubai Pet Relocation books the optimal route based on your city and pet size.'
    },
    {
      question: 'How long does the Australia to Dubai pet relocation process take?',
      answer: 'The minimum timeline is 4 to 6 weeks: Week 1 — microchip and rabies vaccination (21-day wait begins; note: Australia is rabies-free, so this is for UAE import purposes); Week 2 — apply for AQIS export permit and book DAFF inspection; Week 3 — apply for UAE import permit; Week 4 — AQIS pre-export inspection and health certificate; Week 5 — final veterinary check and document review; Week 6 — book cargo flight and depart. Some Australian states have additional internal requirements that may add 1–2 weeks.'
    },
    {
      question: 'How much does it cost to relocate a pet from Australia to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 12,000 to AED 24,000 (AUD 5,000–10,000). This includes: veterinary prep (microchip + vaccines for UAE compliance ~AED 500–1,000), AQIS export permit and inspection (~AED 1,500–2,500), MOCCAE import permit AED 200 plus dog port release AED 500 or cat port release AED 250 (confirm on official MOCCAE portal; fees may change), air cargo freight (AED 7,000–15,000 depending on city and crate size), customs clearance in Dubai (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 2,000–4,000). Perth departures are cheaper than Sydney or Melbourne due to shorter distance.'
    },
    {
      question: 'What documents are required for an Australian pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip (Australia uses ISO 11784/11785 as standard); (2) rabies vaccination certificate (even though Australia is rabies-free, the UAE requires it — administered at least 21 days before travel); (3) UAE import permit via MOCCAE; (4) AQIS export health certificate and DAFF export permit; (5) Australian veterinary health certificate from an AQIS-accredited vet within 10 days of travel; (6) copy of pet owner\'s passport and UAE visa. No titer test is required for Australian pets.'
    },
    {
      question: 'Do Australian pets need a rabies vaccine if Australia is rabies-free?',
      answer: 'Yes. Although Australia is rabies-free and your pet likely never had a rabies vaccine before, the UAE requires all imported pets to have a valid rabies vaccination. Your Australian vet must administer an inactivated rabies vaccine (imported specifically for export purposes) at least 21 days before travel. This is a mandatory UAE requirement, not an Australian one. The vaccine must be recorded in the AQIS health certificate with the microchip number.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from Australia?',
      answer: 'Upon arrival at DXB, your pet is transferred to the Dubai Municipality Animal Care Centre for veterinary inspection. The MOCCAE vet scans the microchip, verifies the rabies vaccination and AQIS health certificate, and conducts a brief physical examination. Because Australia is a low-risk country, clearance is typically smooth and takes 2–3 hours. Dubai Pet Relocation provides meet-and-greet service, handles all customs formalities, and delivers your pet to your home or a Dubai boarding facility. The Australian origin often means the inspection is quicker than for high-risk countries.'
    }
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Routes", "item": `${BASE_URL}/routes/` },
        { "@type": "ListItem", "position": 3, "name": "Australia to Dubai", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "description": pageDescription,
      "author": { "@type": "Organization", "name": "Dubai Pet Relocation" },
      "publisher": { "@type": "Organization", "name": "Dubai Pet Relocation", "logo": { "@type": "ImageObject", "url": `${BASE_URL}/images/logo.png` } },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    }
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonical={pageUrl}
        ogType="article"
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Australia to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-australia-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-australia.jpg"
        imageAlt="Pet relocation from Australia to Dubai"
        eyebrow="Australia → Dubai"
        title="Australia to Dubai Pet Relocation — Complete Guide"
        subtitle="Australia is rabies-free and low-risk, but AQIS export rules are among the world's strictest. We navigate every step for you."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from Australia to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Australia to Dubai is a long-haul route with excellent airline options. The key challenge is navigating Australia's strict AQIS export requirements alongside UAE import rules.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">14–18 hours</p>
              <p className="text-[#5A5A5A] text-xs mt-2">SYD/MEL/BNE/PER → DXB (1 stop)</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">4–6 weeks</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Includes AQIS processing</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">Low-Risk</p>
              <p className="text-[#4F5BD5] text-xs mt-2 font-medium">Rabies-free — no titer test</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">AQIS Export</p>
              <p className="text-[#5A5A5A] text-sm">Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">DAFF permit + AQIS inspection</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS NEEDED */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Documentation</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for Australia to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Australian export documentation is strict and requires coordination between your vet, AQIS, and Dubai Pet Relocation. The two layers of compliance (Australian export + UAE import) must be handled carefully.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">Australian pets are already microchipped with ISO 11784/11785 chips by law (required in most states). The chip number must be recorded on all export and import documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination (for UAE compliance)</p>
                    <p className="text-[#5A5A5A] text-sm">Even though Australia is rabies-free, the UAE requires a rabies vaccination. An inactivated rabies vaccine must be administered by an AQIS-accredited vet at least 21 days before travel. The vaccine must be imported specifically for export purposes, as routine rabies vaccination is not practised in Australia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. AQIS Export Permit (DAFF)</p>
                    <p className="text-[#5A5A5A] text-sm">An export permit must be obtained from the Australian Department of Agriculture, Fisheries and Forestry (DAFF). This requires submitting your pet's details, travel itinerary, and destination country information. Processing takes 5–10 business days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. AQIS Health Certificate & Inspection</p>
                    <p className="text-[#5A5A5A] text-sm">An AQIS-accredited veterinarian examines your pet and issues an export health certificate within 10 days of travel. Your pet must also present for a final inspection at an AQIS quarantine facility before departure. This confirms the pet is healthy and all documentation is correct.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via MOCCAE. Valid 30 days from issuance. Must be obtained before booking the flight. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Dubai Pet Relocation handles the application and Arabic translation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">6. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa. For new arrivals, a hotel booking or tenancy contract may be requested by Dubai customs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for Australian Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Australian vets do not routinely stock rabies vaccines because Australia is rabies-free. The rabies vaccine for export must be specially ordered — allow 2–3 weeks for delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>AQIS-accredited veterinarians are limited in number. Not all vets can issue export health certificates. Dubai Pet Relocation can recommend accredited vets in Sydney, Melbourne, Brisbane, and Perth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The AQIS final inspection must be done at a DAFF-approved facility, usually at the airport or a quarantine station. This requires an appointment, which should be booked at least 1 week in advance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Some Australian states (e.g., Tasmania) have additional internal biosecurity requirements. If your pet has been in Tasmania recently, additional documentation may be needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>No titer test is required for Australian pets because Australia is rabies-free. This saves approximately AED 1,500–2,000 and 3–4 months compared to high-risk routes.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Perth departures are significantly cheaper and faster than East Coast departures because the flight distance to Dubai is shorter. If you have flexibility, relocating from Perth can save AED 3,000–5,000 in freight costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Australia to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Long-haul flights from Australia make this a more expensive route, but the absence of a titer test helps offset costs. Perth departures are cheaper than Sydney or Melbourne.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead className="bg-[#F5F5F5]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Service Item</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Small Pet (Cat / Small Dog)</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Medium Dog</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Large Dog</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBEB]">
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Microchip + Rabies Export Vaccine</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–900</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 600–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">AQIS Export Permit (DAFF)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 800–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 800–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 800–1,500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">AQIS Health Certificate & Inspection</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MOCCAE import permit</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MOCCAE dog port release</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MOCCAE cat port release</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 250</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 250</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 250</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (East Coast → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,000–11,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 9,500–14,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 13,000–19,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (Perth → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,500–8,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,500–11,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 10,000–15,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">IATA-Approved Travel Crate</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–900</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Dubai Customs Clearance</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 800–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,200–2,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Optional: Dubai Pet Relocation Door-to-Door</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,000–3,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,500–3,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,000–5,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total (East Coast)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 12,000–18,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 15,000–22,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 20,000–30,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total (Perth)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–15,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 13,000–19,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 17,000–26,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AUD and converted to AED. MOCCAE labels: import permit AED 200; dog port release AED 500; cat port release AED 250. Confirm on official MOCCAE portal; fees may change. East Coast flights (Sydney, Melbourne, Brisbane) are more expensive due to longer distance and connection requirements. Perth is the closest Australian city to Dubai and offers the most direct routing. Air cargo rates fluctuate with fuel surcharges and seasonal demand. Contact Dubai Pet Relocation for a precise quote based on your departure city and pet details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Australia to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The Australian export process adds 1–2 weeks to the standard timeline, but the absence of a titer test keeps the overall process to 4–6 weeks.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip, Rabies Vaccine & AQIS Permit Application',
                  desc: 'Your AQIS-accredited vet implants/verifies the ISO microchip and administers the rabies export vaccine. Dubai Pet Relocation applies for the DAFF export permit and begins the UAE import permit application.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: '21-Day Wait & Permit Processing',
                  desc: 'The 21-day rabies vaccination wait period continues. DAFF processes the export permit (5–10 days). Dubai Pet Relocation monitors both the Australian and UAE permit applications and prepares the flight booking options.',
                  icon: Shield
                },
                {
                  week: 'Week 4',
                  title: 'AQIS Health Certificate & Pre-Export Inspection',
                  desc: 'Your AQIS vet conducts the pre-export examination and issues the export health certificate. Your pet presents at the AQIS quarantine facility for final inspection. All documents are reviewed by Dubai Pet Relocation for accuracy.',
                  icon: FileText
                },
                {
                  week: 'Week 5',
                  title: 'Flight Booking & Crate Preparation',
                  desc: 'With both permits and the health certificate in hand, Dubai Pet Relocation books cargo space with Emirates or Qantas. The IATA-compliant crate is delivered for acclimatisation. A final pre-flight checklist is provided.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'Australia Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the airline cargo terminal (SYD, MEL, BNE, or PER). After a 14–18 hour journey, Dubai Pet Relocation meets your pet at DXB, handles customs clearance and veterinary inspection, and delivers to your home.',
                  icon: Home
                }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-start gap-6 lg:gap-0 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="hidden lg:block lg:w-1/2" />
                  <div className="absolute left-6 lg:left-1/2 lg:-ml-5 w-10 h-10 bg-[#4F5BD5] rounded-full flex items-center justify-center z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-[#F5F6FD] rounded-[20px] p-6">
                      <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">{step.week}</span>
                      <h3 className="text-lg font-bold text-[#2A2A2A] mt-1 mb-2">{step.title}</h3>
                      <p className="text-[#5A5A5A] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIRLINES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Airlines</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from Australia to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Long-haul flights from Australia require experienced carriers with dedicated animal cargo programmes. Emirates and Qantas are the top choices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo Live — via Dubai Hub</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from SYD, MEL, BNE, PER</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 14–18 hours with connection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Dedicated animal handling at all Australian ports</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Seamless transfer through Dubai hub</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the most popular choice for Australian pet relocations, offering the most direct routing and seamless connections through their Dubai hub. Their SkyCargo Live team handles all documentation at both ends.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Qantas (QF)</h3>
                  <p className="text-sm text-[#5A5A5A]">Freight — with partner connections</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from SYD, MEL, BNE, PER</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Often connects via Singapore or codeshare</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Competitive rates on select routes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Australian-based customer service</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Qantas is a good alternative for Australian pet owners who prefer dealing with an Australian carrier. Some routes may involve connections through Singapore or other partner hubs. Dubai Pet Relocation evaluates the best routing for your pet.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Long-Haul Travel Considerations
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              The 14–18 hour journey from Australia to Dubai is one of the longest pet relocation routes. Dubai Pet Relocation ensures your pet travels in an IATA-compliant crate with adequate ventilation, absorbent bedding, and a familiar item (e.g., a small blanket with your scent). Both Emirates and Qantas use climate-controlled cargo holds maintained at 16–18°C throughout the flight.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Australian biosecurity laws prohibit the inclusion of hay, straw, or rawhide chews in the crate. Only synthetic bedding and stainless-steel bowls are permitted. Dubai Pet Relocation provides a pre-travel packing guide that complies with both Australian export and UAE import regulations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Australia to Dubai Pet Relocation FAQs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F5F6FD] rounded-[20px] p-6">
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

      <OfficialSources />

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4 text-[#4F5BD5]" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from Australia to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation understands the unique challenges of Australian pet export. From Sydney, Melbourne, Brisbane, Perth, or anywhere in Australia — we coordinate with AQIS, DAFF, and UAE authorities to ensure a smooth relocation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get an Australia to Dubai quote" message="Hi, I want to relocate my pet from Australia to Dubai. Can you help me understand the AQIS process and cost?" />
              <a href={`${BASE_URL}/how-it-works/`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How It Works
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <a href={`${BASE_URL}/guides/pet-relocation-cost-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cost Guide</p>
                <p className="text-sm text-white/70">Full breakdown of pet relocation costs in Dubai</p>
              </a>
              <a href={`${BASE_URL}/guides/uae-pet-import-requirements/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Import Requirements</p>
                <p className="text-sm text-white/70">UAE rules for bringing pets into the country</p>
              </a>
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for relocating dogs to Dubai</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Routes & Next Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Related Routes</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Related Routes & Next Steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/service/pet-import-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet Import to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Our full import service: permits, customs and door-to-door delivery.</p>
            </Link>
            <Link to="/routes/new-zealand-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">New Zealand to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">A similar rabies-free origin with comparable requirements.</p>
            </Link>
            <Link to="/routes/south-africa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">South Africa to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for South African pet relocations.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Low-risk route guide for pets relocating from Britain.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-white border-t border-[#EBEBEB]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5A5A5A]">
            <span>Related:</span>
            <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] hover:underline">Cost Guide</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] hover:underline">Import Requirements</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/how-it-works/" className="text-[#4F5BD5] hover:underline">How It Works</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/dog-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Dog Relocation</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/cat-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Cat Relocation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
