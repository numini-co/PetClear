import { Link } from 'react-router-dom'
import {
  Shield,
  AlertTriangle,
  Clock,
  CheckCircle,
  FileCheck,
  Stethoscope,
  Syringe,
  FlaskConical,
  PawPrint,
  RefreshCw,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import LastVerified from '../components/LastVerified.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import GuideFunnelCta from '../components/GuideFunnelCta.tsx'
import RelatedLinks from '../components/RelatedLinks.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { CTA_CHECK_MOVE, waEligibility } from '../lib/conversionCopy.ts'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'
import { BASE_URL, siteConfig } from '../lib/seo.ts'

const CHECKED = '22 September 2026'
const MOCCAE_IMPORT = 'https://moccae.gov.ae/en/services/import-permit-pets'

const TITRE_RULE =
  'High-risk origins need a rabies antibody test of at least 0.5 IU/ml from a laboratory approved by the export country. The certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not need that 21-day wait. An older 90-day sample window is not on the live MOCCAE page.'

const faqData = [
  {
    question: 'How much does a rabies titre test cost in Dubai?',
    answer:
      'Lab fees are set by the clinic and the laboratory. This page does not publish an AED titre price. Ask the vet who will draw the blood. The Ministry rule, when the origin is high-risk, is a result of at least 0.5 IU/ml under the 365-day certificate conditions on the live MOCCAE page.',
  },
  {
    question: 'Can you get a titre for rabies?',
    answer:
      'Yes. A veterinary clinic can draw blood for a rabies antibody test and send it to a laboratory approved by the export authority. Import checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
  },
  {
    question: 'How much does the anti-rabies vaccine cost in the UAE?',
    answer:
      'Vaccine prices are clinic-dependent. This page does not publish a vaccine tariff. Rabies vaccination for import is not given before 12 weeks of age, and validity follows the manufacturer. Full import rules: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
  },
  {
    question: 'How does the UAE rabies titre rule work?',
    answer:
      'When the origin is high-risk, the result must be at least 0.5 IU/ml. The certificate stays valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. If a booster is given, or the vaccine lapses, the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. A valid booster does not. The live page checked on 22 September 2026 does not require the blood sample to fall inside 90 days before travel.',
  },
  {
    question: 'Is there a 90-day wait after the titre test?',
    answer:
      'No. The 90-day clock on the MOCCAE import page is the import permit, counted from issuance. It is not a wait after the laboratory result, and it is not a sample window. Confirm the live page before you lock a cargo date: [/guides/moccae-import-permit/](/guides/moccae-import-permit/).',
  },
  {
    question: 'Does my country need a titre test for Dubai?',
    answer:
      'High-risk origins do. The live page keeps a low-risk country list and it can change, so this guide does not reprint it. On 22 September 2026 the United Kingdom was on that list. The United States was not named on it. Confirm your origin on the official page before you skip the test.',
  },
  {
    question: 'What result does the UAE accept?',
    answer:
      'At least 0.5 IU/ml. The laboratory must be approved by the competent authority in the country of export. The result can be written on the health certificate instead of a separate sheet. This page does not publish a closed list of laboratory names.',
  },
  {
    question: 'What if the result is below 0.5 IU/ml?',
    answer:
      'That certificate does not meet the import test. Your vet will usually give another rabies vaccine and repeat the test. If that vaccine is a first dose, or it follows a gap, wait at least 21 days before the new test. A valid booster does not need that wait. The new certificate then follows the same 365-day conditions.',
  },
  {
    question: 'How long does the lab take?',
    answer:
      'The blood draw is a clinic visit. Shipping and laboratory time vary by country. Treat any week count you hear from a clinic as an operational estimate, not a MOCCAE service time. The published permit estimate is 1 working day, or 5 working days for a service, emotional support or medical dog.',
  },
  {
    question: 'Is a titre the same as a MOCCAE import permit?',
    answer:
      'No. The antibody test is a laboratory result for a high-risk origin. The import permit is a separate approval, valid for 90 days from issuance. A passing test does not replace an expired permit. Permit steps: [/guides/moccae-import-permit/](/guides/moccae-import-permit/). Paid filing: [/service/moccae-pet-permit/](/service/moccae-pet-permit/).',
  },
]

export default function TiterTestGuide() {
  const title = 'Rabies Titre Test Dubai | 0.5 IU/ml, 365-Day Certificate'
  const description =
    'Rabies titre test for Dubai: high-risk origins need at least 0.5 IU/ml. The certificate lasts 365 days if the vaccine stays valid and no booster is given. Permit is 90 days from issuance.'
  const canonical = `${BASE_URL}/guides/rabies-titer-test-dubai/`
  const ogImage = `${BASE_URL}/assets/og-titer-test.jpg`
  const waTitre = waEligibility({ need: 'managed move' })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: stripInternalMarkdownLinks(faq.answer) },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Rabies Titre Test for Dubai', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to prepare a rabies antibody test for Dubai pet import',
    description:
      'High-risk origin sequence: permanent microchip, rabies vaccination not before 12 weeks, antibody test of at least 0.5 IU/ml, 365-day certificate conditions, then a MOCCAE import permit valid 90 days from issuance.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Fit a permanent microchip',
        text: 'The number on the health certificate must match the chip in the animal. The live MOCCAE page does not restate an ISO label or an implant-before-vaccine order.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Rabies vaccination',
        text: 'Not before 12 weeks of age. Validity follows the manufacturer.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Wait 21 days only when that rule applies',
        text: 'A first vaccine, or a gap in vaccination, needs at least 21 days before the antibody test. A valid booster does not.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Draw the blood sample',
        text: 'A veterinarian sends the sample to a laboratory approved by the export authority.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Receive a passing result',
        text: 'The result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Apply for the import permit',
        text: 'The MOCCAE import permit is valid for 90 days from issuance. It is a separate document from the antibody certificate.',
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    dateModified: '2026-09-22',
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
  }

  return (
    <>
      <SEOHead
        meta={{
          title,
          description,
          canonical,
          ogImage,
          ogType: 'article',
        }}
        schemas={[
          faqSchema,
          breadcrumbSchema,
          howToSchema,
          articleSchema,
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: BASE_URL,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: BASE_URL,
          },
        ]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Rabies Titre Test Guide' }]} />

      <Hero
        image="/assets/w5/rabies-titer-test-rnatt-explained-diagram.png"
        imageAlt="Diagram of a rabies antibody test: blood sample, laboratory, and a 0.5 IU/ml threshold"
        eyebrow="Titre guide"
        title="Rabies Titre Test for Dubai"
        subtitle="High-risk origins need at least 0.5 IU/ml. The certificate lasts 365 days while the vaccine stays valid and no booster is given. The import permit is a separate 90 days from issuance."
        updated={`Last verified: ${CHECKED}`}
        whatsappMessage={waTitre}
        primaryLabel="Check titre timing on WhatsApp"
        secondary={{ label: 'Full import requirements', to: '/guides/uae-pet-import-requirements/' }}
      />

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What a rabies titre test is
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">
                A rabies antibody test measures whether the animal has at least 0.5 IU/ml. MOCCAE asks for it when the origin is high-risk. It is not the import permit, and it is not a quarantine clock.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">{TITRE_RULE}</p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">
                The ordered tick list is the{' '}
                <Link to="/guides/import-checklist/" className="font-semibold text-[#4F5BD5] hover:underline">
                  pet import checklist
                </Link>
                . The statutory page is{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>
                .
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[#4F5BD5]" />
                  What the live page says
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Pass mark: at least 0.5 IU/ml</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Certificate valid 365 days if the vaccine stays valid and continuous and no booster is given</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>21 days before the test after a first or lapsed vaccine, not after a valid booster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Permit validity is 90 days from issuance, and it is a different document</span>
                  </li>
                </ul>
                <LastVerified className="mt-4 text-xs text-[#8A8A8A]" date={CHECKED} />
                <p className="mt-3 text-xs text-[#8A8A8A]">
                  Source:{' '}
                  <a href={MOCCAE_IMPORT} className="underline" target="_blank" rel="noopener noreferrer">
                    MOCCAE import of pets
                  </a>
                  , checked {CHECKED}.
                </p>
              </div>
            </div>
            <div>
              <ContentImage
                src="/assets/w5/rabies-titer-test-rnatt-explained-diagram.png"
                alt="Illustration of a rabies antibody test pathway"
                caption="Illustration only. Use the text on this page. The live rule is the 365-day certificate, not an older sample-window caption."
              />
            </div>
          </div>
        </div>
      </section>

      <GuideFunnelCta
        variant="mid"
        title="Want the test dated against a real flight?"
        subtitle="This guide is free to read. WhatsApp is for a managed import after you are ready to book. We do not quote a laboratory fee on this page."
        eligibilityMessage={waTitre}
        waLabel={CTA_CHECK_MOVE}
      />

      <section id="timeline" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Order of work for a high-risk origin
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Do the antibody test before you spend the permit&apos;s 90 days. The diagram is an illustration. If it still shows an older sample window, use the text here.
            </p>
          </div>

          <ContentImage
            src="/assets/w5/rabies-titer-test-timeline-vaccination-to-travel.png"
            alt="Illustration of vaccination, an antibody test, and travel"
            caption="Illustration only. Certificate validity is 365 days under the conditions above. Permit validity is 90 days from issuance."
          />

          <div className="space-y-6 mb-10 mt-8">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Microchip and rabies vaccination</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Fit a permanent microchip. The number on the health certificate must match the animal. Vaccination is not given before 12 weeks of age. The live page does not restate an ISO standard or a rule that the chip must be implanted before the vaccine.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">21 days, only after a first or lapsed vaccine</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  If this is the first rabies vaccine, or vaccination was not continuous, wait at least 21 days before the test. If the animal already has a valid booster, the page says the test can be done without that 21-day gap.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Blood draw and laboratory</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  A veterinarian sends the sample to a laboratory approved by the export authority. The result can sit on the health certificate. Clinic turnaround is not a Ministry service time.
                </p>
                <ContentImage
                  src="/assets/w5/rabies-titer-test-blood-draw-calm-whippet-vet.jpg"
                  alt="A dog having a blood sample taken at a veterinary clinic"
                  caption="The draw is ordinary veterinary work. The certificate conditions on this page are the rule, not a caption on the photograph."
                />
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Keep the certificate in date, then apply for the permit</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  A result of at least 0.5 IU/ml can be used for 365 days while the vaccine stays valid and continuous and no booster is given. Then apply for the{' '}
                  <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                    MOCCAE import permit
                  </Link>
                  , which is valid for 90 days from issuance. Do not add a 90-day wait after the laboratory PDF arrives.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#2A2A2A] mb-4 text-center">What each interval is for</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[480px]">
                <thead>
                  <tr>
                    <th>Interval</th>
                    <th>What the checked page says</th>
                    <th>What it is not</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">21 days</td>
                    <td>Before the test, after a first or lapsed rabies vaccine</td>
                    <td>Not required after a valid booster</td>
                  </tr>
                  <tr>
                    <td className="font-medium">365 days</td>
                    <td>Certificate life if the vaccine stays valid and no booster is given</td>
                    <td>Not a sample window before travel</td>
                  </tr>
                  <tr>
                    <td className="font-medium">90 days</td>
                    <td>Import permit, counted from issuance</td>
                    <td>Not a titre rule and not a municipal deadline</td>
                  </tr>
                  <tr>
                    <td className="font-medium">1 or 5 working days</td>
                    <td>Published permit estimate; 5 days for a service, emotional support or medical dog</td>
                    <td>Not a promise that cargo will be released in that time</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <LastVerified className="mt-4 text-xs text-[#8A8A8A]" date={CHECKED} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Who needs the test</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                High-risk origins. This guide does not reprint the low-risk list, because the list can change. On {CHECKED} the United Kingdom was on the list printed on the MOCCAE import page. The United States was not named on that list, so a US origin is treated here as high-risk until the live page says otherwise.
              </p>
              <div className="warning-box">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2A2A2A]">
                    Confirm the origin on the live page before you skip the test. Route notes such as{' '}
                    <Link to="/routes/uk-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">UK to Dubai</Link>
                    {' '}and{' '}
                    <Link to="/routes/usa-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">USA to Dubai</Link>
                    {' '}follow the same check.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">If the result is low</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Below 0.5 IU/ml does not meet the test. There is no fine amount on the import page for that result. The published outcome for a non-compliant import is rejection at the owner&apos;s expense or confiscation.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Revaccinate if the vet advises it</p>
                  <p className="text-xs text-[#5A5A5A]">Not before 12 weeks of age for a first dose. Validity follows the manufacturer.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Wait 21 days only when required</p>
                  <p className="text-xs text-[#5A5A5A]">After a first vaccine or a gap. Not after a valid booster.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Repeat the test</p>
                  <p className="text-xs text-[#5A5A5A]">The new certificate follows the same 365-day conditions. It does not create a 90-day sample window.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How a file fails the test
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              These are the conditions on the page we checked. They are not a laboratory price list.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Syringe className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Vaccine too early</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Rabies vaccination is not given before 12 weeks of age. High-risk imports are not accepted under 15 weeks.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Clock className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Test drawn too soon</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">After a first or lapsed vaccine, fewer than 21 days is too soon. A valid booster is the exception.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Stethoscope className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Wrong laboratory status</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The laboratory must be approved by the export authority. This page does not name a private lab as if it were official.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Shield className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Booster after the test</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">If a booster is given, the 365-day certificate condition ends and the test is repeated.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <FlaskConical className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Result under 0.5 IU/ml</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The page does not describe a waiver or a fine amount for a low result.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <FileCheck className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Chip number mismatch</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The number on the health certificate must match the chip in the animal.</p>
            </div>
          </div>

          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              <h3 className="text-xl font-bold text-[#2A2A2A]">Read this guide, or book the import</h3>
            </div>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              Stay on this page if you are timing the test yourself. If you want the import handled, open{' '}
              <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet import to Dubai
              </Link>
              . Permit filing on its own is{' '}
              <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE permit assistance
              </Link>
              . WhatsApp +971504782999 and support@dubai-pet-relocation.ae are for a managed file, not a free rewrite of the Ministry page.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#2A2A2A] mb-6 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={<p><LinkedText text={faq.answer} /></p>} />
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        heading="Related guides and services"
        intro="The titre sits inside the import file. A managed import is a separate service."
        path="/guides/rabies-titer-test-dubai/"
      />

      <OfficialSources
        checkedLabel={`Checked ${CHECKED} against the MOCCAE import of pets page. Veterinary review was not supplied.`}
        extra={[{ label: 'MOCCAE import of pets', href: MOCCAE_IMPORT }]}
      />

      <GuideFunnelCta
        variant="end"
        title="Need the test mapped to a flight?"
        subtitle="Send origin, vaccination date and a target month on WhatsApp if you want a managed import. This guide stays free. We do not invent a laboratory fee."
        eligibilityMessage={waTitre}
        waLabel={CTA_CHECK_MOVE}
      />
    </>
  )
}
