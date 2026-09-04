import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'

export default function USAToDubai() {
  const pageUrl = `${BASE_URL}/routes/usa-to-dubai/`
  const pageTitle = 'USA to Dubai Pet Relocation — Complete Guide 2026'
  const pageDescription = 'Relocate your pet from the USA to Dubai. Low-risk route, rules vary by state. Emirates, Etihad, American Airlines. Costs, documents and timeline.'
  const keywords = 'USA to Dubai pet relocation, US pet transport Dubai, American pet relocation Dubai, Emirates pet cargo USA, Etihad pet transport, American Airlines pet cargo, dog relocation USA to Dubai, cat relocation USA to Dubai, pet shipping USA to UAE'

  const faqs = [
    {
      question: 'Is the USA considered low-risk or high-risk for pet import to Dubai?',
      answer: 'The USA is classified as a low-risk country for rabies by the UAE. Most US states do not require a rabies titer test (RNATT). However, if your pet has ever been in a high-risk rabies country before entering the USA, or if the pet originated from a high-risk country, a titer test may be required. Dubai Pet Relocation verifies your pet\'s travel history before planning the route.'
    },
    {
      question: 'Which airlines fly pets from the USA to Dubai?',
      answer: 'Emirates (EK), Etihad (EY), and American Airlines (AA) operate pet cargo services from major US hubs. Emirates flies from New York (JFK), Los Angeles (LAX), Chicago (ORD), San Francisco (SFO), and Houston (IAH). Etihad serves Abu Dhabi with connections from US cities. American Airlines offers cargo from JFK, DFW, and MIA. Most routes are 14–16 hours direct or 18–22 hours with a connection.'
    },
    {
      question: 'How long does the USA to Dubai pet relocation process take?',
      answer: 'The minimum timeline is 4 to 6 weeks for most US states: Week 1 — microchip and rabies vaccination (21-day wait begins); Week 3 — apply for UAE import permit; Week 4 — USDA endorsement of health certificate; Week 5 — veterinary health check and final documentation; Week 6 — book cargo flight and arrange Dubai customs. Some states with additional requirements may need 6–8 weeks.'
    },
    {
      question: 'How much does it cost to relocate a pet from the USA to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 10,000 to AED 22,000 (USD 2,700–6,000). This includes: veterinary prep (microchip + vaccines ~AED 500–1,000), US health certificate and USDA endorsement (~AED 1,000–2,000), UAE import permit (AED 500), air cargo freight (AED 6,000–14,000 depending on route and crate size), customs clearance in Dubai (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 2,000–4,000). East Coast departures (JFK) are generally cheaper than West Coast (LAX).'
    },
    {
      question: 'What documents are required for a US pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip implanted before rabies vaccination; (2) valid rabies vaccination certificate (21+ days old, from a licensed US veterinarian); (3) UAE import permit via MOCCAE; (4) US veterinary health certificate (USDA APHIS Form 7001 or equivalent) endorsed by a USDA APHIS Veterinary Services office within 10 days of travel; (5) copy of pet owner\'s passport and UAE visa. No titer test required for most US-origin pets.'
    },
    {
      question: 'Does the USDA need to endorse my pet\'s health certificate?',
      answer: 'Yes. The UAE requires that the US health certificate be endorsed (stamped and signed) by a USDA APHIS Veterinary Services office. This is separate from your regular vet visit. You must send the completed health certificate to the nearest USDA office for endorsement, which typically takes 1–2 business days by mail or can be done in-person for same-day service. Dubai Pet Relocation guides you through this step or can arrange it on your behalf.'
    },
    {
      question: 'Are there breed restrictions for dogs travelling from the USA to Dubai?',
      answer: 'The UAE prohibits import of certain dog breeds including Pit Bull Terriers, Staffordshire Bull Terriers, American Staffordshire Terriers, Rottweilers, Doberman Pinschers, and several other fighting breeds. Brachycephalic breeds (Pugs, Bulldogs, Boxers, Persian cats) face summer travel restrictions on most airlines. Additionally, some airlines have their own breed restrictions — check with your carrier before booking. Dubai Pet Relocation confirms breed eligibility before proceeding.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from the USA?',
      answer: 'Upon arrival at DXB, your pet is transferred to the cargo handling facility and then to the Dubai Municipality Animal Care Centre for veterinary inspection. A MOCCAE vet verifies the microchip, checks the health certificate and import permit, and conducts a brief physical exam. Assuming all documents are correct, your pet is cleared within 2–4 hours. Dubai Pet Relocation provides meet-and-greet service, handles customs, and delivers your pet to your Dubai residence or a boarding facility.'
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
        { "@type": "ListItem", "position": 3, "name": "USA to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'USA to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-usa.jpg"
        imageAlt="Pet relocation from USA to Dubai"
        eyebrow="United States → Dubai"
        title="USA to Dubai Pet Relocation — Complete Guide"
        subtitle="The USA is a low-risk country — most pets need no titer test. We handle the full process from USDA endorsement to Dubai customs."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from the USA to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The USA offers multiple direct and connecting routes to Dubai. With major hubs on both coasts, you have flexibility in choosing departure cities and airlines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">14–16 hours</p>
              <p className="text-[#5A5A5A] text-xs mt-2">JFK/LAX/ORD → DXB</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">4–6 weeks</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Includes USDA endorsement</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">Low-Risk</p>
              <p className="text-[#4F5BD5] text-xs mt-2 font-medium">No titer test for most states</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">USDA Endorsement</p>
              <p className="text-[#5A5A5A] text-sm">Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Health cert must be USDA-stamped</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for USA to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                US pet relocation to Dubai requires a USDA-endorsed health certificate — a critical step that many owners miss. Dubai Pet Relocation ensures your paperwork is flawless before departure.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before rabies vaccination. Must be scannable on arrival in Dubai. If your pet has an older AVID chip, a second ISO chip may be needed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Valid inactivated rabies vaccine administered at least 21 days before travel. Must be issued by a licensed US veterinarian, include vaccine manufacturer, serial number, and microchip number.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via MOCCAE. Valid 30 days from issuance. Must be obtained before booking. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Dubai Pet Relocation handles the application and Arabic translation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. USDA-Endorsed Health Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">USDA APHIS Form 7001 or equivalent, completed by a US veterinarian and then endorsed by a USDA APHIS Veterinary Services office. Must be done within 10 days of travel. This is the most critical and commonly mishandled document.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa (if applicable). For new arrivals, a hotel booking or tenancy contract may be requested by Dubai customs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for US Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The USDA endorsement is mandatory and separate from your vet visit. Many first-time shippers overlook this step. Plan 3–5 business days for USDA processing by mail, or 1 day for in-person visits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Some US states (Hawaii, Guam) have additional export requirements. Pets originating from Hawaii may need extra clearance due to their unique rabies-free status.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Airlines require pets to be at least 8 weeks old for domestic travel and 16 weeks for international. Some carriers require pets to be 6+ months for long-haul flights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds face summer embargoes on most US carriers (May–September). Plan for early morning departures or wait until cooler months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>East Coast departures (JFK, IAD) are cheaper and faster than West Coast (LAX, SFO). If you have flexibility, flying from the East Coast can save AED 2,000–4,000 in freight costs.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Emirates operates a dedicated SkyCargo Live service at JFK with 24/7 animal care staff. If departing from New York, Emirates is often the smoothest option for pets.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USA to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Costs vary significantly by departure city and pet size. East Coast flights are cheaper than West Coast. Contact Dubai Pet Relocation for a precise quote based on your location and pet.
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">US Health Certificate + USDA Endorsement</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UAE Import Permit (MOCCAE)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (East Coast → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,500–8,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,500–11,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 10,000–16,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (West Coast → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,000–10,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 9,500–14,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 13,000–20,000</td>
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
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost (East Coast)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–14,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 13,000–18,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 17,000–26,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost (West Coast)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 12,000–16,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 15,000–21,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 20,000–30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AED. Air cargo rates vary by season, fuel surcharges, and airline. West Coast flights (LAX, SFO) are significantly more expensive due to longer distance and limited cargo capacity. East Coast (JFK, IAD, ORD) is recommended when possible. Contact Dubai Pet Relocation for a precise quote based on your exact departure city and pet details.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USA to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The US to Dubai route is efficient but requires the USDA endorsement step. Dubai Pet Relocation manages all timelines to avoid last-minute delays.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip & Rabies Vaccination',
                  desc: 'Your US veterinarian implants an ISO microchip and administers a rabies vaccine. The 21-day waiting period begins. Dubai Pet Relocation confirms your vet is accredited and can issue international health certificates.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: 'Import Permit & Flight Research',
                  desc: 'Dubai Pet Relocation applies for your UAE import permit via MOCCAE. We also research flight options from your nearest major hub (JFK, LAX, ORD, IAH, SFO) and reserve cargo space with Emirates, Etihad, or American Airlines.',
                  icon: FileText
                },
                {
                  week: 'Week 4',
                  title: 'Health Certificate & USDA Endorsement',
                  desc: 'Your vet completes the health certificate (APHIS Form 7001). You send it to the nearest USDA APHIS office for endorsement. Dubai Pet Relocation reviews the endorsed certificate for accuracy before it is finalised.',
                  icon: Shield
                },
                {
                  week: 'Week 5',
                  title: 'Final Flight Booking & Crate Prep',
                  desc: 'With the import permit and USDA certificate in hand, Dubai Pet Relocation finalises the cargo booking. Your IATA-compliant crate is delivered for acclimatisation. We provide a pre-flight checklist.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'US Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the airline cargo terminal. After a 14–16 hour flight, Dubai Pet Relocation meets your pet at DXB, handles customs clearance and veterinary inspection, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from the USA to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Multiple US hubs offer connections to Dubai. Emirates dominates the direct route market, while American Airlines and Etihad provide alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo Live</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct from JFK, LAX, ORD, SFO, IAH, BOS</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 14–16 hours non-stop</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Dedicated animal handling at all hubs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading at DXB</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the most popular choice for US pet relocations due to direct routes and extensive cargo experience. Their SkyCargo Live team handles over 10,000 animals annually.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">American Airlines (AA)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo — via partners</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from JFK, DFW, MIA, LAX</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Often connects via partner airlines</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Competitive rates on select routes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Limited brachycephalic capacity</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">American Airlines is a good alternative for budget-conscious shippers from Dallas or Miami, though routing may involve connections. Dubai Pet Relocation evaluates all options for your specific route.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Etihad (EY)</h3>
                  <p className="text-sm text-[#5A5A5A]">Via Abu Dhabi (AUH)</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct from JFK, LAX, ORD, IAD</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Lands at AUH (1 hour from Dubai)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Good rates on certain routes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Ground transport to Dubai included</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Etihad flies to Abu Dhabi rather than Dubai, but Dubai Pet Relocation arranges the 90-minute ground transfer. Sometimes Etihad offers lower freight rates than Emirates on the same US routes.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Summer Embargo & Seasonal Considerations
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              All major US carriers impose summer embargoes on brachycephalic breeds from May through September. Some airlines (including American) also restrict all pet cargo during extreme heat events at specific hubs. Dubai Pet Relocation monitors weather conditions and books early morning (6–9 AM) or late evening (9 PM+) departures to avoid peak temperatures.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Peak travel seasons (June–August and December) see cargo space fill 3–4 weeks in advance. For travel during these periods, begin the process at least 8 weeks ahead. Thanksgiving week is the busiest time for US pet cargo — book 6+ weeks ahead.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USA to Dubai Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from the USA to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has relocated pets from all 50 US states to Dubai. From New York to Los Angeles, Chicago to Houston — we handle the USDA paperwork, flight booking, and Dubai customs so you don't have to worry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a USA to Dubai quote" message="Hi, I want to relocate my pet from the USA to Dubai. Can you help me understand the process and cost?" />
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
            <Link to="/routes/dubai-to-usa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to USA</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route — exporting your pet from Dubai back to America.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Low-risk route guide for pets relocating from Britain.</p>
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
