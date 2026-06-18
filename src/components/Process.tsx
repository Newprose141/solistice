import { motion } from 'motion/react';
import { Search, ClipboardList, Hammer, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} className="text-white" />,
    title: '1. Thorough Inspection',
    desc: 'We perform a detailed, multi-point inspection of your roof to identify all damage and underlying issues accurately.',
  },
  {
    icon: <ClipboardList size={32} className="text-white" />,
    title: '2. Transparent Estimate',
    desc: 'You receive a clear, itemized proposal outlining costs, materials, and timeline. No hidden fees or surprises.',
  },
  {
    icon: <Hammer size={32} className="text-white" />,
    title: '3. Professional Installation',
    desc: 'Our certified crews execute the tear-off and installation with precision, speed, and utmost respect for your property.',
  },
  {
    icon: <ShieldCheck size={32} className="text-white" />,
    title: '4. Final Inspection',
    desc: 'A dedicated manager performs a strict post-install inspection and magnetic yard sweep to ensure everything is perfect.',
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3"
          >
            Our Roofing Process
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
          >
            Smooth. Stress-Free. Seamless.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-slate-100 z-0">
             <div className="h-full bg-brand-blue w-full origin-left scale-x-0 transition-transform duration-1000 ease-out" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-brand-charcoal rounded-full border-8 border-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] relative group">
                  <div className="absolute inset-0 bg-brand-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                  <span className="relative z-10">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
