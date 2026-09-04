import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import Hero from '../components/Hero.tsx'
import { BASE_URL } from '../lib/seo.ts'
import { MessageCircle, CheckCircle, Plane, FileText, Shield, Stethoscope, Home, AlertTriangle, Info, PawPrint, Heart, Dog, Cat, Calendar, Ban } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'

export default function DubaiToUK() {
  const pageUrl = `${BASE_URL}/routes/dubai-to-uk/`
  const pageTitle = 'Dubai to UK Pet Relocation | Export Guide 2026'
  const pageDescription = 'Export your dog or cat from Dubai to the UK. Guide to DEFRA/APHA rules, post-Brexit health certificates, tapeworm treatment, airlines, costs and timeline.'
  const keywords = 'Dubai to UK pet relocation, export pet Dubai to UK, pet transport Dubai to London, DEFRA pet import UK, APHA health certificate, UK pet passport post-Brexit, tapeworm treatment UK dogs, Emirates pet cargo UK, British Airways pet transport Dubai, pet relocation to Britain, Dubai to UK dog transport, Dubai to UK cat transport, UK rabies high risk, UK pet quarantine rules'

  const faqs = [
    {
      question: 'What are the UK import rules for pets coming from Dubai?',
      answer: 'The UK classifies the UAE as a high-risk country for rabies. This means pets travelling from Dubai to the UK must meet strict requirements: an ISO-compliant microchip (implanted before rabies vaccination), a valid rabies vaccination (inactivated vaccine, 21+ days before travel), a UK health certificate issued by a UAE government-approved veterinarian or an authorised UAE official veterinarian within 10 days of travel, and for dogs only — a tapeworm treatment administered 1–5 days before entry and recorded on the health certificate. No titer test (RNATT) is required from the UAE because the UAE is on the UK\'s rabies-controlled list, but the health certificate must be endorsed by the UAE Ministry of Climate Change and Environment (MOCCAE).'
    },
    {
      question: 'Is the UK pet passport still valid after Brexit?',
      answer: 'No. Since Brexit (1 January 2021), EU pet passports issued in Great Britain are no longer valid for travel. UK-issued pet passports are no longer accepted for entry into the EU or for re-entry into the UK from outside the UK. For pets travelling from Dubai to the UK, you must use an official UK health certificate (also called an APHA/DEFRA health certificate for non-EU travel). This certificate is issued by an authorised UAE veterinarian, endorsed by MOCCAE, and is valid for 10 days from the date of issue. It must accompany your pet on arrival in the UK.'
    },
    {
      question: 'What is the tapeworm treatment requirement for dogs entering the UK?',
      answer: 'Dogs travelling to the UK from Dubai must receive a tapeworm treatment (praziquantel or an equivalent product approved for tapeworm) between 1 and 5 days before entering the UK. The treatment must be administered by a veterinarian, and the details — including date, time, product name, and manufacturer — must be recorded on the official health certificate. This rule does not apply to cats. Failure to have a valid tapeworm treatment recorded on the health certificate can result in your dog being refused entry or placed into quarantine at the owner\'s expense. Dubai Pet Relocation schedules the tapeworm treatment with a UAE vet as part of our pre-departure checklist.'
    },
    {
      question: 'Which airlines fly pets from Dubai to the UK?',
      answer: 'The three main carriers for pet cargo from Dubai to the UK are Emirates (EK), British Airways (BA), and Virgin Atlantic. All three operate direct flights from Dubai International (DXB) to London Heathrow (LHR). Emirates SkyCargo is the most commonly used, with daily A380 and B777 services. British Airways offers direct cargo flights via BA World Cargo. Virgin Atlantic flies pets to London Heathrow as part of their cargo programme. No major airline allows pets in the cabin on the Dubai–UK route — all pets must travel as cargo in the hold. Dubai Pet Relocation books cargo space, arranges IATA-compliant crates, and coordinates with airline animal handling teams.'
    },
    {
      question: 'How long does it take to relocate a pet from Dubai to the UK?',
      answer: 'The minimum timeline is 2–4 weeks for documentation plus 1–2 days for travel. Week 1: microchip verification and rabies vaccination check (if already done, this step is instant). Week 2–3: apply for UK health certificate via an authorised UAE vet, schedule pre-travel health examination, and book cargo space with the airline. Week 4: tapeworm treatment for dogs (1–5 days before travel), final health certificate endorsement by MOCCAE, and travel day. If your pet\'s rabies vaccination is not current or the microchip is not ISO-compliant, add 21 days for the rabies vaccination to become valid. Dubai Pet Relocation handles all steps in parallel to minimise delays.'
    },
    {
      question: 'How much does it cost to relocate a pet from Dubai to the UK?',
      answer: 'For a single pet, total costs typically range from AED 8,000 to AED 18,000 (GBP 1,700–3,800). This includes: veterinary verification (microchip check + health exam ~AED 300–800), UK health certificate (AED 500–1,200), tapeworm treatment for dogs (AED 100–300), MOCCAE endorsement (AED 200–500), IATA-approved travel crate (AED 300–1,500), air cargo freight DXB → LHR (AED 4,000–10,000 depending on crate size and weight), UK customs clearance (AED 1,000–2,000), and optional Dubai Pet Relocation door-to-door service (AED 1,500–3,000). Multiple pets may qualify for discounted rates on combined services. Brachycephalic breeds may incur additional airline fees or restrictions.'
    },
    {
      question: 'Is there quarantine for pets arriving in the UK from Dubai?',
      answer: 'No — there is no quarantine for pets entering the UK from Dubai if all documentation is correct. The UK abolished the old six-month quarantine system in 2012 and now operates a document-based entry system. As long as your pet has the correct microchip, rabies vaccination, health certificate (endorsed by MOCCAE), and (for dogs) tapeworm treatment, your pet will be cleared at the UK border within 1–2 hours. If any document is missing, incorrect, or expired, your pet may be refused entry, held at the airport for re-examination, or placed in quarantine at the owner\'s expense. Dubai Pet Relocation triple-checks every document before travel to prevent this.'
    },
    {
      question: 'How does Brexit affect pet travel from Dubai to the UK?',
      answer: 'Brexit has made the process stricter but not fundamentally different. Key changes: (1) UK-issued pet passports are no longer valid for travel from outside the UK. (2) The UK now operates a category-based system for rabies risk. The UAE is on the UK\'s rabies-controlled list, meaning a titer test is not required, but a health certificate is mandatory. (3) The EU pet passport is no longer accepted for UK entry from Dubai. (4) Health certificates must be issued by an authorised veterinarian and endorsed by the government veterinary authority (MOCCAE in the UAE). (5) The UK now has "Category 2" status for some EU purposes, but this does not affect pets arriving from Dubai. Dubai Pet Relocation stays current on all post-Brexit rules and ensures your paperwork meets the latest DEFRA/APHA requirements.'
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
        { "@type": "ListItem", "position": 3, "name": "Dubai to UK", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'Dubai to UK' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-dubai-to-uk-dog-flag-hero.jpg"
        imageAlt="Pet relocation from Dubai to UK"
        fallbackSrc="/images/hero-dubai-to-uk.jpg"
        eyebrow="Dubai → United Kingdom"
        title="Dubai to UK Pet Relocation — Exporting Your Pet to Britain"
        subtitle="No titer test, no quarantine when paperwork is right. We handle DEFRA/APHA health certificates, MOCCAE endorsement, and UK customs."
        updated="Updated June 2026"
      />

      {/* UK IMPORT RULES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">UK Rules</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">UK Import Requirements for Pets from Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The UK is classified as a rabies-free country and enforces strict but well-documented import rules. The UAE is on the UK's rabies-controlled list, which simplifies the process compared to high-risk countries. Here is what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Microchip</p>
              <p className="text-[#5A5A5A] text-sm">ISO 11784/11785</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Must be implanted before rabies vaccination. Pre-2016 standard chips may not be accepted by UK scanners.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Rabies Vaccine</p>
              <p className="text-[#5A5A5A] text-sm">Inactivated vaccine</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Must be valid at time of travel. 21-day wait applies after first vaccination. No titer test required from UAE.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Health Certificate</p>
              <p className="text-[#5A5A5A] text-sm">10-day validity</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Issued by UAE government-approved vet, endorsed by MOCCAE. Valid for 10 days from issue. Required post-Brexit.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Dog className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Tapeworm</p>
              <p className="text-[#5A5A5A] text-sm">Dogs only</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Treatment 1–5 days before UK entry. Must be recorded on health certificate by a vet. Not required for cats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEFRA/APHA REQUIREMENTS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Documentation</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">DEFRA / APHA Requirements Explained</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The UK's Animal and Plant Health Agency (APHA), formerly DEFRA, sets the rules for pet entry into Great Britain (England, Scotland, Wales). Northern Ireland follows slightly different rules post-Brexit. For pets travelling from Dubai, here is the exact process.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. ISO-Compliant Microchip</p>
                    <p className="text-[#5A5A5A] text-sm">A 15-digit ISO 11784/11785 microchip must be implanted before the rabies vaccination is given. If your pet was chipped after the first rabies vaccine, the vaccination must be repeated after chipping. The UK uses scanners that read ISO chips; older AVID 9-digit chips are not guaranteed to scan at UK border control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies Vaccination (Inactivated)</p>
                    <p className="text-[#5A5A5A] text-sm">An inactivated rabies vaccine must be administered by a licensed veterinarian and recorded on the pet's vaccination certificate. The vaccine must be valid at the time of travel. If it is your pet's first rabies vaccination, you must wait 21 days before the pet can travel. Booster vaccinations given before the previous one expires do not require a 21-day wait.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. UK Health Certificate (Post-Brexit)</p>
                    <p className="text-[#5A5A5A] text-sm">Since Brexit, the EU pet passport is no longer valid for UK entry from Dubai. You must obtain an official UK health certificate (Model A or B for non-EU travel) from an authorised UAE veterinarian. This certificate must be endorsed by the UAE government veterinary authority (MOCCAE). It is valid for 10 days from the date of issue and must be presented at UK border control.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. No Titer Test Required from UAE</p>
                    <p className="text-[#5A5A5A] text-sm">The UAE is on the UK's rabies-controlled list, which means a rabies neutralising antibody titre test (RNATT / titer test) is NOT required. This saves approximately 4–8 weeks and AED 1,500+ in lab fees compared to countries on the high-risk list. However, the rabies vaccination must still be valid and properly documented.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Tapeworm Treatment (Dogs Only)</p>
                    <p className="text-[#5A5A5A] text-sm">Dogs must receive a tapeworm treatment (praziquantel or equivalent) administered by a veterinarian between 1 and 5 days before entering the UK. The treatment must be recorded on the health certificate with the exact date, time, product name, and manufacturer. This rule is designed to prevent the spread of Echinococcus multilocularis, a tapeworm not found in the UK. Cats are exempt from this requirement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for UK-Bound Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Post-Brexit, the UK no longer accepts EU pet passports issued in Great Britain. You must use an official UK health certificate endorsed by MOCCAE.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>The health certificate is valid for 10 days from the date of issue. If your flight is delayed beyond this window, a new certificate must be issued and re-endorsed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>All pets must enter the UK via an approved route — typically Heathrow (LHR), Gatwick (LGW), or Manchester (MAN). The airline must be approved for pet transport by APHA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Brachycephalic breeds (Pugs, Bulldogs, Boxers, Persian cats) face summer travel restrictions on most airlines (May–September). Book early morning or late evening flights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Pets must travel as cargo on all UK-bound flights from Dubai. No in-cabin travel is permitted for this route. Dubai Pet Relocation books IATA-compliant crates and cargo space.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Northern Ireland has separate rules post-Brexit. If your destination is Belfast or Derry, additional documentation may be required. Dubai Pet Relocation can advise.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  <span className="text-[#4F5BD5]">Pro tip:</span> Book your health certificate appointment 7–10 days before travel. This gives time for MOCCAE endorsement (1–2 business days) and ensures the certificate is still within its 10-day validity window on arrival day.
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Airlines Flying Pets from Dubai to the UK</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              All pets must travel as cargo on the Dubai–UK route. Here are the three major carriers Dubai Pet Relocation books with, plus key details about their live animal programmes.
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
                  <p className="text-sm text-[#5A5A5A]">Emirates SkyCargo Live</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Multiple daily direct flights DXB → LHR</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> A380 and B777 cargo holds available</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Dedicated live animal services team</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Priority offloading at LHR</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Largest cargo capacity for large breeds</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Emirates is the most commonly used carrier for Dubai–UK pet transport due to frequency and capacity. Their SkyCargo Live programme handles thousands of animals annually.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">British Airways (BA)</h3>
                  <p className="text-sm text-[#5A5A5A]">BA World Cargo — Live Animal</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct flights DXB → LHR (daily)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Well-established live animal programme</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo hold</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Experienced animal care staff at LHR</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Good for UK-bound expats returning home</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">British Airways is a popular choice for UK nationals returning home with pets. Their cargo network is reliable and well-integrated with UK customs processes.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E31937]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#E31937]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Virgin Atlantic</h3>
                  <p className="text-sm text-[#5A5A5A]">Virgin Atlantic Cargo</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Direct flights DXB → LHR (several weekly)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pet-friendly airline culture</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Climate-controlled cargo services</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Competitive rates for medium-sized pets</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Good customer service for pet owners</li>
              </ul>
              <p className="mt-4 text-xs text-[#5A5A5A]">Virgin Atlantic is a strong alternative to Emirates and BA, particularly for medium-sized dogs and cats. Their cargo team is responsive and experienced with international pet relocations.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <Ban className="w-5 h-5 text-[#D4A017]" />
              No In-Cabin Travel to the UK
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              The UK does not permit pets to travel in the cabin on flights arriving from outside the UK. All pets must travel as cargo or, in some limited cases, as checked baggage (though most airlines from Dubai require cargo for live animals). This rule applies regardless of the airline, pet size, or owner's preference. The UK government requires all animals to enter through an approved Border Inspection Post (BIP) where documents are checked and the pet is scanned for its microchip. Heathrow, Gatwick, and Manchester are the main BIPs for pet arrivals.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Dubai Pet Relocation books all pets as cargo on approved routes, ensures the IATA crate meets airline and UK standards, and coordinates with the UK border inspection team to ensure fast clearance on arrival.
            </p>
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Pricing</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to UK Cost Breakdown</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Transparent pricing for relocating a single pet from Dubai to the UK. Costs vary by pet size, crate dimensions, and airline choice. Contact Dubai Pet Relocation for a precise quote.
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
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UK Health Certificate (APHA/DEFRA)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">MOCCAE Endorsement</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 200–500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Tapeworm Treatment (Dogs Only)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–250</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 100–300</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 150–350</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Air Cargo (DXB → LHR, one way)</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 4,000–6,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 6,000–9,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 9,000–14,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">IATA-Approved Travel Crate</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 300–600</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 500–1,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 900–1,800</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">UK Customs & Border Clearance</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,000–1,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,200–2,000</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,500–2,500</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-[#5A5A5A]">Optional: Dubai Pet Relocation Door-to-Door</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,500–2,500</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 1,800–2,800</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#2A2A2A]">AED 2,000–3,500</td>
                  </tr>
                  <tr className="bg-[#4F5BD5]/5">
                    <td className="px-6 py-4 text-sm font-bold text-[#2A2A2A]">Total Estimated Cost</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 8,000–12,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 10,000–16,000</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#4F5BD5]">AED 14,000–22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#F5F6FD] border-t border-[#EBEBEB]">
              <p className="text-xs text-[#5A5A5A]">
                * Prices are estimates in AED and may vary by airline, season, and pet dimensions. Air cargo rates fluctuate and are typically higher in peak travel months (July–August, December). GBP conversion is approximate at 1 GBP = 4.6 AED. Contact Dubai Pet Relocation for a fixed quote based on your pet's exact weight, breed, and crate size. Multiple pets may qualify for a 10–15% discount on combined services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to UK Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              A typical export from Dubai to the UK takes 2–4 weeks for documentation plus 1–2 days for travel. Here is the exact week-by-week process Dubai Pet Relocation manages for you.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Document Review & Microchip Check',
                  desc: 'Dubai Pet Relocation reviews your pet\'s existing microchip, vaccination records, and passport. If the rabies vaccine is not current or the microchip is not ISO-compliant, we arrange a veterinary visit immediately. If everything is in order, we proceed to the health certificate application.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2',
                  title: 'Health Certificate & MOCCAE Endorsement',
                  desc: 'An authorised UAE veterinarian conducts a pre-travel health examination and issues the official UK health certificate (APHA/DEFRA format). Dubai Pet Relocation submits the certificate to MOCCAE for endorsement. This process typically takes 1–2 business days. We also book cargo space with the airline.',
                  icon: FileText
                },
                {
                  week: 'Week 3',
                  title: 'Tapeworm Treatment (Dogs) & Final Prep',
                  desc: 'For dogs, a veterinarian administers the mandatory tapeworm treatment between 1 and 5 days before travel. The treatment details are recorded on the health certificate. Dubai Pet Relocation delivers the IATA-compliant travel crate so your pet can acclimatise. We confirm all documents with the airline and UK border team.',
                  icon: Shield
                },
                {
                  week: 'Travel Day',
                  title: 'Departure from Dubai & Arrival in the UK',
                  desc: 'Your pet is checked in at the Emirates, BA, or Virgin Atlantic cargo terminal at DXB. After a 7–8 hour flight, Dubai Pet Relocation\'s UK partner meets your pet at Heathrow, Gatwick, or Manchester. They handle border inspection, microchip verification, document checks, and deliver your pet to your door.',
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

      {/* BREXIT IMPACT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Post-Brexit</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">How Brexit Affects Pet Travel from Dubai to the UK</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Since 1 January 2021, the UK has left the EU single market. This has changed the rules for pet travel. Here is what Dubai-based pet owners need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#C8102E]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">EU Pet Passport No Longer Valid</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                UK-issued EU pet passports are no longer valid for travel from Dubai to the UK. If your pet previously travelled on an EU passport issued in the UK, you must now obtain an official UK health certificate from an authorised UAE vet, endorsed by MOCCAE. This is the single biggest change for British expats returning home with pets.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                The health certificate replaces the old passport system and is valid for 10 days from issue. It must include the microchip number, rabies vaccination details, and (for dogs) tapeworm treatment information. Dubai Pet Relocation ensures the certificate is completed correctly and endorsed on time.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">UK Category 2 Status</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                The UK now has "Category 2" status for some EU pet travel purposes. For pets arriving from Dubai, the key point is that the UAE is on the UK's rabies-controlled list. This means no titer test is required, but a health certificate and valid rabies vaccination are mandatory. The UK does not accept the EU pet passport for entry from non-EU countries.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Northern Ireland continues to follow EU rules post-Brexit under the Windsor Framework. If your destination is Northern Ireland, additional rules may apply. Dubai Pet Relocation can advise on the specific requirements for Belfast, Derry, or other Northern Ireland destinations.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Ban className="w-6 h-6 text-[#D71A21]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">No Change to Quarantine Rules</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                The good news: Brexit has not changed the UK's quarantine rules. There is still no quarantine for pets entering the UK from Dubai if all documents are correct. The document-based entry system introduced in 2012 remains in place. The only change is the type of document: a health certificate instead of an EU pet passport.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                Pets must still enter the UK via an approved route (Heathrow, Gatwick, Manchester, etc.) and travel with an approved airline. The banned breed list and brachycephalic restrictions also remain unchanged.
              </p>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F5BD5]/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A]">What Dubai Pet Relocation Does Differently Post-Brexit</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Dubai Pet Relocation stays current on all post-Brexit rule changes. We verify the latest APHA/DEFRA health certificate templates before every booking, ensure MOCCAE endorsement is obtained within the correct timeframe, and confirm that the UK Border Inspection Post at your arrival airport is notified in advance.
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                We also monitor any changes to the UK's rabies risk category list. If the UAE's status changes, we notify all affected clients immediately and adjust the documentation process accordingly. Our post-Brexit track record is 100% successful entry with zero quarantine cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW DUBAI PET RELOCATION HANDLES */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Our Process</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">How Dubai Pet Relocation Handles Dubai to UK Relocations</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Dubai Pet Relocation manages every step of your pet's journey from Dubai to the UK. Here is exactly what we do, from the first WhatsApp message to delivery at your UK door.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">1. Document Preparation</p>
              <p className="text-[#5A5A5A] text-sm">We review your pet's existing microchip, vaccination records, and passport. We identify any gaps and arrange veterinary appointments to bring everything up to UK standard.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">2. Vet Coordination</p>
              <p className="text-[#5A5A5A] text-sm">We book your pre-travel health examination with a UAE government-approved vet, schedule the tapeworm treatment for dogs, and ensure the health certificate is completed correctly.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">3. DEFRA Health Certificate</p>
              <p className="text-[#5A5A5A] text-sm">We obtain the official APHA/DEFRA health certificate, submit it to MOCCAE for endorsement, and verify all details before travel. We also notify the UK Border Inspection Post in advance.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">4. Flight Booking</p>
              <p className="text-[#5A5A5A] text-sm">We book cargo space with Emirates, BA, or Virgin Atlantic, source the correct IATA-compliant crate, and coordinate with the airline's animal handling team for priority boarding and offloading.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center md:col-span-2 lg:col-span-2">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">5. UK Customs Clearance & Delivery</p>
              <p className="text-[#5A5A5A] text-sm">Our UK partner meets your pet at Heathrow, Gatwick, or Manchester. They handle border inspection, microchip verification, document checks, and deliver your pet directly to your home or a local boarding facility. We keep you updated by WhatsApp at every step.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center md:col-span-2 lg:col-span-2">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">6. Post-Arrival Support</p>
              <p className="text-[#5A5A5A] text-sm">After arrival, we provide guidance on registering your pet with a UK vet, updating microchip details to a UK database, and obtaining a UK pet passport (if you plan to travel within the EU in the future). Our support does not end when the flight lands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Dubai to UK Pet Relocation FAQs</h2>
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Ready to Export Your Pet from Dubai to the UK?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Dubai Pet Relocation has relocated hundreds of pets from Dubai to London, Manchester, Edinburgh, and beyond. We handle the DEFRA paperwork, MOCCAE endorsement, airline booking, and UK customs so you can focus on your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Get a Dubai to UK quote" message="Hi, I want to relocate my pet from Dubai to the UK. Can you help me understand the DEFRA requirements, timeline, and cost?" />
              <a href={`${BASE_URL}/how-it-works/`} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How It Works
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <a href={`${BASE_URL}/dog-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for dogs travelling to the UK</p>
              </a>
              <a href={`${BASE_URL}/cat-relocation-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat Relocation</p>
                <p className="text-sm text-white/70">Specific guidance for cats travelling to the UK</p>
              </a>
              <a href={`${BASE_URL}/routes/uk-to-dubai/`} className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">UK to Dubai</p>
                <p className="text-sm text-white/70">The reverse route: bringing a pet from the UK to Dubai</p>
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
              <p className="text-[#5A5A5A] text-sm">Our full export service: health certificates, MOCCAE endorsement and cargo.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route — bringing a pet from the UK to Dubai.</p>
            </Link>
            <Link to="/routes/dubai-to-usa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to USA</p>
              <p className="text-[#5A5A5A] text-sm">Exporting your pet from Dubai to America.</p>
            </Link>
            <Link to="/routes/usa-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">USA to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for American pet relocations.</p>
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
            <Link to="/routes/uk-to-dubai/" className="text-[#4F5BD5] hover:underline">UK to Dubai</Link>
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
