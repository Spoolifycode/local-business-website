"use client";

import { SearchBar } from '@/components/search/SearchBar';
import { BusinessFilters } from '@/components/filters/BusinessFilters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
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

const breadcrumbItems = [
  {
    label: "Garages",
    href: "/garages"
  }
];

export default function GaragesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Expert Auto Repair Services
              <span className="block text-blue-600 mt-2">Near You</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Looking for reliable auto repair services? Our directory helps you find and compare the best garages in your area.
            </p>

            {/* Search and Filter Section */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                {/* Search Bar */}
                <SearchBar />

                {/* Filter Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {/* Service Type */}
                  <div>
                    <select className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Service Type</option>
                      <option value="general">General Repair</option>
                      <option value="brakes">Brake Service</option>
                      <option value="engine">Engine Repair</option>
                      <option value="transmission">Transmission</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <select className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Location</option>
                      <option value="5">Within 5 miles</option>
                      <option value="10">Within 10 miles</option>
                      <option value="25">Within 25 miles</option>
                      <option value="50">Within 50 miles</option>
                    </select>
                  </div>

                  {/* Rating */}
                  <div>
                    <select className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Rating</option>
                      <option value="4.5">4.5+ Stars</option>
                      <option value="4.0">4.0+ Stars</option>
                      <option value="3.5">3.5+ Stars</option>
                      <option value="3.0">3.0+ Stars</option>
                    </select>
                  </div>
                </div>

                {/* Quick Filters */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                    Open Now
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                    Highly Rated
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                    Emergency Service
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                    Online Booking
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center gap-4">
              <Link 
                href="/garages/search"
                className="px-8 py-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Find a Garage
              </Link>
              <Link
                href="/garages/register"
                className="px-8 py-4 rounded-md border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
              >
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar with Filters */}
            <div className="lg:col-span-1">
              <BusinessFilters 
                categories={mockCategories}
                features={mockFeatures}
              />
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-3 space-y-6">
              {/* Mock Business Cards */}
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Auto Care Experts {index + 1}
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

              {/* Load More Button */}
              <button className="w-full py-3 text-blue-600 hover:text-blue-800 font-medium hover:bg-blue-50 rounded-md transition-colors">
                Load More Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}