// Single source of truth for cross-site internal links (footer + in-content blocks).

export interface NavLink {
  label: string
  to: string
}

// All 10 core service pages — every landing page links to these.
export const SERVICE_LINKS: NavLink[] = [
  { label: 'Pet Relocation Dubai', to: '/service/pet-relocation-dubai/' },
  { label: 'Pet Import to Dubai', to: '/service/pet-import-dubai/' },
  { label: 'Pet Export from Dubai', to: '/service/pet-export-dubai/' },
  { label: 'Pet Transport Dubai', to: '/service/pet-transport-dubai/' },
  { label: 'International Pet Relocation', to: '/service/international-pet-relocation/' },
  { label: 'Pet Relocation to Dubai', to: '/service/pet-relocation-to-dubai/' },
  { label: 'Pet Relocation from Dubai', to: '/service/pet-relocation-from-dubai/' },
  { label: 'Dog Relocation Dubai', to: '/service/dog-relocation-dubai/' },
  { label: 'Cat Relocation Dubai', to: '/service/cat-relocation-dubai/' },
  { label: 'MOCCAE Pet Permit', to: '/service/moccae-pet-permit/' },
]

export const TOP_AREA_LINKS: NavLink[] = [
  { label: 'All Emirates', to: '/cities/' },
  { label: 'Dubai Communities', to: '/dubai/' },
  { label: 'Abu Dhabi City Guide', to: '/cities/abu-dhabi/' },
  { label: 'Dubai Marina', to: '/dubai/dubai-marina/' },
  { label: 'Jumeirah', to: '/dubai/jumeirah/' },
  { label: 'Downtown Dubai', to: '/dubai/downtown-dubai/' },
  { label: 'Palm Jumeirah', to: '/dubai/palm-jumeirah/' },
  { label: 'Business Bay', to: '/dubai/business-bay/' },
  { label: 'Arabian Ranches', to: '/dubai/arabian-ranches/' },
  { label: 'JVC', to: '/dubai/jvc/' },
  { label: 'All Dubai Areas', to: '/dubai/' },
]

export const GUIDE_LINKS: NavLink[] = [
  { label: 'Cost Guide', to: '/guides/pet-relocation-cost-dubai/' },
  { label: 'Import Requirements', to: '/guides/uae-pet-import-requirements/' },
  { label: 'Banned Dog Breeds', to: '/guides/banned-dog-breeds-dubai/' },
  { label: 'IATA Crate Rules', to: '/guides/iata-pet-crate-requirements/' },
  { label: 'MOCCAE Permit', to: '/guides/moccae-import-permit/' },
  { label: 'Rabies Titer Test', to: '/guides/rabies-titer-test-dubai/' },
  { label: 'Summer Travel', to: '/guides/pet-travel-summer-dubai/' },
]

export const ROUTE_LINKS: NavLink[] = [
  { label: 'All Routes', to: '/routes/' },
  { label: 'UK to Dubai', to: '/routes/uk-to-dubai/' },
  { label: 'USA to Dubai', to: '/routes/usa-to-dubai/' },
  { label: 'India to Dubai', to: '/routes/india-to-dubai/' },
  { label: 'Australia to Dubai', to: '/routes/australia-to-dubai/' },
  { label: 'New Zealand to Dubai', to: '/routes/new-zealand-to-dubai/' },
  { label: 'Canada to Dubai', to: '/routes/canada-to-dubai/' },
  { label: 'South Africa to Dubai', to: '/routes/south-africa-to-dubai/' },
  { label: 'Philippines to Dubai', to: '/routes/philippines-to-dubai/' },
  { label: 'Dubai to UK', to: '/routes/dubai-to-uk/' },
  { label: 'Dubai to USA', to: '/routes/dubai-to-usa/' },
]

export const COMPANY_LINKS: NavLink[] = [
  { label: 'How It Works', to: '/how-it-works/' },
  { label: 'About Us', to: '/about/' },
  { label: 'Contact', to: '/contact/' },
  { label: 'FAQ', to: '/faq/' },
  { label: 'Services', to: '/services/' },
]
