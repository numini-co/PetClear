import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sun,
  ThermometerSun,
  Plane,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Shield,
  Wind,
  HelpCircle,
  Dog,
  Cat,
  MapPin,
  Calendar,
  PawPrint,
  Ban,
  CheckCircle,
  XCircle,
  MessageCircle,
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
export default function SummerTravelGuide() {
  const title = 'Summer Pet Embargo Dubai | Heat & Airline Limits'
  const description =
    'Summer pet embargo Dubai: airline heat limits, brachycephalic restrictions, and safer timing or routing alternatives.'
  const canonical = `${BASE_URL}/guides/pet-travel-summer-dubai/`
  const ogImage = `${BASE_URL}/assets/og-summer-travel.jpg`

  const faqData = [
    {
      question: 'Can my dog fly to Dubai in July?',
      answer: 'Most airlines impose a summer heat embargo from May 1 to September 30, which means they will not transport pets in cargo during July. However, some airlines may offer limited early morning slots, and private pet nanny services or cargo charters can sometimes operate outside embargo dates. The safest option is to plan your move before May 1 or after September 30. Dubai Pet Relocation can advise on alternative routing and timing strategies.',
    },
    {
      question: 'What if my move date is fixed and falls during the embargo?',
      answer: 'If your move date is fixed during the embargo, you have several options: (1) Use a pet nanny service that transports pets in climate-controlled vehicles or cabin-accompanied flights. (2) Route via a cooler airport hub with a connecting airline that does not embargo. (3) Consider a private pet charter for emergency moves. (4) In some cases, boarding your pet in the origin country until the embargo ends is more cost-effective and safer than forcing a summer move. Dubai Pet Relocation helps evaluate all options based on your timeline and budget.',
    },
    {
      question: 'Are there any airlines without a summer embargo?',
      answer: 'Very few airlines operate pet cargo without any summer restrictions. Some carriers may offer limited early morning or late evening slots when ground temperatures are below 29°C. However, these policies change year-to-year and are never guaranteed. Turkish Cargo, KLM Cargo, and Lufthansa Cargo occasionally have more flexible routing options through cooler European hubs, but they still enforce temperature restrictions at the origin and destination airports. Always confirm directly with the cargo department 48–72 hours before departure.',
    },
    {
      question: 'Do brachycephalic breeds have additional summer restrictions?',
      answer: 'Yes. Brachycephalic (flat-faced) breeds such as Pugs, Bulldogs, Boston Terriers, Shih Tzus, Persian cats, and Boxers face significantly higher risk during summer travel. Many airlines ban these breeds entirely from May 1 to September 30. Some carriers, including Emirates SkyCargo, have year-round restrictions or require one crate size larger than standard. A veterinary fitness certificate within 48 hours of departure is often mandatory.',
    },
    {
      question: 'What temperature is too hot for pet cargo travel?',
      answer: 'IATA guidelines state that pets should not be exposed to ground temperatures above 29°C (84°F) for extended periods. Cargo hold temperatures are maintained at 18–24°C (64–75°F) during flight, but ground handling — loading, tarmac waiting, and unloading — is where the risk lies. If the tarmac temperature exceeds 29°C, airlines will embargo pet cargo to prevent heat stroke, respiratory distress, and death.',
    },
    {
      question: 'Is summer pet travel more expensive than winter?',
      answer: 'Yes, summer travel is generally more expensive due to limited availability, alternative routing costs, and premium services like pet nannies or private charters. Cargo rates may increase 20–40% during peak summer. Additionally, if you need to board your pet until the embargo ends, boarding costs add to the total. However, forcing a summer cargo flight without proper planning can result in refusal at check-in, which is far more costly than waiting for cooler weather.',
    },
    {
      question: 'What cooling measures do airlines use in cargo holds?',
      answer: 'Modern cargo holds on wide-body aircraft (Boeing 777, Airbus A350, etc.) are pressurized and climate-controlled to 18–24°C. However, the cargo hold does not receive the same ventilation as the passenger cabin. Airlines use temperature-controlled containers for some cargo, but standard pet crates rely on ambient hold temperature. The biggest risk is ground handling: tarmac time, loading delays, and waiting in non-climate-controlled areas.',
    },
    {
      question: 'How does Dubai Pet Relocation handle summer pet relocations?',
      answer: 'Dubai Pet Relocation has a dedicated summer protocol: (1) We schedule partner vet health checks within 48 hours of departure to confirm fitness for travel. (2) We book early morning flights (before 8 AM) when ground temperatures are lowest. (3) We prioritize direct routing to minimize total travel time and tarmac exposure. (4) We coordinate with airlines that have the best summer track records. (5) We advise on cooling crate liners, absorbent bedding, and hydration strategies. (6) If embargo blocks all options, we arrange boarding and reschedule at no extra planning fee.',
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
      { '@type': 'ListItem', position: 2, name: 'Pet Travel During Dubai Summer Heat', item: canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: ogImage,
    author: { '@type': 'Organization', name: 'Dubai Pet Relocation', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Dubai Pet Relocation', logo: { '@type': 'ImageObject', url: `${BASE_URL}/assets/logo.png` } },
    datePublished: '2025-01-15',
    dateModified: '2026-01-10',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  const schemas = [faqSchema, breadcrumbSchema, articleSchema]

  const meta = {
    title,
    description,
    canonical,
    ogImage,
    ogType: 'article',
    keywords: 'Dubai summer pet travel embargo, pet travel summer heat Dubai, airline pet embargo UAE, brachycephalic dog summer ban, pet cargo temperature restrictions, summer pet relocation Dubai, heat stroke pet travel, early morning pet flights Dubai, pet nanny service Dubai, private pet charter Dubai',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Summer Pet Travel Guide' }]} />

      {/* Hero */}
      <Hero
        image="/images/guide-summer.jpg"
        imageAlt="A dog staying cool with water in the shade on a hot Dubai summer day"
        eyebrow="Pet Relocation Guide"
        title="Summer Pet Embargo Dubai — Heat, Airlines & Options"
        subtitle="Dubai summers exceed 45°C, making pet cargo dangerous. Airline embargos, breed bans, and the safe alternatives — explained."
        updated="Updated June 2026"
      />

      {/* What is Summer Embargo */}
      <section id="embargo-dates" className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                What Is the Summer Heat Embargo?
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                The <strong>summer heat embargo</strong> is an airline policy that restricts or completely prohibits pet cargo travel during the hottest months of the year. It exists to protect animals from heat stroke, respiratory failure, and death during ground handling operations.
              </p>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                While aircraft cargo holds are climate-controlled (18–24°C), the danger occurs on the tarmac: loading, waiting, and unloading expose pets to extreme heat. Asphalt temperatures can reach 60–70°C, and even short delays can be fatal.
              </p>
              <div className="bg-white rounded-[20px] shadow-sm p-6">
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-[#C89F5A]" />
                  Why Embargos Exist
                </h3>
                <ul className="space-y-2 text-sm text-[#5A5A5A]">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span>Cargo hold cooling is reduced on the ground before engine start</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span>Tarmac temperatures exceed safe limits for extended exposure</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span>Brachycephalic breeds have heightened heat stroke risk</span></li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" /><span>Airlines face liability and reputational risk from pet deaths</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5">2026 Summer Embargo Overview</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#C9453A]/5 rounded-xl border-l-4 border-[#C9453A]">
                  <p className="font-bold text-[#C9453A] text-lg mb-1">May 1 – September 30</p>
                  <p className="text-sm text-[#5A5A5A]">Standard embargo period for most airlines serving Dubai. Exact dates vary by carrier and may shift based on weather forecasts.</p>
                </div>
                <div className="p-4 bg-[#C89F5A]/5 rounded-xl border-l-4 border-[#C89F5A]">
                  <p className="font-bold text-[#C89F5A] text-lg mb-1">29°C Ground Rule</p>
                  <p className="text-sm text-[#5A5A5A]">If ground temperature exceeds 29°C at any point during handling, airlines will embargo or refuse pet cargo. This applies even outside May–September.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl border-l-4 border-[#4F5BD5]">
                  <p className="font-bold text-[#4F5BD5] text-lg mb-1">Early Morning Exception</p>
                  <p className="text-sm text-[#5A5A5A]">Some airlines offer limited early morning slots (before 8 AM) when ground temperatures are lower. These fill up months in advance.</p>
                </div>
                <div className="p-4 bg-[#4F5BD5]/5 rounded-xl border-l-4 border-[#4F5BD5]">
                  <p className="font-bold text-[#4F5BD5] text-lg mb-1">Brachycephalic Add-On</p>
                  <p className="text-sm text-[#5A5A5A]">Many airlines extend brachycephalic breed embargos to include spring and autumn months, or ban them year-round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airline Embargo Table */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Airline Summer Embargo Policies for Dubai
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Airline</th>
                  <th>Embargo Dates</th>
                  <th>Brachycephalic Ban</th>
                  <th>Early Morning Slots</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Emirates SkyCargo</td>
                  <td>May 1 – Sep 30</td>
                  <td>Year-round for some breeds</td>
                  <td>Limited, book early</td>
                  <td>One size larger crate for snub-nosed</td>
                </tr>
                <tr>
                  <td className="font-medium">Etihad Cargo</td>
                  <td>May 1 – Sep 30</td>
                  <td>May 1 – Sep 30 (extended)</td>
                  <td>Occasionally available</td>
                  <td>Strict health cert requirements</td>
                </tr>
                <tr>
                  <td className="font-medium">flydubai</td>
                  <td>May 1 – Sep 30</td>
                  <td>May 1 – Sep 30</td>
                  <td>Rare</td>
                  <td>Limited large crate capacity</td>
                </tr>
                <tr>
                  <td className="font-medium">Lufthansa Cargo</td>
                  <td>Variable by hub</td>
                  <td>May 1 – Sep 30</td>
                  <td>Available via Frankfurt</td>
                  <td>Good European routing option</td>
                </tr>
                <tr>
                  <td className="font-medium">KLM Cargo</td>
                  <td>Variable by hub</td>
                  <td>May 1 – Sep 30</td>
                  <td>Available via Amsterdam</td>
                  <td>Strong hub for Asia–Europe connections</td>
                </tr>
                <tr>
                  <td className="font-medium">Turkish Cargo</td>
                  <td>Variable by hub</td>
                  <td>May 1 – Sep 30</td>
                  <td>Available via Istanbul</td>
                  <td>Popular for Asia & Africa routes</td>
                </tr>
                <tr>
                  <td className="font-medium">Qatar Cargo</td>
                  <td>May 1 – Sep 30</td>
                  <td>May 1 – Sep 30</td>
                  <td>Limited</td>
                  <td>Doha hub; similar climate to Dubai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Policies Change — Always Confirm</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Airline embargo policies change annually based on weather patterns, incident history, and operational adjustments. Always confirm the exact embargo dates with the cargo department 48–72 hours before departure. Dubai Pet Relocation verifies this for every summer booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature & Brachycephalic */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <ThermometerSun className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Temperature Restrictions</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Understanding temperature limits is critical for safe summer pet travel. Here are the key thresholds that airlines and IATA use to make embargo decisions.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm">Cargo Hold: 18–24°C</p>
                  <p className="text-xs text-[#5A5A5A]">Climate-controlled cargo hold temperature during flight. Safe for all breeds.</p>
                </div>
                <div className="p-3 bg-[#C89F5A]/5 rounded-xl">
                  <p className="font-semibold text-[#C89F5A] text-sm">Ground Handling Limit: 29°C</p>
                  <p className="text-xs text-[#5A5A5A]">Maximum safe tarmac exposure temperature. Above this, airlines embargo.</p>
                </div>
                <div className="p-3 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-semibold text-[#C9453A] text-sm">Danger Zone: 35°C+</p>
                  <p className="text-xs text-[#5A5A5A]">Extended exposure risks heat stroke, organ failure, and death within minutes for brachycephalic breeds.</p>
                </div>
                <div className="p-3 bg-[#4F5BD5]/5 rounded-xl">
                  <p className="font-semibold text-[#4F5BD5] text-sm">Asphalt Temperature: 60–70°C</p>
                  <p className="text-xs text-[#5A5A5A]">Dubai summer tarmac temperatures. Even brief delays can be fatal in unventilated cargo areas.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Brachycephalic Breed Summer Bans</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
                Brachycephalic (flat-faced) breeds have compromised airways, making them extremely vulnerable to heat stress. Many airlines have specific bans or extra requirements for these breeds during summer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                <div className="p-2 bg-[#FDF6E8] rounded-lg text-xs text-[#5A5A5A]"><strong>Dogs:</strong> Pug, Bulldog, French Bulldog, Boston Terrier, Boxer, Shih Tzu, Pekingese, Cavalier King Charles Spaniel, Chow Chow</div>
                <div className="p-2 bg-[#FDF6E8] rounded-lg text-xs text-[#5A5A5A]"><strong>Cats:</strong> Persian, Himalayan, Exotic Shorthair, British Shorthair, Scottish Fold</div>
              </div>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>Most airlines ban these breeds entirely from May 1 – September 30</span></li>
                <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-[#C9453A] shrink-0 mt-0.5" /><span>Emirates requires one crate size larger than standard for brachycephalic dogs</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Veterinary fitness certificate within 48 hours may allow some exceptions</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /><span>Pet nanny services or cabin transport are safer alternatives</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives & Cost */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Summer Travel Alternatives & Cost Comparison
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <Sun className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Early Morning Flights</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Some airlines offer limited cargo slots before 8 AM when ground temperatures are lowest. Book 2–3 months in advance.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Cooler Hub Routing</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Route via European hubs (Amsterdam, Frankfurt, London) where summer temperatures are lower and embargos may be shorter.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A]/10 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Pet Nanny Services</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">A professional escort travels with your pet in-cabin or as excess baggage, bypassing cargo embargo restrictions.</p>
            </div>
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9453A]/10 flex items-center justify-center mx-auto mb-4">
                <Plane className="w-6 h-6 text-[#C9453A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Private Charter</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Emergency option for time-sensitive moves. Most expensive but offers complete climate control and direct routing.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="data-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Alternative</th>
                  <th>Est. Cost</th>
                  <th>Availability</th>
                  <th>Best For</th>
                  <th>Limitations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Standard Cargo (Winter)</td>
                  <td>AED 2,500 – 6,000</td>
                  <td>High</td>
                  <td>All breeds, standard moves</td>
                  <td>Not available May–Sep</td>
                </tr>
                <tr>
                  <td className="font-medium">Standard Cargo (Summer)</td>
                  <td>AED 3,500 – 8,500</td>
                  <td>Very Limited</td>
                  <td>Early morning slots only</td>
                  <td>High refusal risk</td>
                </tr>
                <tr>
                  <td className="font-medium">Pet Nanny Service</td>
                  <td>AED 5,000 – 12,000</td>
                  <td>Moderate</td>
                  <td>Small–medium pets, brachycephalic</td>
                  <td>Weight limits apply</td>
                </tr>
                <tr>
                  <td className="font-medium">Cooler Hub Routing</td>
                  <td>AED 4,000 – 9,000</td>
                  <td>Moderate</td>
                  <td>Europe, Asia origins</td>
                  <td>Longer total travel time</td>
                </tr>
                <tr>
                  <td className="font-medium">Private Charter</td>
                  <td>AED 25,000 – 80,000</td>
                  <td>Low</td>
                  <td>Emergency, large/multiple pets</td>
                  <td>Extremely expensive</td>
                </tr>
                <tr>
                  <td className="font-medium">Board + Wait</td>
                  <td>AED 1,500 – 3,500 / month</td>
                  <td>High</td>
                  <td>Flexible timeline</td>
                  <td>Emotional separation, boarding costs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How Dubai Pet Relocation Handles Summer */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              How Dubai Pet Relocation Handles Summer Moves
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Summer relocations require extra planning, early booking, and contingency protocols. Here's how Dubai Pet Relocation keeps your pet safe during hot-weather travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Partner Vet Health Check</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Every summer traveler gets a pre-flight veterinary fitness examination within 48 hours of departure. The vet confirms your pet can handle the journey.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Sun className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Morning Flight Booking</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We prioritize flights departing before 8:00 AM, when ground temperatures are lowest and tarmac exposure is minimized.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <Plane className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Direct Routing Priority</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We book direct flights or single-connection routes through cooler hubs to minimize total travel time and tarmac exposure.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Wind className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Cooling Measures</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We advise on cooling crate liners, absorbent bedding (never straw), frozen water bowls, and proper ventilation labels to ensure maximum airflow.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Timeline Adjustments</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">If your move falls during embargo, we adjust documentation timelines and permit validity dates so your paperwork doesn't expire while waiting.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4">
                <PawPrint className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Free Rescheduling</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">If embargo blocks your planned flight, we reschedule your pet's travel at no additional planning fee. We also arrange boarding if needed.</p>
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
              Common questions about pet travel during Dubai summer heat.
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
      <section className="py-16 bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/dog-relocation-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Dog className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Dog Relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete guide to relocating dogs to Dubai, including breed rules, crate requirements, and documentation.</p>
            </Link>
            <Link to="/cat-relocation-to-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <Cat className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">Cat Relocation to Dubai</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Everything you need to know about bringing cats to Dubai, including summer considerations for flat-faced breeds.</p>
            </Link>
            <Link to="/guides/pet-relocation-cost-dubai/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <DollarSign className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">Pet Relocation Cost Guide</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Detailed breakdown of pet relocation costs to Dubai, including summer pricing and alternative transport options.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Moving During Summer? Let's Plan Safely.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Dubai Pet Relocation's summer protocol includes early morning booking, partner vet checks, and free rescheduling if embargo blocks your flight. Don't risk your pet's safety — get expert guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Plan Your Summer Move"
              message="Hi Dubai Pet Relocation, I need to move my pet to Dubai during the summer and I want to understand the safest options. Can you help me plan?"
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
