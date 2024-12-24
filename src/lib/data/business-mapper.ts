import type { Business, BusinessListing } from '@/types/business';

export function toBusinessListing(business: Business): BusinessListing {
  return {
    id: business.id,
    name: business.name,
    slug: business.place_id.toLowerCase(), // Using place_id as slug for now
    description: business.content.promotional_md,
    rating: business.rating,
    reviewCount: business.review_count,
    priceRange: business.price_level ? '€'.repeat(business.price_level) : undefined,
    address: {
      street: business.location.address,
      city: business.location.city,
      state: business.location.state,
      postalCode: business.location.postal_code,
    },
    categories: business.details.categories,
    openNow: !!business.hours,  // Simple check for hours existence
    images: business.media.photos?.map(photo => photo.url),
    services: business.details.specialties?.map(specialty => ({
      name: specialty,
      slug: specialty.toLowerCase().replace(/\s+/g, '-'),
      description: undefined
    })),
    isVerified: true, // You might want to add verification logic
    contact: {
      phone: business.contact.phone,
      email: business.contact.email,
      website: business.contact.website
    }
  };
}