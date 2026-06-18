import { Calculator, Phone } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="bg-brand-blue py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Calculator className="text-white" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
                Ready to Upgrade Your Roof?
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-white/90 mb-4">
              Get Your Free, No-Obligation Roofing Estimate Today.
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto lg:mx-0">
              Protect your property with Alberta's top-rated roofing contractor. Contact us now to schedule an inspection and receive a transparent quote.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-50 text-brand-blue rounded-lg font-bold text-xl transition-all shadow-xl shadow-black/20 hover:scale-105"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:+17802820180"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-charcoal hover:bg-slate-800 text-white rounded-lg font-bold text-xl transition-all shadow-xl shadow-black/20 hover:scale-105"
            >
              <Phone size={24} className="animate-pulse" />
              Call (780) 282-0180
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
