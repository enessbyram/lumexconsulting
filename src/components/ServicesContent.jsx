import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link importu önemli!
import { projectsData } from '../data/projects'; // Veriyi buradan çekiyoruz

const ServicesContent = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-point');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="container mx-auto px-6 py-40">
      
      {/* Başlık */}
      <div className="w-full max-w-7xl mx-auto mb-16 reveal-point transition-all duration-1000">
        <div className="w-16 h-1 bg-white/50 mb-6"></div>
        <h1 className="text-white text-5xl md:text-6xl font-light mb-8">hizmetlerimiz</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        
        {projectsData.map((project, index) => (
          // Link bileşeni ile kartın tamamını tıklanabilir yapıyoruz
          <Link 
            to={`/project/${project.id}`} // Dinamik link (örn: /project/gym-randevu-sistemi)
            key={project.id} 
            className={`group border border-white/10 rounded-3xl bg-black/20 backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2 reveal-point delay-${index * 200} cursor-pointer block`}
          >
            
            <div className="h-64 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>

            <div className="p-8 flex flex-col gap-6">
              <h3 className="text-white text-2xl font-medium leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed min-h-15">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-4 text-sm text-gray-400 group-hover:text-white transition-colors flex items-center gap-2">
                detayları gör <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default ServicesContent;