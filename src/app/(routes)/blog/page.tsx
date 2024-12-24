import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Auto Repair Blog | Latest News & Updates',
  description: 'Stay updated with the latest news, trends, and insights in the auto repair industry. Read our blog for expert opinions and industry updates.',
};

export default async function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' }
        ]}
      />
      
      <h1 className="text-4xl font-bold mb-6">Auto Repair Blog</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-8">
          Stay informed about the latest developments in the automotive repair industry.
          Our blog features expert insights, industry news, and helpful tips for vehicle owners.
        </p>
        
        {/* Blog posts will go here */}
        <div className="text-center py-12 text-gray-600">
          Blog posts coming soon...
        </div>
      </div>
    </div>
  );
}