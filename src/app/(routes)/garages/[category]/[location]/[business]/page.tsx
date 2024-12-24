import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Clock, MapPin, Phone, Mail, Globe, Star } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { StructuredData } from '@/components/StructuredData';
import { LoadingSpinner } from '@/components/ui/loading';
import {
  getCategories,
  getLocations,
  getBusinessSlugs,
  fetchBusinessDetails,
  getCategoryDetails,
  getLocationDetails,
} from '@/lib/fetch-business-data';
import { getGarageBreadcrumbs } from '@/lib/breadcrumbs';
import { convertMarkdownToHtml } from '@/lib/markdown';

interface BusinessPageProps {
  params: {
    category: string;
    location: string;
    business: string;
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  const params = [];

  for (const category of categories) {
    const locations = await getLocations(category);
    for (const location of locations) {
      const businessSlugs = await getBusinessSlugs(category, location);
      for (const business of businessSlugs) {
        params.push({
          category,
          location,
          business,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { category, location, business } = params;
  const businessData = await fetchBusinessDetails({ businessSlug: business });

  if (!businessData) {
    return {
      title: 'Business Not Found',
      description: 'The requested business could not be found.',
    };
  }

  return {
    title: businessData.metadata.title,
    description: businessData.metadata.description,
    openGraph: {
      title: businessData.metadata.title,
      description: businessData.metadata.description,
      type: 'website',
      images: businessData.media.photos?.map(photo => ({
        url: photo.url,
        alt: photo.alt,
      })) || [],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

function OpeningHours({ hours }: { hours: Record<string, { open: string; close: string; isOpen: boolean }> }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
      <div className="space-y-2">
        {days.map(day => (
          <div key={day} className="flex justify-between">
            <span className="font-medium">{day}</span>
            <span className="text-gray-600">
              {hours[day]?.open === 'Closed' ? 'Closed' : `${hours[day]?.open || 'N/A'} - ${hours[day]?.close || 'N/A'}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactInfo({ contact }: { contact: any }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
      <div className="space-y-3">
        {contact.phone && (
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
              {contact.phone}
            </a>
          </div>
        )}
        {contact.email && (
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
              {contact.email}
            </a>
          </div>
        )}
        {contact.website && (
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function ServicesList({ details }: { details: any }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {details.specialties?.map((specialty: string) => (
          <div key={specialty} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{specialty}</h3>
            <p className="text-sm text-gray-600">
              Professional {specialty.toLowerCase()} services with warranty
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { category, location, business } = params;
  
  // Validate and fetch data
  const businessData = await fetchBusinessDetails({ businessSlug: business });
  if (!businessData) return notFound();

  // Get breadcrumbs
  const breadcrumbs = getGarageBreadcrumbs({ category, location, business });

  const promotionalContent = businessData.content.promotional_md ? 
    await convertMarkdownToHtml(businessData.content.promotional_md) : '';

  return (
    <>
      <StructuredData business={businessData} />
      
      <div className="container mx-auto px-4 py-8">
        <PageHeader
          title={businessData.name}
          description={businessData.tagline}
          breadcrumbs={breadcrumbs}
        >
          {businessData.rating && (
            <div className="flex items-center mt-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-2 font-semibold">{businessData.rating.toFixed(1)}</span>
              <span className="ml-2 text-gray-600">
                ({businessData.review_count} reviews)
              </span>
            </div>
          )}
        </PageHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Photo Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {businessData.media.photos?.map((photo, index) => (
                <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
                  <img 
                    src={photo.url} 
                    alt={photo.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Services */}
            <ServicesList details={businessData.details} />

            {/* Features & Amenities */}
            {businessData.details.features && businessData.details.features.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {businessData.details.features.map((feature: string) => (
                    <div key={feature} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {businessData.details.certifications && businessData.details.certifications.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <div className="flex flex-wrap gap-3">
                  {businessData.details.certifications.map((cert: string) => (
                    <span key={cert} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Brands Serviced */}
            {businessData.details.brands_serviced && businessData.details.brands_serviced.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Brands We Service</h2>
                <div className="flex flex-wrap gap-3">
                  {businessData.details.brands_serviced.map((brand: string) => (
                    <span key={brand} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Promotional Content */}
            {promotionalContent && (
              <div 
                className="mt-8 prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: promotionalContent }}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{businessData.location.address}</p>
                  <p className="text-gray-600">
                    {businessData.location.city}, {businessData.location.state} {businessData.location.postal_code}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <OpeningHours hours={businessData.hours || {}} />

              {/* Contact Information */}
              <ContactInfo contact={businessData.contact} />

              {/* Call to Action Button */}
              <a
                href={`tel:${businessData.contact.phone}`}
                className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}