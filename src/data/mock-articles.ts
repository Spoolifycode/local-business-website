export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: number;
  imageUrl: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  featured?: boolean;
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Essential Car Maintenance Tips for Every Season',
    slug: 'essential-car-maintenance-tips',
    excerpt: 'Learn how to keep your vehicle running smoothly throughout the year with these seasonal maintenance tips.',
    category: 'Maintenance',
    readTime: 5,
    imageUrl: '/api/placeholder/800/400?text=Car+Maintenance',
    author: {
      name: 'John Smith',
      avatar: '/api/placeholder/40/40?text=JS'
    },
    publishedAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'Understanding Your Check Engine Light',
    slug: 'understanding-check-engine-light',
    excerpt: 'Demystify the most common reasons for your check engine light and what you should do when it comes on.',
    category: 'Diagnostics',
    readTime: 7,
    imageUrl: '/api/placeholder/800/400?text=Check+Engine',
    author: {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40?text=SJ'
    },
    publishedAt: '2024-01-10',
    featured: true
  },
  {
    id: '3',
    title: '10 Signs Your Brakes Need Attention',
    slug: 'brake-warning-signs',
    excerpt: 'Recognize these critical warning signs that indicate your brakes might need professional inspection.',
    category: 'Safety',
    readTime: 6,
    imageUrl: '/api/placeholder/800/400?text=Brake+Service',
    author: {
      name: 'Mike Wilson',
      avatar: '/api/placeholder/40/40?text=MW'
    },
    publishedAt: '2024-01-05',
    featured: true
  },
  {
    id: '4',
    title: 'How to Choose the Right Motor Oil',
    slug: 'choosing-motor-oil',
    excerpt: 'A comprehensive guide to understanding motor oil grades and choosing the right one for your vehicle.',
    category: 'Maintenance',
    readTime: 8,
    imageUrl: '/api/placeholder/800/400?text=Motor+Oil',
    author: {
      name: 'Emily Chen',
      avatar: '/api/placeholder/40/40?text=EC'
    },
    publishedAt: '2024-01-01'
  },
  {
    id: '5',
    title: 'DIY Car Detailing Tips',
    slug: 'diy-car-detailing',
    excerpt: 'Learn professional detailing techniques you can do at home to keep your car looking showroom-fresh.',
    category: 'Maintenance',
    readTime: 10,
    imageUrl: '/api/placeholder/800/400?text=Car+Detailing',
    author: {
      name: 'David Brown',
      avatar: '/api/placeholder/40/40?text=DB'
    },
    publishedAt: '2023-12-28'
  },
  {
    id: '6',
    title: 'Winter Driving Safety Guide',
    slug: 'winter-driving-safety',
    excerpt: 'Essential tips and preparations for safe winter driving and vehicle maintenance.',
    category: 'Safety',
    readTime: 7,
    imageUrl: '/api/placeholder/800/400?text=Winter+Driving',
    author: {
      name: 'Lisa Anderson',
      avatar: '/api/placeholder/40/40?text=LA'
    },
    publishedAt: '2023-12-20'
  }
];