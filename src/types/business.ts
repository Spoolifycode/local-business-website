export interface BaseAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface BusinessHours {
  open: string;
  close: string;
  isOpen?: boolean;
}

export interface BusinessService {
  name: string;
  slug: string;
  description?: string;
  estimatedDuration?: string;
  priceRange?: {
    from: number;
    to?: number;
  };
}

export interface Business {
  id: string;
  place_id: string;
  name: string;
  tagline?: string;
  rating?: number;
  review_count?: number;
  price_level?: number;

  contact: {
    phone?: string;
    email?: string;
    website?: string;
    social?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };

  location: {
    address: string;
    city: string;
    state: string;
    postal_code: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    neighborhood?: string;
  };

  hours?: Record<string, BusinessHours>;

  details: {
    categories: string[];
    features: string[];
    certifications?: string[];
    specialties?: string[];
    brands_serviced?: string[];
    equipment?: string[];
    payment_methods?: string[];
    languages?: string[];
    parking?: {
      available: boolean;
      type?: string[];
    };
  };

  media: {
    photos?: Array<{
      url: string;
      alt: string;
      type: 'exterior' | 'interior' | 'work' | 'team' | 'other' | 'product';
    }>;
    logo?: string;
  };

  content: {
    promotional_md?: string;
    services_description?: string;
    amenities_description?: string;
    raw_html?: string;
    last_fetched: string;
    last_updated: string;
  };

  metadata: {
    title: string;
    description: string;
    keywords: string[];
    schema_type?: string;
  };
}

export interface BusinessListing {
  id: string;
  slug: string;
  name: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  address: BaseAddress;
  categories: string[];
  openNow?: boolean;
  images?: string[];
  services?: BusinessService[];
  isVerified?: boolean;
  responseTime?: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: Record<string, BusinessHours>;
  features?: string[];
  payment_methods?: string[];
  languages?: string[];
}