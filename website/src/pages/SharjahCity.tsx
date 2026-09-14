import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Building,
  Home,
  MapPin,
  MessageCircle,
  Plane,
  Truck,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, LOGO_URL, getWhatsAppUrl, siteConfig } from '../lib/seo.ts'
import { PERMIT_VALIDITY, TITER_SAMPLE_RULE } from '../lib/regulatory.ts'

const PATH = '/cities/sharjah/'
const HERO_SRC = '/assets/w-sharjah/pet-relocation-sharjah-dog-lagoon-promenade-dusk.jpg'
const HERO_ALT =
  'Owner walking their dog along a Sharjah waterfront promenade, illustrating pet relocation in Sharjah'
const MAP_SRC = '/assets/w-sharjah/sharjah-dubai-pet-transport-airport-routing-map.png'
const MAP_ALT = 'Pet transport routing between Sharjah, DXB and Sharjah International Airport'

const WA_QUOTE =
  'Hi Dubai Pet Relocation! I need a pet relocation quote for a Sharjah pickup or delivery address. Community and route: …'
const WA_TRANSPORT =
  'Hi Dubai Pet Relocation! I need a pet taxi or Sharjah–Dubai / SHJ–DXB ground transfer. Pickup, drop-off and window: …'

const snippetQuestion = 'Can I relocate my pet to Sharjah?'
const snippetAnswer =
  'Yes. Sharjah is its own emirate: municipality registration is not Dubai Aleef by default, Sharjah International (SHJ) is a possible airport, and many long-haul cargo files still clear at DXB or DWC before a ground hand-off to a Sharjah home. Federal MOCCAE import rules still apply. We coordinate the international file and the local delivery — confirm municipality steps on the Sharjah portal.'

const faqData = [
  {
    q: 'Can I relocate my pet to Sharjah?',
    a: 'Yes. Dogs and cats can move to a Sharjah address when the federal import file is complete and the municipality registration path is followed after arrival. Sharjah is a separate emirate from Dubai, so local licensing is not the Dubai Aleef process by default. We coordinate pickup, cargo, release and delivery to Sharjah communities. Start with [UAE pet import requirements](/guides/uae-pet-import-requirements/) and WhatsApp +971504782999 for a Sharjah quote.',
  },
  {
    q: 'Is pet registration in Sharjah the same as Dubai?',
    a: 'No. Dubai dog licensing typically runs through Dubai Municipality / Aleef channels. Sharjah uses Sharjah Municipality and its current local portal — verify step names, documents and any fee on the first-party site before you treat a blog as the tariff. Federal MOCCAE import still applies for UAE entry. We remind you of the registration clock after delivery; we do not invent Sharjah fee numerals.',
  },
  {
    q: 'Do pets arrive at Sharjah Airport (SHJ) or Dubai (DXB)?',
    a: 'It depends on the airline product that is actually bookable for your pet. Sharjah International (SHJ) and Air Arabia live-animal acceptance must be confirmed live before anyone promises an SHJ cargo arrival. Many Gulf long-haul consignments still use DXB or DWC cargo village, then a ground transfer to Sharjah. If cargo clears in Dubai, the post-landing walkthrough is on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).',
  },
  {
    q: 'Do you offer pet transport from Sharjah to Dubai?',
    a: 'Yes — as a ground product on [pet taxi and inter-emirate transport](/service/pet-transport-dubai/), not as a taxi rate card on this city page. Sharjah↔Dubai, SHJ or DXB crate runs, and clinic transfers are booked there. This URL owns emirate relocation and settling. We do not publish Careem FAQs or inter-emirate AED bands here. WhatsApp both addresses and the window.',
  },
  {
    q: 'How much does pet relocation to Sharjah cost?',
    a: 'Cost is a stack of types — origin veterinary prep, documents, air freight, cargo release, ground to the Sharjah address, and municipality registration — not a single invented package band. Confirm government fees on the official portals. Read the cost types on [what pet relocation costs](/guides/pet-relocation-cost-dubai/), then WhatsApp +971504782999 for a Sharjah-address quote. We do not publish municipality or taxi AED tables on this page.',
  },
  {
    q: 'Can I bring a dog to live in Sharjah?',
    a: 'Most compliant companion dogs can live in Sharjah when the import file is valid and the breed is allowed under UAE rules. Banned and restricted breeds are a federal list — check [banned dog breeds](/guides/banned-dog-breeds-dubai/) and the [dog relocation](/dog-relocation-to-dubai/) page before you book. After arrival, complete Sharjah Municipality registration on the current portal. WhatsApp breed, age and chip details if you want the file checked.',
  },
]

export default function SharjahCity() {
  const canonical = `${BASE_URL}${PATH}`
  const title = 'Pet Relocation Sharjah | Dog & Cat Moves to & from Sharjah'
  const description =
    'Relocating a pet to or from Sharjah? Municipality registration, SHJ vs DXB cargo habits, and coordination with Dubai — get a local quote.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: `${BASE_URL}/cities/` },
      { '@type': 'ListItem', position: 3, name: 'Sharjah', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${BASE_URL}${HERO_SRC}`,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description:
      'Pet relocation coordination for Sharjah addresses — international files, SHJ or DXB/DWC cargo hand-offs, and municipality registration reminders.',
    url: canonical,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: { '@type': 'City', name: 'Sharjah' },
    serviceType: 'Pet Relocation Services',
    priceRange: '$$$',
  }

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        meta={{
          title,
          description,
          keywords:
            'pet movers Sharjah, Sharjah pet import, Sharjah pet export, SHJ airport pet cargo, relocating a dog to Sharjah, moving a cat from Sharjah',
          canonical,
          ogType: 'article',
          ogImage: `${BASE_URL}${HERO_SRC}`,
        }}
        schemas={[articleSchema, faqSchema, breadcrumbSchema, localBusinessSchema]}
      />
      <Breadcrumb items={[{ label: 'Cities', path: '/cities/' }, { label: 'Sharjah' }]} />

      <Hero
        image={HERO_SRC}
        imageAlt={HERO_ALT}
        eyebrow="Sharjah"
        title="Pet Relocation Sharjah: Moves That Respect Emirate Rules"
        subtitle="Sharjah is its own emirate — different municipality habits than Dubai, SHJ as an airport option, and most long-haul cargo still often clearing through DXB or DWC."
        updated="Updated 14 September 2026"
        primaryLabel="Get a Relocation Quote"
        whatsappMessage={WA_QUOTE}
        secondary={{ label: 'All UAE cities', to: '/cities/' }}
        imageWidth={1920}
        imageHeight={1080}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Sharjah is a home, pickup, delivery and municipality-registration context — not a second Dubai community
            directory and not a taxi booking page. We coordinate international files and the local hand-off so a crate
            that lands at DXB, DWC or (when the airline product is live) SHJ can reach a Sharjah address without the
            owner guessing which desk to stand at.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Full door-to-door commercial coordination lives on{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation services in Dubai
            </Link>
            . Ground taxi and Sharjah↔Dubai airport runs are fulfilled on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet taxi and inter-emirate transport
            </Link>
            .             This page explains why Sharjah is its own emirate job: a different municipality, a different airport option,
            and a last mile that often crosses the Dubai–Sharjah seam after a Dubai cargo release.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            What this URL is not: a Dubai community listing, an Abu Dhabi Etihad-cabin page, a quarantine deep-dive, or
            a taxi SERP. Those intents already have owners. Use this page when the sofa, the municipality clock or the
            pickup pin is in Sharjah.
          </p>
          <LastVerified
            date="14 September 2026"
            note="Municipality steps and SHJ / Air Arabia live-animal products: verify first-party / confirm on the portal before you treat any blog as current."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Who this page is for</span>
            <h2 className="mt-2 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
              Sharjah homes — not a community micro-page farm
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
              Named clusters below are coverage geography. They are not a claim of search volume and they are not a
              reason to spawn a page per street.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[20px] bg-white p-6 shadow-sm lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <Home className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Expats settling in Sharjah</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Families moving into Muwaileh, Al Khan, University City, Al Nahda or the Al Majaz waterfront who need
                the import file, cargo release and a delivery that understands Sharjah building access — not a Dubai
                tower script copied onto a Sharjah villa.
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-6 shadow-sm lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <Plane className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Households leaving Sharjah</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Owners whose lease ends in Sharjah and whose destination country sets the export clock. Pickup is from
                the Sharjah address; the commercial outbound spine is still the Dubai export and from-Dubai service
                URLs, because that is where the cargo product is booked.
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-6 shadow-sm lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <MapPin className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Dubai–Sharjah household splits</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                One partner working in Dubai, the home in Sharjah — or a temporary stay while a Dubai villa is fitted.
                The animal still needs one municipality registration path. We do not treat Sharjah as a suburb of the{' '}
                <Link to="/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai communities hub
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Sharjah vs Dubai</span>
            <h2 className="mt-2 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
              Why a dedicated emirate page exists
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
              Federal import is shared. Municipality, cargo habits and the last-mile address are not. That is the
              whole reason this URL is not a paragraph on the Abu Dhabi page.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[20px] bg-[#F5F6FD] p-6 lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <Building className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Municipality is not Dubai Aleef</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                After a pet lives in Sharjah, registration is a Sharjah Municipality / local-portal job. It is not
                Dubai Municipality Aleef by default. Verify the current process, document list and any fee on the
                first-party Sharjah Municipality portal before you copy a Dubai blog step-by-step. We will not invent
                Sharjah registration AED or portal click-paths here.
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-6 lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <CheckCircle className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Federal MOCCAE still applies</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                UAE entry is still a federal file. {PERMIT_VALIDITY} {TITER_SAMPLE_RULE} Depth for quarantine and
                import rules stays on{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>{' '}
                and the{' '}
                <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                  MOCCAE import permit guide
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-6 lg:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                <MapPin className="h-7 w-7 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Not Abu Dhabi, not a Dubai area</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Capital-emirate habits — Etihad in-cabin, AUH, ADCM — live on{' '}
                <Link to="/cities/abu-dhabi/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet relocation in Abu Dhabi
                </Link>
                . Dubai community directories stay on{' '}
                <Link to="/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai communities we cover
                </Link>
                . Do not search this page for Yas Island or Marina tower access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Airports</span>
          <h2 className="mt-2 mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            SHJ versus DXB and DWC — confirm the product, then plan the road
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Sharjah International Airport (SHJ) sits inside the emirate. Air Arabia is the home carrier. That does{' '}
            <em>not</em> mean every dog or cat on a Sharjah lease should be ticketed into SHJ. Air Arabia’s published
            passenger page currently restricts cabin animals to falcons — confirm that page live before you assume a
            dog or cat can sit in the cabin. Live-animal cargo, if offered for your dates, breed and crate, must be
            confirmed with the airline and the SHJ cargo desk. We never invent Air Arabia acceptance, seasonal
            embargoes or an SHJ animal-facility walkthrough.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            In practice, many Gulf long-haul pet consignments still use Dubai International (DXB) or Al Maktoum (DWC)
            cargo village — Emirates SkyCargo and other wide-body networks — then a climate-controlled ground transfer
            to the Sharjah address. That ground leg is owned by{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet taxi and inter-emirate transport
            </Link>
            . This city page deep-links it. It does not republish taxi menus.
          </p>
          <p className="mb-6 leading-relaxed text-[#5A5A5A]">
            Drive time on the E311 or E11 depends on the community, the cargo-release clock and traffic. We quote a
            planned window. We do not sell a guaranteed minute count or a “forty-minute Sharjah–DXB SLA”.
          </p>
          <ContentImage
            src={MAP_SRC}
            alt={MAP_ALT}
            caption="Illustrative routing between Sharjah homes, SHJ and DXB — not a taxi rate card and not a timed service-level agreement. Ground bookings live on the pet transport page."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Inbound</span>
          <h2 className="mt-2 mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Arriving to a Sharjah home
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The inbound spine is destination-backwards. Book the Sharjah address first, then the airport that can
            actually carry the animal, then the documents that unlock that airport. Commercial inbound coordination
            sits on{' '}
            <Link to="/service/pet-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation to Dubai
            </Link>{' '}
            and{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              help importing your pet to the UAE
            </Link>
            — the file is federal even when the sofa is in Al Khan.
          </p>
          <ol className="mb-6 list-decimal space-y-3 pl-5 text-[#5A5A5A]">
            <li className="leading-relaxed">
              <strong className="text-[#2A2A2A]">MOCCAE import permit</strong> — valid for 90 days from the date of
              issuance. The pet must enter the UAE inside that window. Confirm the current portal fee when you apply.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#2A2A2A]">Titer when required</strong> — blood sample within 90 days before
              travel, result at least 0.5 IU/ml. That is a sample-timing window, not a sit after the draw.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#2A2A2A]">Cargo release</strong> — at DXB, DWC or SHJ depending on the booked
              product. If the crate clears a Dubai cargo village, use the{' '}
              <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">
                Dubai pet arrival guide
              </Link>{' '}
              for post-landing detail. This page does not re-own quarantine.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#2A2A2A]">Ground to Sharjah</strong> — climate-controlled transfer to the
              community. Booked as transport, not as a second import product.
            </li>
            <li className="leading-relaxed">
              <strong className="text-[#2A2A2A]">Municipality registration clock</strong> — starts after the animal is
              living at the Sharjah address. Confirm current steps and any fee on the Sharjah Municipality portal. We
              send a reminder; we do not issue the licence.
            </li>
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Outbound</span>
          <h2 className="mt-2 mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Leaving from a Sharjah address
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Plan the destination country first. Export health certificates, airline live-animal rules and any
            quarantine at the far end set the calendar — not the Sharjah lease end-date alone. UAE export coordination
            lives on{' '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet export from Dubai
            </Link>{' '}
            and{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation from Dubai
            </Link>
            . Pickup from the Sharjah villa or tower is coordinated as part of that file.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Many outbound crates still check in at DXB or DWC cargo, even when the household is in Sharjah. SHJ / Air
            Arabia outbound live-animal space is confirm-live — we will not promise an SHJ drop-off until the carrier
            accepts the booking. If you only need the van on cargo day, that is still the transport URL.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A Sharjah pickup still needs the same crate acclimation, microchip scan and original pouch as a Dubai villa
            collection. The difference is logistics: building access in older Al Majaz blocks, villa gates in Muwaileh,
            and a road plan that does not assume the cargo desk is ten minutes away. We schedule the handler around the
            airline acceptance window, not around a hoped-for commute. Destination health-certificate timing is owned by
            the receiving country — we will not invent a Sharjah-specific export fee or a same-day MOCCAE signature.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="rounded-[20px] border border-[#C8CEE8] bg-[#F5F6FD] p-6 lg:p-8">
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4F5BD5]/10">
                <Truck className="h-6 w-6 text-[#4F5BD5]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">Ground only — pointer</p>
                <h2 className="mt-1 text-[22px] font-bold text-[#2A2A2A] sm:text-[26px]">
                  Need a pet taxi or SHJ↔DXB transfer?
                </h2>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-[#5A5A5A]">
              Pet taxi, Sharjah↔Dubai community runs and airport crate transfers are fulfilled on the transport
              service. This city page does <strong>not</strong> own the “pet transport Sharjah to Dubai” SERP and does
              not publish taxi rate cards, Careem FAQs or inter-emirate market AED bands.
            </p>
            <Link
              to="/service/pet-transport-dubai/"
              className="inline-flex items-center justify-center rounded-xl bg-[#4F5BD5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3A45B0]"
            >
              Open pet taxi &amp; inter-emirate transport
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Coverage</span>
            <h2 className="mt-2 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
              Areas we commonly serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
              Light geography so a coordinator can plan building access. Not a volume proof and not a reason to
              publish a micro-URL per cluster.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Muwaileh & University City',
                text: 'Villa and apartment belts west of the city core, often used by families and university staff. Gate timings and villa crate space matter more than a skyline photo.',
              },
              {
                name: 'Al Khan & Al Majaz',
                text: 'Lagoon and Corniche-side towers and older apartments. Promenade walks are part of daily life; building freight lifts and visitor parking need a planned window.',
              },
              {
                name: 'Al Nahda & Al Qasimia',
                text: 'Dense residential clusters on the Dubai–Sharjah seam. Useful when one adult works in Dubai and the home stays in Sharjah — still a Sharjah municipality file.',
              },
            ].map((area) => (
              <div key={area.name} className="rounded-[20px] bg-white p-6 shadow-sm lg:p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F5BD5]/10">
                  <Home className="h-7 w-7 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{area.name}</h3>
                <p className="text-sm leading-relaxed text-[#5A5A5A]">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">Coordination</span>
          <h2 className="mt-2 mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            How a Sharjah move is coordinated
          </h2>
          <ol className="mb-6 space-y-4">
            {[
              {
                title: 'Quote',
                text: 'WhatsApp the Sharjah community, pet details and whether the job is inbound, outbound or a same-country household split. You get a scoped quote — not a published package band.',
              },
              {
                title: 'Documents',
                text: 'MOCCAE permit, health certificate, chip and titer when required. We assemble the pouch; authorities issue the decisions.',
              },
              {
                title: 'Flight',
                text: 'Airline live-animal product confirmed for the actual airport — SHJ only when acceptance is live; otherwise DXB or DWC cargo.',
              },
              {
                title: 'Release',
                text: 'Cargo veterinary release at the booked port. Dubai-port detail stays on the arrival guide.',
              },
              {
                title: 'Sharjah delivery and registration reminder',
                text: 'Climate-controlled last mile, then a reminder to complete Sharjah Municipality registration on the current portal. The money-page home for full relocation is pet relocation services in Dubai.',
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4F5BD5] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-[#5A5A5A]">
                  <strong className="text-[#2A2A2A]">{step.title}.</strong> {step.text}{' '}
                  {step.title === 'Sharjah delivery and registration reminder' ? (
                    <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                      Open the full relocation service
                    </Link>
                  ) : null}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="warning-box rounded-r-[20px] border-l-4 border-[#D4A017] bg-[#FFF8E7] p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-[#D4A017]" />
              <div>
                <h2 className="mb-2 text-lg font-bold text-[#2A2A2A]">Hard locks for Sharjah files</h2>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                    <span>
                      <strong>MOCCAE import permit</strong> is valid for 90 days from issuance — not from the travel
                      date you hoped to book.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                    <span>
                      <strong>RNATT sample</strong> (when required) within 90 days before travel, result ≥0.5 IU/ml.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                    <span>
                      <strong>Fees</strong> — confirm on the MOCCAE and Sharjah Municipality portals. No invented
                      Sharjah registration AED, airline AED or taxi AED on this URL.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                    <span>
                      <strong>SHJ / Air Arabia</strong> — confirm-live. We do not invent live-animal acceptance.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#D4A017]" />
                    <span>
                      <strong>Banned breeds</strong> are federal. Check the banned-breed guide before you commit a
                      Sharjah lease around a restricted dog.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#4F5BD5]">FAQ</span>
            <h2 className="mt-2 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
              Sharjah pet-move questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={[
          { label: 'Sharjah Municipality', href: 'https://www.shjmun.gov.ae' },
          { label: 'Air Arabia — animals and pets (confirm live)', href: 'https://www.airarabia.com/en/Help/Baggage-Enquiries/Animals-and-pets' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="rounded-[20px] bg-[#3A45B0] p-8 text-center text-white lg:p-12">
            <h2 className="mb-4 text-[24px] font-bold sm:text-[30px] lg:text-[36px]">
              Ready for a Sharjah pickup or delivery quote?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Tell us the Sharjah community, the origin or destination country, and whether cargo is likely via SHJ or
              DXB/DWC. WhatsApp +971 50 478 2999 — we coordinate the file and the local hand-off.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={getWhatsAppUrl(WA_QUOTE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white transition hover:bg-[#1DA851]"
              >
                <MessageCircle className="h-5 w-5" />
                Get a Relocation Quote
              </a>
              <a
                href={getWhatsAppUrl(WA_TRANSPORT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-[#2A2A2A] transition hover:bg-[#F5F5F5]"
              >
                WhatsApp a ground transfer
              </a>
            </div>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
              <Link to="/cities/" className="block rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                <p className="mb-1 font-semibold text-white">UAE cities hub</p>
                <p className="text-sm text-white/70">All emirates we cover from one parent page</p>
              </Link>
              <Link
                to="/cities/abu-dhabi/"
                className="block rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <p className="mb-1 font-semibold text-white">Abu Dhabi guide</p>
                <p className="text-sm text-white/70">Sibling emirate — AUH and ADCM, not Sharjah</p>
              </Link>
              <Link
                to="/service/pet-relocation-dubai/"
                className="block rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/15"
              >
                <p className="mb-1 font-semibold text-white">Full relocation</p>
                <p className="text-sm text-white/70">Door-to-door commercial coordination</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EBEBEB] py-8">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5A5A5A]">
            <span>Related:</span>
            <Link to="/cities/" className="text-[#4F5BD5] hover:underline">
              Cities hub
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/cities/abu-dhabi/" className="text-[#4F5BD5] hover:underline">
              Abu Dhabi
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/dubai/" className="text-[#4F5BD5] hover:underline">
              Dubai communities
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/service/pet-relocation-dubai/" className="text-[#4F5BD5] hover:underline">
              Relocation service
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/service/pet-transport-dubai/" className="text-[#4F5BD5] hover:underline">
              Pet transport
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] hover:underline">
              Import requirements
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] hover:underline">
              Cost guide
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/dog-relocation-to-dubai/" className="text-[#4F5BD5] hover:underline">
              Dog relocation
            </Link>
            <span className="text-[#EBEBEB]">|</span>
            <Link to="/guides/banned-dog-breeds-dubai/" className="text-[#4F5BD5] hover:underline">
              Banned breeds
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
