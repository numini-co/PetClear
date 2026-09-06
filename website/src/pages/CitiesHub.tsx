import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'

const CITIES = [
  {
    title: 'Dubai communities',
    to: '/dubai/',
    image: '/images/hero-dubai.jpg',
    desc: 'Community-by-community pet relocation across Dubai — Marina, Jumeirah, Downtown, Palm and more. Door-to-door pickup and delivery.',
    badge: 'Community hub',
  },
  {
    title: 'Abu Dhabi',
    to: '/cities/abu-dhabi/',
    image: '/images/hero-abu-dhabi.jpg',
    desc: 'Capital-emirate overview: AUH arrival, ADCM registration, Etihad in-cabin options and MICCO clearance.',
    badge: 'Emirate guide',
  },
]

const OTHER_EMIRATES = ['Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain']

export default function CitiesHub() {
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

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation in UAE Cities | Dubai & Abu Dhabi',
          description:
            'Pet relocation across UAE emirates. Start with the Dubai community hub or the Abu Dhabi city guide — same federal MOCCAE rules, local arrival and registration steps.',
          canonical: `${BASE_URL}/cities/`,
          ogType: 'website',
        }}
        schemas={[itemListSchema]}
      />
      <Breadcrumb items={[{ label: 'Cities' }]} />

      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="Dubai skyline — pet relocation across UAE cities and emirates"
        eyebrow="UAE Cities & Emirates"
        title="Pet Relocation Across UAE Cities"
        subtitle="Federal import rules are the same nationwide. Arrival airport, municipality registration and ground delivery change by emirate — start with Dubai communities or Abu Dhabi."
        updated="Last verified 4 September 2026"
        secondary={{ label: 'Dubai communities', to: '/dubai/' }}
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Emirates with dedicated pages</h2>
          <p className="mb-2 max-w-2xl text-[#5A5A5A]">
            A MOCCAE import permit is valid for 90 days from issuance, wherever you land. Confirm the current portal fee when you apply.
          </p>
          <LastVerified className="mb-8 text-xs text-[#8A8A8A]" />
          <div className="grid gap-6 sm:grid-cols-2">
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

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Other emirates</h2>
          <p className="mb-6 max-w-2xl text-[#5A5A5A]">
            We coordinate moves in every emirate. Dedicated pages for Sharjah and the northern emirates are not live yet — WhatsApp us with your community and we will map pickup, airport and municipality steps.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {OTHER_EMIRATES.map((name) => (
              <div key={name} className="flex items-center gap-2 rounded-2xl border border-[#E6E8F5] bg-white px-4 py-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#9AA0C7]" />
                <span className="text-sm font-semibold text-[#5A5A5A]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="Emirates hub — then the service URL"
        intro="Federal rules are shared. The job still has a home: category entry, tiers, door-to-door or pet taxi."
        links={[
          { to: '/', label: 'Homepage overview', note: 'Category entry for UAE pet relocation coordination' },
          { to: '/services/', label: 'Compare our service tiers', note: 'Essential through full coordination' },
          { to: '/service/pet-relocation-dubai/', label: 'Door-to-door pet relocation in Dubai', note: 'Money-head service after you pick the emirate' },
          { to: '/service/pet-transport-dubai/', label: 'Pet transport across Dubai', note: 'Inter-emirate ground and pet taxi' },
          { to: '/dubai/', label: 'Dubai communities we cover', note: 'Community directory for the largest emirate' },
        ]}
      />

      <OfficialSources />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[28px] font-bold text-white sm:text-[34px]">Relocating a pet in the UAE?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/80">
            Tell us your emirate, community and route on WhatsApp. We will outline documents, timing and what we coordinate.
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
