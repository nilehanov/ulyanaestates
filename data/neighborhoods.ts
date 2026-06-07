export type Neighborhood = {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  image: string;
  alt: string;
};

// Representative photography to be supplied by Ulyana. [NEIGHBORHOOD PHOTOS]
// Drop images into /public/neighborhoods/ and update the `image` paths below.
export const neighborhoods: Neighborhood[] = [
  {
    id: 'pve',
    name: 'Palos Verdes Estates',
    tag: 'Coastal Bluffs',
    blurb:
      'Mediterranean-style homes along the bluffs, where Malaga Cove and Lunada Bay meet the Pacific. Quiet streets, big trees, and some of the best ocean frontage on the Peninsula.',
    image: '/neighborhoods/pve.jpg',
    alt: 'Mediterranean estate on the bluffs of Palos Verdes Estates above the Pacific',
  },
  {
    id: 'rolling-hills',
    name: 'Rolling Hills & Rolling Hills Estates',
    tag: 'Equestrian',
    blurb:
      'Gated, rural, and quiet — white ranch fences, riding trails, and real acreage behind the gates of Rolling Hills, with the village and stables of Rolling Hills Estates right next door.',
    image: '/neighborhoods/rolling-hills.jpg',
    alt: 'Equestrian trail winding through the hills of Rolling Hills',
  },
  {
    id: 'rpv',
    name: 'Rancho Palos Verdes',
    tag: 'Pacific Vistas',
    blurb:
      'Dramatic coastline from Trump National to Portuguese Bend, with wide Catalina views, coastal preserves, and a lot of homes built to make the most of them.',
    image: '/neighborhoods/rpv.jpg',
    alt: 'Coastal cliffs and ocean horizon at Rancho Palos Verdes',
  },
  {
    id: 'beach-cities',
    name: 'Manhattan, Hermosa & Redondo Beach',
    tag: 'The Strand',
    blurb:
      'The South Bay beach cities — walk-streets, the Strand, and a sand-and-volleyball culture that runs from Manhattan’s pier south through Hermosa and Redondo.',
    image: '/neighborhoods/beach-cities.jpg',
    alt: 'The Strand beachfront walkway in the South Bay beach cities',
  },
];
