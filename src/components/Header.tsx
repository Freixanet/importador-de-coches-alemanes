import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { href: '#how-it-works', label: 'Cómo Funciona' },
    { href: '#calculator', label: 'Calculadora' },
    { href: '#cases', label: 'Casos Reales' },
    { href: '#pricing', label: 'Precios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className={`bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <a href="#" className="text-2xl font-bold text-[#0A2463]">
          Auto<span className="text-[#FF6B35]">Import</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-[#0A2463] transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        
        <a href="#contact" className="hidden md:inline-block bg-[#0A2463] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300">
          Contactar
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0A2463] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-[#0A2463] transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="w-full text-center bg-[#0A2463] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300" onClick={() => setIsOpen(false)}>
              Contactar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;