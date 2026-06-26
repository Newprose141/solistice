import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#why-us' },
    { name: 'Our services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 transition-all duration-300">
            <a href="#hero" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-heading font-bold text-lg md:text-xl leading-none shadow-sm">
                SR
              </div>
              <span className={`font-heading font-extrabold text-xl md:text-2xl leading-none text-slate-800`}>
                Solstice Roof Systems
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="hidden lg:block relative z-10">
              <a
                href="#contact"
                className="inline-flex px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full font-bold text-sm transition-colors shadow-md shadow-brand-blue/20"
              >
                Book Service
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden border-b border-slate-100"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-bold text-slate-800 hover:text-brand-blue"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block mt-6 px-5 py-3 w-full bg-brand-blue text-white rounded-full font-bold text-center shadow-md shadow-brand-blue/20"
                >
                  Book Service
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
