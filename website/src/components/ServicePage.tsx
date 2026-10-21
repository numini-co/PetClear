import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead from './SEOHead.tsx'
import Breadcrumb from './Breadcrumb.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig, shortSubtitle, localBusinessProvider } from '../lib/seo.ts'
import type { ServicePageData, ServiceBlock } from '../types/servicePage.ts'
import { SERVICE_LINKS } from '../data/nav.ts'
import { mergeRelatedLinks } from '../data/internalLinks.ts'
import OfficialSources from './OfficialSources.tsx'
import Hero from './Hero.tsx'
import FAQItem from './FAQItem.tsx'
import SnippetAnswer from './SnippetAnswer.tsx'
import ContentImage from './ContentImage.tsx'
import LinkedText from './LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { cardImageFor } from '../data/cardImages.ts'
import { CTA_CHECK_MOVE, CTA_MANAGED_QUOTE, CTA_SUPPORT } from '../lib/conversionCopy.ts'
import { openingHoursSpecification } from '../lib/openingHours.ts'
import PaidIncludes from './PaidIncludes.tsx'
import WhatsAppGate from './WhatsAppGate.tsx'
import LinkPlanSlot from './LinkPlanSlot.tsx'

function Block({ block }: { block: ServiceBlock }) {
  if (block.type === 'p') {
    return (
      <p className="mb-4 leading-relaxed text-[#5A5A5A]">
        <LinkedText text={block.text} />
      </p>
    )
  }
  if (block.type === 'list') {
    return (
      <ul className="mb-4 space-y-2">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-[#5A5A5A]">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
            <span>
              <LinkedText text={it} />
            </span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.type === 'steps') {
    return (
      <div className="mb-4 space-y-4">
        {block.steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4F5BD5] text-sm font-bold text-white">{i + 1}</div>
            <div>
              <p className="mb-1 font-bold text-[#2A2A2A]">{s.title}</p>
              <p className="leading-relaxed text-[#5A5A5A]">
                <LinkedText text={s.text} />
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (block.type === 'image') {
    return <ContentImage src={block.src} alt={block.alt} caption={block.caption} width={block.width} height={block.height} />
  }
  if (block.type === 'routeGroups') {
    return (
      <div className="mb-4 space-y-3">
        {block.groups.map((group) => (
          <p key={group.label} className="leading-relaxed text-[#5A5A5A]">
            <strong className="text-[#2A2A2A]">{group.label}:</strong>{' '}
            {group.links.map((link, i) => (
              <span key={link.to}>
                {i > 0 ? ', ' : null}
                <Link to={link.to} className="font-semibold text-[#4F5BD5] hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        ))}
      </div>
    )
  }
  if (block.type === 'cards') {
    return (
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {block.cards.map((c) => {
          const img = cardImageFor(c.to)
          return (
            <Link
              key={c.to}
              to={c.to}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#E2E5F6] bg-[#F5F6FD] transition hover:-translate-y-0.5 hover:bg-[#E9ECFB] hover:shadow-sm"
            >
              {img ? (
                <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              ) : null}
              <div className="p-5">
                {c.kind ? (
                  <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#4F5BD5]">{c.kind}</span>
                ) : null}
                <span className="mb-2 flex items-center justify-between gap-2 font-bold text-[#2A2A2A]">
                  {c.title} <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                </span>
                <span className="text-sm leading-relaxed text-[#5A5A5A]">
                  <LinkedText text={c.text} />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
  return (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#E9ECFB]">
            {block.headers.map((h, i) => (
              <th key={i} className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                  <LinkedText text={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function defaultCtaLabel(slug: string): string {
  if (slug === 'pet-relocation-from-dubai') return 'Check your outbound timeline'
  if (slug === 'pet-transport-dubai') return 'Book a pet taxi slot'
  if (slug === 'moccae-pet-permit') return 'Check permit eligibility'
  if (slug === 'private-jet-pet-travel') return 'Request a managed jet quote'
  if (slug === 'shared-pet-charter') return 'Request a managed charter quote'
  if (slug === 'pet-import-dubai') return CTA_MANAGED_QUOTE
  if (slug === 'pet-relocation-dubai' || slug === 'pet-relocation-to-dubai') return CTA_CHECK_MOVE
  return CTA_CHECK_MOVE
}

function defaultEyebrow(slug: string): string {
  if (slug === 'pet-transport-dubai') return 'Pet Taxi & Ground Transport'
  if (slug === 'pet-import-dubai') return 'Pet Import Service'
  if (slug === 'moccae-pet-permit') return 'MOCCAE Permit Assistance'
  return 'Pet Relocation Service'
}

function relatedHeading(slug: string): string {
  if (slug === 'moccae-pet-permit') return 'Related permit and import pages'
  if (slug === 'pet-relocation-dubai') return 'Related relocation pages and guides'
  if (slug === 'international-pet-relocation') return 'Corridor pages and flight guides'
  if (slug === 'dog-relocation-dubai') return 'Dog relocation guides and services'
  if (slug === 'cat-relocation-dubai') return 'Cat relocation guides and services'
  return 'Related Services & Guides'
}

function faqHeading(slug: string): string {
  if (slug === 'moccae-pet-permit') return 'MOCCAE permit assistance questions'
  if (slug === 'pet-relocation-dubai') return 'Dubai pet relocation questions'
  if (slug === 'shared-pet-charter') return 'Shared pet charter questions'
  if (slug === 'dog-relocation-dubai') return 'Dog relocation questions'
  if (slug === 'cat-relocation-dubai') return 'Cat relocation questions'
  return 'Frequently Asked Questions'
}

function exploreHeading(slug: string): string {
  if (slug === 'moccae-pet-permit') return 'Import, export and relocation services'
  if (slug === 'pet-export-dubai') return 'Import, relocation and permit services'
  if (slug === 'pet-relocation-dubai') return 'Browse every relocation service'
  if (slug === 'shared-pet-charter') return 'Other relocation services if a charter is not the fit'
  if (slug === 'international-pet-relocation') return 'Related services and guides'
  if (slug === 'dog-relocation-dubai') return 'Cat, import and permit services'
  if (slug === 'cat-relocation-dubai') return 'Dog, import and permit services'
  return 'Explore All Our Services'
}

function ctaHeading(slug: string): string {
  if (slug === 'moccae-pet-permit') return 'Ready to start permit assistance?'
  if (slug === 'pet-relocation-dubai') return 'Ready to check a Dubai relocation?'
  if (slug === 'shared-pet-charter') return 'Ready to check charter eligibility?'
  if (slug === 'dog-relocation-dubai') return 'Ready for a managed dog-move quote?'
  if (slug === 'cat-relocation-dubai') return 'Ready for a managed cat-move quote?'
  return 'Ready to book a managed move?'
}

const STRONG_CTA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#085530] sm:w-auto'

function strongCtaPage(slug: string): boolean {
  return (
    slug === 'pet-relocation-from-dubai' ||
    slug === 'pet-transport-dubai' ||
    slug === 'pet-relocation-dubai' ||
    slug === 'pet-export-dubai' ||
    slug === 'moccae-pet-permit' ||
    slug === 'shared-pet-charter' ||
    slug === 'international-pet-relocation' ||
    slug === 'dog-relocation-dubai' ||
    slug === 'cat-relocation-dubai'
  )
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const related = mergeRelatedLinks(`/service/${data.slug}/`, data.relatedLinks)
  const url = `${BASE_URL}/service/${data.slug}/`
  const wa = getWhatsAppUrl(data.whatsappMessage)
  const ctaLabel = data.ctaLabel || defaultCtaLabel(data.slug)
  const heroEyebrow = data.heroEyebrow || defaultEyebrow(data.slug)
  const strongCta = strongCtaPage(data.slug)
  const closingBody =
    data.ctaBody ||
    'WhatsApp during business hours with pet type, breed, route and month. We explain the coordination, and any assessment fee, before paid work starts.'

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
    provider: localBusinessProvider(),
    areaServed: 'AE',
  }
  if (data.costRange) {
    serviceSchema.offers = { '@type': 'AggregateOffer', priceCurrency: 'AED', lowPrice: data.costRange.low, highPrice: data.costRange.high }
  }
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
    openingHoursSpecification,
  }
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: BASE_URL,
  }
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: data.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }
  const schemas: Record<string, unknown>[] = [organizationSchema, websiteSchema, breadcrumbSchema, serviceSchema, faqSchema]
  if (data.hasHowTo) {
    const stepBlock = data.sections.flatMap((s) => s.body).find((b) => b.type === 'steps')
    if (stepBlock && stepBlock.type === 'steps') {
      schemas.push({
        '@context': 'https://schema.org', '@type': 'HowTo',
        name: data.howToName || data.h1,
        step: stepBlock.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.title,
          text: stripInternalMarkdownLinks(s.text),
        })),
      })
    }
  }

  return (
    <div>
      <SEOHead
        meta={{ title: data.seoTitle, description: data.metaDescription, canonical: url, ogType: 'website' }}
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Services', path: '/services/' }, { label: data.h1 }]} />

      {/* HERO */}
      <Hero
        image={data.heroImage}
        imageAlt={data.heroImageAlt}
        eyebrow={heroEyebrow}
        title={data.h1}
        subtitle={shortSubtitle(data.heroValueProp)}
        updated="Updated September 2026"
        primaryLabel={ctaLabel}
        primaryClassName={strongCta ? STRONG_CTA : undefined}
        ctaSupport={data.ctaSupport || (data.slug === 'pet-relocation-dubai' ? CTA_SUPPORT : undefined)}
        whatsappMessage={data.whatsappMessage}
        paidIncludes={data.paidIncludes}
        gateLine={data.gateLine}
        waService={data.servicePreset}
        showBuyerQualify
      />

      {data.bookingCta ? (
        <section className="bg-white section-padding">
          <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
            <h2 className="mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">{data.bookingCta.heading}</h2>
            <p className="mb-5 leading-relaxed text-[#3A3A3A]">{data.bookingCta.intro}</p>
            <ul className="mb-6 space-y-2">
              {data.bookingCta.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#2A2A2A]">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0B6B3A]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-service={data.servicePreset}
              className={STRONG_CTA}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> {data.bookingCta.label}
            </a>
            <WhatsAppGate className="mt-4 max-w-xl" />
          </div>
        </section>
      ) : null}

      {/* SECTIONS */}
      {data.sections.map((sec, i) => (
        <section
          key={i}
          id={sec.id}
          className={`section-padding scroll-mt-24 ${i % 2 ? 'bg-[#F5F6FD]' : 'bg-white'}`}
        >
          <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
            {i === 0 && data.snippetQuestion && data.snippetAnswer ? (
              <SnippetAnswer question={data.snippetQuestion} answer={data.snippetAnswer} />
            ) : null}
            {i === 0 ? <LinkPlanSlot path={`/service/${data.slug}/`} slot="service-process" /> : null}
            {i === 0 ? <LinkPlanSlot path={`/service/${data.slug}/`} slot="crate" /> : null}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#2A2A2A] mb-4">{sec.h2}</h2>
            {sec.intro && (
              <p className="mb-4 leading-relaxed text-[#5A5A5A]">
                <LinkedText text={sec.intro} />
              </p>
            )}
            {sec.body.map((b, j) => <Block key={j} block={b} />)}
          </div>
        </section>
      ))}

      <LinkPlanSlot path={`/service/${data.slug}/`} slot="service-routes" />
      <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
        <LinkPlanSlot path={`/service/${data.slug}/`} slot="owner-prep" />
        <LinkPlanSlot path={`/service/${data.slug}/`} slot="corporate" />
      </div>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="bg-white section-padding">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-6">{relatedHeading(data.slug)}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((l) => (
                <Link key={l.to} to={l.to} className="flex items-center justify-between gap-2 bg-[#F5F6FD] hover:bg-[#E9ECFB] rounded-2xl px-5 py-4 text-[#2A2A2A] font-semibold text-sm transition-colors">
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
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#2A2A2A] mb-6 text-center">{faqHeading(data.slug)}</h2>
            <div className="space-y-3">
              {data.faq.map((f) => (
                <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL SERVICES */}
      <section className="bg-white section-padding">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[22px] sm:text-[28px] font-bold text-[#2A2A2A] mb-5">{exploreHeading(data.slug)}</h2>
          <div className="flex flex-wrap gap-2.5">
            {SERVICE_LINKS.filter((l) => l.to !== `/service/${data.slug}/`).map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-[#4F5BD5] bg-[#F5F6FD] hover:bg-[#E9ECFB] border border-[#E2E5F6] rounded-full px-4 py-2 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* FINAL CTA */}
      <section className={`bg-[#4F5BD5] section-padding${data.slug === 'pet-relocation-dubai' ? ' max-sm:pb-28!' : ''}`}>
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          {data.ctaImage ? (
            <figure className="mx-auto mb-6 max-w-3xl">
              <img
                src={data.ctaImage.src}
                alt={data.ctaImage.alt}
                width={data.ctaImage.width}
                height={data.ctaImage.height}
                loading="lazy"
                className="aspect-video w-full rounded-[20px] object-cover"
              />
              {data.ctaImage.caption ? (
                <figcaption className="mt-2 text-sm leading-relaxed text-white/90">{data.ctaImage.caption}</figcaption>
              ) : null}
            </figure>
          ) : null}
          <h2 className="text-[24px] sm:text-[32px] font-bold text-white mb-3">{data.ctaHeading || ctaHeading(data.slug)}</h2>
          <p className="text-white/90 mb-4">{closingBody}</p>
          <LinkPlanSlot
            path={`/service/${data.slug}/`}
            slot="service-quote"
            className="mb-4 text-sm leading-relaxed text-white/90"
            linkClass="font-semibold text-white underline"
          />
          <PaidIncludes tone="dark" compact items={data.paidIncludes} className="mx-auto mb-6 max-w-2xl text-left" />
          <a href={wa} target="_blank" rel="noopener noreferrer" data-wa-service={data.servicePreset} className={strongCta ? `${STRONG_CTA} rounded-2xl px-8 py-4` : 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm ring-1 ring-white/20'}>
            <MessageCircle className="w-5 h-5" aria-hidden="true" /> {ctaLabel}
          </a>
          <WhatsAppGate tone="dark" line={data.gateLine} className="mt-4" />
        </div>
      </section>
    </div>
  )
}
