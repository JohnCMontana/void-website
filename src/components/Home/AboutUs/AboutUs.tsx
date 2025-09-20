"use client";

import React from "react";
import ButtonVideo from "../../Buttons/ButtonVideo";
import ButtonWhite from "../../Buttons/ButtonWhite";

const AboutUs = () => {
  return (
    <>
      <section className="relative overflow-hidden text-black mt-30">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gray-300 z-0"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left side: text */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tight">
              Más que Software, Soluciones
            </h2>
            <p className="text-lg leading-relaxed">
              Void Sistemas, empresa española proveedora de soluciones
              tecnológicas, con una experiencia de más de 30 años en el diseño,
              desarrollo, implantación y soporte de software de grabación de
              comunicaciones.
            </p>
            <p className="text-lg leading-relaxed">
              Nuestro producto principal AURALL, es un sistema de última
              generación diseñado para capturar y almacenar de manera segura las
              interacciones de voz y datos en entornos empresariales exigentes.
            </p>
            <div className="flex space-x-4">
              <ButtonWhite href="/about-us">Conoce la empresa</ButtonWhite>
              <ButtonVideo href="#video" label="Ver video" />
            </div>
          </div>

          {/* Right side: image */}
          <div className="flex justify-center">
            <img
              src="/images/about-us/about-us-void-sistemas-team.png"
              alt="Sobre Nosotros"
              className="max-h-[800px] object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Certificates logos row */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-2xl font-bold text-center mb-4 text-black">
            Tu confianza, nuestra garantía
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 items-center justify-center">
            <img
              src="/logos/Certificates/voidsistemas-pyme-innovadora.png"
              alt="Certificado 1"
              className="h-32 md:h-50 mx-auto object-contain"
            />
            <img
              src="/logos/Certificates/voidsistemas-ens-rd311-2022.png"
              alt="Certificado 2"
              className="h-32 md:h-50 mx-auto object-contain"
            />
            <img
              src="/logos/Certificates/voidsistemas-iso-9001.png"
              alt="Certificado 3"
              className="h-32 md:h-50 mx-auto object-contain"
            />
            <img
              src="/logos/Certificates/voidsistemas-iso-14001.png"
              alt="Certificado 4"
              className="h-32 md:h-50 mx-auto object-contain"
            />
            <img
              src="/logos/Certificates/voidsistemas-iso-22301.png"
              alt="Certificado 5"
              className="h-32 md:h-40 mx-auto object-contain"
            />
            <img
              src="/logos/Certificates/voidsistemas-iso-iec-27001.png"
              alt="Certificado 6"
              className="h-32 md:h-40 mx-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
