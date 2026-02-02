import React, { useEffect } from "react";
import gymSystem from "../assets/images/gym-system.png";
import salingSystem from "../assets/images/saling-system.png";
import { Link } from "react-router-dom"; // Link import edildi

const Projects = () => {
  // Animasyon tetikleyici (Scroll Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".reveal-point");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-20 px-6 gap-32">
      {/* Başlık Alanı */}
      <div className="w-full container max-w-7xl reveal-point transition-all duration-1000">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
          bazı çalışmalarımız
        </h2>
      </div>

      {/* --- PROJE 1: GYM SİSTEMİ --- */}
      <div className="w-full container max-w-7xl flex flex-col md:flex-row items-center gap-16 reveal-point transition-all duration-1000">
        
        {/* Görsel - Link ile sarmalandı */}
        <Link 
          to="/project/gym-randevu-sistemi" 
          className="w-full md:w-3/5 overflow-hidden rounded-2xl group cursor-pointer block"
        >
          <img
            src={gymSystem}
            alt="Gym Randevu Sistemi"
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Yazı Alanı */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 text-white">
          <div className="w-12 h-1 bg-white/50 mb-2"></div>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            gym randevu <br /> sistemi
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            fitness salonları için tam entegre üye yönetimi, kişisel antrenör
            randevuları, grup dersleri planlaması, online ödeme sistemi ve
            detaylı performans takibi.
          </p>

          {/* Teknolojiler */}
          <div className="flex flex-wrap gap-3 mt-2">
            {["react", "php", "mysql", "tailwind"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-sm text-gray-400 bg-white/5 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/50 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detay Linki - 'a' etiketi yerine Link kullanıldı */}
          <Link
            to="/project/gym-randevu-sistemi"
            className="mt-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            detayları gör{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* --- PROJE 2: DERSHANE SİSTEMİ --- */}
      <div className="w-full container max-w-7xl flex flex-col-reverse md:flex-row items-center gap-16 reveal-point transition-all duration-1000">
        
        {/* Yazı Alanı */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 text-white text-left md:text-right md:items-end">
          <div className="w-12 h-1 bg-white/50 mb-2"></div>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            dershane yönetim <br /> sistemi
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            eğitim kurumları için kapsamlı dijital yönetim platformu. öğrenci
            kayıt ve devam takibi, dinamik ders programlama, öğretmen
            koordinasyonu.
          </p>

          {/* Teknolojiler */}
          <div className="flex flex-wrap gap-3 mt-2 justify-start md:justify-end">
            {["react.js", "mysql", "php", "tailwind"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-sm text-gray-400 bg-white/5 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/50 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detay Linki - 'a' etiketi yerine Link kullanıldı */}
          <Link
            to="/project/ev-araba-satis-platformu"
            className="mt-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            detayları gör{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Görsel - Link ile sarmalandı */}
        <Link 
          to="/project/ev-araba-satis-platformu" 
          className="w-full md:w-3/5 overflow-hidden group cursor-pointer block rounded-2xl" 
          // Not: Görselin köşeleri için rounded-2xl ekledim, istersen kaldırabilirsin
        >
          <img
            src={salingSystem}
            alt="Dershane Yönetim Sistemi"
            className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Ve devamı linki (Doğru şekilde ayarlanmış) */}
      <div className="w-full container max-w-7xl flex justify-end reveal-point transition-all duration-1000">
        <Link
          to="/services"
          className="text-lg text-white/70 hover:text-white transition-colors flex items-center gap-3 group"
        >
          ve devamı{" "}
          <span className="group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;