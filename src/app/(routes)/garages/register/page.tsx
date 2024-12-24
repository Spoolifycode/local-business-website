"use client";

import { MultiStepForm } from '@/components/garage/register/MultiStepForm';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

const breadcrumbItems = [
  {
    label: "Garages",
    href: "/garages"
  },
  {
    label: "Register Your Garage",
    href: "/garages/register"
  }
];

export default function RegisterGaragePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Register Your Garage
            </h1>
            <p className="text-gray-600">
              Join our network of professional auto service providers and reach more customers
            </p>
          </div>

          <MultiStepForm />

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              By registering, you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}