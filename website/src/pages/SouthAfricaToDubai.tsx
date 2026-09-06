import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import RouteCostTeaser, { ROUTE_PACKAGE_COST_FAQ } from '../components/RouteCostTeaser.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'

export default function SouthAfricaToDubai() {
  const pageUrl = `${BASE_URL}/routes/south-africa-to-dubai/`
  const pageTitle = 'Pet Relocation South Africa to Dubai | Guide 2026'
  const pageDescription =
    'Relocate your pet from South Africa to Dubai. High-risk: titer sample within 90 days before travel ≥0.5 IU/ml. SAA, Emirates.'
  const keywords = 'South Africa to Dubai pet relocation, pet transport South Africa to Dubai, SA pet relocation Dubai, titer test South Africa Dubai, SAA pet cargo Dubai, Emirates pet transport South Africa, dog relocation South Africa to Dubai, cat relocation South Africa to Dubai, wildlife regulations SA Dubai'

  const faqs = [
    {
      question: 'Why is South Africa classified as a high-risk country for pet import to Dubai?',
      answer: 'South Africa is classified as a high-risk country for rabies by the UAE Ministry of Climate Change and Environment (MOCCAE) and the World Organisation for Animal Health (WOAH). Rabies is endemic in parts of South Africa, and the country also has additional wildlife disease concerns. The UAE therefore requires a rabies titer test (RNATT) and imposes additional scrutiny on pets arriving from South Africa, including more thorough veterinary inspections at Dubai customs.'
    },
    {
      question: 'What is the titer test (RNATT) and how long does it take for South African pets?',
      answer: 'The RNATT (Rabies Neutralising Antibody Titre Test) is a blood test that measures your pet\'s rabies antibody levels. For South African pets, the blood sample must be drawn at least 30 days after the rabies vaccination. South Africa has several accredited local laboratories (such as Onderstepoort Veterinary Institute and IDEXX South Africa), so samples can often be processed locally rather than sent abroad. Results typically take 1–3 weeks. After a positive result (≥ 0.5 IU/ml), a mandatory 90-day waiting period from the blood draw date is required before travel. This makes the minimum timeline 3–4 months.'
    },
    {
      question: 'Which airlines fly pets from South Africa to Dubai?',
      answer: 'South African Airways (SA), Emirates (EK), and Qatar Airways (QR) operate pet cargo services from South Africa to Dubai. South African Airways flies from Johannesburg (JNB) and Cape Town (CPT) with direct or one-stop connections. Emirates operates from Johannesburg and Cape Town with connections through their Dubai hub. Qatar Airways flies via Doha (DOH). Most routes are 8–10 hours direct or 10–14 hours with connections. Dubai Pet Relocation books the optimal airline based on your city, pet size, and breed.'
    },
    {
      question: 'How long does the South Africa to Dubai pet relocation process take?',
      answer: 'Plan the file backwards from the flight. Month 1 — microchip and rabies vaccination (the vaccine must be current before a titer, if one is required). Month 1–2 — when a titer is required, draw the blood so the sample remains within 90 days before travel and reads at least 0.5 IU/ml — that is not a wait after the draw. Month 3 — apply for the UAE import permit (valid 90 days from issuance), obtain the South African veterinary health certificate and Department of Agriculture export clearance. Month 4 — book the cargo flight, final health check, and travel. Dubai Pet Relocation manages steps in parallel; we do not invent a shortened titer clock.'
    },
    {
      question: 'How much does it cost to relocate a pet from South Africa to Dubai?',
      answer: ROUTE_PACKAGE_COST_FAQ
    },
    {
      question: 'What documents are required for a South African pet to enter Dubai?',
      answer: 'Required documents: (1) ISO-compliant microchip implanted before rabies vaccination; (2) valid rabies vaccination certificate (30+ days old before titer test); (3) Rabies Neutralising Antibody Titre Test (RNATT) certificate with result ≥ 0.5 IU/ml; (4) UAE import permit via MOCCAE; (5) South African veterinary health certificate and Department of Agriculture, Land Reform and Rural Development (DALRRD) export clearance issued within 10 days of travel; (6) copy of pet owner\'s passport and UAE visa. The titer test and DALRRD export clearance are the critical additional documents required for South African pets.'
    },
    {
      question: 'Are there wildlife or exotic animal restrictions for South African pets going to Dubai?',
      answer: 'Yes. South Africa is home to many exotic and wildlife species, and the UAE has strict regulations regarding the import of non-domestic animals. If you are relocating an exotic pet (e.g., parrots, reptiles, small mammals) from South Africa, additional CITES permits and UAE wildlife import permits may be required. Dogs and cats are generally straightforward, but some breeds (e.g., Boerboels, Rhodesian Ridgebacks) may face additional scrutiny. Dubai Pet Relocation verifies all breed and species restrictions before proceeding with any South African pet relocation.'
    },
    {
      question: 'What happens when my pet arrives in Dubai from South Africa?',
      answer: 'Upon arrival at DXB, your pet is transferred to the cargo handling facility and then to the Dubai Municipality Animal Care Centre for veterinary inspection. Because South Africa is a high-risk country, the MOCCAE vet conducts a thorough examination: scanning the microchip, verifying the rabies vaccination, checking the titer test certificate, and inspecting the pet for signs of illness or parasites. The inspection may take 3–5 hours. If all documents are correct and the pet is healthy, clearance is granted. Dubai Pet Relocation provides meet-and-greet service, handles all customs formalities, and delivers your pet to your home or a Dubai boarding facility.'
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
        { "@type": "ListItem", "position": 3, "name": "South Africa to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'South Africa to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-south-africa-to-dubai-dog-flag-hero.jpg"
        fallbackSrc="/images/hero-south-africa.jpg"
        imageAlt="Pet relocation from South Africa to Dubai"
        eyebrow="South Africa → Dubai"
        title="South Africa to Dubai Pet Relocation — Complete Guide"
        subtitle="High-risk route: titer test (RNATT), 90-day wait, and wildlife rules. We ensure full DALRRD and UAE compliance."
        updated="Updated June 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from South Africa to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              South Africa to Dubai is a mid-distance route with multiple airline options. The high-risk status and wildlife regulations require careful planning, but Dubai Pet Relocation has successfully relocated many South African pets to Dubai.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Time</p>
              <p className="text-[#5A5A5A] text-sm">8–10 hours direct</p>
              <p className="text-[#5A5A5A] text-xs mt-2">JNB/CPT → DXB</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Timeline</p>
              <p className="text-[#5A5A5A] text-sm">3–4 months</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Minimum (titer test + 90-day wait)</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Risk Level</p>
              <p className="text-[#5A5A5A] text-sm">High-Risk</p>
              <p className="text-[#D4A017] text-xs mt-2 font-medium">Rabies endemic + wildlife rules</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for South Africa to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                South Africa's high-risk status and wildlife regulations mean the documentation is extensive. The titer test, DALRRD export clearance, and wildlife compliance checks are the most critical steps.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">15-digit ISO 11784/11785 microchip implanted before the rabies vaccination. Many South African vets use non-ISO chips (Trovan, AVID) — a second ISO chip may be required. The chip number must be recorded on all subsequent documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Inactivated rabies vaccine administered at least 30 days before the titer test blood draw. The certificate must include the microchip number, vaccine batch, and date. Must be issued by a licensed South African veterinarian.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Rabies Titer Test (RNATT) — CRITICAL</p>
                    <p className="text-[#5A5A5A] text-sm">Blood sample drawn at least 30 days after rabies vaccination. Sent to an approved lab (Onderstepoort Veterinary Institute, IDEXX South Africa, or other WOAH-approved lab). Result must be ≥ 0.5 IU/ml. A 90-day waiting period from the blood draw date is mandatory before travel. This is the longest step in the process.</p>
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
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. DALRRD Export Permit & Health Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Export permit and health certificate from the South African Department of Agriculture, Land Reform and Rural Development (DALRRD), issued within 10 days of travel. The DALRRD vet inspects the pet, verifies the microchip and documents, and issues the export clearance. This is mandatory for all pets leaving South Africa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#D4A017] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">6. Wildlife/Exotic Animal Compliance (if applicable)</p>
                    <p className="text-[#5A5A5A] text-sm">For exotic pets (parrots, reptiles, small mammals), additional CITES permits and UAE wildlife import permits may be required. Dogs and cats are generally exempt, but certain breeds (e.g., Boerboels) may need additional documentation. Dubai Pet Relocation verifies all species and breed restrictions before proceeding.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">7. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa. For new arrivals, a hotel booking or tenancy contract may be requested by Dubai customs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for South African Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The 90-day titer test waiting period is absolute — there are no exceptions. Start the process as soon as you know you are moving. Many South African families are surprised by how long this takes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>DALRRD offices can be slow during peak seasons (November–January and June–July). Book your DALRRD appointment at least 2 weeks before travel to avoid delays.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>South African airlines (SAA) have experienced financial difficulties and route changes. Always confirm flight availability before booking. Emirates and Qatar Airways are more reliable alternatives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Boerboels and other large South African breeds may face additional airline restrictions or require larger crates. Some airlines have weight limits for single-pet cargo bookings. Dubai Pet Relocation confirms capacity before booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The titer test lab must be approved by the UAE. Onderstepoort Veterinary Institute and IDEXX South Africa are both accepted. Dubai Pet Relocation verifies lab accreditation before sending samples.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> If your pet's titer test result is below 0.5 IU/ml, a booster rabies vaccination is required, followed by another 30-day wait and a second titer test. This can add 2+ months to your timeline. Ensure your pet is healthy and not on immunosuppressive medication before the first blood draw. Some vets recommend a pre-titer blood test to check antibody levels before sending the official sample.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RouteCostTeaser
        corridor="South Africa to Dubai"
        whatsappMessage="Hi Dubai Pet Relocation! I need a quote for relocating my pet from South Africa to Dubai."
      />

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">South Africa to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The high-risk route requires a minimum of 3–4 months. The titer test and 90-day wait are the longest steps. Here is the exact month-by-month process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Month 1',
                  title: 'Microchip, Rabies Vaccine & Titer Test Blood Draw',
                  desc: 'Your South African vet implants an ISO microchip and administers a rabies vaccine. After 30 days, a blood sample is drawn for the titer test. The sample is sent to an approved lab (Onderstepoort, IDEXX SA, or other). Dubai Pet Relocation coordinates the blood draw and lab submission.',
                  icon: Stethoscope
                },
                {
                  week: 'Month 1–2',
                  title: 'Titer Test Results & Sample Window',
                  desc: 'Lab results arrive in 1–3 weeks. If the antibody level is ≥ 0.5 IU/ml, the 90-day mandatory waiting period begins from the date of the blood draw. This wait is non-negotiable. Dubai Pet Relocation begins preparing the UAE import permit application during this time.',
                  icon: Shield
                },
                {
                  week: 'Month 3',
                  title: 'Import Permit & DALRRD Export Application',
                  desc: 'Dubai Pet Relocation applies for the UAE import permit via MOCCAE. We also schedule your DALRRD appointment in Johannesburg or Cape Town for the export permit and health certificate. The DALRRD vet inspects the pet and issues clearance.',
                  icon: FileText
                },
                {
                  week: 'Month 4',
                  title: 'Flight Booking & Final Health Check',
                  desc: 'With the 90-day wait complete, Dubai Pet Relocation books cargo space with SAA, Emirates, or Qatar Airways. A final pre-flight health check is conducted. The IATA crate is delivered for acclimatisation. All documents are reviewed one final time.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'South Africa Departure & Dubai Arrival',
                  desc: 'Your pet checks in at the cargo terminal at Johannesburg (JNB) or Cape Town (CPT). After an 8–10 hour flight, Dubai Pet Relocation meets your pet at DXB, handles the veterinary inspection and customs clearance, and delivers to your home.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from South Africa to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              South African Airways, Emirates, and Qatar Airways serve this route. SAA has faced challenges, so Emirates and Qatar are often more reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#003893]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#003893]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">South African Airways (SA)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo — JNB/CPT to DXB</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from JNB and CPT</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 8–10 hours direct or with connections</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Historically popular with SA pet owners</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Route availability may vary</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">South African Airways has been the traditional choice for SA pet relocations, but financial difficulties have led to route reductions. Always confirm availability before booking. Dubai Pet Relocation verifies SAA cargo schedules before recommending this carrier.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates (EK)</h3>
                  <p className="text-sm text-[#5A5A5A]">SkyCargo — via Dubai Hub</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from JNB and CPT</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 8–10 hours direct</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Most reliable for SA pet exports</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority animal handling at DXB</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the most reliable option for South African pet relocations, offering consistent service and direct routing. Their SkyCargo Live team handles all documentation at both ends and is experienced with high-risk country imports.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#600C0C]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#600C0C]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Qatar Airways (QR)</h3>
                  <p className="text-sm text-[#5A5A5A]">Cargo — via Doha (DOH)</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo from JNB and CPT</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> 10–14 hours with connection via Doha</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Good alternative when Emirates is full</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Competitive rates on select routes</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Qatar Airways is a good alternative when Emirates cargo capacity is limited. The connection via Doha adds 2–4 hours to total travel time, but their animal handling is excellent. Dubai Pet Relocation evaluates all options for your specific travel date.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Seasonal & Wildlife Considerations
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              South African summers (November–February) are extremely hot, which affects ground handling at JNB and CPT airports. Dubai Pet Relocation recommends booking early morning flights (6–9 AM) to avoid peak heat. During the rainy season (October–April), flight delays are possible — plan buffer days around your travel date.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              For exotic pets (parrots, reptiles, small mammals) from South Africa, additional CITES permits and UAE wildlife import permits are required. The UAE has strict restrictions on certain species. Dogs and cats are generally straightforward, but Boerboels may face additional scrutiny due to their size and breed classification. Dubai Pet Relocation verifies all species and breed restrictions before proceeding.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Peak relocation season for South African pets is November–January and June–July. Cargo space fills 3–4 weeks in advance during these periods. Start your titer test process at least 4 months before your intended travel date.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">South Africa to Dubai Pet Relocation FAQs</h2>
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
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4 text-[#4F5BD5]" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet from South Africa to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has helped many South African families move their pets to Dubai. From Johannesburg, Cape Town, Durban, or anywhere in South Africa — we manage the titer test, DALRRD export, flight booking, and Dubai customs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a South Africa to Dubai quote" message="Hi, I want to relocate my pet from South Africa to Dubai. Can you help me understand the titer test process and cost?" />
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
              <p className="text-[#5A5A5A] text-sm">A comparable long-haul origin with similar requirements.</p>
            </Link>
            <Link to="/routes/new-zealand-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">New Zealand to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for New Zealand pet relocations.</p>
            </Link>
            <Link to="/routes/dubai-to-south-africa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Exporting from Dubai to South Africa</p>
              <p className="text-[#5A5A5A] text-sm">The outbound twin — DALRRD arrival rules, not this inbound file.</p>
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
