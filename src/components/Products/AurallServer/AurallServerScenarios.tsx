const scenarios = [
  {
    title: "Control de Operaciones",
    icon: "🔄",
  },
  {
    title: "Emergencias & Seguridad pública",
    icon: "🚨",
  },
  {
    title: "Control de Transporte",
    icon: "🚆",
  },
  {
    title: "Finanzas",
    icon: "💼",
  },
];

const AurallServerScenarios = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-left mb-12">Múltiples Escenarios</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {scenarios.map((scenario, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
            <div className="text-4xl mb-4">{scenario.icon}</div>
            <h3 className="text-xl font-semibold mb-2">Soluciones para</h3>
            <p className="text-lg font-medium text-gray-800">{scenario.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AurallServerScenarios;