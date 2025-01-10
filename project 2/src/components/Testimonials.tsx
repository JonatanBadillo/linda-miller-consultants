import React from 'react';
import { Star } from 'lucide-react';
import { FadeInView } from './animations/FadeInView';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVision Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Linda Miller Consultants transformed our business strategy, leading to a 150% growth in revenue within 18 months.'
  },
  {
    name: 'Michael Chen',
    role: 'COO, Global Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'Their strategic insights and hands-on approach helped us navigate complex challenges and emerge stronger.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Innovation Labs',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    quote: 'Working with Linda Miller Consultants was a game-changer for our organization\'s growth trajectory.'
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gradient-to-br from-[#007B8A]/5 to-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#007B8A] font-semibold bg-[#007B8A]/10 px-4 py-2 rounded-full inline-block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#000000] to-[#007B8A] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>
        </FadeInView>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#007B8A] text-[#007B8A]" />
                  ))}
                </div>
                <p className="text-[#555555] mb-8 italic text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-[#007B8A]/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-[#007B8A]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}