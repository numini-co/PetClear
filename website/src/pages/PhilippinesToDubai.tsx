import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import { BASE_URL, LOGO_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import RouteMoneyBodyLink from '../components/RouteMoneyBodyLink.tsx'
import Hero from '../components/Hero.tsx'
import RouteCostTeaser, { ROUTE_PACKAGE_COST_FAQ } from '../components/RouteCostTeaser.tsx'
import LinkedText from '../components/LinkedText.tsx'
import RouteBuyerFreeHelp from '../components/RouteBuyerFreeHelp.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'

export default function PhilippinesToDubai() {
  const pageUrl = `${BASE_URL}/routes/philippines-to-dubai/`
  const pageTitle = 'Pet Relocation Philippines to Dubai: Titer, BAI Permit and Timeline'
  const pageDescription =
    'Moving a dog or cat from the Philippines to Dubai? Titre timing, export permit to confirm, MOCCAE permit valid 90 days and Manila cargo options. Get your route checked.'
  const faqs = [
    {
      question: 'Why is the Philippines classified as a high-risk country for pet import to Dubai?',
      answer: 'The Philippines is classified as a high-risk country for rabies by the UAE Ministry of Climate Change and Environment (MOCCAE) and the World Organisation for Animal Health (WOAH). Rabies remains endemic in many parts of the Philippines, which means the UAE requires additional proof of rabies immunity before allowing pets to enter. This proof is provided through the Rabies Neutralising Antibody Titre Test (RNATT), commonly known as the titer test.'
    },
    {
      question: 'What is the titer test (RNATT) and how long does it take for Philippine pets?',
      answer: 'The titre test measures rabies antibodies. The blood sample is taken within 90 days before travel and must show at least 0.5 IU/ml. A first vaccine, or a gap, needs at least 21 days before the test. A valid booster does not. Your official vet authority confirms which laboratory can test the sample. This page does not name laboratories.'
    },
    {
      question: 'Which airlines fly pets from the Philippines to Dubai?',
      answer: 'Philippine Airlines and Emirates are the usual options people ask about on the Manila to Dubai corridor, with pets carried as cargo rather than in the cabin. Confirm current policy with the airline. Cebu Pacific pet cargo is not stated as available on this route until the airline confirms it. Space is limited and heat rules apply in the hottest months, so book early. We check live acceptance once your pet\'s documents are on track.'
    },
    {
      question: 'How can I bring a pet from the Philippines to Dubai?',
      answer: 'Plan for three to five months. Your vet implants an ISO microchip, vaccinates against rabies, then draws blood for a titre test that must show at least 0.5 IU/ml, taken within 90 days before travel. Apply for the MOCCAE import permit, valid 90 days from issuance, get the Philippine export health certificate and book cargo into Dubai. A Manila departure is simpler than a Cebu or Davao pet that first needs a domestic leg. Your official vet authority confirms the export certificate.'
    },
    {
      question: 'How much does it cost to relocate a pet from the Philippines to Dubai?',
      answer: ROUTE_PACKAGE_COST_FAQ
    },
    {
      question: 'What documents are required for a Philippine pet to enter Dubai?',
      answer: 'Plan for an ISO microchip before the rabies vaccine, a rabies certificate, a titre of at least 0.5 IU/ml from a sample taken within 90 days before travel, a MOCCAE import permit valid 90 days from issuance, and a Philippine export health certificate. Your official vet authority confirms that export step. This page does not state a day-count for the certificate.'
    },
    {
      question: 'Does my pet need a titre test from the Philippines to Dubai?',
      answer: 'In most cases yes, because the Philippines is treated as a higher-risk rabies origin for UAE import. The blood sample must be taken within 90 days before travel and the result must be at least 0.5 IU/ml. If the result is low, a booster and a new sample are needed, so build in spare weeks. Confirm the current rule on the official MOCCAE portal. This page does not name laboratories. Your official vet authority confirms where the sample can be tested.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from the Philippines?',
      answer: 'Upon arrival at DXB, your pet is transferred to the Dubai Municipality Animal Care Centre for veterinary inspection. The MOCCAE vet scans the microchip, verifies the rabies vaccination and titer test certificate, and conducts a physical examination. Because the Philippines is a high-risk country, the antibody certificate is checked with the rest of the file. The terminal does not publish a fixed clearance time. If all documents are correct and the pet is healthy, clearance is granted. The quote says who meets the crate and whether delivery continues to the address.'
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
          "text": stripInternalMarkdownLinks(faq.answer)
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Routes", "item": `${BASE_URL}/routes/` },
        { "@type": "ListItem", "position": 3, "name": "Philippines to Dubai", "item": pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "description": pageDescription,
      "author": { "@type": "Organization", "name": "Dubai Pet Relocation" },
      "publisher": { "@type": "Organization", "name": "Dubai Pet Relocation", "logo": { "@type": "ImageObject", "url": LOGO_URL } },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    }
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        ogType="article"
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Philippines to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-philippines-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-philippines.jpg"
        imageAlt="Pet relocation from Philippines to Dubai"
        eyebrow="Philippines → Dubai"
        title="Pet Relocation from the Philippines to Dubai"
        subtitle="The blood sample for a titre is taken within 90 days before travel and must read at least 0.5 IU/ml. The MOCCAE permit is valid 90 days from issuance."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from the Philippines to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The bottleneck on this corridor is titre logistics, not the flight time. Manila (MNL) is the usual cargo airport. Cebu (CEB), Davao (DVO) and Clark (CRK) usually need a domestic leg into Manila before the international crate, and that domestic leg has to accept the animal. Confirm the current titre rule on the official MOCCAE portal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">9–10 hours direct</p>
              <p className="text-[#5A5A5A] text-xs mt-2">MNL → DXB (PAL direct)</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">Sample window</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Titre: at least 0.5 IU/ml, certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">High-Risk</p>
              <p className="text-[#D4A017] text-xs mt-2 font-medium">Rabies endemic: titer required</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for Philippines to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Because the Philippines is a high-risk country, the documentation is more extensive than low-risk routes. Plan the titre sample within 90 days before travel, the MOCCAE import permit, and a Philippine export health certificate. Your official vet authority confirms the export step.
              </p>
              <RouteMoneyBodyLink path="/routes/philippines-to-dubai/" />

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before the rabies vaccination. Many Philippine vets use non-ISO chips (AVID/FISO): a second ISO chip may be required. The chip number must be recorded on all subsequent documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">A first rabies vaccine, or a gap, needs at least 21 days before the blood sample. A valid booster does not. The certificate must include the microchip number, vaccine batch, and date.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Rabies Titer Test (RNATT): CRITICAL</p>
                    <p className="text-[#5A5A5A] text-sm">Blood sample taken within 90 days before travel, result at least 0.5 IU/ml. A first vaccine, or a gap, needs at least 21 days before the test. A valid booster does not. Your official vet authority confirms the laboratory. This page does not name labs.</p>
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
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Philippine export health certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Plan for a Philippine export health certificate before the flight. Your official vet authority confirms the steps and the timing. This page does not state a day-count or an inspection script for that certificate.</p>
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
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for Philippine Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>When a titre is required, the blood sample is taken within 90 days before travel and must show at least 0.5 IU/ml. That is the sample date, not a wait after the draw. The MOCCAE import permit is a separate 90 days, counted from issuance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Export timing is confirmed by your official vet authority. This page does not publish an appointment script or a day-count for the Philippine export certificate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Many Philippine veterinarians are not familiar with the UAE import requirements. Dubai Pet Relocation can recommend experienced vets in Metro Manila, Cebu, and Davao who have handled international pet exports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Philippine Airlines and Emirates are the carriers people ask about. Confirm current policy. Cebu Pacific pet cargo is not stated as available on this route.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Your official vet authority names the laboratory. This page does not publish a lab list.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> If the result is below 0.5 IU/ml, a booster and a new sample are needed. Build in spare weeks. That is not a fixed wait after the first draw.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RouteCostTeaser
        corridor="Philippines to Dubai"
        whatsappMessage="Hi Dubai Pet Relocation! I need a quote for relocating my pet from the Philippines to Dubai."
      />

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Philippines to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              High-risk files take longer because of the vaccination-to-sample interval and lab turnaround. The blood sample is taken within 90 days before travel and must read at least 0.5 IU/ml. That is not a wait after the draw.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Month 1',
                  title: 'Microchip, Rabies Vaccine & Titer Test Blood Draw',
                  desc: 'Your vet implants an ISO microchip and gives a rabies vaccine. The blood sample for the titre is taken within 90 days before travel, after at least 21 days when the vaccine is a primary course. Your official vet authority confirms the laboratory. This page does not name labs.',
                  icon: Stethoscope
                },
                {
                  week: 'Month 1–2',
                  title: 'Titer Test Results & Sample Window',
                  desc: 'A passing result is at least 0.5 IU/ml from a sample taken within 90 days before travel. Do not treat the draw as the start of a wait. Apply for the MOCCAE import permit, valid 90 days from issuance, once the travel month is real.',
                  icon: Shield
                },
                {
                  week: 'Month 3',
                  title: 'Import permit and export certificate',
                  desc: 'Apply for the MOCCAE import permit, valid 90 days from issuance, and ask your official vet authority how the Philippine export health certificate is issued. We do not publish an appointment script for that office.',
                  icon: FileText
                },
                {
                  week: 'Month 4',
                  title: 'Flight Booking & Final Health Check',
                  desc: 'When the titre sample is still inside 90 days before travel and the MOCCAE permit will cover the flight, confirm cargo with Philippine Airlines or Emirates. Cebu Pacific is confirm current policy. A final health check and the IATA crate come last.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'Philippines Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the cargo terminal at Manila (NAIA). After a 9–10 hour flight, Dubai Pet Relocation meets your pet at DXB, handles the veterinary inspection and customs clearance, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from the Philippines to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Philippine Airlines and Emirates are the carriers to confirm for Manila. Emirates itineraries ending in Dubai carry animals as cargo. Cebu Pacific is confirm current policy, not a stated pet option on this page.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#0038A8]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#0038A8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Philippine Airlines (PR)</h3>
                  <p className="text-sm text-[#5A5A5A]">PAL Cargo: Direct MNL-DXB</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> People ask about Manila to Dubai cargo</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm current policy before you book</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A passenger ticket is not crate acceptance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Heat rules still apply in the hottest months</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Philippine Airlines pet cargo is confirm current policy. Do not treat a direct passenger flight as crate acceptance.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo: via Dubai Hub</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Itineraries ending in Dubai are SkyCargo</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Animals travel as cargo, not in the cabin</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm the flight and the crate desk</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> No freight comparison is published here</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates cargo into Dubai is the product to confirm. A passenger ticket is not crate acceptance.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#00A651]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Cebu Pacific (5J)</h3>
                  <p className="text-sm text-[#5A5A5A]">Confirm current policy</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pet cargo is not stated as accepted here</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> No crate-size claim is published here</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm with the airline before any booking</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A passenger fare is not crate acceptance</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Cebu Pacific pet cargo is not confirmed on this route. Do not book on the assumption the airline accepts a crate to Dubai.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Seasonal Considerations for Philippine Pet Travel
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Philippine summers (March–May) are extremely hot and humid, which can affect ground handling at NAIA and cargo hold conditions. Dubai Pet Relocation recommends booking early morning flights (6–9 AM) to avoid peak heat. During typhoon season (June–October), flight delays and cancellations are common: plan buffer days around your travel date.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Peak relocation season for Filipino pets is December–January, when many families travel during the Christmas and New Year holidays. PAL cargo space fills 3–4 weeks in advance during this period. Start the vaccination-to-sample sequence early enough that the titer draw will still be valid under the 365-day certificate rule if the vaccine stays valid and no booster is given, for the flight you actually book.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Philippines to Dubai Pet Relocation FAQs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F5F6FD] rounded-[20px] p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2A2A2A] text-base mb-2">{faq.question}</h3>
                    <p className="text-[#5A5A5A] text-sm leading-relaxed"><LinkedText text={faq.answer} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* CTA */}
      <RouteBuyerFreeHelp
        tone="band"
        buyerMessage="Hello Dubai Pet Relocation. I want Get Route Checked for Philippines to Dubai. I will send the pet, the Philippine city and the target month."
        freeMessage="Hello Dubai Pet Relocation. I would like a free eligibility check for Philippines to Dubai, not a paid quote yet. I will send the pet and the target month."
      />

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
            <Link to="/routes/india-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">India to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">High-risk origin guide with similar titer-test requirements.</p>
            </Link>
            <Link to="/routes/australia-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Australia to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for Australian pet relocations.</p>
            </Link>
            <Link to="/routes/dubai-to-philippines/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Exporting from Dubai to the Philippines</p>
              <p className="text-[#5A5A5A] text-sm">The outbound twin. Destination rules first, not this inbound file.</p>
            </Link>
            <Link to="/routes/indonesia-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Indonesia to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Sibling corridor with its own origin paperwork.</p>
            </Link>
            <Link to="/routes/thailand-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Thailand to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Sibling corridor with its own origin paperwork.</p>
            </Link>
            <Link to="/service/pet-relocation-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet relocation to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">The inbound service page for the move into Dubai.</p>
            </Link>
            <Link to="/service/moccae-pet-permit/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">MOCCAE pet permit</p>
              <p className="text-[#5A5A5A] text-sm">Permit help. Validity is 90 days from issuance.</p>
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
            <Link to="/routes/" className="text-[#4F5BD5] hover:underline">All routes</Link>
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
