<<<<<<< HEAD
export const GARAGE_CATEGORIES = [
  'Auto Repair',
  'Oil Change',
  'Tire Service',
  'Brake Service',
  'Engine Repair',
  'Transmission',
  'AC Service',
  'Body Shop'
];

export const SPECIALTIES = [
  'European Cars',
  'Asian Cars',
  'American Cars',
  'Luxury Vehicles',
  'Hybrid/Electric',
  'Diesel Engines',
  'Classic Cars',
  'Performance Vehicles'
];

export const ADDITIONAL_SERVICES = [
  'Free Inspection',
  'Loaner Cars',
  'Pickup/Drop-off',
  'Shuttle Service',
  'WiFi Available',
  'Waiting Room',
  'Weekend Hours',
  'Online Booking'
];

export const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

export const DISTANCE_OPTIONS = [
  { value: 5, label: 'Within 5 km' },
  { value: 10, label: 'Within 10 km' },
  { value: 20, label: 'Within 20 km' },
  { value: 50, label: 'Within 50 km' }
];

export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'reviews', label: 'Most Reviews' },
  { value: 'distance', label: 'Nearest' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' }
];
=======
export const BLOG_CATEGORIES = [
  'All Categories',
  'Auto Maintenance',
  'Car Tips',
  'Industry News',
  'DIY Guides',
  'Safety',
  'Reviews'
] as const;

export const ARTICLE_TYPES = [
  'All Types',
  'How-to Guide',
  'News',
  'Review',
  'Tips & Tricks',
  'Case Study'
] as const;

export const SORT_OPTIONS = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rated' }
] as const;
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
