"use client";
import HeroContent from "./HeroContent";
import { FiTrendingUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Hero = () => (
  <section id="hero" className="relative h-screen w-full overflow-hidden pt-10 pb-2">
    {/* Video de fondo */}
    <video
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      src="/videos/hero-bg-video.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />

    {/* Background lines image */}
    <div className="absolute bottom-0 right-0 z-0">
      <Image 
        src="/images/Common/aurall-bg-lines.png"
        alt="Background lines"
        width={1000}
        height={1000}
        className="opacity-20"
        style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
        priority
      />
    </div>

    {/* Contenido principal */}
    <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
      <HeroContent />
    </div>

    {/* Franja inferior con mensaje */}
    <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 text-white/60 text-xs sm:text-sm px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <FiTrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
          <span className="sm:hidden">
            30+ años de innovación y compromiso
          </span>
        </div>

        <span className="hidden sm:block flex-1">
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
