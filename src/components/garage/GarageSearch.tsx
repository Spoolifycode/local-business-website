<<<<<<< HEAD
'use client';

import { useState, useEffect, useTransition } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, MapPin, Star, Clock } from 'lucide-react';
import { trackSearch } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GarageCard } from './GarageCard';
import { cn } from '@/lib/utils';
import type { Garage } from '@/types/garage';

=======
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, MapPin, Star, Clock } from 'lucide-react';
import { trackSearch } from '@/lib/analytics';

interface GarageSearchProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch?: (query: string) => void;
  onLocationChange?: (location: string) => void;
  onFilterChange?: (filters: typeof defaultFilters) => void;
}

// Constants
const GARAGE_CATEGORIES = [
  "All Services",
  "Auto Repair",
  "Tire Services",
  "Body Shops",
  "Oil Change",
  "Brake Service",
  "Engine Repair",
  "Transmission",
  "Diagnostics"
] as const;

const defaultFilters = {
  openNow: false,
  rating4Plus: false,
  distance5km: false
};

// Types
interface Garage {
  id: number;
  name: string;
  category: string;
  rating: string;
  reviewCount: number;
  address: string;
  distance: string;
  openNow: boolean;
  image: string;
  priceRange: string;
  services: string[];
  description: string;
  openHours: {
    open: string;
    close: string;
  };
}

// Static mock data to prevent hydration issues
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
const MOCK_GARAGES: Garage[] = [
  {
    id: 1,
    name: "AutoFix Pro Services",
    category: "Auto Repair",
    rating: "4.8",
    reviewCount: 156,
<<<<<<< HEAD
    address: {
      street: "123 Main St",
      city: "Amsterdam",
      zipCode: "1012 AB"
    },
    distance: "2.4",
    openNow: true,
    image: "/api/placeholder/400/320",
=======
    address: "Amsterdam",
    distance: "2.4",
    openNow: true,
    image: "https://images.unsplash.com/photo-1632823471406-4477499ae0c5?w=800",
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
    priceRange: "€€",
    services: ["Oil Change", "Brake Service", "Engine Repair"],
    description: "Professional auto repair services with years of experience.",
    openHours: { open: "09:00", close: "18:00" }
  },
  {
    id: 2,
    name: "Tire Masters",
    category: "Tire Services",
    rating: "4.7",
    reviewCount: 132,
<<<<<<< HEAD
    address: {
      street: "456 Service Road",
      city: "Amsterdam",
      zipCode: "1013 CD"
    },
    distance: "3.1",
    openNow: true,
    image: "/api/placeholder/400/320",
=======
    address: "Amsterdam",
    distance: "3.1",
    openNow: true,
    image: "https://images.unsplash.com/photo-1632823471401-613bd9936c41?w=800",
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
    priceRange: "€",
    services: ["Tire Rotation", "Wheel Alignment", "Tire Repair"],
    description: "Expert tire services and wheel alignments.",
    openHours: { open: "08:00", close: "17:00" }
  },
  {
    id: 3,
    name: "Elite Auto Body",
    category: "Body Shops",
    rating: "4.9",
    reviewCount: 189,
<<<<<<< HEAD
    address: {
      street: "789 Body Ave",
      city: "Amsterdam",
      zipCode: "1014 EF"
    },
    distance: "4.2",
    openNow: false,
    image: "/api/placeholder/400/320",
=======
    address: "Amsterdam",
    distance: "4.2",
    openNow: false,
    image: "https://images.unsplash.com/photo-1632823471417-c05fd95d0f8f?w=800",
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
    priceRange: "€€€",
    services: ["Body Repair", "Paint Service", "Dent Removal"],
    description: "Premium auto body repair and paint services.",
    openHours: { open: "09:00", close: "18:00" }
<<<<<<< HEAD
  }
];

interface GarageSearchProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch?: (query: string) => void;
  onLocationChange?: (location: string) => void;
  onFilterChange?: (filters: typeof defaultFilters) => void;
}

const defaultFilters = {
  openNow: false,
  rating4Plus: false,
  distance5km: false
};

const GarageSearch = ({
  initialQuery = "",
=======
  },
  {
    id: 4,
    name: "Quick Oil Change",
    category: "Oil Change",
    rating: "4.6",
    reviewCount: 98,
    address: "Amsterdam",
    distance: "1.8",
    openNow: true,
    image: "https://images.unsplash.com/photo-1632823471412-5bf3d44001d0?w=800",
    priceRange: "€",
    services: ["Oil Change", "Filter Replacement", "Fluid Check"],
    description: "Fast and reliable oil change services.",
    openHours: { open: "08:30", close: "19:00" }
  },
  {
    id: 5,
    name: "Brake Specialists",
    category: "Brake Service",
    rating: "4.8",
    reviewCount: 145,
    address: "Amsterdam",
    distance: "2.9",
    openNow: true,
    image: "https://images.unsplash.com/photo-1632823471423-5c4e34e86671?w=800",
    priceRange: "€€",
    services: ["Brake Repair", "Rotor Replacement", "Brake Inspection"],
    description: "Expert brake service and repair.",
    openHours: { open: "09:00", close: "17:30" }
  }
];

export default function GarageSearch({ 
  initialQuery = "", 
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
  initialLocation = "",
  onSearch,
  onLocationChange,
  onFilterChange
<<<<<<< HEAD
}: GarageSearchProps): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const urlSearchQuery = searchParams?.get('search') || '';
=======
}: GarageSearchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearchQuery = searchParams.get('search') || '';
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
  
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery || initialQuery);
  const [locationQuery, setLocationQuery] = useState(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filters, setFilters] = useState(defaultFilters);

<<<<<<< HEAD
  useEffect(() => {
    if (searchParams && urlSearchQuery) {
      setSearchQuery(urlSearchQuery);
      onSearch?.(urlSearchQuery);
      const garagesCount = MOCK_GARAGES.filter((garage: Garage) => 
        garage.name.toLowerCase().includes(urlSearchQuery.toLowerCase()) ||
        garage.services.some((service: string) => 
=======
  // Update search when URL parameter changes
  useEffect(() => {
    if (urlSearchQuery) {
      setSearchQuery(urlSearchQuery);
      onSearch?.(urlSearchQuery);
      const garagesCount = MOCK_GARAGES.filter(garage => 
        garage.name.toLowerCase().includes(urlSearchQuery.toLowerCase()) ||
        garage.services.some(service => 
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
          service.toLowerCase().includes(urlSearchQuery.toLowerCase())
        ) ||
        garage.category.toLowerCase().includes(urlSearchQuery.toLowerCase())
      ).length;
      trackSearch(urlSearchQuery, garagesCount);
    }
<<<<<<< HEAD
  }, [searchParams, urlSearchQuery, onSearch]);

  const handleSearch = (query: string) => {
    startTransition(() => {
      setSearchQuery(query);
      const newParams = new URLSearchParams(searchParams?.toString());
      if (query) {
        newParams.set('search', query);
      } else {
        newParams.delete('search');
      }
      router.push(`?${newParams.toString()}`);
      onSearch?.(query);
    });
  };

  const handleLocationChange = (location: string) => {
    setLocationQuery(location);
    onLocationChange?.(location);
  };

  const toggleFilter = (filterKey: keyof typeof filters) => {
    const newFilters = {
      ...filters,
      [filterKey]: !filters[filterKey]
    };
=======
  }, [urlSearchQuery, onSearch]);

  // Handle filter changes
  const handleFilterChange = (newFilters: typeof defaultFilters) => {
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

<<<<<<< HEAD
  const filteredGarages = MOCK_GARAGES.filter((garage: Garage) => {
    const matchesSearch = searchQuery === "" ? true :
      garage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      garage.services.some((service: string) => 
=======
  // Filter garages based on search criteria
  const filteredGarages = MOCK_GARAGES.filter(garage => {
    const matchesSearch = searchQuery === "" ? true :
      garage.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      garage.services.some(service => 
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
        service.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      garage.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = locationQuery === "" ? true :
<<<<<<< HEAD
      garage.address.street.toLowerCase().includes(locationQuery.toLowerCase()) ||
      garage.address.city.toLowerCase().includes(locationQuery.toLowerCase());
=======
      garage.address.toLowerCase().includes(locationQuery.toLowerCase());
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
    
    const matchesCategory = selectedCategory === null || selectedCategory === "All Services" ? 
      true : garage.category === selectedCategory;

    const matchesFilters = (
      (!filters.openNow || garage.openNow) &&
      (!filters.rating4Plus || parseFloat(garage.rating) >= 4.0) &&
      (!filters.distance5km || parseFloat(garage.distance) <= 5.0)
    );

    return matchesSearch && matchesLocation && matchesCategory && matchesFilters;
  });

  return (
    <div className="space-y-6">
<<<<<<< HEAD
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search garages..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Location..."
              value={locationQuery}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={filters.openNow ? 'primary' : 'outline'}
          size="sm"
          onClick={() => toggleFilter('openNow')}
        >
          Open Now
        </Button>
        <Button
          variant={filters.rating4Plus ? 'primary' : 'outline'}
          size="sm"
          onClick={() => toggleFilter('rating4Plus')}
        >
          4+ Stars
        </Button>
        <Button
          variant={filters.distance5km ? 'primary' : 'outline'}
          size="sm"
          onClick={() => toggleFilter('distance5km')}
        >
          Within 5km
        </Button>
      </div>

      <div className="space-y-4">
        {filteredGarages.map((garage: Garage) => (
          <GarageCard key={garage.id} garage={garage} />
=======
      {/* Active Filters Display */}
      <div className="flex flex-wrap gap-2">
        {selectedCategory && (
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
            {selectedCategory}
            <button
              onClick={() => setSelectedCategory(null)}
              className="ml-2 hover:text-blue-900"
            >
              ×
            </button>
          </span>
        )}
        {Object.entries(filters).map(([key, value]) => value && (
          <span key={key} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
            {key === 'openNow' ? 'Open Now' : 
             key === 'rating4Plus' ? '4+ Stars' : 
             'Within 5km'}
            <button
              onClick={() => handleFilterChange({ ...filters, [key]: false })}
              className="ml-2 hover:text-blue-900"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        Found {filteredGarages.length} garages
        {selectedCategory && ` in ${selectedCategory}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Garage List */}
      <div className="grid gap-6">
        {filteredGarages.map((garage) => (
          <a
            key={garage.id}
            href={`/garages/${garage.id}`}
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-500"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-72 h-48 md:h-auto relative">
                <img
                  src={garage.image}
                  alt={garage.name}
                  className="w-full h-full object-cover"
                />
                {garage.openNow && (
                  <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Open Now
                  </span>
                )}
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {garage.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{garage.rating}</span>
                      <span className="text-gray-600">
                        ({garage.reviewCount} reviews)
                      </span>
                      <span>·</span>
                      <span className="text-gray-600">{garage.priceRange}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {garage.address} ({garage.distance}km)
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {garage.openHours.open} - {garage.openHours.close}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {garage.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
        ))}

        {filteredGarages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No garages found matching your criteria. Try adjusting your filters.
          </div>
        )}
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default GarageSearch;
=======
}
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
