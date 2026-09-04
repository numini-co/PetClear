# Route50 — Per-country airports & airlines tables (from seed)
**Source:** `/workspace/route50/airports_airlines_seed.json`  
**Status:** SEED ONLY — every airline row is `verificationStatus: unverified` until checked against official pet policy.  
**Locked URLs:** 50 in `LOCKED_50_URLS.txt` (all countries present in seed).  
**Do not publish fee numerals or affiliation claims. Confirm current policy on-page.**

## Mode legend
| mode | Meaning |
|---|---|
| `cargo` | Seed says cargo |
| `cabin` | Seed says cabin |
| `cabin_or_cargo` | Seed mixed / varies — treat as confirm until verified |
| `generally_not` | Seed says generally not pets |
| `confirm` | Ambiguous — must verify before final copy |

## `australia`

### Airports
| IATA | City |
|---|---|
| SYD | Sydney |
| MEL | Melbourne |
| BNE | Brisbane |
| PER | Perth |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Qantas | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| Singapore Airlines | `cargo` |  | unverified |
| Virgin Australia | `confirm` |  | unverified |

## `bahrain`

### Airports
| IATA | City |
|---|---|
| BAH | Bahrain |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Gulf Air | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| flydubai | `confirm` |  | unverified |

## `canada`

### Airports
| IATA | City |
|---|---|
| YYZ | Toronto |
| YVR | Vancouver |
| YUL | Montreal |
| YYC | Calgary |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Air Canada | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| WestJet | `confirm` |  | unverified |

## `china`

### Airports
| IATA | City |
|---|---|
| PEK | Beijing Capital |
| PVG | Shanghai Pudong |
| CAN | Guangzhou |
| HKG | via HK note |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Air China | `cargo` |  | unverified |
| China Eastern | `cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Cathay Pacific | `cargo` |  | unverified |

## `egypt`

### Airports
| IATA | City |
|---|---|
| CAI | Cairo |
| HBE | Alexandria |
| SSH | Sharm el-Sheikh |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| EgyptAir | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |

## `france`

### Airports
| IATA | City |
|---|---|
| CDG | Paris Charles de Gaulle |
| ORY | Paris Orly |
| LYS | Lyon |
| NCE | Nice |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Air France | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `germany`

### Airports
| IATA | City |
|---|---|
| FRA | Frankfurt |
| MUC | Munich |
| BER | Berlin |
| DUS | Düsseldorf |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Lufthansa | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |
| Eurowings | `confirm` |  | unverified |

## `hong-kong`

### Airports
| IATA | City |
|---|---|
| HKG | Hong Kong |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Cathay Pacific | `cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `india`

### Airports
| IATA | City |
|---|---|
| DEL | Delhi |
| BOM | Mumbai |
| BLR | Bengaluru |
| HYD | Hyderabad |
| MAA | Chennai |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Emirates | `cargo` | DXB hub | unverified |
| Etihad | `cargo` | AUH | unverified |
| Air India | `cabin_or_cargo` | confirm | unverified |
| IndiGo | `generally_not` | confirm | unverified |
| Qatar Airways | `cargo` | DOH | unverified |

## `indonesia`

### Airports
| IATA | City |
|---|---|
| CGK | Jakarta |
| DPS | Denpasar Bali |
| SUB | Surabaya |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Garuda Indonesia | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Singapore Airlines | `cargo` |  | unverified |

## `ireland`

### Airports
| IATA | City |
|---|---|
| DUB | Dublin |
| ORK | Cork |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Aer Lingus | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Ryanair | `generally_not` |  | unverified |

## `italy`

### Airports
| IATA | City |
|---|---|
| FCO | Rome Fiumicino |
| MXP | Milan Malpensa |
| LIN | Milan Linate |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| ITA Airways | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `japan`

### Airports
| IATA | City |
|---|---|
| NRT | Tokyo Narita |
| HND | Tokyo Haneda |
| KIX | Osaka Kansai |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| ANA | `cabin_or_cargo` |  | unverified |
| JAL | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `kuwait`

### Airports
| IATA | City |
|---|---|
| KWI | Kuwait |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Kuwait Airways | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Jazeera | `confirm` |  | unverified |

## `malaysia`

### Airports
| IATA | City |
|---|---|
| KUL | Kuala Lumpur |
| PEN | Penang |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Malaysia Airlines | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Singapore Airlines | `cargo` |  | unverified |

## `netherlands`

### Airports
| IATA | City |
|---|---|
| AMS | Amsterdam Schiphol |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| KLM | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |

## `new-zealand`

### Airports
| IATA | City |
|---|---|
| AKL | Auckland |
| WLG | Wellington |
| CHC | Christchurch |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Air New Zealand | `cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Qantas | `cargo` |  | unverified |

## `oman`

### Airports
| IATA | City |
|---|---|
| MCT | Muscat |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Oman Air | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| flydubai | `confirm` |  | unverified |

## `pakistan`

### Airports
| IATA | City |
|---|---|
| ISB | Islamabad |
| KHI | Karachi |
| LHE | Lahore |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| PIA | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `philippines`

### Airports
| IATA | City |
|---|---|
| MNL | Manila |
| CEB | Cebu |
| CRK | Clark |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Emirates | `cargo` |  | unverified |
| Philippine Airlines | `cabin_or_cargo` |  | unverified |
| Cebu Pacific | `confirm` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |

## `qatar`

### Airports
| IATA | City |
|---|---|
| DOH | Doha Hamad |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Qatar Airways | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |

## `saudi-arabia`

### Airports
| IATA | City |
|---|---|
| RUH | Riyadh |
| JED | Jeddah |
| DMM | Dammam |
| MED | Madinah |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Saudia | `cabin_or_cargo` |  | unverified |
| flynas | `confirm` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Etihad | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `singapore`

### Airports
| IATA | City |
|---|---|
| SIN | Changi |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Singapore Airlines | `cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Scoot | `confirm` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `south-africa`

### Airports
| IATA | City |
|---|---|
| JNB | Johannesburg |
| CPT | Cape Town |
| DUR | Durban |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Emirates | `cargo` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |
| Ethiopian | `cargo` |  | unverified |
| South African Airways | `confirm` |  | unverified |

## `south-korea`

### Airports
| IATA | City |
|---|---|
| ICN | Seoul Incheon |
| GMP | Gimpo |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Korean Air | `cabin_or_cargo` |  | unverified |
| Asiana | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |

## `spain`

### Airports
| IATA | City |
|---|---|
| MAD | Madrid |
| BCN | Barcelona |
| AGP | Málaga |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Iberia | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Vueling | `confirm` |  | unverified |
| Qatar Airways | `cargo` |  | unverified |

## `thailand`

### Airports
| IATA | City |
|---|---|
| BKK | Bangkok Suvarnabhumi |
| DMK | Don Mueang |
| HKT | Phuket |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Thai Airways | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Singapore Airlines | `cargo` |  | unverified |

## `turkey`

### Airports
| IATA | City |
|---|---|
| IST | Istanbul |
| SAW | Sabiha Gökçen |
| AYT | Antalya |

### Airlines (seed — unverified)
| Airline | Mode (normalized) | Seed notes | verificationStatus |
|---|---|---|---|
| Turkish Airlines | `cabin_or_cargo` |  | unverified |
| Emirates | `cargo` |  | unverified |
| Pegasus | `confirm` |  | unverified |

## Seed quality notes
- Countries: 28
- Airline mode histogram (normalized): {'cargo': 63, 'cabin_or_cargo': 25, 'generally_not': 2, 'confirm': 12}
- Rows needing policy verify before final wording (`confirm` + `cabin_or_cargo`): 37
- Ambiguous seed labels seen: `cargo/cabin varies`, `confirm`, `limited/confirm`, `cargo/cabin program`, etc. → keep “confirm current policy” on-page until verified.
