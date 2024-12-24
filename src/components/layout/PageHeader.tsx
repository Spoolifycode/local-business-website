"use client";

import { Breadcrumbs } from './Breadcrumbs';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHeader({ title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 pb-5 mb-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="mt-2">
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-lg text-gray-600">
            {description}
          </p>
        )}
      </div>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}