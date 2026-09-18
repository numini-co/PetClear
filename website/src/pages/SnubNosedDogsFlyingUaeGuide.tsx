import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle, MessageCircle } from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import LastVerified from '../components/LastVerified.tsx'
import SnippetAnswer from '../components/SnippetAnswer.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, LOGO_URL, getWhatsAppUrl } from '../lib/seo.ts'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import { MANIFEST_CARGO, PERMIT_FEE_VERIFY, PERMIT_VALIDITY, TITER_SAMPLE_RULE } from '../lib/regulatory.ts'

const PATH = '/guides/snub-nosed-dogs-flying-uae/'
const HERO_IMG = '/assets/w9/snub-nosed-dogs-flying-uae-french-bulldog-roomy-crate.jpg'
const HERO_IMG_640 = '/assets/w9/snub-nosed-dogs-flying-uae-french-bulldog-roomy-crate-640.jpg'
const WA_ELIG =
  'Hi Dubai Pet Relocation! I want to Check Pet Eligibility for a snub-nosed / brachycephalic pet flying to Dubai. Breed, weight, origin, and target month:'

const snippetQuestion = 'Can French bulldogs, pugs and other flat-faced pets fly to Dubai?'
const snippetAnswer =
  'Sometimes — eligibility is carrier + date + breed, not a blog promise. Airlines extra-scrutinise snub-nosed (brachycephalic) dogs and some cats for airway risk, crate size and heat. IATA wants the crate 10% larger than the standard calc and advises against listed snub-nose types in the hot season. Confirm the live policy before you book.'

const faqData = [
  {
    q: 'Can French bulldogs fly to Dubai?',
    a: 'A French bulldog can be legal to enter the UAE and still fail airline acceptance. Emirates-style inbound files usually travel as manifest cargo into Dubai; cabin is not the default. Confirm the live breed note, season, and crate size on the operating carrier — treat any published snub-nosed list as confirm-current-policy. WhatsApp +971504782999 to Check Pet Eligibility.',
  },
  {
    q: 'Can pugs fly to Dubai?',
    a: 'Pugs are a classic brachycephalic type. IATA lists pugs among snub-nose dogs it advises against transporting in the hot season, and several carriers add their own breed screens. Legal entry is a different question from whether the cargo desk will accept the crate on your date. Confirm-live with the airline, then size the crate to the IATA +10% rule. Summer timing: [pet travel in Dubai summer heat](/guides/pet-travel-summer-dubai/).',
  },
  {
    q: 'Do snub-nosed dogs need a bigger crate?',
    a: 'Yes. IATA Live Animals Regulations require a container 10% larger than the standard calculation for snub-nosed (brachycephalic) breeds — more length, width and height so the animal can stand, turn and lie down with extra airflow. Work the standard formula first, then add 10% and round up. Hardware and ventilation still have to pass CR1. Full crate rules: [IATA pet crate requirements](/guides/iata-pet-crate-requirements/).',
  },
  {
    q: 'Can I fly a Persian cat to Dubai?',
    a: 'Persians and similar exotic types share the same shortened-airway risk as snub-nosed dogs. No domestic cat breed is on the UAE federal dog-ban list, but a carrier may still refuse or restrict a Persian on heat or breed grounds — confirm-current-policy. Cargo is the typical Dubai arrival path. Cat-specific planning: [cat relocation to Dubai](/cat-relocation-to-dubai/). Check Pet Eligibility before you buy a ticket.',
  },
  {
    q: 'Why do airlines restrict brachycephalic breeds in summer?',
    a: 'Flat-faced pets cool less efficiently through a shortened airway. Ground handling — not the cruise-altitude hold — is where heat and stress stack. IATA advises against transporting listed snub-nose types (boxers, pugs, bulldogs, Pekingese) in the hot season. This page does not re-own embargo calendars; use the [summer travel guide](/guides/pet-travel-summer-dubai/) and confirm the live carrier window. Prefer autumn when heat rules bite.',
  },
  {
    q: 'Is a banned breed the same as a snub-nosed airline ban?',
    a: 'No. A UAE banned or restricted dog is a legal-entry problem under federal and Dubai rules. A snub-nosed airline ban is a flight-physiology and acceptance decision — the breed can be legal and still be refused at cargo. Do not treat this page as the federal list. Legal breeds: [banned and restricted dog breeds in Dubai](/guides/banned-dog-breeds-dubai/). Airline acceptance stays here.',
  },
]

export default function SnubNosedDogsFlyingUaeGuide() {
  const canonical = `${BASE_URL}${PATH}`
  const title = 'Snub-Nosed Dogs Flying to Dubai | Brachycephalic Pet Rules'
  const description =
    'Can French bulldogs, pugs and Persians fly to Dubai? IATA +10% crate rule, airline checks, summer risk — confirm eligibility before you book.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Snub-nosed dogs flying to the UAE', item: canonical },
    ],
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${BASE_URL}${HERO_IMG}`,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(f.a) },
    })),
  }

  return (
    <div>
      <SEOHead
        meta={{
          title,
          description,
          keywords:
            'snub-nosed dog flying to Dubai, brachycephalic breeds flying UAE, French bulldog fly to Dubai, can pugs fly to Dubai, English bulldog relocation Dubai, flying Persian cat to Dubai',
          canonical,
          ogType: 'article',
          ogImage: `${BASE_URL}${HERO_IMG}`,
        }}
        schemas={[articleSchema, faqSchema, breadcrumbSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Snub-nosed dogs flying UAE' }]} />

      <Hero
        image={HERO_IMG}
        imageAlt="Calm French bulldog sitting in a roomy open travel crate with visible ventilation"
        eyebrow="Breed / flight-safety guide"
        title="Snub-Nosed Dogs Flying to Dubai: What Airlines Actually Check"
        subtitle="Airway risk, crate size and heat — eligibility is carrier, date and breed, not a blog promise."
        updated="Updated September 2026"
        primaryLabel="Check Pet Eligibility"
        whatsappMessage={WA_ELIG}
        secondary={{ label: 'IATA crate rules', to: '/guides/iata-pet-crate-requirements/' }}
        imageWidth={1280}
        imageHeight={720}
        imageLoading="eager"
        sizes="(max-width: 640px) 640px, 1280px"
        srcSet={`${HERO_IMG_640} 640w, ${HERO_IMG} 1280w`}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Snub-nosed (brachycephalic) dogs and some cats face extra airline scrutiny when you plan a UAE flight. The
            shortened muzzle makes heat and stress harder to manage. Acceptance staff look at the live breed list, the
            crate, and the season — not at a relocator’s homepage. This guide is the flight-physiology and airline-acceptance
            page. It does not own the federal banned-breed list, the summer embargo calendar, or airline fee tables.
          </p>
          <p className="mb-6 leading-relaxed text-[#5A5A5A]">
            If the breed is legal to enter and the carrier will take the animal on your date, we can hold the file. If
            either check fails, we say so before anyone pays cargo. Check Pet Eligibility on WhatsApp{' '}
            <a href={getWhatsAppUrl(WA_ELIG)} className="font-semibold text-[#4F5BD5] hover:underline">
              +971 50 478 2999
            </a>
            .
          </p>
        </div>
      </section>

      <GuideFunnelCta
        variant="mid"
        title="Airline may accept — need the dog relocation file?"
        subtitle="This page owns flight physiology and carrier acceptance, not the federal breed list. DIY the airline check here. If the breed is legal and the carrier will fly, open dog relocation or permit assistance. Confirm portal fees on the official site — we do not invent amounts."
        eligibilityMessage={WA_ELIG}
        waLabel="Check Pet Eligibility"
        links={[
          { to: '/service/dog-relocation-dubai/', label: 'Dog relocation service', icon: 'dog' },
          { to: '/dog-relocation-to-dubai/', label: 'Dog relocation to Dubai', icon: 'package' },
        ]}
      />

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            What “snub-nosed” means for brachycephalic breeds flying UAE
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            “Snub-nosed” is the airline shorthand for a flat face and a shortened muzzle. Veterinarians say
            brachycephalic. The animal still breathes and cools through that short airway, so cargo desks treat the type
            as higher-risk even when the destination law allows the breed.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Common dog examples — not an exhaustive list, and not a legal-entry list — include French bulldogs, pugs,
            English bulldogs, Boston terriers, Pekingese and boxers. On the cat side, Persians and exotic/flat-faced types
            show up on the same physiology conversation. Individual carriers publish their own named lists; those lists
            change. Confirm-current-policy on the operating airline before you treat any blog row as final.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Legal entry and airline acceptance are different tests. A dog can be allowed under UAE federal and Dubai
            rules and still be refused at the cargo desk. For the federal and municipality breed list, use{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned and restricted dog breeds in Dubai
            </Link>
            . This URL stays on flight physiology and acceptance.
          </p>
          <ContentImage
            src="/assets/w9/brachycephalic-airway-comparison-diagram.png"
            alt="Why snub-nosed breeds overheat: airway comparison between flat-faced and standard-muzzle dogs"
            caption="Educational comparison only — not a veterinary diagnosis. Shorter airway, less efficient cooling, higher heat and stress sensitivity."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            IATA rules that matter: +10% crate and the hot-season advisory
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Two IATA Live Animals facts sit on this page. Everything else about bolts, bowls and labels belongs on the{' '}
            <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              IATA pet crate requirements
            </Link>{' '}
            guide — we deep-link rather than re-own crate primaries.
          </p>
          <ul className="mb-6 space-y-2">
            {[
              'Container Requirement 1 (CR1): the animal must stand and sit erect, turn around normally while standing, and lie in a natural position (source: IATA).',
              'Snub-nosed (brachycephalic) breeds require a container 10% larger than the standard calculation (source: IATA).',
              'IATA advises against transporting listed snub-nose dogs — boxers, pugs, bulldogs, Pekingese — in the hot season because they regulate body temperature poorly (source: IATA).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 text-lg font-bold text-[#2A2A2A]">Worked sizing example (illustrative)</h3>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Measure the dog standing naturally, then apply the IATA container formula, then add 10%. Replace these
            figures with your animal — they are a walkthrough, not a guaranteed commercial crate SKU.
          </p>
          <div className="-mx-5 mb-6 overflow-x-auto px-5 pb-16 sm:mx-0 sm:px-0 sm:pb-0">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Step</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Formula (IATA)</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">
                    Example Frenchie
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Measure</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    A = nose to base of tail; B = ground to elbow; C = widest point; D = standing height to head or ear
                    tip
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">A 42 cm · B 18 cm · C 24 cm · D 33 cm</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Standard calc</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Length = A + ½B; width = C × 2; height = D + bedding
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    51 cm × 48 cm × 36 cm (3 cm bedding)
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Snub-nosed +10%</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Multiply each internal dimension by 1.10, then round up
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">
                    57 cm × 53 cm × 40 cm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Some cargo desks describe the same rule as “one commercial size larger.” That is a shop-floor translation of
            IATA’s +10%, not a different first-party formula. If the handler measures even 1 cm short, the animal is
            offloaded. Hardware, ventilation and water bowls still follow CR1 — see the crate guide for that checklist.
          </p>
          <ContentImage
            src="/assets/w9/snub-nosed-larger-crate-rule-comparison-diagram.png"
            alt="The larger-crate rule for snub-nosed dogs flying to or from the UAE: standard IATA fit versus +10%"
            caption="IATA: snub-nosed container 10% larger than the standard calculation. Confirm the live airline measurement at acceptance."
          />
          <LastVerified
            date="14 September 2026"
            note="IATA +10% container rule and hot-season advisory cited from IATA Live Animals / pets guidance. Confirm crate acceptance with the operating carrier."
          />
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Airline matrix — confirm-live before you book
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Rows below are a planner, not a first-party breed list. We do not publish contested Emirates named-breed
            tables as fact. We do not invent airline AED. Fees stay confirm-on-portal / confirm-at-booking. Open the
            child airline guides for mode depth; come back here for the snub-nosed question.
          </p>
          <div className="-mx-5 mb-6 overflow-x-auto px-5 pb-16 sm:mx-0 sm:px-0 sm:pb-0">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#E9ECFB]">
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Carrier</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">Cabin?</th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">
                    Cargo / baggage?
                  </th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">
                    Snub-nosed note
                  </th>
                  <th className="border border-[#E2E5F6] px-4 py-3 text-left font-semibold text-[#2A2A2A]">
                    Source confidence
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Emirates</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    No for cats/dogs into Dubai (falcons / guide dogs are the published cabin exceptions)
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Cargo-default into Dubai (SkyCargo / manifest)
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Snub restrictions reported on secondary pages — confirm-current-policy on the live Emirates pets /
                    SkyCargo note
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Secondary / confirm-live</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Etihad</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Cabin product may exist into AUH when size and policy fit
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Cargo pathway also used</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Size fit is not a breed waiver — still confirm the live breed note
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Confirm-live</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">flydubai</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    No for cats/dogs (falcons-only cabin — source: flydubai)
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Cargo only if the route and desk accept the animal
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Secondary sources say snub-nosed and listed breeds are not accepted — verify
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Secondary / confirm-live</td>
                </tr>
                <tr className="bg-[#F5F6FD]">
                  <td className="border border-[#E2E5F6] px-4 py-3 font-semibold text-[#2A2A2A]">Other</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Confirm with the operating carrier</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Confirm with the operating carrier</td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">
                    Connecting carriers add their own heat and breed screens — confirm each sector
                  </td>
                  <td className="border border-[#E2E5F6] px-4 py-3 text-[#5A5A5A]">Confirm-live</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Mode depth lives on the child pages:{' '}
            <Link to="/guides/emirates-pet-cargo/" className="font-semibold text-[#4F5BD5] hover:underline">
              Emirates pet cargo
            </Link>
            ,{' '}
            <Link to="/guides/etihad-pet-policy/" className="font-semibold text-[#4F5BD5] hover:underline">
              Etihad pet policy
            </Link>
            , and the chooser on{' '}
            <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet flight options Dubai
            </Link>
            . We coordinate the file. We are not the airline and we do not sell tickets.
          </p>
          <div className="mb-4 flex items-start gap-3 rounded-[20px] border border-[#E8D7B0] bg-[#FDF6E8] p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C89F5A]" />
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Confirm-current-policy / confirm-live: print a screenshot of the carrier’s pets page for your travel month.
              Secondary blogs disagree on named Emirates breed lists. This site will not elevate those lists to
              first-party fact.
            </p>
          </div>
          <LastVerified
            date="14 September 2026"
            note="Airline breed rows labelled secondary or confirm-live. Re-check Emirates, Etihad and flydubai first-party pages before booking."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Summer and heat — summary only, then the embargo guide
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            IATA’s hot-season advisory is the first-party heat rule this page will state: do not plan listed snub-nose
            types through the hottest window if you can move the date. Ground handling is the stress point. We do not
            invent Celsius thresholds here. Any ground-temperature numbers you see on other pages are secondary unless
            the carrier publishes them — label them that way and confirm-live.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            When a carrier’s heat rules bite, prefer an autumn window over forcing a mid-summer cargo slot. Early-morning
            talk, alternative hubs and “wait until October” belong on the embargo page, not as a second calendar on this
            URL.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Full summer / heat embargo walkthrough:{' '}
            <Link to="/guides/pet-travel-summer-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet travel in Dubai summer heat
            </Link>
            . This section is a summary plus that deep-link — we do not re-own the embargo primary.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Flying a Persian cat to Dubai — same physiology, different lists
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Persians, Himalayans and exotic shorthairs share the shortened-airway problem. Coat length adds heat load.
            Carrier lists may name Persians even when no UAE federal cat-breed ban applies. Treat every named-cat row as
            confirm-current-policy.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Cabin into the UAE, when it exists, is an Etihad-into-AUH conversation for small pets that meet weight and
            carrier limits — still confirm breed. Most Dubai International arrivals remain cargo. Species planning:{' '}
            <Link to="/cat-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              cat relocation to Dubai
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Inbound UAE paperwork — short, then the import spine
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A breed may be legal and still fail airline acceptance. Do both checks. If the animal is entering the UAE:{' '}
            {PERMIT_VALIDITY} {TITER_SAMPLE_RULE} Vaccines, microchip-before-rabies and a government-endorsed health
            certificate still apply. {MANIFEST_CARGO}
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">{PERMIT_FEE_VERIFY}</p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Checklist depth:{' '}
            <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              UAE pet import requirements
            </Link>
            . Dog-specific inbound living notes:{' '}
            <Link to="/dog-relocation-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              dog relocation to Dubai
            </Link>
            . This page will not reprint those tables.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Decision checklist</h2>
          <ul className="mb-6 space-y-3">
            {[
              'Confirm the exact breed (and mix notes) on the operating airline’s live pets page for your travel month — confirm-current-policy.',
              'Measure the animal, run the standard IATA calc, then apply +10% and round up. Hardware still has to pass CR1.',
              'Avoid the peak heat window when IATA or the carrier advises against listed snub-nose types; prefer autumn when heat rules bite.',
              'Separate legal entry (banned-breeds guide) from airline acceptance (this page).',
              'Get Route Checked / Check Pet Eligibility on WhatsApp before you buy a passenger ticket or a crate you cannot return.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-3 leading-relaxed text-[#5A5A5A]">Related pages:</p>
          <ul className="space-y-2">
            <li>
              <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                IATA pet crate requirements
              </Link>{' '}
              — CR1 hardware and standard sizing
            </li>
            <li>
              <Link to="/guides/pet-travel-summer-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet travel in Dubai summer heat
              </Link>{' '}
              — embargo calendar and alternatives
            </li>
            <li>
              <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                banned and restricted dog breeds
              </Link>{' '}
              — legal entry, not airline physiology
            </li>
            <li>
              <Link to="/guides/" className="font-semibold text-[#4F5BD5] hover:underline">
                all Dubai pet relocation guides
              </Link>
            </li>
            <li>
              <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet relocation Dubai
              </Link>{' '}
              — door-to-door if the breed is accepted
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={[{ label: 'IATA — travelling with pets (LAR / CR1)', href: 'https://www.iata.org/en/programs/cargo/live-animals/pets/' }]}
      />

      <section className="section-padding bg-[#4F5BD5]">
        <div className="mx-auto max-w-[800px] px-5 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-white sm:text-[30px]">Check Pet Eligibility before you book</h2>
          <p className="mb-6 text-base leading-relaxed text-white/80">
            Send breed, weight, origin and a target month. We confirm airline acceptance and the +10% crate path — we do
            not invent fees. Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>
            . WhatsApp +971 50 478 2999.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={getWhatsAppUrl(WA_ELIG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-[#4F5BD5] hover:bg-white/90"
            >
              Check Pet Eligibility
            </a>
            <a
              href={getWhatsAppUrl(WA_ELIG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-sm font-semibold text-white hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp +971 50 478 2999
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
