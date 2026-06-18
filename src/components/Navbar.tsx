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
      <div className="bg-[#1a1a1a] text-white py-2.5 text-center text-xs md:text-sm font-medium border-b border-white/5 z-[60] relative">
         Special Offer: Get <span className="text-brand-blue font-bold">$250 OFF</span> your next roof replacement! <a href="#contact" className="underline hover:text-brand-blue ml-1 transition-colors">Claim Offer</a>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'top-2 md:top-4 px-4' : 'top-12 md:top-14 px-4'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`flex justify-between items-center px-4 py-3 md:py-2 md:px-6 rounded-full transition-all duration-300 ${
            scrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-md shadow-lg border border-white/20'
          }`}>
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
              className="lg:hidden absolute top-[calc(100%+10px)] left-4 right-4 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
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
