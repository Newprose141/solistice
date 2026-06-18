import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'Edmonton, AB',
    review: "After the big storm, Solstice Roof Systems was a lifesaver. They handled everything with our insurance company and had our new roof installed quickly. The crew was respectful, clean, and the end result looks incredible. Highly recommend!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    location: 'Stony Plain, AB',
    review: "I got three quotes before going with Solstice. Their transparency, detailed inspection report, and the quality of materials they used made it an easy choice. You get exactly what you pay for—premium quality and peace of mind.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    location: 'Leduc, AB',
    review: "We had a persistent leak that another company failed to fix. Solstice came out, identified the actual root cause, and permanently repaired it. It's been pouring rain all week and completely dry inside. Pure professionals.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3"
            >
              Happy Property Owners
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
            >
              Don't Just Take Our Word For It
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8"
            >
              We've earned the trust of families and businesses across Alberta by delivering on our promises. See why your neighbors choose Solstice Roof Systems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <button onClick={prev} className="p-3 bg-white border border-slate-200 shadow-sm rounded-full hover:bg-slate-50 hover:text-brand-blue transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="p-3 bg-white border border-slate-200 shadow-sm rounded-full hover:bg-slate-50 hover:text-brand-blue transition-colors">
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative h-[400px]">
            <Quote size={120} className="absolute -top-10 -left-10 text-brand-blue/10 z-0" />
            <AnimatePresence mode='wait'>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col justify-center border border-slate-100 z-10"
              >
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-slate-700 italic mb-8 font-medium leading-relaxed">
                  "{testimonials[current].review}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">{testimonials[current].name}</h5>
                    <p className="text-brand-blue text-sm font-semibold">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
