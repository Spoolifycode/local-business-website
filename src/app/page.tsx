import { Suspense } from 'react';
import { loadBusinessData, getCategories } from '@/lib/data/load-business';
import HomeContent from '@/components/home/HomeContent';

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: 'Find Local Auto Repair Services | Garage Directory',
  description: 'Connect with trusted mechanics and auto repair shops in your area. Book appointments, read reviews, and get expert car service.',
  openGraph: {
    title: 'Find Local Auto Repair Services | Garage Directory',
    description: 'Connect with trusted mechanics and auto repair shops in your area.',
    images: ['/api/placeholder/1200/630']
  }
};

export default async function HomePage() {
  const businesses = await loadBusinessData();
  const categories = await getCategories();
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeContent 
        initialBusinesses={businesses}
        initialCategories={categories}
      />
    </Suspense>
  );
}