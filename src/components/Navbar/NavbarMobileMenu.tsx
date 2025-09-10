import Link from "next/link";
import { HiOutlineTranslate } from "react-icons/hi";
import ButtonWhite from "../Buttons/ButtonWhite";

const NavbarMobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-2 bg-white rounded shadow-lg p-4 flex flex-col space-y-2 font-light">
      <Link href="/productos">Productos</Link>
      <Link href="/soluciones">Soluciones</Link>
      <Link href="/recursos">Recursos</Link>
      <Link href="/empresa">Empresa</Link>
      <button aria-label="Change language" className="p-2 rounded hover:bg-black/10 transition flex items-center gap-2">
        <HiOutlineTranslate className="w-5 h-5" /> Idioma
      </button>
      <ButtonWhite href="/contacto">Solicita Información</ButtonWhite>
    </div>
  );
};

export default NavbarMobileMenu;
