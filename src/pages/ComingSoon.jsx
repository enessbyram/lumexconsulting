import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between mt-20">
      
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-[80vh]">
        
        <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-purple-600 blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
            <FontAwesomeIcon 
                icon={faRocket} 
                className="text-7xl md:text-9xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-bounce" 
                style={{ animationDuration: '3s' }}
            />
        </div>

        <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                çok yakında
            </h1>
            
            <div className="h-1 w-24 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                bu projenin geliştirme süreçleri titizlikle devam ediyor. <br className="hidden md:block"/>
                kodlarımızı derliyor, tasarımı parlatıyoruz. en kısa sürede yayındayız.
            </p>
        </div>

        <Link 
            to="/services" 
            className="mt-12 px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all flex items-center gap-3 group"
        >
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform"/>
            projelere dön
        </Link>

      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;