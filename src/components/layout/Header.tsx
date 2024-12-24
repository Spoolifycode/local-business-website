"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { trackSearch } from '@/lib/analytics';

// Recent/Popular search suggestions
const SEARCH_SUGGESTIONS = [
  {
    title: 'Popular Services',
    items: [
      'Oil Change',
      'Brake Service',
      'Tire Rotation',
      'Engine Diagnostics',
      'Vehicle Inspection'
    ]
  },
  {
    title: 'Popular Categories',
    items: [
      'Auto Repair',
      'Body Shops',
      'Tire Services',
      'Performance Shops',
      'Mobile Mechanics'
    ]
  }
];

<<<<<<< HEAD
// Category definitions with proper slugs
const GARAGE_CATEGORIES = [
  { name: 'All Garages', href: '/garages' },
  { name: 'Auto Repair', href: '/garages/auto-repair' },
  { name: 'Tire Services', href: '/garages/tire-service' },
  { name: 'Body Shops', href: '/garages/body-shop' },
  { name: 'Oil Change', href: '/garages/oil-change' },
  { name: 'Brake Service', href: '/garages/brake-service' },
];

=======
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGarageMenuOpen, setIsGarageMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      trackSearch(query.trim(), 0);
      router.push(`/garages?search=${encodeURIComponent(query.trim())}`);
      setSearchQuery('');
      setIsSearchFocused(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <header className="border-b border-gray-200 bg-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            GarageFinder
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Garages Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-600 hover:text-gray-900"
                onMouseEnter={() => setIsGarageMenuOpen(true)}
                onClick={() => setIsGarageMenuOpen(!isGarageMenuOpen)}
              >
                Garages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              {isGarageMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                  onMouseLeave={() => setIsGarageMenuOpen(false)}
                >
<<<<<<< HEAD
                  {GARAGE_CATEGORIES.map((category) => (
=======
                  {[
                    { name: 'All Garages', href: '/garages' },
                    { name: 'Auto Repair', href: '/garages/categories/auto-repair' },
                    { name: 'Tire Services', href: '/garages/categories/tire-services' },
                    { name: 'Body Shops', href: '/garages/categories/body-shops' },
                    { name: 'Oil Change', href: '/garages/categories/oil-change' },
                    { name: 'Brake Service', href: '/garages/categories/brake-service' },
                  ].map((category) => (
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Nav Items */}
            <Link href="/garages" className="text-gray-600 hover:text-gray-900">
              Find a Garage
            </Link>
            <Link href="/articles" className="text-gray-600 hover:text-gray-900">
              Articles
            </Link>
            <Link 
              href="/garages/register" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Register Your Garage
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search garages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-64 px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute left-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>

            {/* Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="p-2">
                  {SEARCH_SUGGESTIONS.map((section, index) => (
                    <div key={section.title} className={index > 0 ? 'mt-4' : ''}>
                      <div className="text-xs font-medium text-gray-500 mb-2 px-2">
                        {section.title}
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item}
                            onClick={() => handleSearch(item)}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="Search garages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200"
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-2.5 text-gray-400"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </form>

                {/* Mobile Quick Suggestions */}
                {searchQuery && (
                  <div className="border-t border-gray-100 pt-2">
                    <div className="text-xs font-medium text-gray-500 mb-2">
                      Popular Searches
                    </div>
                    <div className="space-y-1">
                      {SEARCH_SUGGESTIONS[0].items.slice(0, 3).map((item) => (
                        <button
                          key={item}
                          onClick={() => handleSearch(item)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-b border-gray-200 pb-4">
                  <div className="font-medium text-gray-900 mb-2">Garage Categories</div>
<<<<<<< HEAD
                  {GARAGE_CATEGORIES.map((category) => (
=======
                  {[
                    { name: 'All Garages', href: '/garages' },
                    { name: 'Auto Repair', href: '/garages/categories/auto-repair' },
                    { name: 'Tire Services', href: '/garages/categories/tire-services' },
                    { name: 'Body Shops', href: '/garages/categories/body-shops' },
                    { name: 'Oil Change', href: '/garages/categories/oil-change' },
                    { name: 'Brake Service', href: '/garages/categories/brake-service' },
                  ].map((category) => (
>>>>>>> e08c60e28ebe2197a3cff6685cc65480988bc701
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                <Link href="/garages" className="text-gray-600 hover:text-gray-900">
                  Find a Garage
                </Link>
                <Link href="/articles" className="text-gray-600 hover:text-gray-900">
                  Articles
                </Link>
                <Link 
                  href="/garages/register" 
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register Your Garage
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}