import { Link } from 'react-router-dom'
import { CheckCircle, MessageCircle } from 'lucide-react'
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
import GuideToc from '../components/GuideToc.tsx'
import GuideDualPath from '../components/GuideDualPath.tsx'
import { GUIDE_SOFT_GATE, waEligibility } from '../lib/conversionCopy.ts'

const PATH = '/guides/pet-export-from-dubai/'
const WA_EXPORT = waEligibility({
  origin: 'Dubai',
  need: 'managed pet export: MOCCAE export certificate, flight and cargo inspection',
})
const BAND_SECONDARY =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-transparent px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto'
const DUAL_MONEY =
  'inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#3A45B0] ring-1 ring-[#3A45B0]/40 transition hover:bg-[#F5F6FD] sm:w-auto'
const WA_CTA =
  'inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0B6B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-black/10 transition hover:bg-[#085530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#085530] sm:w-auto'

const MANAGED_EXPORT = [
  'Destination entry rules checked for your pet and month',
  'Microchip, rabies and any destination lab work sequenced against the flight',
  'MOCCAE export health certificate application and the government vet inspection booked to fit the flight',
  'Airline cargo or cabin product confirmed and IATA crate sized',
  'Airport handover at DXB or DWC',
] as const

const snippetQuestion = 'How do I get a MOCCAE pet export permit in Dubai?'
const snippetAnswer =
  'What owners call the MOCCAE pet export permit is the MOCCAE export health certificate. Apply on the official MOCCAE portal with UAE Pass after confirming the destination’s entry rules, matching microchip and rabies records, and a Fit to Fly exam close to the flight. A government vet inspects the pet in person. Confirm fees and timing on the portal.'

const faqData = [
  {
    q: 'What is the MOCCAE pet export permit?',
    a: 'In practice, the document people call the MOCCAE pet export permit is the export health certificate. Apply on the official MOCCAE portal with UAE Pass. A government vet examines the pet in person. It is not the inbound import permit. Confirm fees and validity on the official MOCCAE portal. A managed export is the [pet export service from Dubai](/service/pet-export-dubai/).',
  },
  {
    q: 'How do I export a pet from Dubai?',
    a: 'Start with the destination’s current entry rules, then build the Dubai sequence backwards: matching ISO microchip and rabies records, any destination lab work, a Fit to Fly certificate timed to the flight, the MOCCAE export health certificate, and the in-person government inspection at cargo. A managed export is on the [pet export service from Dubai](/service/pet-export-dubai/).',
  },
  {
    q: 'Is a MOCCAE import permit the same as an export health certificate?',
    a: 'A MOCCAE import permit is not the same as an export health certificate. The import permit is inbound only and is valid for 90 days from issuance, used when a pet is entering the UAE. Leaving Dubai uses the export health certificate: a portal application plus a government veterinary inspection. Do not apply the 90-day import window to an outbound departure. Inbound detail: [MOCCAE import permit guide](/guides/moccae-import-permit/).',
  },
  {
    q: 'How much does the MOCCAE export health certificate cost?',
    a: 'A government fee applies to the MOCCAE export health certificate; confirm the current amount on the official MOCCAE portal when you apply. Destination fees, lab work, the airline and crate are separate. A managed export is quoted after an eligibility check.',
  },
  {
    q: 'How long is the UAE export health certificate valid?',
    a: 'The export health certificate is valid for a short window, so it is issued close to the flight, not months early. Confirm the current validity on the official MOCCAE portal and book the inspection against your flight date.',
  },
  {
    q: 'Do I need a rabies titer to leave the UAE?',
    a: 'The UAE does not impose an export titer. The destination might. The United Kingdom lists the UAE, so a GB entry titer is not required. Australia Group 3 and CDC high-risk US dog rules require destination-side RNATT. Do not reuse the UAE inbound rule (“a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given”) as an export rule.',
  },
  {
    q: 'What documents do I need to take a pet out of the UAE?',
    a: 'Expect an ISO 11784/11785 15-digit microchip that matches every document, current rabies (and any destination core vaccines), the pet passport or vaccination book, a Fit to Fly certificate close to departure, the MOCCAE export health certificate after inspection, destination permits or endorsements (GB health certificate, CDC dog import form, Australia import permit, India AQCS NOC, Philippines SPSIC, Saudi MEWA permit), and the air waybill. The pouch travels on the crate.',
  },
  {
    q: 'Can I fly my pet in the cabin when leaving Dubai?',
    a: 'Most Dubai departures for cats and dogs are manifest cargo. Cabin products are airline- and itinerary-specific and must be read on the carrier’s current rules, not assumed from an inbound exception. Compare modes on [pet flight options from Dubai](/guides/pet-flight-options-dubai/). Emirates cargo process: [Emirates pet cargo](/guides/emirates-pet-cargo/).',
  },
  {
    q: 'Is there quarantine when leaving the UAE?',
    a: 'There is no export quarantine when a pet leaves the UAE. Any quarantine, isolation or registered-facility hold is a destination rule (for example Australia or certain CDC high-risk dog arrivals). The UAE inspection is a document-and-identity check at cargo, not a multi-week hotel stay.',
  },
  {
    q: 'How long does pet export from Dubai take?',
    a: 'If vaccinations are current and the destination needs no titer or long residency clock, UAE-side paperwork can be days to about two weeks. Destination RNATT, 180-day Australia residency maths, or CDC facility reservations can stretch the export to many weeks or months. The destination is mapped first, rather than quoting a single typical duration.',
  },
  {
    q: 'Who applies on the MOCCAE portal, and do I need UAE Pass?',
    a: 'The export-certificate application is an official portal step, and UAE Pass is the usual login. A government veterinarian still inspects the animal in person before the export is treated as complete. We can guide the paperwork and the timing. We do not issue the certificate and we are not the inspector.',
  },
]

export default function PetExportFromDubaiGuide() {
  const canonical = `${BASE_URL}${PATH}`
  const title = 'How to Export a Pet from Dubai | Document Checklist'
  const description =
    'DIY how-to for the MOCCAE pet export permit (the export health certificate): destination rules first, document order. Confirm fees on the portal.'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides/` },
      { '@type': 'ListItem', position: 3, name: 'Pet export from Dubai', item: canonical },
    ],
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${BASE_URL}/assets/w6/pet-export-from-dubai-guide-suitcase-checklist.png`,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    datePublished: '2026-09-14',
    dateModified: '2026-11-02',
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
          canonical,
          ogType: 'article',
          ogImage: `${BASE_URL}/assets/w6/pet-export-from-dubai-guide-suitcase-checklist.png`,
        }}
        schemas={[breadcrumbSchema, articleSchema, faqSchema]}
      />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet export from Dubai' }]} />
      <div className="mx-auto max-w-[900px] px-5 pt-8">
        <GuideToc
          items={[
            { href: '#export-certificate', label: 'Export certificate' },
            { href: '#destination-checks', label: 'Destination checks' },
            { href: '#uae-exit-documents', label: 'UAE exit documents' },
          ]}
        />
      </div>

      <Hero
        image="/assets/w6/pet-export-from-dubai-guide-suitcase-checklist.png"
        imageAlt="Illustration for the complete guide to exporting a pet from Dubai"
        eyebrow="Export process guide"
        title="How to prepare a pet export from Dubai"
        subtitle="A DIY how-to: destination rules first, then the UAE export health certificate. Prefer a managed export? See the pet export service."
        updated="Updated 2 November 2026"
        primaryLabel="Get a managed export quote"
        primaryClassName={WA_CTA}
        whatsappMessage={WA_EXPORT}
        waService="Export service"
        gateLine={GUIDE_SOFT_GATE}
        secondary={{ label: 'pet export service', to: '/service/pet-export-dubai/' }}
        imageWidth={1920}
        imageHeight={1080}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <SnippetAnswer question={snippetQuestion} answer={snippetAnswer} />
          <GuideDualPath
            diyNote="Keep reading this checklist if you are preparing the export yourself."
            moneyTo="/service/pet-export-dubai/"
            moneyLabel="pet export service"
            moneyClassName={DUAL_MONEY}
            waMessage={WA_EXPORT}
            waLabel="Get a managed export quote"
            waClassName={WA_CTA}
          />
          <p className="mb-4 mt-4 text-sm text-[#8A8A8A]">
            By Dubai Pet Relocation editorial · UAE pet relocation coordinators · Updated 2 November 2026
          </p>
          <div id="export-certificate" className="scroll-mt-24">
            <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
              What is the MOCCAE pet export permit?
            </h2>
            <p className="mb-4 leading-relaxed text-[#5A5A5A]">
              In practice, the document people call the MOCCAE pet export permit is the export health
              certificate. There is no separate export permit for a pet dog or cat leaving with its owner
              beyond that certificate and the destination’s own documents. You apply on the official MOCCAE
              digital services portal with a UAE Pass login. A government vet examines the animal in person
              before the export is treated as complete.
            </p>
            <p className="mb-4 leading-relaxed text-[#5A5A5A]">
              It is different from the inbound MOCCAE import permit, which is valid for 90 days from issuance
              and is used only for pets entering the UAE. If the pet is coming into the country, read the{' '}
              <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE import permit guide
              </Link>{'. Destination permits are separate. A GB health certificate, a CDC dog import form and an Australia import permit each follow that country’s rules.'}
            </p>
            <p className="mb-6 leading-relaxed text-[#5A5A5A]">
              Fees and certificate validity: confirm on the official MOCCAE portal. If you want one
              coordinator to sequence the certificate, the flight and the cargo inspection, see our{' '}
              <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet export service from Dubai
              </Link>{'.'}
            </p>
          </div>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Two rule-sets must line up. MOCCAE controls how a dog or cat leaves the United Arab Emirates. The
            receiving country decides whether a titer, tapeworm treatment, advance permit or quarantine applies.
            Families who collect a UAE certificate first, and then discover a destination waiting period, are
            the ones who miss their flight week. Departure timelines sit on{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation from Dubai
            </Link>
            . The wider library is{' '}
            <Link to="/guides/" className="font-semibold text-[#4F5BD5] hover:underline">
              the full guide library
            </Link>
            .
          </p>
          <ContentImage
            src="/assets/w6/pet-export-from-dubai-guide-suitcase-checklist.png"
            alt="Illustration for the complete guide to exporting a pet from Dubai"
            caption="Departure is a checklist problem: destination rules, then UAE certificates timed to the crate. No airline marks or fake paperwork."
          />
        </div>
      </section>

      <section id="destination-checks" className="section-padding scroll-mt-24 bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Plan from the destination backwards
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A Dubai-to-UK crate and a Dubai-to-Australia crate do not share a calendar. Great Britain currently
            treats the UAE as a listed country for pet travel, so a rabies blood test is not the UK bottleneck.
            The GB health certificate window and, for dogs, tapeworm timing are. Australia classifies the UAE as
            DAFF Group 3: residency maths, RNATT and an import permit dominate. The United States applies CDC
            dog-import rules that treat the UAE as high-risk. India wants an AQCS advance NOC. The Philippines
            wants an SPSIC before you fly. Saudi Arabia wants a MEWA permit on the named port.
          </p>
          <ContentImage
            src="/assets/w6/pet-export-destination-rules-branching-diagram.png"
            alt="How destination rules differ when exporting a pet from Dubai: UK, EU, USA, Australia and more"
            caption="One Dubai departure, many destination rule sets. Summaries are high-level: confirm the live authority site for your travel month."
          />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Use the live outbound corridor when you already know the country. Light entry points:{' '}
            <Link to="/routes/dubai-to-uk/" className="font-semibold text-[#4F5BD5] hover:underline">
              exporting your pet from Dubai to the UK
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-usa/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to the USA
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-canada/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to Canada
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-australia/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to Australia
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-india/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to India
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-philippines/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to the Philippines
            </Link>
            ,{' '}
            <Link to="/routes/dubai-to-germany/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to Germany
            </Link>
            , and{' '}
            <Link to="/routes/dubai-to-saudi-arabia/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to Saudi Arabia
            </Link>
            . The shared UAE-side export steps are collected here so each corridor does not repeat them.
          </p>
          <LastVerified
            date="14 September 2026"
            note="Destination listing status and forms change. Re-check GOV.UK, CDC, DAFF, CFIA, AQCS, BAI and MEWA for the month you fly."
          />
        </div>
      </section>

      <section id="uae-exit-documents" className="section-padding scroll-mt-24 bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Documents to take a pet out of the UAE, in order
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The pouch is a consistency test. Every original should tell the same story about the same animal.
            A single transposed chip digit stops more crates than a missing line on one form.
          </p>
          <ol className="mb-6 list-decimal space-y-3 pl-5 text-[#5A5A5A]">
            <li>
              <strong className="text-[#2A2A2A]">ISO 11784/11785 15-digit microchip</strong> that scans and
              matches the passport, vaccines, Fit to Fly page and export certificate. Implant history matters
              for destinations that require the chip before the rabies vaccine used for entry.
            </li>
            <li>
              <strong className="text-[#2A2A2A]">Rabies and destination core vaccines</strong> still valid on
              travel day. UAE-side export does not replace a destination’s remaining-validity rule (Saudi
              Arabia, for example, publishes a six-month remaining-rabies condition on its import mechanism).
            </li>
            <li>
              <strong className="text-[#2A2A2A]">Destination lab work, if any.</strong> Australia Group 3
              requires RNATT ≥0.5 IU/ml from an approved laboratory and counts a 180-day residency from the
              date the sample arrives at the lab. That is a residency period, not a UAE quarantine. CDC high-risk
              dog rules use their own draw-and-wait maths. The UAE inbound sample-within-90-days-before-travel
              rule is for pets <em>entering</em> the UAE; do not paste it onto every outbound titer.
            </li>
            <li>
              <strong className="text-[#2A2A2A]">Fit to Fly / fitness certificate</strong> from a licensed UAE
              veterinarian, issued close to departure (commonly discussed as a 5 to 10 day working window
              depending on destination and airline). Time it so it still covers the cargo slot.
            </li>
            <li>
              <strong className="text-[#2A2A2A]">Destination travel certificate or endorsement</strong> where
              the country names a model (GB pet health certificate for non-EU listed travel; EU non-commercial
              certificate if you are entering the Union). For GB, GOV.UK asks for a certificate issued by an
              official vet in the UAE within 10 days of arrival, then MOCCAE endorsement.
            </li>
            <li>
              <strong className="text-[#2A2A2A]">MOCCAE export health certificate</strong>: the UAE-side
              leaving document. Applied for on the official portal (UAE Pass). Not final until a government
              veterinarian inspects the animal and the papers together.
            </li>
            <li>
              <strong className="text-[#2A2A2A]">Air waybill, crate labels, owner identification</strong> for
              the cargo handover at DXB or DWC.
            </li>
          </ol>
          <p className="leading-relaxed text-[#5A5A5A]">
            If you are completing the export yourself, keep the order above. If you want the paperwork carried
            from the destination rules through the handover, open the{' '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet export service
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Certificate timing: two short clocks, not one long permit
          </h2>
          <ContentImage
            src="/assets/w6/pet-export-from-dubai-certificate-timing-timeline.png"
            alt="Pet export from Dubai timeline showing health certificate and MOCCAE export certificate timing"
            caption="Research destination rules first. Time Fit to Fly and the MOCCAE export certificate so both still cover departure day. Validity: confirm on the portal."
          />
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The export health certificate is valid for a short window, so it is collected close to the flight,
            not months early. Confirm the current validity on the official MOCCAE portal and book the inspection
            against the flight date.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            A government fee applies to the MOCCAE export health certificate. Confirm the current amount on the
            official MOCCAE portal when you apply.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Do not confuse this document with the MOCCAE <em>import</em> permit. Import permits for pets
            entering the UAE are valid for 90 days from the date of issuance. That 90-day window does not
            travel with you when you leave. Export timing is a short certificate fuse plus whatever the
            destination already required.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The inspection is in person. A government veterinarian scans the chip, matches the animal to the
            documents, and reviews the originals. The online application is not a boarding pass. We coordinate
            the appointment against the cargo slot. We do not staff the ministry desk and we do not publish
            invented Cargo Village door numbers.
          </p>
          <LastVerified
            date="14 September 2026"
            note="Confirm the export-certificate fee and the current validity on the official MOCCAE portal for the month you fly."
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Destination snapshots (confirm the live rules)
          </h2>
          <p className="mb-6 leading-relaxed text-[#5A5A5A]">
            These headlines show why the first step branches by destination. They are not a
            substitute for the corridor or the authority site.
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">United Kingdom</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                UAE is a listed country for GB pet travel, so there is no rabies titre for dogs or cats from the UAE.
                GB health certificate from an official UAE vet within 10 days of arrival; dogs need
                tapeworm treatment 24 to 120 hours before arrival. Corridor:{' '}
                <Link to="/routes/dubai-to-uk/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to UK
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">European Union / Germany</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                EU non-commercial movement rules and country listing were updated in 2026 (Delegated
                Regulation (EU) 2026/131). Confirm whether the UAE sits on the current listed-country annex
                for your travel month before you skip a titer. Corridor:{' '}
                <Link to="/routes/dubai-to-germany/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to Germany
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">United States</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                CDC treats the UAE as high-risk for dog rabies. Foreign-vaccinated dogs need the CDC Dog
                Import Form plus the high-risk paperwork path (endorsement, reservation at a registered
                facility where required). CDC dog rules do not apply to cats the same way. Corridor:{' '}
                <Link to="/routes/dubai-to-usa/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to USA
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">Canada</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                CFIA personal-pet rules are rabies-certificate led for dogs and cats over three months.
                Confirm the current federal detail with CFIA before you fly. Corridor:{' '}
                <Link to="/routes/dubai-to-canada/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to Canada
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">Australia</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                DAFF Group 3 from the UAE: 180-day approved-country residency counted from RNATT sample
                arrival at the laboratory, passing titre ≥0.5 IU/ml, then the import-permit and post-arrival
                biosecurity steps. Longest common clock. Corridor:{' '}
                <Link to="/routes/dubai-to-australia/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to Australia
                </Link>
                .
              </p>
            </div>
            <div className="rounded-[20px] bg-[#F5F6FD] p-5">
              <h3 className="mb-2 font-bold text-[#2A2A2A]">India</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                AQCS advance NOC (apply at least seven working days before embarkation) plus the pathway that
                actually fits: Transfer of Residence, re-import, or short stay. Corridor:{' '}
                <Link to="/routes/dubai-to-india/" className="font-semibold text-[#4F5BD5] hover:underline">
                  Dubai to India
                </Link>
                .
              </p>
            </div>
          </div>
          <p className="leading-relaxed text-[#5A5A5A]">
            Philippines departures need a BAI SPSIC before travel and an export health certificate issued within
            10 calendar days of departure. See{' '}
            <Link to="/routes/dubai-to-philippines/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to the Philippines
            </Link>
            . Saudi departures need a MEWA import permit (commonly discussed as 30 days from issuance on the named
            port). See{' '}
            <Link to="/routes/dubai-to-saudi-arabia/" className="font-semibold text-[#4F5BD5] hover:underline">
              Dubai to Saudi Arabia
            </Link>
            . Other countries: open the{' '}
            <Link to="/routes/" className="font-semibold text-[#4F5BD5] hover:underline">
              routes hub
            </Link>{' '}
            and message the country name.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Who this guide is for, and who it is not
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            It is written for owners leaving the UAE with a personal dog or cat: end-of-posting repatriation,
            a new job in another country, or a family move that includes the animal. It assumes the pet is
            already in Dubai or elsewhere in the UAE and must exit through MOCCAE’s export path plus
            destination documents. It is not written for commercial consignments, livestock, or birds of prey.
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Breed and age still gate some destinations and some airline holds. Restricted types can be
            refused at either end even when the certificate sequence is perfect. Check{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned and restricted dog breeds
            </Link>{' '}
            and the destination corridor before you pay for cargo. Snub-nosed dogs and cats often need a
            larger crate and can face seasonal embargoes. That is an airline welfare rule, not a MOCCAE
            export-certificate rule.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Most cats and dogs leaving Dubai travel as manifested cargo in an IATA-style crate out of DXB
            or DWC. Cabin and checked-baggage products are the exception and must be read on the live
            carrier rules for that exact outbound itinerary. Compare modes on{' '}
            <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet flight options from Dubai
            </Link>
            . Crate sizing:{' '}
            <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
              IATA pet crate requirements
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            How long an export takes, by scenario
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            The UAE-side certificate and inspection are usually the short part. The destination is the long
            part. That is why a neighbour who exported in ten days is not a forecast for your dog if you are
            bound for Melbourne.
          </p>
          <div className="mb-6 overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>What usually dominates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Listed / no-titer destination, vaccines current</td>
                  <td>Certificate windows and a cargo slot (often days to about 2 weeks)</td>
                </tr>
                <tr>
                  <td className="font-medium">Destination RNATT required</td>
                  <td>Draw, lab, and that country’s waiting rules: weeks to months</td>
                </tr>
                <tr>
                  <td className="font-medium">Australia Group 3</td>
                  <td>180-day residency clock from sample-at-lab, plus the permit</td>
                </tr>
                <tr>
                  <td className="font-medium">Fit to Fly and the MOCCAE export certificate</td>
                  <td>Short windows: book them against the flight, then confirm timing on the portal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed text-[#5A5A5A]">
            Urgent departures are still destination-limited. Where no titer or residency clock applies, we
            can compress vet and inspection days. Where a lab result is mandatory, we start the test
            immediately and tell you the earliest honest week. We will not promise a date the destination
            clock cannot meet.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            How much does it cost to export a pet from Dubai?
          </h2>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Outbound spend is a stack: veterinary exams and destination certificates, the MOCCAE export
            government fee (confirm on the official MOCCAE portal), any titer or approved-lab work, an IATA
            crate, cargo, and coordination if you want the export managed. Qualitative drivers sit on{' '}
            <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              what pet relocation costs
            </Link>
            .
          </p>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            Destination quarantine or CDC facility charges are not a Dubai fee. They are flagged when the
            destination uses them. The UAE-side work and the cargo are quoted after an eligibility check.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            A managed export is the{' '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet export service from Dubai
            </Link>
            . The wider departure is{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet relocation from Dubai
            </Link>
            . Not sure which service you need?{' '}
            <Link to="/service/pet-relocation-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              Compare pet relocation services
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            What can go wrong, and who does what
          </h2>
          <ul className="mb-6 space-y-2">
            {[
              'Starting with the UAE certificate before the destination clock is understood.',
              'Microchip mismatch across passport, vaccines, Fit to Fly and export certificate.',
              'Collecting short-fuse certificates too early so they expire before cargo day.',
              'Assuming cabin from Dubai because an inbound Etihad product exists. Confirm the outbound itinerary.',
              'Treating the MOCCAE import-permit 90-day window as an export rule.',
              'Applying the UAE inbound titre certificate as if it were every destination’s titer rule.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#5A5A5A]">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4 leading-relaxed text-[#5A5A5A]">
            You confirm destination rules, keep the live animal healthy and crate-trained, and hold originals.
            We map the destination, line-check scans, time Fit to Fly against the MOCCAE inspection, and
            coordinate the cargo booking with vetted veterinary and handling partners. We are a coordination
            service. We do not operate the aircraft, issue ministry certificates, or claim airline or
            government affiliation.
          </p>
          <p className="leading-relaxed text-[#5A5A5A]">
            Breed and snub-nosed airline limits still apply outbound. If the dog’s type is restricted at
            either end, read{' '}
            <Link to="/guides/banned-dog-breeds-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              banned and restricted dog breeds
            </Link>{' '}
            before you buy a crate. Summer heat embargoes:{' '}
            <Link to="/guides/pet-travel-summer-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
              pet travel in Dubai summer
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[900px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">Where to go next</h2>
          <ul className="mb-6 space-y-2">
            {[
              'A managed export is the pet export service. The departure journey is pet relocation from Dubai.',
              'A pet arriving in Dubai uses the import guides.',
              'MOCCAE issues the export certificate. The destination authority issues entry permission.',
              'Flight-mode comparisons stay on the flight-options guide.',
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
              <Link to="/service/pet-export-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet export service from Dubai
              </Link>
              : managed export with a quote
            </li>
            <li>
              <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet relocation from Dubai
              </Link>
              : the full departure move
            </li>
            <li>
              <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                pet flight options from Dubai
              </Link>
              : cabin or cargo
            </li>
            <li>
              <Link to="/guides/iata-pet-crate-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                IATA pet crate requirements
              </Link>
            </li>
            <li>
              <Link to="/guides/moccae-import-permit/" className="font-semibold text-[#4F5BD5] hover:underline">
                MOCCAE import permit guide (inbound only)
              </Link>
            </li>
            <li>
              <Link to="/guides/" className="font-semibold text-[#4F5BD5] hover:underline">
                the full guide library
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[#F5F6FD]">
        <div className="mx-auto max-w-[820px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-[24px] font-bold text-[#2A2A2A] sm:text-[30px]">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqData.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={<LinkedText text={f.a} />} />
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={[
          { label: 'GOV.UK: bring a pet to Great Britain', href: 'https://www.gov.uk/bring-pet-to-great-britain' },
          { label: 'CDC: dog importation', href: 'https://www.cdc.gov/importation/dogs/index.html' },
          {
            label: 'DAFF: Category 3 cats and dogs',
            href: 'https://www.agriculture.gov.au/biosecurity-trade/cats-dogs/how-to-import/step-by-step-guides/category-3-step-by-step-guide-for-dogs',
          },
          {
            label: 'European Commission: non-commercial pet movement',
            href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en',
          },
        ]}
      />

      <section className="section-padding bg-[#4F5BD5] max-sm:pb-40!">
        <div className="mx-auto max-w-[800px] px-5 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-[24px] font-bold text-white sm:text-[30px]">
            Want us to manage your pet export?
          </h2>
          <div className="mx-auto mb-6 max-w-xl text-left">
            <h3 className="mb-3 text-lg font-semibold text-white">What a managed export includes</h3>
            <ul className="space-y-2">
              {MANAGED_EXPORT.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-4 text-center text-base leading-relaxed text-white">
            Send the pet, destination, travel month and current vaccination dates. We check eligibility and
            reply with a managed export quote.
          </p>
          <p className="mb-4 text-center text-base leading-relaxed text-white">
            Check export eligibility on the{' '}
            <Link to="/service/pet-export-dubai/" className="font-semibold text-white underline">
              pet export service
            </Link>
            . The wider departure journey is{' '}
            <Link to="/service/pet-relocation-from-dubai/" className="font-semibold text-white underline">
              pet relocation from Dubai
            </Link>
            . Email{' '}
            <a href="mailto:support@dubai-pet-relocation.ae" className="underline">
              support@dubai-pet-relocation.ae
            </a>
            . WhatsApp +971 50 478 2999.
          </p>
          <p className="mb-6 text-center text-sm leading-relaxed text-white">{GUIDE_SOFT_GATE}</p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/service/pet-export-dubai/" className={BAND_SECONDARY}>
              Check export eligibility
            </Link>
            <a
              href={getWhatsAppUrl(WA_EXPORT)}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-service="Export service"
              className={WA_CTA}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Get a managed export quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
