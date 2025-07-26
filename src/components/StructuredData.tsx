interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string[];
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressCountry: string;
  };
  openingHours: string[];
  image: string[];
  priceRange: string;
}

export default function StructuredData(): JSX.Element {
  const businessData: LocalBusinessData = {
    name: 'F.T. Commercials LTD',
    description:
      'Your one stop shop for all HGV and commercial vehicle repairs and maintenance in Newark. Fully equipped 5-bay workshop with inground brake rollers.',
    url: 'https://ftcommercialslimited.com',
    telephone: ['01777 871493', '07967 176567'],
    email: 'ftcommercials@gmail.com',
    address: {
      streetAddress: 'Ollerton Road',
      addressLocality: 'Newark',
      addressCountry: 'United Kingdom',
    },
    openingHours: ['Mo-Fr 07:00-17:00'],
    image: [
      'https://ftcommercialslimited.com/images/workshop-1.jpg',
      'https://ftcommercialslimited.com/images/workshop-2.jpg',
    ],
    priceRange: '££',
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    ...businessData,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.1',
      longitude: '-0.8',
    },
    sameAs: [], // Add social media profiles when available
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    currenciesAccepted: 'GBP',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
