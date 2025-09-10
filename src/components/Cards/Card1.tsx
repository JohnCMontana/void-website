import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Card1Props {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  bgImage?: string; // optional background image
}

const Card1: React.FC<Card1Props> = ({ title, description, href, icon, bgImage }) => (
  <div
    className={`flex flex-col items-start p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 w-full max-w-sm bg-cover bg-center`}
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    }}
  >
    <div className="w-12 h-12 mb-4 text-blue-600">{icon}</div>

    {/* Push text to bottom */}
    <div className="mt-auto">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <Link
        href={href}
        className="text-[#d73032] font-semibold hover:underline text-sm"
      >
        Más info →
      </Link>
    </div>
  </div>
);

export default Card1;
