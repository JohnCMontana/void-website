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
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 py-1 w-full z-50 transition-colors duration-300 text-sm ${
        isAtTop
          ? "bg-transparent border-transparent text-white"
          : "bg-white/80 backdrop-blur-sm backdrop-saturate-150 border-b border-black/15 text-black"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-2">
        {/* Logo */}
        <NavbarLogo isLight={isAtTop} />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
          <NavbarLinks isLight={isAtTop} />
        </div>

        {/* Actions (right side) */}
        <div className="hidden md:flex items-center gap-4">
          <NavbarActions isAtTop={isAtTop} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded transition-colors ${
            isAtTop ? "hover:bg-white/10" : "hover:bg-black/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <NavbarMobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
