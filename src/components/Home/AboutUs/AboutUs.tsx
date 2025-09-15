"use client";

import React from "react";
import ButtonVideo from "../../Buttons/ButtonVideo";

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden text-white mt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#983031] z-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left side: text */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Más que Software, Soluciones
          </h2>
          <p className="text-lg leading-relaxed">
            Void Sistemas, empresa española proveedora de soluciones tecnológicas,
            con una experiencia de más de 30 años en el diseño, desarrollo, implantación
            y soporte de software de grabación de comunicaciones.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestro producto principal AURALL, es un sistema de última generación diseñado
            para capturar y almacenar de manera segura las interacciones de voz y datos
            en entornos empresariales exigentes.
          </p>
          <ButtonVideo href="#video" label="Conoce la empresa" />
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

      <div>
        <h2 className="text-6xl font-extrabold tracking-tight">
          Nuestro Equipo
        </h2>
      </div>
    </section>
  );
};

export default AboutUs;
