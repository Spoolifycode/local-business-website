export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  businessCount?: number;
  parentCategory?: string;
  subcategories?: Category[];
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}