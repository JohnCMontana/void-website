import { Mic, Monitor, Users, Shield, Zap, Bell, Building2, Cloud } from 'lucide-react';

const features = [
  {
    title: "Grabación multicanal",
    description: "Escenarios híbridos, analógicos, digitales, SIPREC, EUROCAR, móviles.",
    icon: Mic,
  },
  {
    title: "Grabación de pantallas",
    description: "Múltiples pantallas y reproducción sincronizada con audio de llamadas.",
    icon: Monitor,
  },
  {
    title: "Gestión multitenant",
    description: "Múltiples clientes o empresas con espacio de trabajo y configuración personalizada.",
    icon: Users,
  },
  {
    title: "Normativas legales",
    description: "Cumplimiento de ENS, 27001, 22301, RGPD, 14001, 9001, entre otras.",
    icon: Shield,
  },
  {
    title: "Entorno intuitivo",
    description: "Todos los servicios en una sola solución para garantizar la interacción con la aplicación.",
    icon: Zap,
  },
  {
    title: "Gestión de alarmas",
    description: "Gestión y control del estado de los componentes hardware y software del sistema.",
    icon: Bell,
  },
  {
    title: "Solución in situ",
    description: "Solución en cliente e integración de infraestructura de comunicaciones.",
    icon: Building2,
  },
  {
    title: "Solución en la nube",
    description: "Servicios en la nube sobre infraestructura de alta disponibilidad.",
    icon: Cloud,
  },
];

const AurallServerFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Características Generales
          </h2>
          <p className="text-xl text-gray-600">
            Plataforma completa de grabación y análisis diseñada para entornos empresariales críticos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AurallServerFeatures;