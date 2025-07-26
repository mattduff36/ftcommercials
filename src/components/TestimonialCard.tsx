interface TestimonialCardProps {
  quote: string;
  author?: string;
  role?: string;
  company?: string;
}

export default function TestimonialCard({
  quote,
  author = 'Satisfied Customer',
  role,
  company,
}: TestimonialCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Quote Icon */}
      <div className="text-orange-600 mb-4">
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 mb-4">{quote}</blockquote>

      {/* Author Information */}
      <div className="mt-4 border-t pt-4">
        <div className="font-semibold">{author}</div>
        {(role || company) && (
          <div className="text-sm text-gray-500">
            {role}
            {role && company && ' - '}
            {company}
          </div>
        )}
      </div>
    </div>
  );
} 