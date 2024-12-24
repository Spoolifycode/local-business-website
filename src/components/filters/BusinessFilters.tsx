"use client"

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { StarFilledIcon } from '@radix-ui/react-icons';

interface BusinessFiltersProps {
  categories: string[];
  features: string[];
}

export function BusinessFilters({ categories, features }: BusinessFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentParams = new URLSearchParams(searchParams?.toString());
  const currentCategories = currentParams.getAll('category');
  const currentFeatures = currentParams.getAll('feature');
  const currentRating = Number(currentParams.get('rating')) || 0;
  const currentPriceLevel = Number(currentParams.get('priceLevel')) || 0;

  const updateFilters = (
    key: string,
    value: string | number,
    isArray = false
  ) => {
    const params = new URLSearchParams(searchParams?.toString());

    if (isArray) {
      // Handle array params (categories, features)
      const current = params.getAll(key);
      if (current.includes(String(value))) {
        // Remove value if already present
        const filtered = current.filter(v => v !== String(value));
        params.delete(key);
        filtered.forEach(v => params.append(key, v));
      } else {
        // Add new value
        params.append(key, String(value));
      }
    } else {
      // Handle single value params (rating, priceLevel)
      if (value === 0 || value === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    }

    // Stay on the current page with updated filters
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
      <div className="text-lg font-semibold mb-4">Filter Results</div>
      
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => {
            const label = category
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <div key={category} className="flex items-center">
                <Checkbox
                  id={`category-${category}`}
                  checked={currentCategories.includes(category)}
                  onCheckedChange={(checked: boolean | 'indeterminate') => 
                    updateFilters('category', category, true)
                  }
                />
                <label 
                  htmlFor={`category-${category}`}
                  className="ml-2 text-sm cursor-pointer"
                >
                  {label}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-sm font-medium mb-3">Minimum Rating</h3>
        <div className="space-y-4">
          {[4, 3, 2].map(rating => (
            <div key={rating} className="flex items-center">
              <Checkbox
                id={`rating-${rating}`}
                checked={currentRating === rating}
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  updateFilters('rating', checked === true ? rating : 0)
                }
              />
              <label 
                htmlFor={`rating-${rating}`}
                className="ml-2 text-sm flex items-center cursor-pointer"
              >
                {Array.from({ length: rating }).map((_, i) => (
                  <StarFilledIcon 
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-1">& up</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Level */}
      <div>
        <h3 className="text-sm font-medium mb-3">Price Level</h3>
        <div className="space-y-2">
          {[1, 2, 3].map(level => (
            <div key={level} className="flex items-center">
              <Checkbox
                id={`price-${level}`}
                checked={currentPriceLevel === level}
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  updateFilters('priceLevel', checked === true ? level : 0)
                }
              />
              <label 
                htmlFor={`price-${level}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {'$'.repeat(level)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-sm font-medium mb-3">Features</h3>
        <div className="space-y-2">
          {features.map(feature => (
            <div key={feature} className="flex items-center">
              <Checkbox
                id={`feature-${feature}`}
                checked={currentFeatures.includes(feature)}
                onCheckedChange={(checked: boolean | 'indeterminate') => 
                  updateFilters('feature', feature, true)
                }
              />
              <label 
                htmlFor={`feature-${feature}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {feature}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear All Filters Button - only show if any filter is active */}
      {(currentCategories.length > 0 || currentFeatures.length > 0 || 
        currentRating > 0 || currentPriceLevel > 0) && (
        <button
          onClick={() => {
            router.push(pathname);
          }}
          className="w-full px-4 py-2 text-sm text-blue-600 hover:text-blue-800 
                     hover:bg-blue-50 rounded-md transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}