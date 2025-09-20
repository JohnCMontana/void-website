import Card1 from "../../Cards/Card1";
import ButtonWhite from "../../Buttons/ButtonWhite";

const productCards = [
  {
    title: "Aurall Server",
    description: "Gestión avanzada de grabaciones para comunicaciones críticas",
    href: "/productos/aurall-server",
    bgImage: "images/products/aurall-server-recording.png",
  },
  {
    title: "Aurall Quality",
    description: "Evaluación y mejora continua de la calidad del servicio",
    href: "/productos/aurall-quality",
    bgImage: "/images/products/aurall-quality-dashboard.png",
  },
  {
    title: "Aurall Quantum",
    description: "Solución integral de IA para optimización de comunicaciones",
    href: "/productos/aurall-quantum",
    bgImage: "/images/products/aurall-quantum-ai.png",
  },
];

const Products = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Main product image and headline */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/products/aurall-solutions.png"
            alt="Aurall Server"
            className="w-100 p-10 max-w-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
            Innovaciones para tu Empresa
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Soluciones diseñadas para maximizar la eficiencia y seguridad en tus
            comunicaciones críticas.
          </p>
          <ButtonWhite href="/contacto">Solicitar demo</ButtonWhite>
        </div>
      </div>

      {/* Product cards row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {productCards.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col items-center justify-end rounded-2xl shadow-lg overflow-hidden h-64 border-2 border-gray-300"
          >
            <img
              src={card.bgImage}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full h-full bg-white opacity-90"></div>
            <div className="relative z-10 p-6 w-full text-center">
              <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
              <p className="text-black text-base">{card.description}</p>
              <a
                href={card.href}
                className="inline-block mt-4 text-[#d73032] font-semibold underline underline-offset-4 hover:text-black transition"
              >
                Ver más →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
