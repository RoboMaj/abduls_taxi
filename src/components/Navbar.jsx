import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-yellow-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">🚕 Abdul's Taxi</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-yellow-200 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-yellow-200 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('fares')} className="hover:text-yellow-200 transition">
              Fares
            </button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-yellow-200 transition">
              Book Now
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-200 transition">
              Contact
            </button>
            <a href="tel:07944863098" className="bg-white text-yellow-600 px-4 py-2 rounded-lg font-bold hover:bg-yellow-50 transition">
              📞 Call Now
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => scrollToSection('home')} className="block py-2 hover:text-yellow-200 w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block py-2 hover:text-yellow-200 w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('fares')} className="block py-2 hover:text-yellow-200 w-full text-left">
              Fares
            </button>
            <button onClick={() => scrollToSection('booking')} className="block py-2 hover:text-yellow-200 w-full text-left">
              Book Now
            </button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 hover:text-yellow-200 w-full text-left">
              Contact
            </button>
            <a href="tel:07944863098" className="block mt-2 bg-white text-yellow-600 px-4 py-2 rounded-lg font-bold text-center">
              📞 Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
