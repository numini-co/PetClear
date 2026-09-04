import type { OfficialSource } from '../../types/routePage.ts'

export interface CountryMeta {
  name: string
  adjective: string
  fromPhrase: string
  toPhrase: string
}

export const COUNTRY_META: Record<string, CountryMeta> = {
  australia: { name: 'Australia', adjective: 'Australian', fromPhrase: 'from Australia', toPhrase: 'to Australia' },
  bahrain: { name: 'Bahrain', adjective: 'Bahraini', fromPhrase: 'from Bahrain', toPhrase: 'to Bahrain' },
  canada: { name: 'Canada', adjective: 'Canadian', fromPhrase: 'from Canada', toPhrase: 'to Canada' },
  china: { name: 'China', adjective: 'Chinese', fromPhrase: 'from China', toPhrase: 'to China' },
  egypt: { name: 'Egypt', adjective: 'Egyptian', fromPhrase: 'from Egypt', toPhrase: 'to Egypt' },
  france: { name: 'France', adjective: 'French', fromPhrase: 'from France', toPhrase: 'to France' },
  germany: { name: 'Germany', adjective: 'German', fromPhrase: 'from Germany', toPhrase: 'to Germany' },
  'hong-kong': { name: 'Hong Kong', adjective: 'Hong Kong', fromPhrase: 'from Hong Kong', toPhrase: 'to Hong Kong' },
  india: { name: 'India', adjective: 'Indian', fromPhrase: 'from India', toPhrase: 'to India' },
  indonesia: { name: 'Indonesia', adjective: 'Indonesian', fromPhrase: 'from Indonesia', toPhrase: 'to Indonesia' },
  ireland: { name: 'Ireland', adjective: 'Irish', fromPhrase: 'from Ireland', toPhrase: 'to Ireland' },
  italy: { name: 'Italy', adjective: 'Italian', fromPhrase: 'from Italy', toPhrase: 'to Italy' },
  japan: { name: 'Japan', adjective: 'Japanese', fromPhrase: 'from Japan', toPhrase: 'to Japan' },
  kuwait: { name: 'Kuwait', adjective: 'Kuwaiti', fromPhrase: 'from Kuwait', toPhrase: 'to Kuwait' },
  malaysia: { name: 'Malaysia', adjective: 'Malaysian', fromPhrase: 'from Malaysia', toPhrase: 'to Malaysia' },
  netherlands: { name: 'the Netherlands', adjective: 'Dutch', fromPhrase: 'from the Netherlands', toPhrase: 'to the Netherlands' },
  'new-zealand': { name: 'New Zealand', adjective: 'New Zealand', fromPhrase: 'from New Zealand', toPhrase: 'to New Zealand' },
  oman: { name: 'Oman', adjective: 'Omani', fromPhrase: 'from Oman', toPhrase: 'to Oman' },
  pakistan: { name: 'Pakistan', adjective: 'Pakistani', fromPhrase: 'from Pakistan', toPhrase: 'to Pakistan' },
  philippines: { name: 'the Philippines', adjective: 'Philippine', fromPhrase: 'from the Philippines', toPhrase: 'to the Philippines' },
  qatar: { name: 'Qatar', adjective: 'Qatari', fromPhrase: 'from Qatar', toPhrase: 'to Qatar' },
  'saudi-arabia': { name: 'Saudi Arabia', adjective: 'Saudi', fromPhrase: 'from Saudi Arabia', toPhrase: 'to Saudi Arabia' },
  singapore: { name: 'Singapore', adjective: 'Singapore', fromPhrase: 'from Singapore', toPhrase: 'to Singapore' },
  'south-africa': { name: 'South Africa', adjective: 'South African', fromPhrase: 'from South Africa', toPhrase: 'to South Africa' },
  'south-korea': { name: 'South Korea', adjective: 'Korean', fromPhrase: 'from South Korea', toPhrase: 'to South Korea' },
  spain: { name: 'Spain', adjective: 'Spanish', fromPhrase: 'from Spain', toPhrase: 'to Spain' },
  thailand: { name: 'Thailand', adjective: 'Thai', fromPhrase: 'from Thailand', toPhrase: 'to Thailand' },
  turkey: { name: 'Turkey', adjective: 'Turkish', fromPhrase: 'from Turkey', toPhrase: 'to Turkey' },
}

export const DESTINATION_SOURCES: Record<string, OfficialSource[]> = {
  australia: [
    { label: 'Australia DAFF — cats and dogs import', href: 'https://www.agriculture.gov.au/biosecurity-trade/cats-dogs' },
  ],
  canada: [
    { label: 'CFIA — bringing pets to Canada', href: 'https://inspection.canada.ca/en/animal-health/terrestrial-animals/pet-imports' },
  ],
  china: [
    { label: 'China Customs — travellers with animals', href: 'http://english.customs.gov.cn' },
  ],
  egypt: [
    { label: 'Egypt GOVS — veterinary services', href: 'https://www.lrid.gov.eg' },
  ],
  france: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  germany: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  'hong-kong': [
    { label: 'Hong Kong AFCD — importing pets', href: 'https://www.afcd.gov.hk/english/quarantine/qua_ie/qua_ie.html' },
  ],
  india: [
    { label: 'India DAHD / AQCS pet import guidance', href: 'https://dahd.gov.in' },
  ],
  indonesia: [
    { label: 'Indonesia agricultural quarantine (Barantan)', href: 'https://karantina.pertanian.go.id' },
  ],
  ireland: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  italy: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  japan: [
    { label: 'Japan AQS — importing dogs and cats', href: 'https://www.maff.go.jp/aqs/english/animal/dog/import-other.html' },
  ],
  kuwait: [
    { label: 'Kuwait PAAFR — livestock and veterinary', href: 'https://www.paaf.gov.kw' },
  ],
  malaysia: [
    { label: 'Malaysia DVS — animal import', href: 'https://www.dvs.gov.my' },
  ],
  netherlands: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  'new-zealand': [
    { label: 'New Zealand MPI — importing cats and dogs', href: 'https://www.mpi.govt.nz/import/animals-animal-products-and-live-animals/cats-and-dogs/' },
  ],
  oman: [
    { label: 'Oman MAFWR — veterinary quarantine', href: 'https://www.maf.gov.om' },
  ],
  pakistan: [
    { label: 'Pakistan Ministry of National Food Security — animal quarantine', href: 'https://www.mnfsr.gov.pk' },
  ],
  philippines: [
    { label: 'Philippines BAI — pet import (SPSIC)', href: 'https://www.bai.gov.ph/Stakeholders/PetImport' },
  ],
  qatar: [
    { label: 'Qatar MoECC — environment and climate change', href: 'https://www.mecc.gov.qa' },
  ],
  'saudi-arabia': [
    { label: 'Saudi MEWA — pet import mechanism', href: 'https://www.mewa.gov.sa' },
  ],
  singapore: [
    { label: 'Singapore NParks / AVS — bringing pets into Singapore', href: 'https://www.nparks.gov.sg/avs/pets/bringing-animals-into-singapore/bringing-pets-into-singapore' },
  ],
  'south-africa': [
    { label: 'South Africa DALRRD — animal health', href: 'https://www.dalrrd.gov.za' },
  ],
  'south-korea': [
    { label: 'Korea APQA — animal quarantine', href: 'https://www.qia.go.kr/english/html/index.jsp' },
  ],
  spain: [
    { label: 'EU — non-commercial pet movement from non-EU countries', href: 'https://food.ec.europa.eu/animals/movement-pets/eu-legislation/non-commercial-movement-non-eu-countries_en' },
  ],
  thailand: [
    { label: 'Thailand DLW — animal quarantine', href: 'https://www.dld.go.th' },
  ],
  turkey: [
    { label: 'Türkiye Ministry of Agriculture — veterinary border', href: 'https://www.tarimorman.gov.tr' },
  ],
}

export function heroPathForSlug(slug: string): string {
  return `/assets/route-heroes/route-${slug}-dog-flag-hero.jpg`
}

export function titleCaseCountry(countryKey: string): string {
  const meta = COUNTRY_META[countryKey]
  if (!meta) return countryKey
  if (meta.name.startsWith('the ')) {
    return meta.name.slice(4, 5).toUpperCase() + meta.name.slice(5)
  }
  return meta.name
}

export function hubTitle(slug: string, countryKey: string, direction: 'inbound' | 'outbound'): string {
  const display = titleCaseCountry(countryKey)
  return direction === 'inbound' ? `${display} to Dubai` : `Dubai to ${display}`
}
