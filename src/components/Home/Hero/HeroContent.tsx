"use client";
import ButtonGradient from "../../Buttons/ButtonGradient";
import ButtonVideo from "../../Buttons/ButtonVideo";
import HeroCounters from "./HeroCounters";
import "./Hero.css";

const HeroContent = () => (
  <div className="relative z-10 flex-1 min-w-0 py-20 px-70 text-white text-center">
    <p className="text-base pb-2 text-white/80">
      GRABACIÓN DE INTERRACCIONES
    </p>
  
    <h1 className="text-5xl mb-10 leading-tight">
      Tus comunicaciones críticas, seguras y bajo control con{" "}
      <span className="relative inline-block align-baseline">
        <span
          className="absolute inset-0 blur-lg opacity-85"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #d73032, #0f53ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          IA
        </span>
        <span className="relative font-semibold
                         bg-gradient-to-b from-[#d73032] to-[#0f53ff]
                         bg-clip-text text-transparent"
                         >
                          IA
        </span>
        <span aria-hidden className="absolute inset-0 shine-text">
          IA
        </span>
      </span>
    </h1>

    <div className="flex flex-col items-center justify-center gap-6 mb-10">
      <div className="flex items-center justify-center gap-4 flex-nowrap">
        <ButtonVideo href="#video" label="Descubre en acción" />
        <ButtonGradient
          href="/contacto">
          Solicitar demo
        </ButtonGradient>
      </div>

      <HeroCounters />

    </div>
  </div>
);

export default HeroContent;
