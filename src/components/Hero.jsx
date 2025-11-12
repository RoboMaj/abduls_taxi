export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Witney's Premier Taxi Service
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Reliable • Professional • Available 24/7
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Airport transfers, long-distance journeys, and local trips. 
          <span className="font-bold"> Special discounts for advance bookings!</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07944863098"
            className="bg-white text-yellow-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-50 transition shadow-lg"
          >
            📞 Call: 07944 863098
          </a>
          <button
            onClick={scrollToBooking}
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-700 transition shadow-lg"
          >
            📅 Book Online
          </button>
        </div>
      </div>
    </section>
  );
}
