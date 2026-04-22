
import React from 'react';
import ScarcityBanner from './components/ScarcityBanner';
import RevenueLossCounter from './components/RevenueLossCounter';
import ProblemSection from './components/ProblemSection';
import Calculator from './components/Calculator';
import ValueStack from './components/ValueStack';
import GuaranteeSection from './components/GuaranteeSection';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import FounderSection from './components/FounderSection';
import DemoBooking from './components/DemoBooking';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Scarcity Banner — Task 1.3 */}
      <ScarcityBanner />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold uppercase">C</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Caliber</span>
          </div>
          <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
            <a href="#problem" className="hover:text-cyan-600 transition">Diagnosis</a>
            <a href="#calculator" className="hover:text-cyan-600 transition">Revenue Audit</a>
            <a href="#value-stack" className="hover:text-cyan-600 transition">What's Included</a>
            <a href="#tiers" className="hover:text-cyan-600 transition">Pricing</a>
            <a href="#about" className="hover:text-cyan-600 transition">Methodology</a>
          </div>
          <a href="#demo" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition shadow-xl shadow-slate-100">Free Demo</a>
        </div>
      </nav>

      {/* Hero Section — Task 3.2 Rewrite */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-10 text-[10px] font-black tracking-[0.4em] text-cyan-700 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
            South Florida's Med Spa Infrastructure Partner
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black text-slate-900 leading-[0.95] mb-12 tracking-tighter">
            Your Med Spa Is <br />Quietly Losing <br /><span className="text-[#0097B2]">$10–30k/mo</span>
          </h1>
          <p className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed font-medium">
            We install a complete AI front desk that answers every call, books every qualified lead, and reactivates your dormant database 24/7 — recovering <span className="text-slate-900 font-black">$20k–$30k/mo</span>. <span className="text-amber-600 font-black">Guaranteed.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#demo" className="bg-[#0097B2] text-white px-12 py-6 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 group">
              Book a Free Demo <span className="group-hover:translate-x-1 transition inline-block">→</span>
            </a>
            <a href="#calculator" className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-6 rounded-2xl text-lg font-black uppercase tracking-widest hover:bg-slate-50 transition">
              See How Much You're Losing
            </a>
          </div>
          {/* Scarcity micro-copy */}
          <p className="mt-8 text-slate-400 text-sm font-bold">
            Takes 60 seconds. Pick a time that works for you. Only <span className="text-amber-600">2 Q2 spots</span> remaining.
          </p>
        </div>
      </section>

      {/* Revenue Loss Counter — Task 2.2 */}
      <RevenueLossCounter />

      {/* Problem Section */}
      <ProblemSection />

      {/* Calculator */}
      <Calculator />

      {/* Value Stack — Task 2.1 + Task 3.1 (bonuses integrated) */}
      <div id="value-stack">
        <ValueStack />
      </div>

      {/* Guarantee Section — Task 1.1 */}
      <GuaranteeSection />

      {/* Pricing — Task 1.2 + Task 2.3 + Task 2.4 */}
      <Pricing />

      {/* Social Proof — Task 4.1 */}
      <SocialProof />

      {/* Founder / Methodology */}
      <FounderSection />

      {/* Demo Booking */}
      <DemoBooking />

      {/* Footer */}
      <footer className="bg-slate-950 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-black text-sm uppercase">C</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">Caliber</span>
            </div>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#problem" className="hover:text-white transition">Diagnosis</a>
              <a href="#tiers" className="hover:text-white transition">Pricing</a>
              <a href="#about" className="hover:text-white transition">About</a>
            </div>
            <div className="text-right">
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">South Florida Based</p>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">&copy; 2026 Caliber Infrastructure</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
