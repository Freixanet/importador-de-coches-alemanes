import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/34000000000" // Reemplazar con número de WhatsApp real
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 z-50"
            aria-label="Contactar por WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8"/>
        </a>
    );
};

export default WhatsAppButton;