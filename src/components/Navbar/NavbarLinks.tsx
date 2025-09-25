import Link from "next/link";
import { HiOutlineTranslate } from "react-icons/hi";
import { useState } from "react";
import DesktopDropdown from "@/components/Navbar/DesktopDropdown";
import { dropdownData } from "./DropdownData";

interface NavbarLinksProps {
  isLight?: boolean;
} 

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isLight = false }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <ul className={`hidden md:flex items-center space-x-6 md:space-x-10 font-light ${isLight ? 'text-white' : 'text-black'}`}>
      <li><Link href="/" className="hover:underline">Inicio</Link></li>
      
      <DesktopDropdown
        title="Productos"
        items={dropdownData.productos}
        isActive={activeDropdown === 'productos'}
        onMouseEnter={() => handleMouseEnter('productos')}
        onMouseLeave={handleMouseLeave}
        variant="detailed"
      />

      <DesktopDropdown
        title="Soluciones"
        items={dropdownData.soluciones}
        isActive={activeDropdown === 'soluciones'}
        onMouseEnter={() => handleMouseEnter('soluciones')}
        onMouseLeave={handleMouseLeave}
      />

      <DesktopDropdown
        title="Recursos"
        items={dropdownData.recursos}
        isActive={activeDropdown === 'recursos'}
        onMouseEnter={() => handleMouseEnter('recursos')}
        onMouseLeave={handleMouseLeave}
      />

      <DesktopDropdown
        title="Empresa"
        items={dropdownData.empresa}
        isActive={activeDropdown === 'empresa'}
        onMouseEnter={() => handleMouseEnter('empresa')}
        onMouseLeave={handleMouseLeave}
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
  );
};

export default NavbarLinks;