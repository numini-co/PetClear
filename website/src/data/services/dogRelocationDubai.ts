import type { ServicePageData } from '../../types/servicePage.ts'
import { GUIDE_SOFT_GATE, waEligibility } from '../../lib/conversionCopy.ts'

const dogRelocationDubai: ServicePageData = {
  slug: 'dog-relocation-dubai',
  seoTitle: 'Dog Relocation Dubai | Breed Check, IATA Crate & Flights',
  metaDescription:
    'Managed dog relocation to and from Dubai and the UAE: breed check, IATA crate sizing, cargo booking, MOCCAE import permit. Check if we can move your dog.',
  h1: 'Dog relocation to and from Dubai',
  primaryKeyword: 'dog relocation dubai',
  heroValueProp:
    'Moving a dog to or from Dubai? We check the breed, size the IATA crate and book the flight against the permit, then hand your dog over at DXB or DWC. Quote after an eligibility check.',
  heroImage: '/images/service-dog-relocation-dubai.jpg',
  heroImageAlt: 'Calm dog sitting beside an IATA travel crate at a Dubai airport',
  whatsappMessage: waEligibility({
    pet: 'dog',
    need: 'breed as written by the vet, weight, origin, destination, travel month, and whether crate supply and door-to-door are needed',
  }),
  servicePreset: 'Import and export service',
  ctaLabel: 'Check if we can move your dog',
  heroEyebrow: 'Dog Relocation',
  snippetQuestion: 'What does dog relocation in Dubai include?',
  snippetAnswer:
    'A managed dog relocation covers the breed check against the UAE import list, IATA crate sizing, vaccine and health-certificate timing, the MOCCAE import permit for an inbound dog (valid 90 days from issuance) or export sequencing for an outbound dog, the airline booking, and the DXB or DWC handover. The quote follows an eligibility check.',
  ctaSupport:
    'Send the breed, weight, route and travel month. We check eligibility and reply with a managed dog-move quote.',
  ctaHeading: 'Ready for a managed dog-move quote?',
  ctaBody:
    'Send the breed, weight, origin, destination and month. We check eligibility and reply with a managed dog-move quote. Government fees: confirm on the official MOCCAE portal. We do not publish a package total in AED.',
  gateLine: GUIDE_SOFT_GATE,
  paidIncludes: [
    'Breed check against the UAE import list before anything is booked',
    "Dog measured and IATA crate matched to the airline's rules",
    'Vaccine, health certificate and MOCCAE import permit timing (permit valid 90 days from issuance)',
    'Cargo or cabin booking held against the permit and crate',
    'DXB or DWC handover, customs release and door-to-door delivery when booked',
  ],
  trustBadges: ['Breed eligibility checked', 'IATA crate sizing', 'Vetted partners', 'WhatsApp during business hours'],
  hasHowTo: false,
  sections: [
    {
      h2: 'Dog relocation to and from Dubai: what we manage',
      intro:
        'Dog relocation in Dubai is a managed move for a dog travelling into the UAE, out of the UAE, or between emirates. Guides are free to read. WhatsApp is for people ready to book.',
      body: [
        {
          type: 'p',
          text: 'Two journeys share one coordinator. A ground move stays inside Dubai or runs between emirates, such as Dubai to Abu Dhabi or Sharjah. An international move imports a dog into the UAE or exports one. Both need a microchip whose number matches the papers, a valid rabies vaccination, a government health certificate, and, for air travel, an airline-approved crate sized for that dog.',
        },
        {
          type: 'p',
          text: 'We coordinate the paperwork. We do not fly the dog ourselves. Vetted veterinary and transport partners do the physical work. The wider offer is [pet relocation services in Dubai](/service/pet-relocation-dubai/). Inbound dogs use [pet import Dubai](/service/pet-import-dubai/). Outbound dogs use [pet export from Dubai](/service/pet-export-dubai/). Owner preparation, including crate practice at home, is on [bringing a dog to Dubai](/dog-relocation-to-dubai/).',
        },
        {
          type: 'list',
          items: [
            'Breed eligibility check against the published UAE import list before you commit',
            'IATA crate sizing through vetted partners',
            'Rabies vaccination and health-certificate timing mapped to the travel date',
            'MOCCAE import permit timing for inbound dogs, valid 90 days from issuance, or export sequencing when the dog is leaving',
            'Airline booking, including cabin or cargo where that carrier allows it',
            'Customs clearance at DXB or DWC, and door-to-door delivery in Dubai when that scope is booked',
          ],
        },
      ],
    },
    {
      h2: "Can your dog's breed enter the UAE?",
      intro:
        'The first paid check is whether this dog can travel. A name on the import list blocks the move.',
      body: [
        {
          type: 'p',
          text: 'The names are on [banned dog breeds Dubai](/guides/banned-dog-breeds-dubai/). That guide lists the breeds on the MOCCAE pet import list, including Pit Bull-type breeds, the Japanese Tosa, the Dogo Argentino and the Brazilian Mastiff (Fila Brasileiro). If the name on the veterinary record matches that list, we will not apply for an import permit. The published outcome for a non-compliant import is rejection at the owner\'s expense or confiscation. The list checked on 22 September 2026 does not publish a fine amount.',
        },
        {
          type: 'p',
          text: 'Rottweiler, Doberman and Boxer were not on that import list. We do not call them banned, and we do not publish muzzle, leash or insurance rules. A building can still set its own pet policy. Ask the building before cargo is booked.',
        },
        {
          type: 'p',
          text: 'Snub-nosed breeds are an airline question, not a line on the import ban list. Read [snub-nosed dogs flying to the UAE](/guides/snub-nosed-dogs-flying-uae/) and still confirm the carrier. The breed check is the first step of a booked move.',
        },
        {
          type: 'list',
          items: [
            'On the published ban list: the breed check blocks the move. No permit application is made.',
            'Not on that list: the rest of the documents still have to match, including the [MOCCAE import permit](/guides/moccae-import-permit/) for an inbound dog.',
            'Snub-nosed: not a government ban. The airline can still refuse that head shape on that date.',
          ],
        },
      ],
    },
    {
      h2: 'IATA crate sizing for dogs',
      intro:
        'Air travel uses a rigid crate built to the IATA Live Animals Regulations. The dog must be able to stand, turn and lie down. We do not publish crate prices in AED.',
      body: [
        {
          type: 'p',
          text: 'Measure the dog standing. A is nose to the base of the tail. B is floor to elbow. C is width across the shoulders. D is floor to the top of the head, or the ear tip when the ears stand up. Crate length is A plus half of B. Height must be greater than D so the dog can stand without crouching. Width is at least two times C so the dog can turn. Construction is rigid plastic or metal, with metal bolts rather than plastic clips, ventilation on at least three sides, and a solid leak-proof floor. Fix water and food bowls to the door. Full specification: [IATA pet crate requirements](/guides/iata-pet-crate-requirements/).',
        },
        {
          type: 'list',
          items: [
            'Between two sizes, choose the larger crate',
            'Snub-nosed dogs: many airlines ask for one size up. Confirm that booking. We will not promise a summer flight.',
            'Wire crates are commonly refused',
            'Let the dog sleep and eat in the crate at home before travel day',
            'We do not give a sedation plan or a calming-drug dose',
          ],
        },
      ],
    },
    {
      h2: 'Snub-nosed breeds and summer flights',
      intro:
        'A short nose and Gulf heat are airline limits, not a second government ban. We confirm the carrier\'s rule for that breed and that date before anyone books.',
      body: [
        {
          type: 'p',
          text: 'Brachycephalic breeds have shortened airways. Common examples include the French Bulldog, English Bulldog, Pug, Boxer, Boston Terrier, Shih Tzu and Pekingese. Many airlines restrict or refuse them in cargo, and many ask for a larger crate. Some ask for a vet fitness-to-fly note. None of that is a MOCCAE ban. The detail sits on the snub-nosed guide. We still confirm the live product in writing.',
        },
        {
          type: 'p',
          text: 'Heat on the apron is a real planning problem. Airlines set their own summer embargoes by route and breed, so we confirm the carrier\'s rule for that date before booking. Emirates itineraries ending in Dubai travel as cargo, and ordinary pets are not in the Emirates cabin. British Airways carries pets in the hold. An Etihad cabin product is a separate Abu Dhabi booking. Modes: [pet flight options](/guides/pet-flight-options-dubai/).',
        },
        {
          type: 'list',
          items: [
            'Snub-nosed: confirm the airline, the route and the date. Do not assume acceptance.',
            'A larger crate is a common airline ask, not a guarantee',
            'We do not promise a temperature inside the hold',
            'If the vet says the dog should not fly, the move waits',
          ],
        },
      ],
    },
    {
      h2: 'Dog vaccination and document timeline',
      intro:
        'Timing follows the vaccine already in the dog and whether the origin is high-risk. We do not publish a two-to-six-week promise.',
      body: [
        {
          type: 'p',
          text: 'Every dog needs an ISO 11784/11785 15-digit microchip implanted before, or at the same time as, the rabies vaccination, because the rabies record must match the chip number. A current rabies vaccination is required and is generally given at least 21 days before travel while still in date. The dog vaccines named for UAE import are rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis. Leptospirosis can be replaced by a lab test when the exporting country does not vaccinate against it. Parasite products and doses stay with your vet.',
        },
        {
          type: 'p',
          text: 'When the origin is high-risk, the rabies antibody result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap in vaccination, needs at least 21 days before the test. That certificate is not the import permit. Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).',
        },
        {
          type: 'list',
          items: [
            'ISO 15-digit microchip before or with the rabies vaccination',
            'Rabies vaccination generally at least 21 days before travel, and still in date',
            'Dog vaccines: rabies, distemper, parvovirus, infectious canine hepatitis and leptospirosis',
            'High-risk origin: antibody result of at least 0.5 IU/ml under the 365-day certificate conditions',
            'Government health certificate from the origin authority, inside its own validity',
            '[MOCCAE import permit](/guides/moccae-import-permit/) valid 90 days from issuance for a dog entering the UAE',
          ],
        },
        {
          type: 'p',
          text: 'The permit must still be inside those 90 days on the arrival date. It is not a 30-day document. If it expires, a new application is required. Full inbound checklist: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
        },
      ],
    },
    {
      h2: 'How much does dog relocation in Dubai cost?',
      intro:
        'The quote is for this dog and this route. We do not publish a package total in AED.',
      body: [
        {
          type: 'p',
          text: 'The quote depends on origin veterinary work, crate size, the cargo rate, and whether you want door-to-door delivery. Government fees: confirm on the official MOCCAE portal. Quotes follow the eligibility check.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'How it is quoted'],
          rows: [
            ['MOCCAE permit and release', 'Government fees. Confirm on the official MOCCAE portal.'],
            ['Origin veterinary work', 'Quoted by the origin clinic, not part of our coordination fee'],
            ['IATA crate', "Quoted for the dog's measured size"],
            ['Flight or cargo', 'Airline quote for that crate and date'],
            ['Coordination and door-to-door handling', 'Quoted after the eligibility check'],
          ],
        },
        {
          type: 'p',
          text: 'Send the breed, weight, origin, destination and month for a managed dog-move quote. What a quote is made of, without a made-up total: [pet relocation cost](/guides/pet-relocation-cost-dubai/). Coordination after eligibility: [Prices](/prices/). Not sure which service you need? [Compare pet relocation services](/service/pet-relocation-dubai/).',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'What should I send for a dog relocation quote?',
      a: 'Send your name, the breed as written by your vet, approximate weight, origin, destination and the month you want to travel, on WhatsApp +971504782999. We check eligibility and reply with a managed dog-move quote. Government fees: confirm on the official MOCCAE portal. Names on the import list: [banned dog breeds Dubai](/guides/banned-dog-breeds-dubai/).',
    },
    {
      q: 'When does a breed check block the move?',
      a: 'The breed check blocks the move when the veterinary breed name matches the list on [banned dog breeds Dubai](/guides/banned-dog-breeds-dubai/). We will not apply for a [MOCCAE import permit](/guides/moccae-import-permit/) for that dog. A non-compliant import may be rejected at the owner\'s expense or confiscated. The list checked on 22 September 2026 does not publish a fine amount. The breed check is the first step of a booked move.',
    },
    {
      q: 'Is my dog\'s breed allowed in Dubai?',
      a: 'Your dog can enter Dubai when the veterinary breed name is not on [banned dog breeds Dubai](/guides/banned-dog-breeds-dubai/). Pit Bull-type breeds, the Japanese Tosa, the Dogo Argentino and the Brazilian Mastiff (Fila Brasileiro) are on that import list and cannot be imported. Rottweiler, Doberman and Boxer were not on the list checked on 22 September 2026. An allowed breed still needs the documents, including a [MOCCAE import permit](/guides/moccae-import-permit/) valid 90 days from issuance.',
    },
    {
      q: 'What size crate does my dog need to fly?',
      a: 'An IATA crate large enough for the dog to stand, turn and lie down, with metal bolts and ventilation on at least three sides. Measure nose to tail base, height to the head or ear tip, and shoulder width. Between two sizes, choose the larger one. Snub-nosed dogs often need one size up, and the airline still has to accept the booking. We do not publish crate prices in AED. Specification: [IATA pet crate requirements](/guides/iata-pet-crate-requirements/).',
    },
    {
      q: 'Can snub-nosed dogs such as French Bulldogs and Pugs fly to or from Dubai?',
      a: 'They are not on the MOCCAE import ban list. An airline can still refuse them, ask for a larger crate, or ask for a fitness-to-fly note. We confirm that carrier, that route and that date before booking. We do not promise a summer flight. Detail: [snub-nosed dogs flying to the UAE](/guides/snub-nosed-dogs-flying-uae/).',
    },
    {
      q: 'Can dogs fly during the Dubai summer?',
      a: 'Airlines set their own summer embargoes by route and breed, so we confirm the carrier\'s rule for that date before booking. Heat on the apron is a real planning problem, and snub-nosed dogs need extra care. We do not promise a hold temperature.',
    },
    {
      q: 'How long does dog relocation to Dubai take?',
      a: 'It depends on the vaccine already in the dog and on whether the origin is high-risk. When a titre is required, the result must be at least 0.5 IU/ml and the certificate follows the 365-day conditions on the [rabies titre test](/guides/rabies-titer-test-dubai/) page. The [MOCCAE import permit](/guides/moccae-import-permit/) is valid for 90 days from issuance. We do not publish a two-to-six-week promise.',
    },
    {
      q: 'How much does dog relocation in Dubai cost?',
      a: 'We do not publish a package total in AED. Send the breed, weight, origin, destination and month on WhatsApp +971504782999. Quotes follow the eligibility check. Government fees: confirm on the official MOCCAE portal. Cost drivers, without a made-up total: [pet relocation cost](/guides/pet-relocation-cost-dubai/).',
    },
    {
      q: 'Can you relocate my dog out of Dubai?',
      a: 'We can relocate your dog out of Dubai as a managed export. Sequencing follows the destination country\'s rules, then the MOCCAE export health certificate after the airport inspection, then the airline booking. See [pet export from Dubai](/service/pet-export-dubai/). The quote follows an eligibility check.',
    },
  ],
  relatedLinks: [
    { label: 'Pet relocation Dubai', to: '/' },
    { label: 'Pet relocation services', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Pet import Dubai', to: '/service/pet-import-dubai/' },
    { label: 'MOCCAE import permit', to: '/guides/moccae-import-permit/' },
    { label: 'Banned dog breeds Dubai', to: '/guides/banned-dog-breeds-dubai/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
    { label: 'Snub-nosed dogs flying to the UAE', to: '/guides/snub-nosed-dogs-flying-uae/' },
    { label: 'Cat relocation to and from Dubai', to: '/service/cat-relocation-dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
  ],
}

export default dogRelocationDubai
