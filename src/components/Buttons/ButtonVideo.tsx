"use client";
import Link from "next/link";
import React from "react";

interface ButtonVideoProps {
  href: string;
  label?: string;
  className?: string;
}

const ButtonVideo = ({ href, label = "Descubre en acción", className = "" }: ButtonVideoProps) => (
  <Link href={href}>
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-none
        border-2 border-transparent
        font-light
        transition-all cursor-pointer inline-block
        bg-white
        ${className}
        relative
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        color: 'black',
        boxShadow: '0 4px 24px 0 rgba(30, 41, 59, 0.25)',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px 0 rgba(30, 41, 59, 0.35)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px 0 rgba(30, 41, 59, 0.25)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
      aria-label={label}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
      {label}
    </span>
  </Link>
);

export default ButtonVideo;
