import ButtonWhite from "../Buttons/ButtonWhite";

interface NavbarActionsProps { isLight?: boolean }

const NavbarActions: React.FC<NavbarActionsProps> = ({ isLight = false }) => (
  <div className="hidden md:block">
    <ButtonWhite href="/contacto" inverted={isLight}>Solicita Información</ButtonWhite>
  </div>
);

export default NavbarActions;
