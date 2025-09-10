"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import NavbarMobileMenu from "./NavbarMobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors ${isAtTop ? 'bg-transparent border-transparent text-white' : 'bg-white/70 backdrop-blur-sm backdrop-saturate-150 border-b border-black/10 text-black'}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto p-2">
        {/* Left: Logo */}
        <NavbarLogo isLight={isAtTop} />

        {/* Center: Links */}
        <NavbarLinks isLight={isAtTop} />
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <NavbarActions isLight={isAtTop} />
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`md:hidden p-1.5 rounded transition ${isAtTop ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <NavbarMobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
