import Card1 from '../../Cards/Card1';
import ButtonWhite from '../../Buttons/ButtonWhite';

const Products = () => {
  return (
    <section className="py-24 mb-25 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        
        {/* Left text */}
        <div className="lg:w-1/3 flex flex-col justify-start gap-6">

        <h1 className="text-4xl font-bold tracking-tight">
          <span className="bg-red-400 text-white px-5">
            Innovaciones
          </span>{" "}
          <br />
          para tu Empresa
        </h1>

          <p className="text-gray-700 leading-relaxed">
            En Void Sistemas ofrecemos soluciones avanzadas de grabación
            y análisis de comunicaciones críticas, diseñadas
            para optimizar la eficiencia, seguridad y control
            de la información dentro de tu empresa, ayudándote
            a tomar decisiones más rápidas y fundamentadas.
          </p>

          <div className="w-auto">
            <ButtonWhite href="/contacto">
              Solicitar demo
            </ButtonWhite>
          </div>
          
        </div>

        {/* Right cards */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-6">
          <Card1
            title="Aurall Server"
            description="Gestión avanzada de grabaciones para comunicaciones críticas"
            href="/productos/aurall-server"
            bgImage="images/products/aurall-server-recording.png"
          />
          <Card1
            title="Aurall Quality"
            description="Evaluación y mejora continua de la calidad del servicio"
            href="/productos/aurall-quality"
            bgImage="/images/products/aurall-quality-dashboard.png"
          />
          <Card1
            title="Aurall Quantum"
            description="Solución integral de IA para optimización de comunicaciones"
            href="/productos/aurall-quantum"
            bgImage="/images/products/aurall-quantum-ai.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
