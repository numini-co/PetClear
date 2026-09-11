import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, LOGO_URL, getWhatsAppUrl } from '../lib/seo.ts'
import {
  MANIFEST_CARGO,
  NONCOMPLIANCE_FINE,
  PERMIT_VALIDITY,
  RELEASE_FEE_VERIFY,
  TITER_SAMPLE_RULE,
} from '../lib/regulatory.ts'

const PATH = '/guides/dubai-pet-arrival-guide/'
const WA_DOCS =
  'Hi Dubai Pet Relocation! I want to check the arrival documents for my pet landing at DXB or DWC — permit, health certificate, and municipality registration.'
const WA_COORD =
  'Hi Dubai Pet Relocation! My pet is arriving in Dubai. Can a relocation coordinator walk me through cargo clearance, collection, and Dubai Municipality registration?'

const snippetQuestion = 'What happens when my pet arrives at Dubai airport?'
const snippetAnswer =
  'Dogs and cats land as manifest cargo at the DXB or DWC cargo terminal, not at passenger baggage claim. A MOCCAE veterinarian checks the permit, microchip and health papers, then releases compliant pets the same day — there is no routine quarantine. A coordinator collects the crate and takes the animal home. Dogs still need Dubai Municipality / Aleef registration within 30 days of arrival.'

const faqData = [
  {
    q: 'What happens when my pet arrives at Dubai airport?',
    a: 'The crate is offloaded at the cargo terminal (Cargo Village at DXB, or the cargo side at DWC), not the passenger hall. Ground staff present the air waybill and crate to the animal facility. A MOCCAE veterinarian scans the microchip, matches it to the import permit and health certificate, and releases a compliant pet the same day. There is no routine quarantine. Collection and last-mile delivery are coordinated separately from passenger arrivals. Commercial import filing lives on [help importing your pet to the UAE](/service/pet-import-dubai/).',
  },
  {
    q: 'Where do I collect my pet at Dubai International (DXB)?',
    a: 'Collection is at the cargo village / cargo terminal, not at baggage reclaim. Owners who self-collect need the air waybill, passport or Emirates ID, and the original document pouch. Most families ask a coordinator to present the file, wait through the veterinary exam, and drive the crate to the new address. Local airport-to-home product detail stays on [local pet transport and pet taxi](/service/pet-transport-dubai/) — this guide is the post-arrival journey, not the taxi booking page.',
  },
  {
    q: 'Is there quarantine for pets entering Dubai?',
    a: 'Compliant pets — valid 90-day MOCCAE import permit, matching microchip, rabies and health papers — are examined at the entry port and released. The UAE does not run a routine post-arrival quarantine for those files. Incomplete or mismatched paperwork can delay release or lead to a hold at the owner’s expense. That is a documentation problem, not a standard quarantine stay. Pre-travel rules: [import rules for bringing pets to Dubai](/guides/uae-pet-import-requirements/).',
  },
  {
    q: 'How do I register my dog in Dubai after arrival?',
    a: 'Dog licensing is a Dubai Municipality step, typically via dm.gov.ae, the Dubai Now / Aleef channels, or a participating clinic. Owners commonly need Emirates ID or passport, proof of address, the microchip number, current vaccinations, and a pet photo. Registration is expected within 30 days of arrival. Confirm the live process and any fee on dm.gov.ae — do not treat blog numerals as the official tariff.',
  },
  {
    q: 'Do I need a dog license in Dubai?',
    a: 'Yes. Pet registration with Dubai Municipality is mandatory; a dog licence is required under Federal Law 22/2016 (source: u.ae / Dubai Municipality). Cats are also commonly registered on the same Aleef / Dubai Now path. Annual renewal with up-to-date vaccinations is the usual follow-on. This page explains the post-arrival step; it is not a substitute for the municipality portal.',
  },
  {
    q: 'What documents are checked at the cargo terminal?',
    a: 'Expect the MOCCAE import permit (still inside its 90-day issuance window), the original government-endorsed health certificate, vaccination records, the ISO microchip scan, an RNATT result when the origin requires one, parasite-treatment notes, the air waybill, and the owner’s identification. Every page should show the same 15-digit chip number. A mismatch is the most common reason a crate sits longer than a quiet afternoon.',
  },
  {
    q: 'Can I use an EU pet passport to enter Dubai?',
    a: 'An EU pet passport is useful origin evidence. It does not replace a UAE MOCCAE import permit or a government-endorsed health certificate timed to the flight. Pets still enter as manifest cargo (except the published Etihad in-cabin path into Abu Dhabi). Treat the passport as one document in the pouch, not as a Dubai entry ticket. Checklist: [import rules for bringing pets to Dubai](/guides/uae-pet-import-requirements/).',
  },
  {
    q: 'What if my pet is delayed at Dubai airport customs?',
    a: 'Stay on the cargo file, not the passenger terminal. Typical holds are a missing original, a chip that will not scan, an expired permit, or a health certificate outside its short window. We coordinate with the handler and the veterinary desk; we do not override MOCCAE. Non-compliant imports can face a fine of AED 5,000 per animal, and the animal may be rejected or confiscated. WhatsApp +971504782999 with the air waybill if you want the thread held.',
  },
  {
    q: 'How soon must I register after the pet comes home?',
    a: 'Plan Dubai Municipality / Aleef registration inside 30 days of arrival. Dogs need the licence; keep the import pouch because clinics and the portal will ask for the chip and rabies dates. Annual renewal is a separate calendar reminder. Fine amounts published on blogs are secondary — confirm current penalties on dm.gov.ae or u.ae.',
  },
  {
    q: 'Do you operate DXB Cargo Village or issue municipality licences?',
    a: 'No. We are an independent coordinator. dnata-style cargo handling, MOCCAE inspection, Dubai Customs and Dubai Municipality set the rules. We assemble the pouch, time the 90-day permit, and stay on WhatsApp through collection and registration. We do not claim airline or government affiliation.',
  },
]

export default function DubaiPetArrivalGuide() {
  const canonical = `${BASE_URL}${PATH}`
  const title = 'Arriving in Dubai with a Pet — Airport Clearance to Municipality Registration (2026)'
  const description =
    'Pet arrival at Dubai airport: DXB cargo clearance, collection, home settling, and Dubai Municipality / Aleef dog registration within 30 days.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Dubai pet arrival guide', item: canonical },
    ],
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${BASE_URL}/assets/w11/dubai-pet-arrival-cat-first-steps-new-home.jpg`,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title,
          description,
          keywords:
            'pet arrival Dubai airport, DXB pet arrival, Dubai airport pet collection cargo village, Dubai Municipality pet registration, dog license Dubai, what happens when my pet arrives at Dubai airport',
          canonical,
          ogType: 'article',
          ogImage: `${BASE_URL}/assets/w11/dubai-pet-arrival-cat-first-steps-new-home.jpg`,
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Dubai pet arrival' }]} />

      <Hero
        image="/assets/w11/dubai-pet-arrival-cat-first-steps-new-home.jpg"
        imageAlt="Cat taking its first steps into a new Dubai home after airport arrival and clearance"
        eyebrow="Post-arrival guide"
        title="Your Pet Has Landed in Dubai: Clearance, Collection & Registration"
        subtitle="From the cargo terminal to a quiet first week and Dubai Municipality registration — the journey after the flight, not another copy of the import checklist."
        updated="Updated September 2026"
        primaryLabel="Check Documents"
        whatsappMessage={WA_DOCS}
        secondary={{ label: 'Import requirements', to: '/guides/uae-pet-import-requirements/' }}
        imageWidth={1920}
        imageHeight={1080}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            This URL owns the hours and days after the wheels touch down. It is not a commercial import product page and it
            is not a local taxi booking page. Pre-travel rules stay on{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              import rules for bringing pets to Dubai
            </Link>
            . Paid coordination of the inbound file lives on{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              help importing your pet to the UAE
            </Link>
            . Airport-to-home vans and pet-taxi pins stay on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              local pet transport
            </Link>
            .
          </p>
          <p className="mb-6 leading-relaxed text-[#5A5A5A]">
            {MANIFEST_CARGO} If the animal is still in origin, start with the inbound spine on{' '}
            <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation to Dubai
            </Link>{' '}
            and come back here for clearance, settling and registration.
          </p>
          <ContentImage
            src="/assets/w11/dubai-pet-arrival-flow-clearance-collection-registration.png"
            alt="What happens after your pet lands in Dubai: customs clearance, collection, home and municipality registration"
            caption="Five steps after landing: cargo clearance, collection, a quiet home, then dog registration. No invented airport signs."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Where the crate actually lands — cargo terminal, not arrivals
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Passenger terminals at Dubai International (DXB) and Al Maktoum (DWC) are the wrong meeting point. Live animals
            on a UAE inbound itinerary travel as manifested cargo. The crate is accepted at the cargo village — at DXB that
            is the cargo-side complex often described as Cargo Village — and processed through the airport animal facility.
            Ground handling at DXB is typically a cargo handler such as dnata working the air waybill, not a passenger
            service desk. We describe the pattern; we do not invent wayfinding, door numbers or branded signage.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            DWC arrivals use the same federal inspection logic on the Al Maktoum cargo side. Etihad in-cabin pets are a
            different product and land at Abu Dhabi (AUH) — that path is explained on the{' '}
            <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">
              Etihad pet policy guide
            </Link>
            , not here. Emirates SkyCargo into DXB is the common Dubai cargo product; booking rules live on the{' '}
            <Link to="/guides/emirates-pet-cargo/" className="font-semibold text-[#4F5BD5] hover:underline">
              Emirates pet cargo guide
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            You will not meet the animal at belt 12. If you self-collect, you travel to the cargo area with identification
            and the original pouch. If we coordinate, a handler presents the waybill, waits the veterinary exam, and moves
            the crate into a climate-aware vehicle. Community drop-off notes sit on the{' '}
            <Link to="/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai communities hub
            </Link>
            .
          </p>
          <LastVerified
            date="11 September 2026"
            note="Cargo layouts and handler desks can change. Confirm the live collection point with the cargo agent on the air waybill — we do not publish invented DXB signage."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Document check at the animal facility</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Clearance is a consistency test. The officer is not re-planning your move; they are asking whether the animal
            in the crate is the animal on the permit. Every original should tell the same story.
          </p>
          <ul className="mb-6 space-y-2">
            {[
              'MOCCAE import permit still inside the 90-day window from the date of issuance — not 30 days.',
              'ISO 11784/11785 15-digit microchip that scans and matches every certificate.',
              'Government-endorsed origin health certificate inside its short validity window.',
              'Rabies and core vaccination records; chip implanted before the rabies vaccine used for import.',
              'RNATT / titer result when the origin requires it: sample drawn within 90 days before travel, result ≥0.5 IU/ml — a sample-timing window, not a 90-day wait after the blood draw.',
              'External and internal parasite treatments recorded to the pre-travel window.',
              'Air waybill and owner identification (passport, visa or Emirates ID as asked).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">{PERMIT_VALIDITY}</p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">{TITER_SAMPLE_RULE}</p>
          <p className="leading-relaxed text-[#5A5A5A]">
            {NONCOMPLIANCE_FINE} That is why we line-check scans before the aircraft leaves, not after the crate is on the
            cargo floor. DIY depth is on the import-requirements guide; if you want the pouch reviewed on a thread, use
            Check Documents on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">MOCCAE veterinary examination</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A Ministry veterinarian at the entry port examines the animal and the papers together. Typical steps: identify
            the crate against the air waybill, scan the microchip, compare the chip to the permit and health certificate,
            review vaccination and (if required) titer dates, and complete a clinical look-over. We are not the inspector
            and we do not quote a guaranteed exam length.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            When the file is complete, compliant pets are released the same day. There is no routine quarantine stay for
            those arrivals. A hold happens when a chip will not read, a permit has lapsed, a certificate is a photocopy
            without the original, or the animal does not match the photo or breed notes. Those are exceptions, not the
            default product.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">{RELEASE_FEE_VERIFY}</p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Public blogs disagree on dog versus cat release amounts, and older PDFs do not match newer secondary tables.
            This site does not hard-code those contested numerals as official fees. Confirm the live charge on the MOCCAE
            portal or at the desk. Import-permit application fees are likewise confirm-on-portal — including any
            medium-confidence secondary figures you may have seen on other government sites.
          </p>
          <LastVerified
            date="11 September 2026"
            note="MOCCAE first-party public fee tables were not available on this verification pass. Arrival release and permit amounts stay confirm-on-portal."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Collection and the last mile home</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            After release, the crate leaves the cargo village. Some owners drive themselves; most want a handler who
            already knows the cargo gate and the paperwork rhythm. Either way, this is still a cargo collection, not a
            passenger-hall pickup. Do not plan to “meet the flight” with a soft carrier at the arrivals kerb.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Last-mile is a short, quiet transfer into a tower or villa. High-rises add lift bookings and lobby rules;
            villas add heat on paved driveways. We coordinate the handoff. We do not operate the aircraft, the cargo
            terminal or a branded taxi fleet. If you only need a booked van between DXB and a pin, that commercial
            product is{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet transport and pet taxi in Dubai
            </Link>
            . This guide will not steal those queries.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Summer pavement and parked cars are a welfare issue on day one. Walk after dusk, carry water, and give the
            animal water before you ask for a tour of the apartment. Heat-season airline notes belong on the{' '}
            <Link to="/guides/pet-travel-summer-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              summer travel guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">The first week — settle before you socialise</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Clearing cargo is the end of the flight, not the end of the inbound job. Cats hide. Dogs pace. Both do better
            in one room with their own bed, bowls, litter or pads, and a familiar-smelling item from the origin home.
            Expand the map of the apartment over several days. Building pets policies and community walk notes live on{' '}
            <Link to="/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai communities we cover
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Book a local clinic in the first week so you have a contact for routine care and for the municipality file.
            Keep the import pouch — boarding, future travel and an eventual outbound move will ask for the same chip and
            rabies dates. Breed restrictions still apply after landing; if you have not checked Annex 2 types, read{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned and restricted dog breeds
            </Link>{' '}
            before you walk a dog in a shared courtyard.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Inbound settling as a commercial sequence — permit window, cargo day, first week — is summarised on{' '}
            <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation to Dubai
            </Link>
            . This guide is the longer post-arrival walkthrough those service pages should point to.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Dubai Municipality / Aleef dog registration — within 30 days
          </h2>
          <ContentImage
            src="/assets/w11/dubai-municipality-dog-registration-tag-collar.jpg"
            alt="Dog collar with a Dubai municipality registration tag after arrival registration"
            caption="A generic collar tag only — never a replica of an official Dubai Municipality emblem or number."
          />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Pet registration with Dubai Municipality is mandatory. A dog licence is required under Federal Law 22/2016
            (source: UAE Government portal / Dubai Municipality). Registration is done via dm.gov.ae, the Dubai Now app,
            Aleef channels, or participating veterinary clinics. Plan it inside 30 days of arrival — that window is the
            residency step, not part of airport clearance.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Owners typically prepare Emirates ID or passport, proof of residence (Ejari or a Makani-style address), the
            15-digit microchip number, current vaccination records (especially rabies), and a clear photo of the pet.
            Cats are commonly registered on the same digital path even when the licence conversation is framed around
            dogs. Confirm the live form on dm.gov.ae; portals rename themselves more often than the legal duty does.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Fees are secondary and must be verified. Community write-ups often discuss a Dubai Municipality registration
            and numbering fee around AED 10 for dogs and cats, plus a separate microchip charge, a knowledge-and-innovation
            fee and VAT. Treat those figures as commonly discussed secondary amounts — never as a first-party guaranteed
            tariff from this site. Confirm current amounts on dm.gov.ae or through Aleef / Dubai Now before you pay.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Registration is usually renewed annually with up-to-date vaccinations. Unregistered or unvaccinated pets can
            attract fines; published AED ranges on blogs are secondary. Confirm current penalties on official Dubai
            Municipality or u.ae pages. We can talk you through the screens as a registration-assist add-on. We do not
            issue the licence.
          </p>
          <LastVerified
            date="11 September 2026"
            note="Confirm live Aleef / dm.gov.ae steps and fees before you submit. Municipality channels and tariffs change."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Leash law after you leave the apartment</h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Federal Law 22/2016 Article 15 requires dogs to be leashed in public in the UAE; unleashed dogs may be
            detained (source: UAE Government portal, u.ae). That is a living-in-Dubai rule, not an airport rule, and it
            starts as soon as you take the first walk. Restricted types can face extra muzzle or community conditions —
            check the banned-breeds guide and your building’s house rules before you assume a park is open.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            We cite the federal leash duty at this high level. Local park hours, beach rules and community by-laws sit
            with the municipality and the building. When in doubt, leash, pick up, and confirm the current public-space
            note on u.ae or dm.gov.ae.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">What this page is not</h2>
          <ul className="mb-6 space-y-2">
            {[
              'Not a clone of the commercial import service or the inbound relocation page.',
              'Not an airline booking desk — Emirates and Etihad rules stay on their own guides.',
              'Not a pet-taxi rate card. Airport pet pickup and DXB-to-home delivery stay on the transport service URL.',
              'Not a government portal. MOCCAE, Dubai Customs and Dubai Municipality issue the decisions.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-3 leading-relaxed text-[#5A5A5A]">Related pages:</p>
          <ul className="space-y-2">
            <li>
              <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                help importing your pet to the UAE
              </Link>{' '}
              — commercial arrival filing
            </li>
            <li>
              <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                import rules for bringing pets to Dubai
              </Link>{' '}
              — pre-departure checklist
            </li>
            <li>
              <Link to="/guides/" className="font-semibold text-[#4F5BD5] hover:underline">
                all Dubai pet relocation guides
              </Link>{' '}
              — hub
            </li>
            <li>
              <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE import permit
              </Link>{' '}
              — 90-day validity walkthrough
            </li>
            <li>
              <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet relocation to Dubai
              </Link>{' '}
              — inbound commercial spine
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={[
          { label: 'Dubai Municipality', href: 'https://www.dm.gov.ae' },
          { label: 'UAE Government portal (u.ae) — animal welfare / Federal Law 22', href: 'https://u.ae' },
        ]}
      />

      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">Need the arrival file held on one thread?</h2>
          <p className="mb-6 text-base leading-relaxed text-white/80">
            Check the pouch before the flight, or message a coordinator for cargo-day collection and Aleef registration
            guidance. Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>
            . WhatsApp +971 50 478 2999.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl(WA_DOCS)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-[#4F5BD5] hover:bg-white/90"
            >
              Check Documents
            </a>
            <a
              href={getWhatsAppUrl(WA_COORD)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp a Relocation Coordinator
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
