import React from 'react';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  return (
    <div id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}