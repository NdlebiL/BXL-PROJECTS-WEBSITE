import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, MessageSquare, TrendingUp } from 'lucide-react';

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
    <div className="py-20 min-h-screen" style={{ background: 'linear-gradient(to bottom, #0000FF 0%, #000000 30%, #000000 70%, #00008B 90%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 font-opensans">
            Comprehensive digital solutions for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
              className="bg-white rounded-2xl overflow-hidden group"
              style={{ 
                boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 -6px 12px rgba(0,0,0,0.1)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease'
              }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`} style={{ boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.3)' }}>
                <service.icon className="w-16 h-16 text-white mb-4" style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))' }} />
                <h3 className="text-2xl font-montserrat font-bold text-white" style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.4)' }}>
                  {service.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 font-opensans mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-navy text-white px-3 py-1 rounded-full text-sm font-opensans group-hover:bg-blueGlow transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-block w-full text-center bg-blueGlow hover:bg-navy text-white font-montserrat font-bold px-6 py-3 rounded-lg transition-colors"
                  style={{ 
                    boxShadow: '0 8px 20px rgba(59,130,246,0.4), inset 0 -3px 6px rgba(0,0,0,0.3)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
