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

/* ─── cost table ─── */
function CostTable({ size, items, total }: { size: string; items: [string, string][]; total: string }) {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">{size}</h3>
      <div className="overflow-x-auto">
        <table className="data-table">
          <tbody>
            {items.map(([label, value]) => (
              <tr key={label}>
                <td className="font-medium text-[#2A2A2A]">{label}</td>
                <td className="text-right text-[#5A5A5A]">{value}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-[#4F5BD5]">
              <td className="font-bold text-[#2A2A2A]">Total estimated range</td>
              <td className="text-right font-bold text-[#4F5BD5]">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function DogRelocationPage() {
  return (
    <div className="bg-[#F5F6FD]">
      <SEOHead
        canonical={`${BASE_URL}/dog-relocation-to-dubai/`}
        title="Dog Relocation to Dubai | Complete Guide 2026 | Dubai Pet Relocation"
        description="Expert guide to relocating your dog to Dubai. Breed checks, crate sizing, MOCCAE import permit, flight booking, banned breeds, and everything you need for a safe journey."
        keywords="dog relocation to Dubai, bring dog to Dubai, dog import Dubai, Dubai dog relocation, pet dog transport Dubai, banned dog breeds Dubai"
        ogType="article"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does it take to relocate a dog to Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From low-risk countries (UK, EU, USA, Canada, Australia, New Zealand), the minimum timeline is 4–6 weeks. This includes microchip implantation, rabies vaccination (21-day wait), MOCCAE import permit application, and international health certificate. From high-risk countries, the minimum timeline is 4 months due to the rabies titer test (RNATT) and mandatory 90-day waiting period from the date of blood sampling. We recommend starting the process 8–12 weeks before your planned move."
                }
              },
              {
                "@type": "Question",
                name: "Will my dog be quarantined in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No — if all documentation is complete and correct. The UAE does not have mandatory quarantine for dogs that meet all import requirements, including a valid MOCCAE import permit, ISO 11784/11785 microchip, current rabies vaccination, international health certificate, and antiparasitic treatment records. However, if documentation is incomplete, incorrect, or your dog is missing the required rabies titer test from a high-risk country, quarantine will be imposed at the owner's expense. Costs can exceed AED 8,500."
                }
              },
              {
                "@type": "Question",
                name: "Can I fly with my dog in the cabin to Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Regular dogs cannot travel in the cabin on flights to Dubai. All dogs must travel as manifest cargo (air freight). The only exception is Etihad Airways, which allows small dogs (dog plus carrier weighing 8 kg or less) in the cabin on flights to Abu Dhabi — not Dubai. If you choose this option, you will need to arrange ground transport from Abu Dhabi to Dubai after arrival."
                }
              },
              {
                "@type": "Question",
                name: "What if my dog is a banned breed but I have paperwork saying otherwise?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Breed identification at UAE customs is done by visual inspection, and the inspector's decision is final. 'Pit Bull mix' or 'unknown breed' labels from shelters are not reliable for UAE import purposes. At Dubai Pet Relocation, we assess your dog's appearance, paperwork, and pedigree (if available) before submitting any MOCCAE permit application. If there is any doubt about your dog's breed classification, we will give you an honest answer. Importing a banned breed illegally can result in fines from AED 10,000 to AED 700,000, possible jail time, and confiscation of the animal."
                }
              },
              {
                "@type": "Question",
                name: "Do you handle the dog's arrival at Dubai Airport, or do I need to go to the cargo terminal myself?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle both options. Most clients choose our door-to-door service: we collect your dog from the DXB or DWC cargo terminal, clear customs, and deliver to your home. If you prefer to collect your dog yourself, we prepare all customs paperwork and meet you at the terminal with everything ready. Either way, you receive WhatsApp updates and photos at every checkpoint — check-in, boarding, arrival, and customs clearance."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://dubai-pet-relocation.ae/" },
              { "@type": "ListItem", position: 2, name: "Dog Relocation to Dubai", item: "https://dubai-pet-relocation.ae/dog-relocation-to-dubai/" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Dog Relocation to Dubai | Complete Guide 2026 | Dubai Pet Relocation",
            description: "Expert guide to relocating your dog to Dubai. Breed checks, crate sizing, MOCCAE import permit, flight booking, banned breeds, and everything you need for a safe journey.",
            url: "https://dubai-pet-relocation.ae/dog-relocation-to-dubai/",
            author: { "@type": "Organization", name: "Dubai Pet Relocation" },
            publisher: { "@type": "Organization", name: "Dubai Pet Relocation" }
          }
        ]}
      />
      <Breadcrumb items={[{label: 'Dog Relocation to Dubai'}]} />

      {/* ─── HERO ─── */}
      <Hero
        image="/images/hero-dog.jpg"
        imageAlt="A Golden Retriever sitting comfortably in an IATA-certified travel crate, ready for a safe flight to Dubai."
        eyebrow="Dog Relocation"
        title="Dog Relocation to Dubai — Bring Your Dog Home Safely"
        subtitle="Breed checks, crate sizing, MOCCAE permits, and cargo flights — handled end to end, with WhatsApp updates at every step."
        updated="Updated June 2026"
        whatsappMessage="Hi, I want to relocate my dog to Dubai. Can you help me understand the process and cost?"
        secondary={{ label: 'How it works', to: '/how-it-works/' }}
      />

      {/* ─── WORRIES ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">What Every Dog Owner Worries About (And How We Handle It)</SectionHeading>
          <SectionIntro>
            Every dog owner we speak to has the same fears. They are valid. We name them, then we solve them.
          </SectionIntro>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <PawPrint className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;Will my dog be scared in the crate?&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Most dogs adjust well to an IATA-certified crate if they meet it before travel day. We send you a crate-training guide as soon as you book. We also use crates with ventilation on all four sides, so your dog can see light and smell airflow — not just darkness.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                Our partner vets check your dog's health and temperament before travel. If your dog has severe anxiety, we discuss options: calming aids (vet-approved only), direct routing to minimise transit time, or a pet nanny service for certain routes.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;Is my breed allowed in Dubai?&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                The UAE bans certain dog breeds at the federal level. Others are restricted, which means extra rules about where you can live and how you walk your dog. We run a breed check in your first WhatsApp conversation — before you pay anything. If your breed is restricted, we tell you exactly what that means for daily life in Dubai, not just for import.
              </p>
              <div className="mt-4">
                <WhatsAppBtn
                  label="Ask about your dog's breed"
                  message="Hi, I want to relocate my dog to Dubai and I'm not sure if my breed is allowed. Can you check for me?"
                  className="!px-4 !py-2.5 !text-xs"
                />
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 rounded-[14px] bg-[#E9ECFB] flex items-center justify-center mb-4">
                <Plane className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">&ldquo;What if something goes wrong during the flight?&rdquo;</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                Pets travel in the same climate-controlled, pressurised cargo hold as temperature-sensitive pharmaceuticals. The temperature is maintained between 18°C and 24°C. We book morning flights wherever possible to avoid ground heat during loading and unloading.
              </p>
              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-2">
                If a flight is delayed or cancelled, we know before the airline announces it. We rebook your dog's boarding, arrange extended care with our vet partner, and tell you immediately. You are never left wondering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STEP BY STEP ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">How Dog Relocation Works — Step by Step</SectionHeading>
          <SectionIntro>
            We do not believe in vague promises. Here is exactly what happens, and who does what.
          </SectionIntro>
          <div className="mt-12 max-w-3xl">
            <Step number={1} title="Breed check and route planning">
              <p>You send us your dog's breed, weight, and origin country on WhatsApp. Within 15 minutes, we confirm:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Is your breed banned or restricted in the UAE?</li>
                <li>Is your origin country low-risk or high-risk for rabies?</li>
                <li>Does your route have a direct flight, or will your dog transit through another airport?</li>
                <li>Is your planned travel date inside the summer heat embargo?</li>
              </ul>
              <p>If everything checks out, we send you an itemised quote. If there is a problem, we tell you straight away and explain your alternatives.</p>
            </Step>
            <Step number={2} title="Veterinary preparation and documents">
              <p>Our partner vet implants (or verifies) an ISO 11784/11785 microchip and administers a rabies vaccination. The microchip must be implanted <em>before</em> the rabies vaccine, or the vaccine is invalid for import.</p>
              <p>For dogs from high-risk rabies countries, we also coordinate the rabies titer test (RNATT). Blood is drawn at least 21 days after vaccination, sent to an accredited lab, and then you must wait 90 days from the date of sampling before your dog can enter the UAE.</p>
              <p>We track every deadline. We remind you when the next step is due. We check every document three times before submission.</p>
            </Step>
            <Step number={3} title="MOCCAE import permit and flight booking">
              <p>We apply for your dog's MOCCAE import permit online. The permit costs AED 200 per pet and is valid for 30 days from issuance (a release fee of AED 500/dog is also payable on arrival). We know which forms are current, which office to submit to, and the common reasons for rejection.</p>
              <p>Once the permit is approved, we book your dog's manifest cargo flight with the airline's cargo department — not the passenger reservation desk. We confirm pet-specific rules in writing: crate dimensions, breed restrictions, temperature limits, and transit care.</p>
            </Step>
            <Step number={4} title="Travel day and arrival in Dubai">
              <p>Within 10 days of travel, our vet partner issues your dog's international health certificate and administers internal and external antiparasitic treatment. We label the crate with correct IATA markings, attach a water bowl, and attach a small food bag to the top (required for flights over 12 hours).</p>
              <p>At Dubai arrival, we handle customs clearance at DXB or DWC cargo terminal. Your dog is cleared and delivered to your door — or you collect from the terminal, whichever you prefer. We send photos at check-in, at boarding, and at arrival.</p>
            </Step>
          </div>
          <div className="mt-8">
            <WhatsAppBtn
              label="Get a dog relocation quote"
              message="Hi, I want to relocate my dog to Dubai. Can you help me understand the process and cost?"
            />
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">What Your Dog Needs to Enter Dubai</SectionHeading>
          <SectionIntro>
            These are not optional. Missing one document can mean your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands). We do not say this to frighten you. We say it because we have seen what happens when owners use outdated checklists from the internet.
          </SectionIntro>
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-5">The five documents every dog needs</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">MOCCAE Import Permit</p>
                    <p className="text-sm text-[#5A5A5A]">Applied online via the MOCCAE portal. Valid 30 days from issuance. Cost: confirm current permit and arrival-release fees on the official MOCCAE portal.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">ISO Microchip Certificate</p>
                    <p className="text-sm text-[#5A5A5A]">15-digit ISO 11784/11785 compliant. Must be implanted before rabies vaccination.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Rabies Vaccination Certificate</p>
                    <p className="text-sm text-[#5A5A5A]">Administered at or after 12 weeks of age. Must be at least 21 days old at time of travel, and within 12 months.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">International Health Certificate</p>
                    <p className="text-sm text-[#5A5A5A]">Issued by an accredited government veterinarian within 10 days of arrival. Must include antiparasitic treatment records.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] text-sm">Antiparasitic Treatment Record</p>
                    <p className="text-sm text-[#5A5A5A]">Internal deworming and external flea/tick treatment within 14 days of arrival.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-4 p-3 bg-[#EEF0FC] rounded-lg text-sm text-[#5A5A5A]">
                <strong className="text-[#2A2A2A]">High-risk countries only:</strong> Rabies titer test (RNATT) with result ≥0.5 IU/ml, plus 90-day wait from blood sampling date.
              </div>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-5">Vaccination timeline for dogs</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0" />
                  <span><strong className="text-[#2A2A2A]">Canine Distemper (CDV)</strong> — Required</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0" />
                  <span><strong className="text-[#2A2A2A]">Canine Parvovirus (CPV)</strong> — Required</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0" />
                  <span><strong className="text-[#2A2A2A]">Infectious Canine Hepatitis (Adenovirus)</strong> — Required</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0" />
                  <span><strong className="text-[#2A2A2A]">Leptospirosis</strong> — Required</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                  <CheckCircle className="w-5 h-5 text-[#4F5BD5] shrink-0" />
                  <span><strong className="text-[#2A2A2A]">Rabies</strong> — Required (inactivated or recombinant only; live attenuated vaccines are not accepted by MOCCAE)</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link to="/guides/uae-pet-import-requirements/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F5BD5] hover:underline">
                  <FileText className="w-4 h-4" />
                  Read our full guide to UAE pet import requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANNED BREEDS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Banned and Restricted Dog Breeds in Dubai</SectionHeading>
          <SectionIntro>
            This is the section dog owners read first. We do not hide it at the bottom of the page.
          </SectionIntro>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Banned */}
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#C0392B]">Completely banned breeds</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">
                The following breeds and their mixes cannot be imported into the UAE under any circumstances (unless certified as a service animal by an ADI or IGDF accredited organisation):
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Pit Bull Types:</p>
                  <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-0.5">
                    <li>American Pit Bull Terrier</li>
                    <li>Staffordshire Bull Terrier</li>
                    <li>American Staffordshire Terrier</li>
                    <li>American Bully</li>
                    <li>Any Bull Terrier or Pit Bull cross</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Mastiff Types:</p>
                  <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-0.5">
                    <li>Brazilian Mastiff (Fila Brasileiro)</li>
                    <li>Argentinian Mastiff (Dogo Argentino)</li>
                    <li>Tibetan Mastiff</li>
                    <li>Neapolitan Mastiff</li>
                    <li>French Mastiff (Dogue de Bordeaux)</li>
                    <li>Boerboel</li>
                    <li>Bullmastiff</li>
                    <li>Cane Corso (Italian Mastiff)</li>
                    <li>Bully Kutta (Alangu / Indian Mastiff)</li>
                    <li>Perro de Presa Canario (Canary Mastiff)</li>
                    <li>Any Mastiff or hybrid</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A] mb-1">Other:</p>
                  <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-0.5">
                    <li>Japanese Tosa (Tosa Inu)</li>
                    <li>Presa Canario</li>
                    <li>Wolf-dog hybrids (any dog mixed with a wolf)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg text-sm text-[#5A5A5A]">
                <Info className="w-4 h-4 inline mr-1 text-[#4F5BD5]" />
                Some sources list Rottweiler, Doberman Pinscher, and Boxer as banned. Current Dubai Municipality guidance classifies these as <em>restricted</em>, not fully banned. We verify with MOCCAE before every import.
              </div>
            </div>

            {/* Restricted */}
            <div className="space-y-8">
              <div className="bg-white border border-[#4F5BD5]/30 rounded-[20px] p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Shield className="w-6 h-6 text-[#4F5BD5]" />
                  <h3 className="text-lg font-semibold text-[#2A2A2A]">Restricted breeds — what &ldquo;restricted&rdquo; actually means</h3>
                </div>
                <p className="text-sm text-[#5A5A5A] mb-4">In Dubai, the following breeds face additional rules even if they are permitted to enter:</p>
                <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-1 mb-4">
                  <li>Bull Terrier (including Miniature)</li>
                  <li>Husky</li>
                  <li>English Bulldog / Old English Bulldog</li>
                  <li>Perro de Presa Mallorquin</li>
                  <li>Shar Pei</li>
                  <li>Rottweiler (in some community contexts)</li>
                  <li>Doberman Pinscher (in some community contexts)</li>
                </ul>
                <p className="text-sm font-semibold text-[#2A2A2A] mb-2">If you own one of these breeds, you must:</p>
                <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-1">
                  <li>Register with the Dubai Municipality Veterinary Services Division</li>
                  <li>Keep your dog leashed and muzzled in public</li>
                  <li>Not live in an apartment (villa or townhouse only in most communities)</li>
                  <li>Display the municipality ID tag on your dog's collar at all times</li>
                </ul>
              </div>

              <div className="warning-box">
                <h3 className="text-lg font-semibold text-[#2A2A2A] mb-3">What to do if your breed is on the list</h3>
                <p className="text-sm text-[#5A5A5A] mb-2"><strong className="text-[#2A2A2A]">Service animal exception:</strong> If your dog is a certified service animal (not emotional support) trained by an ADI or IGDF accredited organisation, you may apply for an exemption. You need full training records and medical justification.</p>
                <p className="text-sm text-[#5A5A5A] mb-2"><strong className="text-[#2A2A2A]">Reconsider the move:</strong> We know this is hard to hear. But importing a banned breed illegally can result in fines from AED 10,000 to AED 700,000, jail time, and confiscation of your dog. We would rather tell you the truth now than hide it.</p>
                <p className="text-sm text-[#5A5A5A] mb-4"><strong className="text-[#2A2A2A]">Contact us anyway:</strong> Breed identification is not always straightforward. A &ldquo;Pit Bull mix&rdquo; label from a shelter may not match the UAE's legal definition. Send us photos and paperwork. We will give you an honest answer.</p>
                <WhatsAppBtn
                  label="Ask about your dog's breed"
                  message="Hi, I want to relocate my dog to Dubai and I'm not sure if my breed is allowed. Can you check for me?"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRATES ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">IATA Travel Crates for Dogs</SectionHeading>
          <SectionIntro>
            Your dog's crate is their home for the flight. It must be the right size, the right material, and the right ventilation. A non-compliant crate will be refused at cargo check-in — and you will miss your flight.
          </SectionIntro>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">How to measure your dog for the right crate</h3>
              <p className="text-sm text-[#5A5A5A] mb-4">Use these three measurements:</p>
              <ol className="space-y-3 mb-6">
                <li className="flex gap-3 text-sm text-[#5A5A5A]">
                  <span className="font-bold text-[#4F5BD5]">1.</span>
                  <span><strong className="text-[#2A2A2A]">Length (A):</strong> From tip of nose to base of tail, while standing</span>
                </li>
                <li className="flex gap-3 text-sm text-[#5A5A5A]">
                  <span className="font-bold text-[#4F5BD5]">2.</span>
                  <span><strong className="text-[#2A2A2A]">Height (B):</strong> From ground to top of head or ears (whichever is higher), while standing</span>
                </li>
                <li className="flex gap-3 text-sm text-[#5A5A5A]">
                  <span className="font-bold text-[#4F5BD5]">3.</span>
                  <span><strong className="text-[#2A2A2A]">Width (C):</strong> At the widest point of the body</span>
                </li>
              </ol>
              <div className="p-4 bg-[#EEF0FC] rounded-2xl">
                <p className="text-sm font-semibold text-[#2A2A2A] mb-2">Crate minimum internal dimensions:</p>
                <ul className="text-sm text-[#5A5A5A] space-y-1">
                  <li>• Length = A + ½B (your dog must be able to lie down with legs extended)</li>
                  <li>• Height = B + 5 cm (your dog must be able to stand without ears touching the roof)</li>
                  <li>• Width = C × 2 (your dog must be able to turn around comfortably)</li>
                </ul>
              </div>
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-sm">
              <img
                src="/images/dog-crate.jpg"
                alt="Measuring a dog for an IATA-certified travel crate — the correct crate size is essential for safe air travel to Dubai."
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">Crate sizes by dog weight and breed</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Dog Size</th>
                  <th>Weight Range</th>
                  <th>Typical Crate Size</th>
                  <th>Example Breeds</th>
                  <th>Est. Cost (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Small</td>
                  <td>Under 10 kg</td>
                  <td>48 × 32 × 32 cm (Series 200)</td>
                  <td>Dachshund, French Bulldog, Shih Tzu</td>
                  <td>500–700</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Medium</td>
                  <td>10–25 kg</td>
                  <td>68 × 53 × 51 cm (Series 300)</td>
                  <td>Beagle, Border Collie, Cocker Spaniel</td>
                  <td>700–1,000</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Large</td>
                  <td>25–40 kg</td>
                  <td>81 × 61 × 61 cm (Series 400)</td>
                  <td>Labrador, Golden Retriever, German Shepherd</td>
                  <td>1,000–1,500</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Extra-Large</td>
                  <td>Over 40 kg</td>
                  <td>102 × 70 × 76 cm (Series 500/700)</td>
                  <td>Great Dane, Mastiff, Rottweiler</td>
                  <td>1,500–2,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 warning-box">
            <p className="text-sm text-[#5A5A5A]">
              <strong className="text-[#2A2A2A]">Important:</strong> The crate must be rigid plastic or wood with a solid metal door. Wire crates are not accepted. Ventilation must be present on all four sides (for international flights). Food and water bowls must be attached to the inside of the door, accessible from outside without opening the door. The crate must have &ldquo;Live Animal&rdquo; and &ldquo;This Way Up&rdquo; labels on all sides.
            </p>
          </div>
          <p className="mt-4 text-sm text-[#5A5A5A]">
            We provide IATA-certified crates sized to your dog. We do not sell crates separately — they are included in our service coordination so we know they are correct.
          </p>
        </div>
      </section>

      {/* ─── AIRLINES ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Airline Options for Flying Dogs to Dubai</SectionHeading>
          <SectionIntro>
            All dogs entering the UAE must travel as manifest cargo. They cannot travel as checked baggage or in the cabin on flights <em>to</em> Dubai, with one exception.
          </SectionIntro>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Emirates SkyCargo — the standard for DXB arrivals</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">Emirates SkyCargo is the most common choice for dogs arriving at Dubai International Airport (DXB).</p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold">✕</span> <strong className="text-[#2A2A2A]">In-cabin:</strong> No regular dogs allowed. Only trained service dogs.</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold">✕</span> <strong className="text-[#2A2A2A]">Checked baggage:</strong> Not accepted for flights to Dubai.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Cargo:</strong> Mandatory. We book directly with the Emirates SkyCargo team, not the passenger reservation desk.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Booking notice:</strong> Minimum 72 hours advance.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Requirements:</strong> Photos of your dog in the crate, health certificates, and an Owner Acknowledgement Form.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Transit care:</strong> Dogs in transit for more than 6 hours at DXB are cared for at the Emirates Pet Lounge.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">!</span> <strong className="text-[#2A2A2A]">Breed restrictions:</strong> Emirates is stricter than UAE law. Snub-nose breeds are restricted to November–April only.</li>
              </ul>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">Etihad Airways — in-cabin option to Abu Dhabi</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">Etihad is the only UAE airline that allows small dogs in the cabin — but only on flights to or from Abu Dhabi (AUH), not Dubai.</p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">In-cabin (PETC):</strong> Dog + carrier must weigh ≤8 kg. Carrier max: 40 × 40 × 22 cm (Economy). Etihad cabin fee from USD 399 in Economy (source: Etihad). Confirm the live amount at booking.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Booking:</strong> Must be done via Etihad Contact Centre. Submit form 7 days before, documents 72 hours before.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">!</span> <strong className="text-[#2A2A2A]">Abu Dhabi entry:</strong> Requires a Bill of Entry from MICCO Logistics (AED 365) at least 24 hours before departure.</li>
                <li className="flex items-start gap-2"><span className="text-[#4F5BD5] font-bold">✓</span> <strong className="text-[#2A2A2A]">Cargo:</strong> Available for larger dogs or routes where cabin is not permitted.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">Which airline for which dog size?</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Dog Size</th>
                  <th>Best Option</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Small (≤8 kg)</td>
                  <td>Etihad in-cabin to AUH</td>
                  <td>Only if your final destination is Abu Dhabi or you can drive to Dubai</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Small–Medium (any weight)</td>
                  <td>Emirates SkyCargo to DXB</td>
                  <td>Most common; direct flights from UK, EU, US, India, Australia</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Large / XL</td>
                  <td>Emirates SkyCargo to DXB</td>
                  <td>Crate must be 10% larger than standard for restricted breeds</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#2A2A2A]">Snub-nose (any size)</td>
                  <td>Emirates SkyCargo (Nov–Apr only)</td>
                  <td>Summer embargo applies to all brachycephalic breeds</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-[#5A5A5A]">
            We do not book flights for you and leave you to figure out the rest. We coordinate the cargo booking, confirm the rules in writing, and handle any changes if the airline updates its policy.
          </p>
          <div className="mt-6">
            <WhatsAppBtn
              label="Get a dog relocation quote"
              message="Hi, I want to relocate my dog to Dubai. Can you help me understand the process and cost?"
            />
          </div>
        </div>
      </section>

      {/* ─── SUMMER HEAT / BRACHYCEPHALIC ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Summer Heat Embargoes and Brachycephalic Dogs</SectionHeading>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#2A2A2A]">When dogs cannot fly (June–September)</h3>
              </div>
              <p className="text-sm text-[#5A5A5A] mb-4">
                Most airlines suspend or restrict live animal cargo when ground temperatures exceed 29.5°C (85°F). In Dubai, this means:
              </p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-2 mb-4">
                <li><strong className="text-[#2A2A2A]">Standard embargo:</strong> May to September (varies by airline and route)</li>
                <li><strong className="text-[#2A2A2A]">Peak restriction:</strong> June–August — most airlines will not accept dogs at all</li>
                <li><strong className="text-[#2A2A2A]">Morning flights:</strong> Even outside embargo, we book morning departures and arrivals to avoid midday heat</li>
              </ul>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-2">If your move falls during summer, your options are:</p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-1">
                <li>Delay the dog's travel until October (most common)</li>
                <li>Ground transport to a cooler departure city, then fly</li>
                <li>Private pet charter (expensive, but available)</li>
                <li>Pet nanny escort service (limited routes)</li>
              </ul>
              <p className="text-sm text-[#5A5A5A] mt-4">We tell you this in your first conversation. We do not take bookings we cannot fulfil.</p>
            </div>

            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[20px] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#4F5BD5]" />
                <h3 className="text-lg font-semibold text-[#C0392B]">Special warning for snub-nose breeds</h3>
              </div>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-3">
                Brachycephalic (snub-nose) dogs are at higher risk during air travel. Their shortened airways make breathing harder in heat, stress, and low humidity.
              </p>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-2">Breeds in this category:</p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-0.5 mb-4">
                <li>English Bulldog, French Bulldog, American Bulldog</li>
                <li>Pug, Pekingese, Shih Tzu, Lhasa Apso</li>
                <li>Boston Terrier, Boxer (some airlines)</li>
                <li>Chow Chow, Shar Pei</li>
                <li>King Charles Spaniel (some airlines)</li>
                <li>Japanese Chin, Brussels Griffon</li>
              </ul>
              <p className="text-sm font-semibold text-[#2A2A2A] mb-2">What this means for your dog:</p>
              <ul className="list-disc pl-5 text-sm text-[#5A5A5A] space-y-1 mb-4">
                <li>Emirates restricts these breeds to <strong className="text-[#2A2A2A]">November–April only</strong></li>
                <li>Some airlines require a larger crate (10% bigger than standard)</li>
                <li>A veterinary fitness certificate may be required in addition to standard documents</li>
                <li>We strongly recommend direct flights with no transit for brachycephalic dogs</li>
              </ul>
              <div className="warning-box !border-l-[#C0392B] !bg-[#FEF2F2]">
                <p className="text-sm font-semibold text-[#C0392B]">
                  ⚠️ Dubai Pet Relocation Warning: We will not book a brachycephalic dog during summer months. The risk is too high, and no airline will accept them. If your move is urgent, we will discuss ground transport or alternative routing. Your dog's safety comes before our revenue.
                </p>
              </div>
              <div className="mt-4">
                <WhatsAppBtn
                  label="WhatsApp us about your dog"
                  message="Hi, I want to relocate my dog to Dubai. Can you help me understand the process and cost?"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COSTS ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">What It Costs to Relocate a Dog to Dubai</SectionHeading>
          <SectionIntro>
            Most relocation companies hide their prices. We do not. Here is what you can expect to pay, broken down by dog size. These are ranges — your exact quote depends on your origin country, route, and service level.
          </SectionIntro>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <CostTable
              size="Small dogs (under 10 kg)"
              items={[
                ['MOCCAE import permit', '~200'],
                ['Veterinary (microchip, vaccines, health cert)', '800–1,500'],
                ['IATA crate (Series 200)', '500–700'],
                ['Cargo shipping (origin → Dubai)', '3,000–5,000'],
                ['Dubai Pet Relocation coordination fee', '1,500–3,500'],
              ]}
              total="6,000–11,000"
            />
            <CostTable
              size="Medium dogs (10–25 kg)"
              items={[
                ['MOCCAE import permit', '~200'],
                ['Veterinary (microchip, vaccines, health cert)', '800–1,500'],
                ['IATA crate (Series 300)', '700–1,000'],
                ['Cargo shipping (origin → Dubai)', '4,000–7,000'],
                ['Dubai Pet Relocation coordination fee', '1,500–3,500'],
              ]}
              total="7,200–13,200"
            />
            <CostTable
              size="Large dogs (25–40 kg)"
              items={[
                ['MOCCAE import permit', '~200'],
                ['Veterinary (microchip, vaccines, health cert)', '800–1,500'],
                ['IATA crate (Series 400)', '1,000–1,500'],
                ['Cargo shipping (origin → Dubai)', '5,000–9,000'],
                ['Dubai Pet Relocation coordination fee', '2,000–4,000'],
              ]}
              total="9,000–16,200"
            />
            <CostTable
              size="Extra-large dogs (over 40 kg)"
              items={[
                ['MOCCAE import permit', '~200'],
                ['Veterinary (microchip, vaccines, health cert)', '800–1,500'],
                ['IATA crate (Series 500/700)', '1,500–2,000'],
                ['Cargo shipping (origin → Dubai)', '7,000–12,000'],
                ['Dubai Pet Relocation coordination fee', '2,500–5,000'],
              ]}
              total="12,000–21,700"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#EEF0FC] rounded-[20px] p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What is included in the Dubai Pet Relocation coordination fee</h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Breed and route check</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> MOCCAE import permit application</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Veterinary partner coordination</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> IATA crate supply and sizing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Cargo flight booking with the airline</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Pre-travel document audit (we check every document three times)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Customs clearance at Dubai arrival</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Door-to-door transport or terminal pickup</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> WhatsApp updates at every stage</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" /> Rebooking at no extra coordination fee if the airline cancels or delays</li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">What is NOT included</h3>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Rabies titer test (if required from high-risk countries): AED 500–1,200</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Quarantine costs (only if your documentation is incomplete): AED 8,500+</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Dubai Municipality registration after arrival: ~AED 10–60</li>
                <li className="flex items-start gap-2"><span className="text-[#C0392B] font-bold shrink-0">–</span> Travel insurance (optional but recommended): AED 300–800</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <WhatsAppBtn
              label="Get a dog relocation quote"
              message="Hi, I read your dog relocation cost guide. I'd like an itemised quote for my dog."
            />
            <Link to="/guides/pet-relocation-cost-dubai/" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#4F5BD5] text-[#4F5BD5] rounded-2xl font-semibold text-sm hover:bg-[#4F5BD5]/5 transition-colors">
              <FileText className="w-4 h-4" />
              Read our full guide to pet relocation costs in Dubai
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4 text-center">What Dog Owners Say About Dubai Pet Relocation</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-[20px] shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#4F5BD5] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-[#2A2A2A] text-base leading-relaxed mb-6">
                &ldquo;I was terrified about putting Max on a plane. He's not just a dog — he's been with me through two job changes and a divorce. Dubai Pet Relocation sent me photos of him at every step: at the vet, in the crate, at check-in, on the tarmac, and the moment he came through customs. The quote was itemised. I knew exactly what I was paying for. When he arrived, he was calm, hydrated, and happy. I cannot recommend them enough.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5] font-bold text-sm">SJ</div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A]">Sarah J.</p>
                  <p className="text-xs text-[#8A8A8A]">Relocated from London to Dubai, March 2026</p>
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
                &ldquo;Luna is a French Bulldog, so I knew summer travel was impossible. Dubai Pet Relocation told me this in the first WhatsApp message — no sugar-coating. We planned for a November flight. They arranged a crate 10% larger than standard for her breed, booked a direct flight with no transit, and sent me a video of her boarding. When she arrived at DXB, they had already cleared customs. She was in my arms 45 minutes after landing.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9ECFB] flex items-center justify-center text-[#4F5BD5] font-bold text-sm">DR</div>
                <div>
                  <p className="text-sm font-semibold text-[#2A2A2A]">David R.</p>
                  <p className="text-xs text-[#8A8A8A]">Relocated from Paris to Dubai, November 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading className="mb-4">Frequently Asked Questions About Dog Relocation to Dubai</SectionHeading>
          <div className="mt-8 max-w-3xl">
            <FaqItem
              question="How long does it take to relocate a dog to Dubai?"
              answer={
                <>
                  <p>From low-risk countries (UK, EU, USA, Canada, Australia, New Zealand), the minimum timeline is <strong>4–6 weeks</strong>. This includes microchip, rabies vaccination (21-day wait), MOCCAE permit application, and health certificate.</p>
                  <p className="mt-2">From high-risk countries, the minimum timeline is <strong>4 months</strong> due to the rabies titer test and 90-day waiting period. We recommend starting 8–12 weeks before your planned move.</p>
                </>
              }
            />
            <FaqItem
              question="Will my dog be quarantined in Dubai?"
              answer={
                <>
                  <p><strong>No — if all documentation is complete and correct.</strong> The UAE does not have routine pet quarantine for compliant dogs. However, if your documents are incomplete, incorrect, or your dog is missing the titer test from a high-risk country, the real risk is that your pet is refused entry, confiscated, or re-exported — at your expense (boarding/re-flight costs can run into the thousands). This is why we check every document three times.</p>
                </>
              }
            />
            <FaqItem
              question="Can I fly with my dog in the cabin to Dubai?"
              answer={
                <>
                  <p><strong>No.</strong> Regular dogs cannot travel in the cabin on flights <em>to</em> Dubai. All dogs must travel as manifest cargo. The only exception is Etihad Airways, which allows small dogs (≤8 kg) in the cabin on flights to <strong>Abu Dhabi</strong> (not Dubai). If you choose this option, you will need to drive from Abu Dhabi to Dubai after arrival.</p>
                </>
              }
            />
            <FaqItem
              question="What if my dog is a banned breed but I have paperwork saying otherwise?"
              answer={
                <>
                  <p>Breed identification at UAE customs is done by visual inspection. If your dog looks like a banned breed, the inspector's decision is final. &ldquo;Pit Bull mix&rdquo; or &ldquo;unknown breed&rdquo; labels from shelters are not reliable for UAE import. We assess your dog's appearance, paperwork, and pedigree (if available) before we submit any permit application. If there is any doubt, we will tell you honestly.</p>
                </>
              }
            />
            <FaqItem
              question="Do you handle the dog's arrival at Dubai Airport, or do I need to go to the cargo terminal myself?"
              answer={
                <>
                  <p>We handle both options. Most clients choose our <strong>door-to-door service</strong>: we collect your dog from the cargo terminal, clear customs, and deliver to your home. If you prefer to collect your dog yourself, we prepare all the customs paperwork and meet you at the terminal with everything ready. Either way, you get WhatsApp updates and photos at every checkpoint.</p>
                </>
              }
            />
          </div>
          <div className="mt-8">
            <WhatsAppBtn
              label="Still have questions? WhatsApp us"
              message="Hi, I have a few questions about relocating my dog to Dubai. Can you help?"
            />
          </div>
        </div>
      </section>

      <OfficialSources />

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-[#4F5BD5] rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Bring Your Dog to Dubai?</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Your dog has been there for you. Now it's your turn to be there for them — even across continents.
            </p>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              At Dubai Pet Relocation, we make dog relocation clear, calm, and certain. We do not overpromise. We do not hide fees. We do not leave you guessing.
            </p>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-8">
              Send us a WhatsApp message with your dog's breed, weight, and origin country. We will check your breed against UAE regulations, confirm your route, and send you an itemised quote — usually within 15 minutes.
            </p>
            <a
              href={getWhatsAppUrl('Hi, I want to relocate my dog to Dubai. Can you help me understand the process and cost?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-base hover:bg-[#1ebe57] transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Get a dog relocation quote
            </a>
            <p className="text-white/60 text-sm mt-4">
              Or if you are not ready for a quote yet, just send us a photo of your dog. We will tell you what they need.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TRUST FOOTER ─── */}
      <section className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#8A8A8A]">
            Dubai Pet Relocation — Your dog's journey, made clear. Vetted relocation partners · MOCCAE import guidance · IATA-compliant · WhatsApp support
          </p>
        </div>
      </section>
    </div>
  )
}
