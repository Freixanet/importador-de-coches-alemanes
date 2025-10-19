import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Usamos scrollIntoView para un control más preciso y fiable en React
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 text-center"
      style={{ 
        backgroundImage: `url('https://picsum.photos/seed/carhero/1920/1080')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Superposición oscura para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <h1 
          className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white" 
          style={{ fontFamily: "'Poppins', sans-serif", color: 'white' }}
        >
          Importa Tu Coche Alemán por <span className="text-[#FF6B35]">3.500€ Menos</span> que en España
        </h1>
        <p 
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto" 
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          En 14 días, listo para circular. Garantía total, transparencia absoluta.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('calculator')}
            className="w-full sm:w-auto bg-[#FF6B35] text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            Calcula Tu Ahorro Ahora
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="w-full sm:w-auto border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0A2463]"
          >
            Ver Cómo Funciona
          </button>
        </div>
        <div className="mt-8 text-white text-sm">
          <p>Descubre cuánto ahorras en 30 segundos</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;