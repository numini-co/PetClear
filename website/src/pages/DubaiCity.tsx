import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig, localBusinessProvider } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Clock, Stethoscope, Home, AlertTriangle, Info, PawPrint, Heart, MapPin, Building, Phone, Dog, Cat, DollarSign, Briefcase, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import RelatedLinks from '../components/RelatedLinks.tsx'
import LinkPlanSlot from '../components/LinkPlanSlot.tsx'
import PaidIncludes from '../components/PaidIncludes.tsx'
import { CTA_ELIGIBILITY_MOVE, waEligibility } from '../lib/conversionCopy.ts'

export default function DubaiCity() {
  const pageUrl = `${BASE_URL}/cities/dubai/`
  const pageTitle = 'Dubai Pet Collection | Documents & Handover'
  const pageDescription = 'Dubai city collection, documents and airport handover for a dog or cat. The overview for pet relocation Dubai is on the homepage.'
  const faqs = [
    {
      question: 'How much does pet relocation to Dubai cost?',
      answer: 'There is no single published fare for a move to Dubai. The quote separates government charges, the clinic, the airline, the crate, and coordination. On 22 September 2026 MOCCAE listed AED 200 for an import permit, AED 500 to release a dog, and AED 250 to release a cat. Those are MOCCAE government fees. Confirm on the MOCCAE portal. Confirm the municipality registration fee on the Aleef or Dubai Municipality channel. Dubai Pet Relocation sends an itemised quote before you agree.'
    },
    {
      question: 'Is there quarantine for pets arriving in Dubai?',
      answer: 'A complete file is examined at the cargo terminal and released. The UAE does not run a routine quarantine for that file. Low-risk origins need the microchip, a valid rabies vaccination, the health certificate, and the MOCCAE import permit. A high-risk origin also needs a result of at least 0.5 IU/ml, with a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. The terminal does not publish a fixed clearance time.'
    },
    {
      question: 'Which pet-friendly areas in Dubai are best for dogs and cats?',
      answer: 'Dubai has many pet-friendly communities: Jumeirah Lakes Towers (JLT) has lakeside walking paths and several pet-friendly cafes; Dubai Hills Estate offers large parks and dedicated dog-walking areas; Arabian Ranches is popular with families for its villa layouts and spacious gardens; Emirates Hills is a luxury gated community with quiet streets ideal for dog walking. Mirdif and The Greens also have strong pet-owner communities and nearby veterinary clinics.'
    },
    {
      question: 'How do I register my pet with Dubai Municipality?',
      answer: 'Register the pet with Dubai Municipality within 30 days of arrival, usually through the Aleef app or the Dubai Smart Services portal. Owners commonly need Emirates ID or a passport, proof of address, vaccination records, and the microchip certificate. Confirm the current fee on that channel. Annual renewal is required. Registration guidance can be part of an arrival booking. It is named on the quote.'
    },
    {
      question: 'What airlines fly pets to Dubai?',
      answer: 'Carriers that publish a live-animal product into Dubai include Emirates, Etihad, British Airways, Qatar Airways, Lufthansa, and KLM. A name on this list is not a booking and not a partnership. Confirm the product for the date, the crate, and the breed. Dubai Pet Relocation coordinates the file. The airline flies the animal.'
    },
    {
      question: 'How long does pet relocation to Dubai take?',
      answer: 'The clocks that are published are these. A first rabies vaccine, or a gap, needs at least 21 days before travel, and at least 21 days before an antibody test. The MOCCAE import permit is valid for 90 days from issuance, and the pet must arrive inside that window. The health certificate is issued close to travel. The permit application page we checked listed 1 working day, or 5 working days for a service, emotional support, or medical dog. A high-risk origin needs a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. There is no single week-count that fits every route.'
    },
    {
      question: 'Are there banned dog breeds in Dubai?',
      answer: 'Yes. The UAE prohibits the import of certain breeds classified as dangerous, including Pit Bull Terriers, Staffordshire Bull Terriers, American Staffordshire Terriers, Rottweilers, Doberman Pinschers, Brazilian Fila, Argentinian Dogo, Japanese Tosa, and Wolfdogs. Brachycephalic (flat-faced) breeds such as Pugs, Bulldogs, Boxers, Shih Tzus, and Persian cats face airline travel restrictions during summer months (May–September) due to heat sensitivity. Dubai Pet Relocation verifies breed eligibility before booking any transport.'
    },
    {
      question: 'What happens when my pet arrives at Dubai Airport (DXB)?',
      answer: 'The crate is offloaded at the DXB cargo terminal, not at passenger baggage claim. A MOCCAE veterinarian checks the microchip against the import permit and the health certificate. A matching file is released. The terminal does not publish a fixed clearance time, and a complete file does not go into routine quarantine. The quote says who meets the crate and whether delivery is to the address.'
    }
  ]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pet relocation to and from Dubai",
      "description": "Pet relocation coordination for Dubai arrivals and departures, including documents, cargo handover and collection.",
      "url": pageUrl,
      "serviceType": "Pet relocation coordination",
      "areaServed": "Dubai, UAE",
      "provider": localBusinessProvider()
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
          canonical: pageUrl,
          ogType: 'website'
        }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Cities', path: '/cities/' }, { label: 'Dubai' }]} />
<div className="mx-auto max-w-[900px] px-5"><LinkPlanSlot path="/cities/dubai/" slot="arrival" />
<LinkPlanSlot path="/cities/dubai/" slot="departure" /></div>

      {/* HERO */}
      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="Pet relocation services in Dubai skyline"
        eyebrow="Dubai"
        title="Dubai pet collection, documents and handover"
        subtitle="This city page covers collection and the airport handover in Dubai. It is not the homepage overview."
        updated="Updated June 2026"
        primaryLabel={CTA_ELIGIBILITY_MOVE}
        whatsappMessage={waEligibility({ destination: 'Dubai', need: 'managed move' })}
        secondary={{ label: 'Compare managed services', to: '/services/' }}
        showBuyerQualify
      />

      <section className="border-b border-[#E6E8F5] bg-white">
        <div className="mx-auto max-w-[760px] px-5 py-8 sm:px-6">
          <p className="text-base leading-relaxed text-[#5A5A5A]">
            The overview for{' '}
            <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation Dubai
            </Link>{' '}
            is the homepage. Stay here for Dubai collection, documents and the handover. If you are not sure which service fits, open the services list before WhatsApp.
          </p>
        </div>
      </section>

      {/* WHY DUBAI */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Why Dubai</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Why Dubai Is a Great City for Pet Owners</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              A move into Dubai is a federal import file plus a building that will actually let the crate through. Villas, towers and community gates do not share the same access. The community pages say what to confirm before collection day.
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
                You book the clinic. Clinics in Dubai include the German Veterinary Clinic in JLT, the British Veterinary Hospital in Umm Suqeim, and Dubai Veterinary Hospital in Deira.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Other clinics in the city include Blue Oasis Veterinary Clinic in Dubai Marina, Canadian Veterinary Hospital in Jumeirah, and Amity Veterinary Clinic in Dubai Hills. Ask the clinic whether it issues the papers your route needs.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Clear Pet Regulations</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                Dubai Municipality oversees pet registration through the Aleef app or the Dubai Smart Services portal. Register within 30 days of arrival. Confirm the current fee on that channel. Owners commonly need Emirates ID, proof of address, and vaccination records. Annual renewal is required.
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
                Importing a pet to Dubai from the UK, USA, Europe, Australia, India, the Philippines, or anywhere in the world. The commercial file — permits, crate, cargo and clearance — is{' '}
                <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  door-to-door pet relocation in Dubai
                </Link>
                . We handle import permits, health certificates, flight booking, customs clearance, and home delivery.
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
              Clinics and cargo handlers are booked for the file in front of us. A name on this page is a place owners ask about. It is not a claim that we own the clinic or that every pet is accepted there.
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
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Confirm on Aleef</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Per pet. Register within 30 days of arrival.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Annual Renewal</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Confirm on Aleef</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Renew each year. Confirm any late charge on the same channel.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Quarantine (if required)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Not routine</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">A matching file is released. A hold is a paperwork problem, billed if it happens.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MOCCAE release fee at DXB</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">On the government invoice</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Separate from coordination. MOCCAE government fee. Dog release was AED 500 and cat release AED 250 on the MOCCAE page checked 22 September 2026. Confirm on the MOCCAE portal.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Veterinary Inspection on Arrival</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">On the government invoice</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">The release charge above is the arrival veterinary fee we could verify. Confirm on the MOCCAE portal.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Ground Transport (DXB to home)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">Quoted for the two addresses</td>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Local transport is priced from the cargo desk to the building.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                MOCCAE government fees: Confirm on the MOCCAE portal. Coordination, the van, and the airline are separate lines on the quote.
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

      <RelatedLinks
        heading="Related relocation pages"
        intro="Emirate overview, then the door-to-door service, checklist and community directory."
        path="/cities/dubai/"
      />

      <OfficialSources />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4 text-[#4F5BD5]" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to book a Dubai collection?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              Check if we can move your pet. Send the pet, the origin and the month. We reply with eligibility and a managed-move quote.
            </p>
            <PaidIncludes tone="dark" compact className="mx-auto mb-8 max-w-2xl text-left" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services/" className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors sm:w-auto">
                Compare managed services
              </Link>
              <WhatsAppBtn className="w-full justify-center sm:w-auto" label="Get a managed-move quote" message={waEligibility({ destination: 'Dubai', need: 'managed move' })} />
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
