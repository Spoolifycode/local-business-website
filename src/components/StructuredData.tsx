import type { Business } from '@/types';

interface StructuredDataProps {
  business: Business;
}

export function StructuredData({ business }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': business.metadata.schema_type || 'LocalBusiness',
    name: business.name,
    image: business.media.photos?.map(photo => photo.url) || [],
    '@id': `https://yourdomain.com/garages/${business.id}`,
    url: business.contact.website,
    telephone: business.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.location.address,
      addressLocality: business.location.city,
      addressRegion: business.location.state,
      postalCode: business.location.postal_code,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.location.coordinates.lat,
      longitude: business.location.coordinates.lng
    },
    aggregateRating: business.rating ? {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.review_count
    } : undefined,
    openingHoursSpecification: business.hours ? 
      Object.entries(business.hours).map(([day, hours]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: hours.open,
        closes: hours.close
      })) : undefined,
    priceRange: business.price_level ? '$'.repeat(business.price_level) : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}