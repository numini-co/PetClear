import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'

export default function IndiaToDubai() {
  const pageUrl = `${BASE_URL}/routes/india-to-dubai/`
  const pageTitle = 'Pet Relocation India to Dubai | Guide 2026'
  const pageDescription =
    'Relocate your pet from India to Dubai. High-risk route: titer sample within 90 days before travel ≥0.5 IU/ml. IndiGo, Emirates, Air India. Documents.'
  const keywords = 'India to Dubai pet relocation, pet transport India to Dubai, Indian pet relocation Dubai, titer test India to Dubai, RNATT India Dubai, IndiGo pet cargo Dubai, Emirates pet transport India, Air India pet cargo, dog relocation India to Dubai, cat relocation India to Dubai'

  const faqs = [
    {
      question: 'Why is India classified as a high-risk country for pet import to Dubai?',
      answer: 'India is classified as a high-risk country for rabies by the UAE Ministry of Climate Change and Environment (MOCCAE) and the World Organisation for Animal Health (WOAH). Rabies is endemic in India, which means the UAE requires additional verification that your pet has sufficient rabies antibody protection before entry. This is done via the Rabies Neutralising Antibody Titre Test (RNATT), commonly known as the titer test.'
    },
    {
      question: 'What is the titer test (RNATT) and how long does it take?',
      answer: 'The RNATT (Rabies Neutralising Antibody Titre Test) is a blood test that measures your pet\'s rabies antibody levels. The blood sample must be drawn at least 30 days after the rabies vaccination and sent to an approved laboratory (such as the Central Veterinary Laboratory in India, or an international lab like IDEXX, Kansas State, or AHL). Results typically take 2–4 weeks. The sample used for travel must be taken within 90 days before travel and read at least 0.5 IU/ml — a pre-travel sample window, not a 90-day wait after the blood is drawn.'
    },
    {
      question: 'Which airlines fly pets from India to Dubai?',
      answer: 'Emirates (EK), Air India (AI), and IndiGo (6E) operate pet cargo services from major Indian cities. Emirates flies from Delhi (DEL), Mumbai (BOM), Bengaluru (BLR), Chennai (MAA), and Hyderabad (HYD). Air India also offers cargo from most metro cities. IndiGo carries pets in cargo on select domestic and international routes. Most flights are 3–4 hours direct. Dubai Pet Relocation books the most suitable airline based on your city, pet size, and travel date.'
    },
    {
      question: 'How long does the India to Dubai pet relocation process take?',
      answer: 'Plan the calendar around vaccination-to-sample interval, lab turnaround, and the 90-day-before-travel sample window: Month 1 — microchip and rabies vaccination (then wait at least 30 days before the titer draw); Month 1–2 — titer blood draw and lab processing so the sample date will still fall within 90 days before the eventual travel date and read ≥ 0.5 IU/ml; Month 2–3 — apply for the UAE import permit (valid 90 days from issuance) and obtain the Indian export health certificate (NOC from AQCS); then book flight, final health check, and travel. Do not sit 90 days after the draw — that is how a passing sample ages out of the window.'
    },
    {
      question: 'How much does it cost to relocate a pet from India to Dubai?',
      answer: 'For a single pet, total costs typically range from AED 6,000 to AED 14,000 (INR 1,35,000–3,15,000). This includes: veterinary prep (microchip + vaccines + titer test ~AED 1,500–2,500), Indian export NOC and health certificate (~AED 800–1,500), MOCCAE import permit AED 200 plus dog port release AED 500 or cat port release AED 250 (confirm on official MOCCAE portal; fees may change), air cargo freight (AED 2,500–6,000 depending on city and crate size), customs clearance in Dubai (AED 800–1,500), and optional Dubai Pet Relocation door-to-door service (AED 1,500–2,500). The titer test adds approximately AED 1,000–1,800 to the total compared to low-risk routes.'
    },
    {
      question: 'What documents are required for an Indian pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip implanted before rabies vaccination; (2) valid rabies vaccination certificate (30+ days old before titer test); (3) Rabies Neutralising Antibody Titre Test (RNATT) certificate with result ≥ 0.5 IU/ml; (4) UAE import permit via MOCCAE; (5) Indian export health certificate (NOC from the Animal Quarantine and Certification Service — AQCS) issued within 10 days of travel; (6) copy of pet owner\'s passport and UAE visa. The titer test is the critical additional document that low-risk countries do not require.'
    },
    {
      question: 'Can I get the titer test done in India, or do I need to send blood abroad?',
      answer: 'The titer test can be done in India at the Central Veterinary Laboratory (CVL) in Pune, or through private veterinary laboratories that are approved by the UAE. However, many Indian pet owners choose to send blood samples to international laboratories such as IDEXX (Germany), Kansas State University (USA), or the Animal Health Laboratory (UK) for faster turnaround and wider international recognition. Dubai Pet Relocation can arrange the blood draw, courier, and lab selection for you. Results from any WOAH-approved lab are accepted by the UAE.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from India?',
      answer: 'Upon arrival at DXB, your pet is transferred to the Dubai Municipality Animal Care Centre for veterinary inspection. The MOCCAE vet scans the microchip, verifies the rabies vaccination, checks the titer test certificate, and inspects the pet for signs of illness. If all documents are correct and the pet is healthy, clearance takes 2–4 hours. Dubai Pet Relocation provides meet-and-greet service, handles all customs formalities, and can deliver your pet directly to your home or a Dubai boarding facility. Because India is high-risk, the inspection may be slightly more thorough than for low-risk countries.'
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
        { "@type": "ListItem", "position": 3, "name": "India to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'India to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-india-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-india.jpg"
        imageAlt="Pet relocation from India to Dubai"
        eyebrow="India → Dubai"
        title="India to Dubai Pet Relocation — Complete Guide"
        subtitle="India is a high-risk country for rabies: when a titer is required, the sample must be taken within 90 days before travel and read ≥0.5 IU/ml — not a wait-after-draw rule."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from India to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              India is one of the most common origins for pet relocation to Dubai. The short flight distance (3–4 hours) makes it cost-effective, but the high-risk status means additional documentation is required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">3–4 hours direct</p>
              <p className="text-[#5A5A5A] text-xs mt-2">DEL/BOM/BLR → DXB</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">Sample window</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Titer within 90 days before travel ≥0.5 IU/ml</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">High-Risk</p>
              <p className="text-[#D4A017] text-xs mt-2 font-medium">Rabies endemic — titer required</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Titer Test</p>
              <p className="text-[#5A5A5A] text-sm">Required</p>
              <p className="text-[#5A5A5A] text-xs mt-2">RNATT ≥ 0.5 IU/ml</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for India to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Because India is a high-risk country, the documentation is more extensive than low-risk routes. The titer test and AQCS NOC are the two most critical steps that Indian pet owners must complete.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before the rabies vaccination. The chip number must be recorded on all subsequent documents. If your pet has a non-ISO chip, a second ISO chip is required.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Inactivated rabies vaccine administered at least 30 days before the titer test blood draw. The certificate must include the microchip number, vaccine batch, and date. A 3-year vaccine is acceptable if not expired.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Rabies Titer Test (RNATT) — CRITICAL</p>
                    <p className="text-[#5A5A5A] text-sm">Blood sample drawn at least 30 days after rabies vaccination. Sent to an approved lab (CVL Pune, IDEXX, Kansas State, or AHL). Result must be ≥ 0.5 IU/ml. The sample must be taken within 90 days before travel — a pre-travel window, not a 90-day wait after the draw.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Applied for online via MOCCAE. Valid 90 days from issuance. Must include the titer test certificate. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Dubai Pet Relocation handles the application and Arabic translation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Indian Export NOC (AQCS)</p>
                    <p className="text-[#5A5A5A] text-sm">No Objection Certificate from the Animal Quarantine and Certification Service (AQCS) of India, issued within 10 days of travel. The AQCS office inspects the pet, verifies the microchip and documents, and issues the export clearance. This is a mandatory step for all pets leaving India.</p>
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
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for Indian Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The titer rule is a sample window: draw within 90 days before travel and obtain ≥ 0.5 IU/ml. Sitting 90 days after the draw is how a passing result ages out. Start the vaccination-to-sample sequence as soon as the move date is real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>AQCS offices in India can be slow during peak seasons (May–July and December). Book your AQCS appointment at least 2 weeks before travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Some Indian veterinarians are not familiar with the UAE import requirements. Dubai Pet Relocation can recommend approved vets in Delhi, Mumbai, Bengaluru, and Chennai who have experience with international pet travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds (Pugs, Bulldogs, Persian cats) face additional airline restrictions. Some Indian carriers do not accept these breeds at all. Plan for Emirates or Air India cargo instead.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The titer test must be done at a lab approved by the UAE. Not all Indian labs are accepted. Dubai Pet Relocation verifies lab accreditation before sending samples.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> If your pet's titer test result is below 0.5 IU/ml, a booster rabies vaccination is required, followed by another 30-day wait and a second titer test. To avoid this, ensure your pet is healthy and not on immunosuppressive medication before the first blood draw.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">India to Dubai Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              India to Dubai is one of the more affordable international routes due to short flight times, but the titer test adds cost. Here is the full breakdown.
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
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–600</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 400–700</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–900</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Rabies Titer Test (RNATT)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Indian AQCS Export NOC</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 600–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 600–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 600–1,200</td>
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (India → DXB, one way)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,000–4,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,500–6,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,000–9,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">IATA-Approved Travel Crate</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 250–400</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 400–700</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Dubai Customs Clearance</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 800–1,400</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Optional: Dubai Pet Relocation Door-to-Door</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,200–2,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,500–2,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,800–3,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 6,000–10,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 8,500–13,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 11,000–18,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AED. MOCCAE labels: import permit AED 200; dog port release AED 500; cat port release AED 250. Confirm on official MOCCAE portal; fees may change. Indian Rupee amounts will vary with exchange rates. The titer test is the single biggest additional cost compared to low-risk routes. Air cargo rates from Tier-2 cities (e.g., Pune, Ahmedabad, Kochi) may be higher due to limited cargo capacity. Multiple pets may qualify for a 10–15% discount on combined services. Contact Dubai Pet Relocation for an exact quote.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">India to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              High-risk files take longer because of the vaccination-to-sample interval and lab turnaround — not because you must sit 90 days after the draw. Schedule the sample so it stays within 90 days before travel at ≥ 0.5 IU/ml.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Month 1',
                  title: 'Microchip, Rabies Vaccine & Titer Test Blood Draw',
                  desc: 'Your Indian vet implants an ISO microchip and administers a rabies vaccine. After 30 days, a blood sample is drawn for the titer test (RNATT). The sample is sent to an approved lab. Dubai Pet Relocation coordinates with the vet and lab to ensure correct documentation.',
                  icon: Stethoscope
                },
                {
                  week: 'Month 1–2',
                  title: 'Titer Test Results & Sample Window',
                  desc: 'Lab results arrive in 2–4 weeks. A passing result is ≥ 0.5 IU/ml. Keep the sample date inside 90 days before the actual travel date — do not treat a pass as a 90-day sit after the draw. Dubai Pet Relocation begins preparing the UAE import permit application during lab turnaround.',
                  icon: Shield
                },
                {
                  week: 'Month 3',
                  title: 'Import Permit & AQCS NOC Application',
                  desc: 'Dubai Pet Relocation applies for the UAE import permit via MOCCAE. We also schedule your AQCS appointment in India for the export NOC. The AQCS vet inspects the pet, verifies the microchip, and issues the export clearance certificate.',
                  icon: FileText
                },
                {
                  week: 'Month 4',
                  title: 'Flight Booking & Final Health Check',
                  desc: 'When the titer sample is still inside the 90-day-before-travel window and the MOCCAE permit will cover the flight, Dubai Pet Relocation books cargo space with Emirates, Air India, or IndiGo. A final pre-flight health check is conducted. The IATA crate is delivered for acclimatisation. All documents are reviewed one final time.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'India Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the cargo terminal in Delhi, Mumbai, or Bengaluru. After a 3–4 hour flight, Dubai Pet Relocation meets your pet at DXB, handles the veterinary inspection and customs clearance, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from India to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Short 3–4 hour flights from India to Dubai make this a cost-effective route. Emirates, Air India, and IndiGo serve all major Indian cities.
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
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct from DEL, BOM, BLR, MAA, HYD</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 3–4 hours non-stop</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Best for large dogs and brachycephalic breeds</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading at DXB</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the most reliable option for Indian pet relocations, with daily direct flights from all major metros and dedicated SkyCargo animal handling.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Air India (AI)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo Division</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from DEL, BOM, MAA, BLR, COK</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 3–4 hours direct</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Competitive rates for medium-sized pets</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Good for Tier-2 city departures</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Air India is a solid budget option, especially for pets departing from cities where Emirates cargo capacity is limited. Their cargo handling is improving but requires careful booking.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">IndiGo (6E)</h3>
                  <p className="text-sm text-[#5A5A5A]">Select International Routes</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Limited pet cargo on select routes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Budget-friendly when available</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Best for cats and small dogs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Limited crate size acceptance</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">IndiGo is the most economical option for small pets, but cargo space is limited and must be booked well in advance. Dubai Pet Relocation confirms availability before recommending IndiGo.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Seasonal Considerations for Indian Pet Travel
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Indian summers (April–July) see extreme temperatures that affect both ground handling at Indian airports and cargo hold conditions. Dubai Pet Relocation recommends booking early morning flights (6–9 AM) to avoid peak heat. During monsoon season (July–September), flight delays are common — plan buffer days around your travel date.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Peak relocation season for Indian pets is December–January, when many families move during school holidays. Cargo space fills 3–4 weeks in advance during this period. Start the vaccination-to-sample sequence early enough that the titer draw will still fall within 90 days before the flight you actually book.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">India to Dubai Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from India to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has helped hundreds of Indian families move their pets to Dubai. From Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, or any city in India — we manage the titer test, AQCS NOC, flight booking, and Dubai customs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get an India to Dubai quote" message="Hi, I want to relocate my pet from India to Dubai. Can you help me understand the titer test process and cost?" />
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
            <Link to="/routes/philippines-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Philippines to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">High-risk origin guide with similar titer-test requirements.</p>
            </Link>
            <Link to="/routes/australia-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Australia to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for Australian pet relocations.</p>
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
