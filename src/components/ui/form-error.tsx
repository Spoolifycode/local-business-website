interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  
  return (
    <p className="text-sm text-red-600 mt-1">
      {message}
    </p>
  );
}