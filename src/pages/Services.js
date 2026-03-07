import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Wrench, Code, Smartphone, Palette, TrendingUp, MessageSquare, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      features: [
        'Modern React/Next.js websites (GUTS Transport case study)',
        'Mobile-first responsive design (95+ Lighthouse score)',
        'Fast loading (Vercel deployment)',
        'Contact forms, booking systems, galleries',
        'Eastern Cape SEO optimized from day 1'
      ],
      perfectFor: 'Shuttle services, guesthouses, contractors, restaurants',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      features: [
        'Monthly backups & security updates',
        'Google ranking monitoring & optimization',
        'Content updates (news, menus, promotions)',
        'Uptime monitoring (99.9% guarantee)',
        'Performance optimization (Core Web Vitals)'
      ],
      perfectFor: 'Government sites, busy businesses, e-commerce',
      color: 'from-green-600 to-green-800',
    },
    {
      icon: Code,
      title: 'Web Applications',
      features: [
        'Custom dashboards (admin/client portals)',
        'Booking & reservation systems',
        'Inventory management (like IMS government system)',
        'CRM integrations (client tracking, invoices)',
        'Magazine-style designs (page flip animations)'
      ],
      perfectFor: 'Transport companies, construction firms, agencies',
      color: 'from-purple-600 to-purple-800',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      features: [
        'React Native (Android + iOS single codebase)',
        'Offline functionality & push notifications',
        'Integration with your existing website',
        'App Store deployment included',
        'Time tracking, booking, delivery apps'
      ],
      perfectFor: 'Field services, transport, customer-facing businesses',
      color: 'from-pink-600 to-pink-800',
    },
    {
      icon: Palette,
      title: 'Branding & Logos',
      features: [
        'Professional logo design (Figma/Canva)',
        'Complete brand kit (colors, fonts, guidelines)',
        'Business cards, email signatures, social banners',
        'Website integration ready'
      ],
      perfectFor: 'New startups, rebranding, professional image',
      color: 'from-indigo-600 to-indigo-800',
    },
    {
      icon: TrendingUp,
      title: 'Local SEO & Google Ranking',
      features: [
        'Google Business Profile optimization',
        '#1 local rankings (Mthatha, East London)',
        'Website speed & mobile optimization',
        'Review management system',
        'Monthly ranking reports'
      ],
      perfectFor: 'Every local business wanting more calls/bookings',
      color: 'from-orange-600 to-orange-800',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Automation',
      features: [
        '24/7 booking & inquiry chatbots',
        'Quote calculator integration',
        'WhatsApp payment links',
        'Lead capture → Google Sheets/CRM',
        'Transport/retail proven (GUTS case study)'
      ],
      perfectFor: 'Shuttle services, mechanics, salons, retailers',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Server,
      title: 'Systems Maintenance',
      features: [
        'Government/private sector experience',
        'Microsoft 365 support (Teams, Intune, Defender)',
        'Active Directory/Azure AD management',
        'Database maintenance (SQL Server/PostgreSQL)',
        'Custom app monitoring & updates'
      ],
      perfectFor: 'Government departments, enterprises, IT teams',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <motion.div 
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
            className="mb-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12"
          >
            <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Services / 2025</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
              Our Services
            </h1>
            <p className="text-gray-400 font-opensans text-lg md:text-xl max-w-2xl">
              Comprehensive digital solutions
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                className={`bg-gradient-to-br ${service.color} rounded-3xl p-6 md:p-8`}
              >
                <service.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-white">
                      <span className="text-white mt-1">✅</span>
                      <span className="font-opensans text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-xs font-montserrat text-white uppercase tracking-widest mb-2">Perfect For</div>
                  <div className="text-white font-opensans text-sm">{service.perfectFor}</div>
                </div>
              </motion.div>
            ))}

          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white text-opacity-90 font-opensans text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your digital vision to life
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all"
            >
              Get a Free Quote
            </button>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default Services;
