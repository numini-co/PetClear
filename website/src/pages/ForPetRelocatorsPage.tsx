import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle,
  FileCheck,
  Handshake,
  MessageCircle,
  Network,
  Plane,
  Shield,
  Users,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import LinkedText from '../components/LinkedText.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import AirportNetworkRoles from '../components/AirportNetworkRoles.tsx'
import { BASE_URL, getWhatsAppUrl, siteConfig } from '../lib/seo.ts'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'

const PAGE_PATH = '/for-pet-relocators/'
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`
const TITLE = 'Pet Relocation Partner Dubai | UAE Playbooks & Network'
const H1 = 'Pet Relocation Partner Dubai — Playbooks & Network'
const META =
  'Pet relocation partner Dubai program: UAE playbooks for peers, corridor tips, and network access. Not for pet owners.'
const WA_MESSAGE =
  "Hi Dubai Pet Relocation — I'm a pet relocator interested in your education / network access."

const faqs = [
  {
    q: 'Do you white-label UAE arrival work for another relocator’s client?',
    a: 'Sometimes, when the file is a genuine peer handoff and the owner already has an origin coordinator. We brief airport-side roles and line-check the UAE papers. We do not pretend to be your brand, and we do not take over the owner relationship unless you ask us to in writing. WhatsApp the file notes — not a consumer quote form.',
  },
  {
    q: 'If we collaborate, who owns the client?',
    a: 'You do, unless the owner writes to us first as a household moving a pet. Peer work is a briefing and document check. Consumer door-to-door sits on [pet relocation Dubai](/service/pet-relocation-dubai/). Corporate mobility teams sit on [corporate pet relocation](/service/corporate-pet-relocation/). We will not poach a file you introduced.',
  },
  {
    q: 'Is this a paid partner programme with logos and a roster count?',
    a: 'No. There is no public partner logo wall, no invented membership count, and we do not claim IPATA membership as ours. Access means playbooks, corridor checks, and role-level airport language. Live collaboration is quoted on WhatsApp after we see the corridor — not a published B2B rate card.',
  },
  {
    q: 'Can you run the whole move so we only do the origin vet?',
    a: 'We can coordinate the UAE-side sequence and brief cargo acceptance or arrival clearance roles. We still do not operate aircraft or act as the airline. Cabin versus cargo stays the carrier’s live policy. If the owner wants a single household quote, send them to the owner service page rather than stretching this peer track.',
  },
  {
    q: 'What should I send on WhatsApp to start a peer conversation?',
    a: 'Species, breed, weight, origin or destination city, target month, and whether you already hold the owner relationship. Say you are a relocator asking for education or network access so we do not treat the thread as a consumer quote. Email support@dubai-pet-relocation.ae works if WhatsApp is blocked.',
  },
]

export default function ForPetRelocatorsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'For pet relocators', item: PAGE_URL },
    ],
  }
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: TITLE,
    description: META,
    url: PAGE_URL,
    isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: BASE_URL },
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
          title: TITLE,
          description: META,
          canonical: PAGE_URL,
          ogType: 'website',
        }}
        schemas={[webPageSchema, breadcrumbSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'For pet relocators' }]} />

      <Hero
        image="/images/how-it-works-hero.jpg"
        imageAlt="Document checklist and travel crate used when coordinating a pet move through Dubai"
        eyebrow="Partner network & education"
        title={H1}
        subtitle="Playbooks for MOCCAE timing, titer sample windows, crates and airline modes — plus a roles-only airport map. Peer education. WhatsApp to talk."
        primaryLabel="WhatsApp as a relocator"
        whatsappMessage={WA_MESSAGE}
        secondary={{ label: 'How coordination works', to: '/how-it-works/' }}
      />

      {/* 1 — Intro */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Education and network access, not a consumer quote page
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#5A5A5A]">
            <p>
              If you already move dogs and cats for a living, this page is the pet relocation partner Dubai
              track: corridor playbooks and a working airport-role map so your UAE file matches how pets actually
              clear. It is not a second homepage for households, and it is not a corporate HR landing page.
            </p>
            <p>
              Dubai Pet Relocation is a coordinator. We line-check documents and timelines and brief the right
              airport-side roles. We do not operate aircraft, we do not claim airline or airport affiliation, and
              we do not publish a named-handler roster. Live collaboration stays quote-only on WhatsApp
              (+971504782999) or email {siteConfig.email}.
            </p>
            <p>
              Owners who want door-to-door should use the{' '}
              <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet relocation Dubai
              </Link>{' '}
              service page. Mobility teams should use{' '}
              <Link to="/service/corporate-pet-relocation/" className="font-semibold text-[#4F5BD5] hover:underline">
                corporate pet relocation
              </Link>
              . The process we teach is the same sequence we walk on{' '}
              <Link to="/how-it-works/" className="font-semibold text-[#4F5BD5] hover:underline">
                how it works
              </Link>
              , written here for peers rather than first-time pet owners. The{' '}
              <Link to="/about/" className="font-semibold text-[#4F5BD5] hover:underline">
                about
              </Link>{' '}
              page holds the roles-only airport network in full.
            </p>
            <p>
              Most peer threads fail for the same three reasons a household file fails: the MOCCAE permit is
              issued too early and dies before the crate moves; a titer is drawn too early and treated as a
              sit-after-the-lab project; or someone books a passenger seat and assumes cabin into Dubai. We
              teach the clocks and the role map so you can brief your own client without copying a consumer
              essay onto a professional file.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — What we teach */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">What we teach</span>
            <h2 className="mt-3 mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
              Four playbooks — teach and link, not full rule tables
            </h2>
            <p className="text-base leading-relaxed text-[#5A5A5A]">
              We do not reprint Ministry tables or invent a closed country list. Each card points at the live
              guide. Confirm contested wording on the official MOCCAE portal and the carrier’s current pet page
              before you brief an owner.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <FileCheck className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">MOCCAE import permit — 90 days</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                Inbound UAE files need a Ministry import permit. Validity is 90 days from issuance. The
                animal must enter inside that window. That clock is not the titer sample window. We teach how
                the permit sits next to origin health papers and cargo dates — we do not paste a fee schedule
                on this page.
              </p>
              <Link to="/guides/moccae-import-permit/" className="text-sm font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE import permit guide
              </Link>
            </article>
            <article className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Shield className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Titer sample window, not a post-draw sit</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                When an RNATT is required, the blood sample must be taken within 90 days before travel and read
                at least 0.5 IU/ml. That is a pre-travel sample window. Teaching a mandatory wait after the draw
                is how files miss the window. Confirm whether the origin is currently titer-required on the
                portal.
              </p>
              <Link
                to="/guides/rabies-titer-test-dubai/"
                className="text-sm font-semibold text-[#4F5BD5] hover:underline"
              >
                Rabies titer test guide
              </Link>
            </article>
            <article className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <BookOpen className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">IATA crate hardware</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                Manifest cargo into the UAE uses a hard IATA Live Animals crate — door hardware, ventilation,
                and sizing the animal can stand, turn, and lie down in. Soft cabin carriers are a different
                product. We walk the check, not a brand catalogue.
              </p>
              <Link
                to="/guides/iata-pet-crate-requirements/"
                className="text-sm font-semibold text-[#4F5BD5] hover:underline"
              >
                IATA pet crate requirements
              </Link>
            </article>
            <article className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Plane className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Airline mode — confirm, do not assume cabin</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                UAE entry for most dogs and cats is manifest cargo. A European cabin product does not authorise
                cabin into Dubai. Emirates itineraries that end in Dubai generally stay cargo — confirm the live
                policy. Compare modes on the flight-options hub; do not treat a passenger ticket as a live-animal
                booking.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                <Link to="/guides/emirates-pet-cargo/" className="text-[#4F5BD5] hover:underline">
                  Emirates pet cargo
                </Link>
                <Link to="/guides/pet-flight-options-dubai/" className="text-[#4F5BD5] hover:underline">
                  Pet flight options
                </Link>
              </div>
            </article>
          </div>
          <p className="mt-8 text-base leading-relaxed text-[#5A5A5A]">
            The nationwide import checklist still lives on{' '}
            <Link
              to="/guides/uae-pet-import-requirements/"
              className="font-semibold text-[#4F5BD5] hover:underline"
            >
              UAE pet import requirements
            </Link>
            . Use it as the owner-facing rule page; this page stays the peer overlay.
          </p>
        </div>
      </section>

      {/* 3 — What you get */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">What you get</span>
            <h2 className="mt-3 mb-3 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
              Playbooks, corridor checks, and pathways — quote-only
            </h2>
            <p className="text-base leading-relaxed text-[#5A5A5A]">
              Access is process language. There are no partner logos, no invented network counts, and no fee
              numerals on this page. If a live file needs a number, that is a WhatsApp quote after we see
              species, weight, and dates.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[20px] bg-[#F5F6FD] p-7">
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Playbooks</h3>
              <p className="text-base leading-relaxed text-[#5A5A5A]">
                Shared sequencing notes: microchip before the rabies shot used for import, permit validity
                against the cargo date, titer sample inside the 90-day pre-travel window, crate check before
                the cargo desk. Written for someone who already knows origin export, not a first-time owner
                essay. We will not reprint a Ministry table here. If a rule is contested, the portal wins and
                the guide is the teach-and-link layer.
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-7">
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Corridor checks</h3>
              <p className="text-base leading-relaxed text-[#5A5A5A]">
                We read the file against the actual origin or destination gateway — DEL or BOM, FRA or MUC, SIN,
                AMS, MNL, SYD — and the UAE clearance airport the itinerary really uses. Seed airline modes stay
                unverified until you confirm the carrier page for that OD. A UK LHR example in the about blurb
                is a role-lens illustration, not a claim that we staff a named desk at Heathrow.
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-7">
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Pathways, roles only</h3>
              <p className="text-base leading-relaxed text-[#5A5A5A]">
                Export vetting coordination, cargo acceptance liaison, arrival clearance coordination, and
                inter-airport transfer briefing. Those are roles, not people. We will not invent a preferred
                handler brand or put a personal name on a card.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AirportNetworkRoles variant="compact" showRelocatorsLink={false} />

      {/* 4 — Who it's for + forks */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Who it is for</span>
          <h2 className="mt-3 mb-8 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
            Peers, owners, and employers are three different doors
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Users className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Peer relocators</h3>
              <p className="text-base leading-relaxed text-[#5A5A5A]">
                You already hold an origin or destination file and need UAE-side timing, cargo-path language, or
                a second set of eyes on the permit and titer window. Stay on this page. WhatsApp as a relocator.
              </p>
            </div>
            <div className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Handshake className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Pet owners</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                If you are moving your own dog or cat, this is the wrong door. The owner service page explains
                coordination, documents, and a household quote thread.
              </p>
              <Link
                to="/service/pet-relocation-dubai/"
                className="text-sm font-semibold text-[#4F5BD5] hover:underline"
              >
                Owner service — pet relocation Dubai
              </Link>
            </div>
            <div className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E9ECFB]">
                <Network className="h-5 w-5 text-[#4F5BD5]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2A2A2A]">Employers and mobility teams</h3>
              <p className="mb-4 text-base leading-relaxed text-[#5A5A5A]">
                If you are briefing multiple employee pets, use the corporate track. This page will not take
                over HR language or publish a company rate card.
              </p>
              <Link
                to="/service/corporate-pet-relocation/"
                className="text-sm font-semibold text-[#4F5BD5] hover:underline"
              >
                Corporate pet relocation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — How it works */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">How it works</span>
          <h2 className="mt-3 mb-8 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px] lg:text-[36px]">
            Three steps — education first, then a file if you want one
          </h2>
          <ol className="space-y-6">
            {[
              {
                n: '1',
                t: 'Read the playbooks',
                d: 'Work the four guides above against your corridor. If the owner already has papers, check the permit window and the titer sample date before anyone buys a crate or a passenger seat. A complete origin export certificate that names the wrong UAE arrival airport is still a broken file.',
              },
              {
                n: '2',
                t: 'Map the airport roles',
                d: 'Name the origin IATA and the UAE clearance IATA. Brief export vetting, cargo acceptance, arrival clearance, or an inter-airport transfer only when the itinerary actually uses two UAE airports. Do not invent a second gateway because a cousin lives nearer.',
              },
              {
                n: '3',
                t: 'WhatsApp if you want a peer check',
                d: 'Send the relocator prefill, species, and dates. We reply with a corridor read or a collaboration scope. We do not send a consumer package menu. Owner-facing process detail stays on how it works. If the owner should own the thread, say so in the first message so we do not split the relationship.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F5BD5] text-sm font-bold text-white">
                  {step.n}
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#2A2A2A]">{step.t}</h3>
                  <p className="text-base leading-relaxed text-[#5A5A5A]">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — Honesty strip */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <div className="rounded-[20px] border border-[#4F5BD5]/15 bg-white p-8">
            <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Honesty strip</h2>
            <ul className="space-y-3 text-base leading-relaxed text-[#5A5A5A]">
              {[
                'We are a coordinator. We do not fly the crate, run a quarantine kennel, or employ the Ministry vet who releases the animal.',
                'We do not claim airline, airport, or IPATA membership as a Dubai Pet Relocation credential.',
                'Cabin eligibility is never promised. Confirm current policy on the carrier page for the exact origin-destination pair.',
                'No fee numerals, no B2B rate card, and no “best company” language on this page. Live work is quote-only.',
                'Personal names and invented handler brands stay off the network cards. Roles only.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-[#4F5BD5]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 — Peer FAQ */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Peer questions — collaboration, not cost
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* 8 — Final WA CTA */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px] lg:text-[36px]">
            Talk as a relocator — not a household quote
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/80">
            Prefill says you want education or network access. We will not treat that thread as a consumer
            package request. WhatsApp +971504782999 · {siteConfig.email}
          </p>
          <a
            href={getWhatsAppUrl(WA_MESSAGE, 'for-pet-relocators')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1DA851] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp as a relocator
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70">
            <Link to="/about/" className="hover:text-white">
              About the coordinator model
            </Link>
            <Link to="/how-it-works/" className="hover:text-white">
              How it works
            </Link>
            <Link to="/guides/moccae-import-permit/" className="hover:text-white">
              MOCCAE guide
            </Link>
            <Link to="/service/pet-relocation-dubai/" className="hover:text-white">
              Owner service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
