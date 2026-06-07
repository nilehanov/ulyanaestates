export type Neighborhood = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  image: string;
  alt: string;
};

// Representative photography to be supplied by Ulyana. [NEIGHBORHOOD PHOTOS]
// Drop replacements (optimized webp) at the same paths.
export const neighborhoods: Neighborhood[] = [
  {
    id: 'south-bay',
    name: 'South Bay & Torrance',
    tag: 'Home Base',
    blurb:
      'Where I live and work — Torrance, Redondo, Hermosa, and Manhattan Beach. Great schools, walkable beach towns, and an easy drive to just about everything in LA.',
    image: '/neighborhoods/beach-cities.webp',
    alt: 'Beach town pier and coastline in the South Bay',
  },
  {
    id: 'west-la',
    name: 'West LA & the Westside',
    tag: 'City',
    blurb:
      'Santa Monica, Brentwood, Culver City, and the wider Westside — walkable neighborhoods, ocean air, and quick access to everything the city has to offer.',
    image: '/lifestyle/village.webp',
    alt: 'Palm-lined street on the Westside of Los Angeles',
  },
  {
    id: 'orange-county',
    name: 'Orange County',
    tag: 'Coast',
    blurb:
      'From the harbor towns to the beaches — Newport, Huntington, Irvine, and the OC coast, with a more relaxed pace and strong communities just south of LA.',
    image: '/neighborhoods/rpv.webp',
    alt: 'Orange County coastline with cliffs and ocean',
  },
  {
    id: 'palos-verdes',
    name: 'Palos Verdes Peninsula',
    tag: 'Coastal Bluffs',
    blurb:
      'Up on the hill — quiet streets, ocean views, and some of the best frontage on the coast. A short hop from the South Bay when you want a little more room.',
    image: '/neighborhoods/pve.webp',
    alt: 'Bluffs and ocean views on the Palos Verdes Peninsula',
  },
];
