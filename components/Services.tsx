'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const services = [
  { name: 'Haircuts & Styling', desc: 'Precision cuts and signature blowouts.', img: 'https://images.pexels.com/photos/7755226/pexels-photo-7755226.jpeg' },
  { name: 'Hair Color & Treatments', desc: 'Balayage, keratin, and botox treatments.', img: 'https://images.pexels.com/photos/29555469/pexels-photo-29555469.jpeg' },
  { name: 'Bridal Makeup', desc: 'Flawless, traditional & modern bridal looks.', img: 'https://images.pexels.com/photos/30688618/pexels-photo-30688618.jpeg' },
  { name: 'Party Makeup', desc: 'Glamorous makeovers for every occasion.', img: 'https://images.pexels.com/photos/12891485/pexels-photo-12891485.jpeg' },
  { name: 'Facials & Skincare', desc: 'Rejuvenating glow and deep cleansing.', img: 'https://images.pexels.com/photos/37229316/pexels-photo-37229316.jpeg' },
  { name: 'Manicure & Pedicure', desc: 'Luxury spa care for hands and feet.', img: 'https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg' },
  { name: 'Waxing & Threading', desc: 'Gentle hair removal for smooth skin.', img: 'https://images.pexels.com/photos/6135615/pexels-photo-6135615.jpeg' },
  { name: 'Hydra Facial', desc: 'Advanced hydration and pore extraction.', img: 'https://images.pexels.com/photos/36930299/pexels-photo-36930299.jpeg' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="text-brand-gold uppercase tracking-widest text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Salon Menu
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Luxury Salon Services
          </motion.h2>
          <motion.p 
            className="text-brand-black/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience premium beauty treatments tailored to enhance your natural grace.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-beige">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-serif text-white mb-2">{service.name}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                    {service.desc}
                  </p>
                  <span className="text-brand-gold uppercase text-xs tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Book Now →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
