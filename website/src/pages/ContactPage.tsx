import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Phone, Mail, MapPin, Clock, Send, ChevronRight, ChevronDown, ChevronUp
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL, siteConfig } from '../lib/seo.ts'
import { track } from '../lib/analytics.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-[20px] shadow-sm p-7 lg:p-8 ${className}`}>
    {children}
  </div>
)

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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', petType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    track('form_submit', { page_path: '/contact/' })
    // This static site has no form backend — deliver the enquiry to our WhatsApp
    // so the lead is actually captured instead of lost.
    const lead = `New website enquiry:\nName: ${formData.name}\nEmail: ${formData.email}\nPet type: ${formData.petType}\nMessage: ${formData.message}`
    window.open(getWhatsAppUrl(lead, 'contact-form'), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setFormData({ name: '', email: '', petType: '', message: '' })
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact/` },
    ],
  }

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dubai Pet Relocation',
    url: `${BASE_URL}/contact/`,
    description: 'Contact Dubai Pet Relocation for pet relocation help in Dubai. Reach us via WhatsApp, email, or our contact form.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'AE',
    },
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Contact Dubai Pet Relocation | Pet Relocation Dubai',
          description: 'Contact Dubai Pet Relocation for pet relocation help in Dubai via WhatsApp, email, or form. We reply within 15 minutes during business hours.',
          keywords: 'contact Dubai Pet Relocation, pet relocation help Dubai, pet transport contact, WhatsApp pet relocation Dubai',
          canonical: `${BASE_URL}/contact/`,
          ogType: 'website',
        }}
        schemas={[breadcrumbSchema, contactSchema]}
      />

      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/contact-hero.jpg"
        imageAlt="A friendly dog beside a welcoming Dubai office desk, ready to help with your pet relocation"
        eyebrow="Contact"
        title="Contact Dubai Pet Relocation — We're Here to Help"
        subtitle="A quick breed-ban question or a full relocation quote — fastest response is on WhatsApp, but we read every form and email too."
      />

      {/* ═══════════ CONTACT INFO CARDS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">WhatsApp / Phone</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">Fastest response during business hours</p>
              <a
                href={getWhatsAppUrl('Hi Dubai Pet Relocation, I have a question about pet relocation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F5BD5] font-semibold text-sm hover:underline"
              >
                {siteConfig.phone}
              </a>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Email</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">For detailed inquiries and document sharing</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#4F5BD5] font-semibold text-sm hover:underline"
              >
                {siteConfig.email}
              </a>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Location</h3>
              <p className="text-sm text-[#5A5A5A] mb-3">217 Zahra Townhouses, Town Square, Dubai 00000</p>
              <span className="text-[#4F5BD5] font-semibold text-sm">Dubai, United Arab Emirates</span>
            </Card>
          </div>
        </div>
      </section>

      {/* ═══════════ FORM + HOURS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-sm font-semibold text-[#4F5BD5] uppercase tracking-wider">Send a Message</span>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mt-3 mb-4">
                Contact Form
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-8">
                Fill out the form below and we will get back to you within 24 hours. For urgent questions, WhatsApp is fastest.
              </p>
              {submitted ? (
                <div className="bg-[#E9ECFB] rounded-[16px] p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#4F5BD5] flex items-center justify-center">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2A2A2A]">Almost done — finish in WhatsApp</p>
                      <p className="text-sm text-[#5A5A5A}">We opened WhatsApp with your enquiry — just tap send and we will reply fast. Or message us at {siteConfig.phone}.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-[#F0F2FB] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5]"
                      placeholder="e.g. Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-[#F0F2FB] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5]"
                      placeholder="sarah@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="petType" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Pet Type</label>
                    <select
                      id="petType"
                      required
                      value={formData.petType}
                      onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-[#F0F2FB] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5]"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#2A2A2A] mb-2">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-[#F0F2FB] text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5] resize-none"
                      placeholder="Tell us about your pet, your route, and any questions you have..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#4F5BD5] text-white rounded-2xl font-semibold text-sm hover:bg-[#141e36] transition-all shadow-sm hover:shadow-md w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-[12px] bg-[#E9ECFB] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#4F5BD5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2A2A2A]">Office Hours</h3>
                </div>
                <div className="space-y-3 text-sm text-[#5A5A5A]">
                  <div className="flex justify-between">
                    <span>Sunday – Thursday</span>
                    <span className="font-semibold text-[#2A2A2A]">9:00 AM – 6:00 PM GST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday – Saturday</span>
                    <span className="font-semibold text-[#2A2A2A]">Limited / By Appointment</span>
                  </div>
                </div>
                <p className="text-xs text-[#8A8A8A] mt-4">
                  WhatsApp messages are monitored outside hours, but responses may take longer on weekends.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-bold text-[#2A2A2A] mb-4">Why WhatsApp Is Fastest</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  Our team checks WhatsApp continuously during business hours. Most questions get answered in under 15 minutes. You can also send photos of documents for quick checks.
                </p>
                <WhatsAppCta
                  text="Chat on WhatsApp Now"
                  message="Hi Dubai Pet Relocation! I have a question about relocating my pet and would love to chat."
                  fullWidth
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ QUICK FAQ ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-3">
              Quick Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Common things people ask before reaching out. Still have questions? Just WhatsApp us.
            </p>
          </div>
          <FAQItem
            question="How quickly do you respond on WhatsApp?"
            answer={<p>During business hours (every day, 9 AM–8 PM GST), we typically respond within 15 minutes. Outside those hours, we check messages periodically and aim to reply within a few hours. Urgent travel-day issues are prioritized.</p>}
          />
          <FAQItem
            question="Do you offer a free consultation?"
            answer={<p>Yes. Every initial conversation is free. We will ask about your pet, route, and timeline, then give you a realistic overview of requirements, timeline, and cost range. There is no obligation to book.</p>}
          />
          <FAQItem
            question="Can I send you documents to check before booking?"
            answer={<p>Absolutely. Many clients send us vaccination records, microchip certificates, or previous health certificates for a quick compliance check before they commit to a full relocation. We are happy to do this at no charge.</p>}
          />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Let's Make Your Pet's Journey Clear
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            No matter where you are in the process — just thinking about it, or leaving next week — we can help. Message us now and get clear, honest guidance.
          </p>
          <WhatsAppCta
            text="Get Help on WhatsApp"
            message="Hi Dubai Pet Relocation! I need help with pet relocation and would love to chat."
          />
        </div>
      </section>
    </div>
  )
}
