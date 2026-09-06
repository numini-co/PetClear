import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  CheckCircle,
  Shield,
  Award,
  Globe,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Heart,
  Thermometer,
  Plane,
  FileText,
  Ruler,
  Calendar,
  Clock,
  Home,
  Phone,
  Pencil,
  Stethoscope,
  PawPrint,
  ArrowRight,
  Info,
  Moon,
  Coffee,
  Droplets,
  Ban,
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import Hero from '../components/Hero.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import WhatsAppBtn from '../components/WhatsAppBtn.tsx'
import OfficialSources from '../components/OfficialSources.tsx'

/* ─── helpers ─── */

const SectionHeading = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] tracking-tight ${className}`}>
    {children}
  </h2>
)

const SectionIntro = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed max-w-3xl">{children}</p>
)

/* ─── FAQ accordion ─── */
function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="faq-question w-full text-left">
        <span className="pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-[#4F5BD5]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#8A8A8A]" />}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

/* ─── timeline step ─── */
function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div className="absolute left-3.5 top-7 bottom-0 w-px bg-[#4F5BD5]/20" />
      <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">{title}</h3>
      <div className="text-[#5A5A5A] leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

export default function CatRelocationPage() {
  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        canonical={`${BASE_URL}/cat-relocation-to-dubai/`}
        title="Cat Relocation to Dubai | Complete Guide 2026"
        description="Cat relocation to Dubai: crate comfort, no-sedation guidance, airline rules and MOCCAE documents. WhatsApp +971504782999."
        keywords="cat relocation to Dubai, bring cat to Dubai, cat import Dubai, Dubai cat relocation, pet cat transport Dubai, moving cat to UAE"
        ogType="article"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can my cat fly in the cabin with me to Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All cats entering Dubai must travel as manifest cargo. The only exception is Etihad Airways, which allows small cats in the cabin on flights to Abu Dhabi (not Dubai). If you choose this option, ground transport from Abu Dhabi to Dubai can be arranged. For most cats, the cargo hold is actually calmer than the cabin — it's dark, quiet, and climate-controlled."
                }
              },
              {
                "@type": "Question",
                name: "Does my cat need to be quarantined in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No — if all documentation is complete and correct. There is no mandatory quarantine for cats entering Dubai with a valid MOCCAE import permit, ISO microchip, current rabies vaccination, and health certificate. However, if documents are missing, incorrect, or non-sequential, a cat may be subject to conditional quarantine at the owner's expense. This is why we triple-check every document before travel."
                }
              },
              {
                "@type": "Question",
                name: "How long before my move should I start the cat relocation process?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From low-risk countries (UK, EU, USA, Canada, Australia, New Zealand): start 6–8 weeks before your move. From high-risk countries that require a titer, the blood sample should be taken within 90 days before travel and read at least 0.5 IU/ml — that is not a wait after the draw. Message us as soon as you know your move date so we can say whether the calendar is realistic."
                }
              },
              {
                "@type": "Question",
                name: "Will my cat be safe in the cargo hold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Pet cargo holds are pressurised, climate-controlled, and kept at the same temperature as the passenger cabin. We only book with airlines that have dedicated animal transport programs and proven safety records. We also book morning flights to avoid heat, and avoid routes with long ground stops. Your cat's crate is secured in a designated animal compartment, separate from luggage."
                }
              },
              {
                "@type": "Question",
                name: "What if my cat is elderly or has a medical condition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle this on a case-by-case basis. Many older cats travel safely — age alone is not a disqualifier. If a cat has a medical condition (diabetes, heart condition, etc.), we coordinate with veterinary partners to assess fitness to fly and make special arrangements. In some cases, a vet's 'fit to fly' certificate may be required. We'll be honest if we think travel is not advisable for a cat's health. Their safety comes first, always."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Cat Relocation to Dubai", item: `${BASE_URL}/cat-relocation-to-dubai/` }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cat Relocation to Dubai: A Complete Guide for Cat Owners",
            description: "Cat relocation to Dubai: crate comfort, no-sedation guidance, airline rules and MOCCAE documents. WhatsApp +971504782999.",
            image: `${BASE_URL}/assets/cat-relocation-hero.jpg`,
            author: { "@type": "Organization", name: "Dubai Pet Relocation", url: BASE_URL },
            publisher: {
              "@type": "Organization",
              name: "Dubai Pet Relocation",
              logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png` }
            },
            datePublished: "2026-06-25",
            dateModified: "2026-06-25",
            mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/cat-relocation-to-dubai/` }
          }
        ]}
      />
      <Breadcrumb
        items={[
          
          { label: 'Cat Relocation to Dubai' }
        ]}
      />

      {/* ─── HERO ─── */}
      <Hero
        image="/images/hero-cat.jpg"
        imageAlt="A calm cat inside an IATA-approved travel crate, ready for a safe journey to Dubai."
        eyebrow="Cat Relocation"
        title="Cat Relocation to Dubai: Bringing Your Cat Home Safely"
        subtitle="From pickup to reunion, we handle every step — clear pricing, honest answers, and WhatsApp updates at every checkpoint."
        updated="Updated June 2026"
        whatsappMessage="Hi, I want to relocate my cat to Dubai. Can you help me understand the process and cost?"
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
      />

      {/* ─── WORRIES ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">What Every Cat Owner Worries About (And Why You Don't Have To)</SectionHeading>
          <SectionIntro>
            We understand the fears that keep cat owners up at night. Here is what we do about each one.
          </SectionIntro>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;My cat will be terrified the whole flight.&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Cats are sensitive creatures. They notice changes in routine, unfamiliar sounds, and new environments. The good news? Most cats handle air travel better than their owners expect. Cargo holds are climate-controlled, dark, and quiet — closer to a cosy cupboard than a loud cabin. We book morning flights to avoid heat and turbulence, and we only work with airlines that have proven cat-safe cargo protocols.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                Before travel, we send you a guide to help your cat get comfortable with their crate — because familiarity reduces fear more than any sedative.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;My cat won't eat or drink during the journey.&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                This is a common concern, and it's valid. Cats can be finicky about food and water in new situations. Here's what we do: We advise you to place a familiar-smelling item in the crate — a small blanket or toy from home. We ensure the crate has a spill-proof water container and a food tray attached to the door.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                Most cats do eat and drink during long journeys, especially if they feel secure. If your cat has a special diet or medical needs, we coordinate with our vet partners to make sure those needs are met — and we tell the airline in writing.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;What if my cat tries to escape from the crate?&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                IATA-approved cat crates are built for this. They have secure locking doors, reinforced ventilation openings, and no gaps large enough for a determined paw. We size the crate to your cat precisely — they should be able to stand, turn, and lie down, but not so large that they slide around.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                A well-fitted crate is the safest place your cat can be during a flight. We check every latch ourselves before check-in.
              </p>
            </div>
            {/* Card 4 — spans full width on mobile, 2 cols on larger */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 sm:col-span-2 lg:col-span-3">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;What if something goes wrong?&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                This is the big one. What if the flight is delayed? What if there's a paperwork issue? What if your cat needs a vet mid-journey? Here's our answer: We plan for the problems before they happen. We double-check every document three times. We monitor flight status in real time. If a delay occurs, we have boarding partners at every major hub. And we WhatsApp you immediately — never leaving you to wonder.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                In the rare event of a medical concern, our vet partners are on call at every stage. Your cat is never just &ldquo;in the system.&rdquo; We know exactly where they are, at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STEP BY STEP ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">How Cat Relocation to Dubai Works (Step-by-Step)</SectionHeading>
          <SectionIntro>
            Every cat's journey is different, but the process follows a clear timeline. Here's what happens when you work with Dubai Pet Relocation.
          </SectionIntro>
          <div className="mt-12 max-w-3xl">
            <Step number={1} title="Free WhatsApp Consultation (Day 0)">
              <p>You message us. We ask about your cat's breed, weight, age, current location, and planned move date. We check for any route-specific restrictions or seasonal issues (like summer heat embargoes). Within 15 minutes, you'll know if your timeline is realistic and what the next steps are. No forms. No pressure.</p>
            </Step>
            <Step number={2} title="Document Review & Veterinary Prep (Days 1–21)">
              <p>We send you a cat-specific checklist. Your cat will need:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>An ISO 11784/11785 microchip (implanted before any vaccinations)</li>
                <li>A rabies vaccination (at least 21 days old before travel)</li>
                <li>FVRCP vaccination (feline core vaccines)</li>
                <li>An international health certificate (issued within 10 days of travel)</li>
              </ul>
              <p>If your cat is already microchipped and vaccinated, great — we'll verify the dates. If not, we connect you with a vetted vet partner in your country who knows export requirements. Every certificate must show the same microchip number. We check this three times.</p>
            </Step>
            <Step number={3} title="MOCCAE Import Permit (Days 14–21)">
              <p>We apply for your cat's MOCCAE import permit online. This is a mandatory approval from the UAE Ministry of Climate Change and Environment. The permit costs AED 200 per pet and is valid for 90 days from issuance (a release fee of AED 250/cat is also payable on arrival). We handle the submission, track the status, and confirm approval — so you don't have to navigate the portal yourself.</p>
            </Step>
            <Step number={4} title="Flight Booking & Crate Fitting (Days 21–28)">
              <p>We book your cat's flight as manifest cargo — the only way cats can enter Dubai. We choose morning departures to avoid heat, and we confirm the airline's cat-specific policies in writing. We provide an IATA-approved travel crate sized to your cat, or we verify that yours meets standards. We label it correctly, attach feeding instructions, and include a familiar item from home if you provide one.</p>
            </Step>
            <Step number={5} title="Final Health Check & Departure (Days 28–30)">
              <p>Within 10 days of travel, our vet partner issues the international health certificate. We administer internal and external antiparasitic treatments within 14 days of arrival, as required by UAE law. We accompany your cat to cargo check-in, confirm they're loaded safely, and send you a photo before the flight departs.</p>
            </Step>
            <Step number={6} title="Arrival in Dubai & Customs Clearance (Day 30+)">
              <p>When your cat lands at DXB or DWC, we handle customs clearance immediately. Your cat is never left in a warehouse. We arrange prompt collection, a quick welfare check, and either airport handover or door-to-door delivery to your new home. We send you a photo the moment your cat is safely out of the crate.</p>
            </Step>
            <Step number={7} title="Post-Arrival Registration (Within 30 Days)">
              <p>We guide you through registering your cat with Dubai Municipality via the Aleef app. This is mandatory for all cats in Dubai. We also connect you with trusted local vets for a post-travel wellness check.</p>
            </Step>
          </div>
          <div className="mt-8">
            <WhatsAppBtn
              label="Ask about your cat's travel"
              message="Hi, I want to relocate my cat to Dubai. Can you help me understand the process and cost?"
            />
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">What Documents Does Your Cat Need to Enter Dubai?</SectionHeading>
          <SectionIntro>
            Bringing a cat to Dubai requires specific paperwork. The rules are the same for all cats, regardless of breed or origin. Here's exactly what you need.
          </SectionIntro>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">1</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">MOCCAE Import Permit</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">A mandatory approval from the UAE Ministry of Climate Change and Environment. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal. Valid: 90 days from issuance. We apply for this on your behalf.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">2</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">ISO Microchip (15-Digit)</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Your cat must have an ISO 11784/11785 compliant microchip. This must be implanted <em>before</em> the rabies vaccination, and the microchip number must appear on every certificate. This is the most common paperwork error — and it's easily avoided with a single checklist.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">3</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">Rabies Vaccination</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Administered at or after 12 weeks of age. The vaccination must be at least 21 days old before your cat travels, and within 12 months of arrival. Only inactivated or recombinant vaccines are accepted — not live attenuated vaccines.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">4</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">FVRCP (Core Feline Vaccines)</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Your cat needs up-to-date core vaccinations: Feline Panleukopenia (FPV), Feline Rhinotracheitis (FHV-1), and Feline Calicivirus (FCV). Feline Leukemia (FeLV) is also recommended by most veterinary authorities.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">5</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">International Health Certificate</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Issued by an official or government-accredited veterinarian in your country of origin. This must be issued within 10 days of arrival in Dubai. It must include antiparasitic treatment records and show the same microchip number as all other documents.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">6</div>
              <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">Antiparasitic Treatment</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Internal deworming (Praziquantel) and external treatment (Fipronil or equivalent) must be administered within 14 days of arrival. We coordinate this with our vet partner so the timing is exact.</p>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 mt-6">
            <div className="w-10 h-10 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold mb-4">7</div>
            <h3 className="text-base font-semibold text-[#2A2A2A] mb-2">Copy of Owner's Passport & UAE Visa</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">Required for the MOCCAE permit application and customs clearance. If you're not yet in Dubai, we can arrange for a representative to handle collection.</p>
          </div>

          <div className="mt-8 p-6 bg-[#EEF0FC] rounded-[20px]">
            <p className="text-sm text-[#5A5A5A] leading-relaxed mb-3">
              <strong className="text-[#2A2A2A]">Good news for UK, EU, USA, Canada, Australia, and New Zealand owners:</strong> Your country is classified as low-risk for rabies. This means <strong className="text-[#2A2A2A]">no rabies titer test (RNATT) is required</strong>, and the minimum timeline is just 4–6 weeks from start to finish. For high-risk countries that require a titer, the blood sample should be taken within 90 days before travel (≥0.5 IU/ml) — that is not a wait after the draw.
            </p>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              <strong className="text-[#2A2A2A]">Important:</strong> Cats must be at least 4 months old to enter Dubai. If your kitten is younger, you'll need to wait or arrange temporary care until they reach the minimum age.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BANNED BREEDS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Are Any Cat Breeds Banned in Dubai?</SectionHeading>
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#E9ECFB] border border-[#4F5BD5]/30 rounded-[20px] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#4F5BD5]">No domestic cat breeds are banned</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                Unlike dogs, there are no domestic cat breeds banned from import into the UAE. Your Maine Coon, Siamese, Persian, Bengal, or mixed-breed cat is welcome — provided the paperwork is complete.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                This is one of the reasons cat relocation is often simpler than dog relocation: no breed check anxiety, no restricted breed lists, and no community housing rules based on breed. As long as your documents are in order, your cat can enter.
              </p>
            </div>
            <div className="warning-box">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">One important restriction: wild cat hybrids</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                <strong className="text-[#2A2A2A]">Wild cat hybrids are not permitted unless they are 5th generation or further removed from the wild pedigree.</strong> This includes early-generation Savannah cats (F1–F4) and early-generation Bengal cats (F1–F4).
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                If you have a later-generation Savannah or Bengal (F5 or beyond), they are treated as domestic cats and are permitted with standard documentation.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                If you're unsure about your cat's generation status, we can help you verify. Just send us your cat's pedigree or registration documents via WhatsApp, and we'll confirm with MOCCAE before you book anything.
              </p>
              <WhatsAppBtn
                label="Not sure if your cat qualifies? WhatsApp us a photo and details"
                message="Hi, I'm not sure if my cat qualifies for import to Dubai. Can you help me check?"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRATE REQUIREMENTS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Choosing the Right Travel Crate for Your Cat</SectionHeading>
          <SectionIntro>
            Your cat's crate is their home for the journey. It needs to be safe, comfortable, and compliant. Here's exactly what that means.
          </SectionIntro>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">IATA Standards for Cat Crates</h3>
              <p className="text-sm text-[#5A5A5A] mb-4">All cats entering Dubai must travel in an IATA-compliant crate. This means:</p>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Rigid construction:</strong> Hard plastic or plywood with a solid roof and floor. No soft-sided carriers for cargo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Secure door:</strong> Metal door with a locking mechanism that cannot be opened from the inside. The door must close firmly without gaps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Ventilation:</strong> Openings on all four sides, covering at least 16% of the total surface area. For brachycephalic (flat-faced) cats like Persians or Exotic Shorthairs, the crate must be 10% larger than standard with increased ventilation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">No wheels:</strong> Wheels must be removed or locked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Leak-proof floor:</strong> A solid, absorbent base that won't let moisture escape.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">No top-opening lids:</strong> Cargo crates must open from the front only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Proper sizing:</strong> Your cat must be able to stand upright without touching the roof, turn around easily, and lie down in a natural position. We measure your cat precisely.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-sm">
              <img
                src="/images/cat-crate.jpg"
                alt="A calm cat inside an IATA-approved travel crate, ready for a safe journey to Dubai."
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">Making the Crate Feel Like Home</h3>
              <p className="text-sm text-[#5A5A5A] mb-4">A few simple additions make a big difference for cats:</p>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">A small, familiar blanket or item of your clothing:</strong> Your scent is comforting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Absorbent bedding:</strong> A thin layer that won't bunch up. We provide vet-approved absorbent pads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Spill-proof water container:</strong> Attached to the door, filled at check-in. We freeze water in the container for long flights so it melts gradually.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Food tray:</strong> Attached to the inside of the door with a small portion of dry food. We include written feeding instructions.</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#EEF0FC] rounded-[20px] p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What About a Litter Box?</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                For long-haul flights (8+ hours), some owners ask if a litter box should be included. The honest answer: most cats will not use a litter box during a flight, even if one is provided. They're more likely to hold it.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                For very long journeys with connections, we can arrange a comfort stop at a transit hub where your cat is taken out of the crate, offered food and water, and given a clean pad. We discuss this with you before booking.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <WhatsAppBtn
              label="Get a cat relocation quote — includes IATA crate fitting"
              message="Hi, I want to relocate my cat to Dubai. Can you help me understand the process and cost?"
            />
          </div>
        </div>
      </section>

      {/* ─── AIRLINE OPTIONS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Which Airlines Can Fly Your Cat to Dubai?</SectionHeading>
          <SectionIntro>
            Cats entering Dubai must travel as manifest cargo — they cannot fly in the cabin or as checked baggage on flights to Dubai. There is one exception for Abu Dhabi, which we'll explain below.
          </SectionIntro>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Emirates SkyCargo (Most Common Route to Dubai)</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">Emirates is the primary carrier for cats arriving at Dubai International (DXB). Here's what you need to know:</p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold">✕</span> <strong className="text-[#2A2A2A]">No cabin or checked baggage:</strong> All cats must travel via Emirates SkyCargo.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Advance booking:</strong> Minimum 72 hours notice required. We handle this.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Documentation:</strong> We submit your cat's health certificate, crate photos, and the Owner Acknowledgement Form on your behalf.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Transit care:</strong> If your cat is in transit in Dubai for more than 6 hours, they're cared for at the Emirates Pet Lounge — a climate-controlled facility with trained staff.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">!</span> <strong className="text-[#2A2A2A]">Cost:</strong> Typically ranges from USD 1,500–5,000 depending on your origin country, route, and your cat's weight/crate size.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">!</span> <strong className="text-[#2A2A2A]">Breed restrictions:</strong> Emirates follows UAE federal rules. No domestic cat breeds are banned, but brachycephalic cats may have seasonal restrictions (November–April only) due to heat sensitivity.</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Etihad Airways (Abu Dhabi Only — With In-Cabin Option)</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">Etihad is the most pet-friendly UAE airline, but with an important limitation: their in-cabin option is only for flights to Abu Dhabi (AUH), not Dubai.</p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">In-cabin (PETC):</strong> Small cats (pet + carrier ≤ 8 kg) can travel in the cabin on flights to Abu Dhabi. Carrier max size: 40 x 40 x 22 cm in Economy. Etihad publishes cabin pet fees that change; confirm at booking. A 2026 promo from USD 399 is expired; USD 1,500 is Estimated only until first-party current fee is confirmed.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Cargo:</strong> Larger cats or those flying to Abu Dhabi via cargo.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">!</span> <strong className="text-[#2A2A2A]">Important:</strong> If you fly into Abu Dhabi, you'll need to arrange ground transport to Dubai (about 90 minutes). We can coordinate this for you.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#EEF0FC] rounded-[20px] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">flydubai & Other Carriers</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              flydubai handles pets as cargo through their cargo partners. Policies vary by route. We evaluate all options and book the safest, most direct route for your cat — not just the cheapest.
            </p>
          </div>

          <div className="mt-8 bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">Cabin vs. Cargo: The Honest Truth for Cats</h3>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              We get asked this often: &ldquo;Can't my cat just fly in the cabin with me?&rdquo; For Dubai, the answer is no — unless you're flying to Abu Dhabi on Etihad. But here's the honest truth: <strong className="text-[#2A2A2A]">cargo is not worse for cats.</strong> In fact, for most cats, the dark, quiet, climate-controlled cargo hold is less stressful than a noisy cabin with strangers, rolling trolleys, and overhead lights. The key is the crate, the timing, and the handling. We control all three.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEDATION ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Should You Sedate Your Cat for Flying? (Honest Guidance)</SectionHeading>
          <SectionIntro>
            This is the question that keeps cat owners up at night. And we have a clear, honest answer.
          </SectionIntro>

          <div className="mt-8 bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[#C0392B] mb-4">
              Most airlines and most veterinarians do not recommend sedating cats for air travel.
            </p>
            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Here's why: Sedation affects a cat's ability to regulate their body temperature, balance, and breathing. At altitude, these effects are amplified. A sedated cat cannot adjust their position if they become uncomfortable, cannot respond to temperature changes, and may experience respiratory depression. The risk of adverse effects is real — and most airlines explicitly refuse to transport sedated animals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What We Recommend Instead</h3>
              <p className="text-sm text-[#5A5A5A] mb-4">A calm cat is a prepared cat. We help you reduce travel stress without medication:</p>
              <ul className="space-y-3 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2">
                  <Home className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Crate familiarity:</strong> Start crate training 2–3 weeks before travel. Feed your cat in the crate. Let them nap in it. Make it a safe space, not a signal that something scary is happening.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Feliway or calming pheromones:</strong> We recommend spraying the crate interior with a feline pheromone spray 30 minutes before departure. This is non-medicinal and widely used by vets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Moon className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Timing:</strong> We book morning flights. Cats are naturally more active at dawn and dusk; a morning departure aligns with their rhythm.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Plane className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Direct routing:</strong> We avoid unnecessary connections. The fewer transitions, the less stress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span><strong className="text-[#2A2A2A]">Hunger, not fasting:</strong> We do not recommend fasting cats before travel. A small meal 4–6 hours before departure is fine. Water should be available until check-in.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">When Medication Might Be Appropriate</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                There are rare cases — extreme anxiety, medical conditions — where a vet may prescribe a mild anti-anxiety medication. If this is necessary, we coordinate with our vet partner to choose the safest option, at the lowest effective dose, and we inform the airline in writing.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                We do not recommend this as a default. We recommend it only when a trusted vet says it's necessary.
              </p>
              <div className="p-4 bg-[#EEF0FC] rounded-2xl">
                <p className="text-sm font-semibold text-[#2A2A2A]">
                  The bottom line: Most cats travel calmly without sedation. Preparation beats medication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEASONAL CONSIDERATIONS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Summer Heat, Long-Haired Cats, and Seasonal Planning</SectionHeading>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Summer Heat Embargo (June–September)</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                From June through September, most airlines impose heat embargoes on pet cargo. This means pets cannot be transported if the ground temperature at any point along the route exceeds 29.5°C (85°F). For Dubai, this effectively means:
              </p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-2 mb-4">
                <li><strong className="text-[#2A2A2A]">June–August:</strong> Very limited cargo options. Some routes are suspended entirely.</li>
                <li><strong className="text-[#2A2A2A]">May and September:</strong> Restricted — some routes available, some not.</li>
                <li><strong className="text-[#2A2A2A]">October–April:</strong> Normal operations.</li>
              </ul>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-2">What this means for your cat:</p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                If your move falls during summer, you have options. We can arrange:
              </p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Early morning or late evening flights on cooler days (when available)</li>
                <li>Ground transport to a cooler origin hub for departure</li>
                <li>Boarding with our vet partner until the embargo lifts</li>
                <li>A pet travel nanny service (in-cabin escort on a passenger route, where permitted)</li>
              </ul>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                We will always tell you honestly if your timeline is realistic. We never book a flight we wouldn't put our own cat on.
              </p>
            </div>

            <div className="bg-[#EEF0FC] rounded-[20px] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Long-Haired and Flat-Faced Cats</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4">
                Persian cats, Himalayan cats, and other long-haired or brachycephalic breeds need extra care in warm weather. Their shorter nasal passages and thicker coats make them more sensitive to heat. We take this into account when choosing:
              </p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-2 mb-4">
                <li><strong className="text-[#2A2A2A]">Flight times</strong> (morning departures only)</li>
                <li><strong className="text-[#2A2A2A]">Crate ventilation</strong> (increased airflow for brachycephalic cats)</li>
                <li><strong className="text-[#2A2A2A]">Route selection</strong> (direct flights, minimal ground time)</li>
                <li><strong className="text-[#2A2A2A]">Seasonal timing</strong> (if possible, we recommend October–April for these breeds)</li>
              </ul>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                If your cat is a Persian, Exotic Shorthair, or similar breed, we'll discuss these considerations with you before booking anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COSTS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">How Much Does Cat Relocation to Dubai Cost?</SectionHeading>
          <SectionIntro>
            We believe in transparent pricing. Here's what you can expect, broken down by route and service level. Every quote we send is itemised — what you see is what you pay.
          </SectionIntro>

          <div className="mt-12 overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Estimated Total (AED)</th>
                  <th>What's Included</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">UK to Dubai</td>
                  <td>AED 8,500 – 12,000</td>
                  <td>Permit, vet prep, crate, Emirates SkyCargo, customs, door delivery</td>
                  <td>No titer test needed. Low-risk country. 4–6 week timeline.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">USA to Dubai</td>
                  <td>AED 10,000 – 15,000</td>
                  <td>Permit, vet prep, crate, cargo booking, customs, delivery</td>
                  <td>No titer test needed. Coast-to-coast routing varies.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">India to Dubai</td>
                  <td>AED 7,500 – 11,000</td>
                  <td>Permit, vet prep, crate, cargo, customs, delivery</td>
                  <td>No titer test needed. Short route = lower cargo cost.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Philippines to Dubai</td>
                  <td>AED 9,000 – 13,000</td>
                  <td>Permit, vet prep, crate, cargo, customs, delivery</td>
                  <td>No titer test needed. Popular route.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Australia to Dubai</td>
                  <td>AED 12,000 – 18,000</td>
                  <td>Permit, vet prep, crate, cargo, customs, delivery</td>
                  <td>No titer test needed. Longer distance = higher cargo cost.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">High-Risk Countries</td>
                  <td>AED 11,000 – 20,000</td>
                  <td>All of the above + rabies titer test + 90-day wait</td>
                  <td>Includes titer test (AED 500–1,200) and extended timeline.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What's Included in Every Dubai Pet Relocation Quote</h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> MOCCAE import permit application and fees</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Coordination with vetted veterinary partners for health checks and certificates</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA-compliant travel crate (or verification of your own)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Flight booking as manifest cargo with a trusted airline</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Customs clearance at DXB or DWC cargo terminal</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Door-to-door delivery or airport handover in Dubai</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> WhatsApp updates at every stage (permit approval, check-in, boarding, arrival, customs clearance)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Post-arrival guidance for Dubai Municipality registration (Aleef app)</li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What Costs Extra (And We Tell You Upfront)</h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Rabies titer test (if required from a high-risk country): AED 500–1,200</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Extended boarding if your timeline changes: AED 100–250 per day</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Ground transport from Abu Dhabi to Dubai (if you choose Etihad in-cabin): AED 400–600</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Additional pets: Each cat requires a separate permit and crate, though multi-pet discounts apply</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Travel insurance (optional but recommended): AED 300–800 depending on coverage level</li>
              </ul>
              <div className="mt-6 p-4 bg-[#EEF0FC] rounded-2xl">
                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  <strong className="text-[#2A2A2A]">Why costs vary:</strong> The biggest variables are your origin country (cargo distance), your cat's weight and crate size, and whether a titer test is required. A small cat from India costs less than a large Maine Coon from Australia. We give you an exact quote — not a guess — after our first WhatsApp conversation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <WhatsAppBtn
              label="Get your exact cat relocation quote on WhatsApp"
              message="Hi, I want to relocate my cat to Dubai. Can you help me understand the process and cost?"
            />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4 text-center">What Cat Owners Say About Dubai Pet Relocation</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#4F5BD5] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-[#2A2A2A] text-base leading-relaxed mb-6">
                &ldquo;I was absolutely terrified about moving Oliver. He's not a brave cat — he hides when the doorbell rings. Dubai Pet Relocation sent me a step-by-step guide two weeks before travel, and we practised with the crate every day. On the day, they sent me a photo of Oliver at check-in, then another when he was loaded. When he arrived in Dubai, he was calm. A bit grumpy, but calm. He was eating within two hours. The team answered my WhatsApp messages at 11 PM. I never felt alone.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5] font-bold text-sm">SM</div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A]">Sarah M.</p>
                  <p className="text-xs text-[#8A8A8A]">Relocated from London to Dubai</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#4F5BD5] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-[#2A2A2A] text-base leading-relaxed mb-6">
                &ldquo;Mochi is a rescue cat with a history of anxiety. I was sure she'd need sedation, but the Dubai Pet Relocation team talked me through why that wasn't the safest option. Instead, we used a pheromone spray and her favourite blanket. They walked me through crate training over WhatsApp — literally sent me a video of how to do it. When Mochi landed, they sent me a video of her being taken out of the crate. She was alert, curious, and completely fine. The cost was exactly what they quoted. No surprises.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5] font-bold text-sm">PK</div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A]">Priya K.</p>
                  <p className="text-xs text-[#8A8A8A]">Relocated from San Francisco to Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Frequently Asked Questions About Cat Relocation to Dubai</SectionHeading>
          <div className="mt-8 max-w-3xl">
            <FaqItem
              question="Can my cat fly in the cabin with me to Dubai?"
              answer={
                <>
                  <p>No. All cats entering Dubai must travel as manifest cargo. The only exception is Etihad Airways, which allows small cats in the cabin on flights to <strong>Abu Dhabi</strong> (not Dubai). If you choose this option, we can arrange ground transport from Abu Dhabi to Dubai. For most cats, the cargo hold is actually calmer than the cabin — it's dark, quiet, and climate-controlled.</p>
                </>
              }
            />
            <FaqItem
              question="Does my cat need to be quarantined in Dubai?"
              answer={
                <>
                  <p>No — if all your documentation is complete and correct. There is no mandatory quarantine for cats entering Dubai with a valid MOCCAE import permit, ISO microchip, current rabies vaccination, and health certificate. However, if documents are missing, incorrect, or non-sequential, your cat may be subject to conditional quarantine at your expense. This is why we triple-check every document before travel.</p>
                </>
              }
            />
            <FaqItem
              question="How long before my move should I start the cat relocation process?"
              answer={
                <>
                  <p>From low-risk countries (UK, EU, USA, Canada, Australia, New Zealand): start <strong>6–8 weeks</strong> before your move. From high-risk countries that require a titer, the blood sample should be taken within 90 days before travel and read at least 0.5 IU/ml — that is not a wait after the draw. Message us as soon as you know your move date so we can say whether the calendar is realistic.</p>
                </>
              }
            />
            <FaqItem
              question="Will my cat be safe in the cargo hold?"
              answer={
                <>
                  <p>Yes. Pet cargo holds are pressurised, climate-controlled, and kept at the same temperature as the passenger cabin. We only book with airlines that have dedicated animal transport programs and proven safety records. We also book morning flights to avoid heat, and avoid routes with long ground stops. Your cat's crate is secured in a designated animal compartment, separate from luggage.</p>
                </>
              }
            />
            <FaqItem
              question="What if my cat is elderly or has a medical condition?"
              answer={
                <>
                  <p>We handle this on a case-by-case basis. Many older cats travel safely — age alone is not a disqualifier. If your cat has a medical condition (diabetes, heart condition, etc.), we coordinate with our veterinary partners to assess fitness to fly and make special arrangements. In some cases, a vet's &ldquo;fit to fly&rdquo; certificate may be required. We'll be honest with you if we think travel is not advisable for your cat's health. Their safety comes first, always.</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#4F5BD5] rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Bring Your Cat to Dubai?</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Your cat has been with you through every chapter. This move is just the next one. We'll make sure they get there safely, calmly, and with someone watching every step.
            </p>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              <strong className="text-white">No forms to fill out. No hidden fees. Just a quick WhatsApp message to get started.</strong>
            </p>
            <WhatsAppBtn
              label="WhatsApp us about your cat"
              message="Hi, I want to relocate my cat to Dubai. Can you help me understand the process and cost?"
              className="px-8 py-4 text-base shadow-lg"
            />
            <p className="text-white/60 text-sm mt-4">
              Or send us a photo of your cat, their breed, and your origin country. We'll reply within 15 minutes with a realistic timeline and an estimated cost range.
            </p>
            <p className="text-white/80 text-sm mt-6 font-medium">
              Your cat's journey. Made clear.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TRUST FOOTER ─── */}
      <section className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#8A8A8A]">
            Dubai Pet Relocation — Dubai's transparent pet relocation coordination service. We guide you through MOCCAE import requirements. Vetted relocation partners. IATA compliant. Clear prices. Real humans. Safe pets.
          </p>
        </div>
      </section>
    </div>
  )
}
