"use client";
import Link from "next/link";
import React from "react";

interface ButtonWhiteProps {
  href: string;
  className?: string;
  inverted?: boolean;
  children?: React.ReactNode;
}

const ButtonWhite = ({
  href,
  children = "Más información",
  className = "",
  inverted = false,
}: ButtonWhiteProps) => (
  <Link
    href={href}
    className={`inline-flex items-center gap-2 px-4 py-2 font-light transition-all cursor-pointer ${
      inverted
        ? "border border-white text-white hover:bg-white hover:text-black"
        : "border border-black text-black hover:bg-[#d73032] hover:border-[#d73032] hover:text-white"
    } ${className}`}
  >
    {children}
  </Link>
);

export default ButtonWhite;
