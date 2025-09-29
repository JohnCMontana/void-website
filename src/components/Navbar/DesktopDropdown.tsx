import Link from "next/link";
import Image from "next/image";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  imageSrc?: string;
}

interface DesktopDropdownProps {
  items: DropdownItem[];
  isActive: boolean;
  isLight?: boolean;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  items,
  isActive,
  isLight = false,
}) => {
  return (
    <div
      className={`absolute left-0 right-0 top-full shadow-lg z-50 transition-all duration-300 w-full ${
        isLight
          ? "bg-black/80 backdrop-blur-md border-t border-gray-800 text-white"
          : "bg-white/90 backdrop-blur-md shadow-sm text-black"
      } ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-5">
          <div className="relative">
            <div className="grid grid-cols-3 gap-6">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex flex-col hover:${
                    isLight ? "bg-gray-800/50" : "bg-gray-50"
                  } rounded-lg p-4 transition-colors`}
                >
                  {item.imageSrc && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={400}
                        height={225}
                        className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className={`text-base font-medium ${isLight ? "text-white" : "text-gray-900"}`}>
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className={`mt-1 text-sm ${isLight ? "text-gray-300" : "text-gray-500"}`}>
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDropdown;
