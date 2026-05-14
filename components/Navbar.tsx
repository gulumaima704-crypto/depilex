'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Bridal', href: '#bridal' },
  { name: 'Academy', href: '#academy' },
  { name: 'Branches', href: '#branches' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-brand-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center gap-2 text-2xl font-serif text-brand-black tracking-wider">
              {/* Using a placeholder text logo, or can drop an image if provided */}
              <span className="text-brand-gold font-bold">D E P I L E X</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-gold ${
                  isScrolled ? 'text-brand-black' : 'text-brand-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact / Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-brand-black hover:text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
              <Instagram className="w-5 h-5" />
            </a>
             <a href="#" className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-brand-black hover:text-brand-gold' : 'text-brand-white hover:text-brand-gold'}`}>
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="hidden lg:flex items-center gap-2 bg-brand-gold text-white px-5 py-2.5 rounded-none text-sm font-medium tracking-wide hover:bg-brand-gold-hover transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-brand-black' : 'text-brand-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-white shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-brand-black hover:bg-brand-beige hover:text-brand-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 flex justify-center gap-4">
                 <a href="#" className="text-brand-black hover:text-brand-gold"><Instagram /></a>
                 <a href="#" className="text-brand-black hover:text-brand-gold"><Phone /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
