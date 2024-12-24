'use client';

import { HeroSection } from './HeroSection';
import { CategoriesSection } from './CategoriesSection';
import { FeaturedGarages } from './FeaturedGarages';

interface HomeContentProps {
  initialBusinesses?: any[];
  initialCategories?: any[];
}

export default function HomeContent({ 
  initialBusinesses, 
  initialCategories 
}: HomeContentProps) {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedGarages />
    </>
  );
}