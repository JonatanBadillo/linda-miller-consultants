import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' }
];

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#000000] to-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="pt-24 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div>
              <motion.a
                href="#"
                className="text-2xl font-bold text-white mb-6 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Linda Miller
              </motion.a>
              <p className="text-gray-400 mb-8">
                Empowering businesses with strategic solutions and innovative growth strategies.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#007B8A] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-white flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@lindamillerconsultants.com" className="text-gray-400 hover:text-white flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>contact@lindamillerconsultants.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>(123) 456-7890</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="text-white font-semibold mb-6">Office Hours</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Linda Miller Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}