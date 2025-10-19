import type { CarModelData, CaseStudy, PricingPlan, FaqItem, TransparencyItem } from './types';
import React from 'react';

// Datos para la calculadora de ahorro. En una app real, esto vendría de una API.
export const CAR_DATA: CarModelData = {
  'Mercedes-Benz': ['Clase A', 'Clase C', 'Clase E', 'GLC', 'GLE'],
  'BMW': ['Serie 1', 'Serie 3', 'Serie 5', 'X3', 'X5'],
  'Audi': ['A1', 'A3', 'A4', 'Q3', 'Q5'],
  'Volkswagen': ['Golf', 'Passat', 'Tiguan', 'Polo', 'T-Roc'],
  'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  'Otras': ['Consultar modelo'],
};

// Datos de precios para la calculadora interactiva.
export const CAR_PRICES: {
  [brand: string]: {
    [model: string]: { espana: number; alemania: number };
  };
} = {
  'Mercedes-Benz': {
    'Clase A': { espana: 33000, alemania: 27500 },
    'Clase C': { espana: 45000, alemania: 37000 },
    'Clase E': { espana: 60000, alemania: 51000 },
    'GLC': { espana: 52000, alemania: 43500 },
    'GLE': { espana: 82000, alemania: 69000 },
  },
  'BMW': {
    'Serie 1': { espana: 31000, alemania: 26000 },
    'Serie 3': { espana: 42000, alemania: 34500 },
    'Serie 5': { espana: 55000, alemania: 46000 },
    'X3': { espana: 48500, alemania: 40000 },
    'X5': { espana: 78000, alemania: 65000 },
  },
  'Audi': {
    'A1': { espana: 25000, alemania: 21000 },
    'A3': { espana: 32000, alemania: 27000 },
    'A4': { espana: 43000, alemania: 35500 },
    'Q3': { espana: 40000, alemania: 33000 },
    'Q5': { espana: 54000, alemania: 45000 },
  },
  'Volkswagen': {
    'Golf': { espana: 29000, alemania: 24000 },
    'Passat': { espana: 38000, alemania: 31000 },
    'Tiguan': { espana: 36000, alemania: 30000 },
    'Polo': { espana: 21000, alemania: 17500 },
    'T-Roc': { espana: 28000, alemania: 23500 },
  },
  'Porsche': {
    '911': { espana: 130000, alemania: 115000 },
    'Cayenne': { espana: 95000, alemania: 82000 },
    'Macan': { espana: 70000, alemania: 60000 },
    'Panamera': { espana: 110000, alemania: 95000 },
    'Taycan': { espana: 105000, alemania: 90000 },
  },
  'Otras': {
    'Consultar modelo': { espana: 0, alemania: 0 },
  },
};


// Datos para la galería de casos reales (prueba social).
export const CASE_STUDIES: CaseStudy[] = [
  {
    image: 'https://picsum.photos/seed/man-bmw/600/400',
    brand: 'BMW',
    model: '320d',
    testimonial: 'El proceso fue increíblemente sencillo. El equipo encontró exactamente lo que buscaba y se encargó de todo. ¡Totalmente recomendable!',
    savings: 4200,
    city: 'Madrid',
    personName: 'Carlos G.',
  },
  {
    image: 'https://picsum.photos/seed/woman-audi/600/400',
    brand: 'Audi',
    model: 'A4 Avant',
    testimonial: 'Dudaba si merecía la pena, pero la calculadora no mentía. Me ahorré un pico y el coche está impecable. Un servicio de 10.',
    savings: 3850,
    city: 'Barcelona',
    personName: 'Laura M.',
  },
  {
    image: 'https://picsum.photos/seed/person-mercedes/600/400',
    brand: 'Mercedes',
    model: 'GLC Coupé',
    testimonial: 'Transparencia total desde el minuto uno. Saber todos los costes desglosados me dio la confianza que necesitaba. ¡Mi coche es una maravilla!',
    savings: 5100,
    city: 'Valencia',
    personName: 'Javier S.',
  },
  {
    image: 'https://picsum.photos/seed/man-porsche/600/400',
    brand: 'Porsche',
    model: 'Macan S',
    testimonial: 'Encontrar este modelo en España era imposible al precio que quería. Ellos lo localizaron en Alemania y en 2 semanas lo tenía en mi garaje.',
    savings: 6200,
    city: 'Marbella',
    personName: 'Miguel R.',
  },
  {
    image: 'https://picsum.photos/seed/woman-vw-golf/600/400',
    brand: 'Volkswagen',
    model: 'Golf R',
    testimonial: 'Excelente comunicación durante todo el proceso. Me sentí segura y acompañada. ¡Repetiré sin duda para el próximo coche!',
    savings: 3500,
    city: 'Sevilla',
    personName: 'Sofía V.',
  },
  {
    image: 'https://picsum.photos/seed/man-audi-q5/600/400',
    brand: 'Audi',
    model: 'Q5 S-Line',
    testimonial: 'El peritaje que hicieron fue exhaustivo. Me enviaron más de 50 fotos y un vídeo. El coche llegó exactamente como lo describieron. Impecable.',
    savings: 4800,
    city: 'Bilbao',
    personName: 'David L.',
  },
  {
    image: 'https://picsum.photos/seed/couple-bmw-x5/600/400',
    brand: 'BMW',
    model: 'X5',
    testimonial: 'Importamos el coche familiar con ellos y no podemos estar más contentos. Más equipado y mucho más barato que las opciones que vimos aquí.',
    savings: 7300,
    city: 'Zaragoza',
    personName: 'Familia Ortiz',
  },
  {
    image: 'https://picsum.photos/seed/woman-mercedes-a/600/400',
    brand: 'Mercedes-Benz',
    model: 'Clase A AMG',
    testimonial: '¡Mi primer coche premium y gracias a ellos me lo pude permitir! Se encargaron de la financiación y de todo el papeleo. ¡Un sueño cumplido!',
    savings: 3900,
    city: 'Málaga',
    personName: 'Elena P.',
  },
  {
    image: 'https://picsum.photos/seed/man-vw-tiguan/600/400',
    brand: 'Volkswagen',
    model: 'Tiguan R-Line',
    testimonial: 'Lo que más valoro es la honestidad. Me desaconsejaron una unidad que parecía buena pero tenía detalles ocultos. 100% profesionales.',
    savings: 4100,
    city: 'Alicante',
    personName: 'Pablo N.',
  },
  {
    image: 'https://picsum.photos/seed/person-porsche-911/600/400',
    brand: 'Porsche',
    model: '911 Carrera',
    testimonial: 'Para un coche tan especial, no me la quería jugar. Su experiencia y su red de contactos en Alemania fueron clave. El resultado es perfecto.',
    savings: 8500,
    city: 'Ibiza',
    personName: 'Adrián F.',
  },
];

// Datos para la tabla de precios y paquetes de servicios.
export const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'DIY Asistido',
    price: 890,
    badge: 'Para expertos',
    features: ['Verificación de vendedor', 'Revisión de documentación', 'Asesoramiento en compra', 'Soporte 24/7'],
    ctaText: 'Empezar Ahora',
  },
  {
    title: 'Búsqueda + Gestión',
    price: 1990,
    badge: 'MÁS POPULAR',
    isPopular: true,
    features: ['Todo en DIY Asistido', 'Búsqueda personalizada', 'Negociación de precio', 'Informe pericial in-situ', 'Gestión de compra'],
    ctaText: 'Elegir Plan',
  },
  {
    title: 'Llave en Mano',
    price: 3990,
    badge: 'Máxima tranquilidad',
    features: ['Todo en Búsqueda + Gestión', 'Transporte asegurado a España', 'Homologación y ficha técnica', 'Matriculación e ITV', 'Entrega a domicilio'],
    ctaText: 'Elegir Plan',
  },
  {
    title: 'VIP Total Care',
    price: 5490,
    badge: 'Premium',
    features: ['Todo en Llave en Mano', 'Garantía premium de 12 meses', 'Detailing completo del vehículo', 'Primer mantenimiento incluido'],
    ctaText: 'Elegir Plan',
  },
];

// Contenido para la sección de preguntas frecuentes (FAQ).
export const FAQ_DATA: FaqItem[] = [
    { question: "¿Cuánto tardo en recibir mi coche?", answer: "El proceso completo, desde que encontramos tu coche hasta que lo recibes en casa, suele durar unos 14 días. Nos esforzamos por ser lo más rápidos y eficientes posible, manteniéndote informado en cada paso del camino." },
    { question: "¿Qué pasa si el coche tiene problemas?", answer: "Realizamos una verificación exhaustiva in-situ por un perito profesional antes de la compra. Si se detecta cualquier problema no declarado, renegociamos el precio o buscamos otra unidad. Además, ofrecemos garantías extendidas para tu total tranquilidad." },
    { question: "¿Incluye la garantía?", answer: "Todos los vehículos de concesionarios oficiales en Alemania vienen con garantía europea, válida en España. Adicionalmente, nuestro paquete VIP Total Care incluye una garantía premium de 12 meses para una cobertura completa." },
    { question: "¿Puedo financiar la importación?", answer: "¡Sí! Colaboramos con varias entidades financieras para ofrecerte las mejores condiciones. Puedes financiar tanto el vehículo como nuestros servicios de importación. Consúltanos para un estudio personalizado sin compromiso." },
    { question: "¿Qué documentos necesito?", answer: "Tú solo necesitas tu DNI o NIE en vigor. Nosotros nos encargamos de todo el papeleo complejo: contrato de compraventa, documentación alemana (Brief), COC, ficha técnica reducida, ITV, impuesto de matriculación y la documentación final española." },
    { question: "¿El coche pasará la ITV?", answer: "Por supuesto. Todos los coches que importamos pasan una revisión completa y la ITV española como parte de nuestro servicio 'Llave en Mano'. Te entregamos el coche con la ITV en vigor y listo para circular legalmente en España." },
    { question: "¿Qué marcas podéis importar?", answer: "Estamos especializados en marcas premium alemanas como Mercedes-Benz, BMW, Audi, Porsche y Volkswagen. Sin embargo, gracias a nuestra extensa red de contactos, podemos encontrar y gestionar la importación de prácticamente cualquier marca y modelo." },
    { question: "¿Ofrecéis garantía de satisfacción?", answer: "Absolutamente. Nuestra reputación se basa en la satisfacción de nuestros clientes. Te garantizamos un proceso 100% transparente y que el coche que recibes se corresponde exactamente con el informe de peritaje y las fotos detalladas que te proporcionamos." },
    { question: "¿Cómo aseguro el coche durante el transporte?", answer: "No tienes que preocuparte por nada. El transporte desde Alemania hasta tu domicilio se realiza con un seguro a todo riesgo que cubre cualquier posible incidencia. Tu inversión está protegida en todo momento." },
    { question: "¿Puedo visitar el coche en Alemania antes de comprarlo?", answer: "Sí, es una opción. Si deseas viajar para ver el coche en persona, podemos coordinar la visita con el vendedor. No obstante, nuestro servicio de peritaje profesional con video-llamada en directo suele ser suficiente para el 99% de nuestros clientes." }
];

// Contenido para la sección de Transparencia.
// FIX: Replaced JSX with React.createElement to fix errors caused by using JSX in a .ts file.
export const TRANSPARENCY_DATA: TransparencyItem[] = [
  {
    title: "Desglose Completo de Costes",
    content: React.createElement(
      'div',
      { className: "space-y-4" },
      React.createElement('p', null, "Creemos en la transparencia radical. Aquí tienes un desglose típico de los costes asociados a nuestro servicio 'Llave en Mano' de 3.990€:"),
      React.createElement(
        'ul',
        { className: "list-disc list-inside space-y-2 text-gray-600" },
        React.createElement('li', null, React.createElement('strong', null, "Búsqueda y Negociación:"), " Tiempo y experiencia de nuestro equipo."),
        React.createElement('li', null, React.createElement('strong', null, "Peritaje Profesional:"), " Revisión mecánica y estética in-situ."),
        React.createElement('li', null, React.createElement('strong', null, "Transporte Internacional:"), " En camión cerrado y asegurado."),
        React.createElement('li', null, React.createElement('strong', null, "Tasas e Impuestos:"), " IVA, Impuesto de Matriculación (según emisiones)."),
        React.createElement('li', null, React.createElement('strong', null, "Homologación e ITV:"), " Ficha técnica reducida y primera ITV en España."),
        React.createElement('li', null, React.createElement('strong', null, "Matriculación y Placas:"), " Tasas de la DGT y placas acrílicas."),
        React.createElement('li', null, React.createElement('strong', null, "Nuestros Honorarios:"), " Por la gestión integral y el know-how.")
      )
    ),
  },
  {
    title: "España vs Alemania: ¿Por qué el ahorro?",
    content: React.createElement(
      "div",
      { className: "space-y-4" },
      React.createElement("p", null, "El ahorro no es magia, se basa en factores de mercado muy claros:"),
      React.createElement(
        "ul",
        { className: "list-disc list-inside space-y-2 text-gray-600" },
        React.createElement("li", null, React.createElement("strong", null, "Mayor Oferta:"), " Alemania es el mercado de coches más grande de Europa. Más coches disponibles significa precios más competitivos."),
        React.createElement("li", null, React.createElement("strong", null, "Cultura de Mantenimiento:"), " Los alemanes son conocidos por su riguroso mantenimiento de vehículos, a menudo en servicios oficiales."),
        React.createElement("li", null, React.createElement("strong", null, "Menor Carga Fiscal:"), " El IVA en Alemania es del 19% frente al 21% en España, y no tienen impuesto de matriculación como el nuestro."),
        React.createElement("li", null, React.createElement("strong", null, "Equipamiento Superior:"), " Los coches configurados para el mercado alemán suelen venir con más extras y mejores acabados de serie.")
      )
    ),
  },
  {
    title: "ROI de tu Inversión en Importación",
    content: "Invertir en nuestro servicio no es un gasto, es una estrategia financiera. El ahorro medio de 3.500€ supera con creces nuestros honorarios. Obtienes un coche mejor equipado, en mejor estado y por menos dinero. A largo plazo, esto se traduce en un mayor valor de reventa y una mejor experiencia de conducción.",
  },
];