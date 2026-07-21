import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.tsx'

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found — Dubai Pet Relocation"
        description="The page you are looking for does not exist. Return to Dubai Pet Relocation for expert pet relocation guidance."
        noindex
      />
      <main className="min-h-[60vh] flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-bold text-[#4F5BD5] mb-4">404</p>
          <h1 className="text-3xl font-bold text-[#1F2347] mb-4">Page not found</h1>
          <p className="text-[#5A5A5A] mb-8">
            We couldn't find the page you were looking for. It may have been moved, renamed, or removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F5BD5] text-white rounded-xl font-semibold text-sm hover:bg-[#3a45a5] transition-colors"
          >
            Return to homepage
          </Link>
        </div>
      </main>
    </>
  )
}
