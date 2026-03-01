import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Rocket, TrendingUp } from 'lucide-react';
import LaserFlow from '../components/ui/LaserFlow';

const About = () => {
  const timeline = [
    { year: '2025', event: 'BXL PROJECTS Founded', description: 'Started with a vision to deliver excellence in digital solutions' },
    { year: '2026', event: 'First Project', description: 'Launched, Give Us Transport Solutions - Shuttle service company with unlimited transport solutions - Enterprise-grade websites' },
    { year: '2026', event: 'Expanding Services', description: ' Full-Stack Web Applications, System Architecture & Design, Mobile App Development e.t.c' },
    { year: '2026', event: 'Growing Portfolio', description: 'Serving 2+ clients with 5+ successful projects delivered' },
  ];

  const values = [
    { icon: Target, title: 'Excellence', description: 'Delivering top-quality solutions that exceed expectations' },
    { icon: Lightbulb, title: 'Innovation', description: 'Using cutting-edge technologies to solve real problems' },
    { icon: Users, title: 'Client Focus', description: '100% satisfaction through dedicated support and communication' },
    { icon: Award, title: 'Integrity', description: 'Honest, transparent, and reliable in every project' },
  ];

  return (
    <motion.div 
      key="about-page"
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
            <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">About / 2025</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
              About BXL Projects
            </h1>
            <p className="text-gray-400 font-opensans text-lg md:text-xl max-w-2xl">
              Bukhanye Xcellence Legacy - Building digital solutions that empower businesses
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-6">
            
            {/* Story Card - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-8 bg-white rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Our Story</div>
              <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-4">
                Building Digital Excellence
              </h2>
              <p className="text-gray-600 font-opensans text-base md:text-lg leading-relaxed mb-4">
                BXL Projects was founded with a mission to bring world-class digital solutions to businesses in the Eastern Cape. 
                Based in East London, South Africa, we specialize in React/Next.js development, custom API solutions, WhatsApp automation, 
                and SEO optimization.
              </p>
              <p className="text-gray-600 font-opensans text-base md:text-lg leading-relaxed">
                Our name, Bukhanye Xcellence Legacy, reflects our commitment to creating lasting impact through exceptional work. 
                We believe in building solutions that not only meet today's needs but scale for tomorrow's growth.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
            >
              <Rocket className="w-12 h-12 text-white mb-4" />
              <div className="text-xs font-montserrat text-blue-200 uppercase tracking-widest mb-2">Mission</div>
              <div className="text-white font-opensans text-sm">Empowering businesses through innovative digital solutions</div>
            </motion.div>

            {/* Values Cards */}
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="md:col-span-3 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-6 text-center"
              >
                <value.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-montserrat font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 font-opensans text-sm">{value.description}</p>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
            >
              <TrendingUp className="w-12 h-12 text-white mb-4" />
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-purple-100 font-opensans text-lg">Client Satisfaction Rate</div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="md:col-span-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-6 md:p-8"
            >
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Based In</div>
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">East London</h3>
              <p className="text-gray-400 font-opensans">Eastern Cape, South Africa</p>
              <p className="text-gray-500 font-opensans text-sm mt-4">Serving clients locally and internationally</p>
            </motion.div>

          </div>

          {/* Our Journey Section with LaserFlow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="relative bg-black rounded-3xl overflow-hidden"
            style={{ minHeight: '600px' }}
          >
            {/* LaserFlow Background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
              <LaserFlow
                color="#7a95ff"
                wispDensity={2.2}
                flowSpeed={0.55}
                verticalSizing={10}
                horizontalSizing={9}
                fogIntensity={1.2}
                fogScale={0.4}
                wispSpeed={15}
                wispIntensity={10}
                flowStrength={0.3}
                decay={2.5}
                horizontalBeamOffset={0}
                verticalBeamOffset={-0.5}
              />
            </div>

            {/* Timeline Content */}
            <div className="relative z-10 p-6 md:p-12">
              <div className="text-xs font-montserrat text-gray-500 uppercase tracking-widest mb-4">Timeline</div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-black text-white mb-8">Our Journey</h2>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2, 
                      type: "spring", 
                      stiffness: 40, 
                      damping: 25,
                      mass: 2
                    }}
                    className="bg-white bg-opacity-10 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white font-montserrat font-bold px-4 py-2 rounded-full text-sm">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-montserrat font-bold text-white mb-2">{item.event}</h3>
                        <p className="text-gray-300 font-opensans text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default About;
