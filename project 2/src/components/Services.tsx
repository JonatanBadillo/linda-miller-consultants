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
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        </FadeInView>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#007B8A] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-[#555555]">{service.description}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}