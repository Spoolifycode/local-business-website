"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Article } from '@/data/mock-articles';

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => 
      current === 0 ? articles.length - 1 : current - 1
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative h-[500px] group bg-gray-900">
      {/* Article Images */}
      <div className="absolute inset-0 overflow-hidden">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="container mx-auto max-w-5xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} min read
                  </span>
                </div>

                <Link 
                  href={`/articles/${article.slug}`}
                  className="group-hover:text-blue-400 transition-colors"
                >
                  <h2 className="text-4xl font-bold mb-4">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-lg text-gray-200 mb-4 max-w-2xl">
                  {article.excerpt}
                </p>

                <div className="flex items-center">
                  {article.author.avatar && (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <div className="font-medium">{article.author.name}</div>
                    <div className="text-sm text-gray-300">
                      {formatDate(article.publishedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white 
                   hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white 
                   hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}