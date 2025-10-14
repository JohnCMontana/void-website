"use client";

import React from "react";
import ButtonVideo from "../../Buttons/ButtonVideo";
import ButtonWhite from "../../Buttons/ButtonWhite";
import { InView } from "../../Effects/InView";

const AboutUs = () => {
  return (
    <>
      <section className="relative overflow-hidden text-black mt-30">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gray-100 z-0"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center z-10">
          {/* Left side: text */}
          <div className="space-y-6">
            <InView variant="fadeUp" delay={0.05}>
              <h2 className="text-5xl font-extrabold tracking-tight">
                Más que Software, Soluciones
              </h2>
            </InView>
            <InView variant="fadeUp" delay={0.12}>
              <p className="text-lg leading-relaxed">
                Void Sistemas, empresa española con más de 30 años de experiencia,
                provee soluciones tecnológicas y soporte de software de grabación de comunicaciones.
              </p>
            </InView>
            <InView variant="fadeUp" delay={0.18}>
              <p className="text-lg leading-relaxed">
                Nuestro compromiso es ofrecer productos que no solo cumplan con los estándares más altos de calidad,
                sino que también se adapten a las necesidades específicas de cada cliente.
              </p>
            </InView>
            <InView variant="fadeUp" delay={0.26}>
              <div className="flex gap-4">
                <ButtonWhite href="/empresa">Conoce más</ButtonWhite>
                <ButtonVideo href="/empresa" label="Ver video" />
              </div>
            </InView>
          </div>

          {/* Right side: image */}
          <InView className="relative" variant="zoomIn" delay={0.1}>
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                src="/images/about-us/about-us-void-sistemas-team.png"
              />
            </div>
          </InView>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
