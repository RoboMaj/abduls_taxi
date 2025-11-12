export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch - We're available 24/7
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-600">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a href="tel:07944863098" className="text-yellow-600 hover:text-yellow-700 text-lg">
                    07944 863098
                  </a>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:abdulstaxiwitney@gmail.com" className="text-yellow-600 hover:text-yellow-700 break-all">
                    abdulstaxiwitney@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Address</h4>
                  <p className="text-gray-700">
                    Cranbrook Road, Avenue Two<br />
                    Witney, Oxfordshire<br />
                    OX28 4YD
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start">
                <div className="text-3xl mr-4">👍</div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Follow Us</h4>
                  <a 
                    href="https://www.facebook.com/abdulstaxiwitney" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours & Features */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-600">Why Choose Us?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-2xl mr-3">⏰</div>
                <div>
                  <h4 className="font-semibold">24/7 Availability</h4>
                  <p className="text-sm text-gray-600">Round the clock service, every day of the year</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">💰</div>
                <div>
                  <h4 className="font-semibold">Competitive Pricing</h4>
                  <p className="text-sm text-gray-600">Fixed rates with special discounts for advance bookings</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">🚗</div>
                <div>
                  <h4 className="font-semibold">Modern Fleet</h4>
                  <p className="text-sm text-gray-600">Ford Galaxy vehicles - comfortable for up to 6 passengers</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">👨‍✈️</div>
                <div>
                  <h4 className="font-semibold">Professional Drivers</h4>
                  <p className="text-sm text-gray-600">Experienced, licensed, and friendly service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">✈️</div>
                <div>
                  <h4 className="font-semibold">Airport Specialists</h4>
                  <p className="text-sm text-gray-600">Flight tracking and meet & greet service</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-2xl mr-3">📱</div>
                <div>
                  <h4 className="font-semibold">Easy Booking</h4>
                  <p className="text-sm text-gray-600">Book online or call - simple and convenient</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-500 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="mb-6">Call us now or use our online booking form above</p>
            <a 
              href="tel:07944863098"
              className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold text-xl hover:bg-yellow-50 transition shadow-lg"
            >
              📞 07944 863098
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
