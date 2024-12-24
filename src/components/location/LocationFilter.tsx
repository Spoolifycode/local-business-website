import { useState, useEffect } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { 
  getCurrentLocation,
  getAddressSuggestions,
  type LocationFilter as LocationFilterType
} from '@/lib/location/location-utils';

interface LocationFilterProps {
  onLocationChange: (location: LocationFilterType | null) => void;
  className?: string;
}

export default function LocationFilter({
  onLocationChange,
  className = ''
}: LocationFilterProps) {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{
    label: string;
    coordinates: { lat: number; lng: number };
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRadius, setSelectedRadius] = useState(5); // default 5km radius

  // Handle address input
  const handleAddressInput = async (value: string) => {
    setAddress(value);
    if (value.length >= 3) {
      const newSuggestions = await getAddressSuggestions(value);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: typeof suggestions[0]) => {
    setAddress(suggestion.label);
    setSuggestions([]);
    onLocationChange({
      latitude: suggestion.coordinates.lat,
      longitude: suggestion.coordinates.lng,
      radius: selectedRadius
    });
  };

  // Get current location
  const handleCurrentLocation = async () => {
    try {
      setIsLoading(true);
      const position = await getCurrentLocation();
      onLocationChange({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        radius: selectedRadius
      });
      setAddress('Current Location');
    } catch (error) {
      console.error('Error getting location:', error);
      // Show error message
      alert('Unable to get your location. Please check your browser settings.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle radius change
  const handleRadiusChange = (radius: number) => {
    setSelectedRadius(radius);
    if (address && address !== 'Current Location') {
      const suggestion = suggestions.find(s => s.label === address);
      if (suggestion) {
        onLocationChange({
          latitude: suggestion.coordinates.lat,
          longitude: suggestion.coordinates.lng,
          radius
        });
      }
    }
  };

  // Clear location filter
  const clearLocation = () => {
    setAddress('');
    setSuggestions([]);
    onLocationChange(null);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            value={address}
            onChange={(e) => handleAddressInput(e.target.value)}
            placeholder="Enter location..."
            className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          {address && (
            <button
              onClick={clearLocation}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <Loader2 className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <button
          onClick={handleCurrentLocation}
          disabled={isLoading}
          className="px-4 py-2 text-blue-600 hover:text-blue-800 disabled:text-gray-400"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Use Current Location'
          )}
        </button>
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionSelect(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
            >
              {suggestion.label}
            </button>
          ))}
        </div>
      )}

      {/* Radius selector */}
      {address && (
        <div className="mt-2">
          <select
            value={selectedRadius}
            onChange={(e) => handleRadiusChange(Number(e.target.value))}
            className="px-2 py-1 border border-gray-200 rounded-md text-sm"
          >
            <option value={1}>Within 1 km</option>
            <option value={5}>Within 5 km</option>
            <option value={10}>Within 10 km</option>
            <option value={20}>Within 20 km</option>
            <option value={50}>Within 50 km</option>
          </select>
        </div>
      )}
    </div>
  );
}