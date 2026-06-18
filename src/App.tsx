/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import EmergencyCTA from './components/EmergencyCTA';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquareText } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <Projects />
        <Testimonials />
        <Process />
        <FAQ />
        <EmergencyCTA />
        <Contact />
      </main>
      <Footer />
      
      {/* AI Chatbot Placeholder */}
      <button 
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-charcoal hover:bg-slate-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-50 border-2 border-brand-blue"
        aria-label="Open Live Chat"
      >
        <MessageSquareText size={28} />
      </button>
    </div>
  );
}
