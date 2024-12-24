import { Business } from '@/types/business';

export const sampleBusinesses: Business[] = [
  {
    id: '1',
    place_id: 'ChIJLQE1',
    name: 'De Drie Graefjes',
    tagline: 'Authentic Dutch Bakery & Café in Amsterdam Centrum',
    rating: 4.1,
    review_count: 1250,
    price_level: 2,

    contact: {
      phone: '+31 20 123 4567',
      email: 'info@dedriegraefjes.nl',
      website: 'https://dedriegraefjes.nl',
      social: {
        instagram: 'dedriegraefjes',
        facebook: 'dedriegraefjes'
      }
    },

    location: {
      address: 'Rokin 128',
      city: 'Amsterdam',
      state: 'North Holland',
      postal_code: '1012 LC',
      coordinates: {
        lat: 52.3676,
        lng: 4.8936
      },
      neighborhood: 'Centrum'
    },

    hours: {
      monday: { open: '08:00', close: '18:00' },
      tuesday: { open: '08:00', close: '18:00' },
      wednesday: { open: '08:00', close: '18:00' },
      thursday: { open: '08:00', close: '18:00' },
      friday: { open: '08:00', close: '19:00' },
      saturday: { open: '09:00', close: '19:00' },
      sunday: { open: '10:00', close: '17:00' }
    },

    details: {
      categories: ['Bakery', 'Café', 'Restaurant'],
      features: [
        'Takeaway Available',
        'Outdoor Seating',
        'Wheelchair Accessible',
        'Wi-Fi'
      ],
      payment_methods: ['Cash', 'Credit Card', 'Debit Card'],
      languages: ['Dutch', 'English'],
      parking: {
        available: false
      }
    },

    media: {
      photos: [
        {
          url: '/images/samples/drie1.jpg',
          alt: 'Store front of De Drie Graefjes',
          type: 'exterior'
        },
        {
          url: '/images/samples/drie2.jpg',
          alt: 'Fresh pastries display',
          type: 'product'
        }
      ],
      logo: '/images/samples/drie-logo.png'
    },

    content: {
      promotional_md: `
# De Drie Graefjes - Amsterdam's Beloved Bakery

A cornerstone of Amsterdam's culinary scene since 1989, De Drie Graefjes brings the authentic taste of Dutch baking to the heart of the city. Our cozy café on Rokin street has been serving fresh pastries, artisanal coffee, and memorable experiences to locals and visitors alike.

## Our Specialties
Known for our traditional Dutch apple pie and red velvet cake, we take pride in using only the finest ingredients and time-honored recipes. Each day starts with freshly baked goods prepared by our expert bakers.

## Perfect Location
Located in the historic center of Amsterdam, we're just a short walk from Dam Square and the Royal Palace. Whether you're starting your day, taking a shopping break, or meeting friends, our warm atmosphere welcomes you.
      `,
      last_fetched: '2024-01-01T12:00:00Z',
      last_updated: '2024-01-01T12:00:00Z'
    },

    metadata: {
      title: 'De Drie Graefjes - Traditional Dutch Bakery & Café in Amsterdam',
      description: 'Authentic Dutch bakery and café in central Amsterdam, known for traditional pastries, cakes, and artisanal coffee. Visit us near Dam Square.',
      keywords: ['bakery', 'cafe', 'amsterdam', 'dutch pastries', 'coffee'],
      schema_type: 'Bakery'
    }
  }
  // Add more sample businesses here
];
