import Link from "next/link";
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  variant?: 'default' | 'detailed';
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  title,
  items,
  isActive,
  onMouseEnter,
  onMouseLeave,
  variant = 'default'
}) => {
  return (
    <li 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-1 hover:underline">
        {title}
        <HiChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      {isActive && (
        <div className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-${variant === 'detailed' ? '4' : '2'} text-black ${variant === 'detailed' ? 'w-72' : 'w-48'}`}>
          {items.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`block rounded hover:bg-gray-50 transition-colors ${variant === 'detailed' ? 'p-3' : 'px-4 py-2'}`}
            >
              {variant === 'detailed' ? (
                <>
                  <div className="font-medium">{item.name}</div>
                  {item.description && <div className="text-sm text-gray-600">{item.description}</div>}
                </>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default DesktopDropdown;