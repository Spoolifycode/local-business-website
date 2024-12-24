"use client";

import { FeaturedArticles } from '@/components/articles/FeaturedArticles';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

const breadcrumbItems = [
  {
    label: "Articles",
    href: "/articles"
  }
];

// Mock data for the featured articles slider
const mockArticles = [
  {
    id: 1,
    title: "Essential Car Maintenance Tips for Every Driver",
    slug: "essential-car-maintenance-tips",
    excerpt: "Learn the fundamental maintenance tasks that can extend your vehicle's life and prevent costly repairs.",
    category: "Maintenance",
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
    title: "Understanding Your Vehicle's Brake System",
    slug: "understanding-brake-system",
    excerpt: "A comprehensive guide to how your car's brakes work and common signs of brake problems.",
    category: "Safety",
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
    title: "The Complete Guide to Oil Changes",
    slug: "complete-guide-oil-changes",
    excerpt: "Everything you need to know about motor oil, when to change it, and why it's crucial for your engine.",
    category: "Maintenance",
    readTime: 7,
    imageUrl: "/api/placeholder/1200/500",
    author: {
      name: "Mike Wilson",
      avatar: "/api/placeholder/64/64",
    },
    publishedAt: "2024-03-15",
  },
];

// Mock data for article grids
const popularArticles = [
  {
    title: "10 Signs Your Brakes Need Attention",
    excerpt: "Learn to recognize the warning signs that indicate your brakes may need service or replacement.",
    category: "Safety",
    readTime: "6 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    title: "Understanding Engine Oil Types",
    excerpt: "A comprehensive guide to different engine oil grades and how to choose the right one for your vehicle.",
    category: "Maintenance",
    readTime: "8 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    title: "DIY Car Maintenance Tips",
    excerpt: "Simple maintenance tasks you can perform at home to keep your car running smoothly.",
    category: "DIY",
    readTime: "10 min read",
    imageUrl: "/api/placeholder/600/400",
  },
];

const maintenanceGuides = [
  {
    title: "Complete Guide to Tire Care",
    excerpt: "Everything you need to know about tire maintenance, rotation, and replacement.",
    category: "Maintenance",
    readTime: "7 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    title: "Winter Car Care Essentials",
    excerpt: "Prepare your vehicle for cold weather with these essential maintenance tips.",
    category: "Seasonal",
    readTime: "9 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    title: "Basic Car Troubleshooting",
    excerpt: "Learn how to diagnose common car problems before visiting a mechanic.",
    category: "DIY",
    readTime: "12 min read",
    imageUrl: "/api/placeholder/600/400",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      {/* Featured Articles Slider */}
      <FeaturedArticles articles={mockArticles} />

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Expert Auto Repair Guides & Resources
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our comprehensive collection of auto repair articles and guides helps you make informed decisions about your vehicle's maintenance and repair needs.
            </p>
          </div>

          {/* Popular Articles Grid */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
              <Link href="/articles/popular" className="text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-blue-600">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-100 my-16"></div>

          {/* Maintenance Guides Grid */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Maintenance Guides</h2>
              <Link href="/articles/guides" className="text-blue-600 hover:text-blue-700">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maintenanceGuides.map((article, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-blue-600">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Auto Care Tips
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest automotive maintenance tips, 
              guides, and industry updates directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}