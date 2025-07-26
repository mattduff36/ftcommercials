interface ContactInfoProps {
  showMap?: boolean;
}

export default function ContactInfo({ showMap = false }: ContactInfoProps): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

        <div className="space-y-6">
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-brand-grey-600">
              Ollerton Road
              <br />
              Newark
              <br />
              United Kingdom
            </p>
          </div>

          {/* Phone Numbers */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <div className="space-y-1">
              <p>
                <a href="tel:01777871493" className="text-brand-accent hover:text-brand-accent-dark">
                  01777 871493
                </a>
                <span className="text-brand-grey-500 text-sm ml-2">(Office)</span>
              </p>
              <p>
                <a href="tel:07967176567" className="text-brand-accent hover:text-brand-accent-dark">
                  07967 176567
                </a>
                <span className="text-brand-grey-500 text-sm ml-2">(Mobile)</span>
              </p>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p>
              <a
                href="mailto:ftcommercials@gmail.com"
                className="text-brand-accent hover:text-brand-accent-dark"
              >
                ftcommercials@gmail.com
              </a>
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <div className="space-y-1 text-brand-grey-600">
              <p>
                <span className="font-medium">Monday - Friday:</span> 7am - 5pm
              </p>
              <p>
                <span className="font-medium">Saturday - Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
