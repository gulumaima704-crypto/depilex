'use client';

import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
const offers = [
  { title: 'Bridal Package', desc: 'Book your bridal makeover 3 months in advance and get a complimentary pre-bridal facial series.', valid: 'Valid till Eid' },
  { title: 'Eid Glamour', desc: 'Exclusive Eid party makeup and styling at a 20% discount. Limited slots available.', valid: 'Limited Time Offer' },
  { title: 'Student Discount', desc: 'Show your valid student ID and receive a 15% discount on all haircut and coloring services.', valid: 'Year Round' },
];

export default function Offers() {
  return (
    <section id="offers" className="py-24 bg-brand-pink-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Special Offers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-white group cursor-pointer border border-transparent hover:border-brand-gold transition-colors block overflow-hidden relative"
            >
               <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                 Promo
               </div>
               
               <div className="p-8 pt-12">
                  <h3 className="text-2xl font-serif text-brand-black mb-3">{offer.title}</h3>
                  <p className="text-brand-black/70 mb-6 text-sm leading-relaxed">{offer.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-xs font-medium text-brand-black/60 uppercase tracking-widest"><Clock className="w-3 h-3" /> {offer.valid}</span>
                    <span className="text-brand-gold uppercase text-xs tracking-widest font-semibold group-hover:underline">Claim →</span>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
