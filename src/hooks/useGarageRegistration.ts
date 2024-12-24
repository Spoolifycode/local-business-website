import { useState } from 'react';
import { 
  validateBasicInfo, 
  validateLocation, 
  validateServicesHours,
  type GarageRegistrationData 
} from '@/lib/validation/garageRegistration';

interface UseGarageRegistrationReturn {
  formData: GarageRegistrationData;
  errors: Record<string, string>;
  isLoading: boolean;
  handleChange: (field: string, value: any) => void;
  handleSubmit: () => Promise<boolean>;
  validateStep: (step: number) => boolean;
}

export function useGarageRegistration(): UseGarageRegistrationReturn {
  const [formData, setFormData] = useState<GarageRegistrationData>({
    basicInfo: {
      name: '',
      email: '',
      phone: '',
      website: '',
    },
    location: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
    },
    services: [{ name: '', description: '' }],
    hours: {},
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => {
      const [section, subField] = field.split('.');
      if (subField) {
        return {
          ...prev,
          [section]: {
            ...prev[section as keyof GarageRegistrationData],
            [subField]: value,
          },
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });

    // Clear related error
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    let validationResult;
    
    switch (step) {
      case 0:
        validationResult = validateBasicInfo(formData.basicInfo);
        break;
      case 1:
        validationResult = validateLocation(formData.location);
        break;
      case 2:
        validationResult = validateServicesHours({ 
          services: formData.services, 
          hours: formData.hours 
        });
        break;
      default:
        return false;
    }

    if (!validationResult.success) {
      const newErrors: Record<string, string> = {};
      validationResult.error.errors.forEach(error => {
        const field = error.path.join('.');
        newErrors[field] = error.message;
      });
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleSubmit = async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Validate all steps
      const isBasicInfoValid = validateStep(0);
      const isLocationValid = validateStep(1);
      const isServicesHoursValid = validateStep(2);

      if (!isBasicInfoValid || !isLocationValid || !isServicesHoursValid) {
        return false;
      }

      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message or redirect
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Failed to submit form. Please try again.',
      }));
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    validateStep,
  };
}