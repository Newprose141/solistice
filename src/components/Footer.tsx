import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center text-white font-heading font-bold text-lg leading-none">
                SR
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white">
                  Solstice
                </span>
                <span className="text-[9px] tracking-wider uppercase font-semibold text-slate-400">
                  Roof Systems Inc
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Alberta’s premier roofing contractor specializing in residential and commercial roof replacement, repairs, and storm damage restoration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0 mt-0.5" size={18} />
                <span>Edmonton, Alberta<br/>Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-blue shrink-0" size={18} />
                <a href="tel:+17802820180" className="hover:text-brand-blue transition-colors">+1 780-282-0180</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue shrink-0" size={18} />
                <a href="mailto:hr.solsticeroofing@gmail.com" className="hover:text-brand-blue transition-colors">hr.solsticeroofing@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-brand-blue transition-colors">Why Choose Us</a></li>
              <li><a href="#projects" className="hover:text-brand-blue transition-colors">Project Portfolio</a></li>
              <li><a href="#faq" className="hover:text-brand-blue transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-400">
               <span>Edmonton</span>
               <span>Calmar</span>
               <span>Barrhead</span>
               <span>Stony Plain</span>
               <span>Thorsby</span>
               <span>Westlock</span>
               <span>Spruce Grove</span>
               <span>Devon</span>
               <span>Red Deer</span>
               <span>Leduc</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">© {new Date().getFullYear()} Solstice Roof Systems Inc. All rights reserved.</p>
          <div className="flex gap-4 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
