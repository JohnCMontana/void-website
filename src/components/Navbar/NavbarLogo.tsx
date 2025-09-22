import Link from "next/link";

interface NavbarLogoProps { isLight?: boolean }

const NavbarLogo: React.FC<NavbarLogoProps> = ({ isLight = false }) => (
  <Link href="/">
    <div className="h-8 w-auto items-center relative cursor-pointer">
      <img
        src={isLight ? "/logos/aurall-logo-solo-white.png" : "/logos/aurall-logo-solo.png"}
        alt="Aurall Logo"
        className="h-8 w-auto"
      />
    </div>
  </Link>
);

export default NavbarLogo;
