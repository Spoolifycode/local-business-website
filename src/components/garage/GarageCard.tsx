'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Garage } from '@/types/garage';

interface GarageCardProps {
  garage: Garage;
}

export function GarageCard({ garage }: GarageCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-72 h-48 md:h-auto relative">
          <img
            src={garage.image}
            alt={garage.name}
            className="w-full h-full object-cover"
          />
          {garage.openNow && (
            <Badge variant="success" className="absolute top-4 right-4">
              Open Now
            </Badge>
          )}
        </div>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {garage.name}
              </h2>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{garage.rating}</span>
                <span className="text-gray-600">
                  ({garage.reviewCount} reviews)
                </span>
              </div>
            </div>
            <Button>Book Now</Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {garage.address.street}, {garage.address.city} ({garage.distance}km)
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {garage.openHours.open} - {garage.openHours.close}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {garage.services.map((service: string) => (
              <Badge key={service} variant="secondary">
                {service}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}