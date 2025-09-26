import Link from "next/link";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface DesktopDropdownProps {
  title: string;
  items: DropdownItem[];
  isActive: boolean;
  onToggle: () => void;
  variant?: "default" | "detailed";
  imageSrc?: string;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  title,
  items,
  isActive,
  onToggle,
  variant = "default",
  imageSrc = "/logos/aurall-logo-solo-black.png",
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
        className={`absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 w-full ${
          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-full py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full">
            {/* Imagen del lado izquierdo */}
            <div className="w-1/4 pr-6 flex items-center justify-center">
              <div className="relative w-full aspect-square max-h-48">
                <Image 
                  src={imageSrc} 
                  alt={`${title} imagen`}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Contenido del dropdown - 2 columnas x 3 filas */}
            <div className="w-3/4 grid grid-cols-2 gap-x-6 gap-y-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded hover:bg-gray-50 transition-colors py-2 px-3"
                >
                  {variant === "detailed" ? (
                    <>
                      <div className="font-medium">{item.name}</div>
                      {item.description && (
                        <div className="text-sm text-gray-600">
                          {item.description}
                        </div>
                      )}
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DesktopDropdown;
