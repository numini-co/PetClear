import { lazy } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Layout from './components/Layout.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

// Core pages (V1)
const HomePage = lazy(() => import('./pages/HomePage.tsx'))
const CostGuidePage = lazy(() => import('./pages/CostGuidePage.tsx'))
const ImportRequirementsPage = lazy(() => import('./pages/ImportRequirementsPage.tsx'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.tsx'))
const DogRelocationPage = lazy(() => import('./pages/DogRelocationPage.tsx'))
const CatRelocationPage = lazy(() => import('./pages/CatRelocationPage.tsx'))

// Core pages (V2 - Month 1)
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'))
const FAQPage = lazy(() => import('./pages/FAQPage.tsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.tsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.tsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.tsx'))

// Route pages (V2 - Month 1)
const UKToDubai = lazy(() => import('./pages/UKToDubai.tsx'))
const USAToDubai = lazy(() => import('./pages/USAToDubai.tsx'))
const IndiaToDubai = lazy(() => import('./pages/IndiaToDubai.tsx'))
const AustraliaToDubai = lazy(() => import('./pages/AustraliaToDubai.tsx'))
const PhilippinesToDubai = lazy(() => import('./pages/PhilippinesToDubai.tsx'))
const CanadaToDubai = lazy(() => import('./pages/CanadaToDubai.tsx'))
const NewZealandToDubai = lazy(() => import('./pages/NewZealandToDubai.tsx'))
const SouthAfricaToDubai = lazy(() => import('./pages/SouthAfricaToDubai.tsx'))
const DubaiToUK = lazy(() => import('./pages/DubaiToUK.tsx'))
const DubaiToUSA = lazy(() => import('./pages/DubaiToUSA.tsx'))

// Guide pages (V2 - Month 1)
const BannedBreedsGuide = lazy(() => import('./pages/BannedBreedsGuide.tsx'))
const GuidesHub = lazy(() => import('./pages/GuidesHub.tsx'))
const IATACrateGuide = lazy(() => import('./pages/IATACrateGuide.tsx'))
const SummerTravelGuide = lazy(() => import('./pages/SummerTravelGuide.tsx'))
const MOCCAEPermitGuide = lazy(() => import('./pages/MOCCAEPermitGuide.tsx'))
const TiterTestGuide = lazy(() => import('./pages/TiterTestGuide.tsx'))
const PetFlightOptionsHub = lazy(() => import('./pages/PetFlightOptionsHub.tsx'))
const EtihadPetPolicyGuide = lazy(() => import('./pages/EtihadPetPolicyGuide.tsx'))
const PetAsCheckedBaggageGuide = lazy(() => import('./pages/PetAsCheckedBaggageGuide.tsx'))
const EmiratesPetCargoGuide = lazy(() => import('./pages/EmiratesPetCargoGuide.tsx'))

// City pages (V2 - Month 1)
const AbuDhabiCity = lazy(() => import('./pages/AbuDhabiCity.tsx'))
const RoutesHub = lazy(() => import('./pages/RoutesHub.tsx'))
const CitiesHub = lazy(() => import('./pages/CitiesHub.tsx'))

// Data-driven service pages (Blue Book Phase 2)
const ServicePage = lazy(() => import('./components/ServicePage.tsx'))
import { servicePages } from './data/services/index.ts'

// Dubai pillar + area pages (Blue Book Phase 3)
const AreaPage = lazy(() => import('./components/AreaPage.tsx'))
const DubaiPillar = lazy(() => import('./pages/DubaiPillar.tsx'))
import { dubaiAreas } from './data/areas/dubai/index.ts'

export default function App() {
  return (
    <>
    <Layout>
      <Routes>
          {/* Core V1 pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/guides/pet-relocation-cost-dubai/" element={<CostGuidePage />} />
          <Route path="/guides/uae-pet-import-requirements/" element={<ImportRequirementsPage />} />
          <Route path="/how-it-works/" element={<HowItWorksPage />} />
          <Route path="/dog-relocation-to-dubai/" element={<DogRelocationPage />} />
          <Route path="/cat-relocation-to-dubai/" element={<CatRelocationPage />} />

          {/* V1 redirects (for backwards compatibility) */}
          <Route path="/cost-guide" element={<CostGuidePage />} />
          <Route path="/import-requirements" element={<ImportRequirementsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/dog-relocation" element={<DogRelocationPage />} />
          <Route path="/cat-relocation" element={<CatRelocationPage />} />

          {/* Core V2 pages */}
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/faq/" element={<FAQPage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service/" element={<TermsOfService />} />

          {/* Route + city hubs (bare + trailing slash) */}
          <Route path="/routes" element={<RoutesHub />} />
          <Route path="/routes/" element={<RoutesHub />} />
          <Route path="/cities" element={<CitiesHub />} />
          <Route path="/cities/" element={<CitiesHub />} />

          {/* Merged URL redirects */}
          <Route path="/cities/dubai" element={<Navigate to="/dubai/" replace />} />
          <Route path="/cities/dubai/" element={<Navigate to="/dubai/" replace />} />
          <Route path="/dubai/karama" element={<Navigate to="/dubai/bur-dubai/" replace />} />
          <Route path="/dubai/karama/" element={<Navigate to="/dubai/bur-dubai/" replace />} />
          <Route path="/dubai/bluewaters" element={<Navigate to="/dubai/jbr/" replace />} />
          <Route path="/dubai/bluewaters/" element={<Navigate to="/dubai/jbr/" replace />} />
          <Route path="/dubai/port-de-la-mer" element={<Navigate to="/dubai/jumeirah/" replace />} />
          <Route path="/dubai/port-de-la-mer/" element={<Navigate to="/dubai/jumeirah/" replace />} />
          <Route path="/dubai/city-walk" element={<Navigate to="/dubai/downtown-dubai/" replace />} />
          <Route path="/dubai/city-walk/" element={<Navigate to="/dubai/downtown-dubai/" replace />} />
          <Route path="/dubai/international-city" element={<Navigate to="/dubai/dubai-silicon-oasis/" replace />} />
          <Route path="/dubai/international-city/" element={<Navigate to="/dubai/dubai-silicon-oasis/" replace />} />
          <Route path="/dubai/al-wasl" element={<Navigate to="/dubai/umm-suqeim/" replace />} />
          <Route path="/dubai/al-wasl/" element={<Navigate to="/dubai/umm-suqeim/" replace />} />
          <Route path="/dubai/sheikh-zayed-road" element={<Navigate to="/dubai/" replace />} />
          <Route path="/dubai/sheikh-zayed-road/" element={<Navigate to="/dubai/" replace />} />

          {/* Route pages */}
          <Route path="/routes/uk-to-dubai/" element={<UKToDubai />} />
          <Route path="/routes/usa-to-dubai/" element={<USAToDubai />} />
          <Route path="/routes/india-to-dubai/" element={<IndiaToDubai />} />
          <Route path="/routes/australia-to-dubai/" element={<AustraliaToDubai />} />
          <Route path="/routes/philippines-to-dubai/" element={<PhilippinesToDubai />} />
          <Route path="/routes/canada-to-dubai/" element={<CanadaToDubai />} />
          <Route path="/routes/new-zealand-to-dubai/" element={<NewZealandToDubai />} />
          <Route path="/routes/south-africa-to-dubai/" element={<SouthAfricaToDubai />} />
          <Route path="/routes/dubai-to-uk/" element={<DubaiToUK />} />
          <Route path="/routes/dubai-to-usa/" element={<DubaiToUSA />} />

          {/* Guide pages */}
          <Route path="/guides/" element={<GuidesHub />} />
          <Route path="/guides/banned-dog-breeds-dubai/" element={<BannedBreedsGuide />} />
          <Route path="/guides/iata-pet-crate-requirements/" element={<IATACrateGuide />} />
          <Route path="/guides/pet-travel-summer-dubai/" element={<SummerTravelGuide />} />
          <Route path="/guides/moccae-import-permit/" element={<MOCCAEPermitGuide />} />
          <Route path="/guides/rabies-titer-test-dubai/" element={<TiterTestGuide />} />
          <Route path="/guides/pet-flight-options-dubai/" element={<PetFlightOptionsHub />} />
          <Route path="/guides/etihad-pet-policy/" element={<EtihadPetPolicyGuide />} />
          <Route path="/guides/pet-as-checked-baggage/" element={<PetAsCheckedBaggageGuide />} />
          <Route path="/guides/emirates-pet-cargo/" element={<EmiratesPetCargoGuide />} />

          {/* City pages */}
          <Route path="/cities/abu-dhabi/" element={<AbuDhabiCity />} />

          {/* Service pages (data-driven, Blue Book Phase 2) */}
          {servicePages.map((p) => (
            <Route key={p.slug} path={`/service/${p.slug}/`} element={<ServicePage data={p} />} />
          ))}

          {/* Dubai pillar + area pages (Blue Book Phase 3) */}
          <Route path="/dubai/" element={<DubaiPillar />} />
          {dubaiAreas.map((a) => (
            <Route key={a.slug} path={`/dubai/${a.slug}/`} element={<AreaPage data={a} />} />
          ))}

          {/* 404 */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
