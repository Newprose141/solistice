import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

const comparisons = [
  {
    feature: 'Roofing Experience',
    us: 'Decades of local Alberta expertise',
    them: 'Out-of-province "storm chasers"',
  },
  {
    feature: 'Pricing Transparency',
    us: 'Detailed, hidden-fee-free estimates',
    them: 'Vague quotes that change later',
  },
  {
    feature: 'Materials Used',
    us: 'Premium tier, warranty-backed systems',
    them: 'Builder-grade cheap materials',
  },
  {
    feature: 'Project Communication',
    us: 'Dedicated project manager step-by-step',
    them: 'Hard to reach once contract is signed',
  },
  {
    feature: 'Workmanship Guarantee',
    us: 'Extensive long-term protection warranties',
    them: 'Limited or non-existent warranties',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3"
            >
              The Solstice Difference
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
            >
              Roofing Done Right. <br />No Excuses.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              As a leading <strong>roofing contractor in Edmonton</strong>, your property is our top priority. We've built our reputation providing the best <strong>roof repair and replacement services in Central Alberta</strong> by putting customers first, using superior materials, and standing behind our work long after the trucks leave.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-brand-charcoal hover:bg-slate-800 text-white rounded font-bold text-lg transition-colors"
              >
                Schedule Free Inspection
              </a>
            </motion.div>
          </div>

          {/* Right Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-50 rounded-2xl p-2 sm:p-8 border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]"
          >
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 mb-6 px-4">
              <div className="col-span-4 font-bold text-slate-400 uppercase text-xs tracking-wider">Feature</div>
              <div className="col-span-4 font-bold text-brand-charcoal text-center uppercase tracking-wider text-base">Solstice</div>
              <div className="col-span-4 font-bold text-slate-400 text-center uppercase text-xs tracking-wider">Others</div>
            </div>

            <div className="space-y-6 px-4">
              {comparisons.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 text-sm font-semibold text-slate-700">
                    {item.feature}
                  </div>
                  <div className="col-span-4 flex flex-col items-center text-center">
                    <CheckCircle2 className="text-brand-blue mb-1" size={24} />
                    <span className="text-xs font-medium text-slate-900">{item.us}</span>
                  </div>
                  <div className="col-span-4 flex flex-col items-center text-center opacity-70">
                    <XCircle className="text-slate-400 mb-1" size={20} />
                    <span className="text-xs text-slate-500">{item.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
