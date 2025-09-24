"use client";
import { useEffect, useRef, useState } from "react";
import ButtonWhite from "../../Buttons/ButtonWhite";

const features = [
  {
    title: "Grabación Inteligente",
    description: "Captura y almacena comunicaciones críticas con máxima seguridad y flexibilidad.",
    bgImage: "/images/features/grabacion-multimodal-aurall.png",
  },
  {
    title: "Análisis con IA",
    description: "Transcribe, resume y detecta patrones en tiempo real para decisiones ágiles.",
    bgImage: "/images/features/gestion-inteligente-con-ia-aurall.png",
  },
  {
    title: "Dashboards & KPIs",
    description: "Visualiza métricas clave y exporta datos a BI para mejorar la operación.",
    bgImage: "/images/features/despliegue-flexible-aurall.png",
  },
  {
    title: "Privacidad & Control",
    description: "Procesamiento local, permisos granulares y cumplimiento normativo garantizado.",
    bgImage: "/images/features/alta-seguridad-aurall.png",
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      if (sectionTop <= 0 && sectionBottom >= viewportHeight) {
        const progress = Math.abs(sectionTop) / (sectionHeight - viewportHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setScrollProgress(clampedProgress);

        const featureIndex = Math.floor(clampedProgress * features.length);
        setActiveIndex(Math.min(featureIndex, features.length - 1));

        const totalTransform = -(features.length - 1) * viewportHeight;
        const currentTransform = totalTransform * clampedProgress;

        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${currentTransform}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative bg-gray-50 my-30"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="flex h-full">
          {/* Left sticky panel */}
          <div className="w-1/2 h-full relative">
            <div className="absolute inset-0 overflow-hidden">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeIndex === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={feature.bgImage}
                    alt={feature.title}
                    className="w-full h-full object-cover filter grayscale brightness-75"
                  />
                  {/* Black tint overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              ))}

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-8 max-w-lg">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {features[activeIndex].title}
                  </h2>

                  <p className="text-lg text-white/90 leading-relaxed">
                    {features[activeIndex].description}
                  </p>

                  <div className="mt-8 flex justify-center gap-2">
                    {features.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right scrolling content */}
          <div className="w-1/2 h-full relative overflow-hidden">
            <div ref={contentRef} className="will-change-transform">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="h-screen flex items-center justify-center p-8"
                >
                  <div className="max-w-lg space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <span className="text-red-600 font-bold text-lg">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="h-px bg-gray-300 flex-1" />
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="pt-6">
                      <ButtonWhite href="/contact" className="px-6 py-3">
                        Descubrir más
                        <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </ButtonWhite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
