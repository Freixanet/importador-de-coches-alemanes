import React, { useEffect, useRef } from 'react';
import { LupaCocheIcon } from './icons/LupaCocheIcon';
import { ChecklistIcon } from './icons/ChecklistIcon';
import { DocumentosCheckIcon } from './icons/DocumentosCheckIcon';
import { CasaCocheIcon } from './icons/CasaCocheIcon';

const steps = [
  {
    icon: <LupaCocheIcon className="w-12 h-12 text-[#FF6B35]" />,
    title: '1. Búsqueda y Selección',
    description: 'Nos dices qué coche buscas y tu presupuesto. Peinamos el mercado alemán para encontrar las mejores unidades para ti.',
  },
  {
    icon: <ChecklistIcon className="w-12 h-12 text-[#FF6B35]" />,
    title: '2. Peritaje y Negociación',
    description: 'Un perito profesional revisa el coche in-situ. Verificamos su estado, historial y negociamos el mejor precio final.',
  },
  {
    icon: <DocumentosCheckIcon className="w-12 h-12 text-[#FF6B35]" />,
    title: '3. Papeleo y Transporte',
    description: 'Nos encargamos de toda la burocracia: contrato, impuestos, matriculación. Transportamos tu coche a España de forma segura.',
  },
  {
    icon: <CasaCocheIcon className="w-12 h-12 text-[#FF6B35]" />,
    title: '4. Entrega en tu Puerta',
    description: 'Recibes tu coche en la puerta de casa, con ITV pasada, matriculado y listo para disfrutar. ¡Así de fácil!',
  },
];

const StepCard: React.FC<{ step: typeof steps[0]; index: number }> = ({ step, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-700 opacity-0 translate-y-10"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center mb-4">{step.icon}</div>
      <h3 className="text-xl font-bold text-[#0A2463] mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};


const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2463]">Tu Coche Alemán en 4 Sencillos Pasos</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hemos simplificado el proceso de importación para que sea 100% transparente y sin complicaciones para ti.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;