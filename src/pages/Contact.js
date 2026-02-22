import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    whatsapp: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        whatsapp: '',
        budget: '',
        message: '',
      });

      setTimeout(() => {
        window.open('https://wa.me/+27710000000?text=Hi%20BXL%20Projects!%20I%20just%20submitted%20a%20quote%20request', '_blank');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'React/Next.js App',
    'Website Development',
    'API Integration',
    'SEO/Google Setup',
    'Architecture Advice',
  ];

  const budgetRanges = [
    'R5,000 - R10,000',
    'R10,000 - R25,000',
    'R25,000 - R50,000',
    'Custom Quote',
  ];

  return (
    <div className="py-20 min-h-screen pt-24" style={{ background: 'linear-gradient(to bottom, #000000 0%, #00008B 30%, #00008B 70%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-black text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 font-opensans">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, title: 'Email', value: 'info@bxlprojects.co.za' },
            { icon: Phone, title: 'WhatsApp', value: '+27 71 000 0000' },
            { icon: MapPin, title: 'Location', value: 'East London, Eastern Cape' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05, rotateY: 5 }}
              className="bg-white rounded-xl p-6 text-center"
              style={{ 
                boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 -5px 10px rgba(0,0,0,0.05)',
                transformStyle: 'preserve-3d'
              }}
            >
              <item.icon className="w-12 h-12 text-blueGlow mx-auto mb-4" style={{ filter: 'drop-shadow(0 4px 8px rgba(59,130,246,0.4))' }} />
              <h3 className="text-lg font-montserrat font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-gray-600 font-opensans">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12"
          style={{ 
            boxShadow: '0 8px 0 #d1d5db, 0 16px 0 #9ca3af, 0 24px 0 #6b7280, 0 32px 0 #4b5563, 0 40px 60px rgba(0,0,0,0.5), inset 0 -4px 10px rgba(0,0,0,0.1)',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)'
          }}
        >
          {submitSuccess ? (
            <motion.div
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-navy mx-auto mb-6" style={{ filter: 'drop-shadow(0 8px 16px rgba(30,58,138,0.5))' }} />
              <h2 className="text-3xl font-montserrat font-bold text-charcoal mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 font-opensans mb-6">
                Opening WhatsApp chat...
              </p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, rotateY: 10 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+27..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-charcoal font-montserrat font-bold mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-charcoal font-montserrat font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blueGlow focus:outline-none transition-colors font-opensans resize-none"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 1.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-blueGlow text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ 
                  boxShadow: '0 15px 35px rgba(30,58,138,0.5), inset 0 -4px 8px rgba(0,0,0,0.3)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
