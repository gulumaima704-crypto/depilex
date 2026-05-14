'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, GraduationCap, Scissors, Sparkles } from 'lucide-react';

const courses = [
  { icon: Sparkles, title: 'Professional Makeup', desc: 'Master the art of bridal, party, and editorial makeup.' },
  { icon: Scissors, title: 'Hair Styling & Color', desc: 'Advanced techniques in cutting, coloring, and treatments.' },
  { icon: Award, title: 'Beautician Training', desc: 'Comprehensive skincare, hair removal, and spa services.' },
  { icon: GraduationCap, title: 'International Certifications', desc: 'Get certified and kickstart your career in beauty.' },
];

export default function Academy() {
  return (
    <section id="academy" className="py-24 bg-brand-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-pink-dark/20 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-pink p-8 border border-brand-beige-dark hover:border-brand-gold transition-colors"
                >
                  <Icon className="w-8 h-8 text-brand-gold mb-6" />
                  <h3 className="text-xl font-serif text-brand-black mb-3">{course.title}</h3>
                  <p className="text-brand-black/70 text-sm leading-relaxed">{course.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Education</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-6">
              Depilex Beauty Academy
            </h2>
            <p className="text-brand-black/70 text-lg mb-8 max-w-lg leading-relaxed">
              Empowering the next generation of beauty professionals. Join our academy to learn from industry experts with hands-on training, comprehensive courses, and incredible career opportunities.
            </p>
            
            <a href="#contact" className="inline-block bg-brand-black text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors">
              Join the Beauty Academy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
