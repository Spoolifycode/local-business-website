import Link from 'next/link';
import { Star, Clock, MapPin, Phone } from 'lucide-react';
import type { BusinessListing } from '@/types';

interface BusinessCardProps {
  business: BusinessListing;
  category: string;
  location: string;
}

export default function BusinessCard({ business, category, location }: BusinessCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {business.images?.[0] && (
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={business.images[0]}
            alt={`${business.name} exterior`}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <div className="p-4">
        <Link 
          href={`/garages/${category}/${location}/${business.slug}`}
          className="hover:underline"
        >
          <h3 className="font-semibold text-lg mb-2">{business.name}</h3>
        </Link>

        {business.rating && (
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">
              {business.rating.toFixed(1)} ({business.reviewCount} reviews)
            </span>
          </div>
        )}

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{business.address.street}, {business.address.city}</span>
        </div>

        {business.openNow !== undefined && (
          <div className="flex items-center text-sm mb-2">
            <Clock className="w-4 h-4 mr-1" />
            <span className={business.openNow ? 'text-green-600' : 'text-red-600'}>
              {business.openNow ? 'Open Now' : 'Closed'}
            </span>
          </div>
        )}

        {business.contact?.phone && (
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-1" />
            <span>{business.contact.phone}</span>
          </div>
        )}

        {business.features && business.features.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {business.features.slice(0, 3).map(feature => (
              <span 
                key={feature}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}