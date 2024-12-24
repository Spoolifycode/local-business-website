import { Business } from '@/types/business';
import { Metadata } from 'next';

interface GenerateMetadataOptions {
  business?: Business;
  service?: string;
  city?: string;
  pageType: 'home' | 'listing' | 'business' | 'service';
}

export function generateSEOMetadata({
  business,
  service,
  city = '',
  pageType
}: GenerateMetadataOptions): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';

  const titleParts = [];
  let description = '';
  let url = '';

  switch (pageType) {
    case 'home':
      titleParts.push('Find Auto Repair Shops Near You');
      titleParts.push('Expert Car Service');
      description = 'Find trusted auto repair shops and mechanics in your area. Compare services, read reviews, and book appointments for professional car repair and maintenance.';
      url = baseUrl;
      break;

    case 'listing':
      titleParts.push('Auto Repair Shops');
      if (city) titleParts.push(`in ${city}`);
      titleParts.push('Expert Car Service');
      description = `Find professional auto repair shops ${city ? `in ${city}` : 'near you'}. Compare services, prices, and reviews from trusted mechanics.`;
      url = `${baseUrl}/garages`;
      break;

    case 'business':
      if (business) {
        titleParts.push(business.name);
        titleParts.push(`Auto Repair in ${business.location.city}`);
        description = `${business.name} provides professional auto repair services in ${business.location.city}. ${
          business.details.categories.length > 0 
            ? `Specializing in ${business.details.categories.slice(0, 3).join(', ')}.` 
            : ''
        } Located at ${business.location.address}.`;
        url = `${baseUrl}/garages/${business.id}`;
      }
      break;

    case 'service':
      if (business && service) {
        const serviceTitle = service.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        titleParts.push(serviceTitle);
        titleParts.push(business.name);
        titleParts.push(business.location.city);
        description = `Professional ${serviceTitle.toLowerCase()} services at ${business.name} in ${business.location.city}. Expert mechanics, quality service, and competitive pricing.`;
        url = `${baseUrl}/garages/${business.id}/${service}`;
      }
      break;
  }

  return {
    title: titleParts.join(' | '),
    description,
    openGraph: {
      title: titleParts.join(' | '),
      description,
      url,
      siteName: 'Auto Repair Directory',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image-${pageType}.jpg`,
          width: 1200,
          height: 630,
          alt: titleParts.join(' | ')
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: titleParts.join(' | '),
      description,
      images: [`${baseUrl}/og-image-${pageType}.jpg`]
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}