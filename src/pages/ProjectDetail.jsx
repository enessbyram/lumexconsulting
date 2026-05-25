import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  
  // Find the relevant project
  const project = projectsData.find(p => p.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If project is not found
  if (!project) {
    return (
      <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
         <AnimatedBackground />
         <Header />
         <div className="relative z-10 container mx-auto px-6 pt-40 text-center text-white">
            <h1 className="text-3xl">{t('projects.projectNotFound')}</h1>
            <Link to="/services" className="mt-8 inline-block text-purple-400 hover:text-white transition-colors">
              {t('projects.backToServices')}
            </Link>
         </div>
         <Footer />
      </div>
    );
  }

  // Helper: determines whether to use an internal (router) or external (href) link
  const renderLink = (url, label, icon, isPrimary) => {
    const classes = `flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
      isPrimary 
        ? "bg-white text-black hover:bg-gray-200" 
        : "border border-white/20 text-white hover:bg-white/10"
    }`;

    // If the link starts with "/" it's an internal route
    if (url && url.startsWith('/')) {
      return (
        <Link to={url} target="_blank" className={classes}>
           <FontAwesomeIcon icon={icon} />
           {label}
        </Link>
      );
    }

    // Otherwise use a regular anchor tag (GitHub, Demo, etc.)
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={classes}>
         <FontAwesomeIcon icon={icon} />
         {label}
      </a>
    );
  };

  // Resolve translated features array
  const features = t(project.featuresKey, { returnObjects: true });

  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white flex flex-col justify-between">
      <AnimatedBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group text-sm">
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform"/>
            {t('projects.back')}
        </Link>

        {/* Hero Cover Image */}
        <div className="w-full h-75 md:h-125 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <img 
                src={project.image} 
                alt={t(project.titleKey)} 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Title and Description */}
        <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t(project.titleKey)}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {t(project.fullDescKey)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                {renderLink(project.githubLink, "github", faGithub, true)}
                {renderLink(project.demoLink, "demo", faExternalLinkAlt, false)}
            </div>
        </div>

        {/* Features and Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 border-t border-white/10 pt-12">
            
            {/* Left: Features */}
            <div>
                <h3 className="text-2xl text-white font-medium mb-6">{t('features')}</h3>
                <ul className="flex flex-col gap-4">
                    {Array.isArray(features) && features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-1.5 text-xs opacity-50">➜</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Technologies */}
            <div>
                <h3 className="text-2xl text-white font-medium mb-6">{t('technologies')}</h3>
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