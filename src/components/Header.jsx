import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Linke tıklayınca menüyü kapat
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    // Header'ın kendisi de fixed ve cam efektli
    <header className="w-full fixed top-0 left-0 h-24 flex items-center justify-center z-50 backdrop-blur-md bg-black/10 text-white border-b border-white/5 transition-all duration-300">
      <nav className="w-full container mx-auto flex flex-row justify-between items-center px-6">
        
        {/* --- HAMBURGER MENU BUTTON (Mobile) --- */}
        <div className="md:hidden z-50">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-2xl text-white focus:outline-none hover:text-purple-400 transition-colors"
            >
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
        </div>

        {/* --- DESKTOP LEFT MENU --- */}
        <div className="hidden md:flex flex-row gap-8 font-light tracking-wide">
          <Link to="/" className="cursor-pointer hover:text-purple-400 transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/services" className="cursor-pointer hover:text-purple-400 transition-colors">
            Hizmetlerimiz
          </Link>
        </div>

        {/* --- LOGO --- */}
        <Link to="/" className="w-32 cursor-pointer z-50" onClick={closeMenu}>
          <img src={logo} alt="logo" className="w-full h-auto object-contain" />
        </Link>

        {/* --- DESKTOP RIGHT MENU --- */}
        <div className="hidden md:flex flex-row gap-6 items-center">
          <Link to="/about" className="cursor-pointer hover:text-purple-400 transition-colors font-light">
            Hakkımızda
          </Link>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white group-hover:text-white" />
            </a>

            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white group-hover:text-white" />
            </a>
          </div>
        </div>
        
      </nav>

      <div 
        className={`fixed inset-0 top-24 w-full h-[calc(100vh-6rem)] bg-black/60 backdrop-blur-3xl border-t border-white/10 flex flex-col items-center justify-start pt-20 gap-10 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
          <Link 
              to="/" 
              className="text-2xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              ana sayfa
          </Link>
          <Link 
              to="/services" 
              className="text-2xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              hizmetlerimiz
          </Link>
          <Link 
              to="/about" 
              className="text-2xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              hakkımızda
          </Link>

          {/* Mobilde Menü İçi Sosyal İkonlar */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white/20 border border-white/10 cursor-pointer rounded-full flex items-center justify-center transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white/20 border border-white/10 cursor-pointer rounded-full flex items-center justify-center transition-all"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
            </a>
          </div>
      </div>
    </header>
  );
};

export default Header;