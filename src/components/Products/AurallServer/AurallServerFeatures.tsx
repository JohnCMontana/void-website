const features = [
  {
    title: "Grabación multicanal",
    description: "Escenarios híbridos, analógicos, digitales, SIPREC, EUROCAR, móviles.",
    icon: "📞",
  },
  {
    title: "Grabación de pantallas",
    description: "Múltiples pantallas y reproducción sincronizada con audio de llamadas.",
    icon: "🖥️",
  },
  {
    title: "Gestión multitenant",
    description: "Múltiples clientes o empresas con espacio de trabajo y configuración personalizada.",
    icon: "👥",
  },
  {
    title: "Normativas legales",
    description: "Cumplimiento de ENS, 27001, 22301, RGPD, 14001, 9001, entre otras.",
    icon: "📜",
  },
  {
    title: "Entorno intuitivo",
    description: "Todos los servicios en una sola solución para garantizar la interacción con la aplicación.",
    icon: "🔍",
  },
  {
    title: "Gestión de alarmas",
    description: "Gestión y control del estado de los componentes hardware y software del sistema.",
    icon: "🔔",
  },
  {
    title: "Solución in situ",
    description: "Solución en cliente e integración de infraestructura de comunicaciones.",
    icon: "🏢",
  },
  {
    title: "Solución en la nube",
    description: "Servicios en la nube sobre infraestructura de alta disponibilidad.",
    icon: "☁️",
  },
];

const AurallServerFeatures = () => (
  <section id="features" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-left mb-12">Características Generales</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AurallServerFeatures;