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

  const handleToggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="relative w-full">
      <ul className={`flex items-center w-full justify-center space-x-6 md:space-x-10 font-light ${isLight ? 'text-white' : 'text-black'}`}>
        <DesktopDropdown
          title="Productos"
          items={dropdownData.productos}
          isActive={activeDropdown === 'productos'}
          onToggle={() => handleToggleDropdown('productos')}
          variant="detailed"
          imageSrc="/images/products/aurall.jpg"
        />

        <DesktopDropdown
          title="Soluciones"
          items={dropdownData.soluciones}
          isActive={activeDropdown === 'soluciones'}
          onToggle={() => handleToggleDropdown('soluciones')}
          imageSrc="/logos/aurall-cloud.png"
        />

        <DesktopDropdown
          title="Recursos"
          items={dropdownData.recursos}
          isActive={activeDropdown === 'recursos'}
          onToggle={() => handleToggleDropdown('recursos')}
          imageSrc="/logos/aurall-logo-solo-black.png"
        />

        <DesktopDropdown
          title="Empresa"
          items={dropdownData.empresa}
          isActive={activeDropdown === 'empresa'}
          onToggle={() => handleToggleDropdown('empresa')}
          imageSrc="/images/about-us/team.jpg"
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