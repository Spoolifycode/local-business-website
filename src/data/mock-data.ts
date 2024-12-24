import { Business, BusinessListing } from '@/types';

export const MOCK_CATEGORIES = [
  'auto-repair',
  'body-shop',
  'tire-service',
  'oil-change',
  'brake-service'
];

export const MOCK_LOCATIONS = [
  'new-york',
  'los-angeles',
  'chicago',
  'houston',
  'phoenix'
];

export const MOCK_FEATURES = [
  '24/7 Service',
  'Free Estimates',
  'Emergency Service',
  'Certified Mechanics',
  'Warranty Offered',
  'Loaner Cars',
  'WiFi Available',
  'Online Booking'
];

export const MOCK_BUSINESSES: Business[] = Array.from({ length: 20 }, (_, i) => ({
  id: `business-${i + 1}`,
  place_id: `place-${i + 1}`,
  name: `Auto Shop ${i + 1}`,
  tagline: 'Professional Auto Repair Services',
  rating: 4 + Math.random(),
  review_count: Math.floor(Math.random() * 500) + 50,
  price_level: Math.floor(Math.random() * 3) + 1,

  contact: {
    phone: '(555) 123-4567',
    email: 'contact@autoshop.com',
    website: 'https://example.com',
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
    },
  },

  location: {
    address: `${1234 + i} Auto Street`,
    city: 'New York',
    state: 'NY',
    postal_code: '10001',
    coordinates: {
      lat: 40.7128 + (Math.random() - 0.5) * 0.1,
      lng: -74.0060 + (Math.random() - 0.5) * 0.1,
    },
  },

  hours: {
    Monday: { open: '08:00', close: '18:00', isOpen: true },
    Tuesday: { open: '08:00', close: '18:00', isOpen: true },
    Wednesday: { open: '08:00', close: '18:00', isOpen: true },
    Thursday: { open: '08:00', close: '18:00', isOpen: true },
    Friday: { open: '08:00', close: '18:00', isOpen: true },
    Saturday: { open: '09:00', close: '16:00', isOpen: true },
    Sunday: { open: 'Closed', close: 'Closed', isOpen: false },
  },

  details: {
    categories: ['auto-repair'],
    features: MOCK_FEATURES.slice(0, Math.floor(Math.random() * 5) + 3),
    certifications: ['ASE Certified', 'AAA Approved'],
    specialties: ['Engine Repair', 'Brake Service', 'Transmission'],
    brands_serviced: ['Toyota', 'Honda', 'Ford', 'BMW'],
    payment_methods: ['Credit Card', 'Cash', 'Check', 'Insurance'],
    languages: ['English', 'Spanish'],
    parking: {
      available: true,
      type: ['On-site', 'Street'],
    },
  },

  media: {
    photos: [
      {
        url: `/api/placeholder/400/300?text=Auto+Shop+${i + 1}`,
        alt: `Auto Shop ${i + 1} exterior`,
        type: 'exterior',
      },
      {
        url: `/api/placeholder/400/300?text=Interior+${i + 1}`,
        alt: `Auto Shop ${i + 1} interior`,
        type: 'interior',
      },
    ],
    logo: `/api/placeholder/100/100?text=Logo+${i + 1}`,
  },

  content: {
    promotional_md: `# Welcome to Auto Shop ${i + 1}
    
We are your trusted partner for all automotive repair needs. With over 20 years of experience, our certified mechanics provide top-quality service for all makes and models.

## Our Services
- Complete Auto Repair
- Brake Service
- Engine Diagnostics
- Transmission Repair
- Oil Changes
- Tire Service

## Why Choose Us
- ASE Certified Mechanics
- Written Warranties
- Fair & Transparent Pricing
- Quick Turnaround
`,
    services_description: 'Comprehensive auto repair services',
    amenities_description: 'Comfortable waiting area with WiFi',
    last_fetched: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  },

  metadata: {
    title: `Auto Shop ${i + 1} | Professional Auto Repair Services`,
    description: `Auto Shop ${i + 1} provides professional auto repair services in New York. ASE certified mechanics, fair pricing, and excellent customer service.`,
    keywords: ['auto repair', 'mechanic', 'car service', 'brake repair'],
    schema_type: 'AutoRepair',
  },
}));

// Convert Business to BusinessListing for list views
export const MOCK_BUSINESS_LISTINGS: BusinessListing[] = MOCK_BUSINESSES.map(business => ({
  id: business.id,
  slug: business.id,
  name: business.name,
  description: business.tagline,
  rating: business.rating,
  reviewCount: business.review_count,
  priceRange: '$'.repeat(business.price_level || 0),
  address: {
    street: business.location.address,
    city: business.location.city,
    state: business.location.state,
    postalCode: business.location.postal_code,
  },
  categories: business.details.categories,
  openNow: true,
  images: business.media.photos?.map(photo => photo.url),
  isVerified: true,
  responseTime: 'Usually responds within 1 hour',
  contact: {
    phone: business.contact.phone,
    email: business.contact.email,
    website: business.contact.website,
  },
  hours: business.hours,
  features: business.details.features,
}));