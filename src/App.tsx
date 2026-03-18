import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import FAQ from './components/FAQ';
import LocationList from './components/LocationList';
import Footer from './components/Footer';
import { UK_LOCATIONS } from './constants';
import { useEffect } from 'react';

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSignals />
      <FAQ />
      <LocationList />
    </main>
  );
}

function LocationPage() {
  const { slug } = useParams();
  const location = UK_LOCATIONS.find(l => l.slug === slug);
  const locationName = location ? location.name : "UK";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Child Injury Claims in ${locationName} - Expert Solicitors`;
  }, [locationName]);

  return (
    <main>
      <Hero locationName={locationName} />
      <TrustSignals />
      <FAQ locationName={locationName} />
      <LocationList />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/near-me/:slug" element={<LocationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
