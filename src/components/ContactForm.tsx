'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import {
  ContactFormData,
  FormErrors,
  validateContactForm,
  isFormValid,
} from '@/lib/utils/formValidation';

interface ContactFormProps {
  includeServiceDetails?: boolean;
}

export default function ContactForm({
  includeServiceDetails = false,
}: ContactFormProps): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
    vehicleDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (!isFormValid(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceType: '',
          vehicleDetails: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.name
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-brand-accent focus:ring-brand-accent'
          }`}
          required
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.email
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-brand-accent focus:ring-brand-accent'
          }`}
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.phone
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-brand-accent focus:ring-brand-accent'
          }`}
          required
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Service Type Field (Optional) */}
      {includeServiceDetails && (
        <>
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-accent focus:ring-brand-accent"
            >
              <option value="">Select a service</option>
              <option value="PMI">PMI & MOT Inspection</option>
              <option value="Electrical">Electrical Diagnostics</option>
              <option value="Welding">Welding & Fabrication</option>
              <option value="TailLift">Tail Lift Repairs</option>
              <option value="Bodywork">Body Work & Spray Painting</option>
              <option value="Other">Other</option>
            </select>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
            )}
          </div>

          <div>
            <label htmlFor="vehicleDetails" className="block text-sm font-medium text-gray-700">
              Vehicle Details
            </label>
            <input
              type="text"
              id="vehicleDetails"
              name="vehicleDetails"
              value={formData.vehicleDetails}
              onChange={handleChange}
              placeholder="Vehicle make, model, and registration (optional)"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-accent focus:ring-brand-accent"
            />
            {errors.vehicleDetails && (
              <p className="mt-1 text-sm text-red-600">{errors.vehicleDetails}</p>
            )}
          </div>
        </>
      )}

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-md shadow-sm ${
            errors.message
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-brand-accent focus:ring-brand-accent'
          }`}
          required
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-md px-4 py-2 text-white font-medium transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-brand-accent hover:bg-brand-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transform hover:scale-105'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-600 text-center font-medium">
            Message sent successfully! We'll get back to you soon.
          </p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-center font-medium">
            There was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  );
}
