import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ReferencesContent from '../components/ReferencesContent';

const References = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-24">
        <ReferencesContent />
      </main>

      <Footer />
    </div>
  );
};

export default References;
