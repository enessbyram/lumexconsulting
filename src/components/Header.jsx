import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 h-24 flex items-center justify-center z-50 backdrop-blur-md bg-black/10 text-white border-b border-white/5">
      <nav className="w-full container mx-auto flex flex-row justify-between items-center px-6">
        
        {/* LEFT NAV */}
        <div className="hidden md:flex flex-row gap-8 font-light tracking-wide">
          <Link to="/" className="cursor-pointer hover:text-purple-400 transition-colors">
            Ana Sayfa
          </Link>
          <Link to="/services" className="cursor-pointer hover:text-purple-400 transition-colors">
            Hizmetlerimiz
          </Link>
        </div>

        {/* LOGO (Tıklayınca Ana Sayfaya döner) */}
        <Link to="/" className="w-32 cursor-pointer">
          <img src={logo} alt="logo" className="w-full h-auto object-contain" />
        </Link>

        {/* RIGHT NAV */}
        <div className="flex flex-row gap-6 items-center">
          <Link to="/about" className="cursor-pointer hidden md:block hover:text-purple-400 transition-colors font-light">
            Hakkımızda
          </Link>

          {/* Ayırıcı Çizgi */}
          <div className="h-8 w-px bg-white/20 hidden md:block"></div>

          {/* SOCIALS */}
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/username" // Burayı kendi linkinle güncelleyebilirsin
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white group-hover:text-white" />
            </a>

            <a
              href="https://github.com/username" // Burayı kendi linkinle güncelleyebilirsin
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 cursor-pointer rounded-full p-2 transition-all flex items-center justify-center hover:scale-110 group"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white group-hover:text-white" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;