import Link from "next/link";
import React, { ReactNode } from "react";

interface Card1Props {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  bgImage?: string;
  className?: string;
}

const Card1: React.FC<Card1Props> = ({
  title,
  description,
  href,
  bgImage,
  className,
}) => (
  <div
    className={`relative group flex flex-col justify-end
               overflow-hidden
               bg-gray-900/80 text-white
               shadow-lg hover:shadow-2xl
               transition-all duration-500
               hover:-translate-y-1 ${className || ""}`}
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Base overlay for readability */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Gradient overlay */}
    <div
      className="absolute inset-0 bg-black/60
                 transition-all duration-500"
    ></div>

    {/* Content */}
    <div className="relative z-10 px-8 py-15">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-200 mb-5 leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="inline-block text-sm font-semibold text-white/90
                   group-hover:text-white underline-offset-4 hover:underline"
      >
        Más info →
      </Link>
    </div>
  </div>
);

export default Card1;
