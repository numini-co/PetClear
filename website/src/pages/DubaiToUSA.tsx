import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Stethoscope, Home, AlertTriangle, Info, PawPrint, Heart, Dog, Cat, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'

export default function DubaiToUSA() {
  const pageUrl = `${BASE_URL}/routes/dubai-to-usa/`
  const pageTitle = 'Dubai to USA Pet Relocation | Export Guide 2026'
  const pageDescription = 'Export your dog or cat from Dubai to the USA. Guide to CDC dog import rules, USDA APHIS health certificates, state rules, airlines, costs and timeline.'
  const keywords = 'Dubai to USA pet relocation, export pet Dubai to USA, pet transport Dubai to America, CDC dog import form, USDA APHIS health certificate, Emirates pet cargo USA, pet relocation to USA, Dubai to JFK pet cargo, Dubai to LAX pet transport, dog import USA CDC, cat import USA requirements, Hawaii pet quarantine, state pet import rules USA'

  const faqs = [
    {
      question: 'What are the CDC requirements for importing a dog from Dubai to the USA?',
      answer: 'The US Centers for Disease Control and Prevention (CDC) requires all dogs imported into the USA from high-risk rabies countries (including the UAE) to have: (1) a valid rabies vaccination certificate issued by a licensed veterinarian, showing the vaccine was administered at or after 12 weeks of age and at least 28 days before arrival; (2) an ISO-compliant microchip implanted before the rabies vaccination; (3) a CDC Dog Import Form completed online (free, required for all dogs entering from high-risk countries). The form must be submitted online before travel and the receipt printed for airline and border inspection. Dogs must appear healthy on arrival. Puppies under 6 months are generally not allowed unless they meet specific CDC exemption criteria.'
    },
    {
      question: 'Do cats need a rabies vaccination to enter the USA from Dubai?',
      answer: 'The CDC does not require rabies vaccination for cats entering the USA from any country. However, the USDA APHIS (Animal and Plant Health Inspection Service) and individual state regulations may require a rabies certificate for cats. Some states, such as California and New York, strongly recommend or require rabies vaccination for all cats. Dubai Pet Relocation recommends vaccinating your cat against rabies before travel and carrying the vaccination certificate, even if not strictly required by federal law. This protects your cat and avoids any issues at state-level veterinary inspections.'
    },
    {
      question: 'What is the USDA APHIS health certificate for pets entering the USA?',
      answer: 'A USDA APHIS health certificate is a document issued by an accredited veterinarian in the origin country (the UAE) certifying that the pet is healthy and free from contagious diseases. For pets travelling from Dubai to the USA, a UAE-licensed veterinarian can issue the health certificate if they are accredited by the USDA. The certificate must be issued within 10 days of travel for dogs and cats. It includes the pet\'s identification details, vaccination records, health examination results, and the veterinarian\'s accreditation number. Dubai Pet Relocation works with USDA-accredited veterinarians in Dubai to ensure the health certificate meets US entry requirements. The certificate is presented at the US port of entry (CBP inspection) and may be required by state authorities upon arrival.'
    },
    {
      question: 'Which airlines fly pets from Dubai to the USA?',
      answer: 'Emirates (EK) is the primary carrier for pet cargo from Dubai to the USA, with direct flights to New York JFK, Los Angeles LAX, Chicago ORD, Washington Dulles IAD, San Francisco SFO, Boston BOS, and Houston IAH. United Airlines, Delta Air Lines, and American Airlines also operate cargo services from Dubai to major US hubs via their European or Asian hubs. For in-cabin travel, small pets (under 8kg including carrier) may be permitted on some carriers depending on the route and aircraft type. However, most long-haul Dubai–USA flights require pets to travel as cargo due to the duration (12–16 hours). Dubai Pet Relocation books cargo space on all major carriers and recommends the best airline based on your destination, pet size, and season.'
    },
    {
      question: 'How long does it take to relocate a pet from Dubai to the USA?',
      answer: 'The minimum timeline is 2–4 weeks for documentation plus 1–2 days for travel. Week 1: microchip verification and rabies vaccination check (if already valid, this step is instant). Week 2: schedule the USDA APHIS health certificate examination with an accredited UAE veterinarian, complete the CDC Dog Import Form online, and book cargo space. Week 3: final health certificate issued within 10 days of travel, airline documentation review, and crate fitting. Week 4: travel day. For puppies needing their first rabies vaccination, add 28 days (minimum age 12 weeks + 28-day wait). For high-risk breeds or complex cases, allow extra time. Dubai Pet Relocation handles all steps in parallel to minimise delays.'
    },
    {
      question: 'How much does it cost to relocate a pet from Dubai to the USA?',
      answer: 'For a single pet, total costs typically range from AED 7,000 to AED 20,000 (USD 1,900–5,400). This includes: veterinary verification (microchip check + health exam ~AED 300–800), USDA APHIS health certificate (AED 500–1,200), CDC Dog Import Form (free, but Dubai Pet Relocation assists with completion), IATA-approved travel crate (AED 300–1,800), air cargo freight DXB → USA (AED 5,000–12,000 depending on destination, pet size, and crate weight), US customs and CBP inspection (AED 500–1,500), and optional Dubai Pet Relocation door-to-door service including ground transport at destination (AED 2,000–4,000). Direct flights to JFK and LAX are typically cheaper than multi-leg routes to smaller airports. Multiple pets may qualify for discounted rates on combined services. Brachycephalic breeds may incur additional airline fees or require ventilated crates.'
    },
    {
      question: 'Are there state-specific rules for pets entering the USA?',
      answer: 'Yes. While CDC and USDA APHIS set federal rules, individual states have their own requirements. Most states require a valid rabies certificate and health certificate but do not impose quarantine. However, Hawaii and Guam have strict quarantine rules: Hawaii requires a rabies vaccination, microchip, and a negative rabies titer test (FAVN) with a 120-day waiting period, or a 5-day-or-less quarantine programme if all requirements are met in advance. Guam has a similar quarantine programme. Some states (e.g., California, Florida, New York) have additional veterinary inspection requirements for certain diseases. Dubai Pet Relocation advises on state-specific rules for your destination and coordinates with local veterinarians or quarantine facilities if needed. For most mainland states (Texas, Illinois, Georgia, Washington, etc.), there is no quarantine if federal documents are correct.'
    },
    {
      question: 'What does Dubai Pet Relocation handle for a Dubai to USA pet relocation?',
      answer: 'Dubai Pet Relocation manages the entire Dubai to USA pet relocation process. We handle: (1) CDC Dog Import Form completion and submission (free online form, but we ensure accuracy); (2) health certificate scheduling with a USDA-accredited UAE veterinarian; (3) document review and airline compliance check; (4) IATA-compliant crate sourcing and fitting; (5) flight booking with Emirates, United, Delta, or American Airlines; (6) pre-flight veterinary health check; (7) DXB cargo check-in and customs clearance; (8) US CBP (Customs and Border Protection) inspection coordination at JFK, LAX, ORD, IAD, SFO, or your arrival airport; (9) ground transport from the US airport to your home or boarding facility; (10) state-specific requirement verification and post-arrival veterinary guidance. We provide WhatsApp updates at every step and a named contact during travel days.'
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
        { "@type": "ListItem", "position": 3, "name": "Dubai to USA", "item": pageUrl }
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
      "dateModified": "2026-01-15"
    }
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        meta={{
          title: pageTitle,
          description: pageDescription,
          keywords: keywords,
          canonical: pageUrl,
          ogType: 'article'
        }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Dubai to USA' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-dubai-to-usa-dog-flag-hero.jpg"
        imageAlt="Pet relocation from Dubai to USA"
        fallbackSrc="/images/hero-dubai-to-usa.jpg"
        eyebrow="Dubai → United States"
        title="Dubai to USA Pet Relocation — Exporting Your Pet to America"
        subtitle="Direct Emirates flights and clear CDC rules. We handle CDC Dog Import forms, USDA APHIS health certificates, and US customs."
        updated="Updated June 2026"
      />

      {/* US IMPORT RULES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">US Requirements</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">US Import Rules for Pets from Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The USA has federal requirements (CDC and USDA APHIS) and state-level rules. Most states do not require quarantine if federal documents are correct. Here is what you need to know for dogs and cats travelling from Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">CDC Dog Import Rules</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                The CDC classifies the UAE as a high-risk country for dog rabies. All dogs entering the USA from Dubai must have:
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Valid rabies vaccination certificate (administered at or after 12 weeks of age, at least 28 days before arrival)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> ISO-compliant microchip implanted before the rabies vaccination</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> CDC Dog Import Form completed online (free, required before travel)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Dog must appear healthy on arrival</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">USDA APHIS Health Certificate</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                A health certificate issued by a USDA-accredited UAE veterinarian is required for both dogs and cats. The certificate must:
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Be issued within 10 days of travel</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Include microchip number, vaccination details, and health examination results</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Be completed by a USDA-accredited veterinarian (not all UAE vets hold this accreditation)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Be presented at US CBP inspection on arrival</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Cat className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Cat Import Requirements</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                The CDC does not require rabies vaccination for cats entering the USA. However, Dubai Pet Relocation recommends:
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Rabies vaccination (recommended, not federally required)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> USDA APHIS health certificate within 10 days of travel</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> ISO-compliant microchip</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Check state-specific rules (some states require rabies cert for cats)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CDC REQUIREMENTS DETAIL */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">CDC Requirements</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">CDC Dog Import Form & Rabies Certificate</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Since 2023, the CDC requires all dogs entering the USA from high-risk rabies countries to complete a Dog Import Form online. This is a free, mandatory form that must be submitted before travel. Dubai Pet Relocation completes this form on your behalf as part of our service.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. CDC Dog Import Form</p>
                    <p className="text-[#5A5A5A] text-sm">A free online form submitted via the CDC website. It requires the dog's microchip number, rabies certificate details, owner information, and travel dates. The form generates a receipt that must be printed and carried during travel. Dubai Pet Relocation completes and submits this form for you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination Certificate</p>
                    <p className="text-[#5A5A5A] text-sm">Must be issued by a licensed veterinarian, show the vaccine was administered at or after 12 weeks of age, and be at least 28 days old at the time of US arrival. The certificate must include the microchip number, vaccine manufacturer, product name, batch number, and date of administration. Annual or 3-year vaccines are both accepted if still valid.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. Microchip Requirements</p>
                    <p className="text-[#5A5A5A] text-sm">An ISO 11784/11785 compliant 15-digit microchip is required. The microchip must be implanted before the rabies vaccination is administered. If the rabies vaccine was given before microchipping, the vaccination must be repeated after the microchip is implanted. The microchip number must be recorded on all documents: health certificate, rabies certificate, and CDC Dog Import Form.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. Health on Arrival</p>
                    <p className="text-[#5A5A5A] text-sm">Dogs must appear healthy on arrival. If a dog shows signs of illness at the US port of entry, CBP may require additional veterinary examination or quarantine at the owner's expense. Dubai Pet Relocation schedules a pre-travel health check 2–3 days before departure to ensure your dog is in optimal condition for the flight.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for US-Bound Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The CDC Dog Import Form is free but mandatory. Airlines will not board a dog from a high-risk country without the CDC receipt. Dubai Pet Relocation submits this form and prints the receipt for your travel folder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Not all UAE veterinarians are USDA-accredited. Only an accredited vet can issue the APHIS health certificate. Dubai Pet Relocation works exclusively with accredited veterinarians in Dubai to ensure your certificate is valid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Puppies under 6 months are generally not permitted under CDC rules unless they meet specific exemption criteria. Contact Dubai Pet Relocation before planning travel with a young puppy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds (Pugs, Bulldogs, Boxers, Shih Tzus, Persian cats) face summer travel restrictions on most airlines (May–September). Book early morning flights or consider travel outside peak summer months.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Some US states have additional requirements. Hawaii and Guam require quarantine or advanced rabies testing. California, Florida, and New York have veterinary inspection rules. Dubai Pet Relocation checks your specific destination state before booking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Direct flights from Dubai to the US are 12–16 hours. Dubai Pet Relocation ensures your pet has a water container attached to the crate, absorbent bedding, and a pre-flight acclimatisation period to reduce travel stress.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Complete the CDC Dog Import Form at least 2 days before travel. While the form is instant, having it ready early allows Dubai Pet Relocation to verify all details match your rabies certificate and health certificate before departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIRLINES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Airlines</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from Dubai to the USA</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Emirates dominates the Dubai–USA route with direct flights to multiple hubs. United, Delta, and American also offer cargo services via their global networks. Dubai Pet Relocation books cargo space on all major carriers.
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
                  <p className="text-sm text-[#5A5A5A]">Emirates SkyCargo — Direct Flights</p>
                </div>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Emirates is the primary carrier for Dubai–USA pet cargo, offering direct flights to all major US hubs. Their SkyCargo Live programme provides dedicated animal handling, climate-controlled holds, and priority offloading.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct flights: JFK (New York), LAX (Los Angeles), ORD (Chicago), IAD (Washington DC), SFO (San Francisco), BOS (Boston), IAH (Houston), MIA (Miami)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo hold (16–18°C)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A380 and B777 large-capacity cargo holds</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading and dedicated animal staff at DXB</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Best for large dogs and direct routes</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the preferred carrier for most Dubai–USA relocations due to direct routes, large cargo capacity, and extensive experience with live animal transport. Flight times are 12–16 hours depending on the destination.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#0057B8]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#0057B8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">United, Delta & American</h3>
                  <p className="text-sm text-[#5A5A5A]">Multi-Leg Cargo Services</p>
                </div>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                United Airlines, Delta Air Lines, and American Airlines operate pet cargo services from Dubai to the USA, typically via European hubs (Amsterdam, Frankfurt, London) or Asian hubs (Tokyo, Seoul). These are useful for destinations not served by Emirates direct flights.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Coverage of secondary US cities (Seattle, Denver, Atlanta, Dallas)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Established pet cargo programmes with IATA-compliant protocols</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled transfers at hub airports</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> May be more cost-effective for certain routes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Longer total travel time due to connections</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Multi-leg routes add complexity but may be necessary for smaller US airports. Dubai Pet Relocation books all legs, ensures the pet is transferred correctly at each hub, and tracks the shipment throughout the journey.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Summer Travel Restrictions (May – September)
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              All airlines impose restrictions on brachycephalic (snub-nosed) breeds during the summer months. This includes Pugs, Bulldogs, Boxers, Shih Tzus, Persian cats, and similar breeds. The restriction is due to the risk of heat stress during ground handling in Dubai's extreme temperatures (40–50°C). Dubai Pet Relocation books early morning flights (departing before 9 AM) and provides ventilated crates with water dispensers to mitigate risk. For non-brachycephalic breeds, cargo holds remain climate-controlled year-round and are safe for travel. During peak season (July–August and December), cargo space fills up 3–4 weeks in advance for popular routes like DXB–JFK and DXB–LAX.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Dubai Pet Relocation recommends booking your pet's flight as soon as the health certificate is issued. For summer travel, we also offer pre-flight boarding in a climate-controlled facility to ensure your pet is well-rested before departure.
            </p>
          </div>
        </div>
      </section>

      {/* STATE-SPECIFIC RULES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">State Rules</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">State-Specific US Pet Import Rules</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              While most US states have no quarantine, a few have specific rules that pet owners must know. Dubai Pet Relocation verifies your destination state's requirements before booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Hawaii</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Hawaii is rabies-free and has the strictest pet import rules in the USA. Dogs and cats must complete one of two programmes:
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <strong>5-Day-or-Less Quarantine:</strong> Requires rabies vaccination, microchip, and a negative FAVN rabies titer test with a 120-day waiting period before arrival. If done correctly, the pet is released after a short inspection.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <strong>Full 120-Day Quarantine:</strong> If the titer test is not completed in time, the pet must be quarantined for 120 days at a state facility in Hawaii (cost: approximately USD 1,000–1,500).</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Dubai Pet Relocation coordinates Hawaii's complex requirements, including FAVN titer testing at a USDA-approved lab and the 120-day advance planning timeline. Start the Hawaii process at least 5 months before travel.</p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Guam</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Guam has similar rules to Hawaii. Dogs and cats must have a rabies vaccination, microchip, and a negative FAVN titer test with a 120-day waiting period before arrival. If the requirements are not met, the pet enters a quarantine facility.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Dubai Pet Relocation coordinates with Guam's Department of Agriculture and the USDA to ensure all documentation is submitted in advance. The 120-day waiting period is non-negotiable, so early planning is essential.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">California, New York, Florida</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                These states have additional veterinary inspection requirements or mandatory rabies vaccination rules for cats and dogs. While there is no quarantine, the state may require:
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A valid rabies certificate for all dogs and cats</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Health certificate endorsed by a state veterinarian (in some cases)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Registration with a local veterinarian within 30 days of arrival</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Dubai Pet Relocation verifies your specific destination state's requirements before travel and provides a checklist of post-arrival actions for your state.</p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">All Other States (No Quarantine)</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                For the vast majority of US states — including Texas, Illinois, Washington, Georgia, Massachusetts, Pennsylvania, Colorado, Arizona, Oregon, North Carolina, and all others — there is no quarantine for pets arriving from Dubai if the federal CDC and USDA requirements are met. The pet is cleared at the port of entry (airport) by US Customs and Border Protection (CBP) and can go directly to your home. Dubai Pet Relocation provides a list of all states with no additional requirements and helps you plan ground transport from the airport to your final destination. We also recommend a post-arrival veterinary check-up within 48 hours to ensure your pet has recovered well from the flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to USA Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Transparent pricing for relocating a single pet from Dubai to the USA. Costs vary by pet size, destination airport, and airline choice. Contact Dubai Pet Relocation for a precise quote.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left data-table">
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Veterinary Health Check & Verification</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–600</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 400–700</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">USDA APHIS Health Certificate</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">CDC Dog Import Form</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Free</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Free</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Free</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (DXB → JFK/LAX/ORD, one way)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 5,000–7,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 7,000–10,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 10,000–14,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">IATA-Approved Travel Crate</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–600</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">US CBP Inspection & Customs</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,200</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–2,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Optional: Dubai Pet Relocation Door-to-Door (US ground transport)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,000–3,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,500–4,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,000–5,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Hawaii/Guam Additional (if applicable)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,000–6,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 3,500–7,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 4,000–8,000</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost (Mainland USA)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 7,000–12,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–16,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 14,000–22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AED and may vary by airline, destination, season, and pet dimensions. Air cargo rates fluctuate and are typically higher in peak travel months (July–August, December). USD conversion is approximate at 1 USD = 3.67 AED. Hawaii and Guam costs include the FAVN titer test, 120-day waiting period coordination, and quarantine fees. Contact Dubai Pet Relocation for a fixed quote based on your pet's exact weight, breed, and destination airport. Multiple pets may qualify for a 10–15% discount on combined services.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to USA Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              A typical export from Dubai to the USA takes 2–4 weeks for documentation plus 1–2 days for travel. Here is the exact week-by-week process Dubai Pet Relocation manages for you.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Document Review & Microchip Check',
                  desc: 'Dubai Pet Relocation reviews your pet\'s existing microchip, vaccination records, and passport. If the rabies vaccine is not current or the microchip is not ISO-compliant, we arrange a veterinary visit immediately. We also verify your destination state\'s specific rules. For Hawaii or Guam, we begin the FAVN titer test process immediately.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2',
                  title: 'Health Certificate & CDC Form',
                  desc: 'We schedule the USDA APHIS health certificate examination with an accredited UAE veterinarian. We complete and submit the CDC Dog Import Form online (free) and print the receipt. We also book cargo space with Emirates, United, Delta, or American Airlines and source the correct IATA-compliant crate.',
                  icon: FileText
                },
                {
                  week: 'Week 3',
                  title: 'Final Prep & Pre-Flight Check',
                  desc: 'The health certificate is issued within 10 days of travel. Dubai Pet Relocation reviews all documents for accuracy, confirms the microchip is readable, and ensures the crate meets airline and IATA standards. We deliver the crate for your pet to acclimatise. A pre-flight health check is scheduled 2–3 days before departure.',
                  icon: Shield
                },
                {
                  week: 'Travel Day',
                  title: 'Departure from Dubai & Arrival in the USA',
                  desc: 'Your pet is checked in at the Emirates, United, Delta, or American Airlines cargo terminal at DXB. After a 12–16 hour direct flight, Dubai Pet Relocation\'s US partner meets your pet at JFK, LAX, ORD, IAD, SFO, or your arrival airport. They handle CBP inspection, document verification, and deliver your pet to your home or a local boarding facility.',
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

      {/* WHAT DUBAI PET RELOCATION HANDLES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Our Service</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">What Dubai Pet Relocation Handles for Dubai to USA</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai Pet Relocation is a full-service pet relocation coordination service. We manage every detail of your pet's journey from Dubai to the USA, so you can focus on your own move.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">CDC Dog Import Form</p>
              <p className="text-[#5A5A5A] text-sm">We complete and submit the free CDC Dog Import Form online, verify all details against your rabies certificate, and print the receipt for your travel folder.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Health Certificate</p>
              <p className="text-[#5A5A5A] text-sm">We schedule the USDA APHIS health certificate with an accredited UAE veterinarian, review the certificate for accuracy, and ensure it meets US entry requirements.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Flight Booking</p>
              <p className="text-[#5A5A5A] text-sm">We book cargo space with Emirates, United, Delta, or American Airlines, source the correct IATA-compliant crate, and coordinate with the airline's animal handling team.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">US Customs & CBP</p>
              <p className="text-[#5A5A5A] text-sm">Our US partner meets your pet at the arrival airport, handles CBP inspection, document verification, microchip scanning, and ensures smooth clearance.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Ground Transport</p>
              <p className="text-[#5A5A5A] text-sm">We arrange ground transport from the US airport to your home, hotel, or boarding facility. Climate-controlled vehicles and experienced pet handlers available.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Travel-day contact</p>
              <p className="text-[#5A5A5A] text-sm">We provide WhatsApp updates at every step, a named contact during travel days, and post-arrival guidance on US veterinary registration and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to USA Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Export Your Pet from Dubai to the USA?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has relocated hundreds of pets from Dubai to New York, Los Angeles, Chicago, Washington DC, and cities across America. We handle the CDC forms, USDA health certificates, flight booking, and US customs so you can focus on your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a Dubai to USA quote" message="Hi, I want to relocate my pet from Dubai to the USA. Can you help me understand the CDC requirements, timeline, and cost?" />
              <a href={`${BASE_URL}/how-it-works/`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How It Works
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for dogs travelling to the USA</p>
              </a>
              <a href={`${BASE_URL}/cat-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for cats travelling to the USA</p>
              </a>
              <a href={`${BASE_URL}/routes/usa-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">USA to Dubai</p>
                <p className="text-sm text-white/70">The reverse route: bringing a pet from the USA to Dubai</p>
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
            <Link to="/service/pet-export-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet Export from Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Our full export service: health certificates, USDA accreditation and cargo.</p>
            </Link>
            <Link to="/routes/usa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">USA to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route — bringing a pet from the USA to Dubai.</p>
            </Link>
            <Link to="/routes/dubai-to-uk/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to UK</p>
              <p className="text-[#5A5A5A] text-sm">Exporting your pet from Dubai to Britain.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for British pet relocations.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 bg-white border-t border-[#EBEBEB]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5A5A5A]">
            <span>Related:</span>
            <Link to="/dog-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Dog Relocation</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/cat-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">Cat Relocation</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/how-it-works/" className="text-[#4F5BD5] hover:underline">How It Works</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/routes/usa-to-dubai/" className="text-[#4F5BD5] hover:underline">USA to Dubai</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] hover:underline">Import Requirements</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] hover:underline">Cost Guide</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
