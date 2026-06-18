import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const areas = [
  'Edmonton',
  'Calmar',
  'Barrhead',
  'Stony Plain',
  'Thorsby',
  'Westlock',
  'Spruce Grove',
  'Devon',
  'Red Deer',
  'Leduc'
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-brand-charcoal text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3"
        >
          Service Areas map section
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Proudly Serving Central Alberta
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="flex items-center gap-2 bg-slate-800 border border-slate-700 hover:border-brand-blue transition-colors px-6 py-4 rounded-xl"
            >
              <MapPin className="text-brand-blue" size={24} />
              <span className="text-lg md:text-xl font-semibold">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
