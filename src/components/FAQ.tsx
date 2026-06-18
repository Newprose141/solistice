import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How much does roof replacement cost in Edmonton?",
    a: "The cost varies depending on the size of your roof, pitch, and materials chosen (asphalt, metal, flat). On average, an asphalt shingle roof replacement in Edmonton ranges from $6,000 to $12,000. We provide free, precise estimates with zero hidden fees."
  },
  {
    q: "How long does a roof last in Alberta?",
    a: "In the harsh Alberta winters and severe storm environment, standard architectural shingles typically last 15-20 years. Premium impact-resistant shingles or metal roofing can last 30-50+ years when properly installed and maintained."
  },
  {
    q: "Do you help with insurance claims from hail damage?",
    a: "Absolutely. We have comprehensive experience navigating storm and hail damage insurance claims across Central Alberta. We work directly with your adjuster to ensure all damage is properly documented and fully covered."
  },
  {
    q: "How quickly can you repair storm damage?",
    a: "We offer emergency priority service for active leaks and severe damage. We can usually get a tarp up quickly to prevent interior water damage, and prioritize the permanent repair schedule based on urgency."
  },
  {
    q: "What roofing materials do you use?",
    a: "We exclusively use premium, warranty-backed materials from top manufacturers built to withstand extreme Canadian weather. We install architectural asphalt shingles, standing seam metal, and commercial flat roofing systems."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-3">Common Questions</h4>
          <h2 className="text-4xl font-bold text-brand-charcoal">Roofing FAQs</h2>
        </div>

        <div className="space-y-4">
           {faqs.map((faq, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="border border-slate-200 rounded-xl overflow-hidden shadow-sm"
             >
               <button
                 className="w-full px-6 py-5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                 onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
               >
                 <span className="font-bold text-slate-800 text-left text-lg pr-8">{faq.q}</span>
                 {openIdx === idx ? (
                   <Minus className="text-brand-blue shrink-0" />
                 ) : (
                   <Plus className="text-brand-charcoal shrink-0" />
                 )}
               </button>
               <AnimatePresence>
                 {openIdx === idx && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="bg-white"
                   >
                     <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed font-medium">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
