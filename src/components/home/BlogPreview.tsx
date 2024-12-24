"use client";

import { ArrowRight } from 'lucide-react';

const recentPosts = [
  {
    id: 1,
    title: "10 Car Maintenance Tips That Can Save You Money",
    excerpt: "Learn essential maintenance tips that can prevent costly repairs and keep your car running smoothly.",
    category: "Maintenance",
    readTime: "5 min read",
    image: "/api/placeholder/800/600",
    slug: "car-maintenance-tips"
  },
  {
    id: 2,
    title: "When to Repair vs Replace Your Car Parts",
    excerpt: "A comprehensive guide to making smart decisions about repairing or replacing major car components.",
    category: "Guides",
    readTime: "7 min read",
    image: "/api/placeholder/800/600",
    slug: "repair-vs-replace-guide"
  },
  {
    id: 3,
    title: "5 Warning Signs Your Car Needs Immediate Attention",
    excerpt: "Learn to recognize these critical warning signs that could prevent major car problems.",
    category: "Safety",
    readTime: "4 min read",
    image: "/api/placeholder/800/600",
    slug: "warning-signs"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-12 border-t border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Car Care Education</h2>
          <p className="text-xl text-gray-600">Expert tips and guides for maintaining your vehicle</p>
        </div>
        <a 
          href="/blog" 
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View all articles
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <a 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-all"
          >
            <div className="aspect-[16/9] relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{post.readTime}</span>
                <span className="text-blue-600 font-medium group-hover:underline">
                  Read more
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}