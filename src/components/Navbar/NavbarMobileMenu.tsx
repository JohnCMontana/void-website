import Link from "next/link";
import { HiOutlineTranslate } from "react-icons/hi";
import ButtonWhite from "../Buttons/ButtonWhite";
import { useState } from "react";
import MobileDropdown from "./MobileDropdown";
import { dropdownData } from "./DropdownData";

const NavbarMobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="md:hidden mt-2 bg-white rounded shadow-lg p-4 flex flex-col space-y-2 font-light">
      <Link href="/" className="py-2 hover:text-gray-600 transition-colors">Inicio</Link>
      
      <MobileDropdown
        title="Productos"
        items={dropdownData.productos}
        isExpanded={expandedSection === 'productos'}
        onToggle={() => toggleSection('productos')}
        variant="detailed"
      />

      <MobileDropdown
        title="Soluciones"
        items={dropdownData.soluciones}
        isExpanded={expandedSection === 'soluciones'}
        onToggle={() => toggleSection('soluciones')}
      />

      <MobileDropdown
        title="Recursos"
        items={dropdownData.recursos}
        isExpanded={expandedSection === 'recursos'}
        onToggle={() => toggleSection('recursos')}
      />

      <MobileDropdown
        title="Empresa"
        items={dropdownData.empresa}
        isExpanded={expandedSection === 'empresa'}
        onToggle={() => toggleSection('empresa')}
      />

      <button
        aria-label="Change language"
        className="p-2 rounded hover:bg-black/10 transition flex items-center gap-2"
      >
        <HiOutlineTranslate className="w-5 h-5" />
        Idioma
      </button>
      
      <ButtonWhite href="/contacto">Solicita Información</ButtonWhite>
    </div>
  );
};

export default NavbarMobileMenu;