// Single source of truth for agent identity, contact, and compliance strings.
// §0.2 compliance fields MUST appear in the footer on every page.

export const site = {
  name: 'Ulyana Estates',
  url: 'https://ulyanaestates.com',
  tagline: 'Buying and selling across the South Bay, Greater LA, and Orange County.',

  agent: {
    name: 'Ulyana Hanov',
    title: 'REALTOR®',
    dre: '02442380',
    email: 'ulyanaestates@gmail.com',
    phone: '(323) 845-2611',
    phoneHref: '+13238452611',
  },

  // §0.1 — Estate Properties is the legal brokerage. This site is a personal-agent
  // brand, NOT a brokerage. Never describe "Ulyana Estates" as a brokerage/firm.
  broker: {
    name: 'Estate Properties', // CONFIRM exact legal brand lockup with the office before launch
    dre: '01879720', // CONFIRM with broker before launch
    affiliate: 'RE/MAX affiliate',
    office: '23740 Hawthorne Blvd, FL 2, Torrance, CA 90505',
    hq: '63 Malaga Cove Plaza, Palos Verdes Estates, CA 90274',
  },

  compliance: {
    affiliation:
      'Ulyana Hanov is a licensed real estate salesperson affiliated with Estate Properties.',
    equalHousing:
      'Equal Housing Opportunity. All real estate advertised is subject to the Federal Fair Housing Act.',
  },

  // Primary focus: South Bay/Torrance, West LA/Greater LA, Orange County.
  // Palos Verdes is mentioned but no longer the primary market.
  markets: [
    'Torrance',
    'Redondo Beach',
    'Hermosa Beach',
    'Manhattan Beach',
    'West Los Angeles',
    'Santa Monica',
    'Los Angeles',
    'Orange County',
    'Palos Verdes Peninsula',
  ],

  social: {
    // Social placeholders — CONFIRM / replace with real handles when available.
    instagram: '#', // CONFIRM: Instagram URL
    linkedin: '#', // CONFIRM: LinkedIn URL
  },
} as const;

// FORM ENDPOINT — Web3Forms (no backend). Public access key read at build time.
// Swap for Formspree/Getform or a CRM webhook (Follow Up Boss / kvCORE) later.
export const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';
