"use client";
import HeroContent from "./HeroContent";
import { FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const Hero = () => (
  <section id="hero" className="relative w-full overflow-hidden pt-10 pb-2">
    {/* Video de fondo */}
    <video
      className="absolute inset-0 w-full object-cover pointer-events-none z-0"
      style={{ height: "100%" }}
      src="/videos/hero-bg-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />

    {/* Contenido principal */}
    <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto px-6 py-6">
      <HeroContent />
    </div>

    {/* ------------------------------------------ */}
    {/* News Widget 
    <div className="absolute bottom-5 right-5 z-20">
      <NewsWidget
        title="Inteligencia Artificial para Optimizar las Comunicaciones de la Policía Local"
        imageUrl="/images/news/policia-local-grabaciones-ia.png"
        linkUrl="/noticias/nueva-solucion-ia"
      />
    </div>
    */}
    {/* ------------------------------------------ */}

    {/* Franja inferior con mensaje */}
    
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 text-white/60 text-xs sm:text-sm px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
        <span className="flex-1">
          Más de 30 años respaldan nuestra innovación y compromiso constante
        </span>
        <Link
          href="/empresa"
          className="inline-block font-bold hover:underline whitespace-nowrap"
        >
          Más sobre nosotros →
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
