import { ShieldCheck, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
             <path d="M 8 0 L 0 0 0 8" fill="none" stroke="black" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3"
            >
              Contact Us
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
            >
              Protect Your Property With Alberta’s Trusted Roofing Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              Fill out the form to request a free, no-obligation inspection and estimate. Our experts will respond rapidly to assess your needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-fit">
                <div className="bg-brand-charcoal p-3 rounded-full text-brand-blue">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Call Us Directly</p>
                  <a href="tel:+17802820180" className="text-2xl font-bold text-brand-charcoal hover:text-brand-blue transition-colors">
                    +1 780-282-0180
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
               className="mt-8 flex items-center gap-3 text-slate-700 font-medium"
            >
               <ShieldCheck className="text-brand-blue" />
               We guarantee a fast response.
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 border-t-[6px] border-brand-blue"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="(780) 123-4567" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="property" className="block text-sm font-bold text-slate-700 mb-2">Property Address</label>
                  <input type="text" id="property" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="123 Main St, Edmonton" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none text-slate-700 font-medium">
                  <option value="">Select a service...</option>
                  <option value="inspection">Free Inspection</option>
                  <option value="replacement">Full Roof Replacement</option>
                  <option value="repair">Roof Repair / Leak</option>
                  <option value="storm">Storm / Hail Damage</option>
                  <option value="commercial">Commercial Roofing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" placeholder="Tell us more about your situation..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-charcoal hover:bg-slate-800 text-white rounded-lg font-bold text-lg transition-colors">
                Request Quote Now
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
