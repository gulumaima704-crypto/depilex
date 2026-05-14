'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/18712656/pexels-photo-18712656.jpeg"
          alt="Luxury Bridal Beauty"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pakistan’s Most Trusted <br />
          <span className="text-brand-gold italic">Beauty & Bridal Destination</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-10 font-sans tracking-wide max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Luxury salon services, bridal makeovers, skincare, hair transformations & professional beauty training.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="bg-brand-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold-hover transition-colors w-full sm:w-auto text-center border border-brand-gold">
            Book Appointment
          </a>
          <a href="#services" className="bg-transparent text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-brand-black transition-colors w-full sm:w-auto text-center border border-white">
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Floating Badges */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 z-10 hidden md:flex justify-center gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[
          '30+ Years Experience',
          'Thousands of Happy Clients',
          'Bridal Specialists'
        ].map((badge, idx) => (
          <div key={idx} className="flex items-center gap-3 backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <div className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="text-white text-sm font-medium tracking-wide leading-none">{badge}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
