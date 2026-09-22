import { Link } from 'react-router-dom'
import { ArrowRight, Building, MessageCircle, MapPin, Scale } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import FAQItem from '../components/FAQItem.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'

const CITIES = [
  {
    title: 'Dubai communities',
    to: '/dubai/',
    image: '/images/hero-dubai.jpg',
    desc: 'Community directory for last-mile pickup — Marina, JLT, Palm, Downtown, villa suburbs and old Dubai. Separate from the /cities/dubai/ emirate overview (both stay live).',
    badge: 'Community hub',
  },
  {
    title: 'Abu Dhabi',
    to: '/cities/abu-dhabi/',
    image: '/images/hero-abu-dhabi.jpg',
    desc: 'Capital-emirate overview: AUH arrival, ADCM registration, Etihad in-cabin (confirm live fee) and MICCO Bill of Entry — fees verify-on-portal.',
    badge: 'Emirate guide',
  },
  {
    title: 'Sharjah',
    to: '/cities/sharjah/',
    image: '/assets/w-sharjah/pet-relocation-sharjah-dog-lagoon-promenade-dusk.jpg',
    desc: 'Sharjah homes, municipality registration (not Dubai Aleef by default), and SHJ vs DXB cargo habits — coordinated with Dubai when the flight lands there.',
    badge: 'Emirate guide',
  },
]

const OTHER_EMIRATES = ['Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain']

const faqs = [
  {
    q: 'Are MOCCAE rules different in Sharjah or Abu Dhabi?',
    a: 'No. A MOCCAE import permit is federal and valid for 90 days from issuance wherever you land. When a titer is required, the RNATT sample is taken within 90 days before travel and must read ≥0.5 IU/ml. Municipality licensing after arrival is the local layer. Confirm government fees on the official portals.',
  },
  {
    q: 'Why are there two Dubai URLs?',
    a: '[/dubai/](/dubai/) is the community directory. [/cities/dubai/](/cities/dubai/) is the emirate overview. Owner rule: both stay indexed — we do not 301 one into the other.',
  },
  {
    q: 'Do you have pages for Ras Al Khaimah, Ajman, Fujairah or Umm Al Quwain?',
    a: 'Not yet — those emirates stay backlog. We still coordinate pickup and delivery there. WhatsApp the community and we will map airport and municipality steps without inventing a thin doorway URL.',
  },
  {
    q: 'Can you move a pet between emirates without a flight?',
    a: 'Yes. Dubai↔Abu Dhabi, Sharjah↔Dubai and airport crate runs sit on [pet transport and pet taxi](/service/pet-transport-dubai/). This hub is geography; that URL is the ground product.',
  },
  {
    q: 'Where do I start if I am still choosing a service?',
    a: 'If you are still choosing, begin on the [homepage](/). A managed international file is [door-to-door pet relocation in Dubai](/service/pet-relocation-dubai/). Then open the emirate or community page for the address.',
  },
]

export default function CitiesHub() {
  const canonical = `${BASE_URL}/cities/`
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Relocation Cities and Emirates in the UAE',
    itemListElement: CITIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}${c.to}`,
      name: c.title,
    })),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: canonical },
    ],
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
          title: 'Pet Relocation in UAE Cities | Dubai, Abu Dhabi & Sharjah',
          description:
            'Pet relocation across UAE cities: Dubai, Abu Dhabi and Sharjah. MOCCAE is federal; registration and last-mile change by emirate.',
          canonical,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, itemListSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Cities' }]} />

      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="Dubai skyline — pet relocation across UAE cities and emirates"
        eyebrow="UAE Cities & Emirates"
        title="Pet Relocation Across UAE Cities — Dubai, Abu Dhabi & Sharjah"
        subtitle="Federal import rules are the same nationwide. Arrival airport, municipality registration and ground delivery change by emirate — start with Dubai communities, Abu Dhabi or Sharjah."
        updated="Last verified 18 September 2026"
        secondary={{ label: 'Dubai communities', to: '/dubai/' }}
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Federal rules versus municipality licensing</h2>
          <LastVerified className="mb-4 text-xs text-[#8A8A8A]" date="18 September 2026" />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Two layers sit on every UAE pet move. The federal layer is MOCCAE: import permit valid 90 days from issuance,
            microchip and vaccination file, and — when required — an RNATT sample taken within 90 days before travel with
            a result of at least 0.5 IU/ml. That layer does not change because the villa is in Sharjah or the tower is in
            Abu Dhabi. Confirm permit and release fees on the official MOCCAE portal; we do not print contested numerals
            here.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The municipality layer starts after the pet lives at an address. Dubai dog licensing typically runs through
            Dubai Municipality / Aleef. Abu Dhabi uses Abu Dhabi City Municipality (ADCM) and the TAMM channel. Sharjah
            uses Sharjah Municipality — it is not Aleef by default. Document names, portals and fees differ. Verify each
            emirate’s current steps on its first-party site. We coordinate reminders after delivery; we do not assume
            municipal AED tables on this hub.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Airport last-mile is the third difference. Many long-haul cargo files still clear at DXB or DWC even when the
            home is in Sharjah. Abu Dhabi arrivals use AUH and MICCO Bill of Entry language. Etihad in-cabin is an AUH
            product — confirm the live cabin fee at booking; a 2026 Economy promo from USD 399 is expired and is not the
            current standard. Deep policy sits on the{' '}
            <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">
              Etihad pet policy guide
            </Link>
            . Ground transfers between emirates sit on{' '}
            <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet transport in Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#E6E8F5] bg-white p-6">
              <Scale className="mb-3 h-7 w-7 text-[#4F5BD5]" />
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Federal (MOCCAE)</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Entry permission for the whole UAE. Same permit clock in Dubai, Abu Dhabi and Sharjah. Import checklist:{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] border border-[#E6E8F5] bg-white p-6">
              <Building className="mb-3 h-7 w-7 text-[#4F5BD5]" />
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Municipality (local)</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Licensing and local ownership rules after arrival. Dubai Aleef, ADCM/TAMM, Sharjah Municipality — three
                desks, not one app. Confirm fees on each portal.
              </p>
            </div>
          </div>

          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Emirates with dedicated pages</h2>
          <p className="mb-8 max-w-2xl text-[#5A5A5A]">
            Dubai communities roll up to <Link to="/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">/dubai/</Link>.
            The emirate overview at{' '}
            <Link to="/cities/dubai/" className="font-semibold text-[#4F5BD5] hover:underline">/cities/dubai/</Link> remains a
            separate live URL.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group overflow-hidden rounded-[20px] border border-[#E6E8F5] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={c.image} alt={c.title} width={1536} height={1024} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-[#E9ECFB] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">
                    {c.badge}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5]">
                    Open this guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Other emirates — coverage, not new pages</h2>
          <p className="mb-6 max-w-2xl text-[#5A5A5A]">
            We coordinate moves in Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Dedicated RAK/Ajman/Fujairah/UAQ
            pages are backlog — we will not publish thin doorway URLs for them in this tranche. WhatsApp the community and
            we will map pickup, airport and municipality steps.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {OTHER_EMIRATES.map((name) => (
              <div key={name} className="flex items-center gap-2 rounded-2xl border border-[#E6E8F5] bg-[#F5F6FD] px-4 py-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#9AA0C7]" />
                <span className="text-sm font-semibold text-[#5A5A5A]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Cities hub FAQs</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="Emirates hub — then the service URL"
        intro="Federal rules are shared. The job still has a home: homepage, tiers, door-to-door or pet taxi."
        path="/cities/"
      />

      <OfficialSources />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[28px] font-bold text-white sm:text-[34px]">Relocating a pet in the UAE?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/80">
            Tell us your emirate, community and route on WhatsApp. We will outline documents, timing and what we
            coordinate.
          </p>
          <a
            href={getWhatsAppUrl('Hi Dubai Pet Relocation! I need help relocating my pet in the UAE. Can you guide me on the process and cost?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1DA851]"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
