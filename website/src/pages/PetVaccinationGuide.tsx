import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Syringe,
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  FileCheck,
  Stethoscope,
  Microscope,
  FlaskConical,
  Calendar,
  Dog,
  Cat,
  PawPrint,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'

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
export default function PetVaccinationGuide() {
  const title = 'Pet Vaccination Requirements for UAE Entry — Dubai Guide (2026)'
  const description = 'Complete guide to pet vaccination requirements for UAE entry. Rabies timing vs microchip, vaccine validity and minimum age, core vaccines for dogs and cats, the rabies titer test for high-risk countries, common timing mistakes, and how Dubai Pet Relocation plans your vaccination timeline.'
  const canonical = `${BASE_URL}/guides/pet-vaccination-requirements-uae/`
  const ogImage = `${BASE_URL}/assets/og-pet-vaccination.jpg`

  const faqData = [
    {
      question: 'Does the rabies vaccine have to come after the microchip?',
      answer: 'Yes. Your pet must have an ISO 11784/11785 compliant 15-digit microchip implanted before the rabies vaccination. If your pet was vaccinated against rabies before being microchipped, the vaccination is invalid for UAE entry. You would need to re-vaccinate after microchipping and wait another 21 days. This is one of the most common and costly mistakes, so always confirm the microchip is recorded first.',
    },
    {
      question: 'How old does my pet need to be for the rabies vaccine?',
      answer: 'Your pet must be at least 12 weeks old at the time of the rabies vaccination. The vaccine must be inactivated or recombinant (not an attenuated live virus vaccine), administered at least 21 days before travel, and within 12 months of arrival. The minimum import age is 12 weeks for pets from low-risk countries and 15 weeks for pets from high-risk countries.',
    },
    {
      question: 'How long before travel does the rabies vaccine need to be given?',
      answer: 'The rabies vaccine must be administered between 21 days and 12 months before entering the UAE. In other words, it must be at least 21 days old at the time of travel and still valid (not expired) on arrival. An annual booster is required, or you can follow the manufacturer\'s guidance for 2-3 year vaccines. If the vaccine has lapsed and not been renewed on time, it is no longer valid for entry.',
    },
    {
      question: 'What core vaccines do dogs and cats need for the UAE?',
      answer: 'Beyond rabies, dogs need core vaccines covering Canine Distemper Virus, Canine Parvovirus, Infectious Canine Hepatitis (Adenovirus), and Leptospirosis — typically given as a DHPPIL combination. Cats need core vaccines covering Feline Panleukopenia, Feline Rhinotracheitis (Herpes Virus), and Feline Calicivirus — typically given as an FVRCP combination. Feline Leukemia (FeLV) is recommended by some authorities. Core vaccines can be given alongside the rabies vaccine or shortly after.',
    },
    {
      question: 'When do I also need a rabies titer test?',
      answer: 'A rabies titer test (RNATT) is required only for pets coming from high-risk rabies countries. It is not required for pets from low-risk countries such as the UK, EU, USA, Canada, Australia, New Zealand, Japan, and Singapore. However, pets from Bahrain and Qatar must have a titer test despite being classified as low-risk. For the test, blood is drawn at least 21 days after the rabies vaccination, the result must be at least 0.5 IU/ml, and you then wait 90 days from the blood draw before your pet can enter the UAE.',
    },
    {
      question: 'What happens if the vaccination order or timing is wrong?',
      answer: 'If your records show the rabies vaccine was given before the microchip, MOCCAE will reject your import permit and you will need to re-vaccinate after microchipping and restart the timeline. If the vaccine is less than 21 days old at travel, expired, or administered before your pet reached 12 weeks of age, it will not be accepted. Every document must also show the same microchip number — a mismatch between the microchip certificate and the vaccination certificate causes automatic rejection at customs.',
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
      { '@type': 'ListItem', position: 2, name: 'Pet Vaccination Requirements for UAE Entry', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Vaccination Requirements for UAE Entry',
    description,
    image: ogImage,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/logo.png` } },
    datePublished: '2026-06-01',
    dateModified: '2026-06-01',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title: 'Pet Vaccination Requirements for UAE Entry (2026)',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'pet vaccination requirements UAE, rabies vaccine Dubai pets, rabies after microchip UAE, pet vaccine validity UAE entry, minimum age rabies vaccine pet, DHPPIL dog vaccine UAE, FVRCP cat vaccine UAE, rabies titer test Dubai, pet vaccination timeline Dubai, UAE pet import vaccinations',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Pet Vaccination Requirements' }]} />

      {/* Hero */}
      <Hero
        image="/images/guide-titer.jpg"
        imageAlt="A veterinarian preparing a vaccination for a calm dog before travel to Dubai"
        eyebrow="Pet Relocation Guide"
        title="Pet Vaccination Requirements for UAE Entry"
        subtitle="Rabies timing, validity and minimum age, the core vaccines dogs and cats need, and where the titer test fits in — explained clearly so nothing invalidates your move."
        updated="Updated June 2026"
      />

      {/* Why Vaccinations Matter */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                Why Vaccinations Decide Whether Your Pet Can Enter
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                Vaccinations are not just a health formality — they are a hard requirement for entry into the UAE. The rabies vaccine, in particular, must be given in the right order, at the right age, and within a strict validity window. Get any of these wrong and MOCCAE will reject your import permit.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The rules apply to every dog and cat. Beyond rabies, the UAE expects core vaccinations appropriate to the species, and pets from high-risk countries must add a rabies titer test on top of vaccination. This guide walks through each requirement and the timing mistakes that most often cause delays.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4F5BD5]" />
                  The Non-Negotiable Vaccination Rules
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Microchip must be implanted before the rabies vaccination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Pet must be at least 12 weeks old at rabies vaccination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Rabies vaccine must be valid (not expired) on arrival</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>High-risk countries also need a rabies titer test</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Rabies Vaccine at a Glance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Minimum Age</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">12 weeks at vaccination</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Minimum import age 12 weeks (low-risk) / 15 weeks (high-risk).</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm mb-1">Pre-Travel Window</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">21 days – 12 months</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">At least 21 days before travel, within 12 months of arrival.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm mb-1">Accepted Types</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Inactivated or recombinant</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Attenuated live virus vaccines are not accepted.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Order</p>
                  <p className="text-lg font-bold text-[#2A2A2A]">Microchip first, always</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Vaccinating before microchipping invalidates the vaccine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rabies Vaccination Rules */}
      <section id="rabies-rules" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Rabies Vaccination Rules in Detail
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The rabies vaccine is the single most important vaccination for UAE entry. Four things must all be correct: order, age, type, and timing.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0"><Microscope className="w-5 h-5" /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">1. Microchip Before Vaccination</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  Your pet must have an ISO 11784/11785 compliant 15-digit microchip implanted <strong>before</strong> the rabies vaccination. The microchip number must then appear on every subsequent document, including the vaccination certificate.
                </p>
                <div className="warning-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Wrong Order = Invalid Vaccine</p>
                      <p className="text-[#5A5A5A] text-sm">If your pet was vaccinated before being microchipped, the rabies vaccination is invalid for UAE entry. You will need to re-vaccinate after microchipping and wait another 21 days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0"><Calendar className="w-5 h-5" /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">2. Minimum Age</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet must be <strong>at least 12 weeks old</strong> at the time of the first rabies vaccination. Separately, the minimum import age is 12 weeks for pets from low-risk countries and 15 weeks for pets from high-risk countries.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0"><Syringe className="w-5 h-5" /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">3. Accepted Vaccine Type</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Only <strong>inactivated or recombinant</strong> rabies vaccines are accepted. Attenuated live virus vaccines are not acceptable. The certificate must include the microchip number, vaccine batch number, manufacturer, date of administration, and the vet's signature and stamp.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">4. Validity & Timing</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  The rabies vaccine must be administered <strong>between 21 days and 12 months</strong> before entering the UAE. It must be at least 21 days old at travel and still valid (not expired) on arrival. An annual booster is required, or you can follow the manufacturer's guidance for 2-3 year vaccines.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>At least 21 days old before travel</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Valid (not expired) on arrival day</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Within 12 months of arrival</span>
                  </div>
                  <div className="p-3 bg-[#F5F6FD] rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Annual booster kept current</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hi, I want to check that my pet's rabies vaccination timing is correct for entering the UAE.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              Check my vaccination timing on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Core Vaccinations */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
            Core Vaccinations Beyond Rabies
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed text-center max-w-3xl mx-auto mb-10">
            In addition to rabies, the UAE expects species-appropriate core vaccinations. These are typically administered alongside the rabies vaccine or shortly after.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Dog className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Dogs — DHPPIL</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Dogs need a combination vaccine covering distemper, hepatitis, parvovirus, parainfluenza, and leptospirosis.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Canine Distemper Virus (CDV)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Canine Parvovirus (CPV)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Infectious Canine Hepatitis (Adenovirus)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Leptospirosis (Canicola and Icterohaemorrhagiae)</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Cat className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Cats — FVRCP</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Cats need a combination vaccine covering rhinotracheitis, calicivirus, and panleukopenia.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Feline Panleukopenia (FPV / Feline Distemper)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Feline Rhinotracheitis (FHV-1 / Herpes Virus)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Feline Calicivirus (FCV)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Feline Leukemia (FeLV) — recommended by some authorities</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#2A2A2A] mb-4 text-center">Vaccination Order — Why It Matters</h3>
            <ol className="text-sm text-[#5A5A5A] space-y-2 list-decimal list-inside">
              <li><strong>Microchip first.</strong> Always. The microchip must precede the rabies vaccination.</li>
              <li><strong>Rabies vaccination second.</strong> Wait at least 21 days before travel.</li>
              <li><strong>Core vaccines third.</strong> Can be given alongside rabies or shortly after.</li>
              <li><strong>Titer test fourth (if required).</strong> Blood drawn at least 21 days after the rabies vaccination.</li>
              <li><strong>Health certificate last.</strong> Within 10 days of arrival.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Titer Test Link for High-Risk Countries */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A]">
                  High-Risk Countries: Add the Titer Test
                </h2>
              </div>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-5">
                If your pet is coming from a high-risk rabies country, vaccination alone is not enough — you also need a rabies titer test (RNATT) to prove the vaccine produced immunity. This test sits on top of the rabies vaccination and significantly extends your timeline.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-5">
                It is <strong>not required</strong> for pets from low-risk countries such as the UK, EU, USA, Canada, Australia, New Zealand, Japan, and Singapore. However, pets from <strong>Bahrain and Qatar</strong> must have a titer test despite being classified as low-risk — a frequently missed exception.
              </p>
              <Link
                to="/guides/rabies-titer-test-dubai/"
                className="inline-flex items-center gap-2 text-[#4F5BD5] font-semibold hover:underline"
              >
                Read the full Rabies Titer Test guide
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </Link>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">How the Titer Test Connects to Vaccination</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Syringe className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Blood sample drawn <strong>≥21 days after</strong> the rabies vaccination</span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Minimum result: <strong>≥0.5 IU/ml</strong></span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Microscope className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Processed at a <strong>WOAH/ISO 17025 accredited laboratory</strong></span>
                </div>
                <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A] flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" />
                  <span><strong>90-day waiting period</strong> from the blood draw before entry</span>
                </div>
              </div>
              <div className="warning-box mt-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                  <p className="text-[#5A5A5A] text-sm">
                    From high-risk countries, the minimum timeline from vaccination to travel is about 4 months because of the 90-day waiting period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Timing Mistakes */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Common Vaccination Timing Mistakes
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
                  <td className="font-medium">Vaccinating before microchipping</td>
                  <td>Rabies vaccine is invalid; re-vaccinate and wait another 21 days</td>
                  <td>Always implant the ISO microchip first, then vaccinate</td>
                </tr>
                <tr>
                  <td className="font-medium">Travelling under 21 days post-vaccine</td>
                  <td>Vaccine not yet accepted; refused at permit or customs</td>
                  <td>Build in at least 21 days between vaccination and travel</td>
                </tr>
                <tr>
                  <td className="font-medium">Letting the rabies vaccine expire</td>
                  <td>Vaccine no longer valid on arrival</td>
                  <td>Keep the annual booster current; renew before it lapses</td>
                </tr>
                <tr>
                  <td className="font-medium">Vaccinating a pet under 12 weeks</td>
                  <td>Vaccine given too young is not accepted for entry</td>
                  <td>Wait until the pet is at least 12 weeks old</td>
                </tr>
                <tr>
                  <td className="font-medium">Using a live (attenuated) vaccine</td>
                  <td>Only inactivated or recombinant vaccines are accepted</td>
                  <td>Confirm the vaccine type with your vet before administering</td>
                </tr>
                <tr>
                  <td className="font-medium">Microchip number mismatch</td>
                  <td>Automatic rejection at customs</td>
                  <td>Ensure every document shows the same microchip number</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">A Single Timing Error Restarts the Clock</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  If the rabies vaccine was given before the microchip, MOCCAE will reject your import permit and you will need to re-vaccinate after microchipping and restart the timeline. For high-risk countries, a vaccination error can also push back the titer test and its 90-day wait — adding months to your move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Dubai Pet Relocation Plans the Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How Dubai Pet Relocation Plans Your Vaccination Timeline
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Vaccination timing is where most relocations go wrong. Dubai Pet Relocation sequences every step so nothing invalidates the rest of your pet's paperwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Microscope className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Confirm Microchip First</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We verify an ISO 11784/11785 microchip is in place before any rabies vaccination, so the vaccine counts toward UAE entry.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Sequence the Dates</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We schedule rabies, core vaccines, and (if needed) the titer test in the correct order, respecting the 21-day and 12-month windows.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <FlaskConical className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Plan Around the Titer</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">For high-risk countries we build the 90-day post-titer wait into your timeline so the permit and travel dates line up.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Check the Certificates</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We confirm the vaccination certificate shows the microchip number, batch, manufacturer, date, and vet stamp — and that everything matches.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hi, I'd like help planning the vaccination timeline for my pet's move to the UAE.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-2xl font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              Plan my vaccination timeline on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about pet vaccination requirements for UAE entry.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources */}
      <OfficialSources />

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete step-by-step guide to all documentation needed for importing pets into the UAE.</p>
            </Link>
            <Link to="/guides/rabies-titer-test-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <FlaskConical className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Rabies Titer Test Guide</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">When the titer test is required, accepted labs, the 0.5 IU/ml threshold, and the 90-day wait.</p>
            </Link>
            <Link to="/service/pet-import-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Pet Import to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Our end-to-end pet import service, from documents and vaccinations to arrival in Dubai.</p>
            </Link>
            <Link to="/contact/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Stethoscope className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Contact Us</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Have a vaccination question? Get in touch and we'll confirm your pet's exact requirements.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Get Your Pet's Vaccinations Right the First Time
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            One vaccination mistake — wrong order, wrong age, or an expired vaccine — can delay your move by weeks or months. Dubai Pet Relocation sequences every step so your paperwork stays valid through to arrival.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Check My Vaccination Plan"
              message="Hi Dubai Pet Relocation, I want to make sure my pet's vaccinations meet the UAE entry requirements. Can you check my timeline?"
              className="whatsapp-pulse"
            />
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
