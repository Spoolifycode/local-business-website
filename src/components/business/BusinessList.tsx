"use client";

import { Grid, List } from 'lucide-react';
import BusinessCard from './BusinessCard';
import type { BusinessListing } from '@/types/business';

interface BusinessListProps {
  businesses: BusinessListing[];
  category: string;
  location: string;
  view?: 'grid' | 'list';
  onViewChange?: (view: 'grid' | 'list') => void;
}

export default function BusinessList({ 
  businesses, 
  category,
  location,
  view = 'grid',
  onViewChange
}: BusinessListProps) {
  return (
    <div>
      {/* View Toggle */}
      {onViewChange && (
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onViewChange('grid')}
              className={`p-2 rounded ${
                view === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewChange('list')}
              className={`p-2 rounded ${
                view === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Business Cards */}
      <div className={view === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        : "space-y-4"
      }>
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            category={category}
            location={location}
          />
        ))}
      </div>
    </div>
  );
}