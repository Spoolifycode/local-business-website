import { cache } from 'react';
import { sampleBusinesses } from '@/data/sample-businesses';
import type { Business, BusinessListing } from '@/types/business';
import { toBusinessListing } from '../business/business-mapper';

// Cached data loading function
export const loadBusinessData = cache(async (): Promise<BusinessListing[]> => {
  // In development, use sample data
  const businesses = sampleBusinesses;
  
  // Transform raw Business[] to BusinessListing[]
  return businesses.map(toBusinessListing);
});

// Get business by ID (returns listing format)
export const getBusinessById = cache(async (id: string): Promise<BusinessListing | null> => {
  const businesses = await loadBusinessData();
  return businesses.find(b => b.id === id) ?? null;
});

// Get unique categories
export const getCategories = cache(async () => {
  return [
    {
      id: 'brake-service',
      slug: 'brake-service',
      name: 'Brake Service',
      description: 'Professional brake repair and maintenance services',
      businessCount: 15,
      image: '/api/placeholder/800/450'
    },
    {
      id: 'oil-change',
      slug: 'oil-change',
      name: 'Oil Change',
      description: 'Quick and efficient oil change services',
      businessCount: 20,
      image: '/api/placeholder/800/450'
    },
    {
      id: 'engine-repair',
      slug: 'engine-repair',
      name: 'Engine Repair',
      description: 'Complete engine diagnostics and repair services',
      businessCount: 12,
      image: '/api/placeholder/800/450'
    }
  ];
});