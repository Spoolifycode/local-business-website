import { BusinessHours } from '@/types';

interface OpeningHoursProps {
  hours: Record<string, BusinessHours>;
}

export function OpeningHours({ hours }: OpeningHoursProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
      <div className="space-y-2">
        {days.map(day => (
          <div key={day} className="flex justify-between">
            <span className="font-medium">{day}</span>
            <span className="text-gray-600">
              {hours[day]?.open === 'Closed' ? (
                'Closed'
              ) : (
                `${hours[day]?.open || 'N/A'} - ${hours[day]?.close || 'N/A'}`
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}