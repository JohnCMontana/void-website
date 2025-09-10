"use client";
import './Hero.css';

interface ClientCarouselProps {
  clients: string[];
}

const ClientCarousel = ({ clients }: ClientCarouselProps) => (
  <div className="w-full py-20">

    {/*
    <p className="text-center mb-10 text-lg font-light text-gray-600">
      Confianza compartida con líderes del sector
    </p>
    */}

    <div className="mx-auto max-w-7xl w-[90%] overflow-hidden relative logo-fade-container">
      <div className="scroll-track flex items-center gap-20 hover:animation-paused">
        {[...clients, ...clients].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Client ${i}`}
            className="h-[60px] w-auto flex-shrink-0 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  </div>
);

export default ClientCarousel;
