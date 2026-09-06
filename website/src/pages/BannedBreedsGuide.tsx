import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Ban,
  PawPrint,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Scale,
  Clock,
  Heart,
  ThermometerSun,
  HelpCircle,
  MessageCircle,
  Dog,
  ExternalLink,
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
export default function BannedBreedsGuide() {
  const title = 'Banned Dog Breeds UAE | Dubai Restricted List 2026'
  const description =
    'Banned dog breeds UAE: restricted and prohibited types for Dubai import, plus how to verify before you book.'
  const canonical = `${BASE_URL}/guides/banned-dog-breeds-dubai/`
  const ogImage = `${BASE_URL}/assets/og-banned-breeds.jpg`

  const faqData = [
    {
      question: 'Can I bring a Staffordshire Bull Terrier mix to Dubai?',
      answer: 'Staffordshire Bull Terrier mixes are assessed on a case-by-case basis. Dubai Municipality and UAE customs reserve the right to ban any dog that visually resembles a banned breed. If your Staffy mix has physical characteristics similar to a Pit Bull type, there is a significant risk of refusal at entry. Dubai Pet Relocation strongly recommends a pre-travel breed assessment with photos and documentation to reduce this risk.',
    },
    {
      question: 'What happens if my dog looks like a banned breed but is not?',
      answer: 'Breed identification at UAE customs is primarily based on visual inspection. Even if your dog is not genetically a banned breed, customs officers may refuse entry if the dog resembles a banned type. This decision is final and non-negotiable at the port of entry. Dubai Pet Relocation advises submitting clear photos, pedigree papers, and a veterinary breed confirmation letter before travel to support your case.',
    },
    {
      question: 'Are Rottweilers and Dobermans allowed in Dubai?',
      answer: 'Yes, Rottweilers and Dobermans are allowed but classified as restricted breeds. They must be muzzled in public at all times, kept on a short leash, and may be subject to additional community or building restrictions. Some residential communities and landlords explicitly prohibit these breeds. Always check your building\'s pet policy before relocating.',
    },
    {
      question: 'Can I bring a service dog to Dubai if it is a banned breed?',
      answer: 'Service dogs are generally exempt from breed bans, but only if they are accredited by internationally recognized organizations such as ADI (Assistance Dogs International) or IGDF (International Guide Dog Federation). You must carry the accreditation certificate, service dog ID, and documentation confirming the dog is trained for a specific disability-related task. Emotional support animals do not qualify for this exemption.',
    },
    {
      question: 'What are the fines for importing a banned breed into Dubai?',
      answer: 'Importing a banned breed into the UAE can result in severe penalties under UAE Federal Law No. 22 of 2016 and Dubai Municipality regulations. Fines range from AED 10,000 to AED 700,000 depending on the severity, and may include jail time, confiscation of the animal, and deportation of the owner. The pet will be refused entry and may be held at the owner\'s expense or euthanized in extreme cases.',
    },
    {
      question: 'Are brachycephalic (flat-faced) dogs banned from flying to Dubai?',
      answer: 'Brachycephalic breeds are not banned from entering Dubai, but many airlines ban or severely restrict them during hot months due to respiratory risks. During the summer heat embargo (May 1 – September 30), most airlines refuse to transport brachycephalic dogs. Some airlines, such as Emirates SkyCargo and Etihad Cargo, have year-round restrictions or require veterinary fitness certificates. Always check with your specific airline before booking.',
    },
    {
      question: 'What should I do if I have a mixed breed and am unsure about the rules?',
      answer: 'Contact Dubai Pet Relocation for a free breed assessment before starting your relocation process. We review photos, veterinary records, and any pedigree documentation to evaluate your dog\'s risk profile. If there is uncertainty, we may arrange a veterinary breed confirmation letter or suggest alternative documentation strategies to present to UAE authorities.',
    },
    {
      question: 'Do restricted breeds need special insurance in Dubai?',
      answer: 'Yes, many Dubai residential communities and landlords require liability insurance for restricted breeds. Some buildings mandate proof of insurance covering third-party injury or property damage caused by the dog. Dubai Pet Relocation can advise on pet insurance providers in the UAE that cover restricted breeds and help you prepare the documentation needed for your building\'s approval.',
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
      { '@type': 'ListItem', position: 2, name: 'Banned and Restricted Dog Breeds in Dubai', item: canonical },
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
    keywords: 'banned dog breeds Dubai, restricted dog breeds UAE, Pit Bull ban Dubai, Dubai Municipality dog rules, UAE pet import banned breeds, dog breed restrictions Dubai, prohibited dogs UAE, Dubai dog muzzle law, brachycephalic dog travel ban, service dog exemption Dubai',
  }

  return (
    <>
      <SEOHead meta={meta} schemas={schemas} />
      <Breadcrumb items={[{ label: 'Guides', path: '/guides/' }, { label: 'Banned & Restricted Dog Breeds' }]} />

      {/* Hero */}
      <Hero
        image="/images/guide-banned-breeds.jpg"
        imageAlt="A calm leashed dog with its owner in a Dubai park, representing responsible ownership of restricted breeds"
        eyebrow="Pet Relocation Guide"
        title="Banned Dog Breeds in the UAE (Dubai) — 2026 Guide"
        subtitle="Some breeds are completely prohibited; others face strict muzzle, insurance, and housing rules under Dubai Municipality and UAE federal law."
        updated="Updated June 2026"
      />

      {/* Complete Banned Breeds List */}
      <section id="banned-list" className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Complete List of Banned Dog Breeds in Dubai & the UAE
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              The following breeds are prohibited from import, sale, breeding, and ownership in Dubai and across the UAE under Dubai Municipality and federal regulations. Any dog that visually resembles these breeds may also be refused entry.
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mt-4">
              <strong>Note:</strong> Rottweilers and Dobermans are NOT banned from import — they are subject to local muzzle/leash (restricted) rules. See the restricted-breeds section below.
            </p>
            <p className="text-[#8A8A8A] text-xs leading-relaxed mt-3">
              Source: MOCCAE; Federal Law No. 22 of 2016 — verified June 2026.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Pit Bull Types */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Pit Bull Types</h3>
              </div>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Staffordshire Bull Terrier</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> American Pit Bull Terrier</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> American Staffordshire Terrier</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> American Bully</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Any Pit Bull mix or crossbreed</li>
              </ul>
            </div>

            {/* Mastiff Types */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Mastiff Types</h3>
              </div>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Brazilian Mastiff (Fila Brasileiro)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Argentinian Mastiff (Dogo Argentino)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Tibetan Mastiff</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Neapolitan Mastiff</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> French Mastiff (Dogue de Bordeaux)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Boerboel</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Bullmastiff</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Cane Corso (Italian Mastiff)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Bully Kutta (Alangu / Indian Mastiff)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Perro de Presa Canario (Canary Mastiff)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Japanese Tosa</li>
              </ul>
            </div>

            {/* Wolf-Dog Hybrids */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Wolf & Hybrid Types</h3>
              </div>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Wolf-dog hybrids (any percentage)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Czechoslovakian Wolfdog</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Saarloos Wolfdog</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Any dog with documented wolf ancestry</li>
              </ul>
            </div>

            {/* Other Banned */}
            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C9453A]/10 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-[#C9453A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Other Prohibited Breeds</h3>
              </div>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Bandog (Bandogge)</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Any dog bred or trained for fighting</li>
                <li className="flex items-start gap-2"><span className="text-[#C9453A] mt-1">•</span> Any crossbreed of a banned breed above</li>
              </ul>
            </div>
          </div>

          <div className="warning-box mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">Important: Visual Inspection Is Final</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  UAE customs officers make breed determinations based on visual inspection at the port of entry. Even if your dog is not genetically a banned breed, if it resembles a banned type, it may be refused. This decision is final and not subject to appeal at the airport. Always get a pre-travel assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restricted Breeds */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              Restricted Dog Breeds in Dubai — Rules & Requirements
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Restricted breeds are allowed in Dubai but must follow strict rules set by Dubai Municipality and individual residential communities. Failure to comply can result in fines, eviction from your building, or confiscation of the dog.
            </p>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="data-table min-w-[680px]">
              <thead>
                <tr>
                  <th>Breed / Type</th>
                  <th>Muzzle Required</th>
                  <th>Leash Rule</th>
                  <th>Community Restrictions</th>
                  <th>Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Rottweiler</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Many buildings ban</td>
                  <td>Often required</td>
                </tr>
                <tr>
                  <td className="font-medium">Doberman Pinscher</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Some buildings ban</td>
                  <td>Often required</td>
                </tr>
                <tr>
                  <td className="font-medium">German Shepherd</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Some buildings restrict</td>
                  <td>Sometimes required</td>
                </tr>
                <tr>
                  <td className="font-medium">Husky (all types)</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Alaskan Malamute</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Shar Pei</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Bulldog (English / French)</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Boxer</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Akita</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
                <tr>
                  <td className="font-medium">Chow Chow</td>
                  <td>Yes — public spaces</td>
                  <td>Short, strong leash</td>
                  <td>Generally allowed</td>
                  <td>Rarely required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
                What "Restricted" Means in Practice
              </h3>
              <ul className="space-y-3 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">✓</span>
                  <span><strong>Muzzle in public:</strong> Your dog must wear a properly fitted muzzle at all times in public spaces, including parks, elevators, lobbies, and sidewalks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">✓</span>
                  <span><strong>Short leash rule:</strong> A strong, non-extendable leash no longer than 1.5 meters is required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">✓</span>
                  <span><strong>Community approval:</strong> Many residential buildings and villa communities have their own breed blacklists. Always check with your landlord or building management before moving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">✓</span>
                  <span><strong>Liability insurance:</strong> Some communities require proof of third-party liability insurance covering dog-related incidents.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F6FD] rounded-[20px] p-6 lg:p-8">
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#4F5BD5]" />
                Dubai Municipality Rules for Restricted Breeds
              </h3>
              <ul className="space-y-3 text-[#5A5A5A] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">•</span>
                  <span>All dogs must be registered with Dubai Municipality and microchipped with an ISO 11784/11785 compliant chip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">•</span>
                  <span>Vaccination records must be kept up to date, including rabies and annual boosters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">•</span>
                  <span>Dogs are not allowed in public beaches, parks (unless designated), or food service areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F5BD5] mt-0.5">•</span>
                  <span>Fines for non-compliance range from AED 500 to AED 10,000 per violation depending on severity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Breed Identification & Fines */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
                How Breed Identification Works at UAE Customs
              </h2>
              <p className="text-[#5A5A5A] text-base leading-relaxed mb-6">
                When your dog arrives in Dubai, UAE customs and Dubai Municipality veterinary inspectors conduct a visual breed assessment. This is not a DNA test — it is a physical examination based on the dog's appearance, body structure, head shape, and size.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Visual Inspection</p>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed">A veterinary inspector examines your dog at the cargo terminal or airport animal reception center. They compare physical characteristics against banned breed profiles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Documentation Review</p>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed">The inspector reviews your pet's passport, vaccination records, microchip certificate, and any breed pedigree papers you provide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4F5BD5] text-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A]">Final Decision</p>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed">The inspector makes a final determination. If the dog is deemed a banned breed or close resemblance, entry is refused. This decision is final and binding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-5 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#C9453A]" />
                Penalties for Illegal Import
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-bold text-[#C9453A] text-lg mb-1">AED 10,000 – 700,000</p>
                  <p className="text-sm text-[#5A5A5A]">Fines under UAE Federal Law No. 22 of 2016 for importing, breeding, or selling banned breeds.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-bold text-[#C9453A] text-lg mb-1">Jail Time</p>
                  <p className="text-sm text-[#5A5A5A]">Possible imprisonment for serious violations, especially if the dog causes injury or is involved in illegal trade.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-bold text-[#C9453A] text-lg mb-1">Confiscation & Deportation</p>
                  <p className="text-sm text-[#5A5A5A]">The animal will be confiscated. In some cases, the owner may face deportation or travel bans.</p>
                </div>
                <div className="p-4 bg-[#C9453A]/5 rounded-xl">
                  <p className="font-bold text-[#C9453A] text-lg mb-1">Animal Euthanasia</p>
                  <p className="text-sm text-[#5A5A5A]">In extreme cases where the animal cannot be returned and poses a perceived risk, euthanasia may be ordered by authorities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Animals & Brachycephalic */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#E9ECFB] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Service Animals Exception</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Service dogs are exempt from breed bans, but only if they meet strict accreditation requirements. The exemption does not apply to emotional support animals or therapy dogs.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Must be accredited by <strong>ADI</strong> (Assistance Dogs International) or <strong>IGDF</strong> (International Guide Dog Federation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Handler must carry accreditation certificate and service dog ID at all times</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>Dog must be trained for a specific disability-related task (not just emotional support)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4F5BD5] shrink-0 mt-0.5" />
                  <span>All standard import documents (microchip, rabies vaccine, health certificate) still apply</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FDF6E8] rounded-[20px] p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center">
                  <ThermometerSun className="w-5 h-5 text-[#C89F5A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A2A]">Brachycephalic Breed Restrictions</h3>
              </div>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                Brachycephalic (flat-faced) dogs are not banned from Dubai, but airlines impose severe restrictions due to heat and respiratory risks. This is an airline policy, not a UAE law.
              </p>
              <ul className="space-y-2 text-sm text-[#5A5A5A]">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" />
                  <span><strong>Summer embargo:</strong> Most airlines ban brachycephalic breeds from May 1 – September 30</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" />
                  <span><strong>Year-round bans:</strong> Some carriers (Emirates SkyCargo) restrict certain snub-nosed breeds regardless of season</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" />
                  <span><strong>Affected breeds:</strong> Pugs, Bulldogs, Boston Terriers, Boxers, Shih Tzus, Persian cats, and similar</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#C89F5A] shrink-0 mt-0.5" />
                  <span><strong>Vet certificate:</strong> Some airlines require a veterinary fitness-to-fly certificate within 48 hours of departure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Breeds & Dubai Pet Relocation Assessment */}
      <section className="section-padding bg-[#F5F6FD]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4">
              What If You Have a Mixed Breed?
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed">
              Mixed breeds are one of the biggest sources of confusion for pet owners. A dog that is 50% Labrador and 50% Pit Bull may still be refused entry based on visual appearance. Here's how Dubai Pet Relocation handles mixed breed assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Photo Review</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Send us clear side-profile, front-face, and standing photos of your dog. Our team assesses physical characteristics against UAE banned breed profiles.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4F5BD5]/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Documentation Check</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">We review any pedigree papers, adoption records, veterinary breed notes, or DNA test results you have to build a stronger case.</p>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#C89F5A]/10 flex items-center justify-center mx-auto mb-4">
                <Dog className="w-6 h-6 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2">Vet Confirmation</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">If needed, we arrange a breed confirmation letter from a partner veterinarian that describes your dog's physical traits and non-banned characteristics.</p>
            </div>
          </div>

          <div className="warning-box max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#C89F5A] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#2A2A2A] mb-1">No Guarantee for Mixed Breeds</p>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  Even with thorough documentation, the final decision rests with UAE customs inspectors. Dubai Pet Relocation cannot guarantee entry for dogs that resemble banned breeds. We recommend starting the assessment process at least 8–12 weeks before your planned travel date to explore all options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed text-center mb-10">
              Common questions about banned and restricted dog breeds in Dubai.
            </p>

            <div className="bg-white rounded-[20px] shadow-sm p-6 lg:p-8">
              {faqData.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
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
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Complete guide to relocating dogs to Dubai, including documentation, crate requirements, and airline options.</p>
            </Link>
            <Link to="/guides/uae-pet-import-requirements/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#4F5BD5]/10 flex items-center justify-center mb-4 group-hover:bg-[#4F5BD5]/20 transition-colors">
                <FileCheck className="w-5 h-5 text-[#4F5BD5]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#4F5BD5] transition-colors">UAE Pet Import Requirements</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Step-by-step guide to all documentation required for importing pets into the UAE.</p>
            </Link>
            <Link to="/how-it-works/" className="bg-white rounded-[20px] shadow-sm p-6 hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-xl bg-[#C89F5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#C89F5A]/20 transition-colors">
                <Clock className="w-5 h-5 text-[#C89F5A]" />
              </div>
              <h3 className="text-lg font-bold text-[#2A2A2A] mb-2 group-hover:text-[#C89F5A] transition-colors">How Dubai Pet Relocation Works</h3>
              <p className="text-sm text-[#5A5A5A] leading-relaxed">Learn about our transparent coordination process, from breed check to arrival in Dubai.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#4F5BD5]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Unsure About Your Dog's Breed Status?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Dubai Pet Relocation offers free breed assessments for dogs heading to Dubai. Send us photos and we'll tell you exactly where your dog stands under UAE regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppBtn
              label="Get Free Breed Assessment"
              message="Hi Dubai Pet Relocation, I need a breed assessment for my dog before relocating to Dubai. Can you help me understand if my dog is allowed?"
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

/* Extra icon used inline */
function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
