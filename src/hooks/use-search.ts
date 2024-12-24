import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  content?: string;
}

export function useSearch(initialArticles: Article[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Article[]>(initialArticles);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Enhanced search function with tag and category weighting
  const performSearch = useCallback((query: string, articles: Article[]) => {
    if (!query.trim()) {
      setSearchResults(articles);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ');
    
    const scoredResults = articles.map(article => {
      let score = 0;
      
      // Check title (highest weight)
      searchTerms.forEach(term => {
        if (article.title.toLowerCase().includes(term)) {
          score += 10;
        }
      });

      // Check category (high weight)
      searchTerms.forEach(term => {
        if (article.category.toLowerCase().includes(term)) {
          score += 8;
        }
      });

      // Check tags (medium weight)
      searchTerms.forEach(term => {
        if (article.tags.some(tag => tag.toLowerCase().includes(term))) {
          score += 5;
        }
      });

      // Check excerpt (lower weight)
      searchTerms.forEach(term => {
        if (article.excerpt.toLowerCase().includes(term)) {
          score += 3;
        }
      });

      // Check content if available (lowest weight)
      if (article.content) {
        searchTerms.forEach(term => {
          if (article.content!.toLowerCase().includes(term)) {
            score += 1;
          }
        });
      }

      return { article, score };
    });

    // Filter out zero scores and sort by score
    const filteredResults = scoredResults
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(result => result.article);

    setSearchResults(filteredResults);
  }, []);

  // Debounced search to prevent too many re-renders
  const debouncedSearch = useCallback(
    debounce((query: string, articles: Article[]) => {
      setIsSearching(true);
      performSearch(query, articles);
      setIsSearching(false);
    }, 300),
    []
  );

  // Save recent searches
  const addRecentSearch = useCallback((query: string) => {
    if (query.trim() && query.length >= 3) {
      setRecentSearches(prev => {
        const updated = [query, ...prev.filter(item => item !== query)].slice(0, 5);
        localStorage.setItem('recentSearches', JSON.stringify(updated));
        return updated;
      });
    }
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  }, []);

  return {
    searchQuery,
    setSearchQuery: (query: string) => {
      setSearchQuery(query);
      debouncedSearch(query, initialArticles);
    },
    searchResults,
    isSearching,
    recentSearches,
    addRecentSearch,
    clearRecentSearches
  };
}