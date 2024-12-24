"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FeaturedArticles } from '@/components/articles/FeaturedArticles';
import Link from 'next/link';

interface Props {
  params: {
    category: string;
  };
}

export default function ArticleCategoryPage({ params }: Props) {
  const categoryName = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const breadcrumbItems = [
    {
      label: "Articles",
      href: "/articles"
    },
    {
      label: categoryName,
      href: `/articles/${params.category}`
    }
  ];

  // Mock data for category-specific articles
  const categoryArticles = [
    {
      id: 1,
      title: `Essential ${categoryName} Guide`,
      slug: `essential-${params.category}-guide`,
      excerpt: "Learn everything you need to know about maintaining and servicing your vehicle.",
      category: categoryName,
      readTime: 8,
      imageUrl: "/api/placeholder/1200/500",
      author: {
        name: "John Smith",
        avatar: "/api/placeholder/64/64",
      },
      publishedAt: "2024-03-20",
    },
    {
      id: 2,
      title: `Common ${categoryName} Problems`,
      slug: `common-${params.category}-problems`,
      excerpt: "Identify and understand common issues before they become major problems.",
      category: categoryName,
      readTime: 10,
      imageUrl: "/api/placeholder/1200/500",
      author: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/64/64",
      },
      publishedAt: "2024-03-18",
    },
    {
      id: 3,
      title: `DIY ${categoryName} Tips`,
      slug: `diy-${params.category}-tips`,
      excerpt: "Simple maintenance tasks you can perform at home to save money.",
      category: categoryName,
      readTime: 7,
      imageUrl: "/api/placeholder/1200/500",
      author: {
        name: "Mike Wilson",
        avatar: "/api/placeholder/64/64",
      },
      publishedAt: "2024-03-15",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Featured Articles Slider */}
      <FeaturedArticles articles={categoryArticles} />

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {categoryName} Articles
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice and comprehensive guides about {categoryName.toLowerCase()}. 
              Learn from professional mechanics and automotive experts.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src="/api/placeholder/600/400"
                  alt={`${categoryName} Article ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-blue-600">{categoryName}</span>
                    <span className="text-sm text-gray-500">8 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {categoryName} Tips & Tricks {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Essential advice about {categoryName.toLowerCase()} maintenance and best practices.
                  </p>
                  <Link 
                    href={`/articles/${params.category}/article-${index + 1}`}
                    className="text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}