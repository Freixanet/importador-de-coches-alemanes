import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import AccordionItem from './AccordionItem';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2463]">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes. Si no encuentras tu respuesta, no dudes en contactarnos.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.question}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;