'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Aisha K.',
    role: 'Bridal Client',
    review: 'My bridal makeup was exactly what I dreamed of. The team was so professional and made me feel like royalty on my big day!',
    rating: 5,
  },
  {
    name: 'Fatima R.',
    role: 'Regular Client',
    review: 'I have been coming to Depilex for my hair treatments for 5 years. They never disappoint. Highly recommended for keratin!',
    rating: 5,
  },
  {
    name: 'Zahra S.',
    role: 'Academy Student',
    review: 'The makeup course completely transformed my career. The trainers are incredibly skilled and supportive.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-brand-black text-brand-white">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <motion.span 
            className="text-brand-gold uppercase tracking-widest text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Love
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Testimonials
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-white/5 backdrop-blur-md border border-brand-white/10 p-8 hover:bg-brand-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-brand-gold">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8 italic">
                "{test.review}"
              </p>
              <div className="flex items-center gap-4 border-t border-brand-white/10 pt-6">
                <div>
                  <h4 className="font-serif text-brand-white">{test.name}</h4>
                  <p className="text-brand-gold text-sm tracking-wide">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
