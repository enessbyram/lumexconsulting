import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { Link } from "react-router-dom";

const Projects = () => {
  const { t } = useTranslation();

  // Get the two featured projects directly from projectsData
  const gymProject = projectsData.find(p => p.id === "gym-randevu-sistemi");
  const realEstateProject = projectsData.find(p => p.id === "solfej-net");

  // Scroll reveal animation
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
      {/* Section Title */}
      <div className="w-full container max-w-7xl reveal-point transition-all duration-1000">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
          {t('projects.title')}
        </h2>
      </div>

      {/* --- PROJECT 1: GYM SYSTEM --- */}
      <div className="w-full container max-w-7xl flex flex-col md:flex-row items-center gap-16 reveal-point transition-all duration-1000">
        {/* Image - Wrapped with Link */}
        <Link
          to={`/project/${gymProject.id}`}
          className="w-full md:w-3/5 overflow-hidden rounded-2xl group cursor-pointer block"
        >
          <img
            src={gymProject.image}
            alt={t(gymProject.titleKey)}
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Text Area */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 text-white">
          <div className="w-12 h-1 bg-white/50 mb-2"></div>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            {t(gymProject.titleKey)}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t(gymProject.shortDescKey)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-2">
            {gymProject.technologies.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-sm text-gray-400 bg-white/5 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/50 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detail Link */}
          <Link
            to={`/project/${gymProject.id}`}
            className="mt-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            {t('projects.viewDetails')}{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* --- PROJECT 2: REAL ESTATE & CAR SALES --- */}
      <div className="w-full container max-w-7xl flex flex-col-reverse md:flex-row items-center gap-16 reveal-point transition-all duration-1000">
        {/* Text Area */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 text-white text-left md:text-right md:items-end">
          <div className="w-12 h-1 bg-white/50 mb-2"></div>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            {t(realEstateProject.titleKey)}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t(realEstateProject.shortDescKey)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-2 justify-start md:justify-end">
            {realEstateProject.technologies.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full border border-white/20 text-sm text-gray-400 bg-white/5 transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/50 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detail Link */}
          <Link
            to={`/project/${realEstateProject.id}`}
            className="mt-4 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
          >
            {t('projects.viewDetails')}{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Image - Wrapped with Link */}
        <Link
          to={`/project/${realEstateProject.id}`}
          className="w-full md:w-3/5 overflow-hidden group cursor-pointer block rounded-2xl"
        >
          <img
            src={realEstateProject.image}
            alt={t(realEstateProject.titleKey)}
            className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* And More Link */}
      <div className="w-full container max-w-7xl flex justify-end reveal-point transition-all duration-1000">
        <Link
          to="/services"
          className="text-lg text-white/70 hover:text-white transition-colors flex items-center gap-3 group"
        >
          {t('projects.andMore')}{" "}
          <span className="group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
