import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 h-24 flex items-center justify-center z-50 backdrop-blur-md bg-black/10 text-white border-b border-white/5">
      <nav className="w-full container mx-auto flex flex-row justify-between items-center px-6 relative z-50">
        
        <div className="hidden md:flex flex-row gap-8 font-light tracking-wide">
          <Link to="/" className="cursor-pointer hover:text-purple-400 transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/services" className="cursor-pointer hover:text-purple-400 transition-colors">
            Hizmetlerimiz
          </Link>
        </div>

        <Link to="/" className="w-32 cursor-pointer" onClick={closeMenu}>
          <img src={logo} alt="logo" className="w-full h-auto object-contain" />
        </Link>

        <div className="hidden md:flex flex-row gap-6 items-center">
          <Link to="/about" className="cursor-pointer hover:text-purple-400 transition-colors font-light">
            Hakkımızda
          </Link>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/enessbyram/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white group-hover:text-white" />
            </a>

            <a
              href="https://github.com/enessbyram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="md:hidden">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-2xl text-white focus:outline-none hover:text-purple-400 transition-colors"
            >
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 top-0 w-full h-screen bg-black/60 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden transition-all duration-500 ease-in-out z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
          <Link 
              to="/" 
              className="text-3xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              ana sayfa
          </Link>
          <Link 
              to="/services" 
              className="text-3xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              hizmetlerimiz
          </Link>
          <Link 
              to="/about" 
              className="text-3xl font-light tracking-widest hover:text-purple-400 transition-colors"
              onClick={closeMenu}
          >
              hakkımızda
          </Link>

          <div className="flex gap-6 mt-10">
            <a
              href="https://www.linkedin.com/in/enessbyram/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/5 hover:bg-white/20 border border-white/10 cursor-pointer rounded-full flex items-center justify-center transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
            </a>
            <a
              href="https://github.com/enessbyram"
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