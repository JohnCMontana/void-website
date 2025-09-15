import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Card1Props {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  bgImage?: string; // optional background image
}

const Card1: React.FC<Card1Props> = ({ title, description, href, bgImage }) => (
  <div
    className="relative group flex flex-col items-start
               p-6 border border-gray-200
               transition-all duration-300
               w-full max-w-sm
               bg-cover bg-center overflow-hidden
               transform hover:scale-105"
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    }}
  >
    {/* Dark-red overlay */}
    <div className="absolute inset-0 bg-black/70
                    group-hover:bg-[#8b0000]/50
                    transition-colors duration-250
                    pointer-events-none"></div>

    {/* Content */}

    <div className="relative z-10 mt-20">
      <h3 className="text-lg font-semibold mb-2 text-white transition-colors duration-500">{title}</h3>
      <p className="text-white text-sm mb-4 group-hover:text-white transition-colors duration-500">{description}</p>
      <Link
        href={href}
        className="text-white font-semibold hover:underline text-sm"
      >
        Más info →
      </Link>
    </div>
  </div>
);

export default Card1;
