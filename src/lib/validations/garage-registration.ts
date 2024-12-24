import { z } from "zod";

// Define the business hours type
const businessHoursSchema = z.object({
  open: z.string().min(1, "Opening time is required"),
  close: z.string().min(1, "Closing time is required"),
});

// Define individual schemas for each step
export const step1Schema = z.object({
  businessName: z.string()
    .min(2, "Business name must be at least 2 characters")
    .max(100, "Business name must be less than 100 characters"),
  businessType: z.string()
    .min(1, "Please select a business type"),
  description: z.string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be less than 500 characters"),
});

export const step2Schema = z.object({
  street: z.string()
    .min(5, "Street address must be at least 5 characters")
    .max(100, "Street address must be less than 100 characters"),
  city: z.string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be less than 50 characters"),
  postcode: z.string()
    .regex(/^\d{4}\s?[A-Za-z]{2}$/, "Please enter a valid Dutch postal code (e.g., 1234 AB)"),
  phone: z.string()
    .regex(/^\+31\s?6\s?([0-9]\s?){8}$/, "Please enter a valid Dutch mobile number (e.g., +31 6 1234 5678)"),
  website: z.string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

export const step3Schema = z.object({
  services: z.array(z.string())
    .min(1, "Please select at least one service"),
  businessHours: z.object({
    monday: businessHoursSchema,
    tuesday: businessHoursSchema,
    wednesday: businessHoursSchema,
    thursday: businessHoursSchema,
    friday: businessHoursSchema,
    saturday: businessHoursSchema.optional(),
    sunday: businessHoursSchema.optional(),
  }),
});

// Combined schema for the entire form
export const garageRegistrationSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
});

// Infer TypeScript types from the schemas
export type Step1Inputs = z.infer<typeof step1Schema>;
export type Step2Inputs = z.infer<typeof step2Schema>;
export type Step3Inputs = z.infer<typeof step3Schema>;
export type GarageRegistrationInputs = z.infer<typeof garageRegistrationSchema>;