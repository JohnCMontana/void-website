// components/Buttons/ButtonVideo.tsx
"use client";
import Link from "next/link";
import React from "react";

interface ButtonVideoProps {
  href: string;
  label?: string; // dynamic label
  className?: string;
}

const ButtonVideo = ({
  href,
  label,
  className = "",
}: ButtonVideoProps) => {
  return (
    <Link href={href}>
      <span
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-none
          font-light cursor-pointer transition-all
          bg-white/60 text-black shadow-md
          hover:shadow-lg hover:scale-105
          transform
          ${className}
        `}
        aria-label={label}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        {label}
      </span>
    </Link>
  );
};

export default ButtonVideo;
