import { Business } from '@/types/business';

export function generateBusinessStructuredData(business: Business) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `https://yourdomain.com/garages/${business.place_id}`,
    name: business.name,
    image: business.media.photos?.[0]?.url,
    telephone: business.contact.phone,
    email: business.contact.email,
    url: business.contact.website,
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
      reviewCount: business.review_count,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    openingHoursSpecification: Object.entries(business.hours || {}).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: hours.open,
      closes: hours.close
    })),
    priceRange: '$-$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD'
  };
}

export function generateServiceStructuredData(business: Business, service: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'AutoRepair',
      name: business.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.location.address,
        addressLocality: business.location.city,
        addressRegion: business.location.state,
        postalCode: business.location.postal_code,
        addressCountry: 'US'
      }
    },
    areaServed: {
      '@type': 'City',
      name: business.location.city
    },
    offers: {
      '@type': 'Offer',
      price: service.price_range.from.toString(),
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0]
    }
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://yourdomain.com${item.url}` : undefined
    }))
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateLocalBusinessStructuredData(business: Business) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://yourdomain.com/garages/${business.place_id}#business`,
    name: business.name,
    image: business.media.photos?.[0]?.url,
    telephone: business.contact.phone,
    email: business.contact.email,
    url: business.contact.website,
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
    openingHoursSpecification: Object.entries(business.hours || {}).map(([day, hours]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: hours.open,
      closes: hours.close
    })),
    priceRange: '$-$$',
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(
      `${business.location.address}, ${business.location.city}, ${business.location.state} ${business.location.postal_code}`
    )}`
  };
}