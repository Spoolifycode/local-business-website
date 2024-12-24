"use client";

interface BasicInfoProps {
  data: {
    name: string;
    email: string;
    phone: string;
    website?: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function BasicInfo({ data, onChange, errors }: BasicInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
          Business Name *
        </label>
        <input
          type="text"
          id="business-name"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm
            ${errors.name 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          placeholder="Your garage's name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Business Email *
        </label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm
            ${errors.email 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          placeholder="contact@yourbusiness.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Business Phone *
        </label>
        <input
          type="tel"
          id="phone"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm
            ${errors.phone 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          placeholder="(123) 456-7890"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Website <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="url"
          id="website"
          value={data.website || ''}
          onChange={(e) => onChange('website', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="https://yourbusiness.com"
        />
      </div>

      <p className="text-sm text-gray-500">* Required fields</p>
    </div>
  );
}