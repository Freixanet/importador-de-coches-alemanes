
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import SavingsCalculator from './components/SavingsCalculator';
import RealCases from './components/RealCases';
import PricingTable from './components/PricingTable';
import Transparency from './components/Transparency';
import Faq from './components/Faq';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// El componente principal que estructura toda la landing page.
// Cada sección se importa como un componente separado para mantener el código organizado.
const App: React.FC = () => {
  return (
    <div className="bg-white text-[#1F2937] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <SavingsCalculator />
        <RealCases />
        <PricingTable />
        <Transparency />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
