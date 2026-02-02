import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-6 pt-40 pb-20 flex flex-col items-center">
        {/* Başlık Alanı */}
        <div className="w-full max-w-4xl text-center md:text-left mb-20 reveal-point transition-all duration-1000">
          <div className="w-16 h-1 bg-white/50 mb-6 mx-auto md:mx-0"></div>
          <h1 className="text-white text-5xl md:text-6xl font-light mb-8">
            hakkımızda
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            lumex consulting olarak, markaların dijital dönüşüm yolculuğunda
            yanlarında oluyoruz. minimal tasarım anlayışımız ve kullanıcı
            deneyimine verdiğimiz önemle, işlevsel ve estetik web çözümleri
            üretiyoruz. her proje bizim için yeni bir hikaye, her marka bizim
            için eşsiz bir deneyim.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16 reveal-point transition-all duration-1000 delay-200">
          <div className="border border-white/10 rounded-2xl p-8 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/40 hover:border-white/20 group">
            <h3 className="text-white text-2xl font-medium mb-4">
              enes bayram
            </h3>
            <a
              href="mailto:enessbyram@gmail.com"
              className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>enessbyram@gmail.com</span>
            </a>
          </div>

          <div className="border border-white/10 rounded-2xl p-8 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800/40 hover:border-white/20 group">
            <h3 className="text-white text-2xl font-medium mb-4">
              özgün biberoğlu
            </h3>
            <a
              href="mailto:ozgun@lumex.consulting"
              className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>ozgun@lumex.consulting</span>
            </a>
          </div>
        </div>

        {/* DÜZELTİLEN KISIM: Çizgi artık kartlarla aynı genişlikte (max-w-4xl) */}
        <div className="w-full max-w-4xl h-px bg-white/10 mb-16 reveal-point transition-all duration-1000 delay-250"></div>

        {/* İletişim */}
        <div className="flex flex-col items-center gap-4 reveal-point transition-all duration-1000 delay-300">
          <span className="text-gray-500 text-sm font-light">
            genel sorularınız için
          </span>
          <a
            href="mailto:lumexconsulting@gmail.com"
            className="text-white text-xl md:text-2xl hover:text-purple-400 transition-colors flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            lumexconsulting@gmail.com
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;