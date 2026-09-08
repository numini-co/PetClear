import { MessageCircle, CheckCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../lib/seo.ts'

const POINTS = [
  'Your WhatsApp is answered by real people — not a bot.',
  'We check every document line by line before it’s submitted.',
  'We brief the handlers personally on your pet’s needs.',
  'You get updates at every step, through to safe arrival.',
]

const GALLERY = [
  { src: '/images/support-handler.jpg', caption: 'Calm, trained handling' },
  { src: '/images/support-consult.jpg', caption: 'Real-time WhatsApp support' },
  { src: '/images/owner-reunion.jpg', caption: 'Safe arrival, happy reunion' },
]

// Humanises the brand: a real support team and people, not just pet photos.
export default function TeamSupport() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#4F5BD5]">Real People, Real Support</span>
            <h2 className="text-section mt-3 mb-4">You’re never handing your pet to a faceless system</h2>
            <p className="text-body-large mb-6 max-w-xl">
              Behind every booking is a real team — answering your messages, checking your paperwork,
              briefing the handlers, and staying with you from the first question to a safe arrival.
            </p>
            <ul className="mb-8 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#2A2A2A]">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4F5BD5]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl('Hi Dubai Pet Relocation! I’d like to speak to your team about my pet’s move.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" /> Talk to a Real Person
            </a>
          </div>
          <div>
            <img
              src="/images/team-support.jpg"
              alt="Pet relocation coordinators reviewing travel paperwork with a calm dog nearby"
              width={1280}
              height={854}
              loading="lazy"
              className="h-[320px] w-full rounded-[28px] object-cover shadow-md lg:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {GALLERY.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-[20px] border border-[#E6E8F5]">
              <img src={g.src} alt={g.caption} width={1280} height={854} loading="lazy" className="h-48 w-full object-cover" />
              <figcaption className="bg-[#F8F9FE] px-4 py-3 text-sm font-semibold text-[#2A2A2A]">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
