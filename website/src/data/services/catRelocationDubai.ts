import type { ServicePageData } from '../../types/servicePage.ts'
import { GUIDE_SOFT_GATE, waEligibility } from '../../lib/conversionCopy.ts'

const catRelocationDubai: ServicePageData = {
  slug: 'cat-relocation-dubai',
  seoTitle: 'Cat Relocation Dubai | Cabin & Cargo Moves for Cats',
  metaDescription:
    'Managed cat relocation to and from Dubai and the UAE: cabin or cargo checked, carrier sized, MOCCAE import permit timed. Check if we can move your cat.',
  h1: 'Cat relocation to and from Dubai',
  primaryKeyword: 'cat relocation dubai',
  heroValueProp:
    'Moving a cat to or from Dubai: cabin or cargo confirmed, carrier sized, MOCCAE import permit timed, handover at DXB or DWC after an eligibility check.',
  heroImage: '/images/service-cat-relocation-dubai.jpg',
  heroImageAlt: 'Relaxed cat resting inside a soft-lined travel carrier in a bright room',
  whatsappMessage: waEligibility({
    pet: 'cat (number, breed, weight)',
    need: 'managed cat move: cabin or cargo check, carrier and door-to-door if needed',
  }),
  ctaLabel: 'Check if we can move your cat',
  heroEyebrow: 'Cat Relocation',
  snippetQuestion: 'What does cat relocation in Dubai include?',
  snippetAnswer:
    'A managed cat relocation checks cabin or cargo for the route, sizes the carrier or IATA crate, times the microchip, vaccines and health certificate, secures the MOCCAE import permit for an inbound cat (valid 90 days from issuance) or sequences export for an outbound cat, books the flight and hands over at DXB or DWC. Quoted after an eligibility check.',
  ctaSupport:
    'Send the number of cats, breed (domestic, Bengal or Serval), weight, route and travel month. We check eligibility and reply with a managed cat-move quote.',
  ctaHeading: 'Ready to book a managed cat move?',
  ctaBody:
    'Send the number of cats, origin, destination and month. Quotes follow the eligibility check. Government fees: confirm on the official MOCCAE portal.',
  gateLine: GUIDE_SOFT_GATE,
  paidIncludes: [
    'Cabin or cargo confirmed with the airline for your route and date',
    'Carrier or IATA crate sized to your cat, with a home practice plan',
    'Microchip, vaccine, health certificate and MOCCAE import permit timing (permit valid 90 days from issuance)',
    'Flight booked against the permit and the carrier',
    'DXB or DWC handover, customs release and door-to-door delivery when booked',
  ],
  trustBadges: ['Carrier sizing and practice plan', 'Cats travel awake by default', 'Vetted partners', 'WhatsApp during business hours'],
  hasHowTo: false,
  sections: [
    {
      h2: 'Cat relocation to and from Dubai: what we manage',
      intro:
        'Cat relocation in Dubai is a managed move for a cat travelling into the UAE, out of the UAE, or between emirates. Guides are free to read. WhatsApp is for people ready to book.',
      body: [
        {
          type: 'p',
          text: 'Two journeys share one coordinator. A ground move is a quiet transfer inside Dubai or between emirates, such as Dubai to Abu Dhabi or Sharjah. An international move imports a cat into the UAE or exports one. Both need an ISO microchip, a valid rabies vaccination, a government health certificate, and a carrier the cat can stand, turn and lie down in.',
        },
        {
          type: 'p',
          text: 'We coordinate the move. We do not fly the cat ourselves. Vetted veterinary and transport partners do the physical work. Inbound cats use [pet import Dubai](/service/pet-import-dubai/). Outbound cats use [pet export from Dubai](/service/pet-export-dubai/). The document checklist is [UAE pet import requirements](/guides/uae-pet-import-requirements/). Owner preparation is on [bringing a cat to Dubai](/cat-relocation-to-dubai/). Dog breed bans are not cat rules: [dog relocation to and from Dubai](/service/dog-relocation-dubai/).',
        },
        {
          type: 'list',
          items: [
            'Carrier sizing and an acclimatisation plan before travel day',
            'Cabin versus cargo checked against the airline and the route, not assumed',
            'Microchip, rabies vaccination and health-certificate timing mapped to the travel date',
            'MOCCAE import permit for inbound cats, valid 90 days from issuance, or export sequencing when the cat is leaving',
            'Airline booking with a cat-accepted product',
            'Customs clearance at DXB or DWC, and door-to-door delivery in Dubai when that scope is booked',
          ],
        },
      ],
    },
    {
      h2: 'Why cats travel differently',
      intro:
        'Cats take comfort from familiar smells and routine. Preparation reduces novelty. It does not promise that cargo is calm.',
      body: [
        {
          type: 'p',
          text: 'A cat often hides stress. A carrier it has never used, a new car, and unfamiliar handling are the usual problems. Preparation is carrier practice at home, a familiar cloth if the airline allows soft items, and a quiet handover. We do not copy a dog crate plan onto a cat, and we do not recommend a medicine or a dose.',
        },
        {
          type: 'p',
          text: 'Do not assume a cabin seat into Dubai. Emirates requires cargo for itineraries ending in Dubai, and ordinary pets are not in the Emirates cabin. British Airways carries pets in the hold. An Etihad cabin product, where offered, is an Abu Dhabi booking to confirm live: [Etihad pet policy](/guides/etihad-pet-policy/). Modes: [pet flight options](/guides/pet-flight-options-dubai/). Where cargo is required, the cat travels in an IATA crate. A familiar cloth is useful only if that airline allows it.',
        },
        {
          type: 'list',
          items: [
            'Leave the carrier out at home, door open, for days before travel',
            'Feed beside it, then inside it. Do not produce it only for vet trips.',
            'Cabin or cargo is an airline rule for that route. We check it. We do not promise a cabin seat.',
            'After arrival, a quiet room and the cat\'s own tray and bedding help. We do not promise how long settling takes.',
          ],
        },
      ],
    },
    {
      h2: 'Getting your cat used to the carrier',
      intro:
        'The carrier is the part you can prepare. Start days or weeks before travel, not on the morning of the flight.',
      body: [
        {
          type: 'p',
          text: 'Leave the carrier open in a room the cat already uses. Line it with bedding from home. Let the cat enter and leave. Take a few short, calm practice journeys so the carrier and the car are familiar together. On travel day, keep handling quiet and avoid opening the carrier in transit. The cat must be able to stand, turn and lie down. A carrier that only just fits is not a fit.',
        },
        {
          type: 'list',
          items: [
            'Bring the carrier out early and leave the door open',
            'Feed treats near it, then inside it',
            'Do not force the cat in, and do not save the carrier for vet visits only',
            'Ask your own vet before any product is used. We do not recommend a spray or a dose.',
            'For cargo, the carrier must meet IATA rules: rigid, ventilated, metal bolts, water access. See [IATA pet crate requirements](/guides/iata-pet-crate-requirements/).',
          ],
        },
        {
          type: 'p',
          text: 'We size the cargo crate through vetted partners and send the practice plan early enough for the cat to use it at home. We do not publish carrier prices in AED.',
        },
      ],
    },
    {
      h2: 'Should you sedate a cat for a flight?',
      intro:
        'A sedated cat is not the safer default for a flight. We do not recommend a medicine, spray or dose; ask your own vet.',
      body: [
        {
          type: 'p',
          text: 'IATA live-animal guidance and many airlines advise against sedating cats and dogs for air travel except where a veterinarian instructs it for that animal. At altitude, air pressure is lower than on the ground. A sedative can depress breathing and heart function, and a sedated animal may not brace against movement or regulate temperature well. Many airlines refuse an animal that appears sedated.',
        },
        {
          type: 'p',
          text: 'The practical path is the carrier the cat already uses, a familiar cloth if the airline allows it, and water fitted the way the carrier instructions allow. We do not give a fasting time. If the cat has a medical condition, that decision belongs to your vet and to the airline\'s written rule. If either says the cat should not fly, the move waits.',
        },
        {
          type: 'list',
          items: [
            'Default: the cat travels awake. We do not supply a sedation plan.',
            'Ask the airline before travel day. Refusal of sedated animals is common enough to check in writing.',
            'Do not use a dog calming product on a cat',
            'Fitness to fly is your vet\'s decision.',
          ],
        },
      ],
    },
    {
      h2: 'Cat vaccination and document timeline',
      intro:
        'Cats and dogs share the permit window. They do not share the vaccine list. Bengal and Serval cats have an extra pedigree line.',
      body: [
        {
          type: 'p',
          text: 'Every cat needs an ISO 11784/11785 15-digit microchip implanted before, or at the same time as, the rabies vaccination. A current rabies vaccination is generally required at least 21 days before travel and must still be in date. The cat vaccines named for UAE import are rabies, feline panleukopenia, feline rhinotracheitis and feline calicivirus. Feline leukaemia was not on that required list when the import page was checked on 22 September 2026.',
        },
        {
          type: 'p',
          text: 'Bengal and Serval cats need a pedigree certificate to the fifth generation. Other domestic cats are not given that extra line on the MOCCAE import page we checked. When the origin is high-risk, the rabies antibody result must be at least 0.5 IU/ml. The certificate is valid for 365 days if the rabies vaccine stays valid and continuous and no booster is given. Otherwise the test is repeated. A first vaccine, or a gap, needs at least 21 days before the test. Detail: [rabies titre test for Dubai](/guides/rabies-titer-test-dubai/).',
        },
        {
          type: 'list',
          items: [
            'ISO 15-digit microchip before or with the rabies vaccination',
            'Rabies vaccination generally at least 21 days before travel, and still in date',
            'Cat vaccines: rabies, feline panleukopenia, feline rhinotracheitis and feline calicivirus',
            'Bengal and Serval cats: fifth-generation pedigree certificate',
            'High-risk origin: antibody result of at least 0.5 IU/ml under the 365-day certificate conditions',
            '[MOCCAE import permit](/guides/moccae-import-permit/) valid 90 days from issuance for a cat entering the UAE',
          ],
        },
        {
          type: 'p',
          text: 'The permit is 90 days from issuance, not 30. Parasite treatment in the 14 days before shipment is recorded by your vet. Some products sold for dogs can be dangerous for cats. Your vet must choose a cat-safe product. We do not recommend a dose. Full sequence: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
        },
      ],
    },
    {
      h2: 'How much does cat relocation in Dubai cost?',
      intro:
        'The quote is for this cat and this route. We do not publish a package total.',
      body: [
        {
          type: 'p',
          text: 'A lighter cat can mean a lower freight rate. Cabin or cargo, the route, and whether a titre is required all move the quote. Government fees: confirm on the official MOCCAE portal. Quotes follow the eligibility check.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'How it is quoted'],
          rows: [
            ['MOCCAE permit and release', 'Government fees. Confirm on the official MOCCAE portal.'],
            ['Origin veterinary work', 'Quoted by the origin clinic, not part of our coordination fee'],
            ['Carrier or IATA crate', "Quoted for the cat's measured size"],
            ['Flight or cargo', 'Airline quote for that carrier and date'],
            ['Coordination and door-to-door handling', 'Quoted after the eligibility check'],
          ],
        },
        {
          type: 'p',
          text: 'Send origin, destination and month for a managed cat-move quote. What a quote is made of, without a made-up total: [pet relocation cost](/guides/pet-relocation-cost-dubai/). Coordination after eligibility: [Prices](/prices/). Not sure which service you need? [Compare pet relocation services](/service/pet-relocation-dubai/).',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'What should I send for a cat relocation quote?',
      a: 'Send your name, the number of cats, whether the cat is domestic, Bengal or Serval, approximate weight, origin, destination and the travel month, on WhatsApp +971504782999. We check eligibility and reply with a managed cat-move quote. Government fees: confirm on the official MOCCAE portal. Inbound rules: [UAE pet import requirements](/guides/uae-pet-import-requirements/).',
    },
    {
      q: 'Should I sedate my cat for the flight?',
      a: 'Most vets and airlines advise against sedating a cat for a flight. Many airlines refuse a sedated animal. Prepare the carrier at home instead. If the cat has a medical condition, ask your own vet and get the airline\'s rule in writing. WhatsApp +971504782999 is for booking a managed cat move, not for medicine advice.',
    },
    {
      q: 'Can my cat travel in the cabin to or from Dubai?',
      a: 'Do not assume a cabin seat into Dubai. Emirates requires cargo for itineraries ending in Dubai, and ordinary pets are not in the cabin. British Airways carries pets in the hold. An Etihad cabin product is a separate Abu Dhabi booking: [Etihad pet policy](/guides/etihad-pet-policy/). We check the live product. We do not promise that cargo is calmer than a cabin.',
    },
    {
      q: 'How do I get my cat used to its carrier before travel?',
      a: 'Leave the carrier open in a room the cat already uses, line it with bedding from home, and feed inside it over several days. Take a few short practice journeys. The cat must be able to stand, turn and lie down. We do not recommend a spray or a dose; ask your vet. A managed cat move includes the carrier plan.',
    },
    {
      q: 'What documents does my cat need to enter Dubai?',
      a: 'An ISO 15-digit microchip, rabies vaccination generally at least 21 days before travel, the cat vaccines (rabies, feline panleukopenia, feline rhinotracheitis and feline calicivirus), a government health certificate, and a [MOCCAE import permit](/guides/moccae-import-permit/) valid 90 days from issuance. High-risk origins add an antibody result of at least 0.5 IU/ml. Bengal and Serval cats need a fifth-generation pedigree. Checklist: [UAE pet import requirements](/guides/uae-pet-import-requirements/). Paid import coordination: [pet import Dubai](/service/pet-import-dubai/).',
    },
    {
      q: 'How long does cat relocation to Dubai take?',
      a: 'It depends on the vaccine already in the cat and on whether the origin is high-risk. When a titre is required, the result must be at least 0.5 IU/ml under the 365-day certificate conditions on the [rabies titre test](/guides/rabies-titer-test-dubai/) page. The [MOCCAE import permit](/guides/moccae-import-permit/) is valid for 90 days from issuance. We do not publish a two-to-six-week promise.',
    },
    {
      q: 'How much does cat relocation in Dubai cost?',
      a: 'Cat relocation in Dubai is quoted for your cat, route and month after an eligibility check; we do not publish a package total. Send origin, destination, the cat and the month on WhatsApp +971504782999. Government fees: confirm on the official MOCCAE portal.',
    },
    {
      q: 'Can you relocate my cat out of Dubai?',
      a: 'We can relocate your cat out of Dubai as a managed export. Sequencing follows the destination country\'s rules, then the MOCCAE export health certificate after the pre-flight inspection, then the airline booking. See [pet export from Dubai](/service/pet-export-dubai/). The quote follows an eligibility check.',
    },
  ],
  relatedLinks: [
    { label: 'Pet relocation Dubai', to: '/' },
    { label: 'Pet relocation services', to: '/service/pet-relocation-dubai/' },
    { label: 'Pet export from Dubai', to: '/service/pet-export-dubai/' },
    { label: 'Pet import Dubai', to: '/service/pet-import-dubai/' },
    { label: 'MOCCAE import permit', to: '/guides/moccae-import-permit/' },
    { label: 'UAE pet import requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'IATA pet crate requirements', to: '/guides/iata-pet-crate-requirements/' },
    { label: 'Dog relocation to and from Dubai', to: '/service/dog-relocation-dubai/' },
    { label: 'How it works', to: '/how-it-works/' },
  ],
}

export default catRelocationDubai
