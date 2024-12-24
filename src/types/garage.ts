export interface Address {
  street: string;
  city: string;
  state?: string;
  zipCode?: string;
}

export interface Garage {
  id: number;
  name: string;
  category: string;
  rating: string;
  reviewCount: number;
  address: Address;
  distance: string;
  openNow: boolean;
  image: string;
  images?: string[];  // Added optional images array
  priceRange: string;
  services: string[];
  description: string;
  openHours: {
    open: string;
    close: string;
  };
}

export interface GarageListing extends Garage {
  slug: string;
  specializations: string[];
}