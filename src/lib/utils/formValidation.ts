export interface FormErrors {
  [key: string]: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
  vehicleDetails?: string;
}

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  const phoneRegex = /^[\d\s()+\-]+$/;
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  // Optional fields validation
  if (data.serviceType && data.serviceType.trim().length < 2) {
    errors.serviceType = 'Service type must be at least 2 characters long';
  }

  if (data.vehicleDetails && data.vehicleDetails.trim().length < 2) {
    errors.vehicleDetails = 'Vehicle details must be at least 2 characters long';
  }

  return errors;
}

export function isFormValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}
