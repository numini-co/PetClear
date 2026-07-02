import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, CheckCircle, Plane, FileText, Shield, Stethoscope } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'

export default function AbuDhabiPillar() {
  const url = `${BASE_URL}/abu-dhabi/`
  const wa = getWhatsAppUrl('Hi Dubai Pet Relocation! I need help relocating my pet to or from Abu Dhabi. Can you guide me on the process and cost?')

  const faqs = [
    {
      question: 'Are the pet import rules different in Abu Dhabi than in Dubai?',
      answer: 'No. Pet import rules in the UAE are set at the federal level by the Ministry of Climate Change and Environment (MOCCAE) and apply nationwide, regardless of which emirate you enter. Whether your pet lands in Abu Dhabi or Dubai, you need the same things: an ISO 11784/11785 microchip, a valid rabies vaccination administered at least 21 days before travel, core vaccinations, an International Health Certificate issued within 10 days of travel, and a MOCCAE import permit (AED 200 per animal, valid 90 days from issuance). Pets from high-risk rabies countries also need a rabies titer test with a 90-day waiting period. The differences between emirates are administrative — the municipality you register with and the airport and ground handler you clear through — not the import requirements themselves.',
    },
    {
      question: 'Do pets arriving in Abu Dhabi have to go into quarantine?',
      answer: 'No. If all documentation is complete and correct, pets arriving anywhere in the UAE — including Abu Dhabi — do not enter quarantine. The same nationwide MOCCAE rules apply: low-risk countries require a valid rabies vaccination and a health certificate, and high-risk countries require an additional rabies titer test. With the microchip, vaccines, import permit and health certificate all in order, your pet is cleared at the cargo terminal, typically within a few hours of landing.',
    },
    {
      question: 'How much does pet relocation to Abu Dhabi cost?',
      answer: 'Costs depend on origin country, pet size, airline and route rather than the emirate itself. The total covers veterinary preparation, the MOCCAE import permit (AED 200 per animal plus a release fee on arrival), the IATA-compliant travel crate, air freight, customs clearance at the airport, municipality registration and ground transport to your home. Because the import requirements are nationwide, the government fees are the same as for Dubai. We provide a detailed, itemised quote for your specific route before you commit anything.',
    },
    {
      question: 'Which airport do pets use when relocating to Abu Dhabi?',
      answer: 'Pets relocating to Abu Dhabi typically arrive at Zayed International Airport (AUH), the emirate\'s main international gateway and the home base of Etihad Airways. The cargo facilities at AUH handle live animals and customs clearance for arriving pets. If your final destination is Dubai or another emirate, we can also coordinate onward ground transport in a climate-controlled vehicle after clearance.',
    },
    {
      question: 'Can you handle a pet move both to and from Abu Dhabi?',
      answer: 'Yes. We coordinate pet relocation in both directions — bringing dogs and cats into Abu Dhabi from abroad, and exporting pets from Abu Dhabi to destinations worldwide. Inbound moves follow the nationwide MOCCAE import process; outbound moves follow the export rules and the destination country\'s import requirements. Either way, we manage the permits, paperwork, crate, flight booking, customs and door-to-door delivery so you have a single point of contact for the whole journey.',
    },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Abu Dhabi', item: url },
    ],
  }
  const localBusiness = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness', name: `${siteConfig.name} — Abu Dhabi`,
    url, areaServed: 'Abu Dhabi, UAE', telephone: '+971551744849',
    description: 'Pet relocation to and from Abu Dhabi — dog and cat transport, MOCCAE permits, customs clearance at AUH and door-to-door delivery.',
    address: { '@type': 'PostalAddress', addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question', name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Abu Dhabi | To & From the UAE Capital',
          description: 'Pet relocation to and from Abu Dhabi — MOCCAE import permits, AUH customs clearance, IATA crates and door-to-door delivery. Same nationwide UAE rules. Free WhatsApp quote.',
          keywords: 'pet relocation abu dhabi, pet transport abu dhabi, dog relocation abu dhabi, cat relocation abu dhabi, abu dhabi pet import',
          canonical: url, ogType: 'website',
        }}
        schemas={[breadcrumbSchema, localBusiness, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Abu Dhabi' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-abu-dhabi.jpg"
        imageAlt="The Abu Dhabi skyline — pet relocation to and from the UAE capital"
        eyebrow="Abu Dhabi"
        title="Pet Relocation Abu Dhabi"
        subtitle="Moving a dog or cat to or from Abu Dhabi? We handle MOCCAE permits, AUH customs, IATA crates and door-to-door delivery — under the same nationwide UAE rules."
        updated="Updated June 2026"
      />

      {/* INTRO */}
      <section className="bg-white section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Pet Relocation in Abu Dhabi</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">Abu Dhabi is the capital of the UAE and home to a large international community of professionals, diplomats and families — many of whom move with a dog or cat. Whether you are arriving from the UK, USA, India, Australia or beyond, or leaving the capital for a new posting overseas, we coordinate the entire move end-to-end: the import or export permit, the veterinary paperwork, the IATA-compliant crate, the flight, customs clearance and door-to-door delivery.</p>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">The most important thing to understand about relocating a pet to or from Abu Dhabi is that the import requirements are not set by the emirate. They are federal. The UAE Ministry of Climate Change and Environment (MOCCAE) sets the rules for the whole country, and those rules apply identically whether your pet enters through Abu Dhabi, Dubai or any other emirate. What changes between emirates is administrative — the municipality you register your pet with locally, and the airport and ground handler your pet clears through on arrival.</p>
          <p className="text-[#5A5A5A] leading-relaxed">If you want the full document list, our <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] underline">UAE pet import requirements guide</Link> walks through every step in order, with timelines and costs.</p>
        </div>
      </section>

      {/* NATIONWIDE RULES */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">UAE Import Rules Are Nationwide (MOCCAE)</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">Pet import rules in the UAE are governed federally by MOCCAE and apply across all seven emirates. There are no separate Abu Dhabi import requirements and no separate Abu Dhabi import fees — the permit, the vaccinations, the health certificate and the titer-test rules are the same nationwide. Here is what every pet needs, regardless of which emirate it enters:</p>
          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 mb-6">
            <ul className="space-y-3 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>ISO microchip</strong> — an ISO 11784/11785 compliant 15-digit microchip, implanted before the rabies vaccination.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>Rabies vaccination</strong> — administered at least 21 days before travel and within 12 months of arrival, using an inactivated or recombinant vaccine.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>Core vaccinations</strong> — DHPPIL for dogs, FVRCP for cats.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>MOCCAE import permit</strong> — AED 200 per animal, valid 90 days from issuance, plus a release fee on arrival (AED 500/dog or AED 250/cat).</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>International Health Certificate</strong> — issued by a government-accredited vet within 10 days of arrival, with antiparasitic treatment recorded.</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> <span><strong>Rabies titer test (high-risk countries only)</strong> — result ≥0.5 IU/ml, drawn at least 21 days after vaccination, followed by a 90-day waiting period.</span></li>
            </ul>
          </div>
          <p className="text-[#5A5A5A] leading-relaxed">The UAE also enforces a federal banned-breed list — including Pit Bull types, several Mastiffs and a number of other breeds — and this list applies in Abu Dhabi exactly as it does everywhere else in the country. If you are unsure whether your dog is eligible, send us the breed and we will confirm the rules before you commit to anything.</p>
        </div>
      </section>

      {/* AUH AIRPORT */}
      <section className="bg-white section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Arriving Through Zayed International Airport (AUH)</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">Pets relocating to Abu Dhabi typically arrive at Zayed International Airport (AUH), the capital's main international gateway and the home base of Etihad Airways. The cargo facilities at AUH are equipped to handle live animals, and customs clearance for arriving pets is processed there. With a complete and correct document set, clearance is straightforward and your pet does not enter quarantine.</p>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">On the day of arrival, the import permit, the original health certificate, the vaccination and microchip records, the titer-test result (if applicable) and the owner's identification are presented for clearance. We coordinate this on your behalf so your pet is released and on its way home as quickly as possible.</p>
          <p className="text-[#5A5A5A] leading-relaxed">If your final destination is Dubai or another emirate rather than Abu Dhabi city itself, we arrange onward ground transport in a climate-controlled vehicle once clearance is complete — so a single team manages the whole journey from the aircraft door to your front door.</p>
        </div>
      </section>

      {/* SERVICE COVERAGE */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">What We Handle for Abu Dhabi Moves</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><FileText className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Permits & Paperwork</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">We prepare and submit the MOCCAE import or export permit and check every certificate so the microchip number matches across all documents — the single most common cause of clearance delays.</p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><Stethoscope className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Veterinary Coordination</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">We map out the vaccination and titer-test timeline so each step happens in the right order, and we make sure the International Health Certificate is issued inside its 10-day window.</p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><Plane className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Flights & Crates</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">We book the right flight for your route, source an IATA Live Animals Regulations-compliant crate sized to your pet, and acclimatise the animal to the crate before travel.</p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Customs Clearance</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">We handle clearance at the AUH cargo terminal and present the documents for inspection so your pet is released without a hitch — no quarantine when the paperwork is correct.</p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><ArrowRight className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Door-to-Door Delivery</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">After clearance we drive your pet home in a climate-controlled vehicle — anywhere in Abu Dhabi, or onward to Dubai and the other emirates if that is your final destination.</p>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center mb-4"><MessageCircle className="w-6 h-6 text-[#4F5BD5]" /></div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">One Point of Contact</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">From your first WhatsApp message to the moment your pet arrives, one team manages every stage — so nothing falls between agents, vets and airlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-white section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-3">Core Services for Abu Dhabi Pet Owners</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-6">Because the import process is nationwide, the same services that bring pets into Dubai apply to Abu Dhabi. Explore the service that matches your move:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/service/pet-import-dubai/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>Pet Import Service</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
            <Link to="/service/pet-export-dubai/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>Pet Export Service</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
            <Link to="/service/pet-relocation-to-dubai/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>Relocation Into the UAE</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>UAE Import Requirements</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
            <Link to="/dubai/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>Dubai Pet Relocation</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
            <Link to="/contact/" className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
              <span>Contact Us</span><ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">Abu Dhabi Pet Relocation FAQs</h2>
          <div className="space-y-4">
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

      {/* FINAL CTA */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-3">Relocating a pet to or from Abu Dhabi?</h2>
          <p className="text-white/90 mb-6">Tell us your route on WhatsApp — we reply within 15 minutes during business hours with a clear, itemised quote.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm"><MessageCircle className="w-5 h-5" /> Get Your Free Quote</a>
        </div>
      </section>
    </div>
  )
}
