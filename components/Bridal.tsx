'use client';

import { motion } from 'motion/react';
export default function Bridal() {
  return (
    <section id="bridal" className="py-24 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Bridal Studio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-black mt-4 mb-6 leading-tight">
              Your Dream <br />Bridal Look <br /><span className="italic text-brand-gold">Starts Here</span>
            </h2>
            <p className="text-brand-black/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Step into elegance with our glamorous Pakistani bridal aesthetics. Our expert makeup artists highlight your best features, ensuring you look breathtaking on your special day.
            </p>
            
            <ul className="space-y-4 mb-10 flex flex-col items-center">
              {['Signature Bridal Makeover', 'Walima & Mehndi Packages', 'Pre-Bridal Skincare Series', 'Professional Hair Styling & Setting'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="text-brand-black font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-brand-black text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors">
              Book Bridal Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
