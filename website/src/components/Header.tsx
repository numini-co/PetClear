import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ChevronDown, Phone, PawPrint } from 'lucide-react'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_E164 } from '../lib/seo.ts'

const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    children: [
      { label: 'How It Works', to: '/how-it-works/' },
      { label: 'Dog Relocation', to: '/dog-relocation-to-dubai/' },
      { label: 'Cat Relocation', to: '/cat-relocation-to-dubai/' },
      { label: 'Our Services', to: '/services/' },
    ],
  },
  {
    label: 'Guides',
    children: [
      { label: 'All Guides', to: '/guides/' },
      { label: 'Cost Guide', to: '/guides/pet-relocation-cost-dubai/' },
      { label: 'Import Requirements', to: '/guides/uae-pet-import-requirements/' },
      { label: 'Banned Breeds', to: '/guides/banned-dog-breeds-dubai/' },
      { label: 'IATA Crate Rules', to: '/guides/iata-pet-crate-requirements/' },
      { label: 'Summer Travel', to: '/guides/pet-travel-summer-dubai/' },
      { label: 'MOCCAE Permit', to: '/guides/moccae-import-permit/' },
      { label: 'Rabies Titer Test', to: '/guides/rabies-titer-test-dubai/' },
    ],
  },
  {
    label: 'Routes',
    children: [
      { label: 'All Routes', to: '/routes/' },
      { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
      { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
      { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
      { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
      { label: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/' },
      { label: 'Canada to Dubai', to: '/routes/canada-to-dubai/' },
      { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
      { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
    ],
  },
  {
    label: 'Cities',
    children: [
      { label: 'All Emirates', to: '/cities/' },
      { label: 'Dubai Communities', to: '/dubai/' },
      { label: 'Abu Dhabi', to: '/cities/abu-dhabi/' },
    ],
  },
  { label: 'About', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
  { label: 'FAQ', to: '/faq/' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileGroup, setMobileGroup] = useState<string | null>(null)
  const { pathname } = useLocation()

  const isActive = (to: string) => pathname === to || (to !== '/' && pathname.startsWith(to))

  const closeMobile = () => {
    setMenuOpen(false)
    setMobileGroup(null)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo — compact */}
          <Link to="/" className="flex shrink-0 items-center gap-1.5 lg:gap-1.5" onClick={closeMobile}>
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#3A45B0] lg:h-5 lg:w-5">
              <PawPrint className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="whitespace-nowrap text-base font-bold text-[#3A45B0] lg:text-sm">
              Dubai Pet Relocation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenDropdown(null)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setOpenDropdown(null)
                  }}
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      link.children.some((c) => isActive(c.to))
                        ? 'bg-[#E9ECFB] text-[#3A45B0]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#3A45B0]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {/* Wrapper touches the button (top-full) with pt-2 visual gap → no hover dead-zone */}
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 pt-2">
                      <div className="w-56 animate-[ddIn_120ms_ease-out] rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(child.to)
                                ? 'bg-[#E9ECFB] font-medium text-[#3A45B0]'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#3A45B0]'
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-[#E9ECFB] text-[#3A45B0]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#3A45B0]'
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={getWhatsAppUrl('Hi, I need help with pet relocation to Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — sub-menus collapsed, tap to expand */}
      {menuOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileGroup(mobileGroup === link.label ? null : link.label)}
                    aria-expanded={mobileGroup === link.label}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${mobileGroup === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileGroup === link.label && (
                    <div className="space-y-0.5 pb-2 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive(child.to)
                              ? 'bg-[#E9ECFB] font-medium text-[#3A45B0]'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-[#3A45B0]'
                          }`}
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive(link.to)
                      ? 'bg-[#E9ECFB] text-[#3A45B0]'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[#3A45B0]'
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="space-y-2 border-t border-gray-100 pt-3">
              <a
                href={getWhatsAppUrl('Hi, I need help with pet relocation to Dubai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
      <style>{`@keyframes ddIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </header>
  )
}
