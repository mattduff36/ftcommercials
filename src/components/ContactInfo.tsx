interface ContactInfoProps {
  showMap?: boolean;
}

export default function ContactInfo({ showMap = true }: ContactInfoProps): JSX.Element {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
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
                  <a href="tel:01777871493" className="text-orange-600 hover:text-orange-700">
                    01777 871493
                  </a>
                  <span className="text-gray-500 text-sm ml-2">(Office)</span>
                </p>
                <p>
                  <a href="tel:07967176567" className="text-orange-600 hover:text-orange-700">
                    07967 176567
                  </a>
                  <span className="text-gray-500 text-sm ml-2">(Mobile)</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>
                <a
                  href="mailto:ftcommercials@gmail.com"
                  className="text-orange-600 hover:text-orange-700"
                >
                  ftcommercials@gmail.com
                </a>
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <div className="space-y-1 text-gray-600">
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

        {/* Map */}
        {showMap && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2!2d-0.8!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0PCsDYnMDAuMCJOIDDCsDQ4JzAwLjAiVw!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="F.T. Commercials Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 