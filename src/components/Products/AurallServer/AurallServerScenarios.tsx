const scenarios = [
  {
    title: "Control de Operaciones",
    icon: "🔄",
    image: "/images/aurall-server/screens/Screen1.png",
  },
  {
    title: "Emergencias & Seguridad pública",
    icon: "🚨",
    image: "/images/aurall-server/screens/Screen2.png",
  },
  {
    title: "Control de Transporte",
    icon: "🚆",
    image: "/images/aurall-server/screens/Screen3.png",
  },
  {
    title: "Finanzas",
    icon: "💼",
    image: "/images/aurall-server/screens/Screen4.png",
  },
];

const AurallServerScenarios = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left column: heading and optional description/CTA */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-left text-gray-900">Múltiples Escenarios</h2>
          {/* Add optional supporting text here if needed */}
          <div className="pt-4">
            <a href="#features" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Todos nuestros proyectos →
            </a>
          </div>
        </div>

        {/* Right column: 2x2 image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {scenarios.map((scenario, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Soluciones para</h3>
                <p className="text-lg font-medium text-white">{scenario.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AurallServerScenarios;