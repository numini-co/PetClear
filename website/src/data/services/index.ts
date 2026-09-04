import type { ServicePageData } from '../../types/servicePage.ts'
import petRelocationDubai from './petRelocationDubai.ts'
import petImportDubai from './petImportDubai.ts'
import petExportDubai from './petExportDubai.ts'
import petTransportDubai from './petTransportDubai.ts'
import internationalPetRelocation from './internationalPetRelocation.ts'
import petRelocationToDubai from './petRelocationToDubai.ts'
import petRelocationFromDubai from './petRelocationFromDubai.ts'
import dogRelocationDubai from './dogRelocationDubai.ts'
import catRelocationDubai from './catRelocationDubai.ts'
import moccaePetPermit from './moccaePetPermit.ts'
import privateJetPetTravel from './privateJetPetTravel.ts'
import sharedPetCharter from './sharedPetCharter.ts'

// Registry of all /service/<slug>/ pages (Blue Book Phase 2).
export const servicePages: ServicePageData[] = [
  petRelocationDubai,
  petImportDubai,
  petExportDubai,
  petTransportDubai,
  internationalPetRelocation,
  petRelocationToDubai,
  petRelocationFromDubai,
  dogRelocationDubai,
  catRelocationDubai,
  moccaePetPermit,
  privateJetPetTravel,
  sharedPetCharter,
]
