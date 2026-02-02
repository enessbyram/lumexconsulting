import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
  const { id } = useParams(); // URL'den ID'yi al (örn: gym-randevu-sistemi)
  
  // İlgili projeyi bul
  const project = projectsData.find(p => p.id === id);

  // Sayfa açıldığında en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Eğer proje bulunamazsa (örn: yanlış link)
  if (!project) {
    return <div className="text-white text-center pt-40">proje bulunamadı.</div>;
  }

  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        
        {/* Geri Dön Linki */}
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-sm">
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform"/>
            geri dön
        </Link>

        {/* Büyük Kapak Görseli */}
        <div className="w-full h-75 md:h-125 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Başlık ve Açıklama Alanı */}
        <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {project.fullDesc}
            </p>

            {/* Butonlar */}
            <div className="flex flex-wrap gap-4">
                <a href={project.githubLink} className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    <FontAwesomeIcon icon={faGithub} />
                    github
                </a>
                <a href={project.demoLink} className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    demo
                </a>
            </div>
        </div>

        {/* Özellikler ve Teknolojiler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/10 pt-12">
            
            {/* Sol: Özellikler */}
            <div>
                <h3 className="text-2xl text-white font-medium mb-6">özellikler</h3>
                <ul className="flex flex-col gap-4">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-1.5 text-xs opacity-50">➜</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sağ: Teknolojiler */}
            <div>
                <h3 className="text-2xl text-white font-medium mb-6">teknolojiler</h3>
                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 bg-white/5 hover:border-white/30 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;