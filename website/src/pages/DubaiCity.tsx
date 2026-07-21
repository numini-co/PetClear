import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint, Heart, MapPin, Building, Phone, Dog, Cat, DollarSign, Briefcase, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DubaiCity() {
  const pageUrl = `${BASE_URL}/cities/dubai/`
  const pageTitle = 'Dubai Pet Relocation | Dog & Cat Transport to Dubai'
  const pageDescription = 'Relocate your dog or cat to Dubai safely. Full-service pet relocation — documents, flights, customs, and delivery. Get a transparent Dubai pet transport quote.'
  const keywords = 'pet relocation Dubai, dog transport Dubai, cat transport Dubai, pet relocation UAE, Dubai pet import, pet shipping Dubai, move pet to Dubai, Dubai pet relocation cost, pet relocation services Dubai, bring dog to Dubai, bring cat to Dubai, Emirates pet cargo Dubai, Dubai pet quarantine, pet relocation JLT, pet relocation Dubai Hills'

  const faqs = [
    {
      question: 'How much does pet relocation to Dubai cost?',
      answer: 'Pet relocation to Dubai typically costs between AED 6,000 and AED 20,000 depending on the origin country, pet size, and airline. Small cats from low-risk countries may cost AED 6,000–10,000, while large dogs from high-risk countries requiring titer tests can reach AED 15,000–25,000. Dubai Municipality registration is an additional AED 100–200 per pet. Dubai Pet Relocation provides a transparent, itemised quote before you commit.'
    },
    {
      question: 'Is there quarantine for pets arriving in Dubai?',
      answer: 'No — if all documentation is correct, there is no quarantine for pets arriving in Dubai from most countries. The UAE classifies countries into low-risk and high-risk categories. Low-risk countries (UK, EU, USA, Australia, etc.) require only a rabies vaccination and health certificate. High-risk countries require a rabies titer test (RNATT) in addition. As long as the microchip, vaccines, and certificates are in order, your pet is cleared within 2–4 hours of arrival at DXB.'
    },
    {
      question: 'Which pet-friendly areas in Dubai are best for dogs and cats?',
      answer: 'Dubai has many pet-friendly communities: Jumeirah Lakes Towers (JLT) has lakeside walking paths and several pet-friendly cafes; Dubai Hills Estate offers large parks and dedicated dog-walking areas; Arabian Ranches is popular with families for its villa layouts and spacious gardens; Emirates Hills is a luxury gated community with quiet streets ideal for dog walking. Mirdif and The Greens also have strong pet-owner communities and nearby veterinary clinics.'
    },
    {
      question: 'How do I register my pet with Dubai Municipality?',
      answer: 'Pet registration in Dubai is mandatory within 30 days of arrival and is done through the Dubai Municipality Aleef mobile app. You need: your Emirates ID or passport, a copy of your tenancy contract (Ejari), your pet\'s vaccination records (especially rabies), and a microchip certificate. The registration fee is AED 100–200 depending on the pet type. Annual renewal is required. Dubai Pet Relocation walks you through the Aleef app registration as part of our arrival service.'
    },
    {
      question: 'What airlines fly pets to Dubai?',
      answer: 'Emirates, Etihad, British Airways, Qatar Airways, Lufthansa, KLM, and Virgin Atlantic all operate pet cargo services to Dubai International Airport (DXB). Emirates SkyCargo is the largest and most experienced, handling thousands of animals per year. For departures from Dubai, Emirates, British Airways, and Virgin Atlantic are the most common choices. Dubai Pet Relocation books cargo space on all major carriers and recommends the best option based on your route, pet size, and season.'
    },
    {
      question: 'How long does pet relocation to Dubai take?',
      answer: 'From low-risk countries (UK, EU, Australia, USA): 4–6 weeks total. This includes microchip and rabies vaccination (21-day wait), import permit application (3–5 days), health certificate (within 10 days of travel), and flight booking. From high-risk countries (India, Pakistan, Philippines, South Africa): 8–16 weeks due to the mandatory rabies titer test (RNATT), which takes 3–8 weeks at the lab plus a 90-day waiting period after the blood draw before travel is permitted.'
    },
    {
      question: 'Are there banned dog breeds in Dubai?',
      answer: 'Yes. The UAE prohibits the import of certain breeds classified as dangerous, including Pit Bull Terriers, Staffordshire Bull Terriers, American Staffordshire Terriers, Rottweilers, Doberman Pinschers, Brazilian Fila, Argentinian Dogo, Japanese Tosa, and Wolfdogs. Brachycephalic (flat-faced) breeds such as Pugs, Bulldogs, Boxers, Shih Tzus, and Persian cats face airline travel restrictions during summer months (May–September) due to heat sensitivity. Dubai Pet Relocation verifies breed eligibility before booking any transport.'
    },
    {
      question: 'What happens when my pet arrives at Dubai Airport (DXB)?',
      answer: 'Upon arrival at DXB, your pet is offloaded from the aircraft and transferred to the Dubai Municipality Animal Care Centre (or a licensed veterinary facility). A MOCCAE veterinarian examines the pet, verifies the microchip number against the import permit and health certificate, and checks vaccination records. If all documents are correct, the pet is released within 2–4 hours. Dubai Pet Relocation provides a meet-and-greet service, handles customs formalities, and delivers your pet directly to your home or a boarding facility in Dubai.'
    }
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dubai Pet Relocation",
      "description": "Professional pet relocation services to and from Dubai. Dog and cat transport, documentation, flight booking, and customs clearance.",
      "url": pageUrl,
      "telephone": "+971 55 174 4849",
      "email": "hello@dubai-pet-relocation.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      },
      "serviceType": "Pet Relocation Services",
      "priceRange": "$$$"
    },
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
        { "@type": "ListItem", "position": 2, "name": "Cities", "item": `${BASE_URL}/cities/` },
        { "@type": "ListItem", "position": 3, "name": "Dubai", "item": pageUrl }
      ]
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
          ogType: 'website'
        }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Cities', path: '/cities/' }, { label: 'Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="Pet relocation services in Dubai skyline"
        eyebrow="Dubai"
        title="Pet Relocation Dubai — Your Dog or Cat's Safe Journey"
        subtitle="One of the most pet-friendly cities in the Middle East — transparent, safe, stress-free relocation for your dog or cat."
        updated="Updated June 2026"
      />

      {/* WHY DUBAI */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Why Dubai</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Why Dubai Is a Great City for Pet Owners</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai has transformed into one of the most pet-welcoming cities in the Gulf region. From gated communities with gardens to world-class veterinary clinics, Dubai offers everything your pet needs for a comfortable life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Pet-Friendly Communities</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Dubai offers a wide range of residential areas ideal for pets. Jumeirah Lakes Towers (JLT) features lakeside walking paths and pet-friendly cafes. Dubai Hills Estate has dedicated dog parks and open green spaces. Arabian Ranches and Emirates Hills provide villa layouts with private gardens — perfect for dogs that need outdoor space.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Mirdif, The Greens, and Dubai Silicon Oasis also have active pet-owner communities, regular dog meet-ups, and nearby veterinary clinics. Most buildings in these areas accept pets with a refundable deposit.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">World-Class Veterinary Care</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Dubai is home to some of the best veterinary clinics in the Middle East. The German Veterinary Clinic in JLT offers advanced diagnostics and surgery. The British Veterinary Hospital in Umm Suqeim provides 24-hour emergency care and boarding. The Dubai Veterinary Hospital in Deira has decades of experience with international pet imports.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Other trusted clinics include Blue Oasis Veterinary Clinic (Dubai Marina), Canadian Veterinary Hospital (Jumeirah), and Amity Veterinary Clinic (Dubai Hills). Dubai Pet Relocation partners with all major clinics for health checks, vaccinations, and documentation.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Clear Pet Regulations</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Dubai Municipality oversees pet registration through the Aleef mobile app. All pets must be registered within 30 days of arrival. The registration fee is AED 100–200 and requires your Emirates ID, tenancy contract (Ejari), and vaccination records. Annual renewal is mandatory.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The UAE prohibits certain dangerous dog breeds, and brachycephalic breeds face summer travel restrictions. Dubai's rules are well-documented and consistently enforced, making compliance straightforward when you work with Dubai Pet Relocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN DUBAI */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Services</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Pet Relocation Services Available in Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai Pet Relocation offers end-to-end pet relocation services in Dubai. Whether you are importing, exporting, or moving within the UAE, we handle every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">To Dubai</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Importing a pet to Dubai from the UK, USA, Europe, Australia, India, the Philippines, or anywhere in the world. We handle import permits, health certificates, flight booking, customs clearance, and home delivery.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> MOCCAE import permit application</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Origin-country vet coordination</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA-compliant crate sourcing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> DXB customs clearance & delivery</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Aleef registration assistance</li>
              </ul>
              <div className="mt-6">
                <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Read Import Guide <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">From Dubai</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Exporting a pet from Dubai to the UK, USA, Europe, Australia, Canada, or anywhere in the world. We prepare export health certificates, book cargo flights, and coordinate with destination customs.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Export health certificate (UAE government vet)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Destination country rule verification</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA crate inspection & fitting</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Emirates / BA / Etihad cargo booking</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Destination customs & ground transport</li>
              </ul>
              <div className="mt-6">
                <Link to="/how-it-works/" className="text-[#4F5BD5] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  How It Works <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Within the UAE</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Moving your pet between Dubai, Abu Dhabi, Sharjah, or any other emirate. We handle local permits, ground transport in climate-controlled vehicles, and inter-emirate documentation.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Inter-emirate health certificates</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled ground transport</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Municipality registration transfer</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Boarding & acclimatisation support</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Same-day or next-day delivery</li>
              </ul>
              <div className="mt-6">
                <Link to="/cities/abu-dhabi/" className="text-[#4F5BD5] font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Abu Dhabi Guide <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL PARTNERS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Network</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Local Partners in Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai Pet Relocation works with a trusted network of veterinary clinics, cargo agents, and pet service providers across Dubai to ensure seamless relocation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Veterinary Clinics</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">German Veterinary Clinic</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Jumeirah Lakes Towers (JLT) — Advanced diagnostics, surgery, and international health certificates.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">British Veterinary Hospital</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Umm Suqeim — 24-hour emergency care, boarding, and pet grooming. Experienced with international relocations.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Dubai Veterinary Hospital</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Deira — One of Dubai's oldest veterinary facilities. Government-authorised for export health certificates.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Blue Oasis Veterinary Clinic</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Dubai Marina — Small-animal specialist with in-house lab and digital X-ray.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Canadian Veterinary Hospital</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Jumeirah — Full-service clinic with dental, surgical, and wellness programmes.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Cargo Agents & Airlines</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Emirates SkyCargo (DXB)</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Dubai International Airport — World's largest pet cargo handler. Climate-controlled facilities and dedicated animal staff.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Dubai Cargo Village (DXB)</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Primary animal handling facility at DXB. Customs inspection and veterinary clearance on arrival.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">Dubai South / DWC Cargo</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Al Maktoum International Airport — Growing cargo hub with modern animal handling facilities.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">dnata Cargo Services</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">Ground handling partner for multiple airlines at DXB. Experienced with live animal transport protocols.</p>
                </div>
                <div className="p-4 bg-[#F5F6FD] rounded-xl">
                  <p className="font-semibold text-[#2A2A2A] text-sm">MICCO Logistics (Abu Dhabi partner)</p>
                  <p className="text-[#5A5A5A] text-xs mt-1">For AUH arrivals and Abu Dhabi-bound pets. Handles Bill of Entry and customs formalities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COST SPECIFIC TO DUBAI */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai-Specific Costs</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              In addition to international transport costs, relocating a pet to Dubai involves a few local fees. These are typically small compared to the overall relocation cost, but it is important to budget for them.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left data-table">
                <thead className="bg-[#F5F5F5]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Fee Item</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Cost (AED)</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBEB]">
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Dubai Municipality Registration (Aleef)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–200</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Per pet. Mandatory within 30 days of arrival.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Annual Renewal</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–200</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Must be renewed every year. Late fees apply.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Quarantine (if required)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 0</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">No quarantine if documents are correct. Only for non-compliant cases.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Customs Clearance at DXB</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,500</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Included in Dubai Pet Relocation's service package.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Veterinary Inspection on Arrival</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 0–300</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Usually covered by the import permit fee. Occasional extra inspection fee.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Ground Transport (DXB to home)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–600</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Depends on distance. Climate-controlled vehicle.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * All prices are estimates in UAE Dirhams (AED). Actual fees may vary depending on the specific municipality, pet type, and processing time. Dubai Pet Relocation includes all known local fees in your upfront quote so there are no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Routes</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Popular Routes to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai Pet Relocation handles pet relocations to Dubai from every major country. Here are the most common routes we manage, with links to detailed guides for each.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/routes/uk-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">UK to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">Low-risk route — no titer test required. BA and Emirates direct flights from London Heathrow. 4–6 week timeline.</p>
            </Link>

            <Link to="/routes/usa-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">USA to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">Direct flights from JFK, LAX, ORD, and IAD. Low-risk — no titer test. 4–6 week timeline. Emirates and United preferred.</p>
            </Link>

            <Link to="/routes/india-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">India to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">High-risk route — rabies titer test (RNATT) required. 8–16 week timeline. Direct flights from DEL, BOM, MAA, and BLR.</p>
            </Link>

            <Link to="/routes/australia-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Australia to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">Low-risk route — no titer test. Direct flights from SYD, MEL, PER. Australia has strict export rules; we handle both sides.</p>
            </Link>

            <Link to="/routes/philippines-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Philippines to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">High-risk route — titer test required. 8–16 week timeline. Cebu Pacific and Emirates offer connections from MNL and CEB.</p>
            </Link>

            <Link to="/routes/canada-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Canada to Dubai</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">Low-risk route — no titer test. Direct flights from YYZ and YVR. Air Canada and Emirates are the preferred carriers.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* WARNING BOX */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="warning-box bg-[#FFF8E7] border-l-4 border-[#D4A017] rounded-r-[20px] p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-[#D4A017] shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Important: Dubai Pet Rules & Restrictions</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Before relocating your pet to Dubai, please be aware of the following critical rules enforced by Dubai Municipality and the UAE Ministry of Climate Change and Environment (MOCCAE):
                </p>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Dangerous breeds banned:</strong> Pit Bulls, Staffordshire Bull Terriers, Rottweilers, Dobermans, and several other fighting/mastiff breeds cannot be imported into Dubai. Verify your breed before starting the process.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Summer travel restrictions:</strong> Brachycephalic (flat-faced) breeds — Pugs, Bulldogs, Boxers, Shih Tzus, Persian cats — face airline cargo restrictions from May to September due to heat sensitivity. Book early morning or late evening flights.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Mandatory registration:</strong> All pets must be registered on the Dubai Municipality Aleef app within 30 days of arrival. Failure to register can result in fines.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>No quarantine if compliant:</strong> There is no quarantine for pets arriving with correct documentation. However, pets with incomplete paperwork may be refused entry or sent back at the owner's expense.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Microchip must be ISO-compliant:</strong> A 15-digit ISO 11784/11785 microchip is required. Non-ISO chips (AVID 9-digit) are not accepted by Dubai customs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai Pet Relocation FAQs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[20px] shadow-sm p-6">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4 text-[#4F5BD5]" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet to Dubai?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has helped hundreds of families move their dogs and cats to Dubai from the UK, USA, India, Australia, the Philippines, and beyond. Get a transparent, itemised quote and a week-by-week timeline today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a Dubai pet relocation quote" message="Hi, I want to relocate my pet to Dubai. Can you help me understand the process, timeline, and cost?" />
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
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for bringing dogs to Dubai</p>
              </a>
              <a href={`${BASE_URL}/cat-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for bringing cats to Dubai</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 border-t border-[#EBEBEB]">
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
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/routes/uk-to-dubai/" className="text-[#4F5BD5] hover:underline">UK to Dubai</Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/routes/usa-to-dubai/" className="text-[#4F5BD5] hover:underline">USA to Dubai</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
