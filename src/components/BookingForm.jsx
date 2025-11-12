import { useState } from 'react';
import { toast } from 'react-toastify';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    destination: '',
    datetime: '',
    passengers: '1',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL AFTER DEPLOYMENT
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // If you haven't set up Google Script yet, show a message
      if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        toast.info('Demo Mode: Form submitted! Set up Google Script to enable email notifications.', {
          position: 'top-center',
          autoClose: 5000,
        });
        console.log('Form Data:', formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickup: '',
          destination: '',
          datetime: '',
          passengers: '1',
          notes: ''
        });
        setLoading(false);
        return;
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      toast.success('Booking sent! We\'ll contact you shortly to confirm.', {
        position: 'top-center',
        autoClose: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        destination: '',
        datetime: '',
        passengers: '1',
        notes: ''
      });

    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Error sending booking. Please call us at 07944 863098', {
        position: 'top-center',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Book Your Taxi</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and we'll confirm your booking shortly
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="07944 123456"
                />
              </div>

              {/* Passengers */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Passengers
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Pickup Location */}
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Witney Town Centre"
                />
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Destination *
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="London Heathrow"
                />
              </div>

              {/* Date and Time */}
              <div className="md:col-span-2">
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Date & Time *
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Any special requirements? Extra luggage, child seats, etc."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Book Now'}
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Required fields. We'll contact you to confirm your booking.
            </p>
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Prefer to call?</p>
            <a 
              href="tel:07944863098"
              className="text-2xl font-bold text-yellow-600 hover:text-yellow-700"
            >
              📞 07944 863098
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
