import React, { useState, useEffect } from 'react';
import { StarIcon } from './icons/StarIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { TrophyIcon } from './icons/TrophyIcon';
import { CheckIcon } from './icons/CheckIcon';

const TrustBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece después de que el usuario haya hecho scroll más allá de 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const trustPoints = [
    { icon: <TrophyIcon className="w-6 h-6 text-[#0A2463]" />, text: "147+ Coches Importados" },
    { icon: <StarIcon className="w-6 h-6 text-yellow-500" />, text: "4.8/5 - 89 Reseñas" },
    { icon: <CheckIcon className="w-6 h-6 text-green-500" />, text: "Proceso 100% Transparente" },
    { icon: <ShieldCheckIcon className="w-6 h-6 text-[#0A2463]" />, text: "Garantía de Satisfacción" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-3 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              {point.icon}
              <span className="text-sm font-semibold text-[#1F2937]">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;