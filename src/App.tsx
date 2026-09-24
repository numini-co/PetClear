import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CostGuidePage from './pages/CostGuidePage'
import ImportRequirementsPage from './pages/ImportRequirementsPage'
import HowItWorksPage from './pages/HowItWorksPage'
import DogRelocationPage from './pages/DogRelocationPage'
import CatRelocationPage from './pages/CatRelocationPage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cost-guide" element={<CostGuidePage />} />
          <Route path="/import-requirements" element={<ImportRequirementsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/dog-relocation" element={<DogRelocationPage />} />
          <Route path="/cat-relocation" element={<CatRelocationPage />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  )
}

export default App
