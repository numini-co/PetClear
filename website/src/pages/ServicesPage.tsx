import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, CheckCircle, Shield, Plane, FileCheck, Heart, Stethoscope, Phone, Calendar, MapPin, PawPrint, Home, X, Star, Clock, ArrowRight
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}>
    {children}
  </div>
)

const WhatsAppCta = ({
  text,
  message,
  className = '',
  fullWidth = false,
}: {
  text: string
  message: string
  className?: string
  fullWidth?: boolean
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm hover:shadow-md ${fullWidth ? 'w-full' : ''} ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

const tiers = [
  {
    name: 'PawPilot',
    subtitle: 'Essential',
    price: 'AED 1,500 – 2,500',
    description: 'Perfect for experienced pet owners who need expert guidance and document checks but prefer to handle bookings themselves.',
    icon: Plane,
    color: 'bg-[#EEF0FC]',
    iconBg: 'bg-[#4F5BD5]',
    features: [
      { label: 'Route & eligibility check', included: true },
      { label: 'Document checklist & review', included: true },
      { label: 'MOCCAE permit guidance', included: true },
      { label: 'WhatsApp support (business hours)', included: true },
      { label: 'Partner recommendations', included: true },
      { label: 'Timeline & deadline tracking', included: true },
      { label: 'Booking coordination', included: false },
      { label: 'Travel-day support', included: false },
      { label: 'Post-arrival check-in', included: false },
    ],
  },
  {
    name: 'PawPartner',
    subtitle: 'Premium',
    price: 'AED 3,000 – 5,000',
    description: 'Our most popular option. We handle the coordination, bookings, and communication so you can focus on your move.',
    icon: Star,
    color: 'bg-[#E9ECFB]',
    iconBg: 'bg-[#4F5BD5]',
    popular: true,
    features: [
      { label: 'Everything in PawPilot', included: true },
      { label: 'Booking coordination (airline, vet, transport)', included: true },
      { label: 'Travel-day support & updates', included: true },
      { label: 'Post-arrival check-in', included: true },
      { label: 'Priority WhatsApp support', included: true },
      { label: 'Document submission handling', included: true },
      { label: 'Customs clearance guidance', included: true },
      { label: 'Emergency contingency plan', included: false },
      { label: 'Boarding & nanny services', included: false },
    ],
  },
  {
    name: 'PawVIP',
    subtitle: 'Coordination',
    price: 'AED 5,000 – 8,000',
    description: 'White-glove service for complex relocations, nervous first-timers, or anyone who wants every detail handled.',
    icon: Heart,
    color: 'bg-[#EEF0FC]',
    iconBg: 'bg-[#C89F5A]',
    features: [
      { label: 'Everything in PawPartner', included: true },
      { label: 'Emergency contingency plan', included: true },
      { label: 'Dedicated relocation manager', included: true },
      { label: 'WhatsApp updates during the move', included: true },
      { label: 'Boarding & nanny arrangements', included: true },
      { label: 'Insurance coordination', included: true },
      { label: 'Home-to-home logistics', included: true },
      { label: 'Quarantine contingency prep', included: true },
      { label: 'Reunion day coordination', included: true },
    ],
  },
]

const addOns = [
  { icon: Shield, name: 'Travel Insurance', desc: 'Coverage for unexpected veterinary costs, flight cancellations, or delays during transit. Recommended for all long-haul relocations.' },
  { icon: Home, name: 'Boarding & Quarantine Contingency', desc: 'If documents are delayed or flights are cancelled, we arrange temporary boarding or quarantine facilities with vetted partners.' },
  { icon: PawPrint, name: 'Pet Nanny / Escort Service', desc: 'A trained pet nanny can accompany your pet on the journey, providing in-cabin care and reducing stress for anxious animals.' },
  { icon: Stethoscope, name: 'Pre-Travel Health Package', desc: 'Comprehensive vet exam, health certificate, parasite treatment, and sedation alternatives arranged with our partner clinics.' },
  { icon: MapPin, name: 'Door-to-Door Transport', desc: 'Collection from your home and delivery to your new address, including all ground transport in both origin and destination cities.' },
  { icon: FileCheck, name: 'Expedited Document Processing', desc: 'Rush processing for urgent timelines. We prioritize your application and coordinate with government offices and airlines for faster turnaround.' },
]

const processSteps = [
  { step: '1', icon: Phone, title: 'Initial Consultation', body: 'We learn about your pet, route, timeline, and budget. You get a realistic cost estimate and timeline overview.' },
  { step: '2', icon: FileCheck, title: 'Document Check', body: 'We review your existing documents (vaccinations, microchip, health records) and identify any gaps or errors.' },
  { step: '3', icon: Shield, title: 'Eligibility & Booking', body: 'We confirm breed eligibility, check airline policies, and begin booking flights and vet appointments.' },
  { step: '4', icon: Calendar, title: 'Pre-Travel Prep', body: 'Final health checks, crate fitting, travel-day instructions, and contingency plans are put in place.' },
  { step: '5', icon: Plane, title: 'Travel Day', body: 'We coordinate handoffs, check your pet in, and track the flight. You receive updates at every checkpoint.' },
  { step: '6', icon: MapPin, title: 'Arrival & Customs', body: 'We guide you or our partner through customs clearance, MOCCAE inspection, and transport to your new home.' },
  { step: '7', icon: Heart, title: 'Post-Arrival Check-In', body: 'We follow up after arrival to ensure your pet is settling in well and answer any questions about local registration or vets.' },
]

export default function ServicesPage() {
  const [compareTier, setCompareTier] = useState<string | null>(null)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dubai Pet Relocation Services',
    provider: {
      '@type': 'Organization',
      name: 'Dubai Pet Relocation',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pet Relocation Service Tiers',
      itemListElement: tiers.map((tier) => {
        const minPrice = tier.price.replace(/[^0-9]/g, '').slice(0, 5)
        return {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${tier.name} — ${tier.subtitle}`,
            description: tier.description,
          },
          priceCurrency: 'AED',
          price: minPrice,
        }
      }),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services/` },
    ],
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Services Dubai | Essential to Coordination',
          description: 'Three pet relocation service tiers: PawPilot (Essential), PawPartner (Premium), and PawVIP (Coordination). Transparent pricing and clear inclusions.',
          keywords: 'pet relocation services Dubai, pet coordination Dubai, pet relocation cost tiers, dog transport service UAE, cat transport service UAE, pet relocation packages',
          canonical: `${BASE_URL}/services/`,
          ogType: 'website',
        }}
        schemas={[serviceSchema, breadcrumbSchema]}
      />

      <Breadcrumb items={[{ label: 'Services' }]} />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/services-hero.jpg"
        imageAlt="A happy dog and cat beside a travel crate in a welcoming Dubai pet relocation office"
        eyebrow="Our Services"
        title="Dubai Pet Relocation Services — From Essential to Coordination"
        subtitle="Choose the level of support that fits your experience, timeline, and pet's needs — with transparency and WhatsApp updates at every tier."
        updated="Updated June 2026"
      />

      {/* ═══════════ TIER CARDS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'ring-2 ring-[#4F5BD5]' : ''}`}>
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#4F5BD5] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div className={`w-12 h-12 rounded-[14px] ${tier.iconBg} flex items-center justify-center mb-5`}>
                  <tier.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A] mb-1">{tier.name}</h3>
                <p className="text-sm font-semibold text-[#4F5BD5] mb-2">{tier.subtitle}</p>
                <p className="text-lg font-bold text-[#2A2A2A] mb-4">{tier.price}</p>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6 flex-1">{tier.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.features.slice(0, 5).map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                      <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setCompareTier(compareTier === tier.name ? null : tier.name)}
                  className="text-sm font-semibold text-[#4F5BD5] hover:underline inline-flex items-center gap-1 mb-4"
                >
                  {compareTier === tier.name ? 'Hide details' : 'See all features'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <WhatsAppCta
                  text={`Get ${tier.name} Quote`}
                  message={`Hi Dubai Pet Relocation! I am interested in the ${tier.name} tier (${tier.subtitle}) for my pet relocation. Can you give me a personalized quote?`}
                  fullWidth
                  className="!py-3"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-3">
              Full Comparison
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              See exactly what is included in each tier so you can choose with confidence.
            </p>
          </div>
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-[#E2E5F6]">
                  <th className="text-left py-4 px-4 font-semibold text-[#2A2A2A]">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="text-center py-4 px-4 font-semibold text-[#2A2A2A]">
                      {tier.name}
                      <span className="block text-xs font-normal text-[#8A8A8A]">{tier.subtitle}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tiers[0].features.map((feature, idx) => (
                  <tr key={feature.label} className={idx % 2 === 0 ? 'bg-[#F0F2FB]' : ''}>
                    <td className="py-3 px-4 text-[#5A5A5A]">{feature.label}</td>
                    {tiers.map((tier) => {
                      const f = tier.features[idx]
                      return (
                        <td key={tier.name} className="text-center py-3 px-4">
                          {f?.included ? (
                            <CheckCircle className="w-5 h-5 text-[#4F5BD5] mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-[#C8C8C8] mx-auto" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════ ADD-ONS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Extras</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-3">
              Add-On Services
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              Customize your relocation with additional services tailored to your pet's needs and your peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                  <addon.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{addon.name}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{addon.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS OVERVIEW ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">How It Works</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
              The Same 7-Step Process, Every Tier
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              No matter which tier you choose, we follow the same proven process. The difference is how much we handle for you versus how much you handle yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-[#F5F6FD] rounded-[20px] p-6 relative">
                <span className="absolute top-4 right-4 text-[48px] font-bold text-[#4F5BD5]/[0.04] leading-none">{s.step}</span>
                <div className="w-10 h-10 rounded-[12px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-sm font-bold text-[#2A2A2A] mb-2">{s.title}</h3>
                <p className="text-xs text-[#5A5A5A] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works/" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              See the Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Not Sure Which Tier Is Right for You?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Tell us about your pet, your route, and your timeline on WhatsApp. We will recommend the best tier and give you a personalized quote — no pressure, no obligation.
          </p>
          <WhatsAppCta
            text="Get a Personalized Quote"
            message="Hi Dubai Pet Relocation! I am not sure which service tier is right for me. Can you help me choose based on my pet and route?"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <Clock className="w-4 h-4" /> Reply within 15 min
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <Shield className="w-4 h-4" /> No hidden fees
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <Heart className="w-4 h-4" /> Animal-first approach
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
