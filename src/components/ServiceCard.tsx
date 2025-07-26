import { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  href,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="text-brand-accent text-3xl mr-4">{icon}</div>
          <h3 className="text-xl font-semibold text-brand-black-900">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-brand-grey-600 mb-4">{description}</p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-brand-grey-600">
              <svg
                className="h-5 w-5 text-brand-accent mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <Link
          href={href}
          className="inline-flex items-center text-brand-accent hover:text-brand-accent-dark font-medium transition-colors duration-300"
        >
          Learn More
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
