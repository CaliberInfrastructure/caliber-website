
import React, { useState, useEffect, useCallback } from 'react';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import ProblemSection from './components/ProblemSection';
import FounderSection from './components/FounderSection';
import AuditForm from './components/AuditForm';
import HowItWorks from './components/HowItWorks';

const App: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    // Floating CTA logic
    const shouldShow = window.scrollY > 600;
    const calculatorSection = document.getElementById('calculator');
    const calculatorInView = calculatorSection &&
      calculatorSection.getBoundingClientRect().top < window.innerHeight &&
      calculatorSection.getBoundingClientRect().bottom > 0;
    setShowFloatingCTA(shouldShow && !calculatorInView);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="font-bold uppercase text-white">C</span>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Caliber</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
            <a href="#problem" className="hover:text-cyan-400 transition">Diagnosis</a>
            <a href="#calculator" className="hover:text-cyan-400 transition">Revenue Audit</a>
            <a href="#tiers" className="hover:text-cyan-400 transition">Infrastructure</a>
            <a href="#about" className="hover:text-cyan-400 transition">Methodology</a>
          </div>

          {/* Desktop CTA */}
          <a href="#audit" className="hidden md:block bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 shadow-xl shadow-slate-100 transition-all duration-300">Free Audit</a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-700 hover:text-cyan-400 transition py-3">Diagnosis</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-700 hover:text-cyan-400 transition py-3">Revenue Audit</a>
              <a href="#tiers" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-700 hover:text-cyan-400 transition py-3">Infrastructure</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-700 hover:text-cyan-400 transition py-3">Methodology</a>
              <a href="#audit" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition text-center mt-4">Free Audit</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 md:mb-10 text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-cyan-700 uppercase bg-cyan-50 border border-cyan-100 rounded-full">
            South Florida's Med Spa Infrastructure Partner
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[9rem] font-black text-slate-900 leading-[0.95] mb-8 md:mb-12 tracking-tighter">
            Your Med Spa Is<br />Quietly Losing<br /><span className="text-[#0097B2]">$10–30k/mo</span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-500 mb-12 md:mb-16 leading-relaxed font-medium px-4">
            We replace <span className="text-slate-900 font-black italic">missed calls, slow follow-ups, and no-shows</span> with a 24/7 AI front desk that books appointments automatically—turning leaked revenue into collected revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a href="#audit" className="bg-[#0097B2] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-base sm:text-lg font-black uppercase tracking-widest hover:bg-cyan-700 transition shadow-2xl shadow-cyan-100 group">
              Request Revenue Audit <span className="group-hover:translate-x-1 transition inline-block">→</span>
            </a>
            <a href="#calculator" className="bg-white text-slate-900 border-2 border-slate-100 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-base sm:text-lg font-black uppercase tracking-widest hover:bg-slate-50 transition">Calculate Your Loss</a>
          </div>
        </div>
      </section>

      {/* Floating Calculator CTA */}
      <div className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <a
          href="#calculator"
          className="flex items-center gap-2 sm:gap-3 bg-slate-900 text-white pl-4 sm:pl-5 pr-5 sm:pr-6 py-3 sm:py-4 rounded-2xl shadow-2xl shadow-slate-900/30 hover:bg-slate-800 transition group border border-slate-700"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Revenue leaking?</p>
            <p className="text-xs sm:text-sm font-black tracking-tight">Calculate Your Loss <span className="group-hover:translate-x-1 transition inline-block">→</span></p>
          </div>
        </a>
      </div>

      {/* Components */}
      <ProblemSection />
      <Calculator />
      <HowItWorks />
      <Pricing />
      <FounderSection />
      <AuditForm />

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <span className="text-white font-black text-sm uppercase">C</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Caliber</span>
            </div>
            <div className="flex gap-6 md:gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#problem" className="hover:text-cyan-600 transition">Diagnosis</a>
              <a href="#tiers" className="hover:text-cyan-600 transition">Tiers</a>
              <a href="#about" className="hover:text-cyan-600 transition">About</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 font-black text-[10px] uppercase tracking-widest mb-1">South Florida Based</p>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">© 2026 Caliber Infrastructure</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
