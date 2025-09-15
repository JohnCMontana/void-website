"use client";

import React from "react";
import FeatureCard from "@/components/Cards/FeatureCard"; // adjust path

const features = [
  {
    title: "Grabación Multimodal",
    description:
      "Multicanales de voz, pantallas, mensajería, posicionamiento y metadatos de comunicaciones.",
    bgImage: "/images/features/grabacion-multimodal-aurall.png",
  },
  {
    title: "Gestión Inteligente con IA",
    description:
      "La gestión de grabaciones se automatiza con inteligencia artificial para decisiones más rápidas y precisas.",
    bgImage: "/images/features/gestion-inteligente-con-ia-aurall.png",
  },
  {
    title: "Alta Seguridad",
    description:
      "Aplicación de controles de seguridad y cumplimiento de normativas legales (ENS, 27001, 22301, RGPD).",
    bgImage: "/images/features/alta-seguridad-aurall.png",
  },
  {
    title: "Despliegue Flexible",
    description:
      "Instalación local 100% aislada o despliegue cloud seguro.",
    bgImage: "/images/features/despliegue-flexible-aurall.png",
  },
];

const Features = () => {
  return (
    <section className="w-full h-screen relative mb-20">
      {/* Top black band */}
      <div className="w-full bg-black text-white text-center py-4 px-6 text-lg font-medium z-10 relative">
        Una plataforma integral para grabaciones de llamadas, segura, flexible e inteligente.
      </div>

      {/* 2x2 grid gallery */}
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            title={f.title}
            description={f.description}
            bgImage={f.bgImage}
            className="w-full h-full relative flex flex-col justify-end overflow-hidden"
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
