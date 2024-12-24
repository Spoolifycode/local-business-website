"use client";

import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  isOpen: boolean;
}

interface MapViewProps {
  locations: Location[];
  onLocationSelect?: (id: number) => void;
}

export default function MapView({ locations, onLocationSelect }: MapViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  // In a real implementation, this would use a mapping library like Google Maps or Mapbox
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gray-200">
        {/* Placeholder for actual map */}
        <div className="w-full h-full relative">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                selectedLocation === location.id ? 'z-10' : 'z-0'
              }`}
              style={{
                left: `${(location.lng + 180) * (100 / 360)}%`,
                top: `${(90 - location.lat) * (100 / 180)}%`
              }}
              onClick={() => {
                setSelectedLocation(location.id);
                onLocationSelect?.(location.id);
              }}
            >
              <div className="relative group">
                <MapPin 
                  className={`h-8 w-8 ${
                    location.isOpen ? 'text-green-500' : 'text-gray-400'
                  } ${
                    selectedLocation === location.id ? 'text-blue-500' : ''
                  }`}
                />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap">
                    <div className="font-medium">{location.name}</div>
                    <div className="text-xs text-gray-500">
                      {location.isOpen ? 'Open Now' : 'Closed'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 space-y-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}