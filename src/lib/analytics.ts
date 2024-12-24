// Basic search analytics

interface SearchEvent {
  query: string;
  timestamp: string;
  resultsCount: number;
}

// In-memory storage for demo purposes
const searchEvents: SearchEvent[] = [];

export const trackSearch = (query: string, resultsCount: number) => {
  const searchEvent = {
    query,
    timestamp: new Date().toISOString(),
    resultsCount
  };
  
  searchEvents.push(searchEvent);
  console.log('Search tracked:', searchEvent);
};

export const getSearchMetrics = () => {
  return {
    totalSearches: searchEvents.length,
    searches: searchEvents
  };
};