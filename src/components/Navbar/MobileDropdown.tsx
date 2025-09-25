import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface MobileDropdownProps {
  title: string;
  items: DropdownItem[];
  isExpanded: boolean;
  onToggle: () => void;
  variant?: 'default' | 'detailed';
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  title,
  items,
  isExpanded,
  onToggle,
  variant = 'default'
}) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-2 hover:text-gray-600 transition-colors"
      >
        {title}
        <HiChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
          {items.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="block py-2 text-sm hover:text-gray-600 transition-colors"
            >
              {variant === 'detailed' ? (
                <>
                  <div className="font-medium">{item.name}</div>
                  {item.description && <div className="text-xs text-gray-500">{item.description}</div>}
                </>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;