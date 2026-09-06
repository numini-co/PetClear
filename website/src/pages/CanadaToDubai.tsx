import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'

export default function CanadaToDubai() {
  const pageUrl = `${BASE_URL}/routes/canada-to-dubai/`
  const pageTitle = 'Canada to Dubai Pet Relocation — Complete Guide 2026'
  const pageDescription = 'Relocate your pet from Canada to Dubai. Low-risk route with Canadian-specific CFIA requirements. Air Canada, Emirates. Costs, documents and timeline.'
  const keywords = 'Canada to Dubai pet relocation, pet transport Canada to Dubai, Canadian pet relocation Dubai, Air Canada pet cargo Dubai, Emirates pet transport Canada, CFIA pet export, dog relocation Canada to Dubai, cat relocation Canada to Dubai, pet shipping Canada to UAE'

  const faqs = [
    {
      question: 'Is Canada a low-risk or high-risk country for pet import to Dubai?',
      answer: 'Canada is classified as a low-risk country for rabies by the UAE. Most Canadian provinces do not require a rabies titer test (RNATT). However, if your pet has ever been in a high-risk rabies country before entering Canada, a titer test may be required. The Canadian Food Inspection Agency (CFIA) has its own export requirements that must be met in addition to UAE import rules. Dubai Pet Relocation verifies your pet\'s travel history and ensures both Canadian and UAE compliance.'
    },
    {
      question: 'What is the CFIA and what role does it play in Canadian pet export?',
      answer: 'The Canadian Food Inspection Agency (CFIA) is the Canadian government body responsible for animal health and export certification. To export a pet from Canada to Dubai, you need: (1) A health certificate issued by a Canadian veterinarian; (2) CFIA endorsement (inspection and stamp) of that certificate; (3) The CFIA endorsement must be done at a CFIA district office, usually within 5 days of the vet\'s examination. This is similar to the USDA endorsement in the US but follows Canadian-specific procedures. Dubai Pet Relocation guides you through this process or handles it on your behalf.'
    },
    {
      question: 'Which airlines fly pets from Canada to Dubai?',
      answer: 'Air Canada (AC) and Emirates (EK) operate pet cargo services from major Canadian cities. Air Canada flies from Toronto (YYZ), Vancouver (YVR), Montreal (YUL), and Calgary (YYC). Emirates operates from Toronto with direct connections to Dubai. Most routes are 13–15 hours direct or 16–18 hours with a connection. West Coast departures (Vancouver) are longer but offer direct routing on some airlines. Dubai Pet Relocation books the optimal airline based on your city and pet size.'
    },
    {
      question: 'How long does the Canada to Dubai pet relocation process take?',
      answer: 'The minimum timeline is 4 to 6 weeks: Week 1 — microchip and rabies vaccination (21-day wait begins); Week 3 — apply for UAE import permit and schedule CFIA endorsement; Week 4 — veterinary health check and CFIA inspection; Week 5 — CFIA endorsement of health certificate; Week 6 — book cargo flight and arrange Dubai customs. Some Canadian provinces (e.g., Quebec) have additional internal requirements that may add 1 week.'
    },
    {
      question: 'How much does it cost to relocate a pet from Canada to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 10,000 to AED 22,000 (CAD 3,700–8,200). This includes: veterinary prep (microchip + vaccines ~AED 500–1,000), Canadian health certificate and CFIA endorsement (~AED 1,000–2,000), UAE import permit (AED 500), air cargo freight (AED 6,000–14,000 depending on city and crate size), customs clearance in Dubai (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 2,000–4,000). Toronto departures are generally cheaper than Vancouver due to shorter distance.'
    },
    {
      question: 'What documents are required for a Canadian pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip implanted before rabies vaccination; (2) valid rabies vaccination certificate (21+ days old, from a licensed Canadian veterinarian); (3) UAE import permit via MOCCAE; (4) Canadian veterinary health certificate endorsed by CFIA within 5 days of the vet examination and within 10 days of travel; (5) copy of pet owner\'s passport and UAE visa. No titer test is required for most Canadian-origin pets. The CFIA endorsement is the key Canadian-specific requirement.'
    },
    {
      question: 'Does CFIA need to endorse my pet\'s health certificate?',
      answer: 'Yes. The UAE requires that the Canadian health certificate be endorsed (stamped and signed) by the Canadian Food Inspection Agency (CFIA). This is a separate step from your regular vet visit. You must bring the completed health certificate to a CFIA district office for inspection and endorsement. This typically takes 1–2 business days if done in person, or 3–5 days by mail. Dubai Pet Relocation guides you through finding the nearest CFIA office, booking an appointment, and ensuring the paperwork is correct before submission. This is the most commonly mishandled step by Canadian pet owners.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from Canada?',
      answer: 'Upon arrival at DXB, your pet is transferred to the cargo handling facility and then to the Dubai Municipality Animal Care Centre for veterinary inspection. The MOCCAE vet scans the microchip, verifies the rabies vaccination and CFIA-endorsed health certificate, and conducts a brief physical examination. Assuming all documents are correct, your pet is cleared within 2–3 hours. Dubai Pet Relocation provides meet-and-greet service, handles all customs formalities, and delivers your pet to your home or a Dubai boarding facility. Canadian pets generally clear quickly due to Canada\'s low-risk status.'
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
        { "@type": "ListItem", "position": 3, "name": "Canada to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Canada to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-canada-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-canada.jpg"
        imageAlt="Pet relocation from Canada to Dubai"
        eyebrow="Canada → Dubai"
        title="Canada to Dubai Pet Relocation — Complete Guide"
        subtitle="Low-risk route for rabies — no titer test for most pets. We handle CFIA paperwork, flights, and Dubai customs."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from Canada to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Canada offers multiple direct and connecting routes to Dubai. Toronto is the primary hub, but Vancouver and Montreal also offer good options. The CFIA endorsement is the key Canadian-specific step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">13–15 hours</p>
              <p className="text-[#5A5A5A] text-xs mt-2">YYZ/YVR/YUL → DXB</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">4–6 weeks</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Includes CFIA endorsement</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">Low-Risk</p>
              <p className="text-[#4F5BD5] text-xs mt-2 font-medium">No titer test for most provinces</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">CFIA Endorsement</p>
              <p className="text-[#5A5A5A] text-sm">Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Health cert must be CFIA-stamped</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for Canada to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Canadian pet relocation to Dubai requires a CFIA-endorsed health certificate — a critical step that many Canadian owners miss. The CFIA endorsement is similar to the USDA endorsement in the US but follows Canadian-specific procedures.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before rabies vaccination. Most Canadian vets already use ISO-compliant chips. The chip number must be recorded on all export and import documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Valid inactivated rabies vaccine administered at least 21 days before travel. Must be issued by a licensed Canadian veterinarian, include vaccine manufacturer, serial number, and microchip number. A 3-year vaccine is acceptable if not expired.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via MOCCAE. Valid 90 days from issuance. Must be obtained before booking. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Dubai Pet Relocation handles the application and Arabic translation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. CFIA-Endorsed Health Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Canadian veterinary health certificate completed by a licensed Canadian vet, then endorsed by a CFIA district office. The CFIA inspection must be done within 5 days of the vet examination, and the certificate is valid for 10 days from the vet exam. This is the most commonly mishandled document by Canadian pet owners.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa. For new arrivals, a hotel booking or tenancy contract may be requested by Dubai customs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for Canadian Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The CFIA endorsement is mandatory and separate from your vet visit. Many first-time Canadian shippers overlook this step. CFIA offices are not open on weekends, and appointments may be required at some locations. Plan 3–5 business days for CFIA processing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Not all CFIA offices handle pet export endorsements. Toronto, Vancouver, and Montreal have dedicated staff, but smaller cities may require mailing documents to a regional office. Dubai Pet Relocation can identify the correct CFIA office for your location.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Canadian winters (November–March) can cause flight delays due to snow and ice. Dubai Pet Relocation monitors weather conditions and books flights with weather buffers during winter months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds face summer embargoes on most Canadian carriers (May–September). Plan for early morning departures or wait until cooler months. Air Canada has specific restrictions for snub-nosed breeds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Toronto (YYZ) departures are generally cheaper and more convenient than Vancouver (YVR) due to shorter flight distance and more cargo capacity. If you have flexibility, flying from Toronto can save AED 2,000–4,000 in freight costs.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Air Canada operates a dedicated cargo facility at Toronto Pearson (YYZ) with 24/7 animal care staff. If departing from Toronto, Air Canada is often the smoothest option for pets, with direct connections to Emirates at DXB.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Canada to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Costs vary significantly by departure city and pet size. Toronto flights are cheaper than Vancouver. Contact Dubai Pet Relocation for a precise quote based on your Canadian location and pet details.
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Health Certificate + CFIA Endorsement</td>
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (Toronto → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,500–8,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,500–12,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 10,000–17,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (Vancouver → DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,000–10,500</td>
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
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total (Toronto)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–15,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 13,000–20,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 18,000–28,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total (Vancouver)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 12,000–17,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 15,000–22,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 21,000–31,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in CAD and converted to AED. Toronto (YYZ) flights are cheaper due to shorter distance and more cargo capacity. Vancouver (YVR) and Montreal (YUL) are more expensive. Air cargo rates fluctuate with fuel surcharges and seasonal demand. Winter weather (November–March) may cause delays. Contact Dubai Pet Relocation for a precise quote based on your exact departure city and pet details.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Canada to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The Canadian route is efficient but requires the CFIA endorsement step. Dubai Pet Relocation manages all timelines to avoid last-minute delays, especially around Canadian holidays.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip & Rabies Vaccination',
                  desc: 'Your Canadian vet implants/verifies the ISO microchip and administers a rabies vaccine. The 21-day waiting period begins. Dubai Pet Relocation confirms your vet is familiar with international health certificates and CFIA requirements.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: 'Import Permit & CFIA Office Research',
                  desc: 'Dubai Pet Relocation applies for your UAE import permit via MOCCAE. We identify the nearest CFIA office that handles pet export endorsements and book an appointment. We also research flight options from your nearest Canadian hub.',
                  icon: FileText
                },
                {
                  week: 'Week 4',
                  title: 'Health Certificate & CFIA Endorsement',
                  desc: 'Your vet completes the health certificate. You bring it to the CFIA office for endorsement (or mail it if in-person is not possible). Dubai Pet Relocation reviews the endorsed certificate for accuracy before it is finalised.',
                  icon: Shield
                },
                {
                  week: 'Week 5',
                  title: 'Final Flight Booking & Crate Prep',
                  desc: 'With the import permit and CFIA certificate in hand, Dubai Pet Relocation books cargo space with Air Canada or Emirates. Your IATA-compliant crate is delivered for acclimatisation. We provide a pre-flight checklist.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'Canada Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the airline cargo terminal (YYZ, YVR, YUL, or YYC). After a 13–15 hour flight, Dubai Pet Relocation meets your pet at DXB, handles customs clearance and veterinary inspection, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from Canada to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Air Canada and Emirates are the primary carriers for Canadian pet relocations to Dubai. Both offer reliable cargo services with climate-controlled holds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Air Canada (AC)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo — Live Animal</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from YYZ, YVR, YUL, YYC</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 13–15 hours direct or connecting</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo holds</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Canadian-based customer service</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Air Canada is a popular choice for Canadian pet owners due to their extensive domestic network and reliable cargo handling. Their Toronto facility has dedicated animal care staff. However, Air Canada has stricter breed restrictions than Emirates for brachycephalic pets.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo Live — via Toronto</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct from Toronto (YYZ)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 13–14 hours non-stop</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority animal handling at both ends</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Best for large dogs and brachycephalic breeds</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates offers the most direct routing from Toronto and is often preferred for large dogs or breeds that Air Canada restricts. Their SkyCargo Live service includes 24/7 animal monitoring and priority offloading at DXB.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Winter Weather & Seasonal Considerations
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Canadian winters (November–March) can cause significant flight delays due to snow, ice, and de-icing operations. Dubai Pet Relocation monitors weather forecasts and books flights with buffer days during winter months. Extreme cold (-20°C or lower) can also affect ground handling at Canadian airports, so early morning departures (when it is coldest) are avoided.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Summer embargoes (May–September) apply to brachycephalic breeds on most carriers. Air Canada and Emirates both restrict Pugs, Bulldogs, Boxers, and similar breeds during hot weather. Dubai Pet Relocation books late evening flights or waits for cooler months when necessary. Peak travel seasons (July–August and December) see cargo space fill 3–4 weeks in advance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Canada to Dubai Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from Canada to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has relocated pets from all Canadian provinces to Dubai. From Toronto, Vancouver, Montreal, Calgary, or anywhere in Canada — we handle the CFIA paperwork, flight booking, and Dubai customs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a Canada to Dubai quote" message="Hi, I want to relocate my pet from Canada to Dubai. Can you help me understand the CFIA process and cost?" />
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
            <Link to="/routes/usa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">USA to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">A neighbouring North American route with comparable rules.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Low-risk route guide for pets relocating from Britain.</p>
            </Link>
            <Link to="/routes/dubai-to-usa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to USA</p>
              <p className="text-[#5A5A5A] text-sm">Exporting a pet from Dubai to North America.</p>
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
