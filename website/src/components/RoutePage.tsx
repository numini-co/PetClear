import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react'
import SEOHead from './SEOHead.tsx'
import Breadcrumb from './Breadcrumb.tsx'
import Hero from './Hero.tsx'
import FAQItem from './FAQItem.tsx'
import SnippetAnswer from './SnippetAnswer.tsx'
import OfficialSources from './OfficialSources.tsx'
import RouteAirportsAirlinesBlock from './RouteAirportsAirlinesBlock.tsx'
import UaeCargoRuleCallout from './UaeCargoRuleCallout.tsx'
import LastVerified from './LastVerified.tsx'
import LinkedText from './LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, LOGO_URL, getWhatsAppUrl, shortSubtitle, siteConfig } from '../lib/seo.ts'
import { GUIDE_SOFT_GATE, OUTBOUND_PAID_INCLUDES, STRONG_WA_CLASS } from '../lib/conversionCopy.ts'
import { titleCaseCountry } from '../data/routes/countryMeta.ts'
import type { RoutePageData } from '../types/routePage.ts'
import RouteMoneyBodyLink from './RouteMoneyBodyLink.tsx'
import LinkPlanSlot from './LinkPlanSlot.tsx'
import RouteBuyerFreeHelp from './RouteBuyerFreeHelp.tsx'

/** Week 7 inbound pages only. Every other slug renders the main route template. */
const WEEK7_SLUGS = new Set([
  'uk-to-dubai',
  'usa-to-dubai',
  'india-to-dubai',
  'philippines-to-dubai',
  'germany-to-dubai',
  'france-to-dubai',
  'saudi-arabia-to-dubai',
  'singapore-to-dubai',
])

function Prose({ text }: { text: string }) {
  const blocks = text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean)
  return (
    <>
      {blocks.map((block, index) => (
        <p key={index} className="mt-4 leading-relaxed text-[#5A5A5A] first:mt-0">
          <LinkedText text={block} />
        </p>
      ))}
    </>
  )
}

function displayCountry(name: string): string {
  return name.startsWith('the ') ? name.slice(4, 5).toUpperCase() + name.slice(5) : name
}

export default function RoutePage({ data }: { data: RoutePageData }) {
  const week7 = WEEK7_SLUGS.has(data.slug)
  const outbound = data.direction === 'outbound'
  const url = `${BASE_URL}/routes/${data.slug}/`
  const countryLabel = displayCountry(data.countryName)
  const eyebrow =
    data.direction === 'inbound' ? `${countryLabel} → Dubai` : `Dubai → ${countryLabel}`
  const waMessage =
    outbound || week7
      ? `Hi Dubai Pet Relocation. I want Get Route Checked for ${data.slug.replace(/-/g, ' ')} (${data.direction}). Pet details and preferred dates follow.`
      : `Hi Dubai Pet Relocation! I need a route check for ${data.slug.replace(/-/g, ' ')} (${data.direction}). Pet details and preferred dates follow.`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE_URL}/routes/` },
      { '@type': 'ListItem', position: 3, name: data.h1, item: url },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.answer) },
    })),
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.meta,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    dateModified: data.lastVerified,
  }

  const rulesHeading =
    data.direction === 'inbound'
      ? 'UAE entry rules for this corridor'
      : `Leaving Dubai ${data.countryName.startsWith('the ') ? data.countryName.replace('the ', 'for the ') : `for ${data.countryName}`}`

  return (
    <div>
      <SEOHead
        meta={{
          title: data.title,
          description: data.meta,
          canonical: url,
          ogType: 'article',
          ogImage: `${BASE_URL}${data.heroImage}`,
        }}
        schemas={[breadcrumbSchema, faqSchema, articleSchema]}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: eyebrow }]} />

      <Hero
        image={data.heroImage}
        imageAlt={data.heroAlt}
        fallbackSrc="/images/import-hero.jpg"
        eyebrow={eyebrow}
        title={data.h1}
        subtitle={shortSubtitle(data.intro)}
        updated={`Last verified ${data.lastVerified}`}
        primaryLabel={outbound ? 'Get Route Checked' : data.cta.label}
        whatsappMessage={waMessage}
        primaryClassName={outbound ? STRONG_WA_CLASS : undefined}
        showBuyerQualify={outbound}
        paidIncludes={outbound ? [...OUTBOUND_PAID_INCLUDES] : undefined}
        gateLine={outbound ? GUIDE_SOFT_GATE : undefined}
        waService={outbound ? 'Export service' : undefined}
        secondary={{ label: 'All routes', to: '/routes/' }}
        overlayClassName={data.slug === 'germany-to-dubai' ? 'from-black/70 via-black/50 to-black/25' : undefined}
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={data.snippetQuestion} answer={data.snippetAnswer} />
          {data.direction === 'inbound' ? <UaeCargoRuleCallout /> : null}
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            {data.direction === 'inbound'
              ? `Relocating a pet ${COUNTRY_FROM(data.countryName)} to Dubai`
              : `Exporting a pet from Dubai ${COUNTRY_TO(data.countryName)}`}
          </h2>
          {week7 ? <Prose text={data.intro} /> : <p className="leading-relaxed text-[#5A5A5A]">{data.intro}</p>}
          <LinkPlanSlot path={`/routes/${data.slug}/`} slot="route-summary" />
          {data.direction === 'inbound' ? <RouteMoneyBodyLink path={`/routes/${data.slug}/`} /> : null}
          {outbound ? (
            <p className="mt-4 leading-relaxed text-[#5A5A5A]">
              If this corridor is not the whole move, start with{' '}
              <Link className="font-semibold text-[#4F5BD5]" to="/service/pet-relocation-from-dubai/">
                pet relocation from Dubai
              </Link>
              . The document order sits on the{' '}
              <Link className="font-semibold text-[#4F5BD5]" to="/guides/pet-export-from-dubai/">
                pet export from Dubai guide
              </Link>
              .
            </p>
          ) : null}
          <LastVerified className="mt-4 text-xs text-[#8A8A8A]" />
        </div>
      </section>

      <section className="bg-white section-padding pt-0">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            What changes on this route
          </h2>
          {week7 ? (
            <Prose text={data.rulesSpecialties} />
          ) : (
            <p className="leading-relaxed text-[#5A5A5A]">{data.rulesSpecialties}</p>
          )}
        </div>
      </section>

      <section
        id={data.slug === 'dubai-to-uk' ? 'documents' : undefined}
        className="scroll-mt-24 bg-[#F5F6FD] section-padding"
      >
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">{rulesHeading}</h2>
          {data.direction === 'outbound' && data.destinationRules ? (
            <>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">
                Destination rules first
              </p>
              <p className="mb-4 leading-relaxed text-[#5A5A5A]">{data.destinationRules.authorityHint}</p>
              <ul className="mb-6 space-y-2">
                {data.destinationRules.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[#5A5A5A]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-8 text-sm leading-relaxed text-[#8A8A8A]">{data.destinationRules.verifyNote}</p>
              <h3 className="mb-3 text-lg font-bold text-[#2A2A2A]">UAE exit paperwork (high level)</h3>
            </>
          ) : null}
          <ul className="space-y-2">
            {data.uaeRules.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {data.uaeRules.disclaimer ? (
            <p className="mt-4 text-sm leading-relaxed text-[#8A8A8A]">{data.uaeRules.disclaimer}</p>
          ) : null}
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            What to settle before you book
          </h2>
          {week7 ? (
            <Prose text={data.difficulties} />
          ) : (
            <p className="leading-relaxed text-[#5A5A5A]">{data.difficulties}</p>
          )}
        </div>
      </section>

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            How a {countryLabel} move is planned
          </h2>
          {week7 ? <Prose text={data.howItWorks} /> : <p className="leading-relaxed text-[#5A5A5A]">{data.howItWorks}</p>}
          <p className="mt-6 text-sm leading-relaxed text-[#5A5A5A]">
            Deep-dive the documents on{' '}
            {data.direction === 'inbound' ? (
              <>
                <Link className="font-semibold text-[#4F5BD5]" to="/guides/uae-pet-import-requirements/">
                  UAE import requirements
                </Link>
                , the{' '}
                <Link className="font-semibold text-[#4F5BD5]" to="/guides/moccae-import-permit/">
                  MOCCAE 90-day import permit
                </Link>
                , and the{' '}
                <Link className="font-semibold text-[#4F5BD5]" to="/guides/rabies-titer-test-dubai/">
                  rabies titre certificate rules
                </Link>
              </>
            ) : (
              <>
                <Link className="font-semibold text-[#4F5BD5]" to="/guides/pet-relocation-cost-dubai/">
                  cost drivers
                </Link>
                {' '}and{' '}
                <Link className="font-semibold text-[#4F5BD5]" to="/guides/pet-flight-options-dubai/">
                  pet flight options from Dubai
                </Link>
              </>
            )}
            . Crate sizing sits on the{' '}
            <Link className="font-semibold text-[#4F5BD5]" to="/guides/iata-pet-crate-requirements/">
              IATA crate guide
            </Link>
            .
          </p>
        </div>
      </section>

      <RouteAirportsAirlinesBlock
        countryName={titleCaseCountry(data.countryKey)}
        direction={data.direction}
        countryAirports={data.airports}
        uaeAirports={data.uaeAirports}
        airlines={data.airlines}
        airportsNarrative={data.airportsNarrative}
        airlinesNarrative={data.airlinesNarrative}
      />

      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {data.faqs.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={<LinkedText text={f.answer} />} />
            ))}
          </div>
        </div>
      </section>

      {data.relatedLinks.length > 0 ? (
        <section className="bg-white section-padding">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Related routes and services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="flex items-center justify-between gap-2 rounded-2xl bg-[#F5F6FD] px-5 py-4 text-sm font-semibold text-[#2A2A2A] transition-colors hover:bg-[#E9ECFB]"
                >
                  {l.label} <ArrowRight className="h-4 w-4 shrink-0 text-[#4F5BD5]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <OfficialSources extra={data.extraSources} />

      {week7 || outbound ? (
        <>
          <RouteBuyerFreeHelp tone="band" buyerMessage={waMessage} direction={outbound ? 'outbound' : 'inbound'} />
          <section className="bg-white pb-10">
            <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6 lg:px-8">
              <LinkPlanSlot
                path={`/routes/${data.slug}/`}
                slot="route-cost"
                className="text-sm leading-relaxed text-[#5A5A5A]"
                linkClass="font-semibold text-[#4F5BD5] underline"
              />
              <p className="mt-3 text-sm text-[#5A5A5A]">
                Buyer WhatsApp {data.cta.whatsapp}. Email support@dubai-pet-relocation.ae.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="bg-[#4F5BD5] section-padding">
          <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6 lg:px-8">
            <h2 className="mb-3 text-[24px] font-bold text-white sm:text-[32px]">Tell us about this route</h2>
            <p className="mb-6 text-white/90">
              {data.cta.note || 'Share the pet, the route and the dates. We explain the next step and any assessment fee before paid work starts.'}{' '}
              WhatsApp {data.cta.whatsapp}. Email support@dubai-pet-relocation.ae.
            </p>
            <LinkPlanSlot
              path={`/routes/${data.slug}/`}
              slot="route-cost"
              className="mb-6 text-sm leading-relaxed text-white/90"
              linkClass="font-semibold text-white underline"
            />
            <a
              href={getWhatsAppUrl(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-5 w-5" /> {data.cta.label}
            </a>
          </div>
        </section>
      )}
    </div>
  )
}

function COUNTRY_FROM(name: string): string {
  return name.startsWith('the ') ? `from ${name}` : `from ${name}`
}

function COUNTRY_TO(name: string): string {
  return name.startsWith('the ') ? name.replace('the ', 'for the ') : `for ${name}`
}
