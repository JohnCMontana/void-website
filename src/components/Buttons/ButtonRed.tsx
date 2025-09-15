"use client";
import Link from "next/link";
import React, { useRef, MouseEvent } from "react";

interface ButtonRedProps {
  href: string;
  children?: React.ReactNode;
  isNavbar?: boolean; // true = no hover effect, used in navbar
}

const ButtonRed = ({
  href,
  children = "Más información",
  isNavbar = false,
}: ButtonRedProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isNavbar) return;
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (isNavbar) return;
    const button = buttonRef.current;
    if (!button) return;
    button.style.setProperty("--x", `-999px`);
    button.style.setProperty("--y", `-999px`);
  };

  return (
    <Link
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden inline-flex items-center justify-center px-6 py-2 font-medium transition-transform duration-300 ${
        isNavbar
          ? "text-white bg-transparent border border-white hover:bg-white/10 hover:text-white"
          : "bg-[#d73032] text-white border border-[#d73032] hover:scale-105"
      }`}
      style={
        isNavbar
          ? {}
          : {
              background: `radial-gradient(circle 150px at var(--x, -999px) var(--y, -999px), rgba(0,0,0,0.2), #d73032 80%)`,
            }
      }
    >
      {children}
    </Link>
  );
};

export default ButtonRed;
