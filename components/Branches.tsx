'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

const branches = [
  { city: 'Karachi', address: 'e، House No B-17 Block 5 Sardar Ali Sabri Road، Iqbal Gulshan، near Madni masjid, Block 5 Gulshan-e-Iqbal, Karachi, 75000, Pakistan', phone: '02134821234', time: 'Mon - Sun: 12–6 AM, 11 AM–12 AM' },
];

export default function Branches() {
  return (
    <section id="branches" className="py-24 bg-brand-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <motion.span 
            className="text-brand-gold uppercase tracking-widest text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Locations
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Branch
          </motion.h2>
        </div>

        <div className="flex justify-center max-w-lg mx-auto">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-white p-8 border border-brand-beige hover:border-brand-gold transition-colors group flex flex-col"
            >
              <h3 className="text-2xl font-serif text-brand-black mb-6 group-hover:text-brand-gold transition-colors">{branch.city}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-brand-black/70 text-sm">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-black/70 text-sm">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>{branch.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-black/70 text-sm">
                  <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>{branch.time}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-brand-gold text-white px-4 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-gold-hover transition-colors">
                  Book at this Branch
                </button>
                <button className="w-full bg-transparent border border-brand-black/20 text-brand-black px-4 py-3 uppercase tracking-widest text-xs font-semibold hover:border-brand-black transition-colors">
                  Google Maps
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
