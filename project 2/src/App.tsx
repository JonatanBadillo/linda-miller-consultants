import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <CTA />
        <Testimonials />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;