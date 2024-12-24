import { Business, BusinessListing } from '@/types';
import { 
  MOCK_BUSINESSES, 
  MOCK_BUSINESS_LISTINGS, 
  MOCK_CATEGORIES, 
  MOCK_LOCATIONS 
} from '@/data/mock-data';

interface FetchOptions {
  category?: string;
  location?: string;
  businessSlug?: string;
  page?: number;
  limit?: number;
  query?: string;
}

// Fetch multiple businesses (for category and location pages)
export async function fetchBusinessListings({
  category,
  location,
  query,
  page = 1,
  limit = 12
}: FetchOptions): Promise<{
  businesses: BusinessListing[];
  total: number;
  pages: number;
}> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filtered = [...MOCK_BUSINESS_LISTINGS];

  if (category) {
    filtered = filtered.filter(business => 
      business.categories.includes(category)
    );
  }

  if (location) {
    filtered = filtered.filter(business => 
      business.address.city.toLowerCase().replace(/\s+/g, '-') === location
    );
  }

  if (query) {
    const searchTerm = query.toLowerCase();
    filtered = filtered.filter(business => 
      business.name.toLowerCase().includes(searchTerm) ||
      business.description?.toLowerCase().includes(searchTerm) ||
      business.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedResults = filtered.slice(start, end);

  return {
    businesses: paginatedResults,
    total: filtered.length,
    pages: Math.ceil(filtered.length / limit)
  };
}

// Fetch single business details
export async function fetchBusinessDetails({
  businessSlug
}: FetchOptions): Promise<Business | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!businessSlug) return null;
  
  const business = MOCK_BUSINESSES.find(b => b.id === businessSlug);
  return business || null;
}

// Get all valid categories
export async function getCategories(): Promise<string[]> {
  return MOCK_CATEGORIES;
}

// Get all valid locations for a category
export async function getLocations(_category: string): Promise<string[]> {
  return MOCK_LOCATIONS;
}

// Get all valid business slugs for a category and location
export async function getBusinessSlugs(category: string, location: string): Promise<string[]> {
  const { businesses } = await fetchBusinessListings({ category, location });
  return businesses.map(business => business.slug);
}

// Get category details
export function getCategoryDetails(categorySlug: string): {
  title: string;
  description: string;
} {
  const title = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title,
    description: `Find the best ${title.toLowerCase()} services in your area. Compare prices, read reviews, and book appointments online.`
  };
}

// Get location details
export function getLocationDetails(locationSlug: string): {
  title: string;
  description: string;
} {
  const title = locationSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title,
    description: `Discover top-rated auto repair services in ${title}. Browse local garages, compare services, and find the perfect match for your vehicle.`
  };
}