'use client';

import { Section, Container, Grid } from '@/components/ui/layout';
import { Heading, Text } from '@/components/ui/typography';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Gauge, 
  Radio, 
  Battery, 
  Car,
  Droplet,
  Settings,
  CircleSlash
} from 'lucide-react';

const categories = [
  { 
    name: 'General Repair', 
    icon: Wrench,
    description: 'Regular maintenance and repairs',
    count: 245
  },
  { 
    name: 'Diagnostics', 
    icon: Gauge,
    description: 'Computer diagnostics and testing',
    count: 156
  },
  { 
    name: 'Electronics', 
    icon: Radio,
    description: 'Electrical system repairs',
    count: 128
  },
  { 
    name: 'Battery Service', 
    icon: Battery,
    description: 'Battery testing and replacement',
    count: 98
  },
  { 
    name: 'Body Work', 
    icon: Car,
    description: 'Collision repair and painting',
    count: 167
  },
  { 
    name: 'Oil Change', 
    icon: Droplet,
    description: 'Oil changes and fluid services',
    count: 203
  },
  { 
    name: 'Transmission', 
    icon: Settings,
    description: 'Transmission repair and service',
    count: 89
  },
  { 
    name: 'Brake Service', 
    icon: CircleSlash,
    description: 'Brake repair and maintenance',
    count: 178
  }
];

export function CategoriesSection() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Heading level={2} className="mb-4">
            Browse by Service Category
          </Heading>
          <Text size="lg" className="text-gray-600">
            Find the specific auto repair service you need from our verified mechanics
          </Text>
        </div>

        <Grid cols={4} gap="lg">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="text-center transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <Heading level={3} className="text-lg mb-2">
                    {category.name}
                  </Heading>
                  <Text className="text-gray-600 mb-2">
                    {category.description}
                  </Text>
                  <Text className="text-sm text-blue-600 font-medium">
                    {category.count} garages
                  </Text>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}