export default function Services() {
  const services = [
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description: 'Heathrow, Gatwick, Stansted, Luton, Birmingham - All major airports covered'
    },
    {
      icon: '🚢',
      title: 'Seaport Transfers',
      description: 'Southampton, Dover, Portsmouth - Cruise ship transfers made easy'
    },
    {
      icon: '🚄',
      title: 'Eurostar Stations',
      description: 'St Pancras International - Hassle-free train station transfers'
    },
    {
      icon: '🌍',
      title: 'Long Distance',
      description: 'Comfortable journeys across the UK with special discount rates'
    },
    {
      icon: '🏘️',
      title: 'Local Trips',
      description: 'Quick and reliable taxi service around Witney and surrounding areas'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '6-Seater Available',
      description: 'Ford Galaxy vehicles for families and groups up to 6 passengers'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional taxi services for all your transportation needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded">
          <p className="text-lg font-semibold text-gray-800">
            💰 Special Offer: Get discounted rates for advance bookings and long-distance journeys!
          </p>
        </div>
      </div>
    </section>
  );
}
