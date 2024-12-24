import { useState } from 'react';
import { z } from 'zod';

interface UseMultiStepFormProps<T> {
  steps: number;
  initialData?: Partial<T>;
  onSubmit?: (data: T) => void | Promise<void>;
}

export function useMultiStepForm<T>({ 
  steps, 
  initialData = {}, 
  onSubmit 
}: UseMultiStepFormProps<T>) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<T>>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = async (
    step: number, 
    data: Partial<T>, 
    schema: z.ZodType<any>
  ) => {
    try {
      await schema.parseAsync(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path.join('.');
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const updateFormData = (newData: Partial<T>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = async (schema: z.ZodType<any>) => {
    const isValid = await validateStep(currentStep, formData, schema);
    if (isValid && currentStep < steps) {
      setCurrentStep((prev) => prev + 1);
      return true;
    }
    return false;
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitForm = async (finalStepSchema: z.ZodType<any>) => {
    const isValid = await validateStep(currentStep, formData, finalStepSchema);
    if (isValid && onSubmit) {
      await onSubmit(formData as T);
    }
  };

  return {
    currentStep,
    formData,
    errors,
    updateFormData,
    nextStep,
    previousStep,
    submitForm,
  };
}