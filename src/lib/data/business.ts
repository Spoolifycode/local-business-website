import { Business } from '@/types/business';
import fs from 'fs/promises';
import path from 'path';

const DATA_DIRECTORY = path.join(process.cwd(), 'data');

async function readJSONFile<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIRECTORY, filename);
  const contents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(contents);
}

function createSlugFromBusiness(business: Business): string {
  return createSlug(business.place_id);
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  try {
    const businesses = await readJSONFile<Business[]>('businesses.json');
    return businesses.find(b => createSlugFromBusiness(b) === slug) || null;
  } catch (error) {
    console.error('Error fetching business:', error);
    return null;
  }
}

interface BusinessFilters {
  service?: string;
  city?: string;
  rating?: number;
}

export async function getAllBusinesses(
  page: number = 1,
  limit: number = 10,
  filters?: BusinessFilters
): Promise<{
  businesses: Business[];
  total: number;
  pages: number;
}> {
  try {
    let businesses = await readJSONFile<Business[]>('businesses.json');

    // Apply filters if they exist
    if (filters) {
      // Filter by service
      if (filters.service) {
        const serviceSlug = createSlug(filters.service);
        businesses = businesses.filter(b => 
          b.details.categories.some(c => createSlug(c) === serviceSlug)
        );
      }

      // Filter by city
      if (filters.city) {
        const cityLower = filters.city.toLowerCase();
        businesses = businesses.filter(b => 
          b.location.city.toLowerCase() === cityLower
        );
      }

      // Filter by rating
      if (typeof filters.rating === 'number') {
        businesses = businesses.filter(b => 
          (b.rating ?? 0) >= filters.rating!
        );
      }
    }

    // Calculate pagination
    const total = businesses.length;
    const pages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      businesses: businesses.slice(start, end),
      total,
      pages
    };
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return {
      businesses: [],
      total: 0,
      pages: 0
    };
  }
}

// Define Service interface
interface Service {
  business_slug: string;
  slug: string;
  name: string;
  description?: string;
  [key: string]: any;  // For additional fields
}

export async function getServicesByBusiness(businessSlug: string): Promise<Service[]> {
  try {
    const services = await readJSONFile<Service[]>('services.json');
    return services.filter(s => s.business_slug === businessSlug);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(
  businessSlug: string,
  serviceSlug: string
): Promise<Service | null> {
  try {
    const services = await readJSONFile<Service[]>('services.json');
    return services.find(
      s => s.business_slug === businessSlug && s.slug === serviceSlug
    ) || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export async function getCities(): Promise<string[]> {
  try {
    const businesses = await readJSONFile<Business[]>('businesses.json');
    return Array.from(new Set(businesses.map(b => b.location.city)));
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
}

export async function getServices(): Promise<string[]> {
  try {
    const businesses = await readJSONFile<Business[]>('businesses.json');
    const services = new Set<string>();
    businesses.forEach(b => {
      b.details.categories.forEach(c => services.add(c));
    });
    return Array.from(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}