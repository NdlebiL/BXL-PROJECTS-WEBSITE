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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-charcoal mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 font-opensans">
            Showcasing our best work and successful projects
          </p>
        </motion.div>

        <div className="space-y-12">
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
              <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'md:grid-cols-5'} gap-6 p-8`}>
                <div className={project.featured ? '' : 'md:col-span-2'}>
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video" style={{ boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.2)' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <p className="font-opensans font-semibold">{project.title}</p>
                        <p className="text-sm mt-2">Image {(activeCarousel[index] || 0) + 1} of {project.images}</p>
                      </div>
                    </div>
                    {project.images > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index, project.images)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        >
                          <ChevronLeft className="w-6 h-6 text-charcoal" />
                        </button>
                        <button
                          onClick={() => nextImage(index, project.images)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
                        >
                          <ChevronRight className="w-6 h-6 text-charcoal" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className={project.featured ? '' : 'md:col-span-3'}>
                  {project.featured && (
                    <span className="inline-block bg-blueGlow text-white px-3 py-1 rounded-full text-sm font-opensans font-semibold mb-4">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-3xl font-montserrat font-bold text-charcoal mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-opensans mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-navy text-white px-3 py-1 rounded-full text-sm font-opensans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blueGlow hover:bg-navy text-white font-montserrat font-bold px-6 py-3 rounded-lg transition-colors"
                        style={{ 
                          boxShadow: '0 10px 25px rgba(59,130,246,0.4), inset 0 -3px 6px rgba(0,0,0,0.3)',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        <ExternalLink size={20} />
                        View Live
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-charcoal font-montserrat font-bold px-6 py-3 rounded-lg transition-colors"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-charcoal hover:bg-gray-800 text-white font-montserrat font-bold px-6 py-3 rounded-lg transition-colors"
                      >
                        <Github size={20} />
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
