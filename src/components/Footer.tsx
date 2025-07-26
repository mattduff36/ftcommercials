import Link from 'next/link';

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <strong>Address:</strong>
                <br />
                Ollerton Road
                <br />
                Newark, United Kingdom
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href="tel:01777871493" className="hover:text-orange-500">
                  01777 871493
                </a>
                <br />
                <a href="tel:07967176567" className="hover:text-orange-500">
                  07967 176567
                </a>
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:ftcommercials@gmail.com" className="hover:text-orange-500">
                  ftcommercials@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <p>Monday - Friday: 7am - 5pm</p>
            <p>Saturday - Sunday: Closed</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-orange-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-orange-500">
                  Workshop Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-orange-500">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p>
            © {currentYear} F.T. Commercials LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 