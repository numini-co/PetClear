import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Shield, CheckCircle, Award, Users, Heart, Globe, FileCheck, Phone, ChevronDown, ChevronUp
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import AirportNetworkRoles from '../components/AirportNetworkRoles.tsx'

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-question w-full text-left" aria-expanded={open}>
        <span className="pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#4F5BD5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#8A8A8A] shrink-0" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}>
    {children}
  </div>
)

const WhatsAppCta = ({
  text,
  message,
  fullWidth = false,
  className = '',
}: {
  text: string
  message: string
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

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${BASE_URL}/about/` },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dubai Pet Relocation',
    url: BASE_URL,
    logo: `${BASE_URL}/assets/logo.png`,
    description: 'Transparent pet relocation coordination service for Dubai and the UAE.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Dubai Pet Relocation Company | About Our Coordinators',
          description:
            'Dubai pet relocation company focused on clear MOCCAE timelines, airline options, and WhatsApp coordination (+971504782999).',
          keywords: 'about Dubai Pet Relocation, pet relocation company Dubai, pet coordination Dubai, who is Dubai Pet Relocation, pet relocation experts UAE',
          canonical: `${BASE_URL}/about/`,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, organizationSchema]}
      />

      <Breadcrumb items={[{ label: 'About' }]} />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/about-hero.jpg"
        imageAlt="A happy dog and cat relaxing at home in Dubai, well cared for during their relocation"
        eyebrow="About Us"
        title="About Dubai Pet Relocation — A Dubai Pet Relocation Company"
        subtitle="A small Dubai team of pet owners and logistics experts, making pet relocation clear instead of confusing, opaque, and stressful."
      />

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Our Story</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
                Built by Pet Owners, for Pet Owners
              </h2>
              <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                <p>
                  Dubai Pet Relocation started with a simple frustration: trying to relocate a beloved dog from the UK to Dubai and feeling completely lost. The information was scattered across government websites, airline cargo pages, and vet clinics. Every company we contacted gave a different answer.
                </p>
                <p>
                  We realized the problem was not a lack of services — it was a lack of transparency. Pet owners were expected to trust opaque processes without understanding what was happening, why it cost what it did, or whether their pet was in safe hands.
                </p>
                <p>
                  So we built Dubai Pet Relocation as a coordination model: we help you understand the process, we check every document, we connect you with vetted partners, and we stay on WhatsApp with you every step of the way.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="text-center">
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <p className="text-lg font-bold text-[#2A2A2A] mb-1">Trusted relocation guidance</p>
                <p className="text-sm text-[#8A8A8A]">Pets relocated safely</p>
              </Card>
              <Card className="text-center">
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <p className="text-lg font-bold text-[#2A2A2A] mb-1">Route-by-route checks</p>
                <p className="text-sm text-[#8A8A8A]">Requirements confirmed per corridor</p>
              </Card>
              <Card className="text-center">
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                  <Users className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <p className="text-lg font-bold text-[#2A2A2A] mb-1">WhatsApp</p>
                <p className="text-sm text-[#8A8A8A]">Replies during business hours</p>
              </Card>
              <Card className="text-center">
                <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <p className="text-lg font-bold text-[#2A2A2A] mb-1">Document review</p>
                <p className="text-sm text-[#8A8A8A]">Checked before you fly</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ E-E-A-T ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Why We Know What We Are Talking About</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
              Experience, Expertise, Authority, and Trust
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-5">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Deep MOCCAE Knowledge</h3>
              <p className="text-[#5A5A5A] text-base leading-relaxed">
                We stay current with every MOCCAE regulation update, banned breed list change, and import permit requirement. We have handled permits for low-risk, high-risk, and restricted breed cases — and we know where the common failure points are.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Airline Relationships</h3>
              <p className="text-[#5A5A5A] text-base leading-relaxed">
                We understand which airlines accept which breeds, which routes have temperature embargoes, and which carriers have the best safety records for brachycephalic pets. We do not guess — we know the policies and the people.
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-5">
                <Users className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Vet Network</h3>
              <p className="text-[#5A5A5A] text-base leading-relaxed">
                We work with a vetted network of veterinary clinics in Dubai and abroad who understand international health certificates, rabies titer testing, and pre-travel health checks. We coordinate directly so nothing is missed.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ TEAM ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">The People Behind Dubai Pet Relocation</span>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
              A Small Team of Pet Lovers and Logistics Experts
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              We are based in Dubai and work closely with partners across the UAE, Europe, and beyond. Every team member has relocated their own pet — so we understand the emotional side as well as the logistical one.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <img src="/images/team-support.jpg" alt="Pet relocation coordinators working together at a laptop with a calm dog resting nearby" width={1280} height={854} loading="lazy" className="w-full rounded-[24px] object-cover shadow-sm" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Pet Relocation Coordinators',
                role: 'Your Day-to-Day Guides',
                desc: 'They handle your documents, timeline, and partner coordination. Each coordinator manages a limited number of clients so you always get fast, personal responses.',
              },
              {
                name: 'Regulatory Specialists',
                role: 'MOCCAE & Compliance Experts',
                desc: 'They verify every document against current MOCCAE rules, check breed eligibility, and ensure your paperwork is submitted correctly the first time.',
              },
              {
                name: 'Partner Relations',
                role: 'Vet & Airline Liaisons',
                desc: 'They maintain relationships with our trusted veterinary and transport partners, ensuring availability, quality, and clear communication on your travel day.',
              },
            ].map((member) => (
              <Card key={member.name}>
                <div className="w-14 h-14 rounded-full bg-[#4F5BD5] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-[#4F5BD5] mb-3">{member.role}</p>
                <p className="text-[#5A5A5A] text-base leading-relaxed">{member.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNER MODEL ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">How We Work</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
                We Are Not a Middleman. We Are a Coordination.
              </h2>
              <div className="space-y-4 text-[#5A5A5A] text-base leading-relaxed">
                <p>
                  Dubai Pet Relocation does not own cargo planes, run quarantine facilities, or employ veterinarians. Instead, we are a coordination layer that sits between you and the specialists who do.
                </p>
                <p>
                  Think of us like a wedding planner: we know the best vendors, we handle the timeline, we check every detail, and we stay with you on the day. But the photographer, caterer, and venue are still independent experts in their fields.
                </p>
                <p>
                  This model is better for you because:
                </p>
                <ul className="space-y-2">
                  {[
                    'We are not locked into a single airline or vet — we choose the best fit for your route and pet.',
                    'We have no incentive to hide costs or upsell unnecessary services.',
                    'We can be honest about risks because we are not the ones taking the physical risk.',
                    'You get specialist quality at every step, not a generalist doing everything.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#EEF0FC] rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-6">What Dubai Pet Relocation Does vs. What Partners Do</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-[16px] p-5">
                  <p className="font-semibold text-[#2A2A2A] mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#4F5BD5]" /> Dubai Pet Relocation
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#5A5A5A]">
                    <li>Understand your route, timeline, and pet profile</li>
                    <li>Check and prepare all documents</li>
                    <li>Match you with the right vet, airline, and transport partner</li>
                    <li>Coordinate timing and handoffs between parties</li>
                    <li>Update you on WhatsApp at every step</li>
                  </ul>
                </div>
                <div className="bg-white rounded-[16px] p-5">
                  <p className="font-semibold text-[#2A2A2A] mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#4F5BD5]" /> Partners (Vets, Airlines, Transport)
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#5A5A5A]">
                    <li>Perform veterinary exams and issue health certificates</li>
                    <li>Provide IATA-compliant travel crates</li>
                    <li>Operate the physical cargo flight and ground handling</li>
                    <li>Manage customs clearance at destination</li>
                    <li>Provide insurance and physical transport</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AirportNetworkRoles />

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Ready to Meet the Team Behind Your Pet's Journey?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Send us a WhatsApp message. We will introduce ourselves, answer your questions, and give you a clear picture of what your pet's relocation will look like — no pressure, no obligation.
          </p>
          <WhatsAppCta
            text="Get a Free Consultation"
            message="Hi Dubai Pet Relocation team! I would love to get a free consultation about relocating my pet. Can we chat?"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-sm text-white/60">
              <Phone className="w-4 h-4" /> WhatsApp during business hours
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
