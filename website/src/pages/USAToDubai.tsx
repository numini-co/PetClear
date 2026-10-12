import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
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

export default function USAToDubai() {
  const pageUrl = `${BASE_URL}/routes/usa-to-dubai/`
  const pageTitle = 'Pet Relocation USA to Dubai: USDA Certificate, Timeline and Quote'
  const pageDescription = 'Bringing a dog or cat from the USA to Dubai? Health certificate steps, MOCCAE permit valid 90 days, airline cargo options and timeline. Get your route checked.'
  const faqs = [
    {
      question: 'Can I bring a dog to Dubai from the USA?',
      answer: 'Yes. US-origin dogs and cats can enter the UAE with an ISO microchip, a valid rabies vaccination, a MOCCAE import permit issued no more than 90 days before arrival, and a health certificate from an accredited vet that has been government endorsed. Confirm the endorsement path with your official vet authority. Pets land as manifest cargo. Some breeds are restricted, so read the import requirements before booking anything. Rules: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
    },
    {
      question: 'Is the USA low-risk for pet import to Dubai?',
      answer: 'Confirm on the official MOCCAE portal before you skip a titre. This page does not publish an exempt-country list. If a titre is required, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window.'
    },
    {
      question: 'Which airlines fly pets from the USA to Dubai?',
      answer: 'Emirates carries pets to Dubai as cargo through SkyCargo, and does not take pets in the cabin on itineraries ending in Dubai. Etihad and other carriers may route through their hubs, often with seasonal heat limits from southern US airports. United and other US carriers via a connection are confirm current policy. Policies change, so confirm current rules with the airline. We compare live options once your pet\'s size and month are known.'
    },
    {
      question: 'How long does it take to move a pet from the USA to Dubai?',
      answer: 'Allow about 4 to 8 weeks for a typical healthy adult pet with current vaccinations. The main steps are the MOCCAE permit, the accredited vet exam, government endorsement and a cargo booking that fits heat rules. Puppies, new vaccinations or restricted breeds take longer. An East Coast direct routing is not the same clock as a West Coast summer connection. The import guide shows which timeline applies.'
    },
    {
      question: 'How much does it cost to relocate a pet from the USA to Dubai?',
      answer: 'This page does not publish a package total. Government permit and release charges are confirmed on the official portal. Cargo, crate and coordination are quoted for your animal after the eligibility check. WhatsApp +971504782999.'
    },
    {
      question: 'What documents are required for a US pet to enter Dubai?',
      answer: 'A permanent microchip whose number matches the health certificate, rabies and the other dog or cat vaccines, a rabies antibody result of at least 0.5 IU/ml under the 365-day conditions, an authorised health certificate, parasite treatment in the 14 days before shipment, and a MOCCAE import permit valid 90 days from issuance. The live MOCCAE page does not name a US form number or a universal 10-day certificate. ISO 11784/11785 was not restated as a current UAE rule.'
    },
    {
      question: 'Does the USDA need to endorse my pet\'s health certificate for Dubai?',
      answer: 'Plan on a government-endorsed origin certificate. In the United States that endorsement comes through the federal animal health authority after your accredited vet signs. Your official vet authority will confirm the path, including any digital system. Book the vet visit so endorsement lands close to the flight while the MOCCAE permit is still inside its 90-day window. We check timing as part of route coordination. We do not name a form number on this page.'
    },
    {
      question: 'Are there breed restrictions for dogs travelling from the USA to Dubai?',
      answer: 'Yes. The names are the ban list on the MOCCAE import page, including Staffordshire Bull Terrier, American Pit Bull Terrier, American Staffordshire Terrier, American Bully, Japanese Tosa and Presa Canario. Rottweiler, Doberman and Boxer were not on the list checked on 22 September 2026. Flat-faced animals can still be refused by an airline. Breed list: [/guides/banned-dog-breeds-dubai/](/guides/banned-dog-breeds-dubai/).'
    },
    {
      question: 'What happens when my pet arrives in Dubai from the USA?',
      answer: 'A matching animal is examined at the entry port and released. The MOCCAE page does not give a clearance time and does not describe a routine quarantine. If the file does not match, the pet may be rejected at your expense or confiscated. No fine amount is published. We do not promise a same-day delivery time.'
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
        { "@type": "ListItem", "position": 3, "name": "USA to Dubai", "item": pageUrl }
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
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'USA to Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/assets/route-heroes/route-usa-to-dubai-dog-flag-hero.jpg"
        imageAlt="Pet relocation from USA to Dubai"
        fallbackSrc="/images/hero-usa.jpg"
        eyebrow="United States → Dubai"
        title="Pet relocation from the USA to Dubai"
        subtitle="Confirm the titre rule on the official MOCCAE portal. The import permit is valid 90 days from issuance. Pets on itineraries ending in Dubai travel as cargo."
        updated="Last verified: 22 September 2026"
      />

      {/* ROUTE OVERVIEW */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Route Overview</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">Flying Your Pet from the USA to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              The USA offers multiple direct and connecting routes to Dubai. With major hubs on both coasts, you have flexibility in choosing departure cities and airlines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Airline</p>
              <p className="text-[#5A5A5A] text-sm">Cargo into Dubai</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Emirates: not cabin. No flight-time claim.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Permit</p>
              <p className="text-[#5A5A5A] text-sm">90 days from issuance</p>
              <p className="text-[#5A5A5A] text-xs mt-2">Estimate: 1 working day, or 5 for a service dog</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Origin</p>
              <p className="text-[#5A5A5A] text-sm">Not on the low-risk list</p>
              <p className="text-[#4F5BD5] text-xs mt-2 font-medium">Antibody test, checked 22 September 2026</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-14 h-14 bg-[#4F5BD5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-[#4F5BD5]" />
              </div>
              <p className="font-bold text-[#2A2A2A] text-lg mb-1">Health certificate</p>
              <p className="text-[#5A5A5A] text-sm">Origin authority</p>
              <p className="text-[#5A5A5A] text-xs mt-2">MOCCAE does not name a 10-day US form</p>
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
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">Documents Required for USA to Dubai</h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                A US origin was not on the low-risk list checked on 22 September 2026, so the file includes an antibody test as well as the 90-day permit. The Ministry page does not name a USDA form.
              </p>
              <RouteMoneyBodyLink path="/routes/usa-to-dubai/" />

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">1. Permanent microchip</p>
                    <p className="text-[#5A5A5A] text-sm">The number on the health certificate must match the animal. ISO 11784/11785 was not restated on the live MOCCAE page, so it is not stated as a current UAE rule.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">2. Rabies and the other vaccines</p>
                    <p className="text-[#5A5A5A] text-sm">Rabies not before 12 weeks of age. Dogs also need distemper, parvovirus, infectious canine hepatitis and leptospirosis. A first or lapsed vaccine needs at least 21 days before the antibody test. A valid booster does not.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">3. UAE Import Permit</p>
                    <p className="text-[#5A5A5A] text-sm">Valid 90 days from issuance. Apply before travel. Government fees checked 22 September 2026: AED 200 permit, AED 500 dog release, AED 250 cat release. We do not issue the permit.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">4. Authorised health certificate and the antibody test</p>
                    <p className="text-[#5A5A5A] text-sm">The MOCCAE page asks for an authorised certificate and, for a high-risk origin, an antibody result of at least 0.5 IU/ml. It does not name Form 7001 or a 10-day life. Confirm any US endorsement with USDA. The certificate is valid 365 days if the vaccine stays valid and no booster is given.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] mb-1">5. Owner Identification</p>
                    <p className="text-[#5A5A5A] text-sm">Copy of pet owner's passport and UAE residence visa (if applicable). For new arrivals, a hotel booking or tenancy contract may be requested by Dubai customs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Important Notes for US Pets</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Confirm with USDA whether your origin office must endorse the health certificate. The MOCCAE page does not state that step or a day count for it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>This page does not add a separate Hawaii or Guam export rule. Confirm any origin-state step with the clinic and USDA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>MOCCAE vaccination is not before 12 weeks. High-risk import age is not less than 15 weeks. Carrier age limits are separate. Confirm them with the airline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>IAG Cargo says some snub-nosed cats and dogs may not be accepted. This page does not copy a month-by-month embargo. Confirm the carrier.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Ask the airline for the cargo product from your airport. This page does not publish a shorter-coast claim or a freight saving.</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#4F5BD5]/10 rounded-xl">
                <p className="text-sm text-[#2A2A2A] font-medium">
                  Confirm the carrier in writing. This page does not state staffing hours, a preferred US hub, or a hold temperature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RouteCostTeaser
        corridor="USA to Dubai"
        whatsappMessage="Hi Dubai Pet Relocation! I need a quote for relocating my pet from the USA to Dubai."
      />

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Step-by-Step</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USA to Dubai Timeline</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              There is no single week count. The permit lasts 90 days from issuance. A first or lapsed vaccine needs at least 21 days before the antibody test.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#EBEBEB] lg:left-1/2 lg:-ml-0.5" />
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  week: 'Week 1',
                  title: 'Microchip & Rabies Vaccination',
                  desc: 'Fit a permanent microchip and give the vaccines named for that species. Rabies is not given before 12 weeks of age. An implant-before-vaccine order was not restated on the live MOCCAE page.',
                  icon: Stethoscope
                },
                {
                  week: 'Week 2–3',
                  title: 'Import Permit & Flight Research',
                  desc: 'We prepare the file for the MOCCAE import permit. We do not issue the permit. It is valid 90 days from issuance. Cargo space is confirmed with the airline you book. This page does not name a hub list or a carrier as the default.',
                  icon: FileText
                },
                {
                  week: 'Week 4',
                  title: 'Health certificate and antibody test',
                  desc: 'The origin authority issues the health certificate. A US origin needs an antibody result of at least 0.5 IU/ml. The certificate is valid 365 days if the vaccine stays valid and no booster is given. Confirm any USDA stamp with USDA. This page does not name Form 7001 as a UAE rule.',
                  icon: Shield
                },
                {
                  week: 'Week 5',
                  title: 'Final Flight Booking & Crate Prep',
                  desc: 'With the import permit still inside 90 days from issuance, confirm a cargo product that accepts the animal. Emirates itineraries ending in Dubai are cargo. This page does not publish a crate price.',
                  icon: Plane
                },
                {
                  week: 'Travel Day',
                  title: 'US Departure & Dubai Arrival',
                  desc: 'The animal is examined at the entry port and released if the file matches. We do not publish a flight duration or a clearance time. Delivery is part of a booked move.',
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USDA endorsed health certificate for the UAE</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
              The UAE expects a government-endorsed origin certificate. In the United States an accredited vet signs first, and the federal animal health authority endorses after that. Your official vet authority will confirm how endorsement works, including any digital system versus paper. Time it so the endorsement is still valid for the flight and the MOCCAE permit is still inside its 90 days from issuance. This page does not name a form number or a processing-day promise for that office.
            </p>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-10">Hub scenarios, labelled typical</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
              East Coast direct, from JFK, IAD or BOS: a healthy adult pet with current vaccines is often the shorter file, about 4 to 8 weeks, because the crate can leave a long-haul gateway without a domestic animal connection. Mid-West connections via ORD, IAH, DFW or ATL add a live-animal transfer. Confirm the connection accepts the crate, not only the passenger. West Coast heat season from LAX, SFO or SEA, and southern hubs such as MCO, is the file most likely to slip: airline temperature limits change, so confirm current policy for the month. These ranges are typical, not promised. Puppies and new vaccinations take longer.
            </p>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-10">Bringing a cat from the USA to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
              Cats use the same microchip, rabies vaccine, endorsed health certificate and 90-day MOCCAE permit as dogs. They are not on the dog breed ban list. A cat does not travel in the cabin on an itinerary ending in Dubai. Emirates carries those animals as cargo. If a titre is required, the result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. This is not a 90-day sample window.
            </p>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-10">If you may return to the United States</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
              CDC dog rules for a later return are a different file from this import. The Certification of U.S.-Issued Rabies Vaccination is the form CDC publishes for that direction. Read <Link to="/routes/dubai-to-usa/" className="font-semibold text-[#4F5BD5] hover:underline">Dubai to USA</Link> before you assume this arrival paperwork works in reverse. Quarantine content for UAE entry stays on the <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">import requirements guide</Link>. Arrival handoff notes are on the <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">Dubai pet arrival guide</Link>.
            </p>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-10">Airlines Flying Pets from the USA to Dubai</h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Confirm the cargo product in writing. This page does not publish flight frequency, hold temperature, a freight tariff, or a preferred US airport.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D71A21]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D71A21]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates</h3>
                  <p className="text-sm text-[#5A5A5A]">Confirm the product</p>
                </div>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Emirates itineraries that end in Dubai must be cargo for an ordinary pet. Do not use an excess-baggage rate as a cargo tariff into Dubai. Ask the airline which US airports it accepts.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#C8102E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Other US carriers</h3>
                  <p className="text-sm text-[#5A5A5A]">Not priced here</p>
                </div>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">A connection or a partner airline is a booking question. This page does not publish a rate, a hub list, or a snub-nosed capacity claim for American Airlines.</p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#D4A017]/10 rounded-xl flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Etihad</h3>
                  <p className="text-sm text-[#5A5A5A]">Not verified this pass</p>
                </div>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Cabin weights, fares and a bill-of-entry figure were not re-checked. This page does not state an Abu Dhabi drive time or say that ground transport is included.</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#D4A017]" />
              Carrier acceptance
            </h3>
            <p className="text-[#5A5A5A] text-sm leading-relaxed">
              Snub-nosed animals may be refused by a carrier. This page does not copy a May to September embargo, a departure-hour rule, or a peak-season booking window. Confirm the airline in writing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">USA to Dubai Pet Relocation FAQs</h2>
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
        buyerMessage="Hello Dubai Pet Relocation. I want Get Route Checked for USA to Dubai. I will send the pet, the US airport and the target month."
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
            <Link to="/routes/dubai-to-usa/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to USA</p>
              <p className="text-[#5A5A5A] text-sm">The reverse route: exporting your pet from Dubai back to America.</p>
            </Link>
            <Link to="/routes/uk-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">UK to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Low-risk route guide for pets relocating from Britain.</p>
            </Link>
            <Link to="/routes/canada-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Canada to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Requirements and timeline for Canadian pet relocations.</p>
            </Link>
            <Link to="/service/pet-relocation-to-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet relocation to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Inbound service page for moves into the UAE.</p>
            </Link>
            <Link to="/service/moccae-pet-permit/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">MOCCAE permit</p>
              <p className="text-[#5A5A5A] text-sm">Permit explainer. Validity is 90 days from issuance.</p>
            </Link>
            <Link to="/routes/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">All routes</p>
              <p className="text-[#5A5A5A] text-sm">Corridor index.</p>
            </Link>
            <Link to="/guides/dubai-pet-arrival-guide/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai arrival guide</p>
              <p className="text-[#5A5A5A] text-sm">What happens after cargo release.</p>
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
