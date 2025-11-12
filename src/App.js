import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fares from './components/Fares';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <Fares />
      <BookingForm />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
