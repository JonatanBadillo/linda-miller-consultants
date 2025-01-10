import React from 'react';
import { FadeInView } from './animations/FadeInView';
import ContactForm from './contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@lindamillerconsultants.com',
    link: 'mailto:contact@lindamillerconsultants.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(123) 456-7890',
    link: 'tel:+1234567890'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Business Ave, Suite 100, New York',
    link: '#'
  }
];

export default function Contact() {
  return (
    <div id="contact" className="py-24 bg-gradient-to-br from-white to-[#007B8A]/5">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="text-[#007B8A] font-semibold bg-[#007B8A]/10 px-4 py-2 rounded-full inline-block mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#000000] to-[#007B8A] bg-clip-text text-transparent mb-6">
              Contact Us
            </h2>
            <p className="text-[#555555] max-w-2xl mx-auto text-lg">
              Ready to transform your business? Reach out to us and let's start a conversation about your goals.
            </p>
          </div>
        </FadeInView>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <a
                  href={item.link}
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007B8A] to-[#006270] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-[#555555]">{item.content}</p>
                  </div>
                </a>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}