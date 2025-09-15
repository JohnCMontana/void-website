"use client";
import "../Home/Hero/Hero.css";

interface LogoCarouselProps {
  clients: string[];
  title?: string;
}

const LogoCarousel = ({ clients, title }: LogoCarouselProps) => {
  return (
    <div className="w-full py-20">
      {title && (
        <p className="text-center mb-10 text-lg font-light text-gray-600">
          {title}
        </p>
      )}

      <div className="mx-auto max-w-7xl w-[90%] overflow-hidden relative logo-fade-container">
        <div className="scroll-track flex items-center gap-20 hover:animation-paused mb-8">
          {[...clients, ...clients].map((logo, i) => (
            <img
              key={`first-${i}`}
              src={logo}
              alt={`Client ${i}`}
              className="
                h-[40px] w-auto flex-shrink-0 object-contain
                opacity-70 hover:opacity-100
                filter grayscale hover:grayscale-0
                transition-all duration-300
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
