const securityFeatures = [
  {
    title: "Estándares seguros",
    description: "Estándares abiertos (TLS/SSL, HTTPS, AES-256, SHA-256).",
  },
  {
    title: "Control de accesos",
    description: "Limitación del número de intentos. Contraseña robustas. 2FA. Justificación del motivo de acceso.",
  },
  {
    title: "Registros de accesos",
    description: "Registro de todas las acciones.",
  },
  {
    title: "Perfiles de usuarios",
    description: "Asignación de permisos a usuarios. Definición de roles.",
  },
  {
    title: "Encriptación de datos",
    description: "Marca de agua. Encriptación de grabaciones (AES-256). Huella digital identificando cada grabación (SHA-256).",
  },
  {
    title: "Retención de datos",
    description: "Políticas de retención programación de backup.",
  },
];

const AurallServerSecurity = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-left mb-8">Seguridad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {securityFeatures.map((feature, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img 
            src="/images/products/security.jpg" 
            alt="Aurall Security Features" 
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AurallServerSecurity;