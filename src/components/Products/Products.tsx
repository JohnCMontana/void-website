import Card1 from '../Cards/Card1';
import { ReactNode } from 'react';

const Products = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        
        {/* Left text */}
        <div className="lg:w-1/3 flex flex-col justify-start gap-6">
          <h2 className="text-3xl font-bold">Nuestros Productos</h2>
          <p className="text-gray-700 text-sm">
            Ofrecemos soluciones de grabación y análisis de comunicaciones críticas, optimizadas para tu empresa.
          </p>
        </div>

        {/* Right cards */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-6">
          <Card1
            title="Aurall Server"
            description="Gestión avanzada de grabaciones para comunicaciones críticas"
            href="/productos/aurall-server"
            bgImage="images/products/aurall-server-recording.png" // optional
          />
          <Card1
            title="Aurall Quality"
            description="Evaluación y mejora continua de la calidad del servicio"
            href="/productos/aurall-quality"
            bgImage="/images/products/quality-bg.jpg" // optional
          />
          <Card1
            title="Aurall Quantum"
            description="Solución integral de IA para optimización de comunicaciones"
            href="/productos/aurall-quantum"
            bgImage="/images/products/quantum-bg.jpg" // optional
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
