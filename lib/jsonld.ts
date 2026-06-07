import { site } from '@/data/site';
import { listings } from '@/data/listings';

// RealEstateAgent schema.org JSON-LD (§2). Rendered in the root layout so it
// ships in prerendered HTML on every page.
export function realEstateAgentJsonLd() {
  const active = listings.find((l) => l.status === 'active');

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: site.agent.name,
    description: site.compliance.affiliation,
    url: site.url,
    image: `${site.url}/about/ulyana-portrait.png`,
    telephone: site.agent.phone,
    email: site.agent.email,
    knowsLanguage: ['en'],
    jobTitle: 'REALTOR®',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CA DRE License',
      value: site.agent.dre,
    },
    worksFor: {
      '@type': 'RealEstateOrganization',
      name: site.broker.name,
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'CA DRE License',
        value: site.broker.dre,
      },
    },
    memberOf: {
      '@type': 'RealEstateOrganization',
      name: site.broker.name,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23740 Hawthorne Blvd, FL 2',
      addressLocality: 'Torrance',
      addressRegion: 'CA',
      postalCode: '90505',
      addressCountry: 'US',
    },
    areaServed: site.markets.map((m) => ({
      '@type': 'City',
      name: m,
    })),
    makesOffer: active
      ? {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SingleFamilyResidence',
            name: active.address,
            address: active.address,
          },
          price: active.price,
          priceCurrency: 'USD',
        }
      : undefined,
  };
}
