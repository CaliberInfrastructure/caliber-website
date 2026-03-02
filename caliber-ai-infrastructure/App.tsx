
import React, { useState, useEffect, useCallback } from 'react';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import ProblemSection from './components/ProblemSection';
import FounderSection from './components/FounderSection';
import AuditForm from './components/AuditForm';
import HowItWorks from './components/HowItWorks';
import BeforeAfter from './components/BeforeAfter';

const App: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > 600;
    const calculatorSection = document.getElementById('calculator');
    const calculatorInView = calculatorSection &&
      calculatorSection.getBoundingClientRect().top < window.innerHeight &&
      calculatorSection.getBoundingClientRect().bottom > 0;
    setShowFloatingCTA(shouldShow && !calculatorInView);
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-[#F3F6FC]">
      {/* ═══ NAVIGATION ═══ */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E2E8F4] shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-[#070D1A] rounded-lg flex items-center justify-center">
              <span className="font-bold uppercase text-white text-sm" style={{ fontFamily: 'Space Grotesk' }}>C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase text-[#070D1A]" style={{ fontFamily: 'Space Grotesk' }}>Caliber</span>
          </div>

          <div className="hidden md:flex space-x-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7A8799]">
            <a href="#problem" className="hover:text-[#1B5EE8] transition-colors duration-200">Diagnosis</a>
            <a href="#calculator" className="hover:text-[#1B5EE8] transition-colors duration-200">Revenue Audit</a>
            <a href="#tiers" className="hover:text-[#1B5EE8] transition-colors duration-200">Infrastructure</a>
            <a href="#about" className="hover:text-[#1B5EE8] transition-colors duration-200">Methodology</a>
          </div>

          <a href="#audit" className="hidden md:block bg-[#1B5EE8] text-white px-7 py-3 rounded-xl font-semibold text-xs uppercase tracking-widest hover:bg-[#1040B0] shadow-lg shadow-[#1B5EE8]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B5EE8]/30" style={{ fontFamily: 'Space Grotesk' }}>
            Free Audit
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#070D1A] rounded-lg hover:bg-[#E2E8F4] transition"
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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E2E8F4]">
            <div className="px-4 py-6 space-y-4">
              <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-widest text-[#2E3D52] hover:text-[#1B5EE8] transition py-3" style={{ fontFamily: 'Space Grotesk' }}>Diagnosis</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-widest text-[#2E3D52] hover:text-[#1B5EE8] transition py-3" style={{ fontFamily: 'Space Grotesk' }}>Revenue Audit</a>
              <a href="#tiers" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-widest text-[#2E3D52] hover:text-[#1B5EE8] transition py-3" style={{ fontFamily: 'Space Grotesk' }}>Infrastructure</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold uppercase tracking-widest text-[#2E3D52] hover:text-[#1B5EE8] transition py-3" style={{ fontFamily: 'Space Grotesk' }}>Methodology</a>
              <a href="#audit" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-[#1B5EE8] text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:bg-[#1040B0] transition text-center mt-4 shadow-lg shadow-[#1B5EE8]/20" style={{ fontFamily: 'Space Grotesk' }}>Free Audit</a>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-40 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 75% 20%, rgba(27,94,232,0.18) 0%, transparent 60%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 25% 80%, rgba(192,148,44,0.08) 0%, transparent 55%)' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 md:mb-10 text-[10px] font-semibold tracking-[0.3em] md:tracking-[0.4em] text-[#1B5EE8] uppercase bg-[#E8EFFF] border border-[#1B5EE8]/15 rounded-full">
            South Florida's Med Spa Infrastructure Partner
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[9rem] font-bold text-[#070D1A] leading-[0.95] mb-8 md:mb-12 tracking-tight">
            Your Med Spa Is<br />Quietly Losing<br /><span className="text-[#1B5EE8]">$10–30k/mo</span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-[#7A8799] mb-12 md:mb-16 leading-relaxed font-medium px-4">
            We replace <span className="text-[#070D1A] font-bold italic">missed calls, slow follow-ups, and no-shows</span> with a 24/7 AI front desk that books appointments automatically—turning leaked revenue into collected revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a href="#audit" className="bg-[#1B5EE8] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-base sm:text-lg font-semibold uppercase tracking-widest hover:bg-[#1040B0] transition-all duration-300 shadow-xl shadow-[#1B5EE8]/25 hover:shadow-2xl hover:shadow-[#1B5EE8]/35 group" style={{ fontFamily: 'Space Grotesk' }}>
              Request Revenue Audit <span className="group-hover:translate-x-1 transition inline-block">→</span>
            </a>
            <a href="#calculator" className="bg-white text-[#070D1A] border-2 border-[#E2E8F4] px-8 sm:px-12 py-5 sm:py-6 rounded-xl text-base sm:text-lg font-semibold uppercase tracking-widest hover:bg-[#F3F6FC] hover:border-[#1B5EE8]/30 transition-all duration-300" style={{ fontFamily: 'Space Grotesk' }}>Calculate Your Loss</a>
          </div>
        </div>
      </section>

      {/* ═══ FLOATING CTA ═══ */}
      <div className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <a
          href="#calculator"
          className="flex items-center gap-2 sm:gap-3 bg-[#0F1E35] text-white pl-4 sm:pl-5 pr-5 sm:pr-6 py-3 sm:py-4 rounded-2xl shadow-2xl shadow-[#070D1A]/40 hover:bg-[#142139] transition group border border-[#2E3D52]"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#DC2626]/15 rounded-xl flex items-center justify-center border border-[#DC2626]/25 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-[#7A8799]">Revenue leaking?</p>
            <p className="text-xs sm:text-sm font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk' }}>Calculate Your Loss <span className="group-hover:translate-x-1 transition inline-block">→</span></p>
          </div>
        </a>
      </div>

      <ProblemSection />
      <Calculator />
      <BeforeAfter />
      <HowItWorks />
      <Pricing />
      <FounderSection />
      <AuditForm />

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 md:py-20 border-t border-[#E2E8F4] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 bg-[#070D1A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm uppercase" style={{ fontFamily: 'Space Grotesk' }}>C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#070D1A] uppercase" style={{ fontFamily: 'Space Grotesk' }}>Caliber</span>
            </div>
            <div className="flex gap-6 md:gap-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7A8799]">
              <a href="#problem" className="hover:text-[#1B5EE8] transition">Diagnosis</a>
              <a href="#tiers" className="hover:text-[#1B5EE8] transition">Tiers</a>
              <a href="#about" className="hover:text-[#1B5EE8] transition">About</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#2E3D52] font-semibold text-[10px] uppercase tracking-widest mb-1">South Florida Based</p>
              <p className="text-[#B0BCCC] text-[10px] uppercase tracking-widest font-medium">&copy; 2026 Caliber Infrastructure</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
