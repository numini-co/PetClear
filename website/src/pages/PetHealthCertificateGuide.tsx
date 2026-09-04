import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileCheck,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  CheckCircle,
  XCircle,
  HelpCircle,
  Stethoscope,
  Microscope,
  Syringe,
  FileText,
  Plane,
  Calendar,
  PawPrint,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import { BASE_URL } from '../lib/seo.ts'

/* ─── FAQ accordion helper ─── */
function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#5A5A5A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

/* ─── Page ─── */
export default function PetHealthCertificateGuide() {
  const title = 'Pet Health Certificate for UAE Entry — Complete Guide (2026)'
  const description = 'What the official veterinary health certificate is, who issues it, the 10-day validity window before travel, and how it connects to the MOCCAE import permit, microchip, and vaccinations. A clear guide for pet owners moving to Dubai and the UAE.'
  const canonical = `${BASE_URL}/guides/pet-health-certificate-uae/`
  const ogImage = `${BASE_URL}/assets/og-pet-health-certificate.jpg`

  const faqData = [
    {
      question: 'How long is the pet health certificate valid for UAE entry?',
      answer: 'The International Health Certificate must be issued within 10 days of arrival in the UAE. This is a tight window. If your pet arrives more than 10 days after the certificate was signed, it is no longer valid and your pet can be refused entry at Dubai customs. Because of this short validity, the health certificate is always the last document obtained before travel — after the microchip, rabies vaccination, any required titer test, and the MOCCAE import permit are already in place.',
    },
    {
      question: 'Who can issue the health certificate for the UAE?',
      answer: 'The International Health Certificate must be issued by a government-accredited or official veterinarian in the origin country. A standard certificate from any local clinic is not always enough — for many countries the certificate must be signed by an officially accredited vet, and in some cases endorsed by the relevant government authority. Using the wrong vet is one of the most common reasons a certificate is rejected. Dubai Pet Relocation confirms the correct accreditation level for your origin country before the appointment is booked.',
    },
    {
      question: 'What must the health certificate include?',
      answer: 'The certificate must include the pet owner\'s details, the microchip number, the vaccination records, the antiparasitic treatment dates and the products used, and the veterinarian\'s official stamp and signature. Crucially, the microchip number on the health certificate must exactly match the microchip number on the vaccination certificate and the MOCCAE import permit. A mismatch between documents is treated as an automatic rejection at customs.',
    },
    {
      question: 'How does the health certificate relate to the MOCCAE import permit?',
      answer: 'They are two separate documents and you need both. The MOCCAE import permit (AED 200 per pet, valid 30 days from issuance) is the government approval to bring your pet into the UAE and is applied for before travel. The International Health Certificate is the origin-country vet\'s confirmation that your pet is healthy, correctly identified, vaccinated, and treated for parasites — issued within 10 days of arrival. At Dubai customs you present the import permit, the original health certificate, vaccination records, the microchip certificate, the antiparasitic treatment record, and your passport and UAE visa together.',
    },
    {
      question: 'What does the antiparasitic treatment on the certificate cover?',
      answer: 'Within 14 days before arrival your pet must receive internal deworming (Praziquantel or equivalent) and external parasite treatment (Fipronil or Permethrin). The product names, the dates of administration, and the vet\'s signature must be recorded on the health certificate. Because this treatment must fall inside the 14-day window and the certificate inside the 10-day window, both are usually completed at the same final vet visit before travel.',
    },
    {
      question: 'What happens if my health certificate is wrong or expired on arrival?',
      answer: 'If the certificate is issued by the wrong vet, is missing a required endorsement, has a microchip mismatch, or falls outside the 10-day window on arrival, your pet can be refused entry. With incomplete documentation, customs may also place the pet under conditional quarantine at the owner\'s expense. Because the certificate cannot be re-issued from inside the UAE, getting it right the first time matters. Dubai Pet Relocation reviews the draft certificate against the MOCCAE permit and vaccination records before the pet flies.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? faq.answer : faq.question,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Pet Health Certificate for UAE Entry', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Health Certificate for UAE Entry — Complete Guide (2026)',
    description,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation' },
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'pet health certificate UAE, pet health certificate Dubai, international health certificate pet, UAE pet entry health certificate, government vet health certificate, 10 day health certificate Dubai, pet import health certificate UAE, official veterinarian pet certificate',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Health Certificate for UAE Entry' }]} />

      {/* Hero */}
      <Hero
        image="/images/service-pet-import-dubai.jpg"
        imageAlt="Veterinarian examining a calm pet before signing an official health certificate for UAE entry"
        eyebrow="Pet Relocation Guide"
        title="Pet Health Certificate for UAE Entry"
        subtitle="The official veterinary certificate that lets your pet clear Dubai customs — what it is, who signs it, the 10-day validity window, and how it fits with the MOCCAE permit, microchip, and vaccines."
        updated="Updated June 2026"
      />

      {/* What it is */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is the Pet Health Certificate?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The <strong>International Health Certificate</strong> is the official veterinary document that confirms your pet is healthy, correctly identified, vaccinated, and treated for parasites at the time it leaves the origin country for the UAE. It is issued by a <strong>government-accredited or official veterinarian</strong> in the country your pet is travelling from, not simply by any local clinic.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                It is one of the mandatory documents Dubai customs inspects on arrival. Without a valid certificate — issued by the right vet, within the correct window, and matching your pet&apos;s other paperwork — your pet can be refused entry. It sits at the end of the documentation chain: microchip first, then vaccinations, then any required rabies titer test, then the MOCCAE import permit, and finally the health certificate just before travel.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  What the Certificate Confirms
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Pet owner&apos;s details and the pet&apos;s identity</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>ISO microchip number (matching every other document)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Vaccination records, including rabies</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Antiparasitic treatment dates and products used</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>The official veterinarian&apos;s stamp and signature</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Certificate at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Who Issues It</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Government-accredited / official vet</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">In the origin country, before travel.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Validity</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Within 10 days of arrival</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Issued during the final 10 days before your pet lands in the UAE.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Typical Cost</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">AED 400–1,500</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Varies by country, vet, and whether government endorsement is needed.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">If Wrong or Expired</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Refused entry or conditional quarantine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who issues it */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Who Issues the Health Certificate?
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The certificate must come from a <strong>government-accredited or official veterinarian</strong> in your origin country. This is a specific requirement, not a formality — using a vet without the correct accreditation is a frequent cause of rejection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">The Right Vet</h3>
              </div>
              <ul className="text-sm text-[#5A5A5A] space-y-1">
                <li>Must be a <strong>government-accredited or official veterinarian</strong></li>
                <li>Some destinations require the certificate to be endorsed by the relevant government authority</li>
                <li>The certificate must carry the vet&apos;s <strong>official stamp and signature</strong></li>
              </ul>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 border border-[#4F5BD5]/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="font-bold text-[#2A2A2A]">Leaving the UAE? (Export)</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-2">
                If you are relocating <strong>out of</strong> Dubai with your pet, the health certificate may need an additional <strong>government vet endorsement</strong> depending on the destination country&apos;s rules.
              </p>
              <p className="text-sm text-[#5A5A5A]">
                This is separate from the MOCCAE export permit, which is also required when leaving the UAE.
              </p>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Confirm Accreditation Before Booking</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Accreditation requirements differ by country. A certificate signed by a clinic vet without the correct status — or missing a required government endorsement — can be rejected at Dubai customs. Always confirm what your origin country needs before you book the appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 10-day window */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                The 10-Day Validity Window
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-5">
                The International Health Certificate must be issued <strong>within 10 days of arrival</strong> in the UAE. This is the single most important timing rule for the certificate, and it is why the certificate is always obtained last.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-5">
                If the certificate is signed too early and your pet lands more than 10 days later, it is no longer valid. The same final vet visit usually also covers the <strong>antiparasitic treatment</strong>, which must fall within 14 days before arrival — so the deworming, external parasite treatment, and the certificate are typically completed together, right before the flight.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#4F5BD5]" />
                  Why It Goes Last
                </h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  The microchip, vaccinations, any rabies titer test, and the MOCCAE import permit can all be arranged weeks or months ahead. The health certificate cannot — its short window means it is the final step before your pet travels.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Where the Certificate Fits in the Sequence</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E9ECFB] text-[#4F5BD5] flex items-center justify-center text-xs font-bold shrink-0">1</span>
                  <span className="text-sm text-[#5A5A5A] mt-0.5"><strong className="text-[#2A2A2A]">Microchip</strong> — ISO 11784/11785, implanted before the rabies vaccination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E9ECFB] text-[#4F5BD5] flex items-center justify-center text-xs font-bold shrink-0">2</span>
                  <span className="text-sm text-[#5A5A5A] mt-0.5"><strong className="text-[#2A2A2A]">Vaccinations</strong> — rabies plus core vaccines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E9ECFB] text-[#4F5BD5] flex items-center justify-center text-xs font-bold shrink-0">3</span>
                  <span className="text-sm text-[#5A5A5A] mt-0.5"><strong className="text-[#2A2A2A]">Rabies titer test</strong> — only if required for high-risk origin countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E9ECFB] text-[#4F5BD5] flex items-center justify-center text-xs font-bold shrink-0">4</span>
                  <span className="text-sm text-[#5A5A5A] mt-0.5"><strong className="text-[#2A2A2A]">MOCCAE import permit</strong> — AED 200 per pet, valid 30 days from issuance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                  <span className="text-sm text-[#5A5A5A] mt-0.5"><strong className="text-[#2A2A2A]">Health certificate</strong> — within 10 days of arrival, the final document</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* What it must contain */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
            What the Health Certificate Must Contain
          </h2>
          <p className="text-[#5A5A5A] mb-8 max-w-3xl">
            Every required field must be present and consistent with your other documents. The detail that catches most owners out is the microchip number — it must match across the certificate, the vaccination records, and the MOCCAE import permit.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Owner&apos;s details</strong> — the pet owner&apos;s information</span>
            </div>
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <Microscope className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Microchip number</strong> — matching every other document</span>
            </div>
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <Syringe className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Vaccination records</strong> — including rabies</span>
            </div>
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Antiparasitic treatment</strong> — dates and products used</span>
            </div>
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <FileText className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Official stamp &amp; signature</strong> — from the accredited vet</span>
            </div>
            <div className="bg-[#F5F6FD] rounded-2xl p-5 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <span className="text-sm text-[#5A5A5A]"><strong className="text-[#2A2A2A]">Issued in time</strong> — within 10 days of arrival</span>
            </div>
          </div>

          <div className="warning-box mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#4F5BD5] shrink-0 mt-0.5" />
              <p className="text-sm text-[#2A2A2A]">
                <strong>Critical:</strong> Every document must show the <strong>same microchip number</strong>. A mismatch between the microchip certificate and the health or vaccination certificate is treated as an automatic rejection at customs.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF0FC] rounded-2xl p-6">
            <h3 className="font-semibold text-[#2A2A2A] mb-3 flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              The Antiparasitic Treatment Behind the Certificate
            </h3>
            <ul className="text-sm text-[#5A5A5A] space-y-1">
              <li><strong className="text-[#2A2A2A]">Internal:</strong> deworming (Praziquantel or equivalent) within 14 days of arrival</li>
              <li><strong className="text-[#2A2A2A]">External:</strong> flea/tick treatment (Fipronil or Permethrin) within 14 days of arrival</li>
              <li>The product name, date of administration, and vet&apos;s signature are recorded on the certificate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* At customs */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              The Health Certificate at Dubai Customs
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              On arrival, the original health certificate is presented alongside the rest of your pet&apos;s documents. If everything is correct and consistent, your pet clears customs without mandatory quarantine.
            </p>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="font-bold text-[#2A2A2A] mb-4">What You Present on Arrival</h3>
            <ul className="space-y-2 text-sm text-[#5A5A5A]">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>MOCCAE import permit</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Original International Health Certificate</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Vaccination records</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Microchip certificate</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Rabies titer test result (if applicable)</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Antiparasitic treatment record</span></li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Owner&apos;s passport and UAE visa</span></li>
            </ul>
            <div className="warning-box mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                <p className="text-sm text-[#2A2A2A]">
                  With complete and correct documentation, pets do not require mandatory quarantine in Dubai. Incomplete documentation can result in conditional quarantine at the owner&apos;s expense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common Health Certificate Mistakes &amp; How to Avoid Them
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Mistake</th>
                  <th>What Goes Wrong</th>
                  <th>How to Avoid It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Wrong vet</td>
                  <td>Certificate signed by a clinic vet without the required accreditation or endorsement</td>
                  <td>Confirm the accreditation level your origin country needs before booking</td>
                </tr>
                <tr>
                  <td className="font-medium">Expired window</td>
                  <td>Certificate issued more than 10 days before arrival, so it is invalid on landing</td>
                  <td>Schedule the certificate visit inside the final 10 days before travel</td>
                </tr>
                <tr>
                  <td className="font-medium">Missing endorsement</td>
                  <td>Required government endorsement is absent, especially when exporting from the UAE</td>
                  <td>Check whether your destination requires a government vet endorsement</td>
                </tr>
                <tr>
                  <td className="font-medium">Microchip mismatch</td>
                  <td>Number on the certificate differs from the vaccination records or permit</td>
                  <td>Verify the microchip number reads identically on every document</td>
                </tr>
                <tr>
                  <td className="font-medium">Antiparasitic gap</td>
                  <td>Treatment dates fall outside the 14-day window or products are not recorded</td>
                  <td>Do the deworming and external treatment at the final pre-travel visit</td>
                </tr>
                <tr>
                  <td className="font-medium">Incomplete records</td>
                  <td>Vaccination details or owner information are missing from the certificate</td>
                  <td>Ask the vet to complete and stamp every field before you leave</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-[#C9453A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">You Cannot Re-Issue From Inside the UAE</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  The health certificate is signed in the origin country. If it is wrong on arrival, it cannot simply be re-done in Dubai — which is why a pre-flight review against the MOCCAE permit and vaccination records matters so much.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the coordination checks it */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation Checks Your Certificate</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Because the certificate cannot be re-issued from inside the UAE, our coordination service reviews it against your other documents before your pet flies — so problems are caught while they can still be fixed.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Confirm the Right Vet</p>
                    <p className="text-xs text-[#5A5A5A]">We confirm the accreditation level and any endorsement your origin country requires before the appointment is booked.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Time the 10-Day Window</p>
                    <p className="text-xs text-[#5A5A5A]">We schedule the certificate visit inside the final 10 days before arrival, alongside the antiparasitic treatment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Cross-Check the Details</p>
                    <p className="text-xs text-[#5A5A5A]">We verify the microchip number, vaccination records, and treatment dates match the MOCCAE permit exactly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Final Pre-Flight Review</p>
                    <p className="text-xs text-[#5A5A5A]">We review the signed certificate and stamps before travel so nothing is missing on arrival day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Where the Certificate Sits in Your Move</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                The health certificate is one piece of a larger process. These guides cover the documents and approvals it depends on.
              </p>
              <div className="space-y-3">
                <Link to="/guides/uae-pet-import-requirements/" className="block p-4 bg-[#F5F6FD] rounded-xl hover:shadow-md transition-shadow group">
                  <p className="font-semibold text-[#2A2A2A] text-sm group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</p>
                  <p className="text-xs text-[#5A5A5A]">The full document list and step-by-step timeline for bringing a pet to Dubai.</p>
                </Link>
                <Link to="/guides/moccae-import-permit/" className="block p-4 bg-[#F5F6FD] rounded-xl hover:shadow-md transition-shadow group">
                  <p className="font-semibold text-[#2A2A2A] text-sm group-hover:text-[#4F5BD5] transition-colors">MOCCAE Import Permit</p>
                  <p className="text-xs text-[#5A5A5A]">The mandatory government approval your pet needs before arrival.</p>
                </Link>
                <Link to="/service/pet-import-dubai/" className="block p-4 bg-[#F5F6FD] rounded-xl hover:shadow-md transition-shadow group">
                  <p className="font-semibold text-[#2A2A2A] text-sm group-hover:text-[#4F5BD5] transition-colors">Pet Import to Dubai Service</p>
                  <p className="text-xs text-[#5A5A5A]">How our coordination service handles the whole import process for you.</p>
                </Link>
                <Link to="/contact/" className="block p-4 bg-[#F5F6FD] rounded-xl hover:shadow-md transition-shadow group">
                  <p className="font-semibold text-[#2A2A2A] text-sm group-hover:text-[#4F5BD5] transition-colors">Contact Dubai Pet Relocation</p>
                  <p className="text-xs text-[#5A5A5A]">Talk to us about your pet&apos;s certificate and timeline.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about the pet health certificate for UAE entry.
            </p>
            <div className="bg-[#F5F6FD] rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <OfficialSources />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Get Your Pet&apos;s Health Certificate Right the First Time
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            The 10-day window leaves no room for mistakes. Dubai Pet Relocation confirms the right vet, times the certificate correctly, and cross-checks it against your MOCCAE permit before your pet flies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Ask About Your Certificate"
              message="Hi Dubai Pet Relocation, I have questions about the health certificate for my pet's entry to the UAE. Can you help me check the timing and the right vet?"
              className="whatsapp-pulse"
            />
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
