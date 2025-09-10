"use client";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonGradient = ({ href, children, className = "" }: ButtonProps) => (
  <Link href={href} className={`inline-block ${className}`}>
    <span
      className="relative inline-block font-bold p-[1px] transition-transform duration-200 hover:scale-105"
      style={{
        border: '1px solid transparent',
        borderImage: 'linear-gradient(to right,rgb(233, 76, 78),rgb(74, 120, 235)) 1',
        boxShadow: '0 0 20px rgba(233, 76, 78, 0.3), 0 0 20px rgba(74, 120, 235, 0.3)'
      }}
    >
      <span
        className="block rounded-none px-4 py-2"
        style={{
          background: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <span
          className="bg-clip-text text-transparent"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, rgb(233, 76, 78), rgb(74, 120, 235))',
            filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.45)) drop-shadow(0 0 10px rgba(233, 76, 78, 0.3))'
          }}
        >
          {children}
        </span>
      </span>
    </span>
  </Link>
);

export default ButtonGradient;
