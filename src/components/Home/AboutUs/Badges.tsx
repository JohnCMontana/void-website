import React from 'react';
import ButtonWhite from '../../Buttons/ButtonWhite';

const sampleCerts = [
  { id: 1, name: 'PYME Innovadora', issuer: '', logo: './logos/Certificates/voidsistemas-pyme-innovadora.png', year: 2023, link: '#' },
  { id: 2, name: 'ENS RD311/2022', issuer: 'ENS', logo: './logos/Certificates/voidsistemas-ens-rd311-2022.png', year: 2022, link: '#' },
  { id: 3, name: 'ISO-9001', issuer: 'Cámara Certifica', logo: './logos/Certificates/voidsistemas-iso-9001.png', year: 2024, link: '#' },
  { id: 4, name: 'ISO-14001', issuer: 'Cámara Certifica', logo: './logos/Certificates/voidsistemas-iso-14001.png', year: 2024, link: '#' },
  { id: 5, name: 'ISO-22301', issuer: 'OCA Global', logo: './logos/Certificates/voidsistemas-iso-22301.png', year: 2021, link: '#' },
  { id: 6, name: 'ISO-IEC-27001', issuer: 'OCA Global', logo: './logos/Certificates/voidsistemas-iso-iec-27001.png', year: 2021, link: '#' },
];

export default function CertificationsSection({
  title = 'Confianza en Pantalla',
  subtitle = 'Todos nuestros logros, visibles y comprobables.',
  certs = sampleCerts,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-40">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: Text */}
        <div className="lg:w-4/12">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-gray-600">{subtitle}</p>

          <div className="mt-6 flex gap-3">
            <ButtonWhite href="/contacto">Ver Certificados</ButtonWhite>
          </div>
        </div>

        {/* Right: Grid of badges */}
        <div className="lg:w-8/12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {certs.map((c) => (
              <article
                key={c.id}
                className="group relative flex flex-col items-center
                           gap-3 p-4 rounded-xl border border-gray-200
                           shadow-sm hover:shadow-lg transform transition-all
                           duration-200 hover:-translate-y-1"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-lg overflow-hidden">
                  <img src={c.logo} alt={c.name} className="max-w-full max-h-full object-contain" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-medium">{c.name}</h3>
                  <p className="text-xs text-gray-500">{c.issuer}</p>
                </div>
              </article>
            ))}

            {/* Highlight card */}
            <div className="col-span-2 sm:col-span-3 md:col-span-2 flex items-center justify-center p-6 rounded-xl bg-red-400 text-white shadow-lg">
              <div className="text-center">
                <h4 className="text-lg text-left font-semibold">Nuestros certificados respaldan cada proyecto y cada paso que damos.</h4>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Enlaces de verificación disponibles. Actualizamos los sellos cada vez que recibimos una renovación.
          </p>
        </div>
      </div>
    </section>
  );
}
