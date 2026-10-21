import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, ChevronDown, ChevronUp, Search, ArrowRight, HelpCircle, FileText, DollarSign, Dog, Cat, Plane, Calendar, Package, Globe, AlertTriangle
} from 'lucide-react'
import SEOHead from '../components/SEOHead.tsx'
import { getWhatsAppUrl, BASE_URL } from '../lib/seo.ts'
import { CTA_SCOPED_QUOTE, WA_ELIGIBILITY_DEFAULT } from '../lib/conversionCopy.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'
import Hero from '../components/Hero.tsx'
import LinkPlanSlot from '../components/LinkPlanSlot.tsx'

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
  className = '',
}: {
  text: string
  message: string
  className?: string
}) => (
  <a
    href={getWhatsAppUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#1DA851] transition-all shadow-sm hover:shadow-md ${className}`}
  >
    <MessageCircle className="w-4 h-4" />
    {text}
  </a>
)

const categories = [
  { id: 'general', label: 'General', icon: HelpCircle },
  { id: 'import', label: 'Import', icon: Globe },
  { id: 'export', label: 'Export', icon: Plane },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'costs', label: 'Costs', icon: DollarSign },
  { id: 'timeline', label: 'Timeline', icon: Calendar },
  { id: 'airlines', label: 'Airlines', icon: Plane },
  { id: 'crates', label: 'Crates', icon: Package },
  { id: 'dogs', label: 'Dogs', icon: Dog },
  { id: 'cats', label: 'Cats', icon: Cat },
  { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
]

interface FAQEntry {
  question: string
  /** Rich JSX answer rendered in the accordion. */
  answer: React.ReactNode
  /** Plain-text answer (real sentences, no markup) used for FAQPage JSON-LD. */
  plain: string
  category: string
}

const faqs: FAQEntry[] = [
  /* ─────────── GENERAL ─────────── */
  {
    category: 'general',
    question: 'What does Dubai Pet Relocation actually do?',
    answer: <p>Dubai Pet Relocation is a pet relocation coordination service. We help you understand the requirements for your route, check your documents, connect you with vetted veterinary and transport partners, and coordinate the entire process on WhatsApp. We do not physically transport pets ourselves — we are the coordination layer that makes sure nothing is missed.</p>,
    plain: 'Dubai Pet Relocation is a pet relocation coordination service. We help you understand the requirements for your route, check your documents, connect you with vetted veterinary and transport partners, and coordinate the entire process on WhatsApp. We do not physically transport pets ourselves — we are the coordination layer that makes sure nothing is missed.',
  },
  {
    category: 'general',
    question: 'Do I need a pet relocation company?',
    answer: <p>Not always. If you are experienced with international pet travel, have time to research MOCCAE requirements, and are confident managing vet appointments, crate purchases, and airline cargo bookings, you may be able to do it yourself. However, most pet owners find that the risk of a missed document, incorrect timeline, or unexpected airline restriction is worth the cost of professional guidance.</p>,
    plain: 'Not always. If you are experienced with international pet travel, have time to research MOCCAE requirements, and are confident managing vet appointments, crate purchases, and airline cargo bookings, you may be able to do it yourself. However, most pet owners find that the risk of a missed document, incorrect timeline, or unexpected airline restriction is worth the cost of professional guidance.',
  },
  {
    category: 'general',
    question: 'Is Dubai Pet Relocation a carrier or airline?',
    answer: <p>No. Dubai Pet Relocation is a coordination service. We work with vetted airlines, veterinarians, and transport partners to handle the physical relocation. We are the layer that connects you to the right specialists and ensures the timeline and paperwork are correct.</p>,
    plain: 'No. Dubai Pet Relocation is a coordination service. We work with vetted airlines, veterinarians, and transport partners to handle the physical relocation. We are the layer that connects you to the right specialists and ensures the timeline and paperwork are correct.',
  },
  {
    category: 'general',
    question: 'What areas do you serve?',
    answer: <p>We are based in Dubai and primarily help with relocations to and from the UAE. We check the current import or export spine for your corridor — inbound and outbound rules are not interchangeable. If your route is unusual, just ask — we will tell you honestly if we can help.</p>,
    plain: 'We are based in Dubai and primarily help with relocations to and from the UAE. We check the current import or export spine for your corridor — inbound and outbound rules are not interchangeable. If your route is unusual, just ask — we will tell you honestly if we can help.',
  },
  {
    category: 'general',
    question: 'Does my pet have to go into quarantine in Dubai?',
    answer: <><p>No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE's main advantages. Incomplete documentation, however, can lead to your pet being refused entry, confiscated, or re-exported at your expense, which is why the file is checked against the current list before travel.</p><p className="mt-3"><Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the full import requirements <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'No. If all documentation is complete and correct — MOCCAE import permit, ISO microchip, rabies vaccination, and health certificate — pets do not require mandatory quarantine in Dubai. This is one of the UAE\'s main advantages. Incomplete documentation, however, can lead to your pet being refused entry, confiscated, or re-exported at your expense, which is why the file is checked against the current list before travel.',
  },
  {
    category: 'general',
    question: 'How many pets can I bring into the UAE per year?',
    answer: <p>MOCCAE limits imports to a maximum of two pets per person per year. Each pet needs its own separate import permit, so two pets means two permits. If you are relocating a larger household of animals, message us and we will explain the options for spreading imports across eligible household members.</p>,
    plain: 'MOCCAE limits imports to a maximum of two pets per person per year. Each pet needs its own separate import permit, so two pets means two permits. If you are relocating a larger household of animals, message us and we will explain the options for spreading imports across eligible household members.',
  },
  {
    category: 'general',
    question: 'Do you handle pets other than dogs and cats?',
    answer: <p>Our guidance is focused on dogs and cats, which are the most common pets relocated to and from Dubai. The MOCCAE import permit, microchip, rabies vaccination, and health certificate framework is built around these two species. If you have a different animal, message us on WhatsApp and we will tell you honestly whether we can help.</p>,
    plain: 'Our guidance is focused on dogs and cats, which are the most common pets relocated to and from Dubai. The MOCCAE import permit, microchip, rabies vaccination, and health certificate framework is built around these two species. If you have a different animal, message us on WhatsApp and we will tell you honestly whether we can help.',
  },

  /* ─────────── IMPORT ─────────── */
  {
    category: 'import',
    question: 'What is the step-by-step process to import a pet to Dubai?',
    answer: <><p>The process runs in order: confirm your breed is allowed and whether your country is high-risk for rabies, implant an ISO microchip, give the rabies vaccination (pet must be at least 12 weeks old and vaccinated at least 21 days before travel), give core vaccines, complete the rabies titer test if you are from a high-risk country, apply for the MOCCAE import permit, book a manifest cargo flight, complete antiparasitic treatment within 14 days of arrival, obtain the health certificate within 10 days of travel, and register with Dubai Municipality within 30 days of arrival.</p><p className="mt-3"><Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read the full import guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'The process runs in order: confirm your breed is allowed and whether your country is high-risk for rabies, implant an ISO microchip, give the rabies vaccination (pet must be at least 12 weeks old and vaccinated at least 21 days before travel), give core vaccines, complete the rabies titer test if you are from a high-risk country, apply for the MOCCAE import permit, book a manifest cargo flight, complete antiparasitic treatment within 14 days of arrival, obtain the health certificate within 10 days of travel, and register with Dubai Municipality within 30 days of arrival.',
  },
  {
    category: 'import',
    question: 'Which countries are low-risk versus high-risk for rabies?',
    answer: <><p>Only a high-risk origin needs a rabies antibody test, and the result must be at least 0.5 IU/ml. On 22 September 2026 the United Kingdom was on the MOCCAE low-risk list and the United States was not named on it. Confirm any other origin on the live portal before you skip the test. When a test is required, the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is not a 90-day wait after the blood draw.</p><p className="mt-3"><Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the rabies titer test guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'Only a high-risk origin needs a rabies antibody test, and the result must be at least 0.5 IU/ml. On 22 September 2026 the United Kingdom was on the MOCCAE low-risk list and the United States was not named on it. Confirm any other origin on the live portal before you skip the test. When a test is required, the certificate is valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is not a 90-day wait after the blood draw.',
  },
  {
    category: 'import',
    question: 'How old does my pet have to be to enter the UAE?',
    answer: <p>The minimum import age is 12 weeks from low-risk countries and 15 weeks from high-risk countries. Your pet must also be at least 12 weeks old at the time of its rabies vaccination, and that vaccine must be at least 21 days old at the time of travel. Younger animals cannot meet the rabies timeline, so the age minimum follows naturally from the vaccination rules.</p>,
    plain: 'The minimum import age is 12 weeks from low-risk countries and 15 weeks from high-risk countries. Your pet must also be at least 12 weeks old at the time of its rabies vaccination, and that vaccine must be at least 21 days old at the time of travel. Younger animals cannot meet the rabies timeline, so the age minimum follows naturally from the vaccination rules.',
  },
  {
    category: 'import',
    question: 'My pet was vaccinated before being microchipped — is that a problem?',
    answer: <p>Yes, this is a common and costly mistake. The microchip must be implanted before the rabies vaccination. If your pet was vaccinated before being microchipped, MOCCAE treats the vaccination as invalid for UAE entry. You will need to re-vaccinate after microchipping and wait another 21 days before travel. We check the order of these records early so the problem surfaces while there is still time to fix it.</p>,
    plain: 'Yes, this is a common and costly mistake. The microchip must be implanted before the rabies vaccination. If your pet was vaccinated before being microchipped, MOCCAE treats the vaccination as invalid for UAE entry. You will need to re-vaccinate after microchipping and wait another 21 days before travel. We check the order of these records early so the problem surfaces while there is still time to fix it.',
  },
  {
    category: 'import',
    question: 'I am moving from Bahrain or Qatar — do I still need a titer test?',
    answer: <p>Yes. Pets coming from Bahrain and Qatar must have a rabies titer test even though those countries are otherwise classified as low-risk. This is a specific exception that is frequently missed and causes delays. If you are relocating from either country, plan for a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given — that is not a wait after the draw.</p>,
    plain: 'Yes. Pets coming from Bahrain and Qatar must have a rabies titer test even though those countries are otherwise classified as low-risk. This is a specific exception that is frequently missed and causes delays. If you are relocating from either country, plan for a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given — that is not a wait after the draw.',
  },
  {
    category: 'import',
    question: 'What happens at the cargo terminal when my pet arrives in Dubai?',
    answer: <p>Your pet arrives at the DXB or DWC cargo terminal, not at passenger baggage claim. The person named on the file presents the MOCCAE import permit, original health certificate, vaccination records, microchip certificate, titer result if the origin needs one, the antiparasitic record, and the owner's passport and UAE visa. A complete file is examined and released. The UAE does not run a routine quarantine for that file, and the terminal does not publish a fixed clearance time. On a managed booking, the quote says who waits at the cargo desk.</p>,
    plain: 'Your pet arrives at the DXB or DWC cargo terminal, not at passenger baggage claim. The person named on the file presents the MOCCAE import permit, original health certificate, vaccination records, microchip certificate, titer result if the origin needs one, the antiparasitic record, and the owner\'s passport and UAE visa. A complete file is examined and released. The UAE does not run a routine quarantine for that file, and the terminal does not publish a fixed clearance time. On a managed booking, the quote says who waits at the cargo desk.',
  },
  {
    category: 'import',
    question: 'Do I need to register my pet after it arrives in Dubai?',
    answer: <p>Yes. Register the pet with Dubai Municipality within 30 days of arrival, using the Aleef app or the Dubai Smart Services portal. You will need Emirates ID, the microchip number, current vaccination records, a pet photo, and the residence address. Confirm the current fee on the municipality channel. Annual renewal is required, and the municipality tag belongs on the collar.</p>,
    plain: 'Yes. Register the pet with Dubai Municipality within 30 days of arrival, using the Aleef app or the Dubai Smart Services portal. You will need Emirates ID, the microchip number, current vaccination records, a pet photo, and the residence address. Confirm the current fee on the municipality channel. Annual renewal is required, and the municipality tag belongs on the collar.',
  },

  /* ─────────── EXPORT ─────────── */
  {
    category: 'export',
    question: 'Do I need a permit to take my pet out of Dubai?',
    answer: <><p>Yes. A pet leaving Dubai needs a MOCCAE export health certificate. Apply on the official portal with the passport copy, pet photo, UAE vaccination records, and microchip certificate. Confirm the current fee and processing time on that portal. Some destinations also need a certificate endorsed by a UAE government vet.</p><p className="mt-3"><Link to="/guides/moccae-import-permit/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">More on MOCCAE permits <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'Yes. A pet leaving Dubai needs a MOCCAE export health certificate. Apply on the official portal with the passport copy, pet photo, UAE vaccination records, and microchip certificate. Confirm the current fee and processing time on that portal. Some destinations also need a certificate endorsed by a UAE government vet.',
  },
  {
    category: 'export',
    question: 'How much does a MOCCAE export permit cost?',
    answer: <p>Confirm the current MOCCAE export certificate fee and processing time on the official portal when you apply. The larger variable is the destination country's own import rules. Some require a government-vet endorsement or a specific health certificate, so the export file depends on where the pet is going.</p>,
    plain: 'Confirm the current MOCCAE export certificate fee and processing time on the official portal when you apply. The larger variable is the destination country\'s own import rules. Some require a government-vet endorsement or a specific health certificate, so the export file depends on where the pet is going.',
  },
  {
    category: 'export',
    question: 'Can you help me relocate my pet from Dubai back to my home country?',
    answer: <><p>Yes. We coordinate exports from Dubai as well as imports. The file covers the MOCCAE export certificate, the destination country's entry rules, and the cargo booking the airline confirms. Dubai to the UK and Dubai to the USA each have their own route page.</p><p className="mt-3"><Link to="/routes/dubai-to-uk/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Dubai to UK route guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'Yes. We coordinate exports from Dubai as well as imports. The file covers the MOCCAE export certificate, the destination country\'s entry rules, and the cargo booking the airline confirms. Dubai to the UK and Dubai to the USA each have their own route page.',
  },
  {
    category: 'export',
    question: 'Does my destination country have its own import rules I need to meet?',
    answer: <p>Almost always, yes. Every country sets its own entry requirements, and they can differ significantly from the UAE's. Some require their own titer tests, parasite treatments, or quarantine on arrival. The MOCCAE export permit only covers leaving the UAE — meeting the destination's rules is a separate piece of the puzzle. We map both sides before you book any travel.</p>,
    plain: 'Almost always, yes. Every country sets its own entry requirements, and they can differ significantly from the UAE\'s. Some require their own titer tests, parasite treatments, or quarantine on arrival. The MOCCAE export permit only covers leaving the UAE — meeting the destination\'s rules is a separate piece of the puzzle. We map both sides before you book any travel.',
  },

  /* ─────────── DOCUMENTS ─────────── */
  {
    category: 'documents',
    question: 'What documents do I need to import a pet to Dubai?',
    answer: <><p>The standard requirements are: a valid MOCCAE import permit, an ISO-compliant microchip (15 digits, ISO 11784/11785), a valid rabies vaccination certificate, core vaccination records (DHPPIL for dogs, FVRCP for cats), an international health certificate from the origin country within 10 days of travel, an antiparasitic treatment record, and — for high-risk countries — a rabies titer test (RNATT). You also need a copy of the owner's passport and UAE visa.</p><p className="mt-3"><Link to="/guides/uae-pet-import-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read the full import guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'The standard requirements are: a valid MOCCAE import permit, an ISO-compliant microchip (15 digits, ISO 11784/11785), a valid rabies vaccination certificate, core vaccination records (DHPPIL for dogs, FVRCP for cats), an international health certificate from the origin country within 10 days of travel, an antiparasitic treatment record, and — for high-risk countries — a rabies titer test (RNATT). You also need a copy of the owner\'s passport and UAE visa.',
  },
  {
    category: 'documents',
    question: 'How do I get a MOCCAE import permit?',
    answer: <><p>MOCCAE import permits are applied for online through the UAE government portal or the MOCCAE mobile app. You need your pet's microchip number, vaccination details, a recent pet photo, and your passport and UAE residency or visa. The permit is valid for 90 days from issuance. Confirm the current permit and arrival-release fees on the official portal; fees may change. Processing usually takes three to seven business days. We guide you through the application or handle it on your behalf depending on your service tier.</p><p className="mt-3"><Link to="/guides/moccae-import-permit/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read the MOCCAE permit guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'MOCCAE import permits are applied for online through the UAE government portal or the MOCCAE mobile app. You need your pet\'s microchip number, vaccination details, a recent pet photo, and your passport and UAE residency or visa. The permit is valid for 90 days from issuance. Confirm the current permit and arrival-release fees on the official portal; fees may change. Processing usually takes three to seven business days. We guide you through the application or handle it on your behalf depending on your service tier.',
  },
  {
    category: 'documents',
    question: 'What is a rabies titer test (FAVN/RNATT) and do I need one?',
    answer: <><p>A rabies titer test measures the level of rabies antibodies in your pet's blood to prove the vaccine worked. When MOCCAE requires it, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given, sent to a WOAH/ISO 17025 accredited lab, and must return a result of at least 0.5 IU/ml.</p><p className="mt-3"><Link to="/guides/rabies-titer-test-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Read the titer test guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'A rabies titer test measures the level of rabies antibodies in your pet\'s blood to prove the vaccine worked. When MOCCAE requires it, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given, sent to a WOAH/ISO 17025 accredited lab, and must return a result of at least 0.5 IU/ml.',
  },
  {
    category: 'documents',
    question: 'What if my titer test result comes back below 0.5 IU/ml?',
    answer: <p>If the result is below 0.5 IU/ml, your pet is not eligible to travel under UAE rules. You will need to re-vaccinate with an inactivated rabies vaccine, wait 21 days, draw blood again, and then wait another 90 days from the new blood draw before travel. That adds a minimum of four-plus months. To avoid this, make sure the first vaccine is an inactivated (killed) vaccine, wait the full 21 days before the blood draw, and use a reputable vet for the sample.</p>,
    plain: 'If the result is below 0.5 IU/ml, your pet is not eligible to travel under UAE rules. You will need to re-vaccinate with an inactivated rabies vaccine, wait 21 days, draw blood again, and then wait another 90 days from the new blood draw before travel. That adds a minimum of four-plus months. To avoid this, make sure the first vaccine is an inactivated (killed) vaccine, wait the full 21 days before the blood draw, and use a reputable vet for the sample.',
  },
  {
    category: 'documents',
    question: 'Can my pet travel with an expired rabies vaccine?',
    answer: <p>No. The rabies vaccination must be valid at the time of travel. It must be at least 21 days old, within 12 months of arrival, and given to a pet at least 12 weeks old, using an inactivated or recombinant vaccine rather than a live one. If the vaccine has expired, your pet needs a new vaccine and potentially a new waiting period. We check this early in the process so there are no surprises near your travel date.</p>,
    plain: 'No. The rabies vaccination must be valid at the time of travel. It must be at least 21 days old, within 12 months of arrival, and given to a pet at least 12 weeks old, using an inactivated or recombinant vaccine rather than a live one. If the vaccine has expired, your pet needs a new vaccine and potentially a new waiting period. We check this early in the process so there are no surprises near your travel date.',
  },
  {
    category: 'documents',
    question: 'How long is the international health certificate valid?',
    answer: <p>The international health certificate is valid for 10 days from issuance to arrival, so it is one of the last documents prepared. It must be issued by a government-accredited or official veterinarian and must include the owner's details, the microchip number, vaccination records, and the dates and products used for antiparasitic treatments. Because the window is so short, timing the vet appointment correctly is critical.</p>,
    plain: 'The international health certificate is valid for 10 days from issuance to arrival, so it is one of the last documents prepared. It must be issued by a government-accredited or official veterinarian and must include the owner\'s details, the microchip number, vaccination records, and the dates and products used for antiparasitic treatments. Because the window is so short, timing the vet appointment correctly is critical.',
  },
  {
    category: 'documents',
    question: 'Why must the same microchip number appear on every document?',
    answer: <p>The microchip number is the thread that ties all your pet's paperwork together. Every document — microchip certificate, vaccination certificate, titer test result, health certificate, and import permit — must show the same 15-digit ISO number. A mismatch between, for example, the microchip certificate and the vaccination certificate is grounds for automatic rejection at customs. We verify the number matches across every document before submission.</p>,
    plain: 'The microchip number is the thread that ties all your pet\'s paperwork together. Every document — microchip certificate, vaccination certificate, titer test result, health certificate, and import permit — must show the same 15-digit ISO number. A mismatch between, for example, the microchip certificate and the vaccination certificate is grounds for automatic rejection at customs. We verify the number matches across every document before submission.',
  },
  {
    category: 'documents',
    question: 'What is the most common reason a MOCCAE permit gets rejected?',
    answer: <><p>The single most common rejection reason is an incorrect or low-quality pet photo. MOCCAE requires a clear, front-facing photo with a neutral background, no accessories, and good lighting. Other frequent causes are an expired rabies vaccine, an incorrectly typed microchip number, a breed-name mismatch, and incomplete vaccination records. A rejection resets the two-to-five-day processing clock, so we error-check every application before it goes in.</p><p className="mt-3"><Link to="/guides/moccae-import-permit/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Avoid permit rejections <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'The single most common rejection reason is an incorrect or low-quality pet photo. MOCCAE requires a clear, front-facing photo with a neutral background, no accessories, and good lighting. Other frequent causes are an expired rabies vaccine, an incorrectly typed microchip number, a breed-name mismatch, and incomplete vaccination records. A rejection resets the two-to-five-day processing clock, so we error-check every application before it goes in.',
  },
  {
    category: 'documents',
    question: 'Do I need a pet passport?',
    answer: <p>Pet passports are useful for EU-to-EU travel but are not accepted as a standalone document for UAE entry. For Dubai, you need the MOCCAE import permit, a health certificate issued by an official government veterinarian in the origin country, and proof of rabies vaccination. The pet passport can serve as supporting evidence but is not a substitute for the required certificates.</p>,
    plain: 'Pet passports are useful for EU-to-EU travel but are not accepted as a standalone document for UAE entry. For Dubai, you need the MOCCAE import permit, a health certificate issued by an official government veterinarian in the origin country, and proof of rabies vaccination. The pet passport can serve as supporting evidence but is not a substitute for the required certificates.',
  },

  /* ─────────── COSTS ─────────── */
  {
    category: 'costs',
    question: 'How much does pet relocation to Dubai cost?',
    answer: <><p>There is no single published fare. The quote separates government charges, the clinic, the airline, the crate, handling, and coordination. On 22 September 2026 MOCCAE listed AED 200 to issue an import permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. Those are government charges, not a door-to-door price. Confirm on the MOCCAE portal. Cargo and coordination are quoted after we know the pet and the route.</p><p className="mt-3"><Link to="/guides/pet-relocation-cost-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See what changes the quote <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'There is no single published fare. The quote separates government charges, the clinic, the airline, the crate, handling, and coordination. On 22 September 2026 MOCCAE listed AED 200 to issue an import permit for one animal, AED 500 to release one dog, and AED 250 to release one cat. Those are government charges, not a door-to-door price. Confirm on the MOCCAE portal. Cargo and coordination are quoted after we know the pet and the route.',
  },
  {
    category: 'costs',
    question: 'What are the government fees for importing a pet?',
    answer: <p>MOCCAE charges an import permit fee and an arrival veterinary release/inspection fee — confirm both current amounts on the official portal, because published figures have differed. On top of that you typically pay Dubai customs clearance, Dubai Municipality registration, and microchipping if it has not already been done. Those government charges are the same whichever coordinator you use.</p>,
    plain: 'MOCCAE charges an import permit fee and an arrival veterinary release/inspection fee — confirm both current amounts on the official portal, because published figures have differed. On top of that you typically pay Dubai customs clearance, Dubai Municipality registration, and microchipping if it has not already been done. Those government charges are the same whichever coordinator you use.',
  },
  {
    category: 'costs',
    question: 'Why is air cargo so expensive compared to my own flight ticket?',
    answer: <p>Pets travel as manifest cargo, not as baggage, so they ride in a climate-controlled, pressurized section of the cargo hold. The fee covers dedicated cargo space your pet's crate displaces, climate control and pressurization throughout the flight, ground handling at both airports, insurance and liability coverage for live animals, and IATA-compliant handling. Cargo is also charged by volumetric weight — a formula using the crate's length, width, and height — which is why crate size matters so much. It costs more than an economy seat because it requires specialized infrastructure, but it is the safest way for pets to fly long distances.</p>,
    plain: 'Pets travel as manifest cargo, not as baggage, so they ride in a climate-controlled, pressurized section of the cargo hold. The fee covers dedicated cargo space your pet\'s crate displaces, climate control and pressurization throughout the flight, ground handling at both airports, insurance and liability coverage for live animals, and IATA-compliant handling. Cargo is also charged by volumetric weight — a formula using the crate\'s length, width, and height — which is why crate size matters so much. It costs more than an economy seat because it requires specialized infrastructure, but it is the safest way for pets to fly long distances.',
  },
  {
    category: 'costs',
    question: 'How much do the veterinary steps cost?',
    answer: <p>The clinic invoices the microchip, rabies vaccination, any antibody test, the health certificate, and parasite treatment. We do not publish a veterinary tariff. A high-risk origin needs a result of at least 0.5 IU/ml, with a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. Ask the clinic for its current fees before the appointment.</p>,
    plain: 'The clinic invoices the microchip, rabies vaccination, any antibody test, the health certificate, and parasite treatment. We do not publish a veterinary tariff. A high-risk origin needs a result of at least 0.5 IU/ml, with a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. Ask the clinic for its current fees before the appointment.',
  },
  {
    category: 'costs',
    question: 'What are your service tiers and what do they include?',
    answer: <><p>We offer three coordination scopes. PawPilot is a document / eligibility plan. PawPartner is managed booking and travel-day hold. PawVIP is a dedicated coordinator. Dubai Pet Relocation coordination is quote-only after eligibility. We do not publish package from-prices. WhatsApp a scoped quote. Government MOCCAE fees are confirmed on the official portal.</p><p className="mt-3"><Link to="/prices/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See quoted packages <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'We offer three coordination scopes. PawPilot is a document / eligibility plan. PawPartner is managed booking and travel-day hold. PawVIP is a dedicated coordinator. Dubai Pet Relocation coordination is quote-only after eligibility. We do not publish package from-prices. WhatsApp a scoped quote. Government MOCCAE fees are confirmed on the official portal.',
  },
  {
    category: 'costs',
    question: 'What is the cheapest way to relocate a pet to Dubai?',
    answer: <p>The cheapest path is usually DIY from a low-risk country with a small pet, in off-peak season, with documents already complete. Third-party vet, freight and crate invoices still apply. A missed document or a rejected crate can wipe the savings. Our document / eligibility plan is quote-only after we know the pet and corridor. We do not publish a PawPilot from-price. WhatsApp a scoped quote if you want us to hold the file.</p>,
    plain: 'The cheapest path is usually DIY from a low-risk country with a small pet, in off-peak season, with documents already complete. Third-party vet, freight and crate invoices still apply. A missed document or a rejected crate can wipe the savings. Our document / eligibility plan is quote-only after we know the pet and corridor. We do not publish a PawPilot from-price. WhatsApp a scoped quote if you want us to hold the file.',
  },
  {
    category: 'costs',
    question: 'Are there any hidden fees I should watch out for?',
    answer: <p>The charges that surprise people are usually outside the coordination fee: airline freight, a replacement crate, boarding if a flight moves, translation, government fees, and delivery at the far end. We name those lines on the quote for your pet and route. We do not publish a universal “hidden fee” price list.</p>,
    plain: 'The charges that surprise people are usually outside the coordination fee: airline freight, a replacement crate, boarding if a flight moves, translation, government fees, and delivery at the far end. We name those lines on the quote for your pet and route. We do not publish a universal hidden-fee price list.',
  },
  {
    category: 'costs',
    question: 'Do you offer payment plans?',
    answer: <p>How you pay, and whether a move can be split, is written on the quote before you agree. This page does not publish a deposit percentage, a minimum amount, or a price-match promise.</p>,
    plain: 'How you pay, and whether a move can be split, is written on the quote before you agree. This page does not publish a deposit percentage, a minimum amount, or a price-match promise.',
  },
  {
    category: 'costs',
    question: 'Can I get a quote before I commit?',
    answer: <p>Yes. Message us on WhatsApp with your pet's type and breed, weight and approximate dimensions, the city and country you are moving from, your destination, your planned move date, and your current documentation status. We reply during published hours — Sunday to Thursday, 9:00 AM to 6:00 PM GST, with Friday and Saturday limited and by appointment — with a realistic cost range, a clear timeline, and an honest assessment of any seasonal or breed restrictions.</p>,
    plain: 'Yes. Message us on WhatsApp with your pet\'s type and breed, weight and approximate dimensions, the city and country you are moving from, your destination, your planned move date, and your current documentation status. We reply during published hours — Sunday to Thursday, 9:00 AM to 6:00 PM GST, with Friday and Saturday limited and by appointment — with a realistic cost range, a clear timeline, and an honest assessment of any seasonal or breed restrictions.',
  },

  /* ─────────── TIMELINE ─────────── */
  {
    category: 'timeline',
    question: 'How long does pet relocation to Dubai take?',
    answer: <p>A first rabies vaccine, or a gap, needs at least 21 days before travel. The MOCCAE import permit is valid for 90 days from issuance, and the pet must arrive inside that window. The health certificate is issued close to travel. When a titer is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. There is no single week-count that fits every route. Send the pet and the dates and we will say which clock applies.</p>,
    plain: 'A first rabies vaccine, or a gap, needs at least 21 days before travel. The MOCCAE import permit is valid for 90 days from issuance, and the pet must arrive inside that window. The health certificate is issued close to travel. When a titer is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. There is no single week-count that fits every route. Send the pet and the dates and we will say which clock applies.',
  },
  {
    category: 'timeline',
    question: 'When should I start the relocation process?',
    answer: <p>Ideally 8–12 weeks before your planned move for low-risk countries, and 4–5 months ahead for high-risk countries because of the rabies titer test timeline. Starting early gives you more flight options, lower costs, and time to handle unexpected issues without stress. In peak season (October to May), booking 8–12 weeks in advance also secures the best cargo rates and routing.</p>,
    plain: 'Ideally 8–12 weeks before your planned move for low-risk countries, and 4–5 months ahead for high-risk countries because of the rabies titer test timeline. Starting early gives you more flight options, lower costs, and time to handle unexpected issues without stress. In peak season (October to May), booking 8–12 weeks in advance also secures the best cargo rates and routing.',
  },
  {
    category: 'timeline',
    question: 'Is there a 90-day wait after the titer test?',
    answer: <p>No. When an RNATT is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is the certificate rule — not a sample window before the flight and not a 90-day wait after the lab result. Sitting 90 days after the draw is not the rule. The MOCCAE import permit is a separate rule: it remains valid 90 days from issuance.</p>,
    plain: 'No. When an RNATT is required, use a result of at least 0.5 IU/ml and a certificate valid for 365 days if the vaccine stays valid and continuous and no booster is given. That is the certificate rule — not a sample window before the flight and not a 90-day wait after the lab result. Sitting 90 days after the draw is not the rule. The MOCCAE import permit is a separate rule: it remains valid 90 days from issuance.',
  },
  {
    category: 'timeline',
    question: 'How long does the MOCCAE import permit take to process?',
    answer: <p>The MOCCAE import permit typically takes two to five business days once all documents are correctly submitted, though incomplete or error-filled applications can stretch to one or two weeks. The permit is valid for 90 days from issuance. We recommend applying about three to four weeks before travel — late enough that it stays valid through your flight, but early enough to absorb a resubmission if needed.</p>,
    plain: 'The MOCCAE import permit typically takes two to five business days once all documents are correctly submitted, though incomplete or error-filled applications can stretch to one or two weeks. The permit is valid for 90 days from issuance. We recommend applying about three to four weeks before travel — late enough that it stays valid through your flight, but early enough to absorb a resubmission if needed.',
  },
  {
    category: 'timeline',
    question: 'What happens if my documents are delayed?',
    answer: <p>Document delays are one of the most common causes of relocation stress. If a document is delayed, we adjust the timeline, communicate with the airline and vet partners, and explore options like expedited processing or a later flight. The earlier you involve us, the more options we have to handle delays without missing your move date.</p>,
    plain: 'Document delays are one of the most common causes of relocation stress. If a document is delayed, we adjust the timeline, communicate with the airline and vet partners, and explore options like expedited processing or a later flight. The earlier you involve us, the more options we have to handle delays without missing your move date.',
  },
  {
    category: 'timeline',
    question: 'Can I relocate my pet at the last minute?',
    answer: <p>Last-minute relocations are possible from low-risk countries if all documents are already in order, though last-minute cargo bookings cost more and have fewer flight options. From high-risk countries a last-minute move is almost impossible because of the mandatory titer test waiting period. We recommend starting at least 8 weeks ahead.</p>,
    plain: 'Last-minute relocations are possible from low-risk countries if all documents are already in order, though last-minute cargo bookings cost more and have fewer flight options. From high-risk countries a last-minute move is almost impossible because of the mandatory titer test waiting period. We recommend starting at least 8 weeks ahead.',
  },

  /* ─────────── AIRLINES ─────────── */
  {
    category: 'airlines',
    question: 'Which airlines accept pets to Dubai?',
    answer: <p>Emirates SkyCargo is the most common carrier for DXB arrivals and Etihad Cargo is the main option for Abu Dhabi. flydubai, Lufthansa Cargo, KLM Cargo, Turkish Cargo, and Qatar Cargo also carry pets on various routes. Each airline has different crate requirements, brachycephalic rules, temperature embargoes, and booking procedures, so we match your pet and route to the best airline option.</p>,
    plain: 'Emirates SkyCargo is the most common carrier for DXB arrivals and Etihad Cargo is the main option for Abu Dhabi. flydubai, Lufthansa Cargo, KLM Cargo, Turkish Cargo, and Qatar Cargo also carry pets on various routes. Each airline has different crate requirements, brachycephalic rules, temperature embargoes, and booking procedures, so we match your pet and route to the best airline option.',
  },
  {
    category: 'airlines',
    question: 'Can my pet fly in the cabin to Dubai?',
    answer: <p>No. All pets entering Dubai must travel as manifest cargo — they cannot fly in the cabin or as checked baggage on flights to Dubai. The only in-cabin option in the region is Etihad to Abu Dhabi for very small pets up to 8kg. Etihad publishes cabin pet fees that change; confirm at booking. A 2026 promo from USD 399 is expired and is not the current standard. That cabin product is not available to Dubai. For long-haul routes to Dubai, cargo is the rule, not the exception.</p>,
    plain: 'No. All pets entering Dubai must travel as manifest cargo — they cannot fly in the cabin or as checked baggage on flights to Dubai. The only in-cabin option in the region is Etihad to Abu Dhabi for very small pets up to 8kg. Etihad publishes cabin pet fees that change; confirm at booking. A 2026 promo from USD 399 is expired and is not the current standard. That cabin product is not available to Dubai. For long-haul routes to Dubai, cargo is the rule, not the exception.',
  },
  {
    category: 'airlines',
    question: 'What is a temperature embargo and will it affect my pet?',
    answer: <><p>Most airlines impose a summer heat embargo from May 1 to September 30 and will restrict or refuse pet cargo whenever ground temperatures exceed 29°C at any point in the journey. In Dubai, summer tarmac temperatures reach 45°C and beyond, which is why the embargo exists. Some airlines offer limited early-morning slots before 8 AM when it is cooler. We check seasonal restrictions before booking and can suggest alternative routing or timing.</p><p className="mt-3"><Link to="/guides/pet-travel-summer-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the summer travel guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'Most airlines impose a summer heat embargo from May 1 to September 30 and will restrict or refuse pet cargo whenever ground temperatures exceed 29°C at any point in the journey. In Dubai, summer tarmac temperatures reach 45°C and beyond, which is why the embargo exists. Some airlines offer limited early-morning slots before 8 AM when it is cooler. We check seasonal restrictions before booking and can suggest alternative routing or timing.',
  },
  {
    category: 'airlines',
    question: 'Can my pet travel on the same flight as me?',
    answer: <p>Sometimes. Pets traveling as cargo are booked on the same flight when possible, but this is not guaranteed. Cargo bookings are handled separately from passenger tickets and depend on cargo space, temperature conditions, and airline policy. Emirates SkyCargo, for example, requires 72 hours of advance notice. We always try to book your pet on your flight or the closest available option.</p>,
    plain: 'Sometimes. Pets traveling as cargo are booked on the same flight when possible, but this is not guaranteed. Cargo bookings are handled separately from passenger tickets and depend on cargo space, temperature conditions, and airline policy. Emirates SkyCargo, for example, requires 72 hours of advance notice. We always try to book your pet on your flight or the closest available option.',
  },
  {
    category: 'airlines',
    question: 'Is it safe for my pet to fly in the cargo hold?',
    answer: <p>Yes. On modern wide-body aircraft such as the Boeing 777 and Airbus A350, the cargo hold is pressurized and climate-controlled to 18–24°C during flight, which is safe for all breeds. The real risk is on the ground — loading, tarmac waiting, and unloading — which is exactly what the summer embargo and the 29°C ground rule are designed to manage. Booking direct or early-morning flights and avoiding the hottest months keeps your pet safest.</p>,
    plain: 'Yes. On modern wide-body aircraft such as the Boeing 777 and Airbus A350, the cargo hold is pressurized and climate-controlled to 18–24°C during flight, which is safe for all breeds. The real risk is on the ground — loading, tarmac waiting, and unloading — which is exactly what the summer embargo and the 29°C ground rule are designed to manage. Booking direct or early-morning flights and avoiding the hottest months keeps your pet safest.',
  },

  /* ─────────── CRATES ─────────── */
  {
    category: 'crates',
    question: 'What size travel crate does my pet need?',
    answer: <><p>IATA requires that your pet can stand without touching the top of the crate, turn around comfortably, and lie down in a natural position. The sizing formula is: crate length = nose-to-tail length plus 10–15cm, crate height = floor-to-head height plus 10cm, and crate width = shoulder width multiplied by two. Always add a 2–3cm safety margin, and use one size larger for brachycephalic breeds. We measure your pet on a video call and source the correct crate.</p><p className="mt-3"><Link to="/guides/iata-pet-crate-requirements/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the IATA crate guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'IATA requires that your pet can stand without touching the top of the crate, turn around comfortably, and lie down in a natural position. The sizing formula is: crate length = nose-to-tail length plus 10–15cm, crate height = floor-to-head height plus 10cm, and crate width = shoulder width multiplied by two. Always add a 2–3cm safety margin, and use one size larger for brachycephalic breeds. We measure your pet on a video call and source the correct crate.',
  },
  {
    category: 'crates',
    question: 'What makes a crate IATA-compliant?',
    answer: <p>An IATA LAR-compliant crate has a single-piece rigid plastic shell, a metal door with a secure locking latch the animal cannot open, ventilation on all four sides (at least 16% of the wall area), no working wheels, attachable food and water bowls fitted to the door, a leak-proof floor with absorbent bedding (no straw or hay), and "Live Animal" plus upright-arrow labels on all sides. Soft carriers, wire crates, and homemade wooden boxes are not accepted for cargo travel to Dubai.</p>,
    plain: 'An IATA LAR-compliant crate has a single-piece rigid plastic shell, a metal door with a secure locking latch the animal cannot open, ventilation on all four sides (at least 16% of the wall area), no working wheels, attachable food and water bowls fitted to the door, a leak-proof floor with absorbent bedding (no straw or hay), and "Live Animal" plus upright-arrow labels on all sides. Soft carriers, wire crates, and homemade wooden boxes are not accepted for cargo travel to Dubai.',
  },
  {
    category: 'crates',
    question: 'What happens if my crate is even slightly too small?',
    answer: <p>Airlines and ground handlers measure crates at check-in and strictly enforce IATA sizing. A crate that is too small even by 1cm will be refused, and your pet will be offloaded — which usually means a rebooking fee and a new, larger crate. This is why we always add a 2–3cm safety margin to every measurement and use one size larger for brachycephalic breeds. Buying the wrong crate online is one of the most common and expensive mistakes we see.</p>,
    plain: 'Airlines and ground handlers measure crates at check-in and strictly enforce IATA sizing. A crate that is too small even by 1cm will be refused, and your pet will be offloaded — which usually means a rebooking fee and a new, larger crate. This is why we always add a 2–3cm safety margin to every measurement and use one size larger for brachycephalic breeds. Buying the wrong crate online is one of the most common and expensive mistakes we see.',
  },
  {
    category: 'crates',
    question: 'Should I buy or rent a travel crate?',
    answer: <p>A crate has to fit the animal and the airline’s rules. Buying suits an owner who will travel again. Renting suits a single move. Either way, the price is on the quote for that size. This page does not publish a buy price, a rent price, or a promise of free return shipping.</p>,
    plain: 'A crate has to fit the animal and the airline’s rules. Buying suits an owner who will travel again. Renting suits a single move. Either way, the price is on the quote for that size. This page does not publish a buy price, a rent price, or a promise of free return shipping.',
  },
  {
    category: 'crates',
    question: 'How do I get my pet used to the crate before travel?',
    answer: <p>Start crate familiarization at least 2–3 weeks before travel, or 4–6 weeks for anxious pets. Introduce the crate as a safe space with the door open, feed meals inside, add a familiar blanket or a worn T-shirt with your scent, then gradually close the door for short and then longer periods. Small soft toys are fine, but avoid hard toys, chews, or anything with small parts that could be a choking hazard. Never sedate a pet for crate travel.</p>,
    plain: 'Start crate familiarization at least 2–3 weeks before travel, or 4–6 weeks for anxious pets. Introduce the crate as a safe space with the door open, feed meals inside, add a familiar blanket or a worn T-shirt with your scent, then gradually close the door for short and then longer periods. Small soft toys are fine, but avoid hard toys, chews, or anything with small parts that could be a choking hazard. Never sedate a pet for crate travel.',
  },

  /* ─────────── DOGS ─────────── */
  {
    category: 'dogs',
    question: 'Which dog breeds are banned in Dubai?',
    answer: <><p>The UAE bans Pit Bull types (including the American Pit Bull Terrier, American Bully, and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, Bullmastiff, Tibetan Mastiff, Dogo Argentino, Fila Brasileiro, and others), the Japanese Tosa, and wolf-dog hybrids. Any dog that visually resembles a banned breed may also be refused. Rottweilers and Dobermans are restricted rather than banned.</p><p className="mt-3"><Link to="/guides/banned-dog-breeds-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the full banned breeds guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'The UAE bans Pit Bull types (including the American Pit Bull Terrier, American Bully, and Staffordshire Bull Terrier), Mastiff types (including Cane Corso, Boerboel, Bullmastiff, Tibetan Mastiff, Dogo Argentino, Fila Brasileiro, and others), the Japanese Tosa, and wolf-dog hybrids. Any dog that visually resembles a banned breed may also be refused. Rottweilers and Dobermans are restricted rather than banned.',
  },
  {
    category: 'dogs',
    question: 'Are Rottweilers and Dobermans allowed in Dubai?',
    answer: <p>Yes, Rottweilers and Dobermans are allowed but classified as restricted breeds. They must be muzzled in public at all times, kept on a short leash, and may face additional community or building restrictions. Some residential communities and landlords explicitly prohibit these breeds, so always check your building's pet policy before relocating. Many communities also require liability insurance for restricted breeds.</p>,
    plain: 'Yes, Rottweilers and Dobermans are allowed but classified as restricted breeds. They must be muzzled in public at all times, kept on a short leash, and may face additional community or building restrictions. Some residential communities and landlords explicitly prohibit these breeds, so always check your building\'s pet policy before relocating. Many communities also require liability insurance for restricted breeds.',
  },
  {
    category: 'dogs',
    question: 'My dog is a mixed breed that looks like a banned type — what should I do?',
    answer: <><p>Breed identification at UAE customs is primarily visual, and officers may refuse entry to any dog that resembles a banned type, even if it is not genetically that breed — and that decision is final at the port of entry. We strongly recommend a pre-travel breed assessment with clear photos, pedigree papers, and a veterinary breed-confirmation letter to support your case. Message us for a free breed assessment before you start the process.</p><p className="mt-3"><Link to="/guides/banned-dog-breeds-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">Check breed eligibility <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'Breed identification at UAE customs is primarily visual, and officers may refuse entry to any dog that resembles a banned type, even if it is not genetically that breed — and that decision is final at the port of entry. We strongly recommend a pre-travel breed assessment with clear photos, pedigree papers, and a veterinary breed-confirmation letter to support your case. Message us for a free breed assessment before you start the process.',
  },
  {
    category: 'dogs',
    question: 'Can I bring a banned breed if it is a service dog?',
    answer: <p>Service dogs are generally exempt from breed bans, but only if they are accredited by an internationally recognized organization such as ADI (Assistance Dogs International) or IGDF (International Guide Dog Federation). You must carry the accreditation certificate, service dog ID, and documentation confirming the dog is trained for a specific disability-related task. Emotional support animals do not qualify for this exemption.</p>,
    plain: 'Service dogs are generally exempt from breed bans, but only if they are accredited by an internationally recognized organization such as ADI (Assistance Dogs International) or IGDF (International Guide Dog Federation). You must carry the accreditation certificate, service dog ID, and documentation confirming the dog is trained for a specific disability-related task. Emotional support animals do not qualify for this exemption.',
  },
  {
    category: 'dogs',
    question: 'My dog is a flat-faced (brachycephalic) breed — can it still fly?',
    answer: <p>Brachycephalic breeds such as Bulldogs, French Bulldogs, Pugs, Boston Terriers, and Boxers are not banned from entering Dubai, but their flat faces and compromised airways make them far more vulnerable to heat stress. Many airlines ban them entirely from May 1 to September 30, and some carriers like Emirates have year-round restrictions or require one crate size larger and a veterinary fitness certificate. For these breeds, we plan moves for cooler months or use safer alternatives like a pet nanny.</p>,
    plain: 'Brachycephalic breeds such as Bulldogs, French Bulldogs, Pugs, Boston Terriers, and Boxers are not banned from entering Dubai, but their flat faces and compromised airways make them far more vulnerable to heat stress. Many airlines ban them entirely from May 1 to September 30, and some carriers like Emirates have year-round restrictions or require one crate size larger and a veterinary fitness certificate. For these breeds, we plan moves for cooler months or use safer alternatives like a pet nanny.',
  },
  {
    category: 'dogs',
    question: 'Can my dog be sedated for the flight?',
    answer: <p>Most airlines and veterinarians strongly advise against sedation for air travel. Sedation can impair your dog's ability to regulate body temperature and respond to stress at altitude. Airlines such as Etihad explicitly prohibit sedatives. Instead, we recommend crate training, natural calming aids, and choosing a pet-friendly airline. We provide guidance on preparing your dog for travel without sedation.</p>,
    plain: 'Most airlines and veterinarians strongly advise against sedation for air travel. Sedation can impair your dog\'s ability to regulate body temperature and respond to stress at altitude. Airlines such as Etihad explicitly prohibit sedatives. Instead, we recommend crate training, natural calming aids, and choosing a pet-friendly airline. We provide guidance on preparing your dog for travel without sedation.',
  },

  /* ─────────── CATS ─────────── */
  {
    category: 'cats',
    question: 'Are cats easier to relocate than dogs?',
    answer: <p>Generally yes. Cats are usually smaller, most breeds are not restricted, and they often handle crate travel well once acclimated. They also avoid the breed-ban eligibility check that complicates many dog relocations. However, cats are more sensitive to stress and environmental changes, so preparation — crate training, familiar scents, calming pheromones — is important.</p>,
    plain: 'Generally yes. Cats are usually smaller, most breeds are not restricted, and they often handle crate travel well once acclimated. They also avoid the breed-ban eligibility check that complicates many dog relocations. However, cats are more sensitive to stress and environmental changes, so preparation — crate training, familiar scents, calming pheromones — is important.',
  },
  {
    category: 'cats',
    question: 'Do cats need the same documents as dogs?',
    answer: <p>Yes. The MOCCAE import requirements are the same for cats and dogs: an ISO microchip, rabies vaccination, the FVRCP core vaccines (rather than the dog's DHPPIL), an international health certificate, antiparasitic treatment, and the import permit. High-risk origin countries also require the rabies titer test for cats. The main difference is that cats do not face breed bans, so the eligibility check is simpler.</p>,
    plain: 'Yes. The MOCCAE import requirements are the same for cats and dogs: an ISO microchip, rabies vaccination, the FVRCP core vaccines (rather than the dog\'s DHPPIL), an international health certificate, antiparasitic treatment, and the import permit. High-risk origin countries also require the rabies titer test for cats. The main difference is that cats do not face breed bans, so the eligibility check is simpler.',
  },
  {
    category: 'cats',
    question: 'Are any cat breeds restricted in the UAE?',
    answer: <p>Cats do not face the same breed bans as dogs, but Savannah cats and Bengal cats are restricted unless they are at least five generations removed from their wild ancestor in the pedigree. Flat-faced cat breeds such as Persians, Himalayans, Exotic Shorthairs, British Shorthairs, and Scottish Folds are not banned, but like brachycephalic dogs they face airline heat restrictions during the summer embargo. We confirm your cat's eligibility before you start.</p>,
    plain: 'Cats do not face the same breed bans as dogs, but Savannah cats and Bengal cats are restricted unless they are at least five generations removed from their wild ancestor in the pedigree. Flat-faced cat breeds such as Persians, Himalayans, Exotic Shorthairs, British Shorthairs, and Scottish Folds are not banned, but like brachycephalic dogs they face airline heat restrictions during the summer embargo. We confirm your cat\'s eligibility before you start.',
  },
  {
    category: 'cats',
    question: 'Can my cat travel in the cabin?',
    answer: <p>No, not to Dubai. Like dogs, cats entering Dubai must travel as manifest cargo and cannot fly in the cabin or as checked baggage. The cargo hold on modern aircraft is pressurized and climate-controlled to 18–24°C, which is safe. We check the specific policy for your route and advise on the best, calmest option for your cat.</p>,
    plain: 'No, not to Dubai. Like dogs, cats entering Dubai must travel as manifest cargo and cannot fly in the cabin or as checked baggage. The cargo hold on modern aircraft is pressurized and climate-controlled to 18–24°C, which is safe. We check the specific policy for your route and advise on the best, calmest option for your cat.',
  },
  {
    category: 'cats',
    question: 'How can I keep my cat calm during the move?',
    answer: <p>Cats are sensitive to stress, so preparation matters. Start crate familiarization 2–3 weeks ahead (longer for anxious cats), feed meals inside the carrier, and add a familiar blanket or a worn T-shirt with your scent. Calming pheromone sprays can help, but sedation is not recommended for air travel. Keeping the journey as direct as possible and avoiding the summer heat months also reduces stress.</p>,
    plain: 'Cats are sensitive to stress, so preparation matters. Start crate familiarization 2–3 weeks ahead (longer for anxious cats), feed meals inside the carrier, and add a familiar blanket or a worn T-shirt with your scent. Calming pheromone sprays can help, but sedation is not recommended for air travel. Keeping the journey as direct as possible and avoiding the summer heat months also reduces stress.',
  },

  /* ─────────── EMERGENCY ─────────── */
  {
    category: 'emergency',
    question: 'I need to move my pet during the summer embargo — what are my options?',
    answer: <><p>If the travel date falls in the May 1 to September 30 heat window, the airline decides whether cargo is accepted that day. Options that sometimes exist are an early cargo slot, a routing the carrier still operates, a person travelling with a pet the airline will accept in the cabin, boarding until the window opens, or a charter quoted before anyone books it. Each of those is priced for that pet and that date. None of them is a published package on this page.</p><p className="mt-3"><Link to="/guides/pet-travel-summer-dubai/" className="text-[#4F5BD5] font-semibold hover:underline inline-flex items-center gap-1">See the summer travel guide <ArrowRight className="w-3.5 h-3.5" /></Link></p></>,
    plain: 'If the travel date falls in the May 1 to September 30 heat window, the airline decides whether cargo is accepted that day. Options that sometimes exist are an early cargo slot, a routing the carrier still operates, a person travelling with a pet the airline will accept in the cabin, boarding until the window opens, or a charter quoted before anyone books it. Each of those is priced for that pet and that date. None of them is a published package on this page.',
  },
  {
    category: 'emergency',
    question: 'My flight was cancelled and my pet is stuck — what happens now?',
    answer: <p>If a flight is cancelled, the pet needs a safe place to wait and a new cargo booking that still fits the health certificate and, for an import, the 90-day permit. Boarding is arranged when the route needs it, and the cost is confirmed before it is booked. PawVIP includes contingency planning. It does not include a fixed number of free boarding days.</p>,
    plain: 'If a flight is cancelled, the pet needs a safe place to wait and a new cargo booking that still fits the health certificate and, for an import, the 90-day permit. Boarding is arranged when the route needs it, and the cost is confirmed before it is booked. PawVIP includes contingency planning. It does not include a fixed number of free boarding days.',
  },
  {
    category: 'emergency',
    question: 'My pet was refused entry at customs — what can be done?',
    answer: <p>Refusal at the port of entry is almost always caused by a documentation problem — a microchip number mismatch, an expired vaccine, a missing titer test, or a dog that resembles a banned breed. A pet with incomplete or incorrect documents can be refused entry, confiscated, or re-exported at the owner's expense, and breed decisions at the port are final. The file is checked against the current list before travel. If you are facing a refusal, message us immediately so we can work through the specific reason and the available options.</p>,
    plain: 'Refusal at the port of entry is almost always caused by a documentation problem — a microchip number mismatch, an expired vaccine, a missing titer test, or a dog that resembles a banned breed. A pet with incomplete or incorrect documents can be refused entry, confiscated, or re-exported at the owner\'s expense, and breed decisions at the port are final. The file is checked against the current list before travel. If you are facing a refusal, message us immediately so we can work through the specific reason and the available options.',
  },
  {
    category: 'emergency',
    question: 'My MOCCAE permit will expire before I can travel — what do I do?',
    answer: <p>MOCCAE import permits are valid for 90 days from issuance. If your permit will expire before travel, you must submit a new application and pay the current portal fee again. We track permit expiry dates against your travel timeline and set reminders for reapplication, so a permit lapse should never come as a surprise. If a delay has put your permit at risk, contact us and we will coordinate the renewal alongside your new travel date.</p>,
    plain: 'MOCCAE import permits are valid for 90 days from issuance. If your permit will expire before travel, you must submit a new application and pay the current portal fee again. We track permit expiry dates against your travel timeline and set reminders for reapplication, so a permit lapse should never come as a surprise. If a delay has put your permit at risk, contact us and we will coordinate the renewal alongside your new travel date.',
  },
  {
    category: 'emergency',
    question: 'How fast can you respond if I have an urgent pet relocation problem?',
    answer: <p>We reply on WhatsApp during published hours: Sunday to Thursday, 9:00 AM to 6:00 PM GST. Friday and Saturday are limited and by appointment. For an urgent situation — a cancelled flight, a customs hold, a document that is about to expire, or a fixed move date — send your pet's details, route, and the exact problem. The earlier you reach out during those hours, the more options there are.</p>,
    plain: 'We reply on WhatsApp during published hours: Sunday to Thursday, 9:00 AM to 6:00 PM GST. Friday and Saturday are limited and by appointment. For an urgent situation — a cancelled flight, a customs hold, a document that is about to expire, or a fixed move date — send your pet\'s details, route, and the exact problem. The earlier you reach out during those hours, the more options there are.',
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.plain,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq/` },
    ],
  }

  return (
    <div>
      <SEOHead
        meta={{
          title: 'Pet Relocation Dubai FAQ | Planning Your Move',
          description: 'Find answers about pet relocation services, documents, travel planning, costs and booking. Follow detailed guides for route-specific requirements.',
          canonical: `${BASE_URL}/faq/`,
          ogType: 'website',
        }}
        schemas={[faqSchema, breadcrumbSchema]}
      />

      <Breadcrumb items={[{ label: 'FAQ' }]} />
<div className="mx-auto max-w-[900px] px-5"><LinkPlanSlot path="/faq/" slot="after-service" />
<LinkPlanSlot path="/faq/" slot="specialist" /></div>

      {/* ═══════════ HERO ═══════════ */}
      <Hero
        image="/images/faq-hero.jpg"
        imageAlt="A golden retriever beside pet relocation documents and a checklist, representing clear answers"
        eyebrow="FAQ"
        title="Pet relocation questions answered"
        subtitle="Browse answers by category or search your specific question. Can't find it? WhatsApp us during published hours: Sunday to Thursday, 9:00 AM to 6:00 PM GST."
      />

      {/* ═══════════ CATEGORY FILTERS ═══════════ */}
      <section className="bg-[#F5F6FD] section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative max-w-lg mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-[12px] border border-[#E2E5F6] bg-white text-sm text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#4F5BD5]/30 focus:border-[#4F5BD5]"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === 'all' ? 'bg-[#4F5BD5] text-white' : 'bg-white text-[#5A5A5A] hover:bg-[#4F5BD5]/5'}`}
            >
              All Questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id ? 'bg-[#4F5BD5] text-white' : 'bg-white text-[#5A5A5A] hover:bg-[#4F5BD5]/5'}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[#8A8A8A] text-base mb-4">No questions found matching your search.</p>
                <WhatsAppCta
                  text={CTA_SCOPED_QUOTE}
                  message={WA_ELIGIBILITY_DEFAULT}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════ RELATED LINKS ═══════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2A2A2A] mb-3">
              Still Have Questions? Explore Our Guides
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed max-w-2xl mx-auto">
              Our detailed guides cover specific topics in depth. Click through to learn more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/guides/uae-pet-import-requirements/', label: 'Import Requirements Guide', icon: FileText, desc: 'Step-by-step checklist for bringing pets to Dubai' },
              { to: '/guides/pet-relocation-cost-dubai/', label: 'Cost Guide', icon: DollarSign, desc: 'Transparent breakdown of all relocation costs' },
              { to: '/dog-relocation-to-dubai/', label: 'Dog Relocation', icon: Dog, desc: 'Breed rules, crate sizing, and airline policies' },
              { to: '/cat-relocation-to-dubai/', label: 'Cat Relocation', icon: Cat, desc: 'Sedation guidance, stress reduction, and travel tips' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-start gap-4 p-5 bg-[#F5F6FD] rounded-[20px] hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#E9ECFB] flex items-center justify-center shrink-0">
                  <link.icon className="w-5 h-5 text-[#4F5BD5]" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A2A2A] group-hover:text-[#4F5BD5] transition-colors text-sm">{link.label}</p>
                  <p className="text-xs text-[#8A8A8A] mt-1">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="bg-[#4F5BD5] section-padding">
        <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4">
            Didn't Find Your Answer?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            We explain the next step before any paid work starts. WhatsApp is for a quote after we know the pet and corridor.
          </p>
          <WhatsAppCta
            text={CTA_SCOPED_QUOTE}
            message={WA_ELIGIBILITY_DEFAULT}
          />
        </div>
      </section>
    </div>
  )
}
