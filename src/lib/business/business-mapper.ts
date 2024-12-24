import type { Business, BusinessListing, BusinessService } from '@/types/business';

const DAYS_OF_WEEK = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
] as const;

export function toBusinessListing(business: Business): BusinessListing {
  return {
    id: business.id,
    slug: business.place_id.toLowerCase(),
    name: business.name,
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
    openNow: isBusinessOpen(business),
    images: business.media.photos?.map(photo => photo.url),
    
    // Convert specialties to services
    services: business.details.specialties?.map(specialty => ({
      name: specialty,
      slug: specialty.toLowerCase().replace(/\s+/g, '-'),
    })),
    
    // Add verified status if business has certifications
    isVerified: business.details.certifications ? business.details.certifications.length > 0 : undefined,
    
    contact: {
      phone: business.contact.phone,
      email: business.contact.email,
      website: business.contact.website,
    },

    // Added features
    features: business.details.features,
    payment_methods: business.details.payment_methods,
    languages: business.details.languages,
    
    // Map hours directly if we want to show them in the UI
    hours: business.hours,
  };
}

function isBusinessOpen(business: Business): boolean | undefined {
  if (!business.hours) return undefined;

  const now = new Date();
  const dayOfWeek = DAYS_OF_WEEK[now.getDay()];
  const currentHours = business.hours[dayOfWeek];

  if (!currentHours) return undefined;

  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  return currentTime >= currentHours.open && currentTime <= currentHours.close;
}