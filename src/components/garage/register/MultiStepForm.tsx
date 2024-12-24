"use client";

import { useState } from 'react';
import { useGarageRegistration } from '@/hooks/useGarageRegistration';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { BasicInfo } from './steps/BasicInfo';
import { Location } from './steps/Location';
import { ServicesHours } from './steps/ServicesHours';

const STEPS = [
  { 
    title: 'Basic Information',
    description: 'Tell us about your business',
    component: BasicInfo 
  },
  { 
    title: 'Location',
    description: 'Where can customers find you?',
    component: Location 
  },
  { 
    title: 'Services & Hours',
    description: 'What do you offer and when are you open?',
    component: ServicesHours 
  }
];

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { 
    formData, 
    errors, 
    isLoading, 
    handleChange, 
    handleSubmit,
    validateStep 
  } = useGarageRegistration();

  const CurrentStepComponent = STEPS[currentStep].component;

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async () => {
    if (await handleSubmit()) {
      // TODO: Show success message or redirect
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {STEPS.map((step, index) => (
            <div 
              key={step.title} 
              className="flex flex-col items-center flex-1"
            >
              <div className="flex items-center w-full">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  transition-colors duration-200
                  ${index <= currentStep 
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {index + 1}
                </div>
                {index < STEPS.length - 1 && (
                  <div 
                    className={`
                      flex-1 h-1 transition-colors duration-200
                      ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}
                    `}
                  />
                )}
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-medium text-gray-900">
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Step */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <CurrentStepComponent
          data={formData}
          onChange={handleChange}
          errors={errors}
        />

        {/* Error Message */}
        {errors.submit && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{errors.submit}</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentStep === 0 || isLoading}
          className={`
            px-6 py-3 rounded-md text-base font-medium
            transition-colors duration-200
            ${currentStep === 0 || isLoading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
            }
          `}
        >
          Back
        </button>

        <button
          type="button"
          onClick={currentStep === STEPS.length - 1 ? onSubmit : handleNext}
          disabled={isLoading}
          className={`
            px-6 py-3 rounded-md text-base font-medium
            transition-colors duration-200
            flex items-center space-x-2
            ${isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
            }
            text-white
          `}
        >
          {isLoading && <LoadingSpinner size="sm" className="text-white" />}
          <span>
            {currentStep === STEPS.length - 1 ? 'Submit' : 'Next'}
          </span>
        </button>
      </div>
    </div>
  );
}