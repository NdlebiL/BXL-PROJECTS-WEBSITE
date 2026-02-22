import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCarousel, setActiveCarousel] = useState({});

  const projects = [
    {
      title: 'Give Us Transport Solutions',
      description: 'R299 Shuttle Booking System - Live Production',
      tech: ['React', 'Vercel', 'EmailJS', 'MSSQL', 'WhatsApp API'],
      link: 'https://giveustransportsolutions.com',
      featured: true,
      images: 3,
    },
    {
      title: 'IMS React Dashboard',
      description: 'Inventory Management System with real-time data visualization',
      tech: ['React', 'Chart.js', 'Node.js', 'MSSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      images: 2,
    },
    {
      title: 'EmailJS Booking Automation',
      description: 'Automated email notification system for booking confirmations',
      tech: ['EmailJS', 'React', 'Tailwind', 'Forms'],
      demo: 'https://demo.com',
      images: 2,
    },
    {
      title: 'Mthatha Shuttle Landing',
      description: 'SEO-optimized landing page with Google Search Console integration',
      tech: ['Next.js', 'SEO', 'Schema.org', 'Google Console'],
      link: 'https://example.com',
      images: 2,
    },
  ];

  const nextImage = (projectIndex, totalImages) => {
    setActiveCarousel(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex, totalImages) => {
    setActiveCarousel(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 min-h-screen" style={{ background: 'linear-gradient(to bottom, #000000 0%, #00008B 50%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-2 sm:mb-4">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-opensans px-4">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 3 }}
              className={`bg-white rounded-2xl overflow-hidden ${
                project.featured ? 'border-4 border-blueGlow' : ''
              }`}
              style={{ 
                boxShadow: project.featured 
                  ? '0 35px 70px rgba(59,130,246,0.4), inset 0 -8px 16px rgba(0,0,0,0.1)' 
                  : '0 25px 50px rgba(0,0,0,0.3), inset 0 -6px 12px rgba(0,0,0,0.1)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className={`grid grid-cols-1 ${project.featured ? 'md:grid-cols-2' : 'lg:grid-cols-5'} gap-4 sm:gap-6 p-4 sm:p-6 md:p-8`}>
                <div className={project.featured ? '' : 'lg:col-span-2'}>
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video" style={{ boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.2)' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <p className="font-opensans font-semibold text-sm sm:text-base">{project.title}</p>
                        <p className="text-xs sm:text-sm mt-2">Image {(activeCarousel[index] || 0) + 1} of {project.images}</p>
                      </div>
                    </div>
                    {project.images > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index, project.images)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 transition-all"
                          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-charcoal" />
                        </button>
                        <button
                          onClick={() => nextImage(index, project.images)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 sm:p-2 transition-all"
                          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        >
                          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-charcoal" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className={project.featured ? '' : 'lg:col-span-3'}>
                  {project.featured && (
                    <span className="inline-block bg-blueGlow text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-opensans font-semibold mb-3 sm:mb-4">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat font-bold text-charcoal mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-opensans mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-navy text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-opensans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 bg-blueGlow hover:bg-navy text-white font-montserrat font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm md:text-base"
                        style={{ 
                          boxShadow: '0 10px 25px rgba(59,130,246,0.4), inset 0 -3px 6px rgba(0,0,0,0.3)',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                        View Live
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 bg-gray-200 hover:bg-gray-300 text-charcoal font-montserrat font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 bg-charcoal hover:bg-gray-800 text-white font-montserrat font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <Github size={16} className="sm:w-5 sm:h-5" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
