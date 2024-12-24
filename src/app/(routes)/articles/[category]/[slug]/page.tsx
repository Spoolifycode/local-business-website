"use client";

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default function ArticlePage({ params }: Props) {
  const categoryName = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const articleTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const breadcrumbItems = [
    {
      label: "Articles",
      href: "/articles"
    },
    {
      label: categoryName,
      href: `/articles/${params.category}`
    },
    {
      label: articleTitle,
      href: `/articles/${params.category}/${params.slug}`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="h-[400px] relative bg-gray-900">
        <img
          src="/api/placeholder/1920/1080"
          alt={articleTitle}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                  {categoryName}
                </span>
                <span className="text-sm">8 min read</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{articleTitle}</h1>
              <div className="flex items-center gap-4">
                <img
                  src="/api/placeholder/64/64"
                  alt="Author"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-gray-300">
                    Published on March 24, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-3xl mx-auto mt-8">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Learn everything you need to know about {categoryName.toLowerCase()} maintenance 
              and best practices from our expert mechanics.
            </p>

            <h2>Understanding {categoryName}</h2>
            <p>
              Regular maintenance is crucial for keeping your vehicle running smoothly and 
              preventing costly repairs down the line. In this comprehensive guide, we'll 
              cover everything you need to know about {categoryName.toLowerCase()}.
            </p>

            <h2>Common Issues and Solutions</h2>
            <p>
              Here are some of the most common problems vehicle owners face with their 
              {categoryName.toLowerCase()} systems and how to address them effectively.
            </p>

            <ul>
              <li>Early warning signs to watch out for</li>
              <li>Preventive maintenance tips</li>
              <li>When to seek professional help</li>
              <li>Cost-saving recommendations</li>
            </ul>

            <h2>Maintenance Schedule</h2>
            <p>
              Follow this recommended maintenance schedule to keep your 
              {categoryName.toLowerCase()} system in optimal condition:
            </p>

            <table>
              <thead>
                <tr>
                  <th>Interval</th>
                  <th>Service Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Every 3 months</td>
                  <td>Basic inspection and check</td>
                </tr>
                <tr>
                  <td>Every 6 months</td>
                  <td>Detailed component inspection</td>
                </tr>
                <tr>
                  <td>Annually</td>
                  <td>Comprehensive service</td>
                </tr>
              </tbody>
            </table>

            <h2>Expert Tips</h2>
            <p>
              Our certified mechanics recommend these professional tips to extend the life 
              of your vehicle's {categoryName.toLowerCase()} system:
            </p>

            <ol>
              <li>Regular inspections and maintenance</li>
              <li>Using quality parts and fluids</li>
              <li>Addressing issues promptly</li>
              <li>Following manufacturer recommendations</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tip</h3>
              <p className="text-blue-800">
                Always keep detailed records of your {categoryName.toLowerCase()} maintenance 
                and repairs. This documentation can be valuable for warranty purposes and 
                future troubleshooting.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
            <div className="flex items-start gap-4">
              <img
                src="/api/placeholder/96/96"
                alt="John Smith"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="font-medium">John Smith</h4>
                <p className="text-gray-600 mt-1">
                  John is a certified master mechanic with over 15 years of experience 
                  in automotive repair and maintenance. He specializes in {categoryName.toLowerCase()} 
                  systems and is passionate about helping vehicle owners maintain their cars.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-lg font-semibold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((_, index) => (
                <Link
                  key={index}
                  href={`/articles/${params.category}/related-${index + 1}`}
                  className="block group"
                >
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-sm text-blue-600">{categoryName}</span>
                    <h4 className="font-medium mt-2 group-hover:text-blue-600 transition-colors">
                      Related {categoryName} Topic {index + 1}
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      More insights about {categoryName.toLowerCase()} maintenance and care.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}