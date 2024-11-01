import React from 'react';
import { Brain, Globe2, BarChart3, ArrowRight, Database, Shield, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;