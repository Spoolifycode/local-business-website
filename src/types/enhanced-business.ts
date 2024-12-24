import { z } from 'zod';

// Base location schema from Places API
export const LocationSchema = z.object({
  formatted_address: z.string(),
  geometry: z.object({
    location: z.object({
      lat: z.number(),
      lng: z.number()
    })
  }),
  place_id: z.string()
});

// Base business data from Places API
export const PlacesBusinessSchema = z.object({
  place_id: z.string(),
  name: z.string(),
  rating: z.number().optional(),
  website: z.string().optional(),
  formatted_address: z.string(),
  geometry: z.object({
    location: z.object({
      lat: z.number(),
      lng: z.number()
    })
  }),
  // Additional fields from Places API
  formatted_phone_number: z.string().optional(),
  international_phone_number: z.string().optional(),
  opening_hours: z.object({
    periods: z.array(z.object({
      open: z.object({
        day: z.number(),
        time: z.string()
      }),
      close: z.object({
        day: z.number(),
        time: z.string()
      })
    })).optional(),
    weekday_text: z.array(z.string()).optional()
  }).optional(),
  price_level: z.number().optional(),
  types: z.array(z.string()).optional()
});

// Enhanced content from HTML and LLM processing
export const EnhancedContentSchema = z.object({
  promotional: z.object({
    shortDescription: z.string(),
    longDescription: z.string(),
    highlights: z.array(z.string()),
    features: z.array(z.string())
  }),
  markdown: z.object({
    about: z.string(),            // Main business description
    location: z.string(),         // Area and accessibility
    offerings: z.string(),        // Products/services
    experience: z.string()        // Customer experience
  }),
  metadata: z.object({
    lastProcessed: z.string(),
    sourceUrl: z.string(),
    categories: z.array(z.string())
  })
});

// Final business data structure
export const EnhancedBusinessSchema = z.object({
  // Base data from Places API
  base: PlacesBusinessSchema,
  
  // Enhanced content
  enhanced: EnhancedContentSchema,
  
  // SEO
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    jsonLd: z.record(z.any())
  }),
  
  // System metadata
  system: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    status: z.enum(['active', 'pending', 'inactive']),
    lastFetch: z.object({
      places: z.string(),
      html: z.string()
    })
  })
});

// TypeScript types
export type PlacesBusiness = z.infer<typeof PlacesBusinessSchema>;
export type EnhancedContent = z.infer<typeof EnhancedContentSchema>;
export type EnhancedBusiness = z.infer<typeof EnhancedBusinessSchema>;

// Example directory structure for content:
/*
/data
  /businesses
    /{place_id}/
      business.json     // Combined Places + Enhanced data
      content/
        about.md        // Markdown content
        location.md
        offerings.md
        experience.md
      raw/
        places.json     // Raw Places API data
        html.html       // Raw HTML fetch
*/