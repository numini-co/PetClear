import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Globe,
  CheckCircle,
  XCircle,
  HelpCircle,
  FileCheck,
  Stethoscope,
  Plane,
  Syringe,
  FlaskConical,
  MessageCircle,
  PawPrint,
  RefreshCw,
  Ban,
  MapPin,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import Breadcrumb from '../components/Breadcrumb.tsx'
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
export default function TiterTestGuide() {
  const title = 'Rabies Titer Test (RNATT) for Dubai — Complete Guide for Pet Owners'
  const description = 'Complete guide to the rabies titer test (RNATT) for pet travel to Dubai. Learn which countries require it, required antibody levels, accredited labs, timeline, costs, and how Dubai Pet Relocation coordinates testing.'
  const canonical = `${BASE_URL}/guides/rabies-titer-test-dubai/`
  const ogImage = `${BASE_URL}/assets/og-titer-test.jpg`

  const faqData = [
    {
      question: 'Is my country high-risk for rabies titer test requirements?',
      answer: 'High-risk countries include India, Pakistan, Philippines, South Africa, Nigeria, Kenya, Bangladesh, Sri Lanka, Thailand, Vietnam, Indonesia, Egypt, Morocco, most of sub-Saharan Africa, and most of South and Southeast Asia. Some Eastern European countries may also require titer tests depending on current UAE regulations. If you are traveling from the UK, EU, USA, Canada, Australia, New Zealand, or Japan, a titer test is generally not required. Dubai Pet Relocation confirms the exact requirement for your origin country before starting the process.',
    },
    {
      question: 'How long does the rabies titer test take?',
      answer: 'The timeline has multiple stages: (1) Blood draw: must be 21+ days after rabies vaccination. (2) Sample shipping: 1–7 days depending on lab location. (3) Lab processing: 1–2 weeks for results. (4) Waiting period: 90 days from blood draw date before travel is allowed. Total minimum time from vaccination to travel: 4 months. If you are short on time, contact Dubai Pet Relocation immediately — we may be able to expedite lab shipping or suggest routing alternatives.',
    },
    {
      question: 'What if my titer test result is below 0.5 IU/ml?',
      answer: 'If your pet\'s result is below 0.5 IU/ml, they are not eligible to travel under UAE regulations. You must: (1) Revaccinate with an inactivated (killed) rabies vaccine. (2) Wait 21 days after revaccination. (3) Draw blood again and send for retesting. (4) Wait another 90 days from the new blood draw date before travel. This adds a minimum of 4+ months to your timeline. To avoid this, ensure the first vaccination is done correctly, wait the full 21 days, and use a reputable vet for blood draw.',
    },
    {
      question: 'Can I skip the 90-day waiting period?',
      answer: 'No. The 90-day waiting period from the date of blood draw is mandatory under UAE regulations and cannot be waived, expedited, or bypassed. There are no exceptions for urgent travel, personal circumstances, or professional connections. Dubai Pet Relocation builds this 90-day wait into every relocation timeline and tracks the exact date your pet becomes eligible to travel.',
    },
    {
      question: 'Which labs are accredited for titer tests for Dubai?',
      answer: 'The UAE accepts results from EU-accredited laboratories (found in Germany, UK, France, Netherlands, Spain, and Italy) and some US laboratories approved by the USDA. Very few labs in Asia and Africa are accredited, which means samples from these regions often need to be shipped to Europe. Dubai Pet Relocation maintains a verified list of accredited labs and coordinates international sample shipping for clients in regions without local accredited facilities.',
    },
    {
      question: 'How much does a rabies titer test cost?',
      answer: 'Costs vary significantly based on location and lab: (1) Blood draw and vet processing: AED 200–500. (2) Lab testing fee: AED 400–1,500 depending on the lab. (3) International shipping: AED 200–500 if sending to an overseas lab. Total cost typically ranges from AED 800 to 2,500. Dubai Pet Relocation negotiates group rates with partner labs and handles shipping logistics to minimize costs.',
    },
    {
      question: 'How can I avoid a failed titer test?',
      answer: 'Follow these steps to maximize your chance of passing the first time: (1) Ensure the rabies vaccine is inactivated (killed virus), not live or modified live. (2) Wait the full 21 days after vaccination before drawing blood. (3) Use a vet experienced in titer test sample collection. (4) Do not draw blood too early — antibody levels peak around 3–4 weeks post-vaccination. (5) Avoid vaccinating when your pet is sick, stressed, or on immunosuppressive medication. (6) If your pet has a history of low titers, consult a vet about a booster schedule before the official test.',
    },
    {
      question: 'Does the titer test ever expire?',
      answer: 'The titer test result itself does not expire for UAE purposes, but the underlying rabies vaccination must remain valid. If your pet\'s rabies vaccine expires and is not renewed on time, the titer test may no longer be considered valid for entry. Dubai Pet Relocation tracks both your titer test date and vaccination expiry to ensure everything is current on travel day.',
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
      { '@type': 'ListItem', position: 2, name: 'Rabies Titer Test for Dubai', item: canonical },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get a Rabies Titer Test (RNATT) for Dubai Pet Travel',
    description: 'Step-by-step guide to obtaining a rabies titer test for pets traveling from high-risk countries to Dubai.',
    totalTime: 'P4M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'AED', value: '800' },
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Rabies Vaccination',
        text: 'Ensure your pet receives an inactivated (killed) rabies vaccine from a licensed veterinarian.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Wait 21 Days',
        text: 'Wait a minimum of 21 days after vaccination before drawing blood for the titer test.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Blood Draw & Sample Preparation',
        text: 'A veterinarian draws blood and prepares the serum sample for shipping to an accredited laboratory.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Ship to Accredited Lab',
        text: 'Ship the sample to an EU-accredited or USDA-approved laboratory. Use proper cold chain packaging.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Receive Results',
        text: 'Wait 1–2 weeks for results. The result must be ≥0.5 IU/ml to be accepted by the UAE.',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Wait 90 Days',
        text: 'Wait 90 days from the date of blood draw. Your pet cannot travel until this waiting period is complete.',
      },
      {
        '@type': 'HowToStep',
        position: 7,
        name: 'Apply for MOCCAE Permit and Travel',
        text: 'Once the 90-day wait is complete, apply for the MOCCAE import permit and book travel.',
      },
    ],
  }

  const schemas = [faqSchema, breadcrumbSchema, howToSchema]

  const meta = {
    title: 'Rabies Titer Test (RNATT) for Dubai Pet Travel',
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'rabies titer test Dubai, RNATT UAE, rabies antibody test pet travel, titer test requirements Dubai, accredited titer test labs, pet travel from India to Dubai titer, Philippines to Dubai pet titer, South Africa to Dubai rabies test, how long titer test takes, 0.5 IU/ml titer requirement UAE',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Rabies Titer Test Guide' }]} />

      {/* Hero */}
      <Hero
        image="/images/guide-titer.jpg"
        imageAlt="A veterinarian drawing a blood sample from a calm dog for a rabies titer test"
        eyebrow="Pet Relocation Guide"
        title="Rabies Titer Test (RNATT) for Dubai — Complete Guide for Pet Owners"
        subtitle="From a high-risk country, the RNATT is the most critical, time-consuming step. What it is, who needs it, and how to pass it the first time."
        updated="Updated June 2026"
      />

      {/* What is Titer Test */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is a Rabies Titer Test?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                A <strong>rabies titer test</strong>, also known as a <strong>RNATT</strong> (Rabies Neutralising Antibody Titre Test), is a blood test that measures the level of rabies antibodies in your pet's bloodstream. It proves that your pet's rabies vaccination has successfully triggered an immune response.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The UAE requires this test for pets traveling from high-risk countries to ensure they do not carry rabies into the country. The test must be performed at an accredited laboratory, and the result must meet the minimum threshold before your pet can travel.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-[#4F5BD5]" />
                  Key Facts About the Titer Test
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Measures rabies antibodies in blood serum</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Required result: ≥0.5 IU/ml (EU standards accepted by UAE)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Must be drawn 21+ days after rabies vaccination</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>90-day waiting period from blood draw before travel</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Minimum 4 months from vaccination to travel</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">Countries Requiring Titer Test</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">South Asia</p>
                  <p className="text-xs text-[#5A5A5A]">India, Pakistan, Bangladesh, Sri Lanka, Nepal</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Southeast Asia</p>
                  <p className="text-xs text-[#5A5A5A]">Philippines, Thailand, Vietnam, Indonesia, Cambodia, Laos</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Africa</p>
                  <p className="text-xs text-[#5A5A5A]">South Africa, Nigeria, Kenya, Egypt, Morocco, Ghana, most of sub-Saharan Africa</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm mb-1">Eastern Europe</p>
                  <p className="text-xs text-[#5A5A5A]">Some countries depending on current UAE regulations</p>
                </div>
              </div>
              <div className="p-4 bg-[#4F5BD5]/5 rounded-xl">
                <p className="font-semibold text-[#4F5BD5] text-sm mb-1">No Titer Required</p>
                <p className="text-xs text-[#5A5A5A]">UK, EU, USA, Canada, Australia, New Zealand, Japan, Singapore, and most of Western Europe generally do not require a titer test for Dubai. Always confirm current rules as they can change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Full Titer Test Timeline — From Vaccination to Travel
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Understanding the full timeline is essential. The titer test process takes a minimum of 4 months from the first vaccination to the day your pet can board a flight to Dubai.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Rabies Vaccination</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Your pet receives an <strong>inactivated (killed) rabies vaccine</strong> from a licensed veterinarian. This must be an approved vaccine type — live or modified live vaccines are not acceptable for titer testing. Record the exact date and vaccine batch number.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Wait 21 Days Minimum</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  You must wait at least 21 days after the rabies vaccination before drawing blood for the titer test. Drawing blood too early can result in a false low reading because antibodies have not yet peaked. For best results, wait 3–4 weeks.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Blood Draw & Sample Preparation</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  A veterinarian draws blood from your pet and prepares the serum sample. The sample must be properly labeled, stored, and packaged for shipping to an accredited laboratory. Poor sample handling can destroy the sample and delay results.
                </p>
                <div className="warning-box">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#2A2A2A] text-sm mb-1">Use an Experienced Vet</p>
                      <p className="text-[#5A5A5A] text-sm">Not all vets are familiar with titer test sample requirements. Dubai Pet Relocation connects you with partner vets who have experience with international titer testing and proper sample handling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">4</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Ship to Accredited Lab</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-3">
                  The sample is shipped to an accredited laboratory. Shipping time varies by location: 1–3 days within Europe, 3–7 days from Asia or Africa. Samples must be shipped with cold chain preservation (refrigerated, not frozen) to maintain integrity.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A]"><strong>EU Labs:</strong> Germany, UK, France, Netherlands, Spain, Italy</div>
                  <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A]"><strong>US Labs:</strong> USDA-approved facilities (limited list)</div>
                  <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A]"><strong>Asia/Africa:</strong> Very few accredited labs; international shipping usually required</div>
                  <div className="p-3 bg-white rounded-xl text-sm text-[#5A5A5A]"><strong>Shipping:</strong> Cold chain, refrigerated, courier service recommended</div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-lg font-bold shrink-0">5</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Lab Processing & Results</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  The laboratory processes the sample and measures the rabies antibody level. Results are typically available in 1–2 weeks. The result must show <strong>≥0.5 IU/ml</strong> to be accepted by the UAE. Results are usually sent as a PDF certificate. Dubai Pet Relocation tracks results and confirms the reading meets UAE standards.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8 flex gap-5">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A] text-white flex items-center justify-center text-lg font-bold shrink-0">6</div>
              <div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">90-Day Waiting Period</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  From the date the blood was drawn, you must wait exactly 90 days before your pet is eligible to travel to Dubai. This waiting period is mandatory and cannot be shortened. Dubai Pet Relocation calculates this date precisely and sends reminders when your pet becomes travel-eligible.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#2A2A2A] mb-4 text-center">Minimum Total Timeline</h3>
            <div className="overflow-x-auto">
              <table className="data-table min-w-[480px]">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Duration</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">Rabies vaccination</td>
                    <td>Day 0</td>
                    <td>Inactivated vaccine only</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Post-vaccination wait</td>
                    <td>21 days</td>
                    <td>Minimum before blood draw</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Blood draw & shipping</td>
                    <td>1–7 days</td>
                    <td>Depends on lab location</td>
                  </tr>
                  <tr>
                    <td className="font-medium">Lab processing</td>
                    <td>7–14 days</td>
                    <td>1–2 weeks for results</td>
                  </tr>
                  <tr>
                    <td className="font-medium">90-day waiting period</td>
                    <td>90 days</td>
                    <td>From blood draw date</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#C9453A]">Minimum total</td>
                    <td className="font-medium text-[#C9453A]">~4 months</td>
                    <td className="font-medium text-[#C9453A]">From vaccination to travel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Failure */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Titer Test Cost Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vet consultation & blood draw</td>
                      <td>200 – 500</td>
                    </tr>
                    <tr>
                      <td>Lab testing fee</td>
                      <td>400 – 1,500</td>
                    </tr>
                    <tr>
                      <td>International sample shipping</td>
                      <td>200 – 500</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Total estimated cost</td>
                      <td className="font-medium">800 – 2,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#5A5A5A] mt-4 leading-relaxed">
                Costs vary significantly by country and lab location. Testing in the UK or Germany is typically cheaper than shipping from Asia to those labs. Dubai Pet Relocation negotiates group rates with partner labs and handles all shipping logistics.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">What If the Result Is Low?</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                If your pet's result is below 0.5 IU/ml, you must restart the process. This is the most common setback in pet relocations from high-risk countries — and the most expensive in terms of time.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Step 1: Revaccinate</p>
                  <p className="text-xs text-[#5A5A5A]">Administer a new inactivated rabies vaccine.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Step 2: Wait 21 days</p>
                  <p className="text-xs text-[#5A5A5A]">Wait minimum 21 days before drawing blood again.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Step 3: Retest</p>
                  <p className="text-xs text-[#5A5A5A]">Draw blood and send to accredited lab for second test.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Step 4: Wait another 90 days</p>
                  <p className="text-xs text-[#5A5A5A]">From new blood draw date. Total delay: 4+ months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Avoid Failure & Dubai Pet Relocation Coordination */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How to Avoid Titer Test Failure
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              A failed titer test adds 4+ months to your timeline. Follow these best practices to maximize your chance of passing the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Syringe className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Use Inactivated Vaccine</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Only inactivated (killed virus) rabies vaccines are acceptable. Live or modified live vaccines will not produce the correct antibody response for the test.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Wait the Full 21 Days</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Do not draw blood before 21 days have passed. For best results, wait 3–4 weeks so antibody levels peak.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Choose an Experienced Vet</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">A vet familiar with titer tests knows how to handle, label, and ship the sample correctly. Poor sample handling is a leading cause of invalid results.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Avoid Stress & Illness</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Do not vaccinate or test when your pet is sick, stressed, or on immunosuppressive medication. These factors can suppress antibody production.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <FlaskConical className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Ship to the Right Lab</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Only EU-accredited or USDA-approved labs are accepted. Using a non-accredited lab will result in rejection by the UAE.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Track Everything</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Keep copies of vaccination certificates, lab results, and shipping receipts. Dubai Pet Relocation maintains a digital file for every client.</p>
            </div>
          </div>

          <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2A2A]">How Dubai Pet Relocation Coordinates Titer Tests</h3>
            </div>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
              Dubai Pet Relocation's titer test coordination service manages the entire process from vaccination to result tracking. We have partnered with accredited labs and experienced veterinarians in multiple countries.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">1</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Vet Appointment</p>
                <p className="text-xs text-[#5A5A5A] mt-1">We book a partner vet for vaccination and blood draw.</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">2</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Sample Collection</p>
                <p className="text-xs text-[#5A5A5A] mt-1">Proper handling, labeling, and cold-chain packaging.</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">3</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Lab Shipping</p>
                <p className="text-xs text-[#5A5A5A] mt-1">Courier service to the nearest accredited lab.</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">4</div>
                <p className="font-semibold text-[#2A2A2A] text-sm">Result Tracking</p>
                <p className="text-xs text-[#5A5A5A] mt-1">We monitor results, verify ≥0.5 IU/ml, and plan next steps.</p>
              </div>
            </div>
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
              Common questions about the rabies titer test for Dubai pet travel.
            </p>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides & Routes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/guides/uae-pet-import-requirements/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete guide to all documentation needed for importing pets into the UAE.</p>
            </Link>
            <Link to="/how-it-works/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Clock className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">How Dubai Pet Relocation Works</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Learn about our transparent coordination process from assessment to arrival.</p>
            </Link>
            <Link to="/routes/india-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">India to Dubai Route</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Specific guide for relocating pets from India to Dubai, including titer test requirements.</p>
            </Link>
            <Link to="/routes/philippines-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Philippines to Dubai Route</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Step-by-step guide for Filipino pet owners relocating to Dubai with their pets.</p>
            </Link>
            <Link to="/routes/south-africa-to-dubai/" className="bg-[#F5F6FD] rounded-[20px] p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">South Africa to Dubai Route</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete relocation guide for South African pet owners moving to Dubai.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Need Help With Your Titer Test?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Dubai Pet Relocation coordinates titer tests from start to finish: vet appointments, sample collection, accredited lab shipping, and result tracking. Don't risk a 4-month delay — get it right the first time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Start Titer Test Coordination"
              message="Hi Dubai Pet Relocation, I need help coordinating a rabies titer test for my pet's relocation to Dubai. Can you walk me through the process?"
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
