import Link from "next/link";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  imageSrc?: string;
}

interface DesktopDropdownProps {
  title: string;
  items: DropdownItem[];
  isActive: boolean;
  onToggle: () => void;
  variant?: "default" | "detailed";
  imageSrc?: string;
  isLight?: boolean;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  title,
  items,
  isActive,
  onToggle,
  variant = "default",
  imageSrc = "/logos/aurall-logo-solo-black.png",
  isLight = false,
}) => {
  return (
    <li className="static">
      <button 
        className="flex items-center gap-1 hover:underline py-2"
        onClick={onToggle}
      >
        {title}
        <HiChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
        />
      </button>

      <div 
        className={`absolute left-0 right-0 top-full shadow-sm z-50 transition-all duration-300 w-full ${
          isLight 
            ? "bg-black/50 backdrop-blur-sm border-gray-700" 
            : "bg-white"
        } ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full py-5">
            {/* Contenido del dropdown - 2 columnas x 3 filas */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded transition-colors py-2 px-3 ${
                      isLight 
                        ? "hover:bg-gray-800 text-white" 
                        : "hover:bg-gray-50 text-black"
                    }`}
                  >
                    {variant === "detailed" ? (
                      <>
                        {/* Rectangular image above title */}
                        {item.imageSrc && (
                          <div className="mb-2">
                            <Image 
                              src={item.imageSrc}
                              alt={item.name}
                              width={200}
                              height={60}
                              className="w-full h-20 object-cover rounded"
                            />
                          </div>
                        )}
                        <div className="font-medium">{item.name}</div>
                        {item.description && (
                          <div className={`text-sm ${
                            isLight ? "text-gray-300" : "text-gray-600"
                          }`}>
                            {item.description}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {/* Rectangular image above title for default variant too */}
                        {item.imageSrc && (
                          <div className="mb-2">
                            <Image 
                              src={item.imageSrc}
                              alt={item.name}
                              width={200}
                              height={60}
                              className="w-full h-12 object-cover rounded"
                            />
                          </div>
                        )}
                        {item.name}
                      </>
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Logo en la esquina inferior derecha */}
              <div className="absolute bottom-4 right-4">
                <Image 
                  src={isLight ? "/logos/aurall-logo-solo-white.png" : "/logos/aurall-logo-solo.png"}
                  alt="Aurall Logo"
                  width={50}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DesktopDropdown;
