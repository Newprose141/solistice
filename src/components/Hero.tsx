import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden pt-36 md:pt-40 lg:pt-48 pb-16 lg:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1xwJ39GPRPGqrllPLcG2S3Q9K2CY7CDL2"
          alt="Premium roofing installation in Edmonton Alberta"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1]"
          >
            Reliable <span className="text-brand-blue">Roofing Solutions</span> Across Edmonton & Central Alberta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Residential and commercial roofing services built to protect your property with quality craftsmanship, durable materials, and dependable service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white rounded font-bold text-lg transition-all shadow-lg shadow-brand-blue/30 group"
            >
              Get Free Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+17802820180"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded font-bold text-lg transition-all backdrop-blur-sm"
            >
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <ShieldCheck size={18} className="text-brand-blue" />
              Fully Insured
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
              <ShieldCheck size={18} className="text-brand-blue" />
              Quality Workmanship
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium tracking-wide">Serving Edmonton & Surrounding Communities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
