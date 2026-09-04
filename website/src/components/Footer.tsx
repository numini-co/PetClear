import { Link } from 'react-router-dom'
import { PawPrint, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_E164 } from '../lib/seo.ts'
import { SERVICE_LINKS, TOP_AREA_LINKS, GUIDE_LINKS, ROUTE_LINKS, COMPANY_LINKS } from '../data/nav.ts'
import type { NavLink } from '../data/nav.ts'

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h3 className="font-semibold text-[13px] uppercase tracking-wider text-white/90 mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const legal: NavLink[] = [
    { label: 'Privacy Policy', to: '/privacy-policy/' },
    { label: 'Terms of Service', to: '/terms-of-service/' },
  ]
  return (
    <footer className="bg-[#1F2347] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#4F5BD5] flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Dubai Pet Relocation</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-xs">
              A transparent pet relocation coordination service for Dubai and the UAE. We guide you through MOCCAE requirements, vetted partners and door-to-door delivery.
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href={`tel:${PHONE_E164}`} className="group flex items-center gap-3 hover:text-white transition-colors">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors"><Phone className="h-4 w-4" /></span>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:hello@dubai-pet-relocation.ae" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors"><Mail className="h-4 w-4" /></span>
                  <span className="break-all">hello@dubai-pet-relocation.ae</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10"><MapPin className="h-4 w-4" /></span>
                <span>217 Zahra Townhouses, Town Square,<br />Dubai 00000, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10"><Clock className="h-4 w-4" /></span>
                Open daily · 9:00 AM – 8:00 PM
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <Column title="Services" links={SERVICE_LINKS} />
          <Column title="Dubai Areas" links={TOP_AREA_LINKS} />
          <Column title="Guides" links={GUIDE_LINKS} />
          <Column title="Routes" links={ROUTE_LINKS} />
        </div>

        {/* Company row */}
        <nav className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2">
          {COMPANY_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</Link>
          ))}
          <a href={getWhatsAppUrl('Hi, I have a question about pet relocation to Dubai.')} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl text-sm font-semibold hover:bg-[#1DA851] transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </nav>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-white/70 leading-relaxed max-w-4xl">
          <strong className="text-white/80">Disclaimer:</strong> Dubai Pet Relocation is a pet relocation coordination service — not a veterinary clinic, airline, or government agency. Veterinary, cargo and transport services are provided by independent licensed partners. Government fees (MOCCAE, customs, municipality) are passed through at cost. Please verify all documentation directly with MOCCAE and your airline before travel.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Dubai Pet Relocation. All rights reserved. Dubai, UAE.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            {legal.map((l) => <Link key={l.to} to={l.to} className="hover:text-white transition-colors">{l.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
