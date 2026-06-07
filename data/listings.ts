// Listings are rendered by <ListingsGrid /> from this typed local array.
//
// IDX INTEGRATION POINT
// ---------------------------------------------------------------------------
// Live MLS listings flow through Estate Properties' CRMLS IDX agreement via a
// vendor feed (iHomefinder, RealScout, Showcase IDX, or kvCORE). They cannot be
// scraped. When that vendor feed is wired up, replace the `listings` array below
// with the vendor's data source (or fetch + map into this same `Listing` shape).
// Any future feed MUST remain CRMLS/IDX-compliant. See README "IDX integration".
// ---------------------------------------------------------------------------

export type Listing = {
  id: string;
  status: 'active' | 'coming-soon' | 'placeholder';
  price: number;
  address: string;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt?: number;
  lotSqft?: number;
  pricePerSqft?: number;
  mls?: string; // e.g. 'SB26121572'
  source?: string; // e.g. 'CRMLS'
  attribution?: string; // e.g. 'Listed by Ulyana Hanov, Estate Properties'
  image: string;
  alt: string;
  href: string;
};

export const listings: Listing[] = [
  {
    id: 'sb26121572',
    status: 'active',
    price: 999000,
    address: '4175 W 172nd St, Torrance, CA 90504',
    neighborhood: 'Northwest Torrance',
    beds: 3,
    baths: 2,
    sqft: 1586,
    yearBuilt: 1951,
    lotSqft: 5776,
    pricePerSqft: 630,
    mls: 'SB26121572',
    source: 'CRMLS',
    attribution: 'Listed by Ulyana Hanov, Estate Properties',
    // [LISTING PHOTOS] Drop Ulyana's own MLS photos into
    // /public/listings/4175-w-172nd/ (01.jpg, 02.jpg, ...). She holds the rights
    // as listing agent. Do NOT hotlink Zillow's CDN in production.
    image: '/listings/4175-w-172nd/01.jpg',
    alt: 'Front exterior of 4175 W 172nd St, a remodeled single-story home in Northwest Torrance',
    href: 'https://www.zillow.com/homedetails/4175-W-172nd-St-Torrance-CA-90504/20369883_zpid/',
  },
];

// Deep link to Ulyana's full roster on the Estate Properties site.
// CONFIRM URL — placeholder until her agent page is live.
export const viewMyListingsHref =
  'https://www.estateproperties.com/'; // CONFIRM: replace with Ulyana's agent roster URL
