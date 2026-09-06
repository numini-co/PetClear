import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'

export default function UKToDubai() {
  const pageUrl = `${BASE_URL}/routes/uk-to-dubai/`
  const pageTitle = 'Pet Relocation UK to Dubai | Guide 2026'
  const pageDescription = 'Relocate your pet from the UK to Dubai. Low-risk route: no titer test, 21-day rabies wait, direct BA/EK flights from LHR. Costs, documents and timeline.'
  const keywords = 'UK to Dubai pet relocation, pet transport UK to Dubai, British pet relocation Dubai, BA pet cargo Dubai, Emirates pet transport UK, UK pet import Dubai, London to Dubai pet travel, dog relocation UK to Dubai, cat relocation UK to Dubai'

  const faqs = [
    {
      question: 'Does my pet need a rabies titer test from the UK to Dubai?',
      answer: 'No. The UK is classified as a low-risk, rabies-free country by the UAE Ministry of Climate Change and Environment (MOCCAE). Pets travelling from the UK to Dubai do not require a rabies neutralising antibody titre test (RNATT). Only a valid rabies vaccination (administered at least 21 days before travel) and an official health certificate are required.'
    },
    {
      question: 'Which airlines fly pets from the UK to Dubai?',
      answer: 'British Airways (BA) and Emirates (EK) operate direct pet cargo services from London Heathrow (LHR) to Dubai International (DXB). BA World Cargo and Emirates SkyCargo both offer climate-controlled animal transport. Some pets may also travel in-cabin on certain airlines depending on size and weight restrictions.'
    },
    {
      question: 'How long does the UK to Dubai pet relocation process take?',
      answer: 'The minimum timeline is 4 to 6 weeks: Week 1 — microchip and rabies vaccination (21-day wait begins); Week 4 — apply for UAE import permit (valid 30 days from issuance); Week 5 — veterinary health check and official UK health certificate (DEFRA-issued, within 10 days of travel); Week 6 — book cargo flight and arrange Dubai customs clearance. Dubai Pet Relocation handles all steps in parallel to minimise wait time.'
    },
    {
      question: 'How much does it cost to relocate a pet from the UK to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 8,000 to AED 18,000 (GBP 1,700–3,800). This includes: veterinary prep (microchip + vaccines ~AED 500–1,000), UK export health certificate (~AED 800–1,500), UAE import permit (AED 500), air cargo freight (AED 4,000–10,000 depending on crate size/weight), customs clearance in Dubai (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 1,500–3,000). Multiple pets may qualify for discounted rates.'
    },
    {
      question: 'What documents are required for a UK pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip implanted before rabies vaccination; (2) valid rabies vaccination certificate (21+ days old, from an authorised UK vet); (3) UAE import permit obtained via MOCCAE online portal; (4) official UK export health certificate (Model A or Model B) issued by an OV (Official Veterinarian) within 10 days of travel; (5) copy of pet owner\'s passport and UAE residence visa (if applicable). No titer test is required from the UK.'
    },
    {
      question: 'Can my pet travel in the cabin from the UK to Dubai?',
      answer: 'Most UK-to-Dubai flights require pets to travel as air cargo (hold) rather than in the cabin, due to UAE regulations and airline policies. However, small pets under certain weight limits may travel in-cabin on select airlines as part of the owner\'s baggage allowance. Emirates and British Airways generally require pets to be booked via their cargo division. Dubai Pet Relocation can advise on the best option based on your pet\'s size and breed.'
    },
    {
      question: 'Are there breed restrictions for dogs travelling from the UK to Dubai?',
      answer: 'The UAE prohibits import of certain dog breeds classified as "dangerous" including Pit Bull Terriers, Staffordshire Bull Terriers, American Staffordshire Terriers, Rottweilers, Doberman Pinschers, and several other fighting/mastiff breeds. Brachycephalic (flat-faced) breeds such as Pugs, Bulldogs, and Persian cats face summer travel restrictions (May–September) on many airlines due to heat sensitivity. Dubai Pet Relocation will verify breed eligibility before booking.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from the UK?',
      answer: 'Upon arrival at DXB, pets are offloaded from the aircraft and transferred to the Dubai Municipality Animal Care Centre (or a licensed veterinary facility for inspection). A MOCCAE vet examines the pet, verifies the microchip and documents, and issues an entry clearance. If all paperwork is correct, the pet is released within 2–4 hours. Dubai Pet Relocation provides meet-and-greet service, handles customs formalities, and can deliver your pet directly to your home or a Dubai boarding facility.'
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
        { "@type": "ListItem", "position": 3, "name": "UK to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'UK to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-uk-to-dubai-dog-flag-hero.jpg"
        imageAlt="Pet relocation from UK to Dubai"
        fallbackSrc="/images/hero-uk.jpg"
        eyebrow="United Kingdom → Dubai"
        title="UK to Dubai Pet Relocation — Complete Guide"
        subtitle="The UK is a low-risk, rabies-free country — no titer test required and a faster process. Costs, timelines and documents explained."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from the UK to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The UK is one of the most straightforward origins for pet relocation to Dubai. With no rabies titer test required and direct flights available daily, your pet can be settled in Dubai within 4–6 weeks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">6–7 hours direct</p>
              <p className="text-[#5A5A5A] text-xs mt-2">LHR → DXB</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">4–6 weeks</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Minimum processing time</p>
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
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Titer Test</p>
              <p className="text-[#5A5A5A] text-sm">Not Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Direct entry permitted</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for UK to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Because the UK is a low-risk country, the documentation is relatively straightforward. However, every document must be correctly issued and dated to avoid rejection at Dubai customs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before rabies vaccination. The chip must be readable on arrival in Dubai.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Valid inactivated rabies vaccine administered at least 21 days before travel. Must be issued by an authorised UK veterinary surgeon and include microchip number, vaccine batch, and date.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via the MOCCAE portal. Valid 30 days from issuance. Must be obtained before booking the flight. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. UK Official Export Health Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Model A or Model B certificate issued by an Official Veterinarian (OV) within 10 days of travel. Confirms pet health, rabies vaccination, and freedom from contagious diseases. Endorsed by DEFRA/APHA.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa (if already holding one). For new arrivals, a hotel booking or tenancy contract may be requested.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for UK Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The UK rabies-free status means no RNATT (titer test) is needed — saving 4–8 weeks and AED 1,500+ in lab fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Export health certificates must be issued by an APHA-registered Official Veterinarian (OV). Not all UK vets can issue this.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds (Pugs, Bulldogs, Boxers) face summer travel restrictions on most airlines (May–September). Book early morning or evening flights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The UK has left the EU, so EU pet passports are no longer valid for UAE export. A DEFRA health certificate is mandatory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>All pets must enter Dubai via cargo — not as excess baggage on most routes. Dubai Pet Relocation books IATA-compliant crates and cargo space.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Book your import permit at least 2 weeks before your intended travel date. MOCCAE processing can take 3–5 business days, but delays happen during peak seasons (July–August and December–January).
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">UK to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Transparent pricing for relocating a single pet from the UK to Dubai. Costs vary by pet size, crate dimensions, and departure city. Contact Dubai Pet Relocation for a precise quote.
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Microchip + Rabies Vaccine</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 400–700</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 600–1,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UK Export Health Certificate (DEFRA)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UAE Import Permit (MOCCAE)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (LHR → DXB, one way)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,500–5,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,500–8,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 8,500–14,000</td>
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
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,500–2,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,800–2,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,000–3,500</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 8,000–12,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–16,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 14,000–22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AED and include UK VAT where applicable. Exchange rates may affect final pricing. Air cargo rates fluctuate seasonally. Contact Dubai Pet Relocation for a fixed quote based on your pet's exact weight and crate dimensions. Multiple pets may qualify for a 10–15% discount on combined services.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">UK to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              A typical low-risk relocation from the UK to Dubai takes 4–6 weeks. Here is the exact week-by-week process Dubai Pet Relocation manages for you.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip & Rabies Vaccination',
                  desc: 'Your UK vet implants an ISO microchip and administers an inactivated rabies vaccine. The 21-day waiting period begins immediately. Dubai Pet Relocation verifies your vet is authorised to issue international certificates.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: 'Permit Application & Crate Fitting',
                  desc: 'Dubai Pet Relocation applies for your UAE import permit via the MOCCAE portal. We also measure your pet for an IATA-compliant travel crate and order the appropriate size. We begin airline cargo booking research.',
                  icon: FileText
                },
                {
                  week: 'Week 4',
                  title: 'Health Check & DEFRA Certificate',
                  desc: 'An Official Veterinarian (OV) conducts a pre-travel health examination and issues the Model A/B export health certificate within 10 days of departure. Dubai Pet Relocation reviews all documents for accuracy.',
                  icon: Shield
                },
                {
                  week: 'Week 5',
                  title: 'Flight Booking & Crate Delivery',
                  desc: 'Once the import permit is approved and the health certificate is issued, Dubai Pet Relocation books cargo space with BA or Emirates. Your travel crate is delivered for your pet to acclimatise.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'Departure from UK & Arrival in Dubai',
                  desc: 'Your pet is checked in at the airline cargo terminal at LHR. After a 6–7 hour flight, Dubai Pet Relocation meets your pet at DXB, handles customs clearance, veterinary inspection, and delivers to your door.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from the UK to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Direct flights from London Heathrow to Dubai make this one of the most convenient pet relocation routes. Dubai Pet Relocation books cargo space with all major carriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">British Airways (BA)</h3>
                  <p className="text-sm text-[#5A5A5A]">BA World Cargo — Live Animal Programme</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Daily direct flights LHR → DXB (6h 45m)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo hold (AC at 16–18°C)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA-compliant crate required</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Booking via cargo agent only (Dubai Pet Relocation handles this)</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">British Airways has a well-established live animal programme with dedicated animal care staff at Heathrow. Pets are kept in a temperature-controlled facility before loading.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">Emirates SkyCargo — SkyCargo Live</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Multiple daily direct flights LHR → DXB</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Emirates SkyCargo Live — dedicated animal services</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading and fast-track customs at DXB</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Large breed capacity available (A380 cargo hold)</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the preferred carrier for many Dubai-bound pets due to their direct route and extensive experience with animal cargo. Their SkyCargo team handles thousands of pets annually.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Summer Travel Restrictions (May – September)
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Both BA and Emirates impose restrictions on brachycephalic (snub-nosed) breeds during the UK summer months. This includes Bulldogs, Pugs, Shih Tzus, Boxers, Persian cats, and similar breeds. Dubai Pet Relocation books early morning or late evening flights and provides ventilated crates to mitigate heat risk. For non-brachycephalic breeds, cargo holds remain climate-controlled year-round and are safe for travel.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              During peak season (July–August and December), cargo space fills up 2–3 weeks in advance. We recommend booking your pet's flight as soon as the import permit is issued.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">UK to Dubai Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from the UK to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has relocated hundreds of British pets to Dubai. From London, Manchester, Edinburgh, or anywhere in the UK — we handle the paperwork, flights, and customs so you can focus on settling in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a UK to Dubai quote" message="Hi, I want to relocate my pet from the UK to Dubai. Can you help me understand the process and cost?" />
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
            <Link to="/routes/dubai-to-uk/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to UK</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route — exporting your pet from Dubai back to Britain.</p>
            </Link>
            <Link to="/routes/usa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">USA to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for American pet relocations.</p>
            </Link>
            <Link to="/routes/canada-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Canada to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for Canadian pet relocations.</p>
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
