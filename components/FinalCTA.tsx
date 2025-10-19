
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] text-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold">¿Listo para ahorrar miles de euros en tu próximo coche?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Da el primer paso hoy. Nuestro equipo de expertos está listo para encontrar el coche de tus sueños al mejor precio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#calculator" 
            className="w-full sm:w-auto bg-[#FF6B35] text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            Comenzar Mi Importación
          </a>
          <a 
            href="https://wa.me/34000000000" // Reemplazar con número de WhatsApp real
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            Hablar con un Experto
          </a>
          <a 
            href="#calculator" 
            className="w-full sm:w-auto border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0A2463]"
          >
            Calcular Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
