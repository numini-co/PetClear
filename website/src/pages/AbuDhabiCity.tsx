import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint, Heart, MapPin, Building, Phone, Dog, Cat, DollarSign, Briefcase, Globe, Scale } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AbuDhabiCity() {
  const pageUrl = `${BASE_URL}/cities/abu-dhabi/`
  const pageTitle = 'Pet Relocation Abu Dhabi | Dubai Pet Relocation'
  const pageDescription = 'Relocate your dog or cat to Abu Dhabi. Etihad in-cabin flights, ADCM registration, MICCO customs clearance. Get a transparent Abu Dhabi pet transport quote.'
  const keywords = 'pet relocation Abu Dhabi, dog transport Abu Dhabi, cat transport Abu Dhabi, pet relocation UAE capital, Etihad pet in cabin, Abu Dhabi pet import, Etihad pet cargo, MICCO Logistics, Abu Dhabi pet registration, bring pet to Abu Dhabi, pet relocation Yas Island, pet relocation Saadiyat, pet relocation Al Reem Island, Abu Dhabi vs Dubai pet relocation'

  const faqs = [
    {
      question: 'Can my pet fly in the cabin to Abu Dhabi?',
      answer: 'Yes — Etihad Airways allows small cats and dogs to travel in the cabin on flights to Abu Dhabi, provided the pet plus carrier weighs under 8kg. This is a major advantage over Dubai, where most airlines require pets to travel as cargo. The carrier must fit under the seat in front of you (dimensions vary by aircraft). Dubai Pet Relocation can book in-cabin pet tickets on Etihad and advise on carrier requirements, weight limits, and booking deadlines. Note: only one in-cabin pet is permitted per passenger, and the route and aircraft type must support live animal cabin transport.'
    },
    {
      question: 'How is Abu Dhabi different from Dubai for pet relocation?',
      answer: 'Abu Dhabi and Dubai have different municipalities, registration systems, and airport procedures. Abu Dhabi uses the Abu Dhabi City Municipality (ADCM) for pet registration, while Dubai uses Dubai Municipality. Abu Dhabi arrivals go through AUH (Zayed International Airport) and use MICCO Logistics for Bill of Entry customs clearance, whereas Dubai uses DXB and dnata/Dubai Cargo Village. Etihad Airways, based in Abu Dhabi, offers in-cabin pet travel — Emirates (based in Dubai) does not. Costs differ slightly: Abu Dhabi municipality registration fees may vary, and transport from AUH to Dubai costs approximately AED 200–400 if your final destination is Dubai.'
    },
    {
      question: 'How much does pet relocation to Abu Dhabi cost?',
      answer: 'Pet relocation to Abu Dhabi costs roughly AED 6,000–22,000 depending on origin, pet size, and whether you use in-cabin or cargo transport. The total includes veterinary prep, documentation, air freight, customs clearance (via MICCO Logistics at AUH), Abu Dhabi Municipality registration (AED 100–250), and ground transport. In-cabin travel on Etihad is significantly cheaper than cargo for small pets (under 8kg). For large dogs, cargo rates are similar to Dubai. Dubai Pet Relocation provides a detailed, itemised Abu Dhabi quote before you commit.'
    },
    {
      question: 'How do I register my pet with Abu Dhabi Municipality?',
      answer: 'Pet registration in Abu Dhabi is managed by the Abu Dhabi City Municipality (ADCM). You must register your pet within 30 days of arrival via the TAMM portal or at an ADCM service centre. Required documents include your Emirates ID or passport, a tenancy contract (proof of residence in Abu Dhabi), your pet\'s vaccination records (rabies certificate), and a microchip certificate. The registration fee is approximately AED 100–250 per pet. Annual renewal is required. Some areas of Abu Dhabi may have additional rules for dogs in public spaces. Dubai Pet Relocation assists with the entire ADCM registration process as part of our arrival service.'
    },
    {
      question: 'Which pet-friendly areas in Abu Dhabi are best for dogs and cats?',
      answer: 'Abu Dhabi has several pet-friendly neighbourhoods: Yas Island features waterfront promenades and open parks ideal for dog walking; Saadiyat Island offers villa communities with private gardens and proximity to the beach; Al Reem Island has high-rise apartments with pet-friendly policies and nearby veterinary clinics. Other popular areas include Al Raha Gardens, Khalifa City, and Al Reef. Many compounds in these areas have dedicated pet areas and are close to the Abu Dhabi Falcon Hospital, one of the world\'s largest and most advanced veterinary facilities.'
    },
    {
      question: 'What is the MICCO Logistics Bill of Entry for Abu Dhabi?',
      answer: 'MICCO Logistics (formerly known as Abu Dhabi Airports Cargo) handles customs clearance and the Bill of Entry for all pets arriving at Zayed International Airport (AUH). The Bill of Entry is a customs declaration that must be filed before your pet can be released. It requires the import permit, health certificate, airway bill, and owner identification. Dubai Pet Relocation works directly with MICCO to pre-file the Bill of Entry, ensuring your pet is cleared within 2–4 hours of landing. This process is different from Dubai, where dnata handles ground services at DXB.'
    },
    {
      question: 'Which airlines fly pets to Abu Dhabi?',
      answer: 'Etihad Airways is the primary carrier for pet transport to Abu Dhabi, offering both in-cabin (small pets under 8kg) and cargo options. Etihad Cargo operates a dedicated live animal programme with climate-controlled holds. Emirates also flies pets to Abu Dhabi via cargo, though most Emirates pet flights arrive at DXB. British Airways, Lufthansa, and Qatar Airways offer cargo services to AUH from Europe and Asia. For departures from Abu Dhabi, Etihad is the most convenient option, with direct flights to London, New York, Paris, Sydney, Mumbai, and Manila.'
    },
    {
      question: 'Is there quarantine for pets arriving in Abu Dhabi?',
      answer: 'No — if all documentation is correct, there is no quarantine for pets arriving in Abu Dhabi (or anywhere in the UAE). The same rules apply as Dubai: low-risk countries require a valid rabies vaccination and health certificate; high-risk countries require an additional rabies titer test (RNATT). As long as the microchip, vaccines, import permit, and health certificate are in order, your pet is cleared within 2–4 hours of arrival at AUH. Dubai Pet Relocation provides meet-and-greet service at Abu Dhabi airport and handles customs formalities with MICCO Logistics.'
    }
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dubai Pet Relocation",
      "description": "Professional pet relocation services to and from Abu Dhabi. Dog and cat transport, Etihad in-cabin booking, documentation, customs clearance, and ADCM registration.",
      "url": pageUrl,
      "telephone": "+971 55 174 4849",
      "email": "hello@dubai-pet-relocation.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abu Dhabi",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.4539",
        "longitude": "54.3773"
      },
      "areaServed": {
        "@type": "City",
        "name": "Abu Dhabi"
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
        { "@type": "ListItem", "position": 3, "name": "Abu Dhabi", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Cities', path: '/cities/' }, { label: 'Abu Dhabi' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-abu-dhabi.jpg"
        imageAlt="Pet relocation services in Abu Dhabi skyline"
        eyebrow="Abu Dhabi"
        title="Pet Relocation Abu Dhabi — Bringing Your Pet to the UAE Capital"
        subtitle="Etihad in-cabin pet travel, the Abu Dhabi Falcon Hospital, and pet-friendly communities — we handle every step of your move."
        updated="Updated June 2026"
      />

      {/* KEY DIFFERENTIATOR */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Key Advantage</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Etihad In-Cabin Pet Travel — Unique to Abu Dhabi</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Etihad Airways, based at Abu Dhabi International Airport (AUH), is one of the few major airlines serving the UAE that allows small pets to travel in the cabin with their owner. This is a major advantage for anxious pet owners and small breeds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">In-Cabin Travel (Pet + You)</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Etihad permits one small cat or dog per passenger in the cabin, provided the combined weight of the pet and carrier is under 8kg. The carrier must fit under the seat in front of you and meet IATA standards for ventilation and security.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Maximum 8kg (pet + soft carrier combined)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Soft-sided carrier required; must fit under seat</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pet must remain in carrier for entire flight</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Only available on Etihad-operated flights (not codeshare)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Advance booking required (limited spots per flight)</li>
              </ul>
              <div className="mt-4 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A]">
                  <span className="text-[#4F5BD5] font-semibold">Best for:</span> Small cats, toy dog breeds (Chihuahua, Pomeranian, Yorkshire Terrier), anxious pets, and owners who prefer to keep their pet close during the journey.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">Cargo Travel (All Pet Sizes)</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                For pets over 8kg or multiple pets, Etihad Cargo and other airlines offer climate-controlled cargo transport to Abu Dhabi. This is the standard method for medium and large dogs, as well as cats travelling without their owner in the cabin.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA-compliant hard crate required</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo hold (16–18°C)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Available for all breeds (subject to restrictions)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Dubai Pet Relocation books cargo space and handles AUH clearance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading for live animals</li>
              </ul>
              <div className="mt-4 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A]">
                  <span className="text-[#4F5BD5] font-semibold">Best for:</span> Medium and large dogs, multiple pets, brachycephalic breeds (cargo restrictions still apply in summer), and owners relocating multiple animals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABU DHABI SPECIFIC */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Abu Dhabi Specifics</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">What Makes Abu Dhabi Different</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Abu Dhabi has its own municipality, airport, customs process, and registration system. Understanding these differences is essential for a smooth relocation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Abu Dhabi City Municipality (ADCM)</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Unlike Dubai, which uses Dubai Municipality, Abu Dhabi has its own municipal authority — the Abu Dhabi City Municipality (ADCM). Pet registration is done through the TAMM government services portal or in person at ADCM centres. Fees and processes differ slightly from Dubai, and some areas may have additional pet ownership rules. Dubai Pet Relocation handles ADCM registration on your behalf.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MICCO Logistics Bill of Entry</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                All pets arriving at Zayed International Airport (AUH) are cleared by MICCO Logistics, Abu Dhabi's ground handling and cargo partner. The Bill of Entry is a customs declaration that must be filed before release. Dubai Pet Relocation works directly with MICCO to pre-file documentation, ensuring your pet is cleared within 2–4 hours. This is different from Dubai's dnata/Dubai Cargo Village process.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Zayed International Airport (AUH)</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Abu Dhabi's airport is modern, efficient, and less congested than DXB for pet cargo. The animal handling facilities at AUH are well-equipped and managed by MICCO. Etihad's home base means direct connections to London, New York, Paris, Sydney, Mumbai, and Manila — all with dedicated live animal services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETIHAD CARGO VS EMIRATES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Airline Comparison</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Etihad Cargo vs Emirates for Pet Relocation</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Choosing the right airline is critical for your pet's comfort and safety. Here is a direct comparison of the UAE's two national carriers for pet transport.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left data-table">
                <thead className="bg-[#F5F5F5]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Feature</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Etihad Airways</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Emirates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBEB]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Home Airport</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Zayed International (AUH) — Abu Dhabi</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Dubai International (DXB) — Dubai</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">In-Cabin Pets</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]"><span className="text-[#4F5BD5] font-semibold">Yes</span> — cats & small dogs under 8kg</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">No — cargo only (Falcon / Falcon + handler exception)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Cargo Programme</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Etihad Cargo Live Animal</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Emirates SkyCargo Live</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Climate Control</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Yes — 16–18°C in cargo hold</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Yes — 16–18°C in cargo hold</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Brachycephalic Restrictions</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">May–September (varies by route)</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">May–September (strict embargo)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Direct Routes to UK</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">AUH → LHR (daily)</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">DXB → LHR (multiple daily)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Direct Routes to USA</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">AUH → JFK, IAD, ORD</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">DXB → JFK, LAX, IAD, ORD, SFO, BOS</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Booking Lead Time</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">2–3 weeks recommended</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">2–4 weeks (peak season 4+ weeks)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Ground Handling at Arrival</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MICCO Logistics (AUH)</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">dnata / Dubai Cargo Village (DXB)</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Best For</td>
                    <td className="px-6 py-4 text-sm text-[#2A2A2A]">Small pets, in-cabin preference, Abu Dhabi residents</td>
                    <td className="px-6 py-4 text-sm text-[#2A2A2A]">Large dogs, more route options, Dubai residents</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Airline policies change seasonally. Dubai Pet Relocation verifies the latest rules before booking. Brachycephalic breed restrictions vary by route and time of year. Contact us for the most current information on your specific route and pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PET-FRIENDLY AREAS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Living in Abu Dhabi</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Pet-Friendly Areas in Abu Dhabi</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Abu Dhabi offers a wide variety of residential options for pet owners, from waterfront villas to modern apartments. Here are the most popular pet-friendly communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Yas Island</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Yas Island is one of Abu Dhabi's most vibrant communities, featuring waterfront promenades, open parks, and pet-friendly cafes. The Yas Marina area is particularly popular with dog owners for its long walking paths. Many apartment buildings and villas on Yas Island accept pets with a refundable deposit. Close to the Abu Dhabi Falcon Hospital for veterinary care.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Saadiyat Island</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Saadiyat Island is Abu Dhabi's luxury cultural district, known for its villa communities with private gardens, quiet streets, and proximity to the beach. Saadiyat Beach Villas and St. Regis Residences are particularly popular with expat families relocating with pets. The area has a relaxed, resort-like atmosphere with plenty of outdoor space for dogs.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Al Reem Island</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Al Reem Island is a modern, high-rise community with many pet-friendly towers. It offers sea views, promenades, and proximity to Reem Central Park. Several veterinary clinics have opened on Al Reem Island in recent years, making it convenient for pet owners. The area is well-connected to the mainland and popular with young professionals and families.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Al Raha Gardens</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Al Raha Gardens is a villa and townhouse community between Abu Dhabi city and Yas Island. It features green spaces, community pools, and a family-friendly environment. The layout is ideal for dog owners who need garden access. Close to Al Raha Mall and the E10 highway for easy commuting to the city or the airport.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Khalifa City</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Khalifa City is a large residential area close to AUH airport, popular with airline staff and airport workers. It offers spacious villas, quiet streets, and lower rents compared to island communities. Several pet shops and veterinary clinics operate in Khalifa City, making it convenient for pet owners who want to be close to the airport.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Abu Dhabi Falcon Hospital</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The Abu Dhabi Falcon Hospital (ADFH) is one of the world's largest and most advanced veterinary facilities. It treats falcons, dogs, cats, and exotic animals. It offers 24-hour emergency care, advanced surgery, international health certificates, and boarding. For pet owners in Abu Dhabi, ADFH is the gold standard for veterinary care and export documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COST DIFFERENCES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Abu Dhabi vs Dubai: Cost Differences</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              While the overall pet relocation process is similar, there are some cost differences between Abu Dhabi and Dubai that pet owners should know about.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left data-table">
                <thead className="bg-[#F5F5F5]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Cost Item</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Abu Dhabi</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Dubai</th>
                    <th className="px-6 py-4 text-sm font-semibold text-[#2A2A2A]">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBEBEB]">
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Municipality Registration</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–250</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–200</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">ADCM vs Dubai Municipality. Slightly higher in Abu Dhabi.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Customs Clearance</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,500</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MICCO (AUH) vs dnata (DXB). Similar pricing.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Airport to City Transport</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–400</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–400</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Depends on area. AUH to Yas Island is closer than DXB to some Dubai areas.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">In-Cabin Pet Ticket (Etihad)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 700–1,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">N/A (cargo only)</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Major Abu Dhabi advantage for small pets.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Cargo Freight (same route)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 4,000–12,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 4,000–12,000</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Similar pricing for cargo. Etihad vs Emirates rates are comparable.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Veterinary Health Check</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–800</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Similar across both cities. Abu Dhabi Falcon Hospital may be premium.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Inter-Emirate Transport (AUH ↔ DXB)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–500</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">If your final destination is the other emirate. Climate-controlled vehicle.</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimate (Single Pet)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 6,000–22,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 6,000–20,000</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Abu Dhabi may be slightly higher due to ADCM fees, but in-cabin savings offset this for small pets.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * All prices are estimates in UAE Dirhams (AED). Actual costs depend on pet size, origin country, airline, and season. In-cabin travel is only available for pets under 8kg (including carrier) on Etihad Airways. Contact Dubai Pet Relocation for a detailed, itemised quote for your specific situation.
              </p>
            </div>
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
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Important: Abu Dhabi Pet Rules & Differences from Dubai</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Before relocating your pet to Abu Dhabi, please be aware of the following critical rules and differences from Dubai:
                </p>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Different municipality:</strong> Abu Dhabi City Municipality (ADCM) handles registration, not Dubai Municipality. You must register through the TAMM portal or in person. The process and fees differ slightly.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>MICCO Logistics clearance:</strong> All pets arriving at AUH are cleared by MICCO Logistics, not dnata. The Bill of Entry process is different and requires advance coordination.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>In-cabin weight limit:</strong> Etihad's in-cabin allowance is strictly 8kg (pet + carrier). Heavier pets must travel as cargo. Only one pet per passenger is permitted in the cabin.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Banned breeds apply:</strong> The same UAE-wide dangerous breed list applies in Abu Dhabi. Pit Bulls, Rottweilers, Dobermans, and several other breeds are prohibited.</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" /> <strong>Same import rules:</strong> Low-risk countries (UK, EU, USA, Australia) require rabies vaccination + health certificate. High-risk countries (India, Philippines, Pakistan) require a rabies titer test (RNATT) with a 90-day waiting period.</li>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Abu Dhabi Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Relocate Your Pet to Abu Dhabi?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has helped families relocate their dogs and cats to Abu Dhabi from the UK, USA, Europe, Australia, India, and beyond. Whether you want in-cabin travel with Etihad or cargo transport, we handle every detail — from permits to ADCM registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get an Abu Dhabi pet relocation quote" message="Hi, I want to relocate my pet to Abu Dhabi. Can you help me understand the process, timeline, and cost?" />
              <a href={`${BASE_URL}/how-it-works/`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How It Works
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <a href={`${BASE_URL}/cities/dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dubai Guide</p>
                <p className="text-sm text-white/70">Compare pet relocation in Dubai vs Abu Dhabi</p>
              </a>
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for bringing dogs to the UAE</p>
              </a>
              <a href={`${BASE_URL}/cat-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for bringing cats to the UAE</p>
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
            <Link to="/cities/dubai/" className="text-[#4F5BD5] hover:underline">Dubai Guide</Link>
            <span className="text-[#EBEBEB]">|</span>
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
