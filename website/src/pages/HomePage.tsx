import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Shield, Star, Clock, Heart, CheckCircle, ChevronDown, ChevronUp,
  Plane, FileCheck, Phone, Users, PawPrint, Dog, Cat, ArrowRight, Calendar, MapPin, Award,
  Briefcase, Globe, BookOpen, Route, HelpCircle, Sun, Thermometer, Sparkles, ClipboardCheck
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, siteConfig, BASE_URL } from '../lib/seo.ts'
import { SERVICE_LINKS, TOP_AREA_LINKS, GUIDE_LINKS, ROUTE_LINKS } from '../data/nav.ts'
import { servicePages } from '../data/services/index.ts'
import { dubaiAreas } from '../data/areas/dubai/index.ts'
import Testimonials from '../components/Testimonials.tsx'
import Hero from '../components/Hero.tsx'
import TeamSupport from '../components/TeamSupport.tsx'

const defaultMsg = `Hi Dubai Pet Relocation team,

I need help relocating my pet and would love to understand the process and get a quick quote.

Pet type: [Dog / Cat]
Breed: [e.g., Golden Retriever / Persian Cat]
Current location: [City, Country]
Destination: [City, Country]
Planned move date: [Month/Year]

Thank you!`

const WhatsAppCta = ({
  text,
  message = defaultMsg,
  fullWidth = false,
  className = '',
}: {
  text: string
  message?: string
  fullWidth?: boolean
  className?: string
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

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}>
    {children}
  </div>
)

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span>{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

// Complete route inventory (extends the nav helper with outbound + all inbound routes).
const ALL_ROUTE_LINKS = [
  { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
  { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
  { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
  { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
  { label: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/' },
  { label: 'Canada to Dubai', to: '/routes/canada-to-dubai/' },
  { label: 'New Zealand to Dubai', to: '/routes/new-zealand-to-dubai/' },
  { label: 'South Africa to Dubai', to: '/routes/south-africa-to-dubai/' },
  { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
  { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
]

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dubai Pet Relocation',
    alternateName: 'Dubai Pet Relocation',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dubai Pet Relocation',
    description: 'Pet relocation concierge service in Dubai',
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '217 Zahra Townhouses, Town Square',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '00000',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2048',
      longitude: '55.2708',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
    priceRange: '$$$',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dubai Pet Relocation Services & Guides',
    itemListElement: [
      ...SERVICE_LINKS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.label,
        url: `${BASE_URL}${s.to}`,
      })),
      ...GUIDE_LINKS.map((g, i) => ({
        '@type': 'ListItem',
        position: SERVICE_LINKS.length + i + 1,
        name: g.label,
        url: `${BASE_URL}${g.to}`,
      })),
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do dogs need to be quarantined in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. If all documentation is complete and correct, pets do not require mandatory quarantine in Dubai. This includes a valid MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. However, incomplete documentation can result in conditional quarantine at the owner\'s expense. We check every document three times to prevent this.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does pet relocation to Dubai cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pet relocation to Dubai typically costs between AED 8,000 and AED 25,000 depending on the origin country, pet size, and service level. Our transparent cost breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and our service fee (AED 1,500–6,000). You get an estimated range in 60 seconds using our online calculator.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does pet relocation to Dubai take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period after the titer test). We recommend starting at least 8 weeks before your planned move. If you are on a tighter timeline, message us on WhatsApp — we may have options.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which dog breeds are banned in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The UAE bans Pit Bull types (including American Bully and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, and Bullmastiff), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted rather than fully banned. Brachycephalic breeds (Bulldogs, Pugs, Persian cats) face airline restrictions during summer months. We verify your breed\'s eligibility before quoting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get an instant quote for pet relocation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our online cost calculator provides an estimated range in under 60 seconds. Simply enter your pet\'s size, origin country, and preferred service level. For a firm, itemized quote, complete the booking form or message us on WhatsApp. We respond within 15 minutes during business hours.',
        },
      },
    ],
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai — Transparent, Safe, Expert',
          description: 'Transparent pet relocation concierge for Dubai and the UAE. We help you understand the process, check requirements, and connect with trusted partners.',
          keywords: 'pet relocation Dubai, dog relocation Dubai, cat relocation Dubai, pet transport UAE, MOCCAE import permit, pet relocation cost Dubai',
          ogType: 'website',
        }}
        schemas={[organizationSchema, localBusinessSchema, breadcrumbSchema, itemListSchema, faqSchema]}
      />
      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="Calm golden retriever ready for relocation beside its travel crate in a bright Dubai home"
        eyebrow="Trusted Pet Relocation Partner"
        title="Pet Relocation Dubai, Made Clear and Safe"
        subtitle="We guide pet owners through permits, paperwork and partner selection — safer dog and cat travel to and from Dubai, with WhatsApp updates at every step."
        secondary={{ label: 'Read the UAE Pet Import Guide', to: '/guides/uae-pet-import-requirements/' }}
      />

      {/* ═══════════ TRUST BAR ═══════════ */}
      <section className="bg-white border-b border-[#E6E8F5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { value: '400+', label: 'Pets relocated' },
              { value: '4.9★', label: 'Google rating' },
              { value: '15 min', label: 'WhatsApp reply' },
              { value: '0', label: 'Paperwork errors' },
              { value: '24/7', label: 'Availability' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl lg:text-3xl font-bold text-[#4F5BD5]">{stat.value}</p>
                <p className="text-xs text-[#8A8A8A] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THREE STEP PROCESS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Three Simple Steps</span>
            <h2 className="text-section mt-3 mb-4">How Dubai Pet Relocation Works</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              We make pet relocation straightforward. No hidden complexity. No surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: Phone,
                title: 'Tell Us About Your Pet',
                body: 'Send us a WhatsApp message with your pet\'s details, your route, and timeline. We check breed eligibility, route requirements, and seasonal restrictions.',
              },
              {
                step: '02',
                icon: FileCheck,
                title: 'We Check & Prepare',
                body: 'We review your documents, check MOCCAE requirements, coordinate with vetted partners, and build a clear timeline with deadlines and checkpoints.',
              },
              {
                step: '03',
                icon: Heart,
                title: 'Your Pet Travels Safely',
                body: 'We coordinate the vet, crate, flight, and customs. You get WhatsApp updates at every checkpoint. Your pet is delivered safely to your door.',
              },
            ].map((s) => (
              <Card key={s.step} className="relative">
                <span className="absolute top-7 right-7 text-[64px] font-bold text-[#4F5BD5]/[0.04] leading-none">{s.step}</span>
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/how-it-works/"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors"
            >
              See the Full Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ TO DUBAI / FROM DUBAI ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Our Services</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation To and From Dubai</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Whether you are moving to Dubai or leaving, we understand the requirements and connect you with the right partners for your route.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#F0F2FB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#4F5BD5] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">To Dubai</h3>
                  <p className="text-xs text-[#8A8A8A] font-medium">Importing your pet to the UAE</p>
                </div>
              </div>
              <p className="text-body mb-5">
                We help you understand MOCCAE import requirements, check breed eligibility, verify vaccination timelines, and coordinate with partners for a smooth arrival.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['MOCCAE import permit guidance', 'Breed and route eligibility check', 'Vet partner coordination', 'Customs clearance support', 'Dubai Municipality registration'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the import guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card className="bg-[#F0F2FB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] bg-[#4F5BD5] flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white rotate-180" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">From Dubai</h3>
                  <p className="text-xs text-[#8A8A8A] font-medium">Exporting your pet from the UAE</p>
                </div>
              </div>
              <p className="text-body mb-5">
                We help you understand export requirements for your destination country, coordinate health certificates, and connect you with partners for departure and arrival.
              </p>
              <ul className="space-y-2.5 mb-6">
                {['Export documentation check', 'Destination country requirements', 'Health certificate coordination', 'IATA crate guidance', 'Airline cargo booking support'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppCta text="Ask About Exporting" message="Hi, I need help exporting my pet from Dubai. Can you guide me through the process?" className="!px-5 !py-2.5 !text-xs" />
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ DOG & CAT CARDS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">By Pet Type</span>
              <h2 className="text-section mt-3 mb-4">Dog and Cat Relocation, Both Covered</h2>
              <p className="text-body-large mb-8">
                Dogs and cats have different requirements, different concerns, and different needs. We understand both. We guide you through breed-specific rules, crate sizing, airline policies, and health requirements for your pet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dog-relocation-to-dubai/"
                  className="group flex items-center gap-4 p-5 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[#EEF0FC] flex items-center justify-center shrink-0">
                    <Dog className="w-6 h-6 text-[#4F5BD5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors">Dog Relocation</p>
                    <p className="text-sm text-[#8A8A8A]">Breed checks, crate sizing, airline rules</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#4F5BD5] transition-colors" />
                </Link>
                <Link
                  to="/cat-relocation-to-dubai/"
                  className="group flex items-center gap-4 p-5 bg-white rounded-[20px] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-[#EEF0FC] flex items-center justify-center shrink-0">
                    <Cat className="w-6 h-6 text-[#4F5BD5]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors">Cat Relocation</p>
                    <p className="text-sm text-[#8A8A8A]">Sedation guidance, crate comfort, stress reduction</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8A8A8A] group-hover:text-[#4F5BD5] transition-colors" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-cat.jpg"
                alt="A calm cat in a safe travel crate with caring owner nearby in a modern Dubai home."
                loading="lazy"
                width={1536}
                height={1024}
                className="rounded-[28px] shadow-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-[20px] p-5 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#2A2A2A]">Trusted relocation guidance</p>
                <p className="text-xs text-[#8A8A8A]">Across Dubai and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE COORDINATE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">What We Coordinate</span>
              <h2 className="text-section mt-3 mb-5">We Handle the Hard Parts. You Stay Informed.</h2>
              <p className="text-body-large mb-8">
                You don't need to become an expert in MOCCAE regulations, IATA crate standards, or airline cargo policies. That is our role. We guide you through the complexity and connect you with the right partners.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: FileCheck, title: 'Document Review', body: 'We check every document three times before submission.' },
                  { icon: Calendar, title: 'Timeline Management', body: 'Clear deadlines, reminders, and checkpoint updates.' },
                  { icon: Shield, title: 'Breed Eligibility', body: 'Verify your breed against UAE and airline rules.' },
                  { icon: Award, title: 'Partner Vetting', body: 'We only work with partners we trust with our own pets.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-[16px] bg-[#F0F2FB]">
                    <div className="w-9 h-9 rounded-[10px] bg-[#E9ECFB] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-[#4F5BD5]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#2A2A2A] mb-1">{item.title}</p>
                      <p className="text-xs text-[#8A8A8A] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/reunion.jpg"
                alt="A happy pet owner reuniting with their dog after a safe international relocation to Dubai."
                loading="lazy"
                width={1536}
                height={1024}
                className="rounded-[28px] shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRANSPARENT MODEL ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Our Approach</span>
          <h2 className="text-section mt-3 mb-4 max-w-2xl mx-auto">A Transparent Partner Model</h2>
          <p className="text-body-large max-w-2xl mx-auto mb-12">
            We do not own an airline. We are not a government agency. We are a concierge service that helps you understand the process and connects you with the right specialists.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Heart,
                title: 'Animal-First',
                body: 'Every decision we make starts with what is best for your pet. If a route is unsafe, we will tell you honestly.',
              },
              {
                icon: FileCheck,
                title: 'No Hidden Fees',
                body: 'We show you exactly what you will pay and what each charge covers. We do not mark up government fees.',
              },
              {
                icon: Users,
                title: 'Partner-Matched',
                body: 'We connect you with vetted partners based on your specific pet, route, and timeline — not a generic list.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{item.title}</h3>
                <p className="text-body">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES INTERLINK ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">What We Help With</span>
            <h2 className="text-section mt-3 mb-4">Our Pet Relocation Services</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              From import permits to door-to-door transport — explore the service that matches your move.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
              >
                <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{s.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
              View all services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ GUIDES INTERLINK ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Learn</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation Guides</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Deep, regulation-accurate guides that answer the questions keeping pet owners awake at night.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDE_LINKS.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#4F5BD5]" />
                  <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{g.label}</span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/guides/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Browse all guides <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ DUBAI AREAS INTERLINK ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Across Dubai</span>
            <h2 className="text-section mt-3 mb-4">Dubai Areas We Cover</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Door-to-door pet relocation from every Dubai community — villas and high-rise towers alike.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOP_AREA_LINKS.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E6E8F5] bg-white px-4 py-2 text-sm font-semibold text-[#2A2A2A] transition hover:border-[#4F5BD5] hover:text-[#4F5BD5]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#4F5BD5]" />
                {a.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Explore all Dubai areas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ POPULAR RELOCATION ROUTES ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">By Origin & Destination</span>
            <h2 className="text-section mt-3 mb-4">Popular Relocation Routes</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Country-specific requirements, timelines, and costs — explore the route that matches your move to or from Dubai.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_ROUTE_LINKS.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
              >
                <span className="flex items-center gap-2.5">
                  <Plane className="w-4 h-4 shrink-0 text-[#4F5BD5]" />
                  <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{r.label}</span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ALL 7 EMIRATES COVERAGE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Nationwide</span>
            <h2 className="text-section mt-3 mb-4">We Cover All 7 Emirates</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Wherever you are in the UAE, we coordinate safe pet relocation — from Dubai and Abu Dhabi to every northern emirate.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              to="/dubai/"
              className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-[#4F5BD5]" />
                <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">Dubai</span>
              </span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
            </Link>
            <Link
              to="/cities/abu-dhabi/"
              className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6E8F5] bg-white px-5 py-4 transition hover:border-[#4F5BD5] hover:shadow-md"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-[#4F5BD5]" />
                <span className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">Abu Dhabi</span>
              </span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
            </Link>
            {['Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'].map((emirate) => (
              <div
                key={emirate}
                className="flex items-center gap-2.5 rounded-[16px] border border-[#E6E8F5] bg-[#F5F6FD] px-5 py-4"
              >
                <MapPin className="w-4 h-4 shrink-0 text-[#9AA0C7]" />
                <span className="font-semibold text-[#5A5A5A]">{emirate}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ IMPORT GUIDE CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-semibold text-[#6E78E0] uppercase tracking-wider">Essential Guide</span>
              <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight text-white mt-3 mb-4">
                UAE Pet Import Guide: Everything You Need to Know
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                The complete checklist for bringing dogs and cats to Dubai. Includes document requirements, timeline, banned breeds, vaccination rules, and a step-by-step process.
              </p>
              <ul className="space-y-2.5 mb-8">
                {['MOCCAE import permit explained', 'Banned breed list', 'Vaccination timeline', 'Document checklist', 'Airline requirements'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#6E78E0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/guides/uae-pet-import-requirements/"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#EEF0FC] transition-colors"
              >
                Read the Full Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="/images/import-hero.jpg"
                alt="Pet travel checklist with passport-style documents and vaccination records, warm natural lighting."
                loading="lazy"
                width={1536}
                height={1024}
                className="rounded-[28px] shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <TeamSupport />
      <Testimonials />

      {/* ═══════════ COMPREHENSIVE SERVICE DIRECTORY ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Full Service Directory</span>
            <h2 className="text-section mt-3 mb-4">Every Pet Relocation Service We Coordinate</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Dubai Pet Relocation is a concierge and coordination service. We do not own an airline or a veterinary clinic. Instead, we understand the full ecosystem and connect you with the right licensed partner for each step. Below is every service page on our site, each written to answer a specific question pet owners ask Google.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {servicePages.map((service) => (
              <Card key={service.slug} className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center shrink-0">
                    <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2A2A2A]">{service.h1}</h3>
                    {service.costRange ? (
                      <p className="text-sm text-[#4F5BD5] font-semibold mt-0.5">
                        From AED {service.costRange.low} – {service.costRange.high}
                      </p>
                    ) : null}
                  </div>
                </div>
                <p className="text-body mb-5 flex-1">{service.heroValueProp}</p>
                <Link
                  to={`/service/${service.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline"
                >
                  Read the full {service.primaryKeyword} guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-[20px] bg-[#F5F6FD]">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-[#4F5BD5] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Corporate & Diplomatic Relocation</h3>
                <p className="text-body mb-4">
                  Relocating multiple pets or coordinating with an HR mobility team? We provide consolidated timelines, bulk document review, and a single point of contact for corporate relocations. Our team has supported military families, diplomatic staff, and executive moves where timing and documentation accuracy are non-negotiable.
                </p>
                <Link to="/services/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                  Explore corporate relocation support <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GUIDE LIBRARY DEEP DIVE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Knowledge Hub</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation Guides Written for Real Decisions</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Most pet relocation searches start with a question. Our guides answer them with regulation-accurate detail, real timelines, and honest cost ranges. Each guide links back to our services, routes, and area pages so Google can crawl the full topical cluster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Pet Relocation Cost in Dubai</h3>
              <p className="text-body mb-4">
                The most-read guide on our site. We break down government fees, veterinary costs, cargo shipping, crates, and service fees. We also explain why some quotes balloon and how to avoid surprise charges. If you only read one guide before messaging us, read this one.
              </p>
              <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                See the 2026 cost breakdown <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">UAE Pet Import Requirements</h3>
              <p className="text-body mb-4">
                The definitive step-by-step checklist for bringing dogs and cats into the UAE. Covers MOCCAE permits, microchip standards, rabies vaccinations, titer tests, health certificates, banned breeds, and post-arrival Dubai Municipality registration.
              </p>
              <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the import checklist <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Banned Dog Breeds in Dubai</h3>
              <p className="text-body mb-4">
                Not all dogs can enter the UAE. We maintain the current banned and restricted breed list, explain the difference between a full ban and a restricted breed, and tell you what to do if your dog is on the list. We verify breed eligibility before quoting so you do not waste time or money.
              </p>
              <Link to="/guides/banned-dog-breeds-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Check breed eligibility <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">IATA Pet Crate Requirements</h3>
              <p className="text-body mb-4">
                The crate is not just a box. It is your pet's safety cabin for the flight. This guide explains IATA sizing rules, ventilation requirements, food and water bowls, live animal labels, and why a crate that works in your car may be rejected by the airline.
              </p>
              <Link to="/guides/iata-pet-crate-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Get crate sizing right <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">MOCCAE Import Permit</h3>
              <p className="text-body mb-4">
                The MOCCAE import permit is the gatekeeper for every pet entering the UAE. We explain who needs it, how to apply, what documents to attach, how long it takes, and what to do if your permit is rejected or expires before travel.
              </p>
              <Link to="/guides/moccae-import-permit/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Understand MOCCAE permits <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Rabies Titer Test for Dubai</h3>
              <p className="text-body mb-4">
                Some countries require a rabies neutralising antibody titre test (RNATT) before pets can enter the UAE. This guide explains which countries are affected, the 90-day waiting period, accredited laboratories, and how to schedule the test so it does not delay your move.
              </p>
              <Link to="/guides/rabies-titer-test-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Learn about titer tests <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ ROUTE NETWORK ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Global Reach</span>
            <h2 className="text-section mt-3 mb-4">Country-Specific Relocation Routes</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Every origin and destination has different rules. Our route pages map the exact documents, timelines, and costs for the most common moves to and from Dubai. Each route links to our broader guides and to the city or area page where your pet will be delivered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <Route className="w-5 h-5 text-[#4F5BD5]" /> Inbound to Dubai
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'UK to Dubai', to: '/routes/uk-to-dubai/', note: 'No quarantine, no titer test' },
                  { label: 'USA to Dubai', to: '/routes/usa-to-dubai/', note: 'Rabies titer test required' },
                  { label: 'India to Dubai', to: '/routes/india-to-dubai/', note: 'High-risk rabies country' },
                  { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/', note: 'Strict export + import chain' },
                  { label: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/', note: 'Titer test + 90-day wait' },
                  { label: 'Canada to Dubai', to: '/routes/canada-to-dubai/', note: 'Similar rules to USA' },
                  { label: 'New Zealand to Dubai', to: '/routes/new-zealand-to-dubai/', note: 'Rabies-free origin advantage' },
                  { label: 'South Africa to Dubai', to: '/routes/south-africa-to-dubai/', note: 'Titer test required' },
                ].map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="group block rounded-[16px] border border-[#E6E8F5] bg-white p-4 transition hover:border-[#4F5BD5] hover:shadow-md"
                  >
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{r.label}</p>
                    <p className="text-xs text-[#8A8A8A] mt-1">{r.note}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#4F5BD5]" /> Outbound from Dubai
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: 'Dubai to UK', to: '/routes/dubai-to-uk/', note: 'DEFRA health certificate' },
                  { label: 'Dubai to USA', to: '/routes/dubai-to-usa/', note: 'CDC dog import rules apply' },
                ].map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="group block rounded-[16px] border border-[#E6E8F5] bg-white p-4 transition hover:border-[#4F5BD5] hover:shadow-md"
                  >
                    <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">{r.label}</p>
                    <p className="text-xs text-[#8A8A8A] mt-1">{r.note}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-6 p-5 rounded-[16px] bg-[#F5F6FD]">
                <p className="text-sm text-[#5A5A5A]">
                  Don't see your route? We coordinate pet relocation to and from most countries. Message us on WhatsApp with your origin and destination and we will send you the exact requirements and a realistic timeline within 15 minutes.
                </p>
                <WhatsAppCta text="Ask About Your Route" className="!px-5 !py-2.5 !text-xs mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DUBAI AREA DEEP DIVE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Local SEO</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation in Every Dubai Community</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Dubai is a city of neighbourhoods, each with its own access routes, building rules, and veterinary clinics. We have built dedicated landing pages for 40 Dubai communities so residents can find locally relevant pet relocation guidance. Each area page links to the Dubai hub, neighbouring areas, and the service or route that matches the searcher's intent.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              to="/dubai/"
              className="group flex flex-col justify-center rounded-[16px] bg-[#4F5BD5] px-5 py-5 text-white shadow-sm transition hover:bg-[#3A45B0] hover:shadow-md"
            >
              <p className="font-bold">Dubai Hub</p>
              <p className="text-xs text-white/70 mt-1">All communities & services</p>
            </Link>
            {dubaiAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/dubai/${area.slug}/`}
                className="group flex items-center justify-between gap-2 rounded-[16px] border border-[#E6E8F5] bg-white px-4 py-3 transition hover:border-[#4F5BD5] hover:shadow-md"
              >
                <span className="font-semibold text-sm text-[#2A2A2A] group-hover:text-[#4F5BD5]">{area.areaName}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#9AA0C7] group-hover:text-[#4F5BD5]" />
              </Link>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card>
              <h4 className="font-bold text-[#2A2A2A] mb-2">Waterfront Towers</h4>
              <p className="text-sm text-[#5A5A5A]">
                Dubai Marina, JBR, JLT, Downtown Dubai, and Business Bay have specific loading zones and pet policies. Our area pages explain how we coordinate pickup and drop-off in high-rise buildings.
              </p>
            </Card>
            <Card>
              <h4 className="font-bold text-[#2A2A2A] mb-2">Villa Communities</h4>
              <p className="text-sm text-[#5A5A5A]">
                Arabian Ranches, Jumeirah, Palm Jumeirah, and Mirdif offer easier door access but may be farther from cargo terminals. We plan timing accordingly.
              </p>
            </Card>
            <Card>
              <h4 className="font-bold text-[#2A2A2A] mb-2">Emerging Districts</h4>
              <p className="text-sm text-[#5A5A5A]">
                Dubai South, Emaar South, Damac Hills, and Dubai Silicon Oasis are growing fast. We keep our area pages updated as access roads and veterinary services evolve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS DEEP DIVE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Behind the Scenes</span>
            <h2 className="text-section mt-3 mb-4">What Actually Happens During a Pet Relocation</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              A successful pet relocation is a chain of small, time-sensitive tasks. Missing one link can delay the whole move. Below is the process we run for every booking, from first WhatsApp message to reunion at your door.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '1',
                title: 'Eligibility & Breed Check',
                body: 'Before we quote, we verify your pet\'s breed against the UAE banned and restricted breed list and check your origin country\'s rabies risk classification. This prevents wasted time and heartbreak later. We also flag airline-specific restrictions for brachycephalic breeds during summer.',
              },
              {
                step: '2',
                title: 'Document Audit',
                body: 'We request photos or scans of your pet\'s microchip certificate, vaccination records, and passport details. Our team checks dates, formats, and country-specific rules. If anything is missing, we tell you exactly what to get and from whom.',
              },
              {
                step: '3',
                title: 'MOCCAE Permit Application',
                body: 'For pets entering the UAE, we prepare and submit the MOCCAE import permit. We track approval, watch expiry windows, and reapply if your travel date shifts. The permit is valid for a limited window, so timing matters.',
              },
              {
                step: '4',
                title: 'Veterinary Preparation',
                body: 'We coordinate with our vetted veterinary partners for microchipping, vaccinations, rabies titer tests, antiparasitic treatments, and the international health certificate. Every document is checked before travel.',
              },
              {
                step: '5',
                title: 'Crate & Flight Booking',
                body: 'We measure your pet for an IATA-compliant crate and book manifest cargo space with the airline\'s cargo department — not passenger reservations. We confirm temperature controls, routing, and any embargo periods.',
              },
              {
                step: '6',
                title: 'Customs Clearance & Delivery',
                body: 'On arrival at DXB or DWC, our customs clearance partner processes your pet while we keep you updated. Once cleared, we coordinate door-to-door delivery to your home, hotel, or new address anywhere in the UAE.',
              },
            ].map((s) => (
              <Card key={s.step} className="relative">
                <span className="absolute top-6 right-6 text-[56px] font-bold text-[#4F5BD5]/[0.04] leading-none">{s.step}</span>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">{s.title}</h3>
                <p className="text-body">{s.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/how-it-works/" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              See the complete process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ COST TRANSPARENCY ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Radical Transparency</span>
              <h2 className="text-section mt-3 mb-5">What Pet Relocation in Dubai Really Costs</h2>
              <p className="text-body-large mb-6">
                The most common complaint we hear about our industry is hidden fees. A quote starts at one number and ends at another. We do not work that way. Our cost guide publishes every line item so you can see exactly what you are paying for.
              </p>
              <p className="text-body mb-6">
                For a typical relocation to Dubai, expect total costs between AED 8,000 and AED 25,000. The range depends on your origin country, pet size, crate requirements, and whether you need a rabies titer test. Small cats from low-risk countries sit at the lower end. Large dogs from high-risk countries with complex routing sit at the higher end.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Government fees: MOCCAE permit, customs, municipality registration',
                  'Veterinary fees: microchip, vaccines, titer test, health certificate',
                  'Cargo shipping: airline manifest cargo by weight and route',
                  'Travel crate: IATA-approved crate sized to your pet',
                  'Service fee: our coordination, document review, and WhatsApp support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center gap-2 px-7 py-4 bg-[#4F5BD5] text-white rounded-2xl font-semibold text-sm hover:bg-[#3A45B0] transition-colors">
                Read the Full Cost Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Cost Ranges by Scenario</h3>
              <div className="space-y-4">
                {[
                  { label: 'Small cat from UK/EU', range: 'AED 8,000 – 12,000', note: 'No titer test, direct routing' },
                  { label: 'Medium dog from UK/EU', range: 'AED 12,000 – 18,000', note: 'No titer test, larger crate' },
                  { label: 'Large dog from USA/Canada', range: 'AED 18,000 – 25,000', note: 'Titer test + 90-day wait' },
                  { label: 'Brachycephalic breed summer move', range: 'Add AED 2,000 – 5,000', note: 'Seasonal routing/embargo' },
                ].map((row) => (
                  <div key={row.label} className="pb-4 border-b border-[#E6E8F5] last:border-0 last:pb-0">
                    <p className="font-semibold text-[#2A2A2A]">{row.label}</p>
                    <p className="text-[#4F5BD5] font-bold text-sm">{row.range}</p>
                    <p className="text-xs text-[#8A8A8A]">{row.note}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ DOCUMENT CHECKLIST ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Paperwork</span>
            <h2 className="text-section mt-3 mb-4">The Pet Relocation Document Checklist</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Paperwork errors are the single biggest cause of pet travel delays. Use this checklist as a starting point, then let us review your documents before submission. Requirements vary by origin country, so always confirm your specific route with our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-5 h-5 text-[#4F5BD5]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">For Pets Entering the UAE</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Valid MOCCAE import permit',
                  'ISO 11784/11785 microchip certificate',
                  'Rabies vaccination certificate (valid and >=21 days old)',
                  'Rabies titer test (RNATT) for high-risk countries',
                  'International health certificate (within travel window)',
                  'Antiparasitic treatment record',
                  'Owner passport copy',
                  'Dubai Municipality registration after arrival',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-5 h-5 text-[#4F5BD5]" />
                <h3 className="text-lg font-bold text-[#2A2A2A]">For Pets Leaving the UAE</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Destination country import permit (if required)',
                  'Export health certificate from UAE vet',
                  'MOCCAE export endorsement',
                  'Rabies vaccination and microchip records',
                  'Airline cargo booking confirmation',
                  'IATA-compliant travel crate',
                  'Import documents for destination customs',
                  'Transit permits for connecting flights',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Download the full import checklist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ BREED & SEASONAL GUIDANCE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Special Cases</span>
            <h2 className="text-section mt-3 mb-4">Breed Bans, Brachycephalic Pets & Summer Travel</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Not every pet fits the standard process. Some breeds are banned. Some face airline embargoes in summer. Some need extra documentation. We flag these issues before you commit to a move.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Banned & Restricted Breeds</h3>
              <p className="text-body mb-4">
                The UAE maintains a list of banned and restricted dog breeds. We verify your pet against this list before quoting. If your breed is restricted, we explain your options honestly — including whether an exception might apply.
              </p>
              <Link to="/guides/banned-dog-breeds-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                See the breed list <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Thermometer className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Brachycephalic Pets</h3>
              <p className="text-body mb-4">
                Bulldogs, Pugs, Persian cats, and other snub-nosed breeds face extra airline restrictions because of heat sensitivity. We plan routing, crate ventilation, and flight timing to reduce risk. We will not book a route we believe is unsafe.
              </p>
              <Link to="/guides/iata-pet-crate-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Crate requirements for flat-faced breeds <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Sun className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Summer Embargo Planning</h3>
              <p className="text-body mb-4">
                Many airlines restrict pet cargo during the hottest months. Our summer travel guide explains embargo dates, alternative routing, early-morning flights, and how to avoid last-minute rebooking fees.
              </p>
              <Link to="/guides/pet-travel-summer-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the summer travel guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNER VETTING & TRUST ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Trust</span>
            <h2 className="text-section mt-3 mb-4">How We Choose Our Partners</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              We only refer pet owners to partners we would trust with our own animals. Every veterinary clinic, cargo agent, customs broker, and ground transport provider in our network is vetted for licensing, experience, and communication quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {[
                {
                  title: 'Veterinary Partners',
                  body: 'We work with licensed UAE veterinary clinics experienced in international health certificates, export documentation, and pre-flight health checks. They understand the difference between a routine checkup and a travel clearance.',
                },
                {
                  title: 'Cargo & Airline Partners',
                  body: 'We book directly with airline cargo departments, not passenger reservation desks. This means your pet\'s booking is handled by staff trained in live animal regulations, not general ticketing agents.',
                },
                {
                  title: 'Customs & Ground Transport',
                  body: 'Our ground partners know DXB and DWC cargo terminals inside out. They coordinate customs clearance, document handoffs, and the final road journey to your door.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              ))}
            </div>
            <Card className="bg-[#F0F2FB]">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Our Vetting Checklist</h3>
              <ul className="space-y-3">
                {[
                  'Valid trade license and relevant certifications',
                  'Proven experience with live animal transport',
                  'Clear communication in English and Arabic',
                  'Transparent pricing with no hidden fees',
                  'Willingness to coordinate through our shared timeline',
                  'Track record of on-time document submission',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#E6E8F5]">
                <p className="text-sm text-[#5A5A5A]">
                  Want to know more about our story and why we started this service? Visit our About page.
                </p>
                <Link to="/about/" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#4F5BD5] hover:underline">
                  About Dubai Pet Relocation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Why Us</span>
              <h2 className="text-section mt-3 mb-5">Why Pet Owners Choose Dubai Pet Relocation</h2>
              <p className="text-body-large mb-5">
                Dubai is one of the most pet-mobile cities in the world. Every week, hundreds of dogs and cats arrive or depart through DXB and DWC cargo terminals. But the process is not intuitive. It involves three different government systems, at least two private service providers, and a set of airline rules that change by season and breed. Most pet owners are doing this for the first time while also managing a household move, a new job, or a visa transition.
              </p>
              <p className="text-body mb-5">
                That is where we come in. We are not a general moving company that added pets as a side service. We are pet relocation specialists. We have read the MOCCAE circulars, spoken with airline cargo desks, and learned which veterinary clinics issue travel certificates correctly the first time. We have also been the anxious pet owner refreshing a flight tracker at 2:00 AM, so we built the service we wished existed.
              </p>
              <p className="text-body mb-5">
                Our model is simple. You tell us about your pet and your move. We audit your documents, check your route, and build a timeline. We then coordinate the right partners for each step and keep you updated on WhatsApp. You do not need to chase the vet, the airline, and the customs broker separately. You have one thread, one coordinator, and one clear plan.
              </p>
              <p className="text-body">
                We are transparent because the industry trained pet owners to expect surprises. We publish cost ranges, explain markups, and tell you when a cheaper option is unsafe. We are animal-first because every decision we make starts with what is best for your pet, not what is easiest for us. And we are local because we understand Dubai's buildings, roads, weather, and regulations in a way that an overseas call centre never will.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Specialist focus', body: 'We only coordinate dog and cat relocation. That focus means we know the current rules, the common rejection reasons, and the best partners for this specific job.' },
                { title: 'Transparent pricing', body: 'Our cost guide is public. Our quotes are itemized. We do not hide government fees inside a service charge.' },
                { title: 'WhatsApp-native support', body: 'You can reach us on the app you already use. No ticket systems, no hold music, no waiting 48 hours for an email reply.' },
                { title: 'Document triple-check', body: 'One wrong date can delay your pet by weeks. We review every document before submission, not after a rejection.' },
                { title: 'Vetted partner network', body: 'We only work with clinics, cargo agents, and ground transport providers we trust with our own pets.' },
                { title: 'Real-time updates', body: 'You receive WhatsApp messages at every checkpoint: vet visit complete, permit approved, flight booked, cleared customs, out for delivery.' },
              ].map((item) => (
                <Card key={item.title} className="py-5">
                  <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A]">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PET TYPE DEEP DIVE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">By Pet</span>
            <h2 className="text-section mt-3 mb-4">Dog Relocation vs Cat Relocation</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Dogs and cats experience travel differently. Their documentation is similar, but their crate needs, stress signals, and airline policies are not. We tailor our coordination to the species, size, and temperament of your pet.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Dog className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-xl font-bold text-[#2A2A2A]">Dog Relocation to Dubai</h3>
              </div>
              <p className="text-body mb-4">
                Dogs are usually more visible in the relocation process. They need larger crates, breed-specific documentation checks, and sometimes exercise or relief planning during long transits. Large dogs cost more to ship because cargo fees are partly based on crate volume and weight. Some breeds are banned or restricted in the UAE, and brachycephalic breeds face summer embargoes.
              </p>
              <p className="text-body mb-4">
                We start every dog relocation with a breed check and a size measurement. We then recommend the right IATA crate, coordinate the veterinary preparation, and book cargo space with an airline that accepts your dog's breed and route. On arrival, we coordinate customs clearance and delivery to your home or temporary accommodation.
              </p>
              <p className="text-body mb-5">
                Whether you have a small Poodle from Paris or a large Labrador from London, we know the route-specific requirements and the airlines that handle each breed safely.
              </p>
              <Link to="/dog-relocation-to-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the dog relocation guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Cat className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-xl font-bold text-[#2A2A2A]">Cat Relocation to Dubai</h3>
              </div>
              <p className="text-body mb-4">
                Cats are generally smaller and cheaper to ship than dogs, but they are also more sensitive to environmental change. A cat that is not crate-trained can panic during travel, so we provide guidance on gradual crate introduction in the weeks before departure. Sedation is almost never recommended for cargo travel because it impairs a cat's ability to balance and regulate body temperature.
              </p>
              <p className="text-body mb-4">
                Our cat relocation service includes FVRCP vaccination checks, rabies documentation, health certificate coordination, and a crate sizing review. We also advise on calming sprays, familiar blankets, and food schedules. On arrival, we keep the handover calm and quiet because a stressed cat needs a controlled environment after a long journey.
              </p>
              <p className="text-body mb-5">
                From a single domestic shorthair to a multi-cat household move, we make sure each cat has the right documentation, crate, and care plan.
              </p>
              <Link to="/cat-relocation-to-dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read the cat relocation guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ ROUTE DEEP DIVE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Routes</span>
            <h2 className="text-section mt-3 mb-4">Route-Specific Guidance for Dubai Pet Relocation</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              The rules for bringing a pet to Dubai depend almost entirely on where the pet is coming from. Low-risk rabies countries have shorter timelines. High-risk countries require a rabies titer test and a 90-day waiting period. Outbound moves depend on the destination country's import rules.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'UK to Dubai pet relocation',
                body: 'The UK is a low-risk rabies country, which means no titer test and no quarantine if documentation is correct. The typical timeline is 4–6 weeks. Pets need an ISO microchip, valid rabies vaccination, export health certificate endorsed by an official veterinarian, and a MOCCAE import permit. We recommend booking early during summer because airlines may impose heat embargoes on certain breeds.',
                to: '/routes/uk-to-dubai/',
              },
              {
                title: 'USA to Dubai pet relocation',
                body: 'The USA is currently treated as a high-risk rabies country for import purposes. Dogs require a rabies titer test (RNATT) performed at an accredited laboratory, followed by a 90-day waiting period before entry into the UAE. Cats from the USA also require the titer test. We plan the timeline backward from your desired arrival date to ensure the waiting period is complete before travel.',
                to: '/routes/usa-to-dubai/',
              },
              {
                title: 'India to Dubai pet relocation',
                body: 'India is a high-risk rabies country, so the titer test and 90-day wait apply. Documentation must be precise because Indian veterinary certificates are reviewed carefully by MOCCAE. We work with pet owners to ensure microchip numbers, vaccination dates, and health certificate formats align with UAE requirements.',
                to: '/routes/india-to-dubai/',
              },
              {
                title: 'Australia to Dubai pet relocation',
                body: 'Australia is rabies-free, which simplifies the UAE import side. However, Australian export rules are strict and require an Australian government export permit and health certificate. We coordinate both the Australian export chain and the UAE import chain so the handover is seamless.',
                to: '/routes/australia-to-dubai/',
              },
              {
                title: 'Philippines to Dubai pet relocation',
                body: 'The Philippines is a high-risk rabies country. Pets need a titer test, a 90-day wait, and carefully prepared health documentation. We advise starting the process at least 4 months before travel to avoid rushed errors.',
                to: '/routes/philippines-to-dubai/',
              },
              {
                title: 'Canada to Dubai pet relocation',
                body: 'Canada follows similar rules to the USA for UAE import. Dogs and cats require a rabies titer test and the 90-day waiting period. Winter departures from Canada can also create crate and transit challenges, so we plan routing carefully.',
                to: '/routes/canada-to-dubai/',
              },
            ].map((route) => (
              <Card key={route.to} className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{route.title}</h3>
                  <p className="text-body">{route.body}</p>
                </div>
                <Link to={route.to} className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline md:mt-1">
                  Route details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link to="/routes/new-zealand-to-dubai/" className="group block rounded-[16px] border border-[#E6E8F5] bg-[#F5F6FD] p-5 transition hover:border-[#4F5BD5]">
              <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">New Zealand to Dubai</p>
              <p className="text-sm text-[#5A5A5A] mt-1">Rabies-free origin with strict MPI export requirements.</p>
            </Link>
            <Link to="/routes/south-africa-to-dubai/" className="group block rounded-[16px] border border-[#E6E8F5] bg-[#F5F6FD] p-5 transition hover:border-[#4F5BD5]">
              <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5]">South Africa to Dubai</p>
              <p className="text-sm text-[#5A5A5A] mt-1">Titer test required; veterinary export paperwork is critical.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ DUBAI LIFESTYLE COMMUNITIES ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Local Living</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation for Every Dubai Lifestyle</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Where you live in Dubai affects access, timing, and even crate handling. A high-rise in Downtown Dubai has different logistics from a villa in Arabian Ranches. Our area pages are written to match the way residents actually search.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Waterfront & High-Rise Living',
                body: 'Dubai Marina, JBR, JLT, Downtown Dubai, Business Bay, and Bluewaters are home to thousands of expat pet owners. Building loading bays, service elevators, and pet policies vary by tower. Our coordination includes planning the exact pickup and drop-off point to avoid last-minute confusion.',
                areas: 'Dubai Marina, JBR, JLT, Downtown Dubai, Business Bay',
              },
              {
                title: 'Family Villa Communities',
                body: 'Arabian Ranches, Jumeirah, Palm Jumeirah, Mirdif, and Dubai Hills offer space for larger dogs and easier ground-floor access. These areas are popular with families relocating with multiple pets. We plan multi-pet moves with consolidated timelines and shared documentation reviews.',
                areas: 'Arabian Ranches, Jumeirah, Palm Jumeirah, Mirdif, Dubai Hills',
              },
              {
                title: 'Emerging & Value Areas',
                body: 'JVC, JVT, Dubai Silicon Oasis, Dubai South, Al Furjan, and Damac Hills are growing communities with increasing pet ownership. Veterinary access is expanding in these areas, and we keep our partner list updated as new clinics open.',
                areas: 'JVC, JVT, Dubai Silicon Oasis, Dubai South, Al Furjan',
              },
            ].map((group) => (
              <Card key={group.title}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{group.title}</h3>
                <p className="text-body mb-4">{group.body}</p>
                <p className="text-xs text-[#8A8A8A] font-medium uppercase tracking-wider mb-1">Areas covered</p>
                <p className="text-sm text-[#4F5BD5] font-semibold">{group.areas}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/dubai/" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              View all 40 Dubai area pages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ BEFORE DURING AFTER ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Journey</span>
            <h2 className="text-section mt-3 mb-4">Before, During & After Your Pet's Move</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              A successful relocation is not just about the flight. It is about preparation before departure and settling in after arrival. We guide you through all three phases.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Before Travel</h3>
              <p className="text-body mb-4">
                Start with a document audit and timeline. Introduce your pet to the travel crate gradually. Schedule veterinary visits so vaccinations and health certificates fall inside the valid windows. Confirm your accommodation in Dubai allows pets and has space for the crate.
              </p>
              <p className="text-body">
                We send you a pre-travel checklist matched to your route so nothing is forgotten. We also coordinate with your vet to make sure the health certificate is issued at the right time — not too early, not too late.
              </p>
            </Card>
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">During Travel</h3>
              <p className="text-body mb-4">
                On travel day, your pet is checked in at the airline cargo terminal with all required documents attached to the crate. We book direct or carefully planned connecting flights to minimise transit time. Our team tracks the flight and updates you at departure, landing, and customs clearance.
              </p>
              <p className="text-body">
                If there is a delay or missed connection, we have contingency plans. Your pet is never left unattended in a cargo facility longer than necessary.
              </p>
            </Card>
            <Card>
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">After Arrival</h3>
              <p className="text-body mb-4">
                Once cleared through customs, your pet is transported to your home. We recommend a quiet space, fresh water, and a familiar blanket. Avoid overwhelming your pet with visitors on arrival day. Most pets settle within 24–48 hours.
              </p>
              <p className="text-body">
                We also remind you to register your pet with Dubai Municipality through the Aleef app within the mandatory 30-day window and to schedule any follow-up vaccinations required by your new community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ COMMON MISTAKES ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Avoid Delays</span>
            <h2 className="text-section mt-3 mb-4">Common Pet Relocation Mistakes — And How We Prevent Them</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Wrong microchip standard',
                fix: 'The UAE requires ISO 11784/11785 microchips. Some countries still implant non-ISO chips. We verify the chip number and standard before booking travel.',
              },
              {
                mistake: 'Vaccination timing errors',
                fix: 'Rabies vaccinations must be valid and at least 21 days old before travel. We check dates against your travel window and re-vaccinate if needed.',
              },
              {
                mistake: 'Health certificate issued too early',
                fix: 'Most health certificates are only valid for 10 days. We schedule the final vet visit so the certificate is fresh on travel day.',
              },
              {
                mistake: 'Booking passenger reservations instead of cargo',
                fix: 'Pets travel as manifest cargo, not excess baggage. We book with the airline cargo department and confirm live animal handling in writing.',
              },
              {
                mistake: 'Wrong crate size',
                fix: 'A crate that is too small is rejected at check-in. We measure your pet and supply an IATA-compliant crate with correct ventilation and locks.',
              },
              {
                mistake: 'Ignoring summer embargoes',
                fix: 'Brachycephalic breeds and some airlines restrict travel during hot months. We plan routing around embargo dates or choose alternative carriers.',
              },
            ].map((item) => (
              <Card key={item.mistake}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{item.mistake}</h3>
                <p className="text-body">{item.fix}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ AIRLINE POLICY GUIDANCE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Flights</span>
              <h2 className="text-section mt-3 mb-5">Understanding Airline Pet Travel Policies</h2>
              <p className="text-body-large mb-5">
                Every airline has different rules for pet cargo. Some accept only certain breeds. Some have summer embargoes. Some require specific crate brands or additional documentation. We do not guess. We confirm the rules in writing before booking.
              </p>
              <p className="text-body mb-5">
                Emirates SkyCargo and Etihad Cargo are the most common carriers for pets arriving in or departing from Dubai. Both require advance booking through their cargo departments, not passenger services. They also require health certificates, import permits, and IATA-compliant crates.
              </p>
              <p className="text-body mb-5">
                We choose flights based on routing, temperature, aircraft type, and ground handling quality. A slightly more expensive direct flight is often safer and cheaper than a complex itinerary with long transits and rebooking risk.
              </p>
              <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
                Read airline requirements in our import guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Cargo-only booking', body: 'Pets travel as manifest cargo, not checked baggage.' },
                { title: 'Temperature control', body: 'Cargo holds are climate-controlled and pressurised.' },
                { title: 'Breed restrictions', body: 'Each airline has its own banned and restricted breed list.' },
                { title: 'Crate standards', body: 'IATA rules on size, ventilation, and door locks apply.' },
                { title: 'Transit rules', body: 'Connecting flights may require transit permits or care.' },
                { title: 'Summer embargoes', body: 'Some carriers pause pet cargo during peak heat.' },
              ].map((item) => (
                <Card key={item.title} className="py-5">
                  <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A]">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ EXPAT GUIDE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">For Expats</span>
              <h2 className="text-section mt-3 mb-5">A Practical Guide for Expats Moving Pets to Dubai</h2>
              <p className="text-body-large mb-5">
                Moving to Dubai as an expat is exciting, but it also comes with a long checklist. visas, housing, schooling, shipping — and your pet. Many expats tell us that pet relocation was the most stressful part of their move because the rules are unfamiliar and the stakes feel high. This section is designed to reduce that stress.
              </p>
              <p className="text-body mb-5">
                The first decision is timing. If you are coming from a low-risk rabies country like the UK, most of the EU, Australia, or New Zealand, you can usually relocate your pet in 4–6 weeks. If you are coming from a high-risk country like the USA, Canada, India, or South Africa, you need a rabies titer test followed by a 90-day waiting period. That means the process takes a minimum of 4 months from the date of the blood sample.
              </p>
              <p className="text-body mb-5">
                The second decision is accommodation. Not every rental property in Dubai allows pets, and some buildings have weight or breed restrictions. We recommend confirming your new home is pet-friendly before you book flights. If you are staying in a hotel temporarily, check whether the hotel accepts pets and whether they have size limits.
              </p>
              <p className="text-body">
                The third decision is who coordinates the move. You can try to manage the vet, the airline cargo desk, the MOCCAE portal, and customs clearance yourself. Many people do. But one mistake in timing or paperwork can cost you thousands of dirhams and weeks of delay. Our concierge service exists to remove that risk and give you one point of contact who speaks your language and updates you on WhatsApp.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Start early', body: 'Begin planning 8–16 weeks before your move, or 4 months if you need a titer test.' },
                { title: 'Check your lease', body: 'Confirm your new home allows pets and has space for a travel crate.' },
                { title: 'Gather documents', body: 'Collect microchip certificate, vaccination records, and passport copies early.' },
                { title: 'Plan around summer', body: 'If moving between May and September, ask about heat embargoes immediately.' },
                { title: 'Prepare your pet', body: 'Introduce the crate gradually so travel day is less stressful.' },
                { title: 'Budget realistically', body: 'Expect AED 8,000–25,000 total depending on route, size, and service level.' },
              ].map((tip) => (
                <Card key={tip.title} className="py-5">
                  <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[#5A5A5A]">{tip.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ IMPORT PROCESS DEEP DIVE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Regulations</span>
            <h2 className="text-section mt-3 mb-4">Understanding the UAE Pet Import Process</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              The UAE regulates pet imports through the Ministry of Climate Change and Environment (MOCCAE). The rules are designed to prevent rabies and other diseases from entering the country. Understanding the framework helps you see why each document matters.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 1: Microchip Identification</h3>
              <p className="text-body">
                Every pet entering the UAE must be identified by an ISO 11784/11785 compliant microchip. The microchip number must appear on all subsequent documents, including vaccination certificates and health certificates. A mismatch between the chip number and the paperwork is one of the most common reasons for entry delays. We verify the chip number at the start of every booking.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 2: Rabies Vaccination</h3>
              <p className="text-body">
                Rabies vaccination is mandatory for dogs and cats. The vaccine must be valid and administered at least 21 days before travel. If it is a first-time rabies vaccine, the 21-day waiting period applies. If it is a booster and the previous vaccine was valid, travel can sometimes happen sooner. We check the vaccination history to confirm compliance.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 3: Rabies Titer Test (When Required)</h3>
              <p className="text-body">
                For pets coming from high-risk rabies countries, a rabies neutralising antibody titre test (RNATT) is required. The blood sample must be taken at least 21 days after the rabies vaccination, and the pet cannot enter the UAE until 90 days after the blood sample date. The test must be performed at an accredited laboratory. We coordinate the timing so the waiting period does not derail your move.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 4: MOCCAE Import Permit</h3>
              <p className="text-body">
                The import permit is applied for through the MOCCAE online portal or app. It costs approximately AED 200 per pet and is valid for a limited window. The permit must be issued before travel and presented at arrival. We prepare the application, upload the documents, and track approval.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Step 5: Health Certificate & Travel</h3>
              <p className="text-body">
                Within a defined window before travel, an accredited veterinarian issues an international health certificate. The certificate confirms your pet is healthy, vaccinated, and fit to fly. Antiparasitic treatment is also documented. On travel day, your pet is checked in as manifest cargo with all documents attached.
              </p>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              Read the complete import guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ DIY VS CONCIERGE ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Compare</span>
            <h2 className="text-section mt-3 mb-4">DIY Pet Relocation vs a Concierge Service</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Some pet owners manage the entire relocation themselves. Others prefer to hand the coordination to a specialist. Both are valid. Here is how they compare.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#4F5BD5] text-white">
                  <th className="p-4 rounded-tl-[16px] text-sm font-semibold">Task</th>
                  <th className="p-4 text-sm font-semibold">DIY</th>
                  <th className="p-4 rounded-tr-[16px] text-sm font-semibold">With Dubai Pet Relocation</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { task: 'Document review', diy: 'You research and verify each document yourself.', concierge: 'We audit every document and flag issues before submission.' },
                  { task: 'MOCCAE permit', diy: 'You create the account, fill the forms, and follow up.', concierge: 'We prepare and submit the application for you.' },
                  { task: 'Flight booking', diy: 'You contact airline cargo desks directly.', concierge: 'We book with confirmed live animal handling in writing.' },
                  { task: 'Vet coordination', diy: 'You find a clinic familiar with travel certificates.', concierge: 'We refer you to vetted travel-certificate clinics.' },
                  { task: 'Customs clearance', diy: 'You handle paperwork at DXB or DWC cargo terminal.', concierge: 'Our ground partner clears your pet and delivers to your door.' },
                  { task: 'Timeline risk', diy: 'One error can delay your pet by weeks.', concierge: 'We catch errors early and keep the timeline on track.' },
                ].map((row, i) => (
                  <tr key={row.task} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F6FD]'}>
                    <td className="p-4 font-semibold text-[#2A2A2A]">{row.task}</td>
                    <td className="p-4 text-[#5A5A5A]">{row.diy}</td>
                    <td className="p-4 text-[#5A5A5A]">{row.concierge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-body mt-6">
            The right choice depends on your time, budget, and risk tolerance. If you value peace of mind and a single point of contact, a concierge service is usually worth the coordination fee.
          </p>
        </div>
      </section>

      {/* ═══════════ INSURANCE & PROTECTION ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Protection</span>
              <h2 className="text-section mt-3 mb-5">Pet Relocation Insurance and Risk Management</h2>
              <p className="text-body-large mb-5">
                No one wants to think about things going wrong, but responsible pet travel means planning for the unexpected. We discuss insurance, contingency routing, and health risks openly so you can make an informed decision.
              </p>
              <p className="text-body mb-5">
                Pet travel insurance typically covers trip cancellation, delay-related boarding, and in some cases veterinary expenses during transit. Not all policies are equal, so we help you understand what is covered and what is excluded. We also recommend choosing direct flights where possible, because every connection adds complexity.
              </p>
              <p className="text-body">
                For brachycephalic breeds, senior pets, or animals with medical conditions, we may recommend additional veterinary checks or alternative routing. We will never book a flight we believe puts your pet at unnecessary risk. If the safest option is to wait for cooler weather or a better routing, we will tell you honestly.
              </p>
            </div>
            <Card className="bg-[#F0F2FB]">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">What We Do to Reduce Risk</h3>
              <ul className="space-y-3">
                {[
                  'Triple-check all documentation before submission',
                  'Book direct flights whenever possible',
                  'Avoid travel during peak heat for at-risk breeds',
                  'Use IATA-compliant crates sized to your pet',
                  'Coordinate with licensed veterinary clinics',
                  'Provide real-time WhatsApp updates at every checkpoint',
                  'Maintain contingency plans for delays and cancellations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                    <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ COST FACTORS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Pricing</span>
            <h2 className="text-section mt-3 mb-4">What Drives Pet Relocation Costs in Dubai</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Understanding cost factors helps you budget accurately and spot quotes that are too good to be true. Here is what actually drives the price of moving a pet to or from Dubai.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Origin country rabies risk',
                body: 'Low-risk countries like the UK, Australia, and most of the EU do not require a rabies titer test. High-risk countries like the USA, India, and South Africa require a titer test and a 90-day wait, which adds laboratory fees, extra veterinary visits, and planning time.',
              },
              {
                title: 'Pet size and crate volume',
                body: 'Airline cargo fees are based on volumetric weight. A Great Dane in an XXL crate costs significantly more than a cat in a small crate. The crate itself also becomes more expensive as size increases.',
              },
              {
                title: 'Route and flight availability',
                body: 'Direct routes are usually cheaper and safer than multi-leg itineraries. Some destinations have limited cargo capacity, which drives up pricing during peak seasons.',
              },
              {
                title: 'Service level',
                body: 'A basic documentation-and-booking package costs less than a full door-to-door concierge service with real-time updates and customs clearance. We explain the difference clearly so you can choose the right level.',
              },
              {
                title: 'Seasonal factors',
                body: 'Summer embargoes may require alternative routing, night flights, or temporary boarding. These contingencies can add cost but are necessary for your pet\'s safety.',
              },
              {
                title: 'Government fees',
                body: 'MOCCAE permits, customs processing, and Dubai Municipality registration are pass-through costs. We do not mark them up. We show you the exact government amounts so you know where your money goes.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{item.title}</h3>
                <p className="text-body">{item.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              See full cost guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CUSTOMER SCENARIOS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Real Moves</span>
            <h2 className="text-section mt-3 mb-4">How Different Pet Moves Come Together</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Every relocation is different. Below are representative scenarios that show how timelines, costs, and coordination vary by origin, pet type, and family situation.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'British expat returning to the UK with a Labrador',
                body: 'Outbound from Dubai to London requires a UAE export health certificate, MOCCAE endorsement, and compliance with UK DEFRA rules. Because the UK is rabies-free, the import side is straightforward once the export paperwork is correct. We coordinate the vet visit within the travel window, book Emirates SkyCargo or a suitable alternative, and arrange delivery in London or collection at Heathrow.',
              },
              {
                title: 'American family moving a Golden Retriever to Dubai',
                body: 'This is one of the most common high-risk routes. The dog needs a microchip, rabies vaccination, titer test, 90-day wait, MOCCAE import permit, and health certificate. We start the process 4 months before the planned move, schedule the titer test at an accredited lab, and track every milestone so the family can focus on visas and housing.',
              },
              {
                title: 'Indian professional relocating a Persian cat to Dubai',
                body: 'Cats from India require the same titer test and waiting period as dogs. Because Persian cats are brachycephalic, we also review summer routing carefully. We recommend crate training, a vet check for breathing fitness, and a direct or short-route flight to minimise transit time.',
              },
              {
                title: 'Australian couple bringing two cats to Dubai',
                body: 'Australia is rabies-free, so no titer test is required for UAE entry. However, Australian export rules are strict. We coordinate the Australian export permit, health certificate, and airline booking, then manage the UAE import permit and customs clearance on arrival.',
              },
              {
                title: 'Dubai family moving a Beagle to the USA',
                body: 'The USA has updated CDC dog import rules that require specific documentation and entry points depending on the dog\'s vaccination history. We review the latest CDC guidance, prepare the health certificate, and confirm the airline accepts the route before booking.',
              },
            ].map((scenario) => (
              <Card key={scenario.title}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{scenario.title}</h3>
                <p className="text-body">{scenario.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-[20px] bg-[#4F5BD5] text-white text-center">
            <p className="text-white/90 mb-4">
              Have a different scenario? Tell us your pet, origin, and destination on WhatsApp and we will build a custom plan.
            </p>
            <WhatsAppCta text="Share Your Move Details" className="!bg-white !text-[#4F5BD5] hover:!bg-[#EEF0FC]" />
          </div>
        </div>
      </section>

      {/* ═══════════ PLANNING TIMELINE ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Timing</span>
            <h2 className="text-section mt-3 mb-4">Planning Your Pet Relocation Timeline</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              The earlier you start, the more options you have. Here is a general timeline for planning a pet relocation to Dubai.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                when: '4 months before travel',
                title: 'High-risk country route begins',
                body: 'If your pet needs a rabies titer test, book the blood draw now. The 90-day waiting period starts from the sample date, and the test itself may take 2–4 weeks to return.',
              },
              {
                when: '8–10 weeks before travel',
                title: 'Low-risk country route begins',
                body: 'For low-risk origins, 8–10 weeks is usually enough. We audit documents, check breed eligibility, and apply for the MOCCAE import permit.',
              },
              {
                when: '6 weeks before travel',
                title: 'Book cargo space',
                body: 'Airline cargo space for live animals is limited, especially during summer and holiday periods. We confirm routing and crate requirements in writing.',
              },
              {
                when: '2–3 weeks before travel',
                title: 'Final vet preparation',
                body: 'Schedule the pre-travel health check and any remaining vaccinations. Make sure the microchip is readable and the crate is the correct size.',
              },
              {
                when: '10 days before travel',
                title: 'Health certificate issued',
                body: 'The international health certificate is issued within the valid travel window. We review it for accuracy and attach it to the crate.',
              },
              {
                when: 'Travel day',
                title: 'Check-in and flight',
                body: 'Your pet is checked in at the cargo terminal. We track the flight and update you at every checkpoint.',
              },
              {
                when: 'After arrival',
                title: 'Customs clearance and registration',
                body: 'We clear customs and deliver your pet. You then register with Dubai Municipality through the Aleef app within 30 days.',
              },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                  <div className="w-0.5 flex-1 bg-[#E6E8F5] my-2" />
                </div>
                <Card className="flex-1 py-5">
                  <p className="text-xs font-semibold text-[#4F5BD5] uppercase tracking-wider mb-1">{item.when}</p>
                  <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A]">{item.body}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ LIFE STAGES ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">All Ages</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation for Every Life Stage</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              A puppy, an adult dog, and a senior cat have different travel needs. We adjust our coordination based on your pet's age, health, and temperament.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Puppies & Kittens</h3>
              <p className="text-body mb-4">
                Young animals must usually be at least four months old and fully vaccinated before international travel. Their immune systems are still developing, so timing the rabies vaccine and health certificate correctly is essential. We also advise on crate training and socialisation before the big day.
              </p>
              <p className="text-body">
                If you are importing a puppy to Dubai, we confirm the minimum age rule, breed eligibility, and vaccination schedule so your new family member arrives safely and legally.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Adult Pets</h3>
              <p className="text-body mb-4">
                Healthy adult dogs and cats are the most straightforward travellers. They usually tolerate crate travel well and have complete vaccination records. We focus on choosing the right crate, the best flight routing, and making sure all documents are issued within the valid windows.
              </p>
              <p className="text-body">
                For active adult dogs, we may recommend a vet check for joint health if they will be in the crate for a long journey. For indoor cats, we focus on reducing stress through familiar scents and gradual crate introduction.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Senior Pets</h3>
              <p className="text-body mb-4">
                Older pets may have arthritis, heart conditions, or anxiety that make travel more challenging. We coordinate with your vet to confirm fitness to fly, discuss medication options, and choose routing that minimises transit time. For some senior pets, a direct flight is worth the extra cost.
              </p>
              <p className="text-body">
                We are honest about when travel may not be advisable. If your vet recommends against flying, we will tell you and help you explore alternatives such as road transport within the GCC or arranging care at your destination.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT MAKES DUBAI UNIQUE ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Local Context</span>
              <h2 className="text-section mt-3 mb-5">Why Dubai Pet Relocation Is Different</h2>
              <p className="text-body-large mb-5">
                Dubai is a global hub with a large expat population, which means high demand for pet relocation. It also means strict biosecurity rules, extreme summer heat, and a rental market where not every building welcomes animals. These factors make local expertise valuable.
              </p>
              <p className="text-body mb-5">
                The UAE's pet import rules are administered by MOCCAE and enforced at ports of entry. The rules are clear, but they are also unforgiving. A missing document or wrong date can result in conditional quarantine, return to origin, or significant delay. We have seen every common mistake and built our process to prevent them.
              </p>
              <p className="text-body mb-5">
                Summer temperatures in Dubai regularly exceed 40°C, which affects airline policies for live animal cargo. Some carriers suspend pet transport during peak heat, while others restrict brachycephalic breeds entirely. We plan around these realities rather than hoping for exceptions.
              </p>
              <p className="text-body">
                Finally, Dubai's community structure matters. Picking up a pet from a high-rise in Downtown Dubai is different from delivering to a villa in Arabian Ranches. Our area pages reflect these practical differences.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Strict biosecurity', body: 'MOCCAE rules are enforced at entry. Accuracy matters.' },
                { title: 'Extreme heat', body: 'Summer embargoes affect routing and timing.' },
                { title: 'Expat demand', body: 'High volume means cargo space books up fast.' },
                { title: 'Building policies', body: 'Not all towers allow pets or have easy loading.' },
                { title: 'Vet network', body: 'Only some clinics handle travel certificates regularly.' },
                { title: 'Regulatory updates', body: 'Rules change. We monitor MOCCAE circulars.' },
              ].map((item) => (
                <Card key={item.title} className="py-5">
                  <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A]">{item.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WELFARE & SUSTAINABILITY ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Values</span>
            <h2 className="text-section mt-3 mb-4">Animal Welfare at the Centre of What We Do</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              We believe pet relocation should never be treated like freight shipping. Behind every booking is a living animal with its own temperament, health history, and bond with its family.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">We Say No When We Need To</h3>
              <p className="text-body">
                If a route is unsafe for your pet's breed or health condition, we will tell you. If a timeline is physically impossible without compromising welfare, we will explain why. We would rather lose a booking than put an animal at risk.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">We Reduce Travel Stress</h3>
              <p className="text-body">
                Stress reduction starts long before the flight. We advise on crate training, familiar items, feeding schedules, and exercise. On travel day, we choose routing that minimises transit time and temperature exposure.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">We Work With Licensed Professionals</h3>
              <p className="text-body">
                Every partner in our network is licensed and experienced with live animal transport. From veterinarians to cargo agents to ground handlers, we choose people who treat animals with care.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">We Give Back</h3>
              <p className="text-body">
                Where possible, we support local animal welfare initiatives and rescue organisations. Relocation is just one part of a broader commitment to animal wellbeing in the UAE.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ GETTING STARTED ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm font-semibold text-[#6E78E0] uppercase tracking-wider">Start Today</span>
              <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight text-white mt-3 mb-4">
                Getting Started Takes Less Than 15 Minutes
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                You do not need to have every answer figured out. Send us a WhatsApp message with what you know, and we will guide you through the rest. We will ask about your pet, your route, your timeline, and any documents you already have. From there, we build a clear plan.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Free initial consultation with no obligation',
                  'Document audit before you commit',
                  'Itemised quote with every line item explained',
                  'Realistic timeline based on your route',
                  'WhatsApp updates at every step',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#6E78E0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <WhatsAppCta text="Start on WhatsApp" className="!bg-white !text-[#4F5BD5] hover:!bg-[#EEF0FC]" />
            </div>
            <div className="bg-white/10 rounded-[28px] p-8 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">What to Include in Your First Message</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2.5"><CheckCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Pet type and breed</li>
                <li className="flex items-start gap-2.5"><CheckCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Current location and destination</li>
                <li className="flex items-start gap-2.5"><CheckCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Planned travel date</li>
                <li className="flex items-start gap-2.5"><CheckCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Approximate weight or size</li>
                <li className="flex items-start gap-2.5"><CheckCircle className="w-4 h-4 text-white/60 shrink-0 mt-0.5" /> Any existing vaccinations or documents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CHECKLIST BY WEEK ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Action Plan</span>
            <h2 className="text-section mt-3 mb-4">Your Pet Relocation Checklist by Week</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Use this checklist to stay on track. Timings vary by route, but this framework works for most relocations to or from Dubai.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                week: 'Week 1',
                tasks: ['Contact Dubai Pet Relocation on WhatsApp', 'Share pet details, origin, destination, and timeline', 'Receive document audit checklist', 'Confirm accommodation is pet-friendly'],
              },
              {
                week: 'Week 2',
                tasks: ['Gather microchip and vaccination records', 'Schedule vet appointment for travel certificate discussion', 'Apply for MOCCAE import permit if entering UAE', 'Order or confirm IATA crate size'],
              },
              {
                week: 'Week 3',
                tasks: ['Book airline cargo space', 'Confirm crate fit after measuring pet', 'Arrange antiparasitic treatment if required', 'Plan ground transport at origin and destination'],
              },
              {
                week: 'Week 4',
                tasks: ['Final vet visit for health certificate', 'Review all documents one last time', 'Prepare pet ID tags and travel documents', 'Confirm pickup and delivery addresses'],
              },
              {
                week: 'Travel Week',
                tasks: ['Light meal and exercise before travel', 'Check in at airline cargo terminal', 'Track flight with our updates', 'Receive pet at destination or arrange delivery'],
              },
              {
                week: 'After Arrival',
                tasks: ['Allow quiet recovery time', 'Register with Dubai Municipality within 30 days', 'Schedule follow-up vet visit', 'Update microchip registration if needed'],
              },
            ].map((week) => (
              <Card key={week.week}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-3">{week.week}</h3>
                <ul className="space-y-2">
                  {week.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2.5 text-sm text-[#5A5A5A]">
                      <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="text-center text-body mt-8">
            This checklist is a starting point. Your actual timeline may be longer if you need a rabies titer test or shorter for certain low-risk routes. Message us for a plan matched to your move.
          </p>
        </div>
      </section>

      {/* ═══════════ GLOSSARY ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Definitions</span>
            <h2 className="text-section mt-3 mb-4">Pet Relocation Terms Explained</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              The pet relocation industry uses jargon that can confuse first-time shippers. Here is what the most common terms mean.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { term: 'MOCCAE', def: 'The UAE Ministry of Climate Change and Environment. It issues pet import permits and sets biosecurity rules.' },
              { term: 'Import permit', def: 'Government approval allowing a pet to enter a country. Required for all pets entering the UAE.' },
              { term: 'Health certificate', def: 'A veterinary document confirming a pet is healthy and vaccinated, usually issued close to travel.' },
              { term: 'Rabies titer test (RNATT)', def: 'A blood test measuring rabies antibody levels. Required for pets from high-risk countries.' },
              { term: 'ISO microchip', def: 'A 15-digit microchip meeting ISO standards. Required for pet identification in the UAE.' },
              { term: 'IATA crate', def: 'A travel crate meeting International Air Transport Association standards for live animal transport.' },
              { term: 'Manifest cargo', def: 'Pets travelling in the cargo hold as booked cargo, not as passenger baggage.' },
              { term: 'Brachycephalic', def: 'Short-nosed breeds such as Bulldogs, Pugs, and Persian cats. They face extra airline restrictions.' },
              { term: 'Antiparasitic treatment', def: 'Treatment against ticks and tapeworms, documented on the health certificate.' },
              { term: 'Aleef app', def: 'The Dubai Municipality app used to register pets after arrival in Dubai.' },
            ].map((entry) => (
              <div key={entry.term} className="pb-5 border-b border-[#E6E8F5]">
                <h3 className="text-base font-bold text-[#2A2A2A] mb-1">{entry.term}</h3>
                <p className="text-sm text-[#5A5A5A]">{entry.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SUCCESS STORIES ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Stories</span>
            <h2 className="text-section mt-3 mb-4">What a Successful Pet Relocation Looks Like</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              These anonymised scenarios represent the kinds of moves we coordinate every week. They show how planning, communication, and the right partners come together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Returning Resident',
                body: 'A British family moving back to London needed to take their two cats with them. We coordinated the MOCCAE export endorsement, issued the health certificates within the travel window, and booked a direct cargo flight to Heathrow. Both cats were cleared and delivered to the family home within six hours of landing.',
              },
              {
                title: 'The First-Time Importer',
                body: 'An Indian professional adopted a rescue dog and wanted to bring her to Dubai. We explained the titer test timeline, helped her schedule the blood draw, and prepared the MOCCAE import permit. Four months later, the dog arrived safely and was registered with Dubai Municipality within a week.',
              },
              {
                title: 'The Corporate Move',
                body: 'A diplomat relocated from Abu Dhabi to Washington DC with a senior Golden Retriever. We coordinated veterinary fitness checks, managed the updated CDC import rules, and chose a direct flight to minimise transit time. The dog arrived calm and was reunited with the family the same day.',
              },
            ].map((story) => (
              <Card key={story.title}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C89F5A] fill-[#C89F5A]" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{story.title}</h3>
                <p className="text-body">{story.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRO TIPS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Expert Tips</span>
            <h2 className="text-section mt-3 mb-4">Pro Tips for a Smoother Pet Relocation</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              After coordinating hundreds of pet moves, these are the practical tips that make the biggest difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Start crate training early',
                body: 'A pet that sees the crate as a safe space will travel with far less stress. Leave the crate open in your home, add familiar bedding, and reward your pet for entering it voluntarily. For cats, this process can take several weeks, so begin as soon as you know you are moving.',
              },
              {
                title: 'Keep copies of everything',
                body: 'Make digital and physical copies of every document: microchip certificate, vaccination records, health certificate, import permit, and airway bill. If one copy is lost or damaged, you have a backup.',
              },
              {
                title: 'Choose direct flights when possible',
                body: 'Every connection adds handling, temperature changes, and delay risk. A direct flight is usually the safest and often the simplest option for your pet, even if it costs a little more.',
              },
              {
                title: 'Avoid booking on the hottest days',
                body: 'If you have flexibility, travel during cooler months or cooler times of day. For brachycephalic breeds, this is especially important because their breathing is compromised in heat.',
              },
              {
                title: 'Update your contact details',
                body: 'Make sure your phone number and email are on every document and crate label. If there is a delay, the airline or ground handler needs to reach you immediately.',
              },
              {
                title: 'Plan for arrival day',
                body: 'Have a quiet room ready, fresh water, and your pet\'s usual food. Avoid overwhelming them with visitors. Most pets need 24–48 hours to decompress after a long journey.',
              },
            ].map((tip) => (
              <Card key={tip.title}>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">{tip.title}</h3>
                <p className="text-body">{tip.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ AFTER YOU MESSAGE US ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Onboarding</span>
            <h2 className="text-section mt-3 mb-4">What Happens After You Message Us</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              We have designed our onboarding to be fast, clear, and low-pressure. Here is exactly what to expect when you contact Dubai Pet Relocation on WhatsApp.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'We reply within 15 minutes',
                body: 'A real person reads your message, confirms the information we have, and asks any follow-up questions. You are not talking to a bot or waiting in a queue.',
              },
              {
                step: '2',
                title: 'We audit your route and documents',
                body: 'We check your origin country, destination, pet breed, and any documents you already have. This lets us spot issues early and give you accurate advice rather than a generic estimate.',
              },
              {
                step: '3',
                title: 'We send a clear timeline and cost range',
                body: 'You receive a realistic timeline and an itemised cost range. If a titer test is required, we explain the 90-day waiting period. If your breed is restricted, we tell you honestly.',
              },
              {
                step: '4',
                title: 'You decide if you want to proceed',
                body: 'There is no pressure to book immediately. We answer your questions, refine the plan, and only move forward when you are ready. Once you confirm, we begin coordinating the partners and milestones.',
              },
              {
                step: '5',
                title: 'We stay with you until reunion',
                body: 'From the first document to the final delivery, you have one WhatsApp thread and one coordinator. We update you at every checkpoint and handle surprises if they arise.',
              },
            ].map((item) => (
              <Card key={item.title} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center font-bold text-sm shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#2A2A2A] mb-1">{item.title}</h3>
                  <p className="text-body">{item.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ACCURACY COMMITMENT ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-8 h-8 text-[#4F5BD5] mx-auto mb-4" />
          <h2 className="text-section mb-4">Accuracy, Transparency & Continuous Updates</h2>
          <p className="text-body-large mb-5">
            Pet relocation rules change. Airlines update policies. MOCCAE issues new circulars. Destination countries revise import rules. We monitor these changes and update our guides, route pages, and service information so the advice you read here reflects current practice.
          </p>
          <p className="text-body mb-5">
            We also believe in honest limits. We are a coordination service, not a government agency or airline. When a question requires an official ruling, we direct you to the relevant authority. When a route carries uncertainty, we say so. Our goal is not to sound perfect; it is to be genuinely helpful.
          </p>
          <p className="text-body">
            If you spot something outdated or have a question we have not answered, please message us on WhatsApp. We use real customer questions to improve our content and make future pet owners' journeys clearer.
          </p>
        </div>
      </section>

      {/* ═══════════ RESOURCE HUB ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Explore</span>
            <h2 className="text-section mt-3 mb-4">Every Page on Dubai Pet Relocation</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Our site is organised as a hub-and-spoke topical authority network. The homepage links to every major page so Google can discover and index the full site quickly, and so visitors can find exactly what they need. Whether you are researching costs, checking breed rules, or planning a specific route, there is a dedicated page for your question. Start with any link below and follow the related pages to build a complete picture of your move.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-base font-bold text-[#2A2A2A] mb-3">Services</h3>
              <ul className="space-y-2">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.to}>
                    <Link to={s.to} className="text-sm text-[#4F5BD5] hover:underline">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-bold text-[#2A2A2A] mb-3">Guides</h3>
              <ul className="space-y-2">
                {GUIDE_LINKS.map((g) => (
                  <li key={g.to}>
                    <Link to={g.to} className="text-sm text-[#4F5BD5] hover:underline">{g.label}</Link>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-bold text-[#2A2A2A] mb-3">Routes</h3>
              <ul className="space-y-2">
                {ALL_ROUTE_LINKS.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="text-sm text-[#4F5BD5] hover:underline">{r.label}</Link>
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-bold text-[#2A2A2A] mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about/" className="text-sm text-[#4F5BD5] hover:underline">About Us</Link></li>
                <li><Link to="/contact/" className="text-sm text-[#4F5BD5] hover:underline">Contact</Link></li>
                <li><Link to="/faq/" className="text-sm text-[#4F5BD5] hover:underline">FAQ</Link></li>
                <li><Link to="/services/" className="text-sm text-[#4F5BD5] hover:underline">Services Overview</Link></li>
                <li><Link to="/how-it-works/" className="text-sm text-[#4F5BD5] hover:underline">How It Works</Link></li>
                <li><Link to="/privacy-policy/" className="text-sm text-[#4F5BD5] hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service/" className="text-sm text-[#4F5BD5] hover:underline">Terms of Service</Link></li>
              </ul>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Link to="/dubai/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F5BD5] hover:underline">
              Browse 40 Dubai area pages <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ EXPANDED FAQ ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Common Questions</span>
            <h2 className="text-section mt-3 mb-4">Frequently Asked Questions About Pet Relocation in Dubai</h2>
            <p className="text-body-large">
              Detailed answers to the questions we hear most often. For advice tailored to your pet and route, WhatsApp us anytime.
            </p>
          </div>
          <FAQItem
            question="Do dogs need to be quarantined in Dubai?"
            answer={
              <>
                <p>No. If all documentation is complete and correct, pets do not require mandatory quarantine in Dubai. This includes a valid MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate. However, incomplete documentation can result in conditional quarantine at the owner's expense. We check every document three times to prevent this.</p>
                <p className="mt-3">
                  <Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    Read our full import guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How much does pet relocation to Dubai cost?"
            answer={
              <>
                <p>Pet relocation to Dubai typically costs between <strong>AED 8,000 and AED 25,000</strong> depending on the origin country, pet size, and service level. The breakdown includes government fees (AED 200–700), veterinary costs (AED 1,200–2,500), cargo shipping (AED 3,000–12,000), and coordination fees (AED 1,500–6,000).</p>
                <p className="mt-3">
                  <Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    See our full cost breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="How long does the process take?"
            answer={
              <>
                <p>From low-risk countries like the UK or EU, the process takes 4–6 weeks. From high-risk countries requiring a rabies titer test, the minimum timeline is 4 months (including the 90-day waiting period). We recommend starting at least 8 weeks before your planned move.</p>
                <p className="mt-3">
                  <Link to="/how-it-works/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    See the full timeline <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="Which dog breeds are banned in Dubai?"
            answer={
              <>
                <p>The UAE bans Pit Bull types, Mastiff types (including Cane Corso and Boerboel), Japanese Tosa, and wolf-dog hybrids. Some breeds like Rottweiler and Doberman are restricted. We verify your breed's eligibility before quoting.</p>
                <p className="mt-3">
                  <Link to="/guides/banned-dog-breeds-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    See the banned breed list <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="Can I get a quote on WhatsApp?"
            answer={
              <p>Yes. Send us a WhatsApp message with your pet's type, breed, origin, destination, and timeline. We will reply within 15 minutes during business hours with a realistic cost range and next steps.</p>
            }
          />
          <FAQItem
            question="What is the MOCCAE import permit?"
            answer={
              <>
                <p>The MOCCAE import permit is a mandatory approval from the UAE Ministry of Climate Change and Environment for all pets entering the country. It costs approximately AED 200 per pet and is valid for a limited window. We prepare and submit the application for you.</p>
                <p className="mt-3">
                  <Link to="/guides/moccae-import-permit/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    Learn about MOCCAE permits <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="Do cats need a rabies titer test?"
            answer={
              <p>It depends on the origin country. Cats from low-risk rabies countries like the UK, EU, USA, Canada, Australia, and New Zealand do not need a titer test. Cats from high-risk countries do. We confirm the requirement for your specific route during our first review.</p>
            }
          />
          <FAQItem
            question="Can my pet travel in the cabin with me?"
            answer={
              <p>Most airlines only allow very small pets in the cabin, and many routes to Dubai require pets to travel as manifest cargo regardless of size. We check your airline's specific policy and recommend the safest option for your pet.</p>
            }
          />
          <FAQItem
            question="What size crate does my pet need?"
            answer={
              <>
                <p>Your pet must be able to stand, turn around, and lie down naturally inside the crate. The crate must also meet IATA standards for ventilation, door locks, and live animal labeling. We measure your pet and recommend the correct crate size.</p>
                <p className="mt-3">
                  <Link to="/guides/iata-pet-crate-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    Read the crate guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="Do you offer pet relocation from Abu Dhabi or Sharjah?"
            answer={
              <>
                <p>Yes. While our headquarters are in Dubai, we coordinate relocations across all seven emirates. We have dedicated pages for Abu Dhabi and the main Dubai communities.</p>
                <p className="mt-3">
                  <Link to="/cities/abu-dhabi/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">
                    Abu Dhabi pet relocation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </p>
              </>
            }
          />
          <FAQItem
            question="Is sedation safe for flying pets?"
            answer={
              <p>Most airlines and veterinarians advise against sedation for cargo travel. Sedated pets cannot regulate their body temperature or balance as well during turbulence. We use crate training, familiar bedding, and calming techniques instead. If your pet has severe anxiety, we discuss options with our veterinary partners.</p>
            }
          />
          <FAQItem
            question="What happens if my flight is delayed or cancelled?"
            answer={
              <p>We monitor flights in real time and have contingency plans for delays, cancellations, and missed connections. If your pet is already in transit, our ground partners receive them and provide care until the next available flight.</p>
            }
          />
          <FAQItem
            question="How do I register my pet with Dubai Municipality?"
            answer={
              <p>After arrival, pets must be registered with Dubai Municipality through the Aleef app within 30 days. We guide you through the registration, vaccination upload, and ID tag process as part of our service.</p>
            }
          />
          <FAQItem
            question="Can you help with emergency relocation?"
            answer={
              <p>Yes. We understand that some moves happen on short notice. Contact us on WhatsApp with your timeline and we will tell you honestly what is possible, what shortcuts are not safe, and how to meet your deadline without compromising your pet's welfare.</p>
            }
          />
          <FAQItem
            question="What is the difference between an import permit and a health certificate?"
            answer={
              <p>The MOCCAE import permit is approval from the UAE government allowing your pet to enter the country. The health certificate is a veterinary document confirming your pet is healthy and vaccinated. Both are required, but they come from different authorities and have different validity windows.</p>
            }
          />
          <FAQItem
            question="Can two pets share one travel crate?"
            answer={
              <p>Most airlines require each pet to have its own IATA-compliant crate. Exceptions are rare and usually apply only to very young animals from the same litter. We plan one crate per pet to avoid check-in rejection.</p>
            }
          />
          <FAQItem
            question="Should I feed my pet before the flight?"
            answer={
              <p>A light meal a few hours before departure is usually fine, but avoid a large meal immediately before travel. Water should be available in the crate's water bowl. We provide specific feeding and watering instructions based on your pet's flight time and route.</p>
            }
          />
          <FAQItem
            question="What if my pet has a medical condition?"
            answer={
              <p>Tell us about any medical condition during your first consultation. We coordinate with your vet to confirm fitness to fly, arrange any required medications, and choose routing that minimises stress. Some conditions may require a veterinary fit-to-fly letter.</p>
            }
          />
          <FAQItem
            question="Do you relocate pets other than dogs and cats?"
            answer={
              <p>Our core service is dog and cat relocation to and from Dubai. If you need help with another type of animal, contact us on WhatsApp and we will let you know whether we can assist or refer you to a specialist.</p>
            }
          />
          <FAQItem
            question="How do I know if my pet's rabies vaccine is valid for UAE entry?"
            answer={
              <p>The vaccine must be an approved inactivated or recombinant rabies vaccine, administered after microchip implantation, and valid at the time of travel. It must also be at least 21 days old if it is a first vaccination. We review your certificate to confirm it meets UAE requirements.</p>
            }
          />
          <FAQItem
            question="Can I track my pet during the flight?"
            answer={
              <p>Airlines do not provide live GPS tracking inside the cargo hold, but we track the flight itself and update you at key milestones: check-in, departure, arrival, customs clearance, and handover. For our most comprehensive service tier, we can also arrange photo updates at checkpoints.</p>
            }
          />
          <FAQItem
            question="What documents do I need to pick up my pet in Dubai?"
            answer={
              <p>You will need your passport, the original health certificate, the MOCCAE import permit, and any airline airway bills. If our ground partner is clearing customs for you, we handle this paperwork and deliver your pet to your door.</p>
            }
          />
          <FAQItem
            question="Is there a weight limit for pets travelling as cargo?"
            answer={
              <p>There is no fixed weight limit for cargo, but larger and heavier pets cost more to ship because cargo fees are based on volumetric weight. Very large dogs may require custom crates and specific aircraft types. We confirm all of this during the quoting process.</p>
            }
          />
        </div>
      </section>

      {/* ═══════════ FINAL CONVERSION ═══════════ */}
      <section className="bg-[#EEF0FC] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-[#4F5BD5] mx-auto mb-4" />
          <h2 className="text-section mb-4">Ready to Get Clear Guidance?</h2>
          <p className="text-body-large mb-4">
            Send us a WhatsApp message with your pet's details. We will check your route, tell you what is needed, and give you a realistic timeline — usually within 15 minutes.
          </p>
          <p className="text-sm text-[#8A8A8A] mb-8">No forms. No hidden fees. No obligation. Just clear answers.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCta text="Get Help on WhatsApp" />
            <Link
              to="/guides/pet-relocation-cost-dubai/"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors"
            >
              View Cost Guide
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Clock className="w-3.5 h-3.5" /> Reply within 15 min
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Shield className="w-3.5 h-3.5" /> No hidden fees
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#8A8A8A]">
              <Heart className="w-3.5 h-3.5" /> Animal-first approach
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
