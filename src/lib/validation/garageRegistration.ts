import { z } from 'zod';

// Basic Info Schema
const basicInfoSchema = z.object({
  name: z.string().min(1, 'Business name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
});

// Location Schema
const locationSchema = z.object({
  address: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
});

// Services Schema
const serviceSchema = z.object({
  name: z.string().min(1, 'Service name is required'),
  description: z.string().optional(),
});

// Hours Schema
const hourSchema = z.object({
  open: z.string(),
  close: z.string(),
  closed: z.boolean().optional(),
});

const hoursSchema = z.record(hourSchema);

// Complete Form Schema
export const garageRegistrationSchema = z.object({
  basicInfo: basicInfoSchema,
  location: locationSchema,
  services: z.array(serviceSchema).min(1, 'At least one service is required'),
  hours: hoursSchema,
});

export type GarageRegistrationData = z.infer<typeof garageRegistrationSchema>;

// Validation Functions
export const validateBasicInfo = (data: unknown) => {
  return basicInfoSchema.safeParse(data);
};

export const validateLocation = (data: unknown) => {
  return locationSchema.safeParse(data);
};

export const validateServicesHours = (data: unknown) => {
  const schema = z.object({
    services: z.array(serviceSchema).min(1, 'At least one service is required'),
    hours: hoursSchema,
  });
  return schema.safeParse(data);
};