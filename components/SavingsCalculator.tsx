import React, { useState, useEffect } from 'react';
import { CAR_DATA, CAR_PRICES } from '../constants';
import type { CarModelData } from '../types';

interface CalculationResult {
  priceSpain: number;
  priceGermany: number;
  serviceFee: number;
  registrationTax: number;
  totalFinalPrice: number;
  savings: number;
  fuelMonths: number;
}

const SavingsCalculator: React.FC = () => {
  const [brand, setBrand] = useState<string>('BMW');
  const [model, setModel] = useState<string>('Serie 3');
  const [year, setYear] = useState<number>(2022);
  const [budget, setBudget] = useState<number>(40000);

  const [models, setModels] = useState<string[]>(CAR_DATA['BMW']);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [animateResult, setAnimateResult] = useState<boolean>(false);

  // Efecto para actualizar los modelos cuando cambia la marca
  useEffect(() => {
    setModels((CAR_DATA as CarModelData)[brand] || []);
    setModel((CAR_DATA as CarModelData)[brand]?.[0] || '');
  }, [brand]);

  // Efecto para calcular el ahorro cuando cambian los inputs
  useEffect(() => {
    setIsCalculating(true);
    setAnimateResult(false);

    const calculationTimeout = setTimeout(() => {
      const basePrices = CAR_PRICES[brand]?.[model];
      
      if (!basePrices || basePrices.espana === 0) {
        setResult(null);
        setIsCalculating(false);
        return;
      }
      
      const currentYear = new Date().getFullYear();
      const yearDiff = currentYear - year;
      const depreciationFactor = Math.pow(0.85, yearDiff);

      let priceSpain = basePrices.espana * depreciationFactor;
      let priceGermany = basePrices.alemania * depreciationFactor;
      
      const serviceFee = 3990;
      // El Impuesto de Matriculación se basa en las emisiones de CO2. Usamos un % del valor como estimación.
      const registrationTax = priceGermany * 0.0475;

      // El precio en Alemania ya incluye el IVA alemán (19%). El cliente particular paga ese precio.
      const totalFinalPrice = priceGermany + serviceFee + registrationTax;
      const calculatedSavings = priceSpain - totalFinalPrice;

      setResult({
        priceSpain,
        priceGermany,
        serviceFee,
        registrationTax,
        totalFinalPrice,
        savings: calculatedSavings > 0 ? calculatedSavings : 0,
        fuelMonths: Math.round((calculatedSavings > 0 ? calculatedSavings : 0) / 120),
      });
      
      setIsCalculating(false);
      setAnimateResult(true);
    }, 400); // Pequeño delay para que el estado 'Calculando...' sea perceptible

    return () => clearTimeout(calculationTimeout);
  }, [brand, model, year]);

  // Efecto para resetear la animación
  useEffect(() => {
    if (animateResult) {
      const timer = setTimeout(() => setAnimateResult(false), 500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [animateResult]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#0A2463] rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de Inputs */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0A2463]">Calcula tu Ahorro al Instante</h2>
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca</label>
                <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35]">
                  {Object.keys(CAR_DATA).map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modelo</label>
                <select id="model" value={model} onChange={(e) => setModel(e.target.value)} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35]">
                  {models.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año: <span className="font-bold text-[#0A2463]">{year}</span></label>
                <input id="year" type="range" min="2015" max="2024" value={year} onChange={(e) => setYear(parseInt(e.target.value))} className="mt-1 block w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]" />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Presupuesto Máximo (€)</label>
                <input id="budget" type="number" step="1000" value={budget} onChange={(e) => setBudget(parseInt(e.target.value))} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B35] focus:border-[#FF6B35]" />
              </div>
            </div>

            {/* Columna de Resultados */}
            <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 text-center min-h-[350px] flex flex-col justify-center">
              {isCalculating ? (
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-lg text-[#0A2463] font-semibold animate-pulse">Calculando...</p>
                </div>
              ) : result ? (
                <>
                  <h3 className="text-xl font-bold text-gray-500 mb-4">Desglose de Costes</h3>
                  <div className="space-y-2 text-left text-gray-700">
                      <p>Precio en Alemania (IVA incl.): <span className="font-semibold float-right">{formatCurrency(result.priceGermany)}</span></p>
                      <p>+ Tasa Servicio "Llave en Mano": <span className="font-semibold float-right">{formatCurrency(result.serviceFee)}</span></p>
                      <p>+ Imp. Matriculación (aprox.): <span className="font-semibold float-right">{formatCurrency(result.registrationTax)}</span></p>
                  </div>
                   <hr className="my-3"/>
                   <p className="text-left font-bold">Precio final importado (aprox.): <span className="float-right">{formatCurrency(result.totalFinalPrice)}</span></p>
                   <p className="text-left mt-1">Precio Aprox. en España: <span className="font-semibold float-right">{formatCurrency(result.priceSpain)}</span></p>
                  <hr className="my-4 border-dashed"/>
                  <p className="text-lg font-semibold text-[#0A2463]">AHORRO TOTAL ESTIMADO:</p>
                  <p className={`text-4xl lg:text-5xl font-extrabold text-[#10B981] my-2 transition-all duration-300 ${animateResult ? 'pulse-effect' : ''}`}>
                    {formatCurrency(result.savings)}
                  </p>
                  <p className="text-sm text-gray-500 italic">Equivalente a {result.fuelMonths} meses de combustible gratis*</p>
                  <button className="mt-6 w-full bg-[#FF6B35] text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                      Solicitar Búsqueda Personalizada
                  </button>
                </>
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-lg text-gray-600">Selecciona un vehículo para calcular tu ahorro.</p>
                    <p className="text-sm text-gray-500 mt-2">(Para "Otras" marcas, solicita una búsqueda personalizada)</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;