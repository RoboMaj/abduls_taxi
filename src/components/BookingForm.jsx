import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    destination: "",
    datetime: "",
    passengers: "1",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8-Qex9PgBRZYM7r7qr5NjOLmhdkB-je7cxK-sCH1Jhd3M2oIwEY9LbTASnr0CQt-Y/exec";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // Validation
    if (!form.name || !form.phone || !form.pickup || !form.destination) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Phone validation (basic UK format)
    const phoneRegex = /^(\+44|0)[0-9]{10}$/;
    if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
      toast.error("Please enter a valid UK phone number");
      return;
    }

    // Email validation (if provided)
    if (form.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        toast.error("Please enter a valid email address");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Note: With no-cors mode, we can't read the response
      // So we assume success if no error is thrown
      toast.success("Booking request sent! We'll contact you shortly.", {
        position: "top-center",
        autoClose: 5000,
      });

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        destination: "",
        datetime: "",
        passengers: "1",
        notes: ""
      });

    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to send booking. Please call us directly at 07944 863098", {
        position: "top-center",
        autoClose: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="booking" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Book Your Taxi</h2>
          <p className="text-gray-600 text-lg">Fill in the form below and we'll get back to you with a quote</p>
          <div className="mt-4 inline-flex items-center gap-2 text-yellow-600 font-semibold">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>Or call us directly: 07944 863098</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          
          {/* Personal Details Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-yellow-500 pb-2">
              Your Details
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="07944 863098"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address (optional)
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Journey Details Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-yellow-500 pb-2">
              Journey Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <input
                name="pickup"
                type="text"
                placeholder="e.g., Witney Town Centre, OX28 6AA"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                value={form.pickup}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination <span className="text-red-500">*</span>
              </label>
              <input
                name="destination"
                type="text"
                placeholder="e.g., London Heathrow Airport"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                value={form.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date & Time
                </label>
                <input
                  name="datetime"
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  value={form.datetime}
                  onChange={handleChange}
                  min={new Date().toISOString().slice(0, 16)}
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank for ASAP pickup</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Passengers
                </label>
                <select
                  name="passengers"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  value={form.passengers}
                  onChange={handleChange}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Notes Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              placeholder="e.g., Extra luggage, child seat required, return journey needed..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition h-32 resize-none"
              value={form.notes}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 text-white font-bold text-lg rounded-lg shadow-lg transition-all transform hover:scale-105 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 active:scale-95"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending Request...
              </span>
            ) : (
              "Request Booking"
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            <span className="text-red-500">*</span> Required fields
          </p>
        </form>

        {/* Contact Info Below Form */}
        <div className="mt-8 text-center bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
          <p className="text-gray-700 font-semibold mb-2">Prefer to book by phone?</p>
          <a href="tel:07944863098" className="text-2xl font-bold text-yellow-600 hover:text-yellow-700">
            📞 07944 863098
          </a>
          <p className="text-sm text-gray-600 mt-2">Available 24/7 for your convenience</p>
        </div>
      </div>
    </section>
  );
}
