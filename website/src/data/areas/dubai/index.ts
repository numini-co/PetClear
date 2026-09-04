import type { AreaPageData } from '../../../types/areaPage.ts'
// P0
import dubaiMarina from './dubaiMarina.ts'
import jumeirah from './jumeirah.ts'
import jbr from './jbr.ts'
import downtownDubai from './downtownDubai.ts'
import palmJumeirah from './palmJumeirah.ts'
import businessBay from './businessBay.ts'
import alBarsha from './alBarsha.ts'
import arabianRanches from './arabianRanches.ts'
import mirdif from './mirdif.ts'
// P1
import dubaiSiliconOasis from './dubaiSiliconOasis.ts'
import jlt from './jlt.ts'
import jvc from './jvc.ts'
import jvt from './jvt.ts'
import dubaiHills from './dubaiHills.ts'
import dubaiSouth from './dubaiSouth.ts'
import alQuoz from './alQuoz.ts'
import deira from './deira.ts'
import burDubai from './burDubai.ts'
import alSatwa from './alSatwa.ts'
import ummSuqeim from './ummSuqeim.ts'
// P2
import creekHarbour from './creekHarbour.ts'
import mudon from './mudon.ts'
import victoryHeights from './victoryHeights.ts'
import sportsCity from './sportsCity.ts'
import motorCity from './motorCity.ts'
import dubaiInvestmentPark from './dubaiInvestmentPark.ts'
import dubaiProductionCity from './dubaiProductionCity.ts'
import alFurjan from './alFurjan.ts'
import damacHills from './damacHills.ts'
import damacHills2 from './damacHills2.ts'
import emaarSouth from './emaarSouth.ts'
import dubailand from './dubailand.ts'
import meydan from './meydan.ts'

// Live /dubai/<slug>/ area pages. Merged communities redirect (see App.tsx + vercel.json):
// karama→bur-dubai, bluewaters→jbr, port-de-la-mer→jumeirah, city-walk→downtown-dubai,
// international-city→dubai-silicon-oasis, al-wasl→umm-suqeim, sheikh-zayed-road→/dubai/.
export const dubaiAreas: AreaPageData[] = [
  dubaiMarina, jumeirah, jbr, downtownDubai, palmJumeirah, businessBay, alBarsha, arabianRanches, mirdif,
  dubaiSiliconOasis, jlt, jvc, jvt, dubaiHills, dubaiSouth, alQuoz, deira, burDubai,
  alSatwa, ummSuqeim,
  creekHarbour, mudon, victoryHeights, sportsCity, motorCity,
  dubaiInvestmentPark, dubaiProductionCity, alFurjan, damacHills, damacHills2, emaarSouth, dubailand, meydan,
]
