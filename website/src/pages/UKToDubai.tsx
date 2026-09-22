import SEOHead from '../components/SEOHead.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL, LOGO_URL } from '../lib/seo.ts'
import { waEligibility } from '../lib/conversionCopy.ts'
import { CheckCircle, Plane, FileText, Clock, Home, AlertTriangle, Info, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'
import OfficialSources from '../components/OfficialSources.tsx'
import Hero from '../components/Hero.tsx'
import LinkedText from '../components/LinkedText.tsx'
import { stripInternalMarkdownLinks } from '../lib/linkedText.ts'

const CHECKED = '22 September 2026'
const WA = waEligibility({
  origin: 'United Kingdom',
  destination: 'Dubai',
  need: 'managed move',
})

const SOURCES = [
  {
    label: 'MOCCAE: import of pets (cats and dogs)',
    href: 'https://moccae.gov.ae/en/services/import-permit-pets',
  },
  {
    label: 'GOV.UK: export cats and dogs to the UAE, certificate 3926',
    href: 'https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-the-united-arab-emirates-uae-certificate-3926',
  },
  {
    label: '3926EHC version 8 specimen (APHA)',
    href: 'https://assets.publishing.service.gov.uk/media/683dc4bea9b2749a8095e084/3926EHC_V8_FF.pdf',
  },
  {
    label: 'Emirates: rules for travelling with animals',
    href: 'https://www.emirates.com/ae/english/help/faq-topics/baggage-and-lost-property/faq/what-are-the-rules-and-charges-for-travelling-with-animals/',
  },
  {
    label: 'British Airways: travelling with pets',
    href: 'https://www.britishairways.com/content/information/travel-assistance/travelling-with-pets',
  },
]

export default function UKToDubai() {
  const pageUrl = `${BASE_URL}/routes/uk-to-dubai/`
  const pageTitle = 'Pet Relocation UK to Dubai | Documents and Timing'
  const pageDescription =
    'Move a dog or cat from the UK to Dubai. MOCCAE permit valid 90 days from issuance, UK export certificate 3926EHC, and cargo into Dubai. No package price on this page.'
  const faqs = [
    {
      question: 'Can I move my dog or cat from the UK to Dubai?',
      answer:
        'Yes, when the animal is old enough, the dog breed is allowed, and an airline will accept the booking. On 22 September 2026 the MOCCAE pet import page listed the United Kingdom as a low-risk country, so that page does not ask for a rabies antibody test for a UK origin. You still need a MOCCAE import permit valid 90 days from issuance and UK export health certificate 3926EHC. Rules: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/). Permit steps: [/guides/moccae-import-permit/](/guides/moccae-import-permit/).',
    },
    {
      question: 'Does a pet from the UK need a rabies titre test for Dubai?',
      answer:
        'Not on the MOCCAE page checked on 22 September 2026, because the United Kingdom is on the published low-risk list. A rabies antibody test is required for a high-risk origin. The list can change, so confirm the live page before you skip the test. If a test is required, that page asks for at least 0.5 IU/ml and describes a 365-day certificate when the rabies vaccine stays valid and continuous and no booster is given. Timing notes: [/guides/rabies-titer-test-dubai/](/guides/rabies-titer-test-dubai/).',
    },
    {
      question: 'Which airlines carry pets from the UK to Dubai?',
      answer:
        'Do not treat a carrier name as acceptance. British Airways says ordinary pets travel in the hold and are not carried in the cabin; UK export is arranged with its pet partner, not as a passenger booking. Emirates says animals on itineraries ending in Dubai must travel as cargo, and cabin travel is not open to ordinary pets. Flight time, frequency, hold temperature and breed cut-offs were not restated as fixed facts on those pages. Confirm the product before you rely on a date. Flight modes: [/guides/pet-flight-options-dubai/](/guides/pet-flight-options-dubai/).',
    },
    {
      question: 'How long does UK to Dubai pet relocation take?',
      answer:
        'There is no single week count. If the rabies vaccine is already valid, the tight clocks are the MOCCAE permit (valid 90 days from issuance; the page estimates 1 working day, or 5 for a service, emotional support or medical dog), parasite treatment less than 14 days before shipping, and a 3926EHC exam within 24 hours of export with the certificate valid for 10 days. A first rabies vaccine must be more than 21 days before export, and the animal must be at least 15 weeks old at export. Airline space can add time. We do not promise a 4 to 6 week file.',
    },
    {
      question: 'How much does it cost to relocate a pet from the UK to Dubai?',
      answer:
        'We do not publish a package total. On 22 September 2026 MOCCAE listed government charges of AED 200 to issue an import permit for one animal, AED 500 to request release of one dog, and AED 250 to request release of one cat. Those are not a freight quote. Cargo, the crate, UK veterinary work and coordination are priced for the animal and the date. Cost drivers: [/guides/pet-relocation-cost-dubai/](/guides/pet-relocation-cost-dubai/).',
    },
    {
      question: 'What documents does a UK pet need to enter Dubai?',
      answer:
        'Plan on these, each with its own condition: a permanent microchip whose number matches the health certificate; rabies and the core vaccines named on 3926EHC; parasite treatment less than 14 days before shipping; MOCCAE import permit valid 90 days from issuance, obtained before the animal travels; and 3926EHC, signed by an Official Veterinarian, valid for 10 days, after an exam within 24 hours of export. England, Scotland and Wales apply online. Northern Ireland applies through DAERA. Owner passport details are part of the permit file. Full checklist: [/guides/uae-pet-import-requirements/](/guides/uae-pet-import-requirements/).',
    },
    {
      question: 'Can my pet travel in the cabin from the UK to Dubai?',
      answer:
        'Not as a normal British Airways or Emirates passenger booking into Dubai. British Airways says it does not carry pets in the cabin. Emirates says itineraries ending in Dubai must move the animal as cargo. Assistance dogs are a separate airline product with their own papers. An Etihad cabin product, where it exists, is an Abu Dhabi booking, not this Dubai cargo path. Confirm it on the live airline page: [/guides/etihad-pet-policy/](/guides/etihad-pet-policy/).',
    },
    {
      question: 'Are there breed restrictions from the UK to Dubai?',
      answer:
        'Yes for dogs. MOCCAE publishes a ban list, and 3926EHC requires the Official Veterinarian to confirm the dog is not one of a similar list, including crosses. Cats are not on that dog list. Bengal and Serval cats need a fifth-generation pedigree certificate. Flat-faced dogs and cats can still be refused by an airline even when import rules allow them. Breed list: [/guides/banned-dog-breeds-dubai/](/guides/banned-dog-breeds-dubai/). Dog preparation: [/dog-relocation-to-dubai/](/dog-relocation-to-dubai/). Cat preparation: [/cat-relocation-to-dubai/](/cat-relocation-to-dubai/).',
    },
    {
      question: 'What happens when my pet arrives in Dubai from the UK?',
      answer:
        'MOCCAE describes an inspection at the entry port and electronic release when the animal matches the import permit. Dubai Airport Cargo Village and Al Maktoum International Airport are listed among the quarantine centres. The page does not give a clock time, and it does not describe a routine quarantine stay. If the file does not match, the animal may be rejected at the owner\'s expense or confiscated. A booked handoff can continue from cargo release to the address. Arrival notes: [/guides/dubai-pet-arrival-guide/](/guides/dubai-pet-arrival-guide/).',
    },
  ]

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: stripInternalMarkdownLinks(faq.answer),
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE_URL}/routes/` },
        { '@type': 'ListItem', position: 3, name: 'UK to Dubai', item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pageTitle,
      description: pageDescription,
      author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
      publisher: {
        '@type': 'Organization',
        name: 'Dubai Pet Relocation',
        logo: { '@type': 'ImageObject', url: LOGO_URL },
      },
      datePublished: '2025-01-15',
      dateModified: '2026-09-22',
    },
  ]

  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        ogType="article"
        schemas={schemas}
      />
      <Breadcrumb items={[{ label: 'Routes', path: '/routes/' }, { label: 'UK to Dubai' }]} />

      <Hero
        image="/assets/route-heroes/route-uk-to-dubai-dog-flag-hero.jpg"
        imageAlt="Pet relocation from the UK to Dubai"
        fallbackSrc="/images/hero-uk.jpg"
        eyebrow="United Kingdom to Dubai"
        title="Move a dog or cat from the UK to Dubai"
        subtitle="The UK is on MOCCAE's published low-risk list, so a rabies titre is not the usual extra test. You still need a 90-day import permit, UK certificate 3926EHC, and a cargo booking into Dubai."
        updated={`Checked ${CHECKED}`}
        whatsappMessage={WA}
        primaryLabel="Check this UK to Dubai move"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">The route</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">
              What this corridor actually requires
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4">
              This page is for someone sending a dog or cat from the United Kingdom to Dubai, or deciding whether the calendar is realistic. Read the rules here. WhatsApp is for a paid eligibility check when you want the file coordinated.
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4">
              On {CHECKED} the{' '}
              <a className="font-semibold text-[#4F5BD5] hover:underline" href="https://moccae.gov.ae/en/services/import-permit-pets" target="_blank" rel="noopener noreferrer">
                MOCCAE pet import page
              </a>{' '}
              listed the United Kingdom among low-risk countries. That page asks for a rabies antibody test only for a high-risk origin. It still requires an import permit valid for 90 days from issuance, a permanent microchip, an authorised health certificate, the named vaccines, and parasite treatment in the 14 days before shipment. Pets must be shipped to IATA live-animal conditions.
            </p>
            <p className="text-[#5A5A5A] text-base leading-relaxed mt-4">
              Leaving Great Britain uses a specific certificate, not a generic EU pet passport. APHA certificate{' '}
              <a className="font-semibold text-[#4F5BD5] hover:underline" href="https://www.gov.uk/export-health-certificates/export-cats-and-dogs-to-the-united-arab-emirates-uae-certificate-3926" target="_blank" rel="noopener noreferrer">
                3926EHC
              </a>{' '}
              (version 8 on the GOV.UK page, last updated 6 May 2026) is the active export health certificate for cats and dogs to the UAE. England, Scotland and Wales apply online. Northern Ireland applies to DAERA. The specimen says the Official Veterinarian examines the animal within 24 hours of export and that the certificate is valid for 10 days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              ['Direction', 'UK to Dubai', 'Import into the UAE'],
              ['Permit', '90 days', 'From the date of issuance'],
              ['UK certificate', '3926EHC', 'Valid 10 days; exam within 24 hours'],
              ['Titre from the UK', 'Not on the low-risk path', 'Confirm the live country list'],
            ].map(([title, value, note]) => (
              <div key={title} className="bg-white rounded-[20px] shadow-sm p-6">
                <p className="font-bold text-[#2A2A2A] text-lg mb-1">{title}</p>
                <p className="text-[#5A5A5A] text-sm">{value}</p>
                <p className="text-[#5A5A5A] text-xs mt-2">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Documents</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2 mb-6">
                Checklist, with the condition on each item
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The{' '}
                <Link to="/guides/uae-pet-import-requirements/" className="font-semibold text-[#4F5BD5] hover:underline">
                  UAE pet import requirements
                </Link>{' '}
                page holds the full federal checklist. These are the UK-corridor conditions checked on {CHECKED}.
              </p>
              <div className="space-y-4">
                {[
                  ['Permanent microchip', 'The number on the health certificate must match the chip in the animal. 3926EHC also records the microchip date, scanner type and implantation site. The live MOCCAE page does not restate an ISO 11784/11785 label, so this page does not treat that standard as a current rule.'],
                  ['Rabies and core vaccines', '3926EHC: first rabies vaccination more than 21 days before export, and the animal at least 12 weeks old at that vaccination. Dogs: distemper, parvovirus, infectious canine hepatitis, leptospirosis and rabies. Cats: rabies, panleukopenia, rhinotracheitis and calicivirus. MOCCAE allows a leptospirosis lab test instead of that vaccine when the exporting country does not vaccinate against it.'],
                  ['MOCCAE import permit', 'Apply before travel. Valid 90 days from issuance. An expired permit cannot be used. The page estimates 1 working day to obtain the service, or 5 working days for a service, emotional support or medical dog. That is a published estimate, not a promise.'],
                  ['3926EHC export health certificate', 'Signed by an Official Veterinarian. Exam within 24 hours of export. Certificate valid for 10 days. It is not a Model A or Model B form, and an EU pet passport does not replace it. The certificate also attests that the UK is free of rabies under the WOAH Terrestrial Code.'],
                  ['Parasite treatment', 'MOCCAE: internal and external treatment in the 14 days before shipment, stated on the health certificate or passport. 3926EHC names external treatment with fipronil or permethrin, and an internal anthelmintic containing praziquantel, both less than 14 days before shipping. Your vet chooses a product that is safe for that species. Do not put a dog parasite product on a cat. This page does not give a dose.'],
                  ['Age', '3926EHC: the dog or cat is at least 15 weeks old at export. MOCCAE: high-risk imports are not less than 15 weeks. The English service page says the low-risk minimum age "will be 12" without a unit, so we do not treat 12 weeks as confirmed. For this UK export, use the 15-week certificate rule.'],
                  ['Owner papers', 'The permit file uses the importer\'s identity. Personal import is limited to 2 companion animals per person in the year (2 cats, 2 dogs, or 1 of each), with an exception for resident animals returning. A hotel booking is not stated as a substitute document on the MOCCAE page.'],
                ].map(([title, text], index) => (
                  <div key={title} className="flex items-start gap-4 bg-[#F5F6FD] rounded-2xl p-5">
                    <div className="w-10 h-10 bg-[#4F5BD5] rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2A2A] mb-1">{index + 1}. {title}</p>
                      <p className="text-[#5A5A5A] text-sm">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4A017]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Conditions that change the file</h3>
              </div>
              <ul className="space-y-4 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>A dog on the banned list cannot travel as an ordinary pet. Crosses are explicit on 3926EHC. Send the breed name before anyone books a crate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Bengal and Serval cats need a fifth-generation pedigree certificate. That is a cat rule, not a dog breed ban.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>If the consignment transits another country, MOCCAE says it must not mix with other pet animals. Direct routing is the cleaner file. We do not publish a summer embargo calendar the airlines did not state on the pages checked.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Flat-faced animals are an airline acceptance question. IAG Cargo says some dangerous dog breeds and snub-nosed cats and dogs may not be accepted. Confirm the booked product. See the <Link className="font-semibold text-[#4F5BD5] hover:underline" to="/guides/snub-nosed-dogs-flying-uae/">snub-nosed dog notes</Link> for dogs only.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Cost</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">
            What drives the cost, without a fake package total
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
            Government charges published on the MOCCAE service page on {CHECKED}, for one animal: AED 200 to issue the import permit, AED 500 to request release of one dog, AED 250 to request release of one cat. Confirm the amount on the payment screen. They are not a door-to-door price.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              ['Charged by government', 'Permit and arrival release, at the figures above. Rejected paperwork can mean the animal is returned or held at your expense. No day-rate is published on the page we checked.'],
              ['Charged in the UK', 'Official Veterinarian time, vaccines if they are missing, the 3926EHC, and parasite treatment. Those are clinic fees. We do not print them as AED.'],
              ['Charged by the airline', 'Cargo rate, crate acceptance and any partner handling. British Airways points UK pet export to its pet partner. Emirates points Dubai-ending itineraries to SkyCargo. Neither page gave a UK to Dubai freight total.'],
              ['Charged for coordination', 'Crate fit, booking, and the Dubai handoff if you want that service. Ask for a quote on this animal. The cost guide lists drivers only: pet relocation cost.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="font-bold text-[#2A2A2A] mb-2">{title}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  {title === 'Charged for coordination' ? (
                    <>
                      Crate fit, booking, and the Dubai handoff if you want that service. Ask for a quote on this animal. The{' '}
                      <Link to="/guides/pet-relocation-cost-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">
                        pet relocation cost guide
                      </Link>{' '}
                      lists drivers only.
                    </>
                  ) : (
                    text
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppBtn label="Check a UK to Dubai quote" message={WA} />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Timing</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">
            Timing factors, not a fixed week-by-week promise
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
            Build the date backwards from the flight the airline will actually accept. These clocks come from the pages checked on {CHECKED}.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              ['Before you pick a date', 'Confirm the dog is not a banned breed, the cat pedigree if it is a Bengal or Serval, and that the animal will be at least 15 weeks old at UK export.'],
              ['Rabies vaccine', 'If this is the first rabies vaccine, 3926EHC needs it more than 21 days before export. The animal must be at least 12 weeks old when that vaccine is given. A vaccine that is already valid removes that wait.'],
              ['Permit window', 'The permit lasts 90 days from issuance. MOCCAE estimates 1 working day, or 5 working days for a service, emotional support or medical dog. Apply inside the 90-day window, with room for the certificate and the flight.'],
              ['Last two weeks', 'Parasite treatment less than 14 days before shipping. 3926EHC exam within 24 hours of export. The certificate then lasts 10 days, so it is the last document, not the first.'],
              ['Airline acceptance', 'Notice periods differ by product. Emirates\' pet form asks for at least one week and says animals travel only if they are older than four months. That airline age is separate from the 15-week export rule. Breed and heat limits are confirmed on the booking, not assumed here.'],
              ['Travel day', 'The animal is accepted as cargo for a Dubai ending. After landing, MOCCAE inspects and releases a matching file. We do not publish a drive time or a clearance-hour promise.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#F5F6FD] rounded-[20px] p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#4F5BD5]" />
                  <h3 className="font-bold text-[#2A2A2A]">{title}</h3>
                </div>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">Airlines</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">
            Airline products, stated only as published
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed mt-4 max-w-3xl">
            A direct passenger schedule is not the same thing as a live-animal booking. We do not state daily frequencies, block times, or hold temperatures.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-6 h-6 text-[#C8102E]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">British Airways</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                The British Airways pet page says the animal travels in the hold and that pets are not carried in the cabin. For travel from the UK, it points customers to PetAir UK. Assistance dogs are a separate cabin product. Emotional support dogs are not accepted in the cabin. The page does not confirm a Dubai cargo tariff or a temperature setting. IAG Cargo, the cargo arm, says some dangerous dog breeds and snub-nosed cats and dogs may not be accepted, and that crates follow IATA Live Animals Regulations.
              </p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-6 h-6 text-[#D71A21]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">Emirates</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                The Emirates animals FAQ says ordinary animals are not permitted in the cabin, with narrow exceptions such as guide dogs and specified falcon routes. For every itinerary ending in Dubai, animals must be transported as cargo. Ask Emirates SkyCargo or a cargo agent. The pet form asks for at least one week&apos;s notice and says animals can travel only if they are older than four months. Excess-baggage animal rates on that FAQ are for eligible trips that start in Dubai. They are not a UK-to-Dubai cargo price.
              </p>
            </div>
          </div>
          <p className="text-sm text-[#5A5A5A] mt-6 max-w-3xl">
            More on modes:{' '}
            <Link to="/guides/emirates-pet-cargo/" className="font-semibold text-[#4F5BD5] hover:underline">Emirates pet cargo</Link>
            {' '}and{' '}
            <Link to="/guides/pet-flight-options-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet flight options</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-6 h-6 text-[#4F5BD5]" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A]">Arrival handoff</h2>
          </div>
          <p className="text-[#5A5A5A] text-base leading-relaxed max-w-3xl">
            MOCCAE&apos;s published service is a visual inspection at the entry port, then an electronic release when the animal matches the permit. Listed centres include Dubai Airport Cargo Village and Al Maktoum International Airport. The page does not promise a two-hour or four-hour release, and it does not describe routine quarantine for a matching file. Non-compliance can mean rejection at the owner&apos;s expense or confiscation.
          </p>
          <p className="text-[#5A5A5A] text-base leading-relaxed max-w-3xl mt-4">
            If you book a managed arrival, the handoff starts after that release and follows the address you give, including any building access you have already confirmed. Read the{' '}
            <Link to="/guides/dubai-pet-arrival-guide/" className="font-semibold text-[#4F5BD5] hover:underline">Dubai pet arrival guide</Link>
            {' '}and, for a tower address, the community page such as{' '}
            <Link to="/dubai/dubai-marina/" className="font-semibold text-[#4F5BD5] hover:underline">Dubai Marina</Link>.
            {' '}Import coordination sits on{' '}
            <Link to="/service/pet-import-dubai/" className="font-semibold text-[#4F5BD5] hover:underline">pet import to Dubai</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wide">FAQ</span>
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-2">UK to Dubai questions</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-[20px] p-6">
                <h3 className="font-semibold text-[#2A2A2A] text-base mb-2">{faq.question}</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed"><LinkedText text={faq.answer} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        extra={SOURCES}
        checkedLabel={`Checked ${CHECKED} against the primary pages linked here. This is a source check for the wording on this route. It is not a veterinary certificate.`}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#3A45B0] rounded-[20px] p-8 lg:p-12 text-center text-white">
            <PawPrint className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">Want this UK file coordinated?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              The checklist above is free to use. A managed move covers permit timing, 3926EHC sequencing, the cargo booking and the Dubai handoff. WhatsApp +971504782999 opens the same short form on every page. Email support@dubai-pet-relocation.ae.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppBtn label="Check this UK to Dubai move" message={WA} />
              <Link to="/how-it-works/" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[#2A2A2A] bg-white hover:bg-[#F5F5F5] transition-colors">
                <Info className="w-5 h-5" />
                How it works
              </Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
              <Link to="/guides/uae-pet-import-requirements/" className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Import requirements</p>
                <p className="text-sm text-white/70">Federal checklist for dogs and cats</p>
              </Link>
              <Link to="/dog-relocation-to-dubai/" className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Dog relocation</p>
                <p className="text-sm text-white/70">Breed check and crate fit</p>
              </Link>
              <Link to="/cat-relocation-to-dubai/" className="block p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                <p className="font-semibold text-white mb-1">Cat relocation</p>
                <p className="text-sm text-white/70">Carrier fit and Bengal or Serval papers</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8">Related routes and services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/service/pet-import-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <FileText className="w-5 h-5 text-[#4F5BD5] mb-2" />
              <p className="font-bold text-[#2A2A2A] mb-1">Pet import to Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Permit, cargo release and delivery when you want the import handled.</p>
            </Link>
            <Link to="/service/pet-relocation-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet relocation Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Door-to-door coordination for this corridor.</p>
            </Link>
            <Link to="/routes/dubai-to-uk/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Dubai to UK</p>
              <p className="text-[#5A5A5A] text-sm">The opposite direction uses UK import rules, not this page.</p>
            </Link>
            <Link to="/guides/moccae-import-permit/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">MOCCAE import permit</p>
              <p className="text-[#5A5A5A] text-sm">How the 90-day permit is requested.</p>
            </Link>
            <Link to="/guides/pet-relocation-cost-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Cost guide</p>
              <p className="text-[#5A5A5A] text-sm">Cost drivers. No invented package total.</p>
            </Link>
            <Link to="/service/pet-export-dubai/" className="block bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-sm transition-shadow">
              <p className="font-bold text-[#2A2A2A] mb-1">Pet export from Dubai</p>
              <p className="text-[#5A5A5A] text-sm">Use this only when the pet is leaving the UAE.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
