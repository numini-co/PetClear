import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ChevronDown, ChevronUp, ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import SEOHead from './SEOHead.tsx'
import Breadcrumb from './Breadcrumb.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig, shortSubtitle } from '../lib/seo.ts'
import type { ServiceBlock, ServiceFAQ } from '../types/servicePage.ts'
import type { AreaPageData } from '../types/areaPage.ts'
import { SERVICE_LINKS } from '../data/nav.ts'
import { dubaiAreas } from '../data/areas/dubai/index.ts'
import OfficialSources from './OfficialSources.tsx'
import Hero from './Hero.tsx'
import ContentImage from './ContentImage.tsx'

function Faq({ q, a }: ServiceFAQ) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span className="pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  )
}

function Block({ block }: { block: ServiceBlock }) {
  if (block.type === 'p') return <p className="text-[#5A5A5A] leading-relaxed mb-4">{block.text}</p>
  if (block.type === 'list')
    return (
      <ul className="space-y-2 mb-4">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-[#5A5A5A]">
            <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" /><span>{it}</span>
          </li>
        ))}
      </ul>
    )
  if (block.type === 'steps')
    return (
      <div className="space-y-4 mb-4">
        {block.steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
            <div><p className="font-bold text-[#2A2A2A] mb-1">{s.title}</p><p className="text-[#5A5A5A] leading-relaxed">{s.text}</p></div>
          </div>
        ))}
      </div>
    )
  if (block.type === 'image') {
    return <ContentImage src={block.src} alt={block.alt} caption={block.caption} />
  }
  if (block.type === 'cards') {
    return (
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {block.cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="flex flex-col rounded-[20px] border border-[#E2E5F6] bg-[#F5F6FD] p-5 transition hover:-translate-y-0.5 hover:bg-[#E9ECFB] hover:shadow-sm"
          >
            {c.kind ? (
              <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">{c.kind}</span>
            ) : null}
            <span className="mb-2 flex items-center justify-between gap-2 font-bold text-[#2A2A2A]">
              {c.title} <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
            </span>
            <span className="text-sm leading-relaxed text-[#5A5A5A]">{c.text}</span>
          </Link>
        ))}
      </div>
    )
  }
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead><tr className="bg-[#E9ECFB]">{block.headers.map((h, i) => <th key={i} className="text-left font-semibold text-[#2A2A2A] px-4 py-3 border border-[#E2E5F6]">{h}</th>)}</tr></thead>
        <tbody>{block.rows.map((r, i) => <tr key={i} className={i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}>{r.map((c, j) => <td key={j} className="px-4 py-3 border border-[#E2E5F6] text-[#5A5A5A]">{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}

export default function AreaPage({ data }: { data: AreaPageData }) {
  const url = `${BASE_URL}/dubai/${data.slug}/`
  const wa = getWhatsAppUrl(data.whatsappMessage)

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Dubai', item: `${BASE_URL}/dubai/` },
      { '@type': 'ListItem', position: 3, name: data.areaName, item: url },
    ],
  }
  const localBusiness: Record<string, unknown> = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness', name: `${siteConfig.name} — ${data.areaName}`,
    url, areaServed: `${data.areaName}, Dubai, UAE`, telephone: siteConfig.phoneE164,
    description: data.metaDescription, address: { '@type': 'PostalAddress', addressLocality: data.areaName, addressRegion: 'Dubai', addressCountry: 'AE' },
  }
  if (data.geo) localBusiness.geo = { '@type': 'GeoCoordinates', latitude: data.geo.lat, longitude: data.geo.lng }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <div>
      <SEOHead
        meta={{ title: data.seoTitle, description: data.metaDescription, keywords: data.keywords, canonical: url, ogType: 'website' }}
        schemas={[breadcrumbSchema, localBusiness, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Dubai', path: '/dubai/' }, { label: data.areaName }]} />

      {/* HERO */}
      <Hero
        image={data.heroImage}
        imageAlt={data.heroImageAlt}
        eyebrow={`${data.areaName}, Dubai`}
        title={data.h1}
        subtitle={shortSubtitle(data.heroValueProp)}
        updated="Updated June 2026"
      />

      {/* INTRO */}
      <section className="bg-white pb-2">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <p className="text-[#5A5A5A] leading-relaxed text-lg">{data.intro}</p>
        </div>
      </section>

      {/* LANDMARKS */}
      {data.landmarks.length > 0 && (
        <section className="bg-white section-padding">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#2A2A2A] mb-4">Pet Relocation Across {data.areaName}</h2>
            <p className="text-[#5A5A5A] mb-4">We coordinate pet relocation for residents near:</p>
            <div className="flex flex-wrap gap-2">
              {data.landmarks.map((l, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-sm text-[#4F5BD5] bg-[#F5F6FD] px-3 py-2 rounded-xl"><MapPin className="w-3.5 h-3.5" /> {l}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS */}
      {data.sections.map((sec, i) => (
        <section key={i} className={`section-padding ${i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}`}>
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#2A2A2A] mb-4">{sec.h2}</h2>
            {sec.intro && <p className="text-[#5A5A5A] leading-relaxed mb-4">{sec.intro}</p>}
            {sec.body.map((b, j) => <Block key={j} block={b} />)}
          </div>
        </section>
      ))}

      {data.vetsNote && (
        <section className="bg-white section-padding">
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#2A2A2A] mb-3">Local Veterinary Support in {data.areaName}</h2>
            <p className="text-[#5A5A5A] leading-relaxed">{data.vetsNote}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="bg-[#F5F6FD] section-padding">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6 text-center">{data.areaName} Pet Relocation FAQ</h2>
            <div className="space-y-3">{data.faq.map((f, i) => <Faq key={i} {...f} />)}</div>
          </div>
        </section>
      )}

      {/* RELATED AREAS */}
      <section className="bg-white section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">Other Dubai Areas We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/dubai/" className="flex items-center justify-between gap-2 bg-[#E9ECFB] hover:bg-[#dfe3fb] rounded-2xl px-5 py-4 text-[#2A2A2A] font-bold text-sm transition-colors">All Dubai areas <ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" /></Link>
            {data.relatedAreas.map((l, i) => (
              <Link key={i} to={l.to} className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors">{l.label} <ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" /></Link>
            ))}
          </div>

          <h3 className="text-[18px] sm:text-[22px] font-bold text-[#2A2A2A] mt-10 mb-4">All Dubai communities we cover</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {dubaiAreas
              .filter((a) => a.slug !== data.slug)
              .sort((a, b) => a.areaName.localeCompare(b.areaName))
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/dubai/${a.slug}/`}
                  className="text-sm text-[#4F5BD5] hover:text-[#3A45B0] hover:underline truncate"
                >
                  {a.areaName}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[22px] sm:text-[28px] font-bold text-[#2A2A2A] mb-5">Our Pet Relocation Services</h2>
          <div className="flex flex-wrap gap-2.5">
            {SERVICE_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-[#4F5BD5] bg-white hover:bg-[#E9ECFB] border border-[#E2E5F6] rounded-full px-4 py-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* FINAL CTA */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-3">Relocating a pet in {data.areaName}?</h2>
          <p className="text-white/90 mb-6">Message us on WhatsApp during business hours with your community, pet and route.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm"><MessageCircle className="w-5 h-5" /> Get Your Free Quote</a>
        </div>
      </section>
    </div>
  )
}
