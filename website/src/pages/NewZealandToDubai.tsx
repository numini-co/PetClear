import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'

export default function NewZealandToDubai() {
  const pageUrl = `${BASE_URL}/routes/new-zealand-to-dubai/`
  const pageTitle = 'New Zealand to Dubai Pet Relocation — Complete Guide 2026'
  const pageDescription = 'Relocate your pet from New Zealand to Dubai. Low-risk but strict MPI export rules. Air New Zealand, Emirates. NZ biosecurity, costs and timeline.'
  const keywords = 'New Zealand to Dubai pet relocation, pet transport NZ to Dubai, New Zealand pet relocation Dubai, MPI pet export Dubai, Air New Zealand pet cargo, Emirates pet transport NZ, dog relocation NZ to Dubai, cat relocation NZ to Dubai, pet shipping New Zealand to UAE'

  const faqs = [
    {
      question: 'Is New Zealand a low-risk or high-risk country for pet import to Dubai?',
      answer: 'New Zealand is classified as a low-risk country for rabies by the UAE. New Zealand is one of the few countries in the world that is completely free of rabies. However, the New Zealand Ministry for Primary Industries (MPI) has extremely strict biosecurity and export regulations that must be followed precisely. While no titer test is required, the MPI export process is comprehensive and must be completed correctly.'
    },
    {
      question: 'What is MPI and how does it affect my pet\'s export from New Zealand?',
      answer: 'MPI (Ministry for Primary Industries) is the New Zealand government agency responsible for biosecurity, animal welfare, and export certification. To export a pet from New Zealand to Dubai, you must: (1) Use an MPI-approved veterinarian; (2) Obtain an MPI export certificate; (3) Present your pet for a pre-export inspection; (4) Ensure all documentation meets both NZ export and UAE import standards. MPI is particularly strict about ensuring no invasive pests or diseases are exported alongside your pet. The export certificate must be issued within 10 days of travel.'
    },
    {
      question: 'Which airlines fly pets from New Zealand to Dubai?',
      answer: 'Air New Zealand (NZ) and Emirates (EK) are the primary carriers for pet cargo from New Zealand to Dubai. Air New Zealand operates from Auckland (AKL), Wellington (WLG), and Christchurch (CHC), often connecting through Australia or Singapore. Emirates flies from Auckland with connections through their Dubai hub. Most routes are 17–20 hours including connections. Due to New Zealand\'s geographic isolation, there are no direct flights to Dubai, so all pets will have at least one connection. Dubai Pet Relocation books the routing with the shortest connection time to minimise stress on your pet.'
    },
    {
      question: 'How long does the New Zealand to Dubai pet relocation process take?',
      answer: 'The minimum timeline is 4 to 6 weeks: Week 1 — microchip and rabies vaccination (21-day wait begins; note: NZ is rabies-free, so this vaccine is for UAE compliance only); Week 2 — apply for MPI export certificate and UAE import permit; Week 3 — MPI pre-export inspection and health certificate; Week 4 — final veterinary check and document review; Week 5 — book cargo flight (connection routing); Week 6 — depart and arrive in Dubai. Some MPI processing steps may take longer during peak seasons, so 6–8 weeks is recommended.'
    },
    {
      question: 'How much does it cost to relocate a pet from New Zealand to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 13,000 to AED 26,000 (NZD 5,800–11,600). This includes: veterinary prep (microchip + rabies export vaccine ~AED 500–1,000), MPI export certificate and inspection (~AED 1,500–2,500), UAE import permit (AED 500), air cargo freight (AED 8,000–16,000 depending on crate size and connection routing), customs clearance in Dubai (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 2,500–4,500). The long flight distance and connection routing make this one of the more expensive routes, but the absence of a titer test saves 3–4 months and AED 1,500+ in lab fees.'
    },
    {
      question: 'What documents are required for a New Zealand pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip (New Zealand uses ISO 11784/11785 as standard); (2) rabies vaccination certificate (even though NZ is rabies-free, the UAE requires it — administered at least 21 days before travel); (3) UAE import permit via MOCCAE; (4) MPI export certificate and health certificate issued by an MPI-approved veterinarian within 10 days of travel; (5) copy of pet owner\'s passport and UAE visa. No titer test is required for New Zealand pets. The MPI export certificate is the key New Zealand-specific document.'
    },
    {
      question: 'Do New Zealand pets need a rabies vaccine if NZ is rabies-free?',
      answer: 'Yes. Although New Zealand is one of the few completely rabies-free countries in the world, the UAE requires all imported pets to have a valid rabies vaccination. Your New Zealand veterinarian must administer an inactivated rabies vaccine (imported specifically for export purposes) at least 21 days before travel. This is a mandatory UAE requirement, not a New Zealand one. The vaccine must be recorded in the MPI health certificate with the microchip number. Most New Zealand vets do not routinely stock rabies vaccines, so the vaccine must be ordered in advance — allow 2–3 weeks for delivery.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from New Zealand?',
      answer: 'Upon arrival at DXB, your pet is transferred to the cargo handling facility and then to the Dubai Municipality Animal Care Centre for veterinary inspection. The MOCCAE vet scans the microchip, verifies the rabies vaccination and MPI health certificate, and conducts a brief physical examination. Because New Zealand is a low-risk, rabies-free country, clearance is typically smooth and takes 2–3 hours. Dubai Pet Relocation provides meet-and-greet service, handles all customs formalities, and delivers your pet to your home or a Dubai boarding facility. The New Zealand origin often means the inspection is quicker than for high-risk countries.'
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
        { "@type": "ListItem", "position": 3, "name": "New Zealand to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'New Zealand to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-new-zealand.jpg"
        imageAlt="Pet relocation from New Zealand to Dubai"
        eyebrow="New Zealand → Dubai"
        title="New Zealand to Dubai Pet Relocation — Complete Guide"
        subtitle="Rabies-free, low-risk origin with strict MPI biosecurity rules. We ensure full MPI and UAE compliance — no titer test."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from New Zealand to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              New Zealand to Dubai is one of the longest pet relocation routes, requiring at least one connection. The absence of a titer test keeps the timeline manageable, but the distance means higher freight costs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">17–20 hours</p>
              <p className="text-[#5A5A5A] text-xs mt-2">AKL/WLG/CHC → DXB (1+ stops)</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">4–6 weeks</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Includes MPI processing</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">Low-Risk</p>
              <p className="text-[#4F5BD5] text-xs mt-2 font-medium">Completely rabies-free</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">MPI Export</p>
              <p className="text-[#5A5A5A] text-sm">Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">MPI certificate + biosecurity check</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for New Zealand to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                New Zealand export documentation is among the strictest globally. MPI ensures no biosecurity risks are exported alongside your pet. The MPI certificate must be completed by an MPI-approved veterinarian.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">New Zealand pets are microchipped with ISO 11784/11785 chips as standard. The chip number must be recorded on all export and import documents. If your pet has a non-ISO chip (rare in NZ), a second ISO chip is required.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination (for UAE compliance)</p>
                    <p className="text-[#5A5A5A] text-sm">Even though New Zealand is completely rabies-free, the UAE requires a rabies vaccination. An inactivated rabies vaccine must be administered by an MPI-approved vet at least 21 days before travel. The vaccine must be imported specifically for export purposes, as routine rabies vaccination is not practised in NZ. Allow 2–3 weeks for vaccine delivery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. MPI Export Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">An MPI export certificate must be obtained from an MPI-approved veterinarian. The vet examines the pet, verifies the microchip, confirms the rabies vaccination, and issues the export health certificate within 10 days of travel. This certificate is the cornerstone of New Zealand's biosecurity export control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via MOCCAE. Valid 30 days from issuance. Must be obtained before booking. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Dubai Pet Relocation handles the application and Arabic translation.</p>
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
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for New Zealand Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>New Zealand is one of the only countries in the world with zero rabies cases. The rabies vaccine for export must be specially imported — most NZ vets do not stock it. Allow 2–3 weeks for delivery and order early.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>MPI-approved veterinarians are limited. Not all NZ vets can issue export certificates. Dubai Pet Relocation can recommend approved vets in Auckland, Wellington, and Christchurch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>All flights from New Zealand to Dubai require at least one connection (usually through Australia, Singapore, or the Emirates hub). Dubai Pet Relocation books the shortest connection time to minimise your pet's total travel time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>New Zealand biosecurity laws prohibit the inclusion of hay, straw, wood shavings, or rawhide in the travel crate. Only synthetic bedding and stainless-steel bowls are permitted. Dubai Pet Relocation provides a compliant packing list.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>No titer test is required for New Zealand pets. This saves approximately AED 1,500–2,000 and 3–4 months compared to high-risk routes, making the overall timeline much shorter despite the long flight distance.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Auckland (AKL) is the primary hub for NZ pet exports, with the most flight options and MPI-approved vets. If you are located elsewhere in NZ, transporting your pet to Auckland for departure can sometimes be cheaper than flying from a regional airport with limited cargo capacity.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">New Zealand to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The long flight distance and connection routing make this one of the more expensive routes, but the absence of a titer test keeps the timeline short.
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MPI Export Certificate & Inspection</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UAE Import Permit (MOCCAE)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (NZ → DXB, with connections)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 8,000–12,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 10,000–15,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 14,000–21,000</td>
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
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 13,000–19,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 16,000–24,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 21,000–32,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in NZD and converted to AED. The long flight distance and mandatory connection routing make this one of the more expensive routes. Air cargo rates include connection fees and fuel surcharges. Auckland departures offer the most options and best rates. Regional departures (e.g., Dunedin, Hamilton) may be significantly more expensive due to limited cargo capacity. Contact Dubai Pet Relocation for a precise quote based on your exact departure city and pet details.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">New Zealand to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The MPI export process adds 1–2 weeks, but the absence of a titer test keeps the overall timeline to 4–6 weeks.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip, Rabies Vaccine & MPI Certificate Application',
                  desc: 'Your MPI-approved vet implants/verifies the ISO microchip and administers the rabies export vaccine. Dubai Pet Relocation applies for the MPI export certificate and begins the UAE import permit application. The rabies vaccine is ordered if not already in stock.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: '21-Day Wait & Permit Processing',
                  desc: 'The 21-day rabies vaccination wait period continues. MPI processes the export certificate (5–10 days). Dubai Pet Relocation monitors the UAE import permit application and researches flight options from Auckland or your nearest airport.',
                  icon: Shield
                },
                {
                  week: 'Week 4',
                  title: 'MPI Health Certificate & Pre-Export Inspection',
                  desc: 'Your MPI-approved vet conducts the pre-export examination and issues the MPI health certificate within 10 days of travel. All documents are reviewed by Dubai Pet Relocation for accuracy and compliance with both NZ and UAE requirements.',
                  icon: FileText
                },
                {
                  week: 'Week 5',
                  title: 'Flight Booking & Crate Preparation',
                  desc: 'With both permits and the MPI certificate in hand, Dubai Pet Relocation books cargo space with Air New Zealand or Emirates. The IATA-compliant crate is delivered for acclimatisation. We provide a pre-flight checklist and connection routing details.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'New Zealand Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the cargo terminal in Auckland, Wellington, or Christchurch. After a 17–20 hour journey with connections, Dubai Pet Relocation meets your pet at DXB, handles customs clearance and veterinary inspection, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from New Zealand to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              All flights from New Zealand to Dubai require at least one connection. Dubai Pet Relocation books the routing with the shortest connection time to minimise stress on your pet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#00A8E1]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#00A8E1]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Air New Zealand (NZ)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo — with connections</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from AKL, WLG, CHC</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 17–20 hours with connections</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Connections via Australia or Singapore</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> NZ-based customer service</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Air New Zealand is a popular choice for NZ pet owners due to their familiarity with MPI requirements and domestic network. However, connections add complexity. Dubai Pet Relocation monitors connection times to ensure your pet is not left on the tarmac for extended periods.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo — via Auckland + Dubai Hub</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from Auckland (AKL)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 17–20 hours with connection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority animal handling at all ports</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Best for large dogs and brachycephalic breeds</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates offers the most seamless connection experience for NZ pets, with their dedicated SkyCargo Live service handling transfers at all hubs. They are often preferred for large dogs or breeds with special requirements. However, Emirates is generally more expensive than Air New Zealand.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Connection Handling & Long-Haul Considerations
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              All New Zealand to Dubai flights require at least one connection, which adds complexity and stress for your pet. Dubai Pet Relocation books connections with a minimum 2-hour layover to allow for pet transfer between aircraft, but avoids excessively long layovers (6+ hours) that would require your pet to be held in a transit facility. The total travel time is 17–20 hours, making this one of the longest pet relocation routes.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Both Air New Zealand and Emirates use climate-controlled cargo holds maintained at 16–18°C throughout the flight. New Zealand biosecurity laws prohibit the inclusion of hay, straw, wood shavings, or rawhide in the travel crate. Dubai Pet Relocation provides a compliant packing list and ensures your pet's crate meets both NZ export and UAE import standards. We also recommend against feeding your pet for 4–6 hours before departure to reduce the risk of motion sickness during the long journey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">New Zealand to Dubai Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from New Zealand to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation understands the unique challenges of New Zealand pet exports. From Auckland, Wellington, Christchurch, or anywhere in NZ — we coordinate with MPI, book the best flight routing, and handle Dubai customs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a NZ to Dubai quote" message="Hi, I want to relocate my pet from New Zealand to Dubai. Can you help me understand the MPI process and cost?" />
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
            <Link to="/routes/australia-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Australia to Dubai</p>
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
