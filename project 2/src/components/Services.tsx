import React from 'react';
import { TrendingUp, BarChart, Users, Globe } from 'lucide-react';
import { FadeInView } from './animations/FadeInView';
import { motion } from 'framer-motion';

const services = [
  {
    icon: TrendingUp,
    title: 'Strategic Growth',
    description: 'Develop comprehensive growth strategies tailored to your business objectives'
  },
  {
    icon: BarChart,
    title: 'Performance Optimization',
    description: 'Enhance operational efficiency and maximize business performance'
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Build strong leadership teams that drive organizational success'
  },
  {
    icon: Globe,
    title: 'Market Expansion',
    description: 'Navigate new markets and capture growth opportunities globally'
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#007B8A] font-semibold bg-[#007B8A]/10 px-4 py-2 rounded-full inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#000000] to-[#007B8A] bg-clip-text text-transparent">
              What We Offer
            </h2>
          </div>
        </FadeInView>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#007B8A] to-[#006270] rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#007B8A] bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-[#555555]">{service.description}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}