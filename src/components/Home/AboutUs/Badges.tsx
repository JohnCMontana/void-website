import React from 'react';

// Certificaciones Section - Modern, cercano. TailwindCSS required.
// Usage: <CertificationsSection title="Tu título" subtitle="Tu subtítulo" certs={certsArray} />

const sampleCerts = [
  { id: 1, name: 'ISO 27001', issuer: 'AENOR', logo: '/images/iso27001.png', year: 2023, link: '#' },
  { id: 2, name: 'ISO 9001', issuer: 'AENOR', logo: '/images/iso9001.png', year: 2022, link: '#' },
  { id: 3, name: 'PCI DSS', issuer: 'PCI Council', logo: '/images/pci.png', year: 2024, link: '#' },
  { id: 4, name: 'SOC 2', issuer: 'Independent', logo: '/images/soc2.png', year: 2024, link: '#' },
  { id: 5, name: 'GDPR Ready', issuer: 'Internal', logo: '/images/gdpr.png', year: 2021, link: '#' },
];

export default function CertificationsSection({
  title = 'Confianza en Pantalla',
  subtitle = 'Todos nuestros logros, visibles y comprobables.',
  certs = sampleCerts,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: Text */}
        <div className="lg:w-4/12">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-gray-600">{subtitle}</p>

          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-black text-white text-sm shadow-md hover:opacity-95"
            >
              Ver certificados
            </a>
            <a
              href="#verificacion"
              className="inline-block px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
            >
              Ver comprobaciones
            </a>
          </div>
        </div>

        {/* Right: Grid of badges */}
        <div className="lg:w-8/12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {certs.map((c, i) => (
              <article
                key={c.id}
                className="group relative flex flex-col items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-lg transform transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gray-50 overflow-hidden">
                  {/* logo placeholder */}
                  <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-medium">{c.name}</h3>
                  <p className="text-xs text-gray-500">{c.issuer}</p>
                </div>

                {/* Hover panel */}
                <a
                  href={c.link}
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-black/5 flex items-end justify-center p-3 text-xs text-indigo-600"
                >
                  Ver detalle
                </a>
              </article>
            ))}

            {/* Highlight card (central) */}
            <div className="col-span-2 sm:col-span-3 md:col-span-2 flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-lg">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide opacity-90">Sello destacado</p>
                <h4 className="mt-2 text-lg font-semibold">ISO 27001</h4>
                <p className="mt-1 text-xs opacity-90">Garantía real de seguridad</p>
              </div>
            </div>
          </div>

          {/* Small caption */}
          <p className="mt-4 text-xs text-gray-500">Enlaces de verificación disponibles. Actualizamos los sellos cada vez que recibimos una renovación.</p>
        </div>
      </div>
    </section>
  );
}
