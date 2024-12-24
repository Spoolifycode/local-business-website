export interface GarageListing {
  name: string;
  slug: string;
  address: {
    street: string;
    city: string;
  };
  specializations: string[];
  images?: string[];
}