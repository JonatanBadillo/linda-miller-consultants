import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInView } from './animations/FadeInView';

const benefits = [
  'Expert Strategic Guidance',
  'Proven Growth Framework',
  'Dedicated Support Team',
  'Measurable Results'
];

export default function CTA() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#007B8A] to-[#006270] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInView>
            <span className="text-white font-semibold bg-white/10 px-4 py-2 rounded-full inline-block mb-6 backdrop-blur-sm">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have transformed their operations with our expert guidance.
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#007B8A] px-8 py-4 rounded-full inline-flex items-center gap-2 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </FadeInView>
        </div>
      </div>
    </div>
  );
}