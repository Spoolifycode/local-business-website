"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const articles = [
  {
    id: 1,
    title: "When to Change Your Brake Pads",
    excerpt: "Learn the key signs that indicate your brake pads need replacement to ensure safe driving.",
    category: "Maintenance",
    readTime: "4 min read",
    image: "/api/placeholder/800/600",
    slug: "brake-pads-guide"
  },
  {
    id: 2,
    title: "Understanding Strange Car Noises",
    excerpt: "A guide to identifying common car noises and what they might mean for your vehicle.",
    category: "Troubleshooting",
    readTime: "5 min read",
    image: "/api/placeholder/800/600",
    slug: "car-noises-guide"
  },
  {
    id: 3,
    title: "Essential Winter Car Maintenance",
    excerpt: "Prepare your car for winter with these essential maintenance tips.",
    category: "Seasonal",
    readTime: "6 min read",
    image: "/api/placeholder/800/600",
    slug: "winter-maintenance"
  },
  {
    id: 4,
    title: "DIY Oil Change Guide",
    excerpt: "Step-by-step guide to changing your car's oil at home safely.",
    category: "DIY",
    readTime: "7 min read",
    image: "/api/placeholder/800/600",
    slug: "oil-change-guide"
  },
  {
    id: 5,
    title: "Tire Pressure: What You Need to Know",
    excerpt: "Understanding proper tire pressure and its impact on your vehicle's performance.",
    category: "Safety",
    readTime: "4 min read",
    image: "/api/placeholder/800/600",
    slug: "tire-pressure-guide"
  }
];

// Fixed categories to prevent hydration errors
const CATEGORIES = ["Maintenance", "Troubleshooting", "Seasonal", "DIY", "Safety"] as const;

export default function ArticleSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles</h2>
          <p className="text-xl text-gray-600">Expert guides and maintenance tips</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-full border border-gray-200 hover:border-blue-500 transition-colors disabled:opacity-50 disabled:hover:border-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-full border border-gray-200 hover:border-blue-500 transition-colors disabled:opacity-50 disabled:hover:border-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <a 
            href="/blog" 
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
          >
            View all articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          onScroll={checkScrollButtons}
        >
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/blog/${article.slug}`}
              className="flex-none w-[350px] group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{article.readTime}</span>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}