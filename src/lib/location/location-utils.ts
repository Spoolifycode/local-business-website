export interface LocationFilter {
  latitude: number;
  longitude: number;
  radius: number;
}

interface LocationSuggestion {
  label: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Get current location using browser's geolocation API
export const getCurrentLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  });
};

// Mock function for address suggestions (replace with real geocoding service)
export const getAddressSuggestions = async (query: string): Promise<LocationSuggestion[]> => {
  // This is a mock implementation. In production, you would:
  // 1. Call a geocoding service (Google Maps, MapBox, etc.)
  // 2. Parse and format the results
  // 3. Return properly typed suggestions
  
  // Mock data for development
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  
  if (query.length < 3) return [];
  
  return [
    {
      label: 'Amsterdam Central',
      coordinates: { lat: 52.3791, lng: 4.8980 }
    },
    {
      label: 'Amsterdam Zuid',
      coordinates: { lat: 52.3389, lng: 4.8726 }
    },
    {
      label: 'Amsterdam Bijlmer',
      coordinates: { lat: 52.3172, lng: 4.9473 }
    }
  ].filter(suggestion => 
    suggestion.label.toLowerCase().includes(query.toLowerCase())
  );
};