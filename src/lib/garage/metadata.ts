import type { Metadata } from 'next';
import type { GarageListing } from '@/types/garage';

export function generateGarageMetadata(garage: GarageListing): Metadata {
  const title = `${garage.name} - Auto Repair & Service in ${garage.address.city}`;
  const description = `Professional auto repair and maintenance services at ${garage.name} in ${garage.address.city}. ${
    garage.specializations.length > 0 
      ? `Specializing in ${garage.specializations.join(', ')}. `
      : ''
  }Located at ${garage.address.street}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website', // Changed from 'business.business' to 'website'
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/garages/${garage.slug}`,
      images: garage.images?.map(image => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${garage.name} - Auto Garage in ${garage.address.city}`
      })) ?? [],
    },
    alternates: {
      canonical: `/garages/${garage.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    }
  };
}

export function generateBreadcrumbs(garage: GarageListing) {
  return [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Garages",
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}/garages`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": garage.name,
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}/garages/${garage.slug}`
    }
  ];
}