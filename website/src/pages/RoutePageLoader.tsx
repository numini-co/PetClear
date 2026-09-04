import { useParams } from 'react-router-dom'
import RoutePage from '../components/RoutePage.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import { getRoute50 } from '../data/routes/registry.ts'
import { LIVE_ROUTE_SLUGS } from '../data/routes/lockedSlugs.ts'

const LIVE = new Set<string>(LIVE_ROUTE_SLUGS)

export default function RoutePageLoader() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug || LIVE.has(slug)) return <NotFoundPage />
  const data = getRoute50(slug)
  if (!data) return <NotFoundPage />
  return <RoutePage data={data} />
}
