'use client';

import { Section, Container, Grid } from '@/components/ui/layout';
import { Heading, Text, MonoText } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, MapPin } from 'lucide-react';

const featuredGarages = [
  {
    id: 1,
    name: "AutoFix Pro Services",
    rating: 4.8,
    reviews: 156,
    image: "/api/placeholder/400/320",
    services: ["Oil Change", "Brake Service", "Engine Repair"],
    openNow: true,
    distance: "2.4",
    address: {
      street: "123 Main St",
      city: "Local City"
    },
    priceRange: "€€",
  },
  {
    id: 2,
    name: "Elite Auto Care",
    rating: 4.9,
    reviews: 189,
    image: "/api/placeholder/400/320",
    services: ["Diagnostics", "Transmission", "AC Service"],
    openNow: true,
    distance: "3.1",
    address: {
      street: "456 Tech Ave",
      city: "Local City"
    },
    priceRange: "€€€",
  },
  {
    id: 3,
    name: "Precision Motors",
    rating: 4.7,
    reviews: 142,
    image: "/api/placeholder/400/320",
    services: ["Body Work", "Paint Service", "Detailing"],
    openNow: false,
    distance: "1.8",
    address: {
      street: "789 Auto Blvd",
      city: "Local City"
    },
    priceRange: "€€",
  }
];

export function FeaturedGarages() {
  return (
    <Section variant="gray" spacing="xl">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Heading level={2} className="mb-4">
            Top-Rated Auto Repair Shops
          </Heading>
          <Text size="lg" className="text-gray-600">
            Discover highly-rated garages in your area with proven track records
          </Text>
        </div>

        <Grid cols={3} gap="lg">
          {featuredGarages.map((garage) => (
            <Card 
              key={garage.id} 
              className="overflow-hidden"
            >
              <img
                src={garage.image}
                alt={garage.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Heading level={3} className="text-xl">
                      {garage.name}
                    </Heading>
                    {garage.openNow && (
                      <Badge variant="success">Open Now</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-700">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{garage.rating}</span>
                    <span className="text-gray-500">
                      ({garage.reviews} reviews)
                    </span>
                    <span className="mx-2">·</span>
                    <span className="text-gray-600">{garage.priceRange}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{garage.distance}km • {garage.address.street}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {garage.services.map((service) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}