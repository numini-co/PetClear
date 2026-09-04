/** Shared thumbs for service / guide / flight-mode cards. Lookup by destination path. */

export interface CardImage {
  src: string
  alt: string
}

export const CARD_IMAGES: Record<string, CardImage> = {
  '/service/pet-relocation-dubai/': {
    src: '/assets/homepage-cards/door-to-door-pet-relocation-card.jpg',
    alt: 'A calm dog beside a travel crate for door-to-door pet relocation in Dubai',
  },
  '/service/pet-import-dubai/': {
    src: '/assets/homepage-cards/pet-import-dubai-card.jpg',
    alt: 'A pet arriving in Dubai with import documents and a travel carrier',
  },
  '/service/pet-export-dubai/': {
    src: '/assets/homepage-cards/pet-export-from-dubai-card.jpg',
    alt: 'A calm dog and cat beside a travel crate at a Dubai departure terminal',
  },
  '/service/pet-transport-dubai/': {
    src: '/assets/homepage-cards/pet-transport-dubai-card.jpg',
    alt: 'Climate-controlled pet taxi transfer inside Dubai',
  },
  '/service/international-pet-relocation/': {
    src: '/assets/homepage-cards/international-pet-relocation-card.jpg',
    alt: 'A dog beside a travel crate at an airport for international pet relocation',
  },
  '/service/pet-relocation-to-dubai/': {
    src: '/assets/homepage-cards/pet-relocation-to-dubai-card.jpg',
    alt: 'A cat settling into a new Dubai apartment after inbound pet relocation',
  },
  '/service/pet-relocation-from-dubai/': {
    src: '/assets/w1-w3/pet-relocation-from-dubai-husky-balcony-golden-hour.jpg',
    alt: 'Husky sitting beside a packed travel crate on a Dubai balcony before relocating from Dubai',
  },
  '/service/dog-relocation-dubai/': {
    src: '/assets/w1-w3/german-shepherd-travel-crate-dog-relocation-dubai.jpg',
    alt: 'German Shepherd standing in an open IATA travel crate before dog relocation from Dubai',
  },
  '/service/cat-relocation-dubai/': {
    src: '/assets/w1-w3/british-shorthair-cat-carrier-cat-relocation-dubai.jpg',
    alt: 'British Shorthair cat resting in a travel carrier inside a Dubai apartment',
  },
  '/service/moccae-pet-permit/': {
    src: '/assets/w1-w3/moccae-permit-document-check-hands-dubai.jpg',
    alt: 'Hands reviewing a pet travel checklist for a MOCCAE permit application',
  },
  '/service/private-jet-pet-travel/': {
    src: '/assets/w-flight-modes/private-jet-pet-travel-card.jpg',
    alt: 'A dog on a leather seat inside a private jet cabin for dedicated-jet pet travel',
  },
  '/service/shared-pet-charter/': {
    src: '/assets/w-flight-modes/shared-pet-charter-card.jpg',
    alt: 'Dogs in travel crates inside a dedicated animal-lift cabin for shared pet charter',
  },
  '/guides/pet-flight-options-dubai/': {
    src: '/assets/w-flight-modes/pet-flight-options-card.jpg',
    alt: 'Comparing cabin, cargo and charter options for flying a pet to or from Dubai',
  },
  '/guides/etihad-pet-policy/': {
    src: '/assets/w-flight-modes/in-cabin-pet-travel-card.jpg',
    alt: 'A small dog in an under-seat carrier for in-cabin pet travel',
  },
  '/guides/emirates-pet-cargo/': {
    src: '/assets/w-flight-modes/pet-cargo-hold-card.jpg',
    alt: 'An IATA travel crate in an aircraft cargo hold for manifest pet cargo',
  },
  '/guides/pet-as-checked-baggage/': {
    src: '/assets/w-flight-modes/pet-excess-baggage-card.jpg',
    alt: 'A hard-sided pet crate travelling as accompanied checked baggage',
  },
  '/guides/pet-relocation-cost-dubai/': {
    src: '/images/cost-hero.jpg',
    alt: 'Pet owner reviewing Dubai pet relocation costs',
  },
  '/guides/uae-pet-import-requirements/': {
    src: '/images/import-hero.jpg',
    alt: 'Pet import documents beside a travel crate',
  },
}

export function cardImageFor(to: string): CardImage | undefined {
  return CARD_IMAGES[to]
}
