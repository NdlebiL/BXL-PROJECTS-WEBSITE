import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Smartphone, Lock } from 'lucide-react';

const Pricing = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const plans = [
    {
      id: 'website',
      name: 'WEBSITE',
      icon: Check,
      buildPrice: 'R6,000',
      installment: 'R2,167',
      freeMaintenance: '1 Month FREE',
      maintenancePrice: 'R750',
      badge: 'Basic',
      status: '🟢',
      color: 'from-gray-600 to-gray-800',
      services: 'Website + Basic SEO',
      buildFeatures: [
        '5-10 page React/Next.js website',
        'Contact forms + Google Maps',
        'Mobile responsive (95+ Lighthouse)',
        'Basic Eastern Cape SEO',
        '1 month FREE maintenance included'
      ],
      maintainFeatures: [
        'Security updates & backups',
        'Uptime monitoring (99.9%)',
        'Minor content changes',
        'Annual SEO refresh'
      ],
      perfectFor: 'Guesthouses, restaurants, startups',
      paymentSchedule: '3x R2,167/mo (R500 fee | 0% interest)',
      paymentLink: 'https://payfast.co.za/website-plan'
    },
    {
      id: 'pro',
      name: 'PRO',
      icon: Award,
      buildPrice: 'R15,000',
      installment: 'R5,167',
      freeMaintenance: '3 Months FREE',
      maintenancePrice: 'R2,250',
      badge: '65% Choose This',
      status: '🎖️',
      popular: true,
      color: 'from-blue-600 to-blue-800',
      services: 'Website + WhatsApp + SEO',
      buildFeatures: [
        'Everything in Website +',
        'WhatsApp Business automation',
        'Advanced local SEO (#1 Google)',
        'Booking/quote calculator',
        'GUTS Transport-style animations',
        '3 months FREE maintenance included'
      ],
      maintainFeatures: [
        'Everything in Website +',
        'Monthly SEO ranking + content',
        'WhatsApp bot updates',
        'Google My Business management',
        'Performance reports'
      ],
      perfectFor: 'Transport, contractors, retail',
      paymentSchedule: '3x R5,167/mo (R500 fee | 0% interest)',
      paymentLink: 'https://payfast.co.za/pro-plan'
    },
    {
      id: 'app',
      name: 'APP',
      icon: Smartphone,
      buildPrice: 'R22,000',
      installment: 'R7,500',
      freeMaintenance: '6 Months FREE',
      maintenancePrice: 'R3,500',
      badge: 'Advanced',
      status: '🟡',
      color: 'from-purple-600 to-purple-900',
      services: 'Web App + Mobile App',
      buildFeatures: [
        'Everything in Pro +',
        'Custom web application/dashboard',
        'React Native mobile app (iOS+Android)',
        'Admin + client portals',
        'API integrations (CRM/POS)',
        '6 months FREE maintenance included'
      ],
      maintainFeatures: [
        'Everything in Pro +',
        'Mobile app updates',
        'Custom feature development',
        'Priority 4-hour response',
        'Monthly performance reports'
      ],
      perfectFor: 'Field services, logistics, e-commerce',
      paymentSchedule: '3x R7,500/mo (R500 fee | 0% interest)',
      paymentLink: 'https://payfast.co.za/app-plan'
    },
    {
      id: 'private',
      name: 'PRIVATE',
      icon: Lock,
      buildPrice: 'CUSTOM',
      installment: 'QUOTE',
      freeMaintenance: 'CUSTOM',
      maintenancePrice: 'CUSTOM',
      badge: 'By Application',
      status: '🔐',
      color: 'from-slate-900 via-slate-800 to-black',
      services: 'Custom Enterprise Solutions',
      buildFeatures: [
        'Enterprise systems (ERP/CRM)',
        'Multi-platform apps (web+mobile+desktop)',
        'AI agents (Procugent-style)',
        'Government/municipal integrations',
        'White-label agency solutions',
        'Full digital transformation'
      ],
      maintainFeatures: [
        'Dedicated account manager',
        'Priority 2-hour response',
        'Custom SLA agreements',
        '24/7 monitoring available',
        'Director-level consultation'
      ],
      perfectFor: 'Agencies, government, enterprises',
      paymentSchedule: 'R35k - R150k+ (Custom scoped)',
      paymentLink: 'https://wa.me/27798031304?text=Hi%20BXL!%20I%27m%20interested%20in%20the%20PRIVATE%20enterprise%20plan',
      isPrivate: true
    }
  ];

  const handleCardClick = (planId) => {
    setFlippedCard(flippedCard === planId ? null : planId);
  };

  const handlePayment = (paymentLink, isPrivate) => {
    if (isPrivate) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(paymentLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4">
            Service-Tiered Pricing
          </h1>
          <p className="text-xl text-gray-400 font-opensans">
            Clear packages designed for your business needs
          </p>
          <p className="text-sm text-blue-400 mt-2">
            ⚡ Click cards to see full details & proceed to payment
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isFlipped = flippedCard === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative h-[600px] cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(plan.id)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {/* FRONT CARD */}
                  <div
                    style={{ 
                      backfaceVisibility: 'hidden',
                      position: 'absolute',
                      width: '100%',
                      height: '100%'
                    }}
                    className={`bg-gradient-to-br ${plan.color} rounded-2xl p-6 shadow-2xl border-2 ${
                      plan.popular ? 'border-yellow-400 scale-105' : plan.isPrivate ? 'border-amber-500' : 'border-gray-700'
                    } ${plan.isPrivate ? 'ring-2 ring-amber-500 ring-opacity-50' : ''}`}
                  >
                    {plan.isPrivate && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                        ✨ EXCLUSIVE
                      </div>
                    )}

                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-xs">
                        🏆 MOST POPULAR
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <Icon className="w-10 h-10 mx-auto mb-3 text-white" />
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-1">
                        {plan.status} {plan.name}
                      </h3>
                      <p className="text-xs text-white opacity-80 mb-2">{plan.services}</p>
                      <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs">
                        {plan.badge}
                      </span>
                    </div>

                    <div className="space-y-4 mb-6">
                      {/* Build Price */}
                      <div className="bg-black bg-opacity-30 rounded-lg p-3">
                        <p className="text-gray-300 text-xs mb-1">ONE-OFF BUILD</p>
                        <p className="text-3xl font-bold text-white">{plan.buildPrice}</p>
                        {!plan.isPrivate && (
                          <p className="text-green-400 text-xs mt-1">or 3x {plan.installment}/mo</p>
                        )}
                      </div>

                      {/* Free Maintenance */}
                      <div className="bg-green-500 bg-opacity-20 border-2 border-green-400 rounded-lg p-3">
                        <p className="text-green-300 text-xs mb-1">🎁 BONUS INCLUDED</p>
                        <p className="text-2xl font-bold text-white">{plan.freeMaintenance}</p>
                        <p className="text-green-300 text-xs mt-1">Maintenance</p>
                      </div>
                    </div>

                    <p className="text-center text-white text-xs opacity-75">
                      Click to see details →
                    </p>
                  </div>

                  {/* BACK CARD */}
                  <div
                    style={{ 
                      backfaceVisibility: 'hidden',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      transform: 'rotateY(180deg)'
                    }}
                    className={`bg-gradient-to-br ${plan.color} rounded-2xl p-5 shadow-2xl border-2 border-gray-700 overflow-y-auto`}
                  >
                    <h4 className="text-lg font-bold text-white mb-3 text-center">
                      {plan.name} DETAILS
                    </h4>

                    {/* Build Features */}
                    <div className="mb-3">
                      <p className="text-yellow-300 font-bold text-xs mb-1">BUILD INCLUDES:</p>
                      <ul className="space-y-1">
                        {plan.buildFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-1 text-white text-xs">
                            <Check size={12} className="mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Maintain Features */}
                    <div className="mb-3">
                      <p className="text-green-300 font-bold text-xs mb-1">MAINTENANCE:</p>
                      <ul className="space-y-1">
                        {plan.maintainFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-1 text-white text-xs">
                            <Check size={12} className="mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-black bg-opacity-40 rounded-lg p-2 mb-3">
                      <p className="text-gray-300 text-xs mb-1">Perfect for:</p>
                      <p className="text-white font-bold text-xs mb-2">{plan.perfectFor}</p>
                      <p className="text-yellow-300 text-xs font-bold mb-2">💳 {plan.paymentSchedule}</p>
                      {!plan.isPrivate && (
                        <div className="border-t border-gray-600 pt-2 mt-2">
                          <p className="text-blue-300 text-xs font-bold mb-1">🔄 AFTER FREE PERIOD:</p>
                          <p className="text-white text-xs">Maintenance plans available</p>
                          <p className="text-green-400 text-xs font-bold">{plan.maintenancePrice}/mo (Recommended)</p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePayment(plan.paymentLink, plan.isPrivate);
                      }}
                      className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      {plan.isPrivate ? 'Request Consultation →' : 'Proceed to Payment →'}
                    </button>

                    <p className="text-center text-white text-xs mt-2 opacity-75">
                      Click again to flip back
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-6">
            Click any plan above to flip the card and proceed to secure payment
          </p>
          <a
            href="https://wa.me/27798031304?text=Hi%20BXL%20Projects!%20I'm%20interested%20in%20your%20pricing%20plans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            💬 Chat on WhatsApp First
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
