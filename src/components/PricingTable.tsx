import React from 'react';
import { PRICING_PLANS } from '../constants';
import type { PricingPlan } from '../types';
import { CheckIcon } from './icons/CheckIcon';

// Tarjeta individual para un plan de precios.
const PlanCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const popularClass = plan.isPopular ? 'border-4 border-[#FF6B35] transform scale-105 shadow-2xl z-10' : 'border border-gray-200';
  
  return (
    <div className={`relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 h-full flex flex-col ${popularClass}`}>
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider animate-pulse">{plan.badge}</span>
        </div>
      )}
      
      <div className="text-center flex-grow">
        <h3 className="text-2xl font-bold text-[#0A2463]">{plan.title}</h3>
        {!plan.isPopular && <p className="text-sm text-gray-500 mt-1">{plan.badge}</p>}
        
        <p className="my-6">
          <span className="text-5xl font-extrabold text-[#0A2463]">{plan.price}€</span>
          <span className="text-gray-500"> + IVA</span>
        </p>

        <ul className="space-y-4 text-left">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 text-[#10B981] mt-1 mr-3"><CheckIcon /></div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`w-full mt-8 font-bold py-3 px-6 rounded-lg transition-all duration-300 ${plan.isPopular ? 'bg-[#FF6B35] text-white hover:bg-opacity-90' : 'bg-[#0A2463] text-white hover:bg-opacity-90'}`}>
        {plan.ctaText}
      </button>
    </div>
  );
};

// Sección que muestra la tabla de precios comparativa.
const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2463]">Planes Flexibles para Cada Necesidad</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de servicio que mejor se adapta a ti. Sin sorpresas, con total transparencia.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;