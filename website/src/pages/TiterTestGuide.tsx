import { Link } from 'react-router-dom'
import {
  Shield,
  AlertTriangle,
  Clock,
  CheckCircle,
  HelpCircle,
  FileCheck,
  Stethoscope,
  Syringe,
  FlaskConical,
  PawPrint,
  RefreshCw,
  MapPin,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import FAQItem from '../components/FAQItem.tsx'
import ContentImage from '../components/ContentImage.tsx'
import LastVerified from '../components/LastVerified.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { BASE_URL, siteConfig } from '../lib/seo.ts'
import {
  EXEMPT_LIST_HOLD,
  LAST_VERIFIED_LABEL,
  MICROCHIP_BEFORE_RABIES,
  TITER_SAMPLE_RULE,
  TITER_THRESHOLD,
} from '../lib/regulatory.ts'

const faqData = [
  {
    question: 'How does the UAE rabies titer timing actually work?',
    answer:
      'When an RNATT is required, the blood sample must be taken within 90 days before travel and the result must be at least 0.5 IU/ml. That is a sample-timing window before the flight — not a 90-day waiting period after the lab result arrives. Draw the sample too early and it can age out of the 90-day window; draw it too soon after vaccination and antibody levels may still be low.',
  },
  {
    question: 'Can I skip or shorten a 90-day wait after the titer test?',
    answer:
      'There is no 90-day wait after the test to skip. The locked rule is that the sample used for the RNATT must fall within 90 days before travel. Confusing that window with a post-test sit is how people delay a move by months they did not need to delay. Confirm current wording on the official MOCCAE page before you lock a cargo date.',
  },
  {
    question: 'Does my country need a titer test for Dubai?',
    answer:
      'MOCCAE maintains a rabies-controlled / exempt-country list that decides whether an RNATT is required. We do not publish an unverified country list on this page. Confirm your origin on the official portal, or message us with the origin country and we will check it with you against the live list.',
  },
  {
    question: 'What result does the UAE accept?',
    answer:
      'The minimum acceptable result is 0.5 IU/ml. The sample should be drawn at least 21 days after a valid rabies vaccination (pet at least 12 weeks old at vaccination, microchip already implanted). Use a laboratory MOCCAE will accept — typically a WOAH / ISO 17025 accredited lab. We do not publish a closed list of lab names as if it were first-party.',
  },
  {
    question: 'What if the result is below 0.5 IU/ml?',
    answer:
      'The animal is not eligible to travel on that result. Your origin vet will usually revaccinate with an inactivated or recombinant rabies vaccine, wait at least 21 days, redraw, and ship a new sample. The new sample must still fall within 90 days before the eventual travel date. That redo is what stretches a file — not a mandatory 90-day sit after a passing result.',
  },
  {
    question: 'How long does the lab take?',
    answer:
      'Blood draw is a clinic visit. Shipping and lab processing commonly take one to three weeks depending on where the sample has to travel. Treat those as operational estimates, not a MOCCAE SLA. Build them into the calendar so the sample is still inside the 90-day pre-travel window on the day you fly.',
  },
  {
    question: 'How much does a rabies titer test cost?',
    answer:
      'Clinic draw, laboratory fee and international shipping are private-market charges that vary by country and lab. We do not publish a government fee table here and we do not invent a single AED total. Ask your origin vet for the current draw-and-shipping quote; we can help you sequence it against the 30-day MOCCAE permit.',
  },
  {
    question: 'Is a titer the same as a MOCCAE import permit?',
    answer:
      'No. The RNATT is a laboratory result attached to the file when MOCCAE requires it. The import permit is a separate 30-day Ministry approval. You can have a passing titer and still be refused if the permit is missing or expired. Permit walkthrough: the MOCCAE import permit guide. Permit help: MOCCAE permit assistance.',
  },
]

export default function TiterTestGuide() {
  const title = 'Rabies Titer Test Dubai | Sample Within 90 Days'
  const description =
    'Rabies titer test Dubai (RNATT): sample within 90 days before travel, result ≥0.5 IU/ml. Not a 90-day wait after the test.'
  const canonical = `${BASE_URL}/guides/rabies-titer-test-dubai/`
  const ogImage = `${BASE_URL}/assets/og-titer-test.jpg`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Rabies Titer Test for Dubai', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to time a rabies titer test (RNATT) for Dubai pet travel',
    description:
      'Correct UAE RNATT sequence: microchip, rabies vaccination, 21-day wait, blood sample within 90 days before travel, result at least 0.5 IU/ml.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Implant the microchip first',
        text: 'ISO 11784/11785 15-digit microchip must be in place before the rabies vaccination used for import.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Rabies vaccination',
        text: 'Inactivated or recombinant vaccine; pet at least 12 weeks old.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Wait at least 21 days',
        text: 'Do not draw the titer sample before 21 days have elapsed after vaccination.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Draw the blood sample',
        text: 'A veterinarian prepares serum for an accredited laboratory. The sample must be taken within 90 days before travel.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Receive a passing result',
        text: 'Minimum acceptable result is 0.5 IU/ml.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Travel inside the sample window',
        text: 'Confirm the sample date is still within 90 days of arrival. Then apply for the 30-day MOCCAE import permit.',
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    dateModified: '2026-09-04',
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
          keywords:
            'rabies titer test Dubai, rabies titre test UAE pet import, FAVN test Dubai, does my pet need a rabies titer test for Dubai, RNATT UAE, 0.5 IU/ml titer requirement UAE',
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
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Rabies Titer Test Guide' }]} />

      <Hero
        image="/assets/w5/rabies-titer-test-rnatt-explained-diagram.png"
        imageAlt="How the rabies titer test (RNATT) works: blood sample, accredited lab, 0.5 IU/ml pass threshold"
        eyebrow="Titer timing guide"
        title="Rabies Titer Test Dubai — Sample Within 90 Days Before Travel"
        subtitle="The locked rule is the sample date, not a 90-day sit after the result. Threshold: ≥0.5 IU/ml. Confirm whether your origin requires the test on the MOCCAE portal."
        updated={LAST_VERIFIED_LABEL}
        whatsappMessage="Hi Dubai Pet Relocation, I need the correct rabies titer (RNATT) timing for importing my pet to Dubai. Origin country: [country]."
        primaryLabel="Check titer timing on WhatsApp"
        secondary={{ label: 'Full import requirements', to: '/guides/uae-pet-import-requirements/' }}
      />

      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What a rabies titer test is — and what it is not
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">
                A rabies titer test, usually called an <strong>RNATT</strong> (rabies neutralising antibody titre test) or FAVN, is a blood test that measures rabies antibodies. For UAE import it is required only for pets arriving from countries that are <strong>not</strong> on MOCCAE&apos;s rabies-controlled / exempt list.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">{TITER_SAMPLE_RULE}</p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-4">{EXEMPT_LIST_HOLD}</p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[#4F5BD5]" />
                  Locked facts
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Pass threshold: {TITER_THRESHOLD}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Sample taken within 90 days <em>before</em> travel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Not a 90-day waiting period after the test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>Microchip before the rabies vaccination that the sample follows</span>
                  </li>
                </ul>
                <LastVerified className="mt-4 text-xs text-[#8A8A8A]" />
              </div>
            </div>
            <div>
              <ContentImage
                src="/assets/w5/rabies-titer-test-rnatt-explained-diagram.png"
                alt="How the rabies titer test (RNATT) works: blood sample, accredited lab, 0.5 IU/ml pass threshold"
                caption="Concept only. The exempt-country list is confirmed on the portal, not on this graphic."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Timeline from vaccination to travel — the sample window
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The calendar is a sequence, not a punishment clock. Lab shipping can take weeks; the thing you must not miss is that the <strong>sample date</strong> still sits inside 90 days of arrival.
            </p>
          </div>

          <ContentImage
            src="/assets/w5/rabies-titer-test-timeline-vaccination-to-travel.png"
            alt="Rabies titer test timeline for Dubai pet travel from vaccination to the travel window"
            caption="Sample-within-90-days-before-travel. This diagram does not show a post-test 90-day wait."
          />

          <div className="space-y-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Microchip, then rabies vaccination</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  {MICROCHIP_BEFORE_RABIES} Use an inactivated or recombinant vaccine. The pet must be at least 12 weeks old.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Wait at least 21 days before the blood draw</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Antibody levels need time. Drawing too early is a common reason a first result falls below 0.5 IU/ml. This 21-day wait is after vaccination — it is not the 90-day travel window.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Blood draw and lab</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  A veterinarian draws serum and ships it to an accredited laboratory. Cold-chain handling matters. Results commonly take one to three weeks — an operational estimate, not a Ministry SLA.
                </p>
                <ContentImage
                  src="/assets/w5/rabies-titer-test-blood-draw-calm-whippet-vet.jpg"
                  alt="Calm whippet having a blood sample taken for a rabies titer test at a vet clinic"
                  caption="The draw is ordinary veterinary work. The date on the sample is the date that must sit inside 90 days of travel."
                />
              </div>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Travel while the sample is still in date</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Once you have {TITER_THRESHOLD}, count forward from the <strong>sample date</strong>. Arrival must fall inside 90 days of that draw. Then time the{' '}
                  <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                    30-day MOCCAE import permit
                  </Link>{' '}
                  so it is still valid on landing. Do not wait an extra 90 days after the PDF arrives.
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
                    <th>What it is</th>
                    <th>What it is not</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">21 days after vaccination</td>
                    <td>Minimum wait before a useful blood draw</td>
                    <td>Not the travel ban</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Lab processing</td>
                    <td>Operational estimate (often 1–3 weeks)</td>
                    <td>Not a MOCCAE SLA</td>
                  </tr>
                  <tr>
                    <td className="font-medium">90 days before travel</td>
                    <td>Sample must be drawn inside this window</td>
                    <td>Not a wait after the result</td>
                  </tr>
                  <tr>
                    <td className="font-medium">30-day permit</td>
                    <td>MOCCAE import-permit validity after issuance</td>
                    <td>Not a titer rule</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <LastVerified className="mt-4 text-xs text-[#8A8A8A]" />
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
                Pets from countries <strong>not</strong> on MOCCAE&apos;s low-risk / exempt list need an RNATT. Pets from listed rabies-controlled countries are described as exempt — but the current first-party list could not be captured cleanly for this page.
              </p>
              <div className="warning-box">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2A2A2A]">{EXEMPT_LIST_HOLD}</p>
                </div>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mt-4">
                Route pages such as{' '}
                <Link to="/routes/india-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  India to Dubai
                </Link>{' '}
                and{' '}
                <Link to="/routes/philippines-to-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Philippines to Dubai
                </Link>{' '}
                discuss origin logistics. They do not replace a portal check.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">If the result is low</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Below 0.5 IU/ml means you do not travel on that certificate. Restart the antibody clock; do not invent a waiver.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Revaccinate</p>
                  <p className="text-xs text-[#5A5A5A]">Inactivated or recombinant rabies vaccine, chip already in place.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Wait ≥21 days</p>
                  <p className="text-xs text-[#5A5A5A]">Then redraw. Do not rush the sample.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Retest and re-time travel</p>
                  <p className="text-xs text-[#5A5A5A]">The new sample must still fall within 90 days before the new arrival date.</p>
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
              How to avoid a failed first sample
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              A failed titer is a calendar problem, not a character problem. These are the operational habits that keep the first draw useful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Syringe className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Correct vaccine type</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Inactivated or recombinant only. Live attenuated rabies vaccines are not accepted for UAE import.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Clock className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Full 21 days before the draw</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Do not treat day 14 as close enough. Antibody levels are still climbing.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Stethoscope className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">A vet who ships titer samples</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Labelling, serum quality and cold chain decide whether the lab can even read the tube.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <Shield className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Healthy animal</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Illness, stress or immunosuppressive medication can suppress the reading. Ask the vet before you book the draw.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <FlaskConical className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Accredited lab</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">A local lab that is not accepted for import purposes wastes the sample date. Confirm acceptance before you ship.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <FileCheck className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Same chip on every page</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">The number on the titer certificate must match the vaccination record and the MOCCAE form exactly.</p>
            </div>
          </div>

          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              <h3 className="text-xl font-bold text-[#2A2A2A]">Where this guide stops — and the commercial pages start</h3>
            </div>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
              This URL owns titer timing. It does not sell cargo clearance and it does not replace the permit walkthrough. If you want the import job run as a file, start with{' '}
              <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet import to Dubai
              </Link>
              . If you only need the permit submitted, use{' '}
              <Link to="/service/moccae-pet-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE permit assistance
              </Link>
              . The statutory pack is on{' '}
              <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                UAE pet import requirements
              </Link>
              .
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
              <FAQItem key={faq.question} question={faq.question} answer={<p>{faq.answer}</p>} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-bold text-[#2A2A2A] mb-8 text-center">Related guides and services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <FileCheck className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">UAE pet import requirements</h3>
              <p className="text-sm text-[#5A5A5A]">The statutory checklist this titer rule sits inside.</p>
            </Link>
            <Link to="/guides/moccae-import-permit/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <Clock className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MOCCAE import permit guide</h3>
              <p className="text-sm text-[#5A5A5A]">30-day permit walkthrough after the sample is in date.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <PawPrint className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Pet import service</h3>
              <p className="text-sm text-[#5A5A5A]">Commercial coordination from titer timing through DXB clearance.</p>
            </Link>
            <Link to="/routes/india-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <MapPin className="w-5 h-5 text-[#C89F5A] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">India to Dubai route</h3>
              <p className="text-sm text-[#5A5A5A]">Origin logistics for a corridor that often needs an RNATT.</p>
            </Link>
            <Link to="/routes/south-africa-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <MapPin className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">South Africa to Dubai</h3>
              <p className="text-sm text-[#5A5A5A]">Another inbound file where sample dating has to be planned.</p>
            </Link>
            <Link to="/service/moccae-pet-permit/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow">
              <HelpCircle className="w-5 h-5 text-[#4F5BD5] mb-3" />
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MOCCAE permit assistance</h3>
              <p className="text-sm text-[#5A5A5A]">Attach a passing result to a clean 30-day permit file.</p>
            </Link>
          </div>
        </div>
      </section>

      <OfficialSources />

      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">Need the sample date mapped to a flight?</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Send origin, vaccination date and a target month. We will tell you whether an RNATT is even in play — after a portal check — and whether the sample window still fits. Email {siteConfig.email} if WhatsApp is not convenient.
          </p>
          <WhatsAppBtn
            label="Check titer timing"
            message="Hi Dubai Pet Relocation, I need the correct rabies titer (RNATT) timing for importing my pet to Dubai. Origin country: [country]. Vaccination date: [date]."
            className="whatsapp-pulse"
          />
        </div>
      </section>
    </>
  )
}
