import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif text-brand-gold mb-6 tracking-widest">DEPILEX</h3>
            <p className="text-brand-white/70 text-sm leading-relaxed mb-6">
              Pakistan's Most Trusted Beauty & Bridal Destination. Providing luxury salon services, bridal aesthetics, and professional beauty education for over 30 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/70 hover:text-brand-gold hover:border-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/70 hover:text-brand-gold hover:border-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center text-brand-white/70 hover:text-brand-gold hover:border-brand-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services Menu', 'Bridal Studio', 'Beauty Academy', 'Find a Branch'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-brand-white/70 hover:text-brand-gold text-sm transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Head Office: e، House No B-17 Block 5 Sardar Ali Sabri Road، Iqbal Gulshan، near Madni masjid, Block 5 Gulshan-e-Iqbal, Karachi, 75000, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>02134821234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@depilex.com.pk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-brand-white/70 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-brand-white/5 border border-brand-white/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold w-full text-white placeholder:text-brand-white/40"
              />
              <button type="submit" className="bg-brand-gold text-white px-4 hover:bg-brand-gold-hover transition-colors font-semibold text-sm uppercase tracking-wider">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-white/50 tracking-wide uppercase">
          <p>&copy; {new Date().getFullYear()} Depilex Group. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
