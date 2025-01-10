import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#000000] to-[#007B8A]">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#007B8A]/50" />
      </div>
      
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#007B8A] font-semibold text-lg bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm inline-block mb-6">
              Linda Miller Consultants
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Turning <span className="text-[#007B8A]">Potential</span> into <span className="text-[#007B8A]">Performance</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
          >
            Your trusted partner in business growth and innovation, delivering transformative solutions for forward-thinking companies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#007B8A] hover:bg-[#006270] text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full flex items-center gap-2 text-lg font-semibold transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}