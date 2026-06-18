import { Shield, Clock, Wrench, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const trustFactors = [
  {
    icon: <MapPin size={32} className="text-brand-blue" />,
    title: 'Serving Edmonton',
    description: '& Surrounding Communities',
  },
  {
    icon: <Clock size={32} className="text-brand-blue" />,
    title: 'Fast Response',
    description: 'Quick inspections & emergency tarping',
  },
  {
    icon: <Wrench size={32} className="text-brand-blue" />,
    title: 'Quality Workmanship',
    description: 'Residential & Commercial Roofing',
  },
  {
    icon: <Shield size={32} className="text-brand-blue" />,
    title: 'Fully Insured',
    description: 'Complete peace of mind for your property',
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 lg:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {trustFactors.map((factor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-6 pt-6 md:pt-0' : ''}`}
            >
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                {factor.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">{factor.title}</h3>
                <p className="text-sm text-slate-500 font-medium">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
