import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ServicesContent from '../components/ServicesContent';

const Services = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-24">
        <ServicesContent />
      </main>

      <Footer />
    </div>
  );
};

export default Services;