import type { ServicePageData } from '../../types/servicePage.ts'

const petImportDubai: ServicePageData = {
  slug: 'pet-import-dubai',
  seoTitle: 'Pet Import Dubai | Bring Your Pet to the UAE',
  metaDescription:
    'Bring your pet to Dubai with full documentation support. MOCCAE import permit, customs clearance & delivery. Get your free WhatsApp quote in 15 minutes.',
  keywords:
    'pet import dubai, import pet to dubai, bringing pets to dubai, pet import requirements dubai, pet import permit dubai, pet customs dubai',
  h1: 'Pet Import Services in Dubai',
  primaryKeyword: 'pet import dubai',
  heroValueProp:
    'Bringing your dog or cat to Dubai? We guide you through every step — MOCCAE import permit, rabies and titer rules, IATA crates, customs clearance at DXB and delivery to your door. Transparent pricing, vetted partners and WhatsApp support throughout.',
  heroImage: '/images/service-pet-import-dubai.jpg',
  heroImageAlt:
    'A relaxed dog and cat arriving beside a travel crate at a bright Dubai airport terminal — pet import to Dubai',
  whatsappMessage:
    'Hi Dubai Pet Relocation! I want to import my pet to Dubai. Can you guide me through the MOCCAE permit, requirements and cost?',
  trustBadges: ['MOCCAE requirements guided', 'Vetted partners', 'DXB customs clearance', 'WhatsApp support'],
  costRange: { low: '2000', high: '20000' },
  hasHowTo: true,
  howToName: 'Step-by-Step Pet Import Process for Dubai',
  sections: [
    {
      h2: 'Bringing Pets to Dubai: What You Need to Know',
      intro:
        'Importing a pet into Dubai is a regulated process governed by the Ministry of Climate Change and Environment (MOCCAE). With the right documents in the right order, most dogs and cats clear customs at the airport within a couple of hours and head straight home with you.',
      body: [
        {
          type: 'p',
          text: 'The single most important factor in your pet import is your country of origin. The UAE classifies every country as either low-risk or high-risk for rabies, and that classification decides your entire timeline. From a low-risk country with an already-vaccinated pet, you can often be ready to fly in 2 to 6 weeks. From a high-risk country, a mandatory rabies titer test and a 90-day waiting period stretch the process to around 4 months. Knowing your classification before you do anything else saves you from booking flights you cannot use.',
        },
        {
          type: 'p',
          text: 'Every pet entering the UAE needs an ISO-compliant 15-digit microchip, a current rabies vaccination, additional species vaccinations, a government-endorsed health certificate from the origin country and a MOCCAE import permit. Pets must enter the UAE as manifested air cargo — not in the cabin and not as checked baggage — and travel in an IATA-compliant crate. We walk you through each requirement so nothing is missed and nothing is done out of sequence.',
        },
        {
          type: 'p',
          text: 'A few rules trip up first-time importers. The microchip must be implanted before the rabies vaccination, or MOCCAE may treat the vaccination as invalid. Dogs must be at least 12 weeks old to import from a low-risk country and at least 15 weeks from a high-risk country, because of vaccination and titer timing. And each person may import a maximum of 2 pets per year through the standard process. We confirm all of this against your specific situation before you commit a single dirham.',
        },
        {
          type: 'p',
          text: 'We are a coordination service, not a carrier. We do not fly the animals ourselves and we are not a MOCCAE-licensed agency. What we do is guide you through MOCCAE requirements, connect you with vetted veterinary and transport partners and keep your paperwork and timeline correct from first message to final delivery.',
        },
      ],
    },
    {
      h2: 'Step-by-Step Pet Import Process',
      intro:
        'Here is the full import journey for a dog or cat coming into Dubai. The order matters — doing steps out of sequence is the most common reason permits get rejected or pets are held at the airport.',
      body: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Microchip your pet',
              text: 'Your pet must be fitted with an ISO 11784/11785 compliant 15-digit microchip before anything else. This chip number must appear identically on every document that follows. A vaccination or test done before the chip is implanted has no legal standing with MOCCAE.',
            },
            {
              title: 'Vaccinate against rabies (and species diseases)',
              text: 'After microchipping, your pet receives a rabies vaccination at least 21 days before travel and no more than 12 months prior to arrival. Dogs also need distemper, hepatitis, parvovirus and leptospirosis; cats need feline rhinotracheitis, panleukopenia and calicivirus. Only inactivated or recombinant rabies vaccines are accepted.',
            },
            {
              title: 'Complete a rabies titer test (high-risk countries only)',
              text: 'If you are importing from a high-risk country, your pet needs a rabies antibody titer test (RNATT) from an accredited laboratory. The blood sample must be drawn at least 21 days after the rabies vaccination and the result must be 0.5 IU/ml or higher. Low-risk countries skip this step entirely.',
            },
            {
              title: 'Observe the waiting period (high-risk countries)',
              text: 'High-risk countries carry a mandatory 90-day waiting period measured from the date the titer blood sample was collected — not from when the result is issued. This window cannot be shortened, which is why a high-risk import takes roughly 4 months from start to finish.',
            },
            {
              title: 'Apply for the MOCCAE import permit',
              text: 'We help you apply for the import permit through the MOCCAE portal. The permit costs AED 200 per pet and stays valid for 90 days, so your pet must arrive within that window. You will need the microchip number, vaccination records, titer result if applicable, and your passport and visa details.',
            },
            {
              title: 'Get the health certificate and parasite treatment',
              text: 'A government-endorsed veterinary health certificate is issued in your origin country shortly before travel. Around the same time, your pet receives internal and external antiparasitic treatment within 14 days of arrival. We give you the exact MOCCAE certificate model so your origin vet completes it correctly.',
            },
            {
              title: 'Book an IATA crate and pet-experienced flight',
              text: 'We help size an IATA-compliant crate — rigid plastic, metal bolts, metal door, ventilation on all four sides and tall enough for your pet to stand naturally. Snub-nosed breeds need a crate one size larger. We then coordinate a manifested cargo booking on a pet-experienced airline routed into Dubai.',
            },
            {
              title: 'Clear customs at DXB and deliver home',
              text: 'On arrival at Dubai Cargo Village, a MOCCAE veterinary inspector scans the microchip and reviews the documents, and customs processes the release. Once veterinary inspection and clearance fees are paid, your pet is released. We arrange door-to-door delivery and keep you updated on WhatsApp at every checkpoint.',
            },
          ],
        },
      ],
    },
    {
      h2: 'Required Documents',
      intro:
        'These are the documents MOCCAE and the airline will check. We review every one of them against your pet before travel, so a typo in a microchip number never costs you a flight.',
      body: [
        {
          type: 'list',
          items: [
            'ISO 11784/11785 compliant 15-digit microchip, implanted before the rabies vaccination',
            'Valid rabies vaccination certificate (administered 21 days to 12 months before arrival; inactivated or recombinant only)',
            'Additional species vaccinations — dogs: distemper, hepatitis, parvovirus, leptospirosis; cats: rhinotracheitis, panleukopenia, calicivirus',
            'Rabies antibody titer test (RNATT) for high-risk countries only — result ≥ 0.5 IU/ml, valid 365 days, sample drawn ≥ 21 days after vaccination',
            'Government-endorsed international veterinary health certificate from the country of origin',
            'MOCCAE import permit (AED 200 per pet, valid 90 days from issuance)',
            'Antiparasitic treatment record (internal and external) within 14 days of arrival',
            'Owner passport copy and UAE visa or residency details for the permit application',
          ],
        },
        {
          type: 'p',
          text: 'Every certificate, vaccination record and permit must show the exact same microchip number. We triple-check the whole pack before you fly. For the full, current checklist see our UAE pet import requirements guide.',
        },
      ],
    },
    {
      h2: 'MOCCAE Import Permit Application',
      intro:
        'The MOCCAE import permit is the document that legally authorizes your pet to enter the UAE. It is applied for online and we guide you through the application end to end.',
      body: [
        {
          type: 'p',
          text: 'The permit is issued by the Ministry of Climate Change and Environment through its online portal. Access requires a UAE Pass, which is why many newcomers ask us to coordinate the application on their behalf with a vetted local partner. The fee is AED 200 per pet, and the permit is valid for 90 days from issuance — your pet must land inside that window or the permit must be reissued.',
        },
        {
          type: 'p',
          text: 'To apply you will need the microchip number, complete vaccination records, the rabies titer result if you are coming from a high-risk country, a copy of the owner\'s passport, the UAE visa or residency details where applicable, and a recent photograph of the pet. The standard limit is 2 pets per person per year through this process.',
        },
        {
          type: 'p',
          text: 'Processing usually takes anywhere from one working day to about two weeks depending on how complete the application is, so we encourage clients to apply early. We do not hold a MOCCAE license ourselves — we guide you through the MOCCAE requirements and, on our higher service tiers, coordinate the submission through vetted partners. Learn more on our dedicated MOCCAE pet permit page.',
        },
      ],
    },
    {
      h2: 'Pet Import Timeline',
      intro:
        'The biggest question every importer has is "how long will this take?" The honest answer depends entirely on whether your origin country is classified low-risk or high-risk for rabies.',
      body: [
        {
          type: 'p',
          text: 'From a low-risk country — for example most of Western Europe — with a pet that is already microchipped and rabies-vaccinated, the import can be completed in roughly 2 to 6 weeks. The main constraints are the health certificate (issued close to travel), antiparasitic treatment within 14 days of arrival and permit processing of one to two weeks. Starting completely from scratch, including a new vaccination and its 21-day wait, pushes this closer to 4 to 8 weeks.',
        },
        {
          type: 'p',
          text: 'From a high-risk country, plan for approximately 4 months. The rabies titer test sample can only be drawn 21 days after vaccination, results take a further 2 to 3 weeks, and then a mandatory 90-day waiting period runs from the date the blood sample was collected. This 90-day window cannot be shortened under any circumstances, so it sets the floor for your entire timeline. We map your exact dates backward from your target arrival so every deadline lands in the right order.',
        },
        {
          type: 'table',
          headers: ['Origin country', 'Typical timeline', 'Key driver'],
          rows: [
            ['Low-risk (already vaccinated)', '2 – 6 weeks', 'Health certificate + permit processing'],
            ['Low-risk (from scratch)', '4 – 8 weeks', 'New vaccination + 21-day wait'],
            ['High-risk (full protocol)', '~4 months', 'Titer test + 90-day waiting period'],
          ],
        },
      ],
    },
    {
      h2: 'Pet Import Cost Dubai',
      intro:
        'Total import cost depends on your origin country, your pet\'s size, the airline and how much you want handled for you. Government fees are a small, fixed part of the picture; flights and veterinary work make up most of the spend.',
      body: [
        {
          type: 'p',
          text: 'Most pet imports to Dubai fall between roughly AED 2,000 for a simple regional move and AED 20,000 for a long-haul, large-breed or premium door-to-door import. The government portion is modest and predictable: a MOCCAE import permit of AED 200 per pet, plus an airport release fee at clearance of about AED 500 per dog or AED 250 per cat. That works out to roughly AED 700 in government fees for a dog and AED 450 for a cat. Everything beyond that is veterinary work, the crate, cargo and coordination.',
        },
        {
          type: 'table',
          headers: ['Cost component', 'Typical range (AED)'],
          rows: [
            ['MOCCAE import permit', '200 per pet'],
            ['Airport release / veterinary inspection', '250 (cat) – 500 (dog)'],
            ['Veterinary (vaccines, health cert, titer)', '1,200 – 3,000'],
            ['IATA-compliant crate', '300 – 2,000'],
            ['Flight / manifested cargo', '3,000 – 12,000+'],
            ['Coordination & handling', '1,500 – 6,000'],
          ],
        },
        {
          type: 'p',
          text: 'The single largest variable is the flight. Cargo from nearby regions can start around AED 3,000, while a large dog on a long-haul route can run well past AED 12,000. We give you a clear, itemized estimate up front so there are no surprises at the airport.',
        },
      ],
    },
    {
      h2: 'Banned Dog Breeds',
      intro:
        'Before you plan anything, check that your dog\'s breed is allowed. The UAE prohibits the import of certain breeds outright, and Dubai adds its own residency restrictions on top.',
      body: [
        {
          type: 'p',
          text: 'Under Ministerial Resolution No. 448 of 2017, a number of breeds and their crosses are banned from import into the UAE, including Pit Bull types (Pit Bull Terrier, American Staffordshire Terrier, American Bully), most Mastiff types (Fila Brasileiro, Dogo Argentino, Tibetan Mastiff, Boerboel, Cane Corso, Bullmastiff, Dogue de Bordeaux, Neapolitan Mastiff, English Mastiff), the Japanese Tosa, Rottweiler, Doberman, Presa Canario, Boxer and wolf-dog hybrids. Any mixed breed that is morphologically identifiable as one of these may also be refused.',
        },
        {
          type: 'p',
          text: 'Separately, Dubai restricts certain breeds from living in apartments and requires them to be leashed and muzzled in public and registered with the Veterinary Services Division — these include the Bull Terrier, Husky, English Bulldog, Ca de Bou, Bulldog and Shar Pei. Cats are generally not subject to breed bans, though early-generation Savannah and Bengal cats can face additional scrutiny.',
        },
        {
          type: 'p',
          text: 'There are narrow exceptions for service, emotional-support and other medical-purpose animals, which require training-centre documentation and a supporting medical report. Because enforcement is interpreted by type and can change, we always check your specific dog against the current MOCCAE list before you commit. See our banned dog breeds in Dubai guide for the full breakdown.',
        },
      ],
    },
    {
      h2: 'Airport Clearance at DXB and AUH',
      intro:
        'Pets enter the UAE as manifested cargo, so they arrive at a cargo terminal rather than the passenger hall. With documents in order, clearance is usually quick.',
      body: [
        {
          type: 'p',
          text: 'At Dubai International (DXB), your pet lands at the Emirates / dnata Cargo Village. A MOCCAE veterinary inspector examines the animal, scans the microchip and checks it against the import permit, then reviews the health certificate and vaccination records. Customs processes the clearance, the veterinary inspection and release fee is paid — roughly AED 500 for a dog and AED 250 for a cat — and the pet is released to you or your nominated agent. Most pets clear within 1 to 2 hours of landing when paperwork is complete.',
        },
        {
          type: 'p',
          text: 'At Abu Dhabi International (AUH), the process mirrors DXB: arrival at the AUH cargo terminal, MOCCAE veterinary inspection, customs clearance through the Abu Dhabi portal and payment of the inspection fee. Pets arriving in Abu Dhabi on Etihad also need an Abu Dhabi Customs Bill of Entry arranged in advance. We advise clients on which airport suits their route and handle the advance notifications.',
        },
        {
          type: 'p',
          text: 'A word of caution: pets that arrive from a high-risk country without a valid titer test, or with incomplete paperwork, can be held in quarantine at the owner\'s expense — so the airport is exactly where careful preparation pays off. Because inspection and clearance can take time, especially outside business hours, we strongly recommend using a coordinated clearance agent, which we arrange through vetted partners.',
        },
      ],
    },
  ],
  faq: [
    {
      q: 'How much does it cost to import a pet to Dubai?',
      a: 'Most imports fall between AED 2,000 and AED 20,000 depending on origin country, pet size, airline and service level. Government fees are small and fixed — a MOCCAE import permit of AED 200 per pet plus an airport release fee of about AED 500 per dog or AED 250 per cat, roughly AED 700 per dog and AED 450 per cat in total. The flight and veterinary work make up most of the cost.',
    },
    {
      q: 'How long does it take to import a pet to Dubai?',
      a: 'From a low-risk country with an already-vaccinated pet, typically 2 to 6 weeks. From a high-risk country, plan for about 4 months, because of the mandatory rabies titer test and a 90-day waiting period that runs from the date the blood sample is collected and cannot be shortened.',
    },
    {
      q: 'Do I need a rabies titer test to bring my pet to Dubai?',
      a: 'Only if you are importing from a high-risk country. The titer test (RNATT) must show a result of at least 0.5 IU/ml, the blood sample must be drawn at least 21 days after the rabies vaccination, and the result is valid for 365 days. Pets from low-risk countries do not need a titer test at all.',
    },
    {
      q: 'What is the MOCCAE import permit and how much does it cost?',
      a: 'The MOCCAE import permit is the document that authorizes your pet to enter the UAE, applied for online through the Ministry of Climate Change and Environment portal. It costs AED 200 per pet and is valid for 90 days from issuance, so your pet must arrive within that window. We guide you through the application end to end.',
    },
    {
      q: 'How many pets can I import to Dubai?',
      a: 'The standard limit is a maximum of 2 pets per person per year through the normal import process. If you need to bring more, this can sometimes be arranged through a licensed agent, and we can advise on your options based on your situation.',
    },
    {
      q: 'How old does my pet need to be to import to Dubai?',
      a: 'The minimum import age is 12 weeks from a low-risk country and 15 weeks from a high-risk country. The higher age for high-risk countries reflects the time needed to complete the rabies vaccination and titer test in the correct sequence.',
    },
    {
      q: 'Which dog breeds are banned from import to Dubai?',
      a: 'The UAE bans the import of Pit Bull types, most Mastiff types, the Japanese Tosa, Rottweiler, Doberman, Presa Canario, Boxer and wolf-dog hybrids, along with their crosses. Dubai also restricts breeds such as the Husky and English Bulldog from apartment living. We check your specific dog against the current MOCCAE list before you commit to anything.',
    },
    {
      q: 'Do you handle the import yourselves?',
      a: 'We are a coordination service, not a carrier, and we are not a MOCCAE-licensed agency. We guide you through MOCCAE requirements, connect you with vetted veterinary and transport partners, and keep your documents and timeline correct so your pet clears customs at DXB or AUH without surprises.',
    },
  ],
  relatedLinks: [
    { label: 'Pet Relocation Dubai', to: '/service/pet-relocation-dubai/' },
    { label: 'MOCCAE Pet Permit', to: '/service/moccae-pet-permit/' },
    { label: 'Dog Relocation Dubai', to: '/service/dog-relocation-dubai/' },
    { label: 'UAE Pet Import Requirements', to: '/guides/uae-pet-import-requirements/' },
    { label: 'Banned Dog Breeds in Dubai', to: '/guides/banned-dog-breeds-dubai/' },
    { label: 'How It Works', to: '/how-it-works/' },
  ],
}

export default petImportDubai
