import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#555555] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Linda Miller Consultants</h3>
            <p className="text-gray-300">
              Empowering businesses with strategic solutions and innovative growth strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@lindamillerconsultants.com" className="text-gray-300 hover:text-white">
                  contact@lindamillerconsultants.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Linda Miller Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}