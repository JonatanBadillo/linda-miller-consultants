import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="py-24 bg-[#007B8A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of successful businesses that have transformed their operations with our expert guidance.
        </p>
        <button className="bg-white text-[#007B8A] px-8 py-4 rounded-md inline-flex items-center gap-2 text-lg font-semibold hover:bg-gray-100 transition-colors">
          Contact Us Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}