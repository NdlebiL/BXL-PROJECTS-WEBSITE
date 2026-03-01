import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'React/Next.js Development',
      description: 'Modern web applications with React 18 and Next.js. Fast, responsive, and SEO-optimized.',
      badges: ['React', 'Next.js', 'Tailwind', 'Vercel'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Database,
      title: 'Custom API Solutions',
      description: 'RESTful APIs with Node.js and MSSQL integration. Secure, scalable backend systems.',
      badges: ['Node.js', 'MSSQL', 'REST API', 'Express'],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      description: 'Automated booking systems with WhatsApp integration. EmailJS forms and notifications.',
      badges: ['WhatsApp API', 'EmailJS', 'Forms', 'Automation'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Business Setup',
      description: 'Google Search Console setup, schema markup, sitemaps, and ranking optimization.',
      badges: ['Google Console', 'Schema', 'Sitemaps', 'Analytics'],
      color: 'from-orange-500 to-orange-700',
    },
  ];

  return (
    <motion.div 
      key="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <section className="relative min-h-screen overflow-hidden pt-8" style={{ background: '#000000' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-2">Our Services</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white">
              What We Do
            </h1>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* Service 1 - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <Code className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">{services[0].title}</h3>
              <p className="text-blue-100 font-opensans mb-6 text-lg">{services[0].description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {services[0].badges.map((badge, i) => (
                  <span key={i} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {badge}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 font-montserrat font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-blue-50 transition-all"
              >
                Get Started <ArrowRight size={18} />
              </button>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-6 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 md:p-10"
            >
              <Database className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">{services[1].title}</h3>
              <p className="text-green-100 font-opensans mb-6 text-lg">{services[1].description}</p>
              <div className="flex flex-wrap gap-2">
                {services[1].badges.map((badge, i) => (
                  <span key={i} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-10"
            >
              <MessageSquare className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">{services[2].title}</h3>
              <p className="text-purple-100 font-opensans mb-6 text-lg">{services[2].description}</p>
              <div className="flex flex-wrap gap-2">
                {services[2].badges.map((badge, i) => (
                  <span key={i} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-6 bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl p-8 md:p-10"
            >
              <TrendingUp className="w-16 h-16 text-white mb-6" />
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4">{services[3].title}</h3>
              <p className="text-orange-100 font-opensans mb-6 text-lg">{services[3].description}</p>
              <div className="flex flex-wrap gap-2">
                {services[3].badges.map((badge, i) => (
                  <span key={i} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-opensans">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-400 font-opensans text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your digital vision to life
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold px-10 py-4 rounded-full inline-flex items-center gap-2 transition-all"
              >
                Contact Us <ArrowRight size={20} />
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
