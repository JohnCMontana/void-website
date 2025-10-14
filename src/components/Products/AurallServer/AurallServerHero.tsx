"use client";
import ButtonGradient from "@/components/Buttons/ButtonGradient";
import ButtonVideo from "@/components/Buttons/ButtonVideo";
import { useEffect, useState } from "react";
import Image from "next/image";
import { slides } from "@/data/aurall-server-slides";

const AurallServerHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Efecto para cambiar de diapositiva cada 4 segundos
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden pt-10 pb-2">

      {/* Background with animated gradient */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src="/videos/aurall-server-hero/aurall-server-hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Black overlay to reduce saturation */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Background lines image */}
        <div className="absolute bottom-0 right-0 z-0">
          <Image 
            src="/images/common/aurall-bg-lines.png"
            alt="Background lines"
            width={1000}
            height={1000}
            className="opacity-20"
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
            priority
          />
        </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block px-4 py-1 mb-4 bg-red-500/20 backdrop-blur-sm rounded-full">
              <p className="text-base font-medium text-white/90 uppercase tracking-wider">
                Grabación y Almacenamiento
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl mb-10 text-white leading-tight">
              <span className="relative">
                Aurall Server
              </span>
              <span className="block mt-3 text-2xl md:text-3xl font-normal text-white/80">
                Grabación segura y eficiente de todas tus comunicaciones
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <ButtonGradient href="/contacto">Solicitar demo</ButtonGradient>
              <ButtonVideo href="#features" label="Ver en acción" />
            </div>
          </div>
          
          <div className="relative">
            {/* Carrusel de imágenes */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 aspect-video">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image 
                    src={slide} 
                    alt={`Aurall Server Screenshot ${index + 1}`} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  
                  {/* Gradiente negro sobre la imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 shine-effect"></div>
                </div>
              ))}
              
              {/* Indicadores de diapositiva */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-white w-4" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Ver diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Interactive feature bar */}
      <div className="relative z-10 bg-black-900/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Grabación en tiempo real</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Almacenamiento seguro</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white">Seguridad avanzada</span>
            </div>
            
            <a href="#features" className="text-white font-medium hover:text-red-200 transition-colors">
              Explorar características →
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shine-effect {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.08) 30%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0.08) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 300% 100%;
          animation: shine 8s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default AurallServerHero;
