import { useState } from 'react';

export default function Fares() {
  const [activeTab, setActiveTab] = useState('airports');

  const airports = [
    { from: 'Witney', to: 'London Heathrow', time: '1 hr 21 min', price: '£130' },
    { from: 'Witney', to: 'London Gatwick', time: '1 hr 49 min', price: '£160' },
    { from: 'Witney', to: 'London Stansted', time: '1 hr 57 min', price: '£170' },
    { from: 'Witney', to: 'London Luton', time: '1 hr 30 min', price: '£145' },
    { from: 'Witney', to: 'Birmingham Airport', time: '1 hr 15 min', price: '£120' },
  ];

  const seaports = [
    { from: 'Witney', to: 'Southampton Port', time: '1 hr 45 min', price: '£150' },
    { from: 'Witney', to: 'Dover Port', time: '2 hr 30 min', price: '£200' },
    { from: 'Witney', to: 'Portsmouth Port', time: '1 hr 50 min', price: '£155' },
  ];

  const eurostar = [
    { from: 'Witney', to: 'St Pancras International', time: '1 hr 45 min', price: '£140' },
  ];

  const getCurrentFares = () => {
    switch (activeTab) {
      case 'airports': return airports;
      case 'seaports': return seaports;
      case 'eurostar': return eurostar;
      default: return airports;
    }
  };

  return (
    <section id="fares" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-8">Fixed rates with no hidden charges</p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('airports')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'airports'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ✈️ Airports
          </button>
          <button
            onClick={() => setActiveTab('seaports')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'seaports'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🚢 Seaports
          </button>
          <button
            onClick={() => setActiveTab('eurostar')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'eurostar'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🚄 Eurostar
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">From</th>
                  <th className="px-6 py-3 text-left">To</th>
                  <th className="px-6 py-3 text-left">Journey Time</th>
                  <th className="px-6 py-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {getCurrentFares().map((fare, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{fare.from}</td>
                    <td className="px-6 py-4">{fare.to}</td>
                    <td className="px-6 py-4 text-gray-600">{fare.time}</td>
                    <td className="px-6 py-4 font-bold text-yellow-600">{fare.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Additional charges may apply for public holidays and late-night bookings (11 PM - 6 AM). 
            All prices are fixed rates with no hidden charges. Contact us for long-distance quotes and special discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
