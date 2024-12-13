import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';
import { FadeInView } from './animations/FadeInView';
import { SlideInView } from './animations/SlideInView';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Led by industry veterans with decades of combined experience',
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Data-driven approaches to achieve measurable results',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Cutting-edge strategies tailored to your business needs',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center mb-16">Who We Are</h2>
        </FadeInView>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#007B8A] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[#555555]">{feature.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
        
        <SlideInView direction="right" delay={0.4} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-[#555555]">
            Linda Miller Consultants specializes in providing strategic insights and actionable plans 
            for businesses looking to scale their impact and reach. With our proven methodology and 
            dedicated team, we help transform organizations into industry leaders.
          </p>
        </SlideInView>
      </div>
    </div>
  );
}