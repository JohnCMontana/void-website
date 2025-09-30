import Link from "next/link";
import { HiOutlineTranslate } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import DesktopDropdown from "@/components/Navbar/DesktopDropdown";
import { dropdownData } from "./DropdownData";

interface NavbarLinksProps {
  isLight?: boolean;
} 

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isLight = false }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={navRef}>
      <ul className={`flex items-center w-full justify-center space-x-6 md:space-x-10 font-light ${isLight ? 'text-white' : 'text-black'}`}>
        <DesktopDropdown
          title="Productos"
          items={dropdownData.productos}
          isActive={activeDropdown === 'productos'}
          onToggle={() => handleToggleDropdown('productos')}
          variant="detailed"
          isLight={isLight}
        />

        <DesktopDropdown
          title="Soluciones"
          items={dropdownData.soluciones}
          isActive={activeDropdown === 'soluciones'}
          onToggle={() => handleToggleDropdown('soluciones')}
          variant="detailed"
          isLight={isLight}
        />

        <DesktopDropdown
          title="Recursos"
          items={dropdownData.recursos}
          isActive={activeDropdown === 'recursos'}
          onToggle={() => handleToggleDropdown('recursos')}
          variant="detailed"
          isLight={isLight}
        />

        <DesktopDropdown
          title="Empresa"
          items={dropdownData.empresa}
          isActive={activeDropdown === 'empresa'}
          onToggle={() => handleToggleDropdown('empresa')}
          variant="detailed"
          isLight={isLight}
        />

        <li>
          <button
            aria-label="Change language"
            className={`p-2 rounded transition ${
              isLight ? 'hover:bg-white/10' : 'hover:bg-black/10'
            }`}
          >
            <HiOutlineTranslate className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;