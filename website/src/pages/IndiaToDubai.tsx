import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import { BASE_URL, LOGO_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import RouteMoneyBodyLink from '../components/RouteMoneyBodyLink.tsx'
import Hero from '../components/Hero.tsx'
import RouteCostTeaser from '../components/RouteCostTeaser.tsx'
import LinkedText from '../components/LinkedText.tsx'
import RouteBuyerFreeHelp from '../components/RouteBuyerFreeHelp.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { waEligibility } from '../lib/conversionCopy.ts'

const waIndia = waEligibility({ origin: 'India', need: 'managed move' })

export default function IndiaToDubai() {
  const pageUrl = `${BASE_URL}/routes/india-to-dubai/`
  const pageTitle = 'Pet Relocation India to Dubai: Titre, AQCS and Timeline'
  const pageDescription =
    'Moving a dog or cat from India to Dubai? Titre timing, export certificate to confirm, MOCCAE permit valid 90 days, and cargo options. Get your route checked.'
  const faqs = [
    {
      question: 'How do I bring a dog to Dubai from India?',
      answer: 'Start about four months out. Your vet implants an ISO microchip and gives a rabies vaccine, then a blood sample goes to an approved lab for a titre test. The result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window. Next comes the MOCCAE import permit, valid 90 days from issuance, the Indian export certificate and a cargo booking into Dubai. Your official vet authority confirms the export step. Reverse twin: [/routes/dubai-to-india/](/routes/dubai-to-india/).',
    },
    {
      question: 'Why is India classified as a high-risk country for pet import to Dubai?',
      answer: 'India is classified as a high-risk country for rabies by the UAE Ministry of Climate Change and Environment (MOCCAE) and the World Organisation for Animal Health (WOAH). Rabies is endemic in India, which means the UAE requires additional verification that your pet has sufficient rabies antibody protection before entry. This is done via the Rabies Neutralising Antibody Titre Test (RNATT), commonly known as the titer test.'
    },
    {
      question: 'What is the titre test and when is the sample taken?',
      answer: 'The titre test measures rabies antibodies. For a move to Dubai the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window. A first vaccine, or a gap, needs at least 21 days before the test. A valid booster does not. Your official vet authority names an approved lab. This page does not publish a lab list.'
    },
    {
      question: 'Which airlines fly pets from India to Dubai?',
      answer: 'Emirates carries pets into Dubai as SkyCargo shipments, not in the cabin. Air India and other carriers may also accept pets as cargo on some routes, but policies and summer embargoes change often. IndiGo pet cargo is confirm current policy. Confirm with the airline for your departure city. We check live acceptance for Mumbai, Delhi and other hubs once your pet\'s file is ready.'
    },
    {
      question: 'How long does the India to Dubai pet relocation process take?',
      answer: 'A vaccinated adult with a passing titre already in hand is often a shorter file than a new puppy. The result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window. Then apply for the MOCCAE permit, valid 90 days from issuance, and the Indian export certificate your official vet authority confirms. A puppy needs the microchip, a primary rabies vaccine, at least 21 days before the sample, lab time, and spare weeks if the result is low. These are typical shapes, not promises.'
    },
    {
      question: 'How much does pet relocation from India to Dubai cost?',
      answer: 'Costs depend on the titre lab, vet visits, crate size, airline cargo rates and coordination, so we do not publish a package total. Government charges in the UAE, such as the MOCCAE permit and arrival release fee, are listed on the official portal and should be confirmed there. Share your pet\'s details and departure city and we quote after the eligibility check.'
    },
    {
      question: 'What documents are required for an Indian pet to enter Dubai?',
      answer: 'Plan for an ISO microchip before the rabies vaccine, a rabies certificate, and a titre result of at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. This is not a 90-day sample window. You also need a MOCCAE import permit valid 90 days from issuance, and an Indian export health certificate. Your official vet authority confirms the export step at the departure airport. This page does not state a day-count for that certificate.'
    },
    {
      question: 'What is AQCS clearance for pets?',
      answer: 'AQCS is the name people use for India\'s Animal Quarantine and Certification Service. This page does not publish the export steps for a pet leaving India. Confirm the export health certificate with your official vet authority and the office at the departure airport before you book. The UAE side is a MOCCAE import permit valid 90 days from issuance.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from India?',
      answer: 'The crate is offloaded at the DXB or DWC cargo terminal. A MOCCAE veterinarian checks the microchip, the rabies record, and the antibody certificate. A matching file is released. The terminal does not publish a fixed clearance time. The quote says who meets the crate and whether the drive continues to the address or to a kennel. India is a high-risk origin, so the antibody certificate has to be in the pouch.'
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
        { "@type": "ListItem", "position": 3, "name": "India to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'India to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-india-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-india.jpg"
        imageAlt="Pet relocation from India to Dubai"
        eyebrow="India → Dubai"
        title="Pet relocation from India to Dubai"
        subtitle="When a titre is required, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window. The MOCCAE permit is valid 90 days from issuance."
        updated="Updated June 2026"
        primaryLabel="Get Route Checked"
        whatsappMessage={waIndia}
        secondary={{ label: 'Pet import to Dubai', to: '/service/pet-import-dubai/' }}
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from India to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The flight from India to Dubai is short. The preparation is not, because a rabies titre usually drives the calendar. Confirm the current rule on the official MOCCAE portal. Mumbai, Delhi, Bengaluru, Chennai, Hyderabad and Kochi are the departure cities families ask about. Pet relocation from Mumbai to Dubai uses the same UAE file as any other Indian city. The difference is the cargo desk at BOM and whether the export certificate names that airport.
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
              <p className="text-[#5A5A5A] text-xs mt-2">Titre: at least 0.5 IU/ml, certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">High-Risk</p>
              <p className="text-[#D4A017] text-xs mt-2 font-medium">Rabies endemic. Titre required</p>
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

      <GuideFunnelCta
        variant="mid"
        title="DIY this corridor, or hand the import file over"
        subtitle="This page explains the India-to-Dubai titre certificate and documents. DIY the sequence here, or open pet import / MOCCAE permit assistance when you want the file managed. Permit validity: 90 days from issuance. Titre: at least 0.5 IU/ml, certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given, when a titre is required. Confirm portal fees on the official site."
        eligibilityMessage={waIndia}
        waLabel="Check India-to-Dubai eligibility"
        links={[
          { to: '/service/pet-import-dubai/', label: 'Pet import to Dubai', icon: 'plane' },
          { to: '/service/moccae-pet-permit/', label: 'MOCCAE permit assistance', icon: 'file' },
        ]}
      />

      {/* DOCUMENTS NEEDED */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Documentation</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for India to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Because India is a high-risk country, the documentation is more extensive than low-risk routes. Plan the titre certificate (valid 365 days if the vaccine stays valid and continuous and no booster is given; this is not a 90-day sample window), the MOCCAE import permit, and an Indian export health certificate. Your official vet authority confirms the export step.
              </p>
              <RouteMoneyBodyLink path="/routes/india-to-dubai/" />

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
                    <p className="text-[#5A5A5A] text-sm">A first rabies vaccine, or a gap, needs at least 21 days before the blood sample. A valid booster does not. The certificate must include the microchip number, vaccine batch, and date.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Rabies Titer Test (RNATT): CRITICAL</p>
                    <p className="text-[#5A5A5A] text-sm">Result at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. This is not a 90-day sample window. A first vaccine, or a gap, needs at least 21 days before the test. A valid booster does not. The lab is whichever your official vet authority accepts. This page does not name laboratories.</p>
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
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Indian export health certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Plan for an export health certificate at the departure airport. Your official vet authority confirms that step. This page does not publish the export process or a day-count for the certificate.</p>
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
                  <span>When a titre is required, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window. The MOCCAE import permit is a separate 90 days, counted from issuance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Export timing is confirmed by your official vet authority. This page does not publish an appointment script or a day-count for the Indian export certificate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Some Indian veterinarians are not familiar with the UAE import requirements. Dubai Pet Relocation can recommend approved vets in Delhi, Mumbai, Bengaluru, and Chennai who have experience with international pet travel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds (Pugs, Bulldogs, Persian cats) face extra airline limits. Confirm current policy with the carrier. Do not assume Air India or IndiGo cargo acceptance.</span>
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
        corridor="India to Dubai"
        whatsappMessage={waIndia}
      />

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">India to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              High-risk files take longer because of the vaccination-to-sample interval and lab turnaround. The result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Month 1',
                  title: 'Microchip, Rabies Vaccine & Titer Test Blood Draw',
                  desc: 'Your Indian vet implants an ISO microchip and gives a rabies vaccine. A first vaccine, or a gap, needs at least 21 days before the test. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. This is not a 90-day sample window. Your official vet authority names the laboratory. This page does not name labs.',
                  icon: Stethoscope
                },
                {
                  week: 'Month 1–2',
                  title: 'Titer Test Results & Sample Window',
                  desc: 'A passing result is at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. This is not a 90-day sample window. Apply for the MOCCAE import permit, valid 90 days from issuance, once the travel month is real.',
                  icon: Shield
                },
                {
                  week: 'Month 3',
                  title: 'Import permit and export certificate',
                  desc: 'Apply for the MOCCAE import permit, valid 90 days from issuance. Ask your official vet authority how the Indian export health certificate is issued. This page does not publish an inspection script or a day-count for that certificate.',
                  icon: FileText
                },
                {
                  week: 'Month 4',
                  title: 'Flight Booking & Final Health Check',
                  desc: 'When the titre certificate is still valid and the MOCCAE permit will cover the flight, confirm cargo. Emirates itineraries ending in Dubai carry animals as cargo. Air India and IndiGo are confirm current policy. A final health check and the IATA crate come last.',
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
              Flights from the main Indian cities to Dubai are short. Emirates itineraries ending in Dubai carry animals as cargo, not in the cabin. Air India and IndiGo pet cargo is confirm current policy, not a stated acceptance on this page.
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
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Itineraries ending in Dubai are SkyCargo</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Animals travel as cargo, not in the cabin</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm the flight and the crate desk</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Heat rules still apply in the hottest months</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates cargo into Dubai is the product to confirm. A passenger ticket is not crate acceptance.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Air India (AI)</h3>
                  <p className="text-sm text-[#5A5A5A]">Confirm current policy</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pet cargo is not stated as accepted here</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm the live-animal product for the city</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Summer embargoes change</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A passenger fare is not crate acceptance</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Air India pet cargo to Dubai is held back until the airline confirms it. Do not book on an assumption.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">IndiGo (6E)</h3>
                  <p className="text-sm text-[#5A5A5A]">Confirm current policy</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pet cargo is not stated as accepted here</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Confirm the product before you rely on it</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Policies change by city and season</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> No crate-size claim is published here</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">IndiGo pet cargo is confirm current policy. Do not treat a passenger fare as acceptance.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Seasonal Considerations for Indian Pet Travel
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Indian summers (April–July) see extreme temperatures that affect both ground handling at Indian airports and cargo hold conditions. Dubai Pet Relocation recommends booking early morning flights (6–9 AM) to avoid peak heat. During monsoon season (July–September), flight delays are common: plan buffer days around your travel date.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              December and January are busy travel months. Keep a titre result of at least 0.5 IU/ml on a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. This is not a 90-day sample window.
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
                    <p className="text-[#5A5A5A] text-sm leading-relaxed"><LinkedText text={faq.answer} /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      <RouteBuyerFreeHelp tone="band" buyerMessage={waIndia} />

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
            <Link to="/routes/dubai-to-india/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Exporting from Dubai to India</p>
              <p className="text-[#5A5A5A] text-sm">The outbound twin. Destination rules first, not this inbound file.</p>
            </Link>
            <Link to="/routes/pakistan-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pakistan to Dubai</p>
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
            <Link to="/guides/rabies-titer-test-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Rabies titre test</p>
              <p className="text-[#5A5A5A] text-sm">Titre certificate valid 365 days, at least 0.5 IU/ml. Not a 90-day sample window.</p>
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
