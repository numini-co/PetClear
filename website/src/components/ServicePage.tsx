import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ChevronDown, ChevronUp, ArrowRight, CheckCircle, Shield } from 'lucide-react'
import SEOHead from './SEOHead.tsx'
import Breadcrumb from './Breadcrumb.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig, shortSubtitle } from '../lib/seo.ts'
import type { ServicePageData, ServiceBlock, ServiceFAQ } from '../types/servicePage.ts'
import { SERVICE_LINKS } from '../data/nav.ts'
import OfficialSources from './OfficialSources.tsx'
import Hero from './Hero.tsx'

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
            <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
            <span>{it}</span>
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
            <div>
              <p className="font-bold text-[#2A2A2A] mb-1">{s.title}</p>
              <p className="text-[#5A5A5A] leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    )
  // table
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#E9ECFB]">
            {block.headers.map((h, i) => (
              <th key={i} className="text-left font-semibold text-[#2A2A2A] px-4 py-3 border border-[#E2E5F6]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 border border-[#E2E5F6] text-[#5A5A5A]">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const url = `${BASE_URL}/service/${data.slug}/`
  const wa = getWhatsAppUrl(data.whatsappMessage)

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services/` },
      { '@type': 'ListItem', position: 3, name: data.h1, item: url },
    ],
  }
  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org', '@type': 'Service',
    serviceType: data.primaryKeyword, name: data.h1, url,
    provider: { '@type': 'LocalBusiness', name: siteConfig.name, areaServed: 'Dubai, UAE', url: BASE_URL },
    areaServed: 'AE',
  }
  if (data.costRange) {
    serviceSchema.offers = { '@type': 'AggregateOffer', priceCurrency: 'AED', lowPrice: data.costRange.low, highPrice: data.costRange.high }
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const schemas: Record<string, unknown>[] = [breadcrumbSchema, serviceSchema, faqSchema]
  if (data.hasHowTo) {
    const stepBlock = data.sections.flatMap((s) => s.body).find((b) => b.type === 'steps')
    if (stepBlock && stepBlock.type === 'steps') {
      schemas.push({
        '@context': 'https://schema.org', '@type': 'HowTo',
        name: data.howToName || data.h1,
        step: stepBlock.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
      })
    }
  }

  return (
    <div>
      <SEOHead
        meta={{ title: data.seoTitle, description: data.metaDescription, keywords: data.keywords, canonical: url, ogType: 'website' }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Services', path: '/services/' }, { label: data.h1 }]} />

      {/* HERO */}
      <Hero
        image={data.heroImage}
        imageAlt={data.heroImageAlt}
        eyebrow="Pet Relocation Service"
        title={data.h1}
        subtitle={shortSubtitle(data.heroValueProp)}
        updated="Updated June 2026"
      />

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

      {/* RELATED SERVICES */}
      {data.relatedLinks.length > 0 && (
        <section className="bg-white section-padding">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">Related Services & Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.relatedLinks.map((l, i) => (
                <Link key={i} to={l.to} className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors">
                  {l.label} <ArrowRight className="w-4 h-4 text-[#4F5BD5] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="bg-[#F5F6FD] section-padding">
          <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#2A2A2A] mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">{data.faq.map((f, i) => <Faq key={i} {...f} />)}</div>
          </div>
        </section>
      )}

      {/* ALL SERVICES */}
      <section className="bg-white section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[22px] sm:text-[28px] font-bold text-[#2A2A2A] mb-5">Explore All Our Services</h2>
          <div className="flex flex-wrap gap-2.5">
            {SERVICE_LINKS.filter((l) => l.to !== `/service/${data.slug}/`).map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-[#4F5BD5] bg-[#F5F6FD] hover:bg-[#E9ECFB] border border-[#E2E5F6] rounded-full px-4 py-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* FINAL CTA */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-3">Ready to move your pet?</h2>
          <p className="text-white/90 mb-6">Message us on WhatsApp during business hours with your pet, route and timeline.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm">
            <MessageCircle className="w-5 h-5" /> Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
