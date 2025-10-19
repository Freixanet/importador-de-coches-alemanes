
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Auto<span className="text-[#FF6B35]">Import</span></h3>
            <p className="text-gray-400 text-sm">Tu socio de confianza para importar el coche de tus sueños desde Alemania. Ahorro, transparencia y calidad garantizados.</p>
            {/* Aquí irían los iconos de redes sociales */}
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pricing" className="hover:text-white">Nuestros Paquetes</a></li>
              <li><a href="#how-it-works" className="hover:text-white">Proceso de Importación</a></li>
              <li><a href="#cases" className="hover:text-white">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Guía de Importación</a></li>
              <li><a href="#faq" className="hover:text-white">Preguntas Frecuentes</a></li>
              <li><a href="#cases" className="hover:text-white">Opiniones</a></li>
              <li><a href="#contact" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AutoImport SL. Todos los derechos reservados. CIF: B-12345678.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
