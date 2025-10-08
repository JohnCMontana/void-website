import ButtonWhite from "../../Buttons/ButtonWhite";

const products = [
  {
    title: "Aurall Server",
    description: "Gestión avanzada de grabaciones para comunicaciones críticas",
    href: "/productos/aurall-server",
  },
  {
    title: "Aurall Quality",
    description: "Evaluación y mejora continua de la calidad del servicio",
    href: "/productos/aurall-quality",
  },
  {
    title: "Aurall Quantum",
    description: "Solución integral de IA para optimización de comunicaciones",
    href: "/productos/aurall-quantum",
  },
];

const Products = () => (
  <section className="py-16 md:py-4 pb-40 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main product image and headline */}
      <div className="flex flex-col md:flex-row items-center gap-2 mb-12">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/products/aurall-solutions.png"
            alt="Aurall Solutions"
            className="w-100 p-4 max-w-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            Innovaciones para tu Empresa
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Soluciones diseñadas para maximizar la eficiencia y seguridad en tus
            comunicaciones críticas.
          </p>
          <ButtonWhite href="/contacto">Solicitar demo</ButtonWhite>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center">
        {products.map((product, idx) => (
          <div key={idx} className="px-4 py-8">
            <h3 className="text-xl font-bold text-black mb-3">{product.title}</h3>
            <p className="text-gray-700 mb-3">{product.description}</p>
            <a
              href={product.href}
              className="text-[#d73032] font-semibold underline underline-offset-4 hover:text-black transition"
            >
              Ver más →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
