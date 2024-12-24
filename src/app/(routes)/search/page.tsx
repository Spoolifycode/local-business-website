"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SearchBar } from '@/components/search/SearchBar';
import { BusinessFilters } from '@/components/filters/BusinessFilters';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Mock data for filters
const mockCategories = [
  'general-repair',
  'brake-service',
  'engine-repair',
  'transmission',
  'oil-change',
  'tire-service',
  'electrical',
  'air-conditioning'
];

const mockFeatures = [
  'Online Booking',
  'Emergency Service',
  'Weekend Hours',
  'Free Estimates',
  'Warranty Offered',
  'Certified Mechanics',
  'Loaner Cars',
  'Pickup/Dropoff'
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const location = searchParams?.get('location') || '';

  const breadcrumbItems = [
    {
      label: "Search Results",
      href: "/search"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mt-4">
            <SearchBar initialQuery={query} initialLocation={location} />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {query && location
              ? `Search Results for "${query}" in ${location}`
              : query
                ? `Search Results for "${query}"`
                : location
                  ? `Search Results in ${location}`
                  : 'All Results'}
          </h1>
          <p className="mt-2 text-gray-600">
            Found 24 matching results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <BusinessFilters 
              categories={mockCategories}
              features={mockFeatures}
            />
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mock Results */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Auto Service Center {index + 1}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Main Street, City, State
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="flex items-center text-yellow-400">
                        {'★'.repeat(4)}{'☆'.repeat(1)}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        (128 reviews)
                      </span>
                    </div>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {['Brake Service', 'Oil Change', 'Engine Repair']
                        .map((service, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))
                      }
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      <span className="font-medium">Response time:</span> Usually responds within 1 hour
                    </p>
                  </div>
                  <Link
                    href={`/garages/details/${index + 1}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">24</span> results
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}