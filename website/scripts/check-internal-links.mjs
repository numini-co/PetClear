// Internal linking engine invariants. Run from website/:
//   node --experimental-strip-types scripts/check-internal-links.mjs
import { runInternalLinkChecks, areaPeerLinkCount, AREA_SERVICE_CHIPS } from '../src/data/internalLinks.ts'
import { dubaiAreas } from '../src/data/areas/dubai/index.ts'

const result = runInternalLinkChecks()
const areaStats = dubaiAreas.map((a) => {
  const path = `/dubai/${a.slug}/`
  const stats = areaPeerLinkCount(path)
  return { path, ...stats }
})
const maxPeers = Math.max(...areaStats.map((s) => s.peers))
const beforeMesh = dubaiAreas.length - 1

if (AREA_SERVICE_CHIPS.length > 4) {
  result.errors.push(`AREA_SERVICE_CHIPS is ${AREA_SERVICE_CHIPS.length}, cap is 4`)
  result.ok = false
}
if (maxPeers > 5) {
  result.errors.push(`area peer max ${maxPeers} exceeds 5`)
  result.ok = false
}

console.log(
  JSON.stringify(
    {
      ok: result.ok,
      errors: result.errors,
      areaPeerBeforeAfter: {
        beforeUniqueDubaiPeersInRelatedMesh: beforeMesh,
        afterMaxCuratedPeers: maxPeers,
        hubPlusNeighborsCap: 'hub + ≤5',
      },
      serviceChips: AREA_SERVICE_CHIPS.map((c) => c.to),
    },
    null,
    2,
  ),
)

if (!result.ok) process.exit(1)
