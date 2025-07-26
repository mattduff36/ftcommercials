import ContactForm from './ContactForm';
import { ContactFormData } from '@/lib/utils/formValidation';

interface ServiceRequestFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export default function ServiceRequestForm({ onSubmit }: ServiceRequestFormProps): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Request a Service</h2>
        <p className="text-gray-600">
          Fill out the form below with your service requirements and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <ContactForm onSubmit={onSubmit} includeServiceDetails={true} />
    </div>
  );
} 