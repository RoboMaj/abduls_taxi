export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🚕 Abdul's Taxi</h3>
            <p className="text-gray-300 mb-4">
              Witney's trusted taxi service providing reliable transportation 24/7. 
              Airport transfers, long distance, and local journeys.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/abdulstaxiwitney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition"
              >
                <span className="text-2xl">👍</span> Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-yellow-400 transition">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('fares')} className="text-gray-300 hover:text-yellow-400 transition">
                  Fare Prices
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-gray-300 hover:text-yellow-400 transition">
                  Book Now
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-400 transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Phone:</strong><br />
                <a href="tel:07944863098" className="text-yellow-400 hover:text-yellow-300">
                  07944 863098
                </a>
              </li>
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:abdulstaxiwitney@gmail.com" className="text-yellow-400 hover:text-yellow-300 break-all">
                  abdulstaxiwitney@gmail.com
                </a>
              </li>
              <li>
                <strong>Address:</strong><br />
                Cranbrook Road, Avenue Two<br />
                Witney, OX28 4YD
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Abdul's Taxi Witney. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Available 24/7 • Licensed & Insured • Professional Service
          </p>
        </div>
      </div>
    </footer>
  );
}
