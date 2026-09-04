import { Link } from 'react-router-dom'
import {
  MessageCircle, FileCheck, Phone, Heart, ArrowRight,
  Plane, MapPin, Shield, PawPrint, BookOpen, Sun,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, siteConfig, BASE_URL } from '../lib/seo.ts'
import { SERVICE_LINKS, GUIDE_LINKS } from '../data/nav.ts'
import Hero from '../components/Hero.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import LastVerified from '../components/LastVerified.tsx'
import { dubaiAreas } from '../data/areas/dubai/index.ts'

const defaultMsg = `Hi Dubai Pet Relocation team,

I need help relocating my pet and would love to understand the process and get a quote.

Pet type: [Dog / Cat]
Breed:
Current location:
Destination:
Planned move date:

Thank you!`

const WhatsAppCta = ({
  text,
  message = defaultMsg,
  className = '',
}: {
  text: string
  message?: string
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851] ${className}`}
  >
    <MessageCircle className="h-4 w-4" />
    {text}
  </a>
)

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-[20px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-8 ${className}`}>
    {children}
  </div>
)

const SERVICE_CARD_IMAGES: Record<string, { src: string; alt: string }> = {
  '/service/dog-relocation-dubai/': {
    src: '/assets/w1-w3/german-shepherd-travel-crate-dog-relocation-dubai.jpg',
    alt: 'German Shepherd standing in an open IATA travel crate before dog relocation from Dubai',
  },
  '/service/cat-relocation-dubai/': {
    src: '/assets/w1-w3/british-shorthair-cat-carrier-cat-relocation-dubai.jpg',
    alt: 'British Shorthair cat resting in a travel carrier inside a Dubai apartment',
  },
  '/service/moccae-pet-permit/': {
    src: '/assets/w1-w3/moccae-permit-document-check-hands-dubai.jpg',
    alt: 'Hands reviewing a pet travel checklist for a MOCCAE permit application',
  },
}

const ROUTES = [
  { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
  { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
  { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
  { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
  { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
  { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
]

const HOME_FAQS = [
  {
    q: 'What does a pet relocation coordinator in Dubai actually do?',
    a: 'We sequence documents, MOCCAE permit timing, crate sizing, cargo booking and the last-mile handover — then stay on WhatsApp during business hours. We do not operate the airline or claim to own the vans. Physical handling is done by vetted partners.',
  },
  {
    q: 'Is this homepage the same as the pet relocation Dubai service page?',
    a: 'No. This homepage is the category entry. The decision-stage money term lives on the door-to-door service page. Use this page to orient; open the service, route or guide that matches your move.',
  },
  {
    q: 'Do pets need quarantine when arriving in Dubai?',
    a: 'There is no automatic quarantine when the inbound file is complete and consistent. Incomplete or mismatched documents can lead to delayed release or conditional holding at the owner’s expense. We review the file before you fly so that risk is visible early.',
  },
  {
    q: 'How long is a MOCCAE import permit valid?',
    a: 'Thirty days from issuance. The pet must arrive inside that window. A 90-day permit-validity claim is incorrect and is not used on this site. Confirm current portal fees on the official MOCCAE site — we do not publish contested AED figures here.',
  },
  {
    q: 'When should the rabies titer blood sample be taken?',
    a: 'When a titer is required for the route, the blood sample should be taken within 90 days before travel and read at least 0.5 IU/ml. That is not a 90-day waiting period after the test.',
  },
  {
    q: 'Can I move both a dog and a cat on the same timeline?',
    a: 'Often yes, but crate, airline and apartment rules still differ by species. We plan one WhatsApp thread and two crate files. Species detail sits on the dog and cat service pages; the federal permit chain is shared.',
  },
  {
    q: 'What should I send on WhatsApp to start?',
    a: 'Pet type, breed, approximate weight, origin or destination, and a target month. We reply during published hours with the inbound or outbound spine that applies — not a 15-minute or 24/7 staffing claim.',
  },
  {
    q: 'Do you operate the airline or the pet taxi yourselves?',
    a: 'No. We are a coordination service. International cargo and local pet taxi are different products on different URLs. We match you to the right page and the right partner, then keep the documents aligned.',
  },
]

const TOP_COMMUNITIES = dubaiAreas.slice(0, 10)

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
      telephone: siteConfig.phoneE164,
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: 'Pet relocation coordination service in Dubai',
    url: BASE_URL,
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
    geo: { '@type': 'GeoCoordinates', latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
    areaServed: { '@type': 'City', name: 'Dubai' },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai Pet Relocation Services',
    itemListElement: SERVICE_LINKS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.label,
      url: `${BASE_URL}${s.to}`,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai — Clear Coordination for Dogs & Cats',
          description:
            'Plan pet relocation to and from Dubai. MOCCAE-aware document checks, route guidance, and WhatsApp timelines — get a relocation quote.',
          keywords: 'pet relocation Dubai, pet relocation UAE, dog relocation Dubai, cat relocation Dubai, MOCCAE import permit',
          canonical: `${BASE_URL}/`,
          ogType: 'website',
        }}
        schemas={[organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema, itemListSchema, faqSchema]}
      />

      {/* 1. Hero — existing placeholder; original-photo hero remains blocked */}
      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="Calm golden retriever ready for relocation beside its travel crate in a bright Dubai home"
        eyebrow="Pet relocation coordination for Dubai and the UAE"
        title="Pet Relocation Dubai, Made Clear and Safe"
        subtitle="Plan pet relocation to and from Dubai with MOCCAE-aware document checks, route guidance and WhatsApp timelines — then open the service page that owns your move."
        primaryLabel="Get a Relocation Quote"
        secondary={{ label: 'Check Your Route', to: '/routes/' }}
        updated="Updated September 2026"
      />

      {/* 2. Trust bar — process chips only; no metrics, no trust-bar photo */}
      <section className="border-b border-[#E6E8F5] bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-5">
            {[
              { value: 'Document', label: 'Review before you fly' },
              { value: 'MOCCAE', label: 'Permit guidance' },
              { value: 'WhatsApp', label: 'Updates during hours' },
              { value: 'IATA', label: 'Crate sizing help' },
              { value: 'Door-to-door', label: 'Partner delivery' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#4F5BD5] lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-[#8A8A8A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services grid — cards only to /service/* + /services/ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Our Pet Relocation Services</span>
            <h2 className="text-section mt-3 mb-4">Choose the page that owns your search</h2>
            <p className="text-body-large mx-auto max-w-3xl">
              The homepage is a category entry, not the money result for “pet relocation Dubai”. That decision-stage term lives on the door-to-door service. Inbound arrivals, outbound departures, pet taxi and permits each have their own URL so we do not compete with ourselves. Cards below go only to service pages and the tiers hub.
            </p>
            <p className="text-body mx-auto mt-4 max-w-3xl">
              Use the money page when you want one coordinator to hold documents, crate, cargo and the last mile. Use the to-Dubai page when you are only arriving. Use the from-Dubai page when you are only leaving. Use pet taxi when the animal never leaves the road. Species pages exist for dog- and cat-specific crate and apartment rules; the federal permit chain is shared. If you already know you want document guidance versus full coordination, compare tiers first, then open the service URL — do not treat this grid as a second copy of those bodies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((s) => {
              const img = SERVICE_CARD_IMAGES[s.to]
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group overflow-hidden rounded-[20px] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {img ? (
                    <img src={img.src} alt={img.alt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  ) : null}
                  <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <span className="text-sm font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{s.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-6 py-3.5 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5"
            >
              Compare our service tiers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Routes strip */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Popular Relocation Routes</span>
              <h2 className="text-section mt-3 mb-4">Corridors in both directions</h2>
              <p className="text-body mb-4">
                UK, USA and India inbound each carry a different document spine. A UK origin is usually a low-friction vaccination and certificate file plus the 30-day MOCCAE permit. A US origin adds endorsement steps that have to match the cargo date. India and other titer-required origins add a blood sample that must still be in date on travel day. Those differences are why we refuse to paste one “international checklist” onto every card.
              </p>
              <p className="text-body mb-4">
                Dubai to UK and Dubai to USA are not reversed inbound checklists — destination rules drive the outbound clock. The UAE export certificate is comparatively quick and still useless if it is issued before the destination’s treatments or waiting periods are ready. Use the routes hub for the full inbound versus outbound list; this strip is only the corridors families ask about first.
              </p>
              <p className="text-body">
                If your country is not listed, WhatsApp the origin and destination. We map current rules before anyone books cargo. We do not invent extra country pages on this homepage, and we do not claim a country-count we cannot evidence.
              </p>
            </div>
            <ContentImage
              src="/assets/w1-w3/routes-strip-beagle-crate-doorway-dubai-skyline.jpg"
              alt="Beagle in a travel crate at a home doorway with a Dubai skyline beyond, suggesting international pet relocation routes"
              caption="UK, USA, India, Australia and more — each corridor has its own rules."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="flex items-center justify-between rounded-2xl bg-[#F5F6FD] px-5 py-4 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                {r.label} <ArrowRight className="h-4 w-4 text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/routes/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Open the routes hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How it works — 3 steps max */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">How Dubai Pet Relocation Works</span>
            <h2 className="text-section mt-3 mb-4">Three steps on the homepage — seven on the process page</h2>
            <p className="text-body-large mx-auto max-w-3xl">
              The homepage only summarises. Detail, partner roles and travel-day mechanics live on How It Works so this page does not become a second process guide.
            </p>
          </div>
          <ContentImage
            src="/assets/w1-w3/how-pet-relocation-works-7-step-process-dubai.png"
            alt="Diagram of the 7-step Dubai pet relocation process from free consultation to home reunion"
            caption="Seven clear steps on the process page. The homepage keeps three."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '01',
                icon: Phone,
                title: 'Tell us about your pet',
                body: 'Send species, breed, route and month. We check breed eligibility, whether the job is inbound, outbound or local pet taxi, and which page you should actually use.',
              },
              {
                step: '02',
                icon: FileCheck,
                title: 'We check the file',
                body: 'Microchip, vaccinations, permit window and crate sizing. Import permits are valid 30 days. Titer, when required, is a blood sample within 90 days before travel.',
              },
              {
                step: '03',
                icon: Heart,
                title: 'Partners move; we stay on the thread',
                body: 'Vetted veterinary and transport partners handle the animal. We coordinate cargo or pet taxi and update you on WhatsApp during business hours.',
              },
            ].map((s) => (
              <Card key={s.step} className="relative">
                <span className="absolute top-7 right-7 text-[64px] font-bold leading-none text-[#4F5BD5]/[0.04]">{s.step}</span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                  <s.icon className="h-5 w-5 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#2A2A2A]">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#4F5BD5] px-6 py-3.5 text-sm font-semibold text-[#4F5BD5] hover:bg-[#4F5BD5]/5"
            >
              See the full process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Cost drivers — qualitative only */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">What Drives Pet Relocation Costs</span>
          <h2 className="text-section mt-3 mb-4">Drivers first — fee tables wait for Pricing</h2>
          <p className="text-body mb-4">
            A relocation quote is a bundle: government steps, veterinary work, an IATA crate, live-animal cargo, and how much coordination you hand over. We do not publish AED fee tables, permit amounts or release fees on the homepage. Those figures are contested or route-specific and stay with the Pricing Specialist and the official portals. Circulating MOCCAE permit amounts have disagreed with each other; export-certificate ranges have disagreed with first-party notes. Printing either here would be a guess dressed as a table.
          </p>
          <p className="text-body mb-4">
            What actually moves a quote: direction (inbound permit window versus outbound destination rules), pet size and crate, season (heat embargoes and snub-nosed limits), and whether you want document guidance only or travel-day held for you. A small cat on a short inbound hop is a different job from a large dog leaving for a quarantine destination. Two pets can share a coordinator thread and still need two crates and two portal filings.
          </p>
          <p className="text-body mb-4">
            Local pet taxi is a separate ground product. Typical market ranges for short city runs, DXB, AUH and Dubai–Abu Dhabi sit on the transport page, labelled as market bands and dated — not as Dubai Pet Relocation selling prices. A van to the cargo desk is not an international ticket, and we will not let a taxi quote pretend to be a relocation quote.
          </p>
          <p className="text-body mb-6">
            Read the qualitative driver list on the cost guide, then message WhatsApp for a range that matches your pet and corridor. Until portal figures are verified, “how much does it cost?” is answered as a conversation, not a screenshot of invented cells. Bring species, breed, weight, origin or destination, and a month. That is enough to say which drivers apply.
          </p>
          <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
            Open the cost guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 7. UAE import essentials */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-start gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">UAE Pet Import Essentials</span>
              <h2 className="text-section mt-3 mb-4">Five facts the homepage is allowed to state</h2>
              <p className="text-body mb-4">
                Full checklists live on the guides. The homepage only carries the facts owners misuse most often — and the links out. Last-verified stamps sit next to regulatory lines. We will not paste the 3,000-word import guide onto this page; that is how the old homepage became a second site.
              </p>
              <p className="text-body mb-4">
                Two timing errors cause most inbound delays. The first is treating the import permit as if it lasted a quarter; it lasts 30 days from issuance, and the pet must arrive inside that window. The second is treating a titer as a 90-day wait after the blood draw. When a titer is required, the sample is taken within 90 days before travel and must read at least 0.5 IU/ml. Those two sentences are the whole homepage rule. The walkthroughs live on the permit and titer guides.
              </p>
              <LastVerified />
            </div>
            <ContentImage
              src="/assets/w1-w3/iata-crate-hardware-detail-compliance-dubai.jpg"
              alt="Close-up of IATA-compliant pet crate hardware with ventilation grille and secure metal door"
              caption="Crates built to IATA Live Animals Regulations — the standard cargo staff inspect."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: '30-day import permit',
                body: 'A MOCCAE import permit is valid for 30 days from issuance. Arrive inside that window. Confirm the current portal fee when you apply.',
                to: '/guides/moccae-import-permit/',
                label: 'MOCCAE permit guide',
              },
              {
                icon: FileCheck,
                title: 'Titer timing',
                body: 'When a titer is required, draw the blood sample within 90 days before travel. Result at least 0.5 IU/ml. Not a 90-day wait after the test.',
                to: '/guides/rabies-titer-test-dubai/',
                label: 'Titer guide',
              },
              {
                icon: PawPrint,
                title: 'Banned and restricted breeds',
                body: 'Some dog types cannot enter; others face residency limits inside Dubai. We check eligibility before you commit to cargo.',
                to: '/guides/banned-dog-breeds-dubai/',
                label: 'Breed rules',
              },
              {
                icon: Plane,
                title: 'IATA crate',
                body: 'The animal must stand, turn and lie down. Hardware — door grid, bolts, water bowl — is what acceptance staff actually look at.',
                to: '/guides/iata-pet-crate-requirements/',
                label: 'Crate rules',
              },
              {
                icon: Sun,
                title: 'Summer travel',
                body: 'Heat embargoes and snub-nosed restrictions shrink airline choice in the hot months. Plan the month before you plan the ticket.',
                to: '/guides/pet-travel-summer-dubai/',
                label: 'Summer guide',
              },
              {
                icon: BookOpen,
                title: 'Full import checklist',
                body: 'Chip, vaccinations, health certificate and permit in one owner-facing list — not duplicated as a second homepage essay.',
                to: '/guides/uae-pet-import-requirements/',
                label: 'Import requirements',
              },
            ].map((c) => (
              <Card key={c.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                  <c.icon className="h-5 w-5 text-[#4F5BD5]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">{c.title}</h3>
                <p className="text-body mb-4">{c.body}</p>
                <Link to={c.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                  {c.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dubai areas + emirates */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Dubai Areas We Cover</span>
              <h2 className="text-section mt-3 mb-4">Communities first, then the other emirates</h2>
              <p className="text-body mb-4">
                Door-to-door only works if the last mile matches the building. A Marina tower lobby, a JBR walk-up, a Palm frond gate and an Arabian Ranches villa driveway are four different handoffs. Crate dimensions that fit a service lift in Downtown will not be the constraint in a villa community — heat and driveway access will. The Dubai hub lists communities with those notes; the cities hub covers Abu Dhabi and the wider UAE. This strip is a way into those hubs, not a second copy of every area page.
              </p>
              <p className="text-body mb-4">
                We coordinate collection and delivery across the communities below and the rest of the directory. DXB is the usual cargo door for marina and downtown files; DWC is often the better road for south Dubai and villa belts. That is routing, not a promise that one airport is “better” for every pet.
              </p>
              <p className="text-body">
                Other emirates share the same federal MOCCAE rules; arrival airport and municipality steps change. Abu Dhabi has its own city guide. Sharjah and the northern emirates are coordinated on request until dedicated pages exist — WhatsApp the community name rather than waiting for a URL.
              </p>
            </div>
            <ContentImage
              src="/assets/w1-w3/dubai-pet-relocation-community-coverage-map.png"
              alt="Map of Dubai communities covered for pet relocation, from Dubai Marina to Mirdif and Dubai South"
              caption="Illustrative coverage map — open the Dubai hub for the live community list."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {TOP_COMMUNITIES.map((a) => (
              <Link
                key={a.slug}
                to={`/dubai/${a.slug}/`}
                className="flex items-center gap-2 rounded-2xl bg-[#F5F6FD] px-4 py-3 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                {a.areaName}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/dubai/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              All Dubai communities <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/cities/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              UAE cities and emirates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Why pet owners work with us */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Why Pet Owners Work With Us</span>
          <h2 className="text-section mt-3 mb-4">Process language — not invented proof</h2>
          <p className="text-body mb-4">
            You are never handing a pet to a faceless ticket number. A coordinator reviews the file, names the next deadline, and stays on WhatsApp during published hours. We vet partners against handling and climate-control criteria; that is a process description, not a licence, IPATA card or government endorsement. We do not operate the aircraft. We do not claim to own the vans. We do not sell “approval” we cannot show.
          </p>
          <p className="text-body mb-4">
            We do not claim hundreds of pets moved, star ratings, zero paperwork errors, 24/7 cover or a country-count. Those lines stay off the site until they can be evidenced. What we will say: every document is line-checked before it is submitted, crate size is measured on the animal, and inbound versus outbound is never copy-pasted. A 15-minute reply is not an SLA we print. A same-day pet taxi is a slot when a partner is free, not a night desk.
          </p>
          <p className="text-body mb-4">
            Transparency also means saying what we will not do. We will not invent a fee to look complete. We will not tell you a banned breed can “probably enter”. We will not book cargo before the permit window is understood. We will not treat a nervous cat as a small dog in a smaller box.
          </p>
          <p className="text-body mb-6">
            Animal welfare sits in the sequence — heat, crate, no casual sedation talk, and a quiet first week after arrival. The longer story belongs on About. The conversion question belongs on WhatsApp: send the pet, the route and the month, and we will tell you which page and which next document actually apply.
          </p>
          <Link to="/about/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
            About the coordination model <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 10. Guides strip */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Guides</span>
            <h2 className="text-section mt-3 mb-3">Decision guides, not a second homepage</h2>
            <p className="text-body-large mx-auto max-w-2xl">
              Four to six cards. The guides hub holds the rest. Use these when you need a rule, not a quote.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDE_LINKS.slice(0, 6).map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="flex items-center justify-between rounded-2xl bg-[#F5F6FD] px-5 py-4 text-sm font-semibold text-[#2A2A2A] hover:bg-[#E9ECFB]"
              >
                {g.label} <ArrowRight className="h-4 w-4 text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/guides/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              All pet relocation guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ — 8 unique */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[34px]">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {HOME_FAQS.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to="/faq/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
              More questions on the FAQ hub <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[32px]">Ready to get a relocation quote?</h2>
          <p className="mb-3 text-white/90">
            Message the pet, the route and the month. A coordinator replies during business hours with the inbound, outbound or pet-taxi path that actually applies.
          </p>
          <p className="mb-3 text-sm text-white/70">
            What happens after you message us: we read the breed and corridor, we say which documents matter first, and we tell you if the month is realistic. No 15-minute SLA. No 24/7 claim.
          </p>
          <p className="mb-8 text-sm text-white/70">
            Accuracy note: regulatory lines on this page follow the first-party source-of-truth (30-day permit; titer sample within 90 days before travel). Portal fees are confirmed on the official site, not invented here.
          </p>
          <WhatsAppCta text="Get a Relocation Quote" />
        </div>
      </section>
    </div>
  )
}
