import Link from "next/link";
import { HiOutlineTranslate } from "react-icons/hi";

interface NavbarLinksProps {
  isLight?: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isLight = false }) => (
  <ul className={`hidden md:flex items-center space-x-6 md:space-x-10 font-light ${isLight ? 'text-white' : 'text-black'}`}>
    <li className="hover:underline"><Link href="/productos">Productos</Link></li>
    <li className="hover:underline"><Link href="/soluciones">Soluciones</Link></li>
    <li className="hover:underline"><Link href="/recursos">Recursos</Link></li>
    <li className="hover:underline"><Link href="/empresa">Empresa</Link></li>
    <li>
      <button
        aria-label="Change language"
        className={`p-2 rounded transition ${isLight ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
      >
        <HiOutlineTranslate className="w-5 h-5" />
      </button>
    </li>
  </ul>
);

export default NavbarLinks;
