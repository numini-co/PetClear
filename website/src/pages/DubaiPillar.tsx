import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, MessageCircle, Plane, Truck } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import FAQItem from '../components/FAQItem.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import { dubaiAreas } from '../data/areas/dubai/index.ts'

const GRADE_A_SLUGS = [
  'dubai-marina',
  'jlt',
  'jbr',
  'palm-jumeirah',
  'downtown-dubai',
  'business-bay',
  'jumeirah',
  'arabian-ranches',
  'dubai-hills',
  'jvc',
  'al-barsha',
  'mirdif',
  'dubai-south',
  'deira',
  'bur-dubai',
  'umm-suqeim',
] as const

type GradeASlug = (typeof GRADE_A_SLUGS)[number]

const GROUPS: { id: string; title: string; intro: string; slugs: GradeASlug[] }[] = [
  {
    id: 'marina-coastal',
    title: 'Marina and coastal communities',
    intro:
      'Waterfront towers and beach villas share one last-mile problem: podium parking, visitor lists, and a crate that has to turn in a lobby or a villa gate before anyone talks about cargo cut-off. These pages are about that last mile. The international booking sits on the door-to-door service.',
    slugs: ['dubai-marina', 'jlt', 'jbr', 'palm-jumeirah', 'jumeirah', 'umm-suqeim'],
  },
  {
    id: 'villa-suburbs',
    title: 'Villa suburbs',
    intro:
      'Gated villa communities trade lift bookings for security-gate windows and garden access. The van still needs a named pass, a crate that fits the driveway turn, and a realistic run to DXB or DWC — not a “door-to-door” slogan.',
    slugs: ['arabian-ranches', 'dubai-hills', 'mirdif', 'al-barsha'],
  },
  {
    id: 'new-developments',
    title: 'New developments and central high-rise',
    intro:
      'Newer master-plans and canal-side towers mix apartments with townhouses. Pickup is usually a loading bay or a circle-road slot, not a beach promenade. Airline product — DXB Cargo Village versus DWC — still decides the clock.',
    slugs: ['downtown-dubai', 'business-bay', 'jvc', 'dubai-south'],
  },
  {
    id: 'old-dubai',
    title: 'Old Dubai',
    intro:
      'Creek-side streets, walk-ups and consulate districts are closer to DXB than Marina is. Dense parking and older lift shafts change the crate plan. These URLs stay distinct from each other and from this hub.',
    slugs: ['deira', 'bur-dubai'],
  },
]

const GRADE_A_BLURBS: Record<GradeASlug, string> = {
  'dubai-marina':
    'Marina is a dense waterfront of residential towers. Pickup means service lifts, concierge visitor lists and a crate that can turn in a podium lobby — then a typical ~30-minute run toward DXB on a clear Sheikh Zayed Road. Neighbouring JBR and JLT have their own access rules.',
  jlt: 'JLT is cluster towers around the lakes, not a villa suburb. Lakeside paths help daily walks; the move itself is a cluster drop-off, a goods lift, and a DXB or DWC booking that depends on the airline product — not a generic “Marina adjacent” script.',
  jbr: 'JBR is beachfront towers and The Walk, with Bluewaters sitting next door as its own live URL. Loading bays and pedestrian decks decide whether the crate rides a trolley or waits in the apartment. We do not merge Bluewaters into this page.',
  'palm-jumeirah':
    'Palm Jumeirah is frond villas and trunk apartments behind Nakheel gates. The DXB run is longer than Marina; the last mile is a named gate pass and a crate that fits a villa driveway, not a tower lift booking.',
  'downtown-dubai':
    'Downtown is boulevard apartments and Burj-area towers. Building pet policies and loading docks matter more than a skyline photo. City Walk stays on its own URL — we only note it as a neighbouring lifestyle street.',
  'business-bay':
    'Business Bay is canal-side commercial-residential towers. Pickup is usually a basement ramp or a canal-road bay, then a short hop toward Downtown or Sheikh Zayed Road. It is not the same last mile as old-city Bur Dubai.',
  jumeirah:
    'Jumeirah 1–3 is beachfront villas and low-rise compounds. Gate timing and a crate through a garden path replace tower lifts. Port de La Mer remains a separate live community page — linked, not redirected.',
  'arabian-ranches':
    'Arabian Ranches is a gated golf-villa community (Ranches 1, 2 and 3). Security wants a named window; gardens make crate staging easier than a Marina lobby. Dubailand is the wider district hub, not a substitute for this page.',
  'dubai-hills':
    'Dubai Hills Estate mixes villas with apartments around the park. Family park access is the living story; the move is still a community-gate pass plus a crate that fits either a townhouse hall or a mid-rise lift. Meydan stays its own racing-adjacent URL.',
  jvc: 'JVC is a circular mid-market layout — Saheel, District 10 and Circle Mall as orientation, not holding kennels. Villa, townhouse and mid-rise access all exist on the same ring road. DWC is often the closer cargo airport than DXB.',
  'al-barsha':
    'Al Barsha 1, 2 and 3 sit on the Mall of the Emirates / Al Khail corridor. Villa and apartment pickups share the same SZR and Al Khail clocks. We describe the vet-dense corridor without naming clinics or inventing partnerships.',
  mirdif:
    'Mirdif is a villa suburb on the DXB side of the city. Quiet streets help crate loading; aircraft noise is geography, not a selling point. The DWC run is the longer one from here.',
  'dubai-south':
    'Dubai South sits next to Al Maktoum (DWC) cargo. Logistics and residential streets mix; The Pulse townhouses are a typical access pattern. DXB is the longer run — the opposite of a Deira pickup.',
  deira:
    'Deira is creek, walk-ups and DXB-adjacent streets. Older buildings and tight parking change the crate path. It is not a second Downtown page and it is not merged into Bur Dubai.',
  'bur-dubai':
    'Bur Dubai is old-city streets, consulates and walk-ups near the creek. Dense parking and older lifts are the logistics story. Karama stays a live sibling URL — linked from that page, never redirected here.',
  'umm-suqeim':
    'Umm Suqeim 1–3 is coastal villas on the Jumeirah Beach / Kite Beach corridor. It is not Palm Jumeirah and it is not Jumeirah 1–3. Al Wasl remains its own live URL along the same coastal belt.',
}

const faqs = [
  {
    q: 'Is this the same page as door-to-door pet relocation in Dubai?',
    a: 'No. This URL is the community directory for pickup and delivery geography. The commercial service page for a full international file is [door-to-door pet relocation in Dubai](/service/pet-relocation-dubai/). Use this hub to find your community page, then open the service URL for the job.',
  },
  {
    q: 'Do I still need a MOCCAE import permit if I already have a Dubai home?',
    a: 'If the pet is entering the UAE, yes — a MOCCAE import permit is a federal entry document, valid for 90 days from issuance. A Dubai tenancy does not replace it. Confirm current fees on the official portal. Start with [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
  },
  {
    q: 'When is the rabies titer (RNATT) sample taken?',
    a: 'When a titer is required, the blood sample must be taken within 90 days before travel and the result must be at least 0.5 IU/ml. That is a sample-timing window, not a 90-day wait after the draw. Details sit on the [rabies titer test guide](/guides/rabies-titer-test-dubai/).',
  },
  {
    q: 'Should my pet land at DXB or DWC?',
    a: 'The airline product decides the cargo airport. DXB (Cargo Village / dnata-style handling) is the default for many long-haul files. DWC (Al Maktoum / Dubai South) is often closer for Dubai South and some JVC addresses. We match the community page to the booking — we do not assume a faster airport.',
  },
  {
    q: 'How do I register a dog or cat with Dubai Municipality after arrival?',
    a: 'Dubai Municipality dog licensing typically runs through the Aleef channel. Plan to register within 30 days of arrival with ID or passport, tenancy (Ejari), rabies records and the microchip. Confirm the current fee and steps on the municipality portal. The post-landing walkthrough is on the [Dubai pet arrival guide](/guides/dubai-pet-arrival-guide/).',
  },
  {
    q: 'Can you move a pet between Dubai communities or to Abu Dhabi without a flight?',
    a: 'Yes — that is ground work on [pet transport and pet taxi in Dubai](/service/pet-transport-dubai/), not an international cargo file. Villa-to-tower moves, DXB collection and Dubai↔Abu Dhabi transfers sit there. This hub only maps the community last mile.',
  },
  {
    q: 'Why does /cities/dubai/ still exist if this is the Dubai hub?',
    a: 'Owner rule: existing URLs stay live. [/cities/dubai/](/cities/dubai/) is the emirate overview; this page is the community directory. We salvage municipality pointers here without a 301. Compare emirates on the [UAE cities hub](/cities/).',
  },
  {
    q: 'Do you cover Sheikh Zayed Road as its own community?',
    a: 'Sheikh Zayed Road is a corridor, not a neighbourhood. The existing [/dubai/sheikh-zayed-road/](/dubai/sheikh-zayed-road/) URL stays indexed. We do not create a second SZR page and we do not redirect that URL into this hub.',
  },
]

function areaName(slug: string): string {
  return dubaiAreas.find((a) => a.slug === slug)?.areaName ?? slug
}

const gradeASet = new Set<string>(GRADE_A_SLUGS)
const siblingAreas = dubaiAreas.filter((a) => !gradeASet.has(a.slug))

export default function DubaiPillar() {
  const url = `${BASE_URL}/dubai/`
  const wa = getWhatsAppUrl(
    'Hi Dubai Pet Relocation! I need a Relocation Coordinator for a Dubai community pickup or delivery. Community, pet and route: …',
  )

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Dubai', item: url },
    ],
  }
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} — Dubai communities`,
    url,
    areaServed: 'Dubai, UAE',
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    description:
      'Community directory for pet relocation pickup and delivery across Dubai — marina, coastal, villa suburbs, new developments and old Dubai. Federal MOCCAE rules apply; municipality registration is separate.',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressRegion: 'Dubai', addressCountry: 'AE' },
  }
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai communities for pet relocation',
    itemListElement: GROUPS.flatMap((g, gi) =>
      g.slugs.map((slug, si) => ({
        '@type': 'ListItem',
        position: gi * 10 + si + 1,
        url: `${BASE_URL}/dubai/${slug}/`,
        name: areaName(slug),
      })),
    ),
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai Communities | Marina to Old Dubai',
          description:
            'Dubai community directory for pet pickup and delivery: Marina, JLT, Palm, Downtown and more. MOCCAE 90-day permit. WhatsApp +971504782999.',
          canonical: url,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, localBusiness, itemListSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Dubai' }]} />

      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="The Dubai skyline — pet relocation across all Dubai communities"
        eyebrow="Dubai communities"
        title="Pet Relocation Across Every Community in Dubai"
        subtitle="A directory for last-mile pickup and delivery: marina towers, villa gates, new developments and old Dubai. The full international file is the door-to-door service."
        updated="Last verified 18 September 2026"
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Communities for pickup and delivery</h2>
          <LastVerified className="mb-4 text-xs text-[#8A8A8A]" date="18 September 2026" />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Dubai is many last miles, not one city-shaped crate run. A Marina tower wants a goods-lift booking and a visitor
            plate. An Arabian Ranches villa wants a security-gate window. A Deira walk-up wants a crate that fits a tight
            stair and a parking bay that is already full. This page groups those communities so you can open the right
            local URL. The commercial file — permits, IATA crate, cargo and customs — lives on{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              door-to-door pet relocation in Dubai
            </Link>
            . Same-city and inter-emirate vans live on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              climate-controlled pet transport in Dubai
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Federal entry rules do not change by neighbourhood. A MOCCAE import permit is valid for 90 days from issuance.
            When a rabies titer is required, the RNATT sample is taken within 90 days before travel and must read at least
            0.5 IU/ml — a sample window, not a wait after the blood draw. Government fees are confirm-on-portal only. The
            checklist sits on the{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              UAE pet import requirements
            </Link>{' '}
            guide. What does change by community is the van, the lift, the gate and which cargo airport is the shorter run.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Homepage stays on the{' '}
            <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">
              homepage overview
            </Link>
            . Compare tiers on{' '}
            <Link to="/services/" className="font-semibold text-[#4F5BD5] hover:underline">
              our service tiers
            </Link>
            . Other emirates — Abu Dhabi, Sharjah, and coverage notes for the north — sit on the{' '}
            <Link to="/cities/" className="font-semibold text-[#4F5BD5] hover:underline">
              UAE cities hub
            </Link>
            . The emirate overview at{' '}
            <Link to="/cities/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              /cities/dubai/
            </Link>{' '}
            stays a live, indexed URL. We salvage municipality pointers below; we do not 301 that page into this hub.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <Truck className="h-6 w-6 text-[#4F5BD5]" />
            <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Pickup logistics across Dubai</h2>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            International coordination fails more often in the building than at the cargo desk. Share the community, the
            tower or villa cluster, and whether a resident must escort the crate. We plan a window, not a clock-minute
            spectacle in a lobby. Cats usually stay in a carrier until the IATA crate is at the door. Dogs that know a
            promenade still need a short, leashed transfer — not a midday walk along Marina Walk in July.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            High-rise communities (Marina, JLT, JBR, Downtown, Business Bay) typically need a visitor list, a service or
            goods lift, and a podium or basement bay. Villa communities (Ranches, Hills, Mirdif, Jumeirah, Umm Suqeim)
            typically need a gate pass and a driveway that can take a crate trolley. Old Dubai (Deira, Bur Dubai) often
            means walk-ups, tight streets and DXB-adjacent timing. We do not use malls, yacht clubs or parks as unofficial
            kennels — those names are orientation only.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Local-only clinic or airport runs that are not an international file belong on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet transport and pet taxi
            </Link>
            . After cargo release, the first-week walkthrough — collection, home set-up, Aleef clock — is the{' '}
            <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai pet arrival guide
            </Link>
            . WhatsApp +971504782999 during business hours with community, pet and route.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <Plane className="h-6 w-6 text-[#4F5BD5]" />
            <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">DXB versus DWC — a routing note</h2>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Dubai International (DXB) remains the default cargo arrival for many long-haul live-animal products. Handling
            sits around Cargo Village / dnata-style facilities, then a ground run to the community. Al Maktoum (DWC) at
            Dubai South is a second cargo airport — closer for Dubai South addresses and often the shorter van for JVC or
            DIP, longer for Deira and Mirdif. We do not promise a specific terminal name as a wayfinding guarantee; airline
            and handler labels change.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            The community page tells you which clock is realistic. The booking tells you which airport is actually on the
            airway bill. If the pet lands at AUH instead, that is an Abu Dhabi file — see{' '}
            <Link to="/cities/abu-dhabi/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation in Abu Dhabi
            </Link>{' '}
            and a ground transfer on the transport service. Confirm release and inspection fees on the official MOCCAE
            portal; we do not print contested government numerals on this hub.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#4F5BD5]" />
            <h2 className="text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Dubai Municipality registration — pointer</h2>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Federal import and emirate licensing are different jobs. MOCCAE decides whether the pet may enter the UAE.
            Dubai Municipality decides how a dog (and, where required, a cat) is licensed once it lives here. Typical
            Dubai dog licensing runs through the Aleef channel. Plan to complete registration within 30 days of arrival.
            Owners usually need identification (Emirates ID or passport), proof of residence such as a tenancy/Ejari,
            rabies vaccination records and the microchip certificate. Annual renewal is the municipality’s rule — confirm
            the current steps and any fee on the official Dubai Municipality / Aleef portal. We do not treat blog AED
            bands as first-party tariffs.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            This is a pointer, not a second{' '}
            <Link to="/cities/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              /cities/dubai/
            </Link>{' '}
            essay. That emirate page stays live and indexed. After landing, use the{' '}
            <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">
              arrival guide
            </Link>{' '}
            for cargo-terminal collection language. Breed eligibility is federal — check{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned dog breeds
            </Link>{' '}
            before you book, not after the crate is on the podium.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Dubai community directory</h2>
          <p className="mb-10 max-w-3xl leading-relaxed text-[#5A5A5A]">
            Grade A communities have unique local pages. Each blurb below is only a teaser — open the community URL for
            lifts, gates, DXB/DWC notes and FAQs. Remaining live areas are listed as siblings so we do not assume doorway
            essays.
          </p>

          {GROUPS.map((group) => (
            <div key={group.id} className="mb-12 last:mb-0">
              <h3 className="mb-2 text-[20px] font-bold text-[#2A2A2A] sm:text-[24px]">{group.title}</h3>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-[#5A5A5A]">{group.intro}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.slugs.map((slug) => (
                  <Link
                    key={slug}
                    to={`/dubai/${slug}/`}
                    className="rounded-[20px] border border-[#E6E8F5] bg-[#F5F6FD] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="mb-2 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 font-semibold text-[#2A2A2A]">
                        <MapPin className="h-4 w-4 text-[#4F5BD5]" />
                        {areaName(slug)}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                    </span>
                    <p className="text-sm leading-relaxed text-[#5A5A5A]">{GRADE_A_BLURBS[slug]}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 rounded-[20px] border border-[#E6E8F5] bg-[#F5F6FD] p-6">
            <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Sheikh Zayed Road — corridor, not a new URL</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#5A5A5A]">
              SZR is the spine that Marina, Barsha, Downtown and Business Bay hang off. It is not a community with its own
              municipality desk. The existing{' '}
              <Link to="/dubai/sheikh-zayed-road/" className="font-semibold text-[#4F5BD5] hover:underline">
                /dubai/sheikh-zayed-road/
              </Link>{' '}
              page stays live. We will not create or redirect a second SZR URL.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Other live Dubai areas</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[#5A5A5A]">
            These URLs stay indexed. They are siblings, not merge targets. Open a card if that is your address — we do not
            rewrite them as thin doorway clones of the Grade A set.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {siblingAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/dubai/${a.slug}/`}
                className="flex items-center justify-between gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-[#2A2A2A] shadow-sm transition-colors hover:bg-[#E9ECFB]"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4F5BD5]" /> {a.areaName}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Dubai community FAQs</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="After you pick the community"
        intro="After the community, open door-to-door relocation, pet taxi, the arrival guide, or another emirate."
        path="/dubai/"
      />

      <OfficialSources
        extra={[{ label: 'Dubai Municipality', href: 'https://www.dm.gov.ae' }]}
      />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-white sm:text-[32px]">Need a Relocation Coordinator for your community?</h2>
          <p className="mb-6 text-white/90">
            Tell us the Dubai community, the tower or villa, and the route. WhatsApp +971504782999 during business hours —
            support@dubai-pet-relocation.ae if you prefer email.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp a Relocation Coordinator
          </a>
        </div>
      </section>
    </div>
  )
}
