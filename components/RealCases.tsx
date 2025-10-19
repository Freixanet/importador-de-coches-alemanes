import React from 'react';
import { CASE_STUDIES } from '../constants';
import type { CaseStudy } from '../types';

// Tarjeta individual para un caso de éxito.
const CaseCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <div className="w-11/12 md:w-[45%] lg:w-[31%] flex-shrink-0 snap-start flex">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full w-full">
        <img 
          src={caseStudy.image} 
          alt={`${caseStudy.personName}, cliente satisfecho con su ${caseStudy.brand} ${caseStudy.model}`} 
          className="w-full h-56 object-cover" 
          loading="lazy"
        />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <span className="inline-block bg-blue-100 text-[#0A2463] text-sm font-semibold px-3 py-1 rounded-full">
              {caseStudy.brand} {caseStudy.model}
            </span>
            <div className="text-right flex-shrink-0 ml-4">
              <p className="font-bold text-xl text-[#10B981]">
                Ahorró {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(caseStudy.savings)}
              </p>
            </div>
          </div>
          <p className="text-gray-600 italic flex-grow">"{caseStudy.testimonial}"</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="font-bold text-[#0A2463]">{caseStudy.personName}</p>
            <p className="text-sm text-gray-500">{caseStudy.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sección que muestra la galería de casos reales en un carrusel horizontal.
const RealCases: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl font-bold text-[#0A2463]">Clientes Satisfechos, Ahorros Reales</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No te fíes solo de nuestra palabra. Mira lo que nuestros clientes han conseguido.
          </p>
        </div>
        {/* Contenedor del carrusel con padding para el efecto hover y gap para el espaciado */}
        <div className="flex overflow-x-auto py-8 custom-scrollbar snap-x snap-mandatory scroll-px-6 gap-8 px-6">
          {CASE_STUDIES.map((study, index) => (
            <CaseCard key={index} caseStudy={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealCases;