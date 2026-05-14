'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">Reach Out</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black mt-4 mb-8">Book Your Visit</h2>
            
            <div className="space-y-6 mb-12">
               <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black">Headquarters</h4>
                    <p className="text-brand-black/70 text-sm">e، House No B-17 Block 5 Sardar Ali Sabri Road، Iqbal Gulshan، near Madni masjid, Block 5 Gulshan-e-Iqbal, Karachi, 75000, Pakistan</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black">Phone & WhatsApp</h4>
                    <p className="text-brand-black/70 text-sm">02134821234</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-full text-brand-gold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-brand-black">Opening Hours</h4>
                    <p className="text-brand-black/70 text-sm">Mon - Sun: 12–6 AM, 11 AM–12 AM</p>
                  </div>
               </div>
            </div>

            {/* Simulated Map Embed */}
            <div className="w-full h-64 bg-gray-200 relative overflow-hidden border border-brand-beige">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108990.25867146522!2d74.26947608149!3d31.42858805626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a1dca2161b%3A0xc6c4f7ab38258dc7!2sDepilex%20Beauty%20Clinic%20%26%20Institute!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-brand-white p-8 md:p-12 border border-brand-beige shadow-sm"
          >
            <h3 className="text-2xl font-serif text-brand-black mb-6">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-black/70 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full bg-brand-pink/50 border border-brand-beige px-4 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors" placeholder="Your Name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-black/70 mb-2">Phone</label>
                    <input type="tel" id="phone" className="w-full bg-brand-pink/50 border border-brand-beige px-4 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-black/70 mb-2">Service Needed</label>
                    <select id="service" className="w-full bg-brand-pink/50 border border-brand-beige px-4 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option>Bridal Consultation</option>
                      <option>Hair Treatment</option>
                      <option>Skincare / Facial</option>
                      <option>Academy Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-black/70 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-brand-pink/50 border border-brand-beige px-4 py-3 text-brand-black focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-black text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
