import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import BusinessCard from '@/components/business/BusinessCard';
import { LoadingBusinessGrid } from '@/components/ui/loading';
import { Pagination } from '@/components/ui/pagination';
import { BusinessFilters } from '@/components/filters/BusinessFilters';
import { 
  getCategories, 
  getLocations,
  fetchBusinessListings,
  getCategoryDetails,
  getLocationDetails
} from '@/lib/fetch-business-data';
import { getGarageBreadcrumbs } from '@/lib/breadcrumbs';
import { MOCK_FEATURES } from '@/data/mock-data';

interface LocationPageProps {
  params: {
    category: string;
    location: string;
  };
  searchParams?: {
    page?: string;
    rating?: string;
    priceLevel?: string;
    feature?: string[];
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  const pairs = [];
  
  for (const category of categories) {
    const locations = await getLocations(category);
    for (const location of locations) {
      pairs.push({
        category,
        location,
      });
    }
  }
  
  return pairs;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { category, location } = params;
  const categoryDetails = getCategoryDetails(category);
  const locationDetails = getLocationDetails(location);
  
  const title = `${categoryDetails.title} in ${locationDetails.title}`;
  const description = `Find the best ${categoryDetails.title.toLowerCase()} services in ${locationDetails.title}. Compare local garages, read reviews, and book appointments online.`;
  
  return {
    title: `${title} | Expert Auto Services`,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params, searchParams }: LocationPageProps) {
  const { category, location } = params;
  const page = Number(searchParams?.page) || 1;
  
  // Validate category and location
  const validCategories = await getCategories();
  const validLocations = await getLocations(category);
  
  if (!validCategories.includes(category) || !validLocations.includes(location)) {
    return notFound();
  }

  // Get breadcrumbs
  const breadcrumbs = getGarageBreadcrumbs({ category, location });
  const categoryDetails = getCategoryDetails(category);
  const locationDetails = getLocationDetails(location);

  // Fetch businesses
  const { businesses, total, pages } = await fetchBusinessListings({ 
    category,
    location,
    page,
    limit: 12,
    rating: searchParams?.rating ? Number(searchParams.rating) : undefined,
    priceLevel: searchParams?.priceLevel ? Number(searchParams.priceLevel) : undefined,
    features: searchParams?.feature,
  });

  const pageTitle = `${categoryDetails.title} in ${locationDetails.title}`;
  const pageDescription = `Browse the best ${categoryDetails.title.toLowerCase()} services in ${locationDetails.title}. Compare garages, read reviews, and book your appointment online.`;

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={breadcrumbs}
      />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <BusinessFilters 
            categories={[]}
            features={MOCK_FEATURES}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Results Stats */}
          <div className="mb-6">
            <p className="text-gray-600">
              {total > 0 ? (
                `Found ${total} ${total === 1 ? 'service' : 'services'} in ${locationDetails.title}`
              ) : (
                'No services found in this area'
              )}
            </p>
          </div>

          {/* Results Grid */}
          <Suspense fallback={<LoadingBusinessGrid />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
                <BusinessCard 
                  key={business.id}
                  business={business}
                  category={category}
                  location={location}
                />
              ))}
            </div>

            {pages > 1 && (
              <Pagination 
                currentPage={page}
                totalPages={pages}
                baseUrl={`/garages/${category}/${location}/`}
              />
            )}

            {businesses.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p className="text-gray-600">
                  We couldn't find any {categoryDetails.title.toLowerCase()} services in {locationDetails.title}. 
                  Try browsing nearby locations or other categories.
                </p>
              </div>
            )}
          </Suspense>

          {/* SEO Content */}
          <div className="mt-12 prose prose-gray max-w-none">
            <h2>{categoryDetails.title} Services in {locationDetails.title}</h2>
            <p>
              Need reliable {categoryDetails.title.toLowerCase()} services in {locationDetails.title}? 
              Our directory features the top-rated auto repair shops in your area. Compare services, 
              check availability, and find the perfect garage for your vehicle.
            </p>
            
            <h3>Local Expertise</h3>
            <p>
              Each garage in our {locationDetails.title} directory has been verified to ensure they meet 
              our high standards for quality and service. You can trust that you're choosing from the 
              best local auto repair professionals.
            </p>

            <h3>Popular Services in {locationDetails.title}</h3>
            <ul>
              <li>Emergency repairs and roadside assistance</li>
              <li>Routine maintenance and inspections</li>
              <li>Diagnostic services</li>
              <li>Parts replacement and repairs</li>
              <li>Specialized services and custom work</li>
            </ul>

            <h3>Why Choose Local Services?</h3>
            <ul>
              <li>Convenient location and easier communication</li>
              <li>Faster response times for emergency services</li>
              <li>Build a long-term relationship with your mechanic</li>
              <li>Support local businesses in {locationDetails.title}</li>
              <li>Often more competitive pricing</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}