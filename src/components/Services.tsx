import { motion } from 'motion/react';
import { Home, Factory, Wrench, CloudLightning, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Home size={40} strokeWidth={1.5} />,
    title: 'Residential Roofing',
    desc: 'Protect your home with premium shingle, metal, and flat roofing solutions built to withstand Alberta weather.',
  },
  {
    icon: <Factory size={40} strokeWidth={1.5} />,
    title: 'Commercial Roofing',
    desc: 'Durable, long-lasting TPO, EPDM, and modified bitumen systems for Edmonton businesses.',
  },
  {
    icon: <Wrench size={40} strokeWidth={1.5} />,
    title: 'Roof Repair Services',
    desc: 'Fast, reliable fixes for leaks, missing shingles, and structural wear to extend your roof’s lifespan.',
  },
  {
    icon: <CloudLightning size={40} strokeWidth={1.5} />,
    title: 'Storm & Hail Damage',
    desc: 'Emergency tarping and comprehensive restoration from severe wind, rain, and hail damage.',
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    title: 'Roof Replacement',
    desc: 'Complete tear-offs and expert installation of new, high-performance roofing systems.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            Roofing Services Overview
          </h2>
          <p className="text-lg text-slate-600">
            From minor repairs to complete commercial installations, Solstice Roof Systems delivers precision craftsmanship and premium materials for every project across Central Alberta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full"
            >
              <div className="text-slate-400 group-hover:text-brand-blue transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
              <a href="#contact" className="text-brand-blue font-semibold flex items-center gap-2 group-hover:text-brand-blue-dark transition-colors mt-auto w-fit">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
          
          {/* CTA Card for Emergency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-brand-charcoal p-8 rounded-xl shadow-xl flex flex-col items-center justify-center text-center h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Need Emergency Repairs?</h3>
            <p className="text-slate-300 mb-6 font-light">We are available for urgent roof leaks and severe storm damage in Edmonton & surrounding areas.</p>
            <a
              href="tel:+17802820180"
              className="px-6 py-3 w-full bg-brand-blue hover:bg-brand-blue-dark text-white rounded font-bold transition-colors"
            >
              Call (780) 282-0180
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
