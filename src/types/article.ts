export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: number;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  publishedAt: string;
  tags?: string[];
}