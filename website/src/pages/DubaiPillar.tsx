import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import { dubaiAreas } from '../data/areas/dubai/index.ts'

export default function DubaiPillar() {
  const url = `${BASE_URL}/dubai/`
  const wa = getWhatsAppUrl('Hi Dubai Pet Relocation! I need help relocating my pet in Dubai. Can you guide me on the process and cost?')

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Dubai', item: url },
    ],
  }
  const localBusiness = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness', name: `${siteConfig.name} — Dubai`,
    url, areaServed: 'Dubai, UAE', telephone: siteConfig.phoneE164,
    description: 'Pet relocation across every Dubai community — dog and cat transport, MOCCAE permits and door-to-door delivery.',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressRegion: 'Dubai', addressCountry: 'AE' },
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai | Every Community, Door-to-Door',
          description: 'Pet relocation across all of Dubai — Marina, Jumeirah, Downtown, Palm, Arabian Ranches and more. MOCCAE permits, IATA crates, door-to-door. Free WhatsApp quote.',
          keywords: 'pet relocation dubai, pet transport dubai, dubai pet relocation areas, pet movers dubai',
          canonical: url, ogType: 'website',
        }}
        schemas={[breadcrumbSchema, localBusiness]}
      />
      <Breadcrumb items={[{ label: 'Dubai' }]} />

      {/* HERO */}
      <Hero
        image="/images/hero-dubai.jpg"
        imageAlt="The Dubai skyline — pet relocation across all Dubai communities"
        eyebrow="Dubai"
        title="Pet Relocation Across Every Community in Dubai"
        subtitle="From Dubai Marina to Arabian Ranches — door-to-door pet relocation with MOCCAE permits, IATA crates, customs and delivery."
        updated="Updated June 2026"
      />

      {/* INTRO */}
      <section className="bg-white section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-4">Pet Relocation in Dubai</h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">Dubai is home to one of the world's largest expat populations — and a huge number of dogs and cats who move with their families. Whether you are arriving from the UK, USA, India, Australia or beyond, or leaving the UAE for a new posting, the core requirements are the same: an ISO microchip, current vaccinations, a government health certificate and a MOCCAE permit valid for 90 days. High-risk countries also require a rabies titer test.</p>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">We coordinate the whole move — permits, paperwork, IATA crate, flight, customs and door-to-door delivery — for every Dubai community below. Door-to-door commercial work is <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">door-to-door pet relocation in Dubai</Link>. Same-city vans are <Link to="/service/pet-transport-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">climate-controlled pet transport in Dubai</Link>.</p>
          <p className="text-[#5A5A5A] leading-relaxed">Category entry stays on the <Link to="/" className="font-semibold text-[#4F5BD5] hover:underline">homepage overview</Link>. Compare how much we hold on <Link to="/services/" className="font-semibold text-[#4F5BD5] hover:underline">compare our service tiers</Link>.</p>
        </div>
      </section>

      {/* AREA GRID */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">Dubai Communities We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dubaiAreas.map((a) => (
              <Link key={a.slug} to={`/dubai/${a.slug}/`} className="flex items-center justify-between gap-2 bg-white hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors shadow-sm">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#4F5BD5]" /> {a.areaName}</span>
                <ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-3">Relocating a pet in Dubai?</h2>
          <p className="text-white/90 mb-6">Tell us your community and route on WhatsApp during business hours.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm"><MessageCircle className="w-5 h-5" /> Get Your Free Quote</a>
        </div>
      </section>
    </div>
  )
}
