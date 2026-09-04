/**
 * Airports + airlines seed for Route50 — GENERATED from airports_airlines_seed.json
 * All airline rows start unverified. Do not treat as final policy.
 */

export type AirlineMode = 'cabin' | 'cargo' | 'cabin_or_cargo' | 'generally_not' | 'confirm'

export type AirportRow = { iata: string; city: string }
export type AirlineRow = {
  name: string
  mode: AirlineMode
  seedNotes: string
  verificationStatus: 'unverified' | 'verified'
  policyUrl?: string
}
export type CountryAirAir = { airports: AirportRow[]; airlines: AirlineRow[] }

export const UAE_AIRPORTS: AirportRow[] = [
  { iata: 'DXB', city: 'Dubai International' },
  { iata: 'DWC', city: 'Al Maktoum / Dubai World Central' },
  { iata: 'AUH', city: 'Abu Dhabi International' },
]

export const COUNTRY_AIR_AIR: Record<string, CountryAirAir> = {
  'australia': {
    airports: [
      { iata: 'SYD', city: "Sydney" },
      { iata: 'MEL', city: "Melbourne" },
      { iata: 'BNE', city: "Brisbane" },
      { iata: 'PER', city: "Perth" },
    ],
    airlines: [
      {
        name: "Qantas",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin limited)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Singapore Airlines",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Virgin Australia",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'bahrain': {
    airports: [
      { iata: 'BAH', city: "Bahrain" },
    ],
    airlines: [
      {
        name: "Gulf Air",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "flydubai",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'canada': {
    airports: [
      { iata: 'YYZ', city: "Toronto" },
      { iata: 'YVR', city: "Vancouver" },
      { iata: 'YUL', city: "Montreal" },
      { iata: 'YYC', city: "Calgary" },
    ],
    airlines: [
      {
        name: "Air Canada",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "WestJet",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'china': {
    airports: [
      { iata: 'PEK', city: "Beijing Capital" },
      { iata: 'PVG', city: "Shanghai Pudong" },
      { iata: 'CAN', city: "Guangzhou" },
      { iata: 'HKG', city: "via HK note" },
    ],
    airlines: [
      {
        name: "Air China",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "China Eastern",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Cathay Pacific",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'egypt': {
    airports: [
      { iata: 'CAI', city: "Cairo" },
      { iata: 'HBE', city: "Alexandria" },
      { iata: 'SSH', city: "Sharm el-Sheikh" },
    ],
    airlines: [
      {
        name: "EgyptAir",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'france': {
    airports: [
      { iata: 'CDG', city: "Paris Charles de Gaulle" },
      { iata: 'ORY', city: "Paris Orly" },
      { iata: 'LYS', city: "Lyon" },
      { iata: 'NCE', city: "Nice" },
    ],
    airlines: [
      {
        name: "Air France",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'germany': {
    airports: [
      { iata: 'FRA', city: "Frankfurt" },
      { iata: 'MUC', city: "Munich" },
      { iata: 'BER', city: "Berlin" },
      { iata: 'DUS', city: "D\u00fcsseldorf" },
    ],
    airlines: [
      {
        name: "Lufthansa",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Eurowings",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'hong-kong': {
    airports: [
      { iata: 'HKG', city: "Hong Kong" },
    ],
    airlines: [
      {
        name: "Cathay Pacific",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'india': {
    airports: [
      { iata: 'DEL', city: "Delhi" },
      { iata: 'BOM', city: "Mumbai" },
      { iata: 'BLR', city: "Bengaluru" },
      { iata: 'HYD', city: "Hyderabad" },
      { iata: 'MAA', city: "Chennai" },
    ],
    airlines: [
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: "DXB hub (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: "AUH (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Air India",
        mode: 'cabin_or_cargo',
        seedNotes: "confirm (seed: cargo/cabin varies)",
        verificationStatus: 'unverified',
      },
      {
        name: "IndiGo",
        mode: 'generally_not',
        seedNotes: "confirm (seed: generally not pets)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: "DOH (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'indonesia': {
    airports: [
      { iata: 'CGK', city: "Jakarta" },
      { iata: 'DPS', city: "Denpasar Bali" },
      { iata: 'SUB', city: "Surabaya" },
    ],
    airlines: [
      {
        name: "Garuda Indonesia",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Singapore Airlines",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'ireland': {
    airports: [
      { iata: 'DUB', city: "Dublin" },
      { iata: 'ORK', city: "Cork" },
    ],
    airlines: [
      {
        name: "Aer Lingus",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Ryanair",
        mode: 'generally_not',
        seedNotes: " (seed: generally not pets)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'italy': {
    airports: [
      { iata: 'FCO', city: "Rome Fiumicino" },
      { iata: 'MXP', city: "Milan Malpensa" },
      { iata: 'LIN', city: "Milan Linate" },
    ],
    airlines: [
      {
        name: "ITA Airways",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'japan': {
    airports: [
      { iata: 'NRT', city: "Tokyo Narita" },
      { iata: 'HND', city: "Tokyo Haneda" },
      { iata: 'KIX', city: "Osaka Kansai" },
    ],
    airlines: [
      {
        name: "ANA",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "JAL",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'kuwait': {
    airports: [
      { iata: 'KWI', city: "Kuwait" },
    ],
    airlines: [
      {
        name: "Kuwait Airways",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Jazeera",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'malaysia': {
    airports: [
      { iata: 'KUL', city: "Kuala Lumpur" },
      { iata: 'PEN', city: "Penang" },
    ],
    airlines: [
      {
        name: "Malaysia Airlines",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Singapore Airlines",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'netherlands': {
    airports: [
      { iata: 'AMS', city: "Amsterdam Schiphol" },
    ],
    airlines: [
      {
        name: "KLM",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'new-zealand': {
    airports: [
      { iata: 'AKL', city: "Auckland" },
      { iata: 'WLG', city: "Wellington" },
      { iata: 'CHC', city: "Christchurch" },
    ],
    airlines: [
      {
        name: "Air New Zealand",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qantas",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'oman': {
    airports: [
      { iata: 'MCT', city: "Muscat" },
    ],
    airlines: [
      {
        name: "Oman Air",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "flydubai",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'pakistan': {
    airports: [
      { iata: 'ISB', city: "Islamabad" },
      { iata: 'KHI', city: "Karachi" },
      { iata: 'LHE', city: "Lahore" },
    ],
    airlines: [
      {
        name: "PIA",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin confirm)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'philippines': {
    airports: [
      { iata: 'MNL', city: "Manila" },
      { iata: 'CEB', city: "Cebu" },
      { iata: 'CRK', city: "Clark" },
    ],
    airlines: [
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Philippine Airlines",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin program)",
        verificationStatus: 'unverified',
      },
      {
        name: "Cebu Pacific",
        mode: 'confirm',
        seedNotes: " (seed: limited/confirm)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'qatar': {
    airports: [
      { iata: 'DOH', city: "Doha Hamad" },
    ],
    airlines: [
      {
        name: "Qatar Airways",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'saudi-arabia': {
    airports: [
      { iata: 'RUH', city: "Riyadh" },
      { iata: 'JED', city: "Jeddah" },
      { iata: 'DMM', city: "Dammam" },
      { iata: 'MED', city: "Madinah" },
    ],
    airlines: [
      {
        name: "Saudia",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin rules)",
        verificationStatus: 'unverified',
      },
      {
        name: "flynas",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Etihad",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'singapore': {
    airports: [
      { iata: 'SIN', city: "Changi" },
    ],
    airlines: [
      {
        name: "Singapore Airlines",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Scoot",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'south-africa': {
    airports: [
      { iata: 'JNB', city: "Johannesburg" },
      { iata: 'CPT', city: "Cape Town" },
      { iata: 'DUR', city: "Durban" },
    ],
    airlines: [
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Ethiopian",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "South African Airways",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'south-korea': {
    airports: [
      { iata: 'ICN', city: "Seoul Incheon" },
      { iata: 'GMP', city: "Gimpo" },
    ],
    airlines: [
      {
        name: "Korean Air",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Asiana",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'spain': {
    airports: [
      { iata: 'MAD', city: "Madrid" },
      { iata: 'BCN', city: "Barcelona" },
      { iata: 'AGP', city: "M\u00e1laga" },
    ],
    airlines: [
      {
        name: "Iberia",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Vueling",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
      {
        name: "Qatar Airways",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'thailand': {
    airports: [
      { iata: 'BKK', city: "Bangkok Suvarnabhumi" },
      { iata: 'DMK', city: "Don Mueang" },
      { iata: 'HKT', city: "Phuket" },
    ],
    airlines: [
      {
        name: "Thai Airways",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cargo/cabin)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Singapore Airlines",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
    ],
  },
  'turkey': {
    airports: [
      { iata: 'IST', city: "Istanbul" },
      { iata: 'SAW', city: "Sabiha G\u00f6k\u00e7en" },
      { iata: 'AYT', city: "Antalya" },
    ],
    airlines: [
      {
        name: "Turkish Airlines",
        mode: 'cabin_or_cargo',
        seedNotes: " (seed: cabin/cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Emirates",
        mode: 'cargo',
        seedNotes: " (seed: cargo)",
        verificationStatus: 'unverified',
      },
      {
        name: "Pegasus",
        mode: 'confirm',
        seedNotes: " (seed: confirm)",
        verificationStatus: 'unverified',
      },
    ],
  },
}

/** UAE import chrome for inbound route blocks */
export const UAE_INBOUND_PERMIT_BLURB =
  'MOCCAE import permit is valid 30 days from issuance. The pet must arrive inside that window. Confirm current portal fees on the official MOCCAE site — do not invent AED figures.'

export const TITER_BLURB =
  'When a titer (RNATT) is required, the blood sample must be taken within 90 days before travel and read at least 0.5 IU/ml. That is not a 90-day waiting period after the blood draw.'
