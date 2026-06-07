// Single source of truth for agent identity, contact, and compliance strings.
// §0.2 compliance fields MUST appear in the footer on every page.

export const site = {
  name: 'Ulyana Estates',
  url: 'https://ulyanaestates.com',
  tagline: 'Coastal estates, quietly handled — Palos Verdes & the South Bay.',

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

  markets: [
    'Palos Verdes Estates',
    'Rolling Hills',
    'Rolling Hills Estates',
    'Rancho Palos Verdes',
    'Manhattan Beach',
    'Hermosa Beach',
    'Redondo Beach',
    'Torrance',
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
