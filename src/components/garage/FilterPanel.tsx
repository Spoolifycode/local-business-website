"use client";

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import {
  GARAGE_CATEGORIES,
  SPECIALTIES,
  ADDITIONAL_SERVICES,
  PRICE_RANGES,
  DISTANCE_OPTIONS,
  SORT_OPTIONS
} from '@/lib/constants';

interface FilterPanelProps {
  onFiltersChange: (filters: FilterState) => void;
  onSortChange: (sort: string) => void;
  className?: string;
}

export interface FilterState {
  categories: string[];
  specialties: string[];
  additionalServices: string[];
  priceRanges: string[];
  distance: number | null;
  openNow: boolean;
  rating4Plus: boolean;
  onlineBooking: boolean;
  availableToday: boolean;
  emergencyService: boolean;
}

export default function FilterPanel({ 
  onFiltersChange,
  onSortChange,
  className = ''
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    specialties: [],
    additionalServices: [],
    priceRanges: [],
    distance: null,
    openNow: false,
    rating4Plus: false,
    onlineBooking: false,
    availableToday: false,
    emergencyService: false
  });
  
  const [activeSort, setActiveSort] = useState('relevance');
  const [appliedFiltersCount, setAppliedFiltersCount] = useState(0);

  const updateFilterCount = (newFilters: FilterState) => {
    let count = 0;
    // Count array filters
    count += newFilters.categories.length;
    count += newFilters.specialties.length;
    count += newFilters.additionalServices.length;
    count += newFilters.priceRanges.length;
    // Count boolean filters
    if (newFilters.openNow) count++;
    if (newFilters.rating4Plus) count++;
    if (newFilters.onlineBooking) count++;
    if (newFilters.availableToday) count++;
    if (newFilters.emergencyService) count++;
    // Count distance filter
    if (newFilters.distance !== null) count++;
    
    setAppliedFiltersCount(count);
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    updateFilterCount(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const toggleFilter = (type: keyof FilterState, value: string) => {
    const currentValues = filters[type] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    handleFilterChange({ [type]: newValues } as any);
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      specialties: [],
      additionalServices: [],
      priceRanges: [],
      distance: null,
      openNow: false,
      rating4Plus: false,
      onlineBooking: false,
      availableToday: false,
      emergencyService: false
    };
    setFilters(clearedFilters);
    updateFilterCount(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className={className}>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </div>
        {appliedFiltersCount > 0 && (
          <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-sm">
            {appliedFiltersCount}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      <div className={`
        fixed lg:relative top-0 right-0 h-full w-full lg:w-auto max-w-sm lg:max-w-none
        transform ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        transition-transform duration-200 ease-in-out
        bg-white lg:bg-transparent
        z-50 lg:z-auto
        overflow-y-auto
        lg:block
        ${isOpen ? 'shadow-xl lg:shadow-none' : ''}
      `}>
        <div className="lg:sticky lg:top-4 p-6 lg:p-0 space-y-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Filters</h2>
              {appliedFiltersCount > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-sm">
                  {appliedFiltersCount}
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Sort By</h3>
            <select
              value={activeSort}
              onChange={(e) => {
                setActiveSort(e.target.value);
                onSortChange(e.target.value);
              }}
              className="w-full p-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Filters</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.openNow}
                  onChange={(e) => handleFilterChange({ openNow: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Open Now</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.availableToday}
                  onChange={(e) => handleFilterChange({ availableToday: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Available Today</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.rating4Plus}
                  onChange={(e) => handleFilterChange({ rating4Plus: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">4+ Stars</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.onlineBooking}
                  onChange={(e) => handleFilterChange({ onlineBooking: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Online Booking</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.emergencyService}
                  onChange={(e) => handleFilterChange({ emergencyService: e.target.checked })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Emergency Service</span>
              </label>
            </div>
          </div>

          {/* Distance Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Distance</h3>
            <select
              value={filters.distance?.toString() || ''}
              onChange={(e) => handleFilterChange({ 
                distance: e.target.value ? parseInt(e.target.value) : null 
              })}
              className="w-full p-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            >
              <option value="">Any Distance</option>
              {DISTANCE_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="flex flex-wrap gap-2">
              {PRICE_RANGES.map(range => (
                <button
                  key={range}
                  onClick={() => toggleFilter('priceRanges', range)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    filters.priceRanges.includes(range)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Specialties</h3>
            <div className="space-y-3">
              {SPECIALTIES.map(specialty => (
                <label key={specialty} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.specialties.includes(specialty)}
                    onChange={() => toggleFilter('specialties', specialty)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{specialty}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Additional Services</h3>
            <div className="space-y-3">
              {ADDITIONAL_SERVICES.map(service => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.additionalServices.includes(service)}
                    onChange={() => toggleFilter('additionalServices', service)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {appliedFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Clear All Filters ({appliedFiltersCount})
            </button>
          )}
        </div>
      </div>
    </div>
  );
}