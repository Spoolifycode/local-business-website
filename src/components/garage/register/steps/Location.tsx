"use client";

interface LocationProps {
  data: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function Location({ data, onChange, errors }: LocationProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Street Address *
        </label>
        <input
          type="text"
          id="address"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm
            ${errors.address 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          placeholder="123 Main Street"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City *
          </label>
          <input
            type="text"
            id="city"
            value={data.city}
            onChange={(e) => onChange('city', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm
              ${errors.city 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            placeholder="New York"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State *
          </label>
          <select
            id="state"
            value={data.state}
            onChange={(e) => onChange('state', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm
              ${errors.state 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
          >
            <option value="">Select a state</option>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            {/* Add other states */}
          </select>
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state}</p>
          )}
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
            ZIP / Postal Code *
          </label>
          <input
            type="text"
            id="postal-code"
            value={data.postalCode}
            onChange={(e) => onChange('postalCode', e.target.value)}
            className={`mt-1 block w-full rounded-md shadow-sm
              ${errors.postalCode 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            placeholder="10001"
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>
          )}
        </div>
      </div>

      {/* Map Preview Placeholder */}
      <div className="mt-4 aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Map preview will be shown here</p>
      </div>

      <p className="text-sm text-gray-500">* Required fields</p>
    </div>
  );
}