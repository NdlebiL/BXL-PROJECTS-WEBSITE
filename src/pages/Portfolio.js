import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeCarousel, setActiveCarousel] = useState({});

  const projects = [
    {
      title: 'Give Us Transport Solutions',
      description: 'Shuttle Booking System - Live Production',
      tech: ['React', 'Vercel', 'EmailJS', 'MSSQL', 'WhatsApp API'],
      link: 'https://giveustransportsolutions.com',
      featured: true,
      images: ['GUTS HOME PAGE.png', 'GUTS MISSION PAGE.png', 'GUTS BOOKINGS PAGE.png'],
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

  const nextImage = (projectIndex, project) => {
    setActiveCarousel(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length
    }));
  };

  const prevImage = (projectIndex, project) => {
    setActiveCarousel(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + project.images.length) % project.images.length
    }));
  };

  return (
    <motion.div 
      key="portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <section className="relative min-h-screen overflow-hidden pt-8" style={{ background: '#000000' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12"
          >
            <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Portfolio / 2025</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
              Featured Work
            </h1>
            <p className="text-gray-400 font-opensans text-lg md:text-xl max-w-2xl">
              Showcasing our best work and successful projects
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Featured Project - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-montserrat text-white uppercase tracking-widest">Featured</span>
              </div>
              
              <div className="mt-8 mb-4">
                <div className="relative bg-black bg-opacity-30 rounded-2xl overflow-hidden mb-4">
                  {Array.isArray(projects[0].images) && (
                    <>
                      <img 
                        src={`/${projects[0].images[activeCarousel[0] || 0]}`}
                        alt={projects[0].title}
                        className="w-full h-auto object-contain"
                      />
                      {projects[0].images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(0, projects[0])}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                          >
                            <ChevronLeft className="w-5 h-5 text-gray-900" />
                          </button>
                          <button
                            onClick={() => nextImage(0, projects[0])}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                          >
                            <ChevronRight className="w-5 h-5 text-gray-900" />
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-2">
                {projects[0].title}
              </h3>
              <p className="text-blue-100 font-opensans mb-4">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projects[0].tech.map((tech, i) => (
                  <span key={i} className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-opensans">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-montserrat font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-all"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
            >
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <div className="text-5xl font-black text-white mb-2">5+</div>
              <div className="text-gray-300 font-opensans text-lg">Projects Delivered</div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Project 02</div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                {projects[1].title}
              </h3>
              <p className="text-gray-400 font-opensans mb-4">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[1].tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-opensans">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={projects[1].demo} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-montserrat hover:bg-blue-700 transition-all">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={projects[1].github} className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserrat hover:bg-gray-600 transition-all">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-6 bg-gradient-to-br from-purple-900 to-purple-950 rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-purple-300 uppercase tracking-widest mb-4">Project 03</div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                {projects[2].title}
              </h3>
              <p className="text-purple-200 font-opensans mb-4">
                {projects[2].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[2].tech.map((tech, i) => (
                  <span key={i} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-opensans">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={projects[2].demo} className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-montserrat font-bold hover:bg-purple-50 transition-all">
                <ExternalLink size={16} /> View Demo
              </a>
            </motion.div>

            {/* Project Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Project 04</div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                {projects[3].title}
              </h3>
              <p className="text-gray-400 font-opensans mb-4">
                {projects[3].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[3].tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-opensans">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={projects[3].link} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-montserrat hover:bg-blue-700 transition-all">
                <ExternalLink size={16} /> View Live
              </a>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="md:col-span-4 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => window.location.href = '/contact'}
            >
              <Zap className="w-12 h-12 text-white mb-4" />
              <div className="text-white font-montserrat font-bold text-2xl mb-2">Start Your Project</div>
              <div className="text-green-100 font-opensans text-sm">Let's build together →</div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
