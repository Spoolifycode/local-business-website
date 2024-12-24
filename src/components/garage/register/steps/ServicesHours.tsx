"use client";

import { Plus, X } from 'lucide-react';

interface ServicesHoursProps {
  data: {
    services: Array<{ name: string; description?: string; }>;
    hours: {
      [key: string]: { open: string; close: string; closed?: boolean; };
    };
  };
  onChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}

const DAYS_OF_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

export function ServicesHours({ data, onChange, errors }: ServicesHoursProps) {
  const addService = () => {
    const newServices = [...data.services, { name: '', description: '' }];
    onChange('services', newServices);
  };

  const removeService = (index: number) => {
    const newServices = data.services.filter((_, i) => i !== index);
    onChange('services', newServices);
  };

  const updateService = (index: number, field: string, value: string) => {
    const newServices = [...data.services];
    newServices[index] = { ...newServices[index], [field]: value };
    onChange('services', newServices);
  };

  const updateHours = (day: string, field: 'open' | 'close' | 'closed', value: string | boolean) => {
    const newHours = { ...data.hours };
    if (field === 'closed') {
      newHours[day] = { 
        open: value ? 'Closed' : '09:00',
        close: value ? 'Closed' : '17:00',
        closed: value as boolean
      };
    } else {
      newHours[day] = { 
        ...newHours[day],
        [field]: value
      };
    }
    onChange('hours', newHours);
  };

  return (
    <div className="space-y-8">
      {/* Services Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Services Offered</h3>
        <div className="space-y-4">
          {data.services.map((service, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => updateService(index, 'name', e.target.value)}
                  placeholder="Service name"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={service.description || ''}
                  onChange={(e) => updateService(index, 'description', e.target.value)}
                  placeholder="Brief description (optional)"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => removeService(index)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addService}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Service
          </button>
        </div>
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services}</p>
        )}
      </div>

      {/* Business Hours Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
        <div className="space-y-4">
          {DAYS_OF_WEEK.map((day) => {
            const dayData = data.hours[day] || { open: '09:00', close: '17:00' };
            const isClosed = dayData.closed;

            return (
              <div key={day} className="flex items-center gap-4">
                <div className="w-28">
                  <span className="text-sm font-medium text-gray-700">{day}</span>
                </div>
                
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isClosed}
                    onChange={(e) => updateHours(day, 'closed', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Closed</span>
                </label>

                {!isClosed && (
                  <>
                    <input
                      type="time"
                      value={dayData.open}
                      onChange={(e) => updateHours(day, 'open', e.target.value)}
                      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="time"
                      value={dayData.close}
                      onChange={(e) => updateHours(day, 'close', e.target.value)}
                      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
        {errors.hours && (
          <p className="mt-1 text-sm text-red-600">{errors.hours}</p>
        )}
      </div>
    </div>
  );
}