import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import WhatsAppLeadGate from './WhatsAppLeadGate'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F6FD]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#3A45B0] focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-36 sm:pb-0">
        {children || <Outlet />}
      </main>
      <Footer />
      <WhatsAppButton variant="sticky" />
      <WhatsAppButton variant="floating" />
      <WhatsAppLeadGate />
    </div>
  )
}
