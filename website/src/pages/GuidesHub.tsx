import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import HubCrossLinks from '../components/HubCrossLinks.tsx'
import { BASE_URL, getWhatsAppUrl } from '../lib/seo.ts'

const GUIDES = [
  { title: 'Pet Flight Options from Dubai', to: '/guides/pet-flight-options-dubai/', image: '/images/import-hero.jpg', desc: 'Cabin, checked baggage, manifest cargo, private jet, shared charter — which mode fits.' },
  { title: 'Etihad Pet Policy (In-Cabin)', to: '/guides/etihad-pet-policy/', image: '/assets/w1-w3/british-shorthair-cat-carrier-cat-relocation-dubai.jpg', desc: 'The only UAE cabin option: fees change (confirm at booking; 2026 USD-399 promo expired). 8 kg limit, AUH arrival. Emirates/flydubai/Air Arabia cabin N/A for cats and dogs.' },
  { title: 'Pet as Checked Baggage', to: '/guides/pet-as-checked-baggage/', image: '/images/dog-crate.jpg', desc: 'When accompanied hold travel is allowed — and why Dubai arrivals usually cannot use it.' },
  { title: 'Emirates Pet Cargo & SkyCargo', to: '/guides/emirates-pet-cargo/', image: '/images/guide-iata-crate.jpg', desc: 'Educational cargo process: airline animal-charge tiers, booking window, and rates quoted per route/weight — not a cargo money page.' },
  { title: 'Pet Relocation Cost Guide', to: '/guides/pet-relocation-cost-dubai/', image: '/images/cost-hero.jpg', desc: 'What it really costs to bring a pet to Dubai — every fee, line by line.' },
  { title: 'UAE Pet Import Requirements', to: '/guides/uae-pet-import-requirements/', image: '/images/import-hero.jpg', desc: 'The full MOCCAE-aligned checklist for bringing dogs and cats to Dubai.' },
  { title: 'Banned & Restricted Dog Breeds', to: '/guides/banned-dog-breeds-dubai/', image: '/images/guide-banned-breeds.jpg', desc: 'Which breeds are prohibited or restricted under UAE federal and Dubai rules.' },
  { title: 'IATA Pet Crate Requirements', to: '/guides/iata-pet-crate-requirements/', image: '/images/guide-iata-crate.jpg', desc: 'The crate rules that keep your pet from being refused at the airport.' },
  { title: 'MOCCAE Import Permit', to: '/guides/moccae-import-permit/', image: '/images/guide-moccae.jpg', desc: 'How to get the mandatory government approval every pet needs.' },
  { title: 'Rabies Titer Test (RNATT)', to: '/guides/rabies-titer-test-dubai/', image: '/images/guide-titer.jpg', desc: 'The most critical step for high-risk countries — what it is and how to pass.' },
  { title: 'Pet Travel in Dubai Summer Heat', to: '/guides/pet-travel-summer-dubai/', image: '/images/guide-summer.jpg', desc: 'Heat embargoes, breed bans, and the safe alternatives for Dubai summers.' },
]

export default function GuidesHub() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Relocation Guides for Dubai',
    itemListElement: GUIDES.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}${g.to}`,
      name: g.title,
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Guides for Dubai | Rules, Costs & Permits',
          description:
            'Free, up-to-date guides on relocating a pet to Dubai: costs, MOCCAE import permits, banned breeds, IATA crates, the rabies titer test and summer travel.',
          canonical: `${BASE_URL}/guides/`,
          ogType: 'website',
        }}
        schemas={[itemListSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides' }]} />

      <Hero
        image="/images/import-hero.jpg"
        imageAlt="A dog and cat ready for relocation beside travel documents in a bright Dubai home"
        eyebrow="Pet Relocation Guides"
        title="Everything You Need to Move a Pet to Dubai"
        subtitle="Clear, current, owner-first guides — costs, permits, breed rules, crates and timelines, written from real Dubai relocations."
        updated="Updated June 2026"
      />

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="group overflow-hidden rounded-[20px] border border-[#E6E8F5] bg-white transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <img src={g.image} alt={g.title} width={1536} height={1024} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h2 className="mb-2 text-lg font-bold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{g.title}</h2>
                  <p className="text-sm leading-relaxed text-[#5A5A5A]">{g.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5]">
                    Read the guide <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HubCrossLinks
        heading="From a guide to the service that matches"
        intro="Guides explain the rule. Service pages take the booking. The homepage remains the category entry."
        links={[
          { to: '/', label: 'Homepage overview', note: 'Category entry — not the money-head service page' },
          { to: '/services/', label: 'Compare our service tiers', note: 'How much of the file we hold' },
          { to: '/service/pet-relocation-dubai/', label: 'Our Dubai pet relocation service', note: 'Door-to-door money page after you have read the rule' },
          { to: '/guides/pet-flight-options-dubai/', label: 'Pet flight options hub', note: 'Cabin, cargo, jet and charter compared' },
          { to: '/service/private-jet-pet-travel/', label: 'Private jet pet travel', note: 'Quote-only dedicated aircraft' },
          { to: '/service/shared-pet-charter/', label: 'Shared pet charter', note: 'Quote-only group lift' },
          { to: '/service/pet-transport-dubai/', label: 'Local pet transport and pet taxi service', note: 'Ground transfers and airport pet taxi' },
          { to: '/routes/', label: 'Routes hub', note: 'Country corridors inbound and outbound' },
          { to: '/dubai/', label: 'Dubai communities we cover', note: 'Last-mile pickup and delivery by community' },
        ]}
      />

      <OfficialSources />

      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[28px] font-bold text-white sm:text-[34px]">Not sure which guide you need?</h2>
          <p className="mx-auto mb-7 max-w-2xl text-white/80">
            Tell us your pet, route and timeline on WhatsApp and we will point you to exactly what applies — and handle the rest.
          </p>
          <a
            href={getWhatsAppUrl('Hi Dubai Pet Relocation! I have a question about the pet relocation process.')}
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
