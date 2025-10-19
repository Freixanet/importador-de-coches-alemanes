import React from 'react';
import { TRANSPARENCY_DATA } from '../constants';

const Transparency: React.FC = () => {
  return (
    <section id="transparency" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2463]">Transparencia Radical: Sin Letra Pequeña</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Creemos que la confianza se gana con honestidad. Por eso te mostramos exactamente cómo funciona todo y de dónde viene tu ahorro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TRANSPARENCY_DATA.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-[#0A2463] mb-4">{item.title}</h3>
              <div className="text-gray-600">
                {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transparency;
